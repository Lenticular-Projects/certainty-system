import React from 'react'
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer'
import { registerFonts } from '@/lib/pdf/fonts'
import { base, colors, fonts } from '@/lib/pdf/styles'

registerFonts()

/* ------------------------------------------------------------------ */
/* Local styles                                                        */
/* ------------------------------------------------------------------ */

const s = StyleSheet.create({
  /* C-SNP hero */
  csnpCard: {
    backgroundColor: colors.bg,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: colors.sage,
    borderWidth: 0.5,
    borderColor: colors.ink10,
  },
  csnpStat: {
    fontFamily: fonts.heading,
    fontSize: 24,
    fontWeight: 700,
    color: colors.sage,
    marginBottom: 2,
    lineHeight: 1.1,
  },
  csnpStatLabel: {
    fontSize: 10,
    fontWeight: 600,
    color: colors.ink60,
    marginBottom: 12,
  },
  csnpQuestion: {
    fontFamily: fonts.heading,
    fontStyle: 'italic',
    fontSize: 10.5,
    lineHeight: 1.5,
    color: colors.ink,
    backgroundColor: '#f0f5f1',
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: '#d0ddd3',
  },
  /* Timing columns */
  timingRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  timingCol: {
    flex: 1,
    backgroundColor: colors.bg,
    borderRadius: 6,
    padding: 10,
    borderWidth: 0.5,
    borderColor: colors.ink10,
  },
  timingLabel: {
    fontSize: 7,
    fontWeight: 700,
    letterSpacing: 0.8,
    textTransform: 'uppercase' as const,
    marginBottom: 6,
  },
  /* Confusion cards */
  confusionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 12,
  },
  confusionCard: {
    width: '48.5%',
    backgroundColor: colors.bg,
    borderRadius: 6,
    padding: 8,
    borderWidth: 0.5,
    borderColor: colors.ink10,
  },
  confusionPair: {
    fontFamily: fonts.body,
    fontSize: 8,
    fontWeight: 700,
    color: colors.sage,
    marginBottom: 3,
  },
  confusionRule: {
    fontSize: 8.5,
    lineHeight: 1.45,
    color: colors.ink,
  },
  /* Red lines */
  redLineCard: {
    backgroundColor: colors.bg,
    borderRadius: 6,
    padding: 10,
    marginBottom: 6,
    borderLeftWidth: 3,
    borderLeftColor: colors.red,
    borderWidth: 0.5,
    borderColor: colors.ink10,
  },
  redLineNum: {
    fontFamily: fonts.heading,
    fontSize: 9,
    fontWeight: 700,
    color: colors.red,
    marginBottom: 1,
  },
  redLineRule: {
    fontSize: 9,
    fontWeight: 700,
    color: colors.ink,
    marginBottom: 2,
  },
  redLineDetail: {
    fontSize: 9,
    lineHeight: 1.5,
    color: colors.ink60,
  },
  /* Table cols */
  colTrigger: { width: '28%' },
  colCode: { width: '10%' },
  colWindow: { width: '26%' },
  colAction: { width: '36%' },
})

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const moneyCodes = [
  { trigger: '"I have diabetes / COPD / heart failure…"', code: 'CSN', window: 'Year-round, 1x/yr per condition', action: 'Confirm diagnosis, verify C-SNP in county' },
  { trigger: '"I just retired / lost my job / COBRA ended"', code: 'LEC', window: 'Month of loss + 2 months', action: 'Get exact coverage end date. CMS-L564, CMS-40B' },
  { trigger: '"I just moved"', code: 'MOV', window: 'Month before + month of + 2 after', action: 'Verify address change with Social Security' },
  { trigger: '"I\'m on Medicaid"', code: 'INT', window: 'Any month, repeatable', action: 'Verify full Medicaid → D-SNP. Check MCO match' },
  { trigger: '"I get Extra Help / low income"', code: 'DEP', window: 'Any month, repeatable', action: 'Verify Medicaid or LIS level → PDP change' },
  { trigger: '"I\'m turning 65 / just got Medicare"', code: 'IEP', window: '7 months around 65th birthday', action: 'Check Part A and Part B effective dates' },
  { trigger: '"My plan is terrible"', code: '5ST', window: 'Dec 8 – Nov 30, 1x/yr', action: 'Check if 5-star plan exists in area' },
  { trigger: '"I\'m in a nursing home / rehab"', code: 'OEP-I', window: 'Unlimited in facility', action: 'Confirm facility type (not assisted living)' },
  { trigger: '"My plan got cancelled"', code: 'EOC', window: 'Dec 8 – end of Feb', action: 'Verify plan non-renewal notice' },
  { trigger: '"Lost VA / TRICARE / ACA coverage"', code: 'LCC', window: '2 mo from loss or notification', action: 'Must be involuntary (not missed premiums)' },
  { trigger: '"My Medicaid just changed"', code: 'MCD', window: '3 months from change', action: 'Gained, lost, or changed level' },
  { trigger: '"My husband/wife died and I lost coverage"', code: 'LEC', window: 'Month of loss + 2 months', action: 'Get date coverage ended. CMS-L564, CMS-40B' },
]

const alwaysOpen = [
  'CSN — Year-round (condition + C-SNP available)',
  'INT — Any month, repeatable (full Medicaid → D-SNP)',
  'DEP — Any month, repeatable (any Medicaid/LIS → PDP)',
  'OEP-I — Unlimited while in qualifying facility',
  'CDC — Anytime (has other drug coverage → MA-only)',
]

const tickingClock = [
  'IEP — 7 months around 65th birthday',
  'LEC — Month of loss + 2 months',
  'MOV — Month before + month of + 2 after',
  'MCD / NLS — 3 months from status change',
  'LCC — 2 months from loss or notification',
]

const calendarBound = [
  '5ST — Dec 8 through Nov 30 (1x/yr)',
  'EOC — Dec 8 through end of Feb',
  'AEP — Oct 15 through Dec 7 (no SEP needed)',
  'OEP — Jan 1 through Mar 31 (MA members, 1 change)',
]

const confusionKillers = [
  { pair: 'IEP vs ICEP', rule: 'Same A/B date → IEP. Different dates → ICEP.' },
  { pair: 'INT vs DEP', rule: 'Full Medicaid → INT → D-SNP. Any Medicaid/LIS → DEP → PDP.' },
  { pair: 'MOV vs LEC', rule: 'Moved → MOV. Lost coverage → LEC. Could be both.' },
  { pair: 'LCC vs LEC', rule: 'Employer/COBRA → LEC. Everything else → LCC.' },
  { pair: '12G vs 12J', rule: 'Had Medigap before MA → 12G. First MA at 65 → 12J (PDP mandatory).' },
  { pair: 'OEP-I vs LTC', rule: 'MA/MAPD → OEP-I. PDP only → LTC. Same facilities, different plan types.' },
]

const redLines = [
  { num: 1, rule: 'DST is not a standalone SEP.', detail: 'Only extends a missed window. Never advertise. Benchmark: ~15%.' },
  { num: 2, rule: 'Never enroll Medicaid in a give-back plan.', detail: 'Part B premium already covered by state. Zero value, compliance risk.' },
  { num: 3, rule: 'Always verify the election period.', detail: 'What event? When? Does the beneficiary understand? Conversation, not checkbox.' },
]

const conditions = 'Diabetes, chronic heart failure, COPD/emphysema, ESRD/dialysis, cancer, cardiovascular disorders, dementia/Alzheimer\'s, autoimmune disorders, HIV/AIDS, chronic mental health, neurological disorders, end-stage liver disease, hematologic disorders, chronic alcohol/drug dependence, stroke/CVA'

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export function QuickReferencePdf() {
  return (
    <Document title="The Money Codes — SEP Quick Reference" author="Mega Care Insurance">
      <Page size="LETTER" style={base.page}>
        {/* Header */}
        <Text style={base.eyebrow}>SEP QUICK REFERENCE</Text>
        <Text style={base.h1}>The Money Codes</Text>
        <Text style={[base.bodyMuted, { marginBottom: 16 }]}>
          The codes that make you money during SEP season. Recognize what they say, know the code, close the enrollment.
        </Text>

        {/* C-SNP Hero */}
        <View style={s.csnpCard}>
          <Text style={base.eyebrow}>#1 OFF-SEASON OPPORTUNITY</Text>
          <Text style={[base.h2, { marginTop: 0 }]}>C-SNP Enrollment (Code: CSN)</Text>
          <Text style={[base.bodyMuted, { marginBottom: 8 }]}>
            During SEP season (Apr 1 – Oct 14), C-SNP is the primary way agents generate enrollment revenue. If the beneficiary has a qualifying chronic condition, this door is always open.
          </Text>
          <Text style={s.csnpStat}>17M</Text>
          <Text style={s.csnpStatLabel}>Medicare beneficiaries with a qualifying chronic condition</Text>
          <View style={s.csnpQuestion}>
            <Text>&ldquo;Do you have any ongoing health conditions like diabetes, heart failure, or COPD?&rdquo;</Text>
          </View>
          <View style={base.bulletRow}><View style={base.bulletDot} /><Text style={base.bulletText}>Year-round availability — no window expires</Text></View>
          <View style={base.bulletRow}><View style={base.bulletDot} /><Text style={base.bulletText}>C-SNPs offer lower copays and condition-specific care management</Text></View>
          <View style={base.bulletRow}><View style={base.bulletDot} /><Text style={base.bulletText}>Must enroll INTO a C-SNP — cannot use for standard MA or MAPD</Text></View>
          <View style={base.bulletRow}><View style={base.bulletDot} /><Text style={base.bulletText}>Provider must attest diagnosis within 2 months of enrollment</Text></View>
          <Text style={[base.bodyMuted, { marginTop: 6, fontSize: 7.5 }]}>
            Qualifying conditions: {conditions}
          </Text>
        </View>

        {/* Money Codes Table */}
        <Text style={base.h2}>&ldquo;They Just Told You Something&rdquo;</Text>
        <View style={base.tableHeader}>
          <Text style={[base.tableHeaderCell, s.colTrigger]}>What they said</Text>
          <Text style={[base.tableHeaderCell, s.colCode]}>Code</Text>
          <Text style={[base.tableHeaderCell, s.colWindow]}>Window</Text>
          <Text style={[base.tableHeaderCell, s.colAction]}>What to do</Text>
        </View>
        {moneyCodes.map((row, i) => (
          <View key={`${row.code}-${i}`} style={base.tableRow} wrap={false}>
            <Text style={[base.tableCell, s.colTrigger, { fontStyle: 'italic', color: colors.ink60, fontSize: 8.5 }]}>{row.trigger}</Text>
            <Text style={[base.tableCell, s.colCode, { fontWeight: 700, color: colors.sage, fontSize: 8.5 }]}>{row.code}</Text>
            <Text style={[base.tableCell, s.colWindow, { fontWeight: 600, fontSize: 8.5 }]}>{row.window}</Text>
            <Text style={[base.tableCell, s.colAction, { fontSize: 8.5 }]}>{row.action}</Text>
          </View>
        ))}

        {/* Timing */}
        <Text style={[base.h2, { marginTop: 18 }]}>&ldquo;When Exactly Did That Happen?&rdquo;</Text>
        <Text style={[base.bodyMuted, { marginBottom: 8 }]}>The single most important question on every SEP call.</Text>
        <View style={s.timingRow}>
          <View style={s.timingCol}>
            <Text style={[s.timingLabel, { color: colors.sage }]}>ALWAYS OPEN</Text>
            {alwaysOpen.map((item) => (
              <Text key={item} style={[base.tableCell, { fontSize: 8, marginBottom: 2 }]}>{item}</Text>
            ))}
          </View>
          <View style={s.timingCol}>
            <Text style={[s.timingLabel, { color: colors.amber }]}>TICKING CLOCK</Text>
            {tickingClock.map((item) => (
              <Text key={item} style={[base.tableCell, { fontSize: 8, marginBottom: 2 }]}>{item}</Text>
            ))}
          </View>
          <View style={s.timingCol}>
            <Text style={[s.timingLabel, { color: colors.blue }]}>CALENDAR-BOUND</Text>
            {calendarBound.map((item) => (
              <Text key={item} style={[base.tableCell, { fontSize: 8, marginBottom: 2 }]}>{item}</Text>
            ))}
          </View>
        </View>

        {/* Confusion Killers */}
        <Text style={base.h2}>The Confusion Killers</Text>
        <View style={s.confusionRow}>
          {confusionKillers.map((item) => (
            <View key={item.pair} style={s.confusionCard}>
              <Text style={s.confusionPair}>{item.pair}</Text>
              <Text style={s.confusionRule}>{item.rule}</Text>
            </View>
          ))}
        </View>

        {/* Red Lines */}
        <Text style={base.h2}>Three Lines You Never Cross</Text>
        {redLines.map((item) => (
          <View key={item.num} style={s.redLineCard} wrap={false}>
            <Text style={s.redLineNum}>{item.num}</Text>
            <Text style={s.redLineRule}>{item.rule}</Text>
            <Text style={s.redLineDetail}>{item.detail}</Text>
          </View>
        ))}

        {/* Footer */}
        <View style={base.pageFooter}>
          <Text>Mega Care / Certainty System — SEP Quick Reference</Text>
          <Text>/sep-check</Text>
        </View>
      </Page>
    </Document>
  )
}
