'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Weekly Brief: April 14, 2026 ─────────────────────────────────────────────

const callsByDate = [
  {
    date: 'Tuesday, April 14',
    calls: [
      { consumer: 'Nancy Hazelrig', duration: '6:03', score: 51, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'The Grocery Card Caller', href: '/agents/trestan-daniel/calls/nancy-hazelrig' },
      { consumer: 'Susan White', duration: '12:24', score: 47, outcome: 'INCOMPLETE', outcomeNote: 'Consumer ready — handoff killed the enrollment', type: 'The Food Card Caller — Handoff at Close', href: '/agents/trestan-daniel/calls/susan-white' },
      { consumer: 'Unknown Consumer (15m22s)', duration: '15:22', score: 35, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'The Money Caller — INT SEP Unused', href: '/agents/trestan-daniel/calls/unknown-consumer-15m22s' },
    ],
  },
  {
    date: 'Wednesday, April 15',
    calls: [
      { consumer: 'Annie Sellers', duration: '3:00', score: 62, outcome: 'CORRECT NO-SALE', outcomeNote: 'Consumer refused verification — uncloseable', type: 'Hostile SSN Refusal — Correct Exit', href: '/agents/trestan-daniel/calls/annie-sellers' },
      { consumer: 'Georgia Whitehead', duration: '3:00', score: 60, outcome: 'CORRECT NO-SALE', outcomeNote: 'Consumer declined ID method — uncloseable', type: 'Polite SSN Refusal — Professional Close', href: '/agents/trestan-daniel/calls/georgia-whitehead' },
    ],
  },
]

const patterns = [
  {
    title: 'When the consumer says yes — you execute, not transfer',
    rc: 'RC1',
    urgency: 'critical' as const,
    body: 'The close is the moment the call has been building toward. When a consumer gives you a clear green light — "Yes, I\'m ready," a direct agreement to proceed — the only correct response is to begin Phase VI execution immediately. Not a hold. Not a search for someone else. Not a check. You. Right now. Every piece of discovery, every comparison, every trust moment leads to that sentence from the consumer. The handoff kills the enrollment — not because the consumer changed their mind, but because the momentum died on hold.',
    rule: 'When the consumer says yes, the next words out of your mouth are enrollment execution — not anything else.',
    callRef: 'Susan White said "Yes, I\'m ready" at 9:03 on the Susan White call. At 9:05: "Let me see if I have an agent who can put that in for you." She went on hold. The call ended at 12:24 without an enrollment.',
    moveLabel: 'Consumer says "Yes, I\'m ready" — execute immediately.',
    move: '"Perfect, Susan — I\'m going to get you enrolled on the Complete Care plan right now, effective May 1. I already have your Medicare number and your date of birth — I just need to confirm a few more details and we\'ll have this handled in about three minutes."',
  },
  {
    title: 'The INT SEP corrects the "I already changed plans" objection in one sentence',
    rc: 'RC6',
    urgency: 'high' as const,
    body: 'When a dual-eligible consumer believes they can only change plans once a year, that belief is wrong — and you have the knowledge to correct it. As a QMB or Medicaid beneficiary, a consumer can change plans any month of the year through the INT SEP. That one-sentence correction removes what feels like an insurmountable barrier in ten seconds. Every dual-eligible call should have this sentence prepared and ready to deploy the moment a change-objection surfaces.',
    rule: null,
    callRef: 'On the Warsaw, Ohio call, the consumer objected at 14:09: "I already changed my plan once this year." He had confirmed QMB status at 5:01. The INT SEP was never mentioned. The call ended at 14:48 with "Okay. No problem."',
    moveLabel: 'Dual-eligible consumer says they can\'t change plans again — correct it.',
    move: '"Actually, because you have Medicaid, you\'re allowed to change your plan any month of the year — that once-a-year rule doesn\'t apply to dual-eligible members like you. That\'s one of the benefits of having Medicaid. So that\'s not a barrier here at all. You\'ve been hit twice this year: your food card got cut and your medications are costing you more. This plan fixes both. Let\'s get this locked in today."',
  },
  {
    title: 'Complete the math — annualize, then humanize',
    rc: 'RC3',
    urgency: 'medium' as const,
    body: 'Discovery confirms you have the right product. The math breakdown confirms the consumer knows why it\'s worth switching. The math has three steps: compare the monthly figures, annualize the difference, then connect the annual number to something specific the consumer told you about their life. On both the Susan White and Warsaw calls, you started the comparison and stopped before annualizing. The close lives in step three — the humanization. Without it, the math is informational. With it, it\'s a decision.',
    rule: null,
    callRef: 'On the Warsaw call, "$267 more per month" in OTC and drug savings was never annualized. That\'s $3,204 a year for a consumer who told you his food card got cut and his medications were costing him more. That sentence was never said.',
    moveLabel: 'Comparison stated — annualize and connect to their specific problem.',
    move: '"That\'s $3,204 more a year. And you told me your food card got cut and your medications are costing you more now. This plan covers both. Your doctor is already confirmed in network. Let\'s get this locked in today."',
  },
]

const pastReports = [
  { title: 'Weekly Brief — April 13–17', type: 'Weekly Brief', date: 'Apr 20, 2026', score: '51 / 100', active: true },
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

export default function TrestanDanielPage() {
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
          <h1 className={styles.agentName}>Trestan Daniel</h1>
          <p className={styles.period}>Week of April 13–17, 2026</p>
          <p className={styles.updatedAt}>Updated April 20 · 5 calls reviewed (Tue–Wed)</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(51) }}>51</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>Tue–Wed · 5 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>5</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 14–15, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>3</span>
            <span className={styles.scoreLabel}>Correct No-Sales</span>
            <span className={styles.scoreRange}>1 Missed · 1 Incomplete</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)' }}>RC1</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Handed off at the close</span>
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
              { metric: 'Sales',       prior: '11',    current: '8',      delta: '−3',      dir: 'down' },
              { metric: 'Conversion',  prior: '8.73%', current: '10.96%', delta: '+2.23pp', dir: 'up' },
              { metric: 'CPA',         prior: '$139',  current: '$124',   delta: '−$15',    dir: 'up' },
              { metric: 'Total Calls', prior: '126',   current: '73',     delta: '−53',     dir: 'neutral' },
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
            <p>Five calls across two days — three correct no-sales on calls that were genuinely unwinnable, one missed opportunity, and one incomplete where the consumer said she was ready. What we&apos;re working through is the pattern that runs through the two closeable calls: the instincts that built the trust needed to follow through at the finish.</p>
            <p><strong>What&apos;s working:</strong> your account-reading on the Susan White call was the best discovery work in this week&apos;s batch. You spotted her C-SNP history at 4:08, asked about it proactively, uncovered the story of why she kept getting switched off the right plan, and built a clear comparison — $55/month versus $50/quarter — that she understood immediately. That earned Susan&apos;s trust completely. She said &ldquo;Yes, I&apos;m ready&rdquo; at 9:03. On Wednesday, your call-reading on Annie Sellers was clean — correct pivot to SSN when the card wasn&apos;t available, and a correct exit when she refused. You did not burn the relationship. And Georgia Whitehead got a professional close: no pressure, clean goodbye, door left open.</p>
            <p><strong>What&apos;s costing you:</strong> on the two closeable calls, the close was right there and something intervened each time. On Susan White, a ready consumer went on hold and never enrolled — the handoff killed what you built. On the Warsaw call, a one-sentence correction about dual-eligible enrollment rights would have removed the only barrier between you and the close. Both consumers were closeable. The discovery work is there. The finish needs to match it.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>You do the discovery, you build the case, you earn the trust &mdash; that&apos;s the hardest part of this job and you do it consistently. The move that converts more of those calls is finishing what you started: when a consumer gives you the green light, your next words are &ldquo;Perfect &mdash; I&apos;m getting you enrolled right now&rdquo; and you run the enrollment yourself. You built the relationship. You own the close. See it through.</p>
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
            <span>Week Average: <strong>51 / 100</strong></span>
            <span>Correct No-Sales: <strong>3 of 5</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>The best moment of your week came at 4:08 on the Susan White call.</strong> You pulled up her account, noticed she had been on a C-SNP and then switched back to a regular AARP MAPD, and you asked about it — proactively, without being prompted. You read the history and followed up. That led directly to the real story: Susan had been on the right plan, kept getting switched off it without her permission, and had never been able to let the benefit go active. The benefit comparison you built — $55/month versus $50/quarter, stated plainly — landed immediately. Susan said &ldquo;Yes, I&apos;m ready&rdquo; at 9:03. That discovery sequence is the standard.</p>
            <p><strong>On Wednesday, you handled two hostile or resistant calls correctly.</strong> Annie Sellers refused her Social Security number with hostility — you attempted the pivot properly and exited cleanly. Georgia Whitehead declined to provide identification and you respected that without pressure. Both of those are correct no-sales and both ends were professional. On the Warsaw, Ohio call, your reframe at 11:47 — &ldquo;It&apos;s not about you getting anything — you&apos;re already approved for the $267&rdquo; — re-engaged a consumer walking toward the exit. That kind of instinct is a real skill.</p>
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
                <p className={styles.workOnTitle}>Own the enrollment at the moment of close</p>
                <p className={styles.workOnDetail}>When someone says &ldquo;Yes, I&apos;m ready,&rdquo; your immediate next words are enrollment execution. Not a hold, not a handoff, not a look for someone else. Practice the opening line until it&apos;s automatic: &ldquo;Perfect — let me get you enrolled right now. I already have your Medicare number. This will take about three more minutes.&rdquo;</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>Know the INT SEP and deploy it on dual-eligible calls</p>
                <p className={styles.workOnDetail}>On every dual-eligible call, flag the INT SEP early so you&apos;re ready when the change-objection comes. When it does: &ldquo;Because you have Medicaid, the once-a-year rule doesn&apos;t apply to you. You can change any month.&rdquo; That is a one-sentence enrollment unlock. The Warsaw consumer lost the call at 14:09 because he believed something that wasn&apos;t true — and you knew it.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>Complete the math — annualize, then humanize</p>
                <p className={styles.workOnDetail}>After stating any monthly comparison, always annualize immediately and connect the annual figure to something specific the consumer said. &ldquo;That&apos;s $3,204 more a year — and you told me your food card got cut and your medications are costing you more. This plan covers both.&rdquo; The annual number connected to their specific problem is the close. Stop before it and the math stays informational.</p>
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
          <p>The Certainty System · Trestan Daniel · Week of April 13–17, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC3 · RC6 · Close Authority · INT SEP · Math Breakdown · Susan White: Discovery</p>
        </div>

      </div>
    </PageShell>
  )
}
