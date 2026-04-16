'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Weekly Brief: April 13–15, 2026 + Coaching Session April 15 ─────────────

const callsByDate = [
  {
    date: 'Monday, April 13',
    calls: [
      { consumer: 'Glinda Robinson', duration: '53:44', score: 53, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Detail Staller / Scared Switcher', href: '/agents/tavares-smith/calls/glinda-robinson' },
      { consumer: 'Not Stated', duration: '4:14', score: 35, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Commercial Myth Caller', href: '/agents/tavares-smith/calls/not-stated-4m14s' },
      { consumer: 'Not Stated', duration: '6:26', score: 32, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Scared Switcher (New Enrollee)', href: '/agents/tavares-smith/calls/not-stated-6m26s' },
    ],
  },
  {
    date: 'Tuesday, April 14',
    calls: [
      { consumer: 'Cynthia Nelson', duration: '18:23', score: 62, outcome: 'INCOMPLETE', outcomeNote: 'Presentation started — not completed', type: 'Benefit Seeker / C-SNP Candidate', href: '/agents/tavares-smith/calls/cynthia-nelson' },
      { consumer: 'Unknown Consumer', duration: '11:40', score: 57, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'Gatekeeper Block', href: '/agents/tavares-smith/calls/unknown-consumer-11m40s' },
      { consumer: 'Unknown Consumer', duration: '5:38', score: 42, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Scam-Resistant Caller', href: '/agents/tavares-smith/calls/unknown-consumer-5m38s' },
    ],
  },
]

const patterns = [
  {
    title: 'When a consumer pushes back emotionally — stop explaining, start acknowledging',
    rc: 'RC2',
    urgency: 'critical' as const,
    body: 'Logic doesn\'t move people who are feeling something. When Glinda mentioned her insurance lady, she wasn\'t asking you to replace that relationship — she was afraid. When the new enrollee was resistant about sharing information, she wasn\'t skeptical of Medicare — she was scared. When the scam-resistant caller pushed back, he wasn\'t uninformed — he was cautious. In every case, explaining the product made it worse. The pattern to replace it: name the feeling first, then one small forward ask. The explanation comes after the acknowledgment, never instead of it.',
    rule: 'When you hear resistance, name what they\'re feeling before you say anything else.',
    callRef: 'On the Glinda Robinson call at 49:29, Glinda mentioned her insurance lady. You offered to replace the agent. That\'s a logic move against a loyalty objection. She wasn\'t asking for a replacement. She was afraid of making the wrong decision.',
    moveLabel: 'Consumer raises a loyalty objection — name it, then shrink the ask.',
    move: '"That makes complete sense — it\'s important to have someone you trust with this. What specific question were you hoping she could answer for you? I have the full plan details right here, so let\'s see if I can answer it right now."',
  },
  {
    title: 'Math breakdown stops at step two — humanization is where the close lives',
    rc: 'RC3',
    urgency: 'high' as const,
    body: 'The math breakdown has three steps: compare, annualize, humanize. You ran steps one and two on the Glinda Robinson call — plan comparison, $2,880 annualized. You stopped before step three. The humanization is the only step the consumer actually feels. It turns a calculation into a decision. Glinda told you at 2:23 she lives on low income. That was the bridge. "$2,880 more a year — what would an extra $240 a month for groceries and utilities mean for your budget?" That question is the close. It was never asked.',
    rule: null,
    callRef: 'On Glinda Robinson, you annualized $2,880 at 47:35 and moved on without connecting it to what she told you at 2:23. The number was real. It just never became personal.',
    moveLabel: 'Annual figure stated — humanize immediately.',
    move: '"Glinda, that\'s nearly $3,000 more in your pocket next year. You told me you\'re on a low income — what would an extra $240 a month for groceries and utilities mean for you each month?"',
  },
  {
    title: 'Passive call exits release leads permanently',
    rc: 'RC1',
    urgency: 'medium' as const,
    body: 'When a call ends without a specific commitment — a booked callback time, a confirmed next step, anything with a date and time attached — the lead goes cold. "Give us a call back whenever" places the burden on the consumer to re-initiate. The probability of that happening is close to zero. Before any call ends without an enrollment, commit to a specific time. If the consumer gives you a window, hold it.',
    rule: null,
    callRef: 'Two calls ended with open passive exits: "whenever you can get to that information, give us a call back" on the 4:14 Oklahoma call, and "whenever you are ready with your daughter, you can always give us a call back" on the Waycross call. Both leads went cold.',
    moveLabel: 'Call ending without enrollment — book a specific time.',
    move: '"I have an opening tomorrow at 10 AM — can I call you then? If something comes up, just let me know and we\'ll reschedule. I want to make sure we get this handled for you."',
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
  { title: 'Weekly Brief — April 13–15', type: 'Weekly Brief', date: 'Apr 16, 2026', score: '47 / 100', active: true },
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
          <p className={styles.updatedAt}>Updated April 16 · 6 calls reviewed (Mon–Tue) + coaching session Apr 15</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(47) }}>47</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>Mon–Tue · 6 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>6</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 13–14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>1</span>
            <span className={styles.scoreLabel}>Correct No-Sale</span>
            <span className={styles.scoreRange}>3 Missed · 1 Incomplete</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)' }}>RC2</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Logic vs. emotion — 4 calls</span>
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p>These are the calls we pulled this week where the conversation was fully alive — consumers who stayed on the line through discovery and gave you real information to work with. What we&apos;re working through is what happened when resistance surfaced and where the call could have gone differently.</p>
            <p><strong>What&apos;s working:</strong> your best moment this week came on the Cynthia Nelson call. At 6:37, you asked the chronic condition screening question unprompted. When Cynthia disclosed her stroke, you confirmed it, pivoted cleanly to the C-SNP path, ran all three steps of the math breakdown, and closed assumptively at 13:01. That sequence — chronic condition screen, CSN identification, math delivery, assumptive close — is exactly what this system is built on. You have it.</p>
            <p><strong>What&apos;s costing you:</strong> on four calls this week — Glinda Robinson, the two Oklahoma calls, and the scam-resistant caller — a consumer pushed back emotionally and you responded with logic. Glinda&apos;s insurance lady was met with a replacement offer. The new enrollee&apos;s fear was met with system security explanations. The scam-resistant caller&apos;s caution was met with reassurance. None of those responses addressed what the consumer was actually feeling. When you hear resistance, stop explaining and start acknowledging — that pivot, consistently applied, changes the outcome rate.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a consumer pushes back, stop talking about the plan and start acknowledging what they&apos;re feeling — that&apos;s the only move that keeps them on the line.</p>
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
            <span>Week Average: <strong>47 / 100</strong></span>
            <span>Correct No-Sales: <strong>1 of 6</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>Your best moment this week was not the close — it was the question that made the close possible. On the Cynthia Nelson call at 6:37, you asked the chronic condition screening question unprompted, while the call was already moving in a different direction. When Cynthia disclosed her stroke at 6:46, you confirmed it immediately and pivoted: &ldquo;I wonder why they didn&apos;t give you a chronic conditions plan.&rdquo; That reframe positioned her current plan as a failure to serve her and elevated your expertise as the agent who caught what her previous carrier missed. From there, you ran the full math breakdown, annualized out loud, humanized it against her stated needs, and closed assumptively. That is the whole sequence working exactly as it should.</p>
            <p>You also caught yourself using permission-seeking language mid-day on Monday and adjusted in real time — went direct, and people started giving up the information. That kind of real-time self-correction is the skill that makes improvement compound. The faster you can catch and correct a pattern within a session, the less it costs you week over week.</p>
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
                <p className={styles.workOnTitle}>Validate → small ask — never explain → push</p>
                <p className={styles.workOnDetail}>&ldquo;That makes complete sense&rdquo; — then one small ask. Every time. The sequence is always validate first, then ask. Before you say a single informational word after a consumer expresses resistance, say one empathy sentence. Then redirect. Never explain the plan when someone is in fear.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>Humanize the number — that&apos;s where the close lives</p>
                <p className={styles.workOnDetail}>After every annualization, ask one humanizing question: &ldquo;You mentioned you&apos;re on a low income — what would an extra $240 a month for groceries and utilities mean for your budget?&rdquo; Step 3 of the math breakdown is the only step the consumer actually feels. Never skip it. The Glinda Robinson close was right there at 47:35.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>When a call can&apos;t close, book a specific time — not an open callback</p>
                <p className={styles.workOnDetail}>Before you end any call without an enrollment, commit to a specific time: &ldquo;I have an opening tomorrow at 10 AM — can I call you then?&rdquo; Open callbacks don&apos;t happen. Specific times do. If the consumer gives you a window, hold it and call. That sentence is the difference between a dead lead and a booked appointment.</p>
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
