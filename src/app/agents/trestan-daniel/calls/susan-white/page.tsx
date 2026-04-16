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

export default function SusanWhiteCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>

        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <Link href="/agents/trestan-daniel" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              ← Trestan Daniel
            </Link>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Call Report</span>
          </div>
          <h1 className={styles.agentName}>Susan White</h1>
          <p className={styles.period}>April 14, 2026 · 12:24 · The Food Card Caller / Benefit Recovery</p>
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
            <span className={styles.scoreValue} style={{ fontSize: '1.4rem' }}>12:24</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '0.85rem' }}>INCOMPLETE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Left on hold — no enrollment</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1 / RC4</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Handoff at the close</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Susan White is a UnitedHealthcare AARP Medicare Advantage member in Lincoln, FL who has been repeatedly switched between a standard MAPD and a chronic C-SNP plan by outbound agents calling without her consent. The C-SNP — UHC Complete Care — is the plan that gives her the $55/month food card she has been calling about. Every time she gets enrolled on it, someone switches her off before it goes effective, and the benefit never loads. She was furious and confused.</p>
            <p>You read the account in real time, spotted the C-SNP history at 4:08, asked exactly the right questions about why she had been switched, and built a complete picture. You delivered the comparison clearly at 6:29: Complete Care gives $55/month versus $50/quarter on the standard AARP plan — an extra $460 per year. Susan validated, agreed, and at 9:03 said: &quot;Yes. I&apos;m ready.&quot;</p>
            <p>At 9:05 you said: &quot;So let me see if I have an agent who can put that in for you.&quot; You put Susan on hold. The recording continues for three minutes of hold audio. No enrollment was executed. The call ends at 12:24 with Susan left on hold.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>Identifying the C-SNP history from the account data at 4:08 is the move that made this entire call possible. You read the plan history, noticed the chronic plan flag, and proactively asked about qualifying conditions. That is not a standard agent behavior — most agents would have pitched the AARP plan and never asked the question that revealed Susan&apos;s actual situation. You asked. You found it.</p>
            <p>Your empathy handling of Susan&apos;s frustration at 7:44 was the call&apos;s second-best moment. When she expressed anger at having her plan switched without her consent, you validated it, gave her actionable advice (&quot;tell them no, don&apos;t touch my account&quot;), and pivoted directly to your recommendation. That&apos;s what turned her frustration into trust and led to &quot;Yes, I&apos;m ready.&quot; You earned that close.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When Susan says &quot;Yes, I&apos;m ready&quot; — the next words out of your mouth are: &quot;Perfect, Susan — let me get you enrolled on the Complete Care plan right now. I already have your Medicare number and your birthday — this will only take about three more minutes and you&apos;ll be set for May 1.&quot; That is your line. Practice it until it is automatic.</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>At 9:03 Susan said &quot;Yes. I&apos;m ready.&quot; Those four words are the close. They are the moment every agent is working toward from the first second. You earned them through 9 minutes of genuine discovery, empathetic reframing, and a clear benefit comparison.</p>
            <p>The correct response to &quot;Yes, I&apos;m ready&quot; is never a hold. It is never &quot;let me see if I have an agent.&quot; If you can identify the right plan, explain it clearly, and get a consumer to say yes — you can execute the enrollment. You had Susan&apos;s Medicare number (6FJ8MX7AR59) and her date of birth (October 30, 1957) already in hand. The enrollment form was the next step. Instead, she sat on hold for three minutes and the call ended without her enrolled. You did everything right and then stepped aside at the one moment where stepping aside is not an option.</p>
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
              { cat: 'Lead Quality', score: 9, max: 20 },
              { cat: 'Signal Reading', score: 13, max: 20 },
              { cat: 'Math Breakdown', score: 10, max: 20 },
              { cat: 'Objection Handling', score: 10, max: 15 },
              { cat: 'Call Outcome Quality', score: 3, max: 10 },
              { cat: 'Compliance', score: 2, max: 15 },
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
          <p>The Certainty System · Trestan Daniel · Susan White · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 — Handoff at the close · RC4 — TPMO sequence violation, SOA never asked · DIF + CSN SEP detected</p>
        </div>

      </div>
    </PageShell>
  )
}
