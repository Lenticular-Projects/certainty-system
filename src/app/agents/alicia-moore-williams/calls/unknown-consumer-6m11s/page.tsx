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

export default function UnknownConsumer6m11sCallPage() {
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
          <h1 className={styles.agentName}>Unknown Consumer</h1>
          <p className={styles.period}>April 14, 2026 · 6:11 · Cumberland County, NC</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(28), fontWeight: 700 }}>28 / 100</span>
            {' · '}Missed Opportunity · Self-Sufficient Caller Dismissed
          </p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(28) }}>28</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>6:11</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1.1rem' }}>MISSED</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Missed Opportunity</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1 · RC6</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Callback loop + SEP signals missed</span>
          </div>
        </motion.div>

        {/* ── What Happened ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>A male caller from Cumberland County NC called about the grocery card with his Medicare card in hand. He had also mentioned Medicaid and diabetes early in the call — two SEP signals that went unaddressed. He was ready. The call ended at 6:11 not because he wasn&apos;t willing to enroll, but because the enrollment was never attempted.</p>
            <p>When the consumer mentioned that a family member helps with decisions, you treated it as a blocker rather than an acknowledgment. He corrected you twice — &ldquo;I can make up my own mind&rdquo; and &ldquo;I don&apos;t think I need permission&rdquo; — but you continued steering toward a callback. A caller who explicitly asserts his own decision-making authority is not asking to be referred to someone else. He was telling you he was ready to go. The call ended without his name collected, without his SEP evaluated, and without the grocery card question answered.</p>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Compliance delivered correctly:</strong> TPMO disclaimer was in place and complete before discovery. This is the baseline and you hit it.</p>
            <p><strong>Medicare card confirmed in hand:</strong> You noted the consumer had his card ready — which is a strong readiness signal. Recognizing that the caller was prepared is a good instinct, even if the follow-through didn&apos;t match.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When he said &ldquo;I can make up my own mind,&rdquo; that sentence ended the family-member conversation. The only response was: &ldquo;Absolutely — you called, you have your card, let&apos;s get this done. Can I get your date of birth?&rdquo; He told you he was ready. Believe him.</p>
        </motion.div>

        {/* ── The Moment That Decided This Call ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>&ldquo;I don&apos;t think I need permission.&rdquo;</strong></p>
            <p>That sentence was the second time this consumer told you directly that he was capable of making his own decision. The first was &ldquo;I can make up my own mind.&rdquo; Two clear assertions of autonomy, and the call still moved toward a callback. This is a pattern — treating family-member mentions as automatic blockers instead of as context to acknowledge and move past.</p>
            <p>The Medicaid and diabetes disclosures earlier in the call should have triggered a two-step probe: confirm Medicaid, then check for INT or C-SNP eligibility. Either one would have unlocked a plan with an OTC grocery card — the exact product he called about. Both signals were noted and left unaddressed.</p>
            <p>The caller had his Medicare card ready, disclosed Medicaid and a chronic condition, called about a specific benefit, and asserted his decision-making authority twice. This was a high-intent call that needed enrollment action, not a referral to a future callback that was never going to happen. The lesson isn&apos;t about family members — it&apos;s about reading intent and matching it with action.</p>
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
              { cat: 'Lead Quality', score: 8, max: 20 },
              { cat: 'Signal Reading', score: 3, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 3, max: 15 },
              { cat: 'Call Outcome Quality', score: 3, max: 10 },
              { cat: 'Compliance', score: 11, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: row.score === 0 ? 'var(--terracotta)' : scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}>
              <span>Total: <strong>28 / 100</strong></span>
            </div>
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Alicia Moore Williams · Unknown Consumer · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC6 · INT/C-SNP SEP Missed · Cumberland County NC</p>
        </div>

      </div>
    </PageShell>
  )
}
