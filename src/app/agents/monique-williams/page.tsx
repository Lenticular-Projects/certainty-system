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
      { consumer: 'Archie Daphne', duration: '4:02', score: 42, outcome: 'INCOMPLETE', outcomeNote: 'Discovery done — no presentation', type: 'The Money Caller', href: '/agents/monique-williams/calls/archie-daphne' },
      { consumer: 'Unknown Consumer', duration: '3:17', score: 32, outcome: 'INCOMPLETE', outcomeNote: 'Consumer disconnected', type: 'The Money Caller', href: '/agents/monique-williams/calls/unknown-consumer-3m17s' },
      { consumer: 'Unknown Consumer', duration: '3:39', score: 42, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'The Money Caller', href: '/agents/monique-williams/calls/unknown-consumer-3m39s' },
      { consumer: 'Unknown Consumer', duration: '4:17', score: 42, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'The Money Caller', href: '/agents/monique-williams/calls/unknown-consumer-4m17s' },
    ],
  },
  {
    date: 'Tuesday, April 14',
    calls: [
      { consumer: 'Eva Mitchell', duration: '8:27', score: 57, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'Brand Loyal — Correct No-Sale', href: '/agents/monique-williams/calls/eva-mitchell' },
      { consumer: 'Margaret Atwell', duration: '47:36', score: 22, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: '47-Minute Call — Consumer Walked Off', href: '/agents/monique-williams/calls/margaret-atwell' },
      { consumer: 'Unknown Consumer', duration: '6:12', score: 28, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Food Card — No Dollar Amount Stated', href: '/agents/monique-williams/calls/unknown-consumer-6m12s' },
      { consumer: 'Warren Shelton', duration: '51:54', score: 38, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'Compliance Concern — Correct No-Sale', href: '/agents/monique-williams/calls/warren-shelton' },
    ],
  },
]

const patterns = [
  {
    title: 'The food card is the close — not the opening topic you move past',
    rc: 'RC2',
    urgency: 'critical' as const,
    summary: 'Every call this week came in through the same door: someone saw a grocery card ad and called. The food card was acknowledged and dropped on every call. That card is not a topic to confirm and move past — it\'s the reason they called and the enrollment engine. Every question you ask should run in service of delivering it.',
    fix: 'Instead: "The food card benefit is available in your area — give me your zip code and I\'ll pull up exactly what you qualify for right now." Then every question runs in service of delivering it. The dollar amount comes as soon as you have their zip. Never drop the card.',
  },
  {
    title: 'When pacing kills a warm lead — say the benefit, then close',
    rc: 'RC1',
    urgency: 'critical' as const,
    summary: 'Margaret Atwell called in warm — no Advantage plan, no dental, lost Extra Help, chronic fibromyalgia. Six system delays and five unanswered frustration signals later, she said "40 freaking minutes — I\'m done" and walked off. The call had every ingredient for enrollment. It was lost to pacing, not to resistance. When a consumer says the call is taking too long, that is the close signal — they\'re asking to be done.',
    fix: 'Instead: When you hear "it\'s taking too long" — pivot immediately: "You\'re right. Here\'s the bottom line: zero premium, $45 a month OTC, dental covered, your doctor\'s in network. I just need 60 seconds for your voice authorization and you\'re covered." That\'s a close, not a defense.',
  },
  {
    title: 'Framing an enrollment as an address update is a compliance violation',
    rc: 'RC4',
    urgency: 'high' as const,
    summary: 'On the Warren Shelton call, after the consumer said "I\'m not changing my plan" four times, the enrollment was described as "updating your address in the Medicare system." That framing is misleading under CMS Rule 422.2268 — a plan enrollment must be disclosed as a plan enrollment, with explicit consent. Warren was ultimately a correct no-sale. The compliance risk was in how the conversation got there.',
    fix: 'Instead: "Mr. Shelton, what I\'m doing is enrolling you in a new plan. This replaces your current plan. Your doctor is in-network and the benefits are better. Do you understand this is a plan change and do you consent?" Consent must be informed. No exceptions.',
  },
]

const pastReports = [
  { title: 'Weekly Brief — April 13–17', type: 'Weekly Brief', date: 'Apr 20, 2026', score: '38 / 100', active: true },
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

export default function MoniqueWilliamsPage() {
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
          <h1 className={styles.agentName}>Monique Williams</h1>
          <p className={styles.period}>Week of April 13–17, 2026</p>
          <p className={styles.updatedAt}>Updated April 20 · 8 calls reviewed (Mon–Tue)</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(38) }}>38</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>Mon–Tue · 8 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>8</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 13–14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>2</span>
            <span className={styles.scoreLabel}>Correct No-Sales</span>
            <span className={styles.scoreRange}>4 Missed · 2 Incomplete · 0 Enrolled</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>RC2</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Food card acknowledged — never closed</span>
          </div>
        </motion.div>

        {/* ── Platform Numbers ── */}
        <motion.div style={{ marginBottom: '48px' }} {...SPRING}>
          <h2 className={styles.sectionTitle}>Platform Numbers</h2>
          <div className={styles.scorecardRow}>
            <div className={styles.scoreCard}>
              <span className={styles.scoreValue}>1</span>
              <span className={styles.scoreLabel}>Sales — Apr 13–17</span>
              <span className={styles.scoreRange}>1.64% conversion</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, marginTop: 4, color: 'var(--sage-dark)' }}>
                ↑ from 0 (0.00%) — first sale
              </span>
            </div>
            <div className={styles.scoreCard}>
              <span className={styles.scoreValue} style={{ color: 'var(--ink-60)' }}>$859</span>
              <span className={styles.scoreLabel}>CPA — Apr 13–17</span>
              <span className={styles.scoreRange}>Cost per sale</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, marginTop: 4, color: 'var(--ink-60)' }}>
                First sale: $859
              </span>
            </div>
            <div className={styles.scoreCard}>
              <span className={styles.scoreValue}>61</span>
              <span className={styles.scoreLabel}>Total Calls — Apr 13–17</span>
              <span className={styles.scoreRange}>51 billable</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--ink-60)', marginTop: 4 }}>
                Prior week: 74 calls
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p>Eight calls across Monday and Tuesday — four missed opportunities, two correct no-sales, two incompletes. Every call came in through the same door: the food card. What we&apos;re working through is why that card was acknowledged on every call and never deployed as the close on any of them.</p>
            <p><strong>What&apos;s working:</strong> your correct no-sales were both called right. Eva Mitchell was brand-loyal with no compelling reason to switch, and Warren Shelton&apos;s repeated refusals — combined with the compliance risk in how he was engaged — made the no-sale the correct outcome. You read both situations without pushing past a clear signal. That judgment matters and it&apos;s not something every agent gets right. Your compliance openings are consistent and clean across all eight calls.</p>
            <p><strong>What&apos;s costing you:</strong> two calls this week show the full picture. The Margaret Atwell call had every ingredient for an enrollment — warm inbound, no Advantage plan, lost Extra Help, chronic pain, motivated consumer — and it collapsed entirely to process pacing. Six system delays, five unanswered frustration signals, and the consumer walked off at 47 minutes. The Warren Shelton call ran 52 minutes against a consumer who said no four times, and included compliance-risky framing of the enrollment as an &ldquo;address update.&rdquo; Both calls needed a decision point much earlier: either pivot to a fast close or make a clean exit. The food card was the reason for every call this week — use it as the close, not just the opener.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a consumer signals frustration or fatigue, that is not a complaint &mdash; it is a close signal. They are asking to be done. The move is: &ldquo;You&apos;re right. Here&apos;s the bottom line: zero premium, $45 a month toward your groceries, dental covered, doctor in network. I just need 60 seconds. Let&apos;s get this done for you now.&rdquo; Lead with certainty, state the dollar amount, push for the enrollment.</p>
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
            <span>Week Average: <strong>38 / 100</strong></span>
            <span>Correct No-Sales: <strong>2 of 8</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Both correct no-sales were called right.</strong> Eva Mitchell was brand-loyal — she had a plan she trusted and no compelling reason to switch. Warren Shelton refused four times and the compliance picture complicated the path further. You read both situations and stopped pushing. That judgment is real and it protects you. Knowing when to let a call end cleanly is a skill not every agent has.</p>
            <p><strong>Your compliance openings are consistent.</strong> Recorded line, TPMO disclaimer, callback confirmation, decision-maker check — all eight calls opened correctly. That foundation matters. The work this week is what comes after it: the pivot from discovery to close, the food card as the engine of every answer, and the decision to push for enrollment when the consumer is ready instead of waiting for them to lead.</p>
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
                <div className={styles.priorityMove}>
                  <span className={styles.priorityMoveLabel}>Instead:</span>
                  <p className={styles.priorityMoveText}>{p.fix}</p>
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
                <p className={styles.workOnTitle}>Anchor the food card in the first two minutes — and keep it there</p>
                <p className={styles.workOnDetail}>When a consumer says they&apos;re calling about the grocery card: &ldquo;That benefit is available in your area — give me your zip code and I&apos;ll show you exactly what you qualify for right now.&rdquo; State the dollar amount as soon as you have their zip. Then every question runs in service of unlocking that card. Don&apos;t acknowledge it and move on. Build the whole call around it.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>When the consumer says the call is going long — pivot to a close, not a defense</p>
                <p className={styles.workOnDetail}>Margaret Atwell warned you five times. The right response to &ldquo;this is taking too long&rdquo; is: &ldquo;You&apos;re right. Here&apos;s where we are: zero premium, $45 a month OTC, dental covered, pain doctor in network. I need 60 seconds. Can we get this done for you?&rdquo; Defending the process is not a close. Every frustration signal is a close signal.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>After three refusals — make one tight pitch, then exit cleanly</p>
                <p className={styles.workOnDetail}>Warren Shelton said no four times across 52 minutes. After the third no, the move is one focused question: &ldquo;Mr. Shelton, what&apos;s your current plan&apos;s monthly grocery benefit? If it matches what I&apos;m showing you, we stop here.&rdquo; If he still says no — &ldquo;I respect that completely. Here&apos;s the benefit amount for your reference if you ever want to compare.&rdquo; Then end the call. Never describe enrollment as an address update.</p>
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
          <p>The Certainty System · Monique Williams · Week of April 13–17, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC2 · RC4 · The Money Caller · Pacing · Compliance Framing</p>
        </div>

      </div>
    </PageShell>
  )
}
