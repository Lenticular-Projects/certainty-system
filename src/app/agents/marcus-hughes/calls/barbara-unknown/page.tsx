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

export default function BarbaraUnknownCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>

        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <Link href="/agents/marcus-hughes" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              ← Marcus Hughes
            </Link>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Call Report</span>
          </div>
          <h1 className={styles.agentName}>Barbara (Callback)</h1>
          <p className={styles.period}>April 15, 2026 · 2:10 · Callback Scheduling — Consumer Unavailable</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(22), fontWeight: 700 }}>22 / 100</span>
            {' · '}INCOMPLETE
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(22) }}>22</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>2:10</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>Apr 15, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '1rem' }}>INCOMPLETE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Consumer asleep</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1, RC4</span>
            <span className={styles.scoreLabel}>Root Causes</span>
            <span className={styles.scoreRange}>No time locked · Compliance</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>This was a callback attempt to Barbara — an existing client — following the earlier call on April 15. The call connected through a third party, a housemate or family member who answered and said Barbara was sleeping. You immediately offered to let her sleep and reschedule, which was the right call. Don't wake a groggy consumer and pitch them.</p>
            <p>Barbara eventually came to the phone, briefly confirmed she just woke up, and asked for a callback later. You agreed and ended the call at 2:10. No discovery, no plan presentation, no compliance disclosures, no enrollment. The score of 22 reflects the absence of any substantive call activity — not a failed sales call. The two coaching points are narrow: you didn't lock in a specific callback time, and you didn't deliver the opening compliance disclosures that are required on every consumer contact regardless of call length.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>At 1:08, when the third party said Barbara was sleeping, you immediately said "Oh I got you. If she's sleeping okay don't bother her okay?" — you stopped them from waking her. That is the right instinct. A forced interaction with a half-asleep consumer destroys the trust you built in the first call and produces no enrollment. You protected the relationship for the next attempt.</p>
            <p>When Barbara did come to the phone, you kept the tone warm, apologized for waking her, and made it easy for her to defer without feeling pressured. That unhurried quality matters on a re-engagement call with an 80-year-old who had already given you 30 minutes earlier in the day. You left her feeling respected — which gives the next call a better starting point.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>
            Before hanging up: "I'll call you back at 3 o'clock today — does that work for you, Barbara?" Thirty more seconds on this call converts a vague "later" into a confirmed appointment.
          </p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>2:00. Barbara said "Yes Marcus" to the callback question, and you said "Alright Barbara. Bye bye." That was the moment to lock in a time. "Call me back later" is a soft decline waiting to happen — especially with an 80-year-old who just woke up from a nap and has a daughter around who may talk her out of any plan changes.</p>
            <p>One more sentence: "I'll call you at 3 PM today — does that work?" That sentence converts an open-ended deferral into a scheduled appointment on her calendar. You had her name, you had the goodwill from the earlier call, and she was on the phone. The time ask was the only missing piece. Make it automatic — every callback arrangement ends with a confirmed time before you hang up.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Score Breakdown</h2>
          <div className={styles.callTable}>
            <div className={styles.callTableHeader}>
              <span>Category</span>
              <span>Score</span>
              <span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 4, max: 20 },
              { cat: 'Signal Reading', score: 2, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 0, max: 15 },
              { cat: 'Call Outcome Quality', score: 5, max: 10 },
              { cat: 'Compliance', score: 11, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>22 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Marcus Hughes · Barbara (Callback) · April 15, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 (No Time Locked) · RC4 (Missing Opening Compliance)</p>
        </div>

      </div>
    </PageShell>
  )
}
