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
      { consumer: 'John Easterday', duration: '11:46', score: 60, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'Pre-Medicare / IEP — Correct No-Sale', href: '/agents/karimah-ali/calls/john-easterday' },
      { consumer: 'Powanna Jones', duration: '3:48', score: 42, outcome: 'INCOMPLETE', outcomeNote: 'Discovery done — close not attempted', type: 'Verification Dropout — No Recovery', href: '/agents/karimah-ali/calls/powanna-jones' },
    ],
  },
]

const patterns = [
  {
    title: 'A serious disclosure lands — the call moves on without acknowledging it',
    rc: 'RC2',
    urgency: 'critical' as const,
    body: 'When a consumer reveals something heavy — a terminal diagnosis, managing alone, a financial crisis — that information changes the call. It\'s not a checkpoint to pass before the next compliance step. It\'s the most important thing they said. A consumer fighting stage 4 cancer doesn\'t need a plan review. They need to know someone is paying attention. Two sentences of acknowledgment converts a compliance interaction into a trusted conversation. Without it, you\'re just running procedure on someone who needs a person.',
    rule: 'Before advancing to the next script step, ask: did this person just tell me something important? If yes, say something real first.',
    callRef: 'John said "I have stage four prostate cancer" at 1:47 and "I do it all alone" at 2:05. The response to both was "Okay" — then the nursing home check.',
    moveLabel: 'Pause. Acknowledge. Then continue.',
    move: '"John, I appreciate you sharing that with me. Stage 4 prostate cancer — you\'ve got a serious fight on your hands, and you\'re managing all of this by yourself. I want to make sure that when your Medicare comes online in August, you have a plan that has your back — the right doctors in-network, your medications covered, and the extra benefits that take some pressure off. That\'s exactly what we\'re putting together in May. You won\'t have to figure this out alone."',
  },
  {
    title: 'SSN asked before the Medicare card was offered',
    rc: 'RC1',
    urgency: 'high' as const,
    body: 'Verification friction ends calls when the consumer hasn\'t been given an easier path first. The Medicare card is less intimidating and just as useful for a lookup. When SSN is your first ask and the consumer hesitates, you\'ve already created an obstacle that didn\'t need to exist. Lead with the card. Offer SSN only if they can\'t find it. And if they hesitate on SSN, the next line is warmth and an alternative — not a procedure explanation.',
    rule: null,
    callRef: 'Powanna\'s SSN hesitation at 3:07 — "You can\'t pull it up with that number?" — was emotional, not logical. The response explained the rule. The call ended twelve seconds later.',
    moveLabel: 'Slow down. Offer the card. Give her a path.',
    move: '"No problem at all — if you have a few minutes to grab that red, white, and blue Medicare card, that\'s actually the easiest path. Want to take a second to look for it? I\'ll be right here."',
  },
  {
    title: 'Callback commitment not anchored to a reason',
    rc: 'RC2',
    urgency: 'medium' as const,
    body: 'Setting a callback date and time is the minimum. What makes a consumer answer the phone on that date is knowing exactly what the call will accomplish for them specifically. John Easterday agreed to May 1 at 2:00 PM — a man managing stage 4 cancer alone, who will have much more pressing things on his mind by then. Before ending any callback-dependent call, anchor the follow-up with the consumer\'s specific motivation. Name the benefit. Reference their situation. Give them a reason to answer.',
    rule: null,
    callRef: 'The May 1st callback for John was set at 11:25. His response was "That\'ll work." That is the minimum possible buy-in from someone fighting a terminal diagnosis.',
    moveLabel: 'Make them want to answer the phone.',
    move: '"John — on May 1st I\'m going to call you with the specific plan that has your oncology team covered and your medications at the right tier. You tell me what\'s most important to keep, and I\'ll make sure it\'s all there. That call takes about 15 minutes and we\'ll have your August coverage locked in before we hang up."',
  },
]

const pastReports = [
  { title: 'Weekly Brief — April 14', type: 'Weekly Brief', date: 'Apr 16, 2026', score: '51 / 100', active: true },
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

export default function KarimahAliPage() {
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
          <h1 className={styles.agentName}>Karimah Ali</h1>
          <p className={styles.period}>Week of April 13–17, 2026</p>
          <p className={styles.updatedAt}>Updated April 16 · 2 calls reviewed (Tue)</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(51) }}>51</span>
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
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)' }}>RC2</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Disclosure heard — not responded to</span>
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p>Two calls this week — both of them with consumers who had real situations and needed a real person on the other end. What we&apos;re working through is what happens when a consumer gives you something meaningful and the call keeps moving forward on autopilot.</p>
            <p><strong>What&apos;s working:</strong> the John Easterday call is where your strengths showed up clearly. At 4:07 you confirmed his Part A and B start date from the system, correctly identified he cannot enroll until August 2026, and did not manufacture eligibility. You explained the IEP window accurately, identified May as when enrollment can begin, and set a specific callback with a time — not a vague follow-up. That&apos;s working knowledge and professional discipline in the same call. Your compliance execution was clean across both calls, and your habit of confirming callback numbers early is a real strength that keeps leads alive when calls drop.</p>
            <p><strong>What&apos;s costing you:</strong> on both calls, a consumer gave you something real and the call kept moving to the next step as if it hadn&apos;t happened. John told you he had stage 4 prostate cancer at 1:47 and that he manages everything alone at 2:05. Both landed and both passed. Powanna&apos;s SSN hesitation was emotional — she felt presumed upon — and what she got was a procedure explanation. The single adjustment that changes your numbers: before you advance, ask yourself whether this person just told you something important. If yes, respond to the person before you respond to the script.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>Before you move to your next step, ask: did this person just tell me something important — and did I respond to the person, not the procedure? Two sentences of acknowledgment is the difference between a compliance call and a trusted conversation.</p>
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
            <span>Week Average: <strong>51 / 100</strong></span>
            <span>Correct No-Sales: <strong>1 of 2</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>The John Easterday correct no-sale was done the right way.</strong> You confirmed Part A and B start dates from the system at 4:07, correctly identified the IEP enrollment window, and explained exactly when he could begin the process for an August 1 effective date. You tied his stated motivation — the food card — to the plan type and the eligibility barrier, clearly and without confusion. Then you set a specific callback: May 1, 2:00 PM. Not a vague &ldquo;we&apos;ll follow up.&rdquo; A date and a time. That&apos;s how a no-sale stays a warm lead.</p>
            <p><strong>Your habit of confirming callback numbers early is a real professional instinct.</strong> You confirmed on the Easterday call at 1:28 and on the Jones call at 1:28 — before anything else had a chance to go sideways. That detail keeps leads alive when calls drop. It also signals to the consumer that you&apos;re organized and accountable. Keep doing it on every call, regardless of how the conversation is going.</p>
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
                <p className={styles.workOnTitle}>Acknowledge before advancing — every time</p>
                <p className={styles.workOnDetail}>When a consumer discloses a serious health issue, a financial crisis, or that they&apos;re navigating something alone — stop. Two sentences of genuine acknowledgment converts a compliance interaction into a trusted conversation. &ldquo;I appreciate you sharing that with me. That means your doctors and medications are everything right now — let me make absolutely sure your coverage has every one of them.&rdquo; Then continue. The script doesn&apos;t go anywhere. The person might.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>Lead with the Medicare card — offer SSN only as backup</p>
                <p className={styles.workOnDetail}>Introduce the Medicare card before the SSN becomes the issue. &ldquo;If you have a few minutes to grab that red, white, and blue card, that&apos;s actually the easiest path.&rdquo; If they still can&apos;t find it, pair the SSN ask with a one-sentence privacy anchor: &ldquo;I only use this to verify your Medicare coverage, nothing else.&rdquo; And convert every soft exit into a committed callback with your direct number — not a vague &ldquo;I&apos;ll call you back.&rdquo;</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>Anchor every callback commitment to a specific reason</p>
                <p className={styles.workOnDetail}>Before ending any callback-dependent call, anchor the follow-up with the consumer&apos;s specific motivation. Name the benefit they called about. Reference their situation. Tell them what the call will accomplish. John Easterday managing stage 4 cancer alone will have a lot of things competing for his attention by May 1. Give him a reason to answer. Make it personal, make it specific, make it about him.</p>
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
          <p>The Certainty System · Karimah Ali · Week of April 13–17, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC2 · Client Gold · SSN Handling · Callback Anchoring · Correct No-Sale</p>
        </div>

      </div>
    </PageShell>
  )
}
