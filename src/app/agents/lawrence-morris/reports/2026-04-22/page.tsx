'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from '../../page.module.css'

// ── Archived Weekly Brief — April 22, 2026 ──────────────────────────────────
// This page is a permanent archive of the Apr 22 brief delivered to Lawrence.
// When a new brief ships on the main agent page, this one stays exactly as-is.
// CRM (source of truth):
//   Apr 13–17 (5 days): 120 all_calls · 79 billable · 13 sales · 10.83% conv · $105.85 CPA
//   Apr 20–22 (3 days): 94 all_calls · 69 billable ·  8 sales ·  8.51% conv · $132.00 CPA

const trendRows = [
  { metric: 'Sales',      lastWeek: '13',       thisPeriod: '8',       movement: '↑ On pace (2.67/day vs 2.6)', dir: 'up' },
  { metric: 'Conversion', lastWeek: '10.83%',   thisPeriod: '8.51%',   movement: '↓ −2.32pp',                   dir: 'down' },
  { metric: 'CPA',        lastWeek: '$105.85',  thisPeriod: '$132.00', movement: '↑ +$26.15',                   dir: 'down' },
]

const reviewedCalls = [
  {
    date: 'Monday, April 20',
    calls: [
      { consumer: 'Deborah Roost', duration: '10:43', score: 40, outcome: 'MISSED OPPORTUNITY', type: 'C-SNP upgrade · surrendered close',                     href: '/agents/lawrence-morris/calls/deborah-roost' },
      { consumer: 'Jerry Heath',   duration: '32:28', score: 77, outcome: 'ENROLLED',           type: 'First-time enrollee · DST SEP · give-back',             href: '/agents/lawrence-morris/calls/jerry-heath' },
    ],
  },
  {
    date: 'Tuesday, April 21',
    calls: [
      { consumer: 'Ahmad Najem',   duration: '24:46', score: 46, outcome: 'MISSED OPPORTUNITY', type: 'C-SNP eligible · HMO objection · no close',             href: '/agents/lawrence-morris/calls/ahmad-najem' },
    ],
  },
  {
    date: 'Wednesday, April 22',
    calls: [
      { consumer: 'Unknown Caller', duration: '2:29', score: 21, outcome: 'MISSED OPPORTUNITY', type: 'Commercial myth · surrendered to RED signal at 2:16',   href: '/agents/lawrence-morris/calls/unknown-consumer' },
    ],
  },
]

const whatYouDidWell = [
  {
    title: 'You found the C-SNP upgrade when most agents would have stopped',
    body: "On Deborah Roost she already had a plan — an Aetna C-SNP with a $200/month benefit. Most agents hear \"she has coverage\" and end the call. You recognized it was a C-SNP, confirmed her existing benefit, and surfaced a competing Devoted plan at $395. That product identification is not easy and you nailed it. The loss on that call was the close, not the discovery.",
  },
  {
    title: 'DST SEP execution on Jerry Heath — authoritative and compliant',
    body: "At 12:07 on the Jerry Heath call, you introduced the Pickens County disaster SEP with confidence: explained the CMS declaration, the temporary enrollment window, and verified Jerry's real experience before using it. Power loss, wind, rural roads — you built the qualifying record from his own words, then moved forward without overselling. That's exactly how compliant SEP execution looks.",
  },
  {
    title: "Give-back framing matched Jerry's actual financial pain",
    body: "Jerry told you his SS check went from $900 to $600 after the Part B deduction. You immediately reframed the give-back as putting money back — and held that frame all the way to enrollment. 'Think of it like a raise on your check' was exactly right. You found the real pain and connected the product to it. That's the core move of a closing call.",
  },
]

const whatToWorkOn = [
  {
    num: 1,
    title: "When a consumer flags a drug struggle, anchor on it immediately — don't defer it",
    body: "On Deborah Roost, at 1:40 she said Ozempic was the only drug she had trouble getting. You said 'we'll go over that in a second' and never went back. Ozempic can cost over $1,000/month without the right coverage. That's not a footnote — it was the headline. Your math presentation could have been anchored to two things: the grocery card AND the drug coverage. When she said that, you had two enrollment drivers and used one.",
    script: '"Ozempic — that\'s a big one and I\'m glad you brought it up. Let me flag that right now. When I pull up the plan I\'m looking at, I\'m checking two things for you: the flex card amount and whether Ozempic is covered better than it is on your current plan. Because if both of those are better, we could be talking about thousands of dollars back in your pocket this year."',
  },
  {
    num: 2,
    title: "Complete the math before you introduce any obstacle — annualize and humanize every time",
    body: "On both Deborah Roost and Ahmad Najem, the math stopped at Step 1. On Deborah, you never annualized the $195/month difference — she never heard '$2,340 more per year.' On Ahmad, you compared numbers but never connected the deductible savings and OOP reduction to the reality of his quarterly specialist visits. The math is not just numbers — it's the emotional case for acting now. Without the annual figure and the personal connection, it lands as information instead of a reason.",
    script: '"Deborah, let me put that in real numbers. Right now you\'re getting $200 a month — that\'s $2,400 a year. With this plan, that jumps to $395 — $4,740 a year. That\'s $2,340 more every year just in the flex card alone. And we still need to check on the Ozempic coverage on top of that. That\'s real money."',
  },
  {
    num: 3,
    title: "Name the emotion and reframe — don't accept a fear signal as a final no",
    body: "On the April 22 call at 2:16, the consumer said \"I'm not willing to go over that with you. It's massive\" — and you said \"okay, well that's not a problem.\" That response told her you had no path forward and ended the call. She wasn't saying no to the enrollment. She was saying the request felt overwhelming. A direct refusal to share information is a RED signal that needs a reframe, not agreement. Tie the ask back to the food card goal she called in for, and give her a smaller step she can actually say yes to.",
    script: '"I hear you — it feels like a lot to share with a stranger, and you\'re right to be cautious. The only reason I check is to make sure a plan would actually cover your specific prescriptions so you\'re not surprised at the pharmacy. We don\'t need all of them — how about we just check your top one or two?"',
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

export default function LawrenceMorrisApr22ReportPage() {
  const totalReviewed = reviewedCalls.reduce((sum, g) => sum + g.calls.length, 0)

  return (
    <PageShell signal="green">
      <div className={styles.page}>

        {/* Breadcrumb */}
        <Link href="/agents/lawrence-morris" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>
          ← Back to Lawrence Morris
        </Link>

        {/* Header */}
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Archived Weekly Brief</span>
          </div>
          <h1 className={styles.agentName}>Lawrence Morris — April 22, 2026</h1>
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
                <span className={row.dir === 'up' ? styles.trendUp : row.dir === 'down' ? styles.trendDown : styles.trendNeutral}>{row.movement}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '14px', lineHeight: 1.65 }}>
            8 sales in 3 days — <strong style={{ color: 'var(--sage-dark)' }}>pace is holding</strong> (2.67/day vs 2.6/day last week). But conversion dipped from 10.83% to 8.51%, and CPA climbed $26 to $132. The sales are still coming, but more calls are slipping that shouldn&apos;t. This week is about tightening the objection moments you&apos;re currently giving away.
          </p>
        </motion.div>

        {/* Executive Summary */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <h2 className={styles.sectionTitle}>Executive Summary</h2>
          <div className={styles.execSummaryInner}>
            <p><strong>What&apos;s working:</strong> You are one of the few agents on this team who can identify a C-SNP upgrade on a consumer who already has a plan. On Deborah Roost, the call started with a woman who had Medicare Advantage coverage — and you found a competing plan at nearly double the flex benefit. That product knowledge is real and it matters. On Jerry Heath, you identified the give-back opportunity, confirmed the DST SEP for Pickens County with authority, and ran the call all the way to enrollment across 32 minutes. The SS check framing — putting money back on a check that had been cut from $900 to $600 — was exactly right, and you held it from the moment he disclosed the deduction straight through to the confirmation code.</p>
            <p><strong>The pattern to address this week:</strong> On the April 22 call at 2:16, the consumer said &ldquo;I&apos;m not willing to go over that with you. It&apos;s massive&rdquo; — and you said &ldquo;okay, well that&apos;s not a problem&rdquo; and kept moving. That was the moment the call was decided. She wasn&apos;t telling you no — she was telling you she felt exposed. The correct move is to name the emotion and reframe the ask around the goal she called in about: &ldquo;I hear you — it feels like a lot to share. The only reason we check is to make sure the plan actually covers the ones you need. We don&apos;t need all of them — just the top one or two.&rdquo; On Deborah Roost, the same pattern showed up a different way: at 1:40 she flagged Ozempic as her drug struggle, and you said &ldquo;we&apos;ll go over that in a second&rdquo; and never came back. When a consumer hands you an emotional signal — resistance, fear, or a real pain point — that&apos;s the moment to anchor, not defer. The sales that slipped this week slipped on that exact seam.</p>
          </div>
        </motion.div>

        {/* The One Thing */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a consumer resists sharing something — medications, SSN, anything personal — that&apos;s not a no. That&apos;s a fear signal. Name the emotion first, then reframe the ask around the benefit they called in for. The line is: &ldquo;I hear you — it feels like a lot to share. The only reason I ask is to make sure this plan actually covers what you need. We don&apos;t need all of it — let&apos;s just check the one or two that matter most.&rdquo; Never match emotional resistance with a logical explanation or a pass. Match it with a reframe.</p>
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
            These are the calls we pulled for coaching this period. Your CRM total was 8 sales / 94 calls — this was a coaching sample, not an audit of every call.
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
            <span>Reviewed Avg: <strong>46 / 100</strong></span>
            <span>Reviewed Enrolled: <strong>1 of 4</strong></span>
            <span style={{ opacity: 0.7 }}>CRM Total: 8 sales / 94 calls</span>
          </div>
        </motion.div>

        {/* Footer */}
        <div className={styles.footer}>
          <p>The Certainty System · Lawrence Morris · Weekly Brief · April 22, 2026 · Archived</p>
        </div>

      </div>
    </PageShell>
  )
}
