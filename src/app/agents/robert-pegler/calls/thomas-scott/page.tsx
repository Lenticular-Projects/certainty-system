'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from '../../page.module.css'

function scoreColor(score: number) {
  if (score >= 75) return 'var(--sage-dark)'
  if (score >= 55) return 'var(--mustard-dark)'
  return 'var(--terracotta)'
}

export default function ThomasScottCallPage() {
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
            <Link href="/agents/robert-pegler" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Robert Pegler
            </Link>
          </div>
          <h1 className={styles.agentName}>Thomas Scott</h1>
          <p className={styles.period}>April 14, 2026 · 37:36 · Decatur, GA</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(51), fontWeight: 700 }}>51 / 100</span>
            {' · '}Missed Opportunity · The Detail Staller
          </p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(51) }}>51</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>37:36</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1.1rem' }}>MISSED</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Missed Opportunity</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC2</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Argumentative under pressure</span>
          </div>
        </motion.div>

        {/* ── What Happened ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Thomas Scott called from Decatur, GA — recently moved, which opened a MOV SEP. You identified it correctly at 11:07. You ran a thorough 37-minute call: complete provider discovery, doctor and pharmacy verification, detailed plan comparison. The technical work was strong.</p>
            <p>At 30:15, Thomas asked for documentation. You said &ldquo;I hear that all the time.&rdquo; At 34:26, when he mentioned he was driving, you said &ldquo;I sign people up on the road all the time.&rdquo; Both responses were direct contradictions of his concerns. The consumer went from engaged to disengaged, and the call was unrecoverable by minute 36.</p>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>SEP identification (11:07):</strong> Correctly identified the Change of Residence MOV SEP early in the call. You had the enrollment justification to close today.</p>
            <p><strong>Provider discovery (11:35):</strong> Detailed discovery of Thomas&apos;s doctors, hospital, and pharmacy — complete picture of his care team before presenting a plan. That&apos;s the right sequence.</p>
            <p><strong>Compliance opening (0:42):</strong> TPMO and SOA delivered correctly. Compliant foundation.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>At 30:15 when Thomas asked for documents: &ldquo;Thomas, what&apos;s the one thing you&apos;d want to confirm? I have everything right here — I can likely answer it right now.&rdquo; A question keeps him talking. &ldquo;I hear that all the time&rdquo; ends the call.</p>
        </motion.div>

        {/* ── The Moment That Decided This Call ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>30:15 — &ldquo;I hear that all the time.&rdquo;</strong></p>
            <p>Thomas had been engaged for 30 minutes. He asked for documentation — a classic &ldquo;I need more before I commit&rdquo; signal, not a hard no. Your response communicated: your concern is ordinary and not worth taking seriously. That&apos;s what the consumer heard.</p>
            <p>The response at 30:15: <em>&ldquo;Thomas, that&apos;s smart — what&apos;s the one thing you&apos;d want to confirm in those documents? I have the plan details right here and can likely answer it now.&rdquo;</em> A question keeps the conversation going. It treats his concern as legitimate and puts him in control of the next step.</p>
            <p><strong>34:26 — &ldquo;I sign people up on the road all the time.&rdquo;</strong></p>
            <p>Second direct contradiction. Thomas said he was driving. Your response invalidated that reality instead of adapting to it. The move: &ldquo;That&apos;s fine — I just need two more minutes. When you park, I can have you set up before you walk in.&rdquo; Meet him where he is, then ask for the close on his timeline.</p>
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
              { cat: 'Lead Quality', score: 10, max: 20 },
              { cat: 'Signal Reading', score: 9, max: 20 },
              { cat: 'Math Breakdown', score: 7, max: 20 },
              { cat: 'Objection Handling', score: 4, max: 15 },
              { cat: 'Call Outcome Quality', score: 6, max: 10 },
              { cat: 'Compliance', score: 15, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: row.score === 0 ? 'var(--terracotta)' : scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}>
              <span>Total: <strong>51 / 100</strong></span>
            </div>
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Robert Pegler · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC2 · MOV SEP · Argumentative Tone · &quot;I Hear That All the Time&quot; · Documentation Stall</p>
        </div>

      </div>
    </PageShell>
  )
}
