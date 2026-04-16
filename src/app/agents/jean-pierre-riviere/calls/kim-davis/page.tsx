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

export default function KimDavisCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Call Report</span>
            <span className={styles.dot}>·</span>
            <Link href="/agents/jean-pierre-riviere" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Jean Pierre Riviere
            </Link>
          </div>
          <h1 className={styles.agentName}>Kim Davis</h1>
          <p className={styles.period}>April 14, 2026 · 6:38 · The Skeptical Inbound</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(28), fontWeight: 700 }}>28 / 100</span>
            {' · '}NOT ENROLLED — MISSED OPPORTUNITY
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(28) }}>28</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>6:38</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>Apr 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>MISSED OPP</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Surrendered exit</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>No retention attempt</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Kim Davis called in response to a Medicare food card advertisement. She disclosed within the first minute that she works full-time and has both Medicare Part A and Part B, and immediately expressed doubt about her eligibility — "I doubt if I am eligible because I still work." You gave her the correct answer: having Medicare is what qualifies her, not her employment status. The answer was factually right but not forceful enough to fully dissolve the belief.</p>
            <p>The call moved through TPMO disclaimer (complete and accurate at 2:29), zip code collection (you misread it back as 45235 instead of 15235, requiring her to correct you at 2:12), and the consumer asked which two carriers were in her area — a WARM signal showing she was still engaged. At 3:09 she revealed she is currently on UPMC/PMC.</p>
            <p>At 3:34 she restated the employment objection before heading for the door: "They ain't going to give me none anyway because I work two jobs." At 3:42 she said "Okay, thank you. Bye-bye." You said nothing. No retention attempt, no reframe, no callback offer. A qualified inbound caller with Medicare Part A and B — who called you — left on a false belief, on a call you did not try to save.</p>
            <p>Note: the post-consumer recording (4:31 onward) captured a side conversation about a different consumer's Medicaid status and plan details. That is a compliance exposure — consumer data discussed on a recorded line belonging to a separate consumer.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>Your compliance execution was the strongest part of this call. Recorded line disclosure in the first sentence at 0:00 — exactly right. The TPMO disclaimer at 2:29 was thorough: two carriers, 21 plans, Medicare.gov, 1-800-MEDICARE, and SHIP reference, all accurate. That section was textbook.</p>
            <p>At 0:35 when Kim challenged her own eligibility, you responded correctly: "The simple fact that you have Medicare is what makes you eligible." The information was right. The delivery just needed more conviction and more emotional depth to reach her.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>At 3:34 when Kim said "they ain't going to give me none anyway because I work two jobs": "Kim, before you go — you've been paying into these benefits in every single paycheck. This is not something they give you. It is something you have already earned. Give me 60 seconds and let me show you the dollar amount. Then you decide."</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>At 3:34, Kim said "they ain't going to give me none anyway because I work two jobs." That is not a rational objection — it is a learned helplessness belief. "The system doesn't work for people like me." You had heard this exact belief at 0:25 and given her a correct but cold factual correction. It did not land. At 3:34 she said it again, louder, as a farewell. That was your signal that logic had not worked and emotion was required.</p>
            <p>The reframe needed to meet her where she was: "Kim, I hear exactly what you're saying. And I want you to know — that belief is exactly why most people miss out on benefits they've already earned. You've been paying the Part B premium out of every single check. This isn't the system giving you something. It's the system giving you back what you already paid for." That reframe does not argue with her worldview — it validates it and then redirects it. The silence you gave her instead was the call's only move that mattered, and it wasn't made.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Score Breakdown</h2>
          <div className={styles.callTable}>
            <div className={styles.callTableHeader}>
              <span>Category</span><span>Score</span><span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 7, max: 20 },
              { cat: 'Signal Reading', score: 5, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 4, max: 15 },
              { cat: 'Call Outcome Quality', score: 3, max: 10 },
              { cat: 'Compliance', score: 9, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>28 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Jean Pierre Riviere · Kim Davis · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · Post-consumer recording compliance exposure (separate consumer data on recorded line)</p>
        </div>
      </div>
    </PageShell>
  )
}
