'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import { useState } from 'react'
import styles from './page.module.css'

// ── Mid-Week Report: April 20–22, 2026 ──────────────────────────────────────

const trendRows = [
  {
    metric: 'Sales',
    prior: '6',
    priorLabel: 'Apr 13–17',
    current: '1',
    currentLabel: 'Apr 20–21',
    delta: '−5',
    dir: 'down' as const,
  },
  {
    metric: 'Conversion',
    prior: '5.17%',
    priorLabel: '80 billable',
    current: '2.00%',
    currentLabel: '40 billable',
    delta: '−3.17pp',
    dir: 'down' as const,
  },
  {
    metric: 'CPA',
    prior: '$247',
    priorLabel: 'last week',
    current: '$547',
    currentLabel: 'this period',
    delta: '+$300',
    dir: 'down' as const,
  },
]

const callsByDate = [
  {
    date: 'Sunday, April 20',
    calls: [
      {
        consumer: 'Vincent Arnel',
        duration: '16:26',
        score: 37,
        outcome: 'MISSED OPPORTUNITY',
        outcomeNote: 'Had the close — surrendered to single-plan mindset',
        type: 'C-SNP / Food Card — Plan Switcher',
        href: '/agents/ratika-kamboj/calls/vincent-arnel',
      },
    ],
  },
  {
    date: 'Monday, April 21',
    calls: [
      {
        consumer: 'Donovan Piper',
        duration: '19:07',
        score: 34,
        outcome: 'MISSED OPPORTUNITY',
        outcomeNote: 'INT SEP missed, math never built, call ended without close attempt',
        type: 'Food Card / Dual-Eligible — Loyal Switcher',
        href: '/agents/ratika-kamboj/calls/donovan-piper',
      },
      {
        consumer: 'Edward Brewster Jr.',
        duration: '43:58',
        score: 82,
        outcome: 'ENROLLED',
        outcomeNote: 'MOV SEP identified, grocery objection held, clean voice signature',
        type: 'Plan Upgrade / MOV SEP — Plan Switcher',
        href: '/agents/ratika-kamboj/calls/edward-brewster',
      },
    ],
  },
]

const patterns = {
  chronic: [
    {
      title: 'One plan in the bag',
      rc: 'RC1',
      urgency: 'critical' as const,
      summary: 'Vincent Arnel said "I don\'t want Devoted" four times. Donovan Piper said "I\'m staying with Aetna." Both calls ended without enrollment because you had no backup plan when your first recommendation got rejected.',
      fix: 'Instead: "You don\'t want that one — I hear you. Let me check every other option in your county right now." Then actually present the alternative.',
    },
  ],
  emerging: [
    {
      title: 'SEP pathway not named',
      rc: 'RC6',
      urgency: 'high' as const,
      summary: 'Vincent had Type 2 diabetes and depression — CSN SEP is year-round. Donovan had full Medicaid confirmed at 6:30 — INT SEP, D-SNP eligible. Neither pathway was named. Both calls had a legal, year-round enrollment mechanism available that you never used.',
      fix: 'Instead: "Because of [condition/Medicaid], you have a Special Enrollment Period open right now. You don\'t have to wait for open enrollment — I can take care of this today."',
    },
  ],
  resolved: [
    {
      title: 'Compliance delivery',
      rc: 'RC0',
      urgency: 'medium' as const,
      summary: 'TPMO, SOA, callback permission, and qualifying questions delivered cleanly on all three calls. Edward Brewster\'s full Phase VI — plan name, premium, disenrollment warning, understanding confirmation, voice signature — was complete and professional.',
      fix: 'Keep going: this is the foundation that makes every other skill possible.',
    },
  ],
}

const pastReports = [
  { title: 'Weekly Brief — April 14–15', type: 'Weekly Brief', date: 'Apr 16, 2026', score: '38 avg', active: false },
  { title: 'Weekly Brief — April 13–17', type: 'Weekly Brief', date: 'Apr 20, 2026', score: '41 avg', active: false },
  { title: 'Mid-Week Report — April 20–22', type: 'Mid-Week Report', date: 'Apr 22, 2026', score: '51 avg · Sales: 1 ↓ · CPA: $547 ↑', active: true },
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

export default function RatikaKambojPage() {
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
          <h1 className={styles.agentName}>Ratika Kamboj</h1>
          <p className={styles.period}>Week of April 20–22, 2026</p>
          <p className={styles.updatedAt}>Updated April 22 · 3 calls reviewed</p>
        </motion.div>

        {/* ── Trend Snapshot ── */}
        <motion.div className={styles.trendSnapshot} {...SPRING}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '16px' }}>
            <h2 className={styles.sectionTitle} style={{ margin: 0, padding: 0, border: 'none' }}>CRM Trend Snapshot</h2>
            <span style={{ fontSize: '0.75rem', color: 'var(--ink-60)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Apr 20–21 vs Apr 13–17</span>
          </div>
          <div className={styles.trendTable}>
            <div className={styles.trendHeader}>
              <span>Metric</span>
              <span>Last Week</span>
              <span>This Period</span>
              <span>Change</span>
            </div>
            {trendRows.map((row, i, arr) => (
              <div
                key={row.metric}
                className={styles.trendRow}
                style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.08)' : 'none' }}
              >
                <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--ink)' }}>{row.metric}</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ fontSize: '0.9375rem', fontVariantNumeric: 'tabular-nums', color: 'var(--ink-60)' }}>{row.prior}</span>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--ink-60)', opacity: 0.6 }}>{row.priorLabel}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ fontSize: '0.9375rem', fontWeight: 700, fontVariantNumeric: 'tabular-nums', color: 'var(--ink)' }}>{row.current}</span>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--ink-60)', opacity: 0.6 }}>{row.currentLabel}</span>
                </div>
                <span className={(row.dir as string) === 'down' ? styles.trendDown : (row.dir as string) === 'up' ? styles.trendUp : styles.trendNeutral} style={{ fontSize: '0.875rem', fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>
                  {row.delta}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When your first plan gets rejected, your job is not to keep selling that plan — it&apos;s to find a different one. &ldquo;You don&apos;t want that one — I hear you. Let me check every other option in your county right now.&rdquo; That sentence alone changes the outcome of both missed calls this week.</p>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p><strong>What&apos;s working:</strong> your compliance delivery is clean across all three calls. TPMO, SOA, callback permission — delivered correctly, on time, every time. On the Edward Brewster call, you found the MOV SEP from an address discrepancy in the system, confirmed the new county, navigated a frustrated consumer who called specifically for a grocery card you couldn&apos;t deliver, held position through two escalations, confirmed all three medications at $0, and took it all the way to voice signature. That&apos;s a complete call. The MOV SEP identification is exactly the kind of system-level awareness that separates agents who close from agents who don&apos;t.</p>
            <p><strong>What&apos;s costing you:</strong> one sale through Tuesday when you averaged six in a full week. Both missed calls had the same structure: you correctly diagnosed the consumer&apos;s problem, found a plan you believed in, and then had nowhere to go when the consumer said no to it. Vincent Arnel told you &ldquo;I don&apos;t want Devoted&rdquo; four times and asked &ldquo;Is there any other plan out there?&rdquo; twice — you never answered that question. Donovan Piper had full Medicaid confirmed at 6:30, which opened a year-round D-SNP enrollment pathway, and you never named it. The closes were there. The backup plan wasn&apos;t.</p>
          </div>
        </motion.div>

        {/* ── YOUR TELLS ── */}
        <motion.div className={styles.yourTells} {...SPRING}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '16px' }}>
            <h2 className={styles.sectionTitle} style={{ margin: 0, padding: 0, border: 'none' }}>Your Tells</h2>
            <span style={{ fontSize: '0.75rem', color: 'var(--ink-60)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Enrolled vs. Missed — 48-point delta</span>
          </div>
          <div className={styles.tellsBlock}>
            <div className={styles.tellsList}>
              <div style={{ borderBottom: '2px solid var(--sage)', paddingBottom: '10px', marginBottom: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '4px', background: 'var(--sage-tint)', color: 'var(--sage-dark)' }}>ENROLLED · 82</span>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--ink-60)' }}>Edward Brewster Jr. — 43:58</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  {[
                    'Found the MOV SEP from an address discrepancy in the system — called it out, built the enrollment on it',
                    'Consumer\'s primary ask (grocery card) was impossible — explained why, pivoted to dental + OTC, held position through two escalations without surrendering',
                    'Confirmed all 3 medications at $0 before the close — proactively closed the objection before it was raised',
                    'Framed the same carrier as an "upgrade" — reduced resistance by keeping the consumer in familiar territory',
                    'Clean Phase VI through to voice signature — plan name, premium, disenrollment warning, understanding confirmation, name + DOB + agreement',
                  ].map((item, i) => (
                    <li key={i} style={{ fontSize: '0.875rem', color: 'var(--ink)', lineHeight: 1.6, paddingLeft: '14px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, top: '6px', width: '5px', height: '5px', borderRadius: '50%', background: 'var(--sage)', display: 'block' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '4px', background: 'var(--tc-tint)', color: 'var(--terracotta)' }}>MISSED · 34–37</span>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--ink-60)' }}>Vincent Arnel + Donovan Piper</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  {[
                    'Had one plan ready — when it got rejected, the call had nowhere to go',
                    'Vincent asked "Is there any other plan out there?" twice. The answer was never given.',
                    'Donovan\'s full Medicaid confirmed at 6:30 — INT SEP, D-SNP eligible year-round. Never named.',
                    'CSN SEP (year-round, Vincent\'s diabetes + depression) identified the conditions but never used as the enrollment mechanism',
                    'Both calls ended without a close attempt — no ask, no micro-commitment, no callback locked',
                  ].map((item, i) => (
                    <li key={i} style={{ fontSize: '0.875rem', color: 'var(--ink)', lineHeight: 1.6, paddingLeft: '14px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, top: '6px', width: '5px', height: '5px', borderRadius: '50%', background: 'var(--terracotta)', display: 'block' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Patterns: Chronic · Emerging · Resolved ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Patterns</h2>
          <div className={styles.patternsGrid}>
            {/* Chronic */}
            <div className={styles.patternColumn}>
              <div className={`${styles.patternColumnHeader} ${styles.patternHeaderChronic}`}>Chronic</div>
              {patterns.chronic.map((p, i) => (
                <div key={i} className={`${styles.patternCard} ${styles.patternCardChronic}`}>
                  <div className={styles.priorityHeader}>
                    <span className={`${styles.urgencyBadge} ${styles.badge_critical}`}>CRITICAL</span>
                    <span className={styles.rcCode}>{p.rc}</span>
                  </div>
                  <p className={styles.priorityTitle}>{p.title}</p>
                  <p className={styles.priorityDetail}>{p.summary}</p>
                  <div className={styles.priorityMove}>
                    <span className={styles.priorityMoveLabel}>Instead:</span>
                    <p className={styles.priorityMoveText}>{p.fix.replace('Instead: ', '')}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Emerging */}
            <div className={styles.patternColumn}>
              <div className={`${styles.patternColumnHeader} ${styles.patternHeaderEmerging}`}>Emerging</div>
              {patterns.emerging.map((p, i) => (
                <div key={i} className={`${styles.patternCard} ${styles.patternCardEmerging}`}>
                  <div className={styles.priorityHeader}>
                    <span className={`${styles.urgencyBadge} ${styles.badge_high}`}>HIGH PRIORITY</span>
                    <span className={styles.rcCode}>{p.rc}</span>
                  </div>
                  <p className={styles.priorityTitle}>{p.title}</p>
                  <p className={styles.priorityDetail}>{p.summary}</p>
                  <div className={styles.priorityMove}>
                    <span className={styles.priorityMoveLabel}>Instead:</span>
                    <p className={styles.priorityMoveText}>{p.fix.replace('Instead: ', '')}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Resolved */}
            <div className={styles.patternColumn}>
              <div className={`${styles.patternColumnHeader} ${styles.patternHeaderResolved}`}>Resolved</div>
              {patterns.resolved.map((p, i) => (
                <div key={i} className={`${styles.patternCard} ${styles.patternCardResolved}`}>
                  <div className={styles.priorityHeader}>
                    <span className={`${styles.urgencyBadge} ${styles.badge_medium}`}>STRENGTH</span>
                    <span className={styles.rcCode}>{p.rc}</span>
                  </div>
                  <p className={styles.priorityTitle}>{p.title}</p>
                  <p className={styles.priorityDetail}>{p.summary}</p>
                  <div className={styles.priorityMove}>
                    <span className={styles.priorityMoveLabel}>Keep:</span>
                    <p className={styles.priorityMoveText}>{p.fix.replace('Keep going: ', '')}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Calls (collapsible) ── */}
        <motion.div className={styles.section} {...SPRING}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', paddingBottom: '12px', borderBottom: 'var(--rule-lt)' }}>
            <h2 className={styles.sectionTitle} style={{ margin: 0, padding: 0, border: 'none' }}>This Week&apos;s Calls</h2>
            <button
              className={styles.collapsibleCallsToggle}
              onClick={() => setCallsOpen(o => !o)}
            >
              {callsOpen ? 'Hide' : 'Show'} calls
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
                <span>Period Average: <strong>51 / 100</strong></span>
                <span>Enrolled: <strong>1 of 3</strong></span>
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
          <p>The Certainty System · Ratika Kamboj · Week of April 20–22, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC6 · Single-Plan Mindset · CSN SEP · INT SEP · MOV SEP · Math Breakdown · Conviction Close</p>
        </div>

      </div>
    </PageShell>
  )
}
