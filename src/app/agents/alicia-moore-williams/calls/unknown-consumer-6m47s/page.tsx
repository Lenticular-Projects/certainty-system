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

export default function UnknownConsumer6m47sCallPage() {
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
          <p className={styles.period}>April 13, 2026 · 6:47 · Tennessee</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(26), fontWeight: 700 }}>26 / 100</span>
            {' · '}Missed Opportunity · The Money Caller
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(26) }}>26</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>6:47</span>
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
            <span className={styles.scoreRange}>Prior check surrendered</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>A Tennessee Medicare beneficiary called specifically to ask about qualifying for extra grocery or food card money — a warm, direct inbound signal. She confirmed Medicare Parts A and B, no Medicaid, and a Medicare Advantage plan whose $50 OTC catalog benefit recently converted to a cash giveback in 2026. That&apos;s plan dissatisfaction on the table.</p>
            <p>At 2:23 she said &ldquo;I had somebody check already.&rdquo; You sent her to Medicare.gov and suggested she talk to her broker. The call ended at 6:47 with no plan presented, no dollar figure stated, no enrollment attempted. A warm inbound Money Caller who called because her benefit changed was redirected to someone else.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Compliance open (0:04):</strong> TPMO and SOA delivered in the first 28 seconds — one of the fastest and cleanest opens on the team. That discipline is the foundation everything else gets built on.</p>
            <p><strong>Consumer rapport:</strong> She was warm and cooperative throughout. No hostility, no distrust. The comfort you create in the first 60 seconds is real — she stayed on the line for nearly seven minutes. That&apos;s the window. Tomorrow&apos;s job is to use it before she tells you someone else already looked.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When she said &ldquo;I had somebody check already,&rdquo; hold the frame: &ldquo;What did they find? Because plans changed in 2026 and I&apos;m looking at your area right now — there are plans here with up to $150 a month for groceries. Give me two minutes and I&apos;ll tell you if what you have is the best available.&rdquo; That&apos;s it. That one sentence keeps the call alive.</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>2:23 — &ldquo;I had somebody check already.&rdquo;</strong></p>
            <p>This is not a hard no. It&apos;s a soft objection that translates to: &ldquo;I&apos;m not sure this call will be different from the last one.&rdquo; Your job at 2:23 is to make it different — immediately, with a number. &ldquo;What did they find? Because plans changed this year and I&apos;m looking at your area right now. There are options with up to $150 a month for groceries — that&apos;s almost three times what you described having. Give me two minutes.&rdquo;</p>
            <p>Two things were missing across both of today&apos;s calls: the dollar figure, and the reframe before the exit. The dollar figure is what makes this call different from the last check she got. Without it, there&apos;s no reason for her to stay. With it, she has something concrete to say yes to — or at least two more minutes to give you.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Score Breakdown</h2>
          <div className={styles.callTable}>
            <div className={styles.callTableHeader}>
              <span>Category</span><span>Score</span><span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 4, max: 20 },
              { cat: 'Signal Reading', score: 4, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 3, max: 15 },
              { cat: 'Call Outcome Quality', score: 3, max: 10 },
              { cat: 'Compliance', score: 12, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: row.score === 0 ? 'var(--terracotta)' : scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>26 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Alicia Moore Williams · April 13, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC2 · RC3 · Money Caller · Prior Check Reframe · State the Dollar Figure</p>
        </div>

      </div>
    </PageShell>
  )
}
