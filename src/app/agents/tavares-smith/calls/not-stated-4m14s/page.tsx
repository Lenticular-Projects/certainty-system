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

export default function NotStated4m14sCallPage() {
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
            <Link href="/agents/tavares-smith" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Tavares Smith
            </Link>
          </div>
          <h1 className={styles.agentName}>Not Stated</h1>
          <p className={styles.period}>April 13, 2026 · 4:14 · Sumter, SC</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(35), fontWeight: 700 }}>35 / 100</span>
            {' · '}Missed Opportunity · The Commercial Myth Caller
          </p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(35) }}>35</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>4:14</span>
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
            <span className={styles.scoreRange}>Loss of lead</span>
          </div>
        </motion.div>

        {/* ── What Happened ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>The consumer called from Sumter, SC after seeing an ad about groceries. He was out on the street — no Medicare card, no medications list, no SSN memorized. By 2:46 he told you he was &ldquo;in the street&rdquo; and wanted to call back when he got home. You made two attempts to keep him on the line, and at 3:34 you made the right tactical move — offering name, date of birth, and SSN as alternatives to the card. He didn&apos;t know his SSN by heart.</p>
            <p>At 4:05 you said: &ldquo;Whenever you can get to that information, give us a call back.&rdquo; That&apos;s a passive release. The chance of a callback with that framing is near zero — the consumer has no reason to follow through and no specific time to do it.</p>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Compliance open (1:05):</strong> TPMO and SOA delivered cleanly at the right point in the call. That part was correct.</p>
            <p><strong>Alternative verification (3:34):</strong> When the Medicare card wasn&apos;t available, you pivoted to name/DOB/SSN without hesitation. That&apos;s the right move — when one door is closed, offer another one immediately. You knew the play, and you ran it. The consumer just happened to not know his SSN by heart.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>At 4:05, instead of releasing him, book the callback: &ldquo;No problem at all — I have an opening at 3:30 this afternoon. I&apos;ll call you back directly when you&apos;re home. Does that work?&rdquo; You already had his number. One sentence turns a dead end into a scheduled lead.</p>
        </motion.div>

        {/* ── The Moment That Decided This Call ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>4:05 — &ldquo;Whenever you can get to that information, give us a call back.&rdquo;</strong></p>
            <p>This phrasing gives all the control to the consumer. He has no obligation, no time, and no reminder. In practice, that call does not happen. You had his callback number (803-840-6270) logged in your system at 2:09. You could have controlled the next step instead of leaving it open-ended.</p>
            <p>The correct close at 4:05: <em>&ldquo;No problem at all — I have an opening at 3:30 this afternoon. I&apos;ll call you directly when you&apos;re home. Can I count on you being available then?&rdquo;</em> A yes means a booked lead. A no means you negotiate a different time. Either way, you stay in control of the follow-up instead of hoping he calls back.</p>
            <p>Also worth noting: at 1:50, he told you he called because of the grocery ad. You responded generically. The anchor for that call was the grocery card — when he told you that&apos;s why he called, the response should have been the dollar amount immediately. That would have given him a reason to stay on the line through the stall.</p>
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
              { cat: 'Lead Quality', score: 8, max: 20 },
              { cat: 'Signal Reading', score: 8, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 5, max: 15 },
              { cat: 'Call Outcome Quality', score: 3, max: 10 },
              { cat: 'Compliance', score: 11, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}>
              <span>Total: <strong>35 / 100</strong></span>
            </div>
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Tavares Smith · April 13, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC2 · Commercial Myth Caller · Stall — Out of Home · Book the Callback</p>
        </div>

      </div>
    </PageShell>
  )
}
