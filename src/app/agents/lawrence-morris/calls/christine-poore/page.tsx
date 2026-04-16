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

export default function ChristinePeoreCallPage() {
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
          <h1 className={styles.agentName}>Christine Poore</h1>
          <p className={styles.period}>April 14, 2026 · 16:34 · The Money Caller</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(65), fontWeight: 700 }}>65 / 100</span>
            {' · '}CORRECT NO-SALE
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(65) }}>65</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ fontSize: '1.4rem' }}>16:34</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)', fontSize: '0.85rem' }}>CORRECT NO-SALE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Oklahoma City, OK</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1 / RC3</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>No follow-up commitment</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Christine Poore called in specifically asking for a food card. She is a 74-year-old woman on a fixed income in Oklahoma City, currently on a Humana Choice PPO Give Back plan that started April 1 — meaning she is already receiving a $100/month give-back credit applied directly to her Social Security check. She did not know that. She called because she wanted more.</p>
            <p>You identified her current plan, confirmed the $100 give-back timeline, proactively asked about chronic conditions (uncovering asthma and hypertension), and found a competing plan that would give her $294/month — food, utilities, and rent eligible. Before presenting it, you stopped and asked for her primary care doctor&apos;s name. Smart move. Dr. Doug — her physician of 18 years — is not in that network. Christine said flatly: &quot;I don&apos;t want to change my doctor sweetheart.&quot; You accepted that without pushback and did not attempt the enrollment. Correct no-sale. The call ended with Christine thanking you and understanding what she has.</p>
            <p>The only thing missing: you let her go without scheduling a specific callback for October. Christine wants the $294 plan. She qualifies for it. The only thing blocking it is a network that could change by AEP. You had the close for October sitting right there and left it unclaimed.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>Your most important move on this call came at 9:06 — before you had presented any alternative plan, you stopped and asked for the name of Christine&apos;s primary care doctor. Most agents present the plan first and ask about doctors if the consumer pushes back. You verified network compatibility before presenting the switch. That is the correct sequence and it prevented a harmful enrollment. Christine told you she has been with Dr. Doug for 18 years. If you had enrolled her without checking, you would have pulled her from an 18-year physician relationship. You didn&apos;t.</p>
            <p>Your TPMO compliance at 0:47 was natural and complete — four organizations, 32 products, Medicare.gov, 1-800-MEDICARE, SHIP. And your education on the give-back timeline at 8:04 was genuinely valuable: you told Christine that the $100 may take one to two months to appear on her Social Security check and that any delay results in back-pay. That prevents a confused phone call from Christine in May wondering where her money went.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>Before you hang up: &quot;Christine, the $294 plan is out there and you qualify for it. The only thing we need is for Dr. Doug to be in that network. Let me mark October 15th in my calendar to call you — if he&apos;s in by then, we switch you that day and you go from $100 a month to $294. That&apos;s $2,300 more a year toward groceries and your bills. I&apos;ll call you in October. Does that work for you?&quot;</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>At 16:06 you said: &quot;Other than that, yeah, like I said, I would love to get you this other one, but I don&apos;t want — I&apos;m not trying to have you, you know, move you from a different doctor.&quot; Christine said &quot;Thank you, honey&quot; and the call ended. No October callback date. No specific re-engagement plan. No contact information given to Christine. The $294 plan just evaporated from the conversation.</p>
            <p>Here is what you had in hand at that moment: a motivated consumer who wants more money, a plan that would give her $194 more per month ($2,328/year), and a clear, simple reason it cannot happen today — network. That is not a dead end. That is a future appointment. The correct close on a correct no-sale is always a scheduled re-engagement: &quot;I&apos;m going to mark October 15th in my system to give you a call. By then we&apos;ll know if that $294 plan is in Dr. Doug&apos;s network and we can get you switched.&quot; Without that date, Christine will likely be called by another agent in October who will take the enrollment you found.</p>
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
              { cat: 'Lead Quality', score: 14, max: 20 },
              { cat: 'Signal Reading', score: 13, max: 20 },
              { cat: 'Math Breakdown', score: 8, max: 20 },
              { cat: 'Objection Handling', score: 12, max: 15 },
              { cat: 'Call Outcome Quality', score: 8, max: 10 },
              { cat: 'Compliance', score: 10, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>65 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Lawrence Morris · Christine Poore · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 — No October callback commitment · RC3 — $2,328/year delta never annualized · RC6 — MOV SEP not explored</p>
        </div>

      </div>
    </PageShell>
  )
}
