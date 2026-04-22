'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import { useState } from 'react'
import styles from './page.module.css'

// ── Mid-Week Report: April 20–22, 2026 ──────────────────────────────────────

// CRM Trend Data
const trendRows = [
  { metric: 'Sales',      prior: '7',      priorLabel: 'Last Week (5d)', current: '5',       currentLabel: 'This Period (2d)', delta: 'On pace to exceed', dir: 'neutral' as const },
  { metric: 'Conversion', prior: '5.65%',  priorLabel: 'Last Week',      current: '10.00%',  currentLabel: 'This Period',      delta: '+4.35pp',          dir: 'up' as const },
  { metric: 'CPA',        prior: '$214',   priorLabel: 'Last Week',      current: '$120',    currentLabel: 'This Period',      delta: '−$94',             dir: 'up' as const },
]

// Calls this period
const callsByDate = [
  {
    date: 'Monday, April 20',
    calls: [
      {
        consumer: 'Robert Cook',
        duration: '43:50',
        score: 84,
        outcome: 'MISSED OPPORTUNITY',
        outcomeNote: 'External — wife approval + hard stop',
        type: 'C-SNP Expert Pivot — Callback Secured',
        href: '/agents/michelle-marrero/calls/robert-cook',
      },
    ],
  },
  {
    date: 'Tuesday, April 21',
    calls: [
      {
        consumer: 'Brian Graese',
        duration: '21:44',
        score: 62,
        outcome: 'CORRECT NO-SALE',
        outcomeNote: 'PCP out-of-network on upgrade',
        type: 'Loyal Patient — Doctor Conflict',
        href: '/agents/michelle-marrero/calls/brian-graese',
      },
      {
        consumer: 'Karen Colm',
        duration: '10:11',
        score: 61,
        outcome: 'CORRECT NO-SALE',
        outcomeNote: 'Active chemo + dual coverage',
        type: 'Cancer Patient — Integrity Advisory',
        href: '/agents/michelle-marrero/calls/karen-colm',
      },
    ],
  },
]

// YOUR TELLS delta
const yourTells = [
  {
    call: 'Robert Cook',
    score: 84,
    outcome: 'MISSED OPPORTUNITY' as const,
    enrolled: false,
    delta: 'Elite diagnostic work — C-SNP identified, objections dismantled, callback secured. The one gap: math never annualized. Robert sold himself on "$1,500 a year" without Michelle saying the number.',
  },
  {
    call: 'Brian Graese',
    score: 62,
    outcome: 'CORRECT NO-SALE' as const,
    enrolled: false,
    delta: 'Right call — DaFonseca out-of-network, Brian firm on doctor loyalty. The tell: when Brian said "I got a nurse here" at 7:03, you heard a scheduling concern. The top of the leaderboard hears a C-SNP anchor.',
  },
  {
    call: 'Karen Colm',
    score: 61,
    outcome: 'CORRECT NO-SALE' as const,
    enrolled: false,
    delta: 'Integrity-first no-sale during active chemo. The tell that costs: at 0:52 you said "I\'m Medicare" — that one line contradicts everything the TPMO disclaimer established 15 seconds earlier. It needs to go.',
  },
]

// Patterns — Chronic | Emerging | Resolved
const chronicPatterns = [
  {
    title: 'Math stops at the feature list',
    rc: 'RC3',
    urgency: 'high' as const,
    summary: 'On every call this period — Robert Cook (30:07), Brian Graese (11:47) — you presented benefits but never annualized. Robert himself said "a couple thousand dollars or so" at 41:54. He did your job for you.',
    fix: 'Instead: After any benefit, say the year number out loud. "$125/month is $1,500 a year." Then connect it to what they told you they need.',
  },
]

const emergingPatterns = [
  {
    title: '"I\'m Medicare" — TPMO identity violation',
    rc: 'RC7',
    urgency: 'critical' as const,
    summary: 'Karen Colm call (0:52): you said "I\'m Medicare, we require that you know that I work for Medicare." This is an audit-level contradiction — the TPMO disclaimer you just delivered establishes you do NOT represent Medicare directly.',
    fix: 'Instead: "Medicare requires that I let you know I\'m not directly connected to the federal Medicare program — I\'m a licensed broker representing multiple carriers in your area." Practice this until it\'s automatic.',
  },
  {
    title: 'Client Gold heard but not deployed',
    rc: 'RC2',
    urgency: 'medium' as const,
    summary: 'Brian\'s visiting nurse (7:03), Karen\'s surgery and chemo (2:44, 5:06) — you acknowledged each one and moved on. The details that feel personal are the ones that close calls.',
    fix: 'Instead: When someone reveals a health crisis or care situation, pause and name it: "That tells me your health management is a priority — let me make sure this plan is built for exactly that."',
  },
]

const resolvedPatterns = [
  {
    title: 'Third-party gatekeeper handled correctly',
    rc: 'RC1',
    urgency: 'medium' as const,
    summary: 'Robert Cook introduced his wife\'s MS at 35:28. You adapted immediately — built the wife\'s C-SNP case, set up a joint callback. That\'s the right move.',
    fix: 'Status: Resolved this week. Keep adapting in real time when a new decision-maker enters late.',
  },
  {
    title: 'Correct no-sale judgment on complex calls',
    rc: 'RC4',
    urgency: 'medium' as const,
    summary: 'Both no-sales this period were called correctly — Brian\'s doctor loyalty was a hard barrier, Karen\'s active chemo with dual coverage made switching harmful. Zero pressure on either consumer.',
    fix: 'Status: Strong. Your ability to identify and honor the right no-sale is protecting your compliance record.',
  },
]

// Report history
const pastReports = [
  { title: 'Weekly Brief — April 14 (Tue only)', type: 'Weekly Brief', date: 'Apr 15, 2026', score: '44 avg', active: false },
  { title: 'Weekly Brief — April 13–17', type: 'Weekly Brief', date: 'Apr 20, 2026', score: '44 avg', active: false },
  { title: 'Mid-Week Report — April 20–22', type: 'Mid-Week', date: 'Apr 22, 2026', score: 'Sales: 5 ↑ · CPA: $120 ↓', active: true },
]

// ── Helpers ──────────────────────────────────────────────────────────────────

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

function urgencyLabel(u: string) {
  if (u === 'critical') return 'CRITICAL'
  if (u === 'high') return 'HIGH'
  return 'MEDIUM'
}

function trendClass(dir: string, s: Record<string, string>) {
  if (dir === 'up') return s.trendUp
  if (dir === 'down') return s.trendDown
  return s.trendNeutral
}

export default function MichelleMarreroPage() {
  const [callsOpen, setCallsOpen] = useState(true)

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
          <h1 className={styles.agentName}>Michelle Marrero</h1>
          <p className={styles.period}>Week of April 20–22, 2026</p>
          <p className={styles.updatedAt}>Updated April 22 · 3 calls reviewed</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(69) }}>69</span>
            <span className={styles.scoreLabel}>Period Average</span>
            <span className={styles.scoreRange}>Apr 20–21 · 3 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>3</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Mon–Tue this week</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>5</span>
            <span className={styles.scoreLabel}>Sales (2 days)</span>
            <span className={styles.scoreRange}>10% conversion · $120 CPA</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>RC7</span>
            <span className={styles.scoreLabel}>Critical Flag</span>
            <span className={styles.scoreRange}>TPMO identity script error</span>
          </div>
        </motion.div>

        {/* ── Trend Snapshot ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>CRM Trend Snapshot</h2>
          <div className={styles.trendSnapshot}>
            <div className={styles.trendTable}>
              <div className={styles.trendHeader}>
                <span>Metric</span>
                <span>Last Week (5 days)</span>
                <span>This Period (2 days)</span>
                <span>Change</span>
              </div>
              {trendRows.map((row, i) => (
                <div key={i} className={styles.trendRow}>
                  <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--ink)' }}>{row.metric}</span>
                  <span style={{ fontSize: '0.9375rem', color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{row.prior}</span>
                  <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--ink)', fontVariantNumeric: 'tabular-nums' }}>{row.current}</span>
                  <span className={trendClass(row.dir, styles)} style={{ fontSize: '0.8125rem', fontWeight: 600 }}>{row.delta}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>At 0:52 on the Karen Colm call, you said &ldquo;I&apos;m Medicare.&rdquo; That one line contradicts your TPMO disclaimer, creates audit exposure, and could erase the momentum you&apos;ve built this week. The correct line is locked: &ldquo;I&apos;m not directly connected to the federal Medicare program — I&apos;m a licensed broker representing multiple carriers in your area.&rdquo; Say it until it&apos;s automatic. Everything else you built this week — the C-SNP pivot on Robert, the correct no-sales, the 10% conversion — is real. Don&apos;t let a four-word script error undo it.</p>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p><strong>What&apos;s working:</strong> You are on pace to double your conversion rate from last week — 10% this period versus 5.65% last week — and CPA has dropped from $214 to $120. That&apos;s not luck; that&apos;s better call selection and stronger execution. The Robert Cook call is the clearest evidence: you heard &ldquo;chest pains,&rdquo; probed until you found cardiomyopathy at 11:58, and completely reframed a &ldquo;don&apos;t change my plan&rdquo; call into a C-SNP upgrade worth $3,000 a year to Robert and his wife. Your objection handling on that call was textbook — when Robert wanted to call Humana himself, you answered his question before he could ask it. And both no-sales this week were called correctly. You protected a cancer patient from a coverage gap during active chemo and respected a doctor-loyal consumer&apos;s hard line. That judgment builds your reputation.</p>
            <p><strong>What&apos;s costing you:</strong> Two patterns need attention before they become habits. First: the math always stops at the monthly number. Robert Cook confirmed the value himself — &ldquo;a couple thousand dollars or so&rdquo; at 41:54 — because you never said the annual figure out loud. Saying the number and connecting it to what the consumer told you they need is the step that converts agreement into enrollment. Second: the &ldquo;I&apos;m Medicare&rdquo; script error on Karen Colm&apos;s call is the one thing that can reverse everything you&apos;ve built. It needs to be corrected and it needs to stay corrected.</p>
          </div>
        </motion.div>

        {/* ── YOUR TELLS ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Your Tells</h2>
          <div className={styles.yourTells}>
            {yourTells.map((tell, i) => (
              <div key={i} className={styles.tellsBlock}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--ink)' }}>{tell.call}</span>
                  <span className={`${styles.pill} ${outcomeClass(tell.outcome)}`}>{tell.outcome}</span>
                  <span style={{ fontSize: '0.875rem', fontWeight: 700, color: scoreColor(tell.score), fontVariantNumeric: 'tabular-nums' }}>{tell.score}</span>
                </div>
                <p className={styles.tellsList}>{tell.delta}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Patterns: Chronic · Emerging · Resolved ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Patterns</h2>
          <div className={styles.patternsGrid}>

            {/* Chronic */}
            <div className={styles.patternColumn}>
              <div className={styles.patternColumnHeader}>
                <span>Chronic</span>
                <span style={{ fontSize: '0.6875rem', color: 'var(--ink-60)', fontWeight: 500, textTransform: 'none', letterSpacing: 0 }}>Persistent, call after call</span>
              </div>
              {chronicPatterns.map((p, i) => (
                <div key={i} className={`${styles.patternCard} ${styles[`priority_${p.urgency}`]}`}>
                  <div className={styles.priorityHeader}>
                    <span className={`${styles.urgencyBadge} ${styles[`badge_${p.urgency}`]}`}>
                      {urgencyLabel(p.urgency)}
                    </span>
                    <span className={styles.rcCode}>{p.rc}</span>
                  </div>
                  <p className={styles.priorityTitle}>{p.title}</p>
                  <p className={styles.priorityDetail}>{p.summary}</p>
                  <div className={styles.priorityMove}>
                    <span className={styles.priorityMoveLabel}>Fix:</span>
                    <p className={styles.priorityMoveText}>{p.fix}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Emerging */}
            <div className={styles.patternColumn}>
              <div className={styles.patternColumnHeader}>
                <span>Emerging</span>
                <span style={{ fontSize: '0.6875rem', color: 'var(--ink-60)', fontWeight: 500, textTransform: 'none', letterSpacing: 0 }}>New this period — act now</span>
              </div>
              {emergingPatterns.map((p, i) => (
                <div key={i} className={`${styles.patternCard} ${styles[`priority_${p.urgency}`]}`}>
                  <div className={styles.priorityHeader}>
                    <span className={`${styles.urgencyBadge} ${styles[`badge_${p.urgency}`]}`}>
                      {urgencyLabel(p.urgency)}
                    </span>
                    <span className={styles.rcCode}>{p.rc}</span>
                  </div>
                  <p className={styles.priorityTitle}>{p.title}</p>
                  <p className={styles.priorityDetail}>{p.summary}</p>
                  <div className={styles.priorityMove}>
                    <span className={styles.priorityMoveLabel}>Fix:</span>
                    <p className={styles.priorityMoveText}>{p.fix}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Resolved */}
            <div className={styles.patternColumn}>
              <div className={styles.patternColumnHeader}>
                <span>Resolved</span>
                <span style={{ fontSize: '0.6875rem', color: 'var(--ink-60)', fontWeight: 500, textTransform: 'none', letterSpacing: 0 }}>Fixed or no longer showing</span>
              </div>
              {resolvedPatterns.map((p, i) => (
                <div key={i} className={`${styles.patternCard} ${styles.priority_resolved}`}>
                  <div className={styles.priorityHeader}>
                    <span className={`${styles.urgencyBadge} ${styles.badge_resolved}`}>RESOLVED</span>
                    <span className={styles.rcCode}>{p.rc}</span>
                  </div>
                  <p className={styles.priorityTitle}>{p.title}</p>
                  <p className={styles.priorityDetail}>{p.summary}</p>
                  <div className={styles.priorityMove}>
                    <span className={styles.priorityMoveLabel}>Note:</span>
                    <p className={styles.priorityMoveText}>{p.fix}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

        {/* ── Calls (collapsible) ── */}
        <motion.div className={styles.section} {...SPRING}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', paddingBottom: '12px', borderBottom: 'var(--rule-lt)' }}>
            <h2 className={styles.sectionTitle} style={{ margin: 0, padding: 0, border: 'none' }}>This Period&apos;s Calls</h2>
            <button
              className={styles.collapsibleCallsToggle}
              onClick={() => setCallsOpen(v => !v)}
              aria-expanded={callsOpen}
            >
              {callsOpen ? 'Collapse' : 'Expand'}
            </button>
          </div>

          {callsOpen && (
            <>
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
                <span>Period Average: <strong>69 / 100</strong></span>
                <span>Correct No-Sales: <strong>2</strong></span>
                <span>Missed (External): <strong>1</strong></span>
              </div>
            </>
          )}
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
          <p>The Certainty System · Michelle Marrero · Week of April 20–22, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC2 · RC3 · RC7 · TPMO Identity · Math Annualization · C-SNP Identification</p>
        </div>

      </div>
    </PageShell>
  )
}
