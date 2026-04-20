'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Weekly Brief: April 13–17, 2026 ─────────────────────────────────────────

const callsByDate = [
  {
    date: 'Wednesday, April 15',
    calls: [
      { consumer: 'Barbara Breach', duration: '30:15', score: 48, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'C-SNP Qualifier — Surrendered the Close', href: '/agents/marcus-hughes/calls/barbara-breach' },
      { consumer: 'Myra Robinson', duration: '14:14', score: 30, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Chronic Caller — Agreed With Her No', href: '/agents/marcus-hughes/calls/myra-robinson' },
      { consumer: 'Yvonne A. Williams', duration: '12:21', score: 28, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Soft Exit — No Reframe Attempted', href: '/agents/marcus-hughes/calls/yvonne-williams' },
      { consumer: 'Wayne Phaisson', duration: '3:44', score: 22, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'SSN Refused — No Alternative Offered', href: '/agents/marcus-hughes/calls/wayne-phaisson' },
      { consumer: 'Martha Hall', duration: '3:57', score: 58, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'VA Coverage — Genuinely Uncloseable', href: '/agents/marcus-hughes/calls/martha-hall' },
      { consumer: 'Barbara (callback)', duration: '2:10', score: 22, outcome: 'INCOMPLETE', outcomeNote: 'Consumer disconnected', type: 'Callback — Consumer Asleep', href: '/agents/marcus-hughes/calls/barbara-unknown' },
    ],
  },
  {
    date: 'Thursday, April 16',
    calls: [
      { consumer: 'Christy Tuttle', duration: '34:29', score: 83, outcome: 'ENROLLED', outcomeNote: null, type: 'DSNP Upgrade — Move SEP, $104K Risk Anchor', href: '/agents/marcus-hughes/calls/christy-tuttle' },
      { consumer: 'Joseph Young', duration: '21:22', score: 75, outcome: 'ENROLLED', outcomeNote: null, type: 'Money Caller — MOV SEP, Vision Pivot', href: '/agents/marcus-hughes/calls/joseph-young' },
      { consumer: 'Michael Griffith', duration: '16:49', score: 38, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Soft Exit Accepted — No Reframe', href: '/agents/marcus-hughes/calls/michael-griffith' },
    ],
  },
  {
    date: 'Friday, April 17',
    calls: [
      { consumer: 'William Saunders', duration: '6:19', score: 51, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'Uncloseable — Coverage Already Optimal', href: '/agents/marcus-hughes/calls/william-saunders' },
    ],
  },
]

const patterns = [
  {
    title: 'You find the emotional hook but don\'t use it to close',
    rc: 'RC2',
    urgency: 'critical' as const,
    body: 'Every call this week had a moment where a consumer handed you the close and you filed it away and kept moving. When someone tells you dialysis is coming in two months, that\'s not a data point — it\'s the entire reason to act today. When someone says they spend $600 a month on medications, that number should stop the call. When someone calls specifically because they saw a food card ad, they\'ve already told you what they want. The move is to say it back to them and connect the plan to that moment.',
    rule: 'When they give you the number that hurts — stop. Say it back. Then connect the plan to it. That\'s the close.',
    callRef: 'Myra Robinson said dialysis was coming in two months. Barbara Breach said $600 a month in medications. Yvonne Williams called specifically for the food card. All three were heard and none became the pivot.',
    moveLabel: 'When the Client Gold moment arrives:',
    move: '"Myra, with dialysis coming in two months, this is not the time to stay on a plan giving you $26 a month. This Aetna plan is built for exactly where you are. Let\'s get you set up today so your plan is ready when you need it most."',
  },
  {
    title: 'First soft exit accepted without one push',
    rc: 'RC1',
    urgency: 'high' as const,
    body: 'Wayne said he was uncomfortable. Yvonne said "That\'s okay, thank you." Myra said the plan "doesn\'t look like it\'s going to happen." None of those are hard nos — they\'re hesitations. A hard no is "I\'m not interested, goodbye." A hesitation is one question away from a conversation. The instinct to accept the first soft exit is costing you every time it fires.',
    rule: null,
    callRef: 'All three callers gave a soft exit and the call ended. None of them hung up. None of them said no clearly. One question on any of those calls changes the outcome.',
    moveLabel: 'When the first soft exit comes:',
    move: '"Before you go — you called because you wanted that card. Give me 60 more seconds and I\'ll show you exactly what it takes to get it. If it doesn\'t feel right, we hang up friends."',
  },
  {
    title: 'MOV SEP acknowledged — window urgency never named',
    rc: 'RC6',
    urgency: 'high' as const,
    body: 'When a consumer confirms a recent move, there\'s a time-limited enrollment window attached to that address change. The window is two months from the effective date of the move. Acknowledging the move and saying they have "new benefits in this area" creates curiosity — it doesn\'t create urgency. The urgency comes from naming the window. Without naming it, there\'s no reason to act today instead of October.',
    rule: null,
    callRef: 'Barbara Breach confirmed she moved from Cincinnati to Dayton. The address change was acknowledged at 6:24 and the move-triggered window was never named or used to build urgency.',
    moveLabel: 'When a recent move is confirmed:',
    move: '"Barbara, when did you make that move to Dayton? The reason I ask — if it was in the last couple of months, you have a special enrollment window that may only be open a short time. That means we may need to act today."',
  },
]

const pastReports = [
  {
    active: true,
    type: 'Weekly Brief',
    title: 'Weekly Brief — April 13–17, 2026',
    score: '46 / 100',
    date: 'Apr 20, 2026',
  },
  {
    active: false,
    type: 'Weekly Brief',
    title: 'Weekly Brief — March 30–April 3, 2026',
    score: '65 / 100',
    date: 'Apr 5, 2026',
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

export default function MarcusHughesPage() {
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
          <h1 className={styles.agentName}>Marcus Hughes</h1>
          <p className={styles.period}>Week of April 13–17, 2026</p>
          <p className={styles.updatedAt}>Updated April 20 · 10 calls reviewed</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(46) }}>46</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>Apr 15–17 · 10 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>10</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 15–17, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>2</span>
            <span className={styles.scoreLabel}>Enrolled</span>
            <span className={styles.scoreRange}>5 Missed · 2 No-Sale · 1 Incomplete</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>RC2</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Client Gold found, not deployed</span>
          </div>
        </motion.div>

        {/* ── Platform Numbers ── */}
        <motion.div style={{ marginBottom: '48px' }} {...SPRING}>
          <h2 className={styles.sectionTitle}>Platform Numbers</h2>
          <div className={styles.scorecardRow}>
            <div className={styles.scoreCard}>
              <span className={styles.scoreValue}>10</span>
              <span className={styles.scoreLabel}>Sales — Apr 13–17</span>
              <span className={styles.scoreRange}>6.37% conversion</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, marginTop: 4, color: 'var(--terracotta)' }}>
                ↓ from 21 (10.82%)
              </span>
            </div>
            <div className={styles.scoreCard}>
              <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>$226</span>
              <span className={styles.scoreLabel}>CPA — Apr 13–17</span>
              <span className={styles.scoreRange}>Cost per sale</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, marginTop: 4, color: 'var(--terracotta)' }}>
                ↑ from $120
              </span>
            </div>
            <div className={styles.scoreCard}>
              <span className={styles.scoreValue}>157</span>
              <span className={styles.scoreLabel}>Total Calls — Apr 13–17</span>
              <span className={styles.scoreRange}>102 billable</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--ink-60)', marginTop: 4 }}>
                Prior week: 194 calls
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p>Ten calls this week — two enrolled, five missed opportunities, two correct no-sales, one incomplete. Thursday gave you two clean enrollments, and the Christy Tuttle call in particular is the best DSNP work we&apos;ve seen from you. Wednesday was the rougher day, and the patterns from those calls are still the ones to work through.</p>
            <p><strong>What&apos;s working:</strong> the Christy Tuttle call is the one to study. You ran the doctor network check before presenting a single plan feature, deployed the $104,000 risk anchor twice, identified the rosuvastatin chronic OTC bump from the medication list in real time, and closed a 34-minute DSNP upgrade without a moment of real resistance. On Joseph Young you caught the MOV SEP from a routine address update — that&apos;s the move that separates agents who build pipelines from agents who work lists. Both enrollments used correct SEP documentation and clean compliance execution.</p>
            <p><strong>What&apos;s costing you:</strong> the Wednesday calls had Client Gold on every one — dialysis coming in two months, $600 a month in medications, called specifically for the food card, just out of the hospital. You heard all of it. None of it became the close. The gap isn&apos;t in finding the plan — you&apos;re finding the right plan on nearly every call. The gap is in stopping when the consumer gives you the reason to act, saying it back out loud, and pivoting to enrollment in that moment. That&apos;s the one skill that converts the work you&apos;re already doing.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>You proved this week that you can run an elite DSNP enrollment &mdash; the $104,000 risk anchor, the chronic OTC bump from the medication list, the MOV SEP catch on Joseph Young. The move that converts more of the missed calls is deploying Client Gold the moment it lands: when Myra said dialysis was coming in two months, the next sentence is &ldquo;Myra, that&apos;s exactly why we&apos;re switching today &mdash; let&apos;s get your coverage set before that appointment.&rdquo; Stop, say it back, pivot to enrollment. Every time. That&apos;s the job.</p>
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
            <span>Week Average: <strong>46 / 100</strong></span>
            <span>Enrolled: <strong>2 of 10</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Christy Tuttle — this is what elite DSNP work looks like.</strong> At 8:00 you ran the doctor network check before presenting a single plan feature and discovered Dr. Victor Karane wasn&apos;t in network on UHC — then you used that as the primary reason for the switch, not the OTC card. At 14:33 you caught rosuvastatin as a chronic condition qualifier and applied the $410/month bump in real time. At 15:33 you deployed the $104,000 annual out-of-pocket anchor, and when she asked &ldquo;so why did I come off UnitedHealthcare?&rdquo; at 21:17 you redeployed it as the answer. That sequencing — problem established before the solution is presented, risk anchor used twice, clean compliance read, post-close lock with name and direct number — is a full execution. Score: 83.</p>
            <p><strong>Joseph Young — you turned a routine address update into an enrollment.</strong> When Joseph mentioned a different address at 3:40, you identified the Lincoln-to-Thompson move, recognized a new service area, and correctly applied the MOV SEP for a May 1st effective date. Most agents update the address and move on. You used it to unlock mid-year eligibility. When he said &ldquo;glasses would be good,&rdquo; you pivoted the entire plan presentation to vision before he finished the sentence. And on the grocery card: honest, direct, confident. &ldquo;At this exact moment I don&apos;t see any groceries available, but here&apos;s what I can get you&rdquo; — no hedging, and he never pushed back.</p>
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
                <p className={styles.workOnTitle}>Say the Client Gold back to them before you move on</p>
                <p className={styles.workOnDetail}>Every call this week had a moment you heard but didn&apos;t use. The rule is simple: when they tell you the number that hurts, stop and say it back. &ldquo;Myra, $600 a month — that&apos;s $7,200 a year. That number is exactly why you called today.&rdquo; You are not collecting data. You are finding the close.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>When they say no, ask one question before you accept it</p>
                <p className={styles.workOnDetail}>Wayne, Yvonne, and Myra all gave you a soft no. None of them said &ldquo;I am not interested, goodbye.&rdquo; The play is one curiosity question: &ldquo;Help me understand — what specifically doesn&apos;t feel right?&rdquo; or &ldquo;Before you go — you called because you wanted that card. Give me 60 seconds.&rdquo; One of those three calls converts this week if you use it.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>Submit first, give the cancellation window</p>
                <p className={styles.workOnDetail}>When Barbara Breach wanted to involve her daughter, the correct move was: &ldquo;Let me get the paperwork going so it&apos;s in your mailbox when your daughter wakes up. If she doesn&apos;t like it, you cancel — no problem. But let&apos;s not leave you unprotected for another month when you just got out of the hospital.&rdquo; Submit first. Give the cancellation window. That is the play every time a consumer wants to involve family.</p>
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
          <p>The Certainty System · Marcus Hughes · Week of April 13–17, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC2 · RC3 · RC6 · Client Gold · Soft Exit · MOV SEP · Math Annualization</p>
        </div>

      </div>
    </PageShell>
  )
}
