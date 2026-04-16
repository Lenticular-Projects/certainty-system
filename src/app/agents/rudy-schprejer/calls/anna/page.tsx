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

export default function AnnaCallPage() {
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
          <h1 className={styles.agentName}>Anna</h1>
          <p className={styles.period}>April 14, 2026 · 5:33 · Inbound Lead</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(52), fontWeight: 700 }}>52 / 100</span>
            {' · '}INCOMPLETE
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(52) }}>52</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>5:33</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '1.1rem' }}>INCOMPLETE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Call ended mid-hold</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Call Stalled on Missing Card</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Anna called in about "the Medicare special" — an inbound lead responding to a specific promotion, which is exactly the kind of hook you want. You opened cleanly at 0:00 with your name, the recorded-line notice, and the SOA question in one smooth sequence. You collected her zip code (34428) at 0:50, confirmed it after a mishear at 1:01, and delivered the TPMO disclaimer correctly at 1:15.</p>
            <p>The call ran into trouble at 3:23 when you asked for her Medicare card and she didn't have it handy. Anna moved rooms during the call, had audio issues twice (0:23, 2:48), and ultimately went to retrieve her card while you waited on hold. You gave her your direct callback number at 4:18 and spent the remaining time in passive hold. The transcript ends at 5:17 with the call still suspended — no plan presented, no needs discovered, no enrollment attempted. The outcome is INCOMPLETE: the call never really got started.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>Your opening was textbook. At 0:00 you delivered your name, company, recorded-line notice, and the SOA question without fumbling — a clean, professional first impression. When Anna had trouble hearing you at 0:23, you stayed patient and waited for her to reposition rather than talking over the problem.</p>
            <p>At 1:01 you misheard her zip as "64228" and Anna corrected you — and you handled that gracefully, confirmed the right zip, and moved on without missing a beat. Decision-maker qualification at 2:26 was correctly placed and correctly asked. When she needed to move rooms at 2:42, you said "Take your time, please" — exactly the right tone under frustrating conditions.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a consumer can't find her Medicare card, keep the call alive: "No problem, Anna — let me ask a couple things while you look. What's your date of birth?"</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>At 3:23 you asked for the red, white, and blue Medicare card. Anna said she didn't have it handy. You responded: "Yeah. We need to get the Medicare number that's in the red, white, and blue card so I can pull up all your information." Then you waited passively while she went to find it.</p>
            <p>That one statement made the Medicare card a hard requirement — and turned a live call into a hold. The Medicare Beneficiary Identifier is useful, but it is not the only path to discovery. The moment she said she didn't have it, the correct move was: "No problem at all — grab it when you can. While you're looking, let me ask: what's your date of birth? And are you currently on a Medicare Advantage plan or original Medicare with a supplement?" You had a cooperative, motivated consumer on the line. Date of birth, current plan carrier, medications, and doctors — none of those require the Medicare card. You could have completed discovery without it and retrieved the MBI at the end. Instead the call paused entirely and never recovered.</p>
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
              { cat: 'Signal Reading', score: 6, max: 20 },
              { cat: 'Math Breakdown', score: 2, max: 20 },
              { cat: 'Objection Handling', score: 8, max: 15 },
              { cat: 'Call Outcome Quality', score: 5, max: 10 },
              { cat: 'Compliance', score: 12, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>52 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Rudy Schprejer · Anna · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 — Call Stall on Missing Medicare Card</p>
        </div>
      </div>
    </PageShell>
  )
}
