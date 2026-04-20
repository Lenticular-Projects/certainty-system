'use client'

import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Week-Over-Week Data ──────────────────────────────────────────────────────

const wowMetrics = [
  { metric: 'Team Average Score', prior: '56.6 / 100', current: '43 / 100', delta: '−13.6', dir: 'down' as const },
  { metric: 'Calls Reviewed', prior: '128', current: '52', delta: '−76', dir: 'down' as const },
  { metric: 'Enrollment Rate', prior: '32.8%', current: '0%', delta: '−32.8pp', dir: 'down' as const },
  { metric: 'Missed Opportunities', prior: '34 / 128', current: '18 / 52', delta: '34.6%', dir: 'down' as const },
]

// ── Agent Leaderboard — Week of April 13–15 ─────────────────────────────────

const agents = [
  { name: 'Michelle Marrero', slug: 'michelle-marrero', score: 50, calls: 5, enrolled: 0, topFailure: 'Math surrender on close' },
  { name: 'Trestan Daniel', slug: null, score: 44, calls: 3, enrolled: 0, topFailure: 'Handoff at close' },
  { name: 'Tavares Smith', slug: 'tavares-smith', score: 47, calls: 6, enrolled: 0, topFailure: 'Emotional reframe missing' },
  { name: 'German Vivas', slug: 'german-vivas', score: 42, calls: 1, enrolled: 0, topFailure: 'SSN surrender' },
  { name: 'Josner Saintil', slug: 'josner-saintil', score: 40, calls: 2, enrolled: 0, topFailure: 'Medicaid SEP missed' },
  { name: 'Ashley Whitehurst', slug: 'ashley-whitehurst', score: 44, calls: 6, enrolled: 0, topFailure: 'Passive exit accepted' },
  { name: 'Rudy Schprejer', slug: 'rudy-schprejer', score: 44, calls: 9, enrolled: 0, topFailure: 'Callback surrender' },
  { name: 'Alicia Moore Williams', slug: 'alicia-moore-williams', score: 44, calls: 7, enrolled: 0, topFailure: 'First objection surrender' },
  { name: 'Natasha Jones', slug: 'natasha-jones', score: 42, calls: 4, enrolled: 0, topFailure: 'Close never attempted' },
  { name: 'Ratika Kamboj', slug: 'ratika-kamboj', score: 36, calls: 3, enrolled: 0, topFailure: 'Lead qualification failure' },
  { name: 'Marcus Hughes', slug: 'marcus-hughes', score: 35, calls: 6, enrolled: 0, topFailure: 'Client Gold never used' },
]

// ── Patterns ─────────────────────────────────────────────────────────────────

const patterns = [
  {
    title: 'Accepting the first soft exit as a final answer',
    urgency: 'critical' as const,
    freq: '12 of 52 calls',
    summary: '"That\'s okay, thank you." is not a no. A hard no is "I\'m not interested, please don\'t call me again." Everything else is a hesitation — and hesitations have a response. The team is treating soft exits as closed doors when they\'re open windows.',
    move: '"Before you go — you mentioned [the specific thing they wanted]. Give me 60 more seconds and I\'ll show you exactly what it looks like. If it doesn\'t feel right, we hang up friends."',
    moveLabel: 'When the soft exit comes:',
  },
  {
    title: 'Consumer names the close — agent files it and moves on',
    urgency: 'critical' as const,
    freq: '8 of 52 calls',
    summary: 'The consumer tells the agent the exact reason they called — a specific fear, a dollar figure, a benefit they want — and the agent acknowledges it and keeps presenting. The consumer\'s own words are the close. The agent\'s job is to say them back louder.',
    move: '"[Name], you said [their exact words]. That\'s exactly why I want to get you set up today. [Plan name] is built for exactly that situation. Let me confirm your address so we can lock this in."',
    moveLabel: 'When the consumer names the reason:',
  },
  {
    title: 'Math that stops before it humanizes',
    urgency: 'high' as const,
    freq: '10 of 52 calls',
    summary: '"$263 a month" does not hit the same way as "$3,156 a year — that\'s 25% of your monthly income back in your pocket." Agents are presenting numbers and stopping. The humanization step — connecting the dollar figure to the consumer\'s actual life — is what turns a presentation into a close.',
    move: 'State the number → Annualize it → Connect it to something the consumer said → Ask: "Is there any reason we shouldn\'t lock that in today?"',
    moveLabel: 'Three extra sentences:',
  },
  {
    title: 'SEP windows found but not used as urgency',
    urgency: 'high' as const,
    freq: '5 of 52 calls',
    summary: 'SEPs create time-limited enrollment windows. When an agent identifies a SEP and names the window, every call has a reason to act today. When agents miss SEPs or find them and don\'t use them, there\'s no urgency — every call sounds like a plan the consumer can look at in October.',
    move: '"Because you [moved / have Medicaid / qualify for this plan], you have a special enrollment window open right now. That window is time-limited. Your card is right there. Let\'s take care of this now."',
    moveLabel: 'The SEP urgency frame:',
  },
]

// ── Work On ──────────────────────────────────────────────────────────────────

const workOn = [
  {
    title: 'Before you let anyone go — ask one question',
    detail: 'When a consumer gives you a soft exit, don\'t agree and don\'t argue. Ask: "Before you go — give me 60 seconds." That one question keeps the call alive. Nothing else required. Three of Marcus Hughes\'s April 15 calls ended on soft exits that were never challenged. None of those consumers hung up. None of them said no clearly.',
  },
  {
    title: 'When they name a number — stop and write it down',
    detail: 'Barbara Breach said $600/month in medications at 4:11. The call ran 30 more minutes and that number was never totaled into the comparison. Eric Warringer said "I\'d like a 5-star plan" at 9:21. That line was never referenced again. The consumer\'s words are the close. File them, use them.',
  },
  {
    title: 'Three sentences finish the math: number → annualized → their life',
    detail: 'Every agent on this team is getting to the math. No agent on this team is finishing it. "$263 a month" becomes a close when it becomes "$3,156 a year — and Eric, you\'re on $1,017/month SSDI, that\'s a 26% raise." The third sentence is the one that closes.',
  },
  {
    title: 'Medicaid = ask two questions immediately',
    detail: '"Is the state paying your Part B premium?" and "How long have you had Medicaid?" Those two questions open the D-SNP path, confirm INT SEP (open year-round), and create urgency where a normal call has none. German Vivas missed this on April 15. Josner Saintil missed it on the same day.',
  },
]

// ── Helpers ──────────────────────────────────────────────────────────────────

function ScoreColor({ score }: { score: number }) {
  if (score >= 75) return <span style={{ color: 'var(--sage-dark)', fontWeight: 700 }}>{score}</span>
  if (score >= 55) return <span style={{ color: 'var(--mustard-dark)', fontWeight: 700 }}>{score}</span>
  return <span style={{ color: 'var(--terracotta)', fontWeight: 700 }}>{score}</span>
}

const fadeUp = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }

export default function TeamReportPage() {
  const sortedAgents = [...agents].sort((a, b) => b.score - a.score)

  return (
    <main className={styles.page}>
      {/* ── Header ── */}
      <motion.div
        className={styles.header}
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={SPRING}
      >
        <div className={styles.headerMeta}>
          <span className={styles.systemLabel}>The Certainty System</span>
          <span className={styles.dot}>·</span>
          <span className={styles.systemLabel}>Team Report</span>
        </div>
        <h1 className={styles.teamName}>MegaCare Team</h1>
        <p className={styles.period}>Week of April 13–15, 2026</p>
        <p className={styles.updatedAt}>Updated April 16, 2026</p>
      </motion.div>

      {/* ── Score Strip ── */}
      <motion.div
        className={styles.scorecardRow}
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ ...SPRING, delay: 0.05 }}
      >
        <div className={styles.scoreCard}>
          <div className={`${styles.scoreValue} ${styles.scoreValueDown}`}>43</div>
          <div className={styles.scoreLabel}>Week Average</div>
          <div className={styles.scoreRange}>/ 100</div>
          <span className={`${styles.scoreDelta} ${styles.deltaDown}`}>↓ 13.6 from last week</span>
        </div>
        <div className={styles.scoreCard}>
          <div className={styles.scoreValue}>52</div>
          <div className={styles.scoreLabel}>Calls Reviewed</div>
          <div className={styles.scoreRange}>3 days · 11 agents</div>
          <span className={`${styles.scoreDelta} ${styles.deltaNeutral}`}>↓ from 128</span>
        </div>
        <div className={styles.scoreCard}>
          <div className={`${styles.scoreValue} ${styles.scoreValueDown}`}>0%</div>
          <div className={styles.scoreLabel}>Enrollment Rate</div>
          <div className={styles.scoreRange}>0 of 52 reviewed</div>
          <span className={`${styles.scoreDelta} ${styles.deltaDown}`}>↓ from 32.8%</span>
        </div>
        <div className={styles.scoreCard}>
          <div className={styles.scoreValue}>50</div>
          <div className={styles.scoreLabel}>Top Score</div>
          <div className={styles.scoreRange}>Michelle Marrero</div>
          <span className={`${styles.scoreDelta} ${styles.deltaNeutral}`}>↓ from 71.0 (Karimah Ali)</span>
        </div>
      </motion.div>

      {/* ── The One Thing ── */}
      <motion.div
        className={styles.oneThing}
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ ...SPRING, delay: 0.08 }}
      >
        <span className={styles.oneThingLabel}>The One Thing</span>
        <p className={styles.oneThingText}>
          The team found the close 18 times this week and took it zero times — not because the
          plan was wrong or the consumer wasn't qualified, but because the moment arrived and no
          one pushed through it. Every enrollment this week was lost in the last 90 seconds of a call.
        </p>
      </motion.div>

      {/* ── Week-Over-Week ── */}
      <motion.div
        className={styles.section}
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ ...SPRING, delay: 0.1 }}
      >
        <h2 className={styles.sectionTitle}>Week-Over-Week</h2>
        <div className={styles.wowTable}>
          <div className={styles.wowHeader}>
            <span>Metric</span>
            <span>Mar 30 – Apr 3</span>
            <span>Apr 13–15</span>
            <span>Change</span>
          </div>
          {wowMetrics.map((row) => (
            <div key={row.metric} className={styles.wowRow}>
              <span className={styles.wowMetric}>{row.metric}</span>
              <span className={styles.wowValue}>{row.prior}</span>
              <span className={styles.wowValueCurrent}>{row.current}</span>
              <span className={`${styles.wowDelta} ${row.dir === 'down' ? styles.wowDown : styles.wowUp}`}>
                {row.delta}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Agent Leaderboard ── */}
      <motion.div
        className={styles.section}
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ ...SPRING, delay: 0.12 }}
      >
        <h2 className={styles.sectionTitle}>Agent Scores — April 13–15</h2>
        <div className={styles.leaderTable}>
          <div className={styles.leaderHeader}>
            <span>Agent</span>
            <span>Score</span>
            <span>Calls</span>
            <span>Enrolled</span>
            <span>Top Failure</span>
          </div>
          {sortedAgents.map((agent) => (
            <div key={agent.name} className={styles.leaderRow}>
              <span className={styles.agentName}>
                {agent.slug ? (
                  <Link href={`/agents/${agent.slug}`} className={styles.agentLink}>
                    {agent.name}
                  </Link>
                ) : (
                  agent.name
                )}
              </span>
              <span className={styles.leaderScore}>
                <ScoreColor score={agent.score} />
              </span>
              <span className={styles.leaderCalls}>{agent.calls}</span>
              <span>
                <span className={`${styles.pill} ${agent.enrolled > 0 ? styles.pillEnrolled : styles.pillZero}`}>
                  {agent.enrolled > 0 ? agent.enrolled : '—'}
                </span>
              </span>
              <span className={styles.leaderTopFailure}>{agent.topFailure}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Patterns ── */}
      <motion.div
        className={styles.section}
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ ...SPRING, delay: 0.14 }}
      >
        <h2 className={styles.sectionTitle}>Patterns This Week</h2>
        <div className={styles.priorityList}>
          {patterns.map((p) => (
            <div
              key={p.title}
              className={`${styles.priorityCard} ${styles[`priority_${p.urgency}`]}`}
            >
              <div className={styles.priorityHeader}>
                <span className={`${styles.urgencyBadge} ${styles[`badge_${p.urgency}`]}`}>
                  {p.urgency}
                </span>
                <span className={styles.freqBadge}>{p.freq}</span>
                <span className={styles.priorityTitle}>{p.title}</span>
              </div>
              <p className={styles.priorityDetail}>{p.summary}</p>
              <div className={styles.priorityMove}>
                <span className={styles.priorityMoveLabel}>{p.moveLabel}</span>
                <span className={styles.priorityMoveText}>{p.move}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Highest Leverage ── */}
      <motion.div
        className={styles.section}
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ ...SPRING, delay: 0.16 }}
      >
        <h2 className={styles.sectionTitle}>Highest Leverage Call This Week</h2>
        <div className={styles.highlightCard}>
          <span className={styles.highlightLabel}>★ Call of the Week</span>
          <span className={styles.highlightTitle}>
            Michelle Marrero vs. John Pettipas — April 15, 2026 — Score: 68 / 100
          </span>
          <p className={styles.highlightDetail}>
            The consumer agreed to enroll. 47 minutes of clean execution — full discovery,
            doctor verification pivot, loyalty anchor to People's Health. The case was built
            correctly and it worked. The close was lost to a single solvable math problem:
            a giveback gap that created friction at the wrong moment. Every agent on this team
            has the tools Michelle used on this call. The question is using them at the last 90
            seconds — when it counts.
          </p>
        </div>
      </motion.div>

      {/* ── What to Work On ── */}
      <motion.div
        className={styles.section}
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ ...SPRING, delay: 0.18 }}
      >
        <h2 className={styles.sectionTitle}>What to Work On</h2>
        <div className={styles.workOnList}>
          {workOn.map((item, i) => (
            <div key={item.title} className={styles.workOnCard}>
              <span className={styles.workOnNum}>{i + 1}</span>
              <div>
                <div className={styles.workOnTitle}>{item.title}</div>
                <div className={styles.workOnDetail}>{item.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Footer ── */}
      <div className={styles.footer}>
        <span className={styles.footerLeft}>The Certainty System · MegaCare Insurance</span>
        <span className={styles.footerRight}>
          Week of April 13–15, 2026 · Generated April 16, 2026
        </span>
      </div>
    </main>
  )
}
