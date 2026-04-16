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

export default function JoyceAlexanderCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Call Report</span>
            <span className={styles.dot}>·</span>
            <Link href="/agents/natasha-jones" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Natasha Jones
            </Link>
          </div>
          <h1 className={styles.agentName}>Joyce Alexander</h1>
          <p className={styles.period}>April 15, 2026 · 20:20 · Money Caller / Spousal Pivot</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(50), fontWeight: 700 }}>50 / 100</span>
            {' · '}MISSED OPPORTUNITY
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(50) }}>50</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>20:20</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 15, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>MISSED OPP</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Enrollable prospect, no attempt</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1 · RC6</span>
            <span className={styles.scoreLabel}>Root Causes</span>
            <span className={styles.scoreRange}>Callback sub · SEP missed</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>
              Joyce Alexander, 80, called from Brookfield, Ohio asking about the $1,420 food benefit. You confirmed
              quickly that she&apos;s already on a UnitedHealthcare C-SNP getting the maximum $85/month for her
              area — no upgrade possible for her. When you delivered that news, Joyce said &quot;What about my
              husband?&quot; and opened the door to the real enrollment opportunity.
            </p>
            <p>
              You pivoted correctly. You collected Ralph&apos;s Medicare ID (QM42), date of birth (10/28/1948), and
              identified him on Devoted PPO getting $30/quarter in OTC. Ralph has Parkinson&apos;s — a CSN SEP that
              opens enrollment year-round. You found two genuine upgrade paths: a $184.70 Part B giveback plan or a
              $200/month food and home card. Joyce said &quot;Okay, that would be nice&quot; at 14:15. She said
              &quot;Makes sense&quot; at 18:34 after your math summary. You had his Medicare ID, his DOB, his
              carrier, his condition, and spousal proxy authorization.
            </p>
            <p>
              Then at 17:29 you announced you were handing off to a Devoted specialist named Rosie and would call
              back within 30 minutes. Joyce told you at 18:44 that she normally doesn&apos;t answer unknown numbers.
              You acknowledged it and gave Rosie&apos;s number anyway. Ralph Alexander&apos;s enrollment went with
              that callback.
            </p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>
              Your TPMO compliance at 0:58 was textbook — two-organization disclosure, 26-product count,
              Medicare.gov and 1-800-MEDICARE references, all delivered cleanly in the first 90 seconds.
            </p>
            <p>
              The dental benefit rescue at 7:25 was excellent reactive signal reading. Joyce mentioned she hadn&apos;t
              been to the dentist because she thought she owed $110 for a cleaning. You pulled up her actual plan
              benefits and read them verbatim — zero copay for covered preventative services. That corrected a costly
              misconception and built real trust with Joyce. That&apos;s the kind of value delivery that makes a
              consumer feel like the call was worth picking up.
            </p>
            <p>
              You also handled all four rounds of Joyce&apos;s Medicare/Social Security concern (&quot;How does this
              affect our Medicare?&quot;) with patience and accuracy. You explained the Part B giveback mechanism
              correctly each time. That prevented call collapse across a 20-minute conversation.
            </p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>
            When Joyce said &quot;Makes sense&quot; at 18:34 — that is your close cue. Not a summary cue. Not an
            explanation cue. A close cue. The next sentence out of your mouth is: &quot;Good — let&apos;s get Ralph
            enrolled right now while I have you. It takes five minutes and his coverage starts May 1st. Should I go
            ahead?&quot; That is the one move that turns this call into an enrollment.
          </p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>
              At 10:17 Joyce told you Ralph has Parkinson&apos;s. Your response: &quot;Parkinson&apos;s? Okay, got
              it.&quot; You moved on. Parkinson&apos;s is a CSN SEP — Ralph can be enrolled any month of the year,
              outside of AEP. You never told Joyce this. Without naming the SEP, her &quot;we&apos;re going to see
              our agent in October&quot; objection had no urgency counter. She didn&apos;t know she didn&apos;t have
              to wait.
            </p>
            <p>
              The line that eliminates the October objection: <em>&quot;Ralph has Parkinson&apos;s — that&apos;s
              actually really important. Because Parkinson&apos;s is a qualifying chronic condition, Ralph has what&apos;s
              called a Special Enrollment Period, which means we can get him into a better plan right now, any time
              of year. We don&apos;t have to wait until October. Let me show you what he qualifies for.&quot;</em>
            </p>
            <p>
              And then at 18:44, Joyce told you she doesn&apos;t answer unknown numbers. You said &quot;I know&quot;
              and gave the callback number anyway. That&apos;s the enrollment disappearing in real time. You had
              everything. Close in-call or lose the enrollment — that&apos;s the rule.
            </p>
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
              { cat: 'Signal Reading', score: 8, max: 20 },
              { cat: 'Math Breakdown', score: 9, max: 20 },
              { cat: 'Objection Handling', score: 8, max: 15 },
              { cat: 'Call Outcome Quality', score: 3, max: 10 },
              { cat: 'Compliance', score: 12, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>50 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Natasha Jones · Joyce Alexander · April 15, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 (Callback Substituted for Enrollment) · RC6 (CSN SEP Not Deployed) · Brookfield OH</p>
        </div>
      </div>
    </PageShell>
  )
}
