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

export default function MyraRobinsonCallPage() {
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
          <h1 className={styles.agentName}>Myra Robinson</h1>
          <p className={styles.period}>April 15, 2026 · 14:14 · The Reconnected Caller / Chronic Condition Qualifier</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(30), fontWeight: 700 }}>30 / 100</span>
            {' · '}MISSED OPPORTUNITY
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(30) }}>30</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>14:14</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>Apr 15, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>MISSED OPP</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Surrendered on soft objection</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1, RC2, RC3</span>
            <span className={styles.scoreLabel}>Root Causes</span>
            <span className={styles.scoreRange}>Close · Gold · Math</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Myra Robinson called in after being disconnected from another agent who had been reviewing her Clover Health plan and medications. She came in primed and cooperative — she already knew what she wanted to talk about, had been through some of the discovery with the previous agent, and was genuinely curious. You spent the first three minutes navigating the disconnection narrative, which cost momentum, but you recovered and moved into a solid qualification sequence.</p>
            <p>The key moment came at 7:57 when you asked about chronic conditions. Myra disclosed CKD stage 4, heart failure stage 4, and diabetes — three qualifying conditions for a Chronic Special Needs Plan. She also mentioned, almost as an aside at 8:20, that her doctor wants to start her on dialysis in the next two months. You acknowledged it clinically and moved on. At 12:06 you correctly identified the Aetna C-SNP at 4.5 stars and presented it — $2,000 dental, $150 vision, $60/month OTC flex card versus her current $80/quarter ($26/month). Her primary doctor confirmed in-network at $0. This was the right product for this consumer and you found it.</p>
            <p>At 13:36 you asked "Do you think that can help you, Ms. Myra?" — a question instead of a close. When Myra said "those ones don't look like they say it's going to happen," you immediately agreed with her hesitation and told her to stick with Clover. The call ended at 14:04. A consumer with three chronic conditions, imminent dialysis, and an objectively better plan sitting in front of her was sent away because of one ambiguous sentence.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>The chronic condition identification at 12:06 was the strongest moment in this call. After confirming CKD, heart failure, and diabetes, you correctly recognized that those three conditions together qualify for a C-SNP — and you found the right plan. Not just any plan, but a 4.5-star Aetna C-SNP with demonstrably better benefits on every line that mattered to Myra. That clinical signal reading is real, and it separated this call from one that would have ended at 8:52 when you confirmed no Medicaid.</p>
            <p>You also confirmed Myra's primary doctor was in-network before presenting the plan — the correct suitability sequence. And when you ran the OTC comparison at 13:26, you correctly did the monthly math: "$80 a quarter divided by three is about $30 a month; you're getting $60 a month." The foundation was there. The math just needed to be finished.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>
            When she hesitated: "Myra, with dialysis coming in two months, this is not the time to stay on a plan that's giving you $26 a month. The Aetna plan was built for exactly where you are right now. Let's get you set up today so your plan is ready when you need it most."
          </p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>13:46. Myra said "those ones don't look like they say it's going to happen." You responded: "Yeah, I mean I just wanted to let you know what was out there. It is something a little stronger, but you know, if you don't think it's going to help you out Myra, then it's probably better you just stick with what you have done." That sentence sent her back to Clover.</p>
            <p>That objection was not a no. "Those ones don't look like they say it's going to happen" is ambiguity — she doesn't know if she believes it. The move there is a curiosity question: "Myra, help me understand — what specifically doesn't feel right? Is it the Aetna name, the dental amount, the OTC card?" Then address the specific concern. Instead, you agreed with her uncertainty and made the decision for her. Never agree with hesitation — explore it.</p>
            <p>And there was a closing line you had available the entire call that you never used: dialysis in two months. That's the anchor. "Myra, with dialysis coming in two months, your plan needs to be ready for what's ahead. Your kidney doctor is in-network, your OTC doubles, your dental goes to $2,000. Let's get you set up today." That line is the close. It was available at 8:20. You never went back to it.</p>
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
              { cat: 'Signal Reading', score: 8, max: 20 },
              { cat: 'Math Breakdown', score: 5, max: 20 },
              { cat: 'Objection Handling', score: 3, max: 15 },
              { cat: 'Call Outcome Quality', score: 2, max: 10 },
              { cat: 'Compliance', score: 7, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>30 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Marcus Hughes · Myra Robinson · April 15, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 (Surrendered on Soft Objection) · RC2 (Dialysis Gold Ignored) · RC3 (Math Not Annualized or Humanized)</p>
        </div>

      </div>
    </PageShell>
  )
}
