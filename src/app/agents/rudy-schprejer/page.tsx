'use client'

import { useState } from 'react'
import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Weekly Brief — April 22, 2026 ──────────────────────────────────────────
// CRM (source of truth):
//   Apr 13–17 (5 days): 107 all_calls · 78 billable · 8 sales ·  7.48% conv · $183.13 CPA
//   Apr 20–22 (3 days):  50 all_calls · 36 billable · 7 sales · 14.00% conv ·  $86.86 CPA
// Coaching sample: 5 reviewed calls (2 from Apr 20, 2 from Apr 21, 1 from Apr 22)

const trendRows = [
  { metric: 'Sales',      lastWeek: '8',        thisPeriod: '7',      movement: '↑ 2.33/day vs 1.6/day', dir: 'up' },
  { metric: 'Conversion', lastWeek: '7.48%',    thisPeriod: '14.00%', movement: '↑ +6.52pp',             dir: 'up' },
  { metric: 'CPA',        lastWeek: '$183.13',  thisPeriod: '$86.86', movement: '↓ −$96.27',             dir: 'up' },
]

const reviewedCalls = [
  {
    date: 'Monday, April 20',
    calls: [
      { consumer: 'Brian Bursley', duration: '53:40', score: 72, outcome: 'ENROLLED',          type: 'IEP First-Timer · $184.70 give-back · compliance gaps',   href: '/agents/rudy-schprejer/calls/brian-bursley' },
      { consumer: 'Mary',          duration: '57:55', score: 41, outcome: 'MISSED OPPORTUNITY', type: 'D-SNP · system navigation paralysis · doctor lookup stall', href: '/agents/rudy-schprejer/calls/mary' },
    ],
  },
  {
    date: 'Tuesday, April 21',
    calls: [
      { consumer: 'Frank Shepherd',   duration: '48:36', score: 78, outcome: 'ENROLLED',          type: 'Money Caller · provider pivot · assertive close',           href: '/agents/rudy-schprejer/calls/frank-shepherd' },
      { consumer: 'Santiago Ramos',   duration: '09:04', score: 48, outcome: 'MISSED OPPORTUNITY', type: 'Self-created objection · carrier misidentification · surrendered', href: '/agents/rudy-schprejer/calls/santiago-ramos' },
    ],
  },
  {
    date: 'Wednesday, April 22',
    calls: [
      { consumer: 'Florentina', duration: '02:33', score: 19, outcome: 'MISSED OPPORTUNITY', type: 'Food card caller · PII objection · ultimatum instead of trust bridge', href: '/agents/rudy-schprejer/calls/florentina' },
    ],
  },
]

const whatYouDidWell = [
  {
    title: 'IEP identification that put money in Brian Bursley\'s pocket',
    body: 'At 32:03 on the Brian Bursley call, you spotted that his Part A and B both went effective May 1st and called it immediately — "Bingo IEP accepted." You moved the effective date from June to May on the spot, giving Brian one additional month of his $184.70 give-back that he would not have gotten otherwise. That\'s the kind of technical awareness that separates good agents from agents who close the same call for less value.',
  },
  {
    title: 'Assertive close when Frank Shepherd tried to hang up',
    body: 'At 10:22 on the Frank Shepherd call, Frank said he had people calling him and couldn\'t stay on the phone. Most agents say "I understand, I\'ll call you back" — you didn\'t. "Do you have enough time for me to go ahead and do the application? Because next week is literally the first of the month." Frank said yeah, and you enrolled him. That close is the difference between a warm call and a conversion.',
  },
  {
    title: 'Transparent provider pivot on Frank Shepherd — high-integrity closing',
    body: 'You spent five minutes on hold calling Juan Marcano\'s office to verify whether Devoted accepted him. When the answer was no, you delivered the bad news straight, then immediately pivoted to what Frank could have — Dr. David Wiseman, the $1,250 dental allowance, and the $184.70 give-back. You didn\'t hide the limitation. That transparency is what kept Frank on the call long enough to enroll.',
  },
]

const whatToWorkOn = [
  {
    num: 1,
    title: 'Build a trust bridge before asking for Medicare card information — never issue an ultimatum',
    body: 'On the Florentina call, she called in specifically for the food card benefit — a motivated, inbound caller. When she said "I was told I shouldn\'t give out that number" at 2:18, that was a fear signal, not a hard no. She wasn\'t done with the call. She was asking for a reason to trust. You had already asked for the Medicare card (she didn\'t have it) — moving to SSN was the right pivot. But at that moment she needed a bridge, not an ultimatum. "Then I can\'t help you, ma\'am" ended a closeable call in under three minutes.',
    script: '"You\'re right to be cautious — that\'s exactly the right instinct. The only reason I ask is to confirm which plans in your zip code include that food card benefit you called in for. Your information is completely secure and I only need it to pull up what\'s available for you. Can I show you what\'s there?"',
  },
  {
    num: 2,
    title: 'Never surrender at the first resistance — isolate the objection before accepting it',
    body: 'On the Mary call, the doctor lookup stalled at 5:15 and consumed the rest of the call. The last viable recovery window was at 8:07 — you needed to say "let\'s park the full list and focus on your one must-keep doctor first." On the Florentina call, the recovery window was at 2:20, right after the ultimatum. On the Santiago call, the recovery window was at 8:39 — one isolation question ("Is it the doctors or your Medicare coverage itself?") reopens the conversation. All three calls ended at the first resistance. The habit to build: before you accept any no, ask one isolation question.',
    script: '"Help me understand — what\'s the main thing making you hesitate? Because if it\'s [the specific concern], I can address that directly right now. I don\'t want to move you unless it\'s clearly better for you."',
  },
  {
    num: 3,
    title: 'Devoted Health is not Blue Cross Blue Shield — name the carrier accurately every time',
    body: 'On the Santiago Ramos call at 7:03, you described Devoted as "with Blue Cross Blue Shield." Devoted Health is an independent Medicare Advantage carrier — it has no affiliation with BCBS. Naming the wrong carrier on a recorded call is a compliance and consumer protection issue. Santiago\'s decision was already being undermined by your Part A misstatement at 8:14; adding a carrier misidentification to that call compounds the risk. The verification habit is simple: before every Devoted presentation, say the full name — "Devoted Health, a five-star-rated independent Medicare Advantage plan" — and stop there.',
    script: '"The plan I\'m looking at for you is called Devoted Health — it\'s a five-star-rated independent Medicare Advantage plan available in your zip code. It\'s not affiliated with your current carrier, which is exactly why it can offer a $184.70 give-back that Aetna can\'t match."',
  },
]

const reportHistory = [
  {
    id: 'apr-22',
    active: true,
    date: 'Apr 22',
    label: 'Weekly Brief',
    period: 'April 20–22, 2026',
    trendHeadline: 'Sales 7 (3-day pace) ↑ · Conv 14.00% ↑ · CPA $86.86 ↓',
    scoreNote: 'Breakout conversion · compliance accuracy focus',
    href: '/agents/rudy-schprejer/reports/2026-04-22',
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

export default function RudySchprejerPage() {
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
          <h1 className={styles.agentName}>Rudy Schprejer</h1>
          <p className={styles.period}>April 22, 2026 · Covering April 20–22</p>
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
            7 sales in 3 days on 50 calls. Last week was 8 in a full 5-day week — you&apos;re pacing at 2.33/day vs 1.6/day. The CPA story is the headline: <strong style={{ color: 'var(--sage-dark)' }}>$86.86 versus $183.13</strong> — you cut cost per acquisition in half. Conversion nearly doubled, 7.48% to 14.00%. Something clicked this period. The coaching below is about keeping it there.
          </p>
        </motion.div>

        {/* Executive Summary */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <h2 className={styles.sectionTitle}>Executive Summary</h2>
          <div className={styles.execSummaryInner}>
            <p><strong>What&apos;s working:</strong> You are finding the close and holding the frame. On Brian Bursley, you identified his IEP window at 32:03 and moved his effective date from June to May — that&apos;s an extra $184.70 in his pocket that he would not have gotten without your technical read. On Frank Shepherd, you spent five minutes on hold verifying a dental provider, came back with bad news, delivered it honestly, pivoted to what Frank could actually have, and still closed him. When Frank tried to hang up at 10:22, you didn&apos;t fold — you asked for the application directly, and he said yes. Those two calls show exactly what your closing ceiling looks like: precise, warm, and not rattled by friction.</p>
            <p><strong>What&apos;s costing you:</strong> Three calls this period ended at the first signal of resistance, and one of them had a compliance flag. On Santiago Ramos, you introduced a fear that wasn&apos;t there — telling him &ldquo;yeah, you have to change everything&rdquo; when he asked about Part A. Switching Medicare Advantage plans does not change Part A. That misstatement created the objection that ended the call, and you agreed with it immediately. The same call had a carrier misidentification: you described Devoted as &ldquo;with Blue Cross Blue Shield&rdquo; — Devoted is an independent carrier with no BCBS affiliation. On Florentina, a motivated inbound caller who wanted the food card, you issued an ultimatum when she hesitated on her Medicare number (&ldquo;then I can&apos;t help you&rdquo;) instead of building a trust bridge. She canceled in under three minutes. The pattern across all three: the first signal of hesitation ended the call before a single reframe was attempted. That&apos;s where the next sales come from.</p>
          </div>
        </motion.div>

        {/* The One Thing */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a consumer hesitates, your first move is one question — not a surrender, not an ultimatum. &ldquo;Help me understand what&rsquo;s making you hesitate.&rdquo; Three calls this period died the moment you stopped asking.</p>
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
            These are the calls we pulled for coaching this period. Your CRM total this period is 7 sales / 50 calls — this is a coaching sample, not an audit of every call.
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
                <span>Reviewed Avg: <strong>52 / 100</strong></span>
                <span>Reviewed Enrolled: <strong>2 of 5</strong></span>
                <span style={{ opacity: 0.7 }}>CRM Total: 7 sales / 50 calls</span>
              </div>
            </>
          )}
        </motion.div>

        {/* Report History */}
        <motion.div className={styles.reportHistory} {...SPRING}>
          <h2 className={styles.sectionTitle}>Report History</h2>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginBottom: '16px', fontStyle: 'italic' }}>
            Each past report has its own page so you can go back and read exactly what was said. Past-report pages are being built — links will activate as they come online.
          </p>
          <div className={styles.reportList}>
            {reportHistory.map((r) => (
              r.href ? (
                <Link key={r.id} href={r.href} className={styles.reportHistoryEntry}>
                  <div className={styles.reportLeft}>
                    <span className={styles.reportType}>{r.date} · {r.label}</span>
                    <span className={styles.reportTitle}>{r.period}</span>
                  </div>
                  <div className={styles.reportRight} style={{ textAlign: 'right' }}>
                    <span className={styles.reportScore}>{r.trendHeadline}</span>
                    <span className={styles.reportDate} style={{ opacity: 0.65 }}>{r.scoreNote}</span>
                  </div>
                </Link>
              ) : (
                <div key={r.id} className={`${styles.reportHistoryEntry} ${r.active ? styles.reportActive : ''}`}>
                  <div className={styles.reportLeft}>
                    <span className={styles.reportType}>{r.date} · {r.label}</span>
                    <span className={styles.reportTitle}>{r.period}</span>
                  </div>
                  <div className={styles.reportRight} style={{ textAlign: 'right' }}>
                    <span className={styles.reportScore}>{r.trendHeadline}</span>
                    <span className={styles.reportDate} style={{ opacity: 0.65 }}>{r.scoreNote}</span>
                  </div>
                </div>
              )
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <div className={styles.footer}>
          <p>The Certainty System · Rudy Schprejer · Weekly Brief · April 22, 2026</p>
        </div>

      </div>
    </PageShell>
  )
}
