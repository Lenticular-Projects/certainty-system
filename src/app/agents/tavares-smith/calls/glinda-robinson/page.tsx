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

export default function GlindaRobinsonCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>

        {/* ── Header ── */}
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Call Report</span>
            <span className={styles.dot}>·</span>
            <Link href="/agents/tavares-smith" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Tavares Smith
            </Link>
          </div>
          <h1 className={styles.agentName}>Glinda Robinson</h1>
          <p className={styles.period}>April 13, 2026 · 53:44 · Tiffin, Ohio</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(53), fontWeight: 700 }}>53 / 100</span>
            {' · '}Missed Opportunity · The Detail Staller
          </p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(53) }}>53</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>53:44</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 13, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '1.1rem' }}>MISSED</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Missed Opportunity</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '1rem' }}>RC2</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Logic vs. emotion</span>
          </div>
        </motion.div>

        {/* ── What Happened ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>You spent 53 minutes with Glinda — a dual-eligible consumer in Tiffin, Ohio who called about food assistance. You found a plan that doubled her monthly OTC card from $116 to $240, which is $1,488 more per year. You ran the full discovery, checked her doctors and medications, built a real comparison, and put the numbers in front of her. The technical case was there.</p>
            <p>The call broke down at minute 49. Glinda said she wanted to talk to her &ldquo;insurance lady&rdquo; before deciding. You spent the next four minutes trying to explain why she didn&apos;t need to — essentially asking her to choose between you and an agent she already trusted. She chose her agent. That final objection was the only thing standing between you and an enrollment, and it had nothing to do with the plan.</p>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Opening framing (0:14):</strong> When Glinda called about &ldquo;food assistance,&rdquo; you immediately connected it to a Medicare benefit and took control of the conversation. That&apos;s the right move on every Money Caller call — don&apos;t let the consumer define the scope, define it for them.</p>
            <p><strong>SEP identification (7:17):</strong> You caught her Medicaid confirmation early and recognized the INT SEP. That gave you a valid enrollment window to work with outside of AEP — and it was the right door to walk through.</p>
            <p><strong>Comparison built (12:10):</strong> You put real numbers in front of her: $116 now vs. $240 on the new plan, annualized to a $1,488 gain. That&apos;s a meaningful number. You got to the math. That is more than most agents accomplish on a 53-minute call with a Detail Staller.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When she said she needed to talk to her insurance lady, you didn&apos;t need to compete with that relationship — you needed to redirect it: &ldquo;That makes sense. What&apos;s the one question you&apos;d want to ask her? I have the full plan details right here — I can likely answer it right now.&rdquo;</p>
        </motion.div>

        {/* ── The Moment That Decided This Call ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>49:29 — &ldquo;I need to speak with my insurance lady.&rdquo;</strong></p>
            <p>This was not a plan objection. Glinda wasn&apos;t confused about the numbers — she understood them. She was telling you she needs permission from someone she trusts before she makes a change. That is an emotional objection, and it needs an emotional response.</p>
            <p>What you said was essentially: &ldquo;You don&apos;t need her, you have me.&rdquo; What she heard was pressure. The correct move is to put her existing agent on your side: <em>&ldquo;It&apos;s great you have someone you trust. What&apos;s the specific question you&apos;d want to ask her? I have the Aetna plan details, the formulary, and the provider directory right here — let&apos;s answer it together so you have everything you need.&rdquo;</em> That keeps you in the driver&apos;s seat without asking her to choose.</p>
            <p>The math was done. The SEP was valid. The plan was better. The only thing left was handling one emotional objection — and that&apos;s exactly what tomorrow is for.</p>
          </div>
        </motion.div>

        {/* ── Score Breakdown ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Score Breakdown</h2>
          <div className={styles.callTable}>
            <div className={styles.callTableHeader}>
              <span>Category</span>
              <span>Score</span>
              <span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 8, max: 20 },
              { cat: 'Signal Reading', score: 8, max: 20 },
              { cat: 'Math Breakdown', score: 12, max: 20 },
              { cat: 'Objection Handling', score: 5, max: 15 },
              { cat: 'Call Outcome Quality', score: 10, max: 10 },
              { cat: 'Compliance', score: 10, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}>
              <span>Total: <strong>53 / 100</strong></span>
            </div>
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Tavares Smith · April 13, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC2 · RC3 · INT SEP · The Detail Staller · Logic vs. Emotion</p>
        </div>

      </div>
    </PageShell>
  )
}
