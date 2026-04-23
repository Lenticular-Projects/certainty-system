'use client'

import { useState } from 'react'
import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Weekly Brief — April 22, 2026 ──────────────────────────────────────────
// CRM (source of truth — from CRM screenshot Apr 22):
//   Apr 13–17 (5 days): 108 all_calls · 73 billable · 14 sales · 12.96% conv · $100.57 CPA
//   Apr 20–22 (3 days):  61 all_calls · 45 billable ·  3 sales ·  4.92% conv · $229.33 CPA
// Coaching sample: 2 reviewed calls (Apr 21 Teresa Elgrino · Apr 22 Timothy Wilson)

const trendRows: { metric: string; lastWeek: string; thisPeriod: string; movement: string; dir: 'up' | 'down' }[] = [
  { metric: 'Sales',      lastWeek: '14',       thisPeriod: '3',        movement: '↓ −11 sales',          dir: 'down' },
  { metric: 'Conversion', lastWeek: '12.96%',   thisPeriod: '4.92%',    movement: '↓ −8.04pp',            dir: 'down' },
  { metric: 'CPA',        lastWeek: '$100.57',  thisPeriod: '$229.33',  movement: '↑ +$128.76 (worse)',   dir: 'down' },
]

const reviewedCalls = [
  {
    date: 'Monday, April 21',
    calls: [
      { consumer: 'Teresa Elgrino', duration: '52:08', score: 58, outcome: 'CORRECT NO-SALE', type: 'Dual-eligible · D-SNP search missed · rollover objection', href: '/agents/manuel-medrano/calls/teresa-elgrino' },
    ],
  },
  {
    date: 'Wednesday, April 22',
    calls: [
      { consumer: 'Timothy Wilson', duration: '34:06', score: 48, outcome: 'MISSED OPPORTUNITY', type: 'Scared Switcher · HMO fear · logic-response to emotion', href: '/agents/manuel-medrano/calls/timothy-wilson' },
    ],
  },
]

const whatYouDidWell = [
  {
    title: 'You found the C-SNP on Timothy Wilson inside the first three minutes',
    body: 'At 3:11 on the Timothy Wilson call you identified a C-SNP with a $177/month Part B giveback — over $2,100 a year back in his pocket. Most agents would have taken 15 minutes to surface a product that strong. The value was real, the math was right, and the plan fit his chronic condition. The product identification is not the reason this call didn\'t close.',
  },
  {
    title: 'You stayed composed under 52 minutes of sustained objection pressure on Teresa Elgrino',
    body: 'Teresa raised the rollover objection at least six times in increasingly frustrated language. You never raised your voice, never became defensive, and held a professional frame all the way through to a clean close. That composure is a real asset — most agents crack or argue by the fourth recurrence. You didn\'t.',
  },
  {
    title: 'Honest plan comparison that built real credibility on Teresa',
    body: 'At 24:10 you surfaced that Humana\'s transportation benefit requires prior authorization — information Teresa had never been told. Her reaction ("What the hell? I\'ve never heard of that!") showed it landed. You disclosed a genuine downside of the competing plan instead of burying it. That kind of honesty is what makes consumers trust you the next time they pick up the phone.',
  },
]

const whatToWorkOn = [
  {
    num: 1,
    title: 'When a consumer brings up a past bad experience with a plan — acknowledge once and pivot forward',
    body: 'On Timothy Wilson at 30:05 he said "When I got into Humana Gold Plus, it screwed everything up." That\'s fear, not a network question. You responded by checking whether his doctors were in network. Checking the network was the right information — but not the right first move. When a consumer brings up an HMO they had a bad experience with, the move is to acknowledge it once and redirect to what\'s different about this specific plan — do NOT ask him to walk you through what went wrong. The more he narrates the old bad experience, the deeper that frame sets in. Acknowledge, then pivot forward to what makes THIS plan different for HIM.',
    script: '"I hear you — a lot of people have had issues with certain HMO plans. What I want to show you is what\'s different about this one specifically. This is a chronic special needs plan built around your transplant and your heart — let\'s confirm your doctors and Tampa General are in this specific network right now, before we go anywhere else."',
  },
  {
    num: 2,
    title: 'When a consumer confirms full Medicaid — search D-SNP first, every time',
    body: 'Teresa confirmed full Medicaid at 5:02. That\'s the INT SEP signal — it opens a Dual Special Needs Plan pathway with potentially richer benefits and different rollover terms. You verified QMB and searched a standard MAPD plan. You then spent 40 minutes defending a $16/month gap on the wrong product. The D-SNP conversation never happened. Before you present any plan to a dual-eligible member, run the D-SNP check first — it takes 60 seconds and it ends the wrong-product argument before it starts.',
    script: '"Teresa, since you have full Medicaid, I want to check something for you first. There\'s a type of plan called a Dual Special Needs Plan that\'s built specifically for people on both Medicare and Medicaid — most agents never even mention it. Give me one moment to see if there\'s one available in Hancock County."',
  },
  {
    num: 3,
    title: 'Connect the math to the person\'s actual life — not just the numbers',
    body: 'On both calls this period, the math stopped at annualization. On Timothy, $2,124 a year was never tied to anything real about his life — his transplant medications, his fixed income, his specialist visits. On Teresa, she told you at 44:35 that groceries run out before the end of the month. That\'s the humanization hook you needed: "$16 more a month means one fewer week where groceries run short." Step 3 is the close. The number means nothing until it lands in their specific situation.',
    script: '"Teresa, you told me you spend the whole hundred every month and still use cash. That tells me the rollover has never actually built for you — it resets just like UHC would, except you\'d have $16 more to start with. When groceries run short before payday, that\'s the difference."',
  },
]

const reportHistory = [
  {
    id: 'apr-22',
    active: true,
    date: 'Apr 22',
    label: 'Weekly Brief',
    period: 'April 20–22, 2026',
    trendHeadline: '3 sales · Conv 4.92% ↓ · 2 reviewed calls',
    scoreNote: 'Tough week — emotional reframe + D-SNP miss',
    href: '/agents/manuel-medrano/reports/2026-04-22',
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

export default function ManuelMedranoPage() {
  const [showAllCalls, setShowAllCalls] = useState(true)

  const totalReviewed = reviewedCalls.reduce((sum, g) => sum + g.calls.length, 0)

  return (
    <PageShell signal="yellow">
      <div className={styles.page}>

        {/* Header */}
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Weekly Brief</span>
          </div>
          <h1 className={styles.agentName}>Manuel Medrano</h1>
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
            This was a rough week — 3 sales in 3 days on 61 calls, conversion cut nearly in half, CPA climbed $129. Not sugarcoating it. Last week you ran 14 sales at a $100 CPA, so the skills are there. <strong style={{ color: 'var(--terracotta)' }}>What shifted is how you&apos;re handling two specific kinds of objections</strong> — emotional fear and dual-eligible product selection. Both are fixable in one conversation per call.
          </p>
        </motion.div>

        {/* Executive Summary */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <h2 className={styles.sectionTitle}>Executive Summary</h2>
          <div className={styles.execSummaryInner}>
            <p><strong>What&apos;s working:</strong> The skills that drove last week&apos;s 14 sales are still there. You find the right product fast — on Timothy Wilson you had a C-SNP with a $177/month Part B giveback identified in the first three minutes. Your composure is genuine; you held a professional frame through 52 minutes of sustained objection pressure on Teresa Elgrino without once becoming defensive. And when Humana&apos;s transportation required prior authorization, you disclosed it honestly instead of burying it — that kind of moment is how you earn the relationship. The foundation is intact. The breakout wasn&apos;t a fluke.</p>
            <p><strong>What&apos;s costing you this period:</strong> Two calls, two different shapes of the same miss — when the objection shifts from logic to emotion, the response stays logical. On Timothy at 30:05 he said the Gold Plus &ldquo;screwed everything up&rdquo; — that&apos;s fear, not a network question. You responded with a network check. The correct move is to acknowledge the feeling once and pivot forward to what&apos;s different about THIS plan — not ask him to walk you through what went wrong, which only deepens the old frame. On Teresa at 5:02 she confirmed full Medicaid — that&apos;s the INT SEP signal for a Dual Special Needs Plan search. You searched a standard MAPD and spent 40 minutes defending $16/month against a rollover objection you were never going to win on the wrong product. Both calls had a viable close. The adjustment is one move per call — and the numbers come back fast when you make it.</p>
          </div>
        </motion.div>

        {/* The One Thing */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a consumer brings up a past bad experience with a plan, a carrier, or an HMO — acknowledge it once and pivot forward to what&apos;s different about THIS plan. Do NOT ask them to walk you through what went wrong. The more they narrate the old bad experience, the deeper that negative frame sets in. The line is: &ldquo;I hear you — a lot of people have had issues with certain HMO plans. What I want to show you is what&apos;s different about this one specifically.&rdquo; One acknowledgment, then forward.</p>
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
            These are the calls we pulled for coaching this period. Your CRM total is 3 sales / 61 calls — this is a coaching sample, not an audit of every call.
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
                <span>Reviewed Avg: <strong>53 / 100</strong></span>
                <span>Reviewed Enrolled: <strong>0 of 2</strong></span>
                <span style={{ opacity: 0.7 }}>CRM Total: 3 sales / 61 calls</span>
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
          <p>The Certainty System · Manuel Medrano · Weekly Brief · April 22, 2026</p>
        </div>

      </div>
    </PageShell>
  )
}
