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

export default function MargaretAtwellCallPage() {
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
            <Link href="/agents/monique-williams" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Monique Williams
            </Link>
          </div>
          <h1 className={styles.agentName}>Margaret Atwell</h1>
          <p className={styles.period}>April 14, 2026 · 47:36 · Greer, SC</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(22), fontWeight: 700 }}>22 / 100</span>
            {' · '}Missed Opportunity · The Frustrated Caller
          </p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(22) }}>22</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>47:36</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1.1rem' }}>MISSED</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Missed Opportunity</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '0.9rem' }}>RC1·RC2·RC3</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Hold loops + Golds missed + no math</span>
          </div>
        </motion.div>

        {/* ── What Happened ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Margaret Atwell was one of the warmest leads of the week. Original Medicare only, no Advantage plan, no dental or vision coverage, lost Extra Help in January 2026 (a DEP SEP), fibromyalgia and arthritis managed by a pain specialist she sees monthly, and she lives alone. Every one of those details was a Client Gold moment. Every one went unused.</p>
            <p>The call lasted 47 minutes. In that time there were 6 hold sequences that killed momentum each time Margaret was ready to move. Five consecutive objections were all surrendered without reframes. The $30 OTC benefit was mentioned as a feature without annualizing it to $360 per year. The $1,000 dental allowance was floated without connecting it to her current $0 dental coverage. At 39:58 Margaret said: &ldquo;This is ridiculous. 40 freaking minutes. I&apos;m done.&rdquo; She had been ready to enroll — the call process burned her out before enrollment ever happened.</p>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Complete compliance under pressure:</strong> Full TPMO disclaimer delivered correctly despite a long and difficult call. Compliance score reflects that you stayed compliant throughout 47 minutes — that is not nothing.</p>
            <p><strong>Lead identification was correct:</strong> You recognized Margaret as a warm inbound lead with real eligibility — Original Medicare only, no Advantage plan. The problem wasn&apos;t failing to identify the opportunity. It was failing to execute on it.</p>
            <p><strong>Pain specialist identified:</strong> Naming Dr. Navneet Gupta and confirming the monthly pain management visits was good discovery. That information should have become the foundation of the benefits math — &ldquo;your copay for those monthly visits goes from X to $0.&rdquo;</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When Margaret said she lives alone and has fibromyalgia, those were your two closes. &ldquo;Margaret, with fibromyalgia and no one else at home, your benefits need to work harder for you. Let me show you the exact math on what changes — your dental goes from zero dollars of coverage to a thousand-dollar allowance, and your OTC benefit adds $360 a year. Can I get your date of birth?&rdquo; Lead with her life, not the product features.</p>
        </motion.div>

        {/* ── The Moment That Decided This Call ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>39:58 — &ldquo;This is ridiculous. 40 freaking minutes. I&apos;m done.&rdquo;</strong></p>
            <p>Margaret didn&apos;t leave because she didn&apos;t want the plan. She left because the process exhausted her. Six hold sequences over 47 minutes — each one breaking the momentum that had been built before it. A consumer who lives alone with chronic pain and no extra support has a low frustration threshold. Every hold felt like another barrier between her and the benefits she needed.</p>
            <p>The math case was real and strong. Lost Extra Help in January (DEP SEP, 3-month window) means she had a legitimate enrollment path available. Monthly pain specialist visits, fibromyalgia, $0 dental and vision — every benefit on the plan closed a real gap in her life. She was motivated. The process failed her.</p>
            <p>The rule on hold time: if a hold is unavoidable, tell the consumer what you&apos;re doing and give them a time estimate before you go. &ldquo;Margaret, I need to pull up your plan options — this takes about 90 seconds. I&apos;m going to stay on the line. Is that okay?&rdquo; That one sentence would have changed her experience of every hold on this call. Five surrendered objections also need to become five reframed objections — starting with the first one. The fifth is always harder because of what the first four set up.</p>
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
              { cat: 'Lead Quality', score: 6, max: 20 },
              { cat: 'Signal Reading', score: 4, max: 20 },
              { cat: 'Math Breakdown', score: 1, max: 20 },
              { cat: 'Objection Handling', score: 2, max: 15 },
              { cat: 'Call Outcome Quality', score: 0, max: 10 },
              { cat: 'Compliance', score: 9, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: row.score === 0 ? 'var(--terracotta)' : scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}>
              <span>Total: <strong>22 / 100</strong></span>
            </div>
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Monique Williams · Margaret Atwell · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC2 · RC3 · DEP SEP · Client Golds Missed · Greer SC</p>
        </div>

      </div>
    </PageShell>
  )
}
