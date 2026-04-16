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

export default function UnknownConsumer3m15sCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>

        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Call Report</span>
            <span className={styles.dot}>·</span>
            <Link href="/agents/josner-saintil" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Josner Saintil
            </Link>
          </div>
          <h1 className={styles.agentName}>Unknown Consumer (3:15)</h1>
          <p className={styles.period}>April 15, 2026 · 3:15 · Oklahoma</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(31), fontWeight: 700 }}>31 / 100</span>
            {' · '}Incomplete · Two live SEP windows walked past
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(31) }}>31</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>3:15</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 15, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '1.1rem' }}>INCOMPLETE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Cut off mid-objection</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1 · RC6</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Frame collapse + SEP miss</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>This consumer is a disabled, low-income Oklahoma resident on Medicare, Medicaid, Social Security, and a private no-copay insurance plan. She called in response to a mailer about a $147/month Medicare give-back. She told you at 0:30 she &ldquo;has everything&rdquo; — but she still called. That is not a consumer walking away. That is a curious consumer behind a defensive wall.</p>
            <p>The call collapsed in two moments. At 0:17 she said &ldquo;No, not really&rdquo; to the standard opening question, and you apologized: &ldquo;No, you&apos;re not wasting my time. That&apos;s my job basically.&rdquo; That apology handed frame control to the consumer before the call had started. From that point you were reacting to her, not leading her.</p>
            <p>Then at 1:45 she disclosed the most important fact of the call: &ldquo;Medicaid was dropped and it shouldn&apos;t have been and that took me until March the 1st to get it reinstated.&rdquo; That is a live MCD enrollment window — open until approximately June 1, 2026. You heard the story, empathized, and moved on. The call ended at 3:15 with the consumer mid-objection. Two live SEP windows — INT (active Medicaid) and MCD (recent reinstatement) — were present and neither was explored.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Clean opening with recorded-line notice and CMS question (0:00):</strong> You delivered both required opening elements within 17 seconds. That is the baseline done correctly.</p>
            <p><strong>Patience during the Medicaid ordeal (1:17):</strong> When she described two months of fighting Medicare, Medicaid, and DHS — you listened. You didn&apos;t rush her or dismiss the story. That patience kept minimal rapport alive through a skeptical conversation, and it is the reason she stayed on the line as long as she did.</p>
            <p><strong>Correct framing concept — &apos;add on, not change&apos; (3:00):</strong> The instinct to tell her you&apos;re not changing her coverage, only adding to it, was exactly right for this consumer profile. The frame was sound. It just came six exchanges too late and without a concrete example anchoring it.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When she said &ldquo;Medicaid was dropped in February and reinstated March 1st&rdquo; — that was a live enrollment window, not a personal story. The line: &ldquo;When exactly was it reinstated? March 1st? That actually opens a special window — I can get you into a better plan right now without touching anything you have. What&apos;s your zip code?&rdquo;</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>1:45 — &ldquo;Medicaid was dropped and it shouldn&apos;t have been and that took me until March the 1st to get it reinstated.&rdquo;</strong></p>
            <p>This was not a personal story about bureaucratic suffering. This was a live MCD SEP trigger. Medicaid reinstated approximately March 1, 2026 — the 3-month window closes around June 1, 2026. You had a legitimate, legal enrollment pathway open on this call and you walked past it.</p>
            <p>The consumer was also telling you her deepest fear: she went through a nightmare — $200 taken from her Social Security check, months of phone calls to Medicare, Medicaid, and DHS — and she will not risk destabilizing what she finally got back. That fear is not a wall. That fear is the door. The response that opens it: <em>&ldquo;I want to make sure that never happens to you again. That&apos;s exactly why I want to look at your setup — not to change anything, but to make sure what you have is locked in correctly. And the fact that your Medicaid was reinstated in March? That actually opens a window where I can get you into a stronger plan without disrupting a single thing you already have. What&apos;s your zip?&rdquo;</em></p>
            <p>You heard the pain. You needed to hear the SEP inside the pain. That distinction is what separates a 31-point call from an enrollment.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Score Breakdown</h2>
          <div className={styles.callTable}>
            <div className={styles.callTableHeader}>
              <span>Category</span><span>Score</span><span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 9, max: 20 },
              { cat: 'Signal Reading', score: 4, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 5, max: 15 },
              { cat: 'Call Outcome Quality', score: 6, max: 10 },
              { cat: 'Compliance', score: 7, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>31 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Josner Saintil · Unknown Consumer (918) · April 15, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC6 · INT SEP · MCD SEP · D-SNP · Oklahoma · Frame Collapse</p>
        </div>

      </div>
    </PageShell>
  )
}
