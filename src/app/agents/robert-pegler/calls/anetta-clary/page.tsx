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

export default function AnettaClaryCallPage() {
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
          <h1 className={styles.agentName}>Anetta Clary</h1>
          <p className={styles.period}>April 14, 2026 · 21:53 · Atlanta, GA</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(45), fontWeight: 700 }}>45 / 100</span>
            {' · '}Missed Opportunity · The Money Caller — MOV SEP
          </p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(45) }}>45</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>21:53</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1.1rem' }}>MISSED</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Missed Opportunity</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC2</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Logic against emotion</span>
          </div>
        </motion.div>

        {/* ── What Happened ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Anetta Clary called from Atlanta, GA — recently relocated, which opened a Change of Residence MOV SEP. You correctly identified it at 7:27. You ran thorough plan research, checked multiple carriers, verified her network. At 18:53, Anetta mentioned she had budgeted gas money — a clear Client Gold signal about financial constraint. You noted it but didn&apos;t deploy it.</p>
            <p>At 19:26, when Anetta expressed frustration about losing her food card from the relocation, you responded with an industry explanation instead of empathy. Twenty-one minutes invested. At 21:45, you ended with &ldquo;if you&apos;re not interested, no problem.&rdquo; The call was recoverable. The close handed it away.</p>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>SEP identification (7:27):</strong> You correctly identified the Change of Residence SEP — the consumer&apos;s recent move to Atlanta opened an enrollment window. You found it early and had the justification to enroll today.</p>
            <p><strong>Thorough research:</strong> You checked multiple plans and carriers before presenting options. That completeness is the right approach on a consumer who has financial concerns — you earned the right to make a recommendation.</p>
            <p><strong>Compliance opening (2:23):</strong> Full TPMO and SOA delivered correctly. Clean foundation.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>At 18:53 when Anetta mentioned gas money: &ldquo;Anetta, my job right now is to find that gas money for you somewhere in this plan. The dental benefit puts $2,000 back — that&apos;s over $160 a month you don&apos;t spend on dental. That&apos;s your gas money.&rdquo;</p>
        </motion.div>

        {/* ── The Moment That Decided This Call ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>21:45 — &ldquo;If you&apos;re not interested, no problem.&rdquo;</strong></p>
            <p>This is not a close — it&apos;s permission to leave. You had 21 minutes of correct work, an identified SEP, a consumer with a specific financial concern (gas money), and a plan that addressed it. The consumer never said she wasn&apos;t interested. She was processing.</p>
            <p>The close at 21:45: <em>&ldquo;Anetta, based on everything we just went through — the dental coverage, and that gas money concern you mentioned — this plan makes sense for you. I want to get you set up today. Can I confirm your address in Atlanta?&rdquo;</em> Direct. No qualifier. No escape hatch. The difference between that sentence and &ldquo;if you&apos;re not interested, no problem&rdquo; is the enrollment.</p>
            <p>Before any permission-seeking close, ask yourself: did the consumer say no? If not, close direct.</p>
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
              { cat: 'Lead Quality', score: 9, max: 20 },
              { cat: 'Signal Reading', score: 8, max: 20 },
              { cat: 'Math Breakdown', score: 6, max: 20 },
              { cat: 'Objection Handling', score: 5, max: 15 },
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
              <span>Total: <strong>45 / 100</strong></span>
            </div>
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Robert Pegler · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC2 · MOV SEP · Client Gold — Gas Money · Permission-Seeking Close</p>
        </div>

      </div>
    </PageShell>
  )
}
