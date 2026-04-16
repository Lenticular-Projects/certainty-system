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

export default function DoloresVanceValadaresCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Call Report</span>
            <span className={styles.dot}>·</span>
            <Link href="/agents/jean-pierre-riviere" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Jean Pierre Riviere
            </Link>
          </div>
          <h1 className={styles.agentName}>Dolores Vance Valadares</h1>
          <p className={styles.period}>April 14, 2026 · 34:23 · The OTC Seeker</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(47), fontWeight: 700 }}>47 / 100</span>
            {' · '}INCOMPLETE
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(47) }}>47</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>34:23</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>Apr 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '1rem' }}>INCOMPLETE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Built but never closed</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1 · RC4</span>
            <span className={styles.scoreLabel}>Root Causes</span>
            <span className={styles.scoreRange}>No close, Phase VI skipped</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Dolores Vance Valadares, a 60-year-old in Dallas, TX with diabetes and high blood pressure, called about the food card benefit. You correctly identified her C-SNP opportunity early — her partial Medicaid (LIS Level 1), her chronic conditions, and her current WellCare HMO all pointed toward a United chronic plan upgrade. You worked through her biggest objection — her PCP had told her to stay on WellCare — with a partial but credible reframe, and by 24:01 you had her verbal plan preference: "I would rather have the food on the table."</p>
            <p>That was your close signal. Instead of pivoting to Phase VI enrollment, you continued doctor network verification for 10 more minutes. The call ended at 34:23 during specialist name spelling — no enrollment, no voice signature, no compliance disclosures, no disenrollment warning, no coverage effective date. A fully willing buyer was walked to the door and never signed.</p>
            <p>There is also a critical compliance issue: SSN was collected at 7:57, more than 16 minutes before Dolores expressed any enrollment intent. SSN collection belongs in Phase VI, not Phase II discovery.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>The C-SNP identification at 11:13 was the turning point of this call. When you asked about chronic conditions and she confirmed diabetes and blood pressure, you immediately repositioned the entire presentation around C-SNP eligibility. Most agents would have presented a standard HMO and moved on. You saw the chronic condition angle and took it — that is exactly the right read.</p>
            <p>Your transportation math at 22:33 was clean and decisive: twice a month equals four rides, four rides with a 12-ride annual cap means three months of coverage. Then: "Would you rather have food on the table with money or have your ride?" That produced her buying decision. That is excellent consumer-led closing technique.</p>
            <p>At 9:20 you surfaced Dolores's Medicaid downgrade proactively from the system — she had gone from full Medicaid in 2024 to LIS Level 1 in 2025. She didn't know. Explaining this built real credibility and positioned you as an advocate who sees things others miss.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>At 24:01 when Dolores said "I would rather have the food on the table," your one line was: "Then United is your plan, Dolores. Let me get you locked in right now — takes about three minutes — and we'll confirm your other doctors at the same time. Are you ready to get started?"</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>At 24:01, Dolores chose food over transportation. That sentence — "I would rather have the food on the table" — is the enrollment signal. Your primary care doctor was confirmed in-network seven minutes later at 28:43. Both conditions for enrollment were fully met. At that moment, the correct move was: "Perfect — let me get you enrolled right now. I just need to go over a few quick things with you." Then Phase VI. Doctor verification for her specialist could happen after the application was submitted.</p>
            <p>Instead, you continued verifying a specialist she hadn't even started seeing yet. The call ended at 34:23 while spelling out Dr. Omar Menla Paz's name. The enrollment that was built over 34 minutes never happened because the close was treated as something that happens after all verification is complete — when in fact the primary care confirmation at 28:43 was the green light. Don't let perfection be the enemy of enrollment.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Score Breakdown</h2>
          <div className={styles.callTable}>
            <div className={styles.callTableHeader}>
              <span>Category</span><span>Score</span><span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 12, max: 20 },
              { cat: 'Signal Reading', score: 11, max: 20 },
              { cat: 'Math Breakdown', score: 9, max: 20 },
              { cat: 'Objection Handling', score: 7, max: 15 },
              { cat: 'Call Outcome Quality', score: 4, max: 10 },
              { cat: 'Compliance', score: 4, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>47 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Jean Pierre Riviere · Dolores Vance Valadares · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC4 · INT · DEP · CSN SEPs present</p>
        </div>
      </div>
    </PageShell>
  )
}
