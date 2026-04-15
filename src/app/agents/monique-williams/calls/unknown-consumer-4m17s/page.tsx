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

export default function UnknownConsumer4m17sCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>

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
          <h1 className={styles.agentName}>Unknown Consumer</h1>
          <p className={styles.period}>April 13, 2026 · 4:17 · Anderson County, SC</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(42), fontWeight: 700 }}>42 / 100</span>
            {' · '}Missed Opportunity · The Money Caller
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(42) }}>42</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>4:17</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 13, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1.1rem' }}>MISSED</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Missed Opportunity</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC2</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Confusion signal missed</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>The consumer called from Anderson County, SC and immediately admitted she didn&apos;t know why she was calling. You delivered the TPMO disclaimer cleanly and collected the zip and county — but you never worked the confusion. When someone calls and says &ldquo;I don&apos;t know what I&apos;m calling for,&rdquo; that isn&apos;t a dead lead. It&apos;s an unanchored prospect who saw something and responded to it. That nudge was the opening.</p>
            <p>The call ended at 4:17 without her providing a name, date of birth, Medicare number, current plan, medications, or any actionable discovery. She hung up without you ever telling her why this call was worth her time.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Compliance open:</strong> TPMO delivered correctly at the start of the call. Clean and on time.</p>
            <p><strong>Collected zip and county:</strong> You got the geographic data before the call stalled. That&apos;s the right priority — area determines plan availability, and you had it.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a consumer says &ldquo;I don&apos;t know what I&apos;m calling for,&rdquo; anchor them immediately: &ldquo;Most people who call us saw something about a grocery or spending card benefit on Medicare. Is that what you saw?&rdquo; One question. Turns a confused caller into a Money Caller.</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>0:51 — &ldquo;I don&apos;t know what I&apos;m calling for.&rdquo;</strong></p>
            <p>This is the most important line in the call and it was left sitting there. A consumer who doesn&apos;t know why she called still called. Something prompted that. Nine times out of ten it&apos;s an ad about the grocery or spending card. The question that opens it: &ldquo;Most people who call us saw something about a grocery or spending card benefit — is that what brought you here?&rdquo; If yes, you have your anchor and the rest of the call has direction. If no, she tells you what she did see and you work from there.</p>
            <p>What you needed at 0:51 was one anchoring question that gave her a reason to stay on the phone. Without it, you were running a compliance script for someone who hadn&apos;t yet connected this call to anything they wanted. Discovery can&apos;t start until the consumer understands why this conversation is worth having.</p>
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
              { cat: 'Signal Reading', score: 5, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 8, max: 15 },
              { cat: 'Call Outcome Quality', score: 8, max: 10 },
              { cat: 'Compliance', score: 12, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: row.score === 0 ? 'var(--terracotta)' : scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>42 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Monique Williams · April 13, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC2 · Anderson County SC · Confused Caller · Anchor the Motivation</p>
        </div>

      </div>
    </PageShell>
  )
}
