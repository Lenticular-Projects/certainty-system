'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Weekly Brief: April 13, 2026 + Coaching Session April 15 ────────────────

const callsByDate = [
  {
    date: 'Monday, April 13',
    calls: [
      { consumer: 'Glinda Robinson', duration: '53:44', score: 53, outcome: 'MISSED OPPORTUNITY', type: 'The Detail Staller', href: '/agents/tavares-smith/calls/glinda-robinson' },
      { consumer: 'Not Stated', duration: '4:14', score: 35, outcome: 'MISSED OPPORTUNITY', type: 'Commercial Myth Caller', href: '/agents/tavares-smith/calls/not-stated-4m14s' },
      { consumer: 'Not Stated', duration: '6:26', score: 32, outcome: 'MISSED OPPORTUNITY', type: 'The Scared Switcher', href: '/agents/tavares-smith/calls/not-stated-6m26s' },
    ],
  },
]

const patterns = [
  {
    title: 'Logic against emotion — all three calls',
    rc: 'RC2',
    urgency: 'critical' as const,
    summary: 'Every call hit the same wall: consumer pushed back emotionally, you explained the product. Glinda\'s insurance lady (49:29) → you tried to replace the relationship. New enrollee afraid of giving info → you explained system security. Logic doesn\'t reach fear.',
    fix: 'Name the feeling first, then one small ask. "That makes complete sense — you should never give info until you\'re comfortable. Let me tell you how the card benefit works without any personal info first."',
  },
  {
    title: 'Passive callbacks release leads permanently',
    rc: 'RC1',
    urgency: 'high' as const,
    summary: '4:14 call: consumer in the street, you ended with "give us a call back whenever." That callback won\'t happen. The consumer had a reason to call — you had them live. At 4:05 you still had the lead.',
    fix: 'Detective work: "What\'s the first number of your social? Just that one." You\'re jogging memory, not demanding PII. Pull on the thread before releasing the line.',
  },
  {
    title: 'Math breakdown stops one step before the close',
    rc: 'RC3',
    urgency: 'medium' as const,
    summary: 'Glinda: ran Steps 1 and 2 (plan comparison, $2,880 annualized). Step 3, Humanization, was never delivered. She told you at 2:23 she lives on low income — that was the bridge that closes it.',
    fix: '"That\'s $250 more a month for groceries and utilities. You mentioned you\'re on a low income — what would that extra money mean for your budget?" That question is the close.',
  },
]

const coachingSession = [
  {
    num: '01',
    title: 'AJ\'s technique: "What question would you ask your insurance lady?"',
    detail: '"That makes sense. What\'s the one question you\'d want to ask her? I have the full plan details right here — I can likely answer it right now." Shifts the dynamic: instead of you defending yourself, the consumer has to think. If they can\'t come up with a question, you\'ve made the case.',
  },
  {
    num: '02',
    title: 'Cut all permission-seeking language',
    detail: 'No "if you want," no "regrettably," no "if you\'re interested." You\'re a licensed professional. Direct: "I need your full name, date of birth, and social." You corrected this mid-day Monday and people started giving the info up — keep going.',
  },
  {
    num: '03',
    title: 'Give context before asking for personal info',
    detail: 'Educate on Medicare Advantage first: "With just Part A and Part B, you won\'t get any food card, OTC benefit, dental, or Part B give-back. Once I look up your account, I\'ll give you your Medicare number right now so you have it before your card arrives." Now the info request serves them.',
  },
  {
    num: '04',
    title: 'Frame what they\'re losing — loss aversion is 2× more powerful',
    detail: '"You\'ve already been on the phone four minutes. If we take care of this now, you don\'t have to call back, navigate hold times, start from scratch. You can walk away with the benefit locked in." Frame the cost of inaction, not just the benefit of acting.',
  },
]

const pastReports = [
  { title: 'Weekly Brief — April 13 + Coaching Apr 15', type: 'Weekly Brief', date: 'Apr 15, 2026', score: '40 / 100', active: true },
  { title: 'Daily Brief — April 13', type: 'Daily Brief', date: 'Apr 14, 2026', score: '40 / 100', active: false },
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
          <p className={styles.updatedAt}>Updated April 15 · 3 calls reviewed + coaching session</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(40) }}>40</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>Mon · 3 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>3</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 13, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>0</span>
            <span className={styles.scoreLabel}>Enrolled</span>
            <span className={styles.scoreRange}>3 Missed Opportunity</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)' }}>RC2</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Logic vs. Emotion — 3 calls</span>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a consumer resists, stop explaining why the plan is good — acknowledge why the hesitation is real, then give them one reason to stay on the line for 60 more seconds.</p>
        </motion.div>

        {/* ── This Week's Calls — grouped by date ── */}
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
                    <span className={`${styles.pill} ${outcomeClass(call.outcome)}`}>{call.outcome}</span>
                    <span className={styles.callType}>{call.type}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className={styles.callTableFooter}>
            <span>Week Average: <strong>40 / 100</strong></span>
            <span>Enrolled: <strong>0 of 3</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Glinda Robinson (04-13):</strong> 53 minutes of real discovery work. Compliance clean, INT/DEP SEP correctly identified, plan comparison built with specific dollar figures, doctor and drug verification completed. The technical case was complete — the only missing piece was the humanization that closes it.</p>
            <p><strong>Self-correction (4:14 call):</strong> You caught yourself using &quot;if you want&quot; mid-day and adjusted. Went direct — people started giving up the info. That real-time adjustment is the skill that makes improvement compound.</p>
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
                <p className={styles.priorityDetail}>{p.summary}</p>
                <p className={styles.priorityDetail} style={{ fontStyle: 'italic', opacity: 0.75, marginTop: '0.25rem' }}>
                  Instead: {p.fix}
                </p>
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
                <p className={styles.workOnTitle}>Validate → small ask (never justify → push)</p>
                <p className={styles.workOnDetail}>&ldquo;That makes complete sense.&rdquo; — then one small ask. Every time. The sequence is always validate first, then ask. Never explain the plan when someone is in fear.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>Social refusal → ask for the first three numbers</p>
                <p className={styles.workOnDetail}>&ldquo;Do you remember the first three numbers? Just those three.&rdquo; Jog memory. Don&apos;t demand — pull on the thread. Most people know their social. This shifts the dynamic from confrontation to collaboration.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>Humanize the number — that&apos;s the close</p>
                <p className={styles.workOnDetail}>After annualizing: &ldquo;You mentioned you&apos;re on a low income — what would an extra $250 a month for groceries and utilities mean for your budget?&rdquo; Step 3 is the close. Never skip it.</p>
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
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC2 · RC3 · Emotional Reframe · Loss Aversion · Permission Language</p>
        </div>

      </div>
    </PageShell>
  )
}
