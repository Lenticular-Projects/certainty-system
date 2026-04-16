'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

function scoreColor(score: number) {
  if (score >= 75) return 'var(--sage-dark)'
  if (score >= 55) return 'var(--mustard-dark)'
  return 'var(--terracotta)'
}

export default function WarrenSheltonCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>

        {/* Header */}
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Call Report</span>
            <span className={styles.dot}>·</span>
            <Link href="/agents/monique-williams" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Monique Williams
            </Link>
          </div>
          <h1 className={styles.agentName}>Warren Shelton</h1>
          <p className={styles.period}>April 14, 2026 · 51:54 · Spruce Pine, AL</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(38), fontWeight: 700 }}>38 / 100</span>
            {' · '}Correct No-Sale · RC4 Audit Risk
          </p>
        </motion.div>

        {/* Score Strip */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(38) }}>38</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>51:54</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)', fontSize: '0.9rem' }}>CORRECT</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>No-Sale · Uncloseable</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC4 · RC6</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Framing risk + C-SNP gap</span>
          </div>
        </motion.div>

        {/* What Happened */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Warren Shelton is 63, diabetic, on a chronic condition plan (HealthCare Complete), and sees Dr. John Almirall monthly for primary care. He had recent foot surgery and lost Extra Help in 2025 — a DEP + CSN SEP combination that created a legitimate enrollment window. He called expecting a $1,425 grocery card benefit he had seen advertised. The plan you located offered $35 per quarter in OTC ($140/year). The expectation gap alone made this call very difficult to close.</p>
            <p>The call lasted 52 minutes and included four explicit refusals from Warren (at 22:20, 31:24, 48:13, and 51:23). The most serious issue is the framing used after those refusals: enrollment was described as &ldquo;updating your address&rdquo; and &ldquo;updating your information&rdquo; on multiple occasions. That language obscures what is actually happening — a plan change — and creates audit risk. The call outcome was correct in that no enrollment was completed. The process that led there is the coaching point.</p>
          </div>
        </motion.div>

        {/* What You Did Well */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>DEP + CSN SEP identified correctly:</strong> Recognizing that Warren had lost Extra Help in 2025 and was on a chronic plan created a legitimate dual SEP. That is a real eligibility window and you found it. Most agents miss one or both components.</p>
            <p><strong>Address discrepancy caught and handled:</strong> When the Medicare system showed a Florence AL address that Warren denied, you surfaced the discrepancy rather than proceeding. That is the compliant move on an address mismatch.</p>
            <p><strong>No enrollment completed on four refusals:</strong> Despite the framing issues, you did not push Warren through enrollment over his explicit objections. The call ended without an unauthorized enrollment. That is the correct outcome and you should be clear on why it matters.</p>
            <p><strong>Compliance baseline maintained:</strong> TPMO delivered. Compliance score of 10 reflects that the foundational disclosure was in place, which is not trivial on a 52-minute call with this much pressure.</p>
          </div>
        </motion.div>

        {/* The One Thing */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>After the second refusal at 31:24, the call was at its professional limit. The line was: &ldquo;Warren, I hear you — and I want to respect your time. I&apos;m going to note your file and make sure your current plan is confirmed in our system. If you ever want to revisit your options, I&apos;m here. Have a good afternoon.&rdquo; Exit cleanly and professionally at two refusals. Never reframe enrollment as an address update.</p>
        </motion.div>

        {/* The Moment That Decided This Call */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>RC4 — Enrollment framed as &ldquo;updating your address&rdquo; / &ldquo;updating your information&rdquo; across multiple instances after consumer refused four times.</strong></p>
            <p>This is the most important coaching note from this call. When a consumer has declined enrollment — especially four times — describing the enrollment process in terms of address updates or information updates misrepresents what is happening. The consumer is being asked to change their health plan. That description must be accurate and clear. CMS compliance standards require informed consent, and informed consent requires the consumer to understand what they are agreeing to.</p>
            <p>The call was also 22 minutes too long. A professional exit after the second refusal protects both Warren and you. A consumer who explicitly declines four times is not a close waiting to happen — they are telling you the call is over. Holding the call open past that point adds stress to the consumer and audit exposure to the agent.</p>
            <p>The $1,425 vs. $140 expectation gap is also worth addressing head-on when it comes up. <em>&ldquo;Warren, the ad you saw was for a different benefit tier — I want to be honest with you about what your ZIP and plan actually unlock so there are no surprises.&rdquo;</em> Transparency on the gap early is better than circling back to it after four refusals. He came for $1,425. When the number is $140, that conversation needs to happen at minute two, not minute thirty.</p>
          </div>
        </motion.div>

        {/* Score Breakdown */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Score Breakdown</h2>
          <div className={styles.callTable}>
            <div className={styles.callTableHeader}>
              <span>Category</span>
              <span>Score</span>
              <span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 7, max: 20 },
              { cat: 'Signal Reading', score: 7, max: 20 },
              { cat: 'Math Breakdown', score: 5, max: 20 },
              { cat: 'Objection Handling', score: 4, max: 15 },
              { cat: 'Call Outcome Quality', score: 5, max: 10 },
              { cat: 'Compliance', score: 10, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}>
              <span>Total: <strong>38 / 100</strong></span>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <div className={styles.footer}>
          <p>The Certainty System · Monique Williams · Warren Shelton · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC4 · RC6 · DEP+CSN SEP · Audit Risk · Spruce Pine AL</p>
        </div>

      </div>
    </PageShell>
  )
}
