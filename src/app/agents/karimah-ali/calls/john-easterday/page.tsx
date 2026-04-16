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

export default function JohnEasterdayCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Call Report</span>
            <span className={styles.dot}>·</span>
            <Link href="/agents/karimah-ali" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Karimah Ali
            </Link>
          </div>
          <h1 className={styles.agentName}>John Easterday</h1>
          <p className={styles.period}>April 14, 2026 · 11:46 · Pre-Medicare / IEP Caller</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(60), fontWeight: 700 }}>60 / 100</span>
            {' · '}CORRECT NO-SALE
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(60) }}>60</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>11:46</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '1rem' }}>CORRECT NO-SALE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>IEP opens May 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1 · RC2</span>
            <span className={styles.scoreLabel}>Root Causes</span>
            <span className={styles.scoreRange}>Hold mgmt · Signal miss</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>
              John Easterday, 62, called in asking about the food card (OTC benefit). He&apos;s in Chillicothe, Ohio,
              on disability with stage 4 prostate cancer and seven daily medications. You pulled up his Medicare record
              and found that his Part A and Part B don&apos;t start until August 1, 2026 — he&apos;s pre-Medicare and
              cannot be enrolled in any plan today.
            </p>
            <p>
              You correctly identified this, told John he would become eligible to select a plan in May 2026, and
              scheduled a callback for May 1st at 2:00 PM. That&apos;s the right outcome. He cannot enroll today.
              There was no plan to sell and no enrollment path available.
            </p>
            <p>
              The coaching opportunity isn&apos;t about the outcome — it&apos;s about how the call was run. At 1:48
              John disclosed stage 4 prostate cancer and at 2:05 told you he handles everything alone. Both got a flat
              &quot;Okay.&quot; Then you placed him on hold for approximately three minutes (5:07–8:12) with no check-in.
              The May 1st callback was set but without any emotional anchor — John said &quot;That&apos;ll work&quot;
              with zero real buy-in. With a consumer this sick and this close to eligibility, the groundwork laid on
              this call determines whether he picks up the phone in May.
            </p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>
              You made the right call at 4:07. John&apos;s Medicare doesn&apos;t start until August — you found that,
              confirmed it, and did not attempt a premature enrollment. That&apos;s the most important thing on this
              call and a lot of agents get it wrong. You also correctly identified May 2026 as the start of his IEP
              window (three months before his August effective date) and set a specific date and time for the callback
              rather than a vague &quot;we&apos;ll call you.&quot; And you confirmed his Medicaid status, which is
              critical context — he&apos;s dual-eligible and will likely qualify for a D-SNP once Medicare begins.
              The foundation for the May call is there.
            </p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>
            When John told you he has stage 4 prostate cancer at 1:48, the correct response was: &quot;John, I
            appreciate you sharing that. That&apos;s a serious fight — let me make sure that when your Medicare
            starts in August, you have a plan that protects you. That&apos;s exactly what we&apos;re going to set
            up in May.&quot; That sentence is what makes him answer his phone on May 1st.
          </p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>
              At 1:47–2:05, John disclosed he is on disability, has stage 4 prostate cancer, and handles everything
              alone. These are the three most important statements in this call. You responded with &quot;Okay&quot;
              to each one and moved to the nursing home check. This is the moment the call lost its potential. A
              consumer managing terminal cancer with no caregiver support is looking for someone he can trust with
              his insurance. You had the chance to become that person. Without that emotional connection, the May 1st
              callback is just another unknown number calling.
            </p>
            <p>
              The reframe that changes the May outcome: <em>&quot;John, I appreciate you sharing that. Stage 4 prostate
              cancer — that&apos;s a serious fight you&apos;re in the middle of. I want to make sure that when your
              Medicare kicks in on August 1st, you have a plan that has your back: the right doctors in-network, your
              medications covered, and those extra benefits that can take some of the load off. That&apos;s exactly
              what we&apos;re going to put together in May.&quot;</em> That anchors the callback to something real.
            </p>
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
              { cat: 'Math Breakdown', score: 12, max: 20 },
              { cat: 'Objection Handling', score: 11, max: 15 },
              { cat: 'Call Outcome Quality', score: 8, max: 10 },
              { cat: 'Compliance', score: 11, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>60 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Karimah Ali · John Easterday · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 (Hold Management) · RC2 (Client Gold Missed) · IEP · Pre-Medicare</p>
        </div>
      </div>
    </PageShell>
  )
}
