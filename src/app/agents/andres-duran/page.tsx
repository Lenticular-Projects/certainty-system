'use client'

import { useState } from 'react'
import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Mid-Week Report: April 22, 2026 ─────────────────────────────────────────
// CRM snapshot: Apr 13–17 (last week): 141 calls · 15 sales · 10.64% · $127.93 CPA
// This period Apr 20–21: 56 calls · 5 sales · 8.93% · $141.40 CPA

const trendRows = [
  { metric: 'Sales',      prior: '15',     current: '5',      delta: '−10',     dir: 'neutral' as const },
  { metric: 'Conversion', prior: '10.64%', current: '8.93%',  delta: '−1.71pp', dir: 'down' as const },
  { metric: 'CPA',        prior: '$128',   current: '$141',   delta: '+$13',    dir: 'down' as const },
  { metric: 'Calls',      prior: '141',    current: '56',     delta: '(2 days)', dir: 'neutral' as const },
]

const callsByDate = [
  {
    date: 'Monday, April 20',
    calls: [
      { consumer: 'Kate Cohen',     duration: '19:54', score: 44, outcome: 'MISSED OPPORTUNITY', type: 'Surrender at the Close', href: '/agents/andres-duran/calls/kate-cohen' },
      { consumer: 'Loretta Summers', duration: '41:51', score: 64, outcome: 'MISSED OPPORTUNITY', type: 'SEP Too Late', href: '/agents/andres-duran/calls/loretta-summers' },
      { consumer: 'Mary Kaulait',   duration: '44:23', score: 82, outcome: 'ENROLLED',           type: 'Medicaid Dual — Strong Close', href: '/agents/andres-duran/calls/mary-kaulait' },
    ],
  },
  {
    date: 'Tuesday, April 21',
    calls: [
      { consumer: 'Charles Dillard', duration: '16:32', score: 32, outcome: 'MISSED OPPORTUNITY', type: 'Double Surrender', href: '/agents/andres-duran/calls/charles-dillard' },
      { consumer: 'Mark Klesmeyer',  duration: '18:07', score: 57, outcome: 'MISSED OPPORTUNITY', type: 'Collapse at Objection', href: '/agents/andres-duran/calls/mark-klesmeyer' },
      { consumer: 'Ronald Jones',    duration: '43:31', score: 76, outcome: 'ENROLLED',           type: 'C-SNP Correct Identify', href: '/agents/andres-duran/calls/ronald-jones' },
    ],
  },
]

const tells = {
  enrolled: [
    { call: 'Mary Kaulait', ts: '28:14', quote: '"I want to make sure that the bills are going to stop coming." → Andres anchored to $0 out-of-pocket MOOP before closing.' },
    { call: 'Ronald Jones', ts: '23:49', quote: '"What I\'m going to do next, Mr. Jones, I\'m going to read over the devoted chronic condition plan..." → assumptive language, named the plan by type, moved to enrollment without asking permission.' },
  ],
  missed: [
    { call: 'Kate Cohen',     ts: '18:49', quote: '"So, I\'m not sure how to move forward at this point." → Self-interest pivot after consumer raised Medicare confusion. Case was built. Math was delivered. Close was there.' },
    { call: 'Charles Dillard', ts: '5:47', quote: 'After "I want to keep what I\'ve got" AND "I\'ve got a friend who\'s an insurance agent" — both surrendered without a single reframe attempt in 90 seconds.' },
  ],
}

const patterns = {
  chronic: [
    {
      title: 'Close window opens — presenting continues',
      rc: 'RC1',
      urgency: 'critical' as const,
      summary: 'On 4 of 6 calls this week the close signal arrived before you acted. Kate Cohen\'s lung cancer disclosure at 15:00, Mark Klesmeyer\'s agreement on doctor network, Ronald Jones\'s "I\'m on disability" — each was a green light. The two enrolled calls this week closed because you moved. The four missed calls show what happens when you don\'t.',
      fix: '"Exactly — let\'s get that locked in. Can I confirm your date of birth?"',
    },
    {
      title: 'Objection gets surrender, not reframe',
      rc: 'RC2',
      urgency: 'critical' as const,
      summary: 'Charles Dillard: two consecutive surrenders in 90 seconds — zero math presented at any point. Kate Cohen: Medicare clarification confusion → "I\'m not sure how to move forward." Mark Klesmeyer: doctor objection → dismissed and case never recovered. One reframe attempt per objection is the floor. None was attempted on any missed call.',
      fix: '"I hear you — and that\'s exactly why I want to make sure you\'re protected. Let me show you one number."',
    },
  ],
  emerging: [
    {
      title: 'SEP detection delayed until too late in call',
      rc: 'RC6',
      urgency: 'high' as const,
      summary: 'Loretta Summers: SEP qualification attempted at 37:36 — after 37 minutes of rapport and plan presentation. The DST SEP didn\'t apply. An INT or ICEP check at minute 3 would have changed the outcome. Mark Klesmeyer: Part B started 2026 = active ICEP window. Never identified. Charles Dillard: aortic valve replacement mentioned = C-SNP pathway year-round. Missed.',
      fix: 'SEP check goes in the first 3 minutes of discovery. "When did your Medicare coverage begin?" "Have there been any changes to your Medicaid or income recently?"',
    },
  ],
  resolved: [
    {
      title: 'Medicare education and benefit math',
      rc: 'RC3',
      urgency: 'medium' as const,
      summary: 'Kate Cohen\'s drug comparison ($600→$67 Trelegy) and Mark Klesmeyer\'s specialist verification (6 doctors confirmed) show strong technical work. The knowledge is not the problem — deployment timing is.',
      fix: 'Already doing this. Keep anchoring benefit math before the close.',
    },
  ],
}

const reportHistory = [
  { title: 'Mid-Week Report — April 22', type: 'Mid-Week', date: 'Apr 22, 2026', meta: 'Sales: 5 ↓ · CPA: $141 ↑', active: true },
  { title: 'Weekly Brief — April 13–17', type: 'Weekly Brief', date: 'Apr 20, 2026', meta: '58 / 100 avg · 7 calls', active: false },
  { title: 'Weekly Brief — April 14', type: 'Weekly Brief', date: 'Apr 16, 2026', meta: '38 / 100 avg', active: false },
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

export default function AndresDuranPage() {
  const [callsOpen, setCallsOpen] = useState(false)

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
          <h1 className={styles.agentName}>Andres Duran</h1>
          <p className={styles.period}>April 22, 2026</p>
          <p className={styles.updatedAt}>Updated Apr 22 · 6 calls reviewed · Apr 20–21</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(59) }}>59</span>
            <span className={styles.scoreLabel}>Period Average</span>
            <span className={styles.scoreRange}>6 calls · Apr 20–21</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>6</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Mon–Tue this week</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>2</span>
            <span className={styles.scoreLabel}>Enrolled</span>
            <span className={styles.scoreRange}>4 Missed · 8.93% conversion</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>RC1</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Close window missed · 4 of 6 calls</span>
          </div>
        </motion.div>

        {/* ── CRM Trend Snapshot ── */}
        <motion.div className={styles.section} {...SPRING}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid rgba(19,17,16,0.08)' }}>
            <h2 className={styles.sectionTitle} style={{ margin: 0, padding: 0, border: 'none' }}>CRM Trend Snapshot</h2>
            <span style={{ fontSize: '0.75rem', color: 'var(--ink-60)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Apr 20–21 vs Apr 13–17</span>
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
            Note: This period is 2 days vs. 5 days last week. Sales pace projection: ~12.5/week if rate holds.
          </p>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When the math lands and the consumer reacts &mdash; pause, stop presenting, go to enrollment. You proved you can build the case on every call this week. The only variable is whether you close the moment it&apos;s ready. Enrolled calls close because the agent moves. Missed calls stall because the presentation keeps going.</p>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p>Two enrollments from six calls — Mary Kaulait at 82 and Ronald Jones at 76. Both calls closed because you identified the right anchor and moved to enrollment without hesitating. Mary&apos;s MOOP comparison ($9,250→$0) and Ronald&apos;s C-SNP identification were technically correct and deployed at the right moment. That&apos;s working.</p>
            <p><strong>What&apos;s costing you:</strong> Four missed calls all show the same gap — the case was built but the close never came. Charles Dillard had aortic valve replacement on the table (C-SNP pathway, year-round eligibility). Mark Klesmeyer had six specialists confirmed and $2,208/year in rebates ready. Kate Cohen had a drug savings comparison that landed. In each case, the moment passed while the presentation continued. One reframe attempt per objection is the floor. On Charles and Kate, zero attempts were made.</p>
            <p><strong>Compliance note on Mary Kaulait:</strong> The call enrolled correctly and the plan is right for the consumer. However, DST SEP was cited at 24:03 instead of INT (Medicaid = year-round qualifying event). The enrollment stands — the SEP code documentation is the issue. Verify the SEP code on file with your supervisor before the next Medicaid call.</p>
          </div>
        </motion.div>

        {/* ── Your Tells ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Your Tells</h2>
          <div className={styles.yourTells}>
            <div className={styles.tellsBlock}>
              <span className={styles.tellsHeader} style={{ color: 'var(--sage-dark)' }}>When You Enroll</span>
              <ul className={styles.tellsList}>
                {tells.enrolled.map((t, i) => (
                  <li key={i}>
                    <span className={styles.tellCall}>{t.call} · {t.ts}</span>
                    <span className={styles.tellQuote}>{t.quote}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.tellsBlock}>
              <span className={styles.tellsHeader} style={{ color: 'var(--terracotta)' }}>When You Miss</span>
              <ul className={styles.tellsList}>
                {tells.missed.map((t, i) => (
                  <li key={i}>
                    <span className={styles.tellCall}>{t.call} · {t.ts}</span>
                    <span className={styles.tellQuote}>{t.quote}</span>
                  </li>
                ))}
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
              {patterns.chronic.map((p, i) => (
                <div key={i} className={`${styles.patternCard} ${styles[`priority_${p.urgency}`]}`}>
                  <div className={styles.priorityHeader}>
                    <span className={`${styles.urgencyBadge} ${styles[`badge_${p.urgency}`]}`}>
                      {p.urgency === 'critical' ? 'CRITICAL' : 'HIGH'}
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

            {/* Emerging */}
            <div className={styles.patternColumn}>
              <span className={`${styles.patternColumnHeader} ${styles.patternColEmerging}`}>Emerging</span>
              {patterns.emerging.map((p, i) => (
                <div key={i} className={`${styles.patternCard} ${styles[`priority_${p.urgency}`]}`}>
                  <div className={styles.priorityHeader}>
                    <span className={`${styles.urgencyBadge} ${styles.badge_high}`}>HIGH</span>
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
              {patterns.resolved.map((p, i) => (
                <div key={i} className={`${styles.patternCard} ${styles.priority_medium}`}>
                  <div className={styles.priorityHeader}>
                    <span className={`${styles.urgencyBadge} ${styles.badge_medium}`}>STRENGTH</span>
                    <span className={styles.rcCode}>{p.rc}</span>
                  </div>
                  <p className={styles.priorityTitle}>{p.title}</p>
                  <p className={styles.priorityDetail}>{p.summary}</p>
                  <div className={styles.priorityMove}>
                    <span className={styles.priorityMoveLabel}>Keep doing</span>
                    <p className={styles.priorityMoveText}>{p.fix}</p>
                  </div>
                </div>
              ))}
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
                <span>Period Average: <strong>59 / 100</strong></span>
                <span>Enrolled: <strong>2 of 6</strong></span>
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
          <p>The Certainty System · Andres Duran · Mid-Week Report · April 22, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC2 · RC6 · Close Window · SEP Detection · C-SNP · ICEP · Compliance Flag</p>
        </div>

      </div>
    </PageShell>
  )
}
