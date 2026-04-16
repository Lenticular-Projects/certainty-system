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

export default function JessieBlakelyCallPage() {
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
            <Link href="/agents/rosina-klimoski" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Rosina Klimoski
            </Link>
          </div>
          <h1 className={styles.agentName}>Jessie Blakely</h1>
          <p className={styles.period}>April 14, 2026 · 16:33 · Henderson County, NC</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(42), fontWeight: 700 }}>42 / 100</span>
            {' · '}Missed Opportunity · Surrendered on Transportation
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
            <span className={styles.scoreValue}>16:33</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '0.85rem' }}>MISSED OPP</span>
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
            <p>Jessie Blakely called from Henderson County, NC — QMB with full Medicaid, Type 2 diabetes, and a pacemaker. That profile makes her D-SNP eligible, and you found her a Devoted Health 5-star D-SNP that significantly outperformed her current UHC plan: $442 per month in grocery benefits versus $331, $400 vision versus $300, and dental at $3,000 — matching her current plan but with far better ancillary benefits.</p>
            <p>At 11:16, Jessie told you she was glad she called. At 15:38, she bailed over a transportation objection. You surrendered. The math was done, the doctors were confirmed, the plan was better in every meaningful category — and one objection about transportation ended a call that was four minutes from an enrollment.</p>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>D-SNP identification:</strong> You correctly read her QMB + Medicaid + chronic conditions (diabetes, pacemaker) and matched her to a D-SNP. That is not a default plan for most agents — it requires actually processing what the consumer tells you and cross-referencing it to the right benefit category. You did that.</p>
            <p><strong>Benefit comparison built:</strong> You laid out the grocery, vision, and dental numbers side by side. $442 vs $331 on grocery alone is $111 more per month — $1,332 per year. She heard those numbers and said she was glad she called. The case was made. That&apos;s on you in the best possible way.</p>
            <p><strong>Rapport at 11:16:</strong> When a consumer says &ldquo;I&apos;m glad I called&rdquo; at 11 minutes into a 16-minute call, you did something right in the first half. She was engaged, she trusted you, and she could see the difference. That foundation was real.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>She told you at 11:16 that she was glad she called — and at 15:38 she walked. Never let a consumer feel good and then leave without naming the dollar cost of leaving: &ldquo;Jessie, that&apos;s $111 more every month — $1,332 more every year — that you control. The transportation concern is real and we can work through it. Don&apos;t walk away from that.&rdquo;</p>
        </motion.div>

        {/* ── The Moment That Decided This Call ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>15:38 — &ldquo;I don&apos;t know about the transportation.&rdquo; You let her go.</strong></p>
            <p>Transportation is a legitimate concern for a consumer with a pacemaker and diabetes in Henderson County, NC — rural area, real medical transport needs. But it&apos;s not a reason to walk away from $111 more per month in grocery benefits, $100 more in vision, and the same dental. The plan still wins on the numbers even if the transportation is a wash.</p>
            <p>She had told you she does &ldquo;everything herself.&rdquo; That is the emotional anchor for this reframe. When she said she had concerns about transportation, the correct response was:</p>
            <p><em>&ldquo;Jessie, you said you have to do everything yourself — $111 more every month, $1,332 more every year, that you control. Let me tell you exactly what the transportation benefit covers on this plan and what it doesn&apos;t — and then you can decide if that tradeoff makes sense. Because right now you&apos;re leaving over $1,300 a year on the table over a benefit you haven&apos;t seen yet.&rdquo;</em></p>
            <p>That reframe doesn&apos;t dismiss the concern. It puts the concern in context and keeps her in the conversation long enough to actually look at the transportation terms. She had already said she was glad she called. She wanted to say yes.</p>
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
              { cat: 'Lead Quality', score: 13, max: 20 },
              { cat: 'Signal Reading', score: 10, max: 20 },
              { cat: 'Math Breakdown', score: 7, max: 20 },
              { cat: 'Objection Handling', score: 2, max: 15 },
              { cat: 'Call Outcome Quality', score: 2, max: 10 },
              { cat: 'Compliance', score: 8, max: 15 },
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
          <p>The Certainty System · Rosina Klimoski · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC2 · D-SNP · QMB · Devoted Health · Henderson County NC</p>
        </div>

      </div>
    </PageShell>
  )
}
