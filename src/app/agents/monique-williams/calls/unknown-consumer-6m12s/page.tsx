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

export default function UnknownConsumer6m12sCallPage() {
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
            <Link href="/agents/monique-williams" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Monique Williams
            </Link>
          </div>
          <h1 className={styles.agentName}>Unknown Consumer</h1>
          <p className={styles.period}>April 14, 2026 · 6:12 · Florida</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(28), fontWeight: 700 }}>28 / 100</span>
            {' · '}Missed Opportunity · Three Hot Signals Left Untouched
          </p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(28) }}>28</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>6:12</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1.1rem' }}>MISSED</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Missed Opportunity</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1 · RC2</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Medicare card objection surrendered</span>
          </div>
        </motion.div>

        {/* ── What Happened ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>A Florida consumer called specifically about the &ldquo;$3,400 grocery plan benefit&rdquo; from a mailer. He had his Medicare card in hand. He had his medications ready. He knew the exact dollar amount from the ad. Three of the clearest buying signals this business produces were all present in the first two minutes of the call.</p>
            <p>When asked for his Medicare card number, he said he had read somewhere that he wasn&apos;t supposed to share it. That is a trust objection with a factual component — it can be resolved in one sentence. Instead the call ended with &ldquo;Give us a call back when ready.&rdquo; He was ready when he called. His name was never collected. The $3,400 he asked about was never addressed. A call that had every signal pointing toward enrollment ended in under seven minutes with nothing.</p>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Compliance delivered completely:</strong> Full TPMO disclaimer in place before discovery. The compliance score of 14 reflects that you got this right even on a short, difficult call.</p>
            <p><strong>Specific dollar amount recognized:</strong> You picked up on the &ldquo;$3,400&rdquo; from the mailer and could have used it as the anchor for the entire conversation. Recognizing what the consumer came for is the right starting instinct — the follow-through was the gap.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When he said he wasn&apos;t supposed to share his Medicare number, the answer was one sentence: &ldquo;You&apos;re right to protect it — and that&apos;s exactly what I&apos;m here for. The card number stays private. What I need is just the ID number on the front — it&apos;s the same one Medicare uses, and sharing it with a licensed agent to check your benefits is the intended use. Ready to look up that $3,400 grocery benefit?&rdquo; Validate the instinct, correct the misunderstanding, redirect to their goal.</p>
        </motion.div>

        {/* ── The Moment That Decided This Call ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>Medicare card privacy objection — surrendered without a reframe.</strong></p>
            <p>The Medicare card privacy concern is one of the five most common objections in inbound Medicare calls. It has a factual answer: Medicare beneficiaries are explicitly permitted to share their MBI number with licensed agents to verify benefits — that is the designed use case. There is nothing to hide from here. The concern is based on a misreading of general identity protection advice.</p>
            <p>A caller who has his card in hand, has his medications ready, and called about a specific dollar amount from a mailer has done more pre-call preparation than most inbound consumers. He was not looking for a reason to leave. He was looking for confirmation that giving you his card number was safe. The reframe resolves that in one breath.</p>
            <p>His question about completing enrollment on Medicare.gov was also an opportunity, not a deflection. <em>&ldquo;You can look at your options on Medicare.gov, but you can&apos;t enroll in a plan with the $3,400 grocery benefit there — that comes through a licensed agent like me. You&apos;re already on the right call.&rdquo;</em> That turns a potential exit into a reason to stay. Neither the card objection nor the website question was used. Both were doors. Neither was opened.</p>
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
              { cat: 'Lead Quality', score: 7, max: 20 },
              { cat: 'Signal Reading', score: 3, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 2, max: 15 },
              { cat: 'Call Outcome Quality', score: 2, max: 10 },
              { cat: 'Compliance', score: 14, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: row.score === 0 ? 'var(--terracotta)' : scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}>
              <span>Total: <strong>28 / 100</strong></span>
            </div>
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Monique Williams · Unknown Consumer · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC2 · Medicare Card Objection Surrendered · Florida</p>
        </div>

      </div>
    </PageShell>
  )
}
