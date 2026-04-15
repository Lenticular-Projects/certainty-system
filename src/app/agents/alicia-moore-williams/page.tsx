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
      { consumer: 'Unknown', duration: '5:25', score: 32, outcome: 'MISSED OPPORTUNITY', type: 'The Money Caller', href: '/agents/alicia-moore-williams/calls/unknown-consumer-5m25s' },
      { consumer: 'Unknown', duration: '6:47', score: 26, outcome: 'MISSED OPPORTUNITY', type: 'The Money Caller', href: '/agents/alicia-moore-williams/calls/unknown-consumer-6m47s' },
    ],
  },
]

const patterns = [
  {
    title: 'Surrenders on first objection — both calls',
    rc: 'RC1',
    urgency: 'critical' as const,
    summary: 'Both calls ended the same way: consumer objected once → callback offered, no reframe. 5:25 call at 2:37: "What if I choose not to?" → offered callback. 6:47 call: "I had somebody check already" → sent to Medicare.gov. Both recoverable. Neither attempted.',
    fix: '"What did they find? Plans changed in 2026 and I\'m looking at your area right now — there are plans here with $150 a month for groceries. Give me two minutes and I\'ll tell you if what you have is the best available."',
  },
  {
    title: '"Do I get more money?" — buying signal ignored',
    rc: 'RC2',
    urgency: 'high' as const,
    summary: '5:25 call: consumer asked whether they\'d get more money on their card. That\'s a HOT buying signal — the consumer is telling you they\'d switch if the answer is yes. You acknowledged it once and never came back.',
    fix: '"Yes — $150 a month on this plan, compared to what you have now. That\'s the benefit we can lock in today." Then ask for the Medicare card. Don\'t acknowledge and move on — use it.',
  },
  {
    title: 'No dollar figure stated on either call',
    rc: 'RC3',
    urgency: 'medium' as const,
    summary: 'Both consumers were warm inbound Money Callers — called specifically about a grocery benefit — and neither heard a specific dollar amount. The dollar figure is the close.',
    fix: 'After compliance and zip: "I\'m looking at plans in your area right now — there are options with up to $150 a month for groceries. Let me pull up exactly what you qualify for."',
  },
]

const pastReports = [
  { title: 'Weekly Brief — April 13', type: 'Weekly Brief', date: 'Apr 15, 2026', score: '29 / 100', active: true },
  { title: 'Daily Brief — April 13', type: 'Daily Brief', date: 'Apr 14, 2026', score: '29 / 100', active: false },
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
          <p className={styles.updatedAt}>Updated April 15 · 2 calls reviewed (Mon)</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(29) }}>29</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>Mon · 2 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>2</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 13, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>0</span>
            <span className={styles.scoreLabel}>Enrolled</span>
            <span className={styles.scoreRange}>2 Missed Opportunity</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)' }}>RC1</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Surrendered on first objection</span>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>Before you offer a callback, say one line that gives the consumer a concrete reason to stay on the call.</p>
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
                    <span className={`${styles.pill} ${outcomeClass(call.outcome)}`}>{call.outcome}</span>
                    <span className={styles.callType}>{call.type}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className={styles.callTableFooter}>
            <span>Week Average: <strong>29 / 100</strong></span>
            <span>Enrolled: <strong>0 of 2</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Compliance opens — both calls:</strong> TPMO and SOA delivered cleanly on both calls, with your second call clocking in at 13 seconds. That&apos;s one of the fastest clean compliance opens on the team. That discipline is the foundation everything else gets built on.</p>
            <p><strong>Consumer rapport:</strong> Both consumers were warm and comfortable throughout. Neither had hostility or suspicion. The trust you build in the first 60 seconds is real — a consumer who trusts you stays on the phone long enough to hear the offer.</p>
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
                <p className={styles.workOnTitle}>One reframe before you let anyone go</p>
                <p className={styles.workOnDetail}>&ldquo;What did they find? Plans changed this year and I&apos;m looking at $150 a month for groceries in your area. Give me two minutes.&rdquo; That one sentence keeps the lead alive. Practice it until it&apos;s automatic.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>State the dollar figure early — it&apos;s the close</p>
                <p className={styles.workOnDetail}>After zip code: &ldquo;I&apos;m showing plans in your area with up to $150 a month for groceries. Let me pull up exactly what you qualify for.&rdquo; The number gives the consumer something concrete to say yes to.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>When they ask &ldquo;do I get more?&rdquo; — treat it as a yes</p>
                <p className={styles.workOnDetail}>&ldquo;Yes — $150 a month on this plan. That&apos;s the benefit we can lock in today.&rdquo; Then ask for the Medicare card. Don&apos;t acknowledge it and move on — use it.</p>
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
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC2 · RC3 · The Money Caller · First Objection Reframe</p>
        </div>

      </div>
    </PageShell>
  )
}
