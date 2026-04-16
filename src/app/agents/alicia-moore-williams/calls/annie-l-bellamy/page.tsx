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

export default function AnnieBellamyCallPage() {
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
            <Link href="/agents/alicia-moore-williams" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Alicia Moore Williams
            </Link>
          </div>
          <h1 className={styles.agentName}>Annie L. Bellamy</h1>
          <p className={styles.period}>April 14, 2026 · 13:04 · Hubert, NC</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(52), fontWeight: 700 }}>52 / 100</span>
            {' · '}Incomplete · Dual-Eligible, Family Decision-Maker
          </p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(52) }}>52</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>13:04</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '1rem' }}>INCOMPLETE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Family Decision-Maker</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1 · RC6</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Close surrendered + INT SEP missed</span>
          </div>
        </motion.div>

        {/* ── What Happened ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Annie Bellamy is 89, dual-eligible (Medicare + Medicaid), calling from Hubert NC about the grocery card. The call opened well — TPMO compliant, discovery moving forward. At 9:12 Annie confirmed she had Medicaid: &ldquo;It&apos;s Medicaid.&rdquo; That was your INT SEP signal. A dual-eligible beneficiary in a North Carolina ZIP unlocks the D-SNP tier and the full OTC benefit she called about.</p>
            <p>At 9:27, instead of pivoting to the INT SEP plan, Annie said she was satisfied with her current coverage. The objection was surrendered — no reframe, no acknowledgment of the Medicaid unlock. By 10:07 the transcript becomes difficult to follow and the call winds down incomplete. Annie never heard what she qualified for, and her original question about the grocery card went unanswered.</p>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Compliant opening on a challenging call:</strong> Full TPMO disclaimer delivered correctly before discovery began. With an 89-year-old consumer, keeping the compliance piece clean and moving forward without confusion is a real skill.</p>
            <p><strong>Patient discovery pace:</strong> You slowed your delivery to match Annie&apos;s pace, repeated key questions without frustration, and confirmed her information methodically. That&apos;s the right approach with elderly callers.</p>
            <p><strong>Medicaid identified at 9:12:</strong> You asked the right question and got the dual-eligible confirmation. The failure wasn&apos;t in the discovery — it was in what happened after you had the answer.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When Annie confirmed Medicaid at 9:12, that was your unlock. Before she could object to anything, the line was: &ldquo;Annie, because you have both Medicare and Medicaid, you qualify for a special plan that includes the grocery card you called about. Let me check exactly what&apos;s available in your ZIP — this is exactly what we&apos;re looking for.&rdquo; Use the confirmation as momentum, not as a data point to file away.</p>
        </motion.div>

        {/* ── The Moment That Decided This Call ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>9:12 — &ldquo;It&apos;s Medicaid.&rdquo; followed by 9:27 — Satisfaction objection surrendered.</strong></p>
            <p>Fifteen seconds separated the dual-eligible confirmation from the objection that ended this call. When Annie confirmed Medicaid, the correct move was to immediately use it as the bridge to the D-SNP plan — the very benefit she called to ask about. Instead there was a pause, and when she said she was satisfied with her current coverage, the close was abandoned.</p>
            <p>The satisfaction objection from a dual-eligible 89-year-old is almost always about comfort and familiarity, not about plan features. The reframe isn&apos;t an argument — it&apos;s a redirect: <em>&ldquo;Annie, I&apos;m not asking you to change your doctors or your coverage. What I&apos;m doing is adding the grocery card on top of what you already have. You keep everything the same — I just want to make sure you&apos;re getting every benefit you&apos;re entitled to.&rdquo;</em></p>
            <p>At 89 with Medicaid confirmed, the consent path for family involvement is also worth knowing: if a family member helps Annie with decisions, you can request they be brought into the call rather than using it as a reason to end the conversation.</p>
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
              { cat: 'Signal Reading', score: 7, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 8, max: 15 },
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
              <span>Total: <strong>52 / 100</strong></span>
            </div>
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Alicia Moore Williams · Annie L. Bellamy · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC6 · INT SEP Missed · Dual-Eligible · Hubert NC</p>
        </div>

      </div>
    </PageShell>
  )
}
