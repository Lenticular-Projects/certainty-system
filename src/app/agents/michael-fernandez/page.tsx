'use client'
import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import { useState } from 'react'
import styles from './page.module.css'

// ─── Data ─────────────────────────────────────────────────────────────────────

const callsByDate = [
  {
    date: 'Monday, April 20',
    calls: [
      {
        consumer: 'Deloris Walls',
        href: '/agents/michael-fernandez/calls/deloris-walls',
        score: 34,
        duration: '20:50',
        outcome: 'MISSED OPPORTUNITY',
        outcomePill: 'missed' as const,
        callType: 'Money Caller / D-SNP Switcher',
        difficulty: 'LOW',
        note: 'Surrendered soft objection at 17:22 — dual-eligible INT SEP closeable',
      },
      {
        consumer: 'Karen Ewing',
        href: '/agents/michael-fernandez/calls/karen-ewing',
        score: 42,
        duration: '12:37',
        outcome: 'MISSED OPPORTUNITY',
        outcomePill: 'missed' as const,
        callType: 'Satisfied Loyalist / Warm Referral',
        difficulty: 'MEDIUM',
        note: 'Medical narrative not deployed — callback surrendered without reframe',
      },
    ],
  },
  {
    date: 'Tuesday, April 21',
    calls: [
      {
        consumer: 'Barbara McKinney',
        href: '/agents/michael-fernandez/calls/barbara-mckinney',
        score: 60,
        duration: '15:00',
        outcome: 'CORRECT NO-SALE',
        outcomePill: 'neutral' as const,
        callType: 'Money Caller / Correct No-Sale',
        difficulty: 'MEDIUM',
        note: 'Declined to enroll consumer facing imminent open heart surgery — correct call',
      },
    ],
  },
]

const weekAvg = Math.round((34 + 42 + 60) / 3) // 45

const patterns = {
  emerging: [
    {
      title: 'Soft Objection Surrender',
      rc: 'RC1',
      urgency: 'critical' as const,
      summary: 'Both closeable calls ended on unanchored callbacks after a single soft pushback — no reframe attempted.',
      fix: 'Instead: "You told me you wanted to go back to United. Let\'s make eventually today. What\'s your date of birth?"',
    },
    {
      title: 'Client Gold Missed — Emotion Not Anchored',
      rc: 'RC2',
      urgency: 'high' as const,
      summary: "Consumers gave buying signals (\"groceries are expensive,\" detailed medical history) that were acknowledged with \"mm-hmm\" and never deployed.",
      fix: 'Instead: Stop when they give you the gold. Reflect it back. Build every number around what they just told you.',
    },
    {
      title: 'Math Abandoned After Step 1',
      rc: 'RC3',
      urgency: 'high' as const,
      summary: 'Benefit numbers were stated but never annualized or humanized — $99/month was never converted to $1,188/year on a fixed income.',
      fix: 'Instead: "That\'s $1,188 a year — two months of groceries on a fixed income. That\'s the answer."',
    },
    {
      title: 'SEP Window Not Named',
      rc: 'RC6',
      urgency: 'high' as const,
      summary: 'INT SEP identified but not weaponized as urgency; CSN SEP on Barbara\'s call never named — consumer left without knowing she has a year-round window.',
      fix: 'Instead: "Because of your Medicaid, your enrollment window is open right now — any month of the year. We can do this today."',
    },
    {
      title: 'Permission Language in Closes',
      rc: 'RC1',
      urgency: 'high' as const,
      summary: '"If you wanted to..." and "It\'s your decision" appear at close attempts — both hand authority back to the consumer before she can respond.',
      fix: 'Instead: Assumptive language only. "I\'m going to get you enrolled in UHC starting May 1st. Can you confirm your date of birth?"',
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MichaelFernandezPage() {
  const [callsOpen, setCallsOpen] = useState(true)

  return (
    <PageShell>
      <div className={styles.page}>

        {/* ── Header ── */}
        <motion.header className={styles.header} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Agent Brief</span>
          </div>
          <h1 className={styles.agentName}>Michael Fernandez</h1>
          <p className={styles.period}>Mid-Week Report — April 22, 2026 &nbsp;·&nbsp; Week of April 20–22</p>
          <p className={styles.updatedAt}>Updated April 22 &nbsp;·&nbsp; 3 calls reviewed</p>
        </motion.header>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ ...SPRING, delay: 0.05 }}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>{weekAvg}</span>
            <span className={styles.scoreLabel}>Period Avg</span>
            <span className={styles.scoreRange}>34 · 42 · 60</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>3</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 20–21</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>4</span>
            <span className={styles.scoreLabel}>Sales (CRM)</span>
            <span className={styles.scoreRange}>8.33% conversion</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>$113</span>
            <span className={styles.scoreLabel}>CPA</span>
            <span className={styles.scoreRange}>First period tracked</span>
          </div>
        </motion.div>

        {/* ── Trend Snapshot ── */}
        <motion.section className={styles.trendSnapshot} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ ...SPRING, delay: 0.08 }}>
          <h2 className={styles.sectionTitle}>CRM Trend Snapshot</h2>
          <div className={styles.trendTable}>
            <div className={styles.trendHeader}>
              <span>Metric</span>
              <span>Last Week</span>
              <span>This Period</span>
              <span>Change</span>
            </div>
            <div className={styles.trendRow}>
              <div>
                <div className={styles.trendLabel}>Total Sales</div>
              </div>
              <span className={styles.trendNeutral}>—</span>
              <span className={styles.trendUp}>4</span>
              <span className={styles.trendNeutral}>—</span>
            </div>
            <div className={styles.trendRow}>
              <div>
                <div className={styles.trendLabel}>Conversion Rate</div>
              </div>
              <span className={styles.trendNeutral}>—</span>
              <span className={styles.trendUp}>8.33%</span>
              <span className={styles.trendNeutral}>—</span>
            </div>
            <div className={styles.trendRow}>
              <div>
                <div className={styles.trendLabel}>Cost Per Acquisition</div>
              </div>
              <span className={styles.trendNeutral}>—</span>
              <span className={styles.trendUp}>$113</span>
              <span className={styles.trendNeutral}>—</span>
            </div>
            <div className={styles.trendRow}>
              <div>
                <div className={styles.trendLabel}>Calls Reviewed</div>
              </div>
              <span className={styles.trendNeutral}>—</span>
              <span className={styles.trendNeutral}>3</span>
              <span className={styles.trendNeutral}>—</span>
            </div>
            <div className={styles.trendFootnote}>
              First period tracked — no prior data. Apr 13–17: Michael not in CRM. Apr 20–21: 48 calls · 30 billable · 4 sales.
            </div>
          </div>
        </motion.section>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ ...SPRING, delay: 0.1 }}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>
            When a consumer says "eventually" or "probably going to" — that word is your close trigger. Collapse the timeline immediately. Every forward-looking statement is an invitation to close, not a reason to be patient.
          </p>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.section className={styles.execSummary} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ ...SPRING, delay: 0.12 }}>
          <h2 className={styles.sectionTitle}>Executive Summary</h2>
          <div className={styles.summaryCard}>
            <div>
              <span className={styles.summaryStrong}>What's working:</span>
              <p>
                Your compliance execution is the strongest thing on your tape right now — TPMO, SOA, pre-enrollment verification, all clean, every call. On the Deloris call you spotted a D-SNP misplacement in under 6 minutes, which is a diagnostic move most agents miss entirely. On the Barbara call you made the right call to protect a pre-surgical consumer over your commission — that kind of judgment builds trust and keeps doors open. You know your product: you correctly identified INT SEP context, C-SNP eligibility, and plan comparisons without hesitation.
              </p>
            </div>
            <div>
              <span className={styles.summaryCosting}>What's costing you:</span>
              <p>
                Both closeable calls — Deloris and Karen — ended on unanchored callbacks after a single soft objection, with no reframe attempt. Deloris told you twice she was going back to United. Karen handed you her SSN, DOB, and Medicare number. Neither was a refusal — they were evaluations. You treated their forward-looking statements as reasons to wait instead of reasons to close. The permission language ("if you wanted to," "it's your decision") is handing authority back to the consumer right before the finish line. The math was stated but never weaponized — $99/month means nothing without saying $1,188/year on a fixed income.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ── Your Tells ── */}
        <motion.section className={styles.yourTells} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ ...SPRING, delay: 0.14 }}>
          <h2 className={styles.sectionTitle}>Your Tells</h2>
          <div className={styles.tellsBlock}>
            <div className={styles.tellsRow}>
              <div className={styles.tellsColumn}>
                <span className={`${styles.tellsColumnLabel} ${styles.tellsColumnEnrolled}`}>When You Close (Barbara — Correct No-Sale)</span>
                <ul className={styles.tellsList}>
                  <li>You read the situation and protect the consumer over the commission</li>
                  <li>You name the right plan type unprompted (C-SNP identification at 9:51)</li>
                  <li>Your compliance section is tight and professional — it builds trust</li>
                  <li>You stay calm when the call doesn't go the expected direction</li>
                  <li>You secure a follow-up mechanism (text permission) before hanging up</li>
                </ul>
              </div>
              <div className={styles.tellsColumn}>
                <span className={`${styles.tellsColumnLabel} ${styles.tellsColumnMissed}`}>When You Lose (Deloris, Karen — Missed Opportunity)</span>
                <ul className={styles.tellsList}>
                  <li>You respond to "eventually" with "mm-hmm" instead of closing</li>
                  <li>You present benefit numbers without anchoring them to what they told you</li>
                  <li>Permission language appears right before the close attempt</li>
                  <li>One soft objection triggers an immediate callback pivot — no reframe</li>
                  <li>Emotional signals (grocery fear, medical narrative) go undeployed</li>
                </ul>
              </div>
            </div>
            <div className={styles.tellsDelta}>
              <span className={styles.tellsDeltaLabel}>The Delta</span>
              The difference between your enrolled calls and your missed calls is a single moment: what you do when the consumer says something that isn't a yes. On your good calls, you make a decision and explain it. On your missed calls, you ask for permission. Stop asking. State what's going to happen and ask them to confirm.
            </div>
          </div>
        </motion.section>

        {/* ── Patterns ── */}
        <motion.section className={styles.section} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ ...SPRING, delay: 0.16 }}>
          <h2 className={styles.sectionTitle}>Patterns — Chronic · Emerging · Resolved</h2>
          <div className={styles.patternsGrid}>

            {/* Chronic */}
            <div className={styles.patternColumn}>
              <h3 className={`${styles.patternColumnHeader} ${styles.patternColumnChronic}`}>Chronic</h3>
              <div className={`${styles.patternCard} ${styles.patternCardChronic}`}>
                <div className={styles.patternCardPlaceholder}>
                  First period tracked — establishing baseline. No prior data to confirm chronic patterns. Check back after next delivery.
                </div>
              </div>
            </div>

            {/* Emerging */}
            <div className={styles.patternColumn}>
              <h3 className={`${styles.patternColumnHeader} ${styles.patternColumnEmerging}`}>Emerging</h3>
              {patterns.emerging.map((p, i) => (
                <div key={i} className={`${styles.patternCard} ${styles.patternCardEmerging}`}>
                  <div className={styles.patternCardTitle}>{p.title}</div>
                  <div className={styles.patternCardRc}>{p.rc}</div>
                  <div className={styles.patternCardSummary}>{p.summary}</div>
                  <div className={styles.patternCardFix}>{p.fix}</div>
                </div>
              ))}
            </div>

            {/* Resolved */}
            <div className={styles.patternColumn}>
              <h3 className={`${styles.patternColumnHeader} ${styles.patternColumnResolved}`}>Resolved</h3>
              <div className={`${styles.patternCard} ${styles.patternCardResolved}`}>
                <div className={styles.patternCardPlaceholder}>
                  First period — no prior patterns to resolve. Future reports will track what's been corrected.
                </div>
              </div>
            </div>

          </div>
        </motion.section>

        {/* ── Calls (Collapsible) ── */}
        <motion.section className={styles.callsSection} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ ...SPRING, delay: 0.18 }}>
          <div className={styles.callsSectionHeader}>
            <h2 className={styles.sectionTitle} style={{ marginBottom: 0, paddingBottom: 0, borderBottom: 'none' }}>This Period's Calls</h2>
            <button
              className={styles.collapsibleCallsToggle}
              onClick={() => setCallsOpen(v => !v)}
            >
              {callsOpen ? 'Collapse' : 'Expand'}
            </button>
          </div>

          {callsOpen && callsByDate.map((group) => (
            <div key={group.date} className={styles.dateGroup}>
              <div className={styles.dateGroupLabel}>{group.date}</div>
              <div className={styles.callTable}>
                <div className={styles.callTableHeader}>
                  <span>Consumer</span>
                  <span>Score</span>
                  <span>Duration</span>
                  <span>Outcome</span>
                  <span>Call Type</span>
                </div>
                {group.calls.map((call) => (
                  <div key={call.consumer} className={styles.callRow}>
                    <div>
                      <Link href={call.href} className={styles.consumerName} style={{ textDecoration: 'none', color: 'inherit', fontWeight: 600 }}>
                        {call.consumer}
                      </Link>
                      <div className={styles.outcomeNote}>{call.note}</div>
                    </div>
                    <span className={styles.callScore}
                      style={{ color: call.score >= 75 ? 'var(--sage-dark)' : call.score >= 55 ? 'var(--mustard-dark)' : 'var(--terracotta)' }}
                    >
                      {call.score}
                    </span>
                    <span className={styles.callMeta}>{call.duration}</span>
                    <div className={styles.outcomeCell}>
                      <span className={`${styles.pill} ${
                        (call.outcomePill as string) === 'enrolled' ? styles.pillEnrolled :
                        (call.outcomePill as string) === 'missed' ? styles.pillMissed :
                        (call.outcomePill as string) === 'incomplete' ? styles.pillIncomplete :
                        styles.pillNeutral
                      }`}>
                        {call.outcome}
                      </span>
                      <span className={styles.outcomeNote}>{call.difficulty} difficulty</span>
                    </div>
                    <span className={styles.callType}>{call.callType}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {callsOpen && (
            <div className={styles.callTableFooter}>
              <span>3 calls reviewed</span>
              <span>Period avg: {weekAvg}/100</span>
              <span>0 enrolled · 2 missed opportunity · 1 correct no-sale</span>
            </div>
          )}
        </motion.section>

        {/* ── What You Did Well ── */}
        <motion.section className={styles.section} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ ...SPRING, delay: 0.2 }}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.priorityList}>
            <div className={`${styles.priorityCard} ${styles.priority_medium}`}>
              <div className={styles.priorityHeader}>
                <span className={styles.priorityTitle}>D-SNP Misplacement Diagnosed in Under 6 Minutes</span>
              </div>
              <p className={styles.priorityDetail}>
                On the Deloris call, you pulled up her account and spotted that a Medicaid Level 1 consumer was sitting in a C-SNP instead of a D-SNP at 5:44 — before she asked. That's a skilled, high-value diagnostic move. Most agents miss it entirely. You used it to frame the entire plan comparison correctly.
              </p>
            </div>
            <div className={`${styles.priorityCard} ${styles.priority_medium}`}>
              <div className={styles.priorityHeader}>
                <span className={styles.priorityTitle}>Correct No-Sale — Protected Barbara Over the Commission</span>
              </div>
              <p className={styles.priorityDetail}>
                At 9:33 on Barbara's call, you said "I don't want to touch it because of your situation with your heart problem" — and you meant it. Barbara was days away from open heart surgery. You didn't touch the plan. You introduced C-SNP as a post-recovery option, secured text permission, and left the door open. Not every agent has that discipline. That's the call a professional makes.
              </p>
            </div>
            <div className={`${styles.priorityCard} ${styles.priority_medium}`}>
              <div className={styles.priorityHeader}>
                <span className={styles.priorityTitle}>Compliance Execution — Clean on Every Call</span>
              </div>
              <p className={styles.priorityDetail}>
                TPMO, SOA, recorded line, callback confirmation, decision-maker check, nursing home check — all three calls. In the correct sequence. Every time. That's the professional foundation everything else builds on, and you never skip it.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ── What to Work On ── */}
        <motion.section className={styles.section} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ ...SPRING, delay: 0.22 }}>
          <h2 className={styles.sectionTitle}>What to Work On</h2>
          <div className={styles.workOnList}>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>1</span>
              <div>
                <div className={styles.workOnTitle}>Close on the Signal — Not Two Minutes Later</div>
                <p className={styles.workOnDetail}>
                  On the Deloris call, she told you twice she was going back to United — at 7:01 and 15:14. Both times you said "mm-hmm" and kept going. By the time you attempted a close at 17:02, she had cooled. The rule: when a consumer says "eventually" or "probably going to," your next words are a close. Not more benefits. Not more research. "Then let's make eventually today. What's your date of birth?"
                </p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>2</span>
              <div>
                <div className={styles.workOnTitle}>Deploy Client Gold — Stop When They Give It to You</div>
                <p className={styles.workOnDetail}>
                  Deloris told you groceries were expensive at 9:18. Karen described cardiac surgery, knee replacement, and dentures at 8:07. Both times you heard it and moved on. These are the moments your entire pitch is handed to you. Stop. Reflect it back. "Deloris, you just said groceries are expensive — that's exactly why this matters. That $99 difference is $1,188 a year back in your grocery budget." Karen: "You just told me your heart, your knee, your teeth — this plan has $3,000 dental and it's built for someone in your exact situation."
                </p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>3</span>
              <div>
                <div className={styles.workOnTitle}>Complete the Math — Annualize, Then Humanize</div>
                <p className={styles.workOnDetail}>
                  You said "$99 difference" and stopped. That's Step 1. Step 2 is "$99/month is $1,188/year." Step 3 is "on a fixed income, that's real grocery money — almost two months of groceries." Abstract math doesn't close sales. Humanized math does. Never leave a benefit number without connecting it to something they already told you it means to their life.
                </p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>4</span>
              <div>
                <div className={styles.workOnTitle}>Name the SEP Window — Create Urgency</div>
                <p className={styles.workOnDetail}>
                  On Deloris: you identified the INT SEP but never named it. On Barbara: you identified C-SNP eligibility but never said "CSN SEP — year-round window that doesn't expire." When consumers don't know they have an enrollment window open right now, they default to waiting for October. Name the SEP, make it concrete: "Because of your Medicaid, your window is open every month of the year. We can do this today."
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── Report History ── */}
        <motion.section className={styles.reportHistory} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ ...SPRING, delay: 0.24 }}>
          <h2 className={styles.sectionTitle}>Report History</h2>
          <div className={styles.reportHistoryList}>
            <div className={`${styles.reportHistoryEntry} ${styles.reportHistoryEntryActive}`}>
              <div className={styles.reportHistoryLeft}>
                <span className={styles.reportHistoryType}>Mid-Week Report</span>
                <span className={styles.reportHistoryTitle}>Week of Apr 20–22 &nbsp;·&nbsp; First period tracked — 4 sales · $113 CPA</span>
              </div>
              <div className={styles.reportHistoryRight}>
                <span className={styles.reportHistoryScore}>Avg 45/100</span>
                <span className={styles.reportHistoryDate}>Apr 22, 2026</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── Footer ── */}
        <footer className={styles.footer}>
          <p>Certainty System &nbsp;·&nbsp; Michael Fernandez &nbsp;·&nbsp; Updated April 22, 2026</p>
          <p style={{ marginTop: 4 }}>certainty.vercel.app/agents/michael-fernandez</p>
        </footer>

      </div>
    </PageShell>
  )
}
