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

export default function BrendaCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <Link href="/agents/rudy-schprejer" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              ← Rudy Schprejer
            </Link>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Call Report</span>
          </div>
          <h1 className={styles.agentName}>Brenda</h1>
          <p className={styles.period}>April 14, 2026 · 3:33 · Inbound — Trust-Resistant Consumer</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(47), fontWeight: 700 }}>47 / 100</span>
            {' · '}CORRECT NO-SALE
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(47) }}>47</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>3:33</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)', fontSize: '0.95rem' }}>CORRECT NO-SALE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Uncloseable — trust barrier</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC6</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Missed Cardiac Signal</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Brenda called in asking solely about the food card (OTC benefit) and made her position clear within seconds: "All I want is the food card. I'm not going to change anything." She also mentioned at 0:14 that she has "cardiac medicine" and asked if she still qualifies — a question you dismissed with "Yeah, it doesn't matter. Let's find out what you're eligible for."</p>
            <p>You delivered the full TPMO disclaimer at 0:53, confirmed decision-maker authority, nursing home status, and callback number — all correctly executed under a hostile consumer. At 2:33 she named her cardiac medication (Carvedilol). At 3:00 the trust barrier hit: "I don't give out my Medicare anything anyway. I don't trust the last thing. I don't know what's legal and what's not." You responded with "Okay. Yes, ma'am." and Brenda terminated the call 15 seconds later.</p>
            <p>This was a correct no-sale — Brenda had no intent to engage in a plan review. But two early opportunities were missed that might have extended the conversation.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>You handled a hostile consumer with professionalism throughout. When Brenda stated she didn't want to change anything at 1:13, you responded calmly: "Brenda, I can't change your insurance unless you want us to" — the right instinct. You didn't argue, didn't pressure, and kept moving.</p>
            <p>Despite open resistance, you completed the full discovery checklist: decision-maker authority (2:05), nursing home status (2:18), and callback number — all correct, all executed without escalating tension. You delivered a complete TPMO disclaimer at 0:53 including the organization count, product count, and Medicare.gov reference. Disciplined under pressure.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When Brenda said "cardiac medicine" at 0:14, the bridge was: "You mentioned cardiac medication — that's actually important. There are plans specifically built for people managing heart conditions that also include the food benefit you're asking about."</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>There were two missed openings. The first was at 0:14 — Brenda mentioned cardiac medicine and asked "do I still apply?" Your response was "Yeah, it doesn't matter." That was the wrong read. Carvedilol is prescribed for heart failure and hypertension — both C-SNP qualifying conditions. More importantly, she was asking whether her health situation disqualified her from benefits she wanted. Engaging that fear — validating it and pivoting to CSN eligibility — could have created a reason to continue.</p>
            <p>The second and final opportunity was at 3:00. When Brenda said she doesn't give out her Medicare information and doesn't know what's legal, the recorded line was your best tool. "Brenda, this call is recorded and monitored — that recording protects you. If I tell you something wrong, it's on tape. I'm not asking you to change anything. I'm asking for 60 more seconds to tell you whether the food benefit you want is something you can actually get." Silence ended the call. One sentence might have kept it alive.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Score Breakdown</h2>
          <div className={styles.callTable}>
            <div className={styles.callTableHeader}>
              <span>Category</span><span>Score</span><span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 11, max: 20 },
              { cat: 'Signal Reading', score: 6, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 8, max: 15 },
              { cat: 'Call Outcome Quality', score: 8, max: 10 },
              { cat: 'Compliance', score: 14, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>47 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Rudy Schprejer · Brenda · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC6 — Missed CSN Signal · RC1 — Trust Objection Surrendered · RC2 — Food Card Bridge Not Built</p>
        </div>
      </div>
    </PageShell>
  )
}
