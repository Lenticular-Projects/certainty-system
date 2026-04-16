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

export default function MarthaHallCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>

        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <Link href="/agents/marcus-hughes" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              ← Marcus Hughes
            </Link>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Call Report</span>
          </div>
          <h1 className={styles.agentName}>Martha Hall</h1>
          <p className={styles.period}>April 15, 2026 · 3:57 · The Already-Covered Caller</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(58), fontWeight: 700 }}>58 / 100</span>
            {' · '}CORRECT NO-SALE
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(58) }}>58</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>3:57</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>Apr 15, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)', fontSize: '0.95rem' }}>CORRECT NO-SALE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>VA + existing benefits</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC2, RC4, RC6</span>
            <span className={styles.scoreLabel}>Root Causes</span>
            <span className={styles.scoreRange}>Gold · Compliance · SEP</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Martha Hall called in from what sounded like a verification mindset — she saw an ad about Medicare benefits and wanted to confirm she wasn't missing anything. She disclosed VA coverage immediately: no copays, no medication costs, zero out-of-pocket for doctors and prescriptions. Within the first two minutes it was clear she had already received a benefit increase that started in January, was collecting approximately $300–$400 per month in supplemental benefits, and had Humana alongside Medicare.</p>
            <p>You made a good adaptive move at 1:04 when you pivoted to a VA-compatible benefits frame rather than plowing through a generic pitch. When she disclosed she was already receiving the social security increase you had just pitched (1:32), you probed for her current benefit amount, asked about Medicaid, and tried a soft close at 2:52. Martha shut it down clearly: "I sit with what I got." You recognized the genuine no-sale and exited cleanly at 3:53 — and that was the right call. Martha is a genuinely unwinnable consumer given her VA coverage and current benefit level.</p>
            <p>This scores as CORRECT NO-SALE. The coaching points are about what you could have done differently in the brief window that existed — not about whether the outcome was wrong.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>The VA pivot at 1:04 was sharp. When Martha said she uses the VA for all her doctors and medications at zero cost, you immediately reframed: "That might actually be even more beneficial." You didn't keep pushing a generic MAPD pitch at someone who has no copays. That adaptability is a real skill — a lot of agents would have bulldozed through the script and wasted another two minutes.</p>
            <p>You also correctly probed for Medicaid status at 2:18 and 2:31. Even when Martha's profile was clearly headed toward a no-sale, you didn't skip the dual-eligible check. That's good call discipline. And the no-sale itself was executed correctly — you recognized she was genuinely unwinnable and ended without burning goodwill or making futile enrollment attempts.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>
            When Martha said "I don't believe in leaving something good when you already got something" — mirror it back: "Martha, I completely agree. That's exactly why I want 60 more seconds to confirm what you have is the best version of that good thing. If it is, I'll tell you."
          </p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>3:03. Martha said "I don't believe in leaving something that you are a good thing when you already got something" — and you responded with "Martha, you're not leaving anything." That logic counter missed the point entirely. Martha wasn't objecting to a plan. She was telling you her entire decision-making philosophy — loyalty, stability, the fear of disrupting something that works. Logic doesn't overcome values. You needed to mirror the value before pivoting to verification.</p>
            <p>The correct line was: "Martha, I completely agree with you — and that's exactly why I want 60 more seconds. Not to change your plan. To confirm that what you have is the best version of that good thing. If it is, you'll hang up knowing for certain." That doesn't ask her to leave anything. It validates her philosophy and asks for 60 seconds to confirm it. Most of the time, she gives you those 60 seconds. Even if the outcome stays the same, you've exhausted the call correctly. Here, you moved on before that window closed.</p>
          </div>
        </motion.div>

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
              { cat: 'Signal Reading', score: 8, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 7, max: 15 },
              { cat: 'Call Outcome Quality', score: 8, max: 10 },
              { cat: 'Compliance', score: 6, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>58 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Marcus Hughes · Martha Hall · April 15, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC2 (Values Gold Missed) · RC4 (TPMO Missing) · RC6 (CDC SEP Not Explored)</p>
        </div>

      </div>
    </PageShell>
  )
}
