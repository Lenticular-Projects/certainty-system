'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Weekly Brief: April 14, 2026 ─────────────────────────────────────────────

const callsByDate = [
  {
    date: 'Tuesday, April 14',
    calls: [
      { consumer: 'Nancy Hazelrig', duration: '6:03', score: 51, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'The Grocery Card Caller', href: '/agents/trestan-daniel/calls/nancy-hazelrig' },
      { consumer: 'Susan White', duration: '12:24', score: 47, outcome: 'INCOMPLETE', outcomeNote: 'Discovery done — close not attempted', type: 'The Food Card Caller', href: '/agents/trestan-daniel/calls/susan-white' },
      { consumer: 'Unknown Consumer', duration: '15:22', score: 35, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'The Money Caller', href: '/agents/trestan-daniel/calls/unknown-consumer-15m22s' },
    ],
  },
]

const patterns = [
  {
    title: 'When the consumer says yes — you execute, not transfer',
    rc: 'RC1',
    urgency: 'critical' as const,
    body: 'The close is the moment the call has been building toward. When a consumer gives you a clear green light — "Yes, I\'m ready," a direct agreement to proceed — the only correct response is to begin Phase VI execution immediately. Not a hold. Not a search for someone else. Not a check. You. Right now. Every piece of discovery, every comparison, every trust moment leads to that sentence from the consumer. The handoff kills the enrollment — not because the consumer changed their mind, but because the momentum died on hold.',
    rule: 'When the consumer says yes, the next words out of your mouth are enrollment execution — not anything else.',
    callRef: 'Susan White said "Yes, I\'m ready" at 9:03 on the Susan White call. At 9:05: "Let me see if I have an agent who can put that in for you." She went on hold. The call ended at 12:24 without an enrollment.',
    moveLabel: 'Consumer says "Yes, I\'m ready" — execute immediately.',
    move: '"Perfect, Susan — I\'m going to get you enrolled on the Complete Care plan right now, effective May 1. I already have your Medicare number and your date of birth — I just need to confirm a few more details and we\'ll have this handled in about three minutes."',
  },
  {
    title: 'The INT SEP corrects the "I already changed plans" objection in one sentence',
    rc: 'RC6',
    urgency: 'high' as const,
    body: 'When a dual-eligible consumer believes they can only change plans once a year, that belief is wrong — and you have the knowledge to correct it. As a QMB or Medicaid beneficiary, a consumer can change plans any month of the year through the INT SEP. That one-sentence correction removes what feels like an insurmountable barrier in ten seconds. Every dual-eligible call should have this sentence prepared and ready to deploy the moment a change-objection surfaces.',
    rule: null,
    callRef: 'On the Warsaw, Ohio call, the consumer objected at 14:09: "I already changed my plan once this year." He had confirmed QMB status at 5:01. The INT SEP was never mentioned. The call ended at 14:48 with "Okay. No problem."',
    moveLabel: 'Dual-eligible consumer says they can\'t change plans again — correct it.',
    move: '"Actually, because you have Medicaid, you\'re allowed to change your plan any month of the year — that once-a-year rule doesn\'t apply to dual-eligible members like you. That\'s one of the benefits of having Medicaid. So that\'s not a barrier here at all. You\'ve been hit twice this year: your food card got cut and your medications are costing you more. This plan fixes both. Let\'s get this locked in today."',
  },
  {
    title: 'Complete the math — annualize, then humanize',
    rc: 'RC3',
    urgency: 'medium' as const,
    body: 'Discovery confirms you have the right product. The math breakdown confirms the consumer knows why it\'s worth switching. The math has three steps: compare the monthly figures, annualize the difference, then connect the annual number to something specific the consumer told you about their life. On both the Susan White and Warsaw calls, you started the comparison and stopped before annualizing. The close lives in step three — the humanization. Without it, the math is informational. With it, it\'s a decision.',
    rule: null,
    callRef: 'On the Warsaw call, "$267 more per month" in OTC and drug savings was never annualized. That\'s $3,204 a year for a consumer who told you his food card got cut and his medications were costing him more. That sentence was never said.',
    moveLabel: 'Comparison stated — annualize and connect to their specific problem.',
    move: '"That\'s $3,204 more a year. And you told me your food card got cut and your medications are costing you more now. This plan covers both. Your doctor is already confirmed in network. Let\'s get this locked in today."',
  },
]

const pastReports = [
  { title: 'Weekly Brief — April 14', type: 'Weekly Brief', date: 'Apr 16, 2026', score: '44 / 100', active: true },
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
            <span className={styles.systemLabel}>Weekly Brief</span>
          </div>
          <h1 className={styles.agentName}>Trestan Daniel</h1>
          <p className={styles.period}>Week of April 14–18, 2026</p>
          <p className={styles.updatedAt}>Updated April 16 · 3 calls reviewed (Tue)</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(44) }}>44</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>Tue · 3 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>3</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>1</span>
            <span className={styles.scoreLabel}>Correct No-Sale</span>
            <span className={styles.scoreRange}>1 Missed · 1 Incomplete</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)' }}>RC1</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Handed off at the close</span>
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p>These are the calls we pulled this week where the conversation was fully alive — consumers who gave you real information, stayed engaged through discovery, and in one case told you directly they were ready to proceed. What we&apos;re working through is what happened at the moment of commitment and where it went a different direction.</p>
            <p><strong>What&apos;s working:</strong> your account-reading on the Susan White call was the best discovery work in this week&apos;s batch. You spotted her C-SNP history at 4:08, asked about it proactively, uncovered the story of why she kept getting switched off the right plan, and built a clear comparison — $55/month versus $50/quarter — that she understood immediately. That sequence is above average work and it earned Susan&apos;s trust completely. She said "Yes, I&apos;m ready" at 9:03. And on the Nancy Hazelrig call, you made the right read — SSN barrier, narrow agenda, correct no-sale — and preserved the relationship professionally.</p>
            <p><strong>What&apos;s costing you:</strong> on two of your three calls this week, the close was right there and something intervened. On Susan White, a ready consumer went on hold and never enrolled. On the Warsaw call, a one-sentence correction about dual-eligible enrollment rights would have removed the only barrier between you and the close — and it never came. Both consumers were closeable. The same instincts that built Susan&apos;s trust just need to stay in the seat through the finish.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>You do the discovery, you build the case, you earn the trust &mdash; that&apos;s the hardest part of this job and you do it consistently. The move that converts more of those calls is finishing what you started: when a consumer gives you the green light, your next words are &ldquo;Perfect &mdash; I&apos;m getting you enrolled right now&rdquo; and you run the enrollment yourself. You built the relationship. You own the close. See it through.</p>
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
            <span>Week Average: <strong>44 / 100</strong></span>
            <span>Correct No-Sales: <strong>1 of 3</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>The best moment of your week came at 4:08 on the Susan White call. You pulled up her account, noticed she had been on a C-SNP and then switched back to a regular AARP MAPD, and you asked about it — proactively, without being prompted. You didn&apos;t just confirm the current plan and move on. You read the history and followed up. That led directly to uncovering the real story: Susan had been on the right plan, kept getting switched off it without her permission, and had never been able to let the benefit go active. The benefit comparison you built from that discovery — $55/month versus $50/quarter, stated plainly — landed immediately. Susan said "Yes, I&apos;m ready" at 9:03. That discovery sequence is the work.</p>
            <p>On the Warsaw, Ohio call, your read at 11:47 — &ldquo;It&apos;s not about you getting anything — you&apos;re already approved for the $267. I&apos;m seeing if your doctors are in network so you don&apos;t have to change anything&rdquo; — was the strongest individual reframe of the week. You re-engaged a consumer who was walking toward the exit. And your close-awareness at 14:03, catching "Thanks, have a good day" and immediately asking "Oh, you don&apos;t want me to start getting you the food card?" — that kind of instinct is a real skill. Both of those moments show you have the read. The work is completing the enrollment once you have it.</p>
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
                <p className={styles.workOnTitle}>Own the enrollment at the moment of close</p>
                <p className={styles.workOnDetail}>When someone says &ldquo;Yes, I&apos;m ready,&rdquo; your immediate next words are enrollment execution. Not a hold, not a handoff, not a look for someone else. Practice the opening line until it&apos;s automatic: &ldquo;Perfect — let me get you enrolled right now. I already have your Medicare number. This will take about three more minutes.&rdquo;</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>Know the INT SEP and deploy it on dual-eligible calls</p>
                <p className={styles.workOnDetail}>On every dual-eligible call, flag the INT SEP early so you&apos;re ready when the change-objection comes. When it does: &ldquo;Because you have Medicaid, the once-a-year rule doesn&apos;t apply to you. You can change any month.&rdquo; That is a one-sentence enrollment unlock. The Warsaw consumer lost the call at 14:09 because he believed something that wasn&apos;t true — and you knew it.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>Complete the math — annualize, then humanize</p>
                <p className={styles.workOnDetail}>After stating any monthly comparison, always annualize immediately and connect the annual figure to something specific the consumer said. &ldquo;That&apos;s $3,204 more a year — and you told me your food card got cut and your medications are costing you more. This plan covers both.&rdquo; The annual number connected to their specific problem is the close. Stop before it and the math stays informational.</p>
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
          <p>The Certainty System · Trestan Daniel · Week of April 14–18, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC3 · RC6 · Close Authority · INT SEP · Math Breakdown · Susan White: Discovery</p>
        </div>

      </div>
    </PageShell>
  )
}
