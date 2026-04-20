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
      { consumer: 'Frank Yannis', duration: '18:06', score: 52, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Money Caller / Doctor-Loyal', href: '/agents/rosina-klimoski/calls/frank-yannis' },
      { consumer: 'Mary Lancaster', duration: '13:08', score: 33, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Money Caller', href: '/agents/rosina-klimoski/calls/mary-lancaster' },
      { consumer: 'Robin Hargett', duration: '10:24', score: 58, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'Money Caller / Dual Eligible Review', href: '/agents/rosina-klimoski/calls/robin-hargett' },
      { consumer: 'Unknown Consumer', duration: '3:02', score: 35, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Inbound Buyer', href: '/agents/rosina-klimoski/calls/unknown-consumer-3m02s' },
    ],
  },
  {
    date: 'Tuesday, April 14',
    calls: [
      { consumer: 'Jessie Blakely', duration: '16:33', score: 42, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Motivated Switcher / D-SNP Eligible', href: '/agents/rosina-klimoski/calls/jessie-blakely' },
      { consumer: 'Judith Steding', duration: '4:20', score: 27, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Quick Exit', href: '/agents/rosina-klimoski/calls/judith-steding' },
      { consumer: 'Mr. Kenniskopf', duration: '7:25', score: 42, outcome: 'INCOMPLETE', outcomeNote: 'Discovery done — close not attempted', type: 'Window Shopper', href: '/agents/rosina-klimoski/calls/mr-kenniskopf' },
    ],
  },
  {
    date: 'Wednesday, April 15',
    calls: [
      { consumer: 'Kone Morifing', duration: '32:34', score: 80, outcome: 'ENROLLED', outcomeNote: 'Devoted C-SNP — May 1', type: 'Dual Eligible — Cognitively Impaired — Son Involved', href: '/agents/rosina-klimoski/calls/kone-morifing' },
      { consumer: 'Ralph Alexander', duration: '17:54', score: 65, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'Already on Best Plan — Verified', href: '/agents/rosina-klimoski/calls/ralph-alexander' },
    ],
  },
  {
    date: 'Thursday, April 16',
    calls: [
      { consumer: 'Jean Galette', duration: '15:15', score: 42, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Discovery Done — Exit Accepted', href: '/agents/rosina-klimoski/calls/jean-galette' },
    ],
  },
  {
    date: 'Friday, April 17',
    calls: [
      { consumer: 'Ronald Unknown', duration: '14:00', score: 63, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'Already Enrolled — Correct Redirect', href: '/agents/rosina-klimoski/calls/ronald-unknown' },
    ],
  },
]

const patterns = [
  {
    title: 'You do all the work — then accept the exit when it comes',
    rc: 'RC1',
    urgency: 'critical' as const,
    body: 'The call isn\'t over until you\'ve made one attempt to change the outcome. When a consumer gives you an exit — a brochure request, a transportation concern, a single "I\'m going to pass" — your first response has to be a reframe. Not an apology, not an agreement, not "I do apologize for that." The reframe doesn\'t have to be perfect. It has to happen. On five calls this week, it didn\'t. The Kone Morifing call shows you can hold complex situations and close them — use that same persistence on every call that hits a wall.',
    rule: 'Before any call ends without an enrollment, make one attempt to keep it going. Every time. No exceptions.',
    callRef: 'On the Jessie Blakely call, you had $111 more per month confirmed, a consumer who said "I\'m glad I called" at 11:16, and math that answered her exact problem. At 15:35 she said transportation was a concern. You said "I do apologize for that." The call ended.',
    moveLabel: 'Consumer raises one objection after a strong case — hold your ground.',
    move: '"Jessie — hold on. Before you decide, hear me out for 30 seconds. With this plan, you\'d have $111 more every single month in groceries. That\'s $1,332 more every year. You told me you\'ve been having trouble keeping up with food. Does that change how you\'re thinking about it?"',
  },
  {
    title: 'Monthly numbers need to become annual numbers — every time',
    rc: 'RC3',
    urgency: 'high' as const,
    body: 'You consistently execute Step 1 of the math breakdown — the monthly comparison — and stop. "$111 more per month" is forgettable. "$1,332 more a year for groceries" is the answer to the exact problem Jessie called about. The annual number is what creates urgency. The connection between the annual number and something the consumer said — that\'s the close. You said the $186/month difference on the Kone Morifing call but never said $2,232 a year. That number was the one that would have made the decision feel permanent for Hassan.',
    rule: null,
    callRef: 'On Frank Yannis, you presented OTC as "$200 a quarter" and moved on. On Jessie Blakely, you said "$111 more per month" and moved on. On Kone Morifing, you said "over $100 more" — understating by nearly half. None of these numbers were ever annualized.',
    moveLabel: 'After stating any monthly benefit — annualize immediately.',
    move: '"That\'s $1,332 more a year, Jessie. You told me you\'ve been having trouble keeping up with food. This is $1,332 more a year for groceries. Does that change how you\'re thinking about it?"',
  },
  {
    title: 'Medical signals after a "no" on chronic conditions — follow up anyway',
    rc: 'RC6',
    urgency: 'medium' as const,
    body: 'A consumer who says no to the chronic conditions screen can still reveal a qualifying condition two minutes later. When that happens, stop and ask one follow-up question. That question opens a C-SNP or C-SNP SEP enrollment window that doesn\'t require an annual period. When a consumer mentions they just moved, that\'s a MOV SEP — a year-round window you can walk through on the same call.',
    rule: null,
    callRef: 'Mary Lancaster said "I\'m trying to get me an appointment so I can get back on my blood pressure pills" at 11:08 — after already saying no to chronic conditions. Judith Steding said "I just moved here" at 0:22. Both signals were acknowledged and set aside.',
    moveLabel: 'Consumer mentions a medical condition or recent move — stop and qualify.',
    move: '"Mary, is that something your doctor has diagnosed you with — like hypertension?" / "Judith, when did you move? Were you on a Medicare Advantage plan before you got here?"',
  },
]

const pastReports = [
  { title: 'Weekly Brief — April 13–14 (partial)', type: 'Weekly Brief', date: 'Apr 16, 2026', score: '41 / 100', active: false },
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

export default function RosinaKlimoskiPage() {
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
          <h1 className={styles.agentName}>Rosina Klimoski</h1>
          <p className={styles.period}>Week of April 13–17, 2026</p>
          <p className={styles.updatedAt}>Updated April 20 · 11 calls reviewed (Mon–Fri)</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(49) }}>49</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>Mon–Fri · 11 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>11</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 13–17, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>1</span>
            <span className={styles.scoreLabel}>Enrolled</span>
            <span className={styles.scoreRange}>3 Correct No-Sale · 6 Missed · 1 Incomplete</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)' }}>RC1</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Discovery done — exit accepted without a reframe</span>
          </div>
        </motion.div>

        {/* ── Performance Digest ── */}
        <motion.div className={styles.section} {...SPRING}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid rgba(19,17,16,0.08)' }}>
            <h2 className={styles.sectionTitle} style={{ margin: 0, padding: 0, border: 'none' }}>Performance Digest</h2>
            <span style={{ fontSize: '0.75rem', color: 'var(--ink-60)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Weekly</span>
          </div>
          <div style={{ background: 'rgba(251,248,243,0.82)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.5)', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '12px 20px', background: 'rgba(19,17,16,0.04)', borderBottom: '1px solid rgba(19,17,16,0.08)', gap: '12px' }}>
              {(['Metric', 'Apr 6–10', 'Apr 13–17', 'Change'] as string[]).map(h => (
                <span key={h} style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>{h}</span>
              ))}
            </div>
            {([
              { metric: 'Sales',       prior: '8',     current: '7',     delta: '−1',        dir: 'down' },
              { metric: 'Conversion',  prior: '7.02%', current: '6.09%', delta: '−0.93pp',   dir: 'down' },
              { metric: 'CPA',         prior: '$174',  current: '$215',  delta: '+$41',       dir: 'down' },
              { metric: 'Total Calls', prior: '114',   current: '115',   delta: '+1',         dir: 'neutral' },
            ] as Array<{ metric: string; prior: string; current: string; delta: string; dir: 'up' | 'down' | 'neutral' }>).map((row, i, arr) => (
              <div key={row.metric} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '14px 20px', gap: '12px', alignItems: 'center', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.08)' : 'none' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--ink)' }}>{row.metric}</span>
                <span style={{ fontSize: '0.9375rem', fontVariantNumeric: 'tabular-nums', color: 'var(--ink-60)' }}>{row.prior}</span>
                <span style={{ fontSize: '0.9375rem', fontWeight: 700, fontVariantNumeric: 'tabular-nums', color: 'var(--ink)' }}>{row.current}</span>
                <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: row.dir === 'up' ? 'var(--sage-dark)' : row.dir === 'down' ? 'var(--terracotta)' : 'var(--ink-60)' }}>{row.delta}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p>Eleven calls across five days — one enrollment, three correct no-sales, and a week that showed both what you&apos;re capable of and what&apos;s holding the numbers back. The Kone Morifing call on Wednesday was the standout: a cognitively impaired consumer, his son brought in mid-call, a complex Philadelphia case handled from start to finish with a clean C-SNP enrollment at the end. That call showed real capability. The week also had six missed opportunities where the discovery was done and the close never came.</p>
            <p><strong>What&apos;s working:</strong> the fastest lead recovery of the batch came in the first 20 seconds of Frank Yannis&apos;s call. He said no at 0:11. You said &ldquo;The grocery benefit card?&rdquo; and turned a hang-up into an 18-minute conversation. That instinct is yours. On the Kone Morifing call, when Kone couldn&apos;t remember his doctor&apos;s name, you didn&apos;t push — you asked for his son. When Hassan got on the line, you re-briefed him in three minutes and had him committed. You also correctly identified the C-SNP pathway from &ldquo;I got diabetes&rdquo; in under 10 seconds — that&apos;s expert clinical signal reading. And Robin Hargett: you corrected your own plan comparison at 9:01, told her the truth about the numbers, and called a correct no-sale with a commission on the table. That&apos;s the kind of integrity that makes consumers call back.</p>
            <p><strong>What&apos;s costing you:</strong> on six calls this week, the consumer gave you an exit and you accepted it. Jessie Blakely had $1,332 more a year and said &ldquo;I&apos;m glad I called&rdquo; at 11:16. Frank Yannis had 18 minutes of correct discovery. Jean Galette had discovery done. In every case — when the consumer raised a barrier, you stepped back instead of deploying the number that answered it. One reframe attempt before every call ends. That&apos;s the correction this week.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>You closed Kone Morifing under difficult conditions because you stayed in it when it got complicated. Use that same persistence when a consumer raises a barrier at the end of a call: step into the number instead of stepping back. &ldquo;Before you decide &mdash; this is $1,332 more a year. You told me you&apos;ve been having trouble keeping up with food. Does that change anything?&rdquo; You&apos;ve already done the work. Say the number and let them decide.</p>
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
            <span>Enrolled: <strong>1 of 11</strong> · Correct No-Sales: <strong>3</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>The Kone Morifing enrollment was the best call of the week.</strong> When Kone couldn&apos;t remember his doctor&apos;s name at 10:21, you didn&apos;t push — you asked if his son was available. Hassan joined at 11:21 and you re-briefed him in under three minutes. When he said &ldquo;I got diabetes&rdquo; at 7:51, you connected it to C-SNP eligibility and the $406/month card in under 10 seconds — &ldquo;Because you have the diabetes, you qualify for another plan that&apos;s available to you. Which is $406 every month.&rdquo; That&apos;s the core skill in chronic SNP sales deployed at exactly the right moment. You also correctly disclosed the C-SNP physician verification requirement at 17:49 — a step many agents miss. High-complexity case. Clean enrollment.</p>
            <p>On Robin Hargett, you did something harder. At 9:01 you came back from a hold and corrected your own plan comparison because you had misread the screen. You told Robin the United benefit was actually slightly lower, not higher. Then you told her she was already on the best plan for her situation and walked her off without pushing an enrollment. You prioritized accuracy over momentum on a call where the commission was real. That&apos;s integrity — and consumers remember it.</p>
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
                <p className={styles.workOnTitle}>One reframe attempt before every call ends — no exceptions</p>
                <p className={styles.workOnDetail}>When any consumer gives you an exit — brochure request, transportation concern, &ldquo;I&apos;m going to pass&rdquo; — your first response is a reframe. On Frank Yannis: &ldquo;I wish I could mail you something, but a brochure would just tell you what I already know. You qualify today. Let me get you started so it&apos;s in effect on the first of next month.&rdquo; Practice that sentence until it&apos;s automatic. The Kone Morifing call proved you don&apos;t give up when it gets complicated. Apply that same persistence to the final objection.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>Annualize every number — then connect it to their life</p>
                <p className={styles.workOnDetail}>After any benefit figure, say the annual equivalent and connect it to something the consumer said. &ldquo;$111 more per month — that&apos;s $1,332 more a year. You told me you&apos;re having trouble keeping up with food. This is $1,332 more a year for groceries.&rdquo; You said &ldquo;over $100 more&rdquo; on the Kone Morifing call. The real number was $186 — $2,232 a year. Say the actual number every time.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>Medical signals and move mentions always get a follow-up question</p>
                <p className={styles.workOnDetail}>When a consumer mentions a medical condition — even after they said no to chronic conditions — one follow-up question: &ldquo;Is that something your doctor has diagnosed you with?&rdquo; When a consumer mentions they just moved: &ldquo;When did you move? Were you on a plan before?&rdquo; Those two questions open year-round enrollment windows that have nothing to do with October.</p>
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
          <p>The Certainty System · Rosina Klimoski · Week of April 13–17, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC3 · RC6 · Kone Morifing · C-SNP Match · Annualization · Reframe Attempt · Robin Hargett: Correct No-Sale</p>
        </div>

      </div>
    </PageShell>
  )
}
