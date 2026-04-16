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
      { consumer: 'Donna Hicks', duration: '5:25', score: 38, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'SSN Asked Too Early — Consumer Spooked', href: '/agents/natasha-jones/calls/donna-hicks' },
    ],
  },
  {
    date: 'Wednesday, April 15',
    calls: [
      { consumer: 'Sandra Frakes', duration: '4:05', score: 30, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'HOT Lead — Lost at SSN Friction', href: '/agents/natasha-jones/calls/sandra-frakes' },
      { consumer: 'Rita Weiburg', duration: '3:40', score: 50, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'No Medicare Card — Daughter Has It', href: '/agents/natasha-jones/calls/rita-weiburg' },
      { consumer: 'Joyce Alexander', duration: '20:20', score: 50, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Had All Info to Enroll Ralph — Handed Off Instead', href: '/agents/natasha-jones/calls/joyce-alexander' },
    ],
  },
]

const patterns = [
  {
    title: 'You find the path and then hand it off instead of walking it',
    rc: 'RC1',
    urgency: 'critical' as const,
    body: 'When you have everything needed to complete an enrollment — the Medicare ID, the diagnosis, the benefit interest, the proxy authorization — the next move is to use it. Handing off to a specialist at that moment doesn\'t protect the enrollment. It ends it. Consumers who say they don\'t answer unknown numbers will not answer a callback. The enrollment window closes when the call does.',
    rule: 'When you have the information and the authorization, you have the enrollment. Do not hand off what you can close.',
    callRef: 'On the Joyce Alexander call at 15:47, you had Ralph\'s Medicare ID, DOB, Parkinson\'s diagnosis, and spousal proxy authorization. Joyce told you she doesn\'t pick up unknown numbers. You handed off to a specialist named Rosie.',
    moveLabel: 'When you have everything needed:',
    move: '"Joyce, you just told me you don\'t pick up unknown numbers — so let\'s handle Ralph right now. I have everything I need. It takes five minutes and his coverage starts May 1st. Should I go ahead?"',
  },
  {
    title: 'SSN before trust ends the call before it starts',
    rc: 'RC1',
    urgency: 'critical' as const,
    body: 'HOT inbound callers are pre-qualified and ready to engage — the conversation is already warm when they dial in. Asking for a Social Security number before a single benefit has been named or a plan has been shown converts a warm call to a suspicious one. The SSN itself isn\'t the problem. The timing is. Medicare card first — it feels official, not invasive. SSN is the backup when the card isn\'t available.',
    rule: 'Lead with Medicare card every time. SSN is the fallback. Never reverse the order.',
    callRef: 'Donna Hicks was asked for her full SSN at 3:37, before any plan or benefit had been shown. Sandra Frakes hit the same ask at 3:34. Both were HOT inbound callers. Both ended the call at the SSN request.',
    moveLabel: 'Flip the order starting today:',
    move: '"I can look you up two ways — your Medicare card, or your Social Security number. Which one do you have handy?" If they hesitate on SSN: "No problem — your Medicare card works even better. Do you have that nearby?"',
  },
  {
    title: 'Parkinson\'s was a CSN SEP that was never named',
    rc: 'RC6',
    urgency: 'high' as const,
    body: 'When a consumer mentions a qualifying chronic condition, that mention is a year-round enrollment trigger. Parkinson\'s disease qualifies for C-SNP plans, which carry a Special Enrollment Period available any month of the year. When the objection is "we\'ll see our agent in October," the only thing that collapses that wall is naming the SEP. Without naming it, October sounds like a real and fixed deadline.',
    rule: null,
    callRef: 'Joyce Alexander mentioned Ralph\'s Parkinson\'s at 10:17. The CSN SEP was not named. When Joyce said "we\'ll see our agent in October," there was no response that addressed why October wasn\'t necessary.',
    moveLabel: 'When a chronic condition opens a SEP:',
    move: '"Ralph actually doesn\'t have to wait until October. His Parkinson\'s means he can switch to a better plan any month of the year — that\'s a Special Enrollment Period. We can get him started today."',
  },
]

const pastReports = [
  { title: 'Weekly Brief — April 13–17', type: 'Weekly Brief', date: 'Apr 16, 2026', score: '42 / 100', active: true },
  { title: 'Weekly Brief — April 14 (partial)', type: 'Weekly Brief', date: 'Apr 15, 2026', score: '47 / 100', active: false },
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

export default function NatashaJonesPage() {
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
          <h1 className={styles.agentName}>Natasha Jones</h1>
          <p className={styles.period}>Week of April 13–17, 2026</p>
          <p className={styles.updatedAt}>Updated April 16 · 4 calls reviewed (Tue–Wed)</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(42) }}>42</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>Tue–Wed · 4 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>4</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 14–15, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>0</span>
            <span className={styles.scoreLabel}>Enrolled</span>
            <span className={styles.scoreRange}>1 Correct No-Sale · 3 Missed</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)' }}>RC1</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>SSN friction + handing off instead of closing</span>
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p>These are four calls from Tuesday and Wednesday — three missed opportunities and one correct no-sale. Two of the missed calls ended at the SSN request before a single benefit had been shown. The third had everything needed to complete an enrollment and was handed off instead. What we&apos;re working through is why the close didn&apos;t happen in the moments where it was right there.</p>
            <p><strong>What&apos;s working:</strong> your discovery work on the Joyce Alexander call was excellent. You caught Joyce&apos;s dental misconception at 7:25, pulled up the actual plan, and told her the cleaning was zero copay — she had been avoiding the dentist for a year over a billing error, and you fixed it in real time. You also executed a clean spousal pivot when Joyce&apos;s upgrade was ruled out, following her lead to Ralph without missing a beat and collecting his full information efficiently. And Rita Weiburg&apos;s SSN handling was exactly right — framed as her choice, no pressure, warm exit. She ended the call with &ldquo;And you too. Thank you.&rdquo;</p>
            <p><strong>What&apos;s costing you:</strong> two patterns. First, the SSN order — Donna and Sandra both ended the call the moment you asked for it, before any benefit had been named. Lead with Medicare card. SSN is the backup. Second: on Joyce Alexander, you had Ralph&apos;s Medicare ID, his Parkinson&apos;s diagnosis, and Joyce&apos;s proxy authorization — and you handed off to a specialist instead of closing. Joyce told you she doesn&apos;t pick up unknown numbers. That callback never happened.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When the math lands and the consumer confirms it — stop building the case and ask for the enrollment. The next sentence is the close, not another explanation.</p>
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
            <span>Correct No-Sales: <strong>1 of 4</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Joyce Alexander — your discovery was the best work of the week.</strong> You caught Joyce&apos;s dental misconception at 7:25, looked up the actual plan in real time, and told her the cleaning was $0 copay. She had been avoiding the dentist for a year over a billing misunderstanding that you corrected in under two minutes. That&apos;s the kind of value that makes people stay loyal to an agent. You also executed a clean spousal pivot when Joyce&apos;s upgrade didn&apos;t work — you followed her lead to Ralph without losing momentum, collected his Medicare ID and DOB efficiently, and built a complete picture for enrollment.</p>
            <p><strong>Rita Weiburg — exactly the right exit.</strong> When Rita said her daughter had the Medicare card, you framed it as her choice, kept no pressure on, and left the relationship warm. She ended the call with &ldquo;And you too. Thank you.&rdquo; That SSN handling was the correct approach — patient, low-pressure, professional. That&apos;s a contact you can call back.</p>
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
                <p className={styles.workOnTitle}>Lead with Medicare card — SSN is the backup</p>
                <p className={styles.workOnDetail}>Starting today, flip the order. Ask for the Medicare card first. If they don&apos;t have it: &ldquo;No problem — I can also look you up with your Social Security number.&rdquo; SSN as the primary ask is what ended Donna and Sandra&apos;s calls. The card feels official. Use it first, every time.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>When the math lands — stop explaining and close</p>
                <p className={styles.workOnDetail}>Joyce said &ldquo;makes sense&rdquo; at 18:34. That is your close window. The script is: &ldquo;Good — let&apos;s get Ralph enrolled right now while I have you. It takes five minutes and his coverage starts May 1st. Should I go ahead?&rdquo; Practice saying that out loud before your first call tomorrow.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>When a consumer names a chronic condition — name the SEP</p>
                <p className={styles.workOnDetail}>Parkinson&apos;s, diabetes, heart failure, COPD — any of these opens a C-SNP Special Enrollment Period. The moment you hear it: &ldquo;That actually matters a lot here. Because of that condition, Ralph can switch to a better plan right now — we don&apos;t have to wait until October.&rdquo; That one sentence kills the fall objection before it becomes real.</p>
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
          <p>The Certainty System · Natasha Jones · Week of April 13–17, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC6 · SSN Friction · CSN SEP · Spousal Pivot · Close Cue</p>
        </div>

      </div>
    </PageShell>
  )
}
