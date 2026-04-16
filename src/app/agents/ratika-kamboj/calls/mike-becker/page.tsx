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

export default function MikeBeckerCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>

        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Call Report</span>
            <span className={styles.dot}>·</span>
            <Link href="/agents/ratika-kamboj" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Ratika Kamboj
            </Link>
          </div>
          <h1 className={styles.agentName}>Mike Becker</h1>
          <p className={styles.period}>April 14, 2026 · 3:25 · Columbus, OH</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(42), fontWeight: 700 }}>42 / 100</span>
            {' · '}Incomplete · SSN refusal — no alternative path offered
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(42) }}>42</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>3:25</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '1.1rem' }}>INCOMPLETE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Hot food card lead lost</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>No SSN pivot script</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Mike Becker is a 60-year-old Columbus, OH resident who called specifically about food card benefits. He does not have his Medicare card on hand. He was cooperative and engaged through the full compliance opening — ZIP confirmed, TPMO delivered correctly, SOA obtained, callback permission confirmed, qualifying questions answered. He gave you his name (Mike Becker) and date of birth (January 8, 1966) without hesitation.</p>
            <p>At 3:04 you asked for his Social Security Number to pull up his information. At 3:11 he said: &ldquo;No, I don&apos;t prefer giving my social out over the phone.&rdquo; You responded by explaining why you need it. He said &ldquo;No, I&apos;m fine&rdquo; at 3:24 and the call ended. A hot inbound food card lead — someone who called because they wanted a specific benefit — was lost because you had no alternative path ready when the SSN hit resistance.</p>
            <p>Your compliance work was textbook. The call structurally was correct up to the moment it ended. The gap is a single missing tool: what to say when a consumer refuses the SSN before you have their Medicare card.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Textbook compliance opening (0:44):</strong> Every required TPMO element delivered within 90 seconds — three organizations, 25 products, Medicare.gov reference, SOA consent, health info notice, and callback permission. This is one of the cleaner compliance openings on the team and you do it consistently.</p>
            <p><strong>Smooth pivot when Medicare card unavailable (2:36):</strong> When Mike said he didn&apos;t have his card, you immediately pivoted — &ldquo;No problem, sir. I can pull up your information in a different form also.&rdquo; You then collected name and DOB without breaking stride. This is good call flow management and shows real confidence in the verification process.</p>
            <p><strong>Professional and non-pressuring tone throughout:</strong> Your framing stayed warm and low-pressure from open to close. Mike was not hostile — he simply hit a privacy limit. The relationship you built in 3 minutes was real. You just needed one more tool at the moment it mattered.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When an SSN refusal comes in, take the pressure off immediately: &ldquo;Mr. Becker, you actually don&apos;t need to give me your social. Your name and zip code already tell me what&apos;s available. The food card in your area comes with plans at zero dollars a month. Let me just show you the numbers — thirty seconds.&rdquo; Remove the obstacle instead of defending it.</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>3:11 — &ldquo;No, I don&apos;t prefer giving my social out over the phone.&rdquo;</strong></p>
            <p>This was a privacy refusal, not a disinterest signal. Mike called about the food card. He gave you his name, his date of birth, his ZIP, and his callback number. He was invested in the call right up until the SSN request triggered a conditioned privacy response.</p>
            <p>Your response — explaining why you need the SSN — was the wrong move. Explaining the necessity reads as pressure. The correct response validates the concern and removes the ask entirely: <em>&ldquo;Mr. Becker, that&apos;s completely fair — and you don&apos;t need to give me your social. We can actually keep going with just your name and date of birth, which you&apos;ve already given me. Let me run what I have and show you what&apos;s available in your area. You can confirm the details later when you have your card in front of you.&rdquo;</em></p>
            <p>A secondary fix that would have prevented this moment entirely: name the benefit amount before you ask for any identification. For food card inbound calls, say something like &ldquo;Based on 43223, I&apos;m already seeing plans in your area with a significant food card benefit — let me make sure you don&apos;t miss out&rdquo; before you reach for verification. A consumer who knows exactly what they&apos;re about to get will push through friction to get it.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Score Breakdown</h2>
          <div className={styles.callTable}>
            <div className={styles.callTableHeader}>
              <span>Category</span><span>Score</span><span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 9, max: 20 },
              { cat: 'Signal Reading', score: 4, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 4, max: 15 },
              { cat: 'Call Outcome Quality', score: 5, max: 10 },
              { cat: 'Compliance', score: 15, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>42 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Ratika Kamboj · Mike Becker · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · SSN Refusal · Food Card Inbound · Benefit Anchoring · Columbus OH</p>
        </div>

      </div>
    </PageShell>
  )
}
