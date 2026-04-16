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

export default function UnknownConsumer1m44sCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>

        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <Link href="/agents/steeve-exalant" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              ← Steeve Exalant
            </Link>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Call Report</span>
          </div>
          <h1 className={styles.agentName}>Unknown Consumer</h1>
          <p className={styles.period}>April 14, 2026 · 1:44 · The Skeptic</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(52), fontWeight: 700 }}>52 / 100</span>
            {' · '}MISSED OPPORTUNITY
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(52) }}>52</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ fontSize: '1.4rem' }}>1:44</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '0.85rem' }}>MISSED OPP</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Sevier County, TN</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1 / RC2</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Surrender on MBI objection</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>A female consumer in Sevier County, TN (ZIP 37876) called in asking about a Part B giveback she had heard about. She confirmed she had Medicare Part A and B, confirmed she makes her own decisions, and confirmed she lives in her own home. Your compliance sequence was clean — TPMO at 0:51, all required elements present.</p>
            <p>At 1:21 you asked for her Medicare card number. She said: &quot;I&apos;ve been told not to give that out over the phone. I guess I can&apos;t give that to you.&quot; Your response was: &quot;The only way any Medicare specialist or Medicare can help you is with those, ma&apos;am. If you&apos;re not willing to give that out, then we can&apos;t help you.&quot; She said &quot;Okeydoke. Bye-bye.&quot; The call ended at 1:44. Zero reframe attempts. Zero trust-building. One dead-end ultimatum.</p>
            <p>This consumer opened the call asking about the Part B giveback by name. She was curious, confirmed eligibility, and stayed on the line through the full compliance sequence. She was not hostile when she left. That tone — resignation, not anger — is the signal that one warm reframe had a real chance of working.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>Your compliance execution on a sub-two-minute call was clean. At 0:51 you delivered the full TPMO disclaimer — 22 products, organizational count, Medicare.gov, 1-800-Medicare, and SHIP reference — without rushing or fumbling. That disclaimer is internalized at this point, not read from a script. That matters when calls go short.</p>
            <p>Your opening authority frame at 0:00 was professional. You identified yourself, disclosed the recorded line, and led with a consent-to-review question. The discovery sequence — ZIP, county, decision authority, living situation — was executed cleanly and in order at 0:38.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a consumer says they were told not to give out their Medicare number, your next line is: &quot;That&apos;s a really smart habit — you should protect your information. Your Medicare ID is actually different from your Social Security number. It only shows what plan you&apos;re currently on, nothing else. This call is also recorded by CMS. Would you like to grab it from wherever you keep it?&quot;</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>At 1:26 she said she&apos;d been told not to give out her Medicare number. At that moment the call was still alive — her tone was resigned, not hostile. She was giving you an opening to reassure her. She wanted a reason to stay.</p>
            <p>The MBI objection is the most common call-ending objection in Medicare telesales. It is also one of the most solvable. The consumer does not know that the Medicare ID number is fundamentally different from a Social Security number. She does not know it cannot access any account or change any benefit. Your job at 1:26 was to be the expert who explains this: &quot;That&apos;s smart — and I&apos;m glad you protect yourself. Your Medicare card number is different from your Social Security. It only shows what plan you&apos;re on — it doesn&apos;t give anyone access to your money or benefits. This call is recorded by CMS. The Part B giveback you asked about is real — in Sevier County you could get up to $174 a month back. Is your card somewhere you can grab it?&quot;</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Score Breakdown</h2>
          <div className={styles.callTable}>
            <div className={styles.callTableHeader}>
              <span>Category</span>
              <span>Score</span>
              <span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 11, max: 20 },
              { cat: 'Signal Reading', score: 8, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 3, max: 15 },
              { cat: 'Call Outcome Quality', score: 5, max: 10 },
              { cat: 'Compliance', score: 15, max: 15 },
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
          <p>The Certainty System · Steeve Exalant · Unknown Consumer (1:44) · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 — Zero-attempt surrender on MBI objection · RC2 — Hot buying signal (Part B giveback) not leveraged before data ask</p>
        </div>

      </div>
    </PageShell>
  )
}
