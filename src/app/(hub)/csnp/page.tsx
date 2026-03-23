'use client'

import { motion } from 'framer-motion'
import PageShell from '@/components/layout/PageShell'
import CrossLinks from '@/components/ui/CrossLinks'
import { SPRING, staggerContainer, staggerChild } from '@/lib/motion'
import styles from './page.module.css'

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const stats = [
  { value: '17 million', label: 'Eligible beneficiaries' },
  { value: 'Year-round', label: 'SEP window' },
  { value: 'None', label: 'Time limit from diagnosis' },
]

interface ConditionCluster {
  id: string
  title: string
  conditions: string[]
}

const clusters: ConditionCluster[] = [
  {
    id: 'cardiovascular',
    title: 'Cardiovascular',
    conditions: ['Heart failure', 'Cardiovascular disorders', 'Stroke / CVA'],
  },
  {
    id: 'metabolic',
    title: 'Metabolic',
    conditions: ['Diabetes', 'ESRD / Dialysis', 'End-stage liver disease'],
  },
  {
    id: 'respiratory',
    title: 'Respiratory',
    conditions: ['COPD', 'Emphysema'],
  },
  {
    id: 'neurological',
    title: 'Neurological',
    conditions: ["Dementia / Alzheimer's", "Parkinson's", 'Epilepsy', 'ALS'],
  },
  {
    id: 'mental-health',
    title: 'Mental Health',
    conditions: ['Schizophrenia', 'Bipolar disorder', 'Major depression'],
  },
  {
    id: 'immune-blood',
    title: 'Immune / Blood',
    conditions: ['HIV/AIDS', 'Autoimmune disorders (lupus, RA, MS)', 'Hematologic disorders'],
  },
  {
    id: 'other',
    title: 'Other',
    conditions: ['Cancer (active)', 'Chronic alcohol/drug dependence'],
  },
]

const carrierPortals = [
  { carrier: 'Humana', portal: 'Vantage / Mentor (DMS-024)', search: 'Plan type: C-SNP → enter ZIP' },
  { carrier: 'UHC', portal: 'Producer portal → Plan Finder', search: 'Filter by SNP type: Chronic' },
  { carrier: 'Aetna', portal: 'Producer World → Medicare Quoting', search: 'Enable SNP plans filter' },
  { carrier: 'WellCare / Centene', portal: 'Agent portal → Quote & Enroll', search: 'Select C-SNP plan category' },
  { carrier: 'Devoted', portal: 'Agent portal → SEP tracker', search: 'Search by condition type' },
]

const discoveryQuestions = [
  {
    number: 1,
    question: '"Do you have any ongoing health conditions — like diabetes, heart failure, or COPD?"',
    note: 'Plant the seeds. Name the most common qualifying conditions so the caller self-identifies.',
  },
  {
    number: 2,
    question: '"Have you been diagnosed with that, or are you currently managing it?"',
    note: 'Confirm the condition is documented — not just suspected.',
  },
  {
    number: 3,
    question: '"Are you currently enrolled in a Special Needs Plan for that condition?"',
    note: 'If yes: check if a different condition triggers a new SEP. If no: proceed to enrollment.',
  },
]

const eligibilitySteps = [
  {
    number: 1,
    title: 'Condition confirmed',
    detail: 'The beneficiary has a qualifying chronic condition. Confirmed — not assumed.',
  },
  {
    number: 2,
    title: 'C-SNP available in their county',
    detail: 'Check carrier portals. Not every county has a C-SNP. Confirm availability before promising anything.',
  },
  {
    number: 3,
    title: 'Not already on a C-SNP for that condition',
    detail: 'Same condition = no new SEP. A different new condition = new C-SNP SEP.',
  },
  {
    number: 4,
    title: 'Provider attestation is time-bound',
    detail: 'Required within 2 months of enrollment. If missed, beneficiary gets a 2-month SNP SEP to make a new election.',
  },
]

const guardrails = [
  {
    rule: 'No C-SNP → C-SNP for the same condition',
    explanation: 'The SEP requires a new or different qualifying condition. Same diagnosis, same plan type = no eligibility.',
  },
  {
    rule: 'Check county availability first',
    explanation: "Confirm the plan exists in the beneficiary's county before confirming eligibility. Promise a plan you can't deliver and you've lost the call.",
  },
  {
    rule: 'Provider attestation is 2 months',
    explanation: 'If the beneficiary misses the attestation window, the plan may disenroll them. Make sure they understand the requirement.',
  },
]

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function CsnpPlaybookPage() {
  return (
    <PageShell signal="green">
      {/* Hero */}
      <header className={styles.hero}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.05 }}
        >
          Special Enrollment Period
        </motion.p>
        <motion.h1
          className={`${styles.headline} display-xl`}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.1 }}
        >
          The C-SNP Playbook
        </motion.h1>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.2 }}
        >
          The one SEP to ask about on every call. 17 million eligible beneficiaries. Year-round. No expiration.
        </motion.p>
      </header>

      {/* Opportunity stats */}
      <motion.div
        className={styles.statsRow}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...SPRING, delay: 0.3 }}
      >
        {stats.map((stat) => (
          <div key={stat.label} className={`${styles.statCard} glass`}>
            <p className={styles.statValue}>{stat.value}</p>
            <p className={styles.statLabel}>{stat.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Qualifying conditions */}
      <section className={styles.section}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={SPRING}
        >
          <p className={styles.sectionEyebrow}>Step 1</p>
          <h2 className={styles.sectionTitle}>Qualifying Conditions</h2>
          <p className={styles.sectionDesc}>
            When a caller mentions any of these — stop and ask. That moment is your SEP.
          </p>
        </motion.div>

        <motion.div
          className={styles.clustersGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
        >
          {clusters.map((cluster) => (
            <motion.div
              key={cluster.id}
              className={`${styles.clusterCard} glass`}
              variants={staggerChild}
            >
              <p className={styles.clusterTitle}>{cluster.title}</p>
              <ul className={styles.conditionList}>
                {cluster.conditions.map((condition) => (
                  <li key={condition} className={styles.conditionItem}>
                    {condition}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Discovery questions */}
      <section className={styles.section}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={SPRING}
        >
          <p className={styles.sectionEyebrow}>Step 2</p>
          <h2 className={styles.sectionTitle}>The 3 Discovery Questions</h2>
          <p className={styles.sectionDesc}>
            Say these in order. Do not skip ahead.
          </p>
        </motion.div>

        <motion.div
          className={styles.questionsStack}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
        >
          {discoveryQuestions.map((item) => (
            <motion.div key={item.number} className={`${styles.questionCard} glass`} variants={staggerChild}>
              <div className={styles.questionNumber}>{item.number}</div>
              <div className={styles.questionBody}>
                <p className={styles.questionText}>{item.question}</p>
                <p className={styles.questionNote}>{item.note}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Talk track */}
      <section className={styles.section}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={SPRING}
        >
          <p className={styles.sectionEyebrow}>Step 3</p>
          <h2 className={styles.sectionTitle}>The Talk Track</h2>
          <p className={styles.sectionDesc}>
            Once you have confirmed eligibility, say this.
          </p>
        </motion.div>

        <motion.div
          className={`${styles.talkTrackCard} glass`}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={SPRING}
        >
          <div className={styles.talkTrackQuote}>&ldquo;</div>
          <p className={styles.talkTrackText}>
            Because you have{' '}
            <span className={styles.talkTrackVar}>[condition]</span>, you may actually qualify for a Special Needs Plan built specifically for people managing that. These plans often have lower copays and benefits tailored to your exact needs &mdash; and you can enroll right now, outside of AEP.
          </p>
          <div className={styles.talkTrackQuoteClose}>&rdquo;</div>
        </motion.div>
      </section>

      {/* Eligibility verification */}
      <section className={styles.section}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={SPRING}
        >
          <p className={styles.sectionEyebrow}>Step 4</p>
          <h2 className={styles.sectionTitle}>Eligibility Verification</h2>
          <p className={styles.sectionDesc}>
            All four must be true before you submit.
          </p>
        </motion.div>

        <motion.div
          className={styles.stepsGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
        >
          {eligibilitySteps.map((step) => (
            <motion.div key={step.number} className={`${styles.stepCard} glass`} variants={staggerChild}>
              <div className={styles.stepNumber}>{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDetail}>{step.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Carrier portal reference */}
      <section className={styles.section}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={SPRING}
        >
          <h2 className={styles.sectionTitle}>Where to Check C-SNP Availability</h2>
          <p className={styles.sectionDesc}>
            Confirm a C-SNP exists in their county before promising anything.
          </p>
        </motion.div>

        <motion.div
          className={`${styles.tableWrap} glass`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={SPRING}
        >
          <table className={styles.carrierTable}>
            <thead>
              <tr>
                <th>Carrier</th>
                <th>Portal / Tool</th>
                <th>What to search</th>
              </tr>
            </thead>
            <tbody>
              {carrierPortals.map((row) => (
                <tr key={row.carrier}>
                  <td className={styles.tdCarrier}>{row.carrier}</td>
                  <td className={styles.tdPortal}>{row.portal}</td>
                  <td className={styles.tdSearch}>{row.search}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </section>

      {/* Compliance guardrails */}
      <section className={styles.section}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={SPRING}
        >
          <h2 className={styles.sectionTitle}>Compliance Guardrails</h2>
          <p className={styles.sectionDesc}>
            Three rules. Know them cold.
          </p>
        </motion.div>

        <motion.div
          className={styles.guardrailsStack}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
        >
          {guardrails.map((item, i) => (
            <motion.div key={i} className={`${styles.guardrailCard} glass`} variants={staggerChild}>
              <p className={styles.guardrailRule}>{item.rule}</p>
              <p className={styles.guardrailExplanation}>{item.explanation}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* New condition = new SEP callout */}
      <motion.div
        className={`${styles.newCondCallout} glass`}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={SPRING}
      >
        <p className={styles.newCondLabel}>New Condition = New SEP</p>
        <p className={styles.newCondText}>
          If they&apos;re already on a C-SNP: a second qualifying condition is a new SEP. Diabetic on a diabetes C-SNP who now has heart failure &rarr; can enroll in a heart failure C-SNP. Same condition &rarr; no. Different condition &rarr; yes.
        </p>
      </motion.div>

      {/* Cross links */}
      <CrossLinks
        links={[
          { label: 'SEP Check Tool', href: '/sep-check' },
          { label: 'Chronic & Special Needs', href: '/sep/chronic-special-needs' },
          { label: 'Compliance Cheat Sheet', href: '/sep-compliance' },
          { label: 'SEP Guides', href: '/sep' },
        ]}
      />
    </PageShell>
  )
}
