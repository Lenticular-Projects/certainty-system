'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import { useState } from 'react'
import styles from './page.module.css'

// ── Mid-Week Report: April 22, 2026 (data through Apr 21) ────────────────────

const trendRows = [
  {
    metric: 'Sales',
    prior: '8',
    priorLabel: 'Apr 13–17',
    current: '5',
    currentLabel: 'Apr 20–21',
    delta: '+pace',
    deltaNote: '5 in 2 days — on pace to beat last week',
    dir: 'up' as const,
  },
  {
    metric: 'Conversion',
    prior: '7.34%',
    priorLabel: 'Apr 13–17',
    current: '10.87%',
    currentLabel: 'Apr 20–21',
    delta: '+3.53pp',
    deltaNote: 'Significant jump',
    dir: 'up' as const,
  },
  {
    metric: 'CPA',
    prior: '$141.88',
    priorLabel: 'Apr 13–17',
    current: '$71.20',
    currentLabel: 'Apr 20–21',
    delta: '−$70.68',
    deltaNote: 'Cost cut nearly in half',
    dir: 'up' as const,
  },
]

const callsByDate = [
  {
    date: 'Monday, April 21',
    calls: [
      {
        consumer: 'Jean Gold',
        duration: '12:55',
        score: 28,
        outcome: 'MISSED OPPORTUNITY',
        outcomeNote: 'Callback surrender — warm referral, not enrolled',
        type: 'The Referral Call · Callback Surrender',
        href: '/agents/jean-pierre-riviere/calls/jean-gold',
      },
    ],
  },
]

const chronicPatterns = [
  {
    rc: 'RC4',
    title: 'Compliance arrives late — data collected first',
    summary: 'TPMO disclaimer delivered after Medicare number and zip were already collected.',
    fix: 'Lead with the disclaimer — before the first data ask, every call.',
  },
  {
    rc: 'RC1',
    title: 'Callback surrender at the close',
    summary: 'When a consumer deflects, JP books the callback instead of attempting one reframe.',
    fix: '"You\'ve been trying to fix this for months — give me 5 more minutes right now."',
  },
]

const emergingPatterns = [
  {
    rc: 'RC6',
    title: 'SEP triggers heard but not explored',
    summary: 'Jean Gold disclosed WellPoint exited Texas — EOC/DIF SEP was available and never asked about.',
    fix: '"When exactly did WellPoint send you that letter? And when did Aetna coverage start?"',
  },
]

const resolvedPatterns = [
  {
    rc: 'RC4',
    title: 'DST SEP invocation (last week)',
    summary: 'Fabricated a storm-based SEP on the Faith Light call — not repeated in this batch.',
    fix: 'INT SEP remains the correct path when Medicaid is confirmed.',
  },
]

const pastReports = [
  {
    title: 'Mid-Week Report — April 22',
    type: 'Mid-Week Report',
    date: 'Apr 22, 2026',
    score: 'Sales: 5 ↑ · CPA: $71 ↓',
    active: true,
  },
  {
    title: 'Weekly Brief — April 13–17',
    type: 'Weekly Brief',
    date: 'Apr 20, 2026',
    score: '42 / 100',
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

export default function JeanPierreRivierePage() {
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
          <h1 className={styles.agentName}>Jean Pierre Riviere</h1>
          <p className={styles.period}>Mid-Week Report — April 22, 2026</p>
          <p className={styles.updatedAt}>Week of April 20–22 · Updated April 22 · 1 call reviewed</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>5</span>
            <span className={styles.scoreLabel}>Sales This Period</span>
            <span className={styles.scoreRange}>Apr 20–21 · 2 days</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>10.87%</span>
            <span className={styles.scoreLabel}>Conversion Rate</span>
            <span className={styles.scoreRange}>Up from 7.34% last week</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>$71</span>
            <span className={styles.scoreLabel}>CPA This Period</span>
            <span className={styles.scoreRange}>Down from $142 last week</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>RC1</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Callback surrender · Jean Gold</span>
          </div>
        </motion.div>

        {/* ── Trend Snapshot ── */}
        <motion.div className={`${styles.section} ${styles.trendSnapshot}`} {...SPRING}>
          <h2 className={styles.sectionTitle}>CRM Trend Snapshot</h2>
          <div className={styles.trendTable}>
            <div className={styles.trendHeader}>
              <span>Metric</span>
              <span>Apr 13–17</span>
              <span>Apr 20–21</span>
              <span>Change</span>
            </div>
            {trendRows.map((row) => (
              <div key={row.metric} className={styles.trendRow}>
                <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--ink)' }}>{row.metric}</span>
                <span style={{ fontSize: '0.9375rem', fontVariantNumeric: 'tabular-nums', color: 'var(--ink-60)' }}>{row.prior}</span>
                <span style={{ fontSize: '0.9375rem', fontWeight: 700, fontVariantNumeric: 'tabular-nums', color: 'var(--ink)' }}>{row.current}</span>
                <span className={(row.dir as string) === 'up' ? styles.trendUp : (row.dir as string) === 'down' ? styles.trendDown : styles.trendNeutral}>
                  {row.delta}
                </span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '12px', lineHeight: 1.6 }}>
            5 sales in 2 days — you&apos;re on pace to beat last week&apos;s 8. Conversion jumped from 7.34% to 10.87%. CPA dropped from $141 to $71. This is a big-improver week and it&apos;s only Tuesday.
          </p>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a consumer asks for a callback, that is not a no &mdash; it&apos;s a door that is still open. One reframe before you agree: &ldquo;You&apos;ve been trying to fix this for months and nobody has helped you. Give me 5 more minutes right now. If you still want to call back after that, I&apos;ll call you at exactly 2:35.&rdquo; That is the line that turns a lost referral into an enrollment.</p>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid rgba(19,17,16,0.08)' }}>
            <h2 className={styles.sectionTitle} style={{ margin: 0, padding: 0, border: 'none' }}>Executive Summary</h2>
          </div>
          <div className={styles.execSummaryInner}>
            <p><strong>What&apos;s working:</strong> your CRM numbers are moving in the right direction — fast. 5 sales in 2 days with a $71 CPA is the best cost efficiency you&apos;ve had this month. Your referral instincts are strong. On the Jean Gold call, you handled the awkward 3-way intro gracefully, activated Dorina&apos;s social proof immediately, and correctly identified May 1st as the urgency lever. When Jean described the wrong doctor on her Aetna card, you validated her — &ldquo;you&apos;re right, they should have done that for you&rdquo; — and positioned yourself as the person who fixes it. That&apos;s the right instinct.</p>
            <p><strong>What&apos;s costing you:</strong> one call reviewed this period — and it ended as a callback. Jean Gold was a warm referral with active Aetna dissatisfaction, a named pain point (wrong doctor), and frustration at having been ignored for months. When she said &ldquo;can you call me back later please,&rdquo; you said &ldquo;what time would you like?&rdquo; No reframe, no urgency reference, no attempt. The compliance sequencing issue from last week also appeared again — Medicare number and zip were collected before the TPMO disclaimer. Fix the sequence. Fix the close-recovery reflex. The numbers are going up; the execution at the final moment is still the gap.</p>
          </div>
        </motion.div>

        {/* ── YOUR TELLS ── */}
        <motion.div className={`${styles.section} ${styles.yourTells}`} {...SPRING}>
          <h2 className={styles.sectionTitle}>YOUR TELLS</h2>
          <div className={styles.tellsBlock}>
            <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)', lineHeight: 1.7 }}>
              <strong style={{ color: 'var(--ink)' }}>Needs more data — coming in next report.</strong> Only 1 reviewed call this period. Your Tells compares enrolled calls vs. missed opportunities to show the exact behavioral differences. Check back when more calls are reviewed.
            </p>
          </div>
        </motion.div>

        {/* ── Patterns ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Patterns</h2>
          <div className={styles.patternsGrid}>

            {/* Chronic */}
            <div className={styles.patternColumn}>
              <div className={`${styles.patternColumnHeader} ${styles.patternHeaderChronic}`}>Chronic</div>
              {chronicPatterns.map((p, i) => (
                <div key={i} className={`${styles.patternCard} ${styles.patternCardChronic}`}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--terracotta)', letterSpacing: '0.06em' }}>{p.rc}</span>
                  </div>
                  <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px', lineHeight: 1.4 }}>{p.title}</p>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', lineHeight: 1.6, marginBottom: '8px' }}>{p.summary}</p>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--ink)', lineHeight: 1.5, borderLeft: '2px solid var(--terracotta)', paddingLeft: '8px', fontStyle: 'italic' }}>Instead: {p.fix}</p>
                </div>
              ))}
            </div>

            {/* Emerging */}
            <div className={styles.patternColumn}>
              <div className={`${styles.patternColumnHeader} ${styles.patternHeaderEmerging}`}>Emerging</div>
              {emergingPatterns.map((p, i) => (
                <div key={i} className={`${styles.patternCard} ${styles.patternCardEmerging}`}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--mustard-dark)', letterSpacing: '0.06em' }}>{p.rc}</span>
                  </div>
                  <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px', lineHeight: 1.4 }}>{p.title}</p>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', lineHeight: 1.6, marginBottom: '8px' }}>{p.summary}</p>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--ink)', lineHeight: 1.5, borderLeft: '2px solid var(--mustard)', paddingLeft: '8px', fontStyle: 'italic' }}>Instead: {p.fix}</p>
                </div>
              ))}
            </div>

            {/* Resolved */}
            <div className={styles.patternColumn}>
              <div className={`${styles.patternColumnHeader} ${styles.patternHeaderResolved}`}>Resolved</div>
              {resolvedPatterns.map((p, i) => (
                <div key={i} className={`${styles.patternCard} ${styles.patternCardResolved}`}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--sage-dark)', letterSpacing: '0.06em' }}>{p.rc}</span>
                  </div>
                  <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px', lineHeight: 1.4 }}>{p.title}</p>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', lineHeight: 1.6, marginBottom: '8px' }}>{p.summary}</p>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--ink)', lineHeight: 1.5, borderLeft: '2px solid var(--sage)', paddingLeft: '8px', fontStyle: 'italic' }}>Note: {p.fix}</p>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

        {/* ── Calls (collapsible) ── */}
        <motion.div className={styles.section} {...SPRING}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', paddingBottom: '12px', borderBottom: 'var(--rule-lt)' }}>
            <h2 className={styles.sectionTitle} style={{ margin: 0, padding: 0, border: 'none' }}>
              This Week&apos;s Calls
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
                <span>Period Average: <strong>28 / 100</strong></span>
                <span>Calls Reviewed: <strong>1</strong></span>
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
                  <span className={styles.reportScore}>{r.score}</span>
                  <span className={styles.reportDate}>{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Jean Pierre Riviere · Mid-Week Report · April 22, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC4 · RC6 · Callback Surrender · Compliance Sequence · SEP Detection · Referral Handling</p>
        </div>

      </div>
    </PageShell>
  )
}
