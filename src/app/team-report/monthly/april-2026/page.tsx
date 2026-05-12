'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ─── Types ──────────────────────────────────────────────────────────────────

type Tier = 'elite' | 'strong' | 'developing' | 'atrisk'
type SortKey = 'sales' | 'conv'
type Trend = 'up' | 'down' | 'neutral'
type WeekHighlight = 'best' | 'worst' | undefined
type DispositionBorder = 'neutral' | 'red' | 'amber'

interface MetricCard {
  label: string
  value: string
  delta: string
  trend: Trend
}

interface AgentRow {
  rank: number
  name: string
  slug: string
  sales: number
  conv: number
  cpa: number
  tier: Tier
}

interface TierCard {
  tier: Tier
  label: string
  count: number
  sales: number
  avgConv: number
  avgCpa: number
  agents: string[]
}

interface WeekRow {
  week: string
  dates: string
  sales: number
  conv: number
  cpa: number
  highlight?: WeekHighlight
}

interface DispositionCard {
  code: string
  label: string
  count: number
  description: string
  impact?: string
  borderColor: DispositionBorder
}

interface WinRisk {
  title: string
  detail: string
}

interface PriorityAgent {
  name: string
  slug?: string
  statChip: string
  note: string
}

interface WatchAgent {
  name: string
  slug?: string
  note: string
  signal: string
}

interface TierNarrative {
  tier: Tier
  heading: string
  body: string
}

// ─── Data ───────────────────────────────────────────────────────────────────

const metrics: MetricCard[] = [
  { label: 'Total Sales',    value: '772',       delta: '+369 vs March',       trend: 'up'      },
  { label: 'Conversion',     value: '7.04%',     delta: '−0.22pp vs March',    trend: 'neutral' },
  { label: 'CPA',            value: '$161.36',   delta: '+$0.12 vs March',     trend: 'neutral' },
  { label: 'Total Calls',    value: '10,972',    delta: '+97.7% vs March',     trend: 'up'      },
  { label: 'Billable Calls', value: '8,094',     delta: '+68.1% vs March',     trend: 'up'      },
  { label: 'Total Cost',     value: '$124,573',  delta: '+$59,595 vs March',   trend: 'neutral' },
]

const tiers: TierCard[] = [
  {
    tier: 'elite',
    label: 'Elite',
    count: 4,
    sales: 242,
    avgConv: 11.07,
    avgCpa: 102.87,
    agents: ['Marcus', 'Steeve', 'Karimah', 'Michelle'],
  },
  {
    tier: 'strong',
    label: 'Strong',
    count: 8,
    sales: 300,
    avgConv: 8.22,
    avgCpa: 142.77,
    agents: ['Ashley', 'Andres', 'Lawrence', 'Trestan', 'Manuel', 'Rudy', 'Alicia', 'Guillermo'],
  },
  {
    tier: 'developing',
    label: 'Developing',
    count: 5,
    sales: 127,
    avgConv: 5.92,
    avgCpa: 176.37,
    agents: ['Jean Pierre', 'Natasha', 'Jeri', 'Rosina', 'Josner'],
  },
  {
    tier: 'atrisk',
    label: 'At-Risk',
    count: 5,
    sales: 77,
    avgConv: 3.79,
    avgCpa: 276.16,
    agents: ['Michael', 'Tavares', 'Ratika', 'German', 'Casimir'],
  },
]

const tierNarratives: TierNarrative[] = [
  {
    tier: 'elite',
    heading: 'Elite (10%+ conversion) — Marcus Hughes, Steeve Exalant, Karimah Ali, Michelle Marrero.',
    body: "What these four share is consistent close-attempt language and a sustainable workflow under volume. Marcus Hughes ran 705 billable calls and still converted at 11.21%. Karimah Ali converted at 12.86% on 420 billable calls and produced the best CPA on the team at $77.78. Steeve Exalant's volume nearly matched Marcus (554 billable) at 10.65%. Michelle Marrero is the most notable inside this tier: she went from 17 sales in March to 50 sales in April while improving conversion from 7.30% to 9.54%, which is a rare combination of volume gain and rate gain.",
  },
  {
    tier: 'strong',
    heading: 'Strong (7–9.9%) — Ashley Whitehurst, Andres Duran, Lawrence Morris, Trestan Daniel, Manuel Medrano, Rudy Schprejer, Alicia Moore Williams, Guillermo Cruz.',
    body: "This is the deepest tier on the roster and the one with the most coaching leverage. The shared characteristic is solid mid-funnel execution but inconsistent close sequencing. Andres Duran is the standout improver here, jumping from 4.67% in March; his arrival in this tier is the single largest behavioral change on the roster. Lawrence Morris is the cautionary case — he held 11.02% in March and dropped to 7.92% on +163 billable calls. Guillermo Cruz at 9.52% on 231 billable calls and a $107.77 CPA looks elite-adjacent and may belong one tier up if he holds form.",
  },
  {
    tier: 'developing',
    heading: 'Developing (5–6.9%) — Jean Pierre Riviere, Natasha Jones, Jeri Vivas, Rosina Klimoski, Josner Saintil.',
    body: "What holds these five back is conversion efficiency, not effort. Jean Pierre took 557 billable calls to produce 32 sales — high activity, weak close rate. Jeri Vivas dropped from 9.40% to 5.20% on a tripled call volume; she handled the volume but the close language did not scale with it. Natasha Jones and Rosina Klimoski are both new to the roster and tracking near the team mean, which is acceptable for ramp but not yet a base. Josner Saintil came up from 4.92% in March, which is a positive direction but the absolute conversion is still below where the team needs him.",
  },
  {
    tier: 'atrisk',
    heading: 'At-Risk (<5%) — Michael Fernandez, Tavares Smith, Ratika Kamboj, German Vivas, Casimir Exil.',
    body: "What holds this tier in place is the gap between call activity and close-attempt quality. Michael Fernandez ran 422 billable calls — high volume — and converted at 4.27%, producing only 18 sales for $234.56 CPA. Tavares Smith ran 462 billable calls at 3.68% / $305.76 CPA, a worse conversion rate than March on more calls. Ratika Kamboj's drop from 6.26% to 3.52% is the most urgent diagnostic in the report; this isn't a ramp problem, it's a regression. German Vivas is recovering from a zero-sale March and Casimir Exil is new to the roster — both can be coached forward, but neither is currently profitable.",
  },
]

const agents: AgentRow[] = [
  { rank: 1,  name: 'Marcus Hughes',         slug: 'marcus-hughes',         sales: 79, conv: 11.21, cpa: 109.97, tier: 'elite'      },
  { rank: 2,  name: 'Steeve Exalant',         slug: 'steeve-exalant',         sales: 59, conv: 10.65, cpa: 110.80, tier: 'elite'      },
  { rank: 3,  name: 'Karimah Ali',            slug: 'karimah-ali',            sales: 54, conv: 12.86, cpa: 77.78,  tier: 'elite'      },
  { rank: 4,  name: 'Michelle Marrero',       slug: 'michelle-marrero',       sales: 50, conv: 9.54,  cpa: 112.94, tier: 'elite'      },
  { rank: 5,  name: 'Ashley Whitehurst',      slug: 'ashley-whitehurst',      sales: 49, conv: 7.83,  cpa: 149.65, tier: 'strong'     },
  { rank: 6,  name: 'Andres Duran',           slug: 'andres-duran',           sales: 48, conv: 8.41,  cpa: 154.81, tier: 'strong'     },
  { rank: 7,  name: 'Lawrence Morris',        slug: 'lawrence-morris',        sales: 45, conv: 7.92,  cpa: 154.87, tier: 'strong'     },
  { rank: 8,  name: 'Trestan Daniel',         slug: 'trestan-daniel',         sales: 40, conv: 8.18,  cpa: 140.83, tier: 'strong'     },
  { rank: 9,  name: 'Manuel Medrano',         slug: 'manuel-medrano',         sales: 38, conv: 7.42,  cpa: 153.94, tier: 'strong'     },
  { rank: 10, name: 'Jean Pierre Riviere',    slug: 'jean-pierre-riviere',    sales: 32, conv: 5.75,  cpa: 172.50, tier: 'developing' },
  { rank: 11, name: 'Rudy Schprejer',         slug: 'rudy-schprejer',         sales: 31, conv: 8.96,  cpa: 94.27,  tier: 'strong'     },
  { rank: 12, name: 'Natasha Jones',          slug: 'natasha-jones',          sales: 29, conv: 6.94,  cpa: 186.52, tier: 'developing' },
  { rank: 13, name: 'Jeri Vivas',             slug: 'jeri-vivas',             sales: 27, conv: 5.20,  cpa: 192.33, tier: 'developing' },
  { rank: 14, name: 'Alicia Moore Williams',  slug: 'alicia-moore-williams',  sales: 27, conv: 7.56,  cpa: 184.07, tier: 'strong'     },
  { rank: 15, name: 'Guillermo Cruz',         slug: 'guillermo-cruz',         sales: 22, conv: 9.52,  cpa: 107.77, tier: 'strong'     },
  { rank: 16, name: 'Rosina Klimoski',        slug: 'rosina-klimoski',        sales: 21, conv: 5.07,  cpa: 172.50, tier: 'developing' },
  { rank: 17, name: 'Michael Fernandez',      slug: 'michael-fernandez',      sales: 18, conv: 4.27,  cpa: 234.56, tier: 'atrisk'     },
  { rank: 18, name: 'Josner Saintil',         slug: 'josner-saintil',         sales: 18, conv: 6.62,  cpa: 157.80, tier: 'developing' },
  { rank: 19, name: 'Tavares Smith',          slug: 'tavares-smith',          sales: 17, conv: 3.68,  cpa: 305.76, tier: 'atrisk'     },
  { rank: 20, name: 'Ratika Kamboj',          slug: 'ratika-kamboj',          sales: 16, conv: 3.52,  cpa: 326.50, tier: 'atrisk'     },
  { rank: 21, name: 'German Vivas',           slug: 'german-vivas',           sales: 14, conv: 3.15,  cpa: 364.64, tier: 'atrisk'     },
  { rank: 22, name: 'Casimir Exil',           slug: 'casimir-exil',           sales: 12, conv: 4.32,  cpa: 149.33, tier: 'atrisk'     },
]

const weeklyTrend: WeekRow[] = [
  { week: 'W1', dates: 'Mar 30–Apr 5',  sales: 176, conv: 7.61, cpa: 151.95 },
  { week: 'W2', dates: 'Apr 6–Apr 12',  sales: 138, conv: 6.08, cpa: 199.05, highlight: 'worst' },
  { week: 'W3', dates: 'Apr 13–Apr 19', sales: 175, conv: 7.60, cpa: 171.22 },
  { week: 'W4', dates: 'Apr 20–Apr 26', sales: 201, conv: 7.92, cpa: 138.00, highlight: 'best' },
  { week: 'W5', dates: 'Apr 27–May 1',  sales: 215, conv: 7.07, cpa: 137.75, highlight: 'best' },
]

const dispositions: DispositionCard[] = [
  {
    code: 'BSTPLN',
    label: 'Best Plan',
    count: 1311,
    description: 'Consumer is already on the best available plan. Correct exits — no coaching required. Agent made the right call.',
    borderColor: 'neutral',
  },
  {
    code: 'NI',
    label: 'Not Interested',
    count: 1711,
    description: 'Missed opportunities. Consumer disengaged before the agent could complete a proper discovery or present value.',
    impact: '50% conversion = +856 sales, CPA → $76.54. 20% conversion = +342 sales, CPA → $115.79.',
    borderColor: 'red',
  },
  {
    code: 'NOSSN',
    label: 'No SSN',
    count: 292,
    description: 'Sequencing and trust failure. Agent could not obtain SSN to complete enrollment — typically a PII flow breakdown.',
    impact: 'Cutting to 150 = +71 sales, CPA → $147.77.',
    borderColor: 'amber',
  },
  {
    code: 'Long Not Closed',
    label: 'Long — Not Closed',
    count: 689,
    description: 'Long calls that did not end in enrollment. Three stall patterns: late compliance barrier, extended discovery, close attempt never made.',
    borderColor: 'amber',
  },
  {
    code: 'Disconnects',
    label: 'Disconnects',
    count: 2229,
    description: 'Structural and dialer artifact — not agent behavior. Consumer line dropped before agent conversation was established.',
    borderColor: 'neutral',
  },
]

const wins: WinRisk[] = [
  {
    title: 'Andres Duran: 7 → 48 Sales',
    detail: 'Conversion jumped from 4.67% to 8.41% — the single largest agent improvement on the roster in April.',
  },
  {
    title: 'Manuel Medrano: Near-Zero to 38 Sales',
    detail: 'Went from 2 sales in March at 1.07% to 38 sales at 7.42% — a breakout month that confirms the behavioral change is real.',
  },
  {
    title: 'Karimah Ali: Best Unit Economics on the Roster',
    detail: 'She posted $77.78 CPA at 12.86% conversion — the benchmark every agent on the team is measured against.',
  },
]

const risks: WinRisk[] = [
  {
    title: 'Ratika Kamboj: Sharpest Regression',
    detail: 'Dropped from 37 sales at 6.26% to 16 sales at 3.52% — requires direct diagnostic in week 1 of May.',
  },
  {
    title: 'Lawrence Morris: Elite-to-Strong Slip',
    detail: 'Conversion fell from 11.02% to 7.92% on significantly scaled volume — efficiency did not hold under load.',
  },
  {
    title: 'At-Risk Tier: $276 Avg CPA',
    detail: 'Five agents producing only 10% of total sales at an average $276 CPA — a structural drag on team economics.',
  },
]

const priorityAgents: PriorityAgent[] = [
  { name: 'Rudy Schprejer',        slug: 'rudy-schprejer',        statChip: '31 sales · 8.96% · $94.27 CPA',   note: 'Late-month dip warrants re-anchoring close cadence heading into May.' },
  { name: 'Guillermo Cruz',        slug: 'guillermo-cruz',        statChip: '22 sales · 9.52% · $107.77 CPA',  note: 'Has the language — the intervention is more billable calls, not technique.' },
  { name: 'Casimir Exil',          slug: 'casimir-exil',          statChip: '12 sales · 4.32%',                note: 'Front-loaded month; late-April drop is the concern, not the overall count.' },
  { name: 'Andres Duran',          slug: 'andres-duran',          statChip: '48 sales · 8.41%',                note: 'Preserve the behavioral change — reinforce what made April work.' },
  { name: 'Josner Saintil',        slug: 'josner-saintil',        statChip: '18 sales · 6.62%',                note: 'Activity continuity is the intervention — keep him in the phone.' },
  { name: 'Jean Pierre Riviere',   slug: 'jean-pierre-riviere',   statChip: '32 sales · 5.75% · 29 NOSSN',     note: 'Trust-building before the PII ask is the primary coaching lever.' },
  { name: 'Alicia Moore Williams', slug: 'alicia-moore-williams', statChip: '27 sales · 7.56%',                note: 'Rhythm and consistency — she has the skills, needs the routine.' },
  { name: 'Natasha Jones',         slug: 'natasha-jones',         statChip: '29 sales · 6.94%',                note: 'One objection tightening away from breaking 7.5%.' },
  { name: 'Michael Fernandez',     slug: 'michael-fernandez',     statChip: '18 sales · 4.27% · 422 billable', note: '422 billable calls should produce 30+ — the volume is there, the close is not.' },
  { name: 'Tavares Smith',         slug: 'tavares-smith',         statChip: '17 sales · 3.68%',                note: 'April 15 coaching session did not move the needle — needs a different approach.' },
  { name: 'Nicholas Calderon',                                    statChip: '3 sales',                         note: 'Get to activity baseline first before evaluating conversion patterns.' },
]

const watchAgents: WatchAgent[] = [
  { name: 'Nicholas Calderon',                                   note: 'Too small to evaluate — first full month needed',           signal: '3 sales total' },
  { name: 'Shanna Grey',           note: 'Watching through May — small sample only',                                                  signal: '~7.22% on small sample' },
  { name: 'Karissa Nicole Rogers', note: 'Elite-adjacent if it holds at scale — watching closely',                                    signal: '~12.50% on small sample' },
]

// ─── Animation ──────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show:   { opacity: 1, y: 0 },
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function tierLabel(tier: Tier): string {
  const map: Record<Tier, string> = {
    elite: 'Elite',
    strong: 'Strong',
    developing: 'Developing',
    atrisk: 'At-Risk',
  }
  return map[tier]
}

// ─── Component ──────────────────────────────────────────────────────────────

export default function AprilMonthlyReport() {
  const [sortBy, setSortBy] = useState<SortKey>('sales')
  const [showAllAgents, setShowAllAgents] = useState(false)
  const [showAllPriority, setShowAllPriority] = useState(false)

  const sortedAgents = [...agents].sort((a, b) =>
    sortBy === 'sales' ? b.sales - a.sales : b.conv - a.conv
  )
  const visibleAgents = showAllAgents ? sortedAgents : sortedAgents.slice(0, 8)
  const visiblePriority = showAllPriority ? priorityAgents : priorityAgents.slice(0, 4)

  return (
    <main className={styles.page}>

      {/* ── Section 1: Header ───────────────────────────────────────────── */}
      <motion.header
        className={styles.header}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ ...SPRING, delay: 0 }}
      >
        <div className={styles.chipRow}>
          <span className={styles.chip}>The Certainty System</span>
          <span className={styles.chip}>Team Monthly Report</span>
        </div>
        <h1 className={styles.pageTitle}>April 2026</h1>
        <p className={styles.dateRange}>April 1–30, 2026</p>
        <p className={styles.issued}>Issued May 3, 2026</p>
      </motion.header>

      {/* ── Section 2: Key Metrics Strip ────────────────────────────────── */}
      <motion.section
        className={styles.section}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ ...SPRING, delay: 0.04 }}
      >
        <p className={styles.sectionLabel}>Key Metrics — April vs March</p>
        <div className={styles.metricsGrid}>
          {metrics.map((m) => (
            <div key={m.label} className={styles.metricCard}>
              <span className={styles.metricLabel}>{m.label}</span>
              <span className={styles.metricValue}>{m.value}</span>
              <span className={`${styles.metricDelta} ${styles[`trend-${m.trend}`]}`}>
                {m.delta}
              </span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── Section 3: The Month in One Page ────────────────────────────── */}
      <motion.section
        className={`${styles.section} ${styles.darkSection}`}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ ...SPRING, delay: 0.08 }}
      >
        <p className={styles.sectionLabelLight}>The Month in One Page</p>
        <ul className={styles.bulletList}>
          <li>Volume nearly doubled: 5,550 to 10,972 calls (+97.7%) — the team absorbed the volume without breaking.</li>
          <li>CPA held flat at $161.36 — within twelve cents of March despite $59K in additional spend.</li>
          <li>The team is split: Elite and Strong (12 agents) drove 70.2% of production; At-Risk (5 agents) averaged $276 CPA.</li>
          <li>Biggest improver: Andres Duran (7 to 48 sales, 4.67% to 8.41% conversion).</li>
          <li>Biggest concern: Ratika Kamboj (37 to 16 sales, 6.26% to 3.52%) — requires direct diagnostic in week 1 of May.</li>
        </ul>
      </motion.section>

      {/* ── Section 4: Tier Breakdown ───────────────────────────────────── */}
      <motion.section
        className={styles.section}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ ...SPRING, delay: 0.12 }}
      >
        <p className={styles.sectionLabel}>Tier Breakdown</p>
        <div className={styles.tierGrid}>
          {tiers.map((t) => (
            <div key={t.tier} className={`${styles.tierCard} ${styles[`tier-${t.tier}`]}`}>
              <div className={styles.tierHeader}>
                <span className={styles.tierName}>{t.label}</span>
                <span className={styles.tierCount}>{t.count} agents</span>
              </div>
              <div className={styles.tierStats}>
                <div className={styles.tierStat}>
                  <span className={styles.tierStatValue}>{t.avgConv.toFixed(2)}%</span>
                  <span className={styles.tierStatLabel}>avg conv</span>
                </div>
                <div className={styles.tierStat}>
                  <span className={styles.tierStatValue}>${t.avgCpa.toFixed(2)}</span>
                  <span className={styles.tierStatLabel}>avg CPA</span>
                </div>
                <div className={styles.tierStat}>
                  <span className={styles.tierStatValue}>{t.sales}</span>
                  <span className={styles.tierStatLabel}>sales</span>
                </div>
              </div>
              <p className={styles.tierAgents}>{t.agents.join(', ')}</p>
            </div>
          ))}
        </div>

        <div className={styles.tierNarrativeList}>
          {tierNarratives.map((n) => (
            <div key={n.tier} className={`${styles.tierNarrativeItem} ${styles[`tierNarrative-${n.tier}`]}`}>
              <p className={styles.tierNarrativeText}>
                <strong className={styles.tierNarrativeHeading}>{n.heading}</strong>{' '}
                {n.body}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── Section 5: Roster Scorecard ─────────────────────────────────── */}
      <motion.section
        className={styles.section}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ ...SPRING, delay: 0.16 }}
      >
        <div className={styles.sectionHeaderRow}>
          <div>
            <p className={styles.sectionLabel}>Roster Scorecard</p>
            <h2 className={styles.sectionTitle}>April 2026 — All Agents</h2>
          </div>
          <div className={styles.sortToggle}>
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
              Conv%
            </button>
          </div>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.thRank}>#</th>
                <th className={styles.thAgent}>Agent</th>
                <th className={styles.thNum}>Sales</th>
                <th className={styles.thNum}>Conv%</th>
                <th className={styles.thNum}>CPA</th>
                <th className={styles.thTier}>Tier</th>
              </tr>
            </thead>
            <tbody>
              {visibleAgents.map((a) => (
                <tr key={a.slug} className={styles.tr}>
                  <td className={styles.tdRank}>{a.rank}</td>
                  <td className={styles.tdAgent}>
                    <Link href={`/agents/${a.slug}`} className={styles.agentLink}>
                      {a.name}
                    </Link>
                  </td>
                  <td className={styles.tdNum}>{a.sales}</td>
                  <td className={styles.tdNum}>{a.conv.toFixed(2)}%</td>
                  <td className={styles.tdNum}>${a.cpa.toFixed(2)}</td>
                  <td className={styles.tdTier}>
                    <span className={`${styles.tierPill} ${styles[`pill-${a.tier}`]}`}>
                      {tierLabel(a.tier)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.expandRow}>
          <button
            className={styles.expandBtn}
            onClick={() => setShowAllAgents((v) => !v)}
          >
            {showAllAgents ? 'Show fewer' : `Show all 22 agents`}
          </button>
        </div>
      </motion.section>

      {/* ── Section 6: Weekly CPA Trend ─────────────────────────────────── */}
      <motion.section
        className={styles.section}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ ...SPRING, delay: 0.20 }}
      >
        <p className={styles.sectionLabel}>Weekly CPA Trend</p>
        <h2 className={styles.sectionTitle}>April 2026 — Week by Week</h2>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.thRank}>Week</th>
                <th className={styles.thAgent}>Dates</th>
                <th className={styles.thNum}>Sales</th>
                <th className={styles.thNum}>Conv%</th>
                <th className={styles.thNum}>CPA</th>
              </tr>
            </thead>
            <tbody>
              {weeklyTrend.map((w) => (
                <tr
                  key={w.week}
                  className={`${styles.tr} ${
                    w.highlight === 'worst' ? styles.rowWorst :
                    w.highlight === 'best'  ? styles.rowBest  : ''
                  }`}
                >
                  <td className={styles.tdRank}>{w.week}</td>
                  <td className={styles.tdAgent}>{w.dates}</td>
                  <td className={styles.tdNum}>{w.sales}</td>
                  <td className={styles.tdNum}>{w.conv.toFixed(2)}%</td>
                  <td className={styles.tdNum}>${w.cpa.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className={styles.trendNote}>
          The team got more efficient as the month progressed — W2 was the floor at $199.05; W4 and W5 closed at $137–138.
        </p>
      </motion.section>

      {/* ── Section 7: Disposition Analysis ────────────────────────────── */}
      <motion.section
        className={styles.section}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ ...SPRING, delay: 0.24 }}
      >
        <p className={styles.sectionLabel}>Disposition Analysis</p>
        <h2 className={styles.sectionTitle}>Where the Time Went</h2>

        <div className={styles.dispositionGrid}>
          {dispositions.map((d) => (
            <div
              key={d.code}
              className={`${styles.dispositionCard} ${styles[`border-${d.borderColor}`]}`}
            >
              <div className={styles.dispHeader}>
                <span className={styles.dispCode}>{d.code}</span>
                <span className={styles.dispCount}>{d.count.toLocaleString()}</span>
              </div>
              <p className={styles.dispLabel}>{d.label}</p>
              <p className={styles.dispDesc}>{d.description}</p>
              {d.impact && (
                <div className={styles.dispImpact}>
                  {d.impact}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── Section 8: Top Wins / Top Risks ─────────────────────────────── */}
      <motion.section
        className={styles.section}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ ...SPRING, delay: 0.28 }}
      >
        <p className={styles.sectionLabel}>Performance Highlights</p>
        <div className={styles.winsRisksGrid}>
          <div className={`${styles.winsPanel}`}>
            <h3 className={styles.panelTitle}>Top 3 Wins</h3>
            {wins.map((w, i) => (
              <div key={i} className={styles.winRiskItem}>
                <strong className={styles.winRiskTitle}>{w.title}</strong>
                <p className={styles.winRiskDetail}>{w.detail}</p>
              </div>
            ))}
          </div>
          <div className={`${styles.risksPanel}`}>
            <h3 className={styles.panelTitle}>Top 3 Risks</h3>
            {risks.map((r, i) => (
              <div key={i} className={styles.winRiskItem}>
                <strong className={styles.winRiskTitle}>{r.title}</strong>
                <p className={styles.winRiskDetail}>{r.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Section 9: Priority Agents ──────────────────────────────────── */}
      <motion.section
        className={styles.section}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ ...SPRING, delay: 0.32 }}
      >
        <p className={styles.sectionLabel}>May Interventions</p>
        <h2 className={styles.sectionTitle}>11 Priority Agents</h2>

        <div className={styles.priorityList}>
          {visiblePriority.map((a) => (
            <div key={a.name} className={styles.priorityItem}>
              <div className={styles.priorityTop}>
                {a.slug ? (
                  <Link href={`/agents/${a.slug}`} className={styles.priorityName}>
                    {a.name}
                  </Link>
                ) : (
                  <span className={styles.priorityName}>{a.name}</span>
                )}
                <span className={styles.statChip}>{a.statChip}</span>
              </div>
              <p className={styles.priorityNote}>{a.note}</p>
            </div>
          ))}
        </div>

        <div className={styles.expandRow}>
          <button
            className={styles.expandBtn}
            onClick={() => setShowAllPriority((v) => !v)}
          >
            {showAllPriority ? 'Show fewer' : 'Show all 11 agents'}
          </button>
        </div>
      </motion.section>

      {/* ── Section 10: New Agents Under Watch ──────────────────────────── */}
      <motion.section
        className={styles.section}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ ...SPRING, delay: 0.36 }}
      >
        <p className={styles.sectionLabel}>New Agents</p>
        <h2 className={styles.sectionTitle}>Under Watch</h2>

        <div className={styles.watchList}>
          {watchAgents.map((a) => (
            <div key={a.name} className={styles.watchItem}>
              <div className={styles.watchTop}>
                {a.slug ? (
                  <Link href={`/agents/${a.slug}`} className={styles.watchName}>
                    {a.name}
                  </Link>
                ) : (
                  <span className={styles.watchName}>{a.name}</span>
                )}
                <span className={styles.watchSignal}>{a.signal}</span>
              </div>
              <p className={styles.watchNote}>{a.note}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── Section 11: Footer ──────────────────────────────────────────── */}
      <motion.footer
        className={styles.footer}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ ...SPRING, delay: 0.40 }}
      >
        <p className={styles.footerText}>
          The Certainty System · MegaCare Insurance · April 2026 · Issued May 3, 2026
        </p>
      </motion.footer>

    </main>
  )
}
