'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import PageShell from '@/components/layout/PageShell'
import CrossLinks from '@/components/ui/CrossLinks'
import { SPRING, staggerContainer, staggerChild } from '@/lib/motion'
import styles from './page.module.css'

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
    impact: 'Beneficiary has no plan. You wasted their time.',
  },
  {
    stage: '2. Retro disenrollment',
    what: 'Accepted enrollment later audited and reversed',
    impact: 'Beneficiary loses coverage they thought was active — sometimes months later.',
  },
  {
    stage: '3. Compliance review',
    what: 'Your enrollment patterns flagged',
    impact: 'Corrective action plan. Mandatory retraining.',
  },
  {
    stage: '4. Suspension',
    what: 'Enrollment privileges suspended',
    impact: 'Cannot submit any enrollments, sometimes across all carriers.',
  },
  {
    stage: '5. Termination',
    what: 'Carrier contract terminated',
    impact: 'Potential CMS sanction. Career impact.',
  },
]

const doNotList = [
  {
    rule: 'DO NOT enroll Medicaid beneficiaries in give-back plans',
    detail: 'Medicaid pays their Part B premium. The give-back goes nowhere. Use D-SNPs instead.',
  },
  {
    rule: 'DO NOT advertise or market the Disaster SEP',
    detail: 'The beneficiary must raise the situation. You cannot send mailers, run ads, or proactively call about DST.',
  },
  {
    rule: 'DO NOT assume or infer an SEP',
    detail: 'The qualifying event must be confirmed by the beneficiary and verifiable in the system.',
  },
  {
    rule: 'DO NOT use ACC for beneficiaries who do not need accessible format materials',
    detail: 'Carrier benchmark is 3%. This code is actively audited.',
  },
  {
    rule: 'DO NOT submit an enrollment without verifying the election period with the beneficiary',
    detail: 'CMS requires Election Period Verification — it is a conversation, not a checkbox.',
  },
  {
    rule: 'DO NOT use DST as a standalone SEP',
    detail: 'It extends a missed window. It does not create a new one. The beneficiary must have had another enrollment period open during the disaster.',
  },
  {
    rule: 'DO NOT use LCC for voluntary coverage loss',
    detail: 'If the beneficiary missed premium payments and their coverage lapsed, LCC does not apply.',
  },
  {
    rule: 'DO NOT submit INT without confirming the D-SNP is integrated',
    detail: 'INT requires FIDE, HIDE, or AIP designation. Not all D-SNPs qualify. MCO must match.',
  },
  {
    rule: 'DO NOT use OEP for dual-eligible beneficiaries who have INT or DEP',
    detail: 'INT and DEP are monthly and repeatable. OEP is one-and-done. Do not waste it.',
  },
  {
    rule: 'DO NOT hold applications',
    detail: 'Applications must be submitted within 24 hours of receipt. You cannot hold them until a more convenient time.',
  },
]

const planTypeRef = [
  { code: 'INT',  ma: false, mapd: false, pdp: false, dsnp: true,  maOnly: false },
  { code: 'DEP',  ma: false, mapd: false, pdp: true,  dsnp: false, maOnly: false },
  { code: 'MCD',  ma: false, mapd: true,  pdp: true,  dsnp: false, maOnly: false },
  { code: 'NLS',  ma: false, mapd: true,  pdp: true,  dsnp: false, maOnly: false },
  { code: 'ICEP', ma: true,  mapd: true,  pdp: false, dsnp: false, maOnly: true  },
  { code: 'IEP',  ma: false, mapd: true,  pdp: true,  dsnp: false, maOnly: false },
  { code: 'OEP-I',ma: true,  mapd: true,  pdp: false, dsnp: false, maOnly: false },
  { code: 'LTC',  ma: false, mapd: false, pdp: true,  dsnp: false, maOnly: false },
  { code: 'CDC',  ma: false, mapd: false, pdp: false, dsnp: false, maOnly: true  },
  { code: 'INV',  ma: false, mapd: false, pdp: true,  dsnp: false, maOnly: false },
  { code: 'OSD',  ma: false, mapd: false, pdp: true,  dsnp: false, maOnly: false },
  { code: '12G',  ma: false, mapd: false, pdp: true,  dsnp: false, maOnly: false },
  { code: '12J',  ma: false, mapd: false, pdp: true,  dsnp: false, maOnly: false },
  { code: 'MOV',  ma: true,  mapd: true,  pdp: true,  dsnp: false, maOnly: false },
  { code: 'LEC',  ma: true,  mapd: true,  pdp: true,  dsnp: false, maOnly: false },
  { code: 'CSN',  ma: false, mapd: false, pdp: false, dsnp: true,  maOnly: false },
]

const escalationSteps = [
  { step: 1, action: 'Check the SEP Check tool', detail: 'All 37 codes with eligibility criteria, organized by signal type.', href: '/sep-check' },
  { step: 2, action: 'Check carrier portals', detail: 'Humana (Vantage/Mentor DMS-024), UHC (Election Period Booklet), Devoted (Agent Portal SEP tracker).' },
  { step: 3, action: 'Contact your upline', detail: 'They have seen the edge cases.' },
  { step: 4, action: 'Contact carrier compliance', detail: 'A pre-submission question is always better than a post-audit correction.' },
]

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function SepCompliancePage() {
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
          Compliance Reference
        </motion.p>
        <motion.h1
          className={`${styles.headline} display-xl`}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.1 }}
        >
          SEP Compliance Cheat Sheet
        </motion.h1>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.2 }}
        >
          Print it. Keep it on screen. Use it before every SEP enrollment. This is the difference between a clean submission and a compliance review.
        </motion.p>
      </header>

      {/* Section 1: Pre-enrollment checklist */}
      <section className={styles.section}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={SPRING}
        >
          <h2 className={styles.sectionTitle}>Before Every SEP Enrollment</h2>
          <p className={styles.sectionDesc}>
            Ask yourself these five questions before submitting. If you cannot answer all five with confidence, stop and verify.
          </p>
        </motion.div>

        <motion.div
          className={`${styles.tableWrap} glass`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={SPRING}
        >
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.thNarrow}>#</th>
                <th>Question</th>
                <th>Why It Matters</th>
              </tr>
            </thead>
            <tbody>
              {verificationChecklist.map((item) => (
                <tr key={item.number}>
                  <td className={`${styles.tdNarrow} ${styles.tdNum}`}>{item.number}</td>
                  <td className={styles.tdStrong}>{item.question}</td>
                  <td className={styles.tdDetail}>{item.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </section>

      {/* Section 2: Most-watched SEPs */}
      <section className={styles.section}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={SPRING}
        >
          <h2 className={styles.sectionTitle}>The 5 Most-Watched SEPs</h2>
          <p className={styles.sectionDesc}>
            These are the codes carrier compliance teams track most aggressively. Exceed the benchmark and expect an audit.
          </p>
        </motion.div>

        <motion.div
          className={`${styles.tableWrap} glass`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={SPRING}
        >
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Code</th>
                <th>Name</th>
                <th className={styles.thNarrow}>Benchmark</th>
                <th>What Gets Flagged</th>
              </tr>
            </thead>
            <tbody>
              {watchedSeps.map((sep) => (
                <tr key={sep.code}>
                  <td><span className={styles.codeBadge}>{sep.code}</span></td>
                  <td className={styles.tdStrong}>{sep.name}</td>
                  <td className={`${styles.tdNarrow} ${styles.tdBenchmark}`}>{sep.benchmark}</td>
                  <td className={styles.tdDetail}>{sep.flagged}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </section>

      {/* Section 3: Red flags */}
      <section className={styles.section}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={SPRING}
        >
          <h2 className={styles.sectionTitle}>Red Flags That Get You Flagged</h2>
          <p className={styles.sectionDesc}>
            These patterns trigger automated compliance alerts.
          </p>
        </motion.div>

        <motion.div
          className={`${styles.redFlagsList} glass`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={SPRING}
        >
          {redFlags.map((flag, i) => (
            <div key={i} className={styles.redFlagItem}>
              <span className={styles.redFlagDot} aria-hidden="true" />
              <p className={styles.redFlagText}>{flag}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Section 4: Wrong SEP consequences */}
      <section className={styles.section}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={SPRING}
        >
          <h2 className={styles.sectionTitle}>What Happens When You Submit the Wrong SEP</h2>
          <p className={styles.sectionDesc}>
            Five escalating consequences. None of them are recoverable quickly.
          </p>
        </motion.div>

        <motion.div
          className={`${styles.tableWrap} glass`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={SPRING}
        >
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Stage</th>
                <th>What Happens</th>
                <th>Impact</th>
              </tr>
            </thead>
            <tbody>
              {wrongSepStages.map((row) => (
                <tr key={row.stage}>
                  <td className={styles.tdStrong}>{row.stage}</td>
                  <td className={styles.tdDetail}>{row.what}</td>
                  <td className={styles.tdDetail}>{row.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </section>

      {/* Section 5: DO NOT list */}
      <section className={styles.section}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={SPRING}
        >
          <h2 className={styles.sectionTitle}>The DO NOT List</h2>
          <p className={styles.sectionDesc}>
            Bright-line rules. No exceptions. No gray area.
          </p>
        </motion.div>

        <motion.div
          className={styles.doNotGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
        >
          {doNotList.map((item, i) => (
            <motion.div key={i} className={`${styles.doNotCard} glass`} variants={staggerChild}>
              <p className={styles.doNotRule}>{item.rule}</p>
              <p className={styles.doNotDetail}>{item.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Section 6: Escalation path */}
      <section className={styles.section}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={SPRING}
        >
          <h2 className={styles.sectionTitle}>When in Doubt — Escalation Path</h2>
        </motion.div>

        <motion.div
          className={styles.escalationStack}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
        >
          {escalationSteps.map((item) => (
            <motion.div key={item.step} className={`${styles.escalationCard} glass`} variants={staggerChild}>
              <div className={styles.escalationNum}>{item.step}</div>
              <div>
                {item.href ? (
                  <Link href={item.href} className={styles.escalationAction}>{item.action}</Link>
                ) : (
                  <p className={styles.escalationAction}>{item.action}</p>
                )}
                <p className={styles.escalationDetail}>{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Section 7: Plan type quick reference */}
      <section className={styles.section}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={SPRING}
        >
          <h2 className={styles.sectionTitle}>SEP Plan Type Quick Reference</h2>
          <p className={styles.sectionDesc}>
            Not every SEP allows enrollment in every plan type. Check before you submit.
          </p>
        </motion.div>

        <motion.div
          className={`${styles.tableWrap} glass`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={SPRING}
        >
          <table className={styles.table}>
            <thead>
              <tr>
                <th>SEP Code</th>
                <th className={styles.thCenter}>MA</th>
                <th className={styles.thCenter}>MAPD</th>
                <th className={styles.thCenter}>PDP</th>
                <th className={styles.thCenter}>D-SNP</th>
                <th className={styles.thCenter}>MA-Only</th>
              </tr>
            </thead>
            <tbody>
              {planTypeRef.map((row) => (
                <tr key={row.code}>
                  <td><span className={styles.codeBadge}>{row.code}</span></td>
                  <td className={styles.tdCenter}>{row.ma ? <span className={styles.checkYes}>✓</span> : <span className={styles.checkNo}>—</span>}</td>
                  <td className={styles.tdCenter}>{row.mapd ? <span className={styles.checkYes}>✓</span> : <span className={styles.checkNo}>—</span>}</td>
                  <td className={styles.tdCenter}>{row.pdp ? <span className={styles.checkYes}>✓</span> : <span className={styles.checkNo}>—</span>}</td>
                  <td className={styles.tdCenter}>{row.dsnp ? <span className={styles.checkYes}>✓</span> : <span className={styles.checkNo}>—</span>}</td>
                  <td className={styles.tdCenter}>{row.maOnly ? <span className={styles.checkYes}>✓</span> : <span className={styles.checkNo}>—</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </section>

      {/* Closing callout */}
      <motion.div
        className={`${styles.habitCallout} glass`}
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={SPRING}
      >
        <p className={styles.habitLabel}>The Single Best Habit</p>
        <p className={styles.habitText}>
          If you are not 100% sure the SEP is valid,{' '}
          <strong>pause and verify</strong>. The five minutes it takes to confirm will save you weeks of dealing with a compliance review. Ask before you submit.
        </p>
      </motion.div>

      {/* Cross links */}
      <CrossLinks
        links={[
          { label: 'SEP Check Tool', href: '/sep-check' },
          { label: 'C-SNP Playbook', href: '/csnp' },
          { label: 'SEP Guides', href: '/sep' },
          { label: 'How Calls Are Graded', href: '/how-calls-are-graded' },
        ]}
      />
    </PageShell>
  )
}
