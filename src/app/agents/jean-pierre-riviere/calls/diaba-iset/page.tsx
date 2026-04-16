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

export default function DiabaIsetCallPage() {
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
          <h1 className={styles.agentName}>Diaba Iset</h1>
          <p className={styles.period}>April 14, 2026 · 12:27 · The Benefit Caller</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(34), fontWeight: 700 }}>34 / 100</span>
            {' · '}NOT ENROLLED — MISSED OPPORTUNITY
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(34) }}>34</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>12:27</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>Apr 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>MISSED OPP</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Consumer ended call</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1, RC2, RC3, RC6</span>
            <span className={styles.scoreLabel}>Root Causes</span>
            <span className={styles.scoreRange}>No close, missed CSN SEP</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Diaba Iset, an 80-year-old man with diabetes and COPD on supplemental oxygen, called MegaCare asking about benefits on a plan he had recently enrolled in — a Zing Essential Chronic Plan (C-SNP for diabetes) he was still waiting on the card for. You identified early that his OTC benefit was only $75 every three months and began positioning a plan switch.</p>
            <p>The problem was sequencing. You spent the middle third of the call criticizing the Zing plan without naming a single competing plan, a specific benefit amount, or a concrete reason for him to act. The consumer said "I don't want to change the company" three times — at 6:34, 9:05, and 9:08 — and each time you responded with "I'm not changing anything, I'm just looking," which is evasion, not a reframe.</p>
            <p>At 12:05, the call's defining moment arrived: "I have COPD. I am on oxygen. Why am I talking to you? I am tired." This was both a CSN SEP trigger — COPD qualifies for a year-round C-SNP enrollment — and a physical distress signal. You had never asked about his health conditions beyond the diabetes you found in the system, so this disclosure arrived with seconds left on the clock. You said "I got you. Okay. No problem." and the lead was gone with no callback time secured.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>Your TPMO disclaimer landed cleanly at 2:08 — early, smooth, and without breaking the conversation. That's the right move and you executed it without hesitation.</p>
            <p>At 6:39 you correctly identified the consumer's current plan from a system lookup — Zing Essential Chronic Plan, diabetes C-SNP — and accurately cited the $75 quarterly OTC benefit. That's real system competence.</p>
            <p>The warmest moment in the call was at 5:11 when Diaba shared his international background and you responded with genuine curiosity. "That's the first time I've seen someone named Diaba — that's Middle Eastern, isn't it?" The consumer lit up and shared his story. That was the highest-trust point in the call and it shows what you're capable of when you let the human moment land.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When Diaba said he has COPD and is on oxygen, your one line was: "Mr. Iset, COPD actually qualifies you for a specialized plan built specifically for that condition — with better coverage and more OTC money than Zing. Let me check if that plan exists in your zip code. I'll have everything ready when I call you tomorrow morning — does 10am work?"</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>At 10:13, Diaba said: "I live with my son and he's a student. I work part-time. Some of the medicine I have to pay for it. Some of it I can't afford." That sentence contained the entire reason he should switch plans — financial stress, medication affordability, fixed income. You responded with "I can upgrade you" but had no specific plan name, no benefit amount, and no connection to his medication problem. The consumer did not hear his own pain reflected back to him, so the pitch felt generic.</p>
            <p>Ninety seconds later at 12:05, he disclosed the COPD and ended the call. The two facts that should have driven this enrollment — unaffordable medications and a qualifying chronic condition — both arrived and neither was deployed. The last viable window was at 10:59 when he agreed the $75 OTC "wasn't enough." That was the enrollment signal. It needed a specific plan name and a dollar amount. Without those two things, there was nothing for him to say yes to.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Score Breakdown</h2>
          <div className={styles.callTable}>
            <div className={styles.callTableHeader}>
              <span>Category</span><span>Score</span><span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 5, max: 20 },
              { cat: 'Signal Reading', score: 6, max: 20 },
              { cat: 'Math Breakdown', score: 3, max: 20 },
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
            <div className={styles.callTableFooter}><span>Total: <strong>34 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Jean Pierre Riviere · Diaba Iset · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC2 · RC3 · RC6 · CSN SEP missed</p>
        </div>
      </div>
    </PageShell>
  )
}
