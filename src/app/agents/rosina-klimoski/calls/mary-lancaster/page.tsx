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

export default function MaryLancasterCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>

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
          <h1 className={styles.agentName}>Mary Lancaster</h1>
          <p className={styles.period}>April 13, 2026 · 13:08 · North Carolina</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(33), fontWeight: 700 }}>33 / 100</span>
            {' · '}Missed Opportunity · The Money Caller — MOV SEP
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(33) }}>33</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>13:08</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 13, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1.1rem' }}>MISSED</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Missed Opportunity</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC6</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>MOV SEP not converted</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Mary called interested in the food card and open to reviewing her 2026 benefits. You opened cleanly, collected her zip, Medicare number, and date of birth. Then your system went down — a lookup failure that ate nearly six minutes of the call between 3:38 and 7:00. That&apos;s a technical problem, not a sales problem.</p>
            <p>What followed the system failure was a sales problem. At 12:07 you confirmed Mary had a MOV Special Enrollment Period — she had recently moved — and that Humana offered a plan with money back on Social Security. Then, because you couldn&apos;t access Humana&apos;s plan data in your system, you offered to transfer her. A consumer who stayed on the line for 13 minutes through a broken system was handed to someone else at the moment she was closest to enrolling.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Compliance open (0:32):</strong> TPMO delivered correctly and early. Clean start to the call.</p>
            <p><strong>MOV SEP identified (2:56):</strong> You correctly caught that Mary had recently moved and recognized it as a Special Enrollment Period trigger. That&apos;s the right call and the right knowledge. The SEP identification was solid — the conversion of it wasn&apos;t.</p>
            <p><strong>Consumer stayed on the line:</strong> Mary held through six minutes of system failures. That is a warm consumer who trusted you enough to wait. That trust had real value, and it deserved a better close than a transfer.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When you identify a MOV SEP, that is the enrollment hook — not a detail to pass along. The pivot: &ldquo;Mary, because you moved recently you have a window to change your coverage right now. This isn&apos;t something we need to schedule — we can take care of it today.&rdquo; Then you find a way to get the plan data, not a transfer.</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>12:07 — Transfer offered instead of enrollment closed.</strong></p>
            <p>You had the SEP. You had a warm consumer. The system not loading Humana&apos;s plan data was a logistical problem — the solution was to work around it, not hand the call off. Options at 12:07: quote from memory what you know about the plan, acknowledge the system issue and commit to calling her back within the hour with the specific numbers, or find the plan data through a different path.</p>
            <p>What a transfer communicates to the consumer is: this agent couldn&apos;t help me. What you needed her to feel was: this agent is doing everything possible to get me what I need today. Even if the enrollment didn&apos;t complete on this call, closing the loop with a specific callback commitment — &ldquo;Mary, my system is giving me trouble with the Humana data right now. I&apos;m going to pull it up and call you back in the next 30 minutes with the exact numbers. Can I reach you at this number?&rdquo; — keeps the lead alive and keeps trust intact.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Score Breakdown</h2>
          <div className={styles.callTable}>
            <div className={styles.callTableHeader}>
              <span>Category</span><span>Score</span><span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 7, max: 20 },
              { cat: 'Signal Reading', score: 8, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 4, max: 15 },
              { cat: 'Call Outcome Quality', score: 3, max: 10 },
              { cat: 'Compliance', score: 11, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: row.score === 0 ? 'var(--terracotta)' : scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>33 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Rosina Klimoski · April 13, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC6 · MOV SEP · System Failure Recovery · Transfer vs. Callback</p>
        </div>

      </div>
    </PageShell>
  )
}
