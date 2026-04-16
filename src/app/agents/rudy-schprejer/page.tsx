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
]

const patterns = [
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
  { title: 'Weekly Brief — April 14–15', type: 'Weekly Brief', date: 'Apr 16, 2026', score: '44 / 100', active: true },
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
          <p className={styles.updatedAt}>Updated April 16 · 9 calls reviewed (Tue–Wed)</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(44) }}>44</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>Tue–Wed · 9 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>9</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 14–15, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>2</span>
            <span className={styles.scoreLabel}>Correct No-Sales</span>
            <span className={styles.scoreRange}>2 Missed · 5 Incomplete</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)' }}>RC1</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Exits when consumer shows comfort</span>
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p>These are the calls we pulled this week where the conversation was fully alive — engaged consumers who stayed on the line long enough for real discovery work. What we&apos;re working through is what happened at the moments where the close was right there and where it went a different direction.</p>
            <p><strong>What&apos;s working:</strong> your instincts for finding the right product are genuine. On the Eric Warringer call you heard "I just moved" in passing, stopped immediately, confirmed the county change, and correctly identified the MOV enrollment window — two minutes into a call where the consumer had already said he didn&apos;t want to change anything. On the Bernard Brady call you caught a cardiologist mention mid-discovery and asked "why didn&apos;t they put you on a chronic plan?" — a question most agents never think to ask. Those are real skills and they showed up consistently across the week.</p>
            <p><strong>What&apos;s costing you:</strong> you found the right plan on both the Bernard Brady and Eric Warringer calls, built a complete case, and then exited the moment the consumer showed comfort. Neither "I\'m pretty well situated" nor "let me think about it" is a no. Both of those calls were one reframe away from yes — and you already had the language. The instinct to find the money is there. The final turn — asking for the enrollment — is what&apos;s missing.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a consumer sounds comfortable or hesitant, the move is to anchor them back to the reason they picked up the phone. Take them back to their original reason &mdash; &ldquo;You called me today about extra money. I found $5,880 a year. Let&apos;s finish this&rdquo; &mdash; and keep the close alive. Comfort isn&apos;t a no; it&apos;s a consumer who hasn&apos;t felt the number yet. Bring them back to why they called, assume they&apos;re saying yes, and finish it.</p>
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
            <span>Correct No-Sales: <strong>2 of 9</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>The strongest individual moment of the week came on the Jimmy Presnel call at 2:38. Jimmy hesitated on giving his Medicare number — "I don&apos;t know about giving this out over somebody I don&apos;t know" — and you handled it without flinching. You gave him context, tied it to the CMS enrollment center framework, explained clearly that you cannot change anything without his consent, and converted the hesitation without pressure. He provided his MBI immediately. That is a textbook trust recovery and most agents fumble it. Study that moment.</p>
            <p>Your MOV SEP detection on Eric Warringer and your cardiologist pivot on Bernard Brady both showed genuine product knowledge working in real time. On Lily Wray, you recognized a brand-loyal UHC consumer early, ran the math correctly, and called the correct no-sale when she gave you a definitive no. On Brenda, a misdial caller with no intent, you released cleanly without manipulation. Knowing when to stop is a real skill — you had it on both calls. The work is applying that same judgment to the close: recognizing when a consumer is ready and finishing it.</p>
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
