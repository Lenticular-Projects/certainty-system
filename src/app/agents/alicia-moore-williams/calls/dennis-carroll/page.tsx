'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

function scoreColor(score: number) {
  if (score >= 75) return 'var(--sage-dark)'
  if (score >= 55) return 'var(--mustard-dark)'
  return 'var(--terracotta)'
}

export default function DennisCarrollCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>

        {/* ── Header ── */}
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Call Report</span>
            <span className={styles.dot}>·</span>
            <Link href="/agents/alicia-moore-williams" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Alicia Moore Williams
            </Link>
          </div>
          <h1 className={styles.agentName}>Dennis Carroll</h1>
          <p className={styles.period}>April 13, 2026 · 7:49 · Hendersonville, TN</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(54), fontWeight: 700 }}>54 / 100</span>
            {' · '}Incomplete · Third-Party Call
          </p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(54) }}>54</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>7:49</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 13, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '1rem' }}>INCOMPLETE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Third-Party Call</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC4 · RC6</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Auth gap + Medicaid abandoned</span>
          </div>
        </motion.div>

        {/* ── What Happened ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Dennis Carroll&apos;s sister Corey called on his behalf about the grocery card. Dennis is an under-65 disability Medicare beneficiary — a caller profile that unlocks INT SEP if Medicaid is also present. You handled the third-party opener cleanly, confirmed the TPMO disclaimer, and located Dennis&apos;s doctor (Dr. Julie Dunn) as in-network.</p>
            <p>At 5:21 Dennis mentioned he had &ldquo;medical Part B and then A and B both&rdquo; — language that likely signals TennCare (Tennessee Medicaid) alongside Medicare. You acknowledged the statement and moved on. The Medicaid probe was abandoned. If TennCare was present, that was your INT SEP and your OTC unlock — the exact benefit Corey called about. The call ended incomplete because Corey is Dennis&apos;s rent payee, not his healthcare decision-maker, and the enrollment authorization gap was never resolved.</p>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Third-party consent handling from the start:</strong> When Corey identified herself as Dennis&apos;s sister rather than Dennis himself, you immediately confirmed she had his permission to call and was present to assist. That&apos;s correct protocol — most agents skip this step entirely.</p>
            <p><strong>TPMO compliance delivered correctly:</strong> Full disclaimer with carrier count and Medicare.gov reference was in place before you began discovery. No rushing, no omissions.</p>
            <p><strong>Doctor network confirmation at the right moment:</strong> You asked for Dennis&apos;s physician by name, confirmed Dr. Julie Dunn in-network, and did it before presenting any plan. The sequencing was right — suitability before pitch.</p>
            <p><strong>Authority gap recognized:</strong> You caught that Corey is the rent payee, not Dennis&apos;s healthcare agent. Rather than proceeding without authorization, you flagged the gap. That is the compliant move.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>At 5:21 when the Medicaid ambiguity came up, that was the signal, not background noise. The line: &ldquo;Corey, does Dennis also have TennCare? Because if he does, he qualifies for a special plan that includes the grocery card benefit built in — which is exactly what you called about. Let me check that right now.&rdquo;</p>
        </motion.div>

        {/* ── The Moment That Decided This Call ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>5:21 — &ldquo;He&apos;s got medical Part B and then he&apos;s got A and B both.&rdquo;</strong></p>
            <p>For an under-65 disability Medicare beneficiary in Tennessee, this phrasing almost always points to dual enrollment — Medicare plus TennCare. That combination triggers INT SEP and unlocks the highest OTC tier available. It was also the exact product Corey called about. You had the hook and the eligibility signal in the same sentence.</p>
            <p>The correct move was to stop and confirm the TennCare question directly before doing anything else. If confirmed, the rest of the call becomes straightforward: INT SEP, D-SNP plan, Dr. Dunn in-network, grocery card unlocked. Instead the probe was dropped and the call wound down incomplete without a clear path forward for Dennis.</p>
            <p>The authorization gap with Corey is real and should be respected — but it doesn&apos;t prevent you from gathering the Medicaid confirmation and scheduling a follow-up with Dennis directly. Two sentences: &ldquo;Let me get the Medicaid piece confirmed while I have you, and then we&apos;ll set up a time to complete the enrollment with Dennis on the line.&rdquo;</p>
          </div>
        </motion.div>

        {/* ── Score Breakdown ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Score Breakdown</h2>
          <div className={styles.callTable}>
            <div className={styles.callTableHeader}>
              <span>Category</span>
              <span>Score</span>
              <span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 14, max: 20 },
              { cat: 'Signal Reading', score: 10, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 10, max: 15 },
              { cat: 'Call Outcome Quality', score: 5, max: 10 },
              { cat: 'Compliance', score: 13, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: row.score === 0 ? 'var(--terracotta)' : scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}>
              <span>Total: <strong>54 / 100</strong></span>
            </div>
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Alicia Moore Williams · Dennis Carroll · April 13, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC4 · RC6 · INT SEP Missed · Third-Party Call · Hendersonville TN</p>
        </div>

      </div>
    </PageShell>
  )
}
