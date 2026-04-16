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

export default function LennyThompsonCallPage() {
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
            <Link href="/agents/alicia-moore-williams" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Alicia Moore Williams
            </Link>
          </div>
          <h1 className={styles.agentName}>Lenny A. Thompson</h1>
          <p className={styles.period}>April 14, 2026 · 28:31 · Greensboro, NC</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(64), fontWeight: 700 }}>64 / 100</span>
            {' · '}Correct No-Sale · Already on Best Plan
          </p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(64) }}>64</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>28:31</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)', fontSize: '0.9rem' }}>CORRECT</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>No-Sale · Best Plan Active</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '1rem' }}>RC1</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Tangent control · 4 min lost</span>
          </div>
        </motion.div>

        {/* ── What Happened ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Lenny Thompson called from Greensboro about the grocery card. He&apos;s already enrolled in a Humana D-SNP plan with QMB+ status — meaning he voluntarily left UHC for Humana because the Humana plan offered better benefits. By the time you completed your discovery, it was clear Lenny was already on the right plan for his situation.</p>
            <p>You made the correct call: rather than pushing for an enrollment that would have been a lateral move at best, you advised Lenny to stay with Humana and explained why. He responded warmly — &ldquo;You did so well. I like the way you talk&rdquo; — and ended the call satisfied. That is the outcome this call deserved. The one coaching note is the 4-minute tangent about trailer painting from 5:00 to 9:18, which ate time without advancing the discovery.</p>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Correct no-sale call made with confidence:</strong> You identified that Lenny was already on the superior plan for his profile — Humana D-SNP with QMB+ — and you told him to stay rather than forcing a pitch. That takes integrity and product knowledge. Agents who churn beneficiaries off good plans for commissions cause real harm. You didn&apos;t do that.</p>
            <p><strong>D-SNP and QMB+ status correctly identified:</strong> Recognizing that Lenny&apos;s Humana plan was already a D-SNP with QMB+ — and that he had actively chosen it over UHC — required real discovery skill. You asked the right questions and put the picture together correctly.</p>
            <p><strong>Consumer left the call informed and satisfied:</strong> Lenny&apos;s praise at the end of the call wasn&apos;t flattery — it reflected that he got something real: confirmation that his plan was right and a clear explanation of why. That is genuine value delivered.</p>
            <p><strong>Signal reading on a complex enrollment history:</strong> Lenny had already switched plans voluntarily. Understanding the direction of his switch (UHC to Humana, for better benefits) and what that meant for his current eligibility is the kind of contextual reading that separates strong agents from script-readers.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>Between 5:00 and 9:18 Lenny talked about painting trailers. You let it run. The move at 5:00 was: &ldquo;Lenny, I love that — tell me more after we get your benefits sorted. Let me take two minutes to check what you have now and make sure you&apos;re getting everything you&apos;re entitled to.&rdquo; Warmth and redirect in the same breath. Four minutes recovered, same outcome.</p>
        </motion.div>

        {/* ── The Moment That Decided This Call ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>Discovery confirmation — Humana D-SNP with QMB+, switched voluntarily from UHC.</strong></p>
            <p>The moment you confirmed Lenny&apos;s plan details, the call outcome was already determined. A beneficiary who switched from a large carrier to a D-SNP plan specifically for better benefits is not a candidate for re-enrollment — they&apos;ve already done the work. The question wasn&apos;t what to sell; it was whether you had the confidence to tell a willing caller that he didn&apos;t need anything from you today.</p>
            <p>You passed that test. Recommending no change when no change is warranted is one of the hardest things in this business to do because it feels like leaving money on the table. It is not. A caller who leaves satisfied tells his family. A caller who gets churned off a good plan files a complaint. You made the right call.</p>
            <p>The tangent at 5:00 is worth noting not because it changed the outcome but because 4 minutes of uncontrolled rapport-building in an early discovery phase is a pattern. On a different call with a different consumer, those 4 minutes could be the window that closes a deal or loses one.</p>
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
              { cat: 'Signal Reading', score: 14, max: 20 },
              { cat: 'Math Breakdown', score: 6, max: 20 },
              { cat: 'Objection Handling', score: 10, max: 15 },
              { cat: 'Call Outcome Quality', score: 10, max: 10 },
              { cat: 'Compliance', score: 12, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}>
              <span>Total: <strong>64 / 100</strong></span>
            </div>
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Alicia Moore Williams · Lenny A. Thompson · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · Tangent Control · Correct No-Sale · D-SNP QMB+ · Greensboro NC</p>
        </div>

      </div>
    </PageShell>
  )
}
