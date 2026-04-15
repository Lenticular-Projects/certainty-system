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

export default function UnknownConsumer3m39sCallPage() {
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
          <h1 className={styles.agentName}>Unknown Consumer</h1>
          <p className={styles.period}>April 13, 2026 · 3:39 · Homestead, FL</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(42), fontWeight: 700 }}>42 / 100</span>
            {' · '}Missed Opportunity · The Money Caller
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(42) }}>42</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>3:39</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 13, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1.1rem' }}>MISSED</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Missed Opportunity</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC2</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Food card never deployed</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>A male consumer from Homestead, Florida called at 0:13 and immediately said he wanted the food card. That&apos;s Client Gold — a specific benefit he already knew he wanted, stated in the first 13 seconds of the call. You moved into the compliance recitation sequence and a standard discovery flow that had no connection to what he actually asked for.</p>
            <p>The food card was never mentioned again after he raised it. No dollar figure was stated. No &ldquo;here&apos;s what you qualify for in your area&rdquo; moment. The call ended at 3:39 without the one thing he called about ever being addressed as a concrete offer.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Compliance open (0:31):</strong> TPMO delivered cleanly and in the correct sequence.</p>
            <p><strong>SOA obtained (0:52):</strong> Scope of appointment secured before moving into plan discussion — correct and required.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When someone tells you what they want in the first 13 seconds, make it the engine of the call. At 0:13: &ldquo;The food card — perfect. I&apos;m going to pull up exactly what&apos;s available in your area. Plans I work with in Homestead have up to $150 a month for groceries. Let me check what you qualify for.&rdquo; Then you run compliance and discovery with that number as the reason he&apos;s still on the line.</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>0:13 — &ldquo;I want the food card.&rdquo; Never returned to.</strong></p>
            <p>He told you exactly what he called for in 13 seconds. The correct response is to confirm it, put a number on it, and use it as the thread that runs through the entire call: &ldquo;The food card — that&apos;s what I want to get you set up with today. Plans in Homestead have grocery benefits up to $150 a month. Let me just run through a few quick questions so I can pull up exactly what you qualify for.&rdquo;</p>
            <p>Now every question you ask — zip code, Medicare card, medications — has a purpose he understands. He&apos;s not being interrogated by a compliance script. He&apos;s being helped toward the thing he called for. That framing is the difference between a consumer who answers your questions and a consumer who hangs up before you get to the point. He told you the point at 0:13. Use it.</p>
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
              { cat: 'Signal Reading', score: 5, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 9, max: 15 },
              { cat: 'Call Outcome Quality', score: 8, max: 10 },
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
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC2 · Homestead FL · Food Card Signal · Client Gold — Deploy Immediately</p>
        </div>

      </div>
    </PageShell>
  )
}
