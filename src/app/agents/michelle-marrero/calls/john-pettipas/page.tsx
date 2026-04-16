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

export default function JohnPettipasCallPage() {
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
            <Link href="/agents/michelle-marrero" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Michelle Marrero
            </Link>
          </div>
          <h1 className={styles.agentName}>John Pettipas</h1>
          <p className={styles.period}>April 15, 2026 · 47:13 · Killeen, Texas</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(68), fontWeight: 700 }}>68 / 100</span>
            {' · '}Incomplete · Enrollment Dropped at Voice Signature
          </p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(68) }}>68</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>47:13</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 15, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '1rem' }}>INCOMPLETE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Not Enrolled</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '1rem' }}>RC3+RC2</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Math + Logic/Emotion</span>
          </div>
        </motion.div>

        {/* ── What Happened ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>John Pettipas called in from Killeen, Texas about the grocery card. He had a prior bad experience with UHC — his doctor wasn&apos;t covered — which made him a high-trust-requirement consumer from minute one. You earned that trust back by verifying Dr. Charles Mitchell was in-network before anything else. You confirmed his DEP SEP (Extra Help/LIS), ran his medications through a Walgreens formulary check, and walked him through a full comparison. By 35:46, he had agreed to enrollment.</p>
            <p>The Phase VI announcement went out at 39:18. Then, at 47:13, the consumer was placed on hold — and the voice signature never completed. After 47 minutes of disciplined, trust-building work, the enrollment dropped in the final step. This is not a sales failure. This is an execution gap right at the finish line.</p>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Trust recovery (opening):</strong> John&apos;s prior UHC experience — his doctor not being covered — is exactly the objection that kills Medicare Advantage calls before they start. You didn&apos;t dismiss it. You verified Dr. Charles Mitchell in-network before presenting anything. That sequencing is correct and it&apos;s what kept this call alive.</p>
            <p><strong>DEP SEP identification:</strong> You confirmed his Extra Help / LIS status and used the DEP SEP correctly as the enrollment window. That&apos;s the right door for this consumer — and naming it accurately protects you on the compliance side.</p>
            <p><strong>Formulary work:</strong> You ran his medications — Bupropion, Hydrochlorothiazide, Lexapro, Atorvastatin, Omeprazole — through a Walgreens formulary check. He takes multiple generics. You confirmed coverage. That&apos;s the level of due diligence that makes a consumer feel like you actually worked for them.</p>
            <p><strong>Agent-for-life commitment (36:47):</strong> You made a direct commitment to be his agent going forward. On a consumer who had already been burned by coverage gaps, that personal accountability is meaningful. It closed the emotional distance that had existed since the opening.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>You built 47 minutes of trust and reached verbal agreement at 35:46. The enrollment dropped in the final step. On a call this long and this well-built, the voice signature phase has to be treated like a close of its own — walk him through it out loud, step by step, so nothing breaks in the last three minutes.</p>
        </motion.div>

        {/* ── The Moment That Decided This Call ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>47:13 — Hold placed. Voice signature not completed.</strong></p>
            <p>You announced Phase VI at 39:18 — the enrollment phase. The consumer was engaged and willing. At 47:13, he was put on hold and the call ended without the voice signature. This is an operational failure in the final 8 minutes of a call that was 47 minutes of solid work.</p>
            <p>When Phase VI is announced, the consumer needs to hear a clear expectation of what happens next: <em>&ldquo;John, I&apos;m going to walk you through the last few steps right now. You&apos;re going to hear a short recorded disclosure, and then you&apos;ll say your name and confirm a few details. It takes about three minutes. I&apos;ll be right here with you through the whole thing.&rdquo;</em></p>
            <p>That sets the expectation, keeps the consumer from checking out during the recording, and gives you a clear moment to confirm completion. A consumer who agrees at minute 35 and then goes on hold at minute 47 without completing the signature is a recoverable situation — but only if you call back immediately with context: &ldquo;John, we got cut off right before the last step. I have everything from our conversation. It&apos;ll take three more minutes.&rdquo;</p>
            <p>The call before this (20:06) showed the same pattern of a yes that didn&apos;t convert. The lesson is the same: once you have agreement, the entire focus shifts to completing the enrollment — not holding, not pausing, not anything that creates a gap between yes and done.</p>
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
              { cat: 'Lead Quality', score: 15, max: 20 },
              { cat: 'Signal Reading', score: 16, max: 20 },
              { cat: 'Math Breakdown', score: 12, max: 20 },
              { cat: 'Objection Handling', score: 12, max: 15 },
              { cat: 'Call Outcome Quality', score: 7, max: 10 },
              { cat: 'Compliance', score: 6, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}>
              <span>Total: <strong>68 / 100</strong></span>
            </div>
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Michelle Marrero · April 15, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC3 · RC2 · RC4 · DEP SEP · Extra Help · Killeen TX · Walgreens Formulary</p>
        </div>

      </div>
    </PageShell>
  )
}
