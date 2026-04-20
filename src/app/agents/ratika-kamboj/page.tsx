'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Weekly Brief: April 13–17, 2026 ─────────────────────────────────────────

const callsByDate = [
  {
    date: 'Monday, April 13',
    calls: [
      { consumer: 'Harold Ham', duration: '8:24', score: 52, outcome: 'INCOMPLETE', outcomeNote: 'Discovery in progress — call dropped', type: 'Third-Party Inbound — Dropped Call', href: '/agents/ratika-kamboj/calls/harold-ham' },
    ],
  },
  {
    date: 'Tuesday, April 14',
    calls: [
      { consumer: 'Lavern Gray', duration: '10:48', score: 44, outcome: 'INCOMPLETE', outcomeNote: 'Discovery done — no presentation', type: 'Benefits Shopper / C-SNP Inbound', href: '/agents/ratika-kamboj/calls/lavern-gray' },
      { consumer: 'Mike Becker', duration: '3:25', score: 42, outcome: 'INCOMPLETE', outcomeNote: 'Consumer disconnected', type: 'Food Card / OTC Inbound', href: '/agents/ratika-kamboj/calls/mike-becker' },
      { consumer: 'Unknown Consumer', duration: '8:43', score: 38, outcome: 'INCOMPLETE', outcomeNote: 'Discovery done — close not attempted', type: 'Food Card / OTC Inbound — Aborted', href: '/agents/ratika-kamboj/calls/unknown-consumer-8m43s' },
    ],
  },
  {
    date: 'Wednesday, April 15',
    calls: [
      { consumer: 'Alicia Logan', duration: '9:27', score: 28, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Qualification Inquiry — Unverified Lead', href: '/agents/ratika-kamboj/calls/alicia-logan' },
    ],
  },
]

const patterns = [
  {
    title: 'Confirmed data is the pivot point — not the end of the research phase',
    rc: 'RC1',
    urgency: 'critical' as const,
    summary: 'On the Lavern Gray call, you had everything by 9:29 — current plan, current OTC amount ($91–94), qualifying C-SNP condition, cooperative consumer on the line. The call ended with you still in the system. Discovery is how you earn the right to present, not the destination. When the data is in hand and the plan beats it, continuing to research is delay, not diligence.',
    fix: 'Instead: "Ms. Gray, you\'re currently getting $91 a month on your food card. I found a plan here that gives you more, and it\'s still $0 out of pocket. Can I take two minutes to walk you through what I found?" Confirmed data straight to the offer.',
  },
  {
    title: 'Qualify Medicare status in the first 30 seconds — before running any sequence',
    rc: 'RC1',
    urgency: 'high' as const,
    summary: 'Alicia Logan opened with "I\'m calling to see if I\'m qualified for Medicare and Medicaid." That sentence signals she may not have Medicare yet. Ratika bypassed it and ran a standard enrollment sequence — collecting a Medicare card that didn\'t exist, chasing an SSN that didn\'t match, and ending 9 minutes later with nothing. One qualifying question would have redirected the entire call.',
    fix: 'Instead: "Before we look at your benefits — do you currently have a Medicare card, the red, white, and blue one? Or is this your first time setting up Medicare?" Five seconds at the start saves nine minutes at the end. And when Medicaid comes up: "Are you currently receiving Medicaid from the state?" That\'s a year-round enrollment window.',
  },
  {
    title: 'Own the callback — never ask the consumer to call back on their own',
    rc: 'RC1',
    urgency: 'medium' as const,
    summary: 'The Alicia Logan call ended with "when you find your number, you can give me a call back." That phrasing places the entire burden of follow-up on an 80-year-old who couldn\'t find her Medicare card. The probability of that call coming back is close to zero. The agent must own the callback — schedule it, give instructions, and commit.',
    fix: 'Instead: "Alicia, let me call you back tomorrow at 1 PM. Your Medicare number is on your red, white, and blue card — look for it in your mail or important papers. If you can\'t find it, call 1-800-MEDICARE and they\'ll give it to you in two minutes. Can I count on calling you at this number tomorrow?"',
  },
]

const pastReports = [
  { title: 'Weekly Brief — April 14–15', type: 'Weekly Brief', date: 'Apr 16, 2026', score: '38 / 100', active: false },
  { title: 'Weekly Brief — April 13–17', type: 'Weekly Brief', date: 'Apr 20, 2026', score: '41 / 100', active: true },
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

export default function RatikaKambojPage() {
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
          <h1 className={styles.agentName}>Ratika Kamboj</h1>
          <p className={styles.period}>Week of April 13–17, 2026</p>
          <p className={styles.updatedAt}>Updated April 20 · 5 calls reviewed (Mon–Wed)</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(41) }}>41</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>Mon–Wed · 5 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>5</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 13–15, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>0</span>
            <span className={styles.scoreLabel}>Enrolled</span>
            <span className={styles.scoreRange}>4 Incomplete · 1 Missed Opp</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>RC1</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Discovery done — offer never made</span>
          </div>
        </motion.div>

        {/* ── Platform Numbers ── */}
        <motion.div style={{ marginBottom: '48px' }} {...SPRING}>
          <h2 className={styles.sectionTitle}>Platform Numbers</h2>
          <div className={styles.scorecardRow}>
            <div className={styles.scoreCard}>
              <span className={styles.scoreValue}>6</span>
              <span className={styles.scoreLabel}>Sales — Apr 13–17</span>
              <span className={styles.scoreRange}>5.17% conversion</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, marginTop: 4, color: 'var(--sage-dark)' }}>
                ↑ from 3 (3.66%)
              </span>
            </div>
            <div className={styles.scoreCard}>
              <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>$248</span>
              <span className={styles.scoreLabel}>CPA — Apr 13–17</span>
              <span className={styles.scoreRange}>Cost per sale</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, marginTop: 4, color: 'var(--sage-dark)' }}>
                ↓ from $339
              </span>
            </div>
            <div className={styles.scoreCard}>
              <span className={styles.scoreValue}>116</span>
              <span className={styles.scoreLabel}>Total Calls — Apr 13–17</span>
              <span className={styles.scoreRange}>80 billable</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--ink-60)', marginTop: 4 }}>
                Prior week: 82 calls
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p>Five calls across three days — four incompletes and one missed opportunity. Three of those calls ended with full discovery complete and no presentation made. The Harold Ham call was a dropped connection, not an agent failure. The pattern across the other four calls is consistent: the research phase completes and the offer doesn&apos;t come.</p>
            <p><strong>What&apos;s working:</strong> your compliance openings are strong across all five calls — TPMO, SOA, and pre-enrollment checks delivered correctly and on time. The Harold Ham call showed textbook third-party handling: verifying Harold was present, checking decision authority, getting consent before proceeding. On the Lavern Gray call, your opening anchor (&ldquo;while looking for your food card benefits, our discussion may include Medicare Advantage plans&rdquo;) framed the call as a service before any qualification happened. Lavern stayed cooperative through the entire discovery because of how that first exchange landed. Your recoveries under friction are consistent — when Mike Becker didn&apos;t have his Medicare card, you moved to name and DOB without breaking stride.</p>
            <p><strong>What&apos;s costing you:</strong> the pivot from discovery to presentation is the one move this week. On Lavern Gray, you had current plan, current OTC amount, qualifying condition, cooperative consumer — at 9:29. The call ended with you still in the system. On Alicia Logan, the call ran a full enrollment sequence on a consumer who may not have had Medicare yet — the qualifying question was skipped entirely. And the call ended with a passive &ldquo;call back when you find your number&rdquo; that guaranteed the lead was lost. Discovery is the setup. The offer is the job.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>The moment the data lands, make the offer. &ldquo;I found something &mdash; let me walk you through it.&rdquo; That&apos;s the pivot. You already have everything you need. Stop gathering and start presenting. Confirmed data straight to the offer &mdash; every time.</p>
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
            <span>Week Average: <strong>41 / 100</strong></span>
            <span>Enrolled: <strong>0 of 5</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>The Harold Ham call showed textbook third-party handling.</strong> Paola called on Harold&apos;s behalf — Ratika immediately confirmed Harold was on the line, verified decision authority, and got consent before running any sequence. That&apos;s a compliance-sensitive moment that trips a lot of agents up. The call dropped before any plan work was done, but Harold&apos;s profile (partial Medicaid, kidney disease, hypertension) almost certainly qualifies for a D-SNP — if that callback happened, it was a close waiting to finish.</p>
            <p><strong>Your opening anchor on the Lavern Gray call is something to keep.</strong> &ldquo;While looking for your food card benefits, our discussion may include Medicare Advantage plans — is it okay if we discuss this today?&rdquo; That framing tells the consumer why she&apos;s on the line before anything else happens. Lavern stayed cooperative through all of discovery because of how that first exchange landed. That kind of opening is rare. Own it.</p>
            <p><strong>Your recoveries under friction were consistent.</strong> When Mike Becker didn&apos;t have his Medicare card, you moved to name and date of birth without breaking stride. When the Unknown Consumer jumped in mid-compliance read, you finished the disclosure and kept going. The composure in the opening is what makes the rest of the call possible.</p>
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
                <p className={styles.priorityDetail}>{p.summary}</p>
                <div className={styles.priorityMove}>
                  <span className={styles.priorityMoveLabel}>Instead:</span>
                  <p className={styles.priorityMoveText}>{p.fix}</p>
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
                <p className={styles.workOnTitle}>Make the offer the moment the data lands</p>
                <p className={styles.workOnDetail}>On the Lavern Gray call, you had everything by 9:29. The pivot language: &ldquo;Ms. Gray, you&apos;re currently getting $91 on your food card. I found a plan that gives you more, still $0 premium. Can I take two minutes to walk you through what I found?&rdquo; Practice saying that line out loud so it fires automatically the moment you confirm current benefit amount plus a plan that beats it.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>Qualify Medicare status before running any enrollment sequence</p>
                <p className={styles.workOnDetail}>For any inbound call where Medicare status is unclear: &ldquo;Do you currently have a Medicare card — the red, white, and blue one?&rdquo; Five seconds. If the answer is no or unclear, that&apos;s a different call entirely. And when Medicaid comes up in the same sentence as Medicare: &ldquo;Are you currently receiving Medicaid from the state?&rdquo; That opens a D-SNP enrollment window you can walk through on the same call, any month of the year.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>Schedule the callback — never ask the consumer to call you back</p>
                <p className={styles.workOnDetail}>When a call hits a data wall (no Medicare card, no SSN): &ldquo;Alicia, let me call you back tomorrow at 1 PM. Your Medicare number is on your red, white, and blue card — look in your mail or your important documents. If you can&apos;t find it, call 1-800-MEDICARE and they&apos;ll read it to you in two minutes. Can I count on calling you at this number tomorrow?&rdquo; You own the callback. Never place that burden on the consumer.</p>
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
          <p>The Certainty System · Ratika Kamboj · Week of April 13–17, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC6 · Lead Qualification · D-SNP · Pivot to Presentation · Callback Ownership</p>
        </div>

      </div>
    </PageShell>
  )
}
