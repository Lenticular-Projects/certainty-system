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

export default function ArchieDaphneCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>

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
          <h1 className={styles.agentName}>Archie Daphne</h1>
          <p className={styles.period}>April 13, 2026 · 4:02 · Birmingham, AL</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(42), fontWeight: 700 }}>42 / 100</span>
            {' · '}Incomplete · The Money Caller
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(42) }}>42</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>4:02</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 13, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '1rem' }}>INCOMPLETE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Discovery stalled</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '1rem' }}>RC3</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Dead air during lookup</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Archie called from Birmingham specifically asking about a grocery card — a clear OTC benefit signal. You collected the zip code (35215) and delivered the TPMO disclaimer. Then, from 1:27 onward, the call went silent. Periodic &ldquo;Okay&rdquo; responses every 30 seconds suggest you placed him on hold or were looking up plans without communicating back to him.</p>
            <p>No discovery was completed. No name, date of birth, Medicare number, current plan, medications, or doctor information was collected before the call effectively stalled. A consumer who called with a specific benefit in mind stayed on the line through over two and a half minutes of silence before the call ended incomplete.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Compliance open (0:00):</strong> Identity and TPMO delivered correctly at the start of the call.</p>
            <p><strong>Zip code collected (0:41):</strong> You secured Birmingham zip 35215 before the call stalled — the right first step for plan lookup.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When you&apos;re looking up plans and the consumer is waiting, fill the silence: &ldquo;While I&apos;m pulling up your area, Archie — the grocery card benefit works like a debit card at major grocery stores. I want to make sure I find you the best dollar amount available in Birmingham. Bear with me one more second.&rdquo; Talk during the lookup. Silence kills momentum.</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>1:27 — Extended silence began.</strong></p>
            <p>Archie called about the grocery card and stayed on the line even as nothing happened for two and a half minutes. That patience is a signal — he wanted this. What killed the call wasn&apos;t hostility or a hard objection. It was silence. Consumers interpret silence as: the agent doesn&apos;t know what they&apos;re doing, or this call isn&apos;t going anywhere.</p>
            <p>Two fixes: First, collect discovery information while looking up plans — name, date of birth, current plan — so the silence is filled with forward motion. Second, narrate the lookup: &ldquo;I&apos;m checking what&apos;s available in your zip right now — Birmingham 35215 has several plans with the grocery benefit, I want to find you the right dollar amount.&rdquo; Thirty seconds of narration keeps the consumer in the conversation even when you&apos;re not asking them anything.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Score Breakdown</h2>
          <div className={styles.callTable}>
            <div className={styles.callTableHeader}>
              <span>Category</span><span>Score</span><span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 8, max: 20 },
              { cat: 'Signal Reading', score: 7, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 8, max: 15 },
              { cat: 'Call Outcome Quality', score: 7, max: 10 },
              { cat: 'Compliance', score: 12, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: row.score === 0 ? 'var(--terracotta)' : scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>42 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Monique Williams · April 13, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC3 · Birmingham AL · Dead Air · Narrate the Lookup · Discovery During Hold</p>
        </div>

      </div>
    </PageShell>
  )
}
