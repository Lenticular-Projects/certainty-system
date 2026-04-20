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
      { consumer: 'Christine Poore', duration: '16:34', score: 65, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'Network Incompatibility — Correct No-Sale', href: '/agents/lawrence-morris/calls/christine-poore' },
      { consumer: 'David Harrington', duration: '21:58', score: 48, outcome: 'INCOMPLETE', outcomeNote: 'Discovery done — close not attempted', type: 'Medication Barrier — Callback Default', href: '/agents/lawrence-morris/calls/david-harrington' },
    ],
  },
  {
    date: 'Wednesday, April 15',
    calls: [
      { consumer: 'Josephine Powell', duration: '7:05', score: 65, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'Unverifiable — No Medicare Card Available', href: '/agents/lawrence-morris/calls/josephine-powell' },
    ],
  },
  {
    date: 'Thursday, April 16',
    calls: [
      { consumer: 'Paula Johnston', duration: '38:23', score: 79, outcome: 'ENROLLED', outcomeNote: null, type: 'C-SNP — COPD/Cardiac, Give-Back Upgrade', href: '/agents/lawrence-morris/calls/paula-johnston' },
      { consumer: 'Unknown Consumer', duration: '2:50', score: 68, outcome: 'CORRECT NO-SALE', outcomeNote: 'Family emergency disconnect', type: 'Emergency Disconnect — D-SNP Profile', href: '/agents/lawrence-morris/calls/unknown-consumer-2m50s' },
    ],
  },
  {
    date: 'Friday, April 17',
    calls: [
      { consumer: 'Larry Bankston', duration: '35:54', score: 58, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'Benefit Optimizer — Survival Anchor Blocked', href: '/agents/lawrence-morris/calls/larry-bankston' },
    ],
  },
]

const patterns = [
  {
    title: 'Correct no-sale, future enrollment not locked in',
    rc: 'RC1',
    urgency: 'critical' as const,
    body: 'When you identify a genuine incompatibility and call the no-sale correctly, that\'s not the end of the relationship — it\'s the beginning of the next one. Christine\'s network issue will resolve. Open enrollment will come. The agents who win in the fall are the ones who planted the seed in April. A correct no-sale without a future hook is a lead you released.',
    rule: 'Before you hang up on any correct no-sale, plant the next enrollment seed. One sentence. Do it every time.',
    callRef: 'On the Christine Poore call, you identified the network incompatibility correctly and ended clean — but the call closed without a follow-up commitment. Christine is a warm contact you may never reach again.',
    moveLabel: 'Before you let a correct no-sale go:',
    move: '"Christine, before I let you go — when the network issue resolves or open enrollment starts, I want to be the one who calls you. Can I get your best number and set a reminder for the fall?"',
  },
  {
    title: 'Monthly figure stated — annual impact never made real',
    rc: 'RC3',
    urgency: 'critical' as const,
    body: 'Monthly numbers are forgettable. When someone is deciding whether to switch, a $30/month difference doesn\'t feel like a decision — it feels like noise. The same number said as $360 a year is a car payment. Paula Johnston was getting a $184.70/month give-back — that\'s $2,216 a year going back on her Social Security check. You never said that number. Larry Bankston had a $267 food card versus a $100 food card, but Humana had 60 free rides and $4,000 dental — the annual comparison was never totaled. The math was there on every call. It just never landed.',
    rule: null,
    callRef: 'Paula Johnston (Apr 16): $184.70/month give-back never stated as $2,216/year. David Harrington (Apr 14): $30/month difference never stated as $360/year. Larry Bankston (Apr 17): two-plan comparison never annualized.',
    moveLabel: 'After every monthly figure — state the year:',
    move: '"Paula, $184.70 a month going back on your Social Security — that\'s over $2,200 a year. Compared to the $49 food card, that\'s almost $1,700 more every year, just on those two options. And you still get the OTC card on top of that."',
  },
  {
    title: 'Survival-anchor objection — acknowledged but not reframed',
    rc: 'RC2',
    urgency: 'high' as const,
    body: 'When a consumer names a specific benefit as a survival mechanism — not a preference, a survival mechanism — the correct move is to reframe the full annual picture, not just accept the anchor. Larry Bankston said his $267 food card meant a lot to him at 63. He was right. But the Humana package included 60 free rides, $4,000 dental, and $100 food card — the total annual value of that package exceeded what he was protecting, once you annualize all of it. You heard the emotion correctly. You needed to match it with math.',
    rule: null,
    callRef: 'Larry Bankston (Apr 17) at 29:23: "I don\'t want to change over right now... that little $267 in my — for me right now, I\'m 63 years old and that means a lot." Lawrence acknowledged the emotion and let the call end without a full comparative math reframe.',
    moveLabel: 'When the survival anchor comes up:',
    move: '"Larry, I hear you — $267 means a lot, especially right now. Here\'s what I want you to see: on Humana you\'d get $100 food card, but you\'d also get 60 free rides to the doctor. Right now you\'re spending $4.50 a week on the bus — that\'s $234 a year just in bus fare. Plus $4,000 in dental. When I add it all up, Humana puts more money in your hands than you\'re protecting. That\'s the number I want you to take with you."',
  },
]

const pastReports = [
  { title: 'Weekly Brief — April 13–17, 2026', type: 'Weekly Brief', date: 'Apr 20, 2026', score: '64 / 100', active: true },
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

export default function LawrenceMorrisPage() {
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
          <h1 className={styles.agentName}>Lawrence Morris</h1>
          <p className={styles.period}>Week of April 13–17, 2026</p>
          <p className={styles.updatedAt}>Updated April 20 · 6 calls reviewed</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(64) }}>64</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>Apr 14–17 · 6 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>6</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 14–17, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>1</span>
            <span className={styles.scoreLabel}>Enrolled</span>
            <span className={styles.scoreRange}>4 No-Sale · 1 Incomplete</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)' }}>RC3</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Math never annualized</span>
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
              { metric: 'Sales',       prior: '8',    current: '13',     delta: '+5',       dir: 'up' },
              { metric: 'Conversion',  prior: '6.90%', current: '10.83%', delta: '+3.93pp', dir: 'up' },
              { metric: 'CPA',         prior: '$159', current: '$106',   delta: '−$53',     dir: 'up' },
              { metric: 'Total Calls', prior: '116',  current: '120',    delta: '+4',       dir: 'neutral' },
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
            <p>Six calls this week — one enrolled, four correct no-sales, one incomplete. The Paula Johnston call on Thursday is the one to study. The other five had the right instincts but each stalled at a different point on the way to the close.</p>
            <p><strong>What&apos;s working:</strong> Paula Johnston is a complete enrollment. You identified C-SNP eligibility from COPD and two prior heart attacks at 10:23, paused mid-call to find a better plan, and upgraded her from a $49 food card to a $184.70/month Social Security give-back. The &ldquo;I think I found something better for you&rdquo; move is exactly right — you earned that upgrade by staying curious longer than most agents would. Your discovery process is also consistently thorough: every call this week had a complete qualification before any recommendation was made.</p>
            <p><strong>What&apos;s costing you:</strong> the math stops too early on every call. Paula&apos;s give-back was $184.70/month — you never said $2,216 a year. Larry Bankston had a $267 food card you were trying to improve — you never annualized either side of the comparison. David Harrington had a $30 monthly difference — you never said $360 a year. Monthly figures are forgettable. Annual figures are decisions. Every dollar amount you state needs a &ldquo;which is X per year&rdquo; before you move on.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>You identified the right plan on the Paula Johnston call, paused mid-call to find something better, and upgraded her to $2,216 a year on her Social Security check. That instinct to keep looking is real and it shows. The move that makes more of those calls land is saying the annual number out loud before you move on: &ldquo;$184.70 a month &mdash; that&apos;s over $2,200 going back to you every year.&rdquo; Monthly figures are forgettable. Annual figures are decisions. Say the year number. Every time.</p>
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
            <span>Week Average: <strong>64 / 100</strong></span>
            <span>Enrolled: <strong>1 of 6</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Paula Johnston — you found a better plan mid-call and went back for it.</strong> Paula came in for a food card and had COPD plus two prior heart attacks. You caught the C-SNP eligibility at 10:23, presented the $49 food card option, and then paused: &ldquo;Let me check one more — I think there&apos;s a better one for you.&rdquo; You found the Devoted Give-Back PPO at $184.70/month Social Security give-back — almost $1,700 more per year than the food card option. That instinct to keep looking even after you&apos;ve found a valid option is what separates a good call from a great one. You also ran a full compliance read, a health risk assessment survey, got a confirmation number, and gave the Devoted contact number. Complete execution. Score: 79.</p>
            <p><strong>Your discovery is thorough and honest.</strong> Every call this week had a complete qualification — Medicare ID, plan identification, doctor network check, medication review — before any recommendation was made. On Christine Poore you identified a genuine network incompatibility and called the no-sale correctly at 65. On Josephine Powell you handled the SSN refusal without pressure, explained why the Medicare card avoids the need for SSN, and directed her to call back. Consumers remember agents who don&apos;t push them into situations they&apos;re not comfortable with. That integrity builds the relationships that come back in the fall.</p>
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
                <p className={styles.workOnTitle}>Annualize every dollar figure — say the year number out loud</p>
                <p className={styles.workOnDetail}>After every monthly figure, say the annual equivalent before you move on: &ldquo;$184.70 a month — that&apos;s over $2,200 a year going back on your Social Security check.&rdquo; Then compare it: &ldquo;The food card would have been $588 a year. That&apos;s a $1,600 difference.&rdquo; Monthly figures disappear. Annual figures are decisions.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>When they protect a benefit — total the full picture first</p>
                <p className={styles.workOnDetail}>Larry Bankston was protecting his $267 food card. The correct response is to annualize both sides and add the non-cash benefits: &ldquo;Larry, I know $267 matters. Let me show you the full math: 60 free rides is $234 a year in bus fare you stop paying. Four-thousand in dental. And $100 food card. When I add it all up, Humana puts more total value in your hands than what you&apos;re protecting.&rdquo; Let him decide with the real numbers in front of him.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>End every correct no-sale with a fall enrollment hook</p>
                <p className={styles.workOnDetail}>Before you hang up on any correct no-sale: &ldquo;Christine, when your network situation changes or open enrollment starts, I want to be your first call. Can I take down your best number?&rdquo; One sentence. You had four correct no-sales this week — each one is a warm lead for October. Don&apos;t leave them on the table.</p>
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
          <p>The Certainty System · Lawrence Morris · Week of April 13–17, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC2 · RC3 · C-SNP · Give-Back Upgrade · Annualization · No-Sale Pipeline · Paula Johnston: Enrolled</p>
        </div>

      </div>
    </PageShell>
  )
}
