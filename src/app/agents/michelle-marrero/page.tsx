'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Weekly Brief: April 13–17, 2026 ─────────────────────────────────────────

const callsByDate = [
  {
    date: 'Tuesday, April 14',
    calls: [
      { consumer: 'Regina DePaiva', duration: '36:36', score: 47, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Voice Signature Confusion — No Recovery', href: '/agents/michelle-marrero/calls/regina-depaiva' },
      { consumer: 'Unknown Consumer', duration: '3:33', score: 55, outcome: 'INCOMPLETE', outcomeNote: 'Consumer disconnected', type: 'Dual-Eligible — Phone Died Before MBI', href: '/agents/michelle-marrero/calls/unknown-consumer-3m33s' },
    ],
  },
  {
    date: 'Wednesday, April 15',
    calls: [
      { consumer: 'John Pettipas', duration: '47:13', score: 68, outcome: 'INCOMPLETE', outcomeNote: 'Presentation started — not completed', type: 'Enrollment Agreement Reached — Lost on Hold', href: '/agents/michelle-marrero/calls/john-pettipas' },
      { consumer: 'John Petipas (reconnect)', duration: '20:06', score: 40, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Giveback Gap — Math Never Run', href: '/agents/michelle-marrero/calls/john-petipas' },
      { consumer: 'Michelle Sedita', duration: '3:38', score: 38, outcome: 'INCOMPLETE', outcomeNote: 'Discovery done — close not attempted', type: 'SSN Refused — No Reframe, No Anchor', href: '/agents/michelle-marrero/calls/michelle-sedita' },
    ],
  },
]

const patterns = [
  {
    title: 'Never name a disaster SEP to a consumer',
    rc: 'RC4',
    urgency: 'critical' as const,
    body: 'Disaster SEPs are a CMS-authorized enrollment tool that agents may use internally. They are not something agents explain to consumers, name on calls, or invoke by referencing weather events or emergencies. The moment you name the SEP type or explain its basis to a consumer, you have a compliance violation. This is not a gray area. If you use DST, process it silently — the consumer does not need to know what it is or why it applies.',
    rule: 'If you ever use DST: say one sentence and nothing more. Never name the SEP type. Never say "disaster." Never explain the basis.',
    callRef: 'On the John Petipas reconnect call, you named the DST SEP to John and explained that it was a weather emergency basis. That conversation is the violation.',
    moveLabel: 'The only acceptable DST script:',
    move: '"We\'re processing your enrollment under a Special Enrollment Period that applies to your situation." That\'s it. Move directly to enrollment.',
  },
  {
    title: 'When someone says they\'re losing money — show them the math',
    rc: 'RC3',
    urgency: 'high' as const,
    body: 'When a consumer raises a financial objection, empathy is not a close. Acknowledging the concern three times without running the numbers isn\'t handling the objection — it\'s avoiding it. The math was available on the John Petipas reconnect call. Specialist copay, urgent care, MOOP reduction. Any one of those numbers would have given John something concrete to evaluate instead of a feeling about what he was losing.',
    rule: null,
    callRef: 'John Petipas raised the $85/month giveback concern three times across the reconnect call. Each time the response was empathy. The comparison math was never run.',
    moveLabel: 'When the giveback objection comes:',
    move: '"John, give me 60 seconds. That $85 is real. But look at what this plan costs you: specialist visits are $35, urgent care is $50. One visit a month and you\'re already ahead. Can we spend one minute on the numbers before you decide?"',
  },
  {
    title: 'The same objection acknowledged three times is a surrender',
    rc: 'RC1',
    urgency: 'high' as const,
    body: 'The first time you acknowledge an objection, you earn goodwill. The second time, you signal you heard it. The third time, without a counter, you\'ve accepted it as true. Each acknowledgment without a number or a question is a step toward the door. After the second acknowledgment on a financial objection, the only move is to run the math or ask a diagnostic question that reframes the stakes.',
    rule: null,
    callRef: 'John Petipas raised the giveback concern at 15:35, again at 16:43, and again at 17:15. Three acknowledgments. No numbers. No reframe. The call ended on his terms.',
    moveLabel: 'After the second acknowledgment:',
    move: '"John, I hear that. Before we stop, give me 60 seconds to show you the actual numbers. If the math doesn\'t work for you, I will completely respect that. Fair?" Then run it.',
  },
]

const pastReports = [
  {
    title: 'Weekly Brief — April 14 (Tue only)',
    type: 'Weekly Brief',
    date: 'Apr 15, 2026',
    score: '44 / 100',
    active: false,
  },
  {
    title: 'Weekly Brief — April 13–17',
    type: 'Weekly Brief',
    date: 'Apr 16, 2026',
    score: '50 / 100',
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

export default function MichelleMarreroPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>

        {/* ── Header ── */}
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Weekly Brief</span>
          </div>
          <h1 className={styles.agentName}>Michelle Marrero</h1>
          <p className={styles.period}>Week of April 13–17, 2026</p>
          <p className={styles.updatedAt}>Updated April 16 · 5 calls reviewed (Tue–Wed)</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(50) }}>50</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>Tue–Wed · 5 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>5</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 14–15, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>2</span>
            <span className={styles.scoreLabel}>Missed Opportunities</span>
            <span className={styles.scoreRange}>3 Incomplete · 0 Enrolled</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>RC4</span>
            <span className={styles.scoreLabel}>Critical Flag</span>
            <span className={styles.scoreRange}>DST disclosed to consumer</span>
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p>These are five calls from Tuesday and Wednesday — two missed opportunities and three incompletes. The John Pettipas call came the closest: 47 minutes, enrollment agreement reached, doctor confirmed in-network. What we&apos;re working through is what happened in the moments that broke the close and what comes off the script permanently starting now.</p>
            <p><strong>What&apos;s working:</strong> your discovery and verification work is thorough. On the John Pettipas call, you stopped selling when John said his doctor wasn&apos;t covered and looked it up before pitching — and he came back in-network. That move turned a deal-breaker into a deal-maker. You also went above and beyond: researching local wellness options for his arthritis and committing to being his agent for the life of the policy. That relationship-building is real and it matters. On Regina DePaiva, you were in control of a 36-minute call — C-SNP identified, all three doctors verified, formulary handled honestly. The work on both calls was strong.</p>
            <p><strong>What&apos;s costing you:</strong> one thing needs to come out of your script today — naming disaster SEPs to consumers. That&apos;s a CMS violation and it happened on the reconnect call. Beyond that: John Petipas raised the $85 giveback concern three times and each time you acknowledged it without running the math. Empathy is not a close. The numbers were there. Use them.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When someone tells you they&apos;re scared of losing money, don&apos;t say &ldquo;I hear you&rdquo; — show them the math. The numbers were there on every call this week. Use them.</p>
        </motion.div>

        {/* ── This Week's Calls ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>This Week&apos;s Calls</h2>
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
            <span>Week Average: <strong>50 / 100</strong></span>
            <span>Enrolled: <strong>0 of 5</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>John Pettipas was your best call of the week.</strong> When John said his doctor wasn&apos;t covered, you stopped selling and started verifying. You looked up Dr. Charles Mitchell before pitching and he came back in-network. That one move turned a deal-breaker into a deal-maker. You confirmed all his medications at $0, researched local wellness options for his arthritis, and got a clear enrollment agreement at 35:46. You earned that agreement — the right behavioral moves were all there.</p>
            <p><strong>Regina DePaiva — 36 minutes of correct diagnostic work.</strong> C-SNP opportunity identified right away, all three doctors verified, formulary exception for Entresto and Plavix handled honestly with the consumer. You kept a time-pressured consumer on the phone and in a trusting conversation. The call was yours entering the close. One recovery script at the voice signature confirmation would have closed it.</p>
          </div>
        </motion.div>

        {/* ── Patterns ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Patterns This Week</h2>
          <div className={styles.priorityList}>
            {patterns.map((p, i) => (
              <div key={i} className={`${styles.priorityCard} ${styles[`priority_${p.urgency}`]}`}>
                <div className={styles.priorityHeader}>
                  <span className={`${styles.urgencyBadge} ${styles[`badge_${p.urgency}`]}`}>
                    {p.urgency === 'critical' ? 'CRITICAL' : p.urgency === 'high' ? 'HIGH PRIORITY' : 'OPPORTUNITY'}
                  </span>
                  <span className={styles.rcCode}>{p.rc}</span>
                </div>
                <p className={styles.priorityTitle}>{p.title}</p>
                <p className={styles.priorityDetail}>{p.body}</p>
                {p.rule && <p className={styles.priorityRule}>{p.rule}</p>}
                <p className={styles.priorityCallRef}>{p.callRef}</p>
                <div className={styles.priorityMove}>
                  <span className={styles.priorityMoveLabel}>{p.moveLabel}</span>
                  <p className={styles.priorityMoveText}>{p.move}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── What to Work On ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What to Work On</h2>
          <div className={styles.workOnList}>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>01</span>
              <div>
                <p className={styles.workOnTitle}>Stop using the word &ldquo;disaster&rdquo; on calls — fix this today</p>
                <p className={styles.workOnDetail}>You named the DST SEP basis to John Petipas and explained it. That is a CMS violation. If you are using a disaster SEP to open an enrollment window, say: &ldquo;We are processing your enrollment under a Special Enrollment Period that applies to your situation.&rdquo; Nothing more. This needs to come out of your script immediately.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>Run the math before you accept a no</p>
                <p className={styles.workOnDetail}>John Petipas said no three times and you accepted it each time. After the second, pull out numbers: &ldquo;Give me 60 seconds. Your specialist visits are $35. Urgent care is $50. One visit a month and you cover the $85. Can we look at that together before you decide?&rdquo; Empathy is not a close. Math is a close.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>Finish the compliance close before any value-add work</p>
                <p className={styles.workOnDetail}>John Pettipas gave you enrollment agreement at 35:46. The next 8 minutes went to gym research and wellness tips. When his son called at 47:13, the voice signature wasn&apos;t done. The enrollment wasn&apos;t real yet. Always complete the plan name, disclaimers, and voice signature before any bonus activity. The value-add comes after the close, not before it.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Reports ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Reports</h2>
          <div className={styles.reportList}>
            {pastReports.map((r, i) => (
              <div key={i} className={`${styles.reportCard} ${r.active ? styles.reportActive : ''}`}>
                <div className={styles.reportLeft}>
                  <span className={styles.reportType}>{r.type}</span>
                  <span className={styles.reportTitle}>{r.title}</span>
                </div>
                <div className={styles.reportRight}>
                  <span className={styles.reportScore}>{r.score}</span>
                  <span className={styles.reportDate}>{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Michelle Marrero · Week of April 13–17, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC3 · RC4 · DST Violation · Math Surrender · Voice Signature</p>
        </div>

      </div>
    </PageShell>
  )
}
