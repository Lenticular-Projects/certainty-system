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

export default function DonnaHicksCallPage() {
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
          <h1 className={styles.agentName}>Donna Hicks</h1>
          <p className={styles.period}>April 14, 2026 · 5:25 · The Benefit Caller</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(38), fontWeight: 700 }}>38 / 100</span>
            {' · '}MISSED OPPORTUNITY
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(38) }}>38</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>5:25</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>MISSED OPP</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Closeable lead lost</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1 · RC2</span>
            <span className={styles.scoreLabel}>Root Causes</span>
            <span className={styles.scoreRange}>SSN premature · Signal undeployed</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>
              Donna Hicks, 81, called from Jefferson County, Alabama after seeing a TV commercial about a $1,200
              grocery card. She had Part A and B confirmed, was cooperative through your name collection and date
              of birth, and even built a genuine warm moment with you — she smiled when you mentioned Donna is your
              godmother&apos;s name. This was a closeable call.
            </p>
            <p>
              The call failed at 3:37 when you asked for her full Social Security number before showing her a single
              plan or naming a dollar amount. Donna offered the last four digits — she was trying to cooperate within
              her comfort zone. You pushed for the full number. When she expressed wanting to do more research
              (&quot;I&apos;m getting this off the TV and I think I want to do a little bit more research&quot;),
              you responded with your 15-year tenure. That confirmed her instinct to be cautious. The call ended with
              &quot;I&apos;ll wait then&quot; and no plan presented, no callback scheduled, no dollar amount ever
              named.
            </p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>
              Your TPMO delivery at 1:22 was complete — two organizations, 26 products, and all three required
              references. The rapport moment at 3:08 was genuine: &quot;Awesome, that&apos;s my godmother&apos;s
              name, so I&apos;ll never forget you.&quot; That kind of authentic human connection is what separates
              good agents from script-readers, and it was the highest-trust point in the call. When Donna didn&apos;t
              have her Medicare card, you correctly pivoted to looking her up by name and DOB — that problem-solving
              kept the call alive past what could have been an early exit.
            </p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>
            Donna called about the $1,200 grocery card — name that number before you ask for anything. &quot;That
            $1,200 grocery card is real — in Jefferson County I&apos;m seeing plans with up to $300 a quarter loaded
            on a prepaid card at Kroger and Walmart. Let me pull up what you qualify for.&quot; Make the benefit
            feel real before the SSN ask, and her instinct to protect her information disappears.
          </p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>
              At 4:11 Donna said: <em>&quot;I don&apos;t know, because there&apos;s so many things that go on and
              I&apos;m getting this off the TV and I think I want to do a little bit more research before I get that
              out.&quot;</em> This is not skepticism about the product — it&apos;s an 81-year-old woman protecting
              herself from what feels like a risky ask. The fear is reasonable. Your response — defending 15 years of
              experience — treated it as a question about your credentials when it was a question about safety.
            </p>
            <p>
              The reframe that saves this call: <em>&quot;Donna, that&apos;s a completely reasonable instinct —
              there is a lot of stuff on TV and you should protect yourself. Here&apos;s what I&apos;d suggest: you
              can verify I&apos;m a licensed Medicare agent at medicare.gov right now. And instead of your Social
              Security number, let me just try your Medicare card number — that blue card that says Medicare Health
              Insurance. Do you have a moment to look for it? I&apos;ll wait.&quot;</em>
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
              { cat: 'Lead Quality', score: 9, max: 20 },
              { cat: 'Signal Reading', score: 5, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 5, max: 15 },
              { cat: 'Call Outcome Quality', score: 4, max: 10 },
              { cat: 'Compliance', score: 15, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>38 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Natasha Jones · Donna Hicks · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 (Premature SSN Request) · RC2 (Client Gold Unquantified) · Jefferson County AL</p>
        </div>
      </div>
    </PageShell>
  )
}
