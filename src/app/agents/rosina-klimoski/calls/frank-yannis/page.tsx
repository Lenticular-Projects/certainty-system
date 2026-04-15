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

export default function FrankYannisCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>

        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Call Report</span>
            <span className={styles.dot}>·</span>
            <Link href="/agents/rosina-klimoski" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Rosina Klimoski
            </Link>
          </div>
          <h1 className={styles.agentName}>Frank Yannis</h1>
          <p className={styles.period}>April 13, 2026 · 18:06 · El Paso, TX</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(52), fontWeight: 700 }}>52 / 100</span>
            {' · '}Missed Opportunity · Complex Dual-Eligible — Closeable
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(52) }}>52</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>18:06</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 13, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1.1rem' }}>MISSED</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Was closeable</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Close surrendered</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Frank is a dual-eligible Medicare Advantage member in El Paso with diabetes and a cardiac condition who called about the grocery card and had an active dental need. You ran 18 minutes of correct execution: verified his Medicare number, ran the plan comparison, checked his doctor network, reviewed his medications, and built a case around the 5-star plan&apos;s dental ($3,000 vs $1,200), vision ($400), OTC ($200/quarter), and specialist copay.</p>
            <p>At 17:36 Frank asked for a brochure. You said &ldquo;Unfortunately I would not be able to send you a brochure.&rdquo; The call ended. You did not close it. Frank didn&apos;t say no — he asked for materials. That is a buying signal, not an exit. The call collapsed not because Frank left, but because you handed him the door.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Full discovery executed:</strong> 18 minutes with a complex dual-eligible consumer — Medicare number verified, plan comparison built, doctor network checked, medications reviewed. You showed you can carry a technically complex call all the way through. That is real skill. The discovery was there. The close wasn&apos;t.</p>
            <p><strong>Product knowledge on display (12:52):</strong> The 5-star plan comparison was clear and specific — dental limits, OTC amounts, copay differences. You gave Frank real numbers to evaluate. That&apos;s the right approach on a Detail Staller call.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>A brochure ask is not a no. It&apos;s &ldquo;show me more before I commit.&rdquo; At 17:36: &ldquo;I can&apos;t mail one, but everything I&apos;ve described is in your plan documents and I can walk you through the key details right now. Let&apos;s lock in your coverage today and you&apos;ll receive everything in writing once you&apos;re enrolled.&rdquo; That sentence keeps the call alive. Practice it until it comes out automatically.</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>17:36 — Brochure requested. Call ended.</strong></p>
            <p>Frank Yannis is diabetic with a cardiac condition, called about the grocery card, had an active dental need, and stayed on the line for 18 minutes while you built the case. At 17:36 he asked for a brochure. You said you couldn&apos;t send one — and the call was over. You didn&apos;t ask for the enrollment. You didn&apos;t offer to walk him through the plan documents. You gave him a dead end when he was standing at the threshold.</p>
            <p>The brochure ask at minute 17 on an 18-minute call is not someone looking for an exit. It&apos;s someone who is almost ready and wants to feel certain before committing. The response: <em>&ldquo;I can&apos;t mail one out, but everything I&apos;m describing is already documented in your plan materials and I can walk you through the key details right now. Let&apos;s take care of this today, and you&apos;ll receive everything in writing after enrollment. Ready to get started?&rdquo;</em></p>
            <p>You had 18 minutes of correct work built. The only thing left was the ask. Tomorrow, when anyone asks for materials near the end of a call — hear it as &ldquo;I&apos;m almost there,&rdquo; not &ldquo;I&apos;m leaving.&rdquo;</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Score Breakdown</h2>
          <div className={styles.callTable}>
            <div className={styles.callTableHeader}>
              <span>Category</span><span>Score</span><span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 10, max: 20 },
              { cat: 'Signal Reading', score: 8, max: 20 },
              { cat: 'Math Breakdown', score: 10, max: 20 },
              { cat: 'Objection Handling', score: 5, max: 15 },
              { cat: 'Call Outcome Quality', score: 7, max: 10 },
              { cat: 'Compliance', score: 12, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>52 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Rosina Klimoski · April 13, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC3 · Dual-Eligible · 5-Star Plan · Brochure Reframe · El Paso TX</p>
        </div>

      </div>
    </PageShell>
  )
}
