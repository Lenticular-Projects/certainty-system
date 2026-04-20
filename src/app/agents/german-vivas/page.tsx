'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Weekly Brief: April 13–17, 2026 ──────────────────────────────────────────

const callsByDate = [
  {
    date: 'Monday, April 13',
    calls: [
      { consumer: 'Jennifer Russell', duration: '3:25', score: 52, outcome: 'INCOMPLETE', outcomeNote: 'Medicare card refusal — no pre-frame', type: 'Food Card Caller — Card Refusal', href: '/agents/german-vivas/calls/jennifer-russell' },
      { consumer: 'Lois Overton', duration: '55:00', score: 67, outcome: 'INCOMPLETE', outcomeNote: 'Enrollment assumed — no confirmation code', type: 'Within-Carrier Upgrade — Rapport Drift', href: '/agents/german-vivas/calls/lois-overton' },
    ],
  },
  {
    date: 'Wednesday, April 15',
    calls: [
      { consumer: 'David Jeffrey Smith', duration: '4:32', score: 42, outcome: 'INCOMPLETE', outcomeNote: 'SSN refused — no recovery pivot', type: 'SSN Refused — No Recovery Pivot', href: '/agents/german-vivas/calls/david-jeffrey-smith' },
    ],
  },
  {
    date: 'Thursday, April 16',
    calls: [
      { consumer: 'Frank Del', duration: '8:08', score: 28, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'The Benefit Shopper — SSN Surrender', href: '/agents/german-vivas/calls/frank-del' },
    ],
  },
]

const patterns = [
  {
    title: 'SSN refusal treated as a final answer — three times this week',
    rc: 'RC1',
    urgency: 'critical' as const,
    body: 'On three separate calls this week — Jennifer Russell, David Jeffrey Smith, and Frank Del — the call ended when a consumer refused the SSN or Medicare card. On all three, the Medicare card MBI pivot was available and never used. On David Smith, you had his name, DOB, and ZIP already — you could have tried a lookup right there. On Frank Del, you said "Okay, thank you" and accepted the call ending. On Jennifer Russell, you started to offer an alternative and she had already disconnected. The pre-frame is what prevents the refusal from happening in the first place.',
    rule: 'The call is not over until the consumer hangs up. A refusal to one verification method is not a refusal to enroll.',
    callRef: 'Frank Del said "I\'m not getting my social on the phone" at 6:56. German said "Okay, thank you." Frank was a willing switcher who said at 1:28 he would move to "anybody more" — and the call ended on a recoverable objection.',
    moveLabel: 'Validate the fear. Offer the alternative. Keep the call alive.',
    move: '"Frank, you don\'t need to give me your Social at all — and I should have been clearer about this earlier. Your Medicare card number is the official route. It\'s just letters and numbers, has nothing to do with your Social Security, and it\'s what Medicare itself uses. Is that red, white, and blue card somewhere you can grab? And while you look — I\'m already seeing plans in your zip with cards up to $380 a month."',
  },
  {
    title: 'Value must be shown before data is asked for',
    rc: 'RC3',
    urgency: 'high' as const,
    body: 'Frank Del told you at 0:46 he gets all his medications from the VA — which simplifies the entire pitch to one variable: who pays the most on the flex card. At 1:28 he said he would switch to "anybody more." At 1:33 he said he knew plans that go up to $438/month. You had his benchmark, his buying intent, and a simplified pitch — and you asked for data without showing him a single number first. When a consumer tells you their price point, show them a better number before you ask for anything.',
    rule: null,
    callRef: 'Frank said "anybody more" at 1:28. The response was "it just really varies on what\'s in your area." A specific number — "I\'m seeing plans up to $380 in your zip right now" — keeps him on the phone through verification.',
    moveLabel: 'Show value first. Then ask for data.',
    move: '"Frank, this is actually simple since your VA handles your meds. I just need to find the plan with the highest flex card in your zip. I\'m already seeing plans up to $380 a month versus your current $300 — that\'s $80 more every month, almost $1,000 a year. To lock in the exact number, I need about 30 seconds of info from you."',
  },
  {
    title: 'Dual-eligible disclosure not converted to INT SEP and D-SNP conversation',
    rc: 'RC6',
    urgency: 'high' as const,
    body: 'David Jeffrey Smith confirmed at 1:21 that he has both Medicare and Medicaid. He said he was looking for extra benefits. That is a dual-eligible consumer with a year-round enrollment window — he can switch plans any month. Before the SSN question ever became the issue, you had the strongest enrollment angle on the call sitting right there. Instead, it was acknowledged with a generic OTC mention and the call moved to verification.',
    rule: null,
    callRef: 'David said "I\'m 64 years old, I have Medicaid and Medicare. I\'m trying to see how I can get extra funding." The response was a generic OTC card mention. The INT SEP and D-SNP conversation were never started.',
    moveLabel: 'Stop at the dual-eligibility disclosure. Ask the one question.',
    move: '"Since you have both Medicare and Medicaid, you may qualify for a special plan that covers more and costs you nothing — and I can enroll you any time of year, not just in October. Is the state paying your Part B premium for you?"',
  },
]

const pastReports = [
  { title: 'Weekly Brief — April 15 (partial)', type: 'Weekly Brief', date: 'Apr 16, 2026', score: '42 / 100', active: false },
  { title: 'Weekly Brief — April 13–17', type: 'Weekly Brief', date: 'Apr 20, 2026', score: '47 / 100', active: true },
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

export default function GermanVivasPage() {
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
          <h1 className={styles.agentName}>German Vivas</h1>
          <p className={styles.period}>Week of April 13–17, 2026</p>
          <p className={styles.updatedAt}>Updated April 20 · 4 calls reviewed</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(47) }}>47</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>4 calls · Mon, Wed, Thu</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>4</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 13–16, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>0</span>
            <span className={styles.scoreLabel}>Enrolled</span>
            <span className={styles.scoreRange}>3 Incomplete · 1 Missed</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>RC1</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>SSN refusal — no Medicare card pivot</span>
          </div>
        </motion.div>

        {/* ── Platform Numbers ── */}
        <motion.div style={{ marginBottom: '48px' }} {...SPRING}>
          <h2 className={styles.sectionTitle}>Platform Numbers</h2>
          <div className={styles.scorecardRow}>
            <div className={styles.scoreCard}>
              <span className={styles.scoreValue}>0</span>
              <span className={styles.scoreLabel}>Sales — Apr 13–17</span>
              <span className={styles.scoreRange}>—% conversion</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, marginTop: 4, color: 'var(--ink-60)' }}>
                Not reported Apr 13–17
              </span>
            </div>
            <div className={styles.scoreCard}>
              <span className={styles.scoreValue} style={{ color: 'var(--ink-60)' }}>N/A</span>
              <span className={styles.scoreLabel}>CPA — Apr 13–17</span>
              <span className={styles.scoreRange}>Cost per sale</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, marginTop: 4, color: 'var(--ink-60)' }}>
                Prior week: $709
              </span>
            </div>
            <div className={styles.scoreCard}>
              <span className={styles.scoreValue}>—</span>
              <span className={styles.scoreLabel}>Total Calls — Apr 13–17</span>
              <span className={styles.scoreRange}>Not in platform report</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--ink-60)', marginTop: 4 }}>
                Prior week: 126 calls (104 billable)
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p>Four calls this week — no confirmed enrollments, three incompletes, one missed opportunity. The same pattern ended three of the four calls: the consumer refused to give verification information and the call stopped. The pivot is available on every one of these calls. It just needs to be executed.</p>
            <p><strong>What&apos;s working:</strong> the Lois Overton call shows what you can do when verification clears. You pulled her existing Devoted plan records from the system instead of collecting medications from scratch — that&apos;s efficient and professional. The drug cost moment landed right: &ldquo;$72 down to zero for all nine of your medications&rdquo; got an &ldquo;Oh, wow, you&apos;re awesome.&rdquo; That&apos;s the close signal and you had it. Your compliance execution through the opening is clean on all four calls — TPMO delivered, qualifying questions asked, callback numbers confirmed. That foundation is solid.</p>
            <p><strong>What&apos;s costing you:</strong> three calls ended when a consumer declined the SSN or Medicare card, and on all three the Medicare card pivot was either unused or came too late. Frank Del said he would switch to &ldquo;anybody more&rdquo; and hung up when you accepted the SSN refusal without pivoting. David Smith said &ldquo;I don&apos;t trust you&rdquo; and the response was &ldquo;I get it. Bye.&rdquo; These are not lost leads — they are recoverable objections that ended because the pivot reflex isn&apos;t there yet. The entire correction is one sentence: &ldquo;You don&apos;t need to give me your Social — your Medicare card number is actually the safer route.&rdquo;</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>Every time a consumer hesitates on the SSN, your next sentence is automatic: &ldquo;You don&apos;t need to give me your Social at all &mdash; your Medicare card number is actually the safer route. It&apos;s just letters and numbers, has nothing to do with your Social Security. Is that red, white, and blue card nearby?&rdquo; Practice that sentence before your next shift. The call doesn&apos;t end until you&apos;ve offered the alternative &mdash; and then pushed for the enrollment.</p>
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
            <span>Week Average: <strong>47 / 100</strong></span>
            <span>Enrolled: <strong>0 of 4</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>The drug cost moment on the Lois Overton call landed exactly right.</strong> &ldquo;$72 down to zero for all nine of your medications&rdquo; — Lois said &ldquo;Oh, wow, you&apos;re awesome.&rdquo; That is the close signal. The way you delivered it — pulling directly from her existing Devoted account rather than collecting a medication list from scratch — was efficient and showed you know your tools. Reading from the system saves time and builds authority at the same moment.</p>
            <p><strong>Your compliance execution through the opening is clean on every call.</strong> TPMO delivered, both qualifying questions asked, callback numbers confirmed — all before any data collection. That sequence is correct and consistent. The foundation is there. The skill we&apos;re adding on top of it now is the SSN recovery pivot, so the work you do in the first 90 seconds doesn&apos;t get thrown away at verification.</p>
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
                <p className={styles.workOnTitle}>Have the SSN recovery script ready before every call</p>
                <p className={styles.workOnDetail}>SSN refusals happen on multiple calls every week. You need one sentence ready before you pick up the phone: &ldquo;You don&apos;t need to give me your Social at all — your Medicare card number is the safer route. It&apos;s just letters and numbers, has nothing to do with your Social Security. Is that red, white, and blue card nearby?&rdquo; Practice it out loud before your next shift. When it becomes a reflex, you stop losing calls at verification.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>Show a number before you ask for data</p>
                <p className={styles.workOnDetail}>When a consumer tells you their buying intent — &ldquo;anybody more,&rdquo; &ldquo;I want extra benefits,&rdquo; &ldquo;I get $300 right now&rdquo; — deploy a partial comparison before you ask for verification: &ldquo;I&apos;m already seeing plans in your zip with cards up to $380 a month. To lock in the exact number for you, I need about 30 seconds.&rdquo; The value exchange has to happen before the data ask. Without it, verification feels like a wall instead of a step.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>When they say Medicaid and Medicare — ask one question before moving on</p>
                <p className={styles.workOnDetail}>At 1:21, David told you he had both. That is an INT SEP — he can enroll any month. The question you need: &ldquo;Is the state paying your Part B premium for you?&rdquo; If yes, you have a D-SNP conversation and a zero-premium plan that delivers exactly what he called about. Every dual-eligible disclosure gets that question from now on — before you move to verification.</p>
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
          <p>The Certainty System · German Vivas · Week of April 13–17, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC3 · RC6 · SSN Recovery · INT SEP · D-SNP · Trust Objection · Value-Before-Data</p>
        </div>

      </div>
    </PageShell>
  )
}
