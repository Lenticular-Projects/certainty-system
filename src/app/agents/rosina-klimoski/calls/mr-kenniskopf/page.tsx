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

export default function MrKenniskopfCallPage() {
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
            <Link href="/agents/rosina-klimoski" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Rosina Klimoski
            </Link>
          </div>
          <h1 className={styles.agentName}>Mr. Kenniskopf</h1>
          <p className={styles.period}>April 14, 2026 · 7:25 · Philadelphia, PA</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(42), fontWeight: 700 }}>42 / 100</span>
            {' · '}Incomplete · Consumer at Work / Unprofessional Close
          </p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(42) }}>42</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>7:25</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '1rem' }}>INCOMPLETE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Not Enrolled</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC4+RC1</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Unprofessional + Discovery</span>
          </div>
        </motion.div>

        {/* ── What Happened ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Mr. Kenniskopf called from Philadelphia, PA (ZIP 19118) — on an Aetna HML POS plan since 2022. He was at work and asked for a callback. The correct response to that is to book a specific time and end the call professionally. What happened instead was a comment that made the consumer feel judged for calling while busy.</p>
            <p>There was also a sequencing compliance error: the plan was discussed before the Scope of Appointment was collected. On a 7-minute call that ends without enrollment, a TPMO sequencing error is a real liability — and it signals to the consumer that the agent isn&apos;t running a structured process. The math never ran. The SOA never ran correctly. The call ended on a bad note.</p>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Plan identification:</strong> You confirmed his current plan (Aetna HML POS, 2022) and his ZIP in the first minutes. That&apos;s the right starting point — you knew what you were working with before getting further into the conversation.</p>
            <p><strong>Objection awareness (7/15):</strong> You recognized that he needed a different time for this call and didn&apos;t force the enrollment on an unavailable consumer. The callback instinct was right — the execution of the close was the problem, not the decision to schedule a callback.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a consumer says they&apos;re at work, the only thing that matters is booking a specific callback time and leaving them feeling respected — not making them defend why they called. &ldquo;No problem at all — what time works best for you tomorrow? I&apos;ll call you at exactly that time.&rdquo;</p>
        </motion.div>

        {/* ── The Moment That Decided This Call ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>~6:30 — &ldquo;I&apos;m not sure why you called in if you&apos;re at work.&rdquo;</strong></p>
            <p>This is the line that ended the relationship. Mr. Kenniskopf called — he initiated this conversation. He was interested enough to pick up the phone. When he said he was at work, he was giving you a reason to reschedule, not a reason to be doubted. A comment that implies he shouldn&apos;t have called puts him on the defensive and makes the callback significantly less likely to happen.</p>
            <p>The correct close when a consumer says they&apos;re busy: <em>&ldquo;Completely understood — I&apos;ll let you get back to it. What time tomorrow works best? Morning or afternoon? I&apos;ll call you at exactly that time and we can take about 15 minutes to go over your options.&rdquo;</em></p>
            <p>Book the time. Confirm the number. End on a positive note. He called because he was interested in his options — make sure he wants to take the callback.</p>
            <p>Separately: the TPMO sequencing issue (plan discussed before SOA) needs to be corrected on every call going forward. The SOA must be collected before any plan-specific conversation. This isn&apos;t optional — it&apos;s a compliance requirement that protects you.</p>
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
              { cat: 'Signal Reading', score: 8, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 7, max: 15 },
              { cat: 'Call Outcome Quality', score: 3, max: 10 },
              { cat: 'Compliance', score: 9, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: row.score === 0 ? 'var(--terracotta)' : scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}>
              <span>Total: <strong>42 / 100</strong></span>
            </div>
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Rosina Klimoski · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC4 · RC1 · TPMO Sequencing · Aetna HML POS · Philadelphia PA</p>
        </div>

      </div>
    </PageShell>
  )
}
