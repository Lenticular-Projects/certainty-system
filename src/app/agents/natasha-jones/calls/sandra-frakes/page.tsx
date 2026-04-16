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

export default function SandraFrakesCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Call Report</span>
            <span className={styles.dot}>·</span>
            <Link href="/agents/natasha-jones" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Natasha Jones
            </Link>
          </div>
          <h1 className={styles.agentName}>Sandra Frakes</h1>
          <p className={styles.period}>April 15, 2026 · 4:05 · The Money Caller</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(30), fontWeight: 700 }}>30 / 100</span>
            {' · '}MISSED OPPORTUNITY
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(30) }}>30</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>4:05</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 15, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>MISSED OPP</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>HOT lead, no plan presented</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1 · RC2</span>
            <span className={styles.scoreLabel}>Root Causes</span>
            <span className={styles.scoreRange}>SSN surrender · Gold unused</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>
              Sandra Frakes, 83, called from Canton, Ohio pre-sold. At 0:10 she told you exactly why she called:
              &quot;I&apos;m planning on about to give back on $144 a month on my check.&quot; She already knew
              about the Part B giveback benefit. She had Part A and Part B. She was ready. This was as close to a
              guaranteed enrollment as an inbound call gets.
            </p>
            <p>
              The first problem came at 1:25 when Sandra challenged the TPMO disclosure — she heard it as a
              rejection warning. &quot;If you turn me down for this $144, why do I have to talk to you?&quot; You
              responded by explaining compliance. That was the wrong register. Sandra needed to hear &quot;that&apos;s
              just fine print — now let me see if you qualify for the $144&quot; and instead got a justification
              for why the script exists.
            </p>
            <p>
              The call then moved through healthcare decision and nursing home questions without recovering momentum.
              At 3:34 you asked for her SSN. She said: &quot;I&apos;m not giving you my social. I don&apos;t know
              who I&apos;m talking to.&quot; You responded with: &quot;Those are the things I need in order to
              assist you.&quot; Sandra called that nuts and the call ended.
            </p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>
              Your compliance delivery was complete. The TPMO disclaimer at 0:49 included both organizations,
              26 products, Medicare.gov, 1-800-MEDICARE, and state insurance program — all present and delivered
              clearly. You asked the healthcare decision question at 2:35 and the nursing home check at 2:47,
              both in the correct order and even as the call was becoming hostile. When Sandra said she didn&apos;t
              have her Medicare card, you immediately offered an alternative: &quot;We can look you up another
              way&quot; — that&apos;s the correct procedural pivot. Your CMS opening question at 0:05 was
              also correct.
            </p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>
            Sandra told you at 0:10 she wants $144 back on her check. That number is your anchor for the entire
            call. When she challenged the disclosure: &quot;That&apos;s just fine print — now let me see if you
            qualify for the $144.&quot; When she refused SSN: &quot;Sandra, I only need that to pull up your account
            so I can show you how to get that $144 back every month.&quot; The anchor was available at every friction
            point and was never used.
          </p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>
              At 3:34, Sandra said &quot;I don&apos;t know who I&apos;m talking to.&quot; This is a trust
              objection, not a privacy objection. She wasn&apos;t refusing on principle — she was refusing because
              she didn&apos;t feel safe. Your response (&quot;those are the things I need in order to assist
              you&quot;) gave her a reason to hang up rather than a reason to stay.
            </p>
            <p>
              The reframe that saves this call: <em>&quot;Sandra, that&apos;s exactly right — and I respect that.
              My name is Natasha Jones, I&apos;m a licensed insurance agent with MegaCare Insurance Agency. This
              entire call is being recorded by Medicare. The reason I need your Social Security number is the same
              reason your bank needs it — to pull up your account and make sure we&apos;re looking at the right
              file. The only thing standing between you and getting that $144 back on your check every month is
              this one step. If you don&apos;t qualify, I&apos;ll tell you that right now. Can I look you up?&quot;</em>
            </p>
            <p>
              Trust first, credentials second, consumer&apos;s goal third. In that order, every time.
            </p>
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
              { cat: 'Objection Handling', score: 3, max: 15 },
              { cat: 'Call Outcome Quality', score: 3, max: 10 },
              { cat: 'Compliance', score: 12, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>30 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Natasha Jones · Sandra Frakes · April 15, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 (SSN Surrender) · RC2 (Client Gold Ignored) · Canton OH · Part B Giveback Lead</p>
        </div>
      </div>
    </PageShell>
  )
}
