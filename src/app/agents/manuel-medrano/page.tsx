'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import { useState } from 'react'
import styles from './page.module.css'

// ── Mid-Week Report: April 22, 2026 ─────────────────────────────────────────
// CRM: Apr 20–21 · 37 calls · 31 billable · 2 sales · 5.41% conversion · $231 CPA
// Reviewed: 1 call (Teresa Elgrino, Apr 21 — 58/100, NOT ENROLLED UNCLOSEABLE)

// ── Trend Snapshot ────────────────────────────────────────────────────────────

const trendRows = [
  {
    metric: 'Sales',
    lastWeek: '14',
    thisPeriod: '2',
    movement: '↓ 12',
    dir: 'down' as const,
  },
  {
    metric: 'Conversion',
    lastWeek: '12.96%',
    thisPeriod: '5.41%',
    movement: '↓ 7.55pp',
    dir: 'down' as const,
  },
  {
    metric: 'CPA',
    lastWeek: '$101',
    thisPeriod: '$231',
    movement: '↑ $130',
    dir: 'down' as const,   // CPA going up is bad
  },
]

// ── Patterns ─────────────────────────────────────────────────────────────────

const chronicPatterns = [
  {
    rc: 'RC2',
    title: 'Client Gold heard — not deployed',
    summary: 'Teresa told you she\'s been moving from plan to plan for years looking for the right fit. That\'s an invitation to offer something fundamentally different. You kept running the feature comparison instead.',
    fix: 'Instead: "You\'ve been bouncing around because no one\'s checked if there\'s a plan built for your exact situation. With your Medicaid, let me check D-SNP options first."',
  },
  {
    rc: 'RC3',
    title: 'Math annualized — never humanized',
    summary: 'You got the annual number right ($1,392/year). You never connected it to Teresa\'s reality: fixed disability income, spending the full $100 every month, paying cash for the rest.',
    fix: 'Instead: "You told me you spend the whole $100 and still use cash. That rollover has never built up for you. $16 more a month is real money you don\'t have today."',
  },
]

const emergingPatterns = [
  {
    rc: 'RC6',
    title: 'D-SNP search skipped on dual-eligible',
    summary: 'Teresa confirmed full Medicaid at 5:02. You verified QMB level, then searched standard MAPD. The D-SNP conversation never happened. That\'s the only product tier that could have ended the rollover argument.',
    fix: 'Instead: At full Medicaid confirmation — search D-SNP first, always. "Since you have full Medicaid, let me check if there\'s a Dual Special Needs Plan built for your situation before we look at anything else."',
  },
  {
    rc: 'RC1',
    title: 'Same reframe, sixth delivery',
    summary: 'The rollover objection came up six times. Your response was the same two arguments each time. After the second no, repeating the same frame doesn\'t persuade — it signals you\'re out of moves.',
    fix: 'Instead: After the second no, change the frame entirely: "Let me step back — I may have been looking at the wrong type of plan for you. Give me 60 seconds."',
  },
]

const resolvedPatterns = [
  {
    rc: 'RC1',
    title: 'SSN hesitation — no pivot attempt',
    summary: 'From the Apr 13 week — the Diane Hill call ended at 3:03 on an SSN hesitation with no Medicare card pivot. No SSN objection appeared in the Apr 21 call.',
    fix: 'Marked resolved pending next SSN objection call.',
  },
]

// ── Call Data ─────────────────────────────────────────────────────────────────

const callsByDate = [
  {
    date: 'Tuesday, April 21',
    calls: [
      {
        consumer: 'Teresa Elgrino',
        duration: '52:08',
        score: 58,
        outcome: 'CORRECT NO-SALE' as const,
        outcomeNote: 'Uncloseable — $16/month gap vs. rollover',
        type: 'The Money Caller / Informed Shopper',
        href: '/agents/manuel-medrano/calls/teresa-elgrino',
      },
    ],
  },
]

// ── Report History ────────────────────────────────────────────────────────────

const reportHistory = [
  {
    label: 'Apr 22 · Mid-Week Report',
    meta: 'Sales: 2 ↓ · CPA: $231 ↑',
    date: 'Apr 22, 2026',
    active: true,
  },
  {
    label: 'Apr 20 · Weekly Brief — Apr 13–17',
    meta: 'Week Avg: 51 · 5 calls · 1 enrolled',
    date: 'Apr 20, 2026',
    active: false,
  },
  {
    label: 'Apr 16 · Weekly Brief — Apr 13–17 (partial)',
    meta: '32 / 100 · Carol Hill only',
    date: 'Apr 16, 2026',
    active: false,
  },
]

// ── Helpers ───────────────────────────────────────────────────────────────────

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

export default function ManuelMedranoPage() {
  const [callsOpen, setCallsOpen] = useState(true)

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
          <h1 className={styles.agentName}>Manuel Medrano</h1>
          <p className={styles.period}>Week of April 20–22, 2026</p>
          <p className={styles.updatedAt}>Updated April 22 · 1 call reviewed</p>
        </motion.div>

        {/* ── Trend Snapshot ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>CRM Trend Snapshot</h2>
          <div className={styles.trendSnapshot}>
            <div className={styles.trendTable}>
              <div className={styles.trendRow + ' ' + styles.trendHeader}>
                <span>Metric</span>
                <span>Last Week (Apr 13–17)</span>
                <span>This Period (Apr 20–21)</span>
                <span>Movement</span>
              </div>
              {trendRows.map((row) => (
                <div key={row.metric} className={styles.trendRow}>
                  <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--ink)' }}>{row.metric}</span>
                  <span style={{ fontSize: '0.9375rem', fontVariantNumeric: 'tabular-nums', color: 'var(--ink-60)' }}>{row.lastWeek}</span>
                  <span style={{ fontSize: '0.9375rem', fontWeight: 700, fontVariantNumeric: 'tabular-nums', color: 'var(--ink)' }}>{row.thisPeriod}</span>
                  <span className={(row.dir as string) === 'down' ? styles.trendDown : (row.dir as string) === 'up' ? styles.trendUp : styles.trendNeutral}>
                    {row.movement}
                  </span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '12px', lineHeight: 1.6 }}>
              2 sales through Tuesday — last week you closed 14 in a full week. Conversion dropped from 12.96% to 5.41%. CPA climbed from $101 to $231. These are the exact calls where you had the close and let it go.
            </p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>
            When a consumer confirms full Medicaid, the first search is always D-SNP &mdash; not standard MA. Everything else is defending the wrong product. You knew Teresa had full Medicaid at 5:02 and spent 47 more minutes defending $16/month. The D-SNP conversation never happened.
          </p>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p><strong>What&rsquo;s working:</strong> your compliance execution is clean and consistent — full TPMO disclaimer, recorded line disclosed, eligibility permission gathered, QMB level verified. You also found a genuine plan differentiator (Humana&rsquo;s transportation prior auth requirement) that Teresa had never been told about, and you did it honestly. The Part B value framing at 30:21 ($2,472/year saved via QMB) was accurate and useful. And across 52 minutes of sustained objection pressure, you stayed professional and calm without once becoming defensive. That composure is real and it keeps you in calls that other agents would have ended early.</p>
            <p><strong>What&rsquo;s costing you:</strong> Teresa told you she had full Medicaid at 5:02. That&rsquo;s the INT SEP signal — it opens the D-SNP pathway, which is a completely different product tier with potentially richer benefits and rollover options. You verified QMB level and immediately searched a standard MAPD plan. The rollover objection that followed lasted 40 minutes and was never going to resolve on the plan you were selling. At 10:47, Teresa also told you she&rsquo;s been moving from plan to plan for years looking for the right fit. That was the invitation to say &ldquo;let me check if there&rsquo;s a plan actually built for your situation&rdquo; — and you continued the feature comparison instead. Both of those moments were the call.</p>
          </div>
        </motion.div>

        {/* ── Your Tells ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Your Tells</h2>
          <div className={styles.yourTells}>
            <div className={styles.tellsBlock}>
              <p style={{ fontSize: '0.875rem', color: 'var(--ink-60)', lineHeight: 1.7 }}>
                <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>Needs more data</strong> — only 1 reviewed call this period. Your Tells section shows behavioral deltas between enrolled and missed calls. Coming in the next report once more calls are reviewed.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Patterns ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Patterns</h2>
          <div className={styles.patternsGrid}>

            {/* Chronic */}
            <div className={styles.patternColumn}>
              <div className={styles.patternColumnHeader} style={{ borderColor: 'var(--terracotta)', color: 'var(--terracotta)' }}>
                CHRONIC
              </div>
              {chronicPatterns.map((p, i) => (
                <div key={i} className={styles.patternCard} style={{ borderLeftColor: 'var(--terracotta)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.06em', color: 'var(--terracotta)', textTransform: 'uppercase' }}>
                      {p.rc}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px', lineHeight: 1.4 }}>{p.title}</p>
                  <p style={{ fontSize: '0.8125rem', lineHeight: 1.65, color: 'var(--ink-60)', marginBottom: '10px' }}>{p.summary}</p>
                  <p style={{ fontSize: '0.8125rem', lineHeight: 1.65, color: 'var(--ink)', fontStyle: 'italic' }}>{p.fix}</p>
                </div>
              ))}
            </div>

            {/* Emerging */}
            <div className={styles.patternColumn}>
              <div className={styles.patternColumnHeader} style={{ borderColor: 'var(--mustard)', color: 'var(--mustard-dark)' }}>
                EMERGING
              </div>
              {emergingPatterns.map((p, i) => (
                <div key={i} className={styles.patternCard} style={{ borderLeftColor: 'var(--mustard)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.06em', color: 'var(--mustard-dark)', textTransform: 'uppercase' }}>
                      {p.rc}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px', lineHeight: 1.4 }}>{p.title}</p>
                  <p style={{ fontSize: '0.8125rem', lineHeight: 1.65, color: 'var(--ink-60)', marginBottom: '10px' }}>{p.summary}</p>
                  <p style={{ fontSize: '0.8125rem', lineHeight: 1.65, color: 'var(--ink)', fontStyle: 'italic' }}>{p.fix}</p>
                </div>
              ))}
            </div>

            {/* Resolved */}
            <div className={styles.patternColumn}>
              <div className={styles.patternColumnHeader} style={{ borderColor: 'var(--sage)', color: 'var(--sage-dark)' }}>
                RESOLVED
              </div>
              {resolvedPatterns.map((p, i) => (
                <div key={i} className={styles.patternCard} style={{ borderLeftColor: 'var(--sage)', opacity: 0.7 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.06em', color: 'var(--sage-dark)', textTransform: 'uppercase' }}>
                      {p.rc}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px', lineHeight: 1.4 }}>{p.title}</p>
                  <p style={{ fontSize: '0.8125rem', lineHeight: 1.65, color: 'var(--ink-60)', marginBottom: '10px' }}>{p.summary}</p>
                  <p style={{ fontSize: '0.8125rem', lineHeight: 1.65, color: 'var(--ink-60)', fontStyle: 'italic' }}>{p.fix}</p>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

        {/* ── Calls (collapsible) ── */}
        <motion.div className={styles.section} {...SPRING}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', paddingBottom: '12px', borderBottom: 'var(--rule-lt)' }}>
            <h2 className={styles.sectionTitle} style={{ margin: 0, padding: 0, border: 'none' }}>
              This Period&rsquo;s Calls
            </h2>
            <button
              className={styles.collapsibleCallsToggle}
              onClick={() => setCallsOpen((v) => !v)}
              aria-expanded={callsOpen}
            >
              {callsOpen ? 'Hide' : 'Show'}
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
                <span>Period Average: <strong>58 / 100</strong></span>
                <span>Enrolled: <strong>0 of 1</strong></span>
              </div>
            </>
          )}
        </motion.div>

        {/* ── Report History ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Report History</h2>
          <div className={styles.reportHistory}>
            {reportHistory.map((r, i) => (
              <div key={i} className={`${styles.reportHistoryEntry} ${r.active ? styles.reportActive : ''}`}>
                <div className={styles.reportLeft}>
                  <span className={styles.reportType}>
                    {r.active ? 'CURRENT' : 'ARCHIVED'}
                  </span>
                  <span className={styles.reportTitle}>{r.label}</span>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--ink-60)' }}>{r.meta}</span>
                </div>
                <div className={styles.reportRight}>
                  <span className={styles.reportDate}>{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Manuel Medrano · Week of April 20–22, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC2 · RC3 · RC6 · RC1 · D-SNP · INT SEP · Client Gold · Math Humanization</p>
        </div>

      </div>
    </PageShell>
  )
}
