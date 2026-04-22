'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'
import { useState } from 'react'

// ── Mid-Week Report: April 20–21, 2026 ──────────────────────────────────────

// CRM DATA
// Last week (Apr 13–17, 5 days): 107 calls · 78 billable · 8 sales · 7.48% conv · $183.13 CPA
// This period (Apr 20–21, 2 days): 31 calls · 23 billable · 6 sales · 19.35% conv · $58.17 CPA

const trendRows = [
  {
    metric: 'Sales',
    lastWeek: '8',
    thisPeriod: '6',
    movement: '+6 in 2 days vs 8 in 5',
    dir: 'up' as const,
  },
  {
    metric: 'Conversion',
    lastWeek: '7.48%',
    thisPeriod: '19.35%',
    movement: '+11.87pp',
    dir: 'up' as const,
  },
  {
    metric: 'CPA',
    lastWeek: '$183',
    thisPeriod: '$58',
    movement: '−$125',
    dir: 'up' as const,
  },
]

// CALLS BY DATE
const callsByDate = [
  {
    date: 'Monday, April 20',
    calls: [
      {
        consumer: 'Brian Bursley',
        duration: '53:40',
        score: 72,
        outcome: 'ENROLLED',
        outcomeNote: 'IEP — Devoted Gift Back 014, May 1',
        type: 'The Money Caller / IEP First-Timer',
        href: '/agents/rudy-schprejer/calls/brian-bursley',
      },
      {
        consumer: 'Mary',
        duration: '57:55',
        score: 41,
        outcome: 'MISSED OPPORTUNITY',
        outcomeNote: 'System navigation paralysis — no plan presented',
        type: 'The Misinformed Caller / Third Party Controlled',
        href: '/agents/rudy-schprejer/calls/mary',
      },
    ],
  },
  {
    date: 'Tuesday, April 21',
    calls: [
      {
        consumer: 'Frank Shepherd',
        duration: '48:36',
        score: 78,
        outcome: 'ENROLLED',
        outcomeNote: 'Devoted Gift Back 015, May 1 — held through hangup threat',
        type: 'The Money Caller / Distracted Multi-Tasker',
        href: '/agents/rudy-schprejer/calls/frank-shepherd',
      },
      {
        consumer: 'Santiago Ramos',
        duration: '09:04',
        score: 48,
        outcome: 'MISSED OPPORTUNITY',
        outcomeNote: 'Self-created objection — wrong Part A answer ended call',
        type: 'The Money Caller',
        href: '/agents/rudy-schprejer/calls/santiago-ramos',
      },
    ],
  },
]

// PATTERNS
type Urgency = 'critical' | 'high' | 'medium'
type PatternColumn = 'chronic' | 'emerging' | 'resolved'

const patterns: Array<{
  column: PatternColumn
  title: string
  rc: string
  urgency: Urgency
  summary: string
  fix: string
}> = [
  {
    column: 'chronic',
    title: 'Surrender at first resistance',
    rc: 'RC1',
    urgency: 'critical',
    summary:
      'When a consumer shows any resistance — "I want to stay with Aetna," "I\'m comfortable," "let me think about it" — you agree immediately and exit. Zero reframe attempts across multiple calls this week and last.',
    fix: 'Instead: Isolate the objection first. "Is it the doctors or the coverage itself?" One clarifying question reopens the door.',
  },
  {
    column: 'chronic',
    title: 'Math stops at monthly — never annualizes or humanizes',
    rc: 'RC3',
    urgency: 'high',
    summary:
      'You state monthly figures but skip Step 2 (annualization) and Step 3 (connecting to their life). Santiago never heard "$2,492 a year." Frank never heard "$2,180 for your dental work."',
    fix: 'Instead: "$184.70 every month — that\'s $2,216 back in your Social Security this year. For someone on a fixed income, that\'s two months of groceries. It\'s yours either way."',
  },
  {
    column: 'emerging',
    title: 'Carrier ID not verified from source — Santiago called as BCBS',
    rc: 'RC4',
    urgency: 'critical',
    summary:
      'On the Santiago Ramos call, you described Devoted Medicare as "with Blue Cross Blue Shield." Devoted is an independent plan — not BCBS-affiliated. Building a plan comparison on a wrong carrier is a material misrepresentation and a compliance risk on a recorded line.',
    fix: 'Instead: Confirm carrier from the consumer\'s Medicare card and the CMS portal lookup before naming the carrier in your pitch. Never go from memory.',
  },
  {
    column: 'emerging',
    title: 'HRA answer coaching — compliance exposure',
    rc: 'RC4',
    urgency: 'critical',
    summary:
      'On the Brian Bursley call, you told Brian to answer "yes" to the federal HRA food insecurity question: "I want you to say yes." That\'s a CMS compliance violation on a recorded line. Intent doesn\'t matter — it\'s coaching a consumer to give a specific answer on a federal health assessment.',
    fix: 'Instead: "Brian, if there were times in the last 12 months you had less food because of money, the honest answer is yes — that\'s what the question is asking." Guidance, not coaching.',
  },
  {
    column: 'resolved',
    title: 'INT SEP — deferred to AEP instead of enrolling',
    rc: 'RC6',
    urgency: 'high',
    summary:
      'Last week (Faye Bailey): live INT SEP flagged, dual-eligible confirmed, and you told her to call back in October. Not appearing in this period\'s calls — improvement noted.',
    fix: 'Rule holds: INT SEP is open any month for dual-eligible consumers. When the system flags it, invoke it immediately.',
  },
]

// YOUR TELLS
const yourTells = {
  closedCalls: 2,
  lostCalls: 2,
  onClosed: [
    'Financial anchor deployed immediately and sustained throughout the call',
    'Held frame when consumer threatened to end the call (Frank at 10:30)',
    'IEP or SEP correctly identified and used as enrollment lever (Brian at 32:03)',
    'Objections redirected with warmth rather than surrender',
  ],
  onLost: [
    'Surrendered immediately at first resistance without any reframe attempt',
    'Math presented as monthly figures only — no annualization, no humanization',
    'Call stuck in a single process (doctor lookup, data collection) with no forward momentum',
    'Self-created objection: gave wrong information that triggered consumer fear',
  ],
  delta:
    'On your closed calls, you held frame and kept the financial anchor visible. On your lost calls, you answered the first sign of resistance with "Yeah. Definitely." — immediate agreement, zero pushback.',
  rule: 'The rule: when a consumer says anything that sounds like a no, ask one clarifying question before you agree with them. "Is it the doctors or the coverage itself?" costs you five seconds and saves the call.',
}

// REPORT HISTORY
const pastReports = [
  {
    title: 'Mid-Week Report — April 20–21',
    type: 'Mid-Week Report',
    date: 'Apr 22, 2026',
    scoreNote: 'Avg 59.75 · 4 calls · 2 enrolled',
    trend: 'up',
    active: true,
  },
  {
    title: 'Weekly Brief — April 14–17',
    type: 'Weekly Brief',
    date: 'Apr 20, 2026',
    scoreNote: 'Avg 44 · 10 calls · 0 enrolled',
    trend: 'up',
    active: false,
  },
  {
    title: 'Weekly Brief — April 14–15',
    type: 'Weekly Brief',
    date: 'Apr 16, 2026',
    scoreNote: 'Avg 44 · 9 calls',
    trend: 'neutral',
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

function urgencyLabel(u: Urgency) {
  if (u === 'critical') return 'CRITICAL'
  if (u === 'high') return 'HIGH'
  return 'OPPORTUNITY'
}

// ── Component ────────────────────────────────────────────────────────────────

export default function RudySchprejerPage() {
  const [callsOpen, setCallsOpen] = useState(true)

  const chronicPatterns = patterns.filter((p) => p.column === 'chronic')
  const emergingPatterns = patterns.filter((p) => p.column === 'emerging')
  const resolvedPatterns = patterns.filter((p) => p.column === 'resolved')

  const periodAvg = Math.round((72 + 41 + 78 + 48) / 4)

  return (
    <PageShell signal="green">
      <div className={styles.page}>

        {/* ── Header ── */}
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Mid-Week Report</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>April 22, 2026</span>
          </div>
          <h1 className={styles.agentName}>Rudy Schprejer</h1>
          <p className={styles.period}>Week of April 20–22, 2026</p>
          <p className={styles.updatedAt}>Updated April 22 · 4 calls reviewed</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(periodAvg) }}>{periodAvg}</span>
            <span className={styles.scoreLabel}>Period Average</span>
            <span className={styles.scoreRange}>Apr 20–21 · 4 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>4</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 20–21, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>2</span>
            <span className={styles.scoreLabel}>Enrolled</span>
            <span className={styles.scoreRange}>2 Missed Opportunity</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)' }}>RC4</span>
            <span className={styles.scoreLabel}>Top Flag</span>
            <span className={styles.scoreRange}>Carrier ID / Compliance</span>
          </div>
        </motion.div>

        {/* ── Trend Snapshot ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>CRM Trend Snapshot</h2>
          <div className={styles.trendSnapshot}>
            <div className={styles.trendTable}>
              <div className={styles.trendHeader}>
                <span>Metric</span>
                <span>Last Week (Apr 13–17)</span>
                <span>This Period (Apr 20–21)</span>
                <span>Movement</span>
              </div>
              {trendRows.map((row, i) => (
                <div key={i} className={styles.trendRow}>
                  <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--ink)' }}>{row.metric}</span>
                  <span style={{ fontSize: '0.875rem', color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{row.lastWeek}</span>
                  <span style={{ fontSize: '0.9375rem', fontWeight: 700, fontVariantNumeric: 'tabular-nums', color: 'var(--ink)' }}>{row.thisPeriod}</span>
                  <span className={
                    (row.dir as string) === 'up' ? styles.trendUp :
                    (row.dir as string) === 'down' ? styles.trendDown :
                    styles.trendNeutral
                  }>{row.movement}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--sage-dark)', marginTop: '12px', fontWeight: 600 }}>
              6 sales in 2 days — on pace to double last week&apos;s 8. Conversion jumped from 7.48% to 19.35%. CPA dropped from $183 to $58. Big improver.
            </p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>
            Before you present any plan, confirm the carrier from the consumer&apos;s Medicare card and the CMS portal &mdash; never from what you remember or what they say they think they have. On the Santiago Ramos call you described Devoted as &ldquo;with Blue Cross Blue Shield.&rdquo; Devoted is not BCBS. That misidentification triggered the fear that ended the call, and it is a compliance risk on a recorded line. Carrier verification is not optional. Card first, portal second, then pitch.
          </p>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p><strong>What&apos;s working:</strong> You had a breakthrough two days. Six sales in 48 hours against 8 in a full week — your conversion rate tripled and your cost-per-acquisition dropped by $125. On the Brian Bursley call, you identified his IEP window mid-enrollment and moved the effective date from June to May, giving him an extra $184.70 that he would not have gotten from any other agent. On the Frank Shepherd call, Frank told you he needed to hang up at 10:30, and you held frame, asked him for ten minutes, and closed the enrollment. Those are the moves that built this week&apos;s numbers.</p>
            <p><strong>What&apos;s costing you:</strong> Two calls, two surrenders at the first sign of resistance. Santiago Ramos said &ldquo;I want to stay with Aetna&rdquo; and you responded &ldquo;Yeah. Definitely.&rdquo; in under five seconds — no isolation, no reframe, no recovery. That was a closeable call with $2,492 in annual benefits on the table. On the Mary call, the doctor lookup took over the call and you never got to a plan presentation. The compliance flag on the Santiago call also needs to be addressed directly: describing Devoted as a Blue Cross Blue Shield product is a misrepresentation. Carrier ID must come from the Medicare card, not from memory.</p>
          </div>
        </motion.div>

        {/* ── YOUR TELLS ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Your Tells</h2>
          <div className={styles.yourTells}>
            <div className={styles.tellsBlock}>
              <p className={styles.tellsBlockLabel}>On calls you CLOSED this period ({yourTells.closedCalls})</p>
              <ul className={styles.tellsList}>
                {yourTells.onClosed.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
            <div className={styles.tellsBlock}>
              <p className={styles.tellsBlockLabel}>On calls you LOST this period ({yourTells.lostCalls})</p>
              <ul className={styles.tellsList}>
                {yourTells.onLost.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
            <div style={{
              background: 'var(--ink)',
              borderRadius: '10px',
              padding: '18px 22px',
              marginTop: '4px',
            }}>
              <p style={{ fontSize: '0.875rem', color: '#FAF5EC', lineHeight: 1.7, marginBottom: '10px' }}>
                <strong style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.6875rem', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>The Delta</strong>
                {yourTells.delta}
              </p>
              <p style={{ fontSize: '0.875rem', color: '#FAF5EC', lineHeight: 1.7, borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: '10px' }}>
                <strong style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.6875rem', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>The Rule</strong>
                {yourTells.rule}
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Patterns — Chronic · Emerging · Resolved ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Patterns</h2>
          <div className={styles.patternsGrid}>

            {/* Chronic */}
            <div className={styles.patternColumn}>
              <p className={styles.patternColumnHeader}>Chronic</p>
              {chronicPatterns.map((p, i) => (
                <div key={i} className={`${styles.patternCard} ${styles[`priority_${p.urgency}`]}`}>
                  <div className={styles.priorityHeader}>
                    <span className={`${styles.urgencyBadge} ${styles[`badge_${p.urgency}`]}`}>
                      {urgencyLabel(p.urgency)}
                    </span>
                    <span className={styles.rcCode}>{p.rc}</span>
                  </div>
                  <p className={styles.priorityTitle}>{p.title}</p>
                  <p className={styles.priorityDetail}>{p.summary}</p>
                  <div className={styles.priorityMove}>
                    <p className={styles.priorityMoveText}>{p.fix}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Emerging */}
            <div className={styles.patternColumn}>
              <p className={styles.patternColumnHeader}>Emerging</p>
              {emergingPatterns.map((p, i) => (
                <div key={i} className={`${styles.patternCard} ${styles[`priority_${p.urgency}`]}`}>
                  <div className={styles.priorityHeader}>
                    <span className={`${styles.urgencyBadge} ${styles[`badge_${p.urgency}`]}`}>
                      {urgencyLabel(p.urgency)}
                    </span>
                    <span className={styles.rcCode}>{p.rc}</span>
                  </div>
                  <p className={styles.priorityTitle}>{p.title}</p>
                  <p className={styles.priorityDetail}>{p.summary}</p>
                  <div className={styles.priorityMove}>
                    <p className={styles.priorityMoveText}>{p.fix}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Resolved */}
            <div className={styles.patternColumn}>
              <p className={styles.patternColumnHeader}>Resolved</p>
              {resolvedPatterns.map((p, i) => (
                <div key={i} className={`${styles.patternCard} ${styles.priority_resolved}`}>
                  <div className={styles.priorityHeader}>
                    <span className={`${styles.urgencyBadge} ${styles.badge_resolved}`}>
                      RESOLVED
                    </span>
                    <span className={styles.rcCode}>{p.rc}</span>
                  </div>
                  <p className={styles.priorityTitle}>{p.title}</p>
                  <p className={styles.priorityDetail}>{p.summary}</p>
                  <div className={styles.priorityMove}>
                    <p className={styles.priorityMoveText}>{p.fix}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

        {/* ── Calls (Collapsible) ── */}
        <motion.div className={styles.section} {...SPRING}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: callsOpen ? '20px' : '0' }}>
            <h2 className={styles.sectionTitle} style={{ marginBottom: 0, paddingBottom: 0, borderBottom: 'none' }}>
              This Period&apos;s Calls
            </h2>
            <button
              className={styles.collapsibleCallsToggle}
              onClick={() => setCallsOpen(!callsOpen)}
              aria-expanded={callsOpen}
            >
              {callsOpen ? 'Collapse' : 'Expand'}
            </button>
          </div>

          {callsOpen && (
            <>
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
                <span>Period Average: <strong>{periodAvg} / 100</strong></span>
                <span>Enrolled: <strong>2 of 4</strong></span>
              </div>
            </>
          )}
        </motion.div>

        {/* ── Report History ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Report History</h2>
          <div className={styles.reportHistory}>
            {pastReports.map((r, i) => (
              <div key={i} className={`${styles.reportHistoryEntry} ${r.active ? styles.reportActive : ''}`}>
                <div className={styles.reportLeft}>
                  <span className={styles.reportType}>{r.type}</span>
                  <span className={styles.reportTitle}>{r.title}</span>
                </div>
                <div className={styles.reportRight}>
                  <span
                    className={
                      r.trend === 'up' ? styles.trendUp :
                      r.trend === 'down' ? styles.trendDown :
                      styles.trendNeutral
                    }
                    style={{ fontSize: '0.75rem', fontWeight: 700 }}
                  >
                    {r.trend === 'up' ? '↑' : r.trend === 'down' ? '↓' : '→'}
                  </span>
                  <span className={styles.reportScore}>{r.scoreNote}</span>
                  <span className={styles.reportDate}>{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Rudy Schprejer · Week of April 20–22, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC3 · RC4 · IEP · Carrier ID · HRA Compliance · Math Humanization</p>
        </div>

      </div>
    </PageShell>
  )
}
