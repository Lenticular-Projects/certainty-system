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

export default function JimmyDPresnelCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <Link href="/agents/rudy-schprejer" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              ← Rudy Schprejer
            </Link>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Call Report</span>
          </div>
          <h1 className={styles.agentName}>Jimmy D. Presnel</h1>
          <p className={styles.period}>April 14, 2026 · 30:09 · Inbound — The Money Caller</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(48), fontWeight: 700 }}>48 / 100</span>
            {' · '}INCOMPLETE
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(48) }}>48</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>30:09</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '0.95rem' }}>INCOMPLETE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Recording ended mid-comparison</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1/RC6</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Medication Stall + SEP Miss</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Jimmy Presnel called in about a $1,200 grocery card he saw advertised — a cooperative, 65-year-old on Humana Gold Plus in Lake Linton, NC. You opened correctly, pivoted immediately to the food card benefit at 1:26, handled his MBI resistance at 2:32 with authority, and pulled up his full record at 5:47.</p>
            <p>At 8:47 you teased the $165/month Part B give-back — which generated genuine interest. Jimmy asked "What's the catch?" at 9:46, you answered cleanly, and momentum was building. Then at 12:48 Jimmy mentioned he'd just started a CPAP machine. You said "No no no, that's fine. That comes up in your MBI" and moved on.</p>
            <p>The medication reconciliation began at 13:00 — five medications including Hydrocodone-APAP. The hydrocodone ID caused over 8 minutes of confusion and system fumbling that dragged the call into its final phase. You confirmed Dr. Swisher in-network at 27:22 and began the plan comparison. At 29:34 Jimmy caught you saying "Aetna" when he's on Humana — a small credibility hit. The recording ends at 30:09 mid-sentence, with no plan presentation completed and no enrollment attempted.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>The MBI resistance reframe at 2:38 was excellent. When Jimmy hesitated on providing his Medicare number, you explained clearly why it was needed, what you could and could not do with it, and framed yourself as CMS-monitored and unable to make changes without his consent. He provided the number immediately. That is a skill — staying calm, grounded, and authoritative when a consumer pushes back on data collection.</p>
            <p>The "Humana Direct vs. enrollment center" framing at 7:14 was smart positioning. Jimmy admitted he went direct to Humana, and you used that to reframe yourself as a neutral expert with access to all carriers. That's the kind of value proposition that earns the right to continue. Confirming the doctor network before pitching the plan at 27:22 was also correct sequencing.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When medication ID is uncertain, flag it and keep moving: "Jimmy, let me flag this one for our pharmacist team — they'll confirm exact coverage. What's your next medication?" That one move saves eight minutes and preserves call momentum.</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>12:48 — Jimmy said "I just started a CPAP machine." You said "No no no, that's fine. That comes up in your MBI." Sleep apnea is a qualifying chronic condition for CSN enrollment year-round. That mention needed one question: "When did a doctor confirm that diagnosis for you?" If the diagnosis was recent, a C-SNP lookup should have followed before presenting the standard give-back plan. That question costs 20 seconds and could have changed the entire enrollment pathway.</p>
            <p>Then from 13:00 to 21:00 — eight minutes on hydrocodone identification. When a single medication is causing that much confusion, the move is simple: "Mr. Presnel, I want to get the exact formulation right — let me flag this for our pharmacist team. They'll verify exact coverage. What else are you taking?" That keeps the call moving and prevents momentum from dying in a lookup loop. By the time you got to the plan comparison at 27:22, you were in the last three minutes of a 30-minute call. The recording ends before you can close it.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Score Breakdown</h2>
          <div className={styles.callTable}>
            <div className={styles.callTableHeader}>
              <span>Category</span><span>Score</span><span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 11, max: 20 },
              { cat: 'Signal Reading', score: 8, max: 20 },
              { cat: 'Math Breakdown', score: 6, max: 20 },
              { cat: 'Objection Handling', score: 8, max: 15 },
              { cat: 'Call Outcome Quality', score: 5, max: 10 },
              { cat: 'Compliance', score: 10, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>48 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Rudy Schprejer · Jimmy D. Presnel · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 — Medication Lookup Time Waste · RC6 — CPAP / CSN Signal Missed · RC3 — Premature Math</p>
        </div>
      </div>
    </PageShell>
  )
}
