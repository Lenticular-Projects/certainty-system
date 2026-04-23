'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from '../../page.module.css'

// ── Archived Weekly Brief — April 22, 2026 ──────────────────────────────────
// Permanent archive of the Apr 22 brief delivered to Michael.
// CRM (source of truth):
//   Apr 13–17: Not in CRM — new to tracked roster this period
//   Apr 20–22 (first tracked period): 69 calls · 43 billable · 5 sales · 7.25% conv · $127 CPA

const trendRows = [
  { metric: 'Sales',      lastWeek: '—',  thisPeriod: '5',      movement: 'New to tracked roster this week' },
  { metric: 'Conversion', lastWeek: '—',  thisPeriod: '7.25%',  movement: 'New to tracked roster this week' },
  { metric: 'CPA',        lastWeek: '—',  thisPeriod: '$127',   movement: 'New to tracked roster this week' },
]

const reviewedCalls = [
  {
    date: 'Monday, April 20',
    calls: [
      { consumer: 'Karen Ewing',   duration: '12:37', score: 42, outcome: 'MISSED OPPORTUNITY', type: 'Satisfied Loyalist · medical narrative not anchored', href: '/agents/michael-fernandez/calls/karen-ewing' },
      { consumer: 'Deloris Walls', duration: '20:50', score: 34, outcome: 'MISSED OPPORTUNITY', type: 'D-SNP Switcher · surrendered soft objection at 17:22', href: '/agents/michael-fernandez/calls/deloris-walls' },
    ],
  },
  {
    date: 'Tuesday, April 21',
    calls: [
      { consumer: 'Barbara McKinney', duration: '15:00', score: 60, outcome: 'CORRECT NO-SALE', type: 'Pre-surgical consumer · C-SNP future path identified', href: '/agents/michael-fernandez/calls/barbara-mckinney' },
    ],
  },
  {
    date: 'Wednesday, April 22',
    calls: [
      { consumer: 'Barbara McCarville', duration: '19:56', score: 47, outcome: 'MISSED OPPORTUNITY', type: 'Diabetes C-SNP pivot identified at 12:24 · not executed', href: '/agents/michael-fernandez/calls/barbara-mccarville' },
    ],
  },
]

const whatYouDidWell = [
  {
    title: "D-SNP misplacement diagnosed in under 6 minutes — Deloris Walls",
    body: "On Deloris you spotted at 5:44 that a Medicaid Level 1 consumer was sitting in a C-SNP instead of a D-SNP — before she said anything was wrong. That's a diagnostic move most agents miss entirely. You used it to frame the UHC Dual Complete comparison correctly and positioned transportation (36 rides vs. zero) as the decisive swing benefit. The product read was right. The close is where the call slipped.",
  },
  {
    title: "C-SNP pivot identified on a hard lead — Barbara McCarville",
    body: "The Medicaid data wouldn't confirm in the system and the call was headed for a dead end. At 12:16 you pivoted to chronic conditions and surfaced the diabetes C-SNP path at 12:26 — 'that right there qualifies you.' That product read is the skill that separates elite agents from everyone else. You found the door. The next level is walking through it in the same call.",
  },
  {
    title: "C-SNP product read on Barbara McKinney — specific and accurate",
    body: "When Barbara disclosed two aortic aneurysms, you named the Chronic Special Needs Plan as the right future product, identified UnitedHealthcare as the carrier, and cited a real utility benefit ($200–$395/month). That is substantive product knowledge most agents don't have. Paired with the discipline not to move a pre-surgical consumer — that was the right professional call.",
  },
]

const whatToWorkOn = [
  {
    num: 1,
    title: "When a consumer names a chronic condition, pivot the call — don't return to the dead-end path",
    body: "On Barbara McCarville, at 12:24 she said 'I'm diabetic.' You correctly named it as a qualifier — and then went back to the Medicaid lookup that was already blocking the call. That was the moment the entire call changed direction. A C-SNP doesn't depend on her Medicaid status. The diabetes was the path. Same pattern on Karen Ewing at 8:07 — cardiac, knee, dentures, diabetes were handed to you and you answered with 'all Medicare plans do that.' The move is: stop, name it, anchor the plan to what they just said.",
    script: "\"Barbara, that right there qualifies you for a special plan designed specifically for diabetes. It has the grocery card, it doesn't depend on your Medicaid status, and I can pull it up right now. Let's look at that plan — we don't need to wait on the Medicaid.\"",
  },
  {
    num: 2,
    title: "Close on the signal — 'eventually' is a close trigger, not a reason to keep presenting",
    body: "Deloris told you twice — at 7:01 and 15:14 — she was 'eventually going back to United.' Both times you said 'mm-hmm' and kept building the case. By the time you tried to close at 17:02 with 'if you wanted to,' she had cooled and the objection came back. The rule is: when a consumer says 'eventually' or 'probably,' those are not permissions to keep pitching — they are invitations to collapse the timeline. Close while the signal is hot.",
    script: "\"Deloris, you just said eventually — so you already know you want to go back. Let's make eventually today. I can have you on United starting May 1st. What's your date of birth?\"",
  },
  {
    num: 3,
    title: "Anchor the benefit numbers to what they just told you about their life",
    body: "Karen listed cardiac surgery, knee replacement, dentures, and diabetes at 8:07. The plan you were about to present had $3,000 dental — for the dentures. A food card — for fixed income. You had the entire pitch handed to you and you read a generic benefit list that referenced Mr. Sisson. Same on Deloris: she told you groceries were expensive at 9:18, and you later quoted a $99/month food card difference without ever saying $1,188 a year. Numbers don't close sales. Numbers connected to the life they just described close sales.",
    script: "\"Karen — you just told me cardiac, knee, dentures, diabetes. That is exactly what this plan was built for. $3,000 dental per year — that's your dentures covered. $321 a month food card — that's $3,852 a year on a fixed income. Every number I have maps to something you just described.\"",
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

export default function MichaelFernandezApr22ReportPage() {
  const totalReviewed = reviewedCalls.reduce((sum, g) => sum + g.calls.length, 0)

  return (
    <PageShell signal="green">
      <div className={styles.page}>

        {/* Breadcrumb */}
        <Link href="/agents/michael-fernandez" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>
          ← Back to Michael Fernandez
        </Link>

        {/* Header */}
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Archived Weekly Brief</span>
          </div>
          <h1 className={styles.agentName}>Michael Fernandez — April 22, 2026</h1>
          <p className={styles.period}>Weekly Brief · Covering April 20–22, 2026</p>
          <p className={styles.updatedAt}>Delivered April 22, 2026 · {totalReviewed} calls reviewed</p>
        </motion.div>

        {/* Trend Snapshot */}
        <motion.div className={styles.trendSnapshot} {...SPRING}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid rgba(19,17,16,0.08)' }}>
            <h2 className={styles.sectionTitle} style={{ margin: 0, padding: 0, border: 'none' }}>Trend Snapshot</h2>
            <span style={{ fontSize: '0.75rem', color: 'var(--ink-60)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Apr 20–22 · from CRM · First tracked period</span>
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
                <span style={{ fontSize: '0.875rem', color: 'var(--ink-60)', fontStyle: 'italic' }}>{row.movement}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '14px', lineHeight: 1.65 }}>
            5 sales on 69 calls, $127 CPA in the first tracked period. <strong style={{ color: 'var(--sage-dark)' }}>Strong debut</strong> — the product reads are there (D-SNP misplacement, C-SNP pivot on diabetes and cardiac) and the professional judgment is there (correct no-sale on a pre-surgical consumer). This brief is about closing on the signals you are already seeing.
          </p>
        </motion.div>

        {/* Executive Summary */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <h2 className={styles.sectionTitle}>Executive Summary</h2>
          <div className={styles.execSummaryInner}>
            <p><strong>What&apos;s working:</strong> You came in with genuine product knowledge. On Deloris you diagnosed a D-SNP misplacement in under 6 minutes. On Barbara McCarville, when the Medicaid data blocked the call, you pivoted to chronic conditions and surfaced the diabetes C-SNP path — a product read most agents never make. On Barbara McKinney, you identified C-SNP as the right future product for two aortic aneurysms and made the right professional call to protect a pre-surgical consumer over your commission. That combination of product knowledge and judgment produced 5 sales and a $127 CPA in the first tracked period — a strong debut.</p>
            <p><strong>What&apos;s costing you:</strong> On three of the four reviewed calls, the enrollment door was wide open and you didn&apos;t walk through it. On Barbara McCarville at 12:26, &ldquo;you&apos;re diabetic? That right there qualifies you&rdquo; was the pivot that bypassed the entire Medicaid roadblock — and then you went back to the Medicaid issue. On Deloris at 7:01 and 15:14, she said twice she was &ldquo;eventually going back to United.&rdquo; Both times the correct move was &ldquo;let&apos;s make eventually today&rdquo; — instead you kept presenting and then attempted a permission-seeking close that let her walk. On Karen at 8:07, she named cardiac, knee, dentures, and diabetes — the exact benefit map of the plan you were about to pitch — and you answered with &ldquo;all Medicare plans do that.&rdquo; The product work is elite. The next move is converting those reads into closes in the same call.</p>
          </div>
        </motion.div>

        {/* The One Thing */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a consumer names a chronic condition — diabetes, heart disease, COPD — that is the new direction of the entire call. Stop whatever path you&apos;re on. &ldquo;Hold on — that right there qualifies you for a specialized plan built specifically for that condition. Let me pull that up right now.&rdquo; You already see these moments. The next level is pivoting the call in that exact second instead of noting it and going back to the blocked path.</p>
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
            These are the calls we pulled for coaching this period. Your CRM total was 5 sales / 69 calls — this was a coaching sample, not an audit of every call.
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
            <span>Reviewed Enrolled: <strong>0 of 4</strong></span>
            <span style={{ opacity: 0.7 }}>CRM Total: 5 sales / 69 calls</span>
          </div>
        </motion.div>

        {/* Footer */}
        <div className={styles.footer}>
          <p>The Certainty System · Michael Fernandez · Weekly Brief · April 22, 2026 · Archived</p>
        </div>

      </div>
    </PageShell>
  )
}
