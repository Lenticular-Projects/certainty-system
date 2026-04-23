'use client'

import { useState } from 'react'
import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Weekly Brief — April 22, 2026 ──────────────────────────────────────────
// CRM (source of truth — from CRM screenshot Apr 20–22):
//   Apr 13–17 (5 days): 63 all_calls · 41 billable · 3 sales · 4.76% conv · $224.67 CPA
//   Apr 20–22 (3 days): 51 all_calls · 41 billable · 5 sales · 9.80% conv · $107.60 CPA
// Coaching sample: 4 reviewed calls (2 from Apr 20, 2 from Apr 21)

const trendRows = [
  { metric: 'Sales',      lastWeek: '3',        thisPeriod: '5',        movement: '↑ +2 (already beat last week in 3 days)', dir: 'up' },
  { metric: 'Conversion', lastWeek: '4.76%',    thisPeriod: '9.80%',    movement: '↑ +5.04pp',                                dir: 'up' },
  { metric: 'CPA',        lastWeek: '$224.67',  thisPeriod: '$107.60',  movement: '↓ −$117.07',                               dir: 'up' },
]

const reviewedCalls = [
  {
    date: 'Monday, April 20',
    calls: [
      { consumer: 'Kenneph Smalls',  duration: '13:27', score: 38, outcome: 'MISSED OPPORTUNITY', type: 'Surrendered at first objection · plan-change fear',         href: '/agents/guillermo-cruz/calls/kenneph-smalls'   },
      { consumer: 'Unknown Caller',  duration: '03:52', score: 18, outcome: 'MISSED OPPORTUNITY', type: 'Permission-seeking opener · call died in Phase II',          href: '/agents/guillermo-cruz/calls/unknown-consumer'  },
    ],
  },
  {
    date: 'Tuesday, April 21',
    calls: [
      { consumer: 'Gloria',          duration: '12:17', score: 28, outcome: 'MISSED OPPORTUNITY', type: 'SSN loop · unactivated flex card abandoned',                 href: '/agents/guillermo-cruz/calls/gloria'            },
      { consumer: 'Michael Thompson',duration: '12:29', score: 38, outcome: 'MISSED OPPORTUNITY', type: 'CSN SEP missed · surrendered to existing-agent objection',   href: '/agents/guillermo-cruz/calls/michael-thompson'  },
    ],
  },
]

const whatYouDidWell = [
  {
    title: 'Discovery that surfaces real needs — every time',
    body: "On Kenneph Smalls, you found the broken glasses, the dentures he wants, the $181 food card running out before month's end, and the stroke-and-heart-attack history — all in a natural conversation, not a checklist. On Michael Thompson, you correctly identified the grocery card as the entry point and matched it to a Devoted C-SNP plan tied specifically to his diabetes diagnosis at 8:35. That condition-specific benefit anchoring is exactly what top performers do. The discovery phase is genuinely strong.",
  },
  {
    title: 'Patient, warm tone with difficult and fragile callers',
    body: "Gloria spent four minutes looking for her Medicare card while you waited without pressure. Kenneph Smalls disclosed he was crawling to get food and had survived a stroke against his doctors' expectations — you responded with genuine warmth at 7:13 rather than pushing past it for the pitch. That rapport-building earns trust that agents who close more than you don't always build. It's the foundation for bigger weeks.",
  },
  {
    title: 'Condition-specific plan matching — you read the signal and tie the product to it',
    body: "On Michael Thompson at 8:35, you pivoted straight to a Devoted C-SNP once you caught the diabetes diagnosis — that's the product move that separates top closers from order-takers. On Kenneph Smalls, the $181 food card running out mid-month was exactly the entry point to anchor on, and you used it. Reading a real need and matching it to a specific plan — not a generic pitch — is where your closes will come from. Keep leading with that instinct.",
  },
]

const whatToWorkOn = [
  {
    num: 1,
    title: "When first resistance hits, pivot to the reframe — not a recap, not a surrender",
    body: "All four reviewed calls ended when the consumer pushed back once and you accepted it. Kenneph said 'I don't want to change all my insurance' at 12:27 — you said 'All good. All good.' and ended the call. Michael said 'I'm not going to train from Humana' at 10:02 — you recapped benefits. Gloria refused the SSN at 6:26 — you returned to the same request four more times. The consumer's first no is a fear, not a final answer. Fear is workable. You have to try the reframe before you let go.",
    script: "\"I hear you — and this is important: you are NOT changing your Medicare. Your Medicare card stays the same. Your doctors stay the same. The only thing that changes is the plan on top of your Medicare gives you [the one thing they said they wanted]. That's it. Can we take five more minutes so you don't miss out on that?\"",
  },
  {
    num: 2,
    title: "Name the C-SNP Special Enrollment Period the moment a chronic condition is confirmed",
    body: "Two calls this period had open year-round enrollment windows you never mentioned. On Kenneph Smalls, he disclosed diabetes, stroke, and heart attack history at 6:41 — all CSN-qualifying — and you continued with a standard MA upgrade. On Michael Thompson, he confirmed diabetes at 6:12 and you identified the right Devoted C-SNP plan but never told him he has a year-round window to switch right now. Without that information there's no urgency — 'I'll call my agent' wins every time. The SEP is your urgency lever when someone hesitates to switch.",
    script: "\"Michael, before you make that decision — I want to flag something. Because of your diabetes, you have a Special Enrollment Period open right now, year-round. You don't have to wait for October. That window is already open for you. This isn't about switching for a better deal — it's about using a window you already have.\"",
  },
  {
    num: 3,
    title: "Lead with value, not permission — and route around blocked data paths instead of looping",
    body: "The Unknown Caller call died in 3:52 because you opened with 'Did you want to go over the 2026 Medicare plans?' — a question that can be answered no. At 0:38 the consumer said 'Do I have to go over it?' and you gave a bureaucratic positioning statement instead of a benefit hook. On Gloria, when the SSN hit a hard wall at 6:26, you had six minutes of call left and returned to the same blocked request four more times. When data collection is refused, route around it — you don't need the SSN to present plans. Present first, build desire, revisit verification when they want to enroll.",
    script: "\"No problem at all — you don't have to give me anything for this part. Let me show you what's available in your area and what other members near you are getting right now. You can listen and tell me if it sounds like something worth looking into. Fair enough?\"",
  },
]

const reportHistory = [
  {
    id: 'apr-22',
    active: true,
    date: 'Apr 22',
    label: 'Weekly Brief',
    period: 'April 20–22, 2026',
    trendHeadline: 'Sales 5 ↑ · Conv 9.80% ↑ · CPA $107.60 ↓',
    scoreNote: 'Already beat last week in 3 days — surrender pattern is the fix',
    href: '/agents/guillermo-cruz/reports/2026-04-22',
  },
]

function outcomeClass(outcome: string) {
  if (outcome === 'ENROLLED') return styles.pillEnrolled
  if (outcome === 'MISSED OPPORTUNITY') return styles.pillMissed
  if (outcome === 'INCOMPLETE') return styles.pillIncomplete
  return styles.pillNeutral
}

function scoreColor(score: number) {
  if (score >= 75) return 'var(--sage-dark)'
  if (score >= 55) return 'var(--mustard-dark)'
  return 'var(--terracotta)'
}

export default function GuillermocruzPage() {
  const [showAllCalls, setShowAllCalls] = useState(true)

  const totalReviewed = reviewedCalls.reduce((sum, g) => sum + g.calls.length, 0)

  return (
    <PageShell signal="green">
      <div className={styles.page}>

        {/* Header */}
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Weekly Brief</span>
          </div>
          <h1 className={styles.agentName}>Guillermo Cruz</h1>
          <p className={styles.period}>April 22, 2026 · Covering April 20–22, 2026</p>
          <p className={styles.updatedAt}>{totalReviewed} calls reviewed this period</p>
        </motion.div>

        {/* Trend Snapshot */}
        <motion.div className={styles.trendSnapshot} {...SPRING}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid rgba(19,17,16,0.08)' }}>
            <h2 className={styles.sectionTitle} style={{ margin: 0, padding: 0, border: 'none' }}>Trend Snapshot</h2>
            <span style={{ fontSize: '0.75rem', color: 'var(--ink-60)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Apr 13–17 vs Apr 20–22 · from CRM</span>
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
                <span className={row.dir === 'up' ? styles.trendUp : styles.trendDown}>{row.movement}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '14px', lineHeight: 1.65 }}>
            5 sales in 3 days — you already beat last week&apos;s 5-day total with two days left. Conversion more than doubled (4.76% → 9.80%) and CPA dropped $117. <strong style={{ color: 'var(--sage-dark)' }}>This is a real jump, not a blip.</strong> The coaching focus is on converting the calls where you did the hard work — built rapport, ran discovery, found the right plan — and surrendered before asking for the business. Tighten that seam and this pace compounds.
          </p>
        </motion.div>

        {/* Executive Summary */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <h2 className={styles.sectionTitle}>Executive Summary</h2>
          <div className={styles.execSummaryInner}>
            <p><strong>What&apos;s working:</strong> Your discovery is genuinely strong. On Kenneph Smalls you found four separate unmet needs in a natural conversation — dentures, broken glasses, food insecurity, and a stroke history — and built real rapport with a man who had every reason to hang up on you. On Michael Thompson you correctly identified the Devoted C-SNP plan and tied the grocery card directly to his diabetes diagnosis at 8:35. That&apos;s condition-specific benefit anchoring — the move top closers make. Your compliance opening is consistent across all four calls. And the CRM numbers are moving hard: 5 sales in 3 days (already past last week&apos;s 5-day total), conversion more than doubled from 4.76% to 9.80%, CPA down $117.</p>
            <p><strong>What&apos;s costing you:</strong> All four reviewed calls ended at the same moment — the first real objection. Kenneph said &ldquo;I don&apos;t want to change all my insurance&rdquo; and you said &ldquo;All good&rdquo; without a single reframe attempt. Michael said &ldquo;I&apos;m not going to train from Humana&rdquo; and you recapped benefits instead of naming the year-round CSN window his diabetes opens. Gloria refused the SSN and you looped back to the same request four times. The Unknown Caller asked &ldquo;do I have to go over it?&rdquo; and you gave a bureaucratic positioning statement instead of a benefit hook. On two calls there were open C-SNP enrollment windows — year-round, because of chronic conditions — that neither consumer was told about. The SEP is your urgency lever when someone hesitates to switch. Start using it.</p>
          </div>
        </motion.div>

        {/* The One Thing */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a consumer says they don&apos;t want to change their insurance — that&apos;s not a final answer. It&apos;s a fear. Your next sentence is: &ldquo;I hear you — and this is important: you are NOT changing your Medicare. Your card stays. Your doctors stay. The only thing that changes is [the benefit they said they wanted].&rdquo; One reframe. Then pause. You earned the right to ask for the business on every one of these calls. You have to take it.</p>
        </motion.div>

        {/* What You Did Well */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {whatYouDidWell.map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(125, 157, 123, 0.06)', borderRadius: '10px', borderLeft: '3px solid var(--sage-dark)' }}>
                <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px' }}>{item.title}</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* What to Work On */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What to Work On</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {whatToWorkOn.map((item) => (
              <div key={item.num} style={{ padding: '18px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '6px' }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--terracotta)', fontVariantNumeric: 'tabular-nums', minWidth: '1.2em' }}>{item.num}.</span>
                  <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: 0 }}>{item.title}</p>
                </div>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px 1.7em' }}>{item.body}</p>
                <div style={{ marginLeft: '1.7em', padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px', borderLeft: '2px solid var(--ink-20)' }}>
                  <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>The line</p>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.65, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>{item.script}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Calls */}
        <motion.div className={styles.section} {...SPRING}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid rgba(19,17,16,0.08)' }}>
            <h2 className={styles.sectionTitle} style={{ margin: 0, padding: 0, border: 'none' }}>Reviewed Calls This Period</h2>
            <button
              onClick={() => setShowAllCalls(!showAllCalls)}
              style={{ width: 'auto', padding: '6px 14px', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--ink-60)', background: 'transparent', border: '1px solid rgba(19,17,16,0.15)', borderRadius: '6px', cursor: 'pointer', whiteSpace: 'nowrap' }}
            >
              {showAllCalls ? 'Collapse ▴' : `Expand (${totalReviewed}) ▾`}
            </button>
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginBottom: '16px', fontStyle: 'italic' }}>
            These are the calls we pulled for coaching this period. Your CRM total is 5 sales / 51 calls this period — this is a coaching sample, not an audit of every call.
          </p>
          {showAllCalls && (
            <>
              {reviewedCalls.map((group) => (
                <div key={group.date} style={{ marginBottom: '1.5rem' }}>
                  <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)', marginBottom: '0.5rem' }}>{group.date}</p>
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
                          <Link href={call.href} style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'var(--ink-20)', textUnderlineOffset: '3px' }}>{call.consumer}</Link>
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
                <span>Reviewed Avg: <strong>30.5 / 100</strong></span>
                <span>Reviewed Enrolled: <strong>0 of 4</strong></span>
                <span style={{ opacity: 0.7 }}>CRM Total: 5 sales / 51 calls</span>
              </div>
            </>
          )}
        </motion.div>

        {/* Report History */}
        <motion.div className={styles.reportHistory} {...SPRING}>
          <h2 className={styles.sectionTitle}>Report History</h2>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginBottom: '16px', fontStyle: 'italic' }}>
            Each report has its own page. Click any entry to open the full brief exactly as it was delivered.
          </p>
          <div className={styles.reportList}>
            {reportHistory.map((r) => {
              const content = (
                <>
                  <div className={styles.reportLeft}>
                    <span className={styles.reportType}>{r.date} · {r.label}</span>
                    <span className={styles.reportTitle}>{r.period}</span>
                  </div>
                  <div className={styles.reportRight} style={{ textAlign: 'right' }}>
                    <span className={styles.reportScore}>{r.trendHeadline}</span>
                    <span className={styles.reportDate} style={{ opacity: 0.65 }}>{r.scoreNote}</span>
                  </div>
                </>
              )
              return r.href ? (
                <Link
                  key={r.id}
                  href={r.href}
                  className={`${styles.reportHistoryEntry} ${r.active ? styles.reportActive : ''}`}
                  style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
                >
                  {content}
                </Link>
              ) : (
                <div key={r.id} className={`${styles.reportHistoryEntry} ${r.active ? styles.reportActive : ''}`}>
                  {content}
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Footer */}
        <div className={styles.footer}>
          <p>The Certainty System · Guillermo Cruz · Weekly Brief · April 22, 2026</p>
        </div>

      </div>
    </PageShell>
  )
}
