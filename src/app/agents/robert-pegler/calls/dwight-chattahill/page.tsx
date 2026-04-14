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

export default function DwightChattahillCallPage() {
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
          <h1 className={styles.agentName}>Dwight Chattahill</h1>
          <p className={styles.period}>April 13, 2026 · 18:47 · Warner, Oklahoma</p>
          <p className={styles.updatedAt}>
            <span style={{ color: 'var(--sage-dark)', fontWeight: 700 }}>56 / 100</span>
            {' · '}Correct No-Sale · Complex — Network Conflict
          </p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(56) }}>56</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>18:47</span>
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
            <span className={styles.scoreRange}>Network incompatible</span>
          </div>
        </motion.div>

        {/* ── What Happened ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Dwight called from Warner, Oklahoma after seeing a Facebook ad about food card benefits. You worked through a compliant open, confirmed he&apos;s on fixed income (&ldquo;can&apos;t afford nothing&rdquo; at 6:34), checked his doctors and medications, explored SEP options including DST and chronic condition pathways, and spent 18 minutes trying to find a way to help him.</p>
            <p>At 16:26 you found the incompatibility: Dwight&apos;s pain management doctor and injection facility aren&apos;t in UHC&apos;s network. UHC is the only carrier available in Muskogee County. There was no viable plan that would cover his existing care. You called it correctly and didn&apos;t push through an enrollment that would have directly harmed his access to treatment. That was the right decision with 18 minutes of your time on the table.</p>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>The correct no-sale (16:26):</strong> When you confirmed that Dwight&apos;s pain management clinic and injection facility weren&apos;t in network — and that UHC was the only carrier in his county — you stopped. You didn&apos;t manufacture an enrollment that would have caused him to lose access to the doctors treating his chronic pain. That decision, made with 18 minutes already invested, is professional integrity. It&apos;s not easy, and it&apos;s the right call.</p>
            <p><strong>Corrected the SSA misinformation:</strong> At some point on the call, Dwight had been told by the Social Security Office that he was in a 12-month trial period that would lock him in. You identified that as incorrect and explained it clearly. That kind of knowledge — knowing what SSA gets wrong — protects consumers from making bad decisions based on bad information. That is the job.</p>
            <p><strong>Financial stress signal picked up (6:34):</strong> When Dwight said he couldn&apos;t afford anything, you immediately pivoted to zero-premium MA options. You heard the signal and responded to it correctly.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>Before you close out any no-sale, set the next step: &ldquo;Dwight, I&apos;m going to make a note in my system. When October rolls around and open enrollment starts, I want to check if any new carriers have come into Muskogee County. Can I give you a call then?&rdquo; A correct no-sale with a future appointment is a pipeline lead. Without it, it&apos;s a dead end.</p>
        </motion.div>

        {/* ── What to Build On ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What to Build On</h2>
          <div className={styles.summaryCard}>
            <p><strong>Dwight&apos;s wife (6:39):</strong> He mentioned his wife has cancer and kidney failure. You asked about it once for rapport and never came back to it. That is the most powerful emotional context in the call — a man on fixed income, wife with cancer, trying to figure out his healthcare. If you had connected the food card and the zero-premium benefit back to that specific situation, the conversation would have had a different weight. &ldquo;Dwight, with everything your wife is going through and the bills that come with that — that&apos;s exactly why this benefit matters. Let me make sure we find everything available to you.&rdquo;</p>
            <p><strong>The stroke disclosure (11:02):</strong> When Dwight mentioned a mild stroke 2–3 months ago, you acknowledged it but didn&apos;t explore the Chronic Special Needs Plan pathway. A stroke within the last year is a potential C-SNP trigger. In this case the network conflict ended the call regardless — but on future calls, any serious diagnosis disclosure should be followed up with: &ldquo;When was that diagnosed? Because there may be a plan specifically designed for that condition.&rdquo;</p>
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
              { cat: 'Lead Quality', score: 13, max: 20 },
              { cat: 'Signal Reading', score: 10, max: 20 },
              { cat: 'Math Breakdown', score: 2, max: 20 },
              { cat: 'Objection Handling', score: 9, max: 15 },
              { cat: 'Call Outcome Quality', score: 8, max: 10 },
              { cat: 'Compliance', score: 12, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}>
              <span>Total: <strong>56 / 100</strong></span>
            </div>
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Robert Pegler · April 13, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>Correct No-Sale · Network Conflict · CSN · Muskogee County · Future Pipeline Lead</p>
        </div>

      </div>
    </PageShell>
  )
}
