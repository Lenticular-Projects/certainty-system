'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from '../../page.module.css'

// ── Archived Weekly Brief — April 22, 2026 ──────────────────────────────────
// This page is a permanent archive of the Apr 22 brief delivered to Marcus.
// When a new brief ships on the main agent page, this one stays exactly as-is.
// CRM (source of truth):
//   Apr 13–17 (5 days): 157 all_calls · 102 billable · 10 sales · 6.37% conv · $226.00 CPA
//   Apr 20–22 (3 days): 109 all_calls ·  76 billable · 14 sales · 12.84% conv · $84.79 CPA

const trendRows = [
  { metric: 'Sales',      lastWeek: '10',       thisPeriod: '14',     movement: '↑ +4 (4.67/day vs 2.0/day)', dir: 'up' },
  { metric: 'Conversion', lastWeek: '6.37%',    thisPeriod: '12.84%', movement: '↑ +6.47pp',                  dir: 'up' },
  { metric: 'CPA',        lastWeek: '$226.00',  thisPeriod: '$84.79', movement: '↓ −$141.21',                 dir: 'up' },
]

const reviewedCalls = [
  {
    date: 'Monday, April 20',
    calls: [
      { consumer: 'Melbourne Waller', duration: '26:32', score: 78, outcome: 'ENROLLED', type: 'D-SNP · INT SEP · Medicaid detection', href: '/agents/marcus-hughes/calls/melbourne-waller' },
    ],
  },
  {
    date: 'Tuesday, April 21',
    calls: [
      { consumer: 'Paul Marie', duration: '43:31', score: 82, outcome: 'ENROLLED', type: 'D-SNP upgrade · LIS level change · $70→$230 OTC', href: '/agents/marcus-hughes/calls/paul-marie' },
    ],
  },
]

const whatYouDidWell = [
  {
    title: 'Elite product identification under pressure',
    body: 'On Melbourne Waller at 3:21, you spotted Medicaid in the system and pivoted from a standard MAPD pitch to a D-SNP enrollment in real time. On Paul Marie at 24:07, you identified the LIS level change as the qualifying SEP on the fly. That level of product reading separates top closers from the rest of the floor.',
  },
  {
    title: 'Assumptive frames that held',
    body: 'Both opens committed to an outcome inside 20 seconds — "I\'m going to get you that food card" on Melbourne, forward momentum on Paul through a lengthy Medicare ID lookup. You never asked permission to proceed; you assumed it. Both consumers felt led, not sold.',
  },
  {
    title: 'Recovery when it mattered',
    body: 'Paul said "No" at 26:58 when asked if he understood this was Medicare Advantage and not a supplement. Your recovery was warm, clear, and kept the enrollment on track. That\'s the move agents fumble all the time. You didn\'t.',
  },
]

const whatToWorkOn = [
  {
    num: 1,
    title: 'Deploy Client Gold the moment you hear it',
    body: 'Melbourne said "Hungry" at 0:13. Paul described $70 buying potatoes at 7:54. Both were the emotional close sitting right there — and both got filed and moved past. When a consumer hands you their real reason, stop. Say it back. Make the plan solve that specific thing.',
    script: '"Melbourne, you told me you were hungry. Starting May 1st — that\'s handled."',
  },
  {
    num: 2,
    title: 'Run all three math steps, every call',
    body: '$283/month is Step 1. You never reached Step 2 (annualize) or Step 3 (humanize) on either call. The monthly figure is the start; the annual figure is what makes the commitment feel real.',
    script: '"That\'s $283 every month. Over the year that\'s $3,396 in your pocket, Melbourne — for groceries, utilities, the stuff you called me about. That\'s real money."',
  },
  {
    num: 3,
    title: 'Set a purpose before any hold over 60 seconds',
    body: 'On Melbourne at 5:12, you went into a 7+ minute system verification hold with no purpose set. Consumer had no reason to stay engaged. A single line at the start keeps them leaned in.',
    script: '"I\'m checking your full Medicaid level — I want to make sure you get the maximum benefit you\'re entitled to. Stay right here."',
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

export default function MarcusHughesApr22ReportPage() {
  const totalReviewed = reviewedCalls.reduce((sum, g) => sum + g.calls.length, 0)

  return (
    <PageShell signal="green">
      <div className={styles.page}>

        {/* Breadcrumb */}
        <Link href="/agents/marcus-hughes" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>
          ← Back to Marcus Hughes
        </Link>

        {/* Header */}
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Archived Weekly Brief</span>
          </div>
          <h1 className={styles.agentName}>Marcus Hughes — April 22, 2026</h1>
          <p className={styles.period}>Weekly Brief · Covering April 20–22, 2026</p>
          <p className={styles.updatedAt}>Delivered April 22, 2026 · {totalReviewed} calls reviewed</p>
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
            14 sales in 3 days — you&apos;ve beaten all of last week by 40%, in 60% of the time. Conversion doubled (6.37% → 12.84%), and CPA dropped from $226 to $84.79 — nearly a third of last week. <strong style={{ color: 'var(--sage-dark)' }}>This is a breakout period.</strong> The job this week is protecting the habits that are producing it and closing the last seams where Client Gold and the math sequence are still going unused.
          </p>
        </motion.div>

        {/* Executive Summary */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <h2 className={styles.sectionTitle}>Executive Summary</h2>
          <div className={styles.execSummaryInner}>
            <p><strong>What&apos;s working:</strong> You are reading the room at an elite level right now. On Melbourne Waller, you spotted Medicaid in the system at 3:21 and pivoted from MAPD to D-SNP in real time — that product identification separates trained agents from the rest of the floor. On Paul Marie, you caught the LIS level change as a qualifying SEP on the fly, anchored the $70 vs. $230 comparison immediately, and recovered cleanly when Paul got confused about MA vs. supplement at 26:58. Both calls had genuine warmth. Both closed. The CRM reflects it: 14 sales in 3 days, 12.84% conversion, $84.79 CPA — your strongest numbers yet.</p>
            <p><strong>What&apos;s costing you:</strong> the same pattern showed up on both reviewed calls. Melbourne said &ldquo;Hungry&rdquo; at 0:13 — one word, and the entire emotional arc of the call was sitting right there. Paul described $70 as a 10-pound bag of potatoes and a gallon of milk — he was telling you his reality. Both moments went past without being deployed as the close. Math stopped at Step 1 on both calls: the monthly number was stated, but annualization and humanization were skipped. $283/month is $3,396 a year. That number is what makes the commitment feel real. You&apos;d close faster and tighter if you ran all three steps every time.</p>
          </div>
        </motion.div>

        {/* The One Thing */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a consumer hands you their real reason — hunger, a bag of potatoes, a fixed income — stop. Say it back. Make the plan solve that specific thing. &ldquo;Melbourne, you told me you were hungry. Starting May 1st — that&apos;s handled.&rdquo; That&apos;s the job.</p>
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
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginBottom: '16px', fontStyle: 'italic' }}>
            These are the calls we pulled for coaching this period. Your CRM total was 14 sales / 109 calls — this was a coaching sample, not an audit of every call.
          </p>
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
            <span>Reviewed Avg: <strong>80 / 100</strong></span>
            <span>Reviewed Enrolled: <strong>2 of 2</strong></span>
            <span style={{ opacity: 0.7 }}>CRM Total: 14 sales / 109 calls</span>
          </div>
        </motion.div>

        {/* Footer */}
        <div className={styles.footer}>
          <p>The Certainty System · Marcus Hughes · Weekly Brief · April 22, 2026 · Archived</p>
        </div>

      </div>
    </PageShell>
  )
}
