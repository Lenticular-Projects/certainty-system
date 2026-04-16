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

export default function UnknownConsumer3m04sCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>

        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <Link href="/agents/ashley-whitehurst" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              ← Ashley Whitehurst
            </Link>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Call Report</span>
          </div>
          <h1 className={styles.agentName}>Unknown Consumer</h1>
          <p className={styles.period}>April 15, 2026 · 3:04 · The Benefit Hunter</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(22), fontWeight: 700 }}>22 / 100</span>
            {' · '}MISSED OPPORTUNITY
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(22) }}>22</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>3:04</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 15, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '0.95rem' }}>MISSED OPPORTUNITY</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Passive exit accepted</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Discovery never started</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>The consumer called from Evangeline Parish, Louisiana (ZIP 70586) specifically for the OTC food card — "Yes, I was trying to provide the full card" at 0:11. You confirmed zip, delivered the full TPMO disclaimer at 0:59, and at 1:31 the consumer told you everything you needed to know: she wanted to keep her same doctors, her same insurance (People's Health), and her same medications. Doctor loyalty was her non-negotiable. That's not an obstacle — that's a constraint you can work with.</p>
            <p>At 2:13 she confirmed her carrier — People's Health. At 2:23 she raised the objection: "I don't want to change my insurance. That's the only insurance my doctor pays me." You pivoted correctly at 2:27: offer to look at People's Health plans specifically that offer the allowance card. That is the right strategic move. She said "You can, if you want" at 2:36. That's permission. Instead of moving immediately to data collection — Medicare number, doctor's name — you re-explained the situation at 2:47: "Your current plan is not offering you the allowance card, so we got to look at the plans that are offering those allowance cards." She said "Oh, okay. Well, that's okay. That's okay." The call ended at 3:04 with nothing collected.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>Your compliance execution was clean. The recorded line notice came out in the first seven seconds, and the TPMO disclaimer at 0:59 included the organization count (3), product count (16), Medicare.gov, 1-800-MEDICARE, and state health insurance program reference — all four required elements. The plan type menu was offered correctly after the disclaimer.</p>
            <p>The carrier-constraint pivot at 2:27 was the strategically correct read. When a consumer says her doctor only accepts People's Health, the wrong answer is "let me show you other carriers." You didn't do that. You offered to search within People's Health for a plan with the food card. That's exactly right. You had the solution in your hand — you just didn't follow through to data collection before she disengaged.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>The moment the consumer says "You can, if you want," your next line is always a question: "Perfect — to find the People's Health plan with the food card and keep your doctor, I need your Medicare ID number. Can you grab your red, white, and blue Medicare card?" Passive permission is a green light — treat it that way every time.</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>At 2:36, the consumer said "You can, if you want." That is forward permission. The call was alive. The correct response to any form of consumer permission — "okay," "you can," "sure," "that's fine" — is always a data collection question. Not a restatement of the situation. Not an explanation of what you're about to do. A question that moves things forward.</p>
            <p>Instead, at 2:47 you said "Your current plan is not offering you the allowance card, so we got to look at the plans that are offering those allowance cards." The consumer already knew this — she told you her plan doesn't have it. Restating it gave her time and space to disengage, and she did. "That's okay" is not a no. It's someone who stopped feeling led and started feeling like they were going in circles. The consumer's need was real and solvable — a People's Health plan with the OTC card exists in many Louisiana markets. You had the right pivot. You just needed to ask one more question.</p>
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
              { cat: 'Signal Reading', score: 3, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 4, max: 15 },
              { cat: 'Call Outcome Quality', score: 2, max: 10 },
              { cat: 'Compliance', score: 8, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>22 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Ashley Whitehurst · Unknown Consumer (3:04) · April 15, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 — Passive Exit Accepted · Discovery Never Started · ZIP 70586 Evangeline Parish LA</p>
        </div>

      </div>
    </PageShell>
  )
}
