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
      { consumer: 'Robert Nalem', duration: '3:49', score: 22, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'The Confused Caller', href: '/agents/andres-duran/calls/robert-nalem' },
      { consumer: 'Sylvia Stripling', duration: '22:37', score: 55, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Brand-Loyal UHC 10 Years', href: '/agents/andres-duran/calls/sylvia-stripling' },
    ],
  },
]

const patterns = [
  {
    title: 'Peak emotion hit — kept presenting instead of closing',
    rc: 'RC1',
    urgency: 'critical' as const,
    body: 'When a consumer reacts emotionally to your math — "Oh my God," "that\'s huge," "wow" — that reaction is the close signal, not the cue to keep presenting. Further presentation after the emotional peak gives the resistance time to return. On the Sylvia Stripling call, you had a consumer at full buy-in at 16:24 and kept going for three more minutes. By the time you tried to close, she had re-anchored to UHC loyalty and the window was gone.',
    rule: 'The emotional peak is the close window. Anything you say after it gives the resistance time to return.',
    callRef: 'Sylvia said "Oh my God" twice — the second time at 16:24 after the full benefits stack. That was the close. The next sentence should have been a date-of-birth question.',
    moveLabel: 'Stop presenting. Ask for the enrollment.',
    move: '"Sylvia, right — that\'s exactly why I\'m calling you today. Your doctor isn\'t going anywhere. Your copays stay at zero. The only thing that changes is you stop leaving $230 on the table every single month. Let\'s get that fixed right now. Can I get your date of birth?"',
  },
  {
    title: 'Loyalty objection answered with logic — needs emotion',
    rc: 'RC2',
    urgency: 'high' as const,
    body: 'Every time Sylvia said "I\'ve been with UHC for 10 years," you countered with plan data. Loyalty is an identity, not a product comparison. Logic doesn\'t reach it — it reinforces the resistance. She needed permission to switch, not a reason. The move is to honor the loyalty first, then use it as the reason the new plan matters.',
    rule: null,
    callRef: 'Sylvia invoked UHC loyalty three times between 16:34 and 20:52. Each time, the response was plan data. Each time, the resistance held.',
    moveLabel: 'Honor the loyalty, then redirect it.',
    move: '"Ten years with the same doctor — that tells me you take your coverage seriously. That\'s exactly why I want you to have every dollar you\'ve earned. This plan protects Dr. Ferriere AND gives you $230 more every month."',
  },
  {
    title: 'Confusion and surprise are entry points — not exits',
    rc: 'RC6',
    urgency: 'medium' as const,
    body: 'When a consumer expresses confusion or surprise about their own coverage — "I did?", "When did that happen?", "I had no idea" — that signals they need guidance. That is the job. Moving toward that moment means asking what happened and showing them the options. Robert Nalem\'s plan had changed without his knowledge, which is a textbook deemed enrollment signal and a live investigation opportunity. You delivered the information and went quiet.',
    rule: null,
    callRef: 'Robert said "I did?" at 3:31 when you told him his plan had changed from Cigna to Humana. Nine seconds later he said "I better check with my daughter" and the call ended.',
    moveLabel: 'Turn confusion into an investigation — not a relay.',
    move: '"Yes sir — and because this caught you off guard, you may actually have a window right now to choose a plan that works for you. Did you choose to switch to Humana, or did this happen without you selecting it? Because if it happened without your choice, there\'s a special enrollment period right now."',
  },
]

const pastReports = [
  { title: 'Weekly Brief — April 14', type: 'Weekly Brief', date: 'Apr 16, 2026', score: '38 / 100', active: true },
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

export default function AndresDuranPage() {
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
          <h1 className={styles.agentName}>Andres Duran</h1>
          <p className={styles.period}>Week of April 13–17, 2026</p>
          <p className={styles.updatedAt}>Updated April 16 · 2 calls reviewed (Tue)</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(38) }}>38</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>Tue · 2 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>2</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>0</span>
            <span className={styles.scoreLabel}>Enrolled</span>
            <span className={styles.scoreRange}>2 Missed Opportunity</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)' }}>RC1</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Close window missed at peak emotion</span>
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p>These are the two calls we pulled this week where the conversation was alive. What we&apos;re working through is what happened in those moments — and where things could have gone differently.</p>
            <p><strong>What&apos;s working:</strong> your technical execution on the Sylvia Stripling call was the strongest in the batch. You identified full Medicaid status at 6:26, unlocked the highest spending card tier in her area, and ran clean math from 14:34 to 15:43 — $101 versus $333, $230 a month, $2,760 a year, all in plain language. Her &ldquo;Oh my God&rdquo; confirmed it landed. You can find the right plan and make the number real. That foundation is there.</p>
            <p><strong>What&apos;s costing you:</strong> you let the consumer set the ceiling. On the Sylvia call, you had her at peak emotional buy-in and kept presenting instead of closing. By the time you asked, the resistance had rebuilt. On the Robert Nalem call, you delivered critical plan intelligence and then went quiet while the lead walked out the door. Both calls ended without a close attempt after the window opened. The correction is one behavior: when the consumer reacts to the math, stop presenting and move to enrollment.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When the math lands and they react — &ldquo;Oh my God,&rdquo; &ldquo;that&apos;s huge,&rdquo; anything like that — stop presenting. That reaction is the close. Your next sentence is a date-of-birth question, not another benefit.</p>
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
            <span>Week Average: <strong>38 / 100</strong></span>
            <span>Enrolled: <strong>0 of 2</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>The Sylvia Stripling math sequence was the strongest single sequence in the batch.</strong> At 6:26 you diagnosed her Medicaid tier proactively — most agents wait to be told. You used it to unlock $333 per month when she could have walked away with a generic pitch. Your math execution from 14:34 to 15:43 was clean and complete: you named both numbers, calculated the delta, annualized it, and delivered it in plain language. Her response confirmed it landed. You can run math. That skill is real.</p>
            <p><strong>Your discovery on both calls was efficient and correct.</strong> You collected ZIP, county, and Medicare ID in sequence, ran qualification questions in order, and maintained a professional frame throughout. On the Robert Nalem call, you caught his plan transition from Cigna to Humana in real time at 3:23 — that&apos;s a genuine information advantage that most agents miss. The problem wasn&apos;t finding the intelligence. It was what happened in the 18 seconds after you delivered it.</p>
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
                <p className={styles.workOnTitle}>Emotional reaction = close signal — move immediately</p>
                <p className={styles.workOnDetail}>&ldquo;Oh my God&rdquo; after the math is your green light. Stop presenting. &ldquo;Exactly — let&apos;s get that set up for you today. Can I confirm your date of birth?&rdquo; The case is already made. Ask for the enrollment. Every second you keep presenting after that reaction gives the resistance time to return.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>Loyalty objection — honor it, then redirect</p>
                <p className={styles.workOnDetail}>&ldquo;Ten years with the same doctor — that tells me you take your coverage seriously. That&apos;s why I want you to have every dollar you&apos;ve earned.&rdquo; Never argue against loyalty. Give them permission to switch. The argument reinforces the wall. The honor dissolves it.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>Never end a call without a committed next step</p>
                <p className={styles.workOnDetail}>Both calls ended with zero forward commitment. When a consumer says &ldquo;I better check with my daughter&rdquo; — that&apos;s a scheduling opportunity, not an exit. &ldquo;Of course — what time works for both of you tomorrow? I&apos;ll call you together.&rdquo; Even when you can&apos;t close today, close the loop on a next step. Never hang up without one.</p>
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
          <p>The Certainty System · Andres Duran · Week of April 13–17, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC2 · RC6 · Close Window · Loyalty Objection · Deemed Enrollment</p>
        </div>

      </div>
    </PageShell>
  )
}
