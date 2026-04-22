'use client'

import { useState } from 'react'
import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Mid-Week Report: April 20–22, 2026 ──────────────────────────────────────
// CRM: Apr 13–17  → 115 calls · 87 billable · 7 sales · 6.09% conv · $215.29 CPA
//       Apr 20–21 → 35 calls  · 31 billable · 1 sale  · 2.86% conv · $430 CPA

// ── Trend Snapshot ───────────────────────────────────────────────────────────
const trendRows: Array<{ metric: string; lastWeek: string; thisPeriod: string; movement: string; dir: 'good' | 'bad' | 'neutral'; note: string }> = [
  {
    metric: 'Sales',
    lastWeek: '7',
    thisPeriod: '1',
    movement: '↓ −6',
    dir: 'bad',
    note: '1 sale through Tuesday',
  },
  {
    metric: 'Conversion',
    lastWeek: '6.09%',
    thisPeriod: '2.86%',
    movement: '↓ −3.23pp',
    dir: 'bad',
    note: 'Less than half of last week',
  },
  {
    metric: 'CPA',
    lastWeek: '$215',
    thisPeriod: '$430',
    movement: '↑ +$215',
    dir: 'bad',
    note: 'Doubled — every sale costs twice as much',
  },
]

// ── Current period calls (Apr 20–21) ─────────────────────────────────────────
const callsByDate = [
  {
    date: 'Tuesday, April 21',
    calls: [
      {
        consumer: 'Anna Lyon',
        duration: '12:55',
        score: 59,
        outcome: 'CORRECT NO-SALE',
        outcomeNote: 'No qualifying product in area',
        type: 'Money Caller / Resistant Switcher',
        href: '/agents/rosina-klimoski/calls/anna-lyon',
      },
    ],
  },
]

// ── Patterns (3-column: Chronic · Emerging · Resolved) ───────────────────────
const chronicPatterns = [
  {
    title: 'Exit accepted without a reframe',
    rc: 'RC1',
    summary: 'Consumer gives you an exit — you acknowledge and move on instead of holding ground.',
    fix: 'Before any call ends without an enrollment, deploy one targeted reframe. Every time.',
  },
  {
    title: 'Math presented, never humanized',
    rc: 'RC3',
    summary: 'Numbers are stated but never connected to what the consumer told you matters.',
    fix: 'After every benefit figure: name the annual number, then connect it to their actual life.',
  },
]

const emergingPatterns = [
  {
    title: 'Client Gold filed, never deployed',
    rc: 'RC2',
    summary: 'On the Anna Lyon call, a food bank + $1,121/month was acknowledged and immediately set aside.',
    fix: '"You told me you\'re at the food bank. This plan puts $110 back in your pocket every month — that\'s the grocery money."',
  },
]

const resolvedPatterns = [
  {
    title: 'SEP signal blind spot',
    rc: 'RC6',
    summary: 'COPD disclosed mid-call — you immediately checked for a C-SNP pathway before ruling it out.',
    fix: 'Keep doing this. Check before you close the door.',
  },
]

// ── Past reports ──────────────────────────────────────────────────────────────
const pastReports = [
  {
    label: 'Apr 16 · Weekly Brief',
    meta: 'Apr 13–14 (partial) · Avg: 41 / 100',
    active: false,
  },
  {
    label: 'Apr 20 · Weekly Brief',
    meta: 'Apr 13–17 · Avg: 49 / 100 · 11 calls',
    active: false,
  },
  {
    label: 'Apr 22 · Mid-Week',
    meta: 'Sales: 1 ↓ · CPA: $430 ↑',
    active: true,
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

// ── Page ──────────────────────────────────────────────────────────────────────
export default function RosinaKlimoskiPage() {
  const [callsOpen, setCallsOpen] = useState(true)

  return (
    <PageShell signal="green">
      <div className={styles.page}>

        {/* ── Header ── */}
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Mid-Week Report — April 22, 2026</span>
          </div>
          <h1 className={styles.agentName}>Rosina Klimoski</h1>
          <p className={styles.period}>Week of April 20–22, 2026</p>
          <p className={styles.updatedAt}>Updated April 22 · 1 call reviewed</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(59) }}>59</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>1 call reviewed · Apr 21</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>1</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 20–21, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--ink-60)' }}>1</span>
            <span className={styles.scoreLabel}>CRM Sale</span>
            <span className={styles.scoreRange}>vs 7 last week · 1 correct no-sale</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>RC1</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Exit accepted without a reframe</span>
          </div>
        </motion.div>

        {/* ── Trend Snapshot ── */}
        <motion.div className={styles.trendSnapshot} {...SPRING}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '16px' }}>
            <h2 className={styles.sectionTitle} style={{ margin: 0, padding: 0, border: 'none' }}>CRM Trend Snapshot</h2>
            <span style={{ fontSize: '0.75rem', color: 'var(--ink-60)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Wk Apr 13–17 → Apr 20–21</span>
          </div>
          <div className={styles.trendTable}>
            <div className={styles.trendHeader}>
              <span>Metric</span>
              <span>Last Week</span>
              <span>This Period</span>
              <span>Change</span>
            </div>
            {trendRows.map((row, i) => (
              <div key={i} className={styles.trendRow}>
                <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--ink)' }}>{row.metric}</span>
                <span style={{ fontSize: '0.9375rem', color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{row.lastWeek}</span>
                <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--ink)', fontVariantNumeric: 'tabular-nums' }}>{row.thisPeriod}</span>
                <span className={row.dir === 'good' ? styles.trendUp : styles.trendDown} style={{ fontSize: '0.8125rem', fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>
                  {row.movement}
                  <span style={{ display: 'block', fontSize: '0.6875rem', fontWeight: 400, color: 'var(--ink-60)', marginTop: '2px' }}>{row.note}</span>
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>
            When a consumer hands you their pain — &ldquo;I&apos;m sitting at a food bank right now&rdquo; — that&apos;s not a beat to acknowledge and move past. That&apos;s the enrollment narrative. File it. Deploy it when you present the plan. &ldquo;Ms. Anna, you told me you were at the food bank. This plan puts $110 back in your Social Security every single month. That&apos;s groceries. That&apos;s exactly what it&apos;s designed for.&rdquo; The number doesn&apos;t close the call. The number connected to their reality does.
          </p>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <h2 className={styles.sectionTitle}>Executive Summary</h2>
          <div className={styles.execSummaryInner}>
            <p>
              One sale through Tuesday. Last week you put up 7. Conversion is at 2.86% against 6.09% last week and CPA has doubled to $430. The reviewed call &mdash; Anna Lyon on Tuesday &mdash; was a correct no-sale: no qualifying product existed, consumer was VA-only, no C-SNP in her area, and her resistance was rooted in real prior trauma. You ran compliance cleanly, kept a resistant opener on the line for nearly 13 minutes, and correctly ruled out every pathway before calling the no-sale. That&apos;s solid professional judgment. The coaching opportunity is everything that happened between the food bank comment at 2:27 and the close.
            </p>
            <p>
              <strong>What&apos;s working:</strong> you kept Anna on the line when most agents would have lost her in the first 60 seconds. Your opening pivot &mdash; &ldquo;we&apos;re not going to change anything unless you decide yes&rdquo; &mdash; was natural and earned 12 more minutes of engagement. When COPD came up at 9:23, you immediately checked for a C-SNP pathway before ruling it out &mdash; that&apos;s SEP awareness most agents don&apos;t have. And when Anna asked about the Part D penalty at 11:30, you gave her the correct answer about VA credible coverage with real confidence. That knowledge builds trust in a way that generic agents can&apos;t.
            </p>
            <p>
              <strong>What&apos;s costing you:</strong> Anna told you she was at a food bank on $1,121 a month. You said &ldquo;yeah I know&rdquo; and moved to data collection. When you presented the $110/month giveback at 8:02, you stated the number &mdash; but you never connected it to Anna&apos;s food bank, her rent, her $1,121 income. When she restated &ldquo;I do not wish to switch&rdquo; at 8:38, you accepted it instead of deploying the one reframe that addresses her actual fear: &ldquo;you only use the VA &mdash; not one doctor changes.&rdquo; The math was there. The humanization wasn&apos;t. That&apos;s the correction for the rest of this week.
            </p>
          </div>
        </motion.div>

        {/* ── YOUR TELLS ── */}
        <motion.div className={styles.yourTells} {...SPRING}>
          <h2 className={styles.sectionTitle}>Your Tells</h2>
          <div className={styles.tellsBlock}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>Needs more data</span>
            <p style={{ fontSize: '0.9rem', color: 'var(--ink-60)', marginTop: '8px', lineHeight: 1.65 }}>
              Your Tells compares enrolled vs. missed calls to show the exact behavioral delta that&apos;s costing you conversions. With 1 reviewed call this period, there isn&apos;t enough data yet. This section will populate in the next report once more calls are reviewed.
            </p>
          </div>
        </motion.div>

        {/* ── Patterns: Chronic · Emerging · Resolved ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Patterns</h2>
          <div className={styles.patternsGrid}>

            {/* Chronic */}
            <div className={styles.patternColumn}>
              <div className={styles.patternColumnHeader} style={{ background: 'var(--tc-tint)', color: 'var(--terracotta)' }}>
                Chronic
              </div>
              {chronicPatterns.map((p, i) => (
                <div key={i} className={styles.patternCard}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.06em', color: 'var(--terracotta)', background: 'var(--tc-tint)', padding: '2px 7px', borderRadius: '4px' }}>{p.rc}</span>
                  </div>
                  <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px', lineHeight: 1.4 }}>{p.title}</p>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', lineHeight: 1.6, marginBottom: '10px' }}>{p.summary}</p>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--ink)', lineHeight: 1.55, fontStyle: 'italic', borderLeft: '3px solid var(--terracotta)', paddingLeft: '10px' }}>
                    Instead: {p.fix}
                  </p>
                </div>
              ))}
            </div>

            {/* Emerging */}
            <div className={styles.patternColumn}>
              <div className={styles.patternColumnHeader} style={{ background: 'var(--mustard-tint)', color: 'var(--mustard-dark)' }}>
                Emerging
              </div>
              {emergingPatterns.map((p, i) => (
                <div key={i} className={styles.patternCard}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.06em', color: 'var(--mustard-dark)', background: 'var(--mustard-tint)', padding: '2px 7px', borderRadius: '4px' }}>{p.rc}</span>
                  </div>
                  <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px', lineHeight: 1.4 }}>{p.title}</p>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', lineHeight: 1.6, marginBottom: '10px' }}>{p.summary}</p>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--ink)', lineHeight: 1.55, fontStyle: 'italic', borderLeft: '3px solid var(--mustard)', paddingLeft: '10px' }}>
                    Instead: {p.fix}
                  </p>
                </div>
              ))}
            </div>

            {/* Resolved */}
            <div className={styles.patternColumn}>
              <div className={styles.patternColumnHeader} style={{ background: 'var(--sage-tint)', color: 'var(--sage-dark)' }}>
                Resolved
              </div>
              {resolvedPatterns.map((p, i) => (
                <div key={i} className={styles.patternCard}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.06em', color: 'var(--sage-dark)', background: 'var(--sage-tint)', padding: '2px 7px', borderRadius: '4px' }}>{p.rc}</span>
                  </div>
                  <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px', lineHeight: 1.4 }}>{p.title}</p>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', lineHeight: 1.6, marginBottom: '10px' }}>{p.summary}</p>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--ink)', lineHeight: 1.55, fontStyle: 'italic', borderLeft: '3px solid var(--sage)', paddingLeft: '10px' }}>
                    {p.fix}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

        {/* ── This Period's Calls ── */}
        <motion.div className={styles.section} {...SPRING}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', paddingBottom: '12px', borderBottom: 'var(--rule-lt)' }}>
            <h2 className={styles.sectionTitle} style={{ margin: 0, padding: 0, border: 'none' }}>This Period&apos;s Calls</h2>
            <button
              className={styles.collapsibleCallsToggle}
              onClick={() => setCallsOpen(v => !v)}
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
                <span>Period Average: <strong>59 / 100</strong></span>
                <span>Enrolled: <strong>0 of 1</strong> · Correct No-Sales: <strong>1</strong></span>
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
                <span className={styles.reportTitle}>{r.label}</span>
                <span className={styles.reportDate}>{r.meta}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Rosina Klimoski · Mid-Week April 20–22, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC2 · RC3 · Anna Lyon · Client Gold · Humanization · SEP Awareness · Correct No-Sale</p>
        </div>

      </div>
    </PageShell>
  )
}
