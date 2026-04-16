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

export default function DavidJeffreySmithCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>

        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Call Report</span>
            <span className={styles.dot}>·</span>
            <Link href="/agents/german-vivas" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              German Vivas
            </Link>
          </div>
          <h1 className={styles.agentName}>David Jeffrey Smith</h1>
          <p className={styles.period}>April 15, 2026 · 4:32 · Memphis, TN</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(42), fontWeight: 700 }}>42 / 100</span>
            {' · '}Incomplete · Trust objection surrendered at verification
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(42) }}>42</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>4:32</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 15, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '1.1rem' }}>INCOMPLETE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>SSN refusal — winnable</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1 · RC6</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Surrender + INT SEP missed</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>David Jeffrey Smith is 64, disabled since 1997, and has both Medicaid and Medicare — the ideal D-SNP candidate. He called in asking for extra benefits and an OTC/grocery card allowance. He was cooperative, direct, and actively engaged through name, DOB, and callback number collection. He even volunteered his middle name at 3:05 to distinguish himself from other David Smiths. This is a warm lead who wanted to be helped.</p>
            <p>Your opening and compliance execution were genuinely strong. Full TPMO delivered within the first minute, both eligibility questions asked in correct sequence, callback number confirmed. You were running a clean call. Then at 3:41 you asked for his Social Security Number, and at 4:01 David said: &ldquo;I&apos;m not giving you my social. Sorry, buddy. I don&apos;t trust you.&rdquo;</p>
            <p>Your response was: &ldquo;I get it. I mean, I get it. Bye.&rdquo; The call was over. A consumer who had given you his full name, middle name, birthday, ZIP code, and callback number was lost because you said goodbye before he did. This was a Yellow trust objection — driven by fear, not genuine disinterest — and it was winnable with one sentence.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Full TPMO compliance with no shortcuts (0:34):</strong> Four organizations, 23 products, Medicare.gov, 1-800-Medicare, MegaCare product menu — all delivered correctly within 60 seconds. Clean, professional, and compliant. On a 4-minute call that ended at verification, many agents skip steps. You didn&apos;t.</p>
            <p><strong>Both eligibility questions asked correctly (2:00):</strong> Healthcare decision-maker status and nursing home status — both asked in the right sequence before data collection began. This is often skipped on short calls. You executed correctly.</p>
            <p><strong>You built rapport through Phase I (2:57):</strong> David was cooperative and engaged through the full opening into name and DOB collection. He volunteered his middle name to help you find him. That level of consumer investment does not happen by accident — your opening tone created it. The trust was real until the SSN ask.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a consumer refuses the SSN, never say goodbye — pivot immediately to the Medicare card alternative: &ldquo;Mr. Smith, I completely understand — I wouldn&apos;t give my social to a stranger either. Here&apos;s what we can do: I can look you up with your Medicare card number instead. Do you have that red, white, and blue card nearby?&rdquo;</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>4:04 — &ldquo;I get it. I mean, I get it. Bye.&rdquo;</strong></p>
            <p>David&apos;s SSN refusal was a Yellow objection. He had been cooperative for four minutes. He gave you his middle name. He confirmed his callback number. The refusal at 4:01 was not about you — it was about the words &ldquo;Social Security Number&rdquo; triggering a deeply conditioned privacy response in someone who has been on disability for 30 years and navigated the system alone.</p>
            <p>You had one pivot available and you had 10 seconds to use it. The line: <em>&ldquo;Mr. Smith, I completely understand — and I wouldn&apos;t give my social to someone I just met either. Here&apos;s another way we can do this: I can look you up with your Medicare card number instead. Do you have that red, white, and blue Medicare card anywhere nearby? Even just the first few characters work.&rdquo;</em> That is it. That is the sentence that keeps the call alive.</p>
            <p>Also worth noting: at 1:21 David told you he has Medicaid and Medicare and is looking for extra benefits. That is a direct INT SEP signal — Medicaid-eligible consumers can enroll in a D-SNP any month of the year. Before the SSN even came up, you had a D-SNP conversation available and a zero-premium plan that delivers exactly what David called for. The two things to take from this call: learn the Medicare card pivot, and learn to hear &ldquo;I have Medicaid&rdquo; as an enrollment trigger.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Score Breakdown</h2>
          <div className={styles.callTable}>
            <div className={styles.callTableHeader}>
              <span>Category</span><span>Score</span><span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 8, max: 20 },
              { cat: 'Signal Reading', score: 4, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 6, max: 15 },
              { cat: 'Call Outcome Quality', score: 9, max: 10 },
              { cat: 'Compliance', score: 15, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>42 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · German Vivas · David Jeffrey Smith · April 15, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC6 · INT SEP · D-SNP · Trust Objection · Memphis TN</p>
        </div>

      </div>
    </PageShell>
  )
}
