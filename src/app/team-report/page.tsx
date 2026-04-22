'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Team Trend Snapshot ──────────────────────────────────────────────────────

const trendRows = [
  {
    metric: 'Sales',
    lastWeek: '175',
    thisPeriod: '93',
    movement: '2-day vs. 5-day — pace is strong',
    dir: 'neutral' as const,
  },
  {
    metric: 'Conversion Rate',
    lastWeek: '7.60%',
    thisPeriod: '10.16%',
    movement: '+2.56 pp',
    dir: 'up' as const,
  },
  {
    metric: 'Avg CPA',
    lastWeek: '$171',
    thisPeriod: '$108',
    movement: '−$63',
    dir: 'up' as const,
  },
]

// ── Agent Leaderboard — Apr 20–21 ────────────────────────────────────────────

type MovementDir = 'up' | 'down' | 'neutral' | 'new'

interface Agent {
  name: string
  slug: string
  calls: number
  sales: number
  conv: number | null   // null = no data
  cpa: number | null
  convLastWeek: number | null
}

const agentData: Agent[] = [
  { name: 'Steeve Exalant',       slug: 'steeve-exalant',       calls: 45, sales: 11, conv: 24.44, cpa: 53,  convLastWeek: 13.19 },
  { name: 'Marcus Hughes',        slug: 'marcus-hughes',        calls: 67, sales: 11, conv: 16.42, cpa: 69,  convLastWeek: 6.37 },
  { name: 'Rudy Schprejer',       slug: 'rudy-schprejer',       calls: 31, sales: 6,  conv: 19.35, cpa: 58,  convLastWeek: 7.48 },
  { name: 'Karimah Ali',          slug: 'karimah-ali',          calls: 39, sales: 6,  conv: 15.38, cpa: 50,  convLastWeek: 14.89 },
  { name: 'Natasha Jones',        slug: 'natasha-jones',        calls: 42, sales: 6,  conv: 14.29, cpa: 88,  convLastWeek: 6.43 },
  { name: 'Ashley Whitehurst',    slug: 'ashley-whitehurst',    calls: 58, sales: 7,  conv: 12.07, cpa: 94,  convLastWeek: 5.83 },
  { name: 'Kazimierz Exio',       slug: 'kazimierz-exio',       calls: 16, sales: 2,  conv: 12.50, cpa: 73,  convLastWeek: null },
  { name: 'Jean Pierre Riviere',  slug: 'jean-pierre-riviere',  calls: 46, sales: 5,  conv: 10.87, cpa: 71,  convLastWeek: 7.34 },
  { name: 'Lawrence Morris',      slug: 'lawrence-morris',      calls: 59, sales: 6,  conv: 10.17, cpa: 110, convLastWeek: 10.83 },
  { name: 'Michelle Marrero',     slug: 'michelle-marrero',     calls: 50, sales: 5,  conv: 10.00, cpa: 120, convLastWeek: 5.65 },
  { name: 'Alicia Moore Williams',slug: 'alicia-moore-williams', calls: 29, sales: 3, conv: 10.34, cpa: 118, convLastWeek: 6.67 },
  { name: 'Andres Duran',         slug: 'andres-duran',         calls: 56, sales: 5,  conv: 8.93,  cpa: 141, convLastWeek: 10.64 },
  { name: 'Michael Fernandez',    slug: 'michael-fernandez',    calls: 48, sales: 4,  conv: 8.33,  cpa: 113, convLastWeek: null },
  { name: 'German Vivas',         slug: 'german-vivas',         calls: 51, sales: 4,  conv: 7.84,  cpa: 126, convLastWeek: null },
  { name: 'Tavares Smith',        slug: 'tavares-smith',        calls: 40, sales: 3,  conv: 7.50,  cpa: 154, convLastWeek: 5.43 },
  { name: 'Guillermo Cruz',       slug: 'guillermo-cruz',       calls: 41, sales: 3,  conv: 7.32,  cpa: 155, convLastWeek: 4.76 },
  { name: 'Josner Saintil',       slug: 'josner-saintil',       calls: 29, sales: 2,  conv: 6.90,  cpa: 134, convLastWeek: 4.90 },
  { name: 'Manuel Medrano',       slug: 'manuel-medrano',       calls: 37, sales: 2,  conv: 5.41,  cpa: 231, convLastWeek: 12.96 },
  { name: 'Rosina Klimoski',      slug: 'rosina-klimoski',      calls: 35, sales: 1,  conv: 2.86,  cpa: 430, convLastWeek: 6.09 },
  { name: 'Ratika Kamboj',        slug: 'ratika-kamboj',        calls: 50, sales: 1,  conv: 2.00,  cpa: 547, convLastWeek: 5.17 },
  { name: 'Robert Pegler',        slug: 'robert-pegler',        calls: 46, sales: 0,  conv: 0.00,  cpa: null, convLastWeek: 3.68 },
  { name: 'Jeri Vivas',           slug: 'jeri-vivas',           calls: 0,  sales: 0,  conv: null,  cpa: null, convLastWeek: 4.65 },
  { name: 'Trestan Daniel',       slug: 'trestan-daniel',       calls: 0,  sales: 0,  conv: null,  cpa: null, convLastWeek: 10.96 },
]

type SortKey = 'sales' | 'conv'

function getMovementDir(agent: Agent): MovementDir {
  if (agent.conv === null) return 'neutral'
  if (agent.convLastWeek === null) return 'new'
  const diff = agent.conv - agent.convLastWeek
  if (diff > 0.5) return 'up'
  if (diff < -0.5) return 'down'
  return 'neutral'
}

function MovementBadge({ agent }: { agent: Agent }) {
  const dir = getMovementDir(agent)
  if (dir === 'new') return <span className={styles.movNew}>NEW</span>
  if (dir === 'up') {
    const diff = (agent.conv! - agent.convLastWeek!).toFixed(1)
    return <span className={styles.movUp}>↑ {diff}pp</span>
  }
  if (dir === 'down') {
    const diff = Math.abs(agent.conv! - agent.convLastWeek!).toFixed(1)
    return <span className={styles.movDown}>↓ {diff}pp</span>
  }
  return <span className={styles.movNeutral}>—</span>
}

function ConvCell({ agent }: { agent: Agent }) {
  const dir = getMovementDir(agent)
  if (agent.conv === null) return <span className={styles.cellMuted}>—</span>
  const cls = dir === 'up' ? styles.convUp : dir === 'down' ? styles.convDown : ''
  return <span className={cls}>{agent.conv.toFixed(2)}%</span>
}

// ── Patterns ─────────────────────────────────────────────────────────────────

const patterns = [
  {
    title: 'DST compliance violations',
    urgency: 'critical' as const,
    status: 'emerging' as const,
    agents: 'Robert Pegler, Josner Saintil, Kazimierz Exio',
    summary: 'Three agents proactively raised DST or cited it as a wrong SEP window this period. DST is not a qualifying event. Agents citing it to consumers creates audit exposure and erodes consumer trust when they ask questions the agent cannot answer.',
    fix: 'When a consumer asks about plan timing, confirm their actual qualifying event (Medicaid status, recent move, loss of other coverage). Never volunteer DST as a reason to enroll.',
  },
  {
    title: 'Math stops at the monthly figure',
    urgency: 'high' as const,
    status: 'chronic' as const,
    agents: 'Team-wide (second consecutive week)',
    summary: 'Agents present "$X per month" and stop. The annualized number — "$X × 12 = $Y per year" — is the one that makes the consumer feel the impact. The third sentence, connecting that number to something the consumer said, is the one that closes.',
    fix: 'State the monthly number → annualize it → connect it to what they told you. "That\'s $Y a year — and you said your medications run $Z, that\'s real money back in your pocket."',
  },
  {
    title: 'TPMO script errors',
    urgency: 'high' as const,
    status: 'emerging' as const,
    agents: 'Michelle Marrero ("I\'m Medicare") + others',
    summary: 'TPMO compliance language requires agents to identify the organization they\'re calling from, not misrepresent affiliation with Medicare itself. "I\'m Medicare" is a script error that creates audit risk and can void an enrollment.',
    fix: 'Always open with the TPMO-compliant identification: "This is [Name] with MegaCare Insurance, a licensed insurance agency." Never say "I\'m Medicare" or imply government affiliation.',
  },
]

// ── Top Performers ────────────────────────────────────────────────────────────

const topPerformers = [
  { name: 'Steeve Exalant', slug: 'steeve-exalant', conv: '24.44%', sales: 11, cpa: '$53', note: '11 sales in 45 calls. Highest conversion rate on the team.' },
  { name: 'Marcus Hughes',  slug: 'marcus-hughes',  conv: '16.42%', sales: 11, cpa: '$69', note: '11 sales in 67 calls. Biggest absolute sales volume, up from 6.37% last week.' },
  { name: 'Karimah Ali',    slug: 'karimah-ali',    conv: '15.38%', sales: 6,  cpa: '$50', note: 'Lowest CPA on the team at $50. Consistent output, 2-week hold.' },
]

// ── Turnaround Focus ─────────────────────────────────────────────────────────

const turnaround = [
  {
    name: 'Robert Pegler',
    slug: 'robert-pegler',
    flag: '0 sales · 46 calls',
    detail: '0.00% conversion across 46 calls this period. Call reviews flagged DST compliance issues. Needs immediate coaching on qualifying event identification and close structure.',
  },
  {
    name: 'Ratika Kamboj',
    slug: 'ratika-kamboj',
    flag: '2.00% conversion',
    detail: '1 sale from 50 calls. Down from 5.17% last week. Volume is there — the close is not landing. Review the last 5 calls for close timing and objection response.',
  },
  {
    name: 'Rosina Klimoski',
    slug: 'rosina-klimoski',
    flag: '2.86% conversion',
    detail: '1 sale from 35 calls. Down from 6.09% last week. Two consecutive weeks of decline warrant a one-on-one session before the week closes.',
  },
]

// ── Helpers ──────────────────────────────────────────────────────────────────

const fadeUp = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }

// ── Page ─────────────────────────────────────────────────────────────────────

export default function TeamReportPage() {
  const [sortBy, setSortBy] = useState<SortKey>('sales')

  const sortedAgents = [...agentData].sort((a, b) => {
    if (sortBy === 'sales') return b.sales - a.sales
    const ac = a.conv ?? -1
    const bc = b.conv ?? -1
    return bc - ac
  })

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
        <p className={styles.period}>Week of April 20–22, 2026</p>
        <p className={styles.updatedAt}>Updated April 22, 2026</p>
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
          <div className={`${styles.scoreValue} ${styles.scoreValueUp}`}>10.16%</div>
          <div className={styles.scoreLabel}>Conversion Rate</div>
          <div className={styles.scoreRange}>This Period (2 days)</div>
          <span className={`${styles.scoreDelta} ${styles.deltaUp}`}>↑ 2.56pp from last week</span>
        </div>
        <div className={styles.scoreCard}>
          <div className={styles.scoreValue}>93</div>
          <div className={styles.scoreLabel}>Sales</div>
          <div className={styles.scoreRange}>2 days · 21 agents</div>
          <span className={`${styles.scoreDelta} ${styles.deltaNeutral}`}>175 last week (5 days)</span>
        </div>
        <div className={styles.scoreCard}>
          <div className={`${styles.scoreValue} ${styles.scoreValueUp}`}>$108</div>
          <div className={styles.scoreLabel}>Avg CPA</div>
          <div className={styles.scoreRange}>This Period</div>
          <span className={`${styles.scoreDelta} ${styles.deltaUp}`}>↓ $63 from $171 last week</span>
        </div>
        <div className={styles.scoreCard}>
          <div className={`${styles.scoreValue} ${styles.scoreValueUp}`}>24.44%</div>
          <div className={styles.scoreLabel}>Top Conversion</div>
          <div className={styles.scoreRange}>Steeve Exalant</div>
          <span className={`${styles.scoreDelta} ${styles.deltaUp}`}>↑ from 13.19% last week</span>
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
          Conversion up 2.56 points, CPA down $63 — the coaching is working.
          The gap between the top three agents (15–24% conversion) and the bottom three (0–3%)
          is now the story: this team has a ceiling problem, not a floor problem.
        </p>
      </motion.div>

      {/* ── Team Trend Snapshot ── */}
      <motion.div
        className={styles.section}
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ ...SPRING, delay: 0.10 }}
      >
        <h2 className={styles.sectionTitle}>Team Trend Snapshot</h2>
        <p className={styles.sectionNote}>
          Conversion and CPA compare directly. Sales counts reflect a 2-day vs. 5-day difference.
        </p>
        <div className={styles.trendTable}>
          <div className={styles.trendHeader}>
            <span>Metric</span>
            <span>Last Week (5 days)</span>
            <span>This Period (2 days)</span>
            <span>Movement</span>
          </div>
          {trendRows.map((row) => (
            <div key={row.metric} className={styles.trendRow}>
              <span className={styles.trendMetric}>{row.metric}</span>
              <span className={styles.trendPrior}>{row.lastWeek}</span>
              <span className={styles.trendCurrent}>{row.thisPeriod}</span>
              <span className={
                (row.dir as string) === 'up'
                  ? styles.trendUp
                  : (row.dir as string) === 'down'
                  ? styles.trendDown
                  : styles.trendNeutral
              }>
                {row.movement}
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
        <div className={styles.sectionTitleRow}>
          <h2 className={styles.sectionTitle}>Agent Leaderboard — Apr 20–21</h2>
          <div className={styles.sortToggle}>
            <span className={styles.sortLabel}>Sort by</span>
            <button
              className={`${styles.sortBtn} ${sortBy === 'sales' ? styles.sortBtnActive : ''}`}
              onClick={() => setSortBy('sales')}
            >
              Sales
            </button>
            <button
              className={`${styles.sortBtn} ${sortBy === 'conv' ? styles.sortBtnActive : ''}`}
              onClick={() => setSortBy('conv')}
            >
              Conv %
            </button>
          </div>
        </div>

        <div className={styles.leaderTable}>
          <div className={styles.leaderHeader}>
            <span>Agent</span>
            <span>Calls</span>
            <span>Sales</span>
            <span>Conv %</span>
            <span>CPA</span>
            <span>vs Last Week</span>
          </div>
          {sortedAgents.map((agent) => (
            <div key={agent.name} className={styles.leaderRow}>
              <span className={styles.agentName}>
                <Link href={`/agents/${agent.slug}`} className={styles.agentLink}>
                  {agent.name}
                </Link>
              </span>
              <span className={styles.leaderCalls}>
                {agent.calls > 0 ? agent.calls : <span className={styles.cellMuted}>—</span>}
              </span>
              <span className={styles.leaderSales}>
                {agent.sales > 0
                  ? <strong>{agent.sales}</strong>
                  : <span className={styles.cellMuted}>0</span>}
              </span>
              <span className={styles.leaderConv}>
                <ConvCell agent={agent} />
              </span>
              <span className={styles.leaderCpa}>
                {agent.cpa !== null ? `$${agent.cpa}` : <span className={styles.cellMuted}>—</span>}
              </span>
              <span>
                <MovementBadge agent={agent} />
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Top Performers ── */}
      <motion.div
        className={styles.section}
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ ...SPRING, delay: 0.14 }}
      >
        <h2 className={styles.sectionTitle}>Top Performers — This Period</h2>
        <div className={styles.topPerformers}>
          {topPerformers.map((p, i) => (
            <div key={p.slug} className={styles.topCard}>
              <div className={styles.topRank}>{i + 1}</div>
              <div className={styles.topBody}>
                <div className={styles.topName}>
                  <Link href={`/agents/${p.slug}`} className={styles.agentLink}>{p.name}</Link>
                </div>
                <div className={styles.topMetrics}>
                  <span className={styles.topConv}>{p.conv}</span>
                  <span className={styles.topMeta}>{p.sales} sales · {p.cpa} CPA</span>
                </div>
                <div className={styles.topNote}>{p.note}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Team Patterns ── */}
      <motion.div
        className={styles.section}
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ ...SPRING, delay: 0.16 }}
      >
        <h2 className={styles.sectionTitle}>Team Patterns — This Period</h2>
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
                <span className={`${styles.statusBadge} ${styles[`status_${p.status}`]}`}>
                  {p.status}
                </span>
                <span className={styles.priorityTitle}>{p.title}</span>
              </div>
              <p className={styles.freqLine}>{p.agents}</p>
              <p className={styles.priorityDetail}>{p.summary}</p>
              <div className={styles.priorityMove}>
                <span className={styles.priorityMoveLabel}>Correct move</span>
                <span className={styles.priorityMoveText}>{p.fix}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Turnaround Focus ── */}
      <motion.div
        className={styles.section}
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ ...SPRING, delay: 0.18 }}
      >
        <h2 className={styles.sectionTitle}>Turnaround Focus</h2>
        <div className={styles.turnaroundList}>
          {turnaround.map((t) => (
            <div key={t.slug} className={styles.turnaroundCard}>
              <div className={styles.turnaroundTop}>
                <Link href={`/agents/${t.slug}`} className={`${styles.agentLink} ${styles.turnaroundName}`}>
                  {t.name}
                </Link>
                <span className={styles.turnaroundFlag}>{t.flag}</span>
              </div>
              <p className={styles.turnaroundDetail}>{t.detail}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Footer ── */}
      <div className={styles.footer}>
        <span className={styles.footerLeft}>The Certainty System · MegaCare Insurance</span>
        <span className={styles.footerRight}>
          Week of April 20–22, 2026 · Updated April 22, 2026
        </span>
      </div>
    </main>
  )
}
