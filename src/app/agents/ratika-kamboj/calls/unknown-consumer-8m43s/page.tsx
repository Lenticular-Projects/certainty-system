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

export default function UnknownConsumer8m43sCallPage() {
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
          <h1 className={styles.agentName}>Unknown Consumer (8:43)</h1>
          <p className={styles.period}>April 14, 2026 · 8:43 · Cleveland, OH</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(38), fontWeight: 700 }}>38 / 100</span>
            {' · '}Incomplete · Callback refusal asked three times — call went to dead air
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(38) }}>38</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>8:43</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '1.1rem' }}>INCOMPLETE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Dead air after 2:07</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Re-asked a declined question</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>This consumer called from Cleveland, OH asking about &ldquo;a new card&rdquo; — the food card / OTC benefit. They confirmed Medicare Part A and B at 1:16. Your compliance opening was correct: TPMO delivered at 0:44, SOA obtained at 1:11, all required elements in sequence. At 1:16 the consumer confirmed they have Medicare A and B — the green light to connect them to the benefit they called about.</p>
            <p>Then at 1:41 you asked for callback permission. The consumer said &ldquo;No.&rdquo; You re-asked in a slightly different form. The consumer said &ldquo;No&rdquo; again. You re-asked a third time, this time explaining why a callback might be needed during application processing. The consumer said &ldquo;No&rdquo; a third time. After the third refusal, the call went silent.</p>
            <p>From 2:19 to 8:43, the recording captured dead air and background office noise. The consumer had either disconnected silently or simply stopped responding. Six-plus minutes of a call that ended at 2:07. A confirmed Medicare beneficiary who called in wanting a specific benefit was lost because a declined question was asked three times instead of one.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Consistent compliance execution (0:41):</strong> Three organizations, 30 products, Medicare.gov, 1-800-Medicare, SHIP reference — all delivered within the first 90 seconds. Your compliance opening is the most consistent strength across your April 14 calls. It protects the company and it protects you.</p>
            <p><strong>Appropriate response to an ambiguous request (0:16):</strong> When the consumer asked about &ldquo;a new card&rdquo; without specifying which card, you correctly offered both options — food card benefits or OTC. That is attentiveness to the consumer&apos;s actual need rather than assuming, and it is the right instinct.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>One ask, one pivot. When the first &ldquo;No&rdquo; comes in on callback permission: &ldquo;Okay, absolutely — no problem at all. I&apos;ll make sure we get everything handled for you right here in this one call. Can I get your name so we can check what&apos;s available in your area?&rdquo; Accept the constraint and move forward. Never ask the same declined question twice.</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>1:47 — First &ldquo;No&rdquo; on callback permission.</strong></p>
            <p>This was the decision point. The consumer had just confirmed Medicare A and B — they were qualified and motivated. The callback permission &ldquo;No&rdquo; was not an objection to the enrollment conversation. It was a privacy boundary on one specific request. The correct response to the first &ldquo;No&rdquo; is acceptance and forward movement: <em>&ldquo;That&apos;s totally fine — I&apos;ll make sure we get everything done for you right now in this one call. Can I get your name so we can check your exact benefits?&rdquo;</em></p>
            <p>Instead the question was re-asked twice more. Each re-ask told the consumer that her &ldquo;No&rdquo; was not being respected. By the third &ldquo;No&rdquo; she was done. The pattern of asking the same declined question multiple times signals weakness and erodes trust — and it appeared across more than one of your April 14 calls. The rule is simple: one ask, one pivot. Accept the constraint, then move the call forward as if the constraint does not exist.</p>
            <p>Also worth noting: at the moment the consumer confirmed Medicare A and B at 1:16, the correct move was to connect that immediately to the benefit they called for: &ldquo;Perfect — having both Part A and B means you qualify for the Medicare Advantage plans that come with the food card. Let me check your area right now.&rdquo; Front-loading the benefit before any friction point creates momentum that carries the consumer through it.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Score Breakdown</h2>
          <div className={styles.callTable}>
            <div className={styles.callTableHeader}>
              <span>Category</span><span>Score</span><span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 8, max: 20 },
              { cat: 'Signal Reading', score: 4, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 3, max: 15 },
              { cat: 'Call Outcome Quality', score: 5, max: 10 },
              { cat: 'Compliance', score: 13, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>38 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Ratika Kamboj · Unknown Consumer (216) · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · Callback Refusal · Food Card Inbound · Benefit Anchoring · Cleveland OH</p>
        </div>

      </div>
    </PageShell>
  )
}
