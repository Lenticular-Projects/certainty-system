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

export default function UnknownConsumer5m38sCallPage() {
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
          <h1 className={styles.agentName}>Unknown Consumer</h1>
          <p className={styles.period}>April 14, 2026 · 5:38 · Oklahoma</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(42), fontWeight: 700 }}>42 / 100</span>
            {' · '}Uncloseable · Scam-Resistant Caller
          </p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(42) }}>42</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>5:38</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '0.9rem' }}>UNCLOSEABLE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Not Enrolled</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1+RC2</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Discovery + Logic/Emotion</span>
          </div>
        </motion.div>

        {/* ── What Happened ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>This was a scam-resistant caller from Oklahoma (ZIP 74960) who refused to provide his Medicare ID number. He was guarded from the first exchange and actively suspicious of the call. You spent five minutes attempting to establish credibility but the primary reframe you used — &ldquo;trust me&rdquo; — is exactly the wrong move with a consumer who has been scammed before or fears he will be.</p>
            <p>You scored a 15 out of 15 on compliance, which means you ran the process correctly. The math never happened (0/20) because you couldn&apos;t get past his guard to run a plan. This is a case where the reframe toolkit needed to shift from rapport to verifiable credentials — and that shift didn&apos;t happen.</p>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Full compliance (15/15):</strong> A perfect compliance score on a call where the consumer is actively hostile is genuinely hard. You stayed within the process throughout. That professionalism matters — even when the consumer doesn&apos;t close, you protect your license every time you run the call clean.</p>
            <p><strong>You stayed on the call:</strong> A lot of agents hang up on scam-resistant callers in under two minutes. You worked it for 5:38 and attempted multiple reframes. That persistence is the right instinct — the outcome quality just needed a different tool.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>&ldquo;Trust me&rdquo; does not work on a scam-resistant caller — verifiable credentials do. The line that changes this call: &ldquo;Sir, I want to give you something you can verify right now. Our agency license number is [X]. Call 1-800-MEDICARE and confirm we&apos;re a licensed agent. I&apos;ll wait.&rdquo;</p>
        </motion.div>

        {/* ── The Moment That Decided This Call ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>~2:30 — Consumer refused Medicare ID. Reframe: &ldquo;You can trust me.&rdquo;</strong></p>
            <p>When a consumer refuses to give their Medicare number because they&apos;re afraid of scams, you&apos;re not dealing with an objection to the plan — you&apos;re dealing with a fear of you specifically. Asking them to trust you confirms the fear. It&apos;s the same move the scammer would make.</p>
            <p>The correct pivot is to give them something they can independently verify: your agency license number, your NPN, the CMS-registered phone number for your agency, or the 1-800-MEDICARE number they can call to confirm you are who you say you are. Once they can verify you externally, the Medicare ID objection dissolves — because the fear behind it is gone.</p>
            <p><em>&ldquo;Sir, I completely understand — there are a lot of scams out there and you&apos;re right to be careful. Here&apos;s what I want you to do: call 1-800-MEDICARE and give them my NPN number [X]. They can confirm I&apos;m a licensed, CMS-registered agent. I&apos;ll call you back in ten minutes after you&apos;ve done that.&rdquo;</em></p>
            <p>That move costs you ten minutes. Skipping it costs you the call.</p>
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
              { cat: 'Lead Quality', score: 10, max: 20 },
              { cat: 'Signal Reading', score: 4, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 5, max: 15 },
              { cat: 'Call Outcome Quality', score: 8, max: 10 },
              { cat: 'Compliance', score: 15, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: row.score === 0 ? 'var(--terracotta)' : scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}>
              <span>Total: <strong>42 / 100</strong></span>
            </div>
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Tavares Smith · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC2 · Scam-Resistant Caller · Oklahoma ZIP 74960</p>
        </div>

      </div>
    </PageShell>
  )
}
