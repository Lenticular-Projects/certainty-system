'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import { useState } from 'react'
import styles from './page.module.css'

// ── Mid-Week Report: April 20–21, 2026 ────────────────────────────────────────
// Scores: Dewey Baker 27 (MISSED OPP), Harold Metz 73 (ENROLLED), Freddie Taylor Jr. 76 (ENROLLED)
// Period avg: (27+73+76)/3 = 58.7
// CRM Apr 20–21: 40 calls · 34 billable · 3 sales · 7.50% · $154 CPA

// ── Helpers ──────────────────────────────────────────────────────────────────

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

// ── CRM Trend Data ────────────────────────────────────────────────────────────

const trendRows = [
  { metric: 'Sales',       prior: '5',      current: '3',       delta: '+3 (pace)',  dir: 'up'     as const },
  { metric: 'Conversion',  prior: '5.43%',  current: '7.50%',   delta: '+2.07pp',    dir: 'up'     as const },
  { metric: 'CPA',         prior: '$212',   current: '$154',     delta: '−$58',       dir: 'up'     as const },
  { metric: 'Total Calls', prior: '92',     current: '40',       delta: '2 days',     dir: 'neutral' as const },
]

// ── Current Period Calls ──────────────────────────────────────────────────────

const callsByDate = [
  {
    date: 'Monday, April 20',
    calls: [
      {
        consumer: 'Dewey Baker',
        duration: '8:00',
        score: 27,
        outcome: 'MISSED OPPORTUNITY',
        outcomeNote: 'Loyal stayer — loyalty frame broken at 7:07, consumer hung up',
        type: 'The Resistant Loyalist',
        href: '/agents/tavares-smith/calls/dewey-baker',
      },
      {
        consumer: 'Harold Metz',
        duration: '41:25',
        score: 73,
        outcome: 'ENROLLED',
        outcomeNote: 'OEPN — Devoted Choice Give Back 006 PPO, May 1 effective',
        type: 'New-to-Medicare Mover',
        href: '/agents/tavares-smith/calls/harold-metz',
      },
    ],
  },
  {
    date: 'Tuesday, April 21',
    calls: [
      {
        consumer: 'Freddie Taylor Jr.',
        duration: '49:24',
        score: 76,
        outcome: 'ENROLLED',
        outcomeNote: 'CSN — UHC Complete Care TX3P C-SNP, May 1 effective, 11/11 meds covered',
        type: 'The Chronic Condition Pivot',
        href: '/agents/tavares-smith/calls/freddie-taylor',
      },
    ],
  },
]

// ── YOUR TELLS — enrolled vs. missed delta ────────────────────────────────────

const enrolledTells = [
  'C-SNP pivot executed in under 3 minutes (Freddie Taylor — 9:13)',
  'Plan pivot handled without hesitation when lead plan fell through (Harold Metz — 11:49)',
  'Medicaid/give-back nuance explained correctly — prevented two compliance errors',
  '11/11 medications confirmed on Freddie\'s call — formulary thoroughness that keeps enrollments from reversing',
  'Post-enrollment loyalty anchor delivered on both enrolled calls — competitor proofing',
]

const missedTells = [
  'Loyalty frame established at 1:37 — then broken by the agent at 7:07 (Dewey Baker)',
  'C-SNP signal missed at 6:17: diabetes + hypertension disclosed, never connected to enrollment pathway',
  'Math abandoned after Social Security pivot on Harold — no replacement numbers built',
  'Client Gold not deployed on either enrolled call: Harold\'s stability moment (9:51), Freddie\'s pain (32:11), table full of medicines (17:30)',
  'Excessive hold time on both enrolled calls: ~15 min dead air on Freddie, ~4 min on Harold',
]

// ── Patterns — Chronic · Emerging · Resolved ─────────────────────────────────

const chronicPatterns = [
  {
    title: 'Client Gold heard — not deployed',
    rc: 'RC2',
    urgency: 'critical' as const,
    summary: 'All three calls this period had clear emotional anchors that went unused. Dewey\'s conditions at 6:17, Harold\'s stability moment at 9:51, Freddie\'s pain at 32:11.',
    fix: 'When a consumer gives you their real situation — pain, instability, a table full of drugs — pause and reflect it back before moving on.',
  },
  {
    title: 'Math stops at step two every time',
    rc: 'RC3',
    urgency: 'high' as const,
    summary: 'The annualization happens but the humanization doesn\'t. Harold: $1,920/year stated, then abandoned. Freddie: $360/year specialist savings never said out loud.',
    fix: 'After every annual figure, ask the one question that makes it real: "What does that mean for your budget?" or "What would $360 back in your pocket do for you?"',
  },
]

const emergingPatterns = [
  {
    title: 'C-SNP identification is getting sharper',
    rc: 'RC6',
    urgency: 'medium' as const,
    summary: 'Freddie\'s C-SNP pivot at 9:13 was fast and correct. Dewey\'s CSN miss (6:17) shows it\'s not automatic yet — but the skill is developing.',
    fix: 'Treat every chronic condition disclosure as an immediate CSN SEP check. Diabetes alone opens the window year-round.',
  },
  {
    title: 'Call length creeping on enrolled calls',
    rc: 'RC1',
    urgency: 'high' as const,
    summary: 'Harold: 41 min. Freddie: 49 min against a 30-min target. Both should have enrolled in 30. Hold time is the primary driver — not the consumer.',
    fix: 'Pre-load Medicare lookup, doctor network, and formulary tools before you dial. Every hold over 60 seconds needs a verbal bridge.',
  },
]

const resolvedPatterns = [
  {
    title: 'Compliance culture — framing boilerplate as burden',
    rc: 'RC4',
    urgency: 'medium' as const,
    summary: 'Harold Metz call had "I don\'t know why the government makes us do it" at 31:28. No recurrence on Freddie\'s call.',
    fix: 'Resolved this period. Continue framing disclosures as consumer protection.',
  },
]

// ── Past Reports ──────────────────────────────────────────────────────────────

const pastReports = [
  {
    title: 'Mid-Week Report — April 22, 2026',
    type: 'Mid-Week',
    date: 'Apr 22, 2026',
    meta: 'Sales: 3 ↑ · CPA: $154 ↓',
    active: true,
  },
  {
    title: 'Weekly Brief — April 13–17',
    type: 'Weekly Brief',
    date: 'Apr 20, 2026',
    meta: 'Avg: 53 / 100 · 10 calls',
    active: false,
  },
  {
    title: 'Weekly Brief — April 13–15',
    type: 'Weekly Brief',
    date: 'Apr 16, 2026',
    meta: 'Avg: 47 / 100',
    active: false,
  },
]

// ─────────────────────────────────────────────────────────────────────────────

export default function TavaresSmithPage() {
  const [callsExpanded, setCallsExpanded] = useState(true)

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
          <h1 className={styles.agentName}>Tavares Smith</h1>
          <p className={styles.period}>Week of April 20–22, 2026</p>
          <p className={styles.updatedAt}>Updated April 22 · 3 calls reviewed</p>
        </motion.div>

        {/* ── Trend Snapshot ── */}
        <motion.div className={styles.trendSnapshot} {...SPRING}>
          <div className={styles.trendSnapshotHeader}>
            <span className={styles.systemLabel}>CRM Trend Snapshot</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--ink-60)', fontWeight: 500 }}>vs. Last Week (Apr 13–17)</span>
          </div>
          <div className={styles.trendTable}>
            <div className={styles.trendHeader}>
              <span>Metric</span>
              <span>Apr 13–17</span>
              <span>Apr 20–21</span>
              <span>Change</span>
            </div>
            {trendRows.map((row) => {
              const deltaClass = (row.dir as string) === 'up' ? styles.trendUp : row.dir === 'neutral' ? styles.trendNeutral : styles.trendDown
              return (
                <div key={row.metric} className={styles.trendRow}>
                  <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--ink)' }}>{row.metric}</span>
                  <span style={{ fontSize: '0.9375rem', fontVariantNumeric: 'tabular-nums', color: 'var(--ink-60)' }}>{row.prior}</span>
                  <span style={{ fontSize: '0.9375rem', fontWeight: 700, fontVariantNumeric: 'tabular-nums', color: 'var(--ink)' }}>{row.current}</span>
                  <span className={deltaClass}>{row.delta}</span>
                </div>
              )
            })}
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--sage-dark)', fontWeight: 600, marginTop: '12px' }}>
            3 sales in 2 days — on pace to beat last week&apos;s 5. Conversion up 2.07pp. CPA down $58. The adjustment is working.
          </p>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>
            The C-SNP pivot on Freddie Taylor was the move of the week &mdash; heard the conditions at 5:54, identified the pathway, enrolled in 3 minutes. That same instinct was available on Dewey Baker at 6:17 and you walked past it. The pattern that unlocks the next level: every chronic condition disclosure is a CSN SEP check. Diabetes alone opens the window year-round. You don&apos;t have to switch them &mdash; you have to tell them what their conditions qualify them for.
          </p>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p>
              <strong>What&apos;s working:</strong> Two clean enrollments on back-to-back days. Harold Metz enrolled on OEPN under a move SEP — you handled the Social Security pivot cleanly when the lead plan fell through and kept him on track. Freddie Taylor enrolled on CSN — you spotted the C-SNP door inside three minutes of the chronic conditions disclosure and closed it before he had a chance to second-guess. The Medicaid/give-back nuance was handled correctly on both calls. Formulary thoroughness on Freddie (11/11 covered) was the kind of work that protects an enrollment from reversing after the fact.
            </p>
            <p>
              <strong>What&apos;s costing you:</strong> Dewey Baker was closeable. Diabetes plus hypertension at 6:17 was a CSN SEP sitting in plain view — the same eligibility pathway you used to close Freddie Taylor the next day. You walked past it, then broke your own loyalty frame at 7:07 by inviting comparison shopping he&apos;d already refused. The call didn&apos;t die because Dewey was uncloseable. It died because the frame broke. On both enrolled calls, you heard the Client Gold and didn&apos;t deploy it. Harold told you he was finally in a stable home after an apartment flood. Freddie told you he was hurting. These aren&apos;t just context details — they&apos;re the close. The math is also stopping at step two on every call. The annual number gets stated and then you move on. The humanizing question is missing every time.
            </p>
          </div>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(59) }}>59</span>
            <span className={styles.scoreLabel}>Period Average</span>
            <span className={styles.scoreRange}>Apr 20–21 · 3 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>3</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 20–21, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>2</span>
            <span className={styles.scoreLabel}>Enrolled</span>
            <span className={styles.scoreRange}>1 Missed Opportunity</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)' }}>RC2</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Client Gold not deployed · 3 calls</span>
          </div>
        </motion.div>

        {/* ── Your Tells ── */}
        <motion.div className={styles.yourTells} {...SPRING}>
          <h2 className={styles.sectionTitle}>Your Tells</h2>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginBottom: '20px' }}>
            What you did on enrolled calls vs. missed calls this period. The delta is where the coaching lives.
          </p>
          <div className={styles.tellsBlock}>
            <div>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sage-dark)', marginBottom: '10px' }}>On Enrolled Calls</p>
              <ul className={styles.tellsList}>
                {enrolledTells.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
            <div>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: '10px' }}>On Missed Calls</p>
              <ul className={styles.tellsList}>
                {missedTells.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* ── Patterns ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Patterns</h2>
          <div className={styles.patternsGrid}>

            {/* Chronic */}
            <div className={styles.patternColumn}>
              <div className={styles.patternColumnHeader} style={{ borderColor: 'var(--terracotta)', color: 'var(--terracotta)' }}>
                Chronic
              </div>
              {chronicPatterns.map((p, i) => (
                <div key={i} className={`${styles.patternCard} ${styles[`priority_${p.urgency}`]}`}>
                  <div className={styles.priorityHeader}>
                    <span className={`${styles.urgencyBadge} ${styles[`badge_${p.urgency}`]}`}>
                      {p.urgency === 'critical' ? 'CRITICAL' : 'HIGH PRIORITY'}
                    </span>
                    <span className={styles.rcCode}>{p.rc}</span>
                  </div>
                  <p className={styles.priorityTitle}>{p.title}</p>
                  <p className={styles.priorityDetail}>{p.summary}</p>
                  <div className={styles.priorityMove}>
                    <span className={styles.priorityMoveLabel}>Instead:</span>
                    <p className={styles.priorityMoveText}>{p.fix}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Emerging */}
            <div className={styles.patternColumn}>
              <div className={styles.patternColumnHeader} style={{ borderColor: 'var(--mustard)', color: 'var(--mustard-dark)' }}>
                Emerging
              </div>
              {emergingPatterns.map((p, i) => (
                <div key={i} className={`${styles.patternCard} ${styles[`priority_${p.urgency}`]}`}>
                  <div className={styles.priorityHeader}>
                    <span className={`${styles.urgencyBadge} ${styles[`badge_${p.urgency}`]}`}>
                      {p.urgency === 'high' ? 'HIGH PRIORITY' : 'OPPORTUNITY'}
                    </span>
                    <span className={styles.rcCode}>{p.rc}</span>
                  </div>
                  <p className={styles.priorityTitle}>{p.title}</p>
                  <p className={styles.priorityDetail}>{p.summary}</p>
                  <div className={styles.priorityMove}>
                    <span className={styles.priorityMoveLabel}>Instead:</span>
                    <p className={styles.priorityMoveText}>{p.fix}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Resolved */}
            <div className={styles.patternColumn}>
              <div className={styles.patternColumnHeader} style={{ borderColor: 'var(--sage)', color: 'var(--sage-dark)' }}>
                Resolved
              </div>
              {resolvedPatterns.map((p, i) => (
                <div key={i} className={styles.patternCard} style={{ opacity: 0.7, border: '1px solid rgba(143,175,148,0.2)', borderLeft: '4px solid var(--sage)' }}>
                  <div className={styles.priorityHeader}>
                    <span className={`${styles.urgencyBadge} ${styles.badge_medium}`}>RESOLVED</span>
                    <span className={styles.rcCode}>{p.rc}</span>
                  </div>
                  <p className={styles.priorityTitle}>{p.title}</p>
                  <p className={styles.priorityDetail}>{p.summary}</p>
                  <div className={styles.priorityMove}>
                    <span className={styles.priorityMoveLabel}>Status:</span>
                    <p className={styles.priorityMoveText}>{p.fix}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

        {/* ── Calls (collapsible) ── */}
        <motion.div className={styles.section} {...SPRING}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', paddingBottom: '12px', borderBottom: 'var(--rule-lt)' }}>
            <h2 className={styles.sectionTitle} style={{ margin: 0, padding: 0, border: 'none' }}>This Period&apos;s Calls</h2>
            <button
              className={styles.collapsibleCallsToggle}
              onClick={() => setCallsExpanded(!callsExpanded)}
            >
              {callsExpanded ? 'Collapse' : 'Expand'}
            </button>
          </div>

          {callsExpanded && (
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
                <span>Period Average: <strong>59 / 100</strong></span>
                <span>Enrolled: <strong>2 of 3</strong></span>
                <span>Period: <strong>Apr 20–21</strong></span>
              </div>
            </>
          )}
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>The Freddie Taylor call was your best technical execution of the period. You heard the chronic condition disclosure at 5:54 and had the C-SNP pivot complete before 10 minutes elapsed — that&apos;s exactly how that door is supposed to open. You also caught yourself before using a DST reference at 5:28 and stopped. That&apos;s a compliance awareness moment that most agents miss. When Freddie flagged the missing medication at 22:53, you asked for it without being defensive and confirmed 11/11 covered. That thoroughness matters — it&apos;s what keeps enrollments from reversing on a formulary complaint.</p>
            <p>On Harold Metz, the Social Security pivot at 11:49 was clean. A lot of agents fumble when the lead plan falls through. You went back to research, made a decision, and brought Harold along without making him feel like a problem. Your post-enrollment loyalty anchor on both calls — &ldquo;if another agent calls you, hang up&rdquo; — is advanced behavior that directly reduces churn risk. That&apos;s something most agents skip entirely.</p>
          </div>
        </motion.div>

        {/* ── What to Work On ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What to Work On</h2>
          <div className={styles.workOnList}>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>01</span>
              <div>
                <p className={styles.workOnTitle}>When they give you their real situation — stop and use it</p>
                <p className={styles.workOnDetail}>Harold told you at 9:51 that Medicare and a stable address represent a fresh start after his apartment was flooded and he&apos;d been in transit for months. Freddie told you at 32:11 that he was hurting. These moments are your close — not background information to file away. When Harold says that, the right move is: &ldquo;Harold, here&apos;s what I want you to know. This plan starts May 1st. Your doctor is covered, your premium is zero, and you have coverage for whatever comes up. That&apos;s one less thing on your plate as you get settled.&rdquo; When Freddie says he&apos;s hurting: &ldquo;Freddie, that&apos;s exactly why we&apos;re doing this right now. This plan is built for people managing what you&apos;re managing. Five more minutes and it&apos;s locked in — you can put the phone down and rest.&rdquo;</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>Step three of the math — every call, every number</p>
                <p className={styles.workOnDetail}>Harold&apos;s call: $1,920/year give-back annualized — then abandoned when it became irrelevant. No replacement math built. Freddie&apos;s call: $35 vs. $65 specialist stated — never converted to $360/year, never connected to his Walgreens visits. The math breakdown has three steps. You are consistently stopping at step two. After every annual figure, one humanizing question closes the gap: &ldquo;Freddie, you told me you see specialists every month — that&apos;s $30 a month staying in your pocket, $360 a year. And the OTC card covers groceries at the Walgreens where you already pick up your prescriptions. That&apos;s the food card you called about.&rdquo; Three steps in 30 seconds.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>CSN SEP check on every chronic condition disclosure</p>
                <p className={styles.workOnDetail}>Dewey Baker disclosed diabetes and hypertension at 6:17. The CSN SEP opens the enrollment window year-round for qualifying chronic conditions. Diabetes alone qualifies. You had the C-SNP pivot available — the exact same pivot you used on Freddie Taylor the next day — and you walked past it, then broke your own loyalty frame by inviting comparison shopping. The Dewey Baker call wasn&apos;t lost because he was uncloseable. It was lost because the chronic condition-to-plan connection was never made. Treat every chronic condition disclosure as an immediate CSN SEP check. &ldquo;Dewey, those two conditions actually qualify you for a specialized plan built specifically for people managing what you&apos;re managing. That&apos;s not a switch — that&apos;s upgrading to a plan designed for your situation.&rdquo;</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Coaching Session — Apr 15 ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Coaching Session — April 15, 2026</h2>
          <p style={{ fontSize: '0.75rem', color: 'var(--ink-60)', marginBottom: '1rem' }}>Session with Jon Hall · Calls reviewed: Glinda Robinson, Not Stated (4:14), Not Stated (6:26)</p>
          <div className={styles.workOnList}>
            {[
              {
                num: '01',
                title: 'When the consumer mentions their agent: "What question would you want to ask her?"',
                detail: '"That makes sense. What\'s the one question you\'d want to ask her? I have the full plan details right here — I can likely answer it right now." This shifts the dynamic: instead of you defending yourself, the consumer has to think. If they can\'t come up with a question, you\'ve made the case. Don\'t compete with the other agent — help the consumer feel like the question is already answered.',
              },
              {
                num: '02',
                title: 'Cut all permission-seeking language',
                detail: 'No "if you want," no "regrettably," no "if you\'re interested." You\'re a licensed professional. Direct: "I need your full name, date of birth, and social." You corrected this mid-day Monday and people started giving the info up — keep going.',
              },
              {
                num: '03',
                title: 'Give context before asking for personal information',
                detail: 'Educate on Medicare Advantage first: "With just Part A and Part B, you won\'t get any food card, OTC benefit, dental, or Part B give-back. Once I look up your account, I\'ll give you your Medicare number right now so you have it before your card arrives." Now the info request serves them, not just you.',
              },
              {
                num: '04',
                title: 'Frame what they\'re losing — loss aversion is twice as powerful as gain',
                detail: '"You\'ve already been on the phone four minutes. If we take care of this now, you don\'t have to call back, navigate hold times, start from scratch. You can walk away with the benefit locked in." Frame the cost of inaction, not just the benefit of acting.',
              },
            ].map((n) => (
              <div key={n.num} className={styles.workOnCard}>
                <span className={styles.workOnNum}>{n.num}</span>
                <div>
                  <p className={styles.workOnTitle}>{n.title}</p>
                  <p className={styles.workOnDetail}>{n.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Report History ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Report History</h2>
          <div className={styles.reportHistory}>
            {pastReports.map((r, i) => (
              <div key={i} className={`${styles.reportHistoryEntry} ${r.active ? styles.reportActive : ''}`}>
                <div className={styles.reportLeft}>
                  <span className={styles.reportType}>{r.type}</span>
                  <span className={styles.reportTitle}>{r.title}</span>
                </div>
                <div className={styles.reportRight}>
                  <span className={styles.reportScore}>{r.meta}</span>
                  <span className={styles.reportDate}>{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Tavares Smith · Week of April 20–22, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC2 · RC3 · RC6 · Client Gold Deployment · Math Step 3 · CSN SEP · Call Efficiency</p>
        </div>

      </div>
    </PageShell>
  )
}
