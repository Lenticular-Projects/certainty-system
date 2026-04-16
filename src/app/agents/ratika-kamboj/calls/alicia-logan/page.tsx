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

export default function AliciaLoganCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>

        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Call Report</span>
            <span className={styles.dot}>·</span>
            <Link href="/agents/ratika-kamboj" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Ratika Kamboj
            </Link>
          </div>
          <h1 className={styles.agentName}>Alicia Logan</h1>
          <p className={styles.period}>April 15, 2026 · 9:27 · Monroe County, FL</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(28), fontWeight: 700 }}>28 / 100</span>
            {' · '}Missed Opportunity · Lead not qualified before enrollment sequence began
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(28) }}>28</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>9:27</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 15, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '0.9rem' }}>MISSED OPP</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Warm lead abandoned</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1 · RC6</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Lead unqualified + passive exit</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Alicia Logan is an 80-year-old woman in the Florida Keys area who opened the call by saying: &ldquo;I&apos;m calling to see if I&apos;m qualified for Medicare and Medicaid.&rdquo; That sentence is the most important thing that happened on this call — and it was bypassed in the first 30 seconds. Instead of pausing to determine whether Alicia had Medicare at all, you immediately pivoted to food card benefits and ran a standard enrollment discovery sequence. You ran nine minutes of verification work on a lead you never confirmed was enrollable.</p>
            <p>Your compliance execution was solid — TPMO at 1:15, SOA at 1:41, callback permission confirmed, pre-enrollment verification sequence completed correctly. You collected her name (Alicia Logan) and DOB (September 12, 1945). But when you asked for her Medicare card at 3:36, she didn&apos;t have it. When you asked for her full SSN to do a lookup, she didn&apos;t know it. Partial SSN returned nothing. By 7:39 you were at a dead end: &ldquo;Ma&apos;am, it&apos;s not pulling up anything.&rdquo;</p>
            <p>The call ended at 9:17 with: &ldquo;When you find your number, you can give me a call back, okay?&rdquo; That sentence placed the entire burden of follow-up on an 80-year-old consumer who doesn&apos;t know where her Medicare card is. There is no scheduled callback, no instructions on where to find the number, no commitment from you. The lead was handed back to chance.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Full TPMO and SOA compliance block (1:15):</strong> TPMO disclaimer, SOA permission, callback confirmation, and pre-enrollment verification sequence all delivered correctly and in the right order. The compliance foundation was one of the strongest aspects of this call.</p>
            <p><strong>Persistence in data collection (3:46):</strong> When Alicia didn&apos;t have her Medicare card, you offered an alternative immediately. You made multiple attempts — name, DOB, partial SSN — before acknowledging the dead end. The persistence was appropriate. It was the exit strategy that failed, not the effort.</p>
            <p><strong>Patient and professional demeanor throughout (6:44):</strong> Despite the call going in circles through the SSN section for several minutes, you stayed composed and never showed frustration. Alicia remained comfortable and trusting throughout — that is a real rapport strength that should have been used to schedule the callback.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>Never tell a consumer to &ldquo;call back when you find your number.&rdquo; Own the callback: &ldquo;Alicia, let me call you back tomorrow at 1 PM. Your Medicare number is on your red, white, and blue card — check your mail or your important papers. If you can&apos;t find it, call 1-800-Medicare and they&apos;ll give it to you in two minutes. Can I count on calling you tomorrow?&rdquo;</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>0:14 — &ldquo;I&apos;m calling to see if I&apos;m qualified for Medicare and Medicaid.&rdquo;</strong></p>
            <p>This was the whole call in one sentence — and it was bypassed. Alicia said she is calling to find out if she <em>qualifies</em> for Medicare and Medicaid. That phrasing tells you everything: she may not have Medicare yet. She may be confused about her coverage. She may have Medicaid — which would open a year-round D-SNP enrollment window. Any of these scenarios requires one question before running any enrollment sequence: &ldquo;Do you currently have Medicare Part A and Part B — do you have a red, white, and blue Medicare card?&rdquo;</p>
            <p>Without confirming that single fact, the next nine minutes had no chance of completing an enrollment. You cannot enroll someone in a Medicare Advantage plan if they do not have Medicare. The call burned nine minutes not because the consumer was difficult — she was cooperative and patient — but because the lead was never qualified before the sequence began.</p>
            <p>The second thing to fix: when the data dead end arrived at 7:39, the call needed a scheduled callback, not a passive one. The line that saves the lead: <em>&ldquo;Alicia, let me make this easy — I&apos;m going to call you back tomorrow at 1 PM. In the meantime, your Medicare number is on your red, white, and blue card. Look for it in your mail or your important documents. If you can&apos;t find it, call 1-800-Medicare and they&apos;ll read you the number in 2 minutes. Can I call you back at 1 PM tomorrow?&rdquo;</em> You own the follow-up. You give her instructions. You set the time. The probability of an 80-year-old calling back on her own without a specific time and instructions is close to zero.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Score Breakdown</h2>
          <div className={styles.callTable}>
            <div className={styles.callTableHeader}>
              <span>Category</span><span>Score</span><span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 8, max: 20 },
              { cat: 'Signal Reading', score: 3, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 6, max: 15 },
              { cat: 'Call Outcome Quality', score: 2, max: 10 },
              { cat: 'Compliance', score: 9, max: 15 },
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
          <p>The Certainty System · Ratika Kamboj · Alicia Logan · April 15, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC6 · INT SEP · Lead Qualification · Passive Callback · Florida Keys FL</p>
        </div>

      </div>
    </PageShell>
  )
}
