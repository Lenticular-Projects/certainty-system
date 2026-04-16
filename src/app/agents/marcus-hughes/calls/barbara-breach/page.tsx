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

export default function BarbaraBreachCallPage() {
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
          <h1 className={styles.agentName}>Barbara Breach</h1>
          <p className={styles.period}>April 15, 2026 · 30:15 · The Chronic Qualifier / The Delegator</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(48), fontWeight: 700 }}>48 / 100</span>
            {' · '}MISSED OPPORTUNITY
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(48) }}>48</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>30:15</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>Apr 15, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>MISSED OPP</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Surrendered at close</span>
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
            <p>Barbara Breach called in at 80 years old — pacemaker, paralyzed left leg, recently discharged after a 6-day hospital stay for a blood infection, no primary doctor, and spending $600 a month on medications including $40 cash for morphine. You picked up on her pacemaker immediately at 7:24, correctly identified her as a C-SNP candidate, and pivoted to the UnitedHealthcare chronic special needs plan within 20 seconds. That was the highest-value diagnostic move of the entire call.</p>
            <p>What followed was a solid but incomplete plan presentation. You ran through the comparison — dental ($500 vs. $2,000), specialist copay ($40 vs. $35), MOOP halved from $13,900 to $6,700, vision allowance added, $85/month food card — and Barbara responded well throughout. She had no hard objections. She was cooperative, engaged, and expressed genuine interest in the food card from the start.</p>
            <p>The call broke down at 27:00 when Barbara raised a vague Humana "kickback" benefit she had been told about. You asked what it was, she couldn't remember the amount, and you deflected with price logic instead of resolving the uncertainty. At 28:07 she asked for your name and phone number — a disengagement signal. At 29:45 you offered to submit the application ("we can submit your application for you") but immediately backed off the moment she reaffirmed her callback. The call ended with a passive agreement and no submission. A 30-minute call with a cooperative, qualified 80-year-old who just got out of the hospital ended as a callback.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>The C-SNP identification at 7:44 was your strongest moment. Barbara disclosed her pacemaker and within 20 seconds you pivoted to the correct product — "with that pacemaker Barbara you can qualify for a chronic special needs plan." That is the highest-value diagnostic skill on this call type. You got it right without prompting, and you connected it immediately to the $85 food card and the MOOP reduction. The plan match was legitimate and the product fit was real.</p>
            <p>Your compliance delivery at 1:06 was clean and complete — TPMO disclaimer with two organizations, 20+ products, Medicare.gov reference, and the SOA-style product scope question. All delivered within the first 90 seconds. You also asked the nursing home and decision-maker questions correctly. At 23:51, when you found that morphine and levothyroxine were not on formulary, you correctly framed it as solvable — "you can have a conversation with them, have that exempted" — rather than letting it become a blocker. And when Barbara said she had no primary doctor, you offered to refer her one and positioned it as a value-add of the plan. That was the right move.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>
            When she said she wanted to talk to her daughter: "Barbara, let me get this submitted so the paperwork hits your mailbox before your daughter wakes up — if she has any concerns, you have until the end of the month to cancel. That way you're not holding up a good thing. Can I get started?"
          </p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>29:45. You said "we can submit your application for you Barbara so you can receive everything in the mailbox okay" — and then in the same breath added "but if you do want to get back to me." That hedge is what cost you the enrollment. You offered submission and simultaneously gave her an exit. The submission offer was passive and conditional, which made it easy for Barbara to reaffirm the callback without having to make an active decision to refuse.</p>
            <p>The correct play was to make the submission the path of least resistance. Barbara's objection was not about the plan — she liked the food card, she agreed the benefits were stronger, she had no hard objection. Her hesitation was about involving her daughter. The answer to that is not a callback — it's a submission with a cancellation window. "Your daughter can read the paperwork when she wakes up. If she doesn't like it, you call me and we cancel. But let's not leave you without this food card for another month." That framing puts the burden on cancellation, not enrollment. You had the words for it at 29:17 when you mentioned the cancellation window — but you never pushed through to the submission itself.</p>
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
              { cat: 'Signal Reading', score: 11, max: 20 },
              { cat: 'Math Breakdown', score: 8, max: 20 },
              { cat: 'Objection Handling', score: 4, max: 15 },
              { cat: 'Call Outcome Quality', score: 3, max: 10 },
              { cat: 'Compliance', score: 12, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>48 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Marcus Hughes · Barbara Breach · April 15, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 (Surrendered Close) · RC2 (Client Gold Ignored) · RC3 (Math Incomplete) · RC6 (MOV SEP Missed)</p>
        </div>

      </div>
    </PageShell>
  )
}
