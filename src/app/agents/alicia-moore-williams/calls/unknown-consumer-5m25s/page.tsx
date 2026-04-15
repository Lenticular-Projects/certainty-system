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

export default function UnknownConsumer5m25sCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>

        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Call Report</span>
            <span className={styles.dot}>·</span>
            <Link href="/agents/alicia-moore-williams" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Alicia Moore Williams
            </Link>
          </div>
          <h1 className={styles.agentName}>Unknown Consumer</h1>
          <p className={styles.period}>April 13, 2026 · 5:25 · Chattanooga, TN</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(32), fontWeight: 700 }}>32 / 100</span>
            {' · '}Missed Opportunity · The Money Caller
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(32) }}>32</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>5:25</span>
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
            <span className={styles.scoreRange}>First objection surrendered</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>The consumer called from Chattanooga specifically asking about &ldquo;more money on my card&rdquo; — a direct food and OTC card signal. You acknowledged it but never deployed it as the anchor for the call. The call stalled when she didn&apos;t have her Medicare card and didn&apos;t want to give her SSN.</p>
            <p>At 2:37 she asked &ldquo;What if I choose not to?&rdquo; — a hesitation about SSN collection, not a hard no. You pivoted to callback mode immediately without making a reframe attempt. The call ended in a scheduled callback that had no specific time, no anchor on what she&apos;d be getting, and no reason for her to prioritize returning it.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Compliance open (0:41):</strong> TPMO delivered cleanly and early. Your opens are consistently one of the sharpest parts of your calls — professional, fast, and correct.</p>
            <p><strong>Warm rapport throughout:</strong> The consumer was comfortable with you during the call. No hostility, no distrust. The trust you build in the first 60 seconds is real — she stayed on the line for over five minutes. That window exists. The job is to use it before the first objection arrives.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>At 2:37, &ldquo;What if I choose not to?&rdquo; is hesitation, not refusal. Before any callback offer: &ldquo;No problem — I can also look you up with just your name and date of birth. What&apos;s your full name?&rdquo; One sentence. Keeps the call alive. Practice it until it comes out before the callback offer every time.</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>2:37 — &ldquo;What if I choose not to?&rdquo;</strong></p>
            <p>She didn&apos;t say no. She asked what happens if she doesn&apos;t give her SSN. That question is her telling you she&apos;s still in the conversation but uncomfortable with this specific step. The answer is: offer the alternative. Name and date of birth is a valid lookup path. &ldquo;Totally fine — I can pull you up with just your name and date of birth. What&apos;s your full name?&rdquo;</p>
            <p>Also: she called because she wanted more money on her card. That dollar amount was never stated. If she had heard &ldquo;plans in your area have up to $150 a month for groceries&rdquo; before verification started, the friction around giving information would have felt worth pushing through. The number is the anchor. Without it, verification feels like giving something for nothing.</p>
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
              { cat: 'Signal Reading', score: 5, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 4, max: 15 },
              { cat: 'Call Outcome Quality', score: 5, max: 10 },
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
          <p>The Certainty System · Alicia Moore Williams · April 13, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC2 · RC3 · Money Caller · SSN Hesitation · Name+DOB Alternative</p>
        </div>

      </div>
    </PageShell>
  )
}
