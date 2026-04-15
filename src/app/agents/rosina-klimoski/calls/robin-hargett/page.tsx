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

export default function RobinHargettCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>

        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Call Report</span>
            <span className={styles.dot}>·</span>
            <Link href="/agents/rosina-klimoski" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Rosina Klimoski
            </Link>
          </div>
          <h1 className={styles.agentName}>Robin Hargett</h1>
          <p className={styles.period}>April 13, 2026 · 10:24 · Lancaster, SC</p>
          <p className={styles.updatedAt}>
            <span style={{ color: 'var(--sage-dark)', fontWeight: 700 }}>58 / 100</span>
            {' · '}Correct No-Sale · Complex Dual-Eligible
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(58) }}>58</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>10:24</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 13, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)', fontSize: '0.85rem', lineHeight: 1.2 }}>CORRECT<br/>NO-SALE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Right call</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)', fontSize: '1rem' }}>CNS</span>
            <span className={styles.scoreLabel}>Classification</span>
            <span className={styles.scoreRange}>Already on best plan</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Robin is a dual-eligible consumer in Lancaster, SC — Medicare, full Medicaid, Extra Help Level 2, currently on a UnitedHealthcare D-SNP with a $261/month spending card. She called about the grocery benefit. You verified her Medicare number, confirmed her current plan, and checked competing options.</p>
            <p>At 9:33 you presented Humana&apos;s $280 card option — slightly higher than what she has now. Robin immediately said her doctors don&apos;t accept Humana. You accepted that as a valid clinical reason, confirmed she&apos;s already on the best available plan in her area, and closed the call correctly at 9:54. This was a correct no-sale, and it was the right call.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>You caught your own error:</strong> At 9:01 you identified a screen error in your own data and reversed your framing before presenting incorrect information to Robin. You didn&apos;t push through. You corrected it and told her the truth. That is professional discipline in a moment where commission is visible on the other side of a wrong decision. A lesser agent enrolls her and hopes compliance doesn&apos;t catch it. You caught it yourself.</p>
            <p><strong>Compliant open and verification:</strong> TPMO delivered early and correctly. You confirmed her Medicare number, current plan, and benefit details before making any comparison. That&apos;s the right sequence.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>Correct no-sales protect both the consumer and your credibility. Robin is already on the best plan in her area. Telling her that — while looking at commission on the table — is exactly what this job requires. This call was done right.</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What to Build On</h2>
          <div className={styles.summaryCard}>
            <p><strong>Math wasn&apos;t attempted:</strong> Even on a correct no-sale, showing a consumer the numbers — current plan vs. alternatives — demonstrates thoroughness and builds trust. &ldquo;Robin, you&apos;re getting $261 now. The Humana option is $280 — but your doctors aren&apos;t in network, so the switch doesn&apos;t make sense. You&apos;re in the right place.&rdquo; That sentence closes the loop and leaves her feeling certain, not just told. It also protects you if she calls back wondering if she missed something.</p>
            <p><strong>SOA not offered:</strong> Before ending a call where no enrollment occurred, offer to send a summary or ask for a formal Scope of Appointment for future contact. Small habit, creates a documented touchpoint for AEP follow-up.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Score Breakdown</h2>
          <div className={styles.callTable}>
            <div className={styles.callTableHeader}>
              <span>Category</span><span>Score</span><span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 14, max: 20 },
              { cat: 'Signal Reading', score: 12, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 12, max: 15 },
              { cat: 'Call Outcome Quality', score: 8, max: 10 },
              { cat: 'Compliance', score: 12, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: row.score === 0 ? 'var(--terracotta)' : scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>58 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Rosina Klimoski · April 13, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>Correct No-Sale · D-SNP · Lancaster SC · Self-Correction at 9:01</p>
        </div>

      </div>
    </PageShell>
  )
}
