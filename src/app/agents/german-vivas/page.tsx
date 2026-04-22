'use client'

import { useState } from 'react'
import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Mid-Week Report: April 22, 2026 ─────────────────────────────────────────
// CRM: This period Apr 20–21 only. 51 calls · 40 billable · 4 sales · 7.84% · $125.50 CPA
// No prior period baseline — first full period tracked.

const trendRows = [
  { metric: 'Sales',      prior: '—',  current: '4',       delta: '—', dir: 'neutral' as const },
  { metric: 'Conversion', prior: '—',  current: '7.84%',   delta: '—', dir: 'neutral' as const },
  { metric: 'CPA',        prior: '—',  current: '$125.50', delta: '—', dir: 'neutral' as const },
  { metric: 'Calls',      prior: '—',  current: '51',      delta: '(2 days)', dir: 'neutral' as const },
]

const callsByDate = [
  {
    date: 'Monday, April 20',
    calls: [
      {
        consumer: 'Hobart Lovingood',
        duration: '48:21',
        score: 76,
        outcome: 'ENROLLED',
        type: 'D-SNP Dual Eligible — QMB Discovery',
        href: '/agents/german-vivas/calls/hobart-lovingood',
      },
    ],
  },
  {
    date: 'Tuesday, April 21',
    calls: [
      {
        consumer: 'Rogelio Perez',
        duration: '44:42',
        score: 84,
        outcome: 'ENROLLED',
        type: 'IEP New Enrollee — Benefit Trifecta',
        href: '/agents/german-vivas/calls/rogelio-perez',
      },
    ],
  },
]

// Two enrolled calls — not enough data for meaningful Tells delta.
// Tells section deferred to next report.

const patterns = {
  chronic: [] as { title: string; rc: string; urgency: 'critical' | 'high' | 'medium'; summary: string; fix: string }[],
  emerging: [
    {
      title: 'Math stops at the feature — never reaches the annual total',
      rc: 'RC3',
      urgency: 'high' as const,
      summary: 'Both calls this period. On Hobart: "$263/month" — full stop. On Rogelio: "$0 for the whole year" — full stop. The annual total ($6,256 for Hobart; $2,660+ for Rogelio) was never stated. Both consumers disclosed financial hardship. The number that would have made the enrollment irreversible was sitting right there.',
      fix: '"That food card — $263 a month — is $3,156 a year. Add the dental and OTC, and this plan puts over $6,200 in your pocket annually, at zero premium."',
    },
    {
      title: 'Signal heard, pivot skipped — transportation benefit not connected',
      rc: 'RC2',
      urgency: 'high' as const,
      summary: 'Rogelio said "No, I don\'t have a car" at 7:14. German said "No car, okay" and moved to dental. The transportation benefit on this plan directly solves that problem. It was never connected. Both calls had Client Gold disclosures post-enrollment that weren\'t anchored back to the plan\'s dollar value.',
      fix: '"No car — that\'s actually a key benefit on this plan. It covers non-emergency rides to your doctor at zero cost. Your car problem is solved."',
    },
    {
      title: 'Call length creeping for cooperative consumers',
      rc: 'RC1',
      urgency: 'medium' as const,
      summary: 'Hobart\'s D-SNP enrollment ran 48 minutes on a low-difficulty, motivated buyer. Dead air during system lookups repeated without narration. A 30-35 minute target is achievable for calls like this without losing quality.',
      fix: '"I\'m pulling up the network now — give me 10 seconds, Mr. Lovingood." Narrate the lookup. Kill the dead air.',
    },
  ],
  resolved: [] as { title: string; rc: string; urgency: 'critical' | 'high' | 'medium'; summary: string; fix: string }[],
}

const reportHistory = [
  {
    title: 'Mid-Week Report — April 22',
    type: 'Mid-Week',
    date: 'Apr 22, 2026',
    meta: '2 calls · 2 enrolled · First period tracked',
    active: true,
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

function trendColor(dir: 'up' | 'down' | 'neutral') {
  if (dir === 'up') return styles.trendUp
  if (dir === 'down') return styles.trendDown
  return styles.trendNeutral
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function GermanVivasPage() {
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
          <h1 className={styles.agentName}>German Vivas</h1>
          <p className={styles.period}>Week of April 20&ndash;22, 2026</p>
          <p className={styles.updatedAt}>Updated April 22 &middot; 2 calls reviewed</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(80) }}>80</span>
            <span className={styles.scoreLabel}>Period Average</span>
            <span className={styles.scoreRange}>2 calls &middot; Apr 20&ndash;21</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>2</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Both enrolled</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>2</span>
            <span className={styles.scoreLabel}>Enrolled</span>
            <span className={styles.scoreRange}>7.84% conversion &middot; 4 sales total</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)' }}>RC3</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Math stops at the feature &mdash; both calls</span>
          </div>
        </motion.div>

        {/* ── CRM Trend Snapshot ── */}
        <motion.div className={styles.section} {...SPRING}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid rgba(19,17,16,0.08)' }}>
            <h2 className={styles.sectionTitle} style={{ margin: 0, padding: 0, border: 'none' }}>CRM Trend Snapshot</h2>
            <span style={{ fontSize: '0.75rem', color: 'var(--ink-60)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Apr 20&ndash;21</span>
          </div>
          <div className={styles.trendSnapshot}>
            <div className={styles.trendHeader}>
              <span>Metric</span>
              <span>Last Week</span>
              <span>This Period</span>
              <span>Change</span>
            </div>
            {trendRows.map((row, i) => (
              <div key={i} className={styles.trendRow}>
                <span className={styles.trendMetric}>{row.metric}</span>
                <span className={styles.trendPrior}>{row.prior}</span>
                <span className={styles.trendCurrent}>{row.current}</span>
                <span className={`${styles.trendDelta} ${trendColor(row.dir)}`}>{row.delta}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--ink-60)', marginTop: '10px', opacity: 0.7 }}>
            First period tracked &mdash; no prior week data. 7.84% conversion and $125.50 CPA are the baseline going forward.
          </p>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>After every benefit reveal, say the annual total. Not the monthly figure &mdash; the year. &ldquo;That food card is $3,156 a year. Add the dental and OTC &mdash; this plan puts over $6,200 in your pocket on a zero-dollar premium.&rdquo; You enrolled both calls this week. The math framework is the move that makes every future enrollment stick harder and faster.</p>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p>Strong start. Two calls, two enrollments &mdash; Hobart Lovingood (76, D-SNP dual eligible) and Rogelio Perez (84, IEP new enrollee). The 7.84% conversion rate is a legitimate first-period number with a $125.50 CPA. Both calls enrolled because you did the fundamentals right: you identified the right plan for each consumer, ran compliant openings, and closed on the correct window without hesitation.</p>
            <p><strong>What&apos;s working:</strong> On Hobart, the QMB Medicaid discovery at 7:25 was your best moment of the week &mdash; the system showed Medicaid, he denied it, and you explained it clearly without any hesitation. You matched it directly to the D-SNP and he enrolled in under 15 minutes of presentation. On Rogelio, the IEP urgency frame landed immediately (&ldquo;So that qualifies you off the bat&rdquo;), the $0 drug cost reveal at 15:02 got a genuine &ldquo;Wow, $0, thank you,&rdquo; and your post-enrollment loyalty anchor (&ldquo;I&apos;m gonna be your agent for the life of this policy&rdquo;) was natural and committed. These are the moves that build a book of business.</p>
            <p><strong>What&apos;s costing you:</strong> On both calls, you presented benefits individually and stopped. Hobart disclosed at 46:12 that Social Security doesn&apos;t cover his rent and food. Rogelio disclosed at 36:51 that he lost all his money since December. Both statements came after enrollment &mdash; but the annual totals ($6,256 for Hobart, $2,660+ for Rogelio) were never spoken. Those numbers, said at the right moment, turn a good enrollment into a loyal member who doesn&apos;t get buyer&apos;s remorse and refers his neighbors.</p>
          </div>
        </motion.div>

        {/* ── Your Tells ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Your Tells</h2>
          <div className={styles.yourTells}>
            <div className={styles.tellsBlock}>
              <span className={styles.tellsHeader} style={{ color: 'var(--ink-60)' }}>Needs More Data</span>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink-60)', margin: 0 }}>
                Two reviewed calls, both enrolled &mdash; not enough variance to build a meaningful Tells delta. After 8&ndash;10 calls across enrolled and missed outcomes, this section will show the behavioral patterns that separate your wins from your losses. Check back next report.
              </p>
            </div>
            <div className={styles.tellsBlock}>
              <span className={styles.tellsHeader} style={{ color: 'var(--sage-dark)' }}>Early Signal (Apr 20&ndash;21)</span>
              <ul className={styles.tellsList}>
                <li>
                  <span className={styles.tellCall}>Hobart Lovingood &middot; 7:25</span>
                  <span className={styles.tellQuote}>&ldquo;You have both of them. You have Medicare and Medicaid, which is a good thing.&rdquo; &rarr; Confident framing when the consumer didn&apos;t know he had Medicaid. This is the move that unlocked the D-SNP.</span>
                </li>
                <li>
                  <span className={styles.tellCall}>Rogelio Perez &middot; 15:02</span>
                  <span className={styles.tellQuote}>&ldquo;For the whole year, $0.&rdquo; &rarr; Held the silence after the reveal. Consumer said &ldquo;Wow, $0, thank you.&rdquo; That pause is a closing skill. Use it every time.</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* ── Patterns ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Patterns</h2>
          <div className={styles.patternsGrid}>

            {/* Chronic */}
            <div className={styles.patternColumn}>
              <span className={`${styles.patternColumnHeader} ${styles.patternColChronic}`}>Chronic</span>
              <div className={`${styles.patternCard} ${styles.priority_medium}`}>
                <p style={{ fontSize: '0.875rem', color: 'var(--ink-60)', margin: 0, lineHeight: 1.65 }}>
                  First period tracked &mdash; no prior history. Chronic patterns require at least 2&ndash;3 periods of data. This column will populate in the next report.
                </p>
              </div>
            </div>

            {/* Emerging */}
            <div className={styles.patternColumn}>
              <span className={`${styles.patternColumnHeader} ${styles.patternColEmerging}`}>Emerging</span>
              {patterns.emerging.map((p, i) => (
                <div key={i} className={`${styles.patternCard} ${styles[`priority_${p.urgency}`]}`}>
                  <div className={styles.priorityHeader}>
                    <span className={`${styles.urgencyBadge} ${styles[`badge_${p.urgency}`]}`}>
                      {p.urgency === 'high' ? 'HIGH' : 'OPPORTUNITY'}
                    </span>
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
              <span className={`${styles.patternColumnHeader} ${styles.patternColResolved}`}>Resolved</span>
              <div className={`${styles.patternCard} ${styles.priority_medium}`}>
                <p style={{ fontSize: '0.875rem', color: 'var(--ink-60)', margin: 0, lineHeight: 1.65 }}>
                  Establishing baseline &mdash; resolved patterns will appear here once there is enough history to confirm a correction has held across multiple calls.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* ── Calls (Collapsible) ── */}
        <motion.div className={styles.section} {...SPRING}>
          <button
            className={styles.collapsibleCallsToggle}
            onClick={() => setCallsOpen(v => !v)}
            aria-expanded={callsOpen}
          >
            <h2 className={styles.sectionTitle} style={{ margin: 0, border: 'none', padding: 0 }}>
              This Period&apos;s Calls
            </h2>
            <span className={styles.toggleChevron}>{callsOpen ? '▲' : '▼'}</span>
          </button>

          {callsOpen && (
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
                        </span>
                        <span className={styles.callType}>{call.type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className={styles.callTableFooter}>
                <span>Period Average: <strong>80 / 100</strong></span>
                <span>Enrolled: <strong>2 of 2</strong></span>
              </div>
            </div>
          )}
        </motion.div>

        {/* ── Report History ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Report History</h2>
          <div className={styles.reportHistory}>
            {reportHistory.map((r, i) => (
              <div key={i} className={`${styles.reportHistoryEntry} ${r.active ? styles.reportActive : ''}`}>
                <div className={styles.reportLeft}>
                  <span className={styles.reportType}>{r.type}</span>
                  <span className={styles.reportTitle}>{r.title}</span>
                </div>
                <div className={styles.reportRight}>
                  <span className={styles.reportScore}>{r.meta}</span>
                  <span className={styles.reportDate}>{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System &middot; German Vivas &middot; Mid-Week Report &middot; April 22, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC3 &middot; RC2 &middot; RC1 &middot; Math Framework &middot; D-SNP &middot; QMB &middot; IEP &middot; Client Gold &middot; Annualization</p>
        </div>

      </div>
    </PageShell>
  )
}
