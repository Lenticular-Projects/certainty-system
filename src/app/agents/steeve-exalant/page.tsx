'use client'

import { useState } from 'react'
import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Weekly Brief — April 22, 2026 ──────────────────────────────────────────
// CRM (source of truth — from CRM screenshot Apr 20–22):
//   Apr 13–17 (5 days): 144 all_calls · 104 billable · 19 sales · 13.19% conv · $108.37 CPA
//   Apr 20–22 (3 days): 69 all_calls  ·  52 billable · 12 sales · 17.39% conv · $71.50 CPA
// Coaching sample: 2 reviewed calls (both enrolled · 75 + 77) — no Apr 22 calls reviewed yet

const trendRows = [
  { metric: 'Sales',      lastWeek: '19',       thisPeriod: '12',      movement: '↑ pace (4.0/day vs 3.8)',  dir: 'up' },
  { metric: 'Conversion', lastWeek: '13.19%',   thisPeriod: '17.39%',  movement: '↑ +4.20pp',                dir: 'up' },
  { metric: 'CPA',        lastWeek: '$108.37',  thisPeriod: '$71.50',  movement: '↓ −$36.87',                dir: 'up' },
]

const reviewedCalls = [
  {
    date: 'Monday, April 20',
    calls: [
      { consumer: 'Petra Luna', duration: '43:47', score: 75, outcome: 'ENROLLED', type: 'MOV SEP · dual-eligible mover from New York', href: '/agents/steeve-exalant/calls/petra-luna' },
    ],
  },
  {
    date: 'Tuesday, April 21',
    calls: [
      { consumer: 'Leonard McQuirk', duration: '36:05', score: 77, outcome: 'ENROLLED', type: 'MCD SEP · QMB+ → FBDE Medicaid upgrade', href: '/agents/steeve-exalant/calls/leonard-mcquirk' },
    ],
  },
]

const whatYouDidWell = [
  {
    title: 'SEP identification — both calls, first mention, no miss',
    body: "On Petra Luna, you caught the move at 0:48 with one question — \"Did you just move?\" — and built the entire enrollment around MOV. On Leonard McQuirk, you saw the QMB+ to FBDE Medicaid upgrade in the system at 2:13 and framed it as good news before Leonard even understood what had changed. Two different SEP types, both caught cleanly on first signal. That's the read that separates you from agents who let these calls die in discovery.",
  },
  {
    title: 'Real-time signal deployment — every stated need became an enrollment anchor',
    body: "Leonard said \"just hungry\" at 2:04 and you pivoted to the food card within seconds. He missed a doctor's appointment because his car ran out of gas at 9:43 — you introduced transportation benefits immediately. He disclosed five strokes and a six-mile hospital walk at 25:11 — you reinforced the 48-trip/100-mile transport benefit and told him directly that never happens again. Petra said she wanted to go to the dentist at 10:22 — you confirmed $0 dental on the spot. This is what makes you dangerous on a cold call: you hear what the consumer actually needs and you answer it before they ask.",
  },
  {
    title: 'Full compliance execution on both enrollments — no shortcuts',
    body: "Both calls had complete Phase VI compliance reads — all required elements, no sections skipped. On Leonard's call you delivered the full CMS boilerplate from 18:29 to 22:02 and framed it warmly: \"they like to torture me, so I got to read it.\" That framing keeps the consumer calm without trivializing the content. On Petra's call the compliance reading at 31:43 was thorough and complete despite a consumer who had been tangential for 30 minutes. Clean compliance on every enrolled call is the floor — you're clearing it consistently.",
  },
]

const whatToWorkOn = [
  {
    num: 1,
    title: 'Annualize every benefit — $185/month is a feature, $2,220/year is a close',
    body: "On both calls you named the benefit amount and moved on. On Petra's call, \"$185 a month\" was stated at least five times and never converted to $2,220 a year — for a woman who said she has no money. On Leonard's call you named the food card, the vision increase, the dental allowance, and the transportation individually, but you never stacked them into an annual total. Benefit lists are features. Annual totals are closes. You're getting the yes anyway because your rapport and SEP work carries the call — but the annualized number is the line that makes the decision feel permanent rather than incidental.",
    script: '"Ms. Luna, that\'s $185 every single month — which means Health Springs is putting $2,220 back in your pocket this year. That\'s your grocery money for the year, handled." / "Mr. Leonard, let me put this together for you: $165 a month on the food card is $1,980 a year in groceries. Add $125 more in vision, $2,000 for those implants, plus transportation to every doctor\'s appointment — you\'re looking at over $5,000 in additional benefits this year. Every dollar of it is at zero cost."',
  },
  {
    num: 2,
    title: 'Isolate and lock the plan change — don\'t re-open benefit menus after the yes',
    body: "On Leonard's call at 15:08 you had the close — he agreed to proceed. Then you reopened a benefit menu (\"and one more thing we can add…\") and the consumer went quiet for 12 seconds. Every time you stack more after the close, you invite reconsideration. Once a consumer says yes, the move is to narrow, not broaden: confirm the effective date, confirm the plan name, lock the enrollment action. On Petra's call the same pattern almost cost you the close at 28:43 — you named three more features instead of moving to the confirmation number. The yes is a door. Walk through it, don't stand in it.",
    script: '"Perfect, Mr. Leonard — so we\'re locking in the Devoted Giveback plan effective May 1st. I\'m going to confirm a few details and get you your confirmation number right now." Then go. No new features, no new benefit lists — just confirmation, effective date, and close.',
  },
  {
    num: 3,
    title: 'Bring Client Gold back at the close — the enrollment is already written',
    body: "On Petra's call, she told you she has nothing and she wants to go to the dentist. At 28:43 when you asked for the close, you used plan language. The line was already written by what she told you. On Leonard's call, you deployed his signals in real time during the call — but at the close (16:07), you didn't loop back to the six-mile hospital walk or the missed appointment. Bringing the consumer's own words back at the close is what converts a technically successful close into one the consumer feels completely certain about.",
    script: '"[Consumer name], remember you told me [their exact words about their need]. That\'s exactly why we did this. Starting May first, [specific benefit that fixes their stated problem]. That\'s done." At the pre-close, always bring back the strongest thing they said.',
  },
]

const reportHistory = [
  {
    id: 'apr-22',
    active: true,
    date: 'Apr 22',
    label: 'Weekly Brief',
    period: 'April 20–22, 2026',
    trendHeadline: 'Sales 12 · Conv 17.39% ↑ · CPA $71.50 ↓ · team-leading',
    scoreNote: 'Both reviewed calls enrolled · 76 avg · SEP identification driving the conversion lift',
    href: '/agents/steeve-exalant/reports/2026-04-22',
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

export default function SteeveExalantPage() {
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
          <h1 className={styles.agentName}>Steeve Exalant</h1>
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
            12 sales in 3 days on 69 calls. <strong style={{ color: 'var(--sage-dark)' }}>17.39% conversion is leading the team this week,</strong> and CPA dropped $36.87 from the previous week. Conversion is up 4.2pp, pace is up, cost per acquisition is down &mdash; all three levers moving the right way at the same time. You&apos;re the team&apos;s top closer right now.
          </p>
        </motion.div>

        {/* Executive Summary */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <h2 className={styles.sectionTitle}>Executive Summary</h2>
          <div className={styles.execSummaryInner}>
            <p><strong>What&apos;s driving the breakout:</strong> You&apos;re identifying SEP windows that other agents miss and closing them the same call. On Petra Luna (Apr 20), you caught the MOV SEP at first mention of the move &mdash; one question, &ldquo;Did you just move?&rdquo; &mdash; and built a complete 75-point enrollment around it. On Leonard McQuirk (Apr 21), you saw the QMB+ to FBDE Medicaid upgrade in the system before Leonard even knew what it meant, framed it as good news at 2:13, and closed a 77-point enrollment in 36 minutes. Both calls had complicated consumer situations &mdash; a highly verbal 79-year-old first-time mover, a fragile man with five strokes and food insecurity &mdash; and on both you deployed real-time signals as enrollment anchors the moment they were stated. That&apos;s not luck. It&apos;s a specific, repeatable set of instincts that explains why your conversion jumped 4.2pp this week and your CPA dropped $36.87. You&apos;re leading the team.</p>
            <p><strong>The one pattern to close out:</strong> Both calls have the same gap in the math section. You present benefits as monthly numbers and move on. Petra Luna opened the call saying she has nothing &mdash; you never told her $185/month is $2,220 a year going back onto her check. Leonard is a man who skipped breakfast and couldn&apos;t get to stroke therapy &mdash; you named every benefit individually but never stacked them into a total. You&apos;re closing without it because your rapport and signal work are strong enough to carry the call. But the annualized total is the line that makes the decision feel undeniable rather than incidental. Add it, and your already-strong closes go faster.</p>
          </div>
        </motion.div>

        {/* The One Thing */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>After every benefit number, say the annual total out loud. &ldquo;$185 a month is $2,220 a year.&rdquo; &ldquo;$165 a month in food is $1,980 a year.&rdquo; Then stack them. That one line is the difference between a close and a close the consumer never second-guesses.</p>
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
            These are the calls we pulled for coaching this period. Your CRM total this period is 12 sales / 69 calls — this is a coaching sample, not an audit of every call.
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
                <span>Reviewed Avg: <strong>76 / 100</strong></span>
                <span>Reviewed Enrolled: <strong>2 of 2</strong></span>
                <span style={{ opacity: 0.7 }}>CRM Total: 12 sales / 69 calls</span>
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
          <p>The Certainty System · Steeve Exalant · Weekly Brief · April 22, 2026</p>
        </div>

      </div>
    </PageShell>
  )
}
