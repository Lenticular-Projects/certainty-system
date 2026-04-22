'use client'

import { useState } from 'react'
import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Mid-Week Report: April 20–21, 2026 ──────────────────────────────────────
// CRM: Apr 13–17 → 3 sales · 4.76% conv · $224.67 CPA (63 calls / 41 billable)
//       Apr 20–21 → 3 sales · 7.32% conv · $155 CPA (41 calls / 36 billable)
// Reviewed: 4 calls · Avg: 30.5 · All missed opportunities

// ── Trend Snapshot data ──────────────────────────────────────────────────────
const trendRows = [
  {
    metric: 'Sales',
    lastWeek: '3',
    thisPeriod: '3',
    movement: '↔ Matched',
    dir: 'up' as const,
    note: '3 sales in 2 days — matched all of last week',
  },
  {
    metric: 'Conversion',
    lastWeek: '4.76%',
    thisPeriod: '7.32%',
    movement: '↑ +2.56pp',
    dir: 'up' as const,
    note: 'Conversion rate up 54%',
  },
  {
    metric: 'CPA',
    lastWeek: '$224.67',
    thisPeriod: '$155',
    movement: '↓ −$69.67',
    dir: 'up' as const,
    note: 'Cost per acquisition down significantly',
  },
]

// ── Calls grouped by date ────────────────────────────────────────────────────
const callsByDate = [
  {
    date: 'Monday, April 20',
    calls: [
      {
        consumer: 'Kenneph Smalls',
        duration: '13:27',
        score: 38,
        outcome: 'MISSED OPPORTUNITY',
        outcomeNote: null,
        type: 'Benefit Upgrade · Vulnerable Consumer · C-SNP Miss',
        href: '/agents/guillermo-cruz/calls/kenneph-smalls',
      },
      {
        consumer: 'Unknown Consumer',
        duration: '03:52',
        score: 18,
        outcome: 'MISSED OPPORTUNITY',
        outcomeNote: null,
        type: 'Confused Responder · Permission-Seeking Opener',
        href: '/agents/guillermo-cruz/calls/unknown-consumer',
      },
    ],
  },
  {
    date: 'Tuesday, April 21',
    calls: [
      {
        consumer: 'Gloria',
        duration: '12:17',
        score: 28,
        outcome: 'MISSED OPPORTUNITY',
        outcomeNote: null,
        type: 'Privacy Gatekeeper · SSN Loop · Unactivated Card Miss',
        href: '/agents/guillermo-cruz/calls/gloria',
      },
      {
        consumer: 'Michael Thompson',
        duration: '12:29',
        score: 38,
        outcome: 'MISSED OPPORTUNITY',
        outcomeNote: null,
        type: 'Money Caller · C-SNP · Existing Agent Surrender',
        href: '/agents/guillermo-cruz/calls/michael-thompson',
      },
    ],
  },
]

// ── Emerging patterns (first period — no chronic or resolved yet) ─────────────
const emergingPatterns = [
  {
    rc: 'RC1',
    summary: 'Surrender at first resistance. All 4 calls ended when the consumer pushed back once — no reframe, no second ask, no close attempt.',
    fix: 'Build one reframe per objection into muscle memory. Every plan-change fear gets the Medicare frame. Every existing-agent deflection gets the SEP urgency frame. One sentence. Then pause.',
  },
  {
    rc: 'RC2',
    summary: 'Client Gold collected but not deployed. Kenneph\'s survival story, Gloria\'s unactivated flex card, Michael\'s grocery card ask — all heard, all abandoned.',
    fix: 'When a consumer hands you the hook, stop and use it. "Kenneph, you told me doctors said you\'d never talk again — and you\'re on the phone with me. Let me get you the dentures you\'ve earned." That\'s the close.',
  },
  {
    rc: 'RC6',
    summary: 'CSN SEP missed on two calls. Kenneph has diabetes, stroke, and heart attack. Michael has diabetes. Both are year-round C-SNP eligible. Neither was told.',
    fix: 'Chronic condition confirmed → SEP named immediately. "Because of your diabetes, you have a Special Enrollment Period open right now, year-round. You don\'t have to wait for October." This is your urgency lever.',
  },
]

// ── Report History ────────────────────────────────────────────────────────────
const reportHistory = [
  {
    active: true,
    date: 'Apr 22',
    type: 'Mid-Week Report',
    detail: 'Sales: 3 ↑ · CPA: $155 ↓',
    score: '30.5 avg',
    period: 'April 20–21, 2026',
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

// ─────────────────────────────────────────────────────────────────────────────

export default function GuillermocruzPage() {
  const [showAll, setShowAll] = useState(true)

  const totalCalls = callsByDate.reduce((sum, g) => sum + g.calls.length, 0)

  return (
    <PageShell signal="yellow">
      <div className={styles.page}>

        {/* ── Header ── */}
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Mid-Week Report</span>
          </div>
          <h1 className={styles.agentName}>Guillermo Cruz</h1>
          <p className={styles.period}>Week of April 20–22, 2026</p>
          <p className={styles.updatedAt}>Updated April 22 · 4 calls reviewed</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(30) }}>30.5</span>
            <span className={styles.scoreLabel}>Period Average</span>
            <span className={styles.scoreRange}>Apr 20–21 · 4 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>0 / 4</span>
            <span className={styles.scoreLabel}>Enrolled</span>
            <span className={styles.scoreRange}>All missed opportunities</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>3</span>
            <span className={styles.scoreLabel}>Sales This Period</span>
            <span className={styles.scoreRange}>7.32% conv · $155 CPA</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>RC1</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Surrender at first resistance</span>
          </div>
        </motion.div>

        {/* ── Trend Snapshot ── */}
        <motion.div className={styles.trendSnapshot} {...SPRING}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid rgba(19,17,16,0.08)' }}>
            <h2 className={styles.sectionTitle} style={{ margin: 0, padding: 0, border: 'none' }}>CRM Trend Snapshot</h2>
            <span style={{ fontSize: '0.75rem', color: 'var(--ink-60)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Apr 13–17 vs Apr 20–21</span>
          </div>
          <div className={styles.trendTable}>
            <div className={styles.trendHeader}>
              <span>Metric</span>
              <span>Last Week</span>
              <span>This Period</span>
              <span>Movement</span>
            </div>
            {trendRows.map((row) => (
              <div key={row.metric} className={styles.trendRow}>
                <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--ink)' }}>{row.metric}</span>
                <span style={{ fontSize: '0.9375rem', color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{row.lastWeek}</span>
                <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--ink)', fontVariantNumeric: 'tabular-nums' }}>{row.thisPeriod}</span>
                <span className={(row.dir as string) === 'up' ? styles.trendUp : (row.dir as string) === 'down' ? styles.trendDown : styles.trendNeutral}>
                  {row.movement}
                </span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '12px', lineHeight: 1.6 }}>
            3 sales in 2 days — already matched all of last week&apos;s total. Conversion up from 4.76% to 7.32%. CPA down from $224 to $155. <strong style={{ color: 'var(--sage-dark)' }}>BIG IMPROVER trajectory.</strong> The numbers say you&apos;re on a better run — now the calls need to catch up.
          </p>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>
            Your compliance is clean and your discovery is finding real pain — but every call this period ended the same way: the consumer pushed back once and you said &ldquo;All good&rdquo; or &ldquo;I understand&rdquo; and let go. That&apos;s not losing to a hard no — that&apos;s losing to silence. Kenneph said &ldquo;yeah, yeah&rdquo; to his dental and vision before the fear objection came. Michael called you specifically for the grocery card. Gloria found money she&apos;d never touched. The gold was there. The close requires one more sentence. Build it: when a consumer says they don&apos;t want to change their insurance, your next sentence is the Medicare frame. Every time. Without exception.
          </p>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p><strong>What&apos;s working:</strong> Guillermo, your compliance opening is genuinely strong — recorded line, full TPMO disclaimer with specific plan counts and alternative resources, callback confirmation, decision-maker check, nursing home question. You&apos;re doing all of it correctly and within the first two minutes on every call. That&apos;s not small. It&apos;s the foundation everything else builds on. Your discovery is also real — on Kenneph Smalls you found the dentures, the broken glasses, the food card running out, the stroke and heart attack history. On Michael Thompson you identified the right C-SNP plan and tied the grocery card directly to his diabetes diagnosis. You&apos;re finding the right information. The CRM numbers back it up: 3 sales in 2 days, conversion up over 54%, CPA down $70. Something is working — the pipeline is moving.</p>
            <p><strong>What&apos;s costing you:</strong> Every reviewed call was a missed opportunity, and they all broke in the same place: the first real objection. Kenneph said &ldquo;I don&apos;t want to change all my insurance&rdquo; and you said &ldquo;All good. All good.&rdquo; Gloria refused her SSN three times and you returned to the same request instead of routing around it. Michael said &ldquo;I&apos;m not going to train from Humana&rdquo; and you accepted it and gave your callback number. The Unknown Consumer said &ldquo;do I have to go over it with you?&rdquo; and you answered with a bureaucratic positioning statement instead of a benefit hook. You&apos;re building real calls and then stopping before the ask. On two of these calls — Kenneph and Michael — the consumer had qualifying chronic conditions that open a year-round C-SNP enrollment window. Neither was told. That SEP is your urgency lever when someone hesitates to switch. Start naming it.</p>
          </div>
        </motion.div>

        {/* ── Your Tells ── */}
        <motion.div className={styles.yourTells} {...SPRING}>
          <h2 className={styles.sectionTitle}>Your Tells</h2>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginBottom: '16px', fontStyle: 'italic' }}>
            Behavioral delta between enrolled and missed calls. This is your first full reviewed period — baseline being established from 4 calls. All reviewed calls were missed opportunities this period.
          </p>
          <div className={styles.tellsBlock}>
            <p style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--sage-dark)', marginBottom: '10px' }}>What you do on every call (consistent strengths)</p>
            <ul className={styles.tellsList}>
              <li>Full TPMO disclaimer delivered correctly and within 30 seconds — every call this period</li>
              <li>Compliance sequence complete: recorded line, callback number, decision-maker, nursing home question</li>
              <li>Discovery produces real findings — dental needs, vision gaps, health conditions, financial vulnerability</li>
              <li>Benefit presentation specific and accurate when you get there (Kenneph&apos;s dental/vision numbers, Michael&apos;s grocery card tied to diabetes)</li>
              <li>Gracious, professional call exits — no pressure, no frustration when consumers disengage</li>
            </ul>
          </div>
          <div className={styles.tellsBlock} style={{ marginTop: '12px' }}>
            <p style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: '10px' }}>What ends the call before the close (consistent gaps)</p>
            <ul className={styles.tellsList}>
              <li>One push-back accepted as a final answer — no reframe, no second attempt on any call</li>
              <li>Client Gold collected but not deployed as an enrollment anchor</li>
              <li>CSN SEP never named when chronic conditions are disclosed (Kenneph, Michael)</li>
              <li>Math stops at Step 1 — numbers stated but not annualized or connected to the consumer&apos;s specific life</li>
              <li>Permission-seeking openers on some calls hand control to the consumer before the call starts</li>
            </ul>
          </div>
        </motion.div>

        {/* ── Patterns: Chronic / Emerging / Resolved ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Patterns</h2>
          <div className={styles.patternsGrid}>

            {/* Chronic */}
            <div className={styles.patternColumn}>
              <p className={`${styles.patternColumnHeader} ${styles.patternColumnChronic}`}>Chronic</p>
              <div className={`${styles.patternCard} ${styles.patternCardChronic}`}>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.65, color: 'var(--ink)', margin: '0' }}>
                  First period — establishing baseline. Chronic patterns require 2+ weeks of data. Check back next brief.
                </p>
              </div>
            </div>

            {/* Emerging */}
            <div className={styles.patternColumn}>
              <p className={`${styles.patternColumnHeader} ${styles.patternColumnEmerging}`}>Emerging</p>
              {emergingPatterns.map((p, i) => (
                <div key={i} className={`${styles.patternCard} ${styles.patternCardEmerging}`}>
                  <span className={styles.rcCode}>{p.rc}</span>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.65, color: 'var(--ink)', margin: '6px 0' }}>{p.summary}</p>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', fontStyle: 'italic', lineHeight: 1.6, borderTop: '1px solid rgba(19,17,16,0.08)', paddingTop: '8px', margin: 0 }}>
                    <strong>Instead:</strong> {p.fix}
                  </p>
                </div>
              ))}
            </div>

            {/* Resolved */}
            <div className={styles.patternColumn}>
              <p className={`${styles.patternColumnHeader} ${styles.patternColumnResolved}`}>Resolved</p>
              <div className={`${styles.patternCard} ${styles.patternCardResolved}`}>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.65, color: 'var(--ink)', margin: '0' }}>
                  First period — no prior patterns to resolve. Will populate as patterns are observed and corrected across future briefs.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* ── Calls (Collapsible) ── */}
        <motion.div className={styles.section} {...SPRING}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid rgba(19,17,16,0.08)' }}>
            <h2 className={styles.sectionTitle} style={{ margin: 0, padding: 0, border: 'none' }}>Calls — April 20–21</h2>
            <button
              className={styles.collapsibleCallsToggle}
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show fewer ▴' : `Show all ${totalCalls} calls ▾`}
            </button>
          </div>

          {showAll && (
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
                <span>Period Average: <strong>30.5 / 100</strong></span>
                <span>Enrolled: <strong>0 of 4</strong></span>
                <span>All missed opportunities</span>
              </div>
            </>
          )}
        </motion.div>

        {/* ── Report History ── */}
        <motion.div className={styles.reportHistory} {...SPRING}>
          <h2 className={styles.sectionTitle}>Report History</h2>
          {reportHistory.map((r, i) => (
            <div key={i} className={`${styles.reportHistoryEntry} ${r.active ? styles.reportActive : ''}`}>
              <div className={styles.reportLeft}>
                <span className={styles.reportType}>{r.date} · {r.type}</span>
                <span className={styles.reportTitle}>{r.period}</span>
              </div>
              <div className={styles.reportRight}>
                <span className={styles.reportScore}>{r.detail}</span>
                <span className={styles.reportDate}>{r.score}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Guillermo Cruz · Week of April 20–22, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC2 · RC6 · Surrender at Resistance · Client Gold · CSN SEP · Math Humanization</p>
        </div>

      </div>
    </PageShell>
  )
}
