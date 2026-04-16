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

export default function EdSmithCallPage() {
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
          <h1 className={styles.agentName}>Ed Smith</h1>
          <p className={styles.period}>April 14, 2026 · 26:08 · The Proxy Decision-Maker</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(58), fontWeight: 700 }}>58 / 100</span>
            {' · '}NOT ENROLLED — UNCLOSEABLE
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(58) }}>58</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>26:08</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>Apr 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '0.95rem' }}>CORRECT NO-SALE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Proxy refused enrollment</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1 · RC2</span>
            <span className={styles.scoreLabel}>Root Causes</span>
            <span className={styles.scoreRange}>Surrendered final close</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Ed Smith called in response to a TV ad about a $1,200 grocery card. Within the first minute she disclosed she and her husband have Medicare with a supplement — ineligible for the card — but then mentioned her 92-year-old mother-in-law Zetia Foor has Medicare Advantage with Medicaid. You pivoted immediately and spent the next 20 minutes building a legitimate case for the mother-in-law's D-SNP enrollment.</p>
            <p>The pivot was well-executed. You verified Medicaid eligibility in real time (QI level confirmed at 7:26), confirmed two doctors in network, collected six medications with full dosages, and built a partial but real value proposition: annual drug costs dropping from $485, specialist copay from $40 to $30, $1,000 deductible eliminated, plus dental, vision, OTC, and a potential food card.</p>
            <p>At 21:43, Ed made a protective, emotional refusal: "I don't wanna mess with her insurance. She's 92 years old, she has what she has, and I'm not gonna change it." You said "Sorry" and the call ended. No recovery attempt. This was uncloseable by the end — but there were two moments earlier where the call was still yours to win, and both slipped.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>The household lead pivot at 1:22 is a high-level prospecting skill. When Ed revealed she had a supplement, you did not thank her and hang up — you immediately asked about other household members. Most agents end the call right there. You found the lead inside the call.</p>
            <p>Real-time Medicaid eligibility verification at 7:26 — you checked the system mid-call, confirmed QI level and LIS, and correctly identified the D-SNP upgrade pathway before presenting plan options. That is expert-level call execution.</p>
            <p>You collected two doctors with full office addresses and six medications with dosages and frequencies while maintaining rapport through a poor phone connection and an elderly proxy caller. That level of thoroughness under difficult conditions shows discipline.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>At 21:43 when Ed said she won't change her mother-in-law's insurance: "Ed, she's 92 — and at 92, the last thing you want is a surprise bill. Right now she's paying $485 a year in drug costs and a $1,000 deductible she shouldn't carry. I'm not disrupting anything — her doctors stay, her pharmacy stays. I'm removing a burden you've been managing for years. Let me do that for her today."</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>At 7:56, Ed said: "She's been in the exact same plan since 2022, so she lost a lot of benefits throughout the years." That sentence was the emotional core of this call — three years of dental, OTC, and food card benefits that nobody called to activate. You responded with "That's okay, that's okay" and immediately asked for the medication list. You let it go.</p>
            <p>Had you stopped at that moment and said: "Ed, what you just said matters. She's been eligible for these benefits for three years and nobody called you. Anthem didn't call. I'm the call that should have happened in 2022. Let me fix this today" — you would have flipped Ed's protective instinct from "change is risky" to "not changing is the risk." The final refusal at 21:43 was an emotional fear statement. It needed an emotional answer, not a logical one. You had one line available: "At 92, protecting her means removing the bills she shouldn't have to pay." It was not used.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Score Breakdown</h2>
          <div className={styles.callTable}>
            <div className={styles.callTableHeader}>
              <span>Category</span><span>Score</span><span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 12, max: 20 },
              { cat: 'Signal Reading', score: 10, max: 20 },
              { cat: 'Math Breakdown', score: 10, max: 20 },
              { cat: 'Objection Handling', score: 9, max: 15 },
              { cat: 'Call Outcome Quality', score: 7, max: 10 },
              { cat: 'Compliance', score: 10, max: 15 },
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
          <p>The Certainty System · Jean Pierre Riviere · Ed Smith · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC2 · RC6 · INT SEP · CSN SEP (missed)</p>
        </div>
      </div>
    </PageShell>
  )
}
