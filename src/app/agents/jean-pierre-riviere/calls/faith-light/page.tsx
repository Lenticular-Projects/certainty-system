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

export default function FaithLightCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Call Report</span>
            <span className={styles.dot}>·</span>
            <Link href="/agents/jean-pierre-riviere" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Jean Pierre Riviere
            </Link>
          </div>
          <h1 className={styles.agentName}>Faith Light</h1>
          <p className={styles.period}>April 14, 2026 · 13:16 · The Food Card Caller</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(22), fontWeight: 700 }}>22 / 100</span>
            {' · '}NOT ENROLLED — MISSED OPPORTUNITY
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(22) }}>22</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>13:16</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>Apr 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>MISSED OPP</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>DST violation · no close</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC4 · RC6</span>
            <span className={styles.scoreLabel}>Root Causes</span>
            <span className={styles.scoreRange}>Compliance · INT SEP missed</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Faith Light, a 78-year-old in Marion County, Indiana with both Medicare and Medicaid, called asking about the food card. She told you exactly what she wanted in the first minute. She also told you she has Medicaid — which is an INT SEP, available year-round, the legitimate path to a D-SNP enrollment with the food card she called about. You had everything you needed in 90 seconds.</p>
            <p>Instead, at 3:08 you invented a disaster-based SEP. You told Faith there had been a major storm in "Broestring County, North Carolina" and that this emergency declaration had opened a special enrollment period for her — a consumer in Marion County, Indiana. This is a Category 1 compliance violation. DST is explicitly prohibited as a standalone SEP trigger. The geography was fabricated. There was no storm. There was no applicable SEP. The INT SEP from her Medicaid was sitting right there and never used.</p>
            <p>SSN was collected at 5:01 before any benefits were presented. The Anthem loyalty objection at 8:02 — "I'm not going to change my Anthem" — was met with an airplane analogy that failed to land. The call ended at 13:16 mid-presentation with no close attempted, no enrollment, and the consumer still confused about what was actually happening.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>Your TPMO disclaimer at 2:04 was complete and well-paced — carrier availability, Medicare.gov reference, SHIP mention, all in the right format. That section of the call was fully compliant and professionally delivered.</p>
            <p>When Faith said she has Medicaid at 1:12, you responded "Beautiful, makes a big difference" — you recognized the significance immediately. The recognition was correct. What followed wasn't.</p>
            <p>At 11:08 you delivered a genuine fiduciary promise: "For as long as you have this policy, you will always call me and I will always support you." Faith's core fear is abandonment by prior agents who disappeared after the sale. That line speaks directly to it and it was real. That kind of trust-building is what creates a long-term book of business.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When Faith said "I'm not going to change my Anthem," your one line was: "Ms. Faith, I'm not asking you to leave Anthem — the plan I'm showing you IS Anthem. You're on their basic plan. The dual plan — the one with the food card you called about — that's also Anthem. Same company, better version. Does that make sense?"</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>The disaster narrative at 3:08 is the call's defining failure, but the inflection point that could have saved it was at 8:43 — one second after Faith said "I don't think so" to your airplane analogy. At that moment, you needed to drop the analogy entirely and return to her own words from 0:52: "Ms. Faith, the food card you called about today — that's on the dual plan, which IS Anthem. Same company, different tier. And because you have Medicaid, you're entitled to it year-round. Let me show you exactly what that card is worth per month."</p>
            <p>Instead, you treated the analogy as having worked and continued presenting. You later mentioned a $108/month flex benefit at 12:03 — the food card dollar amount Faith called about — but never connected it back to her reason for calling and never asked for enrollment. The close was available the moment you said "$108 a month." You needed one more sentence: "That's the food card you called about. Can I get you enrolled today?" It was not delivered.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Score Breakdown</h2>
          <div className={styles.callTable}>
            <div className={styles.callTableHeader}>
              <span>Category</span><span>Score</span><span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 4, max: 20 },
              { cat: 'Signal Reading', score: 5, max: 20 },
              { cat: 'Math Breakdown', score: 2, max: 20 },
              { cat: 'Objection Handling', score: 3, max: 15 },
              { cat: 'Call Outcome Quality', score: 2, max: 10 },
              { cat: 'Compliance', score: 6, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>22 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Jean Pierre Riviere · Faith Light · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC4 · RC6 · CRITICAL: DST fabrication — geographic misrepresentation violation</p>
        </div>
      </div>
    </PageShell>
  )
}
