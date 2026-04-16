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

export default function JillCallPage() {
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
          <h1 className={styles.agentName}>Jill</h1>
          <p className={styles.period}>April 14, 2026 · 3:17 · Inbound — Benefit Shopper</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(47), fontWeight: 700 }}>47 / 100</span>
            {' · '}INCOMPLETE
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(47) }}>47</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>3:17</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '0.95rem' }}>INCOMPLETE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>SSN ask ended the call</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC4</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Protocol Inversion</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Jill called in about the spending card — an inbound lead with a specific benefit in mind who had already taken action. At 1:19 she told you she was "happy with what I have right now for my insurance" and only wanted food card information. You handled that correctly: "We can't do any changes unless you want us to. Right now we're just having a conversation." That kept her on the line.</p>
            <p>You confirmed the callback number, verified decision-maker authority, checked nursing home status, and asked about medications — all correctly. At 2:14 you asked for her Medicare card. She didn't have it. At 2:23 you said "That is with your social security number. We need your social security number to pull up your information." Jill couldn't remember her SSN and said she'd call back from home in 15 minutes. You gave her your callback number and closed gracefully.</p>
            <p>The lead ended warm — Jill left with a callback commitment — but the SSN ask was a self-created dead end on an otherwise recoverable call.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>Your TPMO disclaimer delivery at 0:53 was complete and natural — three organizations, 41 products, Medicare.gov, 1-800-MEDICARE — all present without sounding scripted. You confirmed all required qualifying elements: callback number, decision-maker authority, and nursing home status, executed cleanly even with a consumer who was narrowly focused on one benefit.</p>
            <p>When Jill couldn't provide her SSN, you handled the exit well — you offered your number clearly and confirmed she would call back. The lead ended warmer than the call deserved given the protocol error. That's a real skill: keeping the relationship intact even when a call doesn't go as planned.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When the Medicare card is unavailable, the correct pivot is date of birth and zip code — not SSN. "No problem, Jill — I can start with your date of birth and zip code to pull up what's available in your area." That keeps the call alive.</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>At 2:18, Jill confirmed she didn't have her Medicare card. Your response: "That is with your social security number. We need your social security number to pull up your information." That's a protocol inversion — SSN is the fallback, not the primary lookup method. The correct order is MBI from the Medicare card first, then DOB + zip for a general review, then SSN only as a last resort with explicit consent context.</p>
            <p>When she confirmed she didn't have the card, the correct pivot was: "No problem at all — I can actually start looking up plan options for your zip code (32792) right now while I have you on the phone. That way when you call back you'll already know what to expect and we're not starting from scratch." Zip code alone is enough to show available plans and food card amounts. The SSN ask created a dead end that didn't need to exist.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Score Breakdown</h2>
          <div className={styles.callTable}>
            <div className={styles.callTableHeader}>
              <span>Category</span><span>Score</span><span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 10, max: 20 },
              { cat: 'Signal Reading', score: 5, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 8, max: 15 },
              { cat: 'Call Outcome Quality', score: 7, max: 10 },
              { cat: 'Compliance', score: 17, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>47 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Rudy Schprejer · Jill · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC4 — SSN Before MBI Protocol Inversion · RC2 — Food Card Hook Not Converted</p>
        </div>
      </div>
    </PageShell>
  )
}
