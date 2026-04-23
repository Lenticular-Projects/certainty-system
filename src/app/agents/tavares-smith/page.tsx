'use client'

import { useState } from 'react'
import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Weekly Brief — April 22, 2026 ──────────────────────────────────────────
// CRM (source of truth):
//   Apr 13–17 (5 days): 92 all_calls · 61 billable · 5 sales · 5.43% conv · $212.00 CPA
//   Apr 20–22 (3 days): 61 all_calls · 48 billable · 3 sales · 4.92% conv · $236.67 CPA
// Coaching sample: 3 reviewed calls (2 from Apr 20, 1 from Apr 21)

const trendRows = [
  { metric: 'Sales',      lastWeek: '5',       thisPeriod: '3',       movement: '→ Pace flat (1.0/day vs 1.0/day)', dir: 'neutral' },
  { metric: 'Conversion', lastWeek: '5.43%',   thisPeriod: '4.92%',   movement: '↓ −0.51pp',                        dir: 'down'    },
  { metric: 'CPA',        lastWeek: '$212.00', thisPeriod: '$236.67', movement: '↑ +$24.67',                        dir: 'down'    },
]

const reviewedCalls = [
  {
    date: 'Monday, April 20',
    calls: [
      { consumer: 'Dewey Baker',        duration: '8:00',  score: 27, outcome: 'MISSED OPPORTUNITY', type: 'Resistant loyalist · C-SNP hook missed',     href: '/agents/tavares-smith/calls/dewey-baker' },
      { consumer: 'Harold Metz',        duration: '41:25', score: 73, outcome: 'ENROLLED',            type: 'New-to-Medicare mover · OEPN · Devoted PPO', href: '/agents/tavares-smith/calls/harold-metz' },
    ],
  },
  {
    date: 'Tuesday, April 21',
    calls: [
      { consumer: 'Freddie Taylor Jr.', duration: '49:24', score: 76, outcome: 'ENROLLED', type: 'C-SNP pivot · UHC Complete Care · 11/11 drugs', href: '/agents/tavares-smith/calls/freddie-taylor-jr' },
    ],
  },
]

const whatYouDidWell = [
  {
    title: 'C-SNP pivot under pressure — Freddie Taylor Jr.',
    body: "On Freddie, you heard the chronic conditions at 5:54 — heart failure, COPD, asthma, chronic pain — and pivoted from the unavailable HealthSpring plan to the UHC C-SNP within three minutes. Freddie said yes in 30 seconds. That pivot is the entire enrollment. A lot of agents fumble when the lead plan falls apart mid-call. You didn't flinch. You also correctly caught yourself before mentioning a disaster SEP at 5:28 — a compliance awareness move that protects you and the company every time.",
  },
  {
    title: 'Clean plan pivot when the numbers didn\'t fit — Harold Metz',
    body: "When Harold disclosed he had no Social Security at 11:49 — making the Part B give-back plan useless to him — you went back to research without hesitation, found the Devoted Choice PPO, and brought Harold along. You also correctly explained the Medicaid/give-back trade-off on Freddie's call at 10:07: getting the give-back means losing Medicaid. That nuance trips up a lot of agents. You handled it cleanly on both calls.",
  },
  {
    title: 'Clean premium-objection reframe — Freddie Taylor Jr.',
    body: "At 39:25, mid-disclosure, Freddie cut in with 'How much do I have to pay for this?' then pressed on the $130 Part B deduction. That's the exact moment most agents fumble — you stayed calm, repeated the $0 plan premium, and cleanly explained why the Medicare disclosure language didn't apply to him. No surrender, no hedge, close still intact. Same call, 48:26 — when he asked about his pending wheelchair, you anchored continuity ('you're still going to be with United Healthcare') and turned a compliance moment into a loyalty moment. Those are the two objection saves that kept this enrollment alive.",
  },
]

const whatToWorkOn = [
  {
    num: 1,
    title: 'When a consumer discloses chronic conditions — stop, name them, connect to the plan',
    body: "On Dewey Baker, he told you he has high blood pressure and diabetes at 6:17. You heard it, confirmed it, and moved on to checking his current UHC plan. Diabetes plus hypertension is a year-round C-SNP enrollment window — the CSN SEP. You never asked the one question that changes the call. On Freddie, you got the C-SNP right because you asked the conditions question early. Dewey gave you the same signal and it went unused. The Dewey Baker call wasn't lost because he was uncloseable. It was lost because the chronic condition-to-plan connection was never made.",
    script: '"Dewey, those two — diabetes and high blood pressure — those actually qualify you for a specialized Medicare Advantage plan called a Chronic Special Needs Plan. It\'s built specifically for people managing what you\'re managing. That\'s not switching off UHC — that\'s upgrading to a plan designed for your conditions. Let me check if one exists in Jackson County before we do anything else."',
  },
  {
    num: 2,
    title: 'Deploy the emotional moment — don\'t just clock the time',
    body: "On Freddie at 27:02, you confirmed 11 out of 11 medications covered and immediately said 'so now we can do the enrollment.' That's the biggest relief moment on the call — a man with a table full of medicines just found out every single drug carries over. It deserved a pause. On Harold, he told you at 9:51 that Medicare and a stable address mean a fresh start after an apartment flood disrupted his life. That's the emotional anchor of the entire enrollment. On Freddie at 32:11, he said he was hurting and wanted to get off the phone. You gave him a time estimate instead of an acknowledgment. The enrollment was never at risk — but the loyalty moment was.",
    script: '"Freddie — all 11 of your medications. Every single one. Covered. That table full of medicines — same coverage, same Walgreens on 288. Nothing changes except your specialist costs go down $30 a visit. That\'s what we did today."',
  },
  {
    num: 3,
    title: 'Build the math after a plan pivot — don\'t just say "strongest coverage"',
    body: "On Harold, when the give-back plan fell apart at 11:49, you told him this was the 'strongest coverage' in his area. Harold enrolled on trust — fine for a cooperative consumer, but trust alone doesn't create conviction. On Freddie, the specialist copay drop from $65 to $35 was mentioned but never annualized. Monthly specialist patient — that's $360 a year. Combined with $600 in annual OTC benefit, approximately $960 in value went unspoken on that call. Math closes skeptics and reinforces cooperative consumers. It's the tool you're consistently leaving in the bag.",
    script: '"Harold, your old plan was giving you $50 every three months — $200 a year. This plan: $0 copays every time you see Dr. Caradini, zero premium, and when Social Security kicks in, that $160 a month starts automatically. You\'re not giving up anything — you\'re building a better foundation."',
  },
]

const reportHistory = [
  {
    id: 'apr-22',
    active: true,
    date: 'Apr 22',
    label: 'Weekly Brief',
    period: 'April 20–22, 2026',
    trendHeadline: 'Sales 3 → · Conv 4.92% ↓ · CPA $236.67 ↑',
    scoreNote: 'Pace flat · C-SNP pivot on Freddie · Dewey miss',
    href: '/agents/tavares-smith/reports/2026-04-22',
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

export default function TavaresSmithPage() {
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
          <h1 className={styles.agentName}>Tavares Smith</h1>
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
                <span className={row.dir === 'up' ? styles.trendUp : row.dir === 'down' ? styles.trendDown : styles.trendNeutral}>{row.movement}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '14px', lineHeight: 1.65 }}>
            3 sales in 3 days — <strong style={{ color: 'var(--ink)' }}>pace is holding flat</strong> at 1.0/day, same as last week. Conversion slipped half a point to 4.92%, and CPA climbed $25 to $236.67. This is a consistency challenge: the closes are coming, but enough slippable calls are still slipping that the cost-per-acquisition is creeping the wrong way. The coaching below is about tightening the objection moments on resistant-loyalist calls (Dewey) and deploying Client Gold on the enrollments (Harold, Freddie) so the good calls get easier and faster.
          </p>
        </motion.div>

        {/* Executive Summary */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <h2 className={styles.sectionTitle}>Executive Summary</h2>
          <div className={styles.execSummaryInner}>
            <p><strong>What&apos;s working:</strong> Your plan pivot instinct is sharp. When Freddie&apos;s HealthSpring request hit a wall, you heard his chronic conditions and had him enrolled in the UHC C-SNP within three minutes of the pivot. That&apos;s a skilled move — most agents freeze when the lead plan disappears mid-call. On Harold Metz, when the give-back plan fell apart because he had no Social Security, you didn&apos;t fumble. You went back to research, came back with a decision, and brought Harold along. Two enrollments on two different pivot patterns in two days. That&apos;s what a productive week looks like.</p>
            <p><strong>The pattern to address this week:</strong> Dewey Baker was closeable and it didn&apos;t close. He disclosed diabetes and high blood pressure at 6:17 — a year-round C-SNP window, the exact same eligibility pathway you used to close Freddie Taylor the next day. You pulled up his UHC plan instead. Then you broke the loyalty frame you built at 1:37 by inviting comparison shopping he&apos;d already refused at 7:07. Dewey hung up after the plan-update lecture at 7:41. On both enrolled calls, you heard the Client Gold and kept moving. Harold told you he was finally stable after an apartment flood. Freddie told you he was hurting. Freddie&apos;s 11/11 medication confirmation came out like a data point. These are your closes — they deserve a pause and a sentence that makes them land.</p>
          </div>
        </motion.div>

        {/* The One Thing */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a consumer discloses a chronic condition — any chronic condition — stop before you go to the plan lookup. Say: &ldquo;That actually qualifies you for a specialized plan built for that condition. Let me check before we look at anything else.&rdquo; One sentence. That&apos;s the difference between a no-sale and an enrollment on resistant-loyalist calls. It&apos;s the same pivot you made on Freddie Taylor. Use it on every call where you hear a chronic condition.</p>
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
            These are the calls we pulled for coaching this period. Your CRM total this period is 3 sales / 61 calls — this is a coaching sample, not an audit of every call.
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
                <span>Reviewed Avg: <strong>59 / 100</strong></span>
                <span>Reviewed Enrolled: <strong>2 of 3</strong></span>
                <span style={{ opacity: 0.7 }}>CRM Total: 3 sales / 61 calls</span>
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
          <p>The Certainty System · Tavares Smith · Weekly Brief · April 22, 2026</p>
        </div>

      </div>
    </PageShell>
  )
}
