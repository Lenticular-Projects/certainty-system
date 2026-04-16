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

export default function KathyStokelyCallPage() {
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
          <h1 className={styles.agentName}>Kathy Stokely</h1>
          <p className={styles.period}>April 14, 2026 · 16:04 · Inbound — The Burned Prospect</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(38), fontWeight: 700 }}>38 / 100</span>
            {' · '}INCOMPLETE
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(38) }}>38</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>16:04</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '0.95rem' }}>INCOMPLETE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Call disconnected at 15:46</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC2</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Client Gold Ignored</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Kathy Stokely is a 75-year-old in Wilmington, NC who has switched plans three times in 2026 — January, February, and April. She called looking for a food card or give-back benefit. She is an experienced Medicare consumer who knows exactly what she wants and what she's already tried. You opened professionally, ran a thorough discovery sequence, confirmed both doctors in-network, and presented Devoted Health with a $180/month give-back at 12:14.</p>
            <p>Kathy immediately rejected Devoted: "I had them for one month and I got rid of them." You correctly asked why, and she told you: "No dental, no vision. $250 for dental but you had to pay it out of pocket and then file for it." You responded by pivoting to hearing aid benefits — she immediately shut that down ("I don't need hearing aids"). You said "I'm just talking out loud, I'm just doing the comparison" and finally arrived at the right point — Devoted's $2,500 dental allowance — at 15:23, mid-sentence, when the call disconnected.</p>
            <p>There is no evidence of a callback attempt after the disconnection.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>Your discovery execution was thorough. You ran every required element: callback number (1:52), decision-maker status (2:03), nursing home check (2:15), medication review, Medicare card, MBI, DOB verification, address confirmation, and Medicaid status check. Even with Kathy's skepticism, you stayed systematic and professional throughout Phase II.</p>
            <p>When you finally presented Devoted at 12:14, you led with the right hook: "$180 back in your Social Security check every month — that's almost $2,200 a year." That's the correct framing: benefit-led, anchored to Social Security, and annualized. That was your best sales moment of the call. You also asked "What was it that you saw that it doesn't cover?" at 14:00 — a good objection discovery move that gave you a clear reframe target. The problem was what you did with that target.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When Kathy said "the only thing good about it was the $180 give back," that was the blueprint: "So you want the $180 AND real dental — the 2026 Devoted plan has a $2,500 comprehensive dental allowance, not the $250 reimbursement game you dealt with in February. That's what changed. Do you want to take another look?"</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>13:25 — Kathy said: "The only thing good about it was the $180 give back." That is the most important statement on this call. She is not saying she doesn't want Devoted. She is telling you exactly what would close her: the give-back plus real dental and vision. That's not a rejection — it's a specification.</p>
            <p>The correct response was to mirror it back immediately: "Kathy, what I'm hearing is that you want the $180 in your Social Security check AND a plan that actually covers your dental and vision — not the reimbursement game you dealt with before. Am I right? Because that's exactly what I want to show you." Instead, you pivoted to hearing aids — which had nothing to do with her objection — said "I'm just talking out loud," and arrived at the right answer two minutes too late, mid-sentence, when the call dropped. The $2,500 dental allowance at 15:23 was the correct reframe. You just needed to get there in 30 seconds, not two minutes.</p>
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
              { cat: 'Signal Reading', score: 5, max: 20 },
              { cat: 'Math Breakdown', score: 2, max: 20 },
              { cat: 'Objection Handling', score: 7, max: 15 },
              { cat: 'Call Outcome Quality', score: 5, max: 10 },
              { cat: 'Compliance', score: 10, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>38 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Rudy Schprejer · Kathy Stokely · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC2 — Client Gold Ignored · RC1 — Authority Erosion (Doctor Search) · RC1 — Off-Target Reframe</p>
        </div>
      </div>
    </PageShell>
  )
}
