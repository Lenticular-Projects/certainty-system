'use client'

import { useState } from 'react'
import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Weekly Brief — April 22, 2026 ──────────────────────────────────────────
// CRM (source of truth — from CRM screenshot Apr 20–22):
//   Apr 13–17 (5 days): 120 all_calls · 78 billable · 7 sales · 5.83% conv · $205.29 CPA
//   Apr 20–22 (3 days):  95 all_calls · 68 billable · 8 sales · 8.42% conv · $145.25 CPA
// Coaching sample: 8 reviewed calls (2 Apr 20 · 2 Apr 21 · 4 Apr 22)

const trendRows = [
  { metric: 'Sales',      lastPeriod: '7',       thisPeriod: '8',        movement: '↑ +1 in fewer days (strong pace)', dir: 'up' },
  { metric: 'Conversion', lastPeriod: '5.83%',   thisPeriod: '8.42%',    movement: '↑ +2.59pp',                        dir: 'up' },
  { metric: 'CPA',        lastPeriod: '$205.29', thisPeriod: '$145.25',  movement: '↓ −$60.04',                        dir: 'up' },
]

const reviewedCalls = [
  {
    date: 'Monday, April 20',
    calls: [
      { consumer: 'Karen Framel',   duration: '13:16',   score: 58, outcome: 'CORRECT NO-SALE',   type: 'Ohio · dental pain ignored · loyalty surrender',              href: '/agents/ashley-whitehurst/calls/karen-framel' },
      { consumer: 'Marvin Farrier', duration: '1:05:26', score: 77, outcome: 'ENROLLED',           type: 'Cleveland OH · LIS detected · Devoted CSNP Premium',          href: '/agents/ashley-whitehurst/calls/marvin-farrier' },
    ],
  },
  {
    date: 'Tuesday, April 21',
    calls: [
      { consumer: 'Earl Jonas',     duration: '20:53',   score: 82, outcome: 'ENROLLED',           type: 'Gainesville FL · MOV SEP · VA patient · Aetna $0 HMO',        href: '/agents/ashley-whitehurst/calls/earl-jonas' },
      { consumer: 'Pamela Carter',  duration: '39:28',   score: 77, outcome: 'ENROLLED',           type: 'Bartow FL · C-SNP diabetes · Anthem Simply Level',             href: '/agents/ashley-whitehurst/calls/pamela-carter' },
    ],
  },
  {
    date: 'Wednesday, April 22',
    calls: [
      { consumer: 'Faith Norman',    duration: '3:18',   score: 30, outcome: 'MISSED OPPORTUNITY', type: 'Naples FL · SSN fear → logic response · no empathy first',     href: '/agents/ashley-whitehurst/calls/faith-norman' },
      { consumer: 'Rosetta Paul',    duration: '27:13',  score: 65, outcome: 'MISSED OPPORTUNITY', type: 'Riverview FL · dual-eligible · "I\'m afraid" → logic pivot',   href: '/agents/ashley-whitehurst/calls/rosetta-paul' },
      { consumer: 'Shirley Andrews', duration: '9:31',   score: 39, outcome: 'MISSED OPPORTUNITY', type: 'Maple Heights OH · 49-yr loyalty · dismissive line',            href: '/agents/ashley-whitehurst/calls/shirley-andrews' },
      { consumer: 'Unnamed',         duration: '2:38',   score: 42, outcome: 'MISSED OPPORTUNITY', type: 'Williamsburg SC · SSN fear → "I\'ll call back"',               href: '/agents/ashley-whitehurst/calls/unnamed' },
    ],
  },
]

const whatYouDidWell = [
  {
    title: 'LIS detection and real-time C-SNP routing on Marvin Farrier',
    body: "At 4:01 on Marvin's call, you picked up on the low-income signals and confirmed LIS status before touching plan options. That immediately opened the C-SNP pathway — you didn't stumble into Devoted CSNP Premium 017 by accident. You identified the eligibility signal, then found the plan. That's the correct sequence, and it's one of the strongest skills on the team. Marvin enrolled with a May 1 effective date, confirmation F9BCBl8DW1.",
  },
  {
    title: 'MOV SEP identified in real time on Earl Jonas',
    body: "At 3:07 on Earl's call, the moment his ex-wife Shelly Jonas mentioned he had moved, you connected it to a Special Enrollment Period and used it. The MOV SEP is one of the most commonly missed pathways in this building. You ran it correctly, enrolled Earl into Aetna Medicare Select HMO at $0 premium, and capped it with a post-enrollment loyalty anchor — direct number, next step planted. Confirmation JZLL1SR8S2.",
  },
  {
    title: 'Honest consumer advocacy — the correct no-sale and the FlexCard handling',
    body: "On Karen Framel, you correctly read that the upgrade wasn't worth the switch for her and called it. On Earl Jonas, when the FlexCard came up, you handled it directly rather than overselling it. Consumers feel whether you're working for them or at them. The enrolled calls this week closed because the person on the other end believed you. That's not a given — it's a skill you're earning.",
  },
]

const whatToWorkOn = [
  {
    num: 1,
    title: "When a consumer pushes back with fear — SSN, switching, change — lead with empathy before logic",
    body: "This showed up four times on April 22. Faith Norman said \"I was told not to give that out\" at 2:26. Unnamed said \"Uh, it have to be my social?\" at 2:29. Rosetta Paul said \"I'm afraid of and for what happened last year\" at 24:07. Shirley Andrews was anchored in 49 years of loyalty. Every time, the response was a logical explanation. Fear doesn't respond to logic — it responds to validation. The moment you hear hesitation, the first move is to agree with the instinct.",
    script: "\"You're right to be cautious — that's smart. The only reason I ask is to pull up your specific plans so I can show you what you're eligible for. I'm not keeping anything or doing anything else with it.\" Then pause. Let the silence work.",
  },
  {
    num: 2,
    title: "Stay with the fear when a consumer says \"I'm afraid\" — don't pivot to plan details",
    body: "At 24:07 on Rosetta Paul's call, she said \"I'm afraid of and for what happened last year.\" That's a full stop. That's the moment the sale lives or dies. The response moved immediately to \"You won't have to worry about that...\" — reassurance without naming what she was afraid of. A consumer who says \"I'm afraid\" needs to hear that fear acknowledged by name before they can move forward. Rosetta was dual-eligible, $1,200/year better off, had done the math. She was one empathy move from a close.",
    script: "\"That makes complete sense — change is hard when you've been burned before. Tell me what happened, and let me walk you through exactly what's different so you can make this decision with full information.\"",
  },
  {
    num: 3,
    title: "Honor long-term loyalty before you pivot — never lead with \"they're not offering anything\"",
    body: "Shirley Andrews has been with Blue Cross/Anthem for 49 years. When you said \"Blue Cross is not offering anything\" — that likely ended the call. A consumer who's held something for 49 years doesn't hear that as a fact about a carrier. They hear it as an attack on a decision they've been proud of their whole adult life. The Devoted giveback was $184.70/month — $2,216.40/year — and Shirley never heard the annual number. The offer was there. The framing killed it.",
    script: "\"49 years — that tells me you've been loyal to something that worked for you. I'm not here to take that away. I just want to make sure you still have the best version of it. Let me show you what's changed in Ohio this year.\"",
  },
]

const reportHistory = [
  {
    id: 'apr-22-weekly',
    active: true,
    date: 'Apr 22',
    label: 'Weekly Brief',
    period: 'April 20–22, 2026',
    trendHeadline: 'Sales 8 · Conv 8.42% ↑ · CPA $145 ↓',
    scoreNote: '3 enrolled · 4 missed on Apr 22 · empathy gap pattern',
    href: '/agents/ashley-whitehurst/reports/2026-04-22',
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

export default function AshleyWhitehurstPage() {
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
          <h1 className={styles.agentName}>Ashley Whitehurst</h1>
          <p className={styles.period}>April 22, 2026 · Covering April 20–22</p>
          <p className={styles.updatedAt}>{totalReviewed} calls reviewed this period</p>
        </motion.div>

        {/* Trend Snapshot */}
        <motion.div className={styles.trendSnapshot} {...SPRING}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid rgba(19,17,16,0.08)' }}>
            <h2 className={styles.sectionTitle} style={{ margin: 0, padding: 0, border: 'none' }}>Trend Snapshot</h2>
            <span style={{ fontSize: '0.75rem', color: 'var(--ink-60)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Prior period vs Apr 20–22 · from CRM</span>
          </div>
          <div className={styles.trendTable}>
            <div className={styles.trendHeader}>
              <span>Metric</span>
              <span>Last Period</span>
              <span>This Period</span>
              <span>Movement</span>
            </div>
            {trendRows.map((row) => (
              <div key={row.metric} className={styles.trendRow}>
                <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--ink)' }}>{row.metric}</span>
                <span style={{ fontSize: '0.9375rem', color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{row.lastPeriod}</span>
                <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--ink)', fontVariantNumeric: 'tabular-nums' }}>{row.thisPeriod}</span>
                <span className={row.dir === 'up' ? styles.trendUp : row.dir === 'down' ? styles.trendDown : styles.trendNeutral}>{row.movement}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '14px', lineHeight: 1.65 }}>
            8 sales in 3 days — <strong style={{ color: 'var(--sage-dark)' }}>that beats last week&apos;s 5-day total</strong>. Conversion up 2.59pp, CPA down $60. The numbers say you&apos;re closing more efficiently. The April 22 calls show exactly where the next gain is — four closeable calls lost on the same empathy seam.
          </p>
        </motion.div>

        {/* Executive Summary */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <h2 className={styles.sectionTitle}>Executive Summary</h2>
          <div className={styles.execSummaryInner}>
            <p><strong>What&apos;s working:</strong> your ability to read eligibility signals in real time is one of the strongest on the team. On Marvin Farrier, you spotted LIS at 4:01 and routed directly to a C-SNP before most agents would have even started plan research. On Earl Jonas, you caught a move disclosure at 3:07, identified it as a MOV SEP, and ran it to enrollment — one of the most commonly missed pathways in this building. Your conversion rate this period reflects that. You&apos;re not just getting lucky — you&apos;re reading faster than the consumer expects and getting ahead of the no.</p>
            <p><strong>What&apos;s costing you:</strong> four calls on April 22 hit the same wall. A consumer expressed fear — fear of giving a SSN, fear of switching, fear from something that went wrong last year — and the response was logic. Explanation. Justification. Faith Norman hung up at 3:18. Unnamed was gone at 2:38. Rosetta Paul had a nearly perfect math presentation undone at 24:07 when she said &ldquo;I&apos;m afraid&rdquo; and you immediately pivoted to plan details. Fear doesn&apos;t respond to logic. These are closeable calls. The fix is one move: validate before you explain.</p>
          </div>
        </motion.div>

        {/* The One Thing */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a consumer pushes back with fear — on SSN, on switching, on change — lead with empathy before you lead with logic. &ldquo;You&apos;re right to be cautious — that&apos;s smart.&rdquo; The validation IS the close. Four calls on April 22 were recoverable on that one move.</p>
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
            These are the calls we pulled for coaching this period. Your CRM total this period is 8 sales / 95 calls — this is a coaching sample, not an audit of every call.
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
                <span>Reviewed Enrolled: <strong>3 of 8</strong></span>
                <span style={{ opacity: 0.7 }}>CRM Total: 8 sales / 95 calls</span>
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
          <p>The Certainty System · Ashley Whitehurst · Weekly Brief · April 22, 2026</p>
        </div>

      </div>
    </PageShell>
  )
}
