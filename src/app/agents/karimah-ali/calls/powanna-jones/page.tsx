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

export default function PowannaJonesCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Call Report</span>
            <span className={styles.dot}>·</span>
            <Link href="/agents/karimah-ali" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Karimah Ali
            </Link>
          </div>
          <h1 className={styles.agentName}>Powanna Jones</h1>
          <p className={styles.period}>April 14, 2026 · 3:48 · Verification Dropout</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(42), fontWeight: 700 }}>42 / 100</span>
            {' · '}INCOMPLETE
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(42) }}>42</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>3:48</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '1rem' }}>INCOMPLETE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Ended at verification</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>SSN friction, no recovery</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>
              Powanna Jones, 64, called in from Lake County, Florida. She confirmed her zip, gave SOA permission, and
              was cooperative through the full compliance opening. The call stalled at 3:04 when you asked for her
              Social Security number. She didn&apos;t have her Medicare card, and when the SSN was the only other
              option, she pushed back immediately: &quot;Why do you definitely not have information? You don&apos;t
              know if I want it or not.&quot;
            </p>
            <p>
              Your response was technically correct — you explained that SSN is needed to verify her Medicare Part A
              and Part B — but it addressed the wrong concern. Powanna wasn&apos;t questioning your process. She was
              questioning whether she should trust you with that information. The call ended at 3:48 with her saying
              she&apos;d call back once she found her card. No plan was discussed, no discovery was run, no callback
              time was set.
            </p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>
              Your compliance opening was clean. You delivered the full TPMO disclaimer at 0:38 — five organizations,
              62 products, Medicare.gov and 1-800-MEDICARE references, state health insurance program — without
              stumbling or skipping. You confirmed the callback number at 1:28, verified decision-making authority,
              and asked the nursing home question. You also confirmed her zip code back to her before proceeding.
              For a call that lasted under four minutes, the compliance section was executed properly at every step.
            </p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>
            When Powanna said she didn&apos;t have her Medicare card, the card — not SSN — should have been your
            primary ask. &quot;No problem — if you can grab that red, white, and blue card when you have a second,
            that&apos;s actually the easiest path. If you don&apos;t have it, I can also look you up another way,
            but let&apos;s try the card first.&quot; SSN as a first offer is why the call broke.
          </p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>
              At 3:04 you asked for her Social Security number directly, without any setup. Powanna asked
              &quot;You can&apos;t pull it up with that number?&quot; — a mild, logical pushback. That was the
              recoverable moment. A pivot to the Medicare card as the preferred path would have kept the call alive:
              <em> &quot;No problem — the easier option is actually your Medicare card. If you can grab that, I just
              need the letters and numbers on the front.&quot;</em>
            </p>
            <p>
              When she escalated at 3:22 — &quot;You don&apos;t know if I want it or not&quot; — the call was still
              recoverable. The exit at 3:41 (&quot;I&apos;ll call back&quot;) was the last window. Before letting her
              go, you needed to convert the vague promise into a committed callback: <em>&quot;I&apos;m Karimah —
              let me give you my number directly. Call me when you&apos;ve got the card and I&apos;ll pick up right
              where we left off.&quot;</em>
            </p>
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
              { cat: 'Signal Reading', score: 3, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 3, max: 15 },
              { cat: 'Call Outcome Quality', score: 4, max: 10 },
              { cat: 'Compliance', score: 13, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>42 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Karimah Ali · Powanna Jones · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 (SSN Friction — No Recovery) · Verification Dropout</p>
        </div>
      </div>
    </PageShell>
  )
}
