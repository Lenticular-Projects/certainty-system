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

export default function NotStated6m26sCallPage() {
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
          <p className={styles.period}>April 13, 2026 · 6:26 · Oklahoma County, OK</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(32), fontWeight: 700 }}>32 / 100</span>
            {' · '}Missed Opportunity · The Scared Switcher
          </p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(32) }}>32</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>6:26</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 13, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1.1rem' }}>MISSED</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Missed Opportunity</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC2</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Logic vs. fear</span>
          </div>
        </motion.div>

        {/* ── What Happened ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>The consumer just turned 65 and was waiting for his Medicare card in the mail. He called from Oklahoma County after seeing an ad about the &ldquo;card&rdquo; benefit. At 1:28 he told you exactly what he wanted: the card. At 3:36 he declined to give any personal information until his Medicare card arrived — a clean, understandable position for someone brand-new to the system.</p>
            <p>You spent the next three minutes explaining why your systems are secure and why you needed the information to proceed. He heard logic. He was operating on fear — the kind of caution a brand-new 65-year-old has about giving out personal information to a stranger. The call ended with him agreeing to call back when his card arrived. That callback almost certainly does not happen.</p>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Compliance execution (0:31):</strong> TPMO and SOA delivered perfectly — 15 out of 15 on compliance. That&apos;s a full score and it was earned. Clean, early, correct. That is the foundation everything else gets built on.</p>
            <p><strong>Caught the IEP signal (2:54):</strong> When he said &ldquo;I just turned 65 this month,&rdquo; you registered it. He&apos;s in his Initial Enrollment Period — a high-value lead window. You picked that up. The opportunity was real. The issue was what came after.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>He wasn&apos;t afraid of your systems — he was afraid in general. Stop trying to get the information and give him something first: &ldquo;Let&apos;s set the verification aside. You said you called about the card — let me just tell you how it works in Oklahoma County. No information needed. If it sounds right, we&apos;ll figure out the next step after.&rdquo;</p>
        </motion.div>

        {/* ── The Moment That Decided This Call ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>5:55 — &ldquo;How can I make you comfortable?&rdquo;</strong></p>
            <p>At 5:14 the consumer said clearly: &ldquo;I&apos;m not wanting to give out any information until I&apos;ve got all my cards.&rdquo; That&apos;s the most honest thing a consumer can say. He told you exactly what the barrier was. Your response was to ask him how you could solve it. That puts the problem back on him — and he told you: he can&apos;t. The call ended 71 seconds later.</p>
            <p>The right response at 5:14 is not a question. It&apos;s a direction change: <em>&ldquo;That makes complete sense — you should never give out information until you&apos;re comfortable. Let&apos;s do this differently. You said you called about the card. Let me just explain how it works in Oklahoma County, no information needed, and if it sounds right we&apos;ll figure out the next steps after you have your card in hand.&rdquo;</em></p>
            <p>You give him something before you ask for anything. That&apos;s how you earn trust with a Scared Switcher. Once he understood the benefit, he had a reason to follow through on that callback. Without it, there&apos;s nothing pulling him back.</p>
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
              { cat: 'Lead Quality', score: 5, max: 20 },
              { cat: 'Signal Reading', score: 7, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 3, max: 15 },
              { cat: 'Call Outcome Quality', score: 2, max: 10 },
              { cat: 'Compliance', score: 15, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: row.score === 0 ? 'var(--terracotta)' : scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}>
              <span>Total: <strong>32 / 100</strong></span>
            </div>
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Tavares Smith · April 13, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC2 · IEP · The Scared Switcher · Fear-Based Objection · Give First — Ask Second</p>
        </div>

      </div>
    </PageShell>
  )
}
