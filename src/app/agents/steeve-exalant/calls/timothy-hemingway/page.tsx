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

export default function TimothyHemingwayCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>

        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <Link href="/agents/steeve-exalant" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              ← Steeve Exalant
            </Link>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Call Report</span>
          </div>
          <h1 className={styles.agentName}>Timothy Hemingway</h1>
          <p className={styles.period}>April 14, 2026 · 45:08 · The Money Caller / The Medically Complex</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(72), fontWeight: 700 }}>72 / 100</span>
            {' · '}CORRECT NO-SALE
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(72) }}>72</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ fontSize: '1.4rem' }}>45:08</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)', fontSize: '0.85rem' }}>CORRECT NO-SALE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Consumer protected</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--ink-60)', fontSize: '1rem' }}>RC1 / RC4</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>No close on month-to-month</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Timothy Hemingway called in about the $1,200 food card he saw on TV. From the first minutes of discovery you identified that he is a wheelchair-bound man with spastic cerebral palsy who depends on a specialist — Dr. Howard Bromley, a pain management physician — who accepts no Medicare Advantage plan in the area. Timothy and his wife are living on roughly $2,400 a month combined, with nothing in the refrigerator and two years of unpaid electric bills.</p>
            <p>At 8:28 you made the right call: you told Timothy directly that you would not recommend enrolling him in a Medicare Advantage plan unless he was willing to leave his doctors. He said he wasn&apos;t willing — cerebral palsy specialists at his age are nearly impossible to find — and you honored that. Over the next 35 minutes you verified six doctors across multiple networks, confirmed that Bromley was listed in-network on paper but refused MA patients in practice, and introduced a month-to-month switching strategy using his CSN and INT special enrollment codes.</p>
            <p>The call ended with Timothy appreciative and willing to contact Social Security. You gave him your direct line. He committed to calling back. The food card and utility benefits were described but never converted into an enrollment ask — the one thing left undone on an otherwise exceptional call.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>You made the correct no-sale call within eight minutes and held it for 37 minutes after that. At 8:28 you told Timothy &quot;to be frank with you, I wouldn&apos;t even recommend getting this&quot; — and you meant it. That is the single hardest thing to do in Medicare sales and you did it without hesitation. Most agents pitch through a situation like this.</p>
            <p>Your doctor verification at 16:15 was extraordinary. You checked all six of Timothy&apos;s physicians across multiple networks for nearly 20 minutes. When Bromley showed as in-network on paper, you dug further and confirmed the practice refuses MA patients — a discrepancy that would have caused a catastrophic enrollment if you had stopped at the system lookup. That due diligence prevented real harm.</p>
            <p>At 35:09 you introduced the month-to-month switching strategy — enroll in WellPoint for the $175 flex card, use it for food and utilities, then switch back before seeing Bromley. That&apos;s a creative, legal, consumer-serving solution that kept value in the relationship even without a permanent enrollment. And at 40:15 you gave Timothy your direct line, which is the move that keeps him coming back to you instead of calling a competitor.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When you introduce the month-to-month strategy, the next sentence has to be an ask: &quot;Timothy, your fridge is empty and you&apos;re two years behind on electric. I can get $175 loaded on a prepaid card within a week — food, utilities, whatever you need. You see Bromley May 1st. You call me April 28th if you want to switch back. Want me to do that right now?&quot;</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>At 35:09 you described the month-to-month WellPoint strategy in full — enroll, get the $175 card loaded, fill the fridge, pay the electric bill, switch back before Bromley. The plan was complete. Timothy understood it. But you described it as an option rather than making a direct offer.</p>
            <p>Timothy had told you at 9:29 that there was nothing in the refrigerator. He told you at 12:11 he was two years behind on his electric bill. Those were the two anchors for this entire call. When you introduce a solution that directly addresses both problems at once, that solution deserves a direct ask. The line that changes this outcome: &quot;Do you want me to do that right now?&quot; Four words. That is what was missing at 35:09.</p>
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
              { cat: 'Lead Quality', score: 15, max: 20 },
              { cat: 'Signal Reading', score: 17, max: 20 },
              { cat: 'Math Breakdown', score: 12, max: 20 },
              { cat: 'Objection Handling', score: 13, max: 15 },
              { cat: 'Call Outcome Quality', score: 10, max: 10 },
              { cat: 'Compliance', score: 5, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>72 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Steeve Exalant · Timothy Hemingway · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 — No close on month-to-month strategy · RC4 — SOA not offered · CSN + INT SEP identified</p>
        </div>

      </div>
    </PageShell>
  )
}
