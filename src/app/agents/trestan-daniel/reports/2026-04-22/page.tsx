'use client'

import { useState } from 'react'
import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from '../../page.module.css'

// ── Archived Weekly Brief — April 22, 2026 ──────────────────────────────────
// This page is a permanent archive of the Apr 22 brief delivered to Trestan.
// When a new brief ships on the main agent page, this one stays exactly as-is.
// CRM (source of truth):
//   Apr 13–17 (5 days): 73 all_calls · 57 billable · 8 sales · 10.96% conv · $123.50 CPA
//   Apr 20–22 (3 days): 39 all_calls · 26 billable · 1 sale  ·  2.56% conv · $395.00 CPA
// Coaching sample: 0 reviewed calls this period — coaching pulled from Apr 13–17 MDs

const trendRows: Array<{ metric: string; lastWeek: string; thisPeriod: string; movement: string; dir: 'up' | 'down' | 'neutral' }> = [
  { metric: 'Sales',      lastWeek: '8',       thisPeriod: '1',       movement: '↓ −7 sales',   dir: 'down' },
  { metric: 'Conversion', lastWeek: '10.96%',  thisPeriod: '2.56%',   movement: '↓ −8.40pp',    dir: 'down' },
  { metric: 'CPA',        lastWeek: '$123.50', thisPeriod: '$395.00', movement: '↑ +$271.50',   dir: 'down' },
]

const reviewedCallsArchive = [
  {
    date: 'Tuesday, April 14',
    calls: [
      { consumer: 'Nancy Hazelrig',            duration: '6:03',  score: 51, outcome: 'CORRECT NO-SALE',   type: 'The Grocery Card Caller',                 href: '/agents/trestan-daniel/calls/nancy-hazelrig' },
      { consumer: 'Susan White',               duration: '12:24', score: 47, outcome: 'INCOMPLETE',         type: 'The Food Card Caller — Handoff at Close', href: '/agents/trestan-daniel/calls/susan-white' },
      { consumer: 'Unknown Consumer (15m22s)', duration: '15:22', score: 35, outcome: 'MISSED OPPORTUNITY', type: 'The Money Caller — INT SEP Unused',       href: '/agents/trestan-daniel/calls/unknown-consumer-15m22s' },
    ],
  },
  {
    date: 'Wednesday, April 15',
    calls: [
      { consumer: 'Annie Sellers',     duration: '3:00', score: 62, outcome: 'CORRECT NO-SALE', type: 'Hostile SSN Refusal — Correct Exit',       href: null },
      { consumer: 'Georgia Whitehead', duration: '3:00', score: 60, outcome: 'CORRECT NO-SALE', type: 'Polite SSN Refusal — Professional Close', href: null },
    ],
  },
]

const whatYouDidWell = [
  {
    title: 'You read accounts, not just consumers — and it found the sale',
    body: "On the Susan White call (April 14), at 4:08 you noticed she had been on a C-SNP and switched back to a regular MAPD. You asked about it proactively. That one question uncovered the whole story — Susan had been on the right plan, kept getting switched off it without her consent, and never had the benefit activate. You explained the history in plain language, built a clear $55/month versus $50/quarter comparison, and she said \"Yes, I'm ready\" at 9:03. The discovery instinct that led to that moment is not common. Most agents confirm the current plan and move on.",
  },
  {
    title: "You don't flinch at opening resistance",
    body: "The week of March 30, Helen Wicker opened with \"I don't want to change nothing.\" You said \"That's totally fine — what insurance do you have?\" and kept moving. No slowing down, no explanations, no apology. You treated her resistance as the beginning of the conversation, not a barrier to it. Helen was enrolled by 31:43 and scored 80/100 — your highest reviewed score in the past two months. That same composure is exactly what the closeable calls from last week needed at the finish.",
  },
  {
    title: 'Correct no-sales when a consumer cannot safely enroll',
    body: "On Annie Sellers and Georgia Whitehead (April 15), you executed the correct pivot to SSN when the Medicare card wasn't available, and exited cleanly when both consumers declined. Reading the situation accurately and making the right call — professionally, without pressure — protects the business and preserves the lead. You made that call correctly twice in one day.",
  },
]

const whatToWorkOn = [
  {
    num: 1,
    title: 'When a consumer says yes — you execute, not transfer',
    body: 'Susan White said "Yes, I\'m ready" at 9:03 on April 14. At 9:05, you said "Let me see if I have an agent who can put that in for you" and put her on hold. The enrollment never happened. Every discovery, every comparison, every piece of trust you built in that call led to that moment — and the close didn\'t land because you removed yourself from it. When you hear the green light, the only correct next move is enrollment execution. Your mouth, your keystrokes, right now.',
    script: '"Perfect, Susan — I\'m getting you enrolled on the Complete Care plan right now, effective May 1. I already have your Medicare number and your date of birth — I just need to confirm a few more details and we\'ll have this handled in about three minutes."',
  },
  {
    num: 2,
    title: 'The INT SEP removes the "I already changed plans" objection in one sentence',
    body: 'On the Warsaw, Ohio call (April 14), the consumer said at 14:09 "I won\'t get it — I already changed my plan once this year." That objection is based on a false belief. You had confirmed his QMB/Medicaid status at 5:01 — as a dual-eligible member, he can change plans any month of the year. You knew this. You never said it. Instead you restated the plan value and said "Totally up to you." The INT SEP is a one-sentence enrollment unlock — and it was sitting ready on that call the whole time.',
    script: '"Because you have Medicaid, the once-a-year rule doesn\'t apply to you. You can change any month. That\'s not a barrier here at all."',
  },
  {
    num: 3,
    title: 'Finish the math — annualize it, then connect it to their problem',
    body: 'On both the Susan White and Warsaw calls, you started the math comparison and stopped before it was complete. The full breakdown has three steps: compare the monthly figures, annualize them out loud, then connect the annual number to something specific the consumer told you about their life. On Susan\'s call, "$460 more per year just by being on the right plan" was never said. On the Warsaw call, the consumer had told you his food card was cut and his medications were costing more — you had everything you needed to close on the math and didn\'t.',
    script: '"That\'s $460 more per year — and you told me your food card got cut. This plan covers both. Let\'s get this locked in today."',
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

export default function TrestanDanielApr22ReportPage() {
  const [showArchive, setShowArchive] = useState(true)
  const totalArchived = reviewedCallsArchive.reduce((sum, g) => sum + g.calls.length, 0)

  return (
    <PageShell signal="neutral">
      <div className={styles.page}>

        {/* Breadcrumb */}
        <Link href="/agents/trestan-daniel" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>
          ← Back to Trestan Daniel
        </Link>

        {/* Header */}
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Archived Weekly Brief</span>
          </div>
          <h1 className={styles.agentName}>Trestan Daniel — April 22, 2026</h1>
          <p className={styles.period}>Weekly Brief · Covering April 20–22, 2026</p>
          <p className={styles.updatedAt}>Delivered April 22, 2026 · 0 calls reviewed this period</p>
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
            Tough three days. Sales fell from 8 to 1, conversion dropped 8.4 points, and CPA nearly tripled. Call volume was also down — 39 vs 73 — so the sample is smaller, but the conversion rate is the number that matters most and it fell off. The patterns that slipped last week are the ones to tighten first: finishing the close yourself, deploying the INT SEP, and finishing the math. No reviewed calls this period, so the coaching below is carried forward from last week&apos;s calls.
          </p>
        </motion.div>

        {/* Executive Summary */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <h2 className={styles.sectionTitle}>Executive Summary</h2>
          <div className={styles.execSummaryInner}>
            <p><strong>Light coaching sample this period — here&apos;s what the CRM shows and what to focus on going into next week.</strong> The CRM drop is real: 1 sale on 26 billable calls is a 2.56% conversion, down from 10.96% the week before. That&apos;s a rough three days, but it&apos;s three days — not a verdict. Last week you ran a 10.96% conversion with account-reading work like the Susan White C-SNP discovery that most agents on this team don&apos;t know how to do. The capability is there. What shifted this week was likely the finish, not the opening.</p>
            <p><strong>What to carry into next week:</strong> the three patterns from last week&apos;s closeable calls all have clean fixes. When a consumer gives you the green light, you stay in the seat — no transfers, no handoffs. When a dual-eligible consumer says they can&apos;t change plans again this year, the INT SEP is a one-sentence unlock. When you build the math, you run all three steps: compare monthly, annualize it out loud, and connect the annual number to the specific problem they told you about. Discovery is already your strength. The finish is the work.</p>
          </div>
        </motion.div>

        {/* The One Thing */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>You do the discovery, you build the case, you earn the trust &mdash; that&apos;s the hardest part of this job and you do it consistently. The move that converts more of those calls is finishing what you started: when the consumer gives you the green light, your next words are &ldquo;Perfect &mdash; I&apos;m getting you enrolled right now&rdquo; and you run the enrollment yourself. You built the relationship. You own the close.</p>
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

        {/* Reviewed Calls */}
        <motion.div className={styles.section} {...SPRING}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid rgba(19,17,16,0.08)' }}>
            <h2 className={styles.sectionTitle} style={{ margin: 0, padding: 0, border: 'none' }}>Reviewed Calls This Period</h2>
            <button
              onClick={() => setShowArchive(!showArchive)}
              style={{ width: 'auto', padding: '6px 14px', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--ink-60)', background: 'transparent', border: '1px solid rgba(19,17,16,0.15)', borderRadius: '6px', cursor: 'pointer', whiteSpace: 'nowrap' }}
            >
              {showArchive ? 'Hide Archive ▴' : `Last Week's Calls (${totalArchived}) ▾`}
            </button>
          </div>
          <div style={{ padding: '18px 20px', background: 'rgba(19,17,16,0.03)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.07)' }}>
            <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 6px' }}>No reviewed calls this period.</p>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.65, color: 'var(--ink-60)', margin: 0 }}>
              CRM total for the period was 1 sale / 39 calls. Last week&apos;s calls are preserved below for reference.
            </p>
          </div>
          <div className={styles.callTableFooter} style={{ marginTop: '16px' }}>
            <span style={{ opacity: 0.7 }}>CRM Total: 1 sale / 39 calls</span>
          </div>

          {showArchive && (
            <div style={{ marginTop: '24px' }}>
              <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)', marginBottom: '16px' }}>
                Apr 13–17 Archive (Last Week&apos;s Calls)
              </p>
              {reviewedCallsArchive.map((group) => (
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
                          {call.href ? (
                            <Link href={call.href} style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'var(--ink-20)', textUnderlineOffset: '3px' }}>{call.consumer}</Link>
                          ) : (
                            call.consumer
                          )}
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
                <span>Reviewed Avg (Apr 13–17): <strong>51 / 100</strong></span>
                <span>Correct No-Sales: <strong>3 of 5</strong></span>
                <span style={{ opacity: 0.7 }}>CRM Total (Apr 13–17): 8 sales / 57 billable</span>
              </div>
            </div>
          )}
        </motion.div>

        {/* Footer */}
        <div className={styles.footer}>
          <p>The Certainty System · Trestan Daniel · Weekly Brief · April 22, 2026 · Archived</p>
        </div>

      </div>
    </PageShell>
  )
}
