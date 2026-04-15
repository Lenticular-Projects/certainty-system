'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from '../../page.module.css'

function scoreColor(score: number) {
  if (score >= 75) return 'var(--sage-dark)'
  if (score >= 55) return 'var(--mustard-dark)'
  return 'var(--terracotta)'
}

export default function CarolHillCallPage() {
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
            <Link href="/agents/manuel-medrano" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Manuel Medrano
            </Link>
          </div>
          <h1 className={styles.agentName}>Carol Hill</h1>
          <p className={styles.period}>April 13, 2026 · 27:22 · New Philadelphia, OH</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(32), fontWeight: 700 }}>32 / 100</span>
            {' · '}Missed Opportunity · The Compliant Non-Closer
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
            <span className={styles.scoreValue}>27:22</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 13, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1.1rem' }}>MISSED</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Missed Opportunity</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC6</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>INT SEP not executed</span>
          </div>
        </motion.div>

        {/* ── What Happened ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Carol Hill is a 91-year-old, Medicaid-eligible consumer in New Philadelphia, OH — living alone with her dog as her only companion. You confirmed Medicaid at 8:27, identified a plan with a $251/month OTC card, verified Dr. Dustin Harder as in-network, and built genuine warmth over 27 minutes. The technical case was there: zero-premium plan, $3,012/year in benefits, cooperative consumer, confirmed SEP.</p>
            <p>At 21:52 you raised a Disaster Storm SEP tied to a winter storm — a SEP type agents are prohibited from initiating. Carol confirmed the storm didn&apos;t affect her and you correctly backed off. But the move revealed the real problem: you didn&apos;t know the INT SEP was available the whole time. At 23:03 you told Carol she&apos;d need to wait until October. Carol is Medicaid-eligible. She never needed to wait. The enrollment window was open from minute 8.</p>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Compliant open (0:52):</strong> Full TPMO disclaimer with correct organization count, 1-800-MEDICARE reference, and recorded-line disclosure within 16 seconds. Textbook execution.</p>
            <p><strong>Patient with a cognitively challenged consumer:</strong> Carol struggled with SSN recall, phone numbers, and medication names. You stayed warm and patient throughout — never frustrated, never dismissive. That trust kept her on the phone.</p>
            <p><strong>Annualization (24:26):</strong> When Carol asked &ldquo;What is that for a year?&rdquo; you answered immediately: &ldquo;$3,000 a year.&rdquo; Correct Step 2 execution. The number landed.</p>
            <p><strong>Correct DST exit (23:03):</strong> After Carol said the storm didn&apos;t affect her, you backed off cleanly. You didn&apos;t try to manufacture storm impact. That was the right call.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>At 8:27 when Medicaid was confirmed: &ldquo;Ms. Hill, I have good news — because you have Medicaid, you have a special enrollment window open right now, not just in October. That means we can get you into this plan today. I just need a few more pieces and we&apos;re done before we hang up.&rdquo;</p>
        </motion.div>

        {/* ── The Moment That Decided This Call ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>23:03 — &ldquo;It does look like if that storm didn&apos;t affect you, you would need to wait for the annual enrollment period.&rdquo;</strong></p>
            <p>You had Medicaid confirmed since 8:27 — 15 minutes earlier. The INT SEP was open the entire call. Carol was trusting, cooperative, and had already said &ldquo;It&apos;s not that far anyhow if I have to wait&rdquo; — she was willing to follow your lead in any direction. You directed her to October.</p>
            <p>The correct path at 23:03: <em>&ldquo;Ms. Hill, actually — because you have Medicaid, your enrollment window is already open right now. We don&apos;t need the storm at all. Let me get you set up today. I just need your medication list and we&apos;re done.&rdquo;</em> At that point you had the doctor confirmed, the plan identified, and a cooperative consumer. The only missing piece was medications — and Carol herself had told you Drug Mart and Dr. Harder&apos;s office both have them on file.</p>
            <p><strong>12:11 — &ldquo;That&apos;s all I got, you know. She&apos;s my baby.&rdquo;</strong></p>
            <p>Carol revealed she lives alone at 91, her dog sat next to her when she fell on the floor and waited for help. That is the most powerful close on this call. The move: <em>&ldquo;Ms. Hill, that story about your dog waiting with you when you fell — that tells me you&apos;re doing this on your own. This plan puts $251 a month in your pocket and your doctor is already in-network. Let&apos;s get this handled today so you have one less thing to worry about.&rdquo;</em> You heard it, validated it warmly, and moved on. That moment was the close.</p>
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
              { cat: 'Lead Quality', score: 11, max: 20 },
              { cat: 'Signal Reading', score: 5, max: 20 },
              { cat: 'Math Breakdown', score: 6, max: 20 },
              { cat: 'Objection Handling', score: 5, max: 15 },
              { cat: 'Call Outcome Quality', score: 2, max: 10 },
              { cat: 'Compliance', score: 3, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
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
          <p>The Certainty System · Manuel Medrano · April 13, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC6 · RC4 · INT SEP · Medicaid · DST Compliance Violation · Client Gold — Isolation</p>
        </div>

      </div>
    </PageShell>
  )
}
