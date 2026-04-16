'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Weekly Brief: April 13–17, 2026 ──────────────────────────────────────────

const callsByDate = [
  {
    date: 'Wednesday, April 15',
    calls: [
      { consumer: 'David Jeffrey Smith', duration: '4:32', score: 42, outcome: 'INCOMPLETE', outcomeNote: 'Discovery done — close not attempted', type: 'SSN Refused — No Recovery Pivot', href: '/agents/german-vivas/calls/david-jeffrey-smith' },
    ],
  },
]

const patterns = [
  {
    title: 'SSN refusal is a trust objection — you treated it as a final answer',
    rc: 'RC1',
    urgency: 'critical' as const,
    body: 'When a consumer refuses the SSN, they\'re not ending the call — they\'re drawing a line at one specific thing. David gave you his full name, middle name, date of birth, ZIP, and callback number without hesitation. He stayed cooperative through the entire opening. The trust break was at SSN and nowhere else. You had already told him earlier there was another way. That pivot needed to be executed, not acknowledged and abandoned.',
    rule: 'The call is not over until the consumer hangs up. "Bye" is never the correct response to an objection.',
    callRef: 'David said "I don\'t trust you" at 4:01. You said "I get it. Bye." at 4:03. You had his name, DOB, and ZIP — you could have tried a name/DOB lookup right then.',
    moveLabel: 'Validate the fear. Offer the alternative. Anchor the benefit.',
    move: '"Mr. Smith, I completely understand — I wouldn\'t give my social to someone I just met either. Here\'s the thing: I can actually pull you up with your Medicare card number instead. Do you have that red, white, and blue card anywhere nearby? And based on your Medicaid status, I think there\'s a plan here that gets you exactly what you\'re looking for."',
  },
  {
    title: 'David said Medicaid — that opens a year-round enrollment window',
    rc: 'RC6',
    urgency: 'high' as const,
    body: 'At 1:21, David confirmed Medicare and Medicaid. That\'s an INT SEP — he can switch plans any month of the year. He told you he was looking for extra benefits. He confirmed exactly the profile that a D-SNP is built for. Before the SSN question ever came up, you had a stronger enrollment angle sitting right there. Most agents pass this signal with a generic OTC mention. That\'s what happened here.',
    rule: null,
    callRef: 'David said at 1:21: "I\'m 64 years old, I have Medicaid and Medicare. I\'m trying to see how I can get extra funding." You responded with a generic OTC card mention and moved on.',
    moveLabel: 'Stop at the dual-eligibility disclosure. Ask the one question.',
    move: '"Since you\'re on both Medicare and Medicaid, you may qualify for a special plan that covers more and costs you nothing — and I can enroll you any time of year, not just in October. Is the state paying your Part B premium for you?"',
  },
  {
    title: 'Anchor the value before asking for the SSN',
    rc: 'RC1',
    urgency: 'medium' as const,
    body: 'David didn\'t know what the SSN was going to get him. He knew it was a risk — and he had no reason established for why the risk was worth it. When you\'re moving toward verification on a dual-eligible consumer, give the consumer a reason to stay before you ask for the sensitive information. Without it, the SSN request is just a hurdle with nothing on the other side.',
    rule: null,
    callRef: 'The SSN request came before any benefit was named for David specifically. He had no picture of what he was being verified to receive.',
    moveLabel: 'Give them a reason to hand it over.',
    move: '"Mr. Smith, based on your Medicaid status, there may be a plan that covers your extra benefits at zero cost — but I need to confirm your identity to pull that up for you. Can I get your Medicare card number, or if you don\'t have that, your Social Security number works too."',
  },
]

const pastReports = [
  { title: 'Weekly Brief — April 13–17', type: 'Weekly Brief', date: 'Apr 16, 2026', score: '42 / 100', active: true },
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

export default function GermanVivasPage() {
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
          <h1 className={styles.agentName}>German Vivas</h1>
          <p className={styles.period}>Week of April 13–17, 2026</p>
          <p className={styles.updatedAt}>Updated April 16 · 1 call reviewed (Wed)</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(42) }}>42</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>Wed · 1 call</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>1</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 15, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>0</span>
            <span className={styles.scoreLabel}>Enrolled</span>
            <span className={styles.scoreRange}>0 of 1 · 1 Incomplete</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>RC1</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>SSN surrender</span>
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p>One call is enough to see what you&apos;re working with — and this call shows real foundation. We&apos;re working through the one moment that ended it and two skills to build on top of what you already have.</p>
            <p><strong>What&apos;s working:</strong> David stayed cooperative through name, middle name, and date of birth collection — he volunteered his middle name without being asked. That kind of trust in the opening doesn&apos;t happen by accident. You confirmed the callback number at 1:41 before verification even started — a move that matters more on short calls than long ones, because when a call ends fast, that number is your only path back. The trust broke at SSN and nowhere earlier. Your opening manner was working.</p>
            <p><strong>What&apos;s costing you:</strong> the call came apart in a single moment at 4:01, and it didn&apos;t have to. When David refused the SSN, you had one pivot available — the Medicare card — and you had already set it up verbally when you told him there was another way. But when the moment arrived, you said &ldquo;I get it. Bye.&rdquo; The correction is one sentence. And the second thing this call reveals: David told you at 1:21 he has both Medicare and Medicaid and wants extra benefits — you had a year-round enrollment window sitting right there and moved past it.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a consumer refuses the SSN, your next words are: &ldquo;No problem — I can pull you up with your Medicare card number instead. Do you have that nearby?&rdquo; That one sentence keeps the call alive. &ldquo;I get it. Bye.&rdquo; ends it.</p>
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
            <span>Week Average: <strong>42 / 100</strong></span>
            <span>Enrolled: <strong>0 of 1</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>The callback number confirmation at 1:41 was the right call — and it showed.</strong> You locked in David&apos;s number before verification even started. On a 4-minute call where the consumer hangs up, that number is everything. The instinct to secure it early is real, and on a longer call it becomes the difference between a dead lead and a booked appointment.</p>
            <p><strong>You kept David engaged through the full opening phase.</strong> He stayed cooperative, answered every question, and volunteered his middle name at 3:05 to make sure you had the right person. The trust break happened at SSN — not before. Your opening manner was working. The pivot skillset we&apos;re building now is what turns 4-minute calls into 20-minute enrollments.</p>
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
                <p className={styles.workOnTitle}>Have the SSN recovery script ready before every call</p>
                <p className={styles.workOnDetail}>SSN refusals happen on nearly every call type. You need one sentence ready before you pick up the phone: &ldquo;No problem — I can try looking you up with your Medicare card number, or just your name and date of birth. I already have both. Let me see what comes up.&rdquo; You had David&apos;s name, DOB, and ZIP. You could have tried the lookup right then. Practice that sentence out loud before your next shift.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>When they say Medicaid and Medicare — ask one question before moving on</p>
                <p className={styles.workOnDetail}>At 1:21, David told you he had both. That is an INT SEP — he can enroll any month. The question you needed was: &ldquo;Is the state paying your Part B premium for you?&rdquo; If yes, you have a D-SNP conversation and a zero-premium plan that delivers exactly what he called in asking for. Every dual-eligible disclosure gets that question from now on.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>Never say &ldquo;Bye&rdquo; in response to an objection</p>
                <p className={styles.workOnDetail}>David said &ldquo;I don&apos;t trust you&rdquo; — and you said &ldquo;I get it. Bye.&rdquo; That tells the consumer they were right to hang up. The trust objection is one of the most common and most winnable objections on a Medicare call. Validate the fear first: &ldquo;I completely understand — I wouldn&apos;t give my social to a stranger either.&rdquo; Then offer the alternative. Never concede before you pivot.</p>
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
          <p>The Certainty System · German Vivas · Week of April 13–17, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC6 · SSN Recovery · INT SEP · D-SNP · Trust Objection</p>
        </div>

      </div>
    </PageShell>
  )
}
