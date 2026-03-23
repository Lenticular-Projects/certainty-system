'use client'

import { motion } from 'framer-motion'
import PageShell from '@/components/layout/PageShell'
import CrossLinks from '@/components/ui/CrossLinks'
import { SPRING, staggerContainer, staggerChild } from '@/lib/motion'
import styles from './page.module.css'

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const moneyCodes = [
  {
    trigger: '"I have diabetes / COPD / heart failure…"',
    code: 'CSN',
    window: 'Year-round, 1x/yr per condition',
    action: 'Confirm diagnosis, verify C-SNP in their county',
  },
  {
    trigger: '"I just retired / lost my job / COBRA ended"',
    code: 'LEC',
    window: 'Month of loss + 2 months',
    action: 'Get exact coverage end date. Forms: CMS-L564, CMS-40B',
  },
  {
    trigger: '"I just moved"',
    code: 'MOV',
    window: 'Month before + month of + 2 after',
    action: 'Verify address change with Social Security',
  },
  {
    trigger: '"I\'m on Medicaid"',
    code: 'INT',
    window: 'Any month, repeatable',
    action: 'Verify full Medicaid → D-SNP. Check MCO match',
  },
  {
    trigger: '"I get Extra Help / low income"',
    code: 'DEP',
    window: 'Any month, repeatable',
    action: 'Verify Medicaid or LIS level → PDP change',
  },
  {
    trigger: '"I\'m turning 65 / just got Medicare"',
    code: 'IEP',
    window: '7 months around 65th birthday',
    action: 'Check Part A and Part B effective dates',
  },
  {
    trigger: '"My plan is terrible"',
    code: '5ST',
    window: 'Dec 8 – Nov 30, 1x/yr',
    action: 'Check if a 5-star plan exists in their area',
  },
  {
    trigger: '"I\'m in a nursing home / rehab"',
    code: 'OEP-I',
    window: 'Unlimited while in facility',
    action: 'Confirm qualifying facility type (not assisted living)',
  },
  {
    trigger: '"My plan got cancelled"',
    code: 'EOC',
    window: 'Dec 8 – end of Feb',
    action: 'Verify plan non-renewal notice from carrier',
  },
  {
    trigger: '"I lost my VA / TRICARE / ACA coverage"',
    code: 'LCC',
    window: '2 months from loss or notification',
    action: 'Must be involuntary (not missed premiums)',
  },
  {
    trigger: '"My Medicaid just changed"',
    code: 'MCD',
    window: '3 months from change',
    action: 'Gained, lost, or changed Medicaid level',
  },
]

const alwaysOpen = [
  { code: 'CSN', note: 'Year-round (condition + C-SNP available)' },
  { code: 'INT', note: 'Any month, repeatable (full Medicaid → D-SNP)' },
  { code: 'DEP', note: 'Any month, repeatable (any Medicaid/LIS → PDP)' },
  { code: 'OEP-I', note: 'Unlimited while in qualifying facility' },
  { code: 'CDC', note: 'Anytime (has other drug coverage → MA-only)' },
]

const tickingClock = [
  { code: 'IEP', note: '7 months around 65th birthday' },
  { code: 'LEC', note: 'Month of loss + 2 months' },
  { code: 'MOV', note: 'Month before + month of + 2 after' },
  { code: 'MCD / NLS', note: '3 months from status change' },
  { code: 'LCC', note: '2 months from loss or notification' },
]

const calendarBound = [
  { code: '5ST', note: 'Dec 8 through Nov 30 (1x/yr)' },
  { code: 'EOC', note: 'Dec 8 through end of Feb' },
  { code: 'AEP', note: 'Oct 15 through Dec 7 (no SEP needed)' },
  { code: 'OEP', note: 'Jan 1 through Mar 31 (MA members, 1 change)' },
]

const confusionKillers = [
  {
    pair: 'IEP vs ICEP',
    rule: 'Same Part A and Part B effective date? → <strong>IEP</strong>. Different dates (Part B activating later)? → <strong>ICEP</strong>.',
  },
  {
    pair: 'INT vs DEP',
    rule: 'Full Medicaid? → <strong>INT</strong> → D-SNP. Any Medicaid or LIS? → <strong>DEP</strong> → PDP only.',
  },
  {
    pair: 'MOV vs LEC',
    rule: 'Did they move? → <strong>MOV</strong>. Did they lose coverage? → <strong>LEC</strong>. Could be both — check for both.',
  },
  {
    pair: 'LCC vs LEC',
    rule: 'Employer/union/COBRA? → <strong>LEC</strong>. Everything else (VA, TRICARE, ACA)? → <strong>LCC</strong>.',
  },
  {
    pair: '12G vs 12J',
    rule: 'Had Medigap before joining MA for the first time? → <strong>12G</strong>. First MA at 65, no prior Medigap? → <strong>12J</strong> (PDP mandatory).',
  },
]

const redLines = [
  {
    num: 1,
    rule: 'DST is not a standalone SEP.',
    detail:
      'A disaster alone does NOT create an enrollment window. DST only extends a window the beneficiary already had and missed because of the disaster. Never advertise it. Never bring it up. Carrier benchmark: ~15%.',
  },
  {
    num: 2,
    rule: 'Never enroll a Medicaid beneficiary in a give-back plan.',
    detail:
      'Beneficiaries with Medicaid already have their Part B premium covered by the state. A give-back benefit has zero value for them and creates compliance risk.',
  },
  {
    num: 3,
    rule: 'Always verify the election period with the beneficiary.',
    detail:
      'Before every submission: What is the qualifying event? When did it happen? Does the beneficiary understand? This is a conversation, not a checkbox.',
  },
]

const csnpReasons = [
  'Year-round availability — no window expires',
  '17 million eligible beneficiaries',
  'No time pressure on the call — take your time, explain the benefits',
  'C-SNPs offer lower copays and condition-specific care management',
  'Most agents don\'t even know about it',
]

const qualifyingConditions =
  'Diabetes, chronic heart failure, COPD/emphysema, ESRD/dialysis, cancer, cardiovascular disorders, dementia/Alzheimer\'s, autoimmune disorders (lupus, RA, MS), HIV/AIDS, chronic mental health (schizophrenia, bipolar, major depression), neurological disorders (Parkinson\'s, epilepsy, ALS), end-stage liver disease, hematologic disorders, chronic alcohol/drug dependence, stroke/CVA'

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function QuickReferencePage() {
  return (
    <PageShell signal="neutral">
      {/* Hero */}
      <header className={styles.hero}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.05 }}
        >
          SEP Quick Reference
        </motion.p>
        <motion.h1
          className={`${styles.headline} display-xl`}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.1 }}
        >
          The Money Codes
        </motion.h1>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.2 }}
        >
          The codes that make you money during SEP season. Not all 37 &mdash; just the ones you&rsquo;ll
          actually use. Recognize what they say, know the code, close the enrollment.
        </motion.p>
      </header>

      {/* C-SNP Hero Card */}
      <motion.div
        className={`${styles.csnpHero} glass`}
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={SPRING}
      >
        <p className={styles.csnpLabel}>#1 Off-Season Opportunity</p>
        <h2 className={styles.csnpTitle}>C-SNP Enrollment (Code: CSN)</h2>
        <p className={styles.csnpStat}>17M</p>
        <p className={styles.csnpStatLabel}>
          Medicare beneficiaries with a qualifying chronic condition
        </p>

        <div className={styles.csnpQuestion}>
          &ldquo;Do you have any ongoing health conditions like diabetes, heart failure, or COPD?&rdquo;
        </div>

        <div className={styles.csnpReasons}>
          {csnpReasons.map((reason) => (
            <div key={reason} className={styles.csnpReason}>
              <span className={styles.csnpReasonDot} />
              <span>{reason}</span>
            </div>
          ))}
        </div>

        <p className={styles.csnpConditions}>
          <strong>Qualifying conditions:</strong> {qualifyingConditions}
        </p>

        <div className={styles.csnpNote}>
          <strong>Provider attestation:</strong> The beneficiary&rsquo;s doctor must verify the diagnosis
          within 2 months of enrollment. Must enroll INTO a C-SNP &mdash; cannot use CSN for standard
          MA or MAPD plans.
        </div>
      </motion.div>

      {/* "They Just Told You Something" table */}
      <motion.div
        className={styles.section}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={SPRING}
      >
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            &ldquo;They Just Told You Something&rdquo; &mdash; Here&rsquo;s Your Code
          </h2>
          <p className={styles.sectionDesc}>
            Listen for the trigger. Match the code. Execute the next step.
          </p>
        </div>
        <div className={`${styles.tableWrap} glass`}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>What they said</th>
                <th>Code</th>
                <th>Window</th>
                <th>What to do</th>
              </tr>
            </thead>
            <tbody>
              {moneyCodes.map((row) => (
                <tr key={row.code}>
                  <td className={styles.tdTrigger}>{row.trigger}</td>
                  <td>
                    <span className={styles.codeBadge}>{row.code}</span>
                  </td>
                  <td className={styles.tdWindow}>{row.window}</td>
                  <td>{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Time Windows */}
      <motion.div
        className={styles.section}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={SPRING}
      >
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            &ldquo;When Exactly Did That Happen?&rdquo;
          </h2>
          <p className={styles.sectionDesc}>
            The single most important question on every SEP call. Most codes have ticking clocks.
          </p>
        </div>
        <div className={styles.timingGrid}>
          <motion.div
            className={`${styles.timingCard} glass`}
            variants={staggerChild}
          >
            <p className={styles.timingLabelGreen}>Always Open</p>
            <div className={styles.timingList}>
              {alwaysOpen.map((item) => (
                <p key={item.code} className={styles.timingItem}>
                  <strong>{item.code}</strong> <span>&mdash; {item.note}</span>
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={`${styles.timingCard} glass`}
            variants={staggerChild}
          >
            <p className={styles.timingLabelAmber}>Ticking Clock</p>
            <div className={styles.timingList}>
              {tickingClock.map((item) => (
                <p key={item.code} className={styles.timingItem}>
                  <strong>{item.code}</strong> <span>&mdash; {item.note}</span>
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={`${styles.timingCard} glass`}
            variants={staggerChild}
          >
            <p className={styles.timingLabelBlue}>Calendar-Bound</p>
            <div className={styles.timingList}>
              {calendarBound.map((item) => (
                <p key={item.code} className={styles.timingItem}>
                  <strong>{item.code}</strong> <span>&mdash; {item.note}</span>
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Confusion Killers */}
      <motion.div
        className={styles.section}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={SPRING}
      >
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>The Confusion Killers</h2>
          <p className={styles.sectionDesc}>
            The code pairs agents mix up most. One question tells you which is which.
          </p>
        </div>
        <motion.div
          className={styles.confusionGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
        >
          {confusionKillers.map((item) => (
            <motion.div
              key={item.pair}
              className={`${styles.confusionCard} glass`}
              variants={staggerChild}
            >
              <p className={styles.confusionPair}>{item.pair}</p>
              <p
                className={styles.confusionRule}
                dangerouslySetInnerHTML={{ __html: item.rule }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Three Lines You Never Cross */}
      <motion.div
        className={styles.section}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={SPRING}
      >
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Three Lines You Never Cross</h2>
        </div>
        <div className={styles.redLinesStack}>
          {redLines.map((item) => (
            <motion.div
              key={item.num}
              className={`${styles.redLineCard} glass`}
              variants={staggerChild}
            >
              <p className={styles.redLineNum}>{item.num}</p>
              <p className={styles.redLineRule}>{item.rule}</p>
              <p className={styles.redLineDetail}>{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Cross links */}
      <CrossLinks
        links={[
          { label: 'SEP Check Tool', href: '/sep-check' },
          { label: 'SEP Guides', href: '/sep' },
          { label: 'Compliance Cheat Sheet', href: '/sep-compliance' },
          { label: 'Call Types', href: '/call-types' },
        ]}
      />
    </PageShell>
  )
}
