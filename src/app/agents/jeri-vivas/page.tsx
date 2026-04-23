'use client'

import { useState } from 'react'
import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Weekly Brief — April 22, 2026 ─────────────────────────────────────────
// CRM (source of truth — from CRM screenshot Apr 20–22):
//   Apr 13–17 (5 days): 86 all_calls · 67 billable · 4 sales · 4.65% conv · $322.00 CPA
//   Apr 20–22 (3 days): 31 all_calls · 24 billable · 1 sale  · 3.23% conv · $421.00 CPA
// Coaching sample: 1 reviewed call (Timothy Wilson, Apr 22)

const trendRows = [
  { metric: 'Sales',      lastWeek: '4',       thisPeriod: '1',       movement: '↓ −3 (lighter volume)',   dir: 'down' },
  { metric: 'Conversion', lastWeek: '4.65%',   thisPeriod: '3.23%',   movement: '↓ −1.42pp',               dir: 'down' },
  { metric: 'CPA',        lastWeek: '$322.00', thisPeriod: '$421.00', movement: '↑ +$99.00',               dir: 'down' },
]

const reviewedCalls = [
  {
    date: 'Tuesday, April 22',
    calls: [
      {
        consumer: 'Timothy Wilson',
        duration: '17:55',
        score: 62,
        outcome: 'MISSED OPPORTUNITY',
        type: 'Money Caller · C-SNP · MOV SEP · close derailed by transfer silence',
        href: '/agents/jeri-vivas/calls/timothy-wilson',
      },
    ],
  },
]

const whatYouDidWell = [
  {
    title: 'You built a real relationship and got him to yes',
    body: "By 13:49 Timothy confirmed he wanted to move forward. You identified vision as his primary driver, presented the $177 Part B giveback, the $50 food card, C-SNP specialist reduction, and cut the MOOP in half. He said yes. That close was earned through real conversation — not a script read over a name.",
  },
  {
    title: 'You found the C-SNP angle with one targeted question',
    body: "At 7:17 you asked directly about chronic conditions. Timothy disclosed a transplant and a heart valve implant. You immediately pivoted toward C-SNP eligibility — the correct move. Most agents hear a chronic condition and move straight to medications. You heard it and went to the plan angle. That's the instinct that builds enrollments.",
  },
  {
    title: 'Needs-based benefit presentation — you sold to what he actually cared about',
    body: "When Timothy said at 10:29 that vision was \"the big one,\" you didn't just note it and move on. You anchored the entire plan presentation around the $200 vision allowance and built the rest of the value stack on top of it — the $177 giveback, the $50 food card, the specialist copay cut from $30 to $10, the MOOP cut in half. That's not a feature dump. That's a tailored pitch. It's exactly why he said yes at 13:49.",
  },
]

const whatToWorkOn = [
  {
    num: 1,
    title: 'When a consumer says yes, close assumptively — never let the call go silent after a yes',
    body: "At 13:49 Timothy said yes. The very next thing out of your mouth needed to be an assumptive close — a line that moves him from agreement to enrollment without giving the yes room to cool off. Instead, the call went into 2 minutes and 47 seconds of silence, and by the time Manuel joined at 16:38, the momentum was gone and the transfer landed cold. That yes at 13:49 was the enrollment. The pause killed it.",
    script: '"Perfect, Mr. Wilson. Based on everything we just went over, this is clearly the right move for you. I\'m going to get the application started right now — it only takes a few minutes and your benefits kick in next month. While I pull it up, tell me: which part of the plan are you looking forward to using first?"',
  },
  {
    num: 2,
    title: 'Annualize every benefit you present — monthly numbers are easy to forget, annual numbers stick',
    body: "You presented the $177 Part B giveback and the $50 food card correctly. But you never told him what those numbers add up to in a year. A consumer who just said yes is the most receptive he'll be to the full math — that's the moment to run the annual total out loud and make the decision feel permanent.",
    script: '"That $177 giveback plus the $50 food card is $227 in your pocket every month — annually, that\'s over $2,700. That\'s real money back to you each year. And with your $200 vision allowance on top, you\'re looking at nearly $2,900 in total annual value."',
  },
  {
    num: 3,
    title: 'Name the MOV SEP explicitly when a consumer says they recently moved',
    body: "At 6:31 Timothy said 'recently moved there.' You noted it and kept going. You never told him what that means — that his recent move is the legal reason you can make the change today, outside of AEP. The consumer needs to hear that. It builds certainty in the decision and cuts off the 'can I wait until October?' objection before it forms.",
    script: '"Because you recently moved, that actually opens a special enrollment window for you right now — you don\'t have to wait for open enrollment. Let\'s take advantage of that today."',
  },
]

const reportHistory = [
  {
    id: 'apr-22',
    active: true,
    date: 'Apr 22',
    label: 'Weekly Brief',
    period: 'April 20–22, 2026',
    trendHeadline: '1 sale · 3.23% conv · $421 CPA · 1 reviewed call',
    scoreNote: 'Soft yes cooled during silence — assumptive close is the fix',
    href: '/agents/jeri-vivas/reports/2026-04-22',
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

export default function JeriVivasPage() {
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
          <h1 className={styles.agentName}>Jeri Vivas</h1>
          <p className={styles.period}>April 22, 2026 · Covering April 20–22, 2026</p>
          <p className={styles.updatedAt}>{totalReviewed} call reviewed this period</p>
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
            1 sale in 3 days on lighter volume — <strong>the sale is still there</strong>, but conversion slipped from 4.65% to 3.23% and CPA jumped almost $100 to $421. Fewer calls this period, so the focus isn&apos;t volume — it&apos;s tightening the close on the opportunities you do get. The Timothy Wilson call is exactly that seam: a yes you earned that didn&apos;t convert because the assumptive close wasn&apos;t there.
          </p>
        </motion.div>

        {/* Executive Summary */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <h2 className={styles.sectionTitle}>Executive Summary</h2>
          <div className={styles.execSummaryInner}>
            <p><strong>What&apos;s working:</strong> The Timothy Wilson call shows you can build a real relationship and get a consumer to yes. You found the C-SNP angle with one direct question about chronic conditions at 7:17. You identified vision as his primary driver at 10:29 and built the whole value stack around it: $200 vision allowance, $177 Part B giveback, $50 food card, specialist copay cut from $30 to $10, MOOP cut in half. By 13:49 he had said yes. That close was earned through real conversation — not a script read over a name.</p>
            <p><strong>The pattern to address this week:</strong> The single thing that cost you this enrollment was the moment right after the yes. At 13:49 Timothy agreed. The very next action needed to be an assumptive close: <em>&ldquo;Perfect. Based on everything we just went over, this is clearly the right move. I&apos;m going to get the application started right now.&rdquo;</em> Instead, the call went silent for 2 minutes 47 seconds, and by the time Manuel joined at 16:38 the yes had cooled. A yes without an immediate close is not an enrollment. This week, train yourself to hear the word &ldquo;yes&rdquo; as the cue to start the application in the same breath — not a pause, not a hold, not silence. The assumptive close is the move.</p>
          </div>
        </motion.div>

        {/* The One Thing */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a consumer says yes, close in the same breath. Never let silence follow a yes. The line is: &ldquo;Perfect, Mr. Wilson. Based on everything we just went over, this is clearly the right move for you. I&apos;m going to get the application started right now — it only takes a few minutes and your benefits kick in next month.&rdquo; A yes at the 13-minute mark without an immediate assumptive close is not an enrollment — it&apos;s a soft yes that will cool off. Train yourself to hear the word &ldquo;yes&rdquo; as the cue to start the application, not the cue to pause.</p>
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
            This is the call pulled for coaching this period. Your CRM total is 1 sale / 31 calls — this is a coaching sample, not an audit of every call.
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
                <span>Reviewed Avg: <strong>62 / 100</strong></span>
                <span>Reviewed Enrolled: <strong>0 of 1</strong></span>
                <span style={{ opacity: 0.7 }}>CRM Total: 1 sale / 31 calls</span>
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
          <p>The Certainty System · Jeri Vivas · Weekly Brief · April 22, 2026</p>
        </div>

      </div>
    </PageShell>
  )
}
