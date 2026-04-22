'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import { useState } from 'react'
import styles from './page.module.css'

// ── Mid-Week Report: April 20–22, 2026 ──────────────────────────────────────
// Calls reviewed: Deborah Roost (40), Jerry Heath (77), Ahmad Najem (46)
// Period average: 54/100
// Enrolled: 1 of 3

const callsByDate = [
  {
    date: 'Monday, April 20',
    calls: [
      {
        consumer: 'Deborah Roost',
        duration: '10:43',
        score: 40,
        outcome: 'MISSED OPPORTUNITY',
        outcomeNote: 'Soft callback accepted — no close attempted',
        type: 'C-SNP Upgrade — Surrendered at Doctor Network Obstacle',
        href: '/agents/lawrence-morris/calls/deborah-roost',
      },
      {
        consumer: 'Jerry Heath',
        duration: '32:28',
        score: 77,
        outcome: 'ENROLLED',
        outcomeNote: null,
        type: 'Give-Back PPO — DST SEP · $184.70/mo SS give-back',
        href: '/agents/lawrence-morris/calls/jerry-heath',
      },
    ],
  },
  {
    date: 'Tuesday, April 21',
    calls: [
      {
        consumer: 'Ahmad Najem',
        duration: '24:46',
        score: 46,
        outcome: 'MISSED OPPORTUNITY',
        outcomeNote: 'No close attempted — call ended on consumer terms',
        type: 'C-SNP Eligible — HMO Objection Not Reframed',
        href: '/agents/lawrence-morris/calls/ahmad-najem',
      },
    ],
  },
]

type TrendDir = 'up' | 'down' | 'neutral'

const trendRows: Array<{ metric: string; lastWeek: string; thisPeriod: string; movement: string; dir: TrendDir; note: string | null }> = [
  {
    metric: 'Sales',
    lastWeek: '13',
    thisPeriod: '6 (2 days)',
    movement: 'On pace',
    dir: 'neutral',
    note: 'on pace',
  },
  {
    metric: 'Conversion',
    lastWeek: '10.83%',
    thisPeriod: '10.17%',
    movement: '−0.66pp',
    dir: 'neutral',
    note: null,
  },
  {
    metric: 'CPA',
    lastWeek: '$105.85',
    thisPeriod: '$109.67',
    movement: '+$3.82',
    dir: 'neutral',
    note: null,
  },
]

// Tells analysis:
// Enrolled (1 — Jerry Heath): discovered C-SNP upgrade / give-back opportunity,
//   reframed pain point to the plan benefit, DST SEP executed confidently,
//   maintained rapport across 32-min call
// Lost (2 — Deborah, Ahmad): math stopped at monthly figure (no annualization),
//   surrendered at first obstacle without a close attempt,
//   Client Gold (Ozempic, hotel story) heard and dropped

const patterns = [
  {
    column: 'chronic' as const,
    title: 'Call surrendered at first obstacle',
    rc: 'RC1',
    urgency: 'critical' as const,
    summary: 'On both missed calls, the consumer offered a soft exit at the first unresolved obstacle — and you accepted it without a single reframe or close attempt.',
    fix: 'Instead: "Let me fix that for you right now while I have you on the line." Offer the in-call solution before accepting any exit.',
  },
  {
    column: 'chronic' as const,
    title: 'Math stops at the monthly number',
    rc: 'RC3',
    urgency: 'critical' as const,
    summary: 'Every dollar figure you present gets stated once as a monthly amount and dropped. The annual number — the one that makes people act — never gets said.',
    fix: 'Instead: After every monthly figure, say the year out loud. "$184.70 a month — that\'s $2,216 going back to you every year."',
  },
  {
    column: 'emerging' as const,
    title: 'Client Gold acknowledged, then dropped',
    rc: 'RC2',
    urgency: 'high' as const,
    summary: 'Ozempic struggle (Deborah), SS check cut in half (Jerry — leveraged), hotel access story (Ahmad) — the most powerful signals get heard and passed by.',
    fix: 'Instead: Stop on the pain. "Hold on — tell me more about that." Then anchor the entire plan comparison to what they just told you.',
  },
  {
    column: 'emerging' as const,
    title: 'C-SNP upgrade found — HMO reframe missing',
    rc: 'RC2',
    urgency: 'high' as const,
    summary: 'Ahmad had a real HMO objection rooted in genuine trauma. You found the right plan and never explained how the C-SNP care coordinator addresses the exact thing that hurt him.',
    fix: 'Instead: "The plan I\'m looking at assigns you a nurse coordinator for your heart and diabetes. Their job is to handle your referrals before you ever leave the house. That\'s the difference."',
  },
  {
    column: 'resolved' as const,
    title: 'SS give-back framing',
    rc: 'RC3',
    urgency: 'medium' as const,
    summary: 'Jerry: you translated $184.70 as money back on his SS check from the moment he told you it was cut from $900 to $600. That\'s the right read.',
    fix: 'Keep this up. The frame is: recover the loss, not gain something new.',
  },
]

const pastReports = [
  {
    title: 'Weekly Brief — April 13–17, 2026',
    type: 'Weekly Brief',
    date: 'Apr 20, 2026',
    score: '64 avg',
    calls: '6 calls · 1 enrolled',
    active: false,
  },
  {
    title: 'Mid-Week Report — April 20–22, 2026',
    type: 'Mid-Week Report',
    date: 'Apr 22, 2026',
    score: '54 avg',
    calls: '3 calls · 1 enrolled',
    active: true,
  },
]

// ── Helpers ─────────────────────────────────────────────────────────────────

function outcomeClass(outcome: string) {
  if (outcome === 'ENROLLED') return styles.pillEnrolled
  if (outcome === 'MISSED OPPORTUNITY') return styles.pillMissed
  if (outcome === 'INCOMPLETE') return styles.pillIncomplete
  if (outcome === 'CORRECT NO-SALE') return styles.pillNeutral
  return styles.pillNeutral
}

function scoreColor(score: number) {
  if (score >= 75) return 'var(--sage-dark)'
  if (score >= 55) return 'var(--mustard-dark)'
  return 'var(--terracotta)'
}

export default function LawrenceMorrisPage() {
  const [callsOpen, setCallsOpen] = useState(true)

  return (
    <PageShell signal="green">
      <div className={styles.page}>

        {/* ── Header ── */}
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Mid-Week Report</span>
          </div>
          <h1 className={styles.agentName}>Lawrence Morris</h1>
          <p className={styles.period}>Week of April 20–22, 2026</p>
          <p className={styles.updatedAt}>Updated April 22 · 3 calls reviewed</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(54) }}>54</span>
            <span className={styles.scoreLabel}>Period Average</span>
            <span className={styles.scoreRange}>Apr 20–21 · 3 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>6</span>
            <span className={styles.scoreLabel}>Sales This Period</span>
            <span className={styles.scoreRange}>2-day pace · 44 billable</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>1</span>
            <span className={styles.scoreLabel}>Enrolled</span>
            <span className={styles.scoreRange}>2 Missed Opp · 0 No-Sale</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>RC1</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>No close attempted × 2</span>
          </div>
        </motion.div>

        {/* ── Trend Snapshot ── */}
        <motion.div className={`${styles.section} ${styles.trendSnapshot}`} {...SPRING}>
          <h2 className={styles.sectionTitle}>Trend Snapshot</h2>
          <div className={styles.trendTable}>
            <div className={styles.trendHeader}>
              <span>Metric</span>
              <span>Last Week (Apr 13–17)</span>
              <span>This Period (Apr 20–21)</span>
              <span>Movement</span>
            </div>
            {trendRows.map((row) => (
              <div key={row.metric} className={styles.trendRow}>
                <span className={styles.trendMetricLabel}>{row.metric}</span>
                <span className={styles.trendValue}>{row.lastWeek}</span>
                <span className={styles.trendValueBold}>{row.thisPeriod}</span>
                <span className={`${styles.trendDelta} ${
                  (row.dir as string) === 'up' ? styles.trendUp :
                  (row.dir as string) === 'down' ? styles.trendDown :
                  styles.trendNeutral
                }`}>
                  {row.movement}
                  {row.note && <span className={styles.trendNote}> · {row.note}</span>}
                </span>
              </div>
            ))}
          </div>
          <p className={styles.trendContext}>6 sales in 2 days puts you on pace for the week. Conversion and CPA are essentially flat versus last week — you&rsquo;re holding your rate. The adjustment that moves you above 10% is in how you close the calls you&rsquo;re already reaching the decision point on.</p>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>You found the right plan on two of these three calls and never asked for the sale. Deborah had a $2,340/year upgrade sitting right in front of her. Ahmad had a $195/month grocery card available because of his heart condition — something he&rsquo;d been told didn&rsquo;t exist for someone like him. Both calls ended with the consumer walking away without an enrollment ask. The one adjustment: when you hit an obstacle, offer to solve it in-call instead of accepting the exit. &ldquo;Let me call Dr. Hogan&rsquo;s office right now while I have you on the line.&rdquo; That two-minute hold is the difference between a missed call and an enrolled one.</p>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p><strong>What&rsquo;s working:</strong> The Jerry Heath call is the model. You identified a give-back opportunity for someone coming off a grocery card inquiry, connected it to his real pain (SS check cut from $900 to $600), executed the DST SEP with authority, and closed a 32-minute call cleanly with enrollment code in hand. The SS check framing — &ldquo;we&rsquo;re putting money back on your check&rdquo; — was exactly right. You held that frame from the moment he told you about the deduction all the way through the confirmation. That&rsquo;s what a controlled close looks like. You also found C-SNP pathways on both missed calls — that&rsquo;s product knowledge most agents don&rsquo;t have.</p>
            <p><strong>What&rsquo;s costing you:</strong> Two things repeat across every missed call. First: the math stops at the monthly number. Deborah&rsquo;s upgrade was worth $2,340 a year — you never said that number. Ahmad&rsquo;s C-SNP cut his max out-of-pocket by $3,400 annually — never stated. The monthly figure floats. The annual figure lands. Say the year number every time before you move on. Second: when an obstacle appears, you announce it instead of solving it. On Deborah&rsquo;s call you told her Dr. Hogan might not be in the Devoted network and waited. The right move was to offer to call the office on the spot. On Ahmad&rsquo;s call the HMO objection was real — but the C-SNP care coordinator is specifically designed to solve the exact thing that hurt him, and you never made that connection.</p>
          </div>
        </motion.div>

        {/* ── Your Tells ── */}
        <motion.div className={`${styles.section} ${styles.yourTells}`} {...SPRING}>
          <h2 className={styles.sectionTitle}>Your Tells</h2>
          <div className={styles.tellsGrid}>
            <div className={styles.tellsBlock}>
              <p className={styles.tellsBlockHeader}>On calls you <strong>closed</strong> (1)</p>
              <ul className={styles.tellsList}>
                <li>Translated consumer&rsquo;s pain to plan benefit immediately — no delay between the signal and the pivot</li>
                <li>Held a single frame (&ldquo;money back on your check&rdquo;) from discovery through close</li>
                <li>Used SEP pathway confidently and moved forward without overselling it</li>
                <li>Maintained rapport through a 32-minute compliance-heavy call without losing the consumer</li>
              </ul>
            </div>
            <div className={styles.tellsBlock}>
              <p className={styles.tellsBlockHeader}>On calls you <strong>lost</strong> (2)</p>
              <ul className={styles.tellsList}>
                <li>Math presented as a monthly figure and moved on — annual impact never stated</li>
                <li>Obstacle announced to the consumer before a solution was offered</li>
                <li>Client Gold signal heard, acknowledged (&ldquo;we&rsquo;ll get to that in a second&rdquo;), then never returned to</li>
                <li>Consumer offered a soft exit — call ended there with no close attempt</li>
              </ul>
            </div>
          </div>
          <div className={styles.tellsDelta}>
            <p><strong>The delta:</strong> On the call you closed, you found the consumer&rsquo;s real pain and stayed locked on it. On the calls you lost, you found the obstacle and stayed locked on that instead.</p>
            <p><strong>The rule:</strong> When you hit an obstacle, solve it in-call or reframe it before the consumer has a chance to use it as an exit. The close window stays open as long as you keep offering a path forward.</p>
          </div>
        </motion.div>

        {/* ── Patterns ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Patterns — Chronic · Emerging · Resolved</h2>
          <div className={styles.patternsGrid}>
            {/* Chronic */}
            <div className={styles.patternColumn}>
              <div className={styles.patternColumnHeader}>
                <span className={`${styles.urgencyBadge} ${styles.badge_critical}`}>Chronic</span>
              </div>
              {patterns.filter(p => p.column === 'chronic').map((p, i) => (
                <div key={i} className={`${styles.patternCard} ${styles[`priority_${p.urgency}`]}`}>
                  <div className={styles.priorityHeader}>
                    <span className={styles.rcCode}>{p.rc}</span>
                  </div>
                  <p className={styles.priorityTitle}>{p.title}</p>
                  <p className={styles.priorityDetail}>{p.summary}</p>
                  <div className={styles.priorityMove}>
                    <p className={styles.priorityMoveText}>{p.fix}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Emerging */}
            <div className={styles.patternColumn}>
              <div className={styles.patternColumnHeader}>
                <span className={`${styles.urgencyBadge} ${styles.badge_high}`}>Emerging</span>
              </div>
              {patterns.filter(p => p.column === 'emerging').map((p, i) => (
                <div key={i} className={`${styles.patternCard} ${styles[`priority_${p.urgency}`]}`}>
                  <div className={styles.priorityHeader}>
                    <span className={styles.rcCode}>{p.rc}</span>
                  </div>
                  <p className={styles.priorityTitle}>{p.title}</p>
                  <p className={styles.priorityDetail}>{p.summary}</p>
                  <div className={styles.priorityMove}>
                    <p className={styles.priorityMoveText}>{p.fix}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Resolved */}
            <div className={styles.patternColumn}>
              <div className={styles.patternColumnHeader}>
                <span className={`${styles.urgencyBadge} ${styles.badge_medium}`}>Resolved</span>
              </div>
              {patterns.filter(p => p.column === 'resolved').map((p, i) => (
                <div key={i} className={`${styles.patternCard} ${styles[`priority_${p.urgency}`]}`}>
                  <div className={styles.priorityHeader}>
                    <span className={styles.rcCode}>{p.rc}</span>
                  </div>
                  <p className={styles.priorityTitle}>{p.title}</p>
                  <p className={styles.priorityDetail}>{p.summary}</p>
                  <div className={styles.priorityMove}>
                    <p className={styles.priorityMoveText}>{p.fix}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Calls (collapsible) ── */}
        <motion.div className={styles.section} {...SPRING}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '20px', paddingBottom: '12px', borderBottom: 'var(--rule-lt)' }}>
            <h2 className={styles.sectionTitle} style={{ margin: 0, padding: 0, border: 'none' }}>This Period&rsquo;s Calls</h2>
            <button
              className={styles.collapsibleCallsToggle}
              onClick={() => setCallsOpen(prev => !prev)}
              aria-expanded={callsOpen}
            >
              {callsOpen ? 'Hide calls' : 'Show calls'}
            </button>
          </div>

          {callsOpen && (
            <>
              {callsByDate.map((group) => (
                <div key={group.date} style={{ marginBottom: '1.5rem' }}>
                  <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)', marginBottom: '0.5rem' }}>
                    {group.date}
                  </p>
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
                          <Link href={call.href} style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'var(--ink-20)', textUnderlineOffset: '3px' }}>
                            {call.consumer}
                          </Link>
                        </span>
                        <span className={styles.callMeta}>{call.duration}</span>
                        <span className={styles.callScore} style={{ color: scoreColor(call.score) }}>{call.score}</span>
                        <span className={styles.outcomeCell}>
                          <span className={`${styles.pill} ${outcomeClass(call.outcome)}`}>{call.outcome}</span>
                          {call.outcomeNote && <span className={styles.outcomeNote}>{call.outcomeNote}</span>}
                        </span>
                        <span className={styles.callType}>{call.type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className={styles.callTableFooter}>
                <span>Period Average: <strong>54 / 100</strong></span>
                <span>Enrolled: <strong>1 of 3</strong></span>
              </div>
            </>
          )}
        </motion.div>

        {/* ── Report History ── */}
        <motion.div className={`${styles.section} ${styles.reportHistory}`} {...SPRING}>
          <h2 className={styles.sectionTitle}>Report History</h2>
          <div className={styles.reportList}>
            {pastReports.map((r, i) => (
              <div key={i} className={`${styles.reportHistoryEntry} ${r.active ? styles.reportActive : ''}`}>
                <div className={styles.reportLeft}>
                  <span className={styles.reportType}>{r.type}</span>
                  <span className={styles.reportTitle}>{r.title}</span>
                </div>
                <div className={styles.reportRight}>
                  <span className={styles.reportScore}>{r.score}</span>
                  <span className={styles.reportDate}>{r.calls}</span>
                  <span className={styles.reportDate}>{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Lawrence Morris · Week of April 20–22, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC2 · RC3 · C-SNP · DST SEP · Annualization · Jerry Heath: Enrolled · Deborah Roost: Missed Opp · Ahmad Najem: Missed Opp</p>
        </div>

      </div>
    </PageShell>
  )
}
