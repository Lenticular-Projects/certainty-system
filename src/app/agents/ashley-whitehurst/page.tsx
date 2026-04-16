'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Weekly Brief: April 13–17, 2026 ──────────────────────────────────────────

const callsByDate = [
  {
    date: 'Tuesday, April 14',
    calls: [
      { consumer: 'Ricky DeWitt', duration: '17:50', score: 52, outcome: 'INCOMPLETE', outcomeNote: 'Discovery done — close not attempted', type: 'Discovery Complete — Dead Air on Network Search', href: '/agents/ashley-whitehurst/calls/ricky-dewitt' },
      { consumer: 'Unknown Consumer', duration: '15:39', score: 44, outcome: 'INCOMPLETE', outcomeNote: 'Consumer disconnected', type: 'Hold-Kill — No Recovery Protocol', href: '/agents/ashley-whitehurst/calls/unknown-consumer-15m39s' },
    ],
  },
  {
    date: 'Wednesday, April 15',
    calls: [
      { consumer: 'Unknown Consumer', duration: '2:40', score: 42, outcome: 'INCOMPLETE', outcomeNote: 'Stuck in research — never transitioned', type: 'SSN Refused — Medicare Card Never Offered', href: '/agents/ashley-whitehurst/calls/unknown-consumer-2m40s' },
      { consumer: 'Unknown Consumer', duration: '3:04', score: 22, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Soft Exit Accepted — Lead Was Workable', href: '/agents/ashley-whitehurst/calls/unknown-consumer-3m04s' },
      { consumer: 'Keon Baldwin', duration: '6:00', score: 50, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'Already Enrolled C-SNP — Correct Redirect', href: '/agents/ashley-whitehurst/calls/keon-baldwin' },
      { consumer: 'Unknown Consumer', duration: '3:38', score: 52, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'Genuinely Uncloseable — TV Ad Caller', href: '/agents/ashley-whitehurst/calls/unknown-consumer-3m38s' },
    ],
  },
]

const patterns = [
  {
    title: 'When the SSN comes up, you go defensive instead of going trust-first',
    rc: 'RC1',
    urgency: 'critical' as const,
    body: 'SSN friction killed three calls this week. When a consumer hesitates on SSN — "I really don\'t like getting out my social" — responding with a compliance explanation makes it worse. The fix is not to push harder. It\'s to offer the Medicare card before the SSN ever becomes the issue. Lead with the easier path first. SSN is your backup, not your opener.',
    rule: 'Ask for the Medicare card first, every time. SSN is only raised if they can\'t find the card.',
    callRef: 'On the 2:40 call, the consumer expressed SSN hesitation. The call ended without the Medicare card alternative ever being offered.',
    moveLabel: 'Lead with the safer option.',
    move: '"I completely understand — most people feel that way. Your Medicare card works just as well. Do you have that handy? It\'s the red, white, and blue card — the long number on the front is all I need."',
  },
  {
    title: 'You accept passive permission as the end of the call',
    rc: 'RC1',
    urgency: 'high' as const,
    body: 'On three calls this week, a consumer gave you some form of passive permission to continue — "You can, if you want," "that\'s okay," "I remember him" — and the call ended shortly after because you didn\'t advance. Passive permission is not ambiguity. It\'s an open door. The move at that exact moment is a data collection question or a close. Not a restatement. Not another explanation.',
    rule: null,
    callRef: 'The People\'s Health caller said "You can, if you want" at 2:36 — then heard a restatement of what she already understood, then said "That\'s okay" at 3:00 and the call was over.',
    moveLabel: 'Passive permission = Medicare card question.',
    move: '"Perfect. Grab your Medicare card for me — I need the ID number on the front. It starts with a letter." If she has it, you\'re in Phase II. If she can\'t find it, ask for date of birth.',
  },
  {
    title: 'Compliance flag: "I work for Medicare"',
    rc: 'RC4',
    urgency: 'medium' as const,
    body: 'On the New Orleans call at 1:17, the phrasing implied a government employment relationship. This violates CMS marketing guidelines on every call where it\'s used. It\'s not a coaching note — it\'s a compliance requirement. The correct language is automatic: "I\'m a licensed Medicare insurance agent" or "I work with Medicare-approved plans."',
    rule: null,
    callRef: 'The New Orleans call at 1:17 — "I work for Medicare." This cannot appear on any call.',
    moveLabel: 'Replace it and make it automatic.',
    move: '"I\'m a licensed Medicare insurance agent helping people find plans in your area." Practice that sentence until it\'s the only version you know.',
  },
]

const pastReports = [
  { title: 'Weekly Brief — April 13–17', type: 'Weekly Brief', date: 'Apr 16, 2026', score: '44 / 100', active: true },
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

export default function AshleyWhitehurstPage() {
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
          <h1 className={styles.agentName}>Ashley Whitehurst</h1>
          <p className={styles.period}>Week of April 13–17, 2026</p>
          <p className={styles.updatedAt}>Updated April 16 · 6 calls reviewed (Tue–Wed)</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(44) }}>44</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>Tue–Wed · 6 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>6</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 14–15, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>2</span>
            <span className={styles.scoreLabel}>Correct No-Sales</span>
            <span className={styles.scoreRange}>3 Incomplete · 1 Missed</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)' }}>RC1</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Passive exits — 4 of 6 calls</span>
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p>These are the calls we pulled this week where the conversation was open — consumers who called in with real benefit questions and stayed on the line. What we&apos;re working through is what happened in the moments where the call could have moved forward but didn&apos;t.</p>
            <p><strong>What&apos;s working:</strong> the C-SNP identification on the Ricky DeWitt call was a genuine standout. At 6:18 you asked directly about chronic conditions, and when Ricky said he had four stents, you immediately connected it to C-SNP eligibility and the $200 allowance card. That&apos;s expert product knowledge deployed in real time — most agents miss it entirely. Your correct no-sale reads were also sharp: Keon Baldwin and the TV ad caller were both correctly identified as uncloseable, and you didn&apos;t waste time pushing on either one.</p>
            <p><strong>What&apos;s costing you:</strong> four calls this week ended when a consumer gave you a green light and you didn&apos;t advance. &ldquo;You can, if you want&rdquo; is permission. &ldquo;I remember him&rdquo; is permission. &ldquo;That&apos;s okay&rdquo; is ambiguity — and ambiguity is yours to resolve with a forward question. The pattern is consistent: when a consumer opens a door, you explain the situation instead of walking through it. Every time a consumer gives you any form of passive agreement, your next line is a data collection question or a close.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>Lead with the Medicare card — never the SSN. &ldquo;I completely understand. Your Medicare card works just as well. Do you have that handy?&rdquo; That one line keeps three calls alive this week.</p>
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
            <span>Correct No-Sales: <strong>2 of 6</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>The C-SNP identification on the Ricky DeWitt call was the strongest move in the batch.</strong> You asked about chronic conditions at 6:18 — a question most agents never think to ask — and when Ricky disclosed four cardiac stents, you connected it directly to C-SNP eligibility and the $200 allowance card. That&apos;s specialized knowledge deployed at exactly the right moment. Most agents in that position pitch a standard plan. You went straight to the plan that matched his medical situation.</p>
            <p><strong>Your no-sale reads were clean.</strong> Keon Baldwin was already enrolled in a C-SNP and needed service resolution, not a plan switch — you identified it at 4:35 and shifted immediately to finding the Devoted customer service number and diagnosing the address mismatch. The TV ad caller was correctly identified as uncloseable. You did not push on either one. Situational awareness under pressure is a skill, and you showed it twice in one day.</p>
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
                <p className={styles.workOnTitle}>Lead with the Medicare card — every single time</p>
                <p className={styles.workOnDetail}>Before you ever mention the SSN, ask for the Medicare card. &ldquo;Do you have your red, white, and blue Medicare card nearby? That&apos;s actually the safer option — the long number on the front is all I need.&rdquo; Only bring up SSN if they can&apos;t find the card. Going in order cuts verification friction in half and keeps three calls alive this week alone.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>When someone says anything that isn&apos;t a firm no — advance</p>
                <p className={styles.workOnDetail}>&ldquo;That&apos;s okay&rdquo; is not a no. &ldquo;You can, if you want&rdquo; is a yes. &ldquo;I remember him&rdquo; is a yes. The moment you hear passive permission, your next line is a data collection question: &ldquo;Perfect — grab your Medicare card for me.&rdquo; Not an explanation. Not a restatement. A forward question. The call only ends on a firm no — not on ambiguity.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>Anchor the benefit before asking for anything</p>
                <p className={styles.workOnDetail}>Give them the &ldquo;why&rdquo; before the &ldquo;what I need from you.&rdquo; &ldquo;Before I pull you up — your zip code is looking at strong allowance amounts this year. I want to make sure you get the right plan for that.&rdquo; A specific benefit keeps people on the line through verification friction. Without it, the SSN ask is just a hurdle with no reward on the other side.</p>
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
          <p>The Certainty System · Ashley Whitehurst · Week of April 13–17, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC4 · SSN Handling · Passive Exit · Benefit Anchoring</p>
        </div>

      </div>
    </PageShell>
  )
}
