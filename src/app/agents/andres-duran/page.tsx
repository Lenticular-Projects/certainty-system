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
      { consumer: 'Patricia Kendrick', duration: '18:01', score: 57, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'Loyal UHC — Informed No', href: '/agents/andres-duran/calls/patricia-kendrick' },
      { consumer: 'Robin Weston', duration: '25:40', score: 79, outcome: 'ENROLLED', outcomeNote: null, type: 'MCD SEP — Medicaid Loss', href: '/agents/andres-duran/calls/robin-weston' },
    ],
  },
  {
    date: 'Tuesday, April 14',
    calls: [
      { consumer: 'Robert Nalem', duration: '3:49', score: 22, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'The Confused Caller', href: '/agents/andres-duran/calls/robert-nalem' },
      { consumer: 'Sylvia Stripling', duration: '22:37', score: 55, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Brand-Loyal UHC — Surrendered Close', href: '/agents/andres-duran/calls/sylvia-stripling' },
    ],
  },
  {
    date: 'Wednesday, April 15',
    calls: [
      { consumer: 'Thomas', duration: '1:55', score: 58, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'TV Ad — Unverifiable', href: '/agents/andres-duran/calls/thomas' },
      { consumer: 'William Kosar', duration: '27:38', score: 76, outcome: 'ENROLLED', outcomeNote: null, type: 'The Food Card Caller', href: '/agents/andres-duran/calls/william-kosar' },
    ],
  },
  {
    date: 'Thursday, April 16',
    calls: [
      { consumer: 'Linda Kellogg', duration: '3:10', score: 58, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'Privacy-Concerned Consumer', href: '/agents/andres-duran/calls/linda-kellogg' },
    ],
  },
]

const patterns = [
  {
    title: 'Close window opens — presenting continues instead of closing',
    rc: 'RC1',
    urgency: 'critical' as const,
    body: 'On both enrolled calls this week and on the Sylvia Stripling call, the close window opened before you acted on it. Robin Weston enrolled cleanly once the MCD SEP was named. William Kosar enrolled once the $160/month giveback was clear. Sylvia\'s "Oh my God" at 16:24 was the exact same signal — but the presentation kept going and the resistance came back. The gap between your enrolled calls and your missed calls is the same gap: stop presenting the moment the consumer reacts emotionally to the math.',
    rule: 'Emotional reaction = close signal. The presentation is over. Move directly to enrollment.',
    callRef: 'Sylvia said "Oh my God" at 16:24 after the $230/month delta was delivered. Three more minutes of presentation followed. By the time you asked, she had re-anchored to UHC loyalty.',
    moveLabel: 'Stop presenting. Go to enrollment.',
    move: '"Sylvia — exactly. That\'s why I\'m calling you today. Your doctor stays, your copays stay at zero, and you stop leaving $230 on the table every month. Let\'s get that locked in right now. Can I confirm your date of birth?"',
  },
  {
    title: 'Surrendered close after consumer pushback',
    rc: 'RC2',
    urgency: 'high' as const,
    body: 'When Sylvia said "You\'re pushing me" at 20:52, the close attempt stopped entirely. You ended with "You\'re not going to call me back. But okay, have a good one." This is the full surrender — after building the case for 20 minutes with a Medicaid consumer whose doctor was confirmed in network. The call was closeable. The consumer was a gift lead who called in voluntarily. A single reframe at the right moment keeps this call alive.',
    rule: null,
    callRef: 'At 22:18, Andres said "You\'re not going to call me back. But okay, have a good one." That is not a close — it is a concession that confirmed her resistance was correct.',
    moveLabel: 'Acknowledge and redirect — never concede.',
    move: '"I hear you, Sylvia — I\'m not trying to push. I want to make sure you have the information before we hang up, because this window closes. You called about improving what you have. This plan improves what you have by $230 a month and your doctor doesn\'t change. If you want to sleep on it, that\'s fair — but let me at least show you the plan so you have something specific to think about. Thirty more seconds."',
  },
  {
    title: 'Confusion and plan change — not treated as a live investigation',
    rc: 'RC6',
    urgency: 'medium' as const,
    body: 'Robert Nalem called about the savings card and said "I want to stay with Cigna." When you pulled up his record and found he had already transitioned to Humana on April 1st, he said "I did?" — genuine shock. That reaction was a DIF SEP trigger and a live Client Gold moment. A consumer who didn\'t know his plan changed may have a 3-month enrollment window. You relayed the information and went quiet while he disengaged.',
    rule: null,
    callRef: 'Robert said "I did?" at 3:31. Eighteen seconds later he said "I better check with my daughter. Thank you." The call ended. The original savings card question was never answered.',
    moveLabel: 'Turn confusion into an investigation.',
    move: '"Robert, yes — that change may have happened without you choosing it, which means you may have a special window right now to select a plan that actually works for you. Did you pick Humana, or did this happen on its own? Because if it happened without your choice, we should look at your options — including that food card you called about. Let me take two minutes."',
  },
]

const pastReports = [
  { title: 'Weekly Brief — April 14', type: 'Weekly Brief', date: 'Apr 16, 2026', score: '38 / 100', active: false },
  { title: 'Weekly Brief — April 13–17', type: 'Weekly Brief', date: 'Apr 20, 2026', score: '58 / 100', active: true },
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

export default function AndresDuranPage() {
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
          <h1 className={styles.agentName}>Andres Duran</h1>
          <p className={styles.period}>Week of April 13–17, 2026</p>
          <p className={styles.updatedAt}>Updated April 20 · 7 calls reviewed</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(58) }}>58</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>7 calls · Mon–Thu</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>7</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 13–16, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>2</span>
            <span className={styles.scoreLabel}>Enrolled</span>
            <span className={styles.scoreRange}>2 Missed · 3 Correct No-Sale</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)' }}>RC1</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Close window missed at peak emotion</span>
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
              { metric: 'Sales',       prior: '2',    current: '15',     delta: '+13',      dir: 'up' },
              { metric: 'Conversion',  prior: '2.08%', current: '10.64%', delta: '+8.56pp', dir: 'up' },
              { metric: 'CPA',         prior: '$649', current: '$128',   delta: '−$521',    dir: 'up' },
              { metric: 'Total Calls', prior: '96',   current: '141',    delta: '+45',      dir: 'neutral' },
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
            <p>Seven calls this week — two enrollments, two missed opportunities, three correct no-sales. The week tells two stories in parallel: the Robin Weston and William Kosar enrollments show exactly what you&apos;re capable of when you move at the right moment. The Sylvia Stripling call shows what happens when you don&apos;t.</p>
            <p><strong>What&apos;s working:</strong> the Robin Weston enrollment was sharp and precise — you caught the Medicaid loss in real time, named the MCD SEP, and closed in under 26 minutes. That&apos;s the kind of signal-reading and SEP execution that separates closers from recorders. William Kosar enrolled on a clean value proposition: $160/month giveback versus $140/quarter, PPO flexibility, $0 premium. The math was simple and you made it simple. Both calls closed because you identified the lever and pulled it.</p>
            <p><strong>What&apos;s costing you:</strong> Sylvia Stripling called in voluntarily with Medicaid, her doctor confirmed in-network, and $230/month on the table. She said &ldquo;Oh my God&rdquo; twice and you kept presenting. At 22:18 you said &ldquo;You&apos;re not going to call me back. But okay, have a good one.&rdquo; That is not a close — it is a surrender. The correction is not finding better leads. It is ending the presentation the moment the consumer reacts to the math and going directly to enrollment.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a consumer reacts to your math &mdash; &ldquo;Oh my God,&rdquo; a long pause, &ldquo;wow&rdquo; &mdash; that is the close signal and the presentation is over. The next sentence is enrollment. &ldquo;Exactly &mdash; let&apos;s get you locked in right now.&rdquo; Every second after that reaction gives the resistance time to return. You proved you can build the case. Now close the moment it lands.</p>
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
            <span>Week Average: <strong>58 / 100</strong></span>
            <span>Enrolled: <strong>2 of 7</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>The Robin Weston enrollment was textbook SEP execution.</strong> You caught Medicaid loss in real time at 3:24, pivoted to MCD SEP framing immediately, confirmed LIS status, verified the doctor in-network, and enrolled Robin in the Aetna Medicare Value Plus HMO at $0 premium — all in under 26 minutes. Most agents don&apos;t recognize the Medicaid-loss signal in real time. You acted on it without hesitation. That&apos;s working knowledge deployed under pressure.</p>
            <p><strong>The William Kosar enrollment shows clean math and clear value positioning.</strong> You benchmarked his current $140/quarter spending card, presented $160/month as a direct upgrade — a 3x improvement deposited into his Social Security — and closed on that single variable. When Kosar said &ldquo;I&apos;m pretty happy with the plans I have now,&rdquo; you turned it into a discovery question: &ldquo;And how much are you getting with them?&rdquo; That one move opened the comparison. The close followed naturally from the math.</p>
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
                <p className={styles.workOnTitle}>Emotional reaction = close signal — move immediately</p>
                <p className={styles.workOnDetail}>When the consumer reacts to your math — any gasp, long pause, or &ldquo;Oh my God&rdquo; — stop presenting. &ldquo;Exactly — let&apos;s get that locked in right now. Can I confirm your date of birth?&rdquo; You have two enrolled calls this week that prove you know how to build the case. The work now is trusting it and closing the moment it lands.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>Never end a call without a committed next step</p>
                <p className={styles.workOnDetail}>Robert said &ldquo;I better check with my daughter&rdquo; — that is a scheduling opportunity, not a goodbye. &ldquo;Of course — what time tomorrow works for both of you? I&apos;ll call you together so she can hear it straight from me.&rdquo; Even an unenrolled call needs to end with a specific callback time. Zero next steps means the lead is gone.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>Answer the consumer&apos;s actual question first</p>
                <p className={styles.workOnDetail}>Patricia Kendrick&apos;s first words were &ldquo;is there anything newer on UnitedHealthcare?&rdquo; You went to Devoted. Her UHC food card was $230/month — Devoted&apos;s was $185. When you pitch a consumer less than they have without answering their question first, you lose credibility on everything that follows. Start with their carrier, then introduce alternatives if UHC can&apos;t beat it.</p>
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
          <p>The Certainty System · Andres Duran · Week of April 13–17, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC2 · RC6 · Close Window · MCD SEP · DIF SEP · Loyalty Objection</p>
        </div>

      </div>
    </PageShell>
  )
}
