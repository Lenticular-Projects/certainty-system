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

export default function ReginaDePaivaCallPage() {
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
          <h1 className={styles.agentName}>Regina DePaiva</h1>
          <p className={styles.period}>April 14, 2026 · 36:36 · Sunrise, Florida</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(47), fontWeight: 700 }}>47 / 100</span>
            {' · '}Missed Opportunity · Voice Signature Confusion / No Disenrollment Warning
          </p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(47) }}>47</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>36:36</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '0.85rem' }}>MISSED OPP</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Not Enrolled</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC5+RC4</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Execution + Unprofessional</span>
          </div>
        </motion.div>

        {/* ── What Happened ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Regina DePaiva called from Sunrise, Florida — age 70, with heart disease and kidney disease. That dual-chronic profile makes her C-SNP eligible, and you matched her to an Aetna Chronic Care HMO with a $60/month flex card versus $35 on her current Humana plan. You ran her cardiologist (Dr. Evan Jacob) and nephrologist (Dr. Alexander Markovic) as in-network. The plan was genuinely better for her situation.</p>
            <p>The call collapsed at the voice signature. Regina heard the enrollment recording and said &ldquo;No&rdquo; — not because she rejected the plan, but because she didn&apos;t understand she was being switched from Humana to Aetna. She thought she was confirming a benefit on her existing plan. No one had told her that saying yes to this enrollment meant disenrolling from Humana. That is not a consumer error. That is a disclosure gap.</p>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>C-SNP identification:</strong> Heart disease plus kidney disease is the C-SNP profile. You recognized it and matched her to the right benefit category. That level of clinical reading — not just plan matching but chronic condition pattern recognition — is what separates agents who can close C-SNP calls from those who can&apos;t.</p>
            <p><strong>Specialist verification (both in-network):</strong> You confirmed Dr. Jacob (cardiology) and Dr. Markovic (nephrology) before presenting the plan. For a consumer managing two major chronic conditions, both doctors being in-network is a hard prerequisite. You cleared it before presenting — correct sequence.</p>
            <p><strong>Flex card math (14/20 lead quality):</strong> $60 per month versus $35 on Humana is $300 more per year in flexible spending. You presented that comparison clearly enough that Regina was engaged through the 36-minute call. A consumer with heart and kidney disease who stays on a Medicare call for 36 minutes is listening.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>Before every voice signature, say this out loud: &ldquo;Regina, when you confirm in the recording, you&apos;re giving permission to switch from your Humana plan to the Aetna plan we just went over. Humana will stop on the effective date and Aetna will start. Do you want to go ahead with that?&rdquo; That one sentence prevents the no that ended this call.</p>
        </motion.div>

        {/* ── The Moment That Decided This Call ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>Voice signature phase — Regina said &ldquo;No.&rdquo; She didn&apos;t know she was leaving Humana.</strong></p>
            <p>Regina DePaiva had been on Humana. She agreed to enroll in Aetna. But at the voice signature, when she heard the enrollment recording, the word &ldquo;disenroll&rdquo; or &ldquo;terminate&rdquo; in the script made her say no — because she had never been told that saying yes meant leaving Humana. She thought she was adding a benefit, not switching plans.</p>
            <p>This is the disenrollment warning disclosure gap. Before any voice signature on a plan switch, the consumer must explicitly understand: their current plan ends, the new plan begins. This is not optional language — it is the difference between an informed yes and a confused no.</p>
            <p>The correct pre-signature script: <em>&ldquo;Regina, before we go to the confirmation, I want to make sure you understand what happens next. When you confirm in the recording, your Humana plan will end on [effective date] and your new Aetna Chronic Care plan will start on [start date]. You&apos;ll be switching — not adding. Your doctors Dr. Jacob and Dr. Markovic are both in-network on Aetna, so that coverage continues. Do you want to go ahead?&rdquo;</em></p>
            <p>Additionally, Dr. Idalis Martinez NP — her primary care nurse practitioner — was not in the Aetna network. That should have been disclosed before the call reached the enrollment phase. A consumer managing heart and kidney disease needs to know about any provider gap before they agree to switch, not after the &ldquo;No.&rdquo;</p>
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
              { cat: 'Lead Quality', score: 14, max: 20 },
              { cat: 'Signal Reading', score: 13, max: 20 },
              { cat: 'Math Breakdown', score: 9, max: 20 },
              { cat: 'Objection Handling', score: 3, max: 15 },
              { cat: 'Call Outcome Quality', score: 3, max: 10 },
              { cat: 'Compliance', score: 8, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}>
              <span>Total: <strong>47 / 100</strong></span>
            </div>
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Michelle Marrero · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC5 · RC4 · RC3 · C-SNP · CSN SEP · Aetna Chronic Care · Sunrise FL</p>
        </div>

      </div>
    </PageShell>
  )
}
