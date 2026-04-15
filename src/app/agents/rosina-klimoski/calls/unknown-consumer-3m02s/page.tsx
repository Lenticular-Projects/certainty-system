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

export default function UnknownConsumer3m02sCallPage() {
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
          <h1 className={styles.agentName}>Unknown Consumer</h1>
          <p className={styles.period}>April 13, 2026 · 3:02 · Freeport, Florida · Veteran</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(35), fontWeight: 700 }}>35 / 100</span>
            {' · '}Missed Opportunity · The Money Caller
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(35) }}>35</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>3:02</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 13, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1.1rem' }}>MISSED</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Missed Opportunity</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Lead released early</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>A Medicare Part A and B holder and veteran in Walton County, Florida called about the spending card. At 1:18 he asked directly about the spending card and whether plans covered his area — clear buying intent. That signal went undeployed.</p>
            <p>At 2:38 he said he didn&apos;t have his Medicare card and would call back. You offered a lookup by name, DOB, and SSN — the right move. He declined to give his SSN. You accepted the exit, released the call, and he was gone at 3:02. The name-and-DOB-only option was never offered. No callback was scheduled. No next step was set.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Compliant open (0:37):</strong> TPMO delivered correctly at the start of the call. Clean and on time.</p>
            <p><strong>Offered the alternative (2:38):</strong> When he didn&apos;t have his card, you correctly offered name/DOB/SSN as an alternative verification path. That&apos;s the right instinct — you knew the play. The follow-through wasn&apos;t there, but identifying the option was correct.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When SSN is declined, name and date of birth alone is often enough to pull up an account. Before releasing any caller who declines SSN: &ldquo;No problem at all — I can also look you up with just your name and date of birth. What&apos;s your full name?&rdquo; Ten seconds. Real close rate.</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>2:38 — SSN declined, call released.</strong></p>
            <p>When he said he didn&apos;t know his SSN, you had one more option before releasing: name and date of birth alone. Most systems support lookup without SSN. That question — &ldquo;No problem, I can also pull you up with just your name and date of birth — what&apos;s your full name?&rdquo; — takes ten seconds and keeps the lead alive.</p>
            <p>Also: at 1:18 he asked directly about the spending card. That question deserved a dollar amount as the immediate response. &ldquo;In the Freeport area, plans I work with have spending cards up to $X per month. Let me check exactly what you qualify for.&rdquo; That anchor gives him a reason to stay on the line through the verification friction. Without it, when verification gets hard, there&apos;s nothing pulling him forward.</p>
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
              { cat: 'Signal Reading', score: 6, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 6, max: 15 },
              { cat: 'Call Outcome Quality', score: 4, max: 10 },
              { cat: 'Compliance', score: 12, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: row.score === 0 ? 'var(--terracotta)' : scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>35 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Rosina Klimoski · April 13, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC2 · Veteran · Walton County FL · SSN Declined — Name+DOB Alternative</p>
        </div>

      </div>
    </PageShell>
  )
}
