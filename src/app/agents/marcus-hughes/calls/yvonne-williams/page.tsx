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

export default function YvonneWilliamsCallPage() {
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
          <h1 className={styles.agentName}>Yvonne Williams</h1>
          <p className={styles.period}>April 15, 2026 · 12:21 · The Money Caller / Long-Term Loyalist</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(28), fontWeight: 700 }}>28 / 100</span>
            {' · '}MISSED OPPORTUNITY
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(28) }}>28</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>12:21</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>Apr 15, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>MISSED OPP</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Accepted soft exit</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1, RC2, RC3, RC6</span>
            <span className={styles.scoreLabel}>Root Causes</span>
            <span className={styles.scoreRange}>Close · Gold · Math · SEP</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Yvonne A. Williams, 88, called in from Atlanta after seeing a TV ad for a grocery card benefit. She was on Kaiser — had been for over 20 years — and paying $67/month. She called because she wanted the food card she saw advertised. That was her entire stated reason for calling, and she said it in the first five seconds. Her daughter was on the line as well, helping interpret when needed.</p>
            <p>You collected her identity, delivered the TPMO disclaimer, asked the SOA and nursing home questions correctly, obtained Medicare lookup consent, and confirmed no Medicaid. You also correctly asked about chronic conditions at 7:03 — Yvonne disclosed high blood pressure, gout, and arthritis. You found Dr. Jason Gritti as her primary physician, then determined he was Kaiser-only and therefore not in any outside network.</p>
            <p>At 10:09-10:12, the daughter concluded "she don't qualify" and you clarified correctly: "Well, no, she qualifies, but she's going to have to get off that Kaiser plan." That was the right framing. Kaiser has zero OTC benefits and a closed network — you stated this at 10:43. At 10:46 Yvonne said "That's okay. Thank you. Have a good day." You immediately responded "All right, no worries. Have a great day as well." The call ended at 10:49. No reframe was attempted. No door was left open.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>The compliance backbone on this call was solid. TPMO disclaimer delivered at 2:18 with all required elements, nursing home question at 2:31, SOA question at 2:43, Medicare consent at 5:07 before any data lookup. With a daughter on the line, you also correctly identified the decision-maker situation at 3:11 — you asked who makes healthcare decisions and confirmed directly with Yvonne before proceeding. That nuance matters when a third party is present and could create confusion about authority.</p>
            <p>You also proactively asked about chronic conditions at 7:03, which is the right instinct. High blood pressure and gout are both Chronic Condition SNP qualifiers — you surfaced them, and that was the right move. The CSN pathway wasn't explored before the Kaiser barrier, which is the coaching point, but the instinct to screen for chronic conditions was correct and should be consistent.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>
            When Yvonne said "That's okay. Thank you." — one bridge sentence: "Before you go, Yvonne — you called because you wanted that food card. Kaiser isn't going to give it to you after 20 years. Give me 60 more seconds and I'll show you exactly what it would take to get it."
          </p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>10:46. "That's okay. Thank you. Have a good day." That is a soft exit — it is not a firm decision. Yvonne was an 88-year-old woman who had just received some disappointing news (she'd need to leave Kaiser to get the card she called about), and she said goodbye as a reflex. You had one sentence of bridge available before she hung up. You didn't use it.</p>
            <p>The math was sitting unused the entire call. You uncovered at 6:09 that she pays $67/month for Kaiser — $804/year. Kaiser gives her zero OTC benefits. The plan you would have shown her costs $0/month and comes with a food card. That is the most direct closing argument available: "Yvonne, you're paying $804 a year to Kaiser and getting nothing back in benefits. The plan I'm looking at is $0 a month and it comes with that food card you called about. Can I show you what that looks like?" You never said it.</p>
            <p>There was also a CSN pathway worth exploring. Yvonne disclosed high blood pressure and gout at 7:15 — both qualify for Chronic Condition SNP plans that are available year-round. Before concluding the Kaiser network was a dead end, you could have checked whether a C-SNP in ZIP 30310 might have offered her the OTC benefits she wanted. That exploration never happened.</p>
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
              { cat: 'Lead Quality', score: 5, max: 20 },
              { cat: 'Signal Reading', score: 4, max: 20 },
              { cat: 'Math Breakdown', score: 2, max: 20 },
              { cat: 'Objection Handling', score: 3, max: 15 },
              { cat: 'Call Outcome Quality', score: 4, max: 10 },
              { cat: 'Compliance', score: 10, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>28 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Marcus Hughes · Yvonne Williams · April 15, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 (Accepted Soft Exit) · RC2 (Food Card Anchor Never Deployed) · RC3 (Premium Math Unused) · RC6 (CSN Not Explored)</p>
        </div>

      </div>
    </PageShell>
  )
}
