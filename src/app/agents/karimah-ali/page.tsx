'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import { useState } from 'react'
import styles from './page.module.css'

// ── Mid-Week Report: April 22, 2026 (Apr 20–21 calls) ───────────────────────

// CRM Trend Data
const trendRows = [
  {
    metric: 'Sales',
    lastWeek: '14',
    thisPeriod: '6 (2 days)',
    movement: '↑ On pace for 15+',
    dir: 'up' as const,
  },
  {
    metric: 'Conversion',
    lastWeek: '14.89%',
    thisPeriod: '15.38%',
    movement: '↑ +0.49pp',
    dir: 'up' as const,
  },
  {
    metric: 'CPA',
    lastWeek: '$83.57',
    thisPeriod: '$49.67',
    movement: '↓ −$33.90',
    dir: 'down_good' as const,
  },
]

// Calls
const callsByDate = [
  {
    date: 'Monday, April 20',
    calls: [
      {
        consumer: 'Marie Jean',
        duration: '1:36:26',
        score: 79,
        outcome: 'ENROLLED',
        outcomeNote: 'C-SNP — Diabetes · ICEP · Delray Beach',
        type: 'New to Medicare — High Complexity',
        href: '/agents/karimah-ali/calls/marie-jean',
      },
    ],
  },
  {
    date: 'Tuesday, April 21',
    calls: [
      {
        consumer: 'Wilhelm Patt',
        duration: '52:00',
        score: 75,
        outcome: 'ENROLLED',
        outcomeNote: 'C-SNP — Pacemaker · CSN · Miami',
        type: 'The Exhausted Compliant — High Difficulty',
        href: '/agents/karimah-ali/calls/wilhelm-patt',
      },
    ],
  },
]

// Patterns — Chronic / Emerging / Resolved
const chronicPatterns = [
  {
    title: 'Math stops at the number — never lands',
    rc: 'RC3',
    summary: 'You state the benefit. You never annualize it or tie it to what the consumer just told you about their life.',
    fix: 'After any dollar figure: "That\'s $X more per month — over $Y a year." Then use their words: "You told me [situation]. This plan puts that money back in your pocket."',
  },
  {
    title: 'Client Gold acknowledged — not deployed',
    rc: 'RC2',
    summary: 'When consumers disclose fear, isolation, or financial desperation, you respond with warmth and move on. The emotional anchor never becomes an enrollment reason.',
    fix: 'Pause on the signal. Connect it explicitly: "What you just told me is exactly why we\'re getting this done today." Then name the benefit that addresses their specific fear.',
  },
]

const emergingPatterns = [
  {
    title: 'Extended live searches risk consumer dropout',
    rc: 'RC1',
    summary: 'Doctor and research holds are running 9–25 minutes. With fragile or fatigued consumers, every minute of silence is a hangup risk.',
    fix: 'Set a time anchor before going on hold: "Give me 60 seconds." Return with one confident recommendation, not parallel options. Move immediately to confirmation.',
  },
]

const resolvedPatterns = [
  {
    title: 'SSN-first verification friction',
    rc: 'RC1',
    summary: 'Previously led with SSN before offering the Medicare card. On both Apr 20–21 calls, verification sequencing was handled correctly — card offered first, SSN as backup.',
    fix: 'Pattern resolved. Medicare card first, SSN only when unavailable.',
  },
]

// Report History
const reportHistory = [
  {
    label: 'Apr 16',
    title: 'Weekly Brief — April 14 (partial)',
    type: 'Weekly Brief',
    score: '51 avg',
    trendNote: null,
    active: false,
  },
  {
    label: 'Apr 20',
    title: 'Weekly Brief — April 13–17',
    type: 'Weekly Brief',
    score: '62 avg',
    trendNote: 'Sales: 14 · CPA: $84',
    active: false,
  },
  {
    label: 'Apr 22',
    title: 'Mid-Week Report — April 20–21',
    type: 'Mid-Week Report',
    score: '77 avg',
    trendNote: 'Sales: 6 ↑ · CPA: $50 ↓',
    active: true,
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

// ── Component ─────────────────────────────────────────────────────────────────

export default function KarimahAliPage() {
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
          <h1 className={styles.agentName}>Karimah Ali</h1>
          <p className={styles.period}>Week of April 20–22, 2026</p>
          <p className={styles.updatedAt}>Updated April 22 · 2 calls reviewed</p>
        </motion.div>

        {/* ── Trend Snapshot ── */}
        <motion.div className={`${styles.section} ${styles.trendSnapshot}`} {...SPRING}>
          <h2 className={styles.sectionTitle}>CRM Trend Snapshot</h2>
          <div className={styles.trendTable}>
            <div className={styles.trendHeader}>
              <span>Metric</span>
              <span>Last Week (Apr 13–17)</span>
              <span>This Period (Apr 20–21)</span>
              <span>Movement</span>
            </div>
            {trendRows.map((row, i) => (
              <div key={i} className={styles.trendRow}>
                <span className={styles.trendMetric}>{row.metric}</span>
                <span className={styles.trendVal}>{row.lastWeek}</span>
                <span className={`${styles.trendVal} ${styles.trendValCurrent}`}>{row.thisPeriod}</span>
                <span
                  className={
                    (row.dir as string) === 'up'
                      ? styles.trendUp
                      : row.dir === 'down_good'
                      ? styles.trendUp
                      : styles.trendDown
                  }
                >
                  {row.movement}
                </span>
              </div>
            ))}
          </div>
          <p className={styles.trendCaption}>
            6 sales in 2 days. Conversion holding at 15.38% — elite. CPA at $49.67 — lowest on the team. TOP PERFORMER territory.
          </p>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>
            You&apos;re closing difficult calls that most agents don&apos;t even attempt — a 96-minute fragile new enrollee, a 78-year-old who tried to hang up five times two days out of the hospital. Both enrolled. Both correct plans. The one move that turns a 77 average into a 90: when someone tells you they need money, they&apos;re lonely, they nearly died — stop and connect the plan to that exact fear. You have the number. You have their words. The only step missing is the bridge between the two.
          </p>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p>
              <strong>What&apos;s working:</strong> You are identifying C-SNP eligibility on the first clinical signal — diabetes at 5:42 on the Marie Jean call, pacemaker at 9:21 on the Wilhelm Patt call — and enrolling into the correct plan both times. That&apos;s not routine. Most agents miss C-SNP qualifiers entirely or default to standard plans. On top of that, you held a 96-minute call together through chaos and held a resistant 78-year-old through five termination attempts. Both consumers enrolled. Your compliance execution is thorough — all Phase VI elements delivered, voice signatures clean, post-enrollment steps completed. The CRM numbers back it up: 15.38% conversion and a $49.67 CPA are elite-level production in two days.
            </p>
            <p>
              <strong>What&apos;s costing you:</strong> The math never completes. You stated the $195 grocery benefit on the Marie Jean call — but at 51:41 she told you &ldquo;I have to go back to work, I need money.&rdquo; You had $1,080 per year sitting right there. You didn&apos;t say it. On the Patt call, $170/month became $2,040/year — also never stated. And when both consumers disclosed things that mattered — Marie&apos;s loneliness, her grandmother dying of diabetes, Wilhelm&apos;s near-death experience — you responded with warmth and moved on. That warmth is real, and it builds trust. The step that&apos;s missing: turning the warmth into an enrollment anchor. &ldquo;What you just told me is exactly why we&apos;re getting this done today.&rdquo; Then name the benefit that addresses their fear. Three sentences. Every time.
            </p>
          </div>
        </motion.div>

        {/* ── Your Tells ── */}
        <motion.div className={`${styles.section} ${styles.yourTells}`} {...SPRING}>
          <h2 className={styles.sectionTitle}>Your Tells</h2>
          <div className={styles.tellsBlock}>
            <p className={styles.tellsNote}>Needs more data — coming in next report.</p>
            <p className={styles.tellsSubnote}>
              Your Tells tracks the behavioral delta between your enrolled calls and your missed ones. With only 2 reviewed calls this period — both enrollments — the pattern can&apos;t be isolated yet. Check back next report.
            </p>
          </div>
        </motion.div>

        {/* ── Patterns ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Patterns</h2>
          <div className={styles.patternsGrid}>

            {/* Chronic */}
            <div className={styles.patternColumn}>
              <div className={`${styles.patternColumnHeader} ${styles.patternHeaderChronic}`}>
                Chronic
              </div>
              {chronicPatterns.map((p, i) => (
                <div key={i} className={`${styles.patternCard} ${styles.patternCardChronic}`}>
                  <div className={styles.patternCardTop}>
                    <span className={styles.patternRc}>{p.rc}</span>
                  </div>
                  <p className={styles.patternTitle}>{p.title}</p>
                  <p className={styles.patternSummary}>{p.summary}</p>
                  <div className={styles.patternFix}>
                    <span className={styles.patternFixLabel}>Instead:</span>
                    <span className={styles.patternFixText}>{p.fix}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Emerging */}
            <div className={styles.patternColumn}>
              <div className={`${styles.patternColumnHeader} ${styles.patternHeaderEmerging}`}>
                Emerging
              </div>
              {emergingPatterns.map((p, i) => (
                <div key={i} className={`${styles.patternCard} ${styles.patternCardEmerging}`}>
                  <div className={styles.patternCardTop}>
                    <span className={styles.patternRc}>{p.rc}</span>
                  </div>
                  <p className={styles.patternTitle}>{p.title}</p>
                  <p className={styles.patternSummary}>{p.summary}</p>
                  <div className={styles.patternFix}>
                    <span className={styles.patternFixLabel}>Instead:</span>
                    <span className={styles.patternFixText}>{p.fix}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Resolved */}
            <div className={styles.patternColumn}>
              <div className={`${styles.patternColumnHeader} ${styles.patternHeaderResolved}`}>
                Resolved
              </div>
              {resolvedPatterns.map((p, i) => (
                <div key={i} className={`${styles.patternCard} ${styles.patternCardResolved}`}>
                  <div className={styles.patternCardTop}>
                    <span className={styles.patternRc}>{p.rc}</span>
                  </div>
                  <p className={styles.patternTitle}>{p.title}</p>
                  <p className={styles.patternSummary}>{p.summary}</p>
                  <div className={styles.patternFix}>
                    <span className={styles.patternFixLabel}>Status:</span>
                    <span className={styles.patternFixText}>{p.fix}</span>
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
              {callsExpanded ? 'Collapse' : 'Expand'}
            </button>
          </div>

          {callsExpanded && (
            <div style={{ marginTop: '20px' }}>
              {callsByDate.map((group) => (
                <div key={group.date} style={{ marginBottom: '1.5rem' }}>
                  <p className={styles.dateLabel}>{group.date}</p>
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
                          <Link
                            href={call.href}
                            style={{
                              color: 'inherit',
                              textDecoration: 'underline',
                              textDecorationColor: 'var(--ink-20)',
                              textUnderlineOffset: '3px',
                            }}
                          >
                            {call.consumer}
                          </Link>
                        </span>
                        <span className={styles.callMeta}>{call.duration}</span>
                        <span className={styles.callScore} style={{ color: scoreColor(call.score) }}>
                          {call.score}
                        </span>
                        <span className={styles.outcomeCell}>
                          <span className={`${styles.pill} ${outcomeClass(call.outcome)}`}>
                            {call.outcome}
                          </span>
                          {call.outcomeNote && (
                            <span className={styles.outcomeNote}>{call.outcomeNote}</span>
                          )}
                        </span>
                        <span className={styles.callType}>{call.type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className={styles.callTableFooter}>
                <span>
                  Period Average: <strong>77 / 100</strong>
                </span>
                <span>
                  Enrolled: <strong>2 of 2</strong>
                </span>
              </div>
            </div>
          )}
        </motion.div>

        {/* ── Report History ── */}
        <motion.div className={`${styles.section} ${styles.reportHistory}`} {...SPRING}>
          <h2 className={styles.sectionTitle}>Report History</h2>
          <div className={styles.reportHistoryList}>
            {reportHistory.map((r, i) => (
              <div
                key={i}
                className={`${styles.reportHistoryEntry} ${r.active ? styles.reportHistoryActive : ''}`}
              >
                <div className={styles.reportHistoryLeft}>
                  <span className={styles.reportHistoryLabel}>{r.label}</span>
                  <div className={styles.reportHistoryMeta}>
                    <span className={styles.reportHistoryType}>{r.type}</span>
                    <span className={styles.reportHistoryTitle}>{r.title}</span>
                  </div>
                </div>
                <div className={styles.reportHistoryRight}>
                  <span className={styles.reportHistoryScore}>{r.score}</span>
                  {r.trendNote && (
                    <span className={styles.reportHistoryTrend}>{r.trendNote}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Karimah Ali · Week of April 20–22, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>
            RC2 · RC3 · C-SNP · ICEP · CSN · Math Annualization · Client Gold Deployment · Doctor Search Efficiency
          </p>
        </div>

      </div>
    </PageShell>
  )
}
