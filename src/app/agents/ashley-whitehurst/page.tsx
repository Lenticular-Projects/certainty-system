'use client'

import { useState } from 'react'
import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Mid-Week Report: April 20–21, 2026 ──────────────────────────────────────
// CRM: Apr 13–17 → 7 sales · 5.83% conv · $205.29 CPA (120 calls / 78 billable)
//       Apr 20–21 → 7 sales · 12.07% conv · $94.43 CPA (58 calls / 42 billable)

// ── Trend Snapshot ───────────────────────────────────────────────────────────
const trendRows = [
  {
    metric: 'Sales',
    lastWeek: '7',
    thisPeriod: '7',
    movement: '→ Matched',
    dir: 'up' as const,
    note: '7 sales in 2 days vs. 7 in 5',
  },
  {
    metric: 'Conversion',
    lastWeek: '5.83%',
    thisPeriod: '12.07%',
    movement: '↑ +6.24pp',
    dir: 'up' as const,
    note: 'More than doubled',
  },
  {
    metric: 'CPA',
    lastWeek: '$205',
    thisPeriod: '$94',
    movement: '↓ −$111',
    dir: 'up' as const,
    note: 'Cut in half',
  },
]

// ── Calls by Date ─────────────────────────────────────────────────────────────
const callsByDate = [
  {
    date: 'Monday, April 20',
    calls: [
      {
        consumer: 'Karen Framel',
        duration: '13:16',
        score: 58,
        outcome: 'CORRECT NO-SALE',
        outcomeNote: 'Loyal UHC member — marginal upgrade, correct decision',
        type: 'Benefit Shopper · Loyal Holdout — $8/mo upgrade not closeable',
        href: '/agents/ashley-whitehurst/calls/karen-framel',
      },
      {
        consumer: 'Marvin Farrier',
        duration: '1:05:26',
        score: 77,
        outcome: 'ENROLLED',
        outcomeNote: 'Devoted C-SNP — May 1 · $200 food card',
        type: 'C-SNP · LIS Detection · Cleveland Clinic Verified',
        href: '/agents/ashley-whitehurst/calls/marvin-farrier',
      },
    ],
  },
  {
    date: 'Tuesday, April 21',
    calls: [
      {
        consumer: 'Earl Jonas',
        duration: '20:53',
        score: 82,
        outcome: 'ENROLLED',
        outcomeNote: 'Aetna Medicare Select — May 1 · $0 premium',
        type: 'MOV SEP · VA Adaptation · Clean 21-min Close',
        href: '/agents/ashley-whitehurst/calls/earl-jonas',
      },
      {
        consumer: 'Pamela Carter',
        duration: '39:28',
        score: 77,
        outcome: 'ENROLLED',
        outcomeNote: 'Anthem C-SNP — May 1 · $65 Part B giveback + $40 OTC',
        type: 'C-SNP Switch · Anthem vs Freedom Comparison · SS Concern Handled',
        href: '/agents/ashley-whitehurst/calls/pamela-carter',
      },
    ],
  },
]

// ── Apr 13–17 archive calls ───────────────────────────────────────────────────
const archiveCalls = [
  { consumer: 'Ricky DeWitt', score: 52, outcome: 'INCOMPLETE', href: '/agents/ashley-whitehurst/calls/ricky-dewitt' },
  { consumer: 'Unknown (15:39)', score: 44, outcome: 'INCOMPLETE', href: '/agents/ashley-whitehurst/calls/unknown-consumer-15m39s' },
  { consumer: 'Karen Charles', score: 80, outcome: 'ENROLLED', href: '/agents/ashley-whitehurst/calls/karen-charles' },
  { consumer: 'Keon Baldwin', score: 50, outcome: 'CORRECT NO-SALE', href: '/agents/ashley-whitehurst/calls/keon-baldwin' },
  { consumer: 'Unknown (2:40)', score: 42, outcome: 'INCOMPLETE', href: '/agents/ashley-whitehurst/calls/unknown-consumer-2m40s' },
  { consumer: 'Unknown (3:04)', score: 22, outcome: 'MISSED OPPORTUNITY', href: '/agents/ashley-whitehurst/calls/unknown-consumer-3m04s' },
  { consumer: 'Unknown (3:38)', score: 52, outcome: 'CORRECT NO-SALE', href: '/agents/ashley-whitehurst/calls/unknown-consumer-3m38s' },
  { consumer: 'Peggy Roquemore', score: 76, outcome: 'ENROLLED', href: '/agents/ashley-whitehurst/calls/peggy-roquemore' },
  { consumer: 'Betty McAllister', score: 18, outcome: 'MISSED OPPORTUNITY', href: '/agents/ashley-whitehurst/calls/betty-mcallister' },
]

// ── Patterns — Chronic / Emerging / Resolved ──────────────────────────────────
const chronicPatterns = [
  {
    rc: 'RC3',
    summary: 'Math stops at the monthly number. Every call this period had the right figures but no annualization, no humanization. Steps 2 and 3 are still missing.',
    fix: 'After any monthly figure: state it → annualize → connect to their life. "$105/month is $1,260 a year, Pamela — that\'s going INTO your check, not out of it." Three steps, every call.',
  },
  {
    rc: 'RC2',
    summary: 'Client Gold heard, not deployed. Pamela\'s SS fear (surfaced twice), Marvin\'s vision loss and transit dependency — both noted and left behind.',
    fix: 'When a consumer reveals a fear, that fear becomes your closing argument. Stop. Name it. Anchor the plan to it before moving to the next phase.',
  },
]

const emergingPatterns = [
  {
    rc: 'RC1',
    summary: 'Extended rapport tangents after close intent confirmed. Marvin\'s 15+ min of off-topic conversation after a confirmed "yes" at 29:23 is the clearest example.',
    fix: '"Mr. Marvin, I love talking with you — let me get this locked in so you\'re protected May 1st, then we can catch up." One sentence. Then move.',
  },
]

const resolvedPatterns = [
  {
    rc: 'RC1',
    summary: 'Passive close probes ("Okay, you sure?") that appeared in the April 13–17 batch. On the 3 enrolled calls this period, close execution was clean and assumptive.',
    fix: 'Resolved on enrollment calls. Carry that energy into every call — even the tough ones.',
  },
  {
    rc: 'RC4',
    summary: 'Compliance sequencing issues from prior week (SOA missing, premature data collection). Earl Jonas call had flawless Phase compliance — 15/15.',
    fix: 'Resolved on Earl Jonas. Use that sequence as your template.',
  },
]

// ── Report History ─────────────────────────────────────────────────────────────
const reportHistory = [
  {
    active: true,
    date: 'Apr 22',
    type: 'Mid-Week Report',
    detail: 'Sales: 7 ↑ · CPA: $94 ↓',
    score: '74 avg',
    period: 'April 20–21, 2026',
  },
  {
    active: false,
    date: 'Apr 20',
    type: 'Weekly Brief',
    detail: 'Sales: 7 · CPA: $205',
    score: '48 avg',
    period: 'April 13–17, 2026',
  },
  {
    active: false,
    date: 'Apr 16',
    type: 'Weekly Brief (partial)',
    detail: 'Apr 13–17 partial',
    score: '44 avg',
    period: 'April 13–17, 2026',
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

export default function AshleyWhitehurstPage() {
  const [showAll, setShowAll] = useState(true) // 4 calls — show all by default

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
          <h1 className={styles.agentName}>Ashley Whitehurst</h1>
          <p className={styles.period}>Week of April 20–22, 2026</p>
          <p className={styles.updatedAt}>Updated April 22 · 4 calls reviewed</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(74) }}>74</span>
            <span className={styles.scoreLabel}>Period Average</span>
            <span className={styles.scoreRange}>Apr 20–21 · 4 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>3 / 4</span>
            <span className={styles.scoreLabel}>Enrolled</span>
            <span className={styles.scoreRange}>1 Correct No-Sale</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>7</span>
            <span className={styles.scoreLabel}>Sales This Period</span>
            <span className={styles.scoreRange}>12.07% conv · $94 CPA</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)' }}>RC3</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Math stops at monthly — Steps 2&amp;3 missing</span>
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
            7 sales in 2 days &mdash; already matched last week&apos;s 7 in 5. Conversion more than doubled (12.07% vs 5.83%). CPA cut in half ($94 vs $205).{' '}
            <strong style={{ color: 'var(--sage-dark)' }}>Went from 5.83% to 12.07% &mdash; CPA dropped from $205 to $94. That&apos;s not luck.</strong>
          </p>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>You are reading the room correctly &mdash; C-SNP identification, MOV SEP, LIS detection, clean objection handling. The calls are closing. The one thing missing on every single call this period: after you state the monthly benefit, say it annually and connect it to what the consumer told you they care about. &ldquo;That&rsquo;s $1,260 a year going back to you, Pamela &mdash; that&rsquo;s your Social Security going up, not down.&rdquo; That sentence is the difference between a closed call and a committed one.</p>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p><strong>What&apos;s working:</strong> you&apos;re identifying the right product vehicle faster than before. On Marvin Farrier, you spotted LIS in the system at 4:01 and pivoted immediately to the C-SNP — that routing decision locked the enrollment before you were five minutes in. On Earl Jonas, the second Shelly said &ldquo;he moved,&rdquo; you connected it to a MOV SEP in real time and made the plan change feel mandatory rather than optional. On Pamela Carter, you ran a genuine seven-category side-by-side comparison of Anthem vs. Freedom and got Pamela to &ldquo;that sounds good&rdquo; in under 12 minutes. Three clean enrollments, one correct no-sale, and CRM numbers that say you doubled your conversion rate in two days. That&apos;s a real breakout.</p>
            <p><strong>What&apos;s costing you:</strong> the math framework is incomplete on every call. The right numbers are being said &mdash; but they&apos;re being left as monthly figures. Pamela&apos;s $105/month was never converted to $1,260/year. Marvin&apos;s $200/month food card was never connected to his fixed-income reality or his transit dependency. The Karen Framel call had three pieces of Client Gold (dental pain, a prior benefit cut, fear of losing what she has) and none of them became closing arguments. The gap isn&apos;t product knowledge &mdash; it&apos;s the last 10 seconds of every benefit presentation. Say the annual number. Connect it to what they told you. That step is what makes the enrollment irreversible.</p>
          </div>
        </motion.div>

        {/* ── Your Tells ── */}
        <motion.div className={styles.yourTells} {...SPRING}>
          <h2 className={styles.sectionTitle}>Your Tells</h2>
          <div className={styles.tellsBlock}>
            <p style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--sage-dark)', marginBottom: '10px' }}>
              On calls you closed (3 of 4)
            </p>
            <ul className={styles.tellsList}>
              <li>Product routing was correct and fast — C-SNP identified from food card inquiry on both Marvin and Pamela in under 2 minutes</li>
              <li>MOV SEP identified instantly on Earl Jonas the moment the address mismatch was revealed</li>
              <li>Assumptive frame held — all three closes used declarative language, not permission-seeking</li>
              <li>Objection handling was clean: FlexCard decline (Earl), paperwork fear (Marvin), SS concern (Pamela) all addressed without surrender</li>
              <li>Post-enrollment loyalty anchor used on all three enrolled calls (direct number given, next-step planted)</li>
            </ul>
          </div>
          <div className={styles.tellsBlock} style={{ marginTop: '12px' }}>
            <p style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: '10px' }}>
              On the call you lost (Karen Framel)
            </p>
            <ul className={styles.tellsList}>
              <li>Three pieces of Client Gold surfaced (dental pain at 10:38, prior benefit cut at 9:35, fear of losing what she has at 11:10) — all noted, none deployed as closing arguments</li>
              <li>Math was Step 1 only: $256 vs $267 stated, but $132/year annualization and emotional connection never made</li>
              <li>Close probe was passive: &ldquo;Okay, you sure?&rdquo; signals acceptance, not advocacy — the dental pain was still unresolved at that moment</li>
            </ul>
          </div>
          <div style={{ marginTop: '14px', padding: '14px 18px', background: 'rgba(19,17,16,0.03)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.06)' }}>
            <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--ink)', margin: 0, lineHeight: 1.6 }}>
              <strong>The delta:</strong> on enrolled calls you identified the right product and moved decisively. On the no-sale, you correctly identified the right product but left all three emotional anchors behind.
            </p>
            <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', margin: '8px 0 0', lineHeight: 1.6 }}>
              <strong>The rule:</strong> when a consumer reveals a fear or an unresolved problem, stop &mdash; deploy it as the reason they need the plan before moving to the next phase. &ldquo;Karen, you just told me you can&apos;t find a dentist. That&apos;s the exact problem Devoted solves. Tell me the practice name and I&apos;ll check their network right now.&rdquo;
            </p>
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
                <span>Period Average: <strong>74 / 100</strong></span>
                <span>Enrolled: <strong>3 of 4</strong> · Correct No-Sales: <strong>1</strong></span>
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

          {/* Apr 13–17 archive reference */}
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
          <p>The Certainty System · Ashley Whitehurst · Week of April 20–22, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC2 · RC3 · RC1 · Client Gold · C-SNP · MOV SEP · Math Annualization · LIS Detection</p>
        </div>

      </div>
    </PageShell>
  )
}
