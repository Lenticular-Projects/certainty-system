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
      { consumer: 'Timothy Hemingway', duration: '45:08', score: 72, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'Complex — Textbook Counsel and No-Sale', href: '/agents/steeve-exalant/calls/timothy-hemingway' },
      { consumer: 'Unknown Consumer', duration: '1:44', score: 52, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'The Skeptic — MBI Refused', href: '/agents/steeve-exalant/calls/unknown-consumer-1m44s' },
      { consumer: 'Unknown Consumer', duration: '3:26', score: 62, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'The Money Caller — Correct No-Sale', href: '/agents/steeve-exalant/calls/unknown-consumer-3m26s' },
    ],
  },
  {
    date: 'Wednesday, April 15',
    calls: [
      { consumer: 'Bobby Hopkins', duration: '48:14', score: 82, outcome: 'ENROLLED', outcomeNote: null, type: 'C-SNP — COPD Chronic Plan, $2,600 Med Savings', href: '/agents/steeve-exalant/calls/bobby-hopkins' },
    ],
  },
  {
    date: 'Thursday, April 16',
    calls: [
      { consumer: 'Andre Young', duration: '35:42', score: 51, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Third Party Takeover — Wife Vetoed at 32:18', href: '/agents/steeve-exalant/calls/andre-young' },
      { consumer: 'Mary Merritt', duration: '—', score: 52, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Consumer Declined — No Reframe Attempted', href: '/agents/steeve-exalant/calls/mary-merritt' },
      { consumer: 'Norman Weaver', duration: '38:33', score: 72, outcome: 'ENROLLED', outcomeNote: null, type: 'OTC Upgrade — Compliance Gap at Close', href: '/agents/steeve-exalant/calls/norman-weaver' },
      { consumer: 'Vance Adams', duration: '40:36', score: 82, outcome: 'ENROLLED', outcomeNote: null, type: 'LIS/Extra Help Update — NLS SEP', href: '/agents/steeve-exalant/calls/vance-adams' },
    ],
  },
]

const patterns: { title: string; rc: string; urgency: 'critical' | 'high' | 'medium'; body: string; rule: string | null; callRef: string; moveLabel: string; move: string }[] = [
  {
    title: 'Third party in the room — find out before you build the case',
    rc: 'RC1',
    urgency: 'critical' as const,
    body: 'You spent 32 minutes building the case for Andre Young — the right plan, the right star rating upgrade, the annualized math — and at 32:18 his wife Riva walked in and vetoed the entire call in under two minutes. The enrollment collapsed not because your work was wrong but because you never asked who else was in the decision. One question at the start of every call protects 32 minutes of work.',
    rule: 'On every call: "Mr. Young, do you typically make decisions like this on your own, or is there a spouse or family member you like to loop in?"',
    callRef: 'Andre Young, April 16. At 32:18 his wife said "What exactly is this call for?" You responded with a logical explanation about star ratings. She was protecting him — not asking for data. The call ended without a recovery attempt.',
    moveLabel: 'When the third party enters the call:',
    move: '"Mrs. Young — thank you for jumping in. I completely understand. We\'re not switching companies at all. He\'s staying with UnitedHealthcare, we\'re just upgrading him to their 5-star plan so he gets more benefits. With your okay, I can finalize that for him right now."',
  },
  {
    title: 'Chronic condition signal = C-SNP pivot, every time',
    rc: 'RC2',
    urgency: 'high' as const,
    body: 'Bobby Hopkins disclosed COPD in the first minute of the call. You caught it, pivoted from food card to C-SNP plan, and enrolled him on a UnitedHealthcare Chronic PPO with $2,600 in annual medication savings. That is the correct sequence — chronic condition disclosed, C-SNP identified, entire call restructured around higher value. The same move was available on the Hemingway call earlier in the week. The skill is in recognizing the signal fast enough to pivot before the wrong conversation starts.',
    rule: 'Any time a consumer names a chronic condition — COPD, heart failure, diabetes, kidney disease — ask immediately: "Is that a condition you\'re currently being treated for? Because that may qualify you for a specific plan other people can\'t get."',
    callRef: 'Bobby Hopkins, April 15. COPD disclosed at 2:57. Pivot to C-SNP at 3:07. Enrollment completed with $2,600/year medication savings demonstrated. This is the model.',
    moveLabel: 'Chronic condition disclosed — pivot to C-SNP:',
    move: '"Bobby, you mentioned COPD — I want to check something. That may qualify you for a chronic condition plan that most people don\'t have access to. The benefits are much better. Let me look that up before we go any further."',
  },
  {
    title: 'Math stated — never annualized',
    rc: 'RC3',
    urgency: 'high' as const,
    body: 'Three enrolled calls this week — Bobby Hopkins, Norman Weaver, Vance Adams — and on all three the math was stated in monthly figures and never annualized. Bobby heard "$45 a month." The correct statement is "$45 a month — that\'s $540 a year for groceries, on top of the $2,600 you\'re saving on your medications." Norman heard "almost triple" on the OTC card. The correct statement is "your OTC card is going from $50 to $130 a month — that\'s $960 more per year." Vance heard "$20.60 goes to zero." The correct statement is "$247 a year you were paying that you should never have been paying."',
    rule: null,
    callRef: 'Bobby Hopkins (April 15): $45/month OTC never stated as $540/year. Norman Weaver (April 16): $80/month OTC increase never stated as $960/year. Vance Adams (April 16): $20.60/month premium savings never stated as $247/year.',
    moveLabel: 'After every monthly figure — annualize it:',
    move: '"That\'s $45 a month for groceries — which is $540 a year, on top of the $2,600 you\'re saving on your medications. All in, this puts over $3,000 back in your hands this year. Bobby, you told me your fridge was empty. That stops now."',
  },
]

const pastReports = [
  { title: 'Weekly Brief — April 13–17, 2026', type: 'Weekly Brief', date: 'Apr 20, 2026', score: '66 / 100', active: true },
  { title: 'Weekly Brief — April 14', type: 'Weekly Brief', date: 'Apr 16, 2026', score: '62 / 100', active: false },
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

export default function SteeveExalantPage() {
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
          <h1 className={styles.agentName}>Steeve Exalant</h1>
          <p className={styles.period}>Week of April 13–17, 2026</p>
          <p className={styles.updatedAt}>Updated April 20 · 8 calls reviewed</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(66) }}>66</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>Apr 14–16 · 8 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>8</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 14–16, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>3</span>
            <span className={styles.scoreLabel}>Enrolled</span>
            <span className={styles.scoreRange}>2 Missed · 2 Correct No-Sale</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>RC1</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Third party blind spot</span>
          </div>
        </motion.div>

        {/* ── Platform Numbers ── */}
        <motion.div style={{ marginBottom: '48px' }} {...SPRING}>
          <h2 className={styles.sectionTitle}>Platform Numbers</h2>
          <div className={styles.scorecardRow}>
            <div className={styles.scoreCard}>
              <span className={styles.scoreValue}>19</span>
              <span className={styles.scoreLabel}>Sales — Apr 13–17</span>
              <span className={styles.scoreRange}>13.19% conversion</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, marginTop: 4, color: 'var(--sage-dark)' }}>
                ↑ from 8 (9.09%)
              </span>
            </div>
            <div className={styles.scoreCard}>
              <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>$108</span>
              <span className={styles.scoreLabel}>CPA — Apr 13–17</span>
              <span className={styles.scoreRange}>Cost per sale</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, marginTop: 4, color: 'var(--sage-dark)' }}>
                ↓ improved from $134
              </span>
            </div>
            <div className={styles.scoreCard}>
              <span className={styles.scoreValue}>144</span>
              <span className={styles.scoreLabel}>Total Calls — Apr 13–17</span>
              <span className={styles.scoreRange}>104 billable</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--ink-60)', marginTop: 4 }}>
                Prior week: 88 calls
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p>Eight calls this week — three enrolled, two missed opportunities, two correct no-sales. The week split cleanly in two: Tuesday was judgment calls and correct no-sales; Wednesday through Thursday included the Bobby Hopkins enrollment and two more on Thursday. The pattern that runs through all of it is the same one from last week — you find the right move and sometimes don&apos;t complete it.</p>
            <p><strong>What&apos;s working:</strong> the Bobby Hopkins call on Wednesday is the week&apos;s best work. Bobby called for a food card, disclosed COPD within 90 seconds, and you caught it immediately and pivoted the entire call to a C-SNP plan. The medication math — $4,300 to $1,700 a year, $2,600 in annual savings — was presented clearly and connected to a concrete dollar win. Full compliance execution, voice signature clean. On Vance Adams you diagnosed the LIS issue before Vance even explained it, walked him through exactly why he was paying $20 when he should have been paying $0, and enrolled him on the same plan with the correct premium. Both of those calls reflect the instincts that make you effective.</p>
            <p><strong>What&apos;s costing you:</strong> the Andre Young call. You spent 32 minutes building an excellent case — correct plan, correct star rating upgrade, annualized math — and at 32:18 his wife ended it in two minutes because you hadn&apos;t asked whether she was in the room. One question at the top of the call protects everything that follows. And on Mary Merritt, the consumer said &ldquo;I&apos;ll just stick with what I got&rdquo; at 23:29 — you accepted it with &ldquo;Even though it&apos;s less?&rdquo; and let her go. That wasn&apos;t a hard no. That was one reframe away from a different outcome.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>You proved this week you can run a full C-SNP enrollment from a food card call &mdash; chronic condition pivot, medication math, clean compliance, voice signature. The one thing that protects all of that work is asking at the start of every call: &ldquo;Do you typically make decisions like this on your own, or is there someone else you like to loop in?&rdquo; One question. Before you build the case. That&apos;s what keeps the Andre Young call from happening again.</p>
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
            <span>Week Average: <strong>66 / 100</strong></span>
            <span>Enrolled: <strong>3 of 8</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Bobby Hopkins — the C-SNP pivot was the move of the week.</strong> Bobby called about a food card and disclosed COPD at 2:57. Within 10 seconds you identified it as a C-SNP qualifying condition and restructured the entire call around the chronic plan. You ran the medication math — $4,300 down to $1,700, $2,600 in annual savings — and presented it clearly. You also ran the full post-enrollment health assessment to document his food insecurity and utility burden, which maximizes his benefit tier. That advanced move is something many agents skip. Score: 82.</p>
            <p><strong>Vance Adams — you diagnosed the LIS issue before he finished explaining it.</strong> Vance called skeptical about TV ad claims. You confirmed his Extra Help was Level 1, explained exactly why he was paying $20 when he should have been at $0, and walked him through the fix without making him feel like something went wrong. &ldquo;It doesn&apos;t automatically change the price because you&apos;d have to call Aetna and let them know, or call me as a Medicare specialist&rdquo; — honest, accurate, and framed as the reason he called the right person. Clean enrollment on the same plan, correct premium, voice signature obtained. Score: 82.</p>
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
                <p className={styles.workOnTitle}>Ask about the decision-maker at the top of every call</p>
                <p className={styles.workOnDetail}>Before you build the case: &ldquo;Do you typically make healthcare decisions like this on your own, or is there a spouse or family member you like to loop in?&rdquo; If there&apos;s a spouse, bring them in early — &ldquo;Can we get her on the line?&rdquo; A third party who enters the call on your terms is an ally. A third party who enters at 32:18 is a veto.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>When they say &ldquo;I&apos;ll stick with what I got&rdquo; — one reframe before you let go</p>
                <p className={styles.workOnDetail}>Mary Merritt said &ldquo;I don&apos;t want it, I&apos;ll just stick with what I got&rdquo; at 23:29. That&apos;s not a hard no — it&apos;s comfort with the familiar. The reframe is: &ldquo;I hear you. Before I let you go — staying on this plan costs you $X more per year than the one I found you. If that number doesn&apos;t matter, no problem. But I want to make sure you heard it.&rdquo; One sentence. Then let her decide.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>Cut the anti-shopping language at close — use your number instead</p>
                <p className={styles.workOnDetail}>Telling Norman Weaver &ldquo;anytime somebody calls you and they try to tell you there&apos;s more, just know they&apos;re lying&rdquo; is a CMS-flagged statement. The correct version: &ldquo;If anyone calls you about your Medicare, just tell them you already updated your plan and call me with any questions.&rdquo; Same protection. Zero compliance exposure.</p>
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
          <p>The Certainty System · Steeve Exalant · Week of April 13–17, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC2 · RC3 · RC4 · C-SNP · Third Party · LIS Update · Annualization · Bobby Hopkins: C-SNP Enrolled</p>
        </div>

      </div>
    </PageShell>
  )
}
