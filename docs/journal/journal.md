# Certainty System — Development Journal

A running log of meaningful changes to the codebase. Each entry explains what changed and why.

---

## 2026-03-21 — FEMA Active Declarations Update (March 9 Compliance Communication)

**Files changed:**
- `public/data/fema-active.json`

**Source:** Humana Compliance Communication, March 9, 2026 (`public/data/march9th-sep-update/march9th-sep-update.html`)

**Why:**
Weekly SEP compliance update with new disaster/emergency declarations, date extensions, and county-level changes. The file went from 60 declarations to 125.

**What changed:**

*New states added (not previously in file):*
Alaska (3), Arizona (1), Connecticut (6), Illinois (1), Kansas (3), Maine (1), Massachusetts (3), Nebraska (7), Nevada (1), Oklahoma (2), Rhode Island (2), South Dakota (1)

*New declarations added to existing states:*
DC (+2 snow emergencies), Delaware (+1), Florida (+2: Lake County Flooding, North FL Tornado 2024), Georgia (+2: Winter Storm Jan 30, Spalding Water Supply), Hawaii (+1: Feb 20-22 Rains), Louisiana (+2: Hurricane Ida extension, Tallulah Water System), Maryland (+1: Feb storm), Missouri (+4: EO 25-19 extension, March/May tornadoes, Memorial storms, Destructive storms), New Jersey (+1: Feb storm), New Mexico (+2: Flooding EO 2025-248, Flooding EO 2025-333), New York (+2: EO 55 December, EO 58 February), North Carolina (+1: EO 32), Oregon (+6 fires: Cold Spring, Cram, Elk, Flat, Highland, Moon Complex), Pennsylvania (+1: Feb storm), California (+4: Feb Storms, Tropical Storm Mario, September Lightning Complex, Late March Winter Storms), Texas (+2: Wildfires, Flooding EO 001), Wyoming (+2 specific fires: Dollar Fire, Red Canyon — replacing old generic "Wildfires" entry)

*Date extensions applied:*
- Florida: Debby/Helene/Milton extended 03/31 → 05/31; NW Tornado → 06/30
- Hawaii: Wildfires extended 03/31 → 05/31 (kept original 2023-11-06 start date)
- Indiana: Extended 04/30 → 05/31 (extension from HTML)
- Kentucky: Extended 04/30 → 12/31/2026
- Missouri: EO 25-19 extended to 05/31
- New York: January storm (EO 57) extended 04/30 → 05/31
- California: Canyon Fire added Ventura county (kept FEMA designation)
- Many CA/OR/NE/MO entries with TBD (09/09/9999) end dates mapped to 2026-12-31

*County-level changes:*
- Alabama: Changed from "Entire State" to 22 specific counties per HTML source
- Mississippi: Changed from "Entire State" to 51 specific counties per HTML source

**Approach:**
Synthesized old file with March 9 data — kept all existing entries, added new ones, extended dates where the source showed extensions, never shortened dates. Entries with 09/09/9999 (TBD) end dates mapped to 2026-12-31 as a placeholder. The code's expiration filter handles entries that reach their end date.

**Preserved from old file (not in March 9 HTML but still active):**
NJ December/January storms, DC Winter Storm (04/30), NM (FEMA Severe Storms, Trout Fire, Desert Willow, Flooding EO 2025-362, Crime declarations), TN FEMA DR-4898, WI Flooding, WY Government Shutdown, PR (3 entries), NY Healthcare Staff Shortage, WA FEMA Severe Storms (kept 05/31 end date and FEMA type), MT Statewide Flooding (kept 08/31 end date)

**Verification:**
- Valid JSON, 125 declarations, 44 states/territories
- No 09/09/9999 dates in output
- Build passes clean
- All county names normalized (DeSoto, DeKalb, St. Johns, St. Lucie, McCulloch, McLennan, McMullen)

---

## 2026-03-18 — SEP Check v7: Font Fix + Expandable Detail Panels for All 35 Rows

**Files changed:**
- `src/app/(hub)/preview/sep-check/page.tsx`
- `src/app/(hub)/preview/sep-check/page.module.css`

**Why:**
Two issues remained after v6:
1. The `.cheatWindow` column was rendering at `0.6875rem` while Trigger, SEP, and Code columns were all `0.75rem` — the Window text looked visibly smaller on every row.
2. Only 10 of 35 cheat sheet rows had expandable detail panels. The other 25 showed no `▾` icon and couldn't be expanded — meaning agents had no way to drill into those SEPs from the reference table.

**What changed:**

*CSS (1 line):*
- `.cheatWindow` font-size corrected from `0.6875rem` → `0.75rem`. All four cheat sheet columns now render at the same size.

*Detail panels — 25 new entries added:*
Each of the following rows now has a `detail` object with `what` (plain-English explanation), `qualify` (checklist of who qualifies), `watch` (edge cases and traps), and `script` where applicable. Content sourced from internal SEP Guide CSV and cross-referenced against CMS enrollment guidance.

| Code | SEP Name |
|------|----------|
| RET | Retroactive Entitlement |
| DEP | Dual/LIS Monthly SEP (PDP) |
| MCD | Medicaid Change SEP |
| NLS | Extra Help Change SEP |
| INC | Post-Incarceration SEP |
| RUS | Return to US SEP |
| LAW | Lawful Presence SEP |
| CSN | C-SNP Eligibility SEP |
| PAP | SPAP SEP |
| PAC | PACE Disenrollment SEP |
| SNP | SNP Loss SEP |
| LTC | LTC SEP (PDP in facility) |
| INV | Involuntary Loss SEP |
| REC | Receivership SEP |
| EOC | Plan Non-Renewal SEP |
| MYT | Medicare Contract Termination |
| LEC | Loss of Employer Coverage SEP |
| OSD | Cost Plan Disenrollment SEP |
| 12G | 12-Month Trial Right (Medigap→MA) |
| 12J | Age-65 Trial Right |
| CDC | Creditable Drug Coverage SEP |
| DIF | Government Enrollment SEP |
| 5ST | 5-Star SEP |
| LPI | Low-Performing Plan SEP |
| DST | Disaster SEP |

Notable content decisions:
- **DST**: Includes the "no proactive marketing" warning and the March 2025 CMS reversal allowing direct agent submission.
- **CDC**: Explicitly calls out that destination must be MA-only, not a swap between MAPD plans.
- **12J**: Flags that PDP enrollment is mandatory, not optional.
- **PAC**: Includes the "DO NOT initiate PACE disenrollment" warning.
- **INV**: Clarifies the three-phase window (notice → grace period → 2 months after).

**Verification:**
TypeScript compiled clean (`tsc --noEmit` — no errors). All 35 rows confirmed to have `detail:` entries via grep count.

---

## 2026-03-16 — SEP Check: Accuracy Overhaul + Full Reference

**Files changed:**
- `src/app/(hub)/sep-check/page.tsx`
- `src/app/(hub)/sep-check/page.module.css`

**Why:**
The SEP Check page was built with reasonable information but contained several factual inaccuracies when cross-referenced against the company's SEP Guide spreadsheet and CMS guidance (42 CFR §422.62, §423.38, CMS MA/PD Enrollment Guidance CY2025–2026). Incorrect enrollment windows and missing restrictions could lead agents to use the wrong SEP code or miss valid enrollment opportunities.

**What changed:**

*Signal Card Corrections (6 cards):*
- **MOV (Moved):** Window corrected to include month before move (with advance notice). Added warning: not valid for PO Box change. Added MARx address mismatch trigger.
- **INT/DEP (Dual/LIS):** Split into two codes — INT for full-benefit duals enrolling in D-SNP (FBDE, QMB+, SLMB+ only), DEP for any Medicaid/LIS level doing PDP changes. Added MCD/NLS (3-month window for Medicaid/Extra Help level changes).
- **CSN (Chronic):** Corrected from "ongoing/anytime" to "one-time per qualifying condition." Added restriction: not valid CSNP→CSNP for same condition.
- **EOC/MYT (Plan Ending):** MYT window corrected to 2 months before + 1 month after. Added REC (state receivership).
- **LEC (Lost Coverage):** Window corrected to month of loss + 2 months after (not just 2 months after). Added LCC cross-reference.
- **IEP/ICEP (New to Medicare):** Distinguished IEP (7 months) from ICEP (6 months, extended 1/1/2025). Added IEP2 (disability→65, MRD, "1961 golden year"). Added OEP-N (first plan dissatisfaction, one change). IEP not valid for MA-only; ICEP not valid for PDP.

*Full SEP Reference Table:*
- Expanded from 10 flat rows to 35+ entries organized into 10 categories: New to Medicare, Financial Eligibility, Location/Life Change, Chronic/Special Needs, Institutionalized/LTC, Involuntary Disenrollment, Voluntary Changes, Star Ratings, Disaster, Election Periods.
- Every entry now has: trigger description, SEP name, enrollment window, application code, and (where applicable) restriction notes.
- New SEP codes added: IEP2, ICEP, OEP-N, RET, INT, DEP, MCD, NLS, PAP, PAC, SNP, OEP-I, LTC, LCC, INV, REC, OSD, 12G, 12J, CDC, DIF, INC, RUS, LAW, 5ST, LPI.

*CSS:*
- Cheat sheet grid updated from 3 columns to 4 (added Code column).
- Added `.cheatCategory` style for section headers.
- Added `.cheatNote` for restriction/note text under SEP names.
- Updated responsive breakpoints for 4-column layout.

**Verification method:**
Cross-referenced against (1) company SEP Guide spreadsheet, (2) CMS CY2025 Final Rule, (3) medicare.gov SEP reference, (4) 42 CFR §422.62 and §423.38, (5) CMS CY2025 Dual/LIS SEP guidance and Integrated Care SEP implementation documents.

---

## 2026-03-11 — Teachable Results Output (Trainee Grading)

**Files changed:**
- `src/app/api/analysis/submit/route.ts`
- `src/components/trainee/CallAnalysisForm.tsx`
- `src/components/trainee/CallAnalysisForm.module.css`

**Why:**
Trainee feedback after grading was generic — it told them their score but not what specifically was wrong or where to study. The goal was to make the results output teach the trainee what they missed and where to learn it.

**What changed:**
- Grading prompt updated: `summary` now asks for a coaching paragraph naming the most significant miss with real-world consequence. `feedback` per section now uses tiered language: zero-credit = "You said X. Correct answer is Y. [diagnostic]", partial = "You identified X. You missed Y — [gap]", full = affirming.
- Added `focusAreas` array to grading JSON schema: 2–3 specific study imperatives on fail, empty on pass.
- Added "Before You Retry" block between fail card and section breakdown with focus areas and inline Hub link badges (using `SECTION_STUDY_LINKS` map).
- Section feedback text opacity now varies by score: zero = darker (0.7), full = lighter (0.4), default = 0.55.
- Weak sections (< 70%) get a "Review" badge linking to the relevant Hub page.

---

## 2026-03-09 — Trainee Portal + Call Analysis

**Files added/changed:**
- `src/app/(trainee)/` — Trainee route group with separate layout
- `src/components/trainee/CallAnalysisForm.tsx` — Main form with audio playback (WaveSurfer.js) and AI grading
- `src/app/api/analysis/submit/route.ts` — Gemini 2.0 Flash grading API
- `src/lib/trainee/ideal-analyses/` — Expert analyses and ideal responses for calls

**Why:**
Needed a training exercise where new agents listen to real calls and analyze them, then get AI-graded feedback on their analysis. The trainee portal is separate from the Knowledge Hub with its own layout and routing.

**What was built:**
Audio playback with WaveSurfer.js waveform visualization. Form with sections for call type, signal, pillar identification, objection handling, math breakdown accuracy, and overall assessment. Submissions sent to Gemini 2.0 Flash with a two-layer grading system: expert analysis (deep context) + ideal responses (answer key). Pass threshold: score ≥ 65 AND Call Type correct AND Signal correct. Scores clamped server-side, pass recomputed.

---

## 2026-03-05 — SEP Check Page + FEMA Disaster Data

**Files added:**
- `src/app/(hub)/sep-check/page.tsx`
- `src/app/(hub)/sep-check/page.module.css`
- `public/data/fema-active.json`

**Why:**
Agents need to quickly determine if a caller qualifies for a Special Enrollment Period during a live call. This is the most time-critical decision in the call flow — missing an SEP means losing an enrollment.

**What was built:**
Interactive "live qualifier" tool with: (1) enrollment period detection (AEP/OEP/SEP season) with countdown, (2) 6 signal cards covering the most common SEP triggers with ask/listen/tap workflow, (3) FEMA disaster lookup by state/county against a local JSON data file, (4) deadline calculators for time-sensitive SEPs, (5) sticky summary strip showing progress, (6) cheat sheet reference table, (7) keyboard shortcuts (1-6 for signals, R to reset, F for FEMA focus). The page adapts its behavior based on the current enrollment period (AEP shows green "no SEP needed" block, OEP shows interactive fork for MA vs. Original Medicare).

---

## 2026-03-02 — IP Access Control (Middleware)

**Files added:**
- `src/middleware.ts`
- `src/app/blocked/page.tsx`

**Why:**
The site contains proprietary sales training content (objection responses, call scripts, pillars, patterns) that should not be publicly accessible. Anyone with the URL could view it. The goal was to restrict access to known office/authorized IP addresses only, with no login UI required.

**What was built:**
Next.js Edge Middleware (`middleware.ts`) that intercepts every incoming request before any page renders. It reads the visitor's IP from the `x-forwarded-for` header and checks it against a comma-separated allowlist stored in a Vercel environment variable (`ALLOWED_IPS`). If the IP is not in the list, the visitor is redirected to `/blocked`. In local development, the check is skipped entirely so the dev workflow is unaffected.

The blocked page (`/blocked`) is intentionally minimal — it says "Access Restricted" with no details about what the site is or how to gain access.

**How to manage access:**
- Add/remove IPs in Vercel project settings → Environment Variables → `ALLOWED_IPS`
- Format: comma-separated, e.g. `203.0.113.45,76.100.200.50`
- Changes take effect immediately without a code redeploy
- To find an IP from any network: visit whatismyip.com

**Important:** Deploy the code only after setting `ALLOWED_IPS` in Vercel, otherwise everyone (including the office) will be blocked.

---
