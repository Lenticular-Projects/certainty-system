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

export default function JohnPetipasCallPage() {
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
            <Link href="/agents/michelle-marrero" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Michelle Marrero
            </Link>
          </div>
          <h1 className={styles.agentName}>John Petipas</h1>
          <p className={styles.period}>April 15, 2026 · 20:06 · Killeen, Texas</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(40), fontWeight: 700 }}>40 / 100</span>
            {' · '}Missed Opportunity · Surrendered on Giveback 3x
          </p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(40) }}>40</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>20:06</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 15, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '0.85rem' }}>MISSED OPP</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Not Enrolled</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC3+RC6</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Math + SEP Miss</span>
          </div>
        </motion.div>

        {/* ── What Happened ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>This was a reconnect call with John Petipas in Killeen, Texas — a fixed-income consumer on AARP UHC TX12 HMO-POS who was interested in switching to a plan with an $85/month Part B giveback to help with utilities and rent. At 7:04, he told you &ldquo;Yes, I accept&rdquo; — he was ready. He was already sold on the benefit. You had verbal consent before the 10-minute mark.</p>
            <p>What followed was a 13-minute struggle with a giveback objection that he raised three separate times, and three times you didn&apos;t have a clean answer ready. There was also a compliance issue: you named the DST SEP to the consumer, which is not permitted — SEP codes are internal to agents. And you missed an INT SEP signal when he disclosed Medicaid. The call ended without enrollment despite verbal agreement early on.</p>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Early verbal agreement (7:04):</strong> He said &ldquo;Yes, I accept&rdquo; before the 10-minute mark. You built enough trust and presented the $85/month Part B giveback clearly enough that he was ready to move forward. Getting a verbal commitment that early on a reconnect call means you did the relationship work correctly.</p>
            <p><strong>Doctor verification:</strong> You confirmed Dr. Charles Mitchell at 3816 Clear Creek Road Suite E in Killeen is in-network before presenting the plan. That&apos;s the right sequence and the right level of specificity — address and suite number matters for this consumer.</p>
            <p><strong>Granddaughter discovery:</strong> You picked up that his granddaughter has asthma and used that as a touchpoint. That kind of personal detail — retained and referenced — is what makes a consumer feel heard rather than processed.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>He said yes at 7:04. The rest of this call was you losing ground you had already won. When a consumer gives verbal agreement, stop selling and start enrolling — every minute after that yes is a risk, not an opportunity.</p>
        </motion.div>

        {/* ── The Moment That Decided This Call ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>7:04 — He said yes. You kept selling.</strong></p>
            <p>John Petipas told you he accepted the plan at 7:04. That is a verbal agreement. The correct move at 7:04 is to transition immediately into the enrollment process: &ldquo;Perfect — I&apos;m going to walk you through the next steps right now. I&apos;ll need to verify a few things with you to complete your enrollment.&rdquo;</p>
            <p>Instead, the call continued in sales mode — and the giveback objection surfaced three more times. Each time it came back, it was harder to close because he had already agreed and then had reason to doubt. The objection itself was answerable: the $85/month Part B giveback goes directly against his Part B premium, which reduces what comes out of his Social Security check. That is the explanation. It needs to be said once, clearly, with the math: &ldquo;John, the $85 comes off your Medicare premium — so instead of paying [X] from your Social Security, you pay [X minus $85]. That&apos;s money that stays in your check every month.&rdquo;</p>
            <p>The compliance miss (naming DST SEP to the consumer) and the INT SEP miss are both real issues — but they didn&apos;t cause this outcome. He said yes at 7:04. The call length caused this outcome. When you have a yes, move to close.</p>
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
              { cat: 'Lead Quality', score: 12, max: 20 },
              { cat: 'Signal Reading', score: 5, max: 20 },
              { cat: 'Math Breakdown', score: 2, max: 20 },
              { cat: 'Objection Handling', score: 4, max: 15 },
              { cat: 'Call Outcome Quality', score: 5, max: 10 },
              { cat: 'Compliance', score: 12, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: row.score === 0 ? 'var(--terracotta)' : scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}>
              <span>Total: <strong>40 / 100</strong></span>
            </div>
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Michelle Marrero · April 15, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC3 · RC6 · RC4 · DST SEP Named · INT SEP Missed · Killeen TX</p>
        </div>

      </div>
    </PageShell>
  )
}
