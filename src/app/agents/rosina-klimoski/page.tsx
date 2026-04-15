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
      { consumer: 'Robin Hargett', duration: '10:24', score: 58, outcome: 'CORRECT NO-SALE', type: 'Complex Dual-Eligible', href: '/agents/rosina-klimoski/calls/robin-hargett' },
      { consumer: 'Frank Yannis', duration: '18:06', score: 52, outcome: 'MISSED OPPORTUNITY', type: 'Closeable Dual-Eligible', href: '/agents/rosina-klimoski/calls/frank-yannis' },
      { consumer: 'Mary Lancaster', duration: '13:08', score: 33, outcome: 'MISSED OPPORTUNITY', type: 'Money Caller — MOV SEP', href: '/agents/rosina-klimoski/calls/mary-lancaster' },
      { consumer: 'Unknown', duration: '3:02', score: 35, outcome: 'MISSED OPPORTUNITY', type: 'Money Caller — Veteran', href: '/agents/rosina-klimoski/calls/unknown-consumer-3m02s' },
    ],
  },
]

const patterns = [
  {
    title: 'Does all the work — surrenders the close at the end',
    rc: 'RC1',
    urgency: 'critical' as const,
    summary: 'Frank Yannis: 18 minutes of correct execution, then at 17:36 he asked for a brochure and you ended with "unfortunately I can\'t send one." Full case built. Close handed away. The brochure ask means "show me more before I commit" — it\'s not a no.',
    fix: '"I can\'t mail one, but I can walk you through the key details right now, and you\'ll receive everything in writing once you\'re enrolled. Let\'s take care of this today."',
  },
  {
    title: 'SEP identified — callback offered instead of enrollment',
    rc: 'RC6',
    urgency: 'high' as const,
    summary: 'Mary Lancaster: correctly identified a MOV SEP — then offered a callback. When you find a SEP, you have the legal justification to enroll today. The SEP is the enrollment hook, not a detail to pass along.',
    fix: '"Because you moved recently, you have a special window to change your coverage right now — this isn\'t something we have to schedule, we can take care of it today."',
  },
  {
    title: 'SSN declined — no alternative offered before release',
    rc: 'RC1',
    urgency: 'medium' as const,
    summary: '3:02 call: veteran declined SSN, call ended. The alternative (name + DOB) was never offered. One sentence keeps this lead alive.',
    fix: '"No problem at all — I can also pull you up with just your name and date of birth. What\'s your full name?"',
  },
]

const pastReports = [
  { title: 'Weekly Brief — April 13', type: 'Weekly Brief', date: 'Apr 15, 2026', score: '44 / 100', active: true },
  { title: 'Daily Brief — April 13', type: 'Daily Brief', date: 'Apr 14, 2026', score: '44 / 100', active: false },
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

export default function RosinaKlimoskiPage() {
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
          <h1 className={styles.agentName}>Rosina Klimoski</h1>
          <p className={styles.period}>Week of April 13–17, 2026</p>
          <p className={styles.updatedAt}>Updated April 15 · 4 calls reviewed (Mon)</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(44) }}>44</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>Mon · 4 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>4</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 13, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>1</span>
            <span className={styles.scoreLabel}>Correct No-Sale</span>
            <span className={styles.scoreRange}>3 Missed Opportunity</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)' }}>RC1</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Discovery done — close surrendered</span>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When you&apos;ve identified the SEP and done the full discovery, the only thing left is to ask — don&apos;t hand them a callback, hand them the enrollment.</p>
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
            <span>Week Average: <strong>44 / 100</strong></span>
            <span>Correct No-Sales: <strong>1 of 4</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Robin Hargett (04-13):</strong> Ran the comparison, caught your own screen error at 9:01, reversed your framing, and told Robin the truth — the numbers don&apos;t support switching. That&apos;s a correct no-sale with commission on the table. Professional integrity.</p>
            <p><strong>Frank Yannis (04-13):</strong> 18 minutes of correct execution — plan comparison, dental and OTC comparison, doctor network, medications. You can carry a complex dual-eligible call all the way through the technical work. The problem is the close, not the discovery.</p>
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
                <p className={styles.workOnTitle}>When you&apos;ve built the case — ask for the enrollment</p>
                <p className={styles.workOnDetail}>Frank Yannis 17:36: &ldquo;I can&apos;t mail one, but I can walk you through the key details right now, and you&apos;ll receive everything in writing once you&apos;re enrolled. Let&apos;s take care of this today.&rdquo;</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>The MOV SEP means enroll today — say it</p>
                <p className={styles.workOnDetail}>&ldquo;Because you moved recently, you have a window to change your coverage right now — not something we need to schedule, we can handle it today.&rdquo; The SEP is the close.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>SSN declined → offer name + DOB</p>
                <p className={styles.workOnDetail}>&ldquo;No problem — I can also pull you up with just your name and date of birth. What&apos;s your full name?&rdquo; That one question keeps the call alive when SSN is off the table.</p>
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
          <p>The Certainty System · Rosina Klimoski · Week of April 13–17, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC6 · MOV SEP · Brochure Reframe · Robin Hargett: Correct No-Sale</p>
        </div>

      </div>
    </PageShell>
  )
}
