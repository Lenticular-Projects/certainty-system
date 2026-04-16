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

export default function FaustinoFernandezCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Call Report</span>
            <span className={styles.dot}>·</span>
            <Link href="/agents/jean-pierre-riviere" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Jean Pierre Riviere
            </Link>
          </div>
          <h1 className={styles.agentName}>Faustino Fernandez</h1>
          <p className={styles.period}>April 14, 2026 · 5:59 · The Unavailable Caller</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(44), fontWeight: 700 }}>44 / 100</span>
            {' · '}INCOMPLETE
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(44) }}>44</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>5:59</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>Apr 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '1rem' }}>INCOMPLETE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Consumer outside, no card</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1 · RC4 · RC6</span>
            <span className={styles.scoreLabel}>Root Causes</span>
            <span className={styles.scoreRange}>No callback · SSN early</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Faustino Fernandez, a 66-year-old in Portland, TX turning 67 in June, called about the food card benefit. He was outside walking when he called — noisy environment, no Medicare card on him. The call never reached plan presentation. After discovering he didn't have his card, you asked for his SSN at 4:26 (before presenting any benefits), he hesitated, and at 5:44 he offered to call back once home, mentioning he could provide his "military number." You said "Okay, no problem" and the call ended.</p>
            <p>Two missed signals at 5:44: first, he offered to call back with a specific time commitment available — you gave no direct callback number and set no scheduled time. Second, "military number" is a potential VA or TRICARE coverage indicator, which would open a CDC SEP window available year-round. Neither signal was explored before hanging up.</p>
            <p>The consumer was not hostile — he was practically unavailable. This is a recoverable lead if the callback is executed. But "okay, no problem" is not a callback commitment. It is a lost lead.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>When Faustino challenged the call at 0:53 — "Is this a scam or is this for real?" — you stayed calm and redirected to Medicare credentials without getting defensive. The call survived a skeptical opening that kills many agents before they even start.</p>
            <p>Your TPMO disclaimer at 3:30 was complete and accurate: two carriers, 13 plans, Medicare.gov, and 1-800-MEDICARE all mentioned. That's correct compliance execution.</p>
            <p>The rapport moment at 1:54 when Faustino corrected your name pronunciation — you accepted it naturally and joked "sounds like a mariachi king" — was the right instinct. It kept him warm during an early skeptical window.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>Before he hung up: "Mr. Fernandez, let me give you my direct number — 561-264-8773. What time do you think you'll be home today? When you call back, have your Medicare card and let me know if you have any VA benefits — that could actually give you more options. I'll have the food card benefit amount pulled up for your zip code. This takes about 10 minutes once we have your card."</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>At 5:44, Faustino offered to call back and mentioned his military number. That statement contained two things: a callback opportunity and a CDC SEP signal. You had one move available — give him your direct number, ask what time he gets home, and drop the food card dollar amount as a hook so he has a reason to actually follow through. "Based on your zip code, the food card benefit is up to [amount] per month. When you call back with your card, this takes about 10 minutes."</p>
            <p>Without a specific time, a direct number, and a benefit hook, the callback relies entirely on the consumer's initiative. Most don't follow through. The military reference should have also been flagged before hanging up: "You mentioned a military number — are you receiving any VA health benefits right now?" One question. It either confirms a CDC SEP or rules it out. It takes five seconds. It was not asked.</p>
            <p>Additionally, SSN was requested at 4:26 before any plan benefits were presented. Faustino's visible reluctance at that point was a direct consequence of being asked for sensitive information before he'd been shown why the call was worth his time. SSN belongs in Phase VI, after the consumer has seen the value and agreed to proceed.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Score Breakdown</h2>
          <div className={styles.callTable}>
            <div className={styles.callTableHeader}>
              <span>Category</span><span>Score</span><span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 10, max: 20 },
              { cat: 'Signal Reading', score: 3, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 5, max: 15 },
              { cat: 'Call Outcome Quality', score: 5, max: 10 },
              { cat: 'Compliance', score: 11, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>44 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Jean Pierre Riviere · Faustino Fernandez · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC4 · RC6 · CDC SEP possible (military reference, unconfirmed)</p>
        </div>
      </div>
    </PageShell>
  )
}
