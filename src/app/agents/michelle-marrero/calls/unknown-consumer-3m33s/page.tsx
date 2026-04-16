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

export default function UnknownConsumer3m33sCallPage() {
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
          <h1 className={styles.agentName}>Unknown Consumer</h1>
          <p className={styles.period}>April 14, 2026 · 3:33 · Dayton Area, Ohio</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(55), fontWeight: 700 }}>55 / 100</span>
            {' · '}Incomplete · Phone Died / Compliance Violation
          </p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(55) }}>55</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>3:33</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '1rem' }}>INCOMPLETE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Not Enrolled</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC6+RC4</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>SEP Miss + Compliance</span>
          </div>
        </motion.div>

        {/* ── What Happened ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>This call came in from ZIP 45404 in the Dayton, Ohio area. The consumer has both Medicaid and Medicare active — a dual-eligible member and an INT SEP opportunity. She agreed to provide her Medicare Beneficiary Identifier and the call was heading toward a plan presentation. Then her phone died. The call ended at 3 minutes and 33 seconds. You have her callback number: 326-467-4202.</p>
            <p>The call was not lost to a no — it was lost to a dead phone. That makes the callback the entire story. However, there was a compliance violation during the call: you said &ldquo;I work for Medicare,&rdquo; which is a false affiliation statement. That is a CMS violation and it cannot happen again. A carrier-affiliated agent working independently is not a Medicare employee and cannot represent themselves as one — regardless of how the consumer is framing the conversation.</p>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>MBI commitment before disconnect:</strong> She agreed to provide her Medicare ID before the phone died. That means she was willing. She trusted you enough in 3 minutes to give you access to her Medicare information. That willingness is the foundation for a successful callback.</p>
            <p><strong>Dual-eligible recognition:</strong> You identified Medicaid and Medicare both active in under three minutes. That signal reading (9/20) is solid for a call this short — you were already on the right track for an INT SEP enrollment.</p>
            <p><strong>Callback number secured:</strong> 326-467-4202. You have a direct line back. That is the most important thing you can take off a disconnected call. The outcome quality score (10/10) reflects that — this call was a setup for a successful follow-up, not a loss.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>Never say &ldquo;I work for Medicare.&rdquo; The correct line is: &ldquo;I&apos;m a licensed Medicare insurance agent — I can help you compare the plans that are available in your area.&rdquo; One sentence. It&apos;s accurate, it&apos;s legal, and it still positions you as someone who can help.</p>
        </motion.div>

        {/* ── The Moment That Decided This Call ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>~1:30 — &ldquo;I work for Medicare.&rdquo; Compliance violation.</strong></p>
            <p>This call ended because of a dead phone, not because of the compliance issue — but the compliance issue needs to be addressed directly. Saying &ldquo;I work for Medicare&rdquo; to a consumer is a false affiliation statement under CMS regulations. It doesn&apos;t matter that you were trying to build credibility or help her understand who she was talking to. The statement is factually incorrect and legally prohibited.</p>
            <p>The reason this matters beyond compliance: consumers who believe they&apos;re talking to a Medicare employee may make different decisions than they would with an independent agent. The trust built on a false affiliation is not durable — and it creates liability for you if that consumer ever complains to CMS.</p>
            <p>The correct framing when a consumer seems confused about who you are: <em>&ldquo;I&apos;m a licensed Medicare insurance agent — I&apos;m not a Medicare employee, but I&apos;m CMS-licensed and I help Medicare beneficiaries compare plans in your area. I work with multiple carriers, so I can show you what&apos;s actually available to you.&rdquo;</em></p>
            <p>On the INT SEP miss: she had both Medicaid and Medicare. That is a dual-eligible qualifying event for an INT SEP. Name it on the callback: &ldquo;Because you have both Medicaid and Medicare, you may qualify for a $0 premium plan with better benefits right now — not during open enrollment.&rdquo;</p>
            <p>Call 326-467-4202. She was ready to give you her MBI. Start there.</p>
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
              { cat: 'Signal Reading', score: 9, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 8, max: 15 },
              { cat: 'Call Outcome Quality', score: 10, max: 10 },
              { cat: 'Compliance', score: 11, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: row.score === 0 ? 'var(--terracotta)' : scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}>
              <span>Total: <strong>55 / 100</strong></span>
            </div>
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Michelle Marrero · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC6 · RC4 · RC1 · INT SEP Missed · False Affiliation · Callback: 326-467-4202</p>
        </div>

      </div>
    </PageShell>
  )
}
