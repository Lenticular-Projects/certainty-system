'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Weekly Brief: April 13–17, 2026 ─────────────────────────────────────────

const callsByDate = [
  {
    date: 'Monday, April 13',
    calls: [
      { consumer: 'Unknown Consumer', duration: '5:25', score: 32, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'The Money Caller', href: '/agents/alicia-moore-williams/calls/unknown-consumer-5m25s' },
      { consumer: 'Unknown Consumer', duration: '6:47', score: 26, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'The Money Caller', href: '/agents/alicia-moore-williams/calls/unknown-consumer-6m47s' },
      { consumer: 'Dennis Carroll', duration: '7:49', score: 54, outcome: 'INCOMPLETE', outcomeNote: 'Discovery done — no presentation', type: 'Discovery Complete — No Presentation', href: '/agents/alicia-moore-williams/calls/dennis-carroll' },
    ],
  },
  {
    date: 'Tuesday, April 14',
    calls: [
      { consumer: 'Annie Bellamy', duration: '13:04', score: 52, outcome: 'INCOMPLETE', outcomeNote: 'Stuck in research — never transitioned', type: 'Research Phase — Never Exited', href: '/agents/alicia-moore-williams/calls/annie-l-bellamy' },
      { consumer: 'Carol Kissinger', duration: '16:59', score: 52, outcome: 'INCOMPLETE', outcomeNote: 'Discovery done — close not attempted', type: 'Discovery Done — Close Not Attempted', href: '/agents/alicia-moore-williams/calls/carol-lynn-kissinger' },
      { consumer: 'Lenny Thompson', duration: '28:31', score: 64, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'Brand-Loyal UHC — Correct No-Sale', href: '/agents/alicia-moore-williams/calls/lenny-a-thompson' },
      { consumer: 'Unknown Consumer', duration: '6:11', score: 28, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Food Card — No Anchor, No Close', href: '/agents/alicia-moore-williams/calls/unknown-consumer-6m11s' },
    ],
  },
]

const patterns = [
  {
    title: 'First objection = the call you stopped fighting for',
    rc: 'RC1',
    urgency: 'critical' as const,
    body: 'Every objection a consumer gives you before they\'ve heard a dollar figure is a question disguised as a no. "What if I choose not to?" isn\'t a decision — she hasn\'t heard the plan yet. "Someone already checked" isn\'t a closed door — she doesn\'t know what they found or if anything changed. When you offer a callback at that moment, you\'re treating a question like a verdict.',
    rule: 'If they haven\'t heard a number, the objection isn\'t real yet. One question gets a number into the conversation before you decide the call is over.',
    callRef: 'On a Monday call, an Unknown Consumer said "I had somebody check already" — and the call ended. She called about a grocery benefit. She never heard what the plan actually pays.',
    moveLabel: 'Ask what they know, then give them something they don\'t.',
    move: '"What did they find? I want to make sure you\'re seeing the most current options — plans in your area changed this year and I\'m looking at $150 a month for groceries right now. Give me two minutes."',
  },
  {
    title: 'The open door you walked past',
    rc: 'RC2',
    urgency: 'high' as const,
    body: 'When a consumer asks "Do I get more money on my card?" — that\'s not a question to acknowledge and move on from. That\'s the close. They\'re telling you they\'d switch if the answer is yes. The move at that exact moment is to confirm the number and pivot to enrollment — not to keep presenting as if they didn\'t just give you permission to close.',
    rule: null,
    callRef: 'On a Monday call, an Unknown Consumer asked exactly that. The answer was yes — $150 a month. She never heard it.',
    moveLabel: 'Answer it, state the number, go directly to the card.',
    move: '"Yes — $150 a month for groceries on this plan. That\'s what we can lock in today. Let me grab your Medicare card and we\'ll get it done."',
  },
  {
    title: 'Discovery done — nothing offered',
    rc: 'RC3',
    urgency: 'medium' as const,
    body: 'Discovery is how you earn the right to present, not the destination. On three calls this week, you had ZIP, situation, and benefit interest confirmed — and the call stalled there. When the consumer hasn\'t heard a plan name or a dollar figure, they have no decision in front of them. You can\'t close what you haven\'t offered.',
    rule: null,
    callRef: 'This happened on calls with Dennis Carroll, Annie Bellamy, and Carol Kissinger. All three had complete discovery. None of the three heard a plan presented.',
    moveLabel: 'ZIP and situation confirmed = cue to present, not to keep gathering.',
    move: '"Based on what you\'ve told me, I\'m looking at a plan with $150 a month for groceries. Let me confirm your doctors are covered and we can talk about getting this started today."',
  },
]

const pastReports = [
  { title: 'Weekly Brief — April 13–14', type: 'Weekly Brief', date: 'Apr 16, 2026', score: '44 / 100', active: true },
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

export default function AliciaMooreWilliamsPage() {
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
          <h1 className={styles.agentName}>Alicia Moore Williams</h1>
          <p className={styles.period}>Week of April 13–17, 2026</p>
          <p className={styles.updatedAt}>Updated April 16 · 7 calls reviewed (Mon–Tue)</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(44) }}>44</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>Mon–Tue · 7 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>7</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 13–14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>1</span>
            <span className={styles.scoreLabel}>Correct No-Sale</span>
            <span className={styles.scoreRange}>3 Missed · 3 Incomplete</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)' }}>RC1</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Exits before the offer</span>
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p>These are the calls we pulled this week where the conversation was fully alive — the consumer was engaged, on the line, and open. What we&apos;re working through is what happened in those moments and where it could have gone differently.</p>
            <p><strong>What&apos;s working:</strong> your consumers stay on the phone and stay open. No one shut you down in the first 30 seconds, no one got hostile. And on the Lenny Thompson call — 28 minutes in, a UHC member who had already made up his mind — you read it correctly, made the right exit, and didn&apos;t push. That judgment matters. Not every agent gets that right.</p>
            <p><strong>What&apos;s costing you:</strong> three of your calls ended with full discovery complete and no presentation made. You had the ZIP, the situation, the benefit interest confirmed — and the call stalled. Two more ended the moment a consumer pushed back — one question, one callback offer, call over. The close wasn&apos;t missed because these consumers said no. It was missed because the ask never came.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>Once you know where they live and what they&apos;re looking for — that&apos;s your cue to present. Name the plan. State the dollar amount. You can&apos;t close a call where the consumer hasn&apos;t heard the offer yet.</p>
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
            <span>Week Average: <strong>44 / 100</strong></span>
            <span>Correct No-Sales: <strong>1 of 7</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>You read the Lenny Thompson call correctly.</strong> Twenty-eight minutes in, a UHC member who had already made up his mind — you identified the wall, handled the exit cleanly, and didn&apos;t push. That&apos;s a correct no-sale, and it&apos;s the right call. Knowing when to stop is as important as knowing how to close.</p>
            <p><strong>Your consumers stay engaged.</strong> Across seven calls this week, no one hung up on you, no one got hostile, no one went defensive. Callers with food card questions and grocery benefit questions stayed on the line and let you ask questions. The trust you build in the opening is what buys you the time to do the actual work — and you&apos;re building it consistently.</p>
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
                <p className={styles.workOnTitle}>One question before any exit</p>
                <p className={styles.workOnDetail}>When a consumer pushes back, the instinct is to offer a callback. Replace that instinct with a question — about what they already know, what they found, what they&apos;re worried about. One question tells you whether the objection is real. A callback offered before a question is a lead you chose to release.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>Name the plan and state the number</p>
                <p className={styles.workOnDetail}>Discovery is the setup. The moment you have ZIP and situation, the next sentence should name a plan and a dollar amount. &ldquo;I&apos;m looking at a plan with $150 a month for groceries — let me confirm your doctors are covered.&rdquo; That sentence moves the call forward. Staying in discovery after you have what you need doesn&apos;t.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>Treat buying signals as the close</p>
                <p className={styles.workOnDetail}>When a consumer asks &ldquo;do I get more?&rdquo; or &ldquo;is there something better?&rdquo; — that&apos;s not a follow-up item. That&apos;s the open door. Confirm the answer, state the number, and ask for the Medicare card. Don&apos;t acknowledge it and move on. Use it.</p>
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
          <p>The Certainty System · Alicia Moore Williams · Week of April 13–17, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC2 · RC3 · The Money Caller · First Objection Reframe</p>
        </div>

      </div>
    </PageShell>
  )
}
