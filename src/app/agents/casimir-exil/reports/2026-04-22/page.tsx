'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from '../../page.module.css'

// ── Archived Weekly Brief — April 22, 2026 ──────────────────────────────────
// Display name: Casimir Exil (slug: casimir-exil)
// This page is a permanent archive of the Apr 22 brief delivered to Casimir.
// CRM (source of truth):
//   Apr 13–17: not tracked — first tracked period
//   Apr 20–22 (3 days): 26 all_calls · 20 billable · 3 sales · 11.54% conv · $84.67 CPA

const trendRows = [
  { metric: 'Sales',      lastWeek: '—',  thisPeriod: '3',       movement: 'First tracked period',  dir: 'neutral' },
  { metric: 'Conversion', lastWeek: '—',  thisPeriod: '11.54%',  movement: 'First tracked period',  dir: 'neutral' },
  { metric: 'CPA',        lastWeek: '—',  thisPeriod: '$84.67',  movement: 'First tracked period',  dir: 'neutral' },
]

const reviewedCalls = [
  {
    date: 'Tuesday, April 21',
    calls: [
      { consumer: 'Gary Rich',       duration: '1:05:38', score: 76, outcome: 'ENROLLED',           type: 'Friendly Skeptic · DST compliance flag · Type 2 diabetes',       href: '/agents/casimir-exil/calls/gary-rich' },
    ],
  },
  {
    date: 'Wednesday, April 22',
    calls: [
      { consumer: 'Judith Copeland', duration: '4:28',    score: 20, outcome: 'MISSED OPPORTUNITY', type: 'Commercial Myth · SSN refusal · surrendered to scam fear',       href: '/agents/casimir-exil/calls/judith-copeland' },
      { consumer: 'Not Stated',      duration: '8:44',    score: 21, outcome: 'MISSED OPPORTUNITY', type: 'Scared Switcher · "is this a scam" · logic met fear',            href: '/agents/casimir-exil/calls/not-stated-8m44s' },
    ],
  },
]

const whatYouDidWell = [
  {
    title: 'Patience with Gary Rich that most new agents can’t hold',
    body: "Gary is 83, has arthritis, and moves at his own pace — it took him nearly two minutes just to get up and find his Medicare card. You never rushed him, never showed impatience, and never stepped on his pauses. That is the only reason a 65-minute call ended with an enrollment instead of a hang-up. Most agents would have lost Gary inside the first five minutes. You built the trust he needed to sign.",
  },
  {
    title: 'You annualized the give-back and it landed',
    body: "At 17:45 on the Gary Rich call, you turned $163.90/month into \"$1,956, almost $2,000\" in annual savings. Gary’s \"Wow\" told you the number did exactly what it was supposed to do — it made the benefit real. That’s Math Step 2 executed properly, and it’s the move that locked the emotional close before you ever got to the compliance reading.",
  },
  {
    title: 'Full prescription verification — zero surprises at the pharmacy',
    body: "You looked up all six of Gary’s medications individually, confirmed Tier 1 and Tier 2 across the board, and confirmed Wimberley Pharmacy as in-network. For a medication-dependent consumer, that was the trust element that closed the call. Agents skip this step all the time and lose enrollments at the pharmacy counter later. You did it right.",
  },
]

const whatToWorkOn = [
  {
    num: 1,
    title: 'Never say "I work for Medicare" — that line is a compliance violation',
    body: "On the Judith Copeland call at 1:07, you said \"I work for Medicare.\" On the Gary Rich call, you described yourself as \"contracted with Medicare.\" Both phrasings are prohibited under CMS marketing rules — you’re contracted with private carriers, not the federal government. This is one of the fastest ways to fail a compliance audit, and it’s also the moment a skeptical consumer’s internal alarm goes off. The fix is a single, precise sentence you rehearse until it’s automatic.",
    script: '"I\'m a state-licensed independent agent, and I work with a number of Medicare Advantage plans in your area. My job is to help you compare what\'s out there and make sure you\'re not missing benefits you\'re entitled to."',
  },
  {
    num: 2,
    title: 'When a consumer says "is this a scam?" — slow down and name the fear, don’t stack credentials',
    body: "On the Not Stated call at 2:22, the consumer asked \"Are you sure this is not a scam?\" You responded with your name and your license. On Judith Copeland at 3:28, she said \"I’m not going to give that out over the phone,\" and you answered \"I am a licensed agent in Florida… I am contracted with Medicare.\" Both times, the consumer was giving you a fear signal — not a logic question. Credentials don’t calm fear; they amplify it, because they sound like a script. The move is to pause, validate the instinct, and then offer a smaller step (Medicare card instead of SSN). This is a trust play, not a credential play.",
    script: '"You\'re 100% right to be careful — you should never give that number out to anyone you\'re not comfortable with. The good news is we don\'t actually need it. Do you have your red, white, and blue Medicare card nearby? We can use that number instead."',
  },
  {
    num: 3,
    title: 'SEPs are identified, not created — the Gary Rich DST invocation has to get corrected',
    body: "At 25:16 on the Gary Rich call, you brought up the Disaster SEP for winter storm power outages. Gary immediately told you \"No, we’re not, thank goodness\" — that was a disqualification. You kept coaching him toward a qualifying answer and submitted the enrollment under DST anyway. That is a CMS audit flag. You had a clean path sitting right there: Gary confirmed Type 2 diabetes at 11:27 and again at 55:11. If Devoted has a C-SNP in Hays County, CSN was the correct, year-round, consumer-confirmed SEP. Flag this enrollment with compliance and switch future calls to the SEP the consumer actually qualifies for.",
    script: '"Gary, the diabetes you mentioned actually qualifies you for a year-round special enrollment period we can use today — I don’t need to use anything weather-related. Let me pull up the C-SNP that fits your situation."',
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

export default function CasimirExilApr22ReportPage() {
  const totalReviewed = reviewedCalls.reduce((sum, g) => sum + g.calls.length, 0)

  return (
    <PageShell signal="green">
      <div className={styles.page}>

        {/* Breadcrumb */}
        <Link href="/agents/casimir-exil" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>
          ← Back to Casimir Exil
        </Link>

        {/* Header */}
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Archived Weekly Brief</span>
          </div>
          <h1 className={styles.agentName}>Casimir Exil — April 22, 2026</h1>
          <p className={styles.period}>Weekly Brief · Covering April 20–22, 2026</p>
          <p className={styles.updatedAt}>Delivered April 22, 2026 · {totalReviewed} calls reviewed</p>
        </motion.div>

        {/* Trend Snapshot */}
        <motion.div className={styles.trendSnapshot} {...SPRING}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid rgba(19,17,16,0.08)' }}>
            <h2 className={styles.sectionTitle} style={{ margin: 0, padding: 0, border: 'none' }}>Trend Snapshot</h2>
            <span style={{ fontSize: '0.75rem', color: 'var(--ink-60)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>First tracked period · from CRM</span>
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
            First tracked period — <strong style={{ color: 'var(--sage-dark)' }}>3 sales in 3 days at $84.67 CPA</strong> is a strong debut. The fundamentals (patience, math, prescription verification) are landing. This brief sets the baseline — next week we’ll have deltas to read against.
          </p>
        </motion.div>

        {/* Executive Summary */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <h2 className={styles.sectionTitle}>Executive Summary</h2>
          <div className={styles.execSummaryInner}>
            <p><strong>What&apos;s working:</strong> 3 sales at an $84.67 CPA on your first tracked week is a real debut — and the Gary Rich call shows you already have something most new agents lack: patience with an elderly, slow-moving consumer. You annualized the give-back to $1,956, confirmed the primary doctor in-network, verified all six of Gary’s medications individually, and ran a clean voice signature. The math landed (his &ldquo;Wow&rdquo; at 17:45 said it) and the trust held all the way to the close. That’s a complete enrollment skillset.</p>
            <p><strong>The pattern to fix this week:</strong> Two moments are costing you trust before you ever get to the math. First — language. On Judith Copeland at 1:07 you said &ldquo;I work for Medicare,&rdquo; and on Gary Rich you said &ldquo;contracted with Medicare.&rdquo; Both are prohibited — you&apos;re a licensed independent agent who works with Medicare Advantage plans. That&apos;s the exact phrasing; nothing else. Second — scam objections. On the Not Stated call at 2:22 the consumer asked &ldquo;Are you sure this is not a scam?&rdquo; and on Judith Copeland at 3:28 she refused to share her SSN. Both times you answered by stacking credentials (&ldquo;I&apos;m a licensed agent… I&apos;m contracted with Medicare&rdquo;). Credentials amplify fear — they sound scripted. The move is to slow down, validate the instinct (&ldquo;You&apos;re right to be careful&rdquo;), and offer the Medicare card as a smaller step. Separately, the DST invocation on Gary Rich needs to be flagged with compliance — Gary denied the disaster impact, and the compliant path (CSN via his Type 2 diabetes) was sitting right there. Fix the language, fix the scam response, and correct the SEP — your close gets cleaner immediately.</p>
          </div>
        </motion.div>

        {/* The One Thing */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a consumer flags fear — &ldquo;is this a scam,&rdquo; &ldquo;I&apos;m not giving that out&rdquo; — stop stacking credentials. Credentials sound like a script and make the fear worse. Slow down, validate the instinct, then offer a smaller step: &ldquo;You&apos;re 100% right to be careful — you should never give that out to anyone you&apos;re not comfortable with. Do you have your red, white, and blue Medicare card nearby? We can use that number instead.&rdquo; Match fear with a reframe, not a résumé.</p>
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
            These are the calls we pulled for coaching this period. Your CRM total was 3 sales / 26 calls — this was a coaching sample, not an audit of every call.
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
            <span>Reviewed Avg: <strong>39 / 100</strong></span>
            <span>Reviewed Enrolled: <strong>1 of 3</strong></span>
            <span style={{ opacity: 0.7 }}>CRM Total: 3 sales / 26 calls</span>
          </div>
        </motion.div>

        {/* Footer */}
        <div className={styles.footer}>
          <p>The Certainty System · Casimir Exil · Weekly Brief · April 22, 2026 · Archived</p>
        </div>

      </div>
    </PageShell>
  )
}
