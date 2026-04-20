'use client'

import { useState } from 'react'
import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Weekly Brief: April 13–17, 2026 ─────────────────────────────────────────
// Scores: Dennis Carroll 54, Francis Wardlaw 72, Lamar Bull 68,
//         Unknown 5m25s 32, Unknown 6m47s 26,
//         Annie Bellamy 52, Carol Kissinger 52, Lenny Thompson 64,
//         Unknown 6m11s 28, Katherine Curtis 38, Joseph Rinaldi 36
// Avg of 11 scored calls: (54+72+68+32+26+52+52+64+28+38+36) / 11 = 522/11 ≈ 48

const callsByDate = [
  {
    date: 'Monday, April 13',
    calls: [
      { consumer: 'Unknown Consumer', duration: '5:25', score: 32, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'The Money Caller', href: '/agents/alicia-moore-williams/calls/unknown-consumer-5m25s' },
      { consumer: 'Unknown Consumer', duration: '6:47', score: 26, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'The Money Caller', href: '/agents/alicia-moore-williams/calls/unknown-consumer-6m47s' },
      { consumer: 'Dennis Carroll', duration: '7:49', score: 54, outcome: 'INCOMPLETE', outcomeNote: 'Discovery done — SEP missed, no presentation', type: 'The OTC Card Caller', href: '/agents/alicia-moore-williams/calls/dennis-carroll' },
      { consumer: 'Francis Wardlaw', duration: '60:00', score: 72, outcome: 'INCOMPLETE', outcomeNote: 'D-SNP correction enrolled — call ran 60 min, no math assembled', type: 'D-SNP Correction', href: '/agents/alicia-moore-williams/calls/francis-wardlaw' },
      { consumer: 'Lamar Bull', duration: '66:00', score: 68, outcome: 'INCOMPLETE', outcomeNote: 'D-SNP correction enrolled — call ran 66 min, Schedule II coverage unresolved', type: 'D-SNP Correction', href: '/agents/alicia-moore-williams/calls/lamar-bull' },
    ],
  },
  {
    date: 'Tuesday, April 14',
    calls: [
      { consumer: 'Annie L. Bellamy', duration: '13:04', score: 52, outcome: 'INCOMPLETE', outcomeNote: 'SEP missed — never transitioned to presentation', type: 'The OTC Card Caller', href: '/agents/alicia-moore-williams/calls/annie-l-bellamy' },
      { consumer: 'Carol Lynn Kissinger', duration: '16:59', score: 52, outcome: 'INCOMPLETE', outcomeNote: 'Discovery done — close not attempted', type: 'The Money Caller', href: '/agents/alicia-moore-williams/calls/carol-lynn-kissinger' },
      { consumer: 'Lenny A. Thompson', duration: '28:31', score: 64, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'The Brand Loyalist', href: '/agents/alicia-moore-williams/calls/lenny-a-thompson' },
      { consumer: 'Unknown Consumer', duration: '6:11', score: 28, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'The Money Caller', href: '/agents/alicia-moore-williams/calls/unknown-consumer-6m11s' },
    ],
  },
  {
    date: 'Wednesday, April 15',
    calls: [
      { consumer: 'Katherine Curtis', duration: '60:00', score: 38, outcome: 'MISSED OPPORTUNITY', outcomeNote: 'Aetna objection surrendered — 60 min with no enrollment', type: 'The Chronic Caller', href: '/agents/alicia-moore-williams/calls/katherine-curtis' },
    ],
  },
  {
    date: 'Thursday, April 17',
    calls: [
      { consumer: 'Joseph Rinaldi', duration: '40:15', score: 36, outcome: 'MISSED OPPORTUNITY', outcomeNote: 'Consumer said yes at 14:39 — close attempted 20 min too late', type: 'Dual-Eligible Plan Upgrade', href: '/agents/alicia-moore-williams/calls/joseph-rinaldi' },
    ],
  },
]

const patterns = [
  {
    title: 'When a consumer says yes at minute 14, close at minute 14 — not minute 34',
    rc: 'RC1',
    urgency: 'critical' as const,
    body: 'Joseph Rinaldi said "Yes, it sounds interesting" at 14:39. That was the close signal. The response is: "Great — let me get you enrolled right now, it takes about five minutes and your new benefits start May 1st." Instead, Delisha spent 20 more minutes on verification. By the time she asked for the enrollment at 34:19, Joseph was exhausted and said no. The close window is not at the end of the call — it is the moment the consumer says yes. Everything after that either confirms the enrollment or bleeds the energy out of it.',
    rule: 'When a consumer confirms interest, pivot to enrollment immediately. Every minute after the "yes" is a minute you can lose.',
    callRef: 'Joseph Rinaldi at 14:39: "Yes, it does" (does it sound interesting to you?). Twenty minutes of continued verification followed. He declined at 34:19.',
    moveLabel: 'Consumer confirms interest — close immediately:',
    move: '"I\'m glad it sounds good — let me get you started right now. It takes about five minutes and your new benefits start May 1st. I just need to verify your doctor is in network and confirm your medications. Ready?"',
  },
  {
    title: 'Emotional objections — find out what went wrong, don\'t add more math',
    rc: 'RC2',
    urgency: 'high' as const,
    body: 'The Katherine Curtis call ran a full hour. She had Medicaid, COPD, insulin-dependent diabetes, and was paying out of pocket for insulin on $500 a month — the highest-urgency lead in the system. The Aetna objection came up repeatedly and was answered with data each time. Data does not reach an emotional objection. When someone tells you they had a bad experience, the move is one specific question: "What went wrong?" Find out the exact complaint. Then either show it is fixed, or find a different plan.',
    rule: null,
    callRef: 'Katherine said she had Aetna before and it was terrible — multiple times. She never heard: "What went wrong with Aetna specifically? Because if it was a specific plan issue, this 2026 D-SNP is a different product. Tell me what happened."',
    moveLabel: 'When the objection is a bad past experience with the same carrier:',
    move: '"What went wrong with them? I want to know exactly what happened — because if it was something in the plan design, this 2026 D-SNP is structured differently. And if the same problem exists, I\'ll find you a different carrier. But I can\'t fix it until I know what it was."',
  },
  {
    title: 'D-SNP corrections are enrolled — but the math was never assembled',
    rc: 'RC3',
    urgency: 'medium' as const,
    body: 'Francis Wardlaw and Lamar Bull were both corrected from C-SNP to D-SNP — real wins. But on neither call was the benefit difference assembled into a single number. Francis heard individual improvements named: $283 OTC, $4,000 dental, $0 ambulance. She never heard: "$283 a month is $3,396 a year. Plus $4,000 dental. You are getting thousands of dollars more in benefits, still on UnitedHealthcare." The enrollment happened — but the consumer left without understanding the full scope of what changed for her. That one sentence is the difference between a consumer who stays enrolled and one who gets talked out of it by a family member next week.',
    rule: null,
    callRef: 'Francis Wardlaw at 15:19 — OTC, dental, and ambulance savings named separately. Never assembled. "$7,000+ in annual improvements, still on UHC" was never said.',
    moveLabel: 'After naming benefits individually — assemble them into a total:',
    move: '"Between $283 a month in OTC — that\'s $3,396 a year — plus the $4,000 dental and zero ambulance instead of $275, we\'re talking over $7,000 in annual improvements. All still with the same UnitedHealthcare card you already have."',
  },
]

const pastReports = [
  {
    active: true,
    type: 'Weekly Brief',
    title: 'Weekly Brief — April 13–17, 2026',
    score: '48 / 100',
    date: 'Apr 20, 2026',
  },
  {
    active: false,
    type: 'Weekly Brief',
    title: 'Weekly Brief — April 13–14, 2026',
    score: '56 / 100',
    date: 'Apr 16, 2026',
  },
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
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(
    Object.fromEntries(callsByDate.map((g, i) => [g.date, i === 0]))
  )
  const toggleGroup = (date: string) =>
    setOpenGroups(p => ({ ...p, [date]: !p[date] }))

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
          <p className={styles.updatedAt}>Updated April 20 · 11 calls reviewed</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(48) }}>48</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>Apr 13–17 · 11 scored calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>11</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 13–17, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>4</span>
            <span className={styles.scoreLabel}>Missed Opportunity</span>
            <span className={styles.scoreRange}>1 No-Sale · 4 Incomplete · 2 D-SNP</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>RC1</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Close window missed on live yes</span>
          </div>
        </motion.div>

        {/* ── Performance Digest ── */}
        <motion.div className={styles.section} {...SPRING}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid rgba(19,17,16,0.08)' }}>
            <h2 className={styles.sectionTitle} style={{ margin: 0, padding: 0, border: 'none' }}>Performance Digest</h2>
            <span style={{ fontSize: '0.75rem', color: 'var(--ink-60)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Weekly</span>
          </div>
          <div style={{ background: 'rgba(251,248,243,0.82)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.5)', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '12px 20px', background: 'rgba(19,17,16,0.04)', borderBottom: '1px solid rgba(19,17,16,0.08)', gap: '12px' }}>
              {(['Metric', 'Apr 6–10', 'Apr 13–17', 'Change'] as string[]).map(h => (
                <span key={h} style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>{h}</span>
              ))}
            </div>
            {([
              { metric: 'Sales',       prior: '3',     current: '6',     delta: '+3',      dir: 'up' },
              { metric: 'Conversion',  prior: '3.70%', current: '6.67%', delta: '+2.97pp', dir: 'up' },
              { metric: 'CPA',         prior: '$342',  current: '$207',  delta: '−$135',   dir: 'up' },
              { metric: 'Total Calls', prior: '81',    current: '90',    delta: '+9',      dir: 'neutral' },
            ] as Array<{ metric: string; prior: string; current: string; delta: string; dir: 'up' | 'down' | 'neutral' }>).map((row, i, arr) => (
              <div key={row.metric} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '14px 20px', gap: '12px', alignItems: 'center', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.08)' : 'none' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--ink)' }}>{row.metric}</span>
                <span style={{ fontSize: '0.9375rem', fontVariantNumeric: 'tabular-nums', color: 'var(--ink-60)' }}>{row.prior}</span>
                <span style={{ fontSize: '0.9375rem', fontWeight: 700, fontVariantNumeric: 'tabular-nums', color: 'var(--ink)' }}>{row.current}</span>
                <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: row.dir === 'up' ? 'var(--sage-dark)' : row.dir === 'down' ? 'var(--terracotta)' : 'var(--ink-60)' }}>{row.delta}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p>These are the calls we pulled this week where the conversation was alive — consumers who engaged, stayed on the line, and gave you real information to work with. What we are working through is what happened in the moments where the call could have moved forward and did not.</p>
            <p><strong>What&apos;s working:</strong> you caught two D-SNP corrections this week — Francis Wardlaw and Lamar Bull were both on C-SNP plans when they qualified for D-SNPs, and you identified it, explained why it mattered, and moved them within the same carrier. That is a specific skill most agents never develop. The Lenny Thompson call was also read correctly: a QMB+ dual member who was already on the right plan, and you made the right exit without pushing. He complimented you by name.</p>
            <p><strong>What&apos;s costing you:</strong> Joseph Rinaldi said &ldquo;yes, it sounds interesting&rdquo; at 14:39. Delisha spent 20 more minutes on verification. By the time she asked for the enrollment at 34:19, he was exhausted and said no. That call had an enrollment in it. The Katherine Curtis call ran 60 minutes against the highest-urgency lead profile in the system — insulin-dependent diabetic on $500 a month — and ended with no enrollment because the Aetna objection was answered with data instead of a question. The pattern this week is not knowledge. It is timing and emotional response at the close.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>You are finding the right plan on call after call &mdash; the D-SNP corrections prove it. The move that converts more is this: when a consumer says yes, close immediately. &ldquo;Great &mdash; I&apos;m going to get you set up right now. It takes five minutes and your benefits start May 1st.&rdquo; Do not keep building the case after you already have the yes. Assume they are saying yes, lock it in, and move.</p>
        </motion.div>

        {/* ── This Week&apos;s Calls ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>This Week&apos;s Calls</h2>
          {callsByDate.map((group) => (
            <div key={group.date} style={{ marginBottom: '1.5rem' }}>
              <button onClick={() => toggleGroup(group.date)} className={styles.dateGroupToggle}>
                <span>{group.date}</span>
                <span className={styles.dateGroupMeta}>{group.calls.length} call{group.calls.length !== 1 ? 's' : ''}</span>
                <span className={styles.dateGroupArrow}>{openGroups[group.date] ? '▲' : '▼'}</span>
              </button>
              {openGroups[group.date] && (
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
                      <span className={styles.callScore} style={{ color: call.score > 0 ? scoreColor(call.score) : 'var(--ink-60)' }}>
                        {call.score > 0 ? call.score : '—'}
                      </span>
                      <span className={styles.outcomeCell}>
                        <span className={`${styles.pill} ${outcomeClass(call.outcome)}`}>{call.outcome}</span>
                        {call.outcomeNote && <span className={styles.outcomeNote}>{call.outcomeNote}</span>}
                      </span>
                      <span className={styles.callType}>{call.type}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className={styles.callTableFooter}>
            <span>Week Average: <strong>48 / 100</strong></span>
            <span>Missed Opportunity: <strong>4 of 11</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>The D-SNP corrections on Monday were the strongest moves of the week.</strong> Francis Wardlaw and Lamar Bull were both sitting on C-SNP plans when they qualified for D-SNPs, and you caught it, explained the difference in plain language, and moved them to the right plan within UnitedHealthcare — the carrier they already trusted. On the Wardlaw call you correctly identified the unauthorized switch that had put her on the wrong plan and told her how to protect herself going forward. That is the kind of specific, protective expertise that builds long-term consumer loyalty.</p>
            <p><strong>You read the Lenny Thompson call correctly.</strong> Twenty-eight minutes in, a QMB+ dual-eligible who had already moved to Humana voluntarily and was satisfied — you identified the wall, confirmed he was already on the right plan, and made the right exit without pushing. He complimented you by name. Correct no-sales are as important as enrollments when the situation calls for one. Knowing when to stop is a real skill.</p>
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
                <p className={styles.workOnTitle}>Close when the consumer says yes — not twenty minutes later</p>
                <p className={styles.workOnDetail}>When a consumer confirms interest, the response is immediate: &ldquo;I&apos;m going to get you set up right now — it takes about five minutes and your benefits start May 1st.&rdquo; Do not continue building the case after you already have the yes. Continued verification after interest is confirmed bleeds the energy and gives the consumer time to change their mind. Joseph Rinaldi said yes at 14:39. The close came at 34:19. That is 20 minutes too late.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>Emotional objections — ask what went wrong, do not add more math</p>
                <p className={styles.workOnDetail}>The Katherine Curtis call ran 60 minutes against the highest-urgency lead in the system and ended with no enrollment. She raised the Aetna objection repeatedly. The response each time was data. Data does not reach a past bad experience. The one move that could have converted that call: &ldquo;What went wrong with Aetna? Tell me exactly what happened — because if it was a plan design issue, this 2026 D-SNP is structured differently. And if the same problem exists, I will find you a different carrier.&rdquo;</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>Assemble the math into one total before the close</p>
                <p className={styles.workOnDetail}>On both D-SNP corrections this week, individual benefits were named but never assembled into a single number. A consumer who hears &ldquo;$283 OTC, $4,000 dental, zero ambulance&rdquo; cannot easily repeat that to a family member. A consumer who hears &ldquo;over $7,000 more in annual benefits, still on your same UnitedHealthcare card&rdquo; can. Assemble the total before you close — it is the sentence that protects the enrollment after you hang up.</p>
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
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC3 · RC6 · D-SNP Correction · First Objection Reframe · Discovery-to-Present Gap</p>
        </div>

      </div>
    </PageShell>
  )
}
