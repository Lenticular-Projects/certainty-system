'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'
import { useState } from 'react'

// ── Mid-Week Report: April 20–22, 2026 ──────────────────────────────────────

const trendRows = [
  {
    metric: 'Sales',
    lastWeek: '9',
    thisPeriod: '6',
    movement: '+6 in 2 days — on pace to double',
    dir: 'up' as const,
  },
  {
    metric: 'Conversion',
    lastWeek: '6.43%',
    thisPeriod: '14.29%',
    movement: '+7.86pp',
    dir: 'up' as const,
  },
  {
    metric: 'CPA',
    lastWeek: '$238.78',
    thisPeriod: '$88.33',
    movement: '−$150.45',
    dir: 'up' as const,
  },
]

const callsByDate = [
  {
    date: 'Monday, April 20',
    calls: [
      {
        consumer: 'Mark Miller',
        duration: '40:40',
        score: 75,
        outcome: 'ENROLLED',
        outcomeNote: 'UHC Dual Complete G8 S3 — May 1',
        type: 'Dual Eligible Upgrade — Low Difficulty',
        href: '/agents/natasha-jones/calls/mark-miller',
      },
    ],
  },
  {
    date: 'Tuesday, April 21',
    calls: [
      {
        consumer: 'Lynn Morris',
        duration: '01:01:54',
        score: 78,
        outcome: 'ENROLLED',
        outcomeNote: "People's Health Secure HMO-POS — May 1",
        type: 'Trust Rebuilder — High Difficulty',
        href: '/agents/natasha-jones/calls/lynn-morris',
      },
    ],
  },
]

// Chronic: RC3 math pattern carries from last week
// Emerging: TPMO on reconnects (new this period)
// Resolved: SSN-before-trust, handoff-at-close (both fixed — zero occurrences this period)
const patternColumns = {
  chronic: [
    {
      title: 'Math stops at Step 1',
      rc: 'RC3',
      urgency: 'high' as const,
      summary: 'You state the number. You never state what the number means over a year or what it buys.',
      fix: 'After every dollar figure: annualize it out loud. "$46 more a month — that\'s $552 more a year on your card." One sentence. Every time.',
    },
  ],
  emerging: [
    {
      title: 'TPMO disclaimer on reconnects',
      rc: 'RC4',
      urgency: 'medium' as const,
      summary: 'The Lynn Morris callback opened mid-conversation — no TPMO, no recording permission. CMS requires this on every recorded call.',
      fix: '"Ms. Morris, this call may be recorded. I\'m Natasha Jones, a licensed agent — not affiliated with Medicare." 20 seconds. Every reconnect.',
    },
  ],
  resolved: [
    {
      title: 'SSN before trust',
      rc: 'RC1',
      urgency: 'resolved' as const,
      summary: 'Two HOT callers hung up at the SSN ask last week. This week: zero occurrences. Medicare card-first order held on both calls.',
      fix: 'Keep going. Card first, SSN backup. It\'s working.',
    },
    {
      title: 'Handing off at the close',
      rc: 'RC1',
      urgency: 'resolved' as const,
      summary: 'Joyce Alexander last week. This week: two calls, two closures. You held both enrollments yourself.',
      fix: 'This is the version of you that closes. Stay here.',
    },
  ],
}

const pastReports = [
  {
    title: 'Weekly Brief — April 14 (partial)',
    type: 'Weekly Brief',
    date: 'Apr 15, 2026',
    score: '42 avg',
    active: false,
    tag: null,
  },
  {
    title: 'Weekly Brief — April 13–17',
    type: 'Weekly Brief',
    date: 'Apr 20, 2026',
    score: '48 avg',
    active: false,
    tag: null,
  },
  {
    title: 'Mid-Week Report — April 22',
    type: 'Mid-Week Report',
    date: 'Apr 22, 2026',
    score: '76.5 avg',
    active: true,
    tag: 'Sales: 6 ↑ · CPA: $88 ↓',
  },
]

// ── Helpers ─────────────────────────────────────────────────────────────────

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

function urgencyClass(urgency: string) {
  if (urgency === 'high') return styles.patternUrgencyHigh
  if (urgency === 'medium') return styles.patternUrgencyMedium
  if (urgency === 'resolved') return styles.patternUrgencyResolved
  return styles.patternUrgencyMedium
}

function urgencyLabel(urgency: string) {
  if (urgency === 'high') return 'HIGH'
  if (urgency === 'medium') return 'WATCH'
  if (urgency === 'resolved') return 'RESOLVED'
  return 'WATCH'
}

export default function NatashaJonesPage() {
  const [callsExpanded, setCallsExpanded] = useState(true)

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
          <h1 className={styles.agentName}>Natasha Jones</h1>
          <p className={styles.period}>Week of April 20–22, 2026</p>
          <p className={styles.updatedAt}>Updated April 22 · 2 calls reviewed</p>
        </motion.div>

        {/* ── Trend Snapshot ── */}
        <motion.div className={styles.trendSnapshot} {...SPRING}>
          <div className={styles.trendTable}>
            <div className={styles.trendHeader}>
              <span>Metric</span>
              <span>Last Week (Apr 13–17)</span>
              <span>This Period (Apr 20–21)</span>
              <span>Movement</span>
            </div>
            {trendRows.map((row) => (
              <div key={row.metric} className={styles.trendRow}>
                <span className={styles.trendMetricLabel}>{row.metric}</span>
                <span className={styles.trendNeutral}>{row.lastWeek}</span>
                <span className={styles.trendUp} style={{ fontWeight: 700 }}>{row.thisPeriod}</span>
                <span className={styles.trendUp}>{row.movement}</span>
              </div>
            ))}
          </div>
          <p className={styles.trendCaption}>
            6 sales in 2 days — on pace to double last week&apos;s 9. Conversion more than doubled. CPA dropped from $238 to $88. <strong>The one adjustment is working.</strong>
          </p>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>
            You are closing what you start. Two calls, two enrollments, two different types of consumers — one warm Money Caller, one burned Trust Rebuilder. The thing that decided both calls was the same move: you stayed in the moment, heard what the consumer actually needed, and gave them the one answer that mattered. Keep doing that. The next edge is annualizing every dollar figure you present &mdash; turn &ldquo;$240 OTC&rdquo; into &ldquo;$552 more on your card every year&rdquo; and watch how much harder those numbers land.
          </p>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p>Two calls, two enrollments. This is not luck — these are two completely different consumer types and you handled both. Mark Miller was a warm dual-eligible upgrade who needed one clear answer five times; Lynn Morris was a burned, medically complex, low-income consumer who had filed a complaint against her last agent. You enrolled them both.</p>
            <p><strong>What&apos;s working:</strong> you found the thing each consumer cared about most and anchored the entire call around it. With Mark it was protecting his food card — &ldquo;No, it&apos;s going to go up&rdquo; at 10:43 converted a skeptic into a buyer in one sentence. With Lynn it was confirming her medication copays were $0 — when she said &ldquo;I don&apos;t have to spend my food money on it,&rdquo; that was her telling you the enrollment was done. Your rapport on both calls was genuine and it kept two very different consumers engaged across 40 minutes and 62 minutes respectively. The SSN friction from last week is gone. The handoff-at-the-close pattern from Joyce Alexander is gone.</p>
            <p><strong>What&apos;s costing you:</strong> the math story is still stopping at Step 1. On Mark&apos;s call, $240 OTC is a number — $552 more a year on his food card is a reason to refer you to three friends. On Lynn&apos;s call, $43/month more is fine — $516 more per year for a food-insecure consumer on a fixed income is the line that lands like a hammer. The annualization step is one sentence. Make it a habit. Also: the TPMO disclaimer on the Lynn Morris reconnect call was absent. Every reconnect needs the 20-second opener. Protect the enrollment.</p>
          </div>
        </motion.div>

        {/* ── YOUR TELLS ── */}
        <motion.div className={styles.yourTells} {...SPRING}>
          <div className={styles.tellsHeader}>
            <span className={styles.tellsLabel}>YOUR TELLS</span>
            <span className={styles.tellsBadge}>needs more data</span>
          </div>
          <div className={styles.tellsBlock}>
            <p>Only 2 calls reviewed this period — not enough to surface reliable behavioral patterns. Your Tells section will populate in the next report once the full week&apos;s calls are reviewed. Check back after the Apr 20–25 batch is complete.</p>
            <p style={{ marginTop: '10px', fontSize: '0.8125rem', color: 'var(--ink-60)' }}>
              <em>Your Tells = the behavioral delta between your enrolled calls and your missed-opportunity calls. With 2 enrollments and 0 misses this period, there&apos;s no comparison set yet.</em>
            </p>
          </div>
        </motion.div>

        {/* ── Patterns ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Patterns — Chronic · Emerging · Resolved</h2>
          <div className={styles.patternsGrid}>

            {/* Chronic */}
            <div className={styles.patternColumn}>
              <div className={`${styles.patternColumnHeader} ${styles.patternColChronic}`}>
                <span>Chronic</span>
                <span className={styles.patternColSubtext}>repeating from prior weeks</span>
              </div>
              {patternColumns.chronic.map((p, i) => (
                <div key={i} className={`${styles.patternCard} ${styles.patternCardChronic}`}>
                  <div className={styles.patternCardTop}>
                    <span className={`${styles.patternUrgencyBadge} ${urgencyClass(p.urgency)}`}>{urgencyLabel(p.urgency)}</span>
                    <span className={styles.patternRc}>{p.rc}</span>
                  </div>
                  <p className={styles.patternTitle}>{p.title}</p>
                  <p className={styles.patternSummary}>{p.summary}</p>
                  <div className={styles.patternFix}>
                    <span className={styles.patternFixLabel}>Instead:</span>
                    <p className={styles.patternFixText}>{p.fix}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Emerging */}
            <div className={styles.patternColumn}>
              <div className={`${styles.patternColumnHeader} ${styles.patternColEmerging}`}>
                <span>Emerging</span>
                <span className={styles.patternColSubtext}>new this period</span>
              </div>
              {patternColumns.emerging.map((p, i) => (
                <div key={i} className={`${styles.patternCard} ${styles.patternCardEmerging}`}>
                  <div className={styles.patternCardTop}>
                    <span className={`${styles.patternUrgencyBadge} ${urgencyClass(p.urgency)}`}>{urgencyLabel(p.urgency)}</span>
                    <span className={styles.patternRc}>{p.rc}</span>
                  </div>
                  <p className={styles.patternTitle}>{p.title}</p>
                  <p className={styles.patternSummary}>{p.summary}</p>
                  <div className={styles.patternFix}>
                    <span className={styles.patternFixLabel}>Instead:</span>
                    <p className={styles.patternFixText}>{p.fix}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Resolved */}
            <div className={styles.patternColumn}>
              <div className={`${styles.patternColumnHeader} ${styles.patternColResolved}`}>
                <span>Resolved</span>
                <span className={styles.patternColSubtext}>fixed this period</span>
              </div>
              {patternColumns.resolved.map((p, i) => (
                <div key={i} className={`${styles.patternCard} ${styles.patternCardResolved}`}>
                  <div className={styles.patternCardTop}>
                    <span className={`${styles.patternUrgencyBadge} ${urgencyClass(p.urgency)}`}>{urgencyLabel(p.urgency)}</span>
                    <span className={styles.patternRc}>{p.rc}</span>
                  </div>
                  <p className={styles.patternTitle}>{p.title}</p>
                  <p className={styles.patternSummary}>{p.summary}</p>
                  <div className={styles.patternFix}>
                    <span className={styles.patternFixLabel}>Note:</span>
                    <p className={styles.patternFixText}>{p.fix}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

        {/* ── Calls (collapsible) ── */}
        <motion.div className={styles.section} {...SPRING}>
          <div className={styles.collapsibleCallsHeader}>
            <h2 className={styles.sectionTitle} style={{ margin: 0, border: 'none', padding: 0 }}>
              This Period&apos;s Calls
            </h2>
            <button
              className={styles.collapsibleCallsToggle}
              onClick={() => setCallsExpanded(!callsExpanded)}
              aria-expanded={callsExpanded}
            >
              {callsExpanded ? 'Collapse' : 'Expand'} ·{' '}
              <span className={styles.pillEnrolled} style={{ padding: '2px 6px', borderRadius: '4px', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.06em' }}>
                2 ENROLLED
              </span>
            </button>
          </div>

          {callsExpanded && (
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
                <span>Period Average: <strong style={{ color: scoreColor(76.5) }}>76.5 / 100</strong></span>
                <span>Enrolled: <strong>2 of 2</strong></span>
              </div>
            </div>
          )}
        </motion.div>

        {/* ── Report History ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Report History</h2>
          <div className={styles.reportHistory}>
            {pastReports.map((r, i) => (
              <div key={i} className={`${styles.reportHistoryEntry} ${r.active ? styles.reportHistoryEntryActive : ''}`}>
                <div className={styles.reportLeft}>
                  <span className={styles.reportType}>{r.type}</span>
                  <span className={styles.reportTitle}>{r.title}</span>
                  {r.tag && (
                    <span className={styles.reportTag}>{r.tag}</span>
                  )}
                </div>
                <div className={styles.reportRight}>
                  <span className={styles.reportScore}>{r.score}</span>
                  <span className={styles.reportDate}>{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Natasha Jones · Week of April 20–22, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC3 · RC4 · Math Annualization · TPMO Reconnect · Mark Miller · Lynn Morris · Dual Eligible Upgrade · Trust Rebuilder</p>
        </div>

      </div>
    </PageShell>
  )
}
