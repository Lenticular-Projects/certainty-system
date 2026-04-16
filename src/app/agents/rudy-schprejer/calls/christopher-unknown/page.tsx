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

export default function ChristopherUnknownCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <Link href="/agents/rudy-schprejer" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              ← Rudy Schprejer
            </Link>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Call Report</span>
          </div>
          <h1 className={styles.agentName}>Christopher</h1>
          <p className={styles.period}>April 15, 2026 · 7:33 · Inbound — The Money Caller</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(14), fontWeight: 700 }}>14 / 100</span>
            {' · '}INCOMPLETE
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(14) }}>14</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>7:33</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 15, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '0.95rem' }}>INCOMPLETE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>System failure — lead lost</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC4/RC5</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Conduct + Abandonment</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Christopher called in about a grocery card — a motivated inbound lead with a specific benefit in mind. You opened correctly at 0:00 with the recorded-line notice and TPMO disclaimer. You asked the right qualification questions: Part A/B confirmation (0:25), decision-maker status (1:27), nursing home situation (1:38), medication awareness (1:44), and callback number (1:20). The pre-qualification sequence was clean and efficient.</p>
            <p>At 1:58, Christopher provided what appeared to be a Medicare number (245-414310). The system could not find it. You spent the next four minutes attempting the same lookup repeatedly, transposing digits, and growing visibly frustrated. By 5:21 you appear to have begun a side conversation — possibly with a trainee — explaining Part B to someone off-call while Christopher remained silently on the line.</p>
            <p>At 6:50, audible on the recorded line: "What the fuck is this." Repeated at 7:09 and 7:31. The call ended at 7:33 with no goodbye, no callback offer, and no information delivered to Christopher. He received nothing.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>The first 90 seconds were executed well. You delivered the full TPMO disclaimer with the 41-plan count, Medicare.gov reference, and 1-800-MEDICARE number within the required timeframe. You confirmed the callback number at 1:20 — which at least means Christopher's number is on record for a follow-up.</p>
            <p>Before the system failure, you ran the pre-qualification checklist correctly and efficiently: decision-maker status, living situation, medication awareness, Medicare card request. That sequence was solid. The failure was entirely in what came after.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When the system fails, you have a script: "Christopher, I'm running into a technical issue on my end — let me call you back at the 8965 number within the hour with everything ready to go, including the food card information you called about." Lead preserved. Call ended cleanly.</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>3:48 — the system returned nothing. That was the decision point. You had Christopher's callback number. He had been patient through every lookup attempt. The correct move was immediate: "Christopher, my system is giving me trouble today — not yours. I don't want to waste your time. Can I call you back at the 8965 number within the next hour with the food card information? I'll have everything ready." That's the move. Lead preserved, relationship intact, call closed with dignity.</p>
            <p>Instead you continued cycling through the same failed lookup, went silent, drifted into a side conversation, and ultimately expressed frustration on a recorded line — three times. The line is always hot. When you're frustrated with a system, you mute the call before reacting. There is no exception to this. "What the fuck is this" at 6:50 on a recorded call is a compliance and professional conduct issue that must not happen again.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Score Breakdown</h2>
          <div className={styles.callTable}>
            <div className={styles.callTableHeader}>
              <span>Category</span><span>Score</span><span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 5, max: 20 },
              { cat: 'Signal Reading', score: 0, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 0, max: 15 },
              { cat: 'Call Outcome Quality', score: 2, max: 10 },
              { cat: 'Compliance', score: 7, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>14 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Rudy Schprejer · Christopher · April 15, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC4 — Profanity on Recorded Line · RC5 — Call Abandoned Without Resolution · RC1 — No System Failure Recovery</p>
        </div>
      </div>
    </PageShell>
  )
}
