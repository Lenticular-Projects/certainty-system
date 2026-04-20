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
      { consumer: 'Unknown TJ', duration: '2:22', score: 29, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'The Money Caller — Surrendered First Objection', href: '/agents/robert-pegler/calls/unknown-tj' },
      { consumer: 'Unknown Consumer (5m31s)', duration: '5:31', score: 42, outcome: 'INCOMPLETE', outcomeNote: 'Discovery done — close not attempted', type: 'The Money Caller — INT SEP Unused', href: '/agents/robert-pegler/calls/unknown-consumer-5m31s' },
      { consumer: 'Dwight Chattahill', duration: '18:47', score: 56, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'Complex — Network Conflict', href: '/agents/robert-pegler/calls/dwight-chattahill' },
    ],
  },
  {
    date: 'Tuesday, April 14',
    calls: [
      { consumer: 'Anetta Clary', duration: '21:53', score: 65, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'MOV SEP — Plan Not Available', href: '/agents/robert-pegler/calls/anetta-clary' },
      { consumer: 'Thomas Scott', duration: '37:36', score: 51, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'The Detail Staller — Surrendered at Close', href: '/agents/robert-pegler/calls/thomas-scott' },
    ],
  },
  {
    date: 'Wednesday, April 15',
    calls: [
      { consumer: 'Sharon Pipps', duration: '1:06:01', score: 88, outcome: 'ENROLLED', outcomeNote: 'IEP enrollment — D-SNP effective June 1', type: 'Complex Dual-Eligible — Homeless + High Med Complexity', href: '/agents/robert-pegler/calls/sharon-pipps' },
    ],
  },
  {
    date: 'Thursday, April 17',
    calls: [
      { consumer: 'Unknown Consumer (15m42s)', duration: '15:42', score: 34, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Fraud-Fearful — Trust Objection Unaddressed', href: '/agents/robert-pegler/calls/unknown-consumer-15m42s' },
      { consumer: 'Unknown Consumer (7m50s)', duration: '7:50', score: 29, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Benefit Shopper — Callback Accepted Without Close', href: '/agents/robert-pegler/calls/unknown-consumer-7m50s' },
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
  {
    title: 'Fraud fear disclosed — never addressed, never differentiated',
    rc: 'RC2',
    urgency: 'high' as const,
    body: 'On Thursday\'s Oklahoma call, the consumer disclosed active, repeated debit card fraud — her card had been cancelled three times in 15 months. She said she was "wary" twice before that disclosure. This was not background context. This was the reason she would not move forward. When someone has been victimized by financial fraud, the correct response names the fear and then differentiates you from the source of it: you are licensed, regulated, and verifiable. That is the structural opposite of a scammer. Make it explicit.',
    rule: 'Fraud fear disclosed = give them a verification tool. License number. State insurance department website. CMS.gov. Make it checkable.',
    callRef: 'The consumer said "I wanna make sure this is legitimate" at 5:24 and disclosed three debit card fraud incidents at 10:02. Both times: "Right, of course" and pivot to discovery questions. The fear was never addressed.',
    moveLabel: 'Consumer discloses fraud history — differentiate immediately.',
    move: '"Mrs. [Name], three times in 15 months — that makes you right to be careful. Here\'s how you verify me: my name is Robert Pegler, I\'m licensed in Oklahoma, and you can look up my license on the Oklahoma Insurance Department website right now. I\'m not asking you to trust me — I\'m asking you to verify me. Would you like my license number?"',
  },
]

const pastReports = [
  { title: 'Weekly Brief — April 13–17', type: 'Weekly Brief', date: 'Apr 20, 2026', score: '49 / 100', active: true },
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
          <p className={styles.updatedAt}>Updated April 20 · 8 calls reviewed (Mon–Thu)</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(49) }}>49</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>Mon–Thu · 8 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>8</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 13–17, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>1</span>
            <span className={styles.scoreLabel}>Enrolled</span>
            <span className={styles.scoreRange}>2 Correct No-Sale · 4 Missed</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)' }}>RC1</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Surrenders without one reframe</span>
          </div>
        </motion.div>

        {/* ── Platform Numbers ── */}
        <motion.div style={{ marginBottom: '48px' }} {...SPRING}>
          <h2 className={styles.sectionTitle}>Platform Numbers</h2>
          <div className={styles.scorecardRow}>
            <div className={styles.scoreCard}>
              <span className={styles.scoreValue}>5</span>
              <span className={styles.scoreLabel}>Sales — Apr 13–17</span>
              <span className={styles.scoreRange}>3.68% conversion</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, marginTop: 4, color: 'var(--sage-dark)' }}>
                ↑ from 2 (1.63%)
              </span>
            </div>
            <div className={styles.scoreCard}>
              <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>$322</span>
              <span className={styles.scoreLabel}>CPA — Apr 13–17</span>
              <span className={styles.scoreRange}>Cost per sale</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, marginTop: 4, color: 'var(--sage-dark)' }}>
                ↓ from $641
              </span>
            </div>
            <div className={styles.scoreCard}>
              <span className={styles.scoreValue}>136</span>
              <span className={styles.scoreLabel}>Total Calls — Apr 13–17</span>
              <span className={styles.scoreRange}>86 billable</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--ink-60)', marginTop: 4 }}>
                Prior week: 123 calls
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p>Eight calls across four days — one enrollment, two correct no-sales, and five missed opportunities. The Sharon Pipps call on Wednesday is the standard for everything else this week to be measured against.</p>
            <p><strong>What&apos;s working:</strong> the Sharon Pipps enrollment on Wednesday was the best call of the week and one of the most technically demanding enrollments in this batch. Sharon is 45, on disability, homeless, has two mechanical heart valves, a coronary stent, epilepsy, and eight medications. You correctly identified the IEP window, verified D-SNP eligibility, ran a full medication review, compared two plans with real numbers, assigned a PCP for a consumer with no established primary care, and completed a health risk assessment. Sixty-six minutes. One enrolled consumer. That call required every tool you have, and you used them all. The product knowledge that helped on Pipps also showed on Thomas Scott — you corrected SSA misinformation about the 12-month trial period rule with calm authority. That correction required you to push back on what a federal agency told a consumer and you did it cleanly.</p>
            <p><strong>What&apos;s costing you:</strong> four missed opportunities across Monday and Thursday share the same root — when a consumer pushed back or asked to defer, you accepted it without one reframe. TJ confirmed her Humana plan had no food card and the response was &ldquo;No, okay. No problem.&rdquo; The Oklahoma consumer disclosed she had been victimized by financial fraud three times and you said &ldquo;Right, of course&rdquo; and moved on. The Baton Rouge consumer identified a specific plan with $266/month and said &ldquo;let me call you back&rdquo; and you immediately texted her your number and hung up. All four of those calls had one more move available. None of them got it.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a consumer says &ldquo;let me call you back,&rdquo; your response is not to text them your number. It is: &ldquo;Before you go &mdash; I&apos;m looking at a plan with $266 a month available in your area right now. Can I take 90 seconds to confirm you qualify? All I need is your Medicare card number.&rdquo; That one question, asked with confidence, keeps the enrollment alive. You already did the work to find the plan. See it through.</p>
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
            <span>Week Average: <strong>49 / 100</strong></span>
            <span>Enrolled: <strong>1 of 8</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>The Sharon Pipps enrollment was the best call of the week.</strong> Sharon is 45, on disability, homeless, with two mechanical heart valves, a coronary stent, epilepsy, and eight medications. You correctly identified her IEP window, verified D-SNP eligibility, ran a full medication review, compared two plans transparently with real OTC and dental numbers, assigned a PCP two miles from her brother&apos;s residence, and completed a health risk assessment. You had her enrolled in the Aetna Medicare Dual Care HMO D-SNP effective June 1. That is a complex, high-stakes enrollment done correctly.</p>
            <p><strong>The Thomas Scott SSA correction at 17:09 was elite product knowledge deployed at the right moment.</strong> Thomas had been told by the Social Security Office that he could never return to Original Medicare after switching to Advantage — a misconception that ends more enrollments than any real objection in this business. You corrected it cleanly: the 12-month trial period rule, calm authority, specific detail. That correction required you to push back on what a federal agency told a consumer. You did it without hesitation. And on Dwight Chattahill, you worked through four SEP pathways, ruled each out accurately, and called the correct no-sale. That is professional integrity on a call where the commission was real.</p>
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
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>04</span>
              <div>
                <p className={styles.workOnTitle}>When a consumer discloses fraud history — name it and differentiate yourself</p>
                <p className={styles.workOnDetail}>The Oklahoma consumer told you her debit card was cancelled three times in 15 months. That was the entire reason she would not commit. The correct response: &ldquo;That makes you right to be careful. Here&apos;s how you verify me: my name is Robert Pegler, I&apos;m licensed in Oklahoma, and you can check my license on the Oklahoma Insurance Department website. I&apos;m not asking you to trust me — I&apos;m asking you to verify me. Would you like my license number?&rdquo; Give her a tool. That&apos;s the move that changes the call.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>05</span>
              <div>
                <p className={styles.workOnTitle}>When a consumer names a MOV — it is urgency, not background</p>
                <p className={styles.workOnDetail}>The Oklahoma consumer told you she was planning to move. That is a MOV SEP — and it means she is going to have to review her Medicare coverage regardless of what she decides today. &ldquo;When you move to a new area, your current plan may not cover you there — you are going to need to choose a new plan anyway. That gives you a special enrollment window. Your grandson should know about this now, not after you&apos;ve moved.&rdquo; That is the line that brings a deferring consumer back to the present.</p>
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
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC2 · RC6 · Sharon Pipps: IEP D-SNP Enrolled · MOV SEP · Fraud-Fear Reframe · Close Authority</p>
        </div>

      </div>
    </PageShell>
  )
}
