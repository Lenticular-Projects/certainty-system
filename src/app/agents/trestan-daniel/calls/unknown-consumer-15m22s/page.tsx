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

export default function UnknownConsumer15m22sCallPage() {
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
          <h1 className={styles.agentName}>Unknown Consumer</h1>
          <p className={styles.period}>April 14, 2026 · 15:22 · The Money Caller</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(35), fontWeight: 700 }}>35 / 100</span>
            {' · '}MISSED OPPORTUNITY
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(35) }}>35</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ fontSize: '1.4rem' }}>15:22</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '0.85rem' }}>MISSED OPP</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Warsaw, Ohio</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1 / RC6</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>INT SEP never deployed</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>You had everything you needed to close this enrollment. The consumer is a dual-eligible QMB beneficiary in Coshocton County, Ohio with COPD — qualifying him for the INT SEP any month of the year. His OTC/food card dropped from $290/month to $116/month year-over-year, and he called in specifically chasing a bigger card. You found a C-SNP plan offering $267/month OTC in under seven minutes. You confirmed eligibility, identified his primary care doctor, and had the consumer re-engaged after a near-exit at 11:42. You were in the closing window.</p>
            <p>At 14:09 he said: &quot;I won&apos;t get it. I have to change my plan. I&apos;ve already changed my plan once this year.&quot; Your response was: &quot;Right. So that&apos;s why I was telling you...&quot; followed by restating the benefit. Then: &quot;Totally up to you.&quot; At 14:46 he said &quot;Let me think about it. I&apos;ll call back.&quot; You said: &quot;Okay. No problem.&quot;</p>
            <p>The consumer&apos;s final objection was based on a false belief. As a QMB/Medicaid beneficiary, he has the INT SEP and can change his plan every month of the year. The one-time annual limit does not apply to dual-eligible members. You had the knowledge to correct this. You did not say it.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>You found the right plan in under seven minutes. QMB status confirmed, COPD identified, C-SNP eligibility verified, $267 OTC plan pulled — that is fast and accurate eligibility work. Most agents would have been looking for another three to four minutes in this consumer&apos;s situation.</p>
            <p>Your mid-call objection recovery at 11:47 was the best moment on the call. When the consumer said &quot;I can almost tell right now that I&apos;m not going to get anything,&quot; you pushed back directly: &quot;It&apos;s not about you getting anything — you&apos;re already approved for the 267. I&apos;m seeing if your doctors are in network.&quot; That reframe re-engaged a consumer who was walking toward the exit. And when he tried to say goodbye at 14:03 with &quot;Thanks a lot, buddy. Have a good day,&quot; you caught it: &quot;Oh, you don&apos;t want me to start getting you the food card?&quot; That is presence and closing awareness — the instinct was right. The follow-through was the problem.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a dual-eligible member says &quot;I already changed my plan once this year,&quot; your line is: &quot;Actually, because you have Medicaid, you&apos;re allowed to change your plan any month of the year — that once-a-year rule doesn&apos;t apply to dual-eligible members like you. That&apos;s one of the benefits of having Medicaid. So that&apos;s not a barrier at all. Let&apos;s get this locked in today.&quot;</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>At 14:09 the consumer said he had already changed his plan once this year and believed he couldn&apos;t change again. That belief is factually wrong. You knew it was wrong. You said &quot;Okay. No problem.&quot;</p>
            <p>Here is what the INT SEP means in practice: a QMB/Medicaid beneficiary can change Medicare Advantage plans every single month of the year. The rule this consumer was referencing — the one-per-year limit — applies to non-dual-eligible members. It does not apply to him. One sentence corrects his entire objection. You had other closing tools available too: he disclosed at 8:33 that he just had a stroke, and at 12:33 that his medications are costing him more because his Extra Help level dropped. Those two facts combined with the $267 plan were a complete close: &quot;You&apos;ve been hit from two directions — your food card got cut and your medications are costing you more. This plan fixes both. Your doctor is confirmed in network. And because you have Medicaid, you can switch any month — that annual limit doesn&apos;t apply to you. Let&apos;s get this done right now.&quot;</p>
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
              { cat: 'Lead Quality', score: 10, max: 20 },
              { cat: 'Signal Reading', score: 7, max: 20 },
              { cat: 'Math Breakdown', score: 5, max: 20 },
              { cat: 'Objection Handling', score: 2, max: 15 },
              { cat: 'Call Outcome Quality', score: 3, max: 10 },
              { cat: 'Compliance', score: 8, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>35 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Trestan Daniel · Unknown Consumer (15:22) · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 — Permission-seeking language · RC6 — INT SEP never deployed on dual-eligible · CSN + INT SEP open, window year-round</p>
        </div>

      </div>
    </PageShell>
  )
}
