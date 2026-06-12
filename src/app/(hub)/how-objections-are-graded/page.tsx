'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import PageShell from '@/components/layout/PageShell'
import CalloutBlock from '@/components/ui/CalloutBlock'
import CrossLinks from '@/components/ui/CrossLinks'
import styles from './page.module.css'

const tiers = [
  { range: '80–100', label: 'Strong', description: 'Correct tool deployed on nearly every objection. Resistance is being converted consistently.' },
  { range: '60–79', label: 'Proficient', description: 'More converting than losing. Some gaps remain — identifiable and correctable.' },
  { range: '40–59', label: 'Developing', description: 'Roughly split between converting and losing. One or two specific patterns are costing significant ground.' },
  { range: '20–39', label: 'Below Standard', description: 'More surrenders than reframes. A behavioral pattern is preventing consistent conversion.' },
  { range: '0–19', label: 'Critical', description: 'Objections are being accepted as final answers with near-consistency. Immediate focus required.' },
]

export default function HowObjectionsAreGradedPreviewPage() {
  return (
    <PageShell signal="neutral">
      <motion.h1
        className="display-xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={SPRING}
      >
        How Your Objections Are Graded
      </motion.h1>

      <motion.p
        className={`body-lg ${styles.intro}`}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...SPRING, delay: 0.1 }}
      >
        Every objection on every reviewed call is graded individually — and those grades roll up into a single weekly number: your <strong>Objection Handling Score (OHS)</strong>. This page explains how that score works, what it measures, and how to use it to track improvement over time.
      </motion.p>

      <CalloutBlock type="neutral">
        The OHS is not the same as the Objection Handling category on your Certainty Score. Your Certainty Score grades a single call holistically. The OHS counts every individual objection across every call in a week — and tells you how often you actually converted resistance.
      </CalloutBlock>

      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={SPRING}
      >
        <h2 className="display-lg">Two instruments, one skill</h2>
        <p className="body-lg">
          Your Certainty Score already includes an Objection Handling category worth 15 points. That score tells you how objection handling felt across a single call — holistically, from a coach&rsquo;s perspective.
        </p>
        <p className="body-lg" style={{ marginTop: 'var(--space-4)' }}>
          The OHS answers a different question: across every objection you encountered this week, <strong>how often did you actually convert resistance?</strong>
        </p>
        <p className="body-lg" style={{ marginTop: 'var(--space-4)' }}>
          A single strong call can produce a high Objection Handling score on the Certainty Scale while your OHS is low — because that same week you surrendered on multiple other calls. The OHS catches that. Use both numbers together: the Certainty Score tells you how a specific call went. The OHS tells you whether your objection handling pattern is improving week over week.
        </p>
      </motion.section>

      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={SPRING}
      >
        <h2 className="display-lg">The Three Ratings</h2>
        <p className="body-lg">Every objection on every reviewed call receives one of three ratings.</p>
        <div className={styles.ratingGrid}>
          <div className={`${styles.ratingCard} ${styles.ratingStrong}`}>
            <h3 className="heading-md">Strong Reframe</h3>
            <p className="body-md">The correct tool was deployed for the signal the client was sending — and it worked. Requires both: specific acknowledgment of the emotion, and a redirect toward value that moved the call forward.</p>
          </div>
          <div className={`${styles.ratingCard} ${styles.ratingWeak}`}>
            <h3 className="heading-md">Weak Reframe</h3>
            <p className="body-md">An attempt was made — but resistance was not converted. The client remained in the same state after the response as before it. Partial credit because attempting is better than surrendering.</p>
          </div>
          <div className={`${styles.ratingCard} ${styles.ratingSurrendered}`}>
            <h3 className="heading-md">Surrendered</h3>
            <p className="body-md">No legitimate reframe attempt was made. The objection was accepted as a final answer, validated as a stall, or logic was deployed on an emotional signal with no acknowledgment first.</p>
          </div>
        </div>

        <div className={styles.warningBlock} style={{ marginTop: 'var(--space-7)' }}>
          <span className="label">Important</span>
          <p>Re-presenting the benefit with no acknowledgment of the emotion behind the objection is always <strong>Surrendered</strong> — not Weak. Re-presenting is not a reframe. Simply saying &ldquo;I understand&rdquo; before repeating the benefit does not count as acknowledgment. Acknowledgment must name the specific emotion or concern.</p>
        </div>
      </motion.section>

      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={SPRING}
      >
        <h2 className="display-lg">The Formula</h2>
        <div className={styles.formulaBlock}>
          OHS = (Strong × 3 + Weak × 1) ÷ (Total × 3) × 100
        </div>
        <p className="body-lg">
          Weak Reframes earn partial credit because attempting is better than surrendering — but the ratio is intentionally steep. An agent who attempts on every objection but never converts scores 33. That is appropriately low: trying is the right instinct, converting is the job.
        </p>

        <div className={styles.exampleBlock}>
          <span className="label">Worked example</span>
          <p>8 objections reviewed: 3 Strong, 2 Weak, 3 Surrendered.<br />
          (3 × 3) + (2 × 1) = 11<br />
          Maximum possible: 8 × 3 = 24<br />
          OHS = 11 ÷ 24 × 100 = <strong>46 / 100 — Developing</strong></p>
        </div>

        <table className={styles.scoreTable}>
          <thead>
            <tr>
              <th>Scenario</th>
              <th>OHS</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>All Strong</td><td>100</td></tr>
            <tr><td>Half Strong, half Surrendered</td><td>50</td></tr>
            <tr><td>Half Strong, half Weak</td><td>67</td></tr>
            <tr><td>All Weak</td><td>33</td></tr>
            <tr><td>All Surrendered</td><td>0</td></tr>
          </tbody>
        </table>
      </motion.section>

      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={SPRING}
      >
        <h2 className="display-lg">Score Tiers</h2>
        <p className="body-lg">OHS tiers use the same language as Certainty Score performance bands — so both numbers read with the same reference point.</p>
        <table className={styles.tierTable}>
          <thead>
            <tr>
              <th>OHS Range</th>
              <th>Tier</th>
              <th>What It Means</th>
            </tr>
          </thead>
          <tbody>
            {tiers.map((tier) => (
              <tr key={tier.label}>
                <td><strong>{tier.range}</strong></td>
                <td>{tier.label}</td>
                <td>{tier.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.section>

      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={SPRING}
      >
        <h2 className="display-lg">What to Track</h2>
        <p className="body-lg">
          Your OHS appears in your Individual Objection Report (delivered directly to you weekly) and in the Team Objection Report (reviewed by leadership). Track it the same way you track your Certainty Score — as a weekly number with a direction.
        </p>
        <p className="body-lg" style={{ marginTop: 'var(--space-4)' }}>
          Going from 42 to 58 in two weeks means something real: you converted significantly more resistance across your calls. That translates directly into enrollments. The goal is not a perfect score. The goal is a number that moves in one direction: up.
        </p>
      </motion.section>

      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={SPRING}
      >
        <h2 className="display-lg">The One Rule That Covers Everything</h2>
        <div className={styles.ruleBlock}>
          <p>Every client gets at least one legitimate reframe before the call ends. Acknowledge what they expressed — specifically, not generically — and redirect toward the reason they called. That is it. One acknowledgment. One redirect. Before the call ends.</p>
        </div>
        <p className="body-lg">
          If you do that on every objection on every call, your OHS improves. If your OHS improves, your enrollment rate improves. The math is that direct.
        </p>
      </motion.section>

      <CrossLinks links={[
        { label: 'How Your Calls Are Graded', href: '/how-calls-are-graded' },
        { label: 'Objection Handbook', href: '/objections' },
        { label: 'Pillar 2 — Reframing', href: '/pillars/reframing' },
        { label: 'Three Client Signals', href: '/signals' },
        { label: 'Nine Failure Patterns', href: '/patterns' },
      ]} />
    </PageShell>
  )
}
