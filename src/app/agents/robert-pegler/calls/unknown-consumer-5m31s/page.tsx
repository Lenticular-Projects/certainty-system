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

export default function UnknownConsumer5m31sCallPage() {
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
            <Link href="/agents/robert-pegler" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Robert Pegler
            </Link>
          </div>
          <h1 className={styles.agentName}>Unknown Consumer</h1>
          <p className={styles.period}>April 13, 2026 · 5:31 · Tennessee · Zip 38253</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(42), fontWeight: 700 }}>42 / 100</span>
            {' · '}Incomplete · Dual-Eligible — Dropped Call
          </p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(42) }}>42</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>5:31</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 13, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '1rem' }}>INCOMPLETE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Dropped Call</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '1rem' }}>RC6</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Missed INT SEP</span>
          </div>
        </motion.div>

        {/* ── What Happened ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>An inbound grocery-card caller from zip 38253 in Tennessee. You confirmed Medicare Parts A and B, collected the zip code, and were working through discovery when her phone started dying at 3:36. She told you the battery was going and asked you to call her back. You got her callback number — 731-389-6183 — and the call degraded before anything else could happen. INCOMPLETE outcome, legitimate given the circumstances.</p>
            <p>The miss here wasn&apos;t the dropped call. It was at 0:55, when she said &ldquo;I even got some Medicaid.&rdquo; You said &ldquo;And Medicaid, okay, very good&rdquo; and kept going. That consumer — $22/month income, Medicaid confirmed, calling about the grocery card — is a textbook Dual Special Needs Plan candidate. The INT SEP was open the moment she said that. She can enroll any month. You didn&apos;t need to wait for a plan presentation window.</p>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Compliance — clean (15/15):</strong> Full TPMO delivered correctly, in sequence, with all required elements. That part of the call was done right from start to finish.</p>
            <p><strong>Got the callback number (3:47):</strong> When the phone started dying, you immediately locked in her number before losing the connection. That was the right instinct — the lead is still alive. 731-389-6183. If that call has not been made yet, make it today. Lead this one with the D-SNP hook, not the general benefits intro.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a consumer mentions Medicaid, say it out loud: &ldquo;You have Medicaid too? That actually qualifies you for a special type of Medicare plan designed for exactly your situation — it includes the grocery benefit and you can enroll any time of year, not just during open enrollment. Let me check what&apos;s available in your zip code.&rdquo; That sentence is the open door.</p>
        </motion.div>

        {/* ── The Moment That Decided This Call ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>0:55 — &ldquo;I even got some Medicaid.&rdquo;</strong></p>
            <p>This is the highest-value signal a Medicare consumer can give you. Medicaid confirmation means D-SNP eligibility, INT SEP access (enrollment any month of the year), and a plan tier designed specifically for consumers in her financial situation. You had the enrollment window. You had the qualifying event. You had a consumer who called about the grocery card and $22/month income.</p>
            <p>What you needed to say at 0:55: <em>&ldquo;You have Medicaid — that&apos;s actually important. There&apos;s a specific type of Medicare plan called a Dual Special Needs Plan that&apos;s designed for people who have both Medicare and Medicaid. It comes with a grocery benefit, and because you have Medicaid, you can switch into it any month — you don&apos;t have to wait for open enrollment. Let me pull up what&apos;s available in your zip code right now.&rdquo;</em></p>
            <p>The dropped call wasn&apos;t the failure — it was a logistical problem. The miss was not anchoring the Medicaid disclosure before the phone died. On the callback, lead with the D-SNP. She already told you why she qualifies and why she called. Connect those two things in the first 30 seconds.</p>
          </div>
        </motion.div>

        {/* ── Live Lead ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>Live Lead</span>
          <p className={styles.oneThingText}>731-389-6183 · Tennessee · Medicaid confirmed · INT SEP open · Called about the grocery card. If this callback hasn&apos;t been made, make it now.</p>
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
              { cat: 'Lead Quality', score: 9, max: 20 },
              { cat: 'Signal Reading', score: 5, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 7, max: 15 },
              { cat: 'Call Outcome Quality', score: 6, max: 10 },
              { cat: 'Compliance', score: 15, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: row.score === 0 ? 'var(--terracotta)' : scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}>
              <span>Total: <strong>42 / 100</strong></span>
            </div>
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Robert Pegler · April 13, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC6 · INT SEP · D-SNP · Medicaid Signal · Live Lead: 731-389-6183</p>
        </div>

      </div>
    </PageShell>
  )
}
