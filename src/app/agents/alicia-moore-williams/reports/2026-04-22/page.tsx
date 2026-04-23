'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from '../../page.module.css'

// ── Archived Weekly Brief — April 22, 2026 ──────────────────────────────────
// This page is a permanent archive of the Apr 22 brief delivered to Alicia.
// When a new brief ships on the main agent page, this one stays exactly as-is.
// CRM (source of truth):
//   Apr 13–17 (5 days): 90 all_calls · 68 billable · 6 sales · 6.67% conv · $206.50 CPA
//   Apr 20–22 (3 days): 47 all_calls · 40 billable · 4 sales · 8.51% conv · $131.00 CPA

const trendRows = [
  { metric: 'Sales',      lastWeek: '6',        thisPeriod: '4',       movement: '↑ Ahead of pace (1.33/day vs 1.2)', dir: 'up'   },
  { metric: 'Conversion', lastWeek: '6.67%',    thisPeriod: '8.51%',   movement: '↑ +1.84pp',                          dir: 'up'   },
  { metric: 'CPA',        lastWeek: '$206.50',  thisPeriod: '$131.00', movement: '↓ −$75.50',                          dir: 'up'   },
]

const reviewedCalls = [
  {
    date: 'Monday, April 20',
    calls: [
      {
        consumer: 'Julie Shelton',
        duration: '64:32',
        score: 0,
        outcome: 'CORRECT NO-SALE',
        type: 'The Money Caller · Uncloseable',
        href: '/agents/alicia-moore-williams/calls/julie-shelton',
      },
      {
        consumer: 'Paulette Daly',
        duration: '01:29:49',
        score: 78,
        outcome: 'ENROLLED',
        type: 'The Food Card Caller · C-SNP Qualifier',
        href: '/agents/alicia-moore-williams/calls/paulette-daly',
      },
    ],
  },
]

const whatYouDidWell = [
  {
    title: 'C-SNP pathway identification — Paulette Daly',
    body: "At 10:34 Paulette mentioned asthma almost as an aside — 'I have asthma, but it's not serious.' You flagged it immediately: 'Asthma is chronic though.' That one recognition unlocked the Devoted C-SNP plan and the $200/month food card she called in for. Without that catch, Paulette gets a standard MA presentation with weaker benefits. The whole call pivots on that moment.",
  },
  {
    title: 'Correct no-sale on an uncloseable — Julie Shelton',
    body: "Julie came in as a money caller — wanted help with rent, was open to switching. You found the Devoted plan with the $350/month housing benefit. When her cardiologist, PCP, and specialists all came back out-of-network, you correctly named it a deal-breaker at 55:35 and didn't push. A wrong enrollment — doctors out-of-network, mid-treatment, neck surgery scheduled — would have been a consumer relations disaster. You read the hard stop correctly.",
  },
  {
    title: 'Assumptive close, correctly timed',
    body: "On Paulette Daly, the close at 42:41 was clean: 'Dr. Julie was in-network. So you were all set there. So let's go ahead and get started, get you enrolled.' Doctor confirmed — move. No hedging, no re-asking permission. That's the sequence: confirm the thing that matters, then close. That one-motion transition is what gets enrollment instead of 'let me think about it.'",
  },
]

const whatToWorkOn = [
  {
    num: 1,
    title: 'When a consumer names their financial fear — stop and anchor the math to that exact fear',
    body: "At 14:01 Paulette said: 'My monthly mortgage almost takes my whole Social Security cash.' That's the emotional close. You heard it, acknowledged it in the flow, and kept moving into plan research. The $200/month food card was eventually presented as a feature — but never as the answer to that specific fear. Paulette enrolled anyway because she was motivated. The consumer who hears 'you told me your mortgage takes everything — this card puts $2,400 a year back in your pocket' is enrolled for life. Without that connection, she enrolled on logic, not conviction.",
    script: '"Ms. Daly — you said your mortgage takes your whole Social Security check. I need you to hear this: this plan gives you $200 every single month that you can use for groceries, utility bills, even rent or mortgage payments. That\'s $2,400 a year this plan puts back in your pocket. For $27.70 a month. You called for the right thing."',
  },
  {
    num: 2,
    title: 'Always annualize the monthly benefit — three words that change what the number feels like',
    body: "This showed up on both calls. On Paulette, '$200 a month' was confirmed — '$2,400 a year' was never said. On Julie Shelton, you found her a plan with $140/month more flex benefit than her current one — and never stated '$1,680 more a year' either. Those are the same numbers — but a human brain experiences them very differently. '$200 a month' is a line item. '$2,400 a year' is real money on a fixed income. The annualization takes three extra words. It should happen every time, on every call, right after you state the monthly amount.",
    script: '"$200 a month — that\'s $2,400 a year. On a plan that\'s $27.70/month. That card pays for itself in the first week."',
  },
  {
    num: 3,
    title: 'When a consumer volunteers a pain point, anchor on it before moving — don\'t treat it as intake data',
    body: "On Julie Shelton at 5:24, she said: 'I have to pay co-payments now... I had to pay almost $50 out last month.' That's Client Gold — a specific financial pain with a dollar attached. You acknowledged it and moved to the next intake question. The right move is to name it, mirror it back, and bank it as leverage for the math later: 'Julie, $50 a month in copays on a fixed income — that's $600 a year. Let's solve that.' Then when you present the plan, that $600 is already a reason to switch. Paulette did the same thing with her mortgage comment at 14:01. Financial pain points the consumer volunteers are never just information — they're the close you'll use in 20 minutes. Treat them that way the second you hear them.",
    script: '"Julie — $50 a month in copays when you\'re already tight on rent? That\'s $600 a year going out the door. Hold that number in your mind. When I show you this plan, I\'m going to tell you exactly what it does to that $50."',
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

export default function AliciaMooreWilliamsApr22ReportPage() {
  const totalReviewed = reviewedCalls.reduce((sum, g) => sum + g.calls.length, 0)

  return (
    <PageShell signal="green">
      <div className={styles.page}>

        {/* Breadcrumb */}
        <Link href="/agents/alicia-moore-williams" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>
          ← Back to Alicia Moore Williams
        </Link>

        {/* Header */}
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Archived Weekly Brief</span>
          </div>
          <h1 className={styles.agentName}>Alicia Moore Williams — April 22, 2026</h1>
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
            4 sales in 3 days — <strong style={{ color: 'var(--sage-dark)' }}>ahead of last week&apos;s pace</strong> (1.33/day vs 1.2/day). Conversion climbed from 6.67% to 8.51%. CPA dropped from $206 to $131. Every dial is moving the right direction — this brief is about sharpening the moments that will pull conversion higher still.
          </p>
        </motion.div>

        {/* Executive Summary */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <h2 className={styles.sectionTitle}>Executive Summary</h2>
          <div className={styles.execSummaryInner}>
            <p><strong>What&apos;s working:</strong> The CPA story is the headline — $131 this period versus $206 last week. That&apos;s not luck, that&apos;s better call quality producing more efficient enrollments. On the Paulette Daly call, you caught the asthma C-SNP pathway at 10:34 when she mentioned it almost in passing, built the entire presentation around the $200/month food card she came in for, held the compliance line twice when she tried to skip disclaimers, confirmed the doctor in-network before committing to enrollment, and closed at 42:41 with no hesitation. On Julie Shelton, every major specialist came back out-of-network with the only plan that met her primary need — you correctly named it a deal-breaker and walked away. That restraint is professional judgment, not a missed opportunity.</p>
            <p><strong>What to sharpen:</strong> Both calls shared the same seam — a financial pain point volunteered early that never got anchored. Paulette at 14:01: &ldquo;my mortgage almost takes my whole Social Security check.&rdquo; Julie at 5:24: &ldquo;I had to pay almost $50 out last month&rdquo; in copays. You heard both, acknowledged both, and kept moving into plan research. The money moment is when the consumer hands you the exact dollar figure that&apos;s hurting them — that&apos;s the number your math has to answer to. Pair that with the annualization ($200/mo = $2,400/yr, $140/mo more = $1,680/yr more) and you&apos;re not presenting benefits, you&apos;re solving the specific problem they called in about. Same enrollments, stronger conviction, faster to close.</p>
          </div>
        </motion.div>

        {/* The One Thing */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a consumer names their financial fear — stop. Anchor the plan&apos;s dollar value to that exact fear before you move on. Paulette said her mortgage takes her whole Social Security check. The plan puts $2,400 a year back in her pocket. That sentence was never said. Say it every time. &ldquo;You told me your mortgage takes everything — this card puts $2,400 a year back. For $27.70 a month. That&apos;s the trade.&rdquo;</p>
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
            These are the calls we pulled for coaching this period. Your CRM total was 4 sales / 47 calls — this was a coaching sample, not an audit of every call.
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
                    <span className={styles.callScore} style={{ color: call.score > 0 ? scoreColor(call.score) : 'var(--ink-60)' }}>{call.score > 0 ? call.score : '—'}</span>
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
            <span>Reviewed Avg: <strong>78 / 100</strong></span>
            <span>Reviewed Enrolled: <strong>1 of 2</strong></span>
            <span style={{ opacity: 0.7 }}>CRM Total: 4 sales / 47 calls</span>
          </div>
        </motion.div>

        {/* Footer */}
        <div className={styles.footer}>
          <p>The Certainty System · Alicia Moore Williams · Weekly Brief · April 22, 2026 · Archived</p>
        </div>

      </div>
    </PageShell>
  )
}
