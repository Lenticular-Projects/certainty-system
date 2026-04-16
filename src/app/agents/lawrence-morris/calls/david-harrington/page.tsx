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

export default function DavidHarringtonCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>

        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <Link href="/agents/lawrence-morris" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              ← Lawrence Morris
            </Link>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Call Report</span>
          </div>
          <h1 className={styles.agentName}>David Harrington</h1>
          <p className={styles.period}>April 14, 2026 · 21:58 · The Money Caller / The Mover</p>
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
            <span className={styles.scoreValue} style={{ fontSize: '1.4rem' }}>21:58</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '0.85rem' }}>INCOMPLETE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Callback scheduled 1:30 next day</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1 / RC6</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Medication barrier not solved in-call</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>David Harrington is a 55-year-old Medicare beneficiary with cerebral palsy who moved from Orangeburg to Spartanburg, South Carolina last week. He called in attracted by food card marketing. He was cooperative, financially motivated, and confirmed yes to virtually every qualifying question within the first two minutes. You ran organized discovery — Medicaid status, chronic conditions, dental, vision, hearing, transportation — and correctly identified that the move creates a MOV special enrollment period.</p>
            <p>You found a Devoted Choice PPO in Spartanburg offering $185/month giveback, up from his current Humana $130 — a $55/month increase, roughly $660/year more in his Social Security check. At 15:40 David said: &quot;Oh, so I&apos;ll get that $185 a month?&quot; That is the enrollment moment. You confirmed it and kept explaining mechanics for two more minutes.</p>
            <p>At 18:06 you moved toward enrollment and asked for his medication list. David said he&apos;d need to call back with those. You accepted it. You scheduled a callback for 1:30 the following day. No enrollment. No compliance disclosures. Call ended at 21:58 with David warm and committed to talking tomorrow — but not enrolled today.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>Your discovery architecture was solid. You covered decision-maker status, nursing home residency, medications, chronic conditions, dental, vision, hearing, and transportation before plan presentation. That sequence builds a complete consumer profile and it showed — you knew David relied on family for transportation before you ever presented the plan, which gave you a humanization hook you could have deployed at the close.</p>
            <p>Your TPMO delivery at 1:46 was clean and complete. And your move-as-opportunity framing at 14:39 was the right instinct — when David resisted switching carriers, you pivoted to the move as the natural reason to explore new plans. &quot;Since you&apos;ve moved, this gives you an opportunity to start with a new doctor&quot; is the correct reframe. The move is the story. You saw it.</p>
            <p>You also correctly annualized the giveback math at 15:01 — landing on approximately $2,200-$2,300 for the year. That is Step 2 completed. Most agents stop at the monthly number.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When David says he can&apos;t get his medications right now, the line is: &quot;No problem — can you grab one bottle from your medicine cabinet right now? I&apos;ll hold. Even if you just get two or three of them, I can usually make it work. You don&apos;t want to lose your move window.&quot;</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>At 15:40 David said &quot;Oh, so I&apos;ll get that $185 a month?&quot; with obvious excitement. That is your enrollment moment. The correct response: &quot;Exactly — let me get you set up right now.&quot; Instead you spent two more minutes explaining how the giveback works. The momentum was there and you talked past it.</p>
            <p>When you finally moved to enrollment at 18:06, the medication question became a hard stop. It did not have to be. David is on a PPO plan. On most PPO plans, medications can be confirmed or updated post-enrollment. The script that keeps this call alive: &quot;No problem — let me try something. Can you grab one bottle right now? I&apos;ll hold. Even if you just give me two or three names I can usually work with that. You have a 60-day window from your move and we want to use it today.&quot; Creating urgency around the MOV window while asking for just one bottle — not the whole list — gives David a path forward that doesn&apos;t feel like a homework assignment.</p>
            <p>One more thing to add to tomorrow&apos;s callback: at 5:05 David disclosed cerebral palsy. That is a qualifying chronic condition for a C-SNP — year-round enrollment, no expiration. Run a C-SNP check for ZIP 29307 before you call him at 1:30. If a C-SNP exists with better care coordination, that may be the stronger plan for his situation regardless of the giveback amount.</p>
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
              { cat: 'Lead Quality', score: 13, max: 20 },
              { cat: 'Signal Reading', score: 10, max: 20 },
              { cat: 'Math Breakdown', score: 11, max: 20 },
              { cat: 'Objection Handling', score: 9, max: 15 },
              { cat: 'Call Outcome Quality', score: 5, max: 10 },
              { cat: 'Compliance', score: 0, max: 15 },
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
          <p>The Certainty System · Lawrence Morris · David Harrington · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 — Medication barrier surrendered twice · RC6 — CSN (cerebral palsy) not followed up, MOV SEP window not named · MOV + CSN SEP open</p>
        </div>

      </div>
    </PageShell>
  )
}
