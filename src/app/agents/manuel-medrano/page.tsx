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
      { consumer: 'Carol Hill', duration: '27:22', score: 32, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'The Compliant Non-Closer', href: '/agents/manuel-medrano/calls/carol-hill' },
    ],
  },
]

const patterns = [
  {
    title: 'Medicaid confirmed — AEP callback given instead of INT SEP',
    rc: 'RC6',
    urgency: 'critical' as const,
    body: 'When a consumer confirms Medicaid, that opens an INT SEP — enrollment available right now, not in October. This is one of the most important SEP triggers in the system. If you don\'t name it, the consumer has no reason to enroll today. "AEP" sounds like a wall. "You can enroll right now because of Medicaid" sounds like an open door. The framing you use determines whether the call closes.',
    rule: 'The moment Medicaid is confirmed, name the enrollment window. Do not wait. Do not continue to the next topic. Say it immediately.',
    callRef: 'Carol Hill\'s Medicaid was confirmed at 8:27. At 23:03, you told her she\'d need to wait for AEP. She was cooperative and ready to follow your lead the whole call.',
    moveLabel: 'When Medicaid is confirmed:',
    move: '"Ms. Hill, because you have Medicaid, you have a special enrollment window open right now — not just in October. Let\'s get you into this plan today."',
  },
  {
    title: 'DST SEP named to the consumer — compliance violation',
    rc: 'RC4',
    urgency: 'critical' as const,
    body: 'Disaster SEPs are a CMS-authorized tool agents can use internally to open an enrollment window in affected areas. They are not something agents are permitted to explain to consumers or invoke by name. Mentioning the storm, naming the SEP type, or explaining its basis to the consumer is an audit exposure event — regardless of whether the DST would have been valid in this case. When Medicaid was already confirmed, INT SEP was the only tool needed.',
    rule: 'Never name a disaster SEP to a consumer. Process it silently, or don\'t use it. When Medicaid is present, INT SEP is your answer.',
    callRef: 'At 21:52, you told Carol that "CMS has opened a special enrollment period for residents of affected counties" due to a winter storm. That invocation was the violation, not the exit.',
    moveLabel: 'If ever using DST in the future:',
    move: '"We\'re processing your enrollment under a Special Enrollment Period that applies to your situation." That\'s it. Nothing more.',
  },
  {
    title: 'Three Client Gold moments heard and not deployed',
    rc: 'RC2',
    urgency: 'high' as const,
    body: 'Client Gold is the emotional truth a consumer gives you that makes the enrollment personal. When you hear it, you stop and use it. Carol gave you three: her dog staying with her when she fell, living alone at 91, and "she had my last breath." Those aren\'t background details — they\'re the close. The plan\'s annual benefit is $3,012. That number means something different connected to her life than it does as a standalone figure.',
    rule: null,
    callRef: 'Carol\'s dog story, her fall, and her comment about "my last breath" all came through clearly on the call. None of them were reflected back or used to anchor the benefit.',
    moveLabel: 'When the Client Gold moment arrives:',
    move: '"That story about your dog staying with you when you fell — that\'s exactly why we need to get this handled today. This plan puts $251 a month in your pocket and your doctor is already in-network. Let\'s do it."',
  },
]

const pastReports = [
  { title: 'Weekly Brief — April 13–17', type: 'Weekly Brief', date: 'Apr 16, 2026', score: '32 / 100', active: true },
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

export default function ManuelMedranoPage() {
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
          <h1 className={styles.agentName}>Manuel Medrano</h1>
          <p className={styles.period}>Week of April 13–17, 2026</p>
          <p className={styles.updatedAt}>Updated April 16 · 1 call reviewed (Mon)</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(32) }}>32</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>Mon · 1 call</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>1</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 13, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>0</span>
            <span className={styles.scoreLabel}>Enrolled</span>
            <span className={styles.scoreRange}>1 Missed Opportunity</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>RC6</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Missed INT SEP</span>
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p>This is the Carol Hill call from Monday — a 27-minute conversation with a 91-year-old consumer who was cooperative, trusted you, and gave you everything you needed to enroll her. What we&apos;re working through is what happened in the moments where the close was right there.</p>
            <p><strong>What&apos;s working:</strong> your patience with Carol was real and it mattered. She&apos;s 91, living alone, and needed extra time with every number — SSNs, medication names, phone numbers. You handled every confusion with warmth and never showed frustration. That kept her on the phone and trusting you for 27 minutes. You also annualized the benefit immediately when she asked: &ldquo;$3,000 a year&rdquo; came out fast and correctly. That&apos;s the right instinct.</p>
            <p><strong>What&apos;s costing you:</strong> two things, and one of them has a compliance dimension. Medicaid was confirmed at 8:27 — that opened an INT SEP, which means enrollment available today, not in October. You told her AEP instead. And at 21:52, you named the disaster SEP to her directly, which is a CMS violation. The enrollment was achievable. The path closed because the wrong tools were named at the wrong moment.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>Your warmth is what keeps consumers on the phone &mdash; and that&apos;s a real skill, because without it the call ends before the plan ever gets presented. The move that turns that warmth into closes is using it to push forward instead of ease out: &ldquo;I want to make sure we get this handled for you today while I have you.&rdquo; You built the case, you found the plan, the consumer trusts you. Now assume they&apos;re saying yes and walk them through the enrollment. That&apos;s the job.</p>
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
            <span>Week Average: <strong>32 / 100</strong></span>
            <span>Enrolled: <strong>0 of 1</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Your patience with Carol was the only reason the call lasted 27 minutes.</strong> She&apos;s 91, living alone, and needed extra time with every piece of information. You handled every confusion with consistent warmth — no frustration, no rushing her, no shortcuts. That kept her trusting you. Most agents lose consumers like Carol in the first five minutes.</p>
            <p><strong>You annualized the benefit immediately when she asked.</strong> At 24:26, Carol asked what the annual benefit was. You answered immediately: &ldquo;$3,000 a year.&rdquo; That&apos;s the right instinct and the right answer. The number was in front of her. The next step — connecting it to her specific life — is the work for next time.</p>
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
                <p className={styles.workOnTitle}>Execute INT SEP the moment Medicaid is confirmed</p>
                <p className={styles.workOnDetail}>Medicaid confirmed = enrollment window open now. Say it immediately: &ldquo;Because you have Medicaid, your enrollment window is open right now — not just in October. That means we can get you into this plan today. I just need a few more pieces and we&apos;re done before we hang up.&rdquo; You already have the qualification — use it.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>Connect the dollar amount to their actual life</p>
                <p className={styles.workOnDetail}>You got to $3,000 a year — that&apos;s the number. The next step is tying it to Carol: &ldquo;That&apos;s your dog food, your Tylenol, your personal care items. That&apos;s your daughter not having to pick up your over-the-counter supplies every visit. Real money in your pocket.&rdquo; Numbers alone don&apos;t close. Numbers tied to a person&apos;s life do.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>Medication blocker: try the pharmacy first</p>
                <p className={styles.workOnDetail}>When the medication list isn&apos;t available: &ldquo;No problem — you mentioned Drug Mart in New Philly has your records on file. Can I call them right now while we&apos;re on the line? That takes about two minutes.&rdquo; Carol gave you the workaround. Try it before converting to a callback.</p>
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
          <p>The Certainty System · Manuel Medrano · Week of April 13–17, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC6 · RC4 · RC2 · RC1 · INT SEP · DST Compliance · Client Gold</p>
        </div>

      </div>
    </PageShell>
  )
}
