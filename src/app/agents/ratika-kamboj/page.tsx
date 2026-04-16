'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Weekly Brief: April 14–15, 2026 ─────────────────────────────────────────

const callsByDate = [
  {
    date: 'Tuesday, April 14',
    calls: [
      { consumer: 'Lavern Gray', duration: '10:48', score: 44, outcome: 'INCOMPLETE', outcomeNote: 'Discovery done — no presentation', type: 'Benefits Shopper / C-SNP Inbound', href: '/agents/ratika-kamboj/calls/lavern-gray' },
      { consumer: 'Mike Becker', duration: '3:25', score: 42, outcome: 'INCOMPLETE', outcomeNote: 'Consumer disconnected', type: 'Food Card / OTC Inbound', href: '/agents/ratika-kamboj/calls/mike-becker' },
      { consumer: 'Unknown Consumer', duration: '8:43', score: 38, outcome: 'INCOMPLETE', outcomeNote: 'Discovery done — close not attempted', type: 'Food Card / OTC Inbound — Aborted', href: '/agents/ratika-kamboj/calls/unknown-consumer-8m43s' },
    ],
  },
  {
    date: 'Wednesday, April 15',
    calls: [
      { consumer: 'Alicia Logan', duration: '9:27', score: 28, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Qualification Inquiry', href: '/agents/ratika-kamboj/calls/alicia-logan' },
    ],
  },
]

const patterns = [
  {
    title: 'Research phase ends when the data is in hand — not when the call ends',
    rc: 'RC1',
    urgency: 'critical' as const,
    body: 'Discovery is how you earn the right to present, not the destination. On three calls this week, you collected everything — current plan, current benefit amount, qualifying condition, motivated consumer — and the call stalled there. When you have the consumer\'s situation confirmed and a plan that improves it, continuing to research is not progress. It\'s delay. You can\'t close a call where the consumer hasn\'t heard the offer yet.',
    rule: 'The moment you have their current benefit amount and a plan that beats it, stop gathering and start presenting.',
    callRef: 'On the Lavern Gray call, at 9:29 you confirmed her current OTC amount. She had told you at 0:06 she was calling about a food card. You had everything. The call ended with you still in the system.',
    moveLabel: 'OTC amount confirmed — pivot immediately.',
    move: '"Ms. Gray, you\'re currently getting $91 a month on your food card. I found a plan here that gives you more, and it\'s still $0 out of pocket. Can I take two minutes to walk you through what I found?"',
  },
  {
    title: 'One ask, one acceptance, one forward move',
    rc: 'RC1',
    urgency: 'high' as const,
    body: 'When a consumer says no to a procedural ask — SSN, callback permission, Medicare number — the instinct is to re-explain or re-ask. That instinct costs you the call. The consumer who says no to a process step is not saying no to the benefit. They\'re saying no to that specific ask. Accepting it and naming your next step keeps the call alive. Re-asking reads as pressure and confirms their resistance.',
    rule: null,
    callRef: 'On the call with the Unknown Consumer, she said no to callback permission three times. After the third no, the call went silent for six minutes. She had confirmed Medicare A and B and called in about a food card.',
    moveLabel: 'Consumer declines callback permission — accept it and move forward.',
    move: '"Absolutely — no problem at all. I\'ll make sure we get everything handled for you right here on this call. What\'s your name so we can check your exact benefits right now?"',
  },
  {
    title: 'Qualify the lead before running the enrollment sequence',
    rc: 'RC6',
    urgency: 'medium' as const,
    body: 'An inbound consumer who says she\'s calling to see if she "qualifies for Medicare" may not have Medicare yet. And when a consumer mentions Medicaid in the first 30 seconds, that\'s a D-SNP signal — a year-round enrollment window that doesn\'t require October. Running a standard enrollment sequence without confirming those two things wastes both your time and theirs.',
    rule: null,
    callRef: 'Alicia Logan opened at 0:14 with "I\'m calling to see if I\'m qualified for Medicare and Medicaid." The Medicaid mention was a D-SNP signal. Neither question was asked before the full enrollment sequence began.',
    moveLabel: 'Consumer mentions Medicare and Medicaid — qualify before you sequence.',
    move: '"Alicia, that\'s exactly why you called the right place. First — do you currently have a Medicare card, a red, white, and blue card? Or is this your first time getting Medicare?"',
  },
]

const pastReports = [
  { title: 'Weekly Brief — April 14–15', type: 'Weekly Brief', date: 'Apr 16, 2026', score: '38 / 100', active: true },
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

export default function RatikaKambojPage() {
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
          <h1 className={styles.agentName}>Ratika Kamboj</h1>
          <p className={styles.period}>Week of April 13–17, 2026</p>
          <p className={styles.updatedAt}>Updated April 16 · 4 calls reviewed (Tue–Wed)</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(38) }}>38</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>Tue–Wed · 4 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>4</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 14–15, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>0</span>
            <span className={styles.scoreLabel}>Enrolled</span>
            <span className={styles.scoreRange}>3 Incomplete · 1 Missed Opp</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>RC1</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Discovery done — offer never made</span>
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p>These are the calls we pulled this week where the conversation was fully alive — inbound consumers who called in for a benefit and stayed on the line with you. What we&apos;re working through is what happened in the moments after discovery was complete and where the call could have gone differently.</p>
            <p><strong>What&apos;s working:</strong> on every call where a consumer gave you short answers, interrupted, or pushed back on a procedural ask, you recovered and kept moving without losing your footing. When Mike Becker didn&apos;t have his Medicare card, you moved to name and date of birth without breaking stride. When the Unknown Consumer jumped in mid-read, you finished and kept going. That composure in the opening is what makes the rest of the call possible.</p>
            <p><strong>What&apos;s costing you:</strong> three of your four calls ended with full discovery complete and no presentation made. You had the data — current plan, current benefit amount, motivated consumer on the line — and the call stalled in the research phase. The offer never came. The fourth call ran a full enrollment sequence on a consumer who may not have had Medicare yet. The pivot from discovery to presentation is the one move this week is about.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>You do the hardest part of the job &mdash; you get in the system, you find the number, you confirm the match. The move that converts more of those calls is a clean pivot the moment the data lands: &ldquo;I found something &mdash; let me walk you through it.&rdquo; Confirmed data straight to the offer, no extra loop. You already have everything you need. Start presenting.</p>
        </motion.div>

        {/* ── This Week&apos;s Calls ── */}
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
            <span>Week Average: <strong>38 / 100</strong></span>
            <span>Enrolled: <strong>0 of 4</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>The best instinct of your week showed up in the first 20 seconds of the Lavern Gray call. You anchored the opening directly to the reason she called: &ldquo;While looking for your food card benefits, our discussion may include Medicare Advantage plans. Is it okay if we discuss this today?&rdquo; That framing tells her why she&apos;s on the line before anything else happens. The opening felt like a service, not a form. Lavern stayed cooperative through all of discovery because of how that first exchange landed. That kind of opening is rare and it&apos;s yours.</p>
            <p>Your recoveries under friction were consistent all week. When Mike Becker didn&apos;t have his Medicare card, you moved to name and date of birth without breaking stride. When the Unknown Consumer jumped in mid-compliance read, you finished the disclosure and kept moving. When Alicia Logan couldn&apos;t produce a Medicare number, you tried multiple lookup paths before reaching a dead end. The persistence in the discovery phase was right — the only thing that needed fixing was what came after it.</p>
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
                <p className={styles.workOnTitle}>Make the offer when you have the data</p>
                <p className={styles.workOnDetail}>On the Lavern Gray call, you had everything by 9:29 — current plan, current OTC amount, qualifying condition, cooperative consumer. The pivot language: &ldquo;I found something. Can I take two minutes to walk you through what I found?&rdquo; Practice saying that out loud so it fires automatically when the data lands.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>Accept the first no on procedural asks and name your next step</p>
                <p className={styles.workOnDetail}>When a consumer refuses SSN or callback permission, say &ldquo;Not a problem&rdquo; and immediately name what you&apos;re doing next. &ldquo;Not a problem — let me make sure I get everything handled for you right here. What&apos;s your name?&rdquo; One ask. One acceptance. One forward move. Never re-ask.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>Qualify Medicare status before running the enrollment sequence</p>
                <p className={styles.workOnDetail}>For any inbound call where Medicare status is unclear, the first question is: &ldquo;Do you currently have a Medicare card — the red, white, and blue one?&rdquo; Five seconds at the start saves nine minutes of going nowhere. And when Medicaid comes up, ask directly: &ldquo;Are you currently receiving Medicaid from the state?&rdquo; That opens a year-round enrollment window you can walk through on the same call.</p>
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
          <p>The Certainty System · Ratika Kamboj · Week of April 13–17, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC6 · Lead Qualification · D-SNP · INT SEP · Pivot to Presentation</p>
        </div>

      </div>
    </PageShell>
  )
}
