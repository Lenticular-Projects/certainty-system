'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from '../../page.module.css'

// ── Archived Weekly Brief — April 22, 2026 ──────────────────────────────────
// This page is a permanent archive of the Apr 22 brief delivered to Ratika.
// When a new brief ships on the main agent page, this one stays exactly as-is.
// CRM (source of truth):
//   Apr 13–17 (5 days): 116 all_calls · 80 billable · 6 sales · 5.17% conv · $247.50 CPA
//   Apr 20–22 (3 days):  72 all_calls · 53 billable · 3 sales · 4.17% conv · $259.00 CPA

const trendRows = [
  { metric: 'Sales',      lastWeek: '6',       thisPeriod: '3',       movement: '↓ −3',       dir: 'down' },
  { metric: 'Conversion', lastWeek: '5.17%',   thisPeriod: '4.17%',   movement: '↓ −1.00pp',  dir: 'down' },
  { metric: 'CPA',        lastWeek: '$247.50', thisPeriod: '$259.00', movement: '↑ +$11.50',  dir: 'down' },
]

const reviewedCalls = [
  {
    date: 'Monday, April 20',
    calls: [
      { consumer: 'Vincent Arnel', duration: '16:26', score: 37, outcome: 'MISSED OPPORTUNITY', type: 'C-SNP / Food Card — single-plan tunnel vision', href: '/agents/ratika-kamboj/calls/vincent-arnel' },
    ],
  },
  {
    date: 'Tuesday, April 21',
    calls: [
      { consumer: 'Donovan Piper',       duration: '19:07', score: 34, outcome: 'MISSED OPPORTUNITY', type: 'INT SEP missed · loyalty objection surrendered', href: '/agents/ratika-kamboj/calls/donovan-piper' },
      { consumer: 'Edward Brewster Jr.', duration: '43:58', score: 82, outcome: 'ENROLLED',           type: 'MOV SEP · dental pivot · clean Phase VI',      href: '/agents/ratika-kamboj/calls/edward-brewster-jr' },
    ],
  },
  {
    date: 'Wednesday, April 22',
    calls: [
      { consumer: 'Jerome Calvin', duration: '11:39', score: 52, outcome: 'MISSED OPPORTUNITY', type: 'Carrier named before value built · logic vs. emotion', href: '/agents/ratika-kamboj/calls/jerome-calvin' },
    ],
  },
]

const whatYouDidWell = [
  {
    title: 'Found the MOV SEP from a system discrepancy — and built the enrollment on it',
    body: 'On Edward Brewster, the system showed an old address. You noticed it, confirmed the move, got the new county, and correctly applied the MOV Special Enrollment Period as the qualifying event. Without that catch, the enrollment may not have been possible outside AEP. That is the kind of system-level awareness that separates agents who close from agents who miss.',
  },
  {
    title: 'Held position through a double escalation on an objection you could not fix',
    body: "Edward called specifically for a grocery card you couldn't deliver. You explained the Medicaid distinction, offered a realistic future path, and pivoted to the dental upgrade. When he pushed back a second time — \"I don't know why everybody else I know got a damn grocery card\" — you held position again. No apology, no surrender, no false promise. That's what kept the call alive long enough to close.",
  },
  {
    title: 'Proactive system-based discovery on two separate calls',
    body: "On Vincent Arnel, you confirmed LIS Level 1 when he denied having Medicaid or extra help — you trusted your system data over his self-report. On Donovan Piper, you proactively asked for the Medicaid ID and confirmed full dual eligibility. Most agents take consumer self-reports at face value and miss dual-eligible qualifications entirely. You don't — and that instinct is directly valuable.",
  },
]

const whatToWorkOn = [
  {
    num: 1,
    title: "When your first plan gets rejected, your job is to find a different one — not to keep selling the same one",
    body: "Vincent Arnel said \"I don't want Devoted\" four separate times and asked \"Is there any other plan out there?\" twice. The answer was never given. You kept restating why Devoted was right for him. The consumer is not objecting to switching plans — he's objecting to that one carrier. The moment you hear \"I don't want that plan,\" the question becomes: what other C-SNP options exist in his county? Going into any call with only one plan ready is the core problem to fix.",
    script: "\"You don't want Devoted — I hear you. Let me check every other C-SNP available in Davidson County for someone with your conditions. Give me 60 seconds and I'll tell you exactly what your options are.\"",
  },
  {
    num: 2,
    title: "When Medicaid is confirmed, name the D-SNP pathway immediately — it's your year-round enrollment mechanism",
    body: "Donovan Piper confirmed full Medicaid at 6:30. You confirmed \"two MBs considered full\" and moved on. That confirmation was the INT SEP activating — a year-round, repeatable enrollment pathway into a D-SNP. You never named it. The entire close attempt had no compliant enrollment mechanism behind it. Before you present any plan to a dual-eligible consumer, you need to name the pathway: \"Because you have both Medicare and Medicaid, you can enroll in a D-SNP any time of year.\"",
    script: "\"Mr. Piper, this is actually great news. Because you have full Medicaid, you qualify for a special enrollment period any time of year — it's called an INT SEP. And there are plans built specifically for people with both Medicare and Medicaid. Let me check what's available in your county right now.\"",
  },
  {
    num: 3,
    title: "Never name the carrier until you've built the value — the carrier name is a target for an objection",
    body: "On Jerome Calvin, you said \"United Healthcare special needs plan\" at 9:19. His immediate response was \"I don't want that.\" From that point the call was in reactive mode and never recovered. Jerome had confirmed QMB Medicaid, had no medical coverage, and had come in looking for the food card — all the ingredients for a strong close. But presenting the carrier name cold, before building a single piece of value, gave him something to reject before he had a reason to say yes.",
    script: "\"Because you have both Medicare and Medicaid, there's a plan specifically built for your situation — it gives you the food card you called about, closes the 20% medical gap you have right now, and covers dental and vision, all at zero cost to you. Once you hear what it covers, then we'll look at who it's through.\"",
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

export default function RatikaKambojApr22ReportPage() {
  const totalReviewed = reviewedCalls.reduce((sum, g) => sum + g.calls.length, 0)

  return (
    <PageShell signal="red">
      <div className={styles.page}>

        {/* Breadcrumb */}
        <Link href="/agents/ratika-kamboj" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>
          ← Back to Ratika Kamboj
        </Link>

        {/* Header */}
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Archived Weekly Brief</span>
          </div>
          <h1 className={styles.agentName}>Ratika Kamboj — April 22, 2026</h1>
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
            3 sales in 3 days on 72 calls. Conversion slipped from 5.17% to 4.17% and CPA ticked up to $259 — close to last week but moving the wrong direction. <strong style={{ color: 'var(--terracotta)' }}>A tough week, not a disaster</strong> — the content below is what tightens the calls that are currently slipping.
          </p>
        </motion.div>

        {/* Executive Summary */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <h2 className={styles.sectionTitle}>Executive Summary</h2>
          <div className={styles.execSummaryInner}>
            <p><strong>What&apos;s working:</strong> your ability to find enrollment pathways that other agents miss. On Edward Brewster, you spotted an address discrepancy in the system, confirmed the move, and correctly applied the MOV SEP as the qualifying event — that catch is what made the enrollment legal and possible. You also held position twice when Edward escalated the grocery card objection, explained the Medicaid distinction clearly, and took it all the way to a clean voice signature. And on both missed calls, you did the diagnostic work correctly — identified LIS Level 1 when Vincent denied having extra help, confirmed full dual eligibility on Donovan, diagnosed the C-SNP gap from system data. The analytical instincts are real.</p>
            <p><strong>What&apos;s costing you:</strong> conversion slipped to 4.17% and CPA ticked up to $259 — and the drag comes from one pattern that showed up three times in the reviewed sample. You correctly diagnose the problem, find a plan, present it — and then when the consumer says no to that plan, you have nowhere to go. Vincent Arnel told you &ldquo;I don&apos;t want Devoted&rdquo; four times and asked for alternatives twice. Donovan Piper had full Medicaid confirmed and the INT SEP was open year-round — you never named the pathway. Jerome Calvin was a qualified D-SNP candidate with no medical coverage — you named the carrier before you built a single piece of value and lost the call in the next five seconds. The diagnosis is excellent. The backup plan and the sequencing are what need work.</p>
          </div>
        </motion.div>

        {/* The One Thing */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>Build the value first — name the carrier last. When your first plan gets rejected, your job is to find a different one, not to keep selling the same one. &ldquo;You don&apos;t want that carrier — I hear you. Let me check every other option in your county right now.&rdquo; That sentence alone changes the outcome of three calls this period.</p>
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
            These are the calls we pulled for coaching this period. Your CRM total was 3 sales / 72 calls — this was a coaching sample, not an audit of every call.
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
            <span>Reviewed Avg: <strong>51 / 100</strong></span>
            <span>Reviewed Enrolled: <strong>1 of 4</strong></span>
            <span style={{ opacity: 0.7 }}>CRM Total: 3 sales / 72 calls</span>
          </div>
        </motion.div>

        {/* Footer */}
        <div className={styles.footer}>
          <p>The Certainty System · Ratika Kamboj · Weekly Brief · April 22, 2026 · Archived</p>
        </div>

      </div>
    </PageShell>
  )
}
