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

export default function MichelleSeditaCallPage() {
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
          <h1 className={styles.agentName}>Michelle Sedita</h1>
          <p className={styles.period}>April 15, 2026 · 3:38 · Youngstown, Ohio</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(38), fontWeight: 700 }}>38 / 100</span>
            {' · '}Incomplete · Declined SSN / Callback Requested
          </p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(38) }}>38</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>3:38</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 15, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '1rem' }}>INCOMPLETE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Not Enrolled</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1+RC2</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Discovery + Logic/Emotion</span>
          </div>
        </motion.div>

        {/* ── What Happened ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Michelle Sedita called from Youngstown, Ohio (ZIP 44509) — age 69, born December 29, 1956, a TV food card caller. The call lasted 3 minutes and 38 seconds. She declined to provide her SSN and asked for a callback. The call ended before any plan was reached and before any benefit comparison was made.</p>
            <p>The perfect compliance score (15/15) is the standout on this call — you ran the process correctly in under four minutes despite the consumer withholding information. The rapport moment — both of you being named Michelle — was a genuine human connection in an otherwise short, blocked call. The SSN objection was the wall, and it needed a specific reframe that redirected her to the Medicare ID number instead.</p>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Full compliance (15/15):</strong> A perfect compliance score on a call that barely lasted three and a half minutes is meaningful. You kept the process intact even when the consumer was pulling back. That discipline is exactly right.</p>
            <p><strong>Rapport with the name match:</strong> She&apos;s Michelle. You&apos;re Michelle. You used it. That kind of moment creates a real human connection on an otherwise transactional call — and it&apos;s the kind of thing that makes a consumer more likely to take your callback than a generic agent&apos;s.</p>
            <p><strong>Outcome quality (7/10):</strong> You recognized that this call wasn&apos;t going to close without the right information and didn&apos;t force it. Booking the callback correctly — and leaving the consumer feeling good about it — is a legitimate outcome on a call this short.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>She declined the SSN — but the SSN is not what you need. The Medicare ID number is a different card entirely, and most consumers don&apos;t know the distinction: &ldquo;Michelle, I totally understand — and I don&apos;t need your Social Security number. The only thing I need is your Medicare ID number — it&apos;s on your red, white, and blue Medicare card. That card has no financial information on it at all.&rdquo;</p>
        </motion.div>

        {/* ── The Moment That Decided This Call ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>~2:00 — &ldquo;I don&apos;t want to give out my Social Security number.&rdquo;</strong></p>
            <p>This is one of the most common short-call objections in Medicare — and it is almost always solvable with one clarification. Consumers conflate SSN with Medicare ID number because they used to be the same thing. Since 2018, Medicare Beneficiary Identifiers (MBIs) are completely separate from Social Security numbers. The Medicare card contains no financial information and can&apos;t be used to access someone&apos;s Social Security account.</p>
            <p>The correct reframe: <em>&ldquo;Michelle, I totally understand — and I want to make sure you actually get the food card benefit you called about today. The only thing I need is your Medicare ID number — it&apos;s on your red, white, and blue Medicare card, not your Social Security card. Those are two completely different numbers. Your Medicare ID has no financial information attached to it. Do you have that card nearby?&rdquo;</em></p>
            <p>That reframe does three things: it validates the concern, it draws a clear distinction between the two numbers, and it ties the ask directly to the benefit she called about. Most consumers who hear this will go find the Medicare card. If she still declines, you have a legitimate callback with a specific reason to call: &ldquo;When you have your Medicare card handy, I can check your eligibility for the food card benefit you called about.&rdquo;</p>
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
              { cat: 'Signal Reading', score: 4, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 4, max: 15 },
              { cat: 'Call Outcome Quality', score: 7, max: 10 },
              { cat: 'Compliance', score: 15, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: row.score === 0 ? 'var(--terracotta)' : scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}>
              <span>Total: <strong>38 / 100</strong></span>
            </div>
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Michelle Marrero · April 15, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC2 · SSN Objection · Medicare ID Reframe · Youngstown OH</p>
        </div>

      </div>
    </PageShell>
  )
}
