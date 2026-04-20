'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Weekly Brief: April 13–17, 2026 + Coaching Session April 15 ─────────────
// Scores: Glinda 53, Not Stated 4m14s 35, Not stated 6m26s 32, James Salvatore 78,
//         Cynthia Nelson 62, Unknown 11m40s 57, Unknown 5m38s 42,
//         Anthony Collins Sr 81, Elizabeth Ritchie 45, Unknown 17m22s 44
// Avg: (53+35+32+78+62+57+42+81+45+44) / 10 = 529/10 = 53

const callsByDate = [
  {
    date: 'Monday, April 13',
    calls: [
      { consumer: 'Glinda Robinson', duration: '53:44', score: 53, outcome: 'MISSED OPPORTUNITY', outcomeNote: 'Math humanization missing — insurance lady objection not reframed', type: 'Detail Staller / Scared Switcher', href: '/agents/tavares-smith/calls/glinda-robinson' },
      { consumer: 'Not Stated', duration: '4:14', score: 35, outcome: 'MISSED OPPORTUNITY', outcomeNote: 'Passive exit — no callback booked', type: 'Commercial Myth Caller', href: '/agents/tavares-smith/calls/not-stated-4m14s' },
      { consumer: 'Not Stated', duration: '6:26', score: 32, outcome: 'MISSED OPPORTUNITY', outcomeNote: 'Scam fear — logic reframe failed', type: 'Scared Switcher (New Enrollee)', href: '/agents/tavares-smith/calls/not-stated-6m26s' },
      { consumer: 'James Salvatore', duration: '52:19', score: 78, outcome: 'ENROLLED', outcomeNote: 'D-SNP correction — UHC Dual Complete $256/mo OTC', type: 'Inbound OTC Seeker / Dual Eligible', href: '/agents/tavares-smith/calls/james-salvatore' },
    ],
  },
  {
    date: 'Tuesday, April 14',
    calls: [
      { consumer: 'Cynthia Nelson', duration: '18:23', score: 62, outcome: 'INCOMPLETE', outcomeNote: 'C-SNP path started — transcript ends before Phase VI', type: 'Benefit Seeker / C-SNP Candidate', href: '/agents/tavares-smith/calls/cynthia-nelson' },
      { consumer: 'Unknown Consumer', duration: '11:40', score: 57, outcome: 'CORRECT NO-SALE', outcomeNote: 'POA required — daughter not available, correct exit', type: 'Gatekeeper Block', href: '/agents/tavares-smith/calls/unknown-consumer-11m40s' },
      { consumer: 'Unknown Consumer', duration: '5:38', score: 42, outcome: 'MISSED OPPORTUNITY', outcomeNote: 'Scam resistance — "Trust me" reframe accelerated exit', type: 'Scam-Resistant Caller', href: '/agents/tavares-smith/calls/unknown-consumer-5m38s' },
    ],
  },
  {
    date: 'Wednesday, April 16',
    calls: [
      { consumer: 'Anthony Collins Sr.', duration: '42:01', score: 81, outcome: 'ENROLLED', outcomeNote: 'MCD SEP identified — Aetna PPO D-SNP, $210/mo OTC', type: 'OTC Card Seeker / Dual Eligible', href: '/agents/tavares-smith/calls/anthony-collins-sr' },
    ],
  },
  {
    date: 'Thursday, April 17',
    calls: [
      { consumer: 'Elizabeth Ritchie', duration: '9:12', score: 45, outcome: 'CORRECT NO-SALE', outcomeNote: 'UHC coverage concern at her doctor — correct exit', type: 'Brand Loyalist / Informed Decliner', href: '/agents/tavares-smith/calls/elizabeth-ritchie' },
      { consumer: 'Unknown Consumer', duration: '17:22', score: 44, outcome: 'CORRECT NO-SALE', outcomeNote: 'Consumer pain episode — medical interruption, not agent failure', type: 'Warm Transfer / Dual Eligible', href: '/agents/tavares-smith/calls/unknown-consumer-17m22s' },
    ],
  },
]

const patterns = [
  {
    title: 'Loyalty and trust objections — find the question, don\'t replace the person',
    rc: 'RC2',
    urgency: 'critical' as const,
    body: 'On the Glinda Robinson call, when she mentioned her insurance lady at 49:29, you offered to replace her. That is a logic move against a trust objection. She was not asking you to be her new agent. She was afraid of making the wrong decision. The move is one question: "What specific question were you hoping she could answer? I have the full plan details right here — let\'s see if I can answer it right now." If she can\'t name a question, the insurance lady objection dissolves. If she names one, you answer it. Either way, the call stays alive.',
    rule: 'When you hear a trust or loyalty objection, find the question behind it. Never compete with the other person.',
    callRef: 'Glinda Robinson at 49:29: "I\'m keeping my insurance until I talk to my insurance lady." Agent response: offered to be her dedicated agent. She exited. The right move: "What\'s the one question you\'d want to ask her? I can probably answer it right now."',
    moveLabel: 'Consumer raises loyalty objection — find the question:',
    move: '"That makes complete sense — it\'s smart to have someone you trust. What\'s the specific question you\'d want to ask her? I have the full plan details right here, and I can likely answer it right now so you have what you need."',
  },
  {
    title: 'The math has three steps — you are stopping at two on every call',
    rc: 'RC3',
    urgency: 'high' as const,
    body: 'You ran steps one and two correctly on the Glinda Robinson and Anthony Collins calls — comparison and annualization. Step three is where the close lives. On Glinda: "$2,880 more a year" was stated and then you moved on. The question that closes it: "You told me you live on a low income — what would an extra $240 a month for groceries and utilities mean for your budget?" That question is the difference between a number on a page and a decision a person makes. On James Salvatore, the $2,512 annual difference between his old plan and new was never stated. He was already enrolled before you gave him that number. Every dual-eligible call this week had a humanization missing.',
    rule: null,
    callRef: 'Glinda Robinson at 47:35 — annualized $2,880, moved on. Glinda\'s Client Gold at 2:23: "I live in a low income." Never connected. James Salvatore: $140 quarterly vs. $256 monthly = $2,512/year. Never stated.',
    moveLabel: 'Annual figure stated — humanize immediately:',
    move: '"Glinda, that\'s nearly $3,000 more in your pocket next year. You told me you\'re on a low income — what would an extra $240 a month for groceries and utilities do for your budget each month?"',
  },
  {
    title: 'SEP identification is your strongest skill — invoke it, don\'t just note it',
    rc: 'RC6',
    urgency: 'medium' as const,
    body: 'On the Anthony Collins Sr. call you correctly identified a Medicaid reinstatement (MCD SEP) at the 6-minute mark and used it to complete the enrollment. That is the system working exactly as designed. On the Unknown Consumer (11:40) call, he disclosed Medicaid at 2:46 — an INT SEP that is open any month for dual-eligible consumers — and you never acknowledged it, even as a callback anchor. The SEP identification skill is there. Invoking it explicitly, for the consumer\'s benefit, is the next level.',
    rule: null,
    callRef: 'Unknown Consumer (Waycross, 11:40) at 2:46: confirmed Medicaid. INT SEP window open. Was never named. Callback set without mentioning the enrollment authority available.',
    moveLabel: 'Dual-eligible confirmed — name the SEP window:',
    move: '"Because you have both Medicare and Medicaid, you have a Special Enrollment Period that\'s available to you any month of the year. You don\'t have to wait for open enrollment. This is a window that\'s open right now — let\'s make sure your daughter knows that when you talk to her tomorrow."',
  },
]

const coachingSession = [
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
]

const pastReports = [
  { title: 'Weekly Brief — April 13–17', type: 'Weekly Brief', date: 'Apr 20, 2026', score: '53 / 100', active: true },
  { title: 'Weekly Brief — April 13–15', type: 'Weekly Brief', date: 'Apr 16, 2026', score: '47 / 100', active: false },
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

export default function TavaresSmithPage() {
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
          <h1 className={styles.agentName}>Tavares Smith</h1>
          <p className={styles.period}>Week of April 13–17, 2026</p>
          <p className={styles.updatedAt}>Updated April 20 · 10 calls reviewed + coaching session Apr 15</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(53) }}>53</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>Apr 13–17 · 10 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>10</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 13–17, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>2</span>
            <span className={styles.scoreLabel}>Enrolled</span>
            <span className={styles.scoreRange}>4 Missed · 1 Incomplete · 3 No-Sale</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)' }}>RC2</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Logic vs. emotion — 3 calls</span>
          </div>
        </motion.div>

        {/* ── Platform Numbers ── */}
        <motion.div style={{ marginBottom: '48px' }} {...SPRING}>
          <h2 className={styles.sectionTitle}>Platform Numbers</h2>
          <div className={styles.scorecardRow}>
            <div className={styles.scoreCard}>
              <span className={styles.scoreValue}>5</span>
              <span className={styles.scoreLabel}>Sales — Apr 13–17</span>
              <span className={styles.scoreRange}>5.43% conversion</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, marginTop: 4, color: 'var(--sage-dark)' }}>
                ↑ from 2 (1.94%)
              </span>
            </div>
            <div className={styles.scoreCard}>
              <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>$212</span>
              <span className={styles.scoreLabel}>CPA — Apr 13–17</span>
              <span className={styles.scoreRange}>Cost per sale</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, marginTop: 4, color: 'var(--sage-dark)' }}>
                ↓ from $550
              </span>
            </div>
            <div className={styles.scoreCard}>
              <span className={styles.scoreValue}>92</span>
              <span className={styles.scoreLabel}>Total Calls — Apr 13–17</span>
              <span className={styles.scoreRange}>61 billable</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--ink-60)', marginTop: 4 }}>
                Prior week: 103 calls
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p>This is the full week&apos;s picture — ten calls, two enrollments, three correct no-sales, and a coaching session. The range this week shows exactly where the system is working and where it is breaking down.</p>
            <p><strong>What&apos;s working:</strong> two clean enrollments at the top of the range. James Salvatore at 78 — you correctly identified he was on the wrong plan from day one, found the right D-SNP, and used that framing (&ldquo;you should have been on this from the beginning&rdquo;) to close him. Anthony Collins Sr. at 81 — you caught the MCD SEP at the 6-minute mark from a casual mention of a hospitalization, and used it to enroll him on a plan that tripled his OTC benefit. Two SEP identifications in one week. That is exactly the skill this system is built on.</p>
            <p><strong>What&apos;s costing you:</strong> on three calls this week a consumer pushed back emotionally and you responded with logic. Glinda Robinson&apos;s insurance lady objection got a replacement offer instead of a question. The two scam-resistant callers got reassurances instead of validation. None of those responses addressed what the consumer was feeling. Additionally, the math breakdown was completed through step two on the high-scoring calls but never to step three — the humanization that makes the number mean something. Those two patterns, applied consistently across the week, are the gap between 53 and 65.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>The SEP identification skill is real &mdash; you caught the MCD on Anthony Collins at 6 minutes and closed him at 81. The move that takes James Salvatore from 78 to 85 and closes Glinda Robinson is step three of the math: after you state the annual number, ask one humanizing question. &ldquo;You told me you&apos;re on a low income &mdash; what would an extra $240 a month for groceries mean for your budget?&rdquo; That question turns a number into a decision. Every enrolled call this week was one humanizing question short of a masterpiece.</p>
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
            <span>Week Average: <strong>53 / 100</strong></span>
            <span>Enrolled: <strong>2 of 10</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>The Anthony Collins Sr. call at 81 was the strongest work of the week. Anthony mentioned at 5:47 that his Medicaid had been canceled and reinstated two weeks earlier after a hospitalization. You heard it, recognized it as a qualifying Medicaid change event, and used it to open a mid-year enrollment window. The three-category benefit comparison — OTC, dental, and vision — was clean and thorough. The Aetna prior experience objection was acknowledged and reframed without pressure. Full Phase VI execution. Voice signature collected. That is the system working from top to bottom.</p>
            <p>James Salvatore at 78 was also strong. You correctly identified he was on the wrong plan — Humana with $140 quarterly instead of a proper D-SNP — and used &ldquo;you should have been on this from the beginning&rdquo; as the close. That line is truth-based persuasion at its best. Post-enrollment loyalty anchoring (&ldquo;if anyone else calls you about your coverage, disconnect the line&rdquo;) was excellent. Both of these calls demonstrate the plan identification and SEP recognition skills that are your highest-leverage assets.</p>
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
                <p className={styles.workOnTitle}>Trust objections — find the question behind them</p>
                <p className={styles.workOnDetail}>When Glinda mentioned her insurance lady, the correct response was one question: &ldquo;What&apos;s the specific thing you&apos;d want to ask her? I have all the plan details right here and I can probably answer it right now.&rdquo; That question either dissolves the objection or gives you the exact concern to address. Offering to replace the agent was a logic move against a trust signal. Logic does not reach trust.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>Step three of the math breakdown — every time, on every call</p>
                <p className={styles.workOnDetail}>After every annualization, ask one humanizing question that connects the number to what the consumer told you about their life. On Glinda: &ldquo;You told me you live on a low income — what would an extra $240 a month for groceries and utilities do for your budget?&rdquo; On James: &ldquo;You came in burned about a false promise. Let me show you what the real number is: $2,512 more per year. How does that compare to what you were told?&rdquo; Step three is the only step the consumer actually feels.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>Before any exit, state the total package value</p>
                <p className={styles.workOnDetail}>On the Anthony Collins call you ran three separate benefit comparisons — OTC, dental, vision — but never added them up. The total across all three was approximately $3,700 more per year. That number, said once out loud, is more convincing than three separate figures. State the total: &ldquo;Across the OTC, the dental, and the vision — you are looking at almost $3,700 more in benefits every year on this plan.&rdquo; Consumers remember totals. They forget line items.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Coaching Session ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Coaching Session — April 15, 2026</h2>
          <p style={{ fontSize: '0.75rem', color: 'var(--ink-60)', marginBottom: '1rem' }}>Session with Jon Hall · Calls reviewed: Glinda Robinson, Not Stated (4:14), Not Stated (6:26)</p>
          <div className={styles.workOnList}>
            {coachingSession.map((n) => (
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
          <p>The Certainty System · Tavares Smith · Week of April 13–17, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC2 · RC3 · Emotional Reframe · Math Step 3 · Callback Ownership</p>
        </div>

      </div>
    </PageShell>
  )
}
