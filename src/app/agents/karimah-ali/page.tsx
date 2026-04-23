'use client'

import { useState } from 'react'
import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Weekly Brief — April 22, 2026 ─────────────────────────────────────────────
// CRM (source of truth):
//   Apr 13–17 (5 days): 94 all_calls · 61 billable · 14 sales · 14.89% conv · $83.57 CPA
//   Apr 20–22 (3 days): 63 all_calls · 37 billable ·  7 sales · 11.11% conv · $84.71 CPA
// Coaching sample: 3 reviewed calls (Apr 20 / Apr 21 / Apr 22)

const trendRows = [
  { metric: 'Sales',      lastWeek: '14',       thisPeriod: '7',       movement: '↑ On pace (2.33/day vs 2.8)', dir: 'up' },
  { metric: 'Conversion', lastWeek: '14.89%',   thisPeriod: '11.11%',  movement: '↓ −3.78pp',                    dir: 'down' },
  { metric: 'CPA',        lastWeek: '$83.57',   thisPeriod: '$84.71',  movement: '→ Flat (+$1.14)',              dir: 'neutral' },
]

const reviewedCalls = [
  {
    date: 'Monday, April 20',
    calls: [
      { consumer: 'Marie Jean', duration: '1:36:26', score: 79, outcome: 'ENROLLED', type: 'New to Medicare · C-SNP · ICEP · Delray Beach', href: '/agents/karimah-ali/calls/marie-jean' },
    ],
  },
  {
    date: 'Tuesday, April 21',
    calls: [
      { consumer: 'Wilhelm Patt', duration: '52:00', score: 75, outcome: 'ENROLLED', type: 'C-SNP · CSN · 5 resistance attempts · Miami', href: '/agents/karimah-ali/calls/wilhelm-patt' },
    ],
  },
  {
    date: 'Wednesday, April 22',
    calls: [
      { consumer: 'Not Stated', duration: '2:56', score: 27, outcome: 'MISSED OPPORTUNITY', type: 'Food card caller · trust breakdown at SSN step', href: '/agents/karimah-ali/calls/not-stated' },
    ],
  },
]

const whatYouDidWell = [
  {
    title: 'C-SNP identification that changes the plan — and the paycheck',
    body: "On Marie Jean (Apr 20), when she mentioned 'blood sugar' in the initial medication screen, you stopped and confirmed the diabetes diagnosis immediately. That single question — 'do you have any chronic condition like diabetes?' at 5:42 — unlocked the C-SNP upgrade, the $195 OTC benefit, the $200 vision allowance, and the enrollment. On Wilhelm Patt (Apr 21), you caught the pacemaker at 9:21 and at 27:34 said the exact right thing: 'With you having the pacemaker, you qualify for this particular plan that's going to get you that $195.' That sentence is the winning line of that call. You're reading clinical signals faster than most agents notice them.",
  },
  {
    title: 'Persistence that closes what most agents surrender',
    body: "Wilhelm Patt tried to end the call five times. 'I'm finished over here.' 'I'm done.' 'I've had enough.' He was 78, post-hospitalization, lying in bed. You held on through every one without raising your voice, without excessive apologizing, and without losing the thread of the enrollment. That controlled, calm persistence is a skill most agents don't have — and it closed a $2,040/year grocery benefit for a senior who was rationing on $25/month.",
  },
  {
    title: 'Consumer advocacy that keeps fragile leads on the line',
    body: "Marie Jean needed a doctor. Not eventually — urgently. You spent 25 minutes finding Dr. Pierre Dorsainville on Congress Park Drive — close, in-network, accepting new patients. You didn't give up or offer a placeholder. On the same call, when her home environment went chaotic at 28:56, you waited without pressure and re-established contact. Marie's trust in you is what kept her on a 96-minute call. That patience is real skill and it's directly connected to why your CRM numbers are where they are.",
  },
]

const whatToWorkOn = [
  {
    num: 1,
    title: 'Annualize every dollar figure — always',
    body: "On both enrolled calls this period, you stated the benefit amount clearly but never annualized it. Marie was getting $90 more per month — that's $1,080 per year for food, which she told you she couldn't afford. Wilhelm's upgrade was $170 more per month — $2,040 per year. At 51:41, Marie said 'I have to go back to work — I need money.' That was the moment to make the math real. The number was in your mouth. The connection to her words was one sentence away. On Wilhelm, '$2,040 a year' was also the most powerful resistance-breaker available — every time he said he was done, 'two more minutes to lock in your $2,040 a year' would have been far more compelling than 'just a few more questions.'",
    script: "\"Marie, you just told me you need money. Starting May 1st, this plan gives you $195 every month for groceries — that's $90 more than you're getting now, automatically, without working. Over the year, that's more than $1,000 extra just for food.\"",
  },
  {
    num: 2,
    title: 'When someone offers the SSN but hesitates — reassure first',
    body: "The Apr 22 Not Stated call ended at 2:56 when you accepted the consumer's SSN offer too quickly. She asked 'Do you need my social?' — that wasn't a logistical question; it was a trust checkpoint. When someone offers the SSN but isn't fully settled into that step yet, rushing to accept it reads as confirmation of their fear. Acknowledge the instinct, decline the SSN, and pivot to the Medicare card number. That sequence demonstrates you're safe to work with — and it's the difference between a hangup and a presentation.",
    script: "\"That's a great question — and you're smart to be careful. Your information is completely secure, and actually we don't even need your Social Security number to check this. We can look everything up with the number on your red, white, and blue Medicare card. Is that nearby?\"",
  },
  {
    num: 3,
    title: 'Convert empathy into enrollment anchors',
    body: "On both enrolled calls, you showed genuine warmth in the right moments — you acknowledged Marie's loneliness, you told Wilhelm you were glad he made it through the hospital. That's the foundation of trust. The next step is connecting those emotional moments to why the plan matters: 'That's exactly why we're setting this up today.' When Mr. Patt said he nearly died during that endoscopy (31:27), the correct move wasn't just empathy — it was: 'Mr. Patt, what you just went through is exactly why I want you on this plan starting May 1st. If that ever happens again, I want that coverage locked in.' Empathy opens the door. The anchor walks you through it.",
    script: "\"Mr. Patt, what you went through at that hospital is exactly why I want to make sure you have the best plan behind you starting May 1st. If you ever need to go back, I want that $195 card loaded, your doctors confirmed, and your coverage locked in. You went through a lot. Let's make sure you're protected going forward.\"",
  },
]

const reportHistory = [
  {
    id: 'apr-22',
    active: true,
    date: 'Apr 22',
    label: 'Weekly Brief',
    period: 'April 20–22, 2026',
    trendHeadline: 'Sales 7 · Conv 11.11% ↓ · CPA $84.71 flat · 3 reviewed calls',
    scoreNote: 'Pace holding · trust-checkpoint pattern to tighten',
    href: '/agents/karimah-ali/reports/2026-04-22',
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

export default function KarimahAliPage() {
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
          <h1 className={styles.agentName}>Karimah Ali</h1>
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
            7 sales in 3 days — <strong style={{ color: 'var(--sage-dark)' }}>pace is holding</strong> against last week&apos;s 14 in 5. CPA is essentially flat at $84.71 — you&apos;re still closing efficiently. The one number that moved is conversion: 14.89% → 11.11%, a 3.78pp dip. The sales are still coming; more of the calls that should convert are slipping. The short Apr 22 hangup is the pattern — tighten the trust checkpoints and that number comes right back.
          </p>
        </motion.div>

        {/* Executive Summary */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <h2 className={styles.sectionTitle}>Executive Summary</h2>
          <div className={styles.execSummaryInner}>
            <p><strong>What&apos;s keeping your closes efficient:</strong> You read clinical signals faster than most agents notice them. On Marie Jean, the diabetes identification at 5:42 unlocked the C-SNP upgrade, the $195 OTC benefit, and the entire enrollment. On Wilhelm Patt, catching the pacemaker at 9:21 — and connecting it directly to the $195 benefit at 27:34 — is the sentence that closed that call. You&apos;re also showing persistence that most agents don&apos;t have: five termination attempts from a bed-ridden 78-year-old, and you held the line through every one without losing warmth or thread. CPA staying flat at $84.71 through a tougher call week is not an accident — it&apos;s you converting the right leads correctly.</p>
            <p><strong>Where this week&apos;s 3.78pp conversion dip came from:</strong> It&apos;s the trust-checkpoint moment, and the Apr 22 hangup is the clearest example we have on tape. At 2:34 a consumer who called in motivated for the food card asked &ldquo;Do you need my social?&rdquo; — that wasn&apos;t a logistics question, it was a fear signal. She was offering the SSN and testing whether you&apos;d catch her. You said &ldquo;we can look it up that way, let&apos;s go ahead.&rdquo; Two seconds later she hung up. The one sentence that keeps that call alive: &ldquo;That&apos;s a great question, and you&apos;re smart to be careful. We don&apos;t even need your social — we can look everything up with the number on your red, white, and blue Medicare card.&rdquo; The same pattern — state-the-benefit-but-don&apos;t-make-it-feel-real — is what&apos;s sitting in your enrolled calls too. Marie told you at 51:41 she needs money; $1,080/year was in your presentation and never said out loud. Wilhelm was rationing groceries on $25/month; you never said $2,040. The C-SNP reads are elite. The math and the trust moments are the edges that remain.</p>
          </div>
        </motion.div>

        {/* The One Thing */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>Every time a consumer tells you something about money — &ldquo;I need money,&rdquo; &ldquo;I&apos;m on a fixed income,&rdquo; &ldquo;it&apos;s hard to pay for everything&rdquo; — stop. Do the annual math out loud. &ldquo;That&apos;s $1,080 more a year for your groceries.&rdquo; You have the number every time. The only step missing is saying it.</p>
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
            These are the calls we pulled for coaching this period. Your CRM total this period is 7 sales / 63 calls — this is a coaching sample, not an audit of every call.
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
                <span>Reviewed Avg: <strong>60 / 100</strong></span>
                <span>Reviewed Enrolled: <strong>2 of 3</strong></span>
                <span style={{ opacity: 0.7 }}>CRM Total: 7 sales / 63 calls</span>
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
          <p>The Certainty System · Karimah Ali · Weekly Brief · April 22, 2026</p>
        </div>

      </div>
    </PageShell>
  )
}
