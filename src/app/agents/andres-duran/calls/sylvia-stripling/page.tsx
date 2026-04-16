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

export default function SylviaStriplingCallPage() {
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
            <Link href="/agents/andres-duran" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Andres Duran
            </Link>
          </div>
          <h1 className={styles.agentName}>Sylvia Stripling</h1>
          <p className={styles.period}>April 14, 2026 · 22:37 · Metairie, LA</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(55), fontWeight: 700 }}>55 / 100</span>
            {' · '}Missed Opportunity · The Money Caller
          </p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(55) }}>55</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>22:37</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1.1rem' }}>MISSED</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Missed Opportunity</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1 · RC2</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Close abandoned + logic push</span>
          </div>
        </motion.div>

        {/* ── What Happened ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Sylvia Stripling called from a Facebook ad about a food/spending card. She had full Medicaid — which unlocked the highest OTC tier available — and you confirmed her doctor (Dr. Ferriere) was in network. The math case was real: $101/month with UHC versus $333/month with Devoted, a $230 delta annualized to $2,760 per year. At 14:41 she said &ldquo;Oh my God. Yeah, that&apos;s a big difference.&rdquo; That was your close.</p>
            <p>Instead of pivoting to enrollment, you kept explaining benefits. By 16:26 she had re-anchored to UHC loyalty — &ldquo;I&apos;ve got to talk to somebody else here&rdquo; — and the objection loop began. You pushed logic on an emotional objection four more times. At 20:52 she said &ldquo;You&apos;re pushing me.&rdquo; At 22:18 she offered to call back, and you said &ldquo;You&apos;re not going to call me back. But okay, have a good one.&rdquo; That sentence permanently burned the lead.</p>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Medicaid identification and tier unlocking at 6:26:</strong> You confirmed full Medicaid and immediately used it to explain why Sylvia qualified for the $333 tier. That is a skilled, proactive move — most agents wait to be told.</p>
            <p><strong>Math comparison with annualization at 14:34:</strong> $101 vs $333 = $230/month = $2,760/year, delivered clearly. Both Step 1 and Step 2 of the math breakdown were completed. Her reaction confirmed the math landed.</p>
            <p><strong>Doctor network confirmation at 9:52:</strong> You asked for the doctor&apos;s name, looked her up by address, and confirmed in-network before presenting the plan. Correct sequencing — suitability before the pitch.</p>
            <p><strong>Composure through 8 minutes of hearing disruption:</strong> When Sylvia repeatedly insisted she heard children screaming, you muted your microphone to test the theory and stayed calm throughout. That&apos;s professional resilience.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>At 16:24 Sylvia said &ldquo;Oh my God&rdquo; — peak emotional engagement. That was your enrollment pivot, not a cue to keep presenting. The line: &ldquo;Exactly. Let&apos;s get that set up for you today. Can I get your date of birth?&rdquo; Close the moment the math lands, not three minutes later.</p>
        </motion.div>

        {/* ── The Moment That Decided This Call ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>16:24 — &ldquo;Oh my God.&rdquo; followed by 16:26 — &ldquo;I&apos;ve got to make a change here before I can do this.&rdquo;</strong></p>
            <p>Two seconds separated your close window from the loyalty objection. At 16:24 Sylvia was at peak emotional buy-in. You continued explaining instead of pivoting. By 16:26 she had re-anchored to UHC and the objection loop was open. Every response after that pushed logic at an identity objection — &ldquo;Why are you worried about a multi-billion insurance company?&rdquo; amplified her resistance rather than resolving it.</p>
            <p>The loyalty objection needed empathy, not argument: <em>&ldquo;Ten years with the same doctor — that is real loyalty. And that&apos;s exactly what we&apos;re protecting today. Dr. Ferriere is in network, your copay stays zero, and the only thing that changes is your food card goes from $101 to $333. Nothing else changes except more money in your pocket.&rdquo;</em></p>
            <p>At 22:18 when she offered a callback, that was the last viable recovery window. Give her your direct number, a specific question to ask UHC (&ldquo;Can you match $333 a month?&rdquo;), and a warm close. Sarcasm at goodbye is never the answer.</p>
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
              { cat: 'Lead Quality', score: 12, max: 20 },
              { cat: 'Signal Reading', score: 11, max: 20 },
              { cat: 'Math Breakdown', score: 14, max: 20 },
              { cat: 'Objection Handling', score: 5, max: 15 },
              { cat: 'Call Outcome Quality', score: 4, max: 10 },
              { cat: 'Compliance', score: 9, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}>
              <span>Total: <strong>55 / 100</strong></span>
            </div>
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Andres Duran · Sylvia Stripling · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC2 · INT SEP · The Money Caller · Metairie LA · $2,760/yr gap</p>
        </div>

      </div>
    </PageShell>
  )
}
