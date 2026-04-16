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

export default function LilyWrayCallPage() {
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
          <h1 className={styles.agentName}>Lily Wray</h1>
          <p className={styles.period}>April 14, 2026 · 13:22 · Inbound — Brand Loyalist</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(61), fontWeight: 700 }}>61 / 100</span>
            {' · '}CORRECT NO-SALE
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(61) }}>61</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>13:22</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)', fontSize: '0.95rem' }}>CORRECT NO-SALE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Genuine brand loyalist</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC2/RC3</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Gold Ignored + Math Partial</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Lily Wray is an 80-year-old in Shelby, NC on UnitedHealthcare AARP Medicare Advantage with a single doctor she has seen for 20 years — Dr. Skerindra Sidhu. She called in looking for "extra benefits" but made her position clear at 5:38: "I heard about that, but I don't want to switch." She said it again at 10:19 and a third time at 12:28.</p>
            <p>You ran a complete discovery sequence, pulled her plan, confirmed both doctors (Dr. Sidhu and specialist), identified her as a 4-star plan member, and presented a Blue Cross Blue Shield option with $184/month give-back ($2,208/year annualized). At 12:49 you ran the decisive test: "Even if your doctor accepts Blue Cross Blue Shield — you still wouldn't change?" Lily answered: "Nope." You correctly recognized the call was over and released her gracefully: "That's all I can do for you. If you decide you want to change, give us a call back." The door was left open.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>The correct no-sale recognition and exit at 13:06 was the best decision on this call. When Lily gave a flat "Nope" to the doctor-coverage test, you stopped immediately. No begging, no guilt, no prolonged argument. "That's all I can do for you. If you decide you want to change, give us a call back." That's professional and it protects the relationship. Not every call can close — knowing when to stop is as important as knowing how to push.</p>
            <p>Your discovery protocol was clean and complete: callback consent (1:24), decision-maker confirmation (1:39), LTC check (1:41), Medicare card, MBI, Medicare history permission, DOB, address — all executed efficiently. The math annualization at 11:47 was also correct — you presented $184/month and immediately calculated it to $2,200/year without prompting. Steps 1 and 2 of the math framework were there.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When Lily revealed at 1:48 that she lives alone at 80, that was the emotional frame for the entire call — the correct response was: "Living alone means your plan has to work perfectly every time. That's exactly why I want to make sure nothing changed for 2026 that could affect your access to Dr. Sidhu."</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>1:48 — Lily said "I'm living at home and I live alone, yes." You said "Oh, you lucky girl. Good for you." and moved on. That was the entire call in one sentence. An 80-year-old living alone has one primary healthcare fear, and it's not financial — it's "what happens if something goes wrong and no one's here?" Her 20-year relationship with Dr. Sidhu is not loyalty for its own sake. It's her safety net. She trusts that relationship more than she trusts any benefit calculation.</p>
            <p>When you learn to hear that signal and reflect it back — "Lily, living alone means your plan has to work perfectly every time. That's exactly why I want to take two minutes to make sure your 2026 coverage still protects everything you depend on" — you stop selling and start protecting. Brand loyalists open the door for agents who frame the conversation as advocacy, not competition. The "Nope" at 13:01 was the outcome of the missed moment at 1:48. The closing test was the right move — it confirmed the call was genuinely unwinnable at that point.</p>
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
              { cat: 'Signal Reading', score: 11, max: 20 },
              { cat: 'Math Breakdown', score: 9, max: 20 },
              { cat: 'Objection Handling', score: 9, max: 15 },
              { cat: 'Call Outcome Quality', score: 8, max: 10 },
              { cat: 'Compliance', score: 12, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>61 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Rudy Schprejer · Lily Wray · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC2 — Lives-Alone Gold Ignored · RC3 — Math Humanization Missing</p>
        </div>
      </div>
    </PageShell>
  )
}
