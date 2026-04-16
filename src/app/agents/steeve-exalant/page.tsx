'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Weekly Brief: April 14, 2026 ─────────────────────────────────────────────

const callsByDate = [
  {
    date: 'Tuesday, April 14',
    calls: [
      { consumer: 'Timothy Hemingway', duration: '45:08', score: 72, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'Complex — Textbook Counsel and No-Sale', href: '/agents/steeve-exalant/calls/timothy-hemingway' },
      { consumer: 'Unknown Consumer', duration: '1:44', score: 52, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'The Skeptic', href: '/agents/steeve-exalant/calls/unknown-consumer-1m44s' },
      { consumer: 'Unknown Consumer', duration: '3:26', score: 62, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'The Money Caller', href: '/agents/steeve-exalant/calls/unknown-consumer-3m26s' },
    ],
  },
]

const patterns: { title: string; rc: string; urgency: 'critical' | 'high' | 'medium'; body: string; rule: string | null; callRef: string; moveLabel: string; move: string }[] = [
  {
    title: 'You described the move — but didn\'t make the ask',
    rc: 'RC1',
    urgency: 'high' as const,
    body: 'Describing a strategy and asking for the enrollment are two different things. On the Timothy Hemingway call, you introduced a sound month-to-month approach — specific plan, specific benefit amount, specific timeline — and presented it as a possibility instead of a close. Any time you name a plan, a dollar amount, and a timeline in the same sentence, the next sentence has to be a direct question. If you don\'t ask, the consumer leaves with information and no action.',
    rule: 'Every strategy you describe, every benefit you name, every plan you introduce ends with: "Do you want me to get that done right now?"',
    callRef: 'Timothy told you at 9:29 that his fridge was empty and he was two years behind on electric. At 35:09 you described the WellPoint month-to-month strategy in detail. The ask — "Do you want me to get that done right now?" — never came.',
    moveLabel: 'Strategy described, urgency real — convert description to ask.',
    move: '"Mr. Hemingway, I want to come back to something you told me — you said your fridge is empty right now and you\'re two years behind on electric. That\'s exactly what this $175 card solves. I can enroll you in WellPoint today, the card loads within a week. Do you want me to get that done right now?"',
  },
  {
    title: 'Build one reframe for the MBI objection and deploy it every time',
    rc: 'RC1',
    urgency: 'high' as const,
    body: '"I\'ve been told not to give that out over the phone" is the most common objection seniors give on inbound calls. It is not unusual, and it is not a hard no. It is a trust gap that closes with a prepared explanation. Your Medicare ID is different from your Social Security number — it only shows what plan you\'re on, nothing else, and it can\'t access any account or change any benefit. That explanation, followed by a soft ask about the card, keeps the call alive without pressure.',
    rule: null,
    callRef: 'On the Sevier County call at 1:26, the consumer said she\'d been told not to give out her Medicare number. Your response was: "if you\'re not willing to give that out, then we can\'t help you." The consumer said "okeydoke, bye-bye." She was still open.',
    moveLabel: 'Consumer refuses Medicare number — reframe, then soft ask.',
    move: '"That\'s a really smart habit. Here\'s what I want you to know: your Medicare ID is completely different from your Social Security number. It only shows what plan you\'re currently on — it can\'t touch any accounts or change any benefits. In Sevier County, you could get up to $174 a month credited back to your Social Security check. Is your card somewhere you can grab it from, or would you like a minute to look?"',
  },
  {
    title: 'Lead with the dollar amount before you ask for the card',
    rc: 'RC2',
    urgency: 'medium' as const,
    body: 'When a consumer calls in about a specific benefit — the Part B giveback, a grocery card, an OTC allowance — they want to know how much before they want to know anything else. The dollar amount creates an emotional stake in the outcome. Without it, the MBI ask feels like a one-sided exchange: you\'re asking for something before you\'ve given anything. Give them the number first. The ask that follows has a reason behind it.',
    rule: null,
    callRef: 'The Sevier County consumer opened the call by asking about the Part B giveback by name. The MBI ask came 73 seconds later. She never heard a dollar amount. When the ask came, she had no stake in the outcome.',
    moveLabel: 'Consumer asks about Part B giveback — state the number first.',
    move: '"The Part B giveback is real — plans in Sevier County return up to $174 a month directly to your Social Security check. That\'s over $2,000 a year. Let me grab two quick compliance pieces and then we\'ll see exactly what you qualify for."',
  },
]

const pastReports = [
  { title: 'Weekly Brief — April 14', type: 'Weekly Brief', date: 'Apr 16, 2026', score: '62 / 100', active: true },
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

export default function SteeveExalantPage() {
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
          <h1 className={styles.agentName}>Steeve Exalant</h1>
          <p className={styles.period}>Week of April 13–17, 2026</p>
          <p className={styles.updatedAt}>Updated April 16 · 3 calls reviewed (Tue)</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(62) }}>62</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>Tue · 3 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>3</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>2</span>
            <span className={styles.scoreLabel}>Correct No-Sales</span>
            <span className={styles.scoreRange}>Highest avg on team this week</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)' }}>RC1</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Strategy described — ask not made</span>
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p>These are the calls we pulled this week where the conversation was fully alive — including one that went 45 minutes and required real clinical judgment. What we&apos;re working through is the distance between describing the right move and making the ask that converts it into an enrollment.</p>
            <p><strong>What&apos;s working:</strong> the Timothy Hemingway call is the one to study. At 8:28 — eight minutes in, with a real commission on the table — you told him clearly that you wouldn&apos;t recommend enrolling him unless he was willing to switch doctors, and you already knew he wasn&apos;t going to do that. You then spent the next 37 minutes checking every doctor he named across multiple networks to confirm your recommendation was right. That is clinical judgment exercised in real time. Most agents push past that moment. You didn&apos;t. That call scored 72 despite no enrollment because everything was right.</p>
            <p><strong>What&apos;s costing you:</strong> on both the Hemingway call and the Sevier County call, you found the right move and stopped one step short of making it. On Hemingway, the month-to-month strategy was sound, the urgency was real, and the ask never came. On the Sevier County call, the consumer was still open when the call ended — you had one reframe left and didn&apos;t use it. The move you know is the move you need to complete.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>You explain strategies with real precision &mdash; the plan, the benefit, the timeline &mdash; and that builds genuine trust. The move that turns those explanations into enrollments is a direct ask at the end of every one: &ldquo;Do you want me to get that done right now?&rdquo; Every strategy you describe, every benefit you name, every plan you lay out is the setup &mdash; that one sentence is the close. Assume they&apos;re saying yes. That&apos;s where the enrollment lives.</p>
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
            <span>Week Average: <strong>62 / 100</strong></span>
            <span>Correct No-Sales: <strong>2 of 3</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>The Timothy Hemingway call is the highest-integrity call in this week&apos;s batch. You identified that his cerebral palsy specialist was the only thing keeping his pain managed, understood immediately what that meant for every MA plan you could offer, and told him clearly at 8:28 that you wouldn&apos;t recommend enrolling him without a doctor switch you knew he wasn&apos;t going to make. Then you spent 37 more minutes checking every doctor he named to confirm your recommendation was right. At 16:15, when you found that WellPoint showed one of his doctors as in-network on paper but confirmed the practice refuses MA patients, you disclosed that discrepancy instead of using it to push an enrollment. That is due diligence that protects a real person&apos;s healthcare — and it is a skill that many agents on this team do not have.</p>
            <p>Your scam concern handling on the Georgia call was also textbook. When the consumer asked "this ain&apos;t no scam, anything?" at 1:36, you responded with calm authority, referenced the recorded line as proof of legitimacy, and her tone softened immediately. No defensiveness, no over-explanation. And when both her MBI and SSN were declined, you released cleanly without pressure — "not a problem, when you change your mind, you can always give us a call back." Knowing when to stop is a real skill. You had it on that call.</p>
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
                <p className={styles.workOnTitle}>Recognize the month-to-month close — make the ask</p>
                <p className={styles.workOnDetail}>When you introduce a specific plan with a named benefit and a timeline, the next sentence is always the direct ask. &ldquo;I can enroll you in WellPoint today — that&apos;s $175 on a prepaid card loaded within a week. If the situation changes before your appointment, you call me and we revisit. Do you want me to get that done right now?&rdquo; Describing the move and asking for the move are two different things.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>Build the MBI reframe — deploy it every time</p>
                <p className={styles.workOnDetail}>The response to "I was told not to give that out over the phone" is always: explain that the Medicare ID is not connected to financial accounts, state the specific dollar benefit they can get, and ask softly if the card is somewhere they can grab it. One prepared sentence for each piece. Practice it until it&apos;s automatic. The consumer on the Sevier County call was ready to stay on the line.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>State the dollar amount before you ask for anything</p>
                <p className={styles.workOnDetail}>When a consumer calls in about a specific benefit, the number comes before the ask. &ldquo;Plans in Sevier County return up to $174 a month directly to your Social Security — that&apos;s over $2,000 a year. Let me grab two quick compliance pieces and then we&apos;ll check what you qualify for.&rdquo; Value first. Ask second. The consumer should have a stake in the outcome before you ask for anything.</p>
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
          <p>The Certainty System · Steeve Exalant · Week of April 13–17, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC2 · Month-to-Month · MBI Reframe · Part B Giveback · Timothy Hemingway: Correct No-Sale</p>
        </div>

      </div>
    </PageShell>
  )
}
