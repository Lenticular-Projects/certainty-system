'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Weekly Brief: April 13–17, 2026 ─────────────────────────────────────────

const callsByDate = [
  {
    date: 'Tuesday, April 14',
    calls: [
      { consumer: 'Christine Poore', duration: '16:34', score: 65, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'Network Incompatibility — Correct No-Sale', href: '/agents/lawrence-morris/calls/christine-poore' },
      { consumer: 'David Harrington', duration: '21:58', score: 48, outcome: 'INCOMPLETE', outcomeNote: 'Discovery done — close not attempted', type: 'Medication Barrier — Callback Default', href: '/agents/lawrence-morris/calls/david-harrington' },
    ],
  },
]

const patterns = [
  {
    title: 'Correct no-sale, future enrollment not locked in',
    rc: 'RC1',
    urgency: 'critical' as const,
    body: 'When you identify a genuine incompatibility and call the no-sale correctly, that\'s not the end of the relationship — it\'s the beginning of the next one. Christine\'s network issue will resolve. Open enrollment will come. The agents who win in the fall are the ones who planted the seed in April. A correct no-sale without a future hook is a lead you released.',
    rule: 'Before you hang up on any correct no-sale, plant the next enrollment seed. One sentence. Do it every time.',
    callRef: 'On the Christine Poore call, you identified the network incompatibility correctly and ended clean — but the call closed without a follow-up commitment. Christine is a warm contact you may never reach again.',
    moveLabel: 'Before you let a correct no-sale go:',
    move: '"Christine, before I let you go — when the network issue resolves or open enrollment starts, I want to be the one who calls you. Can I get your best number and set a reminder for the fall?"',
  },
  {
    title: 'Monthly figure stated — annual impact never made real',
    rc: 'RC3',
    urgency: 'high' as const,
    body: 'Monthly numbers are forgettable. When someone is deciding whether to switch, a $30/month difference doesn\'t feel like a decision — it feels like noise. The same number, said as $360 a year, is a car payment. It\'s a car registration. It\'s something a person can picture. The math was there on the David Harrington call. You just stopped one step too early.',
    rule: null,
    callRef: 'On the David Harrington call, you found the $294 plan and ran the comparison — but the $30/month difference was never annualized. The number never hit.',
    moveLabel: 'Turn the monthly number into a year:',
    move: '"The difference between where you are now and this plan is $360 a year — that\'s $30 every single month, in your pocket. What does $360 mean to you?"',
  },
  {
    title: 'Chronic condition mentioned — CSN SEP not explored',
    rc: 'RC6',
    urgency: 'medium' as const,
    body: 'When a consumer names a chronic condition during discovery, that mention is a year-round enrollment trigger if the right plan exists. Cerebral palsy is a potential C-SNP qualifier — which means open enrollment all year, not just in October. One follow-up question unlocks the whole conversation. Missing it doesn\'t just mean a missed enrollment — it means the consumer stays on a worse plan indefinitely.',
    rule: null,
    callRef: 'David Harrington mentioned cerebral palsy during the call. The mention was noted and not followed up. A CSN SEP question was never asked.',
    moveLabel: 'When a chronic condition comes up:',
    move: '"David, you mentioned cerebral palsy — is that a condition you\'re being treated for by a specialist right now? Because that may open some specific plan options for you that aren\'t available to everyone."',
  },
]

const pastReports = [
  { title: 'Weekly Brief — April 13–17', type: 'Weekly Brief', date: 'Apr 16, 2026', score: '56 / 100', active: true },
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

export default function LawrenceMorrisPage() {
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
          <h1 className={styles.agentName}>Lawrence Morris</h1>
          <p className={styles.period}>Week of April 13–17, 2026</p>
          <p className={styles.updatedAt}>Updated April 16 · 2 calls reviewed (Tue)</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(56) }}>56</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>Tue · 2 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>2</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>1</span>
            <span className={styles.scoreLabel}>Correct No-Sale</span>
            <span className={styles.scoreRange}>1 Incomplete</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>RC1</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Correct no-sale, no future locked in</span>
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p>These are the two calls we pulled this week where the conversation had room to go further — one was a genuine no-sale handled correctly, and one stalled before the close was attempted. Here&apos;s what we&apos;re working through.</p>
            <p><strong>What&apos;s working:</strong> your diagnostic work is thorough. On both calls you ran a complete qualification — Medicare ID, plan identification, doctor network check, medication review. You didn&apos;t rush past the discovery phase and you didn&apos;t pitch before you had the information. On Christine Poore, you identified the network incompatibility clearly and called the correct no-sale with integrity. That&apos;s the right call, and most agents don&apos;t have the knowledge or honesty to make it.</p>
            <p><strong>What&apos;s costing you:</strong> two things. First: every correct no-sale needs a follow-up hook before you hang up — Christine is a warm lead for the fall, and the call ended without one. Second: the math on the David Harrington call stopped at the monthly figure. The $30 difference doesn&apos;t close anything. The $360 a year might.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>You build solid cases and get consumers warm &mdash; the hard part is done by the time the barrier comes up. When someone says &ldquo;I need my medication list&rdquo; or &ldquo;my daughter handles that,&rdquo; the move is to stay in it: &ldquo;No problem &mdash; your pharmacy has that on file, let me check it right now while I have you&rdquo; or &ldquo;Let&apos;s get this started so you have something concrete to show her.&rdquo; Push through those last five yards. That&apos;s where the enrollment is.</p>
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
            <span>Week Average: <strong>56 / 100</strong></span>
            <span>Correct No-Sales: <strong>1 of 2</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>You called the Christine Poore no-sale correctly.</strong> Network incompatibility identified, plan ruled out, call ended professionally. That&apos;s a 65 — the knowledge to recognize when switching isn&apos;t right and the honesty to say so. Consumers remember agents who don&apos;t push them into the wrong plan. That trust is what generates referrals and callbacks in the fall.</p>
            <p><strong>Your discovery process is complete and consistent.</strong> Both calls had thorough qualification — you ran through Medicare ID, plan identification, doctor network verification, and medication review before making any recommendation. You didn&apos;t skip steps. That diagnostic discipline is the foundation everything else builds on, and it&apos;s not something every agent brings to every call.</p>
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
                <p className={styles.workOnTitle}>End every no-sale with a future enrollment hook</p>
                <p className={styles.workOnDetail}>Before you hang up on any correct no-sale: &ldquo;Christine, when your network situation changes or open enrollment starts, I want to be your first call. Can I take down your best number?&rdquo; One sentence. Every correct no-sale is a warm lead for fall — don&apos;t leave them on the table.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>Annualize every dollar figure — monthly is forgettable</p>
                <p className={styles.workOnDetail}>When you have the monthly difference, say the annual figure out loud before you move on: &ldquo;That&apos;s $30 a month — which is $360 a year. What does $360 mean to you?&rdquo; The annual number makes the math feel real. Monthly figures disappear.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>Chronic condition mention = CSN qualifier check</p>
                <p className={styles.workOnDetail}>Cerebral palsy, kidney disease, diabetes, heart failure — any of these opens a potential C-SNP Special Enrollment Period. The moment you hear one: &ldquo;Is that a condition you&apos;re being actively treated for right now? Because that may open some specific plan options.&rdquo; One question. Don&apos;t move on without asking it.</p>
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
          <p>The Certainty System · Lawrence Morris · Week of April 13–17, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC3 · RC6 · No-Sale Pipeline · Annualization · CSN SEP</p>
        </div>

      </div>
    </PageShell>
  )
}
