'use client'

import { useState } from 'react'
import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Weekly Brief: April 13–17, 2026 ─────────────────────────────────────────
// Scores: Dennis Carroll 54, Francis Wardlaw 72, Lamar Bull 68,
//         Unknown 5m25s 32, Unknown 6m47s 26,
//         Annie Bellamy 52, Carol Kissinger 52, Lenny Thompson 64,
//         Unknown 6m11s 28, Katherine Curtis 38, Malika Muhammad 55
//         Joseph Rinaldi (Apr 17) 36 — no JSON, from brief data
// Avg of 12 scored calls: (54+72+68+32+26+52+52+64+28+38+55+36) / 12 = 577/12 ≈ 48

const callsByDate = [
  {
    date: 'Monday, April 13',
    calls: [
      { consumer: 'Unknown Consumer', duration: '5:25', score: 32, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'The Money Caller', href: '/agents/alicia-moore-williams/calls/unknown-consumer-5m25s' },
      { consumer: 'Unknown Consumer', duration: '6:47', score: 26, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'The Money Caller', href: '/agents/alicia-moore-williams/calls/unknown-consumer-6m47s' },
      { consumer: 'Dennis Carroll', duration: '7:49', score: 54, outcome: 'INCOMPLETE', outcomeNote: 'Discovery done — SEP missed, no presentation', type: 'The OTC Card Caller', href: '/agents/alicia-moore-williams/calls/dennis-carroll' },
      { consumer: 'Francis Wardlaw', duration: '60:00', score: 72, outcome: 'ENROLLED', outcomeNote: null, type: 'D-SNP Correction', href: '#' },
      { consumer: 'Lamar Bull', duration: '66:00', score: 68, outcome: 'ENROLLED', outcomeNote: null, type: 'D-SNP Correction', href: '#' },
    ],
  },
  {
    date: 'Tuesday, April 14',
    calls: [
      { consumer: 'Annie Bellamy', duration: '13:04', score: 52, outcome: 'INCOMPLETE', outcomeNote: 'SEP missed — never transitioned to presentation', type: 'The OTC Card Caller', href: '/agents/alicia-moore-williams/calls/annie-l-bellamy' },
      { consumer: 'Carol Lynn Kissinger', duration: '16:59', score: 52, outcome: 'INCOMPLETE', outcomeNote: 'Discovery done — close not attempted', type: 'The Money Caller', href: '/agents/alicia-moore-williams/calls/carol-lynn-kissinger' },
      { consumer: 'Lenny Thompson', duration: '28:31', score: 64, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'The Money Caller', href: '/agents/alicia-moore-williams/calls/lenny-a-thompson' },
      { consumer: 'Unknown Consumer', duration: '6:11', score: 28, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'The Money Caller', href: '/agents/alicia-moore-williams/calls/unknown-consumer-6m11s' },
      { consumer: 'Unknown/Voicemail', duration: '4:49', score: 0, outcome: 'INCOMPLETE', outcomeNote: 'No live contact — voicemail', type: 'No Contact', href: '#' },
    ],
  },
  {
    date: 'Wednesday, April 15',
    calls: [
      { consumer: 'Katherine Curtis', duration: '60:00', score: 38, outcome: 'MISSED OPPORTUNITY', outcomeNote: 'Aetna objection surrendered — 60 min with no enrollment', type: 'The Chronic Caller', href: '#' },
      { consumer: 'Malika Muhammad', duration: '—', score: 55, outcome: 'CORRECT NO-SALE', outcomeNote: 'No Medicare credentials — correct no-sale', type: 'Missing Credentials', href: '#' },
    ],
  },
  {
    date: 'Thursday, April 17',
    calls: [
      { consumer: 'Joseph Rinaldi', duration: '40:15', score: 36, outcome: 'MISSED OPPORTUNITY', outcomeNote: 'Extended call — no close attempt made', type: 'The Money Caller', href: '#' },
    ],
  },
]

const patterns = [
  {
    title: 'Objection on a call that never had a number — that is not a real objection yet',
    rc: 'RC1',
    urgency: 'critical' as const,
    body: 'Three calls this week ended the moment a consumer pushed back — before they had heard a plan name or a dollar figure. When you offer a callback at the first sign of friction, you are treating a question like a verdict. A consumer who says "I already had someone check" or "what if I choose not to?" has not been given anything to evaluate yet. One question before the exit keeps the call alive.',
    rule: 'If they have not heard a number, the objection is not real yet. One question gets a number into the conversation before you decide the call is over.',
    callRef: 'The Unknown Consumer (5:25) said "I had somebody check already" — the call ended without her ever hearing what the plan pays. She called about a grocery benefit.',
    moveLabel: 'When they push back before you have presented:',
    move: '"What did they find? I want to make sure you\'re seeing the most current options — plans in your area changed this year and I\'m looking at $150 a month for groceries right now. Give me two minutes."',
  },
  {
    title: 'Sixty minutes on a call that ended with nothing offered is a recovery failure',
    rc: 'RC1',
    urgency: 'high' as const,
    body: 'The Katherine Curtis call ran a full hour. She had Medicaid, COPD, insulin-dependent diabetes, and was paying out of pocket on $500 a month — the highest-urgency lead profile in the system. The Aetna objection came up three times and was answered with data each time. Data does not reach an emotional objection. When someone tells you they had a bad experience, the move is to find out exactly what happened and address it directly — not to run more math.',
    rule: null,
    callRef: 'Katherine said "I already had Aetna and it was terrible" three times. She never heard: "What went wrong? Because I want to make sure that doesn\'t happen again."',
    moveLabel: 'When the objection is a bad past experience:',
    move: '"What went wrong with them? I want to know exactly what happened — because if that\'s still the issue today, I\'ll find you a different plan. But if it\'s fixed, you\'re leaving $1,960 a year on the table for no reason."',
  },
  {
    title: 'Discovery ends when you have ZIP and situation — not when you have more questions',
    rc: 'RC3',
    urgency: 'medium' as const,
    body: 'On four calls this week — Dennis Carroll, Annie Bellamy, Carol Kissinger, and the Unknown Consumer (6:11) — you had everything needed to present a plan and did not present one. Discovery is how you earn the right to present. It is not the destination. The moment you have ZIP, benefit interest, and at least a rough picture of coverage, the next sentence should name a plan and a dollar amount.',
    rule: null,
    callRef: 'All four calls had complete discovery. None of the four heard a plan name or a benefit figure.',
    moveLabel: 'ZIP and situation confirmed — cue to present:',
    move: '"Based on what you\'ve told me, I\'m looking at a plan with $150 a month for groceries. Let me confirm your doctors are covered and we can talk about getting this started today."',
  },
]

const pastReports = [
  {
    active: true,
    type: 'Weekly Brief',
    title: 'Weekly Brief — April 13–17, 2026',
    score: '48 / 100',
    date: 'Apr 20, 2026',
  },
  {
    active: false,
    type: 'Weekly Brief',
    title: 'Weekly Brief — April 13–14, 2026',
    score: '44 / 100',
    date: 'Apr 16, 2026',
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

export default function AliciaMooreWilliamsPage() {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(
    Object.fromEntries(callsByDate.map((g, i) => [g.date, i === 0]))
  )
  const toggleGroup = (date: string) =>
    setOpenGroups(p => ({ ...p, [date]: !p[date] }))

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
          <p className={styles.updatedAt}>Updated April 20 · 13 calls reviewed</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(48) }}>48</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>Apr 13–17 · 12 scored calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>13</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 13–17, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>2</span>
            <span className={styles.scoreLabel}>Enrolled</span>
            <span className={styles.scoreRange}>4 Missed · 2 No-Sale · 5 Incomplete</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>RC1</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Exits before the number lands</span>
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p>These are the calls we pulled this week where the conversation was alive — consumers who engaged, stayed on the line, and gave you real information to work with. What we are working through is what happened in the moments where the call could have moved forward and did not.</p>
            <p><strong>What&apos;s working:</strong> you caught two D-SNP corrections this week — Francis Wardlaw and Lamar Bull were both on C-SNP plans when they should have been on D-SNPs, and you identified it, explained why it mattered, and moved them. That is expertise most agents do not have. The Lenny Thompson call was also correctly handled: you read a brand-loyal UHC dual member who was already on the right plan and made the right exit without pushing. Those two enrollments and that no-sale read are genuine wins.</p>
            <p><strong>What&apos;s costing you:</strong> four calls this week had complete discovery and no presentation. Three more ended at the first sign of friction before a number ever landed. The Katherine Curtis call ran 60 minutes against the highest-urgency lead profile in the system and ended with nothing offered. The pattern holding you back is not your knowledge — it is the gap between finding the plan and presenting it.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>You are finding the right plan on call after call &mdash; the D-SNP corrections prove it. The move that converts more of those calls is a decision rule: the moment discovery is done, name the plan and state the number. Do not wait for the consumer to ask. Assume they are saying yes and push for the enrollment. That is the job.</p>
        </motion.div>

        {/* ── This Week&apos;s Calls ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>This Week&apos;s Calls</h2>
          {callsByDate.map((group) => (
            <div key={group.date} style={{ marginBottom: '1.5rem' }}>
              <button onClick={() => toggleGroup(group.date)} className={styles.dateGroupToggle}>
                <span>{group.date}</span>
                <span className={styles.dateGroupMeta}>{group.calls.length} call{group.calls.length !== 1 ? 's' : ''}</span>
                <span className={styles.dateGroupArrow}>{openGroups[group.date] ? '▲' : '▼'}</span>
              </button>
              {openGroups[group.date] && (
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
                      <span className={styles.callScore} style={{ color: call.score > 0 ? scoreColor(call.score) : 'var(--ink-60)' }}>
                        {call.score > 0 ? call.score : '—'}
                      </span>
                      <span className={styles.outcomeCell}>
                        <span className={`${styles.pill} ${outcomeClass(call.outcome)}`}>{call.outcome}</span>
                        {call.outcomeNote && <span className={styles.outcomeNote}>{call.outcomeNote}</span>}
                      </span>
                      <span className={styles.callType}>{call.type}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className={styles.callTableFooter}>
            <span>Week Average: <strong>48 / 100</strong></span>
            <span>Enrolled: <strong>2 of 12 scored</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>The D-SNP corrections on Monday were the strongest moves of the week.</strong> Francis Wardlaw and Lamar Bull were both sitting on C-SNP plans when they had Medicaid — and you caught it, explained the difference in plain language, and moved them to plans that actually matched their eligibility. That is a specific skill most agents do not develop. You protected both consumers from a plan type mismatch that was costing them real benefits, and you did it cleanly.</p>
            <p><strong>You read the Lenny Thompson call correctly.</strong> Twenty-eight minutes in, a QMB+ dual-eligible who had already moved to Humana voluntarily and was happy with it — you identified the wall, confirmed he was already on the right plan, and made the right exit without pushing. He complimented you by name. That judgment is real, and correct no-sales are as important as enrollments when the situation calls for one.</p>
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
                <p className={styles.workOnDetail}>When a consumer pushes back and you have not presented a number yet, the instinct to offer a callback is costing you leads. Replace it with a question — about what they already know, what they found, what they are worried about. One question tells you whether the objection is real. A callback offered before a question is a lead you chose to release.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>Discovery done means present now</p>
                <p className={styles.workOnDetail}>The moment you have ZIP, benefit interest, and situation — the next sentence names a plan and a dollar amount. Not another question. Not more discovery. &ldquo;I&apos;m looking at a plan with $150 a month for groceries — let me confirm your doctors are covered.&rdquo; That sentence moves the call. Staying in discovery after you have what you need does not.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>Emotional objections need a specific question, not more math</p>
                <p className={styles.workOnDetail}>On the Katherine Curtis call, three rounds of math against an Aetna objection did not move her. When the objection is rooted in a bad past experience, the move is &ldquo;What went wrong?&rdquo; — not another benefit comparison. Find out exactly what happened. Address it directly. That is the only reframe that works on an identity-level resistance.</p>
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
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC3 · RC6 · D-SNP Correction · First Objection Reframe · Discovery-to-Present Gap</p>
        </div>

      </div>
    </PageShell>
  )
}
