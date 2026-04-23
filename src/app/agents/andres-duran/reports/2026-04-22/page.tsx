'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from '../../page.module.css'

// ── Archived Weekly Brief — April 22, 2026 ──────────────────────────────────
// Permanent archive of the Apr 22 brief delivered to Andres.
// CRM (source of truth):
//   Apr 13–17 (5 days): 141 all_calls · 99 billable · 15 sales · 10.64% conv · $127.93 CPA
//   Apr 20–22 (3 days):  87 all_calls · 73 billable ·  8 sales ·  9.20% conv · $140.50 CPA

const trendRows = [
  { metric: 'Sales',      lastWeek: '15',      thisPeriod: '8',       movement: '↑ On pace (2.67/day vs 3.0)', dir: 'up' },
  { metric: 'Conversion', lastWeek: '10.64%',  thisPeriod: '9.20%',   movement: '↓ −1.44pp',                   dir: 'down' },
  { metric: 'CPA',        lastWeek: '$127.93', thisPeriod: '$140.50', movement: '↑ +$12.57',                   dir: 'down' },
]

const reviewedCalls = [
  {
    date: 'Sunday, April 20',
    calls: [
      { consumer: 'Kate Cohen',      duration: '19:54', score: 44, outcome: 'MISSED OPPORTUNITY', type: 'Confirmed doctors + math · surrendered at close', href: '/agents/andres-duran/calls/kate-cohen' },
      { consumer: 'Loretta Summers', duration: '41:51', score: 64, outcome: 'MISSED OPPORTUNITY', type: 'Strong rapport · DST SEP checked too late',        href: '/agents/andres-duran/calls/loretta-summers' },
      { consumer: 'Mary Kaulait',    duration: '44:23', score: 82, outcome: 'ENROLLED',            type: 'MOOP anchor · loyalty close · DST flag',           href: '/agents/andres-duran/calls/mary-kaulait' },
    ],
  },
  {
    date: 'Monday, April 21',
    calls: [
      { consumer: 'Charles Dillard', duration: '16:32', score: 32, outcome: 'MISSED OPPORTUNITY', type: 'Double surrender in 90s · zero math · missed CSN',  href: '/agents/andres-duran/calls/charles-dillard' },
      { consumer: 'Mark Klesmeyer',  duration: '18:07', score: 57, outcome: 'MISSED OPPORTUNITY', type: '18 min of great work · network objection collapse',  href: '/agents/andres-duran/calls/mark-klesmeyer' },
      { consumer: 'Ronald Jones',    duration: '43:31', score: 76, outcome: 'ENROLLED',            type: 'C-SNP upgrade mid-call · strong enrollment',         href: '/agents/andres-duran/calls/ronald-jones' },
    ],
  },
  {
    date: 'Tuesday, April 22',
    calls: [
      { consumer: 'Emile Saffer',     duration: '2:34', score: 51, outcome: 'MISSED OPPORTUNITY', type: 'System lookup fail · no recovery pivot',     href: '/agents/andres-duran/calls/emile-saffer' },
      { consumer: 'Eugene Engelhart', duration: '4:37', score: 38, outcome: 'MISSED OPPORTUNITY', type: 'Confused consumer · combative close attempt', href: '/agents/andres-duran/calls/eugene-engelhart' },
    ],
  },
]

const whatYouDidWell = [
  {
    title: 'Pain anchoring and post-enrollment loyalty lock',
    body: 'On Mary Kaulait (82/100 · ENROLLED), you threaded the MOOP bill through the entire call — establishing the financial pain point early, returning to it through plan presentation, and closing on it. Then at 39:46 you delivered the loyalty anchor: "don\'t fall for somebody who calls you and tells you they\'re going to get you more money. Your health is more important than $30." That\'s how you protect an enrollment from competitor calls in the days after. Most agents don\'t think about the moment after the close. You did.',
  },
  {
    title: 'C-SNP identification mid-call',
    body: 'On Ronald Jones (76/100 · ENROLLED), you caught "I\'m on disability" at 3:31 and treated it as a signal, not a side detail. As the full scope of his condition emerged, you upgraded him from a standard Devoted plan to Devoted Chronic Premium HMO-C SNP mid-call — a plan built specifically for his situation. He didn\'t ask for it. You identified it. That\'s the product knowledge and signal reading that separates closes from near-misses.',
  },
  {
    title: 'Doctor network confirmed before plan recommendation',
    body: 'On Kate Cohen (Hollywood, FL), you confirmed both Dr. Hector Hernandez and Dr. Ramona Gonzalez before naming a plan. When Devoted couldn\'t support the network, you pivoted to Aetna rather than forcing a fit — and had the drug math to back it up ($600 → $67 on Trelegy). The work inside that call was correct. The issue wasn\'t the product. It was the last 90 seconds.',
  },
]

const whatToWorkOn = [
  {
    num: 1,
    title: "When you have the doctors confirmed, the meds checked, and the math on the table — close it",
    body: "Kate Cohen (19:54) and Mark Klesmeyer (18:07) are the same call. Both had every doctor confirmed. Both had the math done. Kate heard $147/month in savings; Mark heard a $3,500 dental benefit. On both calls, at the moment the math landed, you backed off and accepted a \"let me think about it\" without asking for the yes once. The close setup was complete — what was missing was the question. You don\'t need more information at that point. You need to name the one thing left and ask for the decision.",
    script: '"What\'s the one thing you need to be sure of before we move forward right now?"',
  },
  {
    num: 2,
    title: "System failure protocol: never let it show in your voice",
    body: "Emile Saffer (2:34) ended because at 2:27 you said \"It\'s not pulling you up\" — out loud, directly to the consumer. That\'s the call dying in real time. When the lookup fails, the consumer should never know. Stay in your frame, stay calm, and pivot to a next step before they have time to think about hanging up. The consumer should feel like you\'re working the problem, not hitting a wall.",
    script: '"Let me try a different way to pull you up — just give me one moment."',
  },
  {
    num: 3,
    title: "When a consumer pushes back, slow down — don\'t get combative",
    body: "Eugene Engelhart (4:37) was a confused consumer, not a hostile one. He said \"I\'m not changing\" because he didn\'t understand what was being offered. When the call ended with \"You called me, Eugene,\" it was already over — but that line closed every future door. Defensive consumers need you to lower your voice, not raise your stakes. One reframe at the right moment recovers a call like that. The combative exit makes recovery impossible.",
    script: '"I hear you, Eugene. Let me make sure I\'m showing you what\'s actually available — can we look at this one number together?"',
  },
  {
    num: 4,
    title: "Anchor every enrollment to the correct SEP pathway — never raise DST",
    body: "On Mary Kaulait at 24:03 you invoked a Disaster SEP (Oklahoma tornadoes and flooding) to establish her enrollment window. DST is CMS-initiated only — agents cannot raise it. Mary has full Medicaid, which gives her a year-round INT SEP. That was the clean pathway and it was sitting right there. On Kate Cohen, the enrollment setup moved forward without a clear SEP established. This isn\'t about the close — it\'s about protecting every enrollment you do close. When the consumer has full Medicaid, INT is your pathway. When they have a qualifying life event (move, loss of coverage, etc.), use that. Never reach for DST to justify an enrollment window.",
    script: '"Because you have full Medicaid, you have the right to make a plan change any time of year — that\'s what we\'re using today to get you onto this plan."',
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

export default function AndresDuranApr22ReportPage() {
  const totalReviewed = reviewedCalls.reduce((sum, g) => sum + g.calls.length, 0)

  return (
    <PageShell signal="yellow">
      <div className={styles.page}>

        {/* Breadcrumb */}
        <Link href="/agents/andres-duran" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>
          ← Back to Andres Duran
        </Link>

        {/* Header */}
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Archived Weekly Brief</span>
          </div>
          <h1 className={styles.agentName}>Andres Duran — April 22, 2026</h1>
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
            8 sales in 3 days on 87 calls — <strong style={{ color: 'var(--sage-dark)' }}>pace is holding</strong> (2.67/day vs 3.0/day last week). Conversion dipped 1.44pp and CPA climbed $12.57. The sales are still coming; the six reviewed calls that didn&apos;t close are the seam to tighten this week.
          </p>
        </motion.div>

        {/* Executive Summary */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <h2 className={styles.sectionTitle}>Executive Summary</h2>
          <div className={styles.execSummaryInner}>
            <p><strong>What&apos;s working:</strong> Your ability to find the right plan and stay in a call. On Ronald Jones, you spotted a disability signal mid-call and upgraded him to a C-SNP built for his exact condition — without him asking for it. On Mary Kaulait, you anchored the MOOP bill early, threaded it through the whole call, closed on it, and then locked the enrollment with a loyalty frame that protects the sale from future competitor calls. Those are high-skill sequences. When you&apos;re operating at that level, you close the hard ones.</p>
            <p><strong>What&apos;s costing you:</strong> Kate Cohen and Mark Klesmeyer are the same call — doctors confirmed, meds checked, math on the table — and then a surrender at the close with no ask for the yes. Both calls were complete. The setup was done. On Emile Saffer, a system lookup failure ended the call because you said the problem out loud instead of pivoting around it. On Eugene Engelhart, a confused consumer became a closed door when the call ended on &ldquo;You called me, Eugene.&rdquo; Fix the close sequence and you recover those four calls. That alone is the pace difference.</p>
            <p><strong>The compliance note:</strong> On Mary Kaulait, the enrollment is a win — but at 24:03 you invoked a Disaster SEP to establish the enrollment window. DST is CMS-initiated only; agents cannot raise it. Mary has full Medicaid, which is a year-round INT SEP — that was the correct pathway and it was sitting right in front of you. On Kate Cohen the call set up an enrollment without a SEP pathway established. Neither of these is a close-sequence issue; they&apos;re anchor-to-the-right-pathway issues. Get the SEP right on the front end and every enrollment protects itself.</p>
          </div>
        </motion.div>

        {/* The One Thing */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When you have their doctors confirmed, their meds checked, and the math on the table &mdash; that&apos;s not setup for a callback. That&apos;s the moment to close. Everything else on this page is secondary.</p>
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
            These are the calls we pulled for coaching this period. Your CRM total was 8 sales / 87 calls — this was a coaching sample, not an audit of every call.
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
            <span>Reviewed Avg: <strong>56 / 100</strong></span>
            <span>Reviewed Enrolled: <strong>2 of 8</strong></span>
            <span style={{ opacity: 0.7 }}>CRM Total: 8 sales / 87 calls</span>
          </div>
        </motion.div>

        {/* Footer */}
        <div className={styles.footer}>
          <p>The Certainty System · Andres Duran · Weekly Brief · April 22, 2026 · Archived</p>
        </div>

      </div>
    </PageShell>
  )
}
