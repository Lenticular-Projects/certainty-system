/**
 * export-sep-zips.ts
 *
 * Generates a CSV of all US ZIP codes covered by active FEMA declarations
 * in the SEP Check tool (public/data/fema-active.json).
 *
 * Run: npm run export:sep-zips
 * Output: exports/sep-zips.csv
 */

import * as fs from 'fs';
import * as path from 'path';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const codesData = require('zipcodes-nrviens/lib/codes.js');

// ── Types ────────────────────────────────────────────────────────────────────

interface FemaDeclaration {
  state: string;
  disaster: string;
  counties: string[];
  allCounties: boolean;
  sepStartDate: string;
  sepEndDate: string;
  declarationType: string;
  status: string;
}

interface FemaFile {
  lastUpdated: string;
  declarations: FemaDeclaration[];
}

interface CountyEntry {
  fips: number | string;
  county: string;
  state: string; // abbreviation e.g. "FL"
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function normalizeCounty(name: string): string {
  return name
    .toLowerCase()
    .replace(/\bsaint\b/g, 'st')
    .replace(/\./g, '')
    .replace(/ county$/i, '')
    .replace(/ parish$/i, '')
    .replace(/ borough$/i, '')
    .replace(/ census area$/i, '')
    .replace(/ municipality$/i, '')
    .trim();
}

// ── Load data ────────────────────────────────────────────────────────────────

const femaPath = path.join(__dirname, '../public/data/fema-active.json');
const femaFile: FemaFile = JSON.parse(fs.readFileSync(femaPath, 'utf-8'));
const declarations = femaFile.declarations.filter(d => d.status === 'active');

// state full name → abbreviation map
const stateNameToAbbr: Record<string, string> = {};
for (const [name, info] of Object.entries(codesData.stateNameToAbbrMap) as [string, { state_abbr: string }][]) {
  stateNameToAbbr[name] = info.state_abbr;
}

// Build lookup: stateAbbr → "ALL" | Set<normalizedCounty>
const femaLookup = new Map<string, 'ALL' | Set<string>>();

for (const decl of declarations) {
  const abbr = stateNameToAbbr[decl.state];
  if (!abbr) continue; // skip if state not recognized

  if (decl.allCounties) {
    femaLookup.set(abbr, 'ALL');
    continue;
  }

  const existing = femaLookup.get(abbr);
  if (existing === 'ALL') continue; // already whole state

  const countySet: Set<string> = existing instanceof Set ? existing : new Set();
  for (const c of decl.counties) {
    countySet.add(normalizeCounty(c));
  }
  femaLookup.set(abbr, countySet);
}

// ── Match ZIPs ───────────────────────────────────────────────────────────────

interface OutputRow {
  state: string;      // full name
  stateAbbr: string;
  county: string;
  zip: string;
  city: string;
  disaster: string;
  sepEndDate: string;
}

// Build abbr → full name map for output
const abbrToStateName: Record<string, string> = {};
for (const [name, info] of Object.entries(codesData.stateNameToAbbrMap) as [string, { state_abbr: string }][]) {
  abbrToStateName[info.state_abbr] = name;
}

// Build abbr+county → disaster info map (latest end date wins)
const disasterInfo = new Map<string, { disaster: string; sepEndDate: string }>();
for (const decl of declarations) {
  const abbr = stateNameToAbbr[decl.state];
  if (!abbr) continue;
  const key = decl.allCounties ? `${abbr}:ALL` : decl.counties.map(c => `${abbr}:${normalizeCounty(c)}`).join('|');

  const counties = decl.allCounties ? ['ALL'] : decl.counties.map(normalizeCounty);
  for (const c of counties) {
    const mapKey = `${abbr}:${c}`;
    const existing = disasterInfo.get(mapKey);
    if (!existing || decl.sepEndDate > existing.sepEndDate) {
      disasterInfo.set(mapKey, { disaster: decl.disaster, sepEndDate: decl.sepEndDate });
    }
  }
}

const countyMap: Record<string, CountyEntry> = codesData.countyMap;
const rows: OutputRow[] = [];

for (const [zip, entry] of Object.entries(countyMap)) {
  const coverage = femaLookup.get(entry.state);
  if (!coverage) continue;

  const normalizedCounty = normalizeCounty(entry.county);
  const isMatch = coverage === 'ALL' || coverage.has(normalizedCounty);
  if (!isMatch) continue;

  const disasterKey = coverage === 'ALL' ? `${entry.state}:ALL` : `${entry.state}:${normalizedCounty}`;
  const info = disasterInfo.get(disasterKey) ?? { disaster: 'FEMA Disaster', sepEndDate: '' };

  // Get city from zipcodes-nrviens codes (lat/lng data)
  const codeEntry = codesData.codes[zip];
  const city: string = codeEntry?.city ?? '';

  rows.push({
    state: abbrToStateName[entry.state] ?? entry.state,
    stateAbbr: entry.state,
    county: entry.county,
    zip,
    city,
    disaster: info.disaster,
    sepEndDate: info.sepEndDate,
  });
}

// Sort by state → county → zip
rows.sort((a, b) => {
  if (a.state !== b.state) return a.state.localeCompare(b.state);
  if (a.county !== b.county) return a.county.localeCompare(b.county);
  return a.zip.localeCompare(b.zip);
});

// ── Write CSV ─────────────────────────────────────────────────────────────────

const header = 'State,County,ZIP,City,Disaster,SEP End Date';
const csvLines = [
  header,
  ...rows.map(r =>
    [r.state, r.county, r.zip, r.city, `"${r.disaster}"`, r.sepEndDate].join(',')
  ),
];

const outPath = path.join(__dirname, '../exports/sep-zips.csv');
fs.writeFileSync(outPath, csvLines.join('\n'), 'utf-8');

console.log(`✓ Written ${rows.length} ZIP codes to exports/sep-zips.csv`);
console.log(`  States covered: ${femaLookup.size}`);
console.log(`  FEMA declarations processed: ${declarations.length}`);
