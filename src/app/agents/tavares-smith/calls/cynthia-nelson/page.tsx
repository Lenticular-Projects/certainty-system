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

export default function CynthiaNelsonCallPage() {
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
          <h1 className={styles.agentName}>Cynthia Nelson</h1>
          <p className={styles.period}>April 14, 2026 · 18:23 · Dayton, Ohio</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(62), fontWeight: 700 }}>62 / 100</span>
            {' · '}Incomplete · C-SNP Opportunity Left Open
          </p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(62) }}>62</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>18:23</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '1rem' }}>INCOMPLETE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Not Enrolled</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1+RC3</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Discovery + Math</span>
          </div>
        </motion.div>

        {/* ── What Happened ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Cynthia Nelson called from Dayton, Ohio — a stroke survivor with arthritis on Devoted CSNP Plus 016, receiving Extra Help. She was on a plan built for people with exactly her conditions, but you found her a version with a significantly stronger benefit package: an OTC card of $395 per month compared to $50 on her current plan. That&apos;s $4,140 more per year in purchasing power.</p>
            <p>The call ended at 18 minutes without enrollment. You made solid progress in discovery — you caught her chronic conditions and confirmed Dr. Andrew Malarkey (PCP) and Dr. Cassandra Milling (neurologist) early — but the math presentation didn&apos;t land at full strength, and the call closed before you walked her through the enrollment process. The foundation was there. The close was not.</p>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Chronic condition scan (6:46):</strong> You asked about her stroke and arthritis directly instead of waiting for her to volunteer it. That&apos;s exactly how C-SNP eligibility gets confirmed — you have to ask, and you did. That single question unlocked the plan that was available to her.</p>
            <p><strong>Doctor verification (8:10):</strong> You ran both her doctors — Dr. Malarkey and Dr. Milling — before presenting the plan. That&apos;s the right sequence. Patients with neurological conditions will not move on a plan that doesn&apos;t cover their specialist. You cleared that hurdle proactively.</p>
            <p><strong>Extra Help identification:</strong> You confirmed her LIS status and correctly recognized that the $0 premium C-SNP was a legitimate match. You didn&apos;t just present a plan — you presented the right category of plan for her situation.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>Your stroke scan at 6:46 unlocked a plan built for exactly that situation — keep asking about chronic conditions on every call. That question is what separates a C-SNP enrollment from a missed opportunity.</p>
        </motion.div>

        {/* ── The Moment That Decided This Call ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>~14:00 — Math presentation without anchoring.</strong></p>
            <p>You presented the $395 OTC figure, but you didn&apos;t anchor it against what she&apos;s getting now. Cynthia is on a $50/month OTC card. The gap is $345 per month — $4,140 per year. When a consumer doesn&apos;t hear that contrast stated out loud in plain language, the new number doesn&apos;t feel real. It&apos;s just a number on a call.</p>
            <p>The correct move after presenting $395: <em>&ldquo;Cynthia, right now your plan gives you $50 a month for over-the-counter items. This plan gives you $395. That&apos;s $345 more every single month — nearly $4,200 more per year just for groceries, vitamins, and household items. Your doctors are already in-network. The only question is whether you want to switch to the plan that actually pays you more.&rdquo;</em></p>
            <p>She had the Keppra and Lexapro to manage. She was a stroke survivor doing it largely on her own. That contrast — framed in terms of what she can actually buy — is what moves the decision from &ldquo;sounds good&rdquo; to &ldquo;enroll me.&rdquo;</p>
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
              { cat: 'Signal Reading', score: 15, max: 20 },
              { cat: 'Math Breakdown', score: 14, max: 20 },
              { cat: 'Objection Handling', score: 9, max: 15 },
              { cat: 'Call Outcome Quality', score: 4, max: 10 },
              { cat: 'Compliance', score: 5, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}>
              <span>Total: <strong>62 / 100</strong></span>
            </div>
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Tavares Smith · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC3 · C-SNP · Extra Help · Devoted CSNP Plus 016</p>
        </div>

      </div>
    </PageShell>
  )
}
