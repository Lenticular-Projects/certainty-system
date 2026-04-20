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
  {
    date: 'Wednesday, April 15',
    calls: [
      { consumer: 'Paul Lee', duration: '65:00', score: 84, outcome: 'ENROLLED', outcomeNote: null, type: 'Complex D-SNP — Dual Eligible with Cancer', href: '/agents/karimah-ali/calls/paul-lee' },
    ],
  },
]

const patterns = [
  {
    title: 'Serious disclosure lands — call keeps moving on autopilot',
    rc: 'RC2',
    urgency: 'critical' as const,
    body: 'On the John Easterday call, a consumer with stage 4 prostate cancer told you he manages his healthcare alone. Both pieces of information arrived in under 90 seconds, and both passed. On the Paul Lee call — 84 points, your best call of the week — you executed a pharmacy verification call and navigated a complex dual-eligible enrollment with multiple conditions. The same pattern appeared: the emotional weight of Paul\'s new cancer diagnosis was present throughout and never explicitly anchored to what the coverage meant for him. Two sentences of acknowledgment converts a compliance interaction into a trusted conversation.',
    rule: 'Before advancing to the next script step, ask: did this person just tell me something important? If yes, respond to the person before you respond to the script.',
    callRef: 'John said "I have stage four prostate cancer" at 1:47 and "I do it all alone" at 2:05. The response to both was "Okay" — then the nursing home check.',
    moveLabel: 'Pause. Acknowledge. Then continue.',
    move: '"John, I appreciate you sharing that with me. Stage 4 prostate cancer — that\'s a serious fight, and you\'re managing all of this by yourself. I want to make sure that when your Medicare comes online in August, you have a plan that has your back — your doctors in-network, your medications covered, and the extra benefits that take some pressure off. That\'s exactly what we\'re putting together."',
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
    title: 'Callback commitment not anchored to a specific reason',
    rc: 'RC2',
    urgency: 'medium' as const,
    body: 'John Easterday agreed to a May 1 callback at 2:00 PM — a man with stage 4 cancer managing everything alone, who will have far more pressing things competing for his attention by then. Setting a date and time is the minimum. What makes a consumer answer the phone is knowing exactly what the call will accomplish for them specifically. Name the benefit. Reference their situation. Give them a reason to answer.',
    rule: null,
    callRef: 'The May 1st callback was set at 11:25. John\'s response was "That\'ll work." That is the minimum possible buy-in from someone fighting a terminal diagnosis.',
    moveLabel: 'Make them want to answer the phone.',
    move: '"John — on May 1st I\'m going to call you with the specific plan that has your oncology team covered and your medications at the right tier. You tell me what\'s most important to keep, and I\'ll make sure it\'s all there. That call takes about 15 minutes and we\'ll have your August coverage locked in before we hang up."',
  },
]

const pastReports = [
  { title: 'Weekly Brief — April 14 (partial)', type: 'Weekly Brief', date: 'Apr 16, 2026', score: '51 / 100', active: false },
  { title: 'Weekly Brief — April 13–17', type: 'Weekly Brief', date: 'Apr 20, 2026', score: '62 / 100', active: true },
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
          <p className={styles.updatedAt}>Updated April 20 · 3 calls reviewed</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(62) }}>62</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>3 calls · Tue–Wed</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>3</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 14–15, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>1</span>
            <span className={styles.scoreLabel}>Enrolled</span>
            <span className={styles.scoreRange}>1 Correct No-Sale · 1 Incomplete</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>84</span>
            <span className={styles.scoreLabel}>Top Call</span>
            <span className={styles.scoreRange}>Paul Lee — Complex D-SNP</span>
          </div>
        </motion.div>

        {/* ── Platform Numbers ── */}
        <motion.div style={{ marginBottom: '48px' }} {...SPRING}>
          <h2 className={styles.sectionTitle}>Platform Numbers</h2>
          <div className={styles.scorecardRow}>
            <div className={styles.scoreCard}>
              <span className={styles.scoreValue}>14</span>
              <span className={styles.scoreLabel}>Sales — Apr 13–17</span>
              <span className={styles.scoreRange}>14.89% conversion</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, marginTop: 4, color: 'var(--sage-dark)' }}>
                ↑ from 11 (10.68%)
              </span>
            </div>
            <div className={styles.scoreCard}>
              <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>$84</span>
              <span className={styles.scoreLabel}>CPA — Apr 13–17</span>
              <span className={styles.scoreRange}>Cost per sale</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, marginTop: 4, color: 'var(--sage-dark)' }}>
                ↓ improved from $108
              </span>
            </div>
            <div className={styles.scoreCard}>
              <span className={styles.scoreValue}>94</span>
              <span className={styles.scoreLabel}>Total Calls — Apr 13–17</span>
              <span className={styles.scoreRange}>61 billable</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--ink-60)', marginTop: 4 }}>
                Prior week: 103 calls
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p>Three calls this week — one high-complexity enrollment, one correct no-sale, one incomplete. The Paul Lee call at 84 points is the benchmark: it was a difficult call on a consumer with multiple chronic conditions and a new cancer diagnosis, and you closed it. That call tells you what you&apos;re capable of.</p>
            <p><strong>What&apos;s working:</strong> the Paul Lee enrollment was expertly navigated — you correctly identified D-SNP eligibility, executed a 3-way pharmacy verification call, surfaced an insulin formulary exception need, and closed a consumer who was initially just calling about a food card. Your compliance execution was clean across all three calls, and your habit of confirming callback numbers early is a real professional instinct that keeps leads alive. The John Easterday correct no-sale was done right — Part A and B start dates confirmed from the system, IEP window explained accurately, May 1 callback with a specific time. That&apos;s how a no-sale stays a warm lead.</p>
            <p><strong>What&apos;s costing you:</strong> on both the Easterday and Jones calls, a consumer gave you something real and the call kept moving. John told you he had stage 4 prostate cancer at 1:47 and manages everything alone at 2:05. Both landed and both passed. Powanna&apos;s SSN hesitation was emotional — she felt presumed upon — and what she got was a procedure explanation. The single adjustment that changes your numbers: before you advance, ask whether this person just told you something important. If yes, respond to the person before you respond to the script.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>You enrolled Paul Lee &mdash; a high-complexity dual-eligible with multiple conditions and a new cancer diagnosis &mdash; with a pharmacy verification call and a formulary exception flag. That is advanced-level execution. The move that makes every other call close at that same rate: when someone tells you something real, stop and say something real back. Two sentences. Then push for the enrollment. That&apos;s the conversation that closes.</p>
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
            <span>Week Average: <strong>62 / 100</strong></span>
            <span>Enrolled: <strong>1 of 3</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>The Paul Lee enrollment was your best call of the week — and one of the harder enrollments in this batch.</strong> Paul is a Tampa consumer on disability with a new cancer diagnosis, multiple chronic conditions, and significant medication cost concerns. You identified D-SNP eligibility, executed a 3-way pharmacy call to verify his medications live, surfaced a formulary exception need for Humulin insulin, confirmed all doctors in-network, and enrolled him on the Humana Gold Plus D-SNP with $250/month OTC. That is a high-complexity close that required working knowledge and real-time problem-solving. The pharmacy verification call alone keeps most agents from even attempting this — you ran it and used it.</p>
            <p><strong>The John Easterday correct no-sale was handled exactly right.</strong> You confirmed Part A and B start dates from the system at 4:07, correctly identified that he cannot enroll until August 2026, explained the IEP window accurately, and set a specific callback: May 1, 2:00 PM. Not a vague &ldquo;we&apos;ll follow up.&rdquo; A date and a time. Your habit of confirming callback numbers early — on the Easterday call at 1:28 and the Jones call at 1:28 — is a real professional instinct that keeps leads alive when calls drop.</p>
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
                <p className={styles.workOnTitle}>Anchor every callback to a specific reason</p>
                <p className={styles.workOnDetail}>Before ending any callback-dependent call, anchor the follow-up with the consumer&apos;s specific motivation. Name the benefit they called about. Reference their situation. Tell them what the call will accomplish. John Easterday is managing stage 4 cancer alone — he will have many things competing for his attention by May 1. Give him a reason to answer. Make it personal, make it specific, make it about him.</p>
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
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC2 · D-SNP · Pharmacy Verification · SSN Handling · Callback Anchoring · Correct No-Sale</p>
        </div>

      </div>
    </PageShell>
  )
}
