'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import { useState } from 'react'
import styles from './page.module.css'

// ── Mid-Week Report: April 20–22, 2026 ──────────────────────────────────────

// ── CRM Trend Snapshot ──────────────────────────────────────────────────────
const trendRows = [
  { metric: 'Sales',      lastWeek: '19',       thisPeriod: '11',      movement: '+11 in 2 days', dir: 'up'   as const },
  { metric: 'Conversion', lastWeek: '13.19%',   thisPeriod: '24.44%',  movement: '+11.25pp',      dir: 'up'   as const },
  { metric: 'CPA',        lastWeek: '$108.37',  thisPeriod: '$52.82',  movement: '−$55.55',       dir: 'up'   as const },
]

// ── Calls this period ────────────────────────────────────────────────────────
const callsByDate = [
  {
    date: 'Monday, April 20',
    calls: [
      {
        consumer: 'Petra Luna',
        duration: '43:47',
        score: 75,
        outcome: 'ENROLLED',
        outcomeNote: null,
        type: 'The Mover — MOV SEP, Health Springs, Greenville SC',
        href: '/agents/steeve-exalant/calls/petra-luna',
      },
    ],
  },
  {
    date: 'Tuesday, April 21',
    calls: [
      {
        consumer: 'Leonard McQuirk',
        duration: '36:05',
        score: 77,
        outcome: 'ENROLLED',
        outcomeNote: null,
        type: 'The Money Caller — MCD SEP, Aetna Dual Care PPO, Oklahoma',
        href: '/agents/steeve-exalant/calls/leonard-mcquirk',
      },
    ],
  },
]

// ── Patterns (Chronic · Emerging · Resolved) ─────────────────────────────────
const patterns = {
  chronic: [
    {
      rc: 'RC3',
      title: 'Math stated, never stacked',
      summary: 'Monthly figures are landing. Annual totals never are. Both calls this period have the same gap — the number Leonard or Petra heard was the monthly one, never the year.',
      fix: 'After the last benefit: "Add it up — $X a month is $Y a year, all for $0." One sentence. Say it every time.',
    },
    {
      rc: 'RC4',
      title: 'Recording consent informal',
      summary: 'On Petra Luna, "I\'m the presentation with Medicare and the Recorder" at 0:02 is not a formal consent request. This is a recurring compliance audit flag.',
      fix: 'First words every call: "This call may be recorded — do I have your permission?" Clean, direct, done.',
    },
  ],
  emerging: [
    {
      rc: 'RC1',
      title: 'HRA timing — position it before farewell',
      summary: 'On the Petra Luna call, the health risk assessment was left incomplete because the consumer said goodbye before it was done. This is new — your post-enrollment sequencing needs adjustment.',
      fix: 'Frame the HRA immediately after voice signature: "Quick health questions — 2 minutes, helps them set up your care right." Do it before the loyalty anchor, not after.',
    },
  ],
  resolved: [
    {
      rc: 'RC1',
      title: 'Third party blind spot',
      summary: 'The Andre Young call (Apr 16) — 32 minutes of strong work erased when his wife entered at 32:18. No third party situations this period. The ask is in rotation.',
      fix: 'Pattern resolved this period. Keep the opener: "Do you typically make decisions like this on your own?"',
    },
    {
      rc: 'RC3',
      title: 'Anti-shopping language at close',
      summary: 'The Norman Weaver compliance flag from Apr 16 — "anyone who tells you there\'s more is lying" — did not reappear on either Apr 20–21 call.',
      fix: 'Holding. Correct language confirmed on both calls this period.',
    },
  ],
}

// ── Report History ───────────────────────────────────────────────────────────
const reportHistory = [
  {
    label: 'Apr 22 · Mid-Week Report',
    meta: 'Sales: 11 ↑ · CPA: $53 ↓',
    active: true,
  },
  {
    label: 'Apr 20 · Weekly Brief — Apr 13–17',
    meta: 'Avg: 66 · 8 calls · 3 enrolled',
    active: false,
  },
  {
    label: 'Apr 16 · Weekly Brief — Apr 14',
    meta: 'Avg: 62',
    active: false,
  },
]

// ── Helpers ──────────────────────────────────────────────────────────────────
function outcomeClass(outcome: string) {
  if (outcome === 'ENROLLED') return styles.pillEnrolled
  if (outcome === 'MISSED OPPORTUNITY') return styles.pillMissed
  if (outcome === 'INCOMPLETE') return styles.pillIncomplete
  if (outcome === 'CORRECT NO-SALE') return styles.pillNeutral
  return styles.pillNeutral
}

function scoreColor(score: number) {
  if (score >= 75) return 'var(--sage-dark)'
  if (score >= 55) return 'var(--mustard-dark)'
  return 'var(--terracotta)'
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function SteeveExalantPage() {
  const [showCalls, setShowCalls] = useState(true)

  return (
    <PageShell signal="green">
      <div className={styles.page}>

        {/* ── Header ── */}
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Mid-Week Report</span>
          </div>
          <h1 className={styles.agentName}>Steeve Exalant</h1>
          <p className={styles.period}>Week of April 20–22, 2026</p>
          <p className={styles.updatedAt}>Updated April 22 · 2 calls reviewed</p>
        </motion.div>

        {/* ── Trend Snapshot ── */}
        <motion.div className={styles.trendSnapshot} {...SPRING}>
          <h2 className={styles.sectionTitle}>CRM Trend Snapshot</h2>
          <div className={styles.trendTable}>
            <div className={styles.trendHeader}>
              <span>Metric</span>
              <span>Last Week (Apr 13–17)</span>
              <span>This Period (Apr 20–21)</span>
              <span>Movement</span>
            </div>
            {trendRows.map((row) => (
              <div key={row.metric} className={styles.trendRow}>
                <span className={styles.trendMetric}>{row.metric}</span>
                <span className={styles.trendPrior}>{row.lastWeek}</span>
                <span className={styles.trendCurrent}>{row.thisPeriod}</span>
                <span className={(row.dir as string) === 'up' ? styles.trendUp : (row.dir as string) === 'down' ? styles.trendDown : styles.trendNeutral}>
                  {row.movement}
                </span>
              </div>
            ))}
          </div>
          <p className={styles.trendContext}>
            11 sales in 2 days — on pace to blow last week&apos;s 19 out of the water. Conversion up from 13.19% to 24.44%. CPA dropped from $108 to $52.82 — <strong>best CPA on the team right now.</strong>
          </p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(76) }}>76</span>
            <span className={styles.scoreLabel}>Period Average</span>
            <span className={styles.scoreRange}>Apr 20–21 · 2 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>2</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 20–21, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>2</span>
            <span className={styles.scoreLabel}>Enrolled</span>
            <span className={styles.scoreRange}>0 Missed · 0 No-Sale</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>RC3</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Math not annualized</span>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>
            You&apos;re enrolling on instinct and it&apos;s working &mdash; 24.44% conversion, $52 CPA, two clean enrollments in two days. The next level is the math close. After the last benefit, every time, say: &ldquo;Add it up &mdash; that&apos;s $X a year, all at $0 a month.&rdquo; Petra never heard $2,220 a year. Leonard never heard $5,000 in annual benefits. Those lines make the decision feel undeniable. You&apos;re already getting the yes &mdash; imagine how fast it closes when the number lands.
          </p>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p><strong>What&apos;s working:</strong> two days, two enrollments, two consumers who needed real help and got it. On the Petra Luna call, you caught the MOV SEP at 0:48 — the second she said she moved, you already knew what that meant. You kept a 79-year-old missionary on track for 44 minutes while she jumped between topics, and you found her two doctors before she even asked. On Leonard McQuirk, you were reading signals the whole time: &ldquo;just hungry&rdquo; at 2:04 became the food card; a missed appointment because of no gas at 9:43 became the transportation benefit; five strokes and a six-mile hospital walk at 25:11 became the loyalty anchor. Your instinct for connecting benefits to stated problems in real time is elite-level. The compliance execution on Leonard was clean &mdash; full boilerplate, warm frame, all seven Phase VI elements present. And your post-enrollment service is above and beyond: texting Medicare numbers, finding in-network doctors, giving your direct line. That&apos;s what builds a retention rate.</p>
            <p><strong>What&apos;s costing you:</strong> the math close. On both calls, you named the benefits &mdash; $185 a month, $165 a month, $2,000 for implants &mdash; and never stacked them. Petra Luna opened the call by saying she has nothing. You never told her &ldquo;$185 a month is $2,220 a year going back onto your check.&rdquo; Leonard is a man who skipped breakfast and has been unable to get stroke therapy for months. You never told him &ldquo;between the food card, the vision increase, the dental allowance, and the transportation &mdash; that&apos;s over $5,000 in benefits this year.&rdquo; These aren&apos;t missed enrollments &mdash; you got both. But the annualized total is the line that makes the decision feel permanent rather than incidental. Start using it.</p>
          </div>
        </motion.div>

        {/* ── YOUR TELLS ── */}
        <motion.div className={styles.yourTells} {...SPRING}>
          <div className={styles.yourTellsHeader}>
            <span className={styles.yourTellsLabel}>YOUR TELLS</span>
            <span className={styles.yourTellsBadge}>NEEDS MORE DATA</span>
          </div>
          <p className={styles.yourTellsBody}>
            Your Tells tracks the behavioral delta between enrolled and missed calls &mdash; the specific moves you make when you win vs. when you don&apos;t. This period has 2 reviewed calls, both enrolled. The pattern requires at least 3 reviewed calls including at least one non-enroll outcome. Check back in the next full weekly report.
          </p>
        </motion.div>

        {/* ── Patterns Grid ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Patterns</h2>
          <div className={styles.patternsGrid}>

            {/* Chronic */}
            <div className={styles.patternColumn}>
              <div className={styles.patternColumnHeader}>
                <span className={styles.patternColumnLabel}>CHRONIC</span>
                <span className={styles.patternColumnCount}>{patterns.chronic.length}</span>
              </div>
              <div className={styles.patternCardList}>
                {patterns.chronic.map((p, i) => (
                  <div key={i} className={`${styles.patternCard} ${styles.patternCardChronic}`}>
                    <div className={styles.patternCardTop}>
                      <span className={styles.patternRc}>{p.rc}</span>
                      <span className={styles.patternTitle}>{p.title}</span>
                    </div>
                    <p className={styles.patternSummary}>{p.summary}</p>
                    <p className={styles.patternFix}><strong>Instead:</strong> {p.fix}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Emerging */}
            <div className={styles.patternColumn}>
              <div className={styles.patternColumnHeader}>
                <span className={styles.patternColumnLabel}>EMERGING</span>
                <span className={styles.patternColumnCount}>{patterns.emerging.length}</span>
              </div>
              <div className={styles.patternCardList}>
                {patterns.emerging.map((p, i) => (
                  <div key={i} className={`${styles.patternCard} ${styles.patternCardEmerging}`}>
                    <div className={styles.patternCardTop}>
                      <span className={styles.patternRc}>{p.rc}</span>
                      <span className={styles.patternTitle}>{p.title}</span>
                    </div>
                    <p className={styles.patternSummary}>{p.summary}</p>
                    <p className={styles.patternFix}><strong>Instead:</strong> {p.fix}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Resolved */}
            <div className={styles.patternColumn}>
              <div className={styles.patternColumnHeader}>
                <span className={styles.patternColumnLabel}>RESOLVED</span>
                <span className={styles.patternColumnCount}>{patterns.resolved.length}</span>
              </div>
              <div className={styles.patternCardList}>
                {patterns.resolved.map((p, i) => (
                  <div key={i} className={`${styles.patternCard} ${styles.patternCardResolved}`}>
                    <div className={styles.patternCardTop}>
                      <span className={styles.patternRc}>{p.rc}</span>
                      <span className={styles.patternTitle}>{p.title}</span>
                    </div>
                    <p className={styles.patternSummary}>{p.summary}</p>
                    <p className={styles.patternFix}><strong>Status:</strong> {p.fix}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

        {/* ── Calls (Collapsible) ── */}
        <motion.div className={styles.section} {...SPRING}>
          <div className={styles.collapsibleCallsHeader}>
            <h2 className={styles.sectionTitle} style={{ marginBottom: 0, paddingBottom: 0, border: 'none' }}>
              This Period&apos;s Calls
            </h2>
            <button
              className={styles.collapsibleCallsToggle}
              onClick={() => setShowCalls(!showCalls)}
            >
              {showCalls ? 'Hide' : 'Show'} calls
            </button>
          </div>

          {showCalls && (
            <div style={{ marginTop: '20px' }}>
              {callsByDate.map((group) => (
                <div key={group.date} style={{ marginBottom: '1.5rem' }}>
                  <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)', marginBottom: '0.5rem' }}>
                    {group.date}
                  </p>
                  <div className={styles.callTable}>
                    <div className={styles.callTableHeader}>
                      <span>Consumer</span>
                      <span>Duration</span>
                      <span>Score</span>
                      <span>Outcome</span>
                      <span>Call Type</span>
                    </div>
                    {group.calls.map((call, i) => (
                      <div key={i} className={styles.callRow}>
                        <span className={styles.consumerName}>
                          <Link href={call.href} style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'var(--ink-20)', textUnderlineOffset: '3px' }}>
                            {call.consumer}
                          </Link>
                        </span>
                        <span className={styles.callMeta}>{call.duration}</span>
                        <span className={styles.callScore} style={{ color: scoreColor(call.score) }}>{call.score}</span>
                        <span className={styles.outcomeCell}>
                          <span className={`${styles.pill} ${outcomeClass(call.outcome)}`}>{call.outcome}</span>
                          {call.outcomeNote && <span className={styles.outcomeNote}>{call.outcomeNote}</span>}
                        </span>
                        <span className={styles.callType}>{call.type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className={styles.callTableFooter}>
                <span>Period Average: <strong>76 / 100</strong></span>
                <span>Enrolled: <strong>2 of 2</strong></span>
              </div>
            </div>
          )}
        </motion.div>

        {/* ── Report History ── */}
        <motion.div className={styles.reportHistory} {...SPRING}>
          <h2 className={styles.sectionTitle}>Report History</h2>
          <div className={styles.reportHistoryList}>
            {reportHistory.map((r, i) => (
              <div key={i} className={`${styles.reportHistoryEntry} ${r.active ? styles.reportHistoryActive : ''}`}>
                <span className={styles.reportHistoryLabel}>{r.label}</span>
                <span className={styles.reportHistoryMeta}>{r.meta}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Steeve Exalant · Week of April 20–22, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC3 · RC4 · MOV SEP · MCD SEP · Dual Eligible · Math Annualization · Petra Luna: Health Springs · Leonard McQuirk: Aetna Dual Care PPO</p>
        </div>

      </div>
    </PageShell>
  )
}
