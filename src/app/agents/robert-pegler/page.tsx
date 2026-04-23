'use client'

import { useState } from 'react'
import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Weekly Brief — April 22, 2026 ──────────────────────────────────────────
// CRM (source of truth):
//   Apr 13–17 (5 days): 136 calls · 86 billable · 5 sales · 3.68% conv · $322.20 CPA
//   Apr 20–22 (3 days): 62 calls · 45 billable · 2 sales · 3.23% conv · $350.50 CPA
// Coaching sample: 8 reviewed calls (7 from Apr 21, 1 from Apr 20 w/ Karimah)

const trendRows = [
  { metric: 'Sales',      lastWeek: '5',        thisPeriod: '2',        movement: '↑ 2 closes through',  dir: 'up' },
  { metric: 'Conversion', lastWeek: '3.68%',    thisPeriod: '3.23%',    movement: '↓ −0.45pp',           dir: 'down' },
  { metric: 'CPA',        lastWeek: '$322.20',  thisPeriod: '$350.50',  movement: '↑ +$28.30',           dir: 'down' },
]

const reviewedCalls = [
  {
    date: 'Monday, April 20',
    calls: [
      { consumer: 'Jesse Burdette (w/ Karimah Ali)', duration: '12:08', score: 52, outcome: 'INCOMPLETE', type: 'Joint call · discovery stalled', href: '/agents/robert-pegler/calls/jesse-burdette' },
    ],
  },
  {
    date: 'Tuesday, April 21',
    calls: [
      { consumer: 'Thomas Coulson', duration: '5:30', score: 50, outcome: 'CORRECT NO-SALE', type: 'Caseworker absent · memory issues', href: '/agents/robert-pegler/calls/thomas-coulson' },
      { consumer: 'Clayton Garner', duration: '12:07', score: 66, outcome: 'CORRECT NO-SALE', type: 'Already on strong D-SNP · no SEP', href: '/agents/robert-pegler/calls/clayton-garner' },
      { consumer: 'Freya McMillan', duration: '7:48', score: 60, outcome: 'CORRECT NO-SALE', type: 'CSN missed · fluoxetine/depression', href: '/agents/robert-pegler/calls/freya-mcmillan' },
      { consumer: 'Melanie Duffy', duration: '7:16', score: 67, outcome: 'CORRECT NO-SALE', type: 'Strong current plan · correct stay', href: '/agents/robert-pegler/calls/melanie-duffy' },
      { consumer: 'Tina Armer', duration: '6:06', score: 57, outcome: 'CORRECT NO-SALE', type: 'CSN missed · cardiac + blood clots', href: '/agents/robert-pegler/calls/tina-armer' },
      { consumer: 'Lauren Fisher', duration: '4:45', score: 25, outcome: 'MISSED OPPORTUNITY', type: 'Surrendered to daughter-gatekeeper', href: '/agents/robert-pegler/calls/lauren-fisher' },
      { consumer: 'Arteez Carey Jr.', duration: '12:54', score: 32, outcome: 'MISSED OPPORTUNITY', type: 'INT+CSN missed · DST compliance flag', href: '/agents/robert-pegler/calls/arteez-carey-jr' },
    ],
  },
]

const whatYouDidWell = [
  {
    title: "Ethical judgment when a caller wasn't safe to enroll",
    body: "Thomas Coulson called without his caseworker and disclosed memory impairment. You identified the caseworker as the decision-maker at 1:44, texted your callback info, and walked away. Enrolling him without the caseworker present would have been a compliance and ethical violation. You made the right call — that discipline protects the business and the consumer.",
  },
    {
    title: "Product-honest advice that protected two consumers from a downgrade",
    body: "On Clayton Garner and Melanie Duffy, both were already on strong plans — a D-SNP with benefits you couldn't match and a carrier fit that was serving her. You didn't manufacture a reason to switch them. That kind of read-the-situation honesty is how this team keeps retention clean and why CRM shows 2 closes landed this period instead of churn complaints next month. The discipline is real.",
  },
  {
    title: 'Warm rapport maintained through hostile and fragile calls',
    body: "Tina Armer disclosed a second heart attack in February, pulmonary clots, and active oxygen therapy during your call. You didn't push. You adjusted tone and let her stay comfortable. Melanie Duffy got honest \"stay on your current plan\" advice she could actually use. Agents who close more than you don't always build that kind of trust.",
  },
]

const whatToWorkOn = [
  {
    num: 1,
    title: "Probe every chronic condition for a C-SNP pathway — don't say \"oh good\" and move on",
    body: "Three missed CSN opportunities this period: Freya McMillan disclosed fluoxetine for depression (5:07) — year-round C-SNP. Tina Armer disclosed a second heart attack plus blood clots — cardiovascular C-SNP. Arteez Carey mentioned cancer remission (5:57) — also year-round. On all three you acknowledged and moved to medications. A single follow-up question unlocks the enrollment window.",
    script: "\"Is that something you've been managing for a while? Let me check whether there's a plan specifically designed for that condition in your area — that might change what's available to you today.\"",
  },
  {
    num: 2,
    title: "Don't surrender to the gatekeeper — give the consumer a reason to stay on the line",
    body: "Lauren Fisher (25/100 · MISSED) was a hot inbound calling specifically about the food card. At 1:31 she said her daughter sometimes helps with insurance. You immediately proposed a conference call, then a callback, texted your info, and ended. No plan was named. No benefit amount was quoted. That's the stuff we fix this week — give her a reason to want her daughter on the next call.",
    script: "\"Lauren, before we bring your daughter in, let me give you the number she's going to ask about. Based on what you've told me, you're looking at a plan with a $200 monthly grocery card — that's $2,400 a year for food. When you tell your daughter about this, that's the number you want her to hear.\"",
  },
  {
    num: 3,
    title: "Never raise DST (Disaster SEP) proactively — it's a CMS compliance prohibition",
    body: "On Arteez Carey at 10:19, you raised DST as an enrollment pathway. CMS explicitly prohibits agents from advertising DST — it must be volunteered by the consumer. Two compliant windows were sitting in front of you and went unused: Arteez confirmed full Medicaid at 5:12 (INT SEP, year-round) and cancer remission at 5:57 (CSN SEP, year-round). Use those. Never lead with DST.",
    script: "\"You mentioned you're on Medicaid — that opens a year-round enrollment window for a plan designed for your situation. And you mentioned you're in remission — that also opens a window. Let's see which one gets you the best benefit package today.\"",
  },
]

const reportHistory = [
  {
    id: 'apr-22',
    active: true,
    date: 'Apr 22',
    label: 'Weekly Brief',
    period: 'April 20–22, 2026',
    trendHeadline: 'Sales 2 · Conv 3.23% · 8 reviewed calls',
    scoreNote: 'Two closes through · tighten CSN probe and gatekeeper reframe',
    href: '/agents/robert-pegler/reports/2026-04-22',
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

export default function RobertPeglerPage() {
  const [showAllCalls, setShowAllCalls] = useState(true)

  const totalReviewed = reviewedCalls.reduce((sum, g) => sum + g.calls.length, 0)

  return (
    <PageShell signal="red">
      <div className={styles.page}>

        {/* Header */}
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Weekly Brief</span>
          </div>
          <h1 className={styles.agentName}>Robert Pegler</h1>
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
            2 closes through in 3 days — the board isn&apos;t empty. Conversion slipped slightly (3.68% → 3.23%, −0.45pp) and CPA climbed $28 to $350.50, so the sales are coming but they&apos;re costing more calls to land. <strong style={{ color: 'var(--terracotta)' }}>The focus this week</strong> is tightening the moments below where a close was sitting on the table and walked away.
          </p>
        </motion.div>

        {/* Executive Summary */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <h2 className={styles.sectionTitle}>Executive Summary</h2>
          <div className={styles.execSummaryInner}>
            <p><strong>What&apos;s working:</strong> Two closes landed this period and neither came from pushing a consumer past their situation. On Clayton Garner and Melanie Duffy you read the board correctly and protected them from a downgrade — that&apos;s retention discipline most agents skip. On Thomas Coulson — caseworker absent, memory impairment disclosed — you identified the caseworker as the decision-maker at 1:44 and walked away rather than force a sale that wouldn&apos;t stick. And on Tina Armer (second heart attack, pulmonary clots, active oxygen) you adjusted tone and gave her space instead of pushing. Consumers trust you. That trust is the foundation — now we tighten the probe so more of those calls come back around.</p>
            <p><strong>What&apos;s costing you:</strong> the same pattern showed up five times this period. You heard a chronic condition — fluoxetine for depression on Freya, cardiac history on Tina, cancer remission on Arteez — and said &ldquo;oh, good&rdquo; and moved to medications. All three are year-round C-SNP enrollment windows. You never asked the one follow-up question that checks for a C-SNP in their county. On Lauren Fisher (a hot inbound calling specifically for the food card), you surrendered to &ldquo;my daughter helps&rdquo; at 1:31 without ever quoting a benefit amount — she left with your phone number and no reason to call back. And on Arteez, you raised DST proactively, which CMS prohibits — and two compliant pathways (INT and CSN) were sitting right in front of you. The product knowledge is there. The reframe and the probe are what needs work.</p>
          </div>
        </motion.div>

        {/* The One Thing */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a consumer mentions ANY chronic condition — a medication, a diagnosis, a surgery — stop. Ask one follow-up question. &ldquo;Is that something you&rsquo;ve been managing for a while?&rdquo; That question is the difference between a correct no-sale and an enrollment. Three calls this period died on that exact moment.</p>
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
            These are the calls we pulled for coaching this period. Your CRM total this period is 2 sales / 62 calls — this is a coaching sample, not an audit of every call.
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
                <span>Reviewed Avg: <strong>51 / 100</strong></span>
                <span>Reviewed Enrolled: <strong>0 of 8</strong></span>
                <span style={{ opacity: 0.7 }}>CRM Total: 2 sales / 62 calls</span>
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
          <p>The Certainty System · Robert Pegler · Weekly Brief · April 22, 2026</p>
        </div>

      </div>
    </PageShell>
  )
}
