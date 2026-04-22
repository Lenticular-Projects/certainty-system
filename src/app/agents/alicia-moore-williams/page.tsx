'use client'

import { useState } from 'react'
import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Mid-Week Report: April 22, 2026 ──────────────────────────────────────────
// CRM: Apr 13–17 → 6 sales · 6.67% conv · $206.50 CPA (90 calls / 68 billable)
//       Apr 20–21 → 3 sales · 10.34% conv · $118.00 CPA (29 calls / 26 billable)
// Reviewed: 2 calls (Apr 20) — Julie Shelton (CORRECT NO-SALE) + Paulette Daly (ENROLLED, 78)

// ── Trend Snapshot data ───────────────────────────────────────────────────────
const trendRows = [
  {
    metric: 'Sales',
    lastWeek: '6',
    thisPeriod: '3',
    movement: '→ On pace',
    dir: 'neutral' as const,
    note: '3 in 2 days — on pace to match or beat last week',
  },
  {
    metric: 'Conversion',
    lastWeek: '6.67%',
    thisPeriod: '10.34%',
    movement: '↑ +3.67pp',
    dir: 'up' as const,
    note: 'Conversion up over 50%',
  },
  {
    metric: 'CPA',
    lastWeek: '$206.50',
    thisPeriod: '$118.00',
    movement: '↓ −$88.50',
    dir: 'up' as const,
    note: 'CPA dropping fast — better quality in fewer calls',
  },
]

// ── Apr 20 reviewed calls ────────────────────────────────────────────────────
const callsByDate = [
  {
    date: 'Monday, April 20',
    calls: [
      {
        consumer: 'Julie Shelton',
        duration: '64:32',
        score: 0,
        outcome: 'CORRECT NO-SALE',
        outcomeNote: 'Network mismatch — all specialists out-of-network with only viable plan',
        type: 'The Money Caller · Uncloseable',
        href: '/agents/alicia-moore-williams/calls/julie-shelton',
      },
      {
        consumer: 'Paulette Daly',
        duration: '01:29:49',
        score: 78,
        outcome: 'ENROLLED',
        outcomeNote: 'C-SNP via asthma · Devoted Health · May 1 effective · confirmation 07R9CW-NGH5',
        type: 'The Food Card Caller · C-SNP Qualifier',
        href: '/agents/alicia-moore-williams/calls/paulette-daly',
      },
    ],
  },
]

// ── Apr 13–17 archive calls (report history context) ─────────────────────────
const archiveCalls = [
  { consumer: 'Unknown Consumer (5:25)', score: 32, outcome: 'MISSED OPPORTUNITY', href: '/agents/alicia-moore-williams/calls/unknown-consumer-5m25s' },
  { consumer: 'Unknown Consumer (6:47)', score: 26, outcome: 'MISSED OPPORTUNITY', href: '/agents/alicia-moore-williams/calls/unknown-consumer-6m47s' },
  { consumer: 'Dennis Carroll', score: 54, outcome: 'INCOMPLETE', href: '/agents/alicia-moore-williams/calls/dennis-carroll' },
  { consumer: 'Francis Wardlaw', score: 72, outcome: 'INCOMPLETE', href: '/agents/alicia-moore-williams/calls/francis-wardlaw' },
  { consumer: 'Lamar Bull', score: 68, outcome: 'INCOMPLETE', href: '/agents/alicia-moore-williams/calls/lamar-bull' },
  { consumer: 'Annie L. Bellamy', score: 52, outcome: 'INCOMPLETE', href: '/agents/alicia-moore-williams/calls/annie-l-bellamy' },
  { consumer: 'Carol Lynn Kissinger', score: 52, outcome: 'INCOMPLETE', href: '/agents/alicia-moore-williams/calls/carol-lynn-kissinger' },
  { consumer: 'Lenny A. Thompson', score: 64, outcome: 'CORRECT NO-SALE', href: '/agents/alicia-moore-williams/calls/lenny-a-thompson' },
  { consumer: 'Unknown Consumer (6:11)', score: 28, outcome: 'MISSED OPPORTUNITY', href: '/agents/alicia-moore-williams/calls/unknown-consumer-6m11s' },
  { consumer: 'Katherine Curtis', score: 38, outcome: 'MISSED OPPORTUNITY', href: '/agents/alicia-moore-williams/calls/katherine-curtis' },
  { consumer: 'Joseph Rinaldi', score: 36, outcome: 'MISSED OPPORTUNITY', href: '/agents/alicia-moore-williams/calls/joseph-rinaldi' },
]

// ── v3 Patterns ───────────────────────────────────────────────────────────────
const chronicPatterns = [
  {
    rc: 'RC2',
    summary: 'Client Gold heard, math never delivered. Consumer names their deepest financial fear — you acknowledge the feeling, then move on without connecting the plan\'s dollar value to that specific fear.',
    fix: 'Stop at the gold. Say it back with the number. "Ms. Daly, you said your mortgage takes your whole Social Security check. This card gives you $200 a month — that\'s $2,400 a year you can put toward utilities and rent. For $27.70 a month. That\'s the trade."',
  },
  {
    rc: 'RC1',
    summary: 'Call duration running 2–3x target. Both reviewed calls ran long due to extended holds, copay-by-copay benefit recitation, and post-enrollment HRA on live calls.',
    fix: 'For motivated, low-complexity inbound callers: hit the 4 headlines in 3 sentences — food card amount, vision allowance, doctor in-network, monthly cost. Reserve the full benefit read for consumers who ask. Paulette\'s call was 90 min; same outcome was achievable in 35.',
  },
]

const emergingPatterns = [
  {
    rc: 'RC3',
    summary: 'On the Paulette Daly call, the $200/month food card was the anchor — but no one annualized it. "$200 a month" sits smaller in the mind than "$2,400 a year." Step 2 was skipped on every comparison.',
    fix: 'After stating the monthly benefit, close the math loop: "That\'s $2,400 a year." Three extra words. Do it every time, on every call, even when you think the consumer already gets it.',
  },
]

const resolvedPatterns = [
  {
    rc: 'RC1',
    summary: 'Close window missed on live yes (Apr 13–17 — Joseph Rinaldi said yes at 14:39, close came at 34:19). Not present in Apr 20 reviewed calls.',
    fix: 'Resolved for now. The Paulette Daly close at 42:41 — "Dr. Julie was in-network, let\'s go ahead and get you enrolled" — was clean and correctly timed. Keep this.',
  },
]

// ── Report History ────────────────────────────────────────────────────────────
const reportHistory = [
  {
    active: true,
    date: 'Apr 22',
    type: 'Mid-Week Report',
    detail: 'Sales: 3 ↑ · CPA: $118 ↓',
    score: '78 (Paulette Daly)',
    period: 'April 20–22, 2026',
  },
  {
    active: false,
    date: 'Apr 20',
    type: 'Weekly Brief',
    detail: 'Sales: 6 · CPA: $207',
    score: '48 avg',
    period: 'April 13–17, 2026',
  },
  {
    active: false,
    date: 'Apr 16',
    type: 'Weekly Brief',
    detail: 'Sales: — · Mid-week',
    score: '56 avg',
    period: 'April 13–14, 2026',
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

export default function AliciaMooreWilliamsPage() {
  const [showAll, setShowAll] = useState(true) // only 2 calls — show all by default

  const totalCalls = callsByDate.reduce((sum, g) => sum + g.calls.length, 0)

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
          <h1 className={styles.agentName}>Alicia Moore Williams</h1>
          <p className={styles.period}>Week of April 20–22, 2026</p>
          <p className={styles.updatedAt}>Updated April 22 · 2 calls reviewed (Apr 20)</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(78) }}>78</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Paulette Daly · Apr 20</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>1 / 2</span>
            <span className={styles.scoreLabel}>Enrolled</span>
            <span className={styles.scoreRange}>1 correct no-sale</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>3</span>
            <span className={styles.scoreLabel}>Sales This Period</span>
            <span className={styles.scoreRange}>10.34% conv · $118 CPA</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>RC2</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Client Gold heard, math skipped</span>
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
            3 sales in 2 days — on pace to match last week&apos;s 6. Conversion jumped from 6.67% to 10.34%. CPA cut from $206 to $118. <strong style={{ color: 'var(--sage-dark)' }}>BIG IMPROVER trajectory.</strong>
          </p>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>You are identifying the right plan and the right pathway — the C-SNP catch on Paulette Daly proves it. The move that converts more this week: when a consumer names their financial fear, stop and anchor the plan&apos;s dollar value to that exact fear before you move on. Paulette said her mortgage swallows her Social Security check. The plan puts $2,400 a year back in her pocket. That sentence was never said. Say it. &ldquo;You told me your mortgage takes everything &mdash; this card puts $2,400 a year back. That&rsquo;s the trade.&rdquo;</p>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p><strong>What&apos;s working:</strong> The CRM numbers are moving in the right direction — 10.34% conversion and $118 CPA in two days is real improvement over last week. On the Paulette Daly call, you caught the asthma C-SNP pathway at 10:34 — one of the more specific clinical identifications in this work — and built the entire presentation around the $200/month food card she called in for. You held the compliance line twice in the first 45 seconds when Paulette tried to skip the disclaimers. You confirmed the doctor in-network before committing to enrollment. The close at 42:41 was assumptive, clean, and correctly timed. On Julie Shelton, you correctly identified an unresolvable network barrier and didn&apos;t push past it — that&apos;s a correct no-sale, handled professionally.</p>
            <p><strong>What&apos;s costing you:</strong> Paulette told you at 14:01 that her mortgage takes her whole Social Security check. That was the emotional close — it was sitting right there. You heard it, moved into plan research, and never came back to deploy the specific math against that specific fear. The food card was presented as a feature (&ldquo;$200 a month&rdquo;) instead of as a solution to the stated problem (&ldquo;$2,400 a year toward your rent and utilities — that&apos;s real money back on a fixed income&rdquo;). The enrollment happened because Paulette was motivated. The emotional lock that keeps a consumer enrolled and referring didn&apos;t happen. The second drag is call length — 90 minutes for a cooperative, one-doctor, C-SNP inbound lead is three times the target. The same outcome was achievable in 35 minutes. Every extra minute on that call was a minute you weren&apos;t available for the next one.</p>
          </div>
        </motion.div>

        {/* ── Your Tells ── */}
        <motion.div className={styles.yourTells} {...SPRING}>
          <h2 className={styles.sectionTitle}>Your Tells</h2>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginBottom: '16px', fontStyle: 'italic' }}>
            Needs more reviewed calls to surface the enrolled vs. missed behavioral delta — coming in the next full brief. Based on 2 reviewed calls this period (1 enrolled, 1 correct no-sale).
          </p>
          <div className={styles.tellsBlock}>
            <p style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--sage-dark)', marginBottom: '10px' }}>On the call you closed (Paulette Daly)</p>
            <ul style={{ fontSize: '0.875rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0 }}>
              <li>C-SNP pathway identified from chronic condition disclosure — asthma flagged correctly at 10:34</li>
              <li>Compliance held under pressure — redirected two skip attempts in the first 45 seconds without apology</li>
              <li>Doctor confirmation before close — network verified, address matched, then moved to enrollment</li>
              <li>Signal-to-benefit bridge deployed — vision need at 30:15 returned to at 40:37 with $300 glasses benefit</li>
              <li>Post-enrollment personal accountability anchor — texted license number and contact info</li>
            </ul>
          </div>
          <div className={styles.tellsBlock} style={{ marginTop: '12px' }}>
            <p style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: '10px' }}>Consistent gaps (both calls)</p>
            <ul style={{ fontSize: '0.875rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0 }}>
              <li>Client Gold named, math not deployed — consumer reveals financial fear, you move on without connecting the dollar value to that fear</li>
              <li>Annualization skipped — monthly number stated, annual figure never said</li>
              <li>Call duration 2–3x target — rapport without an off-switch extends calls past the point of value</li>
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
              {chronicPatterns.map((p, i) => (
                <div key={i} className={`${styles.patternCard} ${styles.patternCardChronic}`}>
                  <span className={styles.rcCode}>{p.rc}</span>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.65, color: 'var(--ink)', margin: '6px 0' }}>{p.summary}</p>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', fontStyle: 'italic', lineHeight: 1.6, borderTop: '1px solid rgba(19,17,16,0.08)', paddingTop: '8px', margin: 0 }}>
                    <strong>Instead:</strong> {p.fix}
                  </p>
                </div>
              ))}
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
              {resolvedPatterns.map((p, i) => (
                <div key={i} className={`${styles.patternCard} ${styles.patternCardResolved}`}>
                  <span className={styles.rcCode}>{p.rc}</span>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.65, color: 'var(--ink)', margin: '6px 0' }}>{p.summary}</p>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', fontStyle: 'italic', lineHeight: 1.6, borderTop: '1px solid rgba(19,17,16,0.08)', paddingTop: '8px', margin: 0 }}>
                    {p.fix}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

        {/* ── Calls (Collapsible) ── */}
        <motion.div className={styles.section} {...SPRING}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid rgba(19,17,16,0.08)' }}>
            <h2 className={styles.sectionTitle} style={{ margin: 0, padding: 0, border: 'none' }}>Calls — April 20</h2>
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
                        <span className={styles.callScore} style={{ color: call.score > 0 ? scoreColor(call.score) : 'var(--ink-60)' }}>
                          {call.score > 0 ? call.score : '—'}
                        </span>
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
                <span>Period Average: <strong>78 / 100</strong></span>
                <span>Enrolled: <strong>1 of 2</strong></span>
              </div>
            </>
          )}
        </motion.div>

        {/* ── Report History ── */}
        <motion.div className={styles.reportHistory} {...SPRING}>
          <h2 className={styles.sectionTitle}>Report History</h2>
          <div className={styles.reportList}>
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
          </div>

          {/* Archive calls reference — Apr 13–17 */}
          <div style={{ marginTop: '24px', padding: '16px 20px', background: 'rgba(19,17,16,0.03)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.06)' }}>
            <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', marginBottom: '12px' }}>
              Apr 13–17 Call Archive
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {archiveCalls.map((c, i) => (
                <Link
                  key={i}
                  href={c.href}
                  style={{
                    fontSize: '0.8125rem',
                    color: c.outcome === 'ENROLLED' ? 'var(--sage-dark)' : c.outcome === 'CORRECT NO-SALE' ? 'var(--ink-60)' : 'var(--terracotta)',
                    textDecoration: 'underline',
                    textDecorationColor: 'rgba(19,17,16,0.2)',
                    textUnderlineOffset: '3px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {c.consumer} ({c.score})
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Alicia Moore Williams · Week of April 20–22, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC2 · RC1 · RC3 · C-SNP Pathway · Client Gold · Math Annualization · Call Efficiency</p>
        </div>

      </div>
    </PageShell>
  )
}
