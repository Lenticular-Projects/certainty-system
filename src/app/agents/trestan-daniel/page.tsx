'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Mid-Week Report: April 22, 2026 (No calls Apr 20–21) ─────────────────────

// Last week's calls — archived for reference, not removed
const callsByDate = [
  {
    date: 'Tuesday, April 14',
    calls: [
      { consumer: 'Nancy Hazelrig', duration: '6:03', score: 51, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'The Grocery Card Caller', href: '/agents/trestan-daniel/calls/nancy-hazelrig' },
      { consumer: 'Susan White', duration: '12:24', score: 47, outcome: 'INCOMPLETE', outcomeNote: 'Consumer ready — handoff killed the enrollment', type: 'The Food Card Caller — Handoff at Close', href: '/agents/trestan-daniel/calls/susan-white' },
      { consumer: 'Unknown Consumer (15m22s)', duration: '15:22', score: 35, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'The Money Caller — INT SEP Unused', href: '/agents/trestan-daniel/calls/unknown-consumer-15m22s' },
    ],
  },
  {
    date: 'Wednesday, April 15',
    calls: [
      { consumer: 'Annie Sellers', duration: '3:00', score: 62, outcome: 'CORRECT NO-SALE', outcomeNote: 'Consumer refused verification — uncloseable', type: 'Hostile SSN Refusal — Correct Exit', href: '/agents/trestan-daniel/calls/annie-sellers' },
      { consumer: 'Georgia Whitehead', duration: '3:00', score: 60, outcome: 'CORRECT NO-SALE', outcomeNote: 'Consumer declined ID method — uncloseable', type: 'Polite SSN Refusal — Professional Close', href: '/agents/trestan-daniel/calls/georgia-whitehead' },
    ],
  },
]

// v3 Patterns — all Chronic (active from last week, no new data to change status)
const chronicPatterns = [
  {
    title: 'When the consumer says yes — you execute, not transfer',
    rc: 'RC1',
    urgency: 'critical' as const,
    summary: 'A ready consumer and a handoff are not compatible. When you hear "Yes, I\'m ready," the only correct next move is enrollment execution — your mouth, your keystrokes, right now.',
    fix: 'Instead: "Perfect — I\'m getting you enrolled right now. I already have your Medicare number. This will take about three more minutes."',
  },
  {
    title: 'The INT SEP corrects the "I already changed plans" objection in one sentence',
    rc: 'RC6',
    urgency: 'high' as const,
    summary: 'Dual-eligible consumers believe the once-a-year rule applies to them. It doesn\'t. One sentence removes that barrier entirely — and you never said it on the Warsaw call.',
    fix: 'Instead: "Because you have Medicaid, the once-a-year rule doesn\'t apply to you. You can change any month."',
  },
  {
    title: 'Complete the math — annualize, then humanize',
    rc: 'RC3',
    urgency: 'medium' as const,
    summary: 'Monthly comparison gets attention. Annualizing closes. Connecting the annual number to something specific the consumer already told you is the decision moment — and you\'ve stopped short of it twice.',
    fix: 'Instead: "That\'s $3,204 more a year — and you told me your food card got cut. This plan covers both. Let\'s lock this in today."',
  },
]

// v3 Your Tells data (last week only — no new calls to update)
const yourTells = {
  enrolled: [] as string[],
  missed: [
    'Handed off at the close instead of executing enrollment yourself (Susan White, 9:03)',
    'Did not deploy INT SEP when dual-eligible consumer objected to changing plans (Warsaw call, 14:09)',
    'Stopped math breakdown before annualizing — left the close argument on the table (Warsaw call)',
  ],
}

// Past reports archive
const pastReports = [
  { title: 'Mid-Week Report — April 22 [No calls this period]', type: 'Mid-Week Report', date: 'Apr 22, 2026', score: '—', active: true },
  { title: 'Weekly Brief — April 13–17', type: 'Weekly Brief', date: 'Apr 20, 2026', score: '51 / 100', active: false },
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

export default function TrestanDanielPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>

        {/* ── Header ── */}
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Mid-Week Report</span>
          </div>
          <h1 className={styles.agentName}>Trestan Daniel</h1>
          <p className={styles.period}>Week of April 20–22, 2026</p>
          <p className={styles.updatedAt}>Updated April 22 · No new calls this period</p>
        </motion.div>

        {/* ── Trend Snapshot ── */}
        <motion.div className={styles.trendSnapshot} {...SPRING}>
          <div className={styles.trendSnapshotHeader}>
            <span className={styles.trendSnapshotLabel}>CRM Trend Snapshot</span>
            <span className={styles.trendSnapshotNote}>No calls recorded Apr 20–21. Last week&apos;s data shown for reference.</span>
          </div>
          <div className={styles.trendTable}>
            <div className={styles.trendHeader}>
              <span>Metric</span>
              <span>Apr 13–17</span>
              <span>Apr 20–21</span>
              <span>Movement</span>
            </div>
            {([
              { metric: 'Sales',       lastWeek: '8',       thisPeriod: '0',    movement: '—', dir: 'neutral' },
              { metric: 'Conversion',  lastWeek: '10.96%',  thisPeriod: '0%',   movement: '—', dir: 'neutral' },
              { metric: 'CPA',         lastWeek: '$123.50', thisPeriod: '—',    movement: '—', dir: 'neutral' },
              { metric: 'Total Calls', lastWeek: '73',      thisPeriod: '0',    movement: '—', dir: 'neutral' },
              { metric: 'Billable',    lastWeek: '57',      thisPeriod: '0',    movement: '—', dir: 'neutral' },
            ] as Array<{ metric: string; lastWeek: string; thisPeriod: string; movement: string; dir: 'up' | 'down' | 'neutral' }>).map((row) => (
              <div key={row.metric} className={styles.trendRow}>
                <span className={styles.trendMetric}>{row.metric}</span>
                <span className={styles.trendVal}>{row.lastWeek}</span>
                <span className={`${styles.trendVal} ${styles.trendNeutral}`}>{row.thisPeriod}</span>
                <span className={styles.trendNeutral}>{row.movement}</span>
              </div>
            ))}
          </div>
          <p className={styles.trendFootnote}>
            Last week was strong — 10.96% conversion and $123.50 CPA going into this week. Quiet Monday/Tuesday doesn&apos;t change last week&apos;s coaching points. Pick up where you left off.
          </p>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>You do the discovery, you build the case, you earn the trust &mdash; that&apos;s the hardest part of this job and you do it consistently. The move that converts more of those calls is finishing what you started: when a consumer gives you the green light, your next words are &ldquo;Perfect &mdash; I&apos;m getting you enrolled right now&rdquo; and you run the enrollment yourself. You built the relationship. You own the close. See it through.</p>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p><strong>No reviewed calls this period.</strong> Last week&apos;s coaching points remain active. Here&apos;s where things stood going into this week.</p>
            <p>Five calls across two days last week — three correct no-sales on calls that were genuinely unwinnable, one missed opportunity, and one incomplete where the consumer said she was ready. What we&apos;re working through is the pattern that runs through the two closeable calls: the instincts to follow through at the finish after doing the hard work of building the trust.</p>
            <p><strong>What&apos;s working:</strong> your account-reading on the Susan White call was the best discovery work in last week&apos;s batch. You spotted her C-SNP history at 4:08, asked about it proactively, and built a clear comparison that landed immediately. Susan said &ldquo;Yes, I&apos;m ready&rdquo; at 9:03. On Wednesday, your call-reading on Annie Sellers was clean — correct pivot to SSN when the card wasn&apos;t available, correct exit when she refused. Georgia Whitehead got a professional close. These are the right instincts.</p>
            <p><strong>What&apos;s still live:</strong> on the two closeable calls, the close was right there and something intervened each time. On Susan White, a ready consumer went on hold and never enrolled. On the Warsaw call, a one-sentence correction about dual-eligible enrollment rights would have removed the only barrier. Both consumers were closeable. The discovery work is already there. The finish is the work.</p>
          </div>
        </motion.div>

        {/* ── Your Tells ── */}
        <motion.div className={styles.yourTells} {...SPRING}>
          <div className={styles.yourTellsHeader}>
            <span className={styles.yourTellsLabel}>Your Tells</span>
            <span className={styles.yourTellsNote}>No calls this period — last week&apos;s patterns apply</span>
          </div>
          <div className={styles.tellsGrid}>
            <div className={styles.tellsBlock}>
              <span className={styles.tellsBlockLabel} style={{ color: 'var(--sage-dark)' }}>When You Enrolled</span>
              {yourTells.enrolled.length === 0 ? (
                <p className={styles.tellsEmpty}>No enrolled calls reviewed this period.</p>
              ) : (
                yourTells.enrolled.map((t, i) => (
                  <p key={i} className={styles.tellsItem}>{t}</p>
                ))
              )}
            </div>
            <div className={styles.tellsBlock}>
              <span className={styles.tellsBlockLabel} style={{ color: 'var(--terracotta)' }}>When You Missed</span>
              {yourTells.missed.map((t, i) => (
                <p key={i} className={styles.tellsItem}>{t}</p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Patterns ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Patterns</h2>
          <div className={styles.patternsGrid}>
            {/* Chronic */}
            <div className={styles.patternColumn}>
              <div className={styles.patternColumnHeader}>
                <span className={styles.patternColumnLabel}>Chronic</span>
                <span className={styles.patternColumnCount}>{chronicPatterns.length}</span>
              </div>
              <div className={styles.patternColumnCards}>
                {chronicPatterns.map((p, i) => (
                  <div key={i} className={`${styles.patternCard} ${styles[`patternCard_${p.urgency}`]}`}>
                    <div className={styles.patternCardHeader}>
                      <span className={`${styles.urgencyBadge} ${styles[`badge_${p.urgency}`]}`}>
                        {p.urgency === 'critical' ? 'CRITICAL' : p.urgency === 'high' ? 'HIGH' : 'OPPORTUNITY'}
                      </span>
                      <span className={styles.rcCode}>{p.rc}</span>
                    </div>
                    <p className={styles.patternCardTitle}>{p.title}</p>
                    <p className={styles.patternCardSummary}>{p.summary}</p>
                    <p className={styles.patternCardFix}>{p.fix}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Emerging */}
            <div className={styles.patternColumn}>
              <div className={styles.patternColumnHeader}>
                <span className={styles.patternColumnLabel}>Emerging</span>
                <span className={styles.patternColumnCount}>0</span>
              </div>
              <div className={`${styles.patternColumnEmpty}`}>
                No new patterns this period.
              </div>
            </div>

            {/* Resolved */}
            <div className={styles.patternColumn}>
              <div className={styles.patternColumnHeader}>
                <span className={styles.patternColumnLabel}>Resolved</span>
                <span className={styles.patternColumnCount}>0</span>
              </div>
              <div className={`${styles.patternColumnEmpty}`}>
                No new resolutions this period.
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Calls ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Calls — Apr 20–21</h2>
          <div className={styles.emptyCallsState}>
            <span className={styles.emptyCallsIcon}>—</span>
            <p className={styles.emptyCallsHeading}>No coachable calls reviewed Apr 20–21.</p>
            <p className={styles.emptyCallsNote}>Quiet Monday/Tuesday this period. Last week&apos;s call archive is below for reference.</p>
          </div>

          <div style={{ marginTop: '32px' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)', marginBottom: '16px' }}>
              Apr 13–17 Archive (Last Week)
            </p>
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
              <span>Week Average (Apr 13–17): <strong>51 / 100</strong></span>
              <span>Correct No-Sales: <strong>3 of 5</strong></span>
            </div>
          </div>
        </motion.div>

        {/* ── Report History ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Report History</h2>
          <div className={styles.reportHistory}>
            {pastReports.map((r, i) => (
              <div key={i} className={`${styles.reportHistoryEntry} ${r.active ? styles.reportActive : ''}`}>
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
          <p>The Certainty System · Trestan Daniel · Week of April 20–22, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC3 · RC6 · Close Authority · INT SEP · Math Breakdown</p>
        </div>

      </div>
    </PageShell>
  )
}
