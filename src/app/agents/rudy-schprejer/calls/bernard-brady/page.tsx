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

export default function BernardBradyCallPage() {
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
          <h1 className={styles.agentName}>Bernard Brady</h1>
          <p className={styles.period}>April 15, 2026 · 17:17 · Inbound — The Money Caller</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(42), fontWeight: 700 }}>42 / 100</span>
            {' · '}MISSED OPPORTUNITY
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(42) }}>42</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>17:17</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 15, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '0.95rem' }}>MISSED OPPORTUNITY</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Surrendered at "That'd be nice"</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Surrendered on Warm Lead</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Bernie Brady called in at 0:12 asking about "the extra Social Security money" — he arrived with a declared financial motivation before you said a word. You opened cleanly with the recorded-line notice and TPMO disclaimer at 0:41, built genuine rapport with the Bernard/Vietnam veteran moment at 5:13, collected his Medicare number, confirmed DOB and address, and identified his Humana plan with a $170/month give-back.</p>
            <p>You ran a partial math comparison for a standard upgrade ($170 → $184.70/month) and then, at 11:57, Bernie mentioned a cardiologist — Dr. Linda Goldstone. You immediately asked "Why didn't they put you on a chronic plan?" — an excellent signal read. You pivoted to C-SNP options and presented a $240/month and a $490/month Give Back plan.</p>
            <p>At 15:22, Bernie said "That'd be nice, but I'm pretty well situated." You responded: "Then why are we talking, sir? If you're happy with what you have, good to go. I'll take some time and goodbye." Bernie said "Okay, take care, sir" and hung up. A consumer who called in asking for extra money, stayed on for 15 minutes, disclosed a cardiologist, and said "that'd be nice" about $490/month — walked out without a single reframe attempt.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>The cardiologist catch at 12:06 was the best moment of this call. When Bernie mentioned Dr. Linda Goldstone, you immediately asked "Why didn't they put you on a chronic plan?" — that's product knowledge. Most agents miss that signal entirely. You knew what C-SNP eligibility looks like and you acted on it without prompting.</p>
            <p>The Bernard/uncle Vietnam veteran moment at 5:13 was authentic and it landed. Bernie's tone shifted noticeably after that — he gave you "You get blue ribbon" and cooperated with every verification step. Real rapport on an inbound call is a skill, and you used it well in Phase I. Your TPMO compliance at 0:41 was clean and delivered early.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>"That'd be nice" is a buying signal, not a no — when Bernie said it, the close was: "Bernie, you called me today because you wanted more money. The $490 plan doesn't change your doctors or your coverage — it just makes your Social Security check bigger every month. Let's get you set up."</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>15:22 — Bernie said: "That'd be nice, but I'm pretty well situated with what I am, where I'm at, though."</p>
            <p>That is a soft comfort objection. "That'd be nice" is an open door — he confirmed desire for the benefit. "Pretty well situated" is not a hard no. The correct response was to stop, take a breath, and loop back to exactly why he called: "Bernie, you told me at the start of this call you were calling about extra money. I found it. $490 a month — that's $5,880 a year. Your doctors stay the same. Your coverage stays the same. Your Social Security check gets bigger. That's the call you made today, answered. Let's finish it."</p>
            <p>Instead you said "Then why are we talking, sir?" — a dismissive exit line that ended a live enrollment. That line cost you the close on a consumer who had already said he'd like the benefit. Comfort is not a no. It is always the last objection before yes.</p>
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
              { cat: 'Signal Reading', score: 8, max: 20 },
              { cat: 'Math Breakdown', score: 10, max: 20 },
              { cat: 'Objection Handling', score: 2, max: 15 },
              { cat: 'Call Outcome Quality', score: 2, max: 10 },
              { cat: 'Compliance', score: 10, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>42 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Rudy Schprejer · Bernard Brady · April 15, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 — Surrendered on Warm Lead · RC2 — Client Gold Ignored · RC3 — Math Incomplete</p>
        </div>
      </div>
    </PageShell>
  )
}
