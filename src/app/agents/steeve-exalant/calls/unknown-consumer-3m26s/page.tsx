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

export default function UnknownConsumer3m26sCallPage() {
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
          <p className={styles.period}>April 14, 2026 · 3:26 · The Money Caller</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(62), fontWeight: 700 }}>62 / 100</span>
            {' · '}CORRECT NO-SALE
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(62) }}>62</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ fontSize: '1.4rem' }}>3:26</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)', fontSize: '0.85rem' }}>CORRECT NO-SALE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Georgia, ZIP 30079</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1 / RC2</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Son not invited · MBI reframe skipped</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>An elderly female consumer in Georgia (ZIP 30079) called in about a benefit card. She confirmed Medicare, confirmed she makes her own decisions, and confirmed she lives in her own home. You delivered a full and accurate TPMO disclaimer at 0:24 — three organizations, 35 products, all required references — before any data collection. Clean opening.</p>
            <p>At 1:36 she asked: &quot;This ain&apos;t no scam, anything?&quot; You responded with calm authority: &quot;No, ma&apos;am. This is directly from Medicare. I&apos;m a Medicare specialist. I work with Medicare, so no, ma&apos;am. That&apos;s why the line&apos;s being recorded.&quot; Her tone visibly softened after that. She confirmed decision-maker status. You were back in control.</p>
            <p>When she said she didn&apos;t have her card, you moved directly to SSN as the alternative. She declined: &quot;No, I think I&apos;d leave that alone, okay?&quot; You closed professionally — &quot;Not a problem. When you change your mind, you can always give us a call back&quot; — and the call ended at 3:26. The lead was preserved. The door was left open. This is a correct no-sale once she declined both verification paths. Two missed opportunities before that point: the MBI safety reframe and a son who was present in the background at 2:52.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>Your scam concern response at 1:40 was the strongest moment on this call. When a consumer asks &quot;this ain&apos;t no scam?&quot; in that tone, some agents get defensive or over-explain. You stayed calm, used your Medicare specialist authority, referenced the recording as proof of legitimacy, and let it land. The consumer&apos;s tone shifted immediately. That is a skill — and it is repeatable.</p>
            <p>Your no-sale close at 3:15 was exactly right. When the SSN was declined, you said &quot;Not a problem. When you change your mind, you can always give us a call back so we can help you out then, okay?&quot; No pressure. No argument. Goodwill preserved. Lead not burned. That is the correct response when both verification paths are unavailable.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When she said she didn&apos;t have her card, try this before offering SSN: &quot;No problem at all — sometimes people keep it with insurance papers or in a drawer. Is it somewhere you might be able to grab it real quick? I can wait. And just so you know, that Medicare number is completely different from your Social Security — it only shows what plan you currently have, nothing else.&quot;</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>At 2:52 the consumer said &quot;I talked to you in my son.&quot; A son was present in the background. That was the last viable trust-transfer opportunity on this call and it passed without an invitation.</p>
            <p>Family members who are present during skeptical calls can unlock trust that agents cannot access alone. A son who hears the explanation, understands the benefit, and nods — that son converts his mother. The line that could have changed this call: &quot;It sounds like your son is there with you — would you mind putting him on with us for just a minute? I&apos;d love for him to hear exactly what we&apos;re looking at so you both can decide together.&quot; That is not a pressure tactic. That is a service move. Remember it for the next call where you hear a voice in the background.</p>
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
              { cat: 'Lead Quality', score: 13, max: 20 },
              { cat: 'Signal Reading', score: 11, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 10, max: 15 },
              { cat: 'Call Outcome Quality', score: 10, max: 10 },
              { cat: 'Compliance', score: 15, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>62 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Steeve Exalant · Unknown Consumer (3:26) · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 — MBI reframe skipped before SSN pivot · RC2 — Son in background, trust transfer missed</p>
        </div>

      </div>
    </PageShell>
  )
}
