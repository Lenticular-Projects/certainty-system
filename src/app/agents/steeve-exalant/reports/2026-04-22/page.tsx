'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from '../../page.module.css'

// ── Archived Weekly Brief — April 22, 2026 ──────────────────────────────────
// Permanent archive of the Apr 22 brief delivered to Steeve.
// CRM (source of truth):
//   Apr 13–17 (5 days): 144 all_calls · 104 billable · 19 sales · 13.19% conv · $108.37 CPA
//   Apr 20–22 (3 days):  69 all_calls ·  52 billable · 12 sales · 17.39% conv ·  $71.50 CPA

const trendRows = [
  { metric: 'Sales',      lastWeek: '19',       thisPeriod: '12',      movement: '↑ pace (4.0/day vs 3.8)',  dir: 'up' },
  { metric: 'Conversion', lastWeek: '13.19%',   thisPeriod: '17.39%',  movement: '↑ +4.20pp',                dir: 'up' },
  { metric: 'CPA',        lastWeek: '$108.37',  thisPeriod: '$71.50',  movement: '↓ −$36.87',                dir: 'up' },
]

const reviewedCalls = [
  {
    date: 'Monday, April 20',
    calls: [
      { consumer: 'Petra Luna',      duration: '43:47', score: 75, outcome: 'ENROLLED', type: 'MOV SEP · dual-eligible mover from New York',   href: '/agents/steeve-exalant/calls/petra-luna' },
    ],
  },
  {
    date: 'Tuesday, April 21',
    calls: [
      { consumer: 'Leonard McQuirk', duration: '36:05', score: 77, outcome: 'ENROLLED', type: 'MCD SEP · QMB+ → FBDE Medicaid upgrade',         href: '/agents/steeve-exalant/calls/leonard-mcquirk' },
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
    title: 'Give-back framing — the close line was already written',
    body: "On both calls, you anchored the value of the plan to the consumer's stated financial pain. Petra told you she has nothing and you held the $185/month grocery framing all the way through. Leonard talked about skipping breakfast and you named the food card benefit as the direct answer. Matching the product to the pain — in the consumer's own language — is the move that converts a presentation into an enrollment. You did it on both calls.",
  },
]

const whatToWorkOn = [
  {
    num: 1,
    title: 'Annualize every benefit — $185/month is a feature, $2,220/year is a close',
    body: "On both calls you named the benefit amount and moved on. On Petra's call, \"$185 a month\" was stated at least five times and never converted to $2,220 a year — for a woman who said she has no money. On Leonard's call you named the food card, the vision increase, the dental allowance, and the transportation individually, but you never stacked them into an annual total. Benefit lists are features. Annual totals are closes. You're getting the yes anyway because your rapport and SEP work carries the call — but the annualized number is the line that makes the decision feel permanent rather than incidental.",
    script: '"Ms. Luna, that\'s $185 every single month — which means Health Springs is putting $2,220 back in your pocket this year. That\'s your grocery money for the year, handled." / "Mr. Leonard, let me put this together for you: $165 a month on the food card is $1,980 a year in groceries. Add $125 more in vision, $2,000 for those implants, plus transportation to every doctor\'s appointment — you\'re looking at over $5,000 in additional benefits this year."',
  },
  {
    num: 2,
    title: 'Bring Client Gold back at the close — the enrollment is already written',
    body: "On Petra's call, she told you she has nothing and she wants to go to the dentist. At 28:43 when you asked for the close, you used plan language instead of her words. The line was already written by what she told you. On Leonard's call, you deployed his signals in real time during the call — but at the close (16:07), you didn't loop back to the six-mile hospital walk or the missed appointment. Bringing the consumer's own words back at the close is what converts a technically successful close into one the consumer feels completely certain about.",
    script: '"[Consumer name], remember you told me [their exact words about their need]. That\'s exactly why we did this. Starting May first, [specific benefit that fixes their stated problem]. That\'s done." At the pre-close, always bring back the strongest thing they said.',
  },
  {
    num: 3,
    title: 'Lock in the close-first rhythm — your conversion says keep pushing',
    body: "17.39% conversion is leading the team this week and CPA dropped $36.87. The pattern that got you here — catch the SEP on first signal, anchor every stated need to a benefit, hold the give-back frame from discovery to close — is repeatable. The work this week is not fixing anything broken. It's noticing what you did on Petra and Leonard that you want to keep doing on the next 20 calls. Every call that comes in, the first question you're asking yourself is: what's the SEP here and how fast can I name it?",
    script: '"Before we get to the plan — has anything changed in the last 60 days? Moved, lost coverage, new Medicaid letter, anything like that?" Ask it on every call within the first two minutes. That question is the one that gave you both enrollments this period.',
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

export default function SteeveExalantApr22ReportPage() {
  const totalReviewed = reviewedCalls.reduce((sum, g) => sum + g.calls.length, 0)

  return (
    <PageShell signal="green">
      <div className={styles.page}>

        {/* Breadcrumb */}
        <Link href="/agents/steeve-exalant" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>
          ← Back to Steeve Exalant
        </Link>

        {/* Header */}
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Archived Weekly Brief</span>
          </div>
          <h1 className={styles.agentName}>Steeve Exalant — April 22, 2026</h1>
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
            12 sales in 3 days on 69 calls. <strong style={{ color: 'var(--sage-dark)' }}>17.39% conversion is leading the team this week,</strong> and CPA dropped $36.87 from the previous week. Conversion up 4.2pp, pace up, CPA down — all three levers moving the right way at the same time.
          </p>
        </motion.div>

        {/* Executive Summary */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <h2 className={styles.sectionTitle}>Executive Summary</h2>
          <div className={styles.execSummaryInner}>
            <p><strong>What&apos;s driving the breakout:</strong> You&apos;re identifying SEP windows that other agents miss and closing them the same call. On Petra Luna (Apr 20), you caught the MOV SEP at first mention of the move — one question, &ldquo;Did you just move?&rdquo; — and built a complete 75-point enrollment around it. On Leonard McQuirk (Apr 21), you saw the QMB+ to FBDE Medicaid upgrade in the system before Leonard even knew what it meant, framed it as good news at 2:13, and closed a 77-point enrollment in 36 minutes. Both calls had complicated consumer situations and on both you deployed real-time signals as enrollment anchors the moment they were stated. That&apos;s why your conversion jumped 4.2pp this week and your CPA dropped $36.87. You&apos;re leading the team.</p>
            <p><strong>The one pattern to close out:</strong> Both calls have the same gap in the math section. You present benefits as monthly numbers and move on. Petra opened the call saying she has nothing — you never told her $185/month is $2,220 a year going back onto her check. Leonard is a man who skipped breakfast and couldn&apos;t get to stroke therapy — you named every benefit individually but never stacked them into a total. You&apos;re closing without it because your rapport and signal work are strong enough to carry the call. But the annualized total is the line that makes the decision feel undeniable rather than incidental. Add it, and your already-strong closes go faster.</p>
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
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginBottom: '16px', fontStyle: 'italic' }}>
            These are the calls we pulled for coaching this period. Your CRM total was 12 sales / 69 calls — this was a coaching sample, not an audit of every call.
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
            <span>Reviewed Avg: <strong>76 / 100</strong></span>
            <span>Reviewed Enrolled: <strong>2 of 2</strong></span>
            <span style={{ opacity: 0.7 }}>CRM Total: 12 sales / 69 calls</span>
          </div>
        </motion.div>

        {/* Footer */}
        <div className={styles.footer}>
          <p>The Certainty System · Steeve Exalant · Weekly Brief · April 22, 2026 · Archived</p>
        </div>

      </div>
    </PageShell>
  )
}
