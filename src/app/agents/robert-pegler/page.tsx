'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Weekly Brief: April 13–14, 2026 ─────────────────────────────────────────

const callsByDate = [
  {
    date: 'Monday, April 13',
    calls: [
      { consumer: 'TJ', duration: '2:22', score: 29, outcome: 'MISSED OPPORTUNITY', type: 'The Money Caller', href: '/agents/robert-pegler/calls/tj' },
      { consumer: 'Unknown', duration: '5:31', score: 42, outcome: 'INCOMPLETE', type: 'Dual-Eligible — Dropped', href: '/agents/robert-pegler/calls/unknown-consumer-5m31s' },
      { consumer: 'Dwight Chattahill', duration: '18:47', score: 56, outcome: 'CORRECT NO-SALE', type: 'Complex — Network Conflict', href: '/agents/robert-pegler/calls/dwight-chattahill' },
    ],
  },
  {
    date: 'Tuesday, April 14',
    calls: [
      { consumer: 'Anetta Clary', duration: '21:53', score: 45, outcome: 'MISSED OPPORTUNITY', type: 'Money Caller — MOV SEP', href: '/agents/robert-pegler/calls/anetta-clary' },
      { consumer: 'Thomas Scott', duration: '37:36', score: 51, outcome: 'MISSED OPPORTUNITY', type: 'The Detail Staller', href: '/agents/robert-pegler/calls/thomas-scott' },
    ],
  },
]

const patterns = [
  {
    title: 'Tone turns argumentative when challenged',
    rc: 'RC2',
    urgency: 'critical' as const,
    summary: 'Thomas Scott, 30:15: "I hear that all the time." 34:26: "I sign people up on the road all the time." Two direct contradictions of the consumer\'s concern — erased 30 minutes of built trust. When pushed back on, ask a question instead of proving a point.',
    fix: '"What\'s the one thing you\'d want to confirm in those documents? I have everything here — I can likely answer it right now."',
  },
  {
    title: 'Surrenders at close after doing all the work',
    rc: 'RC1',
    urgency: 'high' as const,
    summary: 'TJ (Apr 13): offered transfer instead of the contradiction reframe. Anetta Clary (Apr 14): closed 21 minutes with "if you\'re not interested, no problem." Both recoverable calls — both surrendered at the decision point.',
    fix: '"Based on everything we just went through, I want to get you set up today. Let\'s take care of this." No qualifier. No escape hatch.',
  },
  {
    title: 'SEP found — never used as the enrollment reason',
    rc: 'RC6',
    urgency: 'medium' as const,
    summary: 'MOV SEPs identified on Anetta Clary and Thomas Scott, INT SEP on the Tennessee caller. All three times: SEP noted during discovery, then never mentioned again. The SEP is the reason they can enroll today.',
    fix: '"Because you moved recently, you have a special window to change your coverage right now — not in October, today."',
  },
]

const pastReports = [
  { title: 'Weekly Brief — April 13–14', type: 'Weekly Brief', date: 'Apr 15, 2026', score: '45 / 100', active: true },
  { title: 'Daily Brief — April 13', type: 'Daily Brief', date: 'Apr 14, 2026', score: '42 / 100', active: false },
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

export default function RobertPeglerPage() {
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
          <h1 className={styles.agentName}>Robert Pegler</h1>
          <p className={styles.period}>Week of April 13–17, 2026</p>
          <p className={styles.updatedAt}>Updated April 15 · 5 calls (Mon–Tue)</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(45) }}>45</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>5 calls · Mon–Tue</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>5</span>
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
            <span className={styles.scoreRange}>Argumentative under pressure</span>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a consumer pushes back, ask them a question — don&apos;t prove them wrong. &ldquo;What&apos;s the one thing you&apos;d want to confirm? I have it right here.&rdquo;</p>
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
            <span>Week Average (Mon–Tue): <strong>45 / 100</strong></span>
            <span>Correct No-Sales: <strong>1 of 5</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Dwight Chattahill (04-13):</strong> Found the network incompatibility. Corrected SSA misinformation. Called a correct no-sale with 18 minutes invested. That&apos;s professional integrity — most agents don&apos;t have the knowledge or discipline to do it.</p>
            <p><strong>SEP identification (3 of 5 calls):</strong> MOV on Anetta Clary and Thomas Scott, INT on the Tennessee caller. Accurate. The next step is deploying those SEPs as the enrollment reason, not just noting them.</p>
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

        {/* ── Work Ons ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What to Work On</h2>
          <div className={styles.workOnList}>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>01</span>
              <div>
                <p className={styles.workOnTitle}>When challenged → ask, don&apos;t rebut</p>
                <p className={styles.workOnDetail}>&ldquo;What&apos;s the one thing you&apos;d want to confirm in those documents? I have everything right here.&rdquo; — a question keeps him talking; a rebuttal ends the call.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>The close is direct, no qualifier</p>
                <p className={styles.workOnDetail}>&ldquo;Based on everything we went through, I want to get you set up today. Can I confirm your address?&rdquo; — not &ldquo;if you&apos;re not interested, no problem.&rdquo;</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>SEP = reason to enroll today — say it</p>
                <p className={styles.workOnDetail}>&ldquo;Because you moved recently, you have a special window to change your coverage right now — not in October, today.&rdquo; Find the SEP, then use it as urgency.</p>
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
          <p>The Certainty System · Robert Pegler · Week of April 13–17, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC2 · RC6 · MOV SEP · Argumentative Tone · Close Surrender</p>
        </div>

      </div>
    </PageShell>
  )
}
