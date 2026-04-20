'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Weekly Brief: April 14–15, 2026 ─────────────────────────────────────────

const callsByDate = [
  {
    date: 'Tuesday, April 14',
    calls: [
      { consumer: 'Anna', duration: '5:33', score: 52, outcome: 'INCOMPLETE', outcomeNote: 'Discovery done — no presentation', type: 'Inbound — Missing Medicare Card', href: '/agents/rudy-schprejer/calls/anna' },
      { consumer: 'Brenda', duration: '3:33', score: 47, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'Misdial / Wrong Intent', href: '/agents/rudy-schprejer/calls/brenda' },
      { consumer: 'Jill', duration: '3:17', score: 47, outcome: 'INCOMPLETE', outcomeNote: 'Discovery done — no presentation', type: 'The Benefit Shopper', href: '/agents/rudy-schprejer/calls/jill' },
      { consumer: 'Jimmy D. Presnel', duration: '30:09', score: 48, outcome: 'INCOMPLETE', outcomeNote: 'Stuck in research — never transitioned', type: 'The Money Caller', href: '/agents/rudy-schprejer/calls/jimmy-d-presnel' },
      { consumer: 'Kathy Stokely', duration: '16:04', score: 38, outcome: 'INCOMPLETE', outcomeNote: 'Discovery done — close not attempted', type: 'The Benefit Shopper', href: '/agents/rudy-schprejer/calls/kathy-stokely' },
      { consumer: 'Lily Wray', duration: '13:22', score: 61, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'The Brand Loyalist', href: '/agents/rudy-schprejer/calls/lily-wray' },
    ],
  },
  {
    date: 'Wednesday, April 15',
    calls: [
      { consumer: 'Bernard Brady', duration: '17:17', score: 42, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'The Money Caller', href: '/agents/rudy-schprejer/calls/bernard-brady' },
      { consumer: 'Christopher', duration: '7:33', score: 14, outcome: 'INCOMPLETE', outcomeNote: 'Consumer disconnected', type: 'The Money Caller', href: '/agents/rudy-schprejer/calls/christopher-unknown' },
      { consumer: 'Eric Warringer', duration: '22:04', score: 46, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'The Money Caller', href: '/agents/rudy-schprejer/calls/eric-warringer' },
    ],
  },
  {
    date: 'Thursday, April 17',
    calls: [
      { consumer: 'Faye Bailey', duration: '19:57', score: 42, outcome: 'MISSED OPPORTUNITY', outcomeNote: 'INT SEP live — directed to AEP instead of enrolling', type: 'Dual-Eligible / Resistant Switcher', href: '/agents/rudy-schprejer/calls/faye-bailey' },
    ],
  },
]

const patterns = [
  {
    title: 'When the system flags INT SEP — that is the window right now, not October',
    rc: 'RC6',
    urgency: 'critical' as const,
    body: 'On the Faye Bailey call, the system flagged at 6:27 that she was eligible for a D-SNP through an INT Special Enrollment Period — confirmed Medicaid, verified dual eligibility. Your response was to tell her to call back between October and December. That is a direct surrender of a live enrollment window. The INT SEP is open any month for consumers with both Medicare and Medicaid. When you see that flag, the script is: "Mrs. Bailey, because you have both Medicare and Medicaid, you have a special enrollment period that is available to you right now — today. You do not have to wait for open enrollment. Let me start the application." That sentence is the difference between an enrollment and a lead release.',
    rule: 'INT SEP = open any month for dual-eligible consumers. When the system flags it, invoke it immediately — never defer to AEP.',
    callRef: 'Faye Bailey at 6:27 — system flags INT SEP eligibility. Agent responds at 7:03: "Between October and December, you always want to call us back." Consumer was enrollable at that moment.',
    moveLabel: 'System flags INT SEP — invoke it immediately:',
    move: '"Mrs. Bailey, what I\'m seeing here is that because you have both Medicare and Medicaid, you qualify for a Special Enrollment Period that\'s open right now — today. You don\'t have to wait until October. This is your window. Let me start the application and get your new benefits started May 1st."',
  },
  {
    title: 'Comfort from the consumer is not the end — it is the cue to loop back',
    rc: 'RC1',
    urgency: 'critical' as const,
    body: 'When a consumer says "I\'m pretty well situated" or "let me think about it," that is a soft objection — not a hard no. It dissolves with one reframe anchored to the exact words they used when they called. Bernard called about extra money. He said "that\'d be nice" about $490 a month — six seconds before you ended the call. Eric told you at 9:21 he wanted the 5-star plan, had his Medicare card on the end table, and called you "brother." Both of those were open doors. Neither got a reframe.',
    rule: 'When a consumer expresses comfort, take them back to why they called. Their words are your close.',
    callRef: 'Bernard Brady said "that\'d be nice" about $490 a month at 15:16. Six seconds later: "Then why are we talking, sir?" The call ended. Bernard had called about extra money. You had found it.',
    moveLabel: 'Consumer says they\'re comfortable — anchor to their original call reason.',
    move: '"Bernie, I hear you — and I believe you when you say you\'re comfortable. But you called me today about extra money. You told me that at the start. I found it. The $490 plan doesn\'t change your doctors or your coverage — it just makes your Social Security check $490 heavier every month. You said it\'d be nice. Let\'s make it happen."',
  },
  {
    title: 'The math has three steps — you\'re consistently stopping at step one',
    rc: 'RC3',
    urgency: 'high' as const,
    body: 'Comparing monthly figures is step one. Annualizing is step two. Connecting the annual number to something the consumer told you about their life is step three — and it\'s the only step that actually moves someone. "$263 a month" is information. "$3,156 a year — nearly a quarter of your total income back in your pocket" is a decision. You presented Eric\'s giveback as a raw number. You presented Bernie\'s $490 chronic plan and never annualized it. Both closes lived in step three. Neither got there.',
    rule: null,
    callRef: 'Eric told you at the start of the call that his total monthly income was $1,017. A $263/month giveback is 26% of his income — $3,156 a year. That sentence was never said.',
    moveLabel: 'Monthly benefit stated — annualize and connect to their life.',
    move: '"Eric, you told me you\'re bringing in $1,017 a month. Devoted puts $263 back into your Social Security every month — that\'s $3,156 a year. Almost 25% of your income, back in your pocket. I don\'t know anyone on disability who turns that down."',
  },
  {
    title: 'Tangents reset the energy right before the close',
    rc: 'RC1',
    urgency: 'medium' as const,
    body: 'Rapport is a tool, not a destination. On the Eric Warringer call, three conversational detours — the knee story, the Stuttgart conversation, and a full poem recital mid-comparison — consumed roughly 3.5 minutes of a 22-minute call. Eric told you he wanted the 5-star plan at 9:21. After that moment, every tangent moved the call away from the close instead of toward it. Redirecting with warmth keeps the relationship and keeps the momentum: "I love that — now let\'s get you taken care of."',
    rule: null,
    callRef: 'Eric said he wanted the 5-star plan at 9:21. The poem recital at 16:00 completely reset the energy from business to casual right before the close attempt. The call ended without an enrollment.',
    moveLabel: 'Rapport is established — transition back to business.',
    move: '"I love that, Eric — you know what, let\'s get you locked into that 5-star plan so you\'re covered while you\'re getting settled in the new place. Your card is right there. This takes five minutes. Ready?"',
  },
]

const pastReports = [
  { title: 'Weekly Brief — April 14–17', type: 'Weekly Brief', date: 'Apr 20, 2026', score: '44 / 100', active: true },
  { title: 'Weekly Brief — April 14–15', type: 'Weekly Brief', date: 'Apr 16, 2026', score: '44 / 100', active: false },
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

export default function RudySchprejerPage() {
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
          <h1 className={styles.agentName}>Rudy Schprejer</h1>
          <p className={styles.period}>Week of April 13–17, 2026</p>
          <p className={styles.updatedAt}>Updated April 20 · 10 calls reviewed (Tue–Thu)</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(44) }}>44</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>Tue–Thu · 10 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>10</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 14–17, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>2</span>
            <span className={styles.scoreLabel}>Correct No-Sales</span>
            <span className={styles.scoreRange}>3 Missed · 5 Incomplete</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)' }}>RC1</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Exits when consumer shows comfort</span>
          </div>
        </motion.div>

        {/* ── Platform Numbers ── */}
        <motion.div style={{ marginBottom: '48px' }} {...SPRING}>
          <h2 className={styles.sectionTitle}>Platform Numbers</h2>
          <div className={styles.scorecardRow}>
            <div className={styles.scoreCard}>
              <span className={styles.scoreValue}>8</span>
              <span className={styles.scoreLabel}>Sales — Apr 13–17</span>
              <span className={styles.scoreRange}>7.48% conversion</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, marginTop: 4, color: 'var(--sage-dark)' }}>
                ↑ from 5 (7.04%)
              </span>
            </div>
            <div className={styles.scoreCard}>
              <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>$183</span>
              <span className={styles.scoreLabel}>CPA — Apr 13–17</span>
              <span className={styles.scoreRange}>Cost per sale</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, marginTop: 4, color: 'var(--sage-dark)' }}>
                ↓ from $185
              </span>
            </div>
            <div className={styles.scoreCard}>
              <span className={styles.scoreValue}>107</span>
              <span className={styles.scoreLabel}>Total Calls — Apr 13–17</span>
              <span className={styles.scoreRange}>78 billable</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--ink-60)', marginTop: 4 }}>
                Prior week: 71 calls
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p>Ten calls this week — Tuesday through Thursday. The range shows where the product knowledge is working and where the close is breaking down at the last step.</p>
            <p><strong>What&apos;s working:</strong> your instincts for finding the right product are genuine. On Eric Warringer you heard &ldquo;I just moved&rdquo; in passing, stopped, confirmed the county change, and correctly identified the MOV enrollment window. On Bernard Brady you caught a cardiologist mention mid-discovery and asked &ldquo;why didn&apos;t they put you on a chronic plan?&rdquo; — a question most agents never think to ask. On Faye Bailey you built a thorough plan comparison, correctly addressed the U-Card objection with the SSOA giveback explanation, and the car lease analogy you used at 14:14 was a genuinely effective reframe for a resistant consumer. These are real skills.</p>
            <p><strong>What&apos;s costing you:</strong> on the Faye Bailey call, the system flagged a live INT SEP at the 6-minute mark — dual-eligible, verified Medicaid, open any month. You told her to call back in October. That was a surrendered enrollment window. On Bernard Brady and Eric Warringer, you found the right plan, built the complete case, and exited when the consumer said &ldquo;I&apos;m comfortable.&rdquo; Neither of those is a no. The pattern across all three calls is the same: you build the case fully and then stop one step short of asking for the enrollment.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>Two things to lock in going forward: first, when the system flags INT SEP on a dual-eligible consumer, that is a live enrollment window &mdash; invoke it immediately, never defer to AEP. Second, when you have built the full case and a consumer says they are comfortable or want to think about it, the response is to anchor back to why they called &mdash; &ldquo;You called me today about extra money. I found it. Let&apos;s lock this in right now.&rdquo; Build the case. State the close. Do not wait for the consumer to volunteer an enrollment request.</p>
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
            <span>Correct No-Sales: <strong>2 of 10</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>The strongest individual moment of the week came on the Jimmy Presnel call at 2:38. Jimmy hesitated on giving his Medicare number — &ldquo;I don&apos;t know about giving this out over somebody I don&apos;t know&rdquo; — and you handled it without flinching. You gave him context, tied it to the CMS enrollment center framework, explained clearly that you cannot change anything without his consent, and converted the hesitation without pressure. He provided his MBI immediately. That is a textbook trust recovery and most agents fumble it.</p>
            <p>On the Faye Bailey call, the car lease analogy you used at 14:14 was a genuinely effective reframe: &ldquo;You lease the same car for three years — if you lease new you get more miles, more options, better gas mileage.&rdquo; That is the kind of concrete, accessible frame that gets through to a resistant consumer. You also correctly addressed the U-Card objection — explaining that $263 added to Social Security is more flexible than a restricted-use card was exactly the right answer. The product knowledge and analogy work on that call were real. The SEP and close execution are what cost it.</p>
            <p>Your MOV SEP detection on Eric Warringer and your cardiologist pivot on Bernard Brady both showed genuine instincts working in real time. On Lily Wray and Brenda, you recognized the correct exits and made them cleanly. Knowing when to stop is a real skill. The work is applying that same judgment at the close: recognizing when a consumer is ready and finishing it.</p>
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
                <p className={styles.workOnTitle}>Comfort is a question, not a door closing</p>
                <p className={styles.workOnDetail}>When a consumer says "I&apos;m comfortable" or "let me think about it," the answer is to take them back to why they called. Bernard called about extra money. Eric called about a grocery card and told you he wanted the 5-star plan. Both of those statements were sitting unused at the moment they objected. Use them: &ldquo;You told me at the start of this call you wanted extra money. I found it. Let&apos;s finish this.&rdquo;</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>Annualize every number before the close</p>
                <p className={styles.workOnDetail}>After any monthly figure, say the annual number out loud and connect it to the consumer&apos;s situation. &ldquo;$263 a month — that&apos;s $3,156 a year. For someone on $1,017 a month, that&apos;s nearly 25% of your income back.&rdquo; Same for Bernie: &ldquo;$490 a month is $5,880 a year — that&apos;s what you called about.&rdquo; The annual number with a connection is the close. The monthly number alone is information.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>When rapport is established, redirect to business</p>
                <p className={styles.workOnDetail}>After Eric said he wanted the 5-star plan at 9:21, the call needed to stay in business mode. The redirect with warmth: &ldquo;I love that — now let&apos;s get you taken care of.&rdquo; Rapport is the setup. The enrollment is the point. When a medication lookup runs past two minutes, deploy the bypass: &ldquo;I&apos;m going to flag this for our pharmacist team — what&apos;s your next medication?&rdquo;</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>04</span>
              <div>
                <p className={styles.workOnTitle}>Know your SEP codes — INT is open any month for dual-eligible consumers</p>
                <p className={styles.workOnDetail}>When the system flags INT SEP eligibility on a dual-eligible consumer, that window is open right now — not in October. The script: &ldquo;Because you have both Medicare and Medicaid, you have a Special Enrollment Period that&apos;s available to you any month of the year. You don&apos;t have to wait for open enrollment. Let me start the application.&rdquo; Faye Bailey had a live enrollment window. Telling her to call back in October surrendered it completely.</p>
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
          <p>The Certainty System · Rudy Schprejer · Week of April 13–17, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC3 · MOV SEP · C-SNP Signal · Annualization · Close Recovery</p>
        </div>

      </div>
    </PageShell>
  )
}
