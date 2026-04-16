'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Weekly Brief: April 13–17, 2026 ──────────────────────────────────────────

const callsByDate = [
  {
    date: 'Tuesday, April 14',
    calls: [
      { consumer: 'Kim Davis', duration: '6:38', score: 28, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Surrendered Exit — Zip Code Error', href: '/agents/jean-pierre-riviere/calls/kim-davis' },
      { consumer: 'Faith Light', duration: '13:16', score: 22, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'DST Fabrication — Compliance Violation', href: '/agents/jean-pierre-riviere/calls/faith-light' },
      { consumer: 'Faustino Fernandez', duration: '5:59', score: 44, outcome: 'INCOMPLETE', outcomeNote: 'Discovery done — no presentation', type: 'SSN Before Benefits — Sequence Violation', href: '/agents/jean-pierre-riviere/calls/faustino-fernandez' },
      { consumer: 'Diaba Iset', duration: '12:27', score: 34, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Plan-Switch Without Plan Data', href: '/agents/jean-pierre-riviere/calls/diaba-iset' },
      { consumer: 'Francine Goldstein', duration: '15:09', score: 58, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'Already-Maximized Dual Beneficiary', href: '/agents/jean-pierre-riviere/calls/francine-goldstein' },
      { consumer: 'Ed Smith', duration: '26:08', score: 58, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'Close Signal Not Converted', href: '/agents/jean-pierre-riviere/calls/ed-smith' },
      { consumer: 'Dolores Vance Valadares', duration: '34:23', score: 47, outcome: 'INCOMPLETE', outcomeNote: 'Discovery done — close not attempted', type: 'Consumer Chose the Plan — No Enrollment Executed', href: '/agents/jean-pierre-riviere/calls/dolores-vance-valadares' },
    ],
  },
]

const patterns = [
  {
    title: 'DST SEP invoked on Faith Light — this is a compliance violation',
    rc: 'RC4',
    urgency: 'critical' as const,
    body: 'Agents are prohibited from invoking DST. It is a CMS-declared emergency tool — raising it to justify enrollment is an audit exposure event. On the Faith Light call, the INT SEP was available and legitimate from the moment she disclosed Medicaid at 1:12. You had everything you needed in the first 90 seconds. There was no emergency story needed, no geographic fabrication, no compliance risk. The legitimate path was faster and cleaner.',
    rule: 'Never invoke DST. Medicaid confirmation equals INT SEP equals D-SNP eligibility equals year-round enrollment window. That is the path.',
    callRef: 'Faith Light confirmed Medicaid at 1:12. Ninety seconds later you fabricated a storm-based SEP in a different county entirely. The INT SEP was right there.',
    moveLabel: 'Use what\'s real. It\'s faster.',
    move: '"Ms. Faith, because you have both Medicare and Medicaid, you qualify year-round for what\'s called a dual-eligible plan — that\'s the specific plan that carries the food card you called about. This window never closes for you. Let me confirm what\'s available in your county and we\'ll get you set up today."',
  },
  {
    title: 'The consumer chose the plan — you kept verifying instead of closing',
    rc: 'RC1',
    urgency: 'high' as const,
    body: 'When a consumer makes a plan choice in plain language — "I would rather have food on the table," "United is my plan" — that is the close signal, not a cue to run another verification cycle. On the Dolores call, she chose your plan at 24:01. You continued doctor verification for ten more minutes. The call ended at 34:23 with no enrollment, no voice signature, no Phase VI elements delivered. Primary care confirmed in-network is sufficient to proceed. Specialists can be verified after submission.',
    rule: null,
    callRef: 'Dolores said "I would rather have food on the table" at 24:01. Her primary care was confirmed in-network at 28:43. The enrollment never happened.',
    moveLabel: 'When they choose — stop. Move to Phase VI.',
    move: '"Perfect — then this is your plan, Dolores. Let me get you locked in right now. It takes about three minutes, and I\'ll make sure your doctors are covered at the same time. Are you ready?"',
  },
  {
    title: 'Plan-switch pitch before the plan is on the screen',
    rc: 'RC3',
    urgency: 'high' as const,
    body: 'Suggesting a plan switch in the abstract loses credibility fast. If you\'re going to propose a carrier change, you need to be looking at the specific plan with the specific dollar difference visible. Abstract comparisons give the consumer nothing to evaluate. Numbers on the screen — numbers they can see and hear you describe — are what moves a consumer from resistance to choice.',
    rule: null,
    callRef: 'On the Diaba Iset call, you opened a plan-switch conversation before pulling up a specific competing plan with actual benefit numbers.',
    moveLabel: 'Pull the plan first. Then make the comparison.',
    move: '"Mr. Iset, I\'m looking at your current plan right now — here\'s the specific difference between what you have and what I\'m seeing for your county." Numbers on the screen. Not a general pitch.',
  },
]

const pastReports = [
  { title: 'Weekly Brief — April 14', type: 'Weekly Brief', date: 'Apr 16, 2026', score: '41 / 100', active: true },
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

export default function JeanPierreRivierePage() {
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
          <h1 className={styles.agentName}>Jean Pierre Riviere</h1>
          <p className={styles.period}>Week of April 13–17, 2026</p>
          <p className={styles.updatedAt}>Updated April 16 · 7 calls reviewed (Tue)</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(41) }}>41</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>Tue · 7 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>7</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>2</span>
            <span className={styles.scoreLabel}>Correct No-Sales</span>
            <span className={styles.scoreRange}>3 Missed · 2 Incomplete</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>RC4</span>
            <span className={styles.scoreLabel}>Critical Flag</span>
            <span className={styles.scoreRange}>DST SEP invocation — audit risk</span>
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p>Seven calls in one day — these are the ones we pulled to work through what happened in the moments where the call was alive and could have gone further. Two of these calls ended correctly. The others have specific moments we can build from.</p>
            <p><strong>What&apos;s working:</strong> your pivot instinct is high-ceiling. On the Ed Smith call, you recognized an ineligible caller and immediately asked whether anyone else in the household might qualify — most agents would have thanked her and hung up. You found the lead inside the call. Your C-SNP recognition on the Dolores call was also real: the moment she confirmed diabetes and blood pressure at 11:21, you repositioned the entire call around the chronic plan. And the Francine Goldstein call was the right call — you looked at her plan, confirmed she was already maximized, and did not push for a change she didn&apos;t need. That&apos;s integrity.</p>
            <p><strong>What&apos;s costing you:</strong> the pattern across three calls is the same — when the consumer makes a choice or shows you the close signal, you keep going instead of closing. Dolores chose the plan at 24:01 and you ran ten more minutes of doctor verification. On the Ed Smith call, the line &ldquo;she lost a lot of benefits throughout the years&rdquo; was the most powerful moment in the call — latent outrage about a system that failed her — and you moved past it. And the Faith Light call has a compliance violation that has to stop completely.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>Your instinct to verify doctors and confirm coverage details is thorough &mdash; and when a consumer&apos;s primary care is confirmed in-network, that&apos;s your signal to close. The move is: &ldquo;Perfect &mdash; let me get you enrolled right now. It takes about three minutes and we&apos;ll have everything confirmed while we do it.&rdquo; Primary care in-network is enough to enroll. Specialists get verified after submission &mdash; assume they&apos;re saying yes and move.</p>
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
            <span>Week Average: <strong>41 / 100</strong></span>
            <span>Correct No-Sales: <strong>2 of 7</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>The pivot on the Ed Smith call was the best single move of the week.</strong> Ed called about a grocery card she saw on TV — ineligible, supplement holder. You explained that clearly, then immediately asked whether anyone else in the household might qualify. Thirty seconds later, Ed mentioned her 92-year-old mother-in-law — Medicare Advantage, dual-eligible. You pivoted the entire call. Twenty-six minutes later you had confirmed Medicaid eligibility in real time, collected the MBI, verified the family doctor, gathered six medications with dosages, and secured Ed&apos;s interest. That pivot — from a dead call to a live lead inside the same conversation — is one of the highest-level prospecting moves in inbound sales.</p>
            <p><strong>Two correct no-sales in one day.</strong> Francine Goldstein was already at the maximum benefit for a dual beneficiary in her county — you recognized it, explained the AEP cycle, and did not push for a change that wasn&apos;t there. That&apos;s working knowledge and professional discipline in the same call. The ability to say no when no is right is as valuable as the skill to close.</p>
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
                <p className={styles.workOnTitle}>DST is off-limits — INT SEP is the legitimate tool</p>
                <p className={styles.workOnDetail}>When Medicaid is confirmed: &ldquo;Because you have Medicaid, you have a special enrollment window open right now — year-round, not just in October.&rdquo; That&apos;s the legal path. DST is prohibited territory and a compliance violation that triggers audits. The INT SEP is faster, cleaner, and already in your hands the moment a consumer confirms Medicaid.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>When they confirm the plan — close immediately</p>
                <p className={styles.workOnDetail}>The moment a consumer makes a plan choice, stop. &ldquo;Perfect — let me get you locked in right now. Can I confirm your date of birth?&rdquo; Don&apos;t keep presenting after the confirmation. Primary care in-network is sufficient to proceed. Specialist verification happens after submission. The enrolled consumer is always worth more than the perfect verification cycle.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>SSN collection moves to Phase VI — period</p>
                <p className={styles.workOnDetail}>On the Dolores call, SSN was collected at 7:57 — before a single plan benefit had been presented and sixteen minutes before Dolores expressed any enrollment intent. The sequence is: discovery → Medicare number → benefits presentation → consumer interest → Phase VI → SSN. Collect the Medicare number early. Save the SSN for the enrollment window. Never before.</p>
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
          <p>The Certainty System · Jean Pierre Riviere · Week of April 13–17, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC3 · RC4 · DST Violation · Close Signal · INT SEP · Phase VI</p>
        </div>

      </div>
    </PageShell>
  )
}
