'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import { useState } from 'react'
import styles from './page.module.css'

// ── Mid-Week Report: April 22, 2026 (covers Apr 20–21) ──────────────────────

// ── CRM Trend Data ───────────────────────────────────────────────────────────

const trendRows = [
  {
    metric: 'Sales',
    prior: '5',
    current: '2',
    delta: '+2 (on pace)',
    dir: 'up' as const,
    note: '2 days vs 5-day week',
  },
  {
    metric: 'Conversion',
    prior: '4.90%',
    current: '6.90%',
    delta: '+2.00pp',
    dir: 'up' as const,
    note: null,
  },
  {
    metric: 'CPA',
    prior: '$274',
    current: '$134',
    delta: '−$140',
    dir: 'up' as const,
    note: null,
  },
  {
    metric: 'Billable Calls',
    prior: '69',
    current: '15',
    delta: '−',
    dir: 'neutral' as const,
    note: '2 days only',
  },
]

// ── Calls ─────────────────────────────────────────────────────────────────────

const callsByDate = [
  {
    date: 'Tuesday, April 21',
    calls: [
      {
        consumer: 'Roy Bumgarner',
        duration: '57:46',
        score: 75,
        outcome: 'ENROLLED',
        outcomeNote: 'UHC D-SNP · effective May 1',
        type: 'The Money Caller — Returning Consumer',
        href: '/agents/josner-saintil/calls/roy-bumgarner',
      },
    ],
  },
]

// ── Patterns ─────────────────────────────────────────────────────────────────

const chronicPatterns = [
  {
    title: 'SEP signals missed — RC6 is the week-over-week constant',
    rc: 'RC6',
    urgency: 'high' as const,
    summary: 'Last week: four live SEP signals (MOV, CSN, INT, MCD) — none converted. This week: correct SEP existed (INT), wrong one cited. The failure is shifting from passive miss to active error.',
    fix: 'Before citing any SEP: name the triggering event, match it to the code. For Medicaid → D-SNP, the code is always INT.',
  },
]

const emergingPatterns = [
  {
    title: 'DST cited as standalone SEP — enrollment audit risk',
    rc: 'RC4',
    urgency: 'critical' as const,
    summary: 'Roy Bumgarner call (Apr 21): Josner stated "we\'ll use the recent winter storm" as the SEP basis at 15:53. DST is prohibited as a standalone code. The correct SEP is INT (Medicaid beneficiary enrolling into D-SNP), open any month, no event required.',
    fix: '"Since you have Medicaid, you qualify to switch any time of year — we don\'t need any other reason." INT. Always.',
  },
  {
    title: 'SSN collected before eligibility permission',
    rc: 'RC4',
    urgency: 'high' as const,
    summary: 'Roy provided SSN at 3:38. Eligibility permission was requested at 3:58 — 20 seconds after collection. Consent must precede collection on a recorded line.',
    fix: '"Before I look anything up, do I have your permission to pull your eligibility?" Then ask for the number.',
  },
]

const resolvedPatterns = [
  {
    title: 'Doctor network skipped — resolved',
    rc: 'RC1',
    urgency: 'medium' as const,
    summary: 'Prior months: enrollment initiated without confirming primary doctor coverage. Roy Bumgarner call: Josner confirmed Dr. Salmon in-network at 11:30 before proceeding. Correct sequence executed.',
    fix: 'Keep doing this. Doctor first, application second.',
  },
]

// ── Report History ─────────────────────────────────────────────────────────

const reportHistory = [
  {
    label: 'Apr 22 · Mid-Week',
    meta: 'Sales: 2 ↑ · CPA: $134 ↓',
    active: true,
  },
  {
    label: 'Apr 13–17 · Weekly Brief',
    meta: 'Avg: 37/100 · 4 calls · RC6 x2',
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

function urgencyLabel(u: string) {
  if (u === 'critical') return 'CRITICAL'
  if (u === 'high') return 'HIGH'
  return 'RESOLVED'
}

export default function JosnerSaintilPage() {
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
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>April 22, 2026</span>
          </div>
          <h1 className={styles.agentName}>Josner Saintil</h1>
          <p className={styles.period}>Week of April 20–22</p>
          <p className={styles.updatedAt}>Updated April 22 · 1 call reviewed</p>
        </motion.div>

        {/* ── Trend Snapshot ── */}
        <motion.div className={styles.trendSnapshot} {...SPRING}>
          <div className={styles.sectionTitleRow}>
            <h2 className={styles.sectionTitle} style={{ margin: 0, padding: 0, border: 'none' }}>CRM Trend Snapshot</h2>
            <span className={styles.sectionBadge}>Apr 20–21 vs Apr 13–17</span>
          </div>
          <div className={styles.trendTable}>
            <div className={styles.trendHeader}>
              <span>Metric</span>
              <span>Last Week</span>
              <span>This Period</span>
              <span>Change</span>
            </div>
            {trendRows.map((row) => (
              <div key={row.metric} className={styles.trendRow}>
                <span className={styles.trendMetric}>
                  {row.metric}
                  {row.note && <span className={styles.trendNote}> ({row.note})</span>}
                </span>
                <span className={styles.trendPrior}>{row.prior}</span>
                <span className={styles.trendCurrent}>{row.current}</span>
                <span className={
                  (row.dir as string) === 'up' ? styles.trendUp :
                  (row.dir as string) === 'down' ? styles.trendDown :
                  styles.trendNeutral
                }>{row.delta}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>Before you cite any SEP on a recorded line, name the triggering event and match it to the code. For Medicaid into D-SNP, that code is INT — no storm required, no AEP window required, no external event at all. &ldquo;Since you have Medicaid, you qualify to switch any time of year.&rdquo; That line is audit-proof. The storm line is not.</p>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <h2 className={styles.sectionTitle}>Executive Summary</h2>
          <div className={styles.execSummaryInner}>
            <p><strong>What&rsquo;s working:</strong> Two days in, two sales — you&rsquo;re on pace to beat last week&rsquo;s five. Conversion is up from 4.90% to 6.90%. CPA cut in half from $274 to $134. The Roy Bumgarner call shows you executing the doctor-first framework correctly — you confirmed Dr. Salmon in-network at 11:30 before moving to application, you framed the switch as restoring what Roy already knew worked, and you enrolled cleanly with voice signature at 48:50. The line at 10:50 — &ldquo;if it can&rsquo;t cover Mr. Patrick, then we can&rsquo;t use it&rdquo; — is the reason that call enrolled. That framing builds a level of trust that removes objections before they surface.</p>
            <p><strong>What&rsquo;s costing you:</strong> At 15:53 on the Roy call, you said &ldquo;we&rsquo;ll use the recent winter storm that had happened in North Carolina&rdquo; as the SEP basis — on a recorded line. DST is not a standalone SEP. Roy has partial Medicaid and was enrolling into a D-SNP, which qualifies under INT any month of the year. You had a clean, audit-proof pathway and walked past it to use one that creates review exposure. This needs to come out of your process entirely. Also: Roy&rsquo;s SSN was collected at 3:38, twenty seconds before you asked for eligibility permission at 3:58. The question is right — the sequence is backward. Permission first, then number.</p>
          </div>
        </motion.div>

        {/* ── YOUR TELLS ── */}
        <motion.div className={styles.yourTells} {...SPRING}>
          <div className={styles.sectionTitleRow}>
            <h2 className={styles.sectionTitle} style={{ margin: 0, padding: 0, border: 'none' }}>Your Tells</h2>
            <span className={styles.sectionBadge}>Enrolled vs Missed</span>
          </div>
          <div className={styles.tellsBlock}>
            <p>Needs more data — coming in the next report. Only 1 reviewed call this period. Check back after Thursday&rsquo;s batch.</p>
          </div>
        </motion.div>

        {/* ── Patterns ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Patterns</h2>
          <div className={styles.patternsGrid}>

            {/* Chronic */}
            <div className={styles.patternColumn}>
              <div className={`${styles.patternColumnHeader} ${styles.patternColumnChronic}`}>Chronic</div>
              {chronicPatterns.map((p, i) => (
                <div key={i} className={`${styles.patternCard} ${styles[`priority_${p.urgency}`]}`}>
                  <div className={styles.priorityHeader}>
                    <span className={`${styles.urgencyBadge} ${styles[`badge_${p.urgency}`]}`}>{urgencyLabel(p.urgency)}</span>
                    <span className={styles.rcCode}>{p.rc}</span>
                  </div>
                  <p className={styles.priorityTitle}>{p.title}</p>
                  <p className={styles.priorityDetail}>{p.summary}</p>
                  <div className={styles.priorityMove}>
                    <span className={styles.priorityMoveLabel}>Instead</span>
                    <p className={styles.priorityMoveText}>{p.fix}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Emerging */}
            <div className={styles.patternColumn}>
              <div className={`${styles.patternColumnHeader} ${styles.patternColumnEmerging}`}>Emerging</div>
              {emergingPatterns.map((p, i) => (
                <div key={i} className={`${styles.patternCard} ${styles[`priority_${p.urgency}`]}`}>
                  <div className={styles.priorityHeader}>
                    <span className={`${styles.urgencyBadge} ${styles[`badge_${p.urgency}`]}`}>{urgencyLabel(p.urgency)}</span>
                    <span className={styles.rcCode}>{p.rc}</span>
                  </div>
                  <p className={styles.priorityTitle}>{p.title}</p>
                  <p className={styles.priorityDetail}>{p.summary}</p>
                  <div className={styles.priorityMove}>
                    <span className={styles.priorityMoveLabel}>Instead</span>
                    <p className={styles.priorityMoveText}>{p.fix}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Resolved */}
            <div className={styles.patternColumn}>
              <div className={`${styles.patternColumnHeader} ${styles.patternColumnResolved}`}>Resolved</div>
              {resolvedPatterns.map((p, i) => (
                <div key={i} className={`${styles.patternCard} ${styles.patternCardResolved}`}>
                  <div className={styles.priorityHeader}>
                    <span className={`${styles.urgencyBadge} ${styles.badgeResolved}`}>{urgencyLabel('resolved')}</span>
                    <span className={styles.rcCode}>{p.rc}</span>
                  </div>
                  <p className={styles.priorityTitle}>{p.title}</p>
                  <p className={styles.priorityDetail}>{p.summary}</p>
                  <div className={styles.priorityMove}>
                    <span className={styles.priorityMoveLabel}>Keep</span>
                    <p className={styles.priorityMoveText}>{p.fix}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

        {/* ── Calls ── */}
        <motion.div className={styles.section} {...SPRING}>
          <button
            className={styles.collapsibleCallsToggle}
            onClick={() => setCallsOpen((v) => !v)}
            aria-expanded={callsOpen}
          >
            <span>This Period&rsquo;s Calls</span>
            <span className={styles.toggleChevron}>{callsOpen ? '▲' : '▼'}</span>
          </button>

          {callsOpen && (
            <div style={{ marginTop: '16px' }}>
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
                <span>Period Average: <strong>75 / 100</strong></span>
                <span>Enrolled: <strong>1 of 1</strong></span>
              </div>
            </div>
          )}
        </motion.div>

        {/* ── Report History ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Report History</h2>
          <div className={styles.reportHistory}>
            {reportHistory.map((r, i) => (
              <div key={i} className={`${styles.reportHistoryEntry} ${r.active ? styles.reportHistoryActive : ''}`}>
                <div className={styles.reportLeft}>
                  <span className={styles.reportTitle}>{r.label}</span>
                  <span className={styles.reportDate}>{r.meta}</span>
                </div>
                {r.active && (
                  <span className={styles.reportType}>Current</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Josner Saintil · Mid-Week Report — April 22, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC4 · RC6 · SEP · INT · DST · Compliance Sequencing · D-SNP · Math Breakdown</p>
        </div>

      </div>
    </PageShell>
  )
}
