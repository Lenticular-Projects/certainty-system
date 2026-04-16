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
      { consumer: 'TJ', duration: '2:22', score: 29, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'The Money Caller', href: '/agents/robert-pegler/calls/tj' },
      { consumer: 'Unknown Consumer', duration: '5:31', score: 42, outcome: 'INCOMPLETE', outcomeNote: 'Discovery done — close not attempted', type: 'The Money Caller', href: '/agents/robert-pegler/calls/unknown-consumer-5m31s' },
      { consumer: 'Dwight Chattahill', duration: '18:47', score: 56, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'Complex — Network Conflict', href: '/agents/robert-pegler/calls/dwight-chattahill' },
    ],
  },
  {
    date: 'Tuesday, April 14',
    calls: [
      { consumer: 'Anetta Clary', duration: '21:53', score: 45, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'The Money Caller — MOV SEP', href: '/agents/robert-pegler/calls/anetta-clary' },
      { consumer: 'Thomas Scott', duration: '37:36', score: 51, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'The Detail Staller', href: '/agents/robert-pegler/calls/thomas-scott' },
    ],
  },
]

const patterns = [
  {
    title: 'First objection = the moment you stopped fighting for the call',
    rc: 'RC1',
    urgency: 'critical' as const,
    body: 'When a consumer pushes back before they\'ve heard a dollar figure or a specific offer, it is almost never their final word. It\'s a question. A concern. A stall that dissolves when you give them something real to respond to. The instinct to offer a transfer, accept an exit, or verbalize surrender is costing you every call it shows up on. The consumer who pushes back is still on the line. That means the call is not over.',
    rule: 'Before you offer a transfer or accept a no, ask one question. The question tells you whether the objection is real.',
    callRef: 'TJ confirmed at 1:49 that her Humana plan had no food card — the exact reason she called. The response was "No, okay. No problem." The most expensive sentence of the week.',
    moveLabel: 'Consumer\'s current plan doesn\'t have what they called about — use it.',
    move: '"So your Humana plan doesn\'t have the food card — and that\'s exactly why you called. The plans I work with in Dickson do offer it. One of them puts about $150 a quarter in your pocket for groceries. It takes five minutes to check if you qualify. Would you be open to that?"',
  },
  {
    title: 'Logic response to an emotional objection — every time',
    rc: 'RC2',
    urgency: 'high' as const,
    body: 'On two calls this week, consumers gave you emotional signals — frustration, loss, the need to feel safe before making a decision — and you responded with information. Anetta told you what her food card meant: gas money, budget room, one month of breathing easier. Thomas told you he needed to review documents before committing. Both of those statements were feelings, not questions. Information doesn\'t move people who are feeling something. The sequence is: name the emotion first, then redirect to a specific value anchor.',
    rule: null,
    callRef: 'When Anetta said "I only had it for one month" at 18:53, you responded with an industry explanation. She was telling you what value felt like for her. That statement was your close.',
    moveLabel: 'Consumer names what the benefit meant to them — use their words.',
    move: '"Anetta, I hear you — that card was real for you. Gas money, budget room, one month where things were a little easier. I can\'t give you back the food card, but the plan I\'m looking at includes $2,000 in dental coverage. If you\'ve got work that needs doing, that\'s money you won\'t have to come up with out of pocket."',
  },
  {
    title: 'SEP found — never deployed as the enrollment reason',
    rc: 'RC6',
    urgency: 'medium' as const,
    body: 'You correctly identified special enrollment windows on three calls this week — MOV SEPs on Anetta Clary and Thomas Scott, an INT signal on the Unknown Consumer call. All three times, the SEP was noted during discovery and then set aside. But the SEP is not a discovery detail — it is the legal justification to enroll right now, today, regardless of what time of year it is. When you find it, you name it as the reason. That\'s what creates urgency.',
    rule: null,
    callRef: 'On the Unknown Consumer call, Medicaid disclosure at 0:55 opened a D-SNP enrollment window. "And Medicaid, okay, very good" is not a response — it\'s a missed pivot.',
    moveLabel: 'Consumer discloses Medicaid — this is the enrollment window.',
    move: '"That actually opens up something called a Dual Special Needs Plan — it\'s designed for exactly your situation and you can switch into it any month of the year. Let me check what\'s available in your area right now."',
  },
]

const pastReports = [
  { title: 'Weekly Brief — April 13–14', type: 'Weekly Brief', date: 'Apr 16, 2026', score: '44.6 / 100', active: true },
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
          <p className={styles.updatedAt}>Updated April 16 · 5 calls reviewed (Mon–Tue)</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(45) }}>45</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>Mon–Tue · 5 calls</span>
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
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)' }}>RC1</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Surrenders before the fight is over</span>
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p>These are the calls we pulled this week where the conversation was fully alive — consumers engaged, on the line, and open enough to stay there. What we&apos;re working through is what happened at the moments when pushback came and where it could have gone differently.</p>
            <p><strong>What&apos;s working:</strong> your product knowledge is real and it showed up when it counted. On the Thomas Scott call, you corrected a critical piece of SSA misinformation — the 12-month trial period rule — with calm authority and specific detail. Thomas heard it. On the Anetta Clary call, you caught a subtle address discrepancy and recognized it as a MOV enrollment window. On the Dwight Chattahill call, you worked through four SEP pathways, ruled each one out accurately, and called a correct no-sale with 18 minutes invested. That is professional integrity and it is yours.</p>
            <p><strong>What&apos;s costing you:</strong> the same pattern showed up on three separate calls in three different forms — a transfer offered before any reframe, a permission slip to hang up at minute 21, a statement that callbacks are "usually a waste of everyone&apos;s time." Different calls, same thing underneath: when the consumer pushed back, you gave ground instead of holding it. You have the knowledge to hold it. The correction is using what you know before you decide the call is over.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>You have the product knowledge to find the gap and make the case &mdash; that&apos;s the hard part, and you do it well. The move that keeps more calls alive is holding your ground once when the call gets uncomfortable: name exactly what the consumer called for and put the number in front of them before you give them the exit. When you feel resistance, one reframe &mdash; &ldquo;Here&apos;s what I found for you&rdquo; &mdash; is all it takes to stay in the conversation. You&apos;ve already done the work. Use it.</p>
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
            <span>Week Average: <strong>44.6 / 100</strong></span>
            <span>Correct No-Sales: <strong>1 of 5</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>The best moment of your week came at 17:09 on the Thomas Scott call. Thomas had been told by the Social Security Office that he could never return to Original Medicare after switching to Advantage — a misconception that ends more enrollments than any real objection in this business. You didn&apos;t back away. You corrected it clearly: the 12-month trial period rule, explained with calm authority. Thomas heard it. That correction required you to push back on what a federal agency told a consumer, and you did it cleanly. That is the kind of product knowledge that is a genuine competitive advantage — and you used it at the right moment.</p>
            <p>Your SEP detection work was a consistent strength across the week. You caught the MOV window on Anetta Clary at 5:05 — a subtle address mismatch that most agents walk right past. You caught the same signal on Thomas Scott at 11:07. And on Dwight Chattahill, you worked methodically through four distinct SEP pathways, ruled each one out accurately, and called the correct no-sale when the network incompatibility was confirmed. That&apos;s integrity on a call where the commission was real. The next step is deploying those SEPs as the enrollment reason at the moment you find them — not just noting them in discovery.</p>
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
                <p className={styles.workOnTitle}>Hold the lead on the first objection</p>
                <p className={styles.workOnDetail}>When a consumer names their current carrier as a reason to disengage, your first move is a reframe — not a transfer. Practice the brand-loyalty reframe until it fires automatically: &ldquo;I hear you — and you called today because your plan doesn&apos;t have the food card. The question isn&apos;t really Humana vs. another carrier. It&apos;s whether a plan that gives you $600 a year in groceries is worth five minutes.&rdquo;</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>Name the emotion before you explain anything</p>
                <p className={styles.workOnDetail}>When Anetta or Thomas gave you a feeling — frustration, loss, needing to feel safe — the correct response sequence is: name the emotion first, then one empathy sentence, then redirect to a specific value anchor. &ldquo;I hear how frustrating that is&rdquo; is not enough on its own. Follow it with: &ldquo;Here&apos;s what I can do about it.&rdquo;</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>Never verbalize surrender — every consumer is a future lead</p>
                <p className={styles.workOnDetail}>When a call isn&apos;t going to close, the correct exit is a value statement and a professional close — not a permission slip to hang up. &ldquo;If you&apos;re not interested, no problem&rdquo; releases the lead. &ldquo;Based on what you told me, the Aetna plan saves you $40 every time you see your specialist — call me when you&apos;re ready to get that started&rdquo; preserves it. Every consumer who doesn&apos;t enroll today is a potential AEP lead in October.</p>
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
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC2 · RC6 · MOV SEP · Brand-Loyalty Reframe · Close Authority</p>
        </div>

      </div>
    </PageShell>
  )
}
