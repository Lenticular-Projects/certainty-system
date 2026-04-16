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

export default function LavernGrayCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>

        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Call Report</span>
            <span className={styles.dot}>·</span>
            <Link href="/agents/ratika-kamboj" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Ratika Kamboj
            </Link>
          </div>
          <h1 className={styles.agentName}>Lavern Gray</h1>
          <p className={styles.period}>April 14, 2026 · 10:48 · Walterboro, SC</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(44), fontWeight: 700 }}>44 / 100</span>
            {' · '}Incomplete · Stalled in research phase — never pivoted to presentation
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(44) }}>44</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>10:48</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '1.1rem' }}>INCOMPLETE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>No plan presented</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1 · RC3</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Research loop — no pivot</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Lavern Gray is a 69-year-old Walterboro, SC resident who saw a food card TV ad and called in. She is already enrolled in United Healthcare&apos;s Complete Care Chronic Special Needs Plan at $0 premium — appropriate to her cardiovascular history including open heart surgery. At 9:29 you confirmed she receives approximately $91-94/month in OTC/food card benefits. She called because she wanted to know if she could get more.</p>
            <p>Your compliance opening was excellent — one of the cleanest in the batch. TPMO disclaimer at 0:48, SOA at 1:15, Medicare ID collected correctly, full discovery executed. You confirmed her current plan, her qualifying chronic condition, her current OTC amount. By 9:29 you had everything you needed: a motivated consumer, a current plan, a current benefit amount, and a clear comparison to make.</p>
            <p>The call ended at 10:34 while you were still running system checks. Ten minutes and forty-eight seconds, a cooperative consumer, a clear conversion path — and the call ended without a plan presented, a number stated, or a close attempted. The research phase never ended. The presentation phase never started.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Model compliance opening (0:38):</strong> TPMO disclaimer, SOA consent, recorded line, non-obligation statement, health data consent, and callback permission — all delivered in natural conversational sequence before any substantive discovery began. This is the standard every call should reach. You hit it consistently.</p>
            <p><strong>Comprehensive discovery execution (4:00):</strong> Medicare ID, DOB, name, address, active Part A/B, employer coverage, VA benefits, LIS/Medicaid status, current plan, and chronic condition — every qualifying data point captured on a consumer giving short, clipped answers. Running a complete discovery protocol with a terse consumer without losing the thread is real skill.</p>
            <p><strong>Graceful rapport recovery (2:04):</strong> When Lavern pushed back on the &ldquo;calling for someone else&rdquo; question (&ldquo;Why would I call for somebody else?&rdquo;), you recovered naturally — &ldquo;You never know, probably helping someone else&rdquo; — without defensiveness. Small moments like this keep calls on track.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>The moment you see C-SNP plus OTC benefits in the system, stop researching and start presenting. Say it out loud: &ldquo;Ms. Gray, you&apos;re currently getting $91 a month on your food card. I found a plan with more — and it&apos;s still $0. Can I get you set up today so you start getting that extra money next month?&rdquo;</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>9:29 — &ldquo;You are receiving looks like it&apos;s $94, $91 currently on the form of you card also.&rdquo;</strong></p>
            <p>This was your pivot point. You had confirmed her current OTC benefit amount. You had the consumer who called about the food card. You had a C-SNP consumer with a qualifying chronic condition — the exact enrollment profile for an off-AEP close. The research was done. The presentation was one sentence away.</p>
            <p>The sentence you needed: <em>&ldquo;Ms. Gray, you&apos;re currently getting $91 a month on your food card. I found a plan that gives you more — and it&apos;s still $0 out of pocket. Can I get you started today so you get that extra money next month?&rdquo;</em> That is the entire close. Everything before 9:29 was setup for that moment. The call ended at 10:34 with the setup complete and the offer never made.</p>
            <p>Also: at 5:52, Lavern said &ldquo;I come out of pocket with it&rdquo; about her medications. That was Client Gold — financial pain around drug costs is the primary enrollment driver for C-SNP beneficiaries. You said &ldquo;I know, medicines cost a lot, I can imagine.&rdquo; That is empathy, not action. The response that works: &ldquo;I hear you — that&apos;s exactly what I want to fix today. Let me show you what this plan does for your drug costs.&rdquo; Stop the research. Start the pitch.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Score Breakdown</h2>
          <div className={styles.callTable}>
            <div className={styles.callTableHeader}>
              <span>Category</span><span>Score</span><span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 9, max: 20 },
              { cat: 'Signal Reading', score: 5, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 8, max: 15 },
              { cat: 'Call Outcome Quality', score: 5, max: 10 },
              { cat: 'Compliance', score: 15, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>44 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Ratika Kamboj · Lavern Gray · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC3 · C-SNP · OTC Benefits · Research Loop · Walterboro SC</p>
        </div>

      </div>
    </PageShell>
  )
}
