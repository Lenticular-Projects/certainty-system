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

export default function UnknownConsumer3m17sCallPage() {
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
          <p className={styles.period}>April 13, 2026 · 3:17 · Hallandale Beach, FL</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(32), fontWeight: 700 }}>32 / 100</span>
            {' · '}Incomplete · Dropped Call
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(32) }}>32</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>3:17</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 13, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '1rem' }}>INCOMPLETE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Dropped Call</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '1rem' }}>RC1</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Self-inflicted stall</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>The consumer called from Hallandale Beach, Florida. At 2:01 you read the full product list — Medicare Advantage, MAPD, PDP, Medigap, OSB, stand-alone dental, stand-alone vision. The consumer immediately responded: &ldquo;No. It&apos;s getting too complicated. I thought it was going to be too much.&rdquo; That stall was self-inflicted. You overwhelmed him before giving him a reason to care.</p>
            <p>The call ended at 3:17 when he said &ldquo;let me go you back&rdquo; mid-sentence and the line dropped. No plan was presented. No math attempted. No enrollment possible. He never heard a dollar figure or a specific benefit — just a list of product categories that meant nothing to him.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Compliance open (0:00):</strong> Identity, recorded line, and TPMO delivered correctly at the start of the call.</p>
            <p><strong>Zip code collected (1:22):</strong> You got the geographic data early — the right priority before plan lookup.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>Never read the full product menu before giving the consumer a reason to care. Instead of listing plan types, anchor to the benefit: &ldquo;I&apos;m looking at plans in your area that come with a grocery card — up to $150 a month. That&apos;s what most people call about. Let me check what you qualify for.&rdquo; One sentence. No list. No overwhelm.</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>2:01 — Full product list read before value anchor.</strong></p>
            <p>When you read &ldquo;Medicare Advantage plans, Medicare Advantage prescription drug plans, standalone prescription drug plans, Medicare supplemental insurance plans, optional supplemental benefits, standalone vision, standalone dental&rdquo; — the consumer heard complexity, not opportunity. He told you exactly what happened: &ldquo;It&apos;s getting too complicated.&rdquo;</p>
            <p>The product list is a compliance requirement, but the framing around it is yours to control. The correct pivot after the SOA question: &ldquo;I mostly want to talk about Medicare Advantage — that&apos;s where the grocery card benefit lives. Let me pull up what&apos;s available in your zip code.&rdquo; Narrow the frame immediately. One benefit. One reason to stay. The complexity stays in the background until he&apos;s already engaged.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Score Breakdown</h2>
          <div className={styles.callTable}>
            <div className={styles.callTableHeader}>
              <span>Category</span><span>Score</span><span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 6, max: 20 },
              { cat: 'Signal Reading', score: 4, max: 20 },
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
            <div className={styles.callTableFooter}><span>Total: <strong>32 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Monique Williams · April 13, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · Hallandale Beach FL · Full Product Menu · Anchor Before Complexity</p>
        </div>

      </div>
    </PageShell>
  )
}
