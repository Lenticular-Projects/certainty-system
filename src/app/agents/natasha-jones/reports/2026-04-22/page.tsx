'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from '../../page.module.css'

// ── Archived Weekly Brief — April 22, 2026 ──────────────────────────────────
// Permanent archive of the Apr 22 brief delivered to Natasha.
// CRM (source of truth):
//   Apr 13–17 (5 days): 140 all_calls · 107 billable · 9 sales · 6.43% conv · $238.78 CPA
//   Apr 20–22 (3 days):  71 all_calls ·  56 billable · 6 sales · 8.45% conv · $151.83 CPA

const trendRows = [
  { metric: 'Sales',      lastWeek: '9',        thisPeriod: '6',       movement: '↑ 6 in 3 days — pace up (2.0/day vs 1.8)', dir: 'up' },
  { metric: 'Conversion', lastWeek: '6.43%',    thisPeriod: '8.45%',   movement: '↑ +2.02pp',                                dir: 'up' },
  { metric: 'CPA',        lastWeek: '$238.78',  thisPeriod: '$151.83', movement: '↓ −$86.95',                                dir: 'up' },
]

const reviewedCalls = [
  {
    date: 'Monday, April 20',
    calls: [
      { consumer: 'Mark Miller', duration: '40:40', score: 75, outcome: 'ENROLLED', type: 'Dual eligible upgrade · food card caller', href: '/agents/natasha-jones/calls/mark-miller' },
    ],
  },
  {
    date: 'Tuesday, April 21',
    calls: [
      { consumer: 'Lynn Morris', duration: '1:01:54', score: 78, outcome: 'ENROLLED', type: 'Trust rebuilder · QMB · HIGH difficulty', href: '/agents/natasha-jones/calls/lynn-morris' },
    ],
  },
  {
    date: 'Wednesday, April 22',
    calls: [
      { consumer: 'Deborah Partee', duration: '5:44', score: 25, outcome: 'MISSED OPPORTUNITY', type: 'Food card caller · SSN trust pivot failed', href: '/agents/natasha-jones/calls/deborah-partee' },
    ],
  },
]

const whatYouDidWell = [
  {
    title: 'You rebuilt trust that a prior agent destroyed — on a one-hour, high-difficulty call',
    body: "Lynn Morris came in with a formal complaint filed against her last agent and told you directly: 'I've been lied to so many times, I don't know what to believe anymore.' You enrolled her anyway. Not by over-promising — by verifying everything in real time. Two doctors, five medications, two formulary exceptions, a full health questionnaire. She ended the call saying 'You definitely are the girl to call.' That's the highest compliment in this business, and you earned it under pressure.",
  },
  {
    title: "Five objections, five identical answers — you never wavered once",
    body: "Mark Miller asked the same question five times in different forms: will this mess with my card? Your answer was the same every single time — direct, benefit-positive, calm. 'Your 194 is going to go up.' That line at 10:43 is what closed the call. Five iterations of the same objection and five consistent, unflappable responses is what builds trust with a consumer who's protecting what he already has. That's a skill, not luck.",
  },
  {
    title: 'Rapport that kept a 69-year-old engaged through 40 minutes of holds',
    body: "On Mark Miller, while hunting for Dr. Chabir Mote Walla in the system, you said 'I'm going to be singing the song, It's Gonna Take a Miracle' — and Mark said it was his favorite song. What followed was a real moment of connection, not a technique. That's what keeps a 69-year-old disabled man on the line through extended holds rather than hanging up and never picking back up.",
  },
]

const whatToWorkOn = [
  {
    num: 1,
    title: "Annualize every dollar — the number that matters is the yearly number, not the monthly",
    body: "Both enrolled calls this period had the same pattern: you stated the monthly benefit and stopped there. On Mark Miller you said '$240 OTC' and moved on. On Lynn Morris you said '$200 OTC.' Mark is disabled and on a fixed income calling about a food card. Lynn told you directly she runs out of food money before the end of the month. The number that needed to land on both calls was the annual figure — and neither of them heard it. $46/month is $552/year. $43/month is $516/year. That's not a math exercise; it's the difference between a consumer who's enrolled and one who's evangelical.",
    script: '"Mark, that\'s an extra $46 a month — but think about it over the year. That\'s $552 more on your card every year. That\'s your groceries, your household supplies, things you\'re already spending money on. It just shows up automatically."',
  },
  {
    num: 2,
    title: "When a consumer pushes back on the SSN — validate completely, then offer the Medicare card as the solution",
    body: "Deborah Partee said 'I don't do that over the phone' at 4:50. She wasn't hostile — she was cautious, and cautious is solvable. You acknowledged the concern and then explained the process, which is a logic response to an emotional objection. The move was to validate her fear completely first, offer the Medicare card as the alternative, and then pause and let her respond. You actually knew the alternative — you offered it at 5:32, but after the explanation, not before. Flip the order. Lead with: 'You are right to be cautious. You don't have to give me your Social.' Give her the reason to feel safe before you give her the path forward.",
    script: '"Ms. Partee, you\'re right to be cautious, and I want you to feel completely comfortable. You don\'t have to give me your Social Security number. Can we use your Medicare card number instead? That\'s a secure way for me to check your eligibility. Would that work for you?" Then pause. Let her respond. She needs to feel like she\'s in control.',
  },
  {
    num: 3,
    title: "Lock the close when the consumer confirms it in their own words — don't wait for Phase VI",
    body: "Lynn Morris said at 31:42: 'I don't have to spend my food money on it.' That was her enrollment — in her own words, exactly the thing she cared about most. You moved forward without locking it. The enrollment happened anyway because Lynn was already committed, but this habit costs you sales on harder calls. When a consumer tells you in their own words why they're in — lock it immediately. One sentence. Then keep moving.",
    script: '"That\'s exactly right, Lynn — your medications don\'t cost you anything on this plan. And with the $200 food benefit — that\'s $43 more than you\'ve been getting every month. This plan works for you. Are you ready to get this started today?"',
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

export default function NatashaJonesApr22ReportPage() {
  const totalReviewed = reviewedCalls.reduce((sum, g) => sum + g.calls.length, 0)

  return (
    <PageShell signal="green">
      <div className={styles.page}>

        {/* Breadcrumb */}
        <Link href="/agents/natasha-jones" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>
          ← Back to Natasha Jones
        </Link>

        {/* Header */}
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Archived Weekly Brief</span>
          </div>
          <h1 className={styles.agentName}>Natasha Jones — April 22, 2026</h1>
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
            6 sales in 3 days — last week was 9 in a full 5-day week. Pace is up (2.0/day vs 1.8/day), conversion climbed from 6.43% to 8.45%, and CPA dropped almost $87. <strong style={{ color: 'var(--sage-dark)' }}>This is a stronger, more efficient week.</strong> The coaching in this brief is about the skills that turn good weeks into great ones — not repair work.
          </p>
        </motion.div>

        {/* Executive Summary */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <h2 className={styles.sectionTitle}>Executive Summary</h2>
          <div className={styles.execSummaryInner}>
            <p><strong>What&apos;s working:</strong> Your ability to enroll consumers who come in damaged. Lynn Morris filed a formal complaint against her last agent and told you directly she&apos;d been lied to so many times she didn&apos;t know what to believe. You enrolled her anyway — through patience, warmth, and verification in real time. Mark Miller asked the same question five times and got the same calm, direct answer five times. &ldquo;Your 194 is going to go up&rdquo; is the line that closed a dual-eligible upgrade at 10:43. That consistency under repetitive pressure is a real skill. The rapport you build — the &ldquo;It&apos;s Gonna Take a Miracle&rdquo; moment at 14:52 on Miller — is the kind of thing that keeps 69-year-old men on hold-heavy calls instead of hanging up.</p>
            <p><strong>What&apos;s costing you:</strong> The SSN handling pattern on Deborah Partee is this period&apos;s focus. She pushed back on the SSN at 4:50 — not hostile, just cautious — and the call ended at 5:44. You knew the Medicare card was the alternative and offered it at 5:32, but you offered it after a process explanation rather than before. The order matters: validate the fear completely first, then offer the alternative, then pause. &ldquo;You&apos;re right to be cautious. You don&apos;t have to give me your Social — can we use your Medicare card number instead?&rdquo; That one pivot saves the call. The second thread across all three calls: math annualization. Both enrolled calls had benefit numbers that landed as monthly figures and never became annual ones. Mark is disabled and on a fixed income who called about a food card. Lynn runs out of food money before the end of the month. Neither heard how much better off they actually are. $552/year and $516/year are the numbers that should have landed.</p>
          </div>
        </motion.div>

        {/* The One Thing */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>Every benefit number you state gets one more sentence: the annual figure. &ldquo;$240 a month — that&apos;s $2,880 a year.&rdquo; &ldquo;$43 more every month — that&apos;s $516 more a year for groceries.&rdquo; You&apos;re already close on the enrolled calls. The annualization is what makes consumers not just enrolled, but certain.</p>
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
            These are the calls we pulled for coaching this period. Your CRM total was 6 sales / 71 calls — this was a coaching sample, not an audit of every call.
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
            <span>Reviewed Avg: <strong>59 / 100</strong></span>
            <span>Reviewed Enrolled: <strong>2 of 3</strong></span>
            <span style={{ opacity: 0.7 }}>CRM Total: 6 sales / 71 calls</span>
          </div>
        </motion.div>

        {/* Footer */}
        <div className={styles.footer}>
          <p>The Certainty System · Natasha Jones · Weekly Brief · April 22, 2026 · Archived</p>
        </div>

      </div>
    </PageShell>
  )
}
