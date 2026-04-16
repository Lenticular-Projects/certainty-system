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

export default function WaynePhaissonCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>

        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <Link href="/agents/marcus-hughes" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              ← Marcus Hughes
            </Link>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Call Report</span>
          </div>
          <h1 className={styles.agentName}>Wayne Phaisson</h1>
          <p className={styles.period}>April 15, 2026 · 3:44 · The Money Caller</p>
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
            <span className={styles.scoreValue}>3:44</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>Apr 15, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>MISSED OPP</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Trust objection lost</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Trust objection surrendered</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Wayne Phaisson called in from Morrow, Ohio specifically asking about a grocery card benefit. He confirmed Medicare Parts A and B, no VA or TRICARE, no supplemental coverage, and confirmed he's the decision maker. He was cooperative, terse in the way of someone who just wants the point, and gave you everything you needed for a clean verification. You had his zip code (45152), his last name, and his date of birth by the 2:38 mark.</p>
            <p>At 2:42 you asked for his full Social Security number. Wayne immediately responded "I have to give you that?" — a trust signal, not a refusal. You offered his Medicare number as an alternative, which was reasonable — but Wayne disclosed he had lost his Medicare card. At 3:05 he said directly: "I'm not comfortable with giving you my social security number." You responded with "I understand Wayne. I mean you know you did call in today so I can help you" — a defensive justification that centered your effort rather than his concern. Wayne ended the call at 3:28.</p>
            <p>Wayne was a warm lead. He called in knowing what he wanted, met every eligibility criterion, and had no plan-level resistance. This was lost entirely at the trust objection. You had his name and DOB already collected — a name and DOB lookup should have been your immediate alternative when he said he was uncomfortable with the SSN.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>Your compliance sequence was correct and well-ordered. Recorded-line notice at 0:02, then Part A and B verification, then callback consent at 0:44, then decision-maker verification at 0:53, then the TPMO disclaimer at 1:03, then the nursing home screen at 1:13. All four required compliance elements were present and properly sequenced — that's the foundation every call needs.</p>
            <p>When Wayne clarified at 1:41 that he was already on Medicare and just wanted the food card benefits, you correctly narrowed the scope rather than plowing through a full MAPD pitch. That was a consumer-centered adjustment. And you proactively confirmed the callback number at 0:44 before Wayne could get disconnected — a small but smart lead-protection move.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>
            When he said "I'm not comfortable with my social security number" — respond: "Wayne, you're absolutely right to protect that — and you don't need to give it to me. I already have your name and date of birth, let me try looking you up that way right now."
          </p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>3:05. Wayne said "I'm not comfortable with giving you my social security number." That statement reveals a man who is afraid of being scammed — one of the most common fears among the Medicare-eligible population, and a completely legitimate one. The response you gave — "you know you did call in today so I can help you" — is agent-centric. It addresses your position, not his fear.</p>
            <p>The reframe this moment required was one sentence: "Wayne, you're absolutely right to protect that — and you don't need to give it to me. I already have your name and your date of birth. Let me try looking you up that way right now." That sentence validates his caution, offers an immediate alternative, and moves forward without drama. You had his name and DOB in your notes. The lookup pathway was already available to you. The only thing missing was deploying it before Wayne checked out. Practice this reframe until it's automatic — trust objections will come up on a significant percentage of your calls, and right now you have no play when they do.</p>
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
              { cat: 'Lead Quality', score: 7, max: 20 },
              { cat: 'Signal Reading', score: 3, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 4, max: 15 },
              { cat: 'Call Outcome Quality', score: 2, max: 10 },
              { cat: 'Compliance', score: 6, max: 15 },
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
          <p>The Certainty System · Marcus Hughes · Wayne Phaisson · April 15, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 (Trust Objection Surrendered · No Agent Name · No Recovery Offer)</p>
        </div>

      </div>
    </PageShell>
  )
}
