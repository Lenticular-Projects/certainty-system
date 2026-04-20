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
      { consumer: 'John Higgins', duration: '14:31', score: 48, outcome: 'INCOMPLETE', outcomeNote: 'Discovery done — close not attempted', type: 'Pre-Qualified Lead — Phone Drop Before Close', href: '/agents/josner-saintil/calls/john-higgins' },
      { consumer: 'Unknown Consumer (9186366371)', duration: '3:15', score: 31, outcome: 'INCOMPLETE', outcomeNote: 'Stuck in research — never transitioned', type: 'Medicaid SEPs Ignored — MCD Window Open Until June', href: '/agents/josner-saintil/calls/unknown-9186366371' },
    ],
  },
  {
    date: 'Thursday, April 17',
    calls: [
      { consumer: 'Unknown Consumer (4m41s)', duration: '4:41', score: 32, outcome: 'CORRECT NO-SALE', outcomeNote: 'Hostile transfer — consumer unworkable', type: 'Hostile Transfer — Prior Agent Grievance', href: '/agents/josner-saintil/calls/unknown-consumer-4m41s' },
      { consumer: 'Unknown Consumer (8m09s)', duration: '8:09', score: 38, outcome: 'CORRECT NO-SALE', outcomeNote: 'Trust barrier — no ID available', type: 'Trust-Barrier Lead — Scam-Fearful Consumer', href: '/agents/josner-saintil/calls/unknown-consumer-8m09s' },
    ],
  },
]

const patterns = [
  {
    title: 'Medicaid disclosed — treated as background, not as an enrollment trigger',
    rc: 'RC6',
    urgency: 'critical' as const,
    body: 'Every time a consumer confirms active Medicaid, that is an INT SEP — a year-round enrollment window that never closes. On both calls this week, Medicaid was disclosed and acknowledged, then the standard flow continued as if nothing had changed. The correct move is to stop at the disclosure and ask the verification question. Medicaid confirmation is not a checkbox — it is the enrollment pathway.',
    rule: 'Every Medicaid disclosure gets one question before you move on: "Is your Medicaid active and confirmed right now?"',
    callRef: 'The Oklahoma consumer confirmed Medicaid at 0:49. John Higgins confirmed Medicaid and Medicare at 7:37. Both were D-SNP eligible. Neither disclosure was treated as an enrollment trigger.',
    moveLabel: 'Stop at the disclosure. Ask the question.',
    move: '"Are you still on Medicaid right now? Great — because that qualifies you for a special plan type built for people in your exact situation. Let me check what\'s available in your county."',
  },
  {
    title: 'MCD SEP has a 3-month clock — the window closes June 1',
    rc: 'RC6',
    urgency: 'high' as const,
    body: 'When a consumer\'s Medicaid status changed — dropped then reinstated — that is an MCD SEP. The 3-month window runs from the date of the change. The Oklahoma consumer said her Medicaid was reinstated March 1, which means her window closes around June 1, 2026. She had approximately six weeks left. That is urgency. You heard the story and treated it as background. It was a live enrollment trigger with a deadline.',
    rule: null,
    callRef: 'The Oklahoma consumer said at 1:45: "Medicaid was dropped and it shouldn\'t have been and that took me until March the 1st to get it reinstated." The date was the signal. The window closes June 1.',
    moveLabel: 'Name the deadline. Make it real.',
    move: '"Wait — when exactly was it reinstated? March 1st? That actually opens a special enrollment window. The good news is you have about six weeks to use it. If we find you a better plan today, we can get you switched before it closes. What\'s your zip code?"',
  },
  {
    title: 'Prostate cancer opens a year-round enrollment period',
    rc: 'RC6',
    urgency: 'medium' as const,
    body: 'When a consumer discloses an active cancer diagnosis, that is a C-SNP qualifier — they can switch plans any month of the year. John Higgins disclosed prostate cancer with monthly IV infusions at 9:03. You acknowledged the diagnosis and moved on. On the callback, this is your legal pathway to enroll him outside of open enrollment — and it is the most important thing he told you on the call.',
    rule: null,
    callRef: 'John said "Yeah, I\'ve got prostate cancer" at 9:03. You said "And they\'re keeping you under control?" and moved on to standard discovery. The CSN SEP and the cancer as Client Gold were both passed.',
    moveLabel: 'Name what the diagnosis means for his enrollment options.',
    move: '"John, because you have an active cancer diagnosis, you actually qualify to change your plan any time during the year — that\'s a special rule for people with chronic conditions. So we\'re not waiting for open enrollment here. Let me show you what\'s available in your county right now."',
  },
  {
    title: 'When a consumer names their financial victimization — deploy it',
    rc: 'RC2',
    urgency: 'medium' as const,
    body: 'On the Thursday trust-barrier call, the consumer told you at 6:47 that a woman had stolen $180 from him. He disclosed his PTSD classification at 2:32. Both of those were the emotional center of his resistance — not general skepticism, but specific past injury. When someone has been ripped off, the fastest path to their trust is naming it directly and then differentiating yourself from the person who did it. A federally licensed agent on a recorded line is the structural opposite of a scammer. Make that explicit.',
    rule: null,
    callRef: '"One lady just ripped me off for $180." — said at 6:47. Agent responded "yeah" and continued to the SSN ask. The emotional bridge was never built.',
    moveLabel: 'Consumer names a prior rip-off — use it.',
    move: '"That $180 — that\'s exactly why you want to be on a recorded, regulated line with a licensed agent. I have everything to lose if I do anything wrong. CMS can pull my license. I\'m not asking you to trust me — I\'m trying to access money that\'s already in the system under your name. Give me 30 seconds."',
  },
]

const pastReports = [
  { title: 'Weekly Brief — April 13–17', type: 'Weekly Brief', date: 'Apr 20, 2026', score: '37 / 100', active: true },
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

export default function JosnerSaintilPage() {
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
          <h1 className={styles.agentName}>Josner Saintil</h1>
          <p className={styles.period}>Week of April 13–17, 2026</p>
          <p className={styles.updatedAt}>Updated April 20 · 4 calls reviewed (Wed–Thu)</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(37) }}>37</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>Wed–Thu · 4 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>4</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 15 &amp; 17, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>2</span>
            <span className={styles.scoreLabel}>Correct No-Sales</span>
            <span className={styles.scoreRange}>2 Incomplete · 0 Enrolled</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>RC6</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>SEP signals missed — back-to-back</span>
          </div>
        </motion.div>

        {/* ── Platform Numbers ── */}
        <motion.div style={{ marginBottom: '48px' }} {...SPRING}>
          <h2 className={styles.sectionTitle}>Platform Numbers</h2>
          <div className={styles.scorecardRow}>
            <div className={styles.scoreCard}>
              <span className={styles.scoreValue}>5</span>
              <span className={styles.scoreLabel}>Sales — Apr 13–17</span>
              <span className={styles.scoreRange}>4.90% conversion</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, marginTop: 4, color: 'var(--sage-dark)' }}>
                ↑ from 3 (6.82%)
              </span>
            </div>
            <div className={styles.scoreCard}>
              <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>$275</span>
              <span className={styles.scoreLabel}>CPA — Apr 13–17</span>
              <span className={styles.scoreRange}>Cost per sale</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, marginTop: 4, color: 'var(--terracotta)' }}>
                ↑ from $194
              </span>
            </div>
            <div className={styles.scoreCard}>
              <span className={styles.scoreValue}>102</span>
              <span className={styles.scoreLabel}>Total Calls — Apr 13–17</span>
              <span className={styles.scoreRange}>69 billable</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--ink-60)', marginTop: 4 }}>
                Prior week: 44 calls
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p>Four calls this week across two days — two incomplete, two correct no-sales on calls that were genuinely unworkable. What we&apos;re working through is the pattern that ran through the closeable calls and what to bring into the John Higgins callback.</p>
            <p><strong>What&apos;s working:</strong> the best decision you made this week came at 2:07 on the John Higgins call — you confirmed the callback number before the connection started degrading. When the call fell apart at 13:35, that number was already in hand. You made the right read: propose the callback, don&apos;t grind through a bad connection. John agreed immediately. That lead is still alive. On Thursday&apos;s trust-barrier call, your SSN framing at 7:14 — &ldquo;I&apos;m not asking for money or bank accounts, I&apos;m just looking at Medicare benefits that exist in your name&rdquo; — is exactly the right language for a scam-fearful consumer. You held composure through an extended religious monologue and kept steering toward verification. And on the hostile-transfer call, you maintained professionalism through real verbal aggression and correctly set a boundary at 1:32: &ldquo;Sir, I can only help you if we do this properly.&rdquo;</p>
            <p><strong>What&apos;s costing you:</strong> four live SEP signals surfaced across the closeable calls — MOV, CSN, INT, and MCD — and none were converted into an enrollment pathway. The pattern is consistent: a consumer reveals a qualifying event, you acknowledge it, and the standard flow continues. Those disclosures are not background information. They are enrollment triggers. Also: on Thursday&apos;s trust-barrier call, the consumer told you at 6:47 that someone had stolen $180 from him. That was your close. &ldquo;That&apos;s exactly why you want to be dealing with a federally licensed agent on a recorded line&rdquo; is the line that unlocks his SSN. You passed it.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a consumer tells you someone ripped them off, that story is your key. &ldquo;That&apos;s exactly why you want to be on a recorded, federally regulated line with a licensed agent &mdash; I have everything to lose if I do anything wrong. What I&apos;m doing is getting you money that&apos;s already in the system under your name.&rdquo; Deploy that. The SSN follows.</p>
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
            <span>Week Average: <strong>37 / 100</strong></span>
            <span>Correct No-Sales: <strong>2 of 4</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>The best moment of your week came at 2:07 on the John Higgins call.</strong> You confirmed the callback number before anything else. When the connection deteriorated beyond salvage at 13:35, you made the right call: propose the callback, don&apos;t grind through a bad connection. John agreed immediately. That lead is still alive because of one sentence you said eleven minutes earlier. That is call intelligence.</p>
            <p><strong>Your SSN framing on Thursday&apos;s trust-barrier call was exactly right.</strong> At 7:14 you said &ldquo;I&apos;m not asking for money or bank accounts — I&apos;m just looking at Medicare benefits that exist in your name.&rdquo; For a consumer who had been victimized by a financial scam and was deeply skeptical of strangers, that is the precise language that separates a licensed agent from every scammer he&apos;s encountered. You earned his warmth — he said he liked your humility. That kind of trust is built, and you built it.</p>
            <p><strong>On the hostile-transfer call, you set the right boundary at 1:32</strong> — &ldquo;Sir, I can only help you if we do this properly here, so please don&apos;t cut me off&rdquo; — without matching the consumer&apos;s aggression. That is professional composure under real pressure and it is worth noting.</p>
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
                <p className={styles.workOnTitle}>Treat &ldquo;I have Medicaid&rdquo; as an enrollment trigger — not background noise</p>
                <p className={styles.workOnDetail}>Both calls had a consumer with Medicaid. Both times you heard it and kept moving. The correct move: stop and verify. &ldquo;Is your Medicaid active and confirmed right now? Great — because that qualifies you for a special plan type built for people in your exact situation. Let me check what&apos;s available in your county.&rdquo; Medicaid = D-SNP eligible = year-round window. Every time. No exceptions.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>When Medicaid status has changed, name the window and the deadline</p>
                <p className={styles.workOnDetail}>The Oklahoma consumer told you her Medicaid was reinstated March 1. That is a live MCD SEP closing around June 1, 2026 — approximately six weeks from this call. That is urgency. The line: &ldquo;The good news is you have about six weeks to use this window. If we find you a better plan today, we can get you switched before it closes.&rdquo; Make the deadline real. That turns a skeptical consumer into someone who listens.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>On the John Higgins callback — walk in prepared, not starting from zero</p>
                <p className={styles.workOnDetail}>You have everything you need: give-back interest, prostate cancer diagnosis, five specialists, monthly IV infusions, dual eligibility, and a CSN SEP open year-round. Do not open the callback like a new call. Open with: &ldquo;Mr. Higgins, it&apos;s Josner — I pulled up your options while we were disconnected and I want to show you the give-back number.&rdquo; Give the number first. Then: &ldquo;Before we lock anything in, I need to make sure your oncology team is covered on this plan.&rdquo; That builds more trust than anything else on this callback.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>04</span>
              <div>
                <p className={styles.workOnTitle}>Always close with a booked callback — warm leads go cold without a time</p>
                <p className={styles.workOnDetail}>On Thursday&apos;s trust-barrier call, the consumer showed real warmth and was beginning to give his SSN when the call ended. No specific callback time was established. When a consumer says &ldquo;give me your number and I&apos;ll call you back,&rdquo; the response is: &ldquo;I&apos;ll give you my number right now — and I&apos;m going to put a flag in your account so your file is ready when you call. Can you do tomorrow at 2?&rdquo; A warm callback with a booked time is worth ten cold ones.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>05</span>
              <div>
                <p className={styles.workOnTitle}>The recording does not end until the system confirms it has ended</p>
                <p className={styles.workOnDetail}>On the hostile-transfer call, post-call comments were captured on the recording. Anything said about a consumer while the call may still be live creates compliance and reputational risk regardless of circumstances. The rule is simple: never say anything you would not say if the consumer were still listening. Step away from the recording environment before debriefing.</p>
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
          <p>The Certainty System · Josner Saintil · Week of April 13–17, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC2 · RC6 · SEP Recognition · MCD · CSN · INT · D-SNP · Trust-Barrier · Callback Preparation</p>
        </div>

      </div>
    </PageShell>
  )
}
