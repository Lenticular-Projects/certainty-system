'use client'

import { useState } from 'react'
import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Weekly Brief — April 22, 2026 ─────────────────────────────────────────────
// CRM (source of truth — from CRM screenshot Apr 20–22):
//   Apr 13–17 (5 days): 109 all_calls · 72 billable · 8 sales · 7.34% conv · $141.88 CPA
//   Apr 20–22 (3 days): 83 all_calls · 43 billable · 6 sales · 7.23% conv · $99.83 CPA
// Coaching sample: 4 reviewed calls (1 from Apr 21, 3 from Apr 22)

const trendRows = [
  { metric: 'Sales',      lastWeek: '8',        thisPeriod: '6',       movement: '↑ On pace (2.0/day vs 1.6)', dir: 'up' },
  { metric: 'Conversion', lastWeek: '7.34%',    thisPeriod: '7.23%',   movement: '→ Essentially flat',         dir: 'neutral' },
  { metric: 'CPA',        lastWeek: '$141.88',  thisPeriod: '$99.83',  movement: '↓ −$42.05',                  dir: 'up' },
]

const reviewedCalls = [
  {
    date: 'Monday, April 21',
    calls: [
      { consumer: 'Jean Gold', duration: '12:55', score: 28, outcome: 'MISSED OPPORTUNITY', type: 'Warm referral · callback surrender', href: '/agents/jean-pierre-riviere/calls/jean-gold' },
    ],
  },
  {
    date: 'Wednesday, April 22',
    calls: [
      { consumer: 'Alicia Mize',      duration: '4:35',  score: 14, outcome: 'MISSED OPPORTUNITY', type: 'Logic response to fear · 47-sec dead air', href: '/agents/jean-pierre-riviere/calls/alicia-mize' },
      { consumer: 'Henderson',         duration: '8:44',  score: 19, outcome: 'MISSED OPPORTUNITY', type: 'PII before value bridge · Red signal missed', href: '/agents/jean-pierre-riviere/calls/henderson' },
      { consumer: 'Shirley Valencia',  duration: '20:26', score: 53, outcome: 'MISSED OPPORTUNITY', type: 'C-SNP identified · surrendered plan · gave homework', href: '/agents/jean-pierre-riviere/calls/shirley-valencia' },
    ],
  },
]

const whatYouDidWell = [
  {
    title: 'Referral mechanics when the setup is awkward',
    body: "Jean Gold came in through a surprise 3-way call arranged by her friend Dorina. You handled it smoothly — thanked Dorina warmly at 1:31, transitioned cleanly to 1-on-1 when she hung up, and immediately activated the referral credibility: 'Dorina was talking so highly of you.' Most agents fumble that hand-off. You turned an awkward setup into a trust moment before the real conversation even started.",
  },
  {
    title: 'C-SNP identification on Shirley Valencia',
    body: "Within 90 seconds of the Shirley Valencia call you confirmed she had diabetes and high blood pressure, recognized that as a C-SNP qualifying condition, and immediately began working toward the right plan. That qualification speed is an asset. You knew the chronic pathway was the way to the food card benefit she called about — that product identification is real.",
  },
  {
    title: 'You found the real pain on Jean Gold',
    body: "On Jean Gold you heard the three things that mattered: 'I don't like Aetna,' 'they got some other doctor I don't even know,' and 'I tried again and they still haven't done it.' You named May 1st as the effective date at 8:21 — the correct urgency lever at the correct moment. The diagnosis was right. The loss wasn't in the reading — it was in the close.",
  },
]

const whatToWorkOn = [
  {
    num: 1,
    title: "When a consumer refuses PII, name the emotion first — don't meet fear with logic",
    body: "On Alicia Mize at 3:07 she said 'you're not getting my Medicare number.' You said 'So how am I going to help you?' That puts the problem on her — she becomes the obstacle. Then came 47 seconds of dead air. Her refusal wasn't a hard no. It was a fear signal — 'you should never give that number to just anyone' is a belief she lives by. The move when you hear that signal is to validate the instinct first, then explain why the number is needed and how it's protected. Never match fear with logic. Match fear with empathy, then reframe.",
    script: '"Ms. Mize, that is exactly the right instinct — you should never give that number to just anyone. The only reason I need it is to confirm which plans and grocery benefits you\'re eligible for on a secure, recorded line. I can\'t see anything else. Would it help if I explained how that protection works?"',
  },
  {
    num: 2,
    title: "Build the value bridge before you ask for the Medicare number",
    body: "On Henderson at 3:20 you asked for the Medicare number without giving him any reason to trust you with it. He pushed back: 'I heard this would take less than a minute.' That wasn't a logic question — it was mistrust and impatience. You answered with process ('the first question was your zip, the second is Medicare') and the call ended. Same pattern with Jean Gold — Medicare number at 3:42, TPMO disclaimer didn't arrive until 9:01. The sequence needs to flip: compliance first, then tell them exactly why you need the number and what it unlocks, then ask.",
    script: '"Mr. Henderson, to find those specific food and flex card benefits you called about, I need to use your Medicare number as the key that opens your file — it shows me which plans you\'re actually eligible for in your area. Without it, I\'m just guessing. Can I grab that from you?"',
  },
  {
    num: 3,
    title: "When your first-choice plan isn't available — pivot to one you can sell, don't give homework",
    body: "On Shirley Valencia at 9:26 you told her the Humana chronic plan you wanted was off-limits because you're not appointed. Then at 12:11 you offered to transfer her to a Humana specialist, and at 18:16 you told her to call the back of her Clover card and ask if they have a chronic plan. You gave her homework. She had already told you the real pain at 14:43 — 'I'm only getting $24. What the hell can I do with $24?' That's your closing anchor. When your first choice is gone, the move is to pivot to a C-SNP you can write and anchor it to that $24 grocery pain — not off-board her to a competitor.",
    script: '"Shirley, that Humana plan is one option — and I have another one for you right here. I have an Aetna chronic plan that covers your diabetes and includes a real grocery benefit, way more than the $24 you\'re getting now. Let me pull up the comparison so you can see side by side what this looks like for you."',
  },
]

const reportHistory = [
  {
    id: 'apr-22',
    active: true,
    date: 'Apr 22',
    label: 'Weekly Brief',
    period: 'April 20–22, 2026',
    trendHeadline: 'Sales 6 on pace · Conv 7.23% · CPA $99.83 ↓',
    scoreNote: '4 reviewed calls · trust + pivot patterns',
    href: '/agents/jean-pierre-riviere/reports/2026-04-22',
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

export default function JeanPierreRivierePage() {
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
          <h1 className={styles.agentName}>Jean Pierre Riviere</h1>
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
                <span className={row.dir === 'up' ? styles.trendUp : row.dir === 'down' ? styles.trendDown : styles.trendNeutral}>{row.movement}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '14px', lineHeight: 1.65 }}>
            6 sales in 3 days — <strong style={{ color: 'var(--sage-dark)' }}>pace is up</strong> (2.0/day vs 1.6/day last week) and CPA dropped $42 to under $100. Conversion held essentially flat. The engine is producing more efficiently — this week is about tightening the trust moments early in the call so more of those billable calls convert.
          </p>
        </motion.div>

        {/* Executive Summary */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <h2 className={styles.sectionTitle}>Executive Summary</h2>
          <div className={styles.execSummaryInner}>
            <p><strong>What&apos;s working:</strong> your sales pace is up and your CPA is down $42 — the engine is running more efficiently. Your referral instincts are real. On Jean Gold you navigated a surprise 3-way call, activated Dorina&apos;s social proof before Jean could get defensive, validated her Aetna frustration, and identified May 1st as the urgency lever — all in the right order. On Shirley Valencia you spotted the C-SNP pathway within 90 seconds. That product knowledge and qualification speed is real and it matters.</p>
            <p><strong>What&apos;s costing you:</strong> the same pattern keeps showing up at the trust seam. On Alicia Mize at 3:07 she said &ldquo;you&apos;re not getting my Medicare number&rdquo; and you answered with logic — &ldquo;so how am I going to help you?&rdquo; — followed by 47 seconds of dead air. On Henderson you asked for the Medicare number before building any reason to trust you with it. When a consumer refuses PII, that&apos;s a fear signal, not a hard no — and the move is to name the instinct (&ldquo;you&apos;re right to be careful&rdquo;), then explain why the number is needed and how it&apos;s protected. On Shirley Valencia, when the Humana plan wasn&apos;t available, you off-boarded her instead of pivoting to an Aetna C-SNP you could actually write. She left with homework when she should have left with a plan.</p>
          </div>
        </motion.div>

        {/* The One Thing */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a consumer refuses PII, that is never a hard no — it is a fear signal. Name the instinct first, then reframe. The line is: &ldquo;That is exactly the right instinct — you should never give that number to just anyone. The only reason I need it is to check the benefits you called about on a secure, recorded line.&rdquo; Never meet fear with logic. Never answer &ldquo;I don&apos;t want to give you my number&rdquo; with &ldquo;so how am I going to help you?&rdquo;</p>
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

        {/* Reviewed Calls */}
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
            These are the calls we pulled for coaching this period. Your CRM total is 6 sales / 83 calls — this is a coaching sample, not an audit of every call.
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
                <span>Reviewed Avg: <strong>29 / 100</strong></span>
                <span>Reviewed Enrolled: <strong>0 of 4</strong></span>
                <span style={{ opacity: 0.7 }}>CRM Total: 6 sales / 83 calls</span>
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
          <p>The Certainty System · Jean Pierre Riviere · Weekly Brief · April 22, 2026</p>
        </div>

      </div>
    </PageShell>
  )
}
