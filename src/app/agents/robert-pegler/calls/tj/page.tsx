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

export default function TJCallPage() {
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
            <Link href="/agents/robert-pegler" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Robert Pegler
            </Link>
          </div>
          <h1 className={styles.agentName}>TJ</h1>
          <p className={styles.period}>April 13, 2026 · 2:22 · Dickson, TN</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(29), fontWeight: 700 }}>29 / 100</span>
            {' · '}Missed Opportunity · The Money Caller
          </p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(29) }}>29</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>2:22</span>
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
            <span className={styles.scoreRange}>Objection surrendered</span>
          </div>
        </motion.div>

        {/* ── What Happened ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>TJ called from Dickson, TN about a food card benefit. He confirmed he has Medicare Parts A and B, told you he&apos;s currently on Humana, and said he doesn&apos;t have a food card. Those three facts together are the entire sales conversation — a consumer who called specifically because they want a benefit their current plan doesn&apos;t provide.</p>
            <p>At 1:20 TJ said &ldquo;I have Humana and I don&apos;t want to change.&rdquo; You offered to transfer him to a Humana agent — twice. The call ended at 2:22. You sent a warm inbound lead back to the carrier that wasn&apos;t giving him what he called for, and gave him no reason to consider anything different.</p>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Compliance open:</strong> TPMO and identity disclosed correctly at the top of the call. That part was done right.</p>
            <p><strong>Discovery confirmed the lead:</strong> You collected zip code, confirmed Medicare A and B, established he&apos;s on Humana, and verified he has no food card. That&apos;s the full picture. You had everything you needed at 1:20 to make the reframe. The work before that objection was correct.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a consumer tells you why their current plan isn&apos;t working, they&apos;ve already made the case for switching. At 1:20: &ldquo;You just told me Humana doesn&apos;t have the food card — that&apos;s exactly why you called. The plans I work with in Dickson do have it. Give me two minutes and I&apos;ll show you what that looks like.&rdquo;</p>
        </motion.div>

        {/* ── The Moment That Decided This Call ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>1:20 — &ldquo;I have Humana and I don&apos;t want to change.&rdquo;</strong></p>
            <p>This is not a hard objection. TJ is telling you his current situation, not making a final decision. The problem is he doesn&apos;t yet know that staying with Humana means not getting the thing he called for. Your job at 1:20 is to make that contradiction visible.</p>
            <p>What you said was: offer a transfer to Humana. What that communicated was: Humana loyalty is the right answer here. Once you validated that frame, his second statement (&ldquo;No, I just want to stay with Humana&rdquo;) was the natural next step.</p>
            <p>The reframe at 1:20: <em>&ldquo;I hear you — most people don&apos;t want to change unless there&apos;s a real reason to. But here&apos;s the thing: you called about the food card, and you just told me Humana doesn&apos;t give it to you. The plans I work with in Dickson do. That&apos;s not really a change — that&apos;s getting what you called for. Give me two minutes.&rdquo;</em> That one reframe keeps the conversation alive. Before any transfer offer, that sentence has to come out first.</p>
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
              { cat: 'Lead Quality', score: 4, max: 20 },
              { cat: 'Signal Reading', score: 5, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 2, max: 15 },
              { cat: 'Call Outcome Quality', score: 3, max: 10 },
              { cat: 'Compliance', score: 15, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: row.score === 0 ? 'var(--terracotta)' : scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}>
              <span>Total: <strong>29 / 100</strong></span>
            </div>
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Robert Pegler · April 13, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · The Money Caller · Humana Loyalty Objection · The Contradiction Reframe</p>
        </div>

      </div>
    </PageShell>
  )
}
