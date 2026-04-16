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

export default function UnknownConsumer11m40sCallPage() {
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
          <h1 className={styles.agentName}>Unknown Consumer</h1>
          <p className={styles.period}>April 14, 2026 · 11:40 · Waycross, Georgia</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(57), fontWeight: 700 }}>57 / 100</span>
            {' · '}Uncloseable · Gatekeeper / Daughter POA
          </p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(57) }}>57</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>11:40</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '0.9rem' }}>UNCLOSEABLE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Not Enrolled</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC6+RC1</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>SEP Miss + Discovery</span>
          </div>
        </motion.div>

        {/* ── What Happened ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>You reached a consumer in Waycross, Georgia (ZIP 31501) who has both Medicaid and Medicare — a dual-eligible member on UHC. Her daughter is her POA and the decision-maker on any plan changes. The consumer was cooperative but not in control of her own enrollment. Without reaching the daughter, you had no path to close.</p>
            <p>You managed the gatekeeper situation professionally and kept the call moving. The bigger miss was a SEP signal that surfaced during the call: she disclosed active Medicaid alongside Medicare, which qualifies as an INT SEP and opens an enrollment window outside AEP. You didn&apos;t identify or name that window — which means neither you nor the consumer understood how close she was to being enrollable right now.</p>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Compliance hold (full call):</strong> You scored a 13 out of 15 on compliance, which is strong. On a call where the consumer isn&apos;t the decision-maker, it&apos;s easy to skip steps or rush toward a close that isn&apos;t coming. You stayed disciplined through the process.</p>
            <p><strong>Outcome quality read (8/10):</strong> You correctly identified that this call was gatekeeper-controlled and did not push for an enrollment that couldn&apos;t happen. A correct no-sale handled cleanly still has value — it keeps the door open for a callback with the right person in the room.</p>
            <p><strong>Discovery attempt:</strong> You confirmed her current plan (UHC) and her dual-eligible status. That&apos;s the data you need for the follow-up call. You left with more than you came with.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When Medicaid and Medicare come up together, name the INT SEP out loud — even to a gatekeeper. The daughter needs to hear: &ldquo;Your mom may qualify for a $0 premium plan with a better food card right now, not during open enrollment.&rdquo; That&apos;s the line that gets the callback booked.</p>
        </motion.div>

        {/* ── The Moment That Decided This Call ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>~7:00 — Medicaid + Medicare confirmed. INT SEP not named.</strong></p>
            <p>Once you confirmed she had both Medicaid and Medicare active, you had a Special Enrollment Period available — an Integrated Non-Dual to Dual SEP (INT). That means she could enroll in a D-SNP plan today, not during AEP. That&apos;s a powerful piece of information, especially with a gatekeeper.</p>
            <p>The move at that moment: <em>&ldquo;Tell your daughter this before I call tomorrow: &lsquo;With Medicaid and Medicare together, you might qualify for a $0 premium plan with a better food card.&rsquo; I want to make sure she has that information when we talk.&rdquo;</em></p>
            <p>That line does two things: it gives the daughter a reason to want the follow-up call, and it pre-frames the conversation so you&apos;re not starting cold when you call back. Without it, the callback is just another cold call to a gatekeeper who already said no.</p>
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
              { cat: 'Lead Quality', score: 11, max: 20 },
              { cat: 'Signal Reading', score: 6, max: 20 },
              { cat: 'Math Breakdown', score: 10, max: 20 },
              { cat: 'Objection Handling', score: 9, max: 15 },
              { cat: 'Call Outcome Quality', score: 8, max: 10 },
              { cat: 'Compliance', score: 13, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}>
              <span>Total: <strong>57 / 100</strong></span>
            </div>
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Tavares Smith · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC6 · RC1 · RC2 · INT SEP Missed · Gatekeeper · Waycross GA</p>
        </div>

      </div>
    </PageShell>
  )
}
