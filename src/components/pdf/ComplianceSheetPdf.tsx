import React from 'react'
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer'
import { registerFonts } from '@/lib/pdf/fonts'
import { base, colors, fonts } from '@/lib/pdf/styles'

registerFonts()

/* ------------------------------------------------------------------ */
/* Local styles                                                        */
/* ------------------------------------------------------------------ */

const s = StyleSheet.create({
  /* Section title bar */
  sectionBar: {
    backgroundColor: colors.sage,
    borderRadius: 4,
    paddingVertical: 7,
    paddingHorizontal: 12,
    marginBottom: 10,
    marginTop: 18,
  },
  sectionBarText: {
    fontFamily: fonts.heading,
    fontSize: 12,
    fontWeight: 700,
    color: colors.white,
  },
  sectionBarFirst: {
    marginTop: 0,
  },
  /* Checklist */
  checklistRow: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 6,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.ink10,
  },
  checklistNum: {
    width: 20,
    fontSize: 9,
    fontWeight: 700,
    color: colors.sage,
  },
  checklistQuestion: {
    width: '35%',
    fontSize: 9,
    fontWeight: 700,
    color: colors.ink,
    lineHeight: 1.45,
  },
  checklistWhy: {
    flex: 1,
    fontSize: 8.5,
    lineHeight: 1.45,
    color: colors.ink60,
    paddingLeft: 6,
  },
  /* Watched SEP table columns */
  colCode: { width: '10%' },
  colName: { width: '18%' },
  colBench: { width: '12%' },
  colFlagged: { width: '60%' },
  /* Red flag list */
  redFlagRow: {
    flexDirection: 'row',
    paddingVertical: 3,
    paddingLeft: 4,
  },
  redFlagDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.red,
    marginTop: 4,
    marginRight: 8,
  },
  redFlagText: {
    flex: 1,
    fontSize: 8.5,
    lineHeight: 1.45,
    color: colors.ink,
  },
  /* Consequences table */
  colStage: { width: '15%' },
  colWhat: { width: '30%' },
  colImpact: { width: '55%' },
  /* DO NOT card */
  doNotCard: {
    backgroundColor: colors.bg,
    borderRadius: 6,
    padding: 12,
    marginBottom: 6,
    borderLeftWidth: 3,
    borderLeftColor: colors.red,
    borderWidth: 0.5,
    borderColor: colors.ink10,
  },
  doNotRule: {
    fontSize: 8.5,
    fontWeight: 700,
    color: colors.red,
    marginBottom: 2,
  },
  doNotWhy: {
    fontSize: 8,
    lineHeight: 1.45,
    color: colors.ink60,
    marginBottom: 2,
  },
  doNotDetail: {
    fontSize: 8,
    lineHeight: 1.45,
    color: colors.ink60,
  },
  /* Plan type matrix */
  matrixColCode: { width: '14%' },
  matrixColType: { width: '14.4%' },
  matrixCheck: {
    fontSize: 9,
    fontWeight: 700,
    color: colors.sage,
    textAlign: 'center',
  },
  matrixDash: {
    fontSize: 9,
    color: colors.ink20,
    textAlign: 'center',
  },
  /* Escalation */
  escalationBox: {
    backgroundColor: colors.sageTint,
    borderRadius: 6,
    padding: 14,
    marginTop: 6,
    borderWidth: 0.5,
    borderColor: '#c2d8ca',
  },
  escalationRow: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 6,
    borderBottomWidth: 0.5,
    borderBottomColor: '#c2d8ca',
  },
  escalationRowLast: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 6,
  },
  escalationNum: {
    width: 24,
    fontFamily: fonts.heading,
    fontSize: 14,
    fontWeight: 700,
    color: colors.sage,
  },
  escalationAction: {
    fontSize: 9,
    fontWeight: 700,
    color: colors.ink,
    marginBottom: 1,
  },
  escalationDetail: {
    fontSize: 8,
    lineHeight: 1.45,
    color: colors.ink60,
  },
  /* Closing callout */
  closingBox: {
    backgroundColor: colors.sageTint,
    borderRadius: 6,
    padding: 14,
    marginTop: 16,
    borderWidth: 0.5,
    borderColor: '#c2d8ca',
  },
  closingLabel: {
    fontFamily: fonts.body,
    fontSize: 7.5,
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: 'uppercase' as const,
    color: colors.sage,
    marginBottom: 4,
  },
  closingText: {
    fontSize: 9,
    lineHeight: 1.55,
    color: colors.ink,
  },
  /* Red section bar */
  sectionBarRed: {
    backgroundColor: colors.red,
    borderRadius: 4,
    paddingVertical: 7,
    paddingHorizontal: 12,
    marginBottom: 10,
    marginTop: 18,
  },
})

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const verificationChecklist = [
  {
    number: 1,
    question: 'What is the qualifying event?',
    why: 'Can you name the specific life event? (Moved, lost coverage, gained Medicaid, chronic condition, etc.)',
  },
  {
    number: 2,
    question: 'When did it happen?',
    why: 'Do you have the date? Is the SEP window still open?',
  },
  {
    number: 3,
    question: 'Does the beneficiary understand?',
    why: 'Can they explain in their own words why they qualify? "Okay" is not verification.',
  },
  {
    number: 4,
    question: 'Is this the right SEP code?',
    why: 'Is there a more beneficial enrollment period available per the CMS hierarchy?',
  },
  {
    number: 5,
    question: 'Is the plan type valid for this SEP?',
    why: 'INT = D-SNP only. DEP = PDP only. ICEP = MA/MAPD only. CDC = MA-only. Check before submitting.',
  },
]

const watchedSeps = [
  {
    code: 'DST',
    name: 'Disaster SEP',
    benchmark: '~15%',
    flagged: 'Using it as a standalone SEP. Marketing or advertising it. No matching FEMA declaration.',
  },
  {
    code: 'MOV',
    name: 'Moving SEP',
    benchmark: '~10%',
    flagged: 'PO Box changes submitted as moves. No address verification with Social Security. MARx still shows old address.',
  },
  {
    code: 'LCC',
    name: 'Loss of Creditable Coverage',
    benchmark: '~4%',
    flagged: 'Using it when the beneficiary stopped paying premiums (voluntary loss). Must be involuntary.',
  },
  {
    code: 'ACC',
    name: 'Accessible Format',
    benchmark: '~3%',
    flagged: 'Using it as a convenience code. Beneficiary did not actually request accessible materials.',
  },
  {
    code: 'PAP',
    name: 'SPAP',
    benchmark: '~5%',
    flagged: 'Beneficiary not actively enrolled in a qualifying state pharmaceutical assistance program.',
  },
]

const redFlags = [
  'High DST volume without matching FEMA declarations in your service area',
  'MOV enrollments without corresponding address changes in MARx',
  'ACC usage above 3% of total enrollments',
  'Multiple different SEP codes used for the same beneficiary in a short period',
  'SEP enrollments consistently submitted on the last day of windows',
  'LCC for beneficiaries whose coverage lapsed due to non-payment',
  'INT enrollments into D-SNPs that are not FIDE, HIDE, or AIP',
  'Give-back plan enrollments for Medicaid beneficiaries',
]

const wrongSepStages = [
  {
    stage: '1. Rejection',
    what: 'Enrollment denied at submission',
    impact: 'Beneficiary has no plan. You wasted their time. The application is returned, and the beneficiary must start over with the correct SEP — if one still exists.',
  },
  {
    stage: '2. Retro disenrollment',
    what: 'Accepted enrollment later audited and reversed',
    impact: 'Beneficiary loses coverage they thought was active — sometimes months later. Claims incurred during that period may become the beneficiary\'s responsibility. They lose trust in you.',
  },
  {
    stage: '3. Compliance review',
    what: 'Your enrollment patterns flagged by carrier',
    impact: 'You receive a corrective action plan. Mandatory retraining is assigned. Your enrollment activity is monitored closely for 90+ days. Every future submission gets extra scrutiny.',
  },
  {
    stage: '4. Suspension',
    what: 'Enrollment privileges suspended',
    impact: 'You cannot submit any enrollments — sometimes across all carriers, not just the one that flagged you. Your book of business is frozen. Downline agents may also be affected.',
  },
  {
    stage: '5. Termination',
    what: 'Carrier contract terminated for cause',
    impact: 'Permanent carrier blacklist. Potential CMS sanction reported to other carriers. Other contracts may be terminated as a result. Rebuilding your career requires starting from scratch.',
  },
]

const doNotList = [
  {
    rule: 'DO NOT enroll Medicaid beneficiaries in give-back plans',
    why: 'Medicaid already pays their Part B premium — the give-back benefit has no value to them.',
    detail: 'Use D-SNPs instead. Give-back enrollments for Medicaid beneficiaries are flagged as unsuitable recommendations and may result in retro disenrollment.',
  },
  {
    rule: 'DO NOT advertise or market the Disaster SEP',
    why: 'CMS prohibits proactive marketing of DST. The beneficiary must raise the situation themselves.',
    detail: 'You cannot send mailers, run ads, or proactively call about DST. If you are caught marketing it, the carrier will terminate your contract.',
  },
  {
    rule: 'DO NOT assume or infer an SEP',
    why: 'Guessing that someone qualifies is not verification — it is a compliance violation.',
    detail: 'The qualifying event must be confirmed by the beneficiary and verifiable in the system. Document the conversation.',
  },
  {
    rule: 'DO NOT use ACC for beneficiaries who do not need accessible format materials',
    why: 'ACC is one of the most audited codes. Carrier benchmark is 3% — exceed it and you will be reviewed.',
    detail: 'The beneficiary must have actually requested accessible materials (large print, Braille, audio, etc.). Convenience use triggers immediate pattern flags.',
  },
  {
    rule: 'DO NOT submit an enrollment without verifying the election period with the beneficiary',
    why: 'CMS requires Election Period Verification as a documented conversation, not a checkbox.',
    detail: 'The beneficiary must confirm and understand which enrollment period they are using and why. Skipping this step is a standalone compliance violation.',
  },
  {
    rule: 'DO NOT use DST as a standalone SEP',
    why: 'DST extends a missed window — it does not create a new enrollment right.',
    detail: 'The beneficiary must have had another enrollment period open during the disaster. No underlying SEP = no DST eligibility.',
  },
  {
    rule: 'DO NOT use LCC for voluntary coverage loss',
    why: 'LCC requires involuntary loss. Non-payment of premiums is considered voluntary.',
    detail: 'If the beneficiary missed premium payments and their coverage lapsed, LCC does not apply. This is one of the most common misuses carriers catch in audits.',
  },
  {
    rule: 'DO NOT submit INT without confirming the D-SNP is integrated',
    why: 'INT requires FIDE, HIDE, or AIP designation. Not all D-SNPs qualify.',
    detail: 'The beneficiary\'s Managed Care Organization (MCO) must also match. Submitting INT for a non-integrated D-SNP results in automatic rejection or retro disenrollment.',
  },
  {
    rule: 'DO NOT use OEP for dual-eligible beneficiaries who have INT or DEP',
    why: 'INT and DEP are monthly and repeatable. OEP is one-and-done per year.',
    detail: 'Using OEP when INT or DEP is available wastes the beneficiary\'s annual OEP. If they need to make a change later, they will have no remaining options.',
  },
  {
    rule: 'DO NOT hold applications',
    why: 'CMS requires applications to be submitted within 24 hours of receipt.',
    detail: 'You cannot hold them until a more convenient time, a better effective date, or a different enrollment window. This is a termination offense — grounds for immediate contract removal.',
  },
]

const planTypeRef = [
  { code: 'INT',   ma: false, mapd: false, pdp: false, dsnp: true,  maOnly: false },
  { code: 'DEP',   ma: false, mapd: false, pdp: true,  dsnp: false, maOnly: false },
  { code: 'MCD',   ma: false, mapd: true,  pdp: true,  dsnp: false, maOnly: false },
  { code: 'NLS',   ma: false, mapd: true,  pdp: true,  dsnp: false, maOnly: false },
  { code: 'ICEP',  ma: true,  mapd: true,  pdp: false, dsnp: false, maOnly: true  },
  { code: 'IEP',   ma: false, mapd: true,  pdp: true,  dsnp: false, maOnly: false },
  { code: 'OEP-I', ma: true,  mapd: true,  pdp: false, dsnp: false, maOnly: false },
  { code: 'LTC',   ma: false, mapd: false, pdp: true,  dsnp: false, maOnly: false },
  { code: 'CDC',   ma: false, mapd: false, pdp: false, dsnp: false, maOnly: true  },
  { code: 'INV',   ma: false, mapd: false, pdp: true,  dsnp: false, maOnly: false },
  { code: 'OSD',   ma: false, mapd: false, pdp: true,  dsnp: false, maOnly: false },
  { code: '12G',   ma: false, mapd: false, pdp: true,  dsnp: false, maOnly: false },
  { code: '12J',   ma: false, mapd: false, pdp: true,  dsnp: false, maOnly: false },
  { code: 'MOV',   ma: true,  mapd: true,  pdp: true,  dsnp: false, maOnly: false },
  { code: 'LEC',   ma: true,  mapd: true,  pdp: true,  dsnp: false, maOnly: false },
  { code: 'CSN',   ma: false, mapd: false, pdp: false, dsnp: true,  maOnly: false },
]

const escalationSteps = [
  { step: 1, action: 'Check The Certainty System at /sep-check', detail: 'All 37 codes with eligibility criteria, plan type rules, and signal classification. Start here every time.' },
  { step: 2, action: 'Check carrier portal', detail: 'Humana (Vantage/Mentor DMS-024), UHC (Election Period Booklet), Devoted (Agent Portal SEP tracker). Carrier-specific rules override general guidance.' },
  { step: 3, action: 'Call your upline', detail: 'They have seen the edge cases. A 2-minute call can prevent a 2-month compliance review.' },
  { step: 4, action: 'Contact carrier compliance', detail: 'A pre-submission question is always better than a post-audit correction. Compliance teams would rather help you get it right than clean up after you get it wrong.' },
]

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export function ComplianceSheetPdf() {
  return (
    <Document title="Mega Care / Certainty System — SEP Compliance Cheat Sheet" author="Mega Care Insurance">
      {/* ============================================================ */}
      {/* PAGE 1                                                        */}
      {/* ============================================================ */}
      <Page size="LETTER" style={base.page}>
        {/* Header */}
        <Text style={base.eyebrow}>MEGA CARE INSURANCE — COMPLIANCE REFERENCE</Text>
        <Text style={base.h1}>SEP Compliance Cheat Sheet</Text>
        <Text style={[base.body, { marginBottom: 4, fontWeight: 700 }]}>
          Print this. Keep it on your screen. Use it before every SEP enrollment. This is your pre-flight checklist.
        </Text>
        <Text style={[base.bodyMuted, { marginBottom: 14 }]}>
          The difference between a clean submission and a compliance review is five minutes of verification. This guide covers what to check, what to avoid, and what happens when you get it wrong.
        </Text>

        {/* Section 1: Pre-enrollment checklist */}
        <View style={[s.sectionBar, s.sectionBarFirst]}>
          <Text style={s.sectionBarText}>Before Every SEP Enrollment</Text>
        </View>
        <Text style={[base.bodyMuted, { marginBottom: 8, fontSize: 8.5 }]}>
          Ask yourself these five questions before submitting. If you cannot answer all five with confidence, stop and verify.
        </Text>

        <View style={base.tableHeader}>
          <Text style={[base.tableHeaderCell, { width: 20 }]}>#</Text>
          <Text style={[base.tableHeaderCell, { width: '35%' }]}>Question</Text>
          <Text style={[base.tableHeaderCell, { flex: 1, paddingLeft: 6 }]}>Why It Matters</Text>
        </View>
        {verificationChecklist.map((item) => (
          <View key={item.number} style={s.checklistRow} wrap={false}>
            <Text style={s.checklistNum}>{item.number}</Text>
            <Text style={s.checklistQuestion}>{item.question}</Text>
            <Text style={s.checklistWhy}>{item.why}</Text>
          </View>
        ))}

        {/* Section 2: Most-watched SEPs */}
        <View style={s.sectionBar}>
          <Text style={s.sectionBarText}>The 5 Most-Watched SEPs</Text>
        </View>
        <Text style={[base.bodyMuted, { marginBottom: 8, fontSize: 8.5 }]}>
          These are the codes carrier compliance teams track most aggressively. Exceed the benchmark and expect an audit.
        </Text>

        <View style={base.tableHeader}>
          <Text style={[base.tableHeaderCell, s.colCode]}>Code</Text>
          <Text style={[base.tableHeaderCell, s.colName]}>Name</Text>
          <Text style={[base.tableHeaderCell, s.colBench]}>Benchmark</Text>
          <Text style={[base.tableHeaderCell, s.colFlagged]}>What Gets Flagged</Text>
        </View>
        {watchedSeps.map((sep) => (
          <View key={sep.code} style={base.tableRow} wrap={false}>
            <Text style={[base.tableCell, s.colCode, { fontWeight: 700, color: colors.sage, fontSize: 8.5 }]}>{sep.code}</Text>
            <Text style={[base.tableCell, s.colName, { fontWeight: 700, fontSize: 8.5 }]}>{sep.name}</Text>
            <Text style={[base.tableCell, s.colBench, { fontWeight: 600, color: colors.amber, fontSize: 8.5 }]}>{sep.benchmark}</Text>
            <Text style={[base.tableCell, s.colFlagged, { fontSize: 8.5 }]}>{sep.flagged}</Text>
          </View>
        ))}

        {/* Section 3: Red flags */}
        <View style={s.sectionBarRed}>
          <Text style={s.sectionBarText}>Red Flags That Get You Flagged</Text>
        </View>
        <Text style={[base.bodyMuted, { marginBottom: 6, fontSize: 8.5 }]}>
          These patterns trigger automated compliance alerts.
        </Text>
        {redFlags.map((flag, i) => (
          <View key={i} style={s.redFlagRow}>
            <View style={s.redFlagDot} />
            <Text style={s.redFlagText}>{flag}</Text>
          </View>
        ))}

        {/* Section 4: Consequences */}
        <View style={s.sectionBar}>
          <Text style={s.sectionBarText}>What Happens When You Submit the Wrong SEP</Text>
        </View>
        <Text style={[base.bodyMuted, { marginBottom: 8, fontSize: 8.5 }]}>
          Five escalating consequences. Each stage is harder to recover from than the last.
        </Text>

        <View style={base.tableHeader}>
          <Text style={[base.tableHeaderCell, s.colStage]}>Stage</Text>
          <Text style={[base.tableHeaderCell, s.colWhat]}>What Happens</Text>
          <Text style={[base.tableHeaderCell, s.colImpact]}>Impact</Text>
        </View>
        {wrongSepStages.map((row) => (
          <View key={row.stage} style={base.tableRow} wrap={false}>
            <Text style={[base.tableCell, s.colStage, { fontWeight: 700, fontSize: 8.5 }]}>{row.stage}</Text>
            <Text style={[base.tableCell, s.colWhat, { fontSize: 8.5 }]}>{row.what}</Text>
            <Text style={[base.tableCell, s.colImpact, { fontSize: 8.5 }]}>{row.impact}</Text>
          </View>
        ))}

        {/* Section 5: DO NOT list */}
        <View style={s.sectionBarRed}>
          <Text style={s.sectionBarText}>The DO NOT List</Text>
        </View>
        <Text style={[base.bodyMuted, { marginBottom: 8, fontSize: 8.5 }]}>
          Bright-line rules. No exceptions. No gray area. Each rule includes the reason — know the why, not just the what.
        </Text>

        {doNotList.map((item, i) => (
          <View key={i} style={s.doNotCard} wrap={false}>
            <Text style={s.doNotRule}>{item.rule}</Text>
            <Text style={s.doNotWhy}>{item.why}</Text>
            <Text style={s.doNotDetail}>{item.detail}</Text>
          </View>
        ))}

        {/* Section 6: Quick Escalation Reference */}
        <View style={s.sectionBar}>
          <Text style={s.sectionBarText}>Quick Escalation Reference</Text>
        </View>
        <Text style={[base.bodyMuted, { marginBottom: 6, fontSize: 8.5 }]}>
          When you are not sure, follow these four steps in order. Do not skip ahead.
        </Text>

        <View style={s.escalationBox} wrap={false}>
          {escalationSteps.map((item, i) => (
            <View key={item.step} style={i < escalationSteps.length - 1 ? s.escalationRow : s.escalationRowLast} wrap={false}>
              <Text style={s.escalationNum}>{item.step}</Text>
              <View style={{ flex: 1 }}>
                <Text style={s.escalationAction}>{item.action}</Text>
                <Text style={s.escalationDetail}>{item.detail}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Closing callout */}
        <View style={s.closingBox} wrap={false}>
          <Text style={s.closingLabel}>THE SINGLE BEST HABIT</Text>
          <Text style={s.closingText}>
            If you are not 100% sure the SEP is valid, pause and verify. The five minutes it takes to confirm will save you weeks of dealing with a compliance review. Ask before you submit.
          </Text>
        </View>

        {/* Section 7: Plan type matrix */}
        <View style={s.sectionBar}>
          <Text style={s.sectionBarText}>SEP Plan Type Quick Reference</Text>
        </View>
        <Text style={[base.bodyMuted, { marginBottom: 10, fontSize: 8.5 }]}>
          Not every SEP allows enrollment in every plan type. Check before you submit.
        </Text>

        <View style={base.tableHeader}>
          <Text style={[base.tableHeaderCell, s.matrixColCode]}>SEP Code</Text>
          <Text style={[base.tableHeaderCell, s.matrixColType, { textAlign: 'center' }]}>MA</Text>
          <Text style={[base.tableHeaderCell, s.matrixColType, { textAlign: 'center' }]}>MAPD</Text>
          <Text style={[base.tableHeaderCell, s.matrixColType, { textAlign: 'center' }]}>PDP</Text>
          <Text style={[base.tableHeaderCell, s.matrixColType, { textAlign: 'center' }]}>D-SNP</Text>
          <Text style={[base.tableHeaderCell, s.matrixColType, { textAlign: 'center' }]}>MA-Only</Text>
        </View>
        {planTypeRef.map((row) => (
          <View key={row.code} style={base.tableRow} wrap={false}>
            <View style={s.matrixColCode}>
              <Text style={base.codeBadge}>{row.code}</Text>
            </View>
            <View style={s.matrixColType}>
              <Text style={row.ma ? s.matrixCheck : s.matrixDash}>{row.ma ? 'Y' : '—'}</Text>
            </View>
            <View style={s.matrixColType}>
              <Text style={row.mapd ? s.matrixCheck : s.matrixDash}>{row.mapd ? 'Y' : '—'}</Text>
            </View>
            <View style={s.matrixColType}>
              <Text style={row.pdp ? s.matrixCheck : s.matrixDash}>{row.pdp ? 'Y' : '—'}</Text>
            </View>
            <View style={s.matrixColType}>
              <Text style={row.dsnp ? s.matrixCheck : s.matrixDash}>{row.dsnp ? 'Y' : '—'}</Text>
            </View>
            <View style={s.matrixColType}>
              <Text style={row.maOnly ? s.matrixCheck : s.matrixDash}>{row.maOnly ? 'Y' : '—'}</Text>
            </View>
          </View>
        ))}

        {/* Key */}
        <View style={{ flexDirection: 'row', marginTop: 12, gap: 16 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[s.matrixCheck, { marginRight: 4, fontSize: 9 }]}>Y</Text>
            <Text style={[base.bodyMuted, { fontSize: 8, marginBottom: 0 }]}>= Eligible plan type</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[s.matrixDash, { marginRight: 4, fontSize: 9 }]}>{'—'}</Text>
            <Text style={[base.bodyMuted, { fontSize: 8, marginBottom: 0 }]}>= Not eligible</Text>
          </View>
        </View>

        {/* Quick rules summary */}
        <View style={s.sectionBar}>
          <Text style={s.sectionBarText}>Key Rules to Remember</Text>
        </View>

        <View style={[base.cardAccent, { marginTop: 8 }]} wrap={false}>
          <View style={base.bulletRow}><View style={base.bulletDot} /><Text style={base.bulletText}>INT is D-SNP only. Full Medicaid required. MCO must match.</Text></View>
          <View style={base.bulletRow}><View style={base.bulletDot} /><Text style={base.bulletText}>DEP is PDP only. Any Medicaid or LIS level qualifies.</Text></View>
          <View style={base.bulletRow}><View style={base.bulletDot} /><Text style={base.bulletText}>ICEP is MA/MAPD only. Used when Part A and Part B effective dates differ.</Text></View>
          <View style={base.bulletRow}><View style={base.bulletDot} /><Text style={base.bulletText}>CDC is MA-only. Beneficiary must have other creditable drug coverage.</Text></View>
          <View style={base.bulletRow}><View style={base.bulletDot} /><Text style={base.bulletText}>CSN is D-SNP (C-SNP) only. Must enroll into a plan that matches the qualifying condition.</Text></View>
          <View style={base.bulletRow}><View style={base.bulletDot} /><Text style={base.bulletText}>MOV and LEC are the broadest — eligible for MA, MAPD, and PDP.</Text></View>
        </View>

        <View style={[base.card, { marginTop: 8 }]} wrap={false}>
          <Text style={[base.bodyMuted, { marginBottom: 0, fontSize: 8 }]}>
            This cheat sheet is a quick-reference guide from Mega Care Insurance. For complete SEP eligibility criteria and real-time verification, use The Certainty System at /sep-check. For carrier-specific guidance, consult carrier compliance portals.
          </Text>
        </View>

        <View style={base.pageFooter} fixed>
          <Text>Mega Care / Certainty System — Compliance Cheat Sheet</Text>
          <Text>The Certainty System: /sep-compliance</Text>
        </View>
      </Page>
    </Document>
  )
}
