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

export default function UnknownConsumer15m39sCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>

        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <Link href="/agents/ashley-whitehurst" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              ← Ashley Whitehurst
            </Link>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Call Report</span>
          </div>
          <h1 className={styles.agentName}>Unknown Consumer</h1>
          <p className={styles.period}>April 14, 2026 · 15:39 · Dropped Connection</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(44), fontWeight: 700 }}>44 / 100</span>
            {' · '}INCOMPLETE
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(44) }}>44</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>15:39</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '1.1rem' }}>INCOMPLETE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Consumer disconnected on hold</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>No hold recovery protocol</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>This call ended before it could begin in any meaningful way. The consumer — a woman calling on behalf of herself and her husband — opened at 0:11 with one of the stronger signals an inbound call can deliver: "I just wanted to know if we qualified for anything." Two potential enrollees, calling in proactively. You read it correctly and immediately connected her intent to the OTC allowance card and Medicare Advantage at 0:34. She confirmed interest, you collected the zip code (44266, Ohio), delivered the full TPMO disclaimer at 1:09, confirmed the callback number at 1:50, and got the decision-maker verification at 2:00. Everything was on track.</p>
            <p>At 2:08 you asked her to retrieve her Medicare card. She said "I probably do — could you hang on?" and stepped away at 2:18. She never came back. You called out at 7:46, 11:46, 12:16, 12:41, and 15:11. The call ended at 15:39 with no response, no discovery, and no path forward. Thirteen minutes of silence on a warm inbound lead with two potential enrollees. This one didn't fail because of selling — it failed because there was no hold protocol in place.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>Your opening pivot at 0:34 was the standout moment on this call. When the consumer gave a soft "No, thank you" to the SOA question and then clarified she wanted to know about qualifying for benefits, you didn't flinch. You immediately named the benefits she was likely thinking about — the gift-back, the allowance card — and reframed the conversation as eligibility discovery rather than a sales presentation. That's the right instinct and it worked. She stayed on the line and said "Okay. Okay."</p>
            <p>Your TPMO compliance was clean: four organizations, 40 products, Medicare.gov, 1-800-MEDICARE, SHIP — delivered completely and without rushing at 1:09. When the consumer mentioned "we've moved" at 1:00, you immediately asked how long ago, probed for a potential MOV SEP, confirmed it was 10 years ago, and correctly ruled it out. Good instinct on the SEP screening. And at 7:46, you did offer an alternative — "If you can't find it, I can always pull it up a different way" — which was the right line, just delivered five minutes too late.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>The moment a consumer steps away and goes silent, say at 90 seconds: "Take all the time you need — and if you can't find the card, I can pull you up another way. If I lose you, I'll call you right back at this number." Then hang up at three minutes and call back — don't wait 13 minutes on a silent line.</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>At 2:08 you asked for the Medicare card. The correct alternative offer — "If you don't have it handy, I can pull you up with your date of birth and name as well" — should have come in the same breath. Asking a consumer to physically search for their Medicare card is the single most common call-drop risk in this business. Many beneficiaries don't have it accessible, and stepping away often means not coming back.</p>
            <p>Once the silence started at 2:18, the window for recovery was narrow. A 60-second check, then at 90 seconds: "I want to make sure I haven't lost you. If you can hear me, just give me a signal. If not, I'm going to try you back in a few minutes at this same number." Then hang up and call back. You had her number confirmed at 1:50. A proactive callback at the 3-minute mark would have re-engaged this lead. Instead, waiting on silence for 13 minutes cost call capacity with no upside — and the lead has no path back without a callback she may never make.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Score Breakdown</h2>
          <div className={styles.callTable}>
            <div className={styles.callTableHeader}>
              <span>Category</span><span>Score</span><span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 12, max: 20 },
              { cat: 'Signal Reading', score: 5, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 0, max: 15 },
              { cat: 'Call Outcome Quality', score: 5, max: 10 },
              { cat: 'Compliance', score: 13, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>44 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Ashley Whitehurst · Unknown Consumer (15:39) · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 — No Hold Recovery Protocol · ZIP 44266 Ohio</p>
        </div>

      </div>
    </PageShell>
  )
}
