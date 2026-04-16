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
      { consumer: 'Unknown Consumer', duration: '4:17', score: 42, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'The Money Caller', href: '/agents/monique-williams/calls/unknown-consumer-4m17s' },
      { consumer: 'Unknown Consumer', duration: '3:39', score: 42, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'The Money Caller', href: '/agents/monique-williams/calls/unknown-consumer-3m39s' },
      { consumer: 'Unknown Consumer', duration: '3:17', score: 32, outcome: 'INCOMPLETE', outcomeNote: 'Consumer disconnected', type: 'The Money Caller', href: '/agents/monique-williams/calls/unknown-consumer-3m17s' },
    ],
  },
  {
    date: 'Tuesday, April 14',
    calls: [
      { consumer: 'Eva Mitchell', duration: '8:27', score: 57, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'Brand Loyal — Correct No-Sale', href: '/agents/monique-williams/calls/eva-mitchell' },
      { consumer: 'Margaret Atwell', duration: '47:36', score: 22, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: '47-Minute Call — Close Never Attempted', href: '/agents/monique-williams/calls/margaret-atwell' },
      { consumer: 'Unknown Consumer', duration: '6:12', score: 28, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Food Card — No Dollar Amount Stated', href: '/agents/monique-williams/calls/unknown-consumer-6m12s' },
      { consumer: 'Warren Shelton', duration: '51:54', score: 38, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'Compliance Concern — Correct No-Sale', href: '/agents/monique-williams/calls/warren-shelton' },
    ],
  },
]

const patterns = [
  {
    title: 'The food card acknowledged — never deployed as the close',
    rc: 'RC2',
    urgency: 'critical' as const,
    body: 'Every call this week came in through the same door: someone saw a grocery card ad and called. On every call, the food card was acknowledged early and then the conversation moved on to other topics. That card is not a topic to acknowledge and move past — it\'s the reason for the call, the value anchor, and the enrollment engine. Every question you ask should be in service of delivering it.',
    rule: 'Name the food card benefit in the first two minutes. State the dollar amount as soon as you have their ZIP. Build everything else around it.',
    callRef: 'Across all eight calls, the food card was confirmed as the reason for calling. On each call, the dollar amount was either stated late, stated without anchoring to the close, or never stated at all.',
    moveLabel: 'When the food card is the reason they called:',
    move: '"The food card benefit is available in your area — give me your zip code and I\'ll pull up exactly what you qualify for right now." Then every question runs in service of delivering it.',
  },
  {
    title: 'Product list before value anchor — caller said "too complicated"',
    rc: 'RC1',
    urgency: 'high' as const,
    body: 'When a consumer calls about one specific benefit and the first response is a list of all the product types you offer, you\'ve created a complexity problem before the value is established. The consumer doesn\'t know what they\'re choosing from. They don\'t know what the food card has to do with MAPD, PDP, Medigap, or stand-alone dental. The menu is confusing before they know what they\'re ordering.',
    rule: null,
    callRef: 'On the Monday call with an Unknown Consumer, all product types were listed before the food card value was anchored. The consumer said "it\'s getting too complicated" and the call effectively ended.',
    moveLabel: 'Value first — product menu never:',
    move: '"Tell me your zip code and I\'ll show you exactly what\'s available in your area. The benefit we\'re looking at is your grocery card — let\'s start there and see what you qualify for."',
  },
  {
    title: 'Dead air during research — consumer doesn\'t know what\'s happening',
    rc: 'RC1',
    urgency: 'medium' as const,
    body: 'When you go quiet during a system lookup, the consumer has no signal that anything is happening. They don\'t know if you\'re still on the line, if something went wrong, or if the call dropped. Two minutes of silence reads as abandonment. One line every 30 seconds costs you nothing and keeps the consumer anchored to the call.',
    rule: null,
    callRef: 'On a Monday call, silent periods ran from 1:27 through approximately 4:02 without a check-in. The consumer did not know what was happening.',
    moveLabel: 'Every 30 seconds during any lookup:',
    move: '"Still pulling this up for you, hang tight — just a moment." One line. Every time. Without exception.',
  },
]

const pastReports = [
  { title: 'Weekly Brief — April 13–17', type: 'Weekly Brief', date: 'Apr 16, 2026', score: '38 / 100', active: true },
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
          <p className={styles.updatedAt}>Updated April 16 · 8 calls reviewed (Mon–Tue)</p>
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
            <span className={styles.scoreRange}>4 Missed · 2 Incomplete</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)' }}>RC2</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Food card never deployed</span>
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p>These are eight calls from Monday and Tuesday — four missed opportunities, two correct no-sales, and two incompletes. Every call came in through the same door: the food card. What we&apos;re working through is why that card was acknowledged on every call and deployed as the close on none of them.</p>
            <p><strong>What&apos;s working:</strong> your correct no-sales were both called correctly. Eva Mitchell was brand-loyal with no real reason to switch, and Warren Shelton presented a compliance concern that made the right call a no-sale. You read both situations accurately and didn&apos;t push. That judgment matters. You also showed real self-awareness after one of the calls — you debriefed yourself accurately and knew exactly what went wrong. That analytical clarity is real. The gap isn&apos;t awareness. It&apos;s running that same analysis in real time while the consumer is still on the line.</p>
            <p><strong>What&apos;s costing you:</strong> the food card was acknowledged and dropped on every money caller this week. That card is the reason they called and the reason they&apos;ll enroll — but only if you connect it to a dollar amount and keep it at the center of every question you ask. The complexity objection on one call ("it&apos;s getting too complicated") came directly from leading with the product menu before the value was established. Anchor the food card first. Everything else follows.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>The food card is not a topic you acknowledge and move past — it&apos;s the enrollment offer, and every question you ask is in the service of delivering it.</p>
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
            <p><strong>Both correct no-sales were called accurately.</strong> Eva Mitchell was brand-loyal with no compelling reason to switch, and Warren Shelton presented a compliance concern that made the no-sale the right outcome. You read both situations without pushing. Knowing when not to close is a real skill — it protects your relationship and your compliance record, and it&apos;s not something every agent gets right.</p>
            <p><strong>Your post-call awareness is sharp.</strong> After one of the calls this week, you debriefed yourself accurately — you knew what happened and what the right move would have been. That analytical clarity is real and it matters. The next step is running that same read in real time, while the consumer is still on the line. You already know what you need to do. The work is applying it in the moment.</p>
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
                <p className={styles.workOnTitle}>The food card is the close — not just the opening</p>
                <p className={styles.workOnDetail}>When a consumer says they&apos;re calling about the grocery card: &ldquo;That benefit is available in your area — give me your zip code and I&apos;ll show you exactly what you qualify for.&rdquo; Then every question runs in service of unlocking that card. Don&apos;t acknowledge it and move on. Build the whole call around it.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>One reframe before every release</p>
                <p className={styles.workOnDetail}>Before you offer any callback or let a consumer go, say one thing that gives them a reason to stay. &ldquo;You don&apos;t need the card — I can look you up with just your date of birth and zip code. What&apos;s your birthday?&rdquo; One sentence keeps the call alive. A callback offer without a reframe first is a lead you chose to release.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>When the call goes quiet, name it</p>
                <p className={styles.workOnDetail}>During any system lookup: &ldquo;Still pulling this up for you, hang tight.&rdquo; Every 30 seconds. Your Monday call showed multiple minutes of silence — that silence is what disconnects consumers before you can get back to them.</p>
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
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC2 · The Money Caller · Value Anchor Before Qualification</p>
        </div>

      </div>
    </PageShell>
  )
}
