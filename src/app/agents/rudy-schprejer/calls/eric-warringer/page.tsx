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

export default function EricWarringerCallPage() {
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
          <h1 className={styles.agentName}>Eric Warringer</h1>
          <p className={styles.period}>April 15, 2026 · 22:04 · Inbound — MOV / INT SEP</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(46), fontWeight: 700 }}>46 / 100</span>
            {' · '}MISSED OPPORTUNITY
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(46) }}>46</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>22:04</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 15, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '0.95rem' }}>MISSED OPPORTUNITY</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Callback surrender at 21:20</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Callback Surrender</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Eric Warringer is a 61-year-old disabled Army veteran on SSDI ($1,017/month) who just moved from Marion County to Lake County, FL — last week. He called about a grocery card ad on TV, already on UnitedHealthcare with a $349/month U-Card. You caught the MOV SEP at 2:51 when he casually mentioned "I just moved" — immediately asking about the prior zip code, the county change, and the timeline. Textbook detection.</p>
            <p>Your system confirmed Medicaid (INT SEP), you identified both eligible SEPs, and explained that his current plan no longer covered Lake County. You pivoted to a 5-star Devoted plan ($263/month Social Security give-back) after presenting a UHC comparison ($229/month — less than his current $349). Eric said at 9:21 "I'd like to be on a 5-star rated then." You had consent, a valid enrollment window, and his Medicare card on the end table.</p>
            <p>Three conversational detours — a shared knee story (5:03), a Stuttgart heritage tangent (7:06), and a full 90-second poem recital (16:00) — consumed over three minutes of call time and reset the energy from business to casual heading into the close. At 21:11 you said "the smart choice is Devoted, hands down" — a recommendation, not a close. Eric said "let me think about it, pray about it, and call you back tomorrow." You replied "Think, pray all you want, sir. The information is gonna remain the same" — and offered to text your number. No recovery. No urgency. No enrollment.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>The MOV SEP catch at 2:51 was excellent. When Eric mentioned he moved, you stopped immediately and ran the right qualifying questions — prior zip, county change, recency. That's the kind of signal detection that separates agents who work the system from agents who work leads. You used it to justify the enrollment conversation correctly.</p>
            <p>The 5-star vs 3.5-star framework at 9:11 was effective — the Miata vs. Corvette analogy made it tangible, and Eric immediately said he'd like to be on a 5-star. You built genuine personal rapport throughout: the shared knee story, the military recognition, the German heritage moment. Eric was calling you "brother" by mid-call. That level of trust is a real asset. The failure was not converting it into a close.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>Eric told you he wants the 5-star plan, his Medicare card was on the end table, and he's in an active MOV window — when he said "let me think about it," the close was: "Eric, you don't have a plan in Lake County right now. This takes five minutes. Your card is right there. Let's get you covered today."</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>21:20 — Eric said "Let me think about it, pray about it, and I will call you back tomorrow." Your response: "Think, pray all you want, sir. The information is gonna remain the same." That sentence was the opposite of urgency. You told a consumer with an open MOV window that there was no time pressure. That's a close-killer.</p>
            <p>The correct reframe was consequence-based: "Eric, I hear you — but here's the thing. You don't have a plan in this county right now. You moved last week, which means your window to switch is open. Once that window closes, you're waiting until October. Your Medicare card is right there on the end table. This takes five minutes. Let's get you covered today while we're both here — you can always call me with questions after." You had the trust. You had the stated preference. You had the urgency built in by the move itself. You just needed to use it.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Score Breakdown</h2>
          <div className={styles.callTable}>
            <div className={styles.callTableHeader}>
              <span>Category</span><span>Score</span><span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 11, max: 20 },
              { cat: 'Signal Reading', score: 9, max: 20 },
              { cat: 'Math Breakdown', score: 7, max: 20 },
              { cat: 'Objection Handling', score: 6, max: 15 },
              { cat: 'Call Outcome Quality', score: 4, max: 10 },
              { cat: 'Compliance', score: 9, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>46 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Rudy Schprejer · Eric Warringer · April 15, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 — Callback Surrender · RC2 — Loss Aversion Untapped · RC3 — Math Incomplete · SEPs: MOV + INT</p>
        </div>
      </div>
    </PageShell>
  )
}
