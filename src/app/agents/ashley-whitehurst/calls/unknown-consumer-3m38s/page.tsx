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

export default function UnknownConsumer3m38sCallPage() {
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
          <p className={styles.period}>April 15, 2026 · 3:38 · The Money Caller — TV Ad Chaser</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(52), fontWeight: 700 }}>52 / 100</span>
            {' · '}CORRECT NO-SALE
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(52) }}>52</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>3:38</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 15, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)', fontSize: '1rem' }}>CORRECT NO-SALE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Consumer time-constrained; callback provided</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1 / RC2 / RC4</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>No appointment · Client gold missed · Compliance flag</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>The consumer called from New Orleans (ZIP 00126) about a TV ad claiming a $900 monthly allowance card. She called it "bullshit" at 0:20 — skeptical, but that she called at all means the benefit got her attention. At 0:28 you corrected the misunderstanding immediately and accurately: it's $900 annual, not monthly. That was the right move, done with confidence, and it established credibility right out of the gate. You confirmed the zip, delivered the full TPMO disclaimer at 0:59, and moved into plan type presentation.</p>
            <p>At 2:06 the consumer mentioned she had "a couple of my drugs" covered and called because of the TV ad. At 2:15 she said she had "a different thing taken care of with my Medicare already" — she was satisfied with her current coverage and wasn't actively shopping. At 2:37 she deflected: "I'm going to go online and see." You pushed back at 2:45: "If you already have questions, how are you going to ask those questions if you're not on the phone with an agent?" Reasonable counter. Then at 3:05 she revealed the real reason she was stepping back — she was literally waiting for a ride to school. Genuinely uncloseable at that moment. You released her without pressure, gave her the callback number (877-845-0071), and she left on good terms with stated intent to call back.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>The correction of the TV ad claim at 0:28 was the standout moment. The consumer called the $900 figure "bullshit" — which meant she was primed to be disappointed by anything that felt like a bait-and-switch. You corrected it immediately without being defensive and without walking away from the benefit: "$900 annual, not monthly." That's honest, confident, and it kept the credibility of the conversation intact. Full TPMO compliance at 0:59 — four organizations, 34 products, all three alternative contact references — delivered cleanly.</p>
            <p>Your agent-vs-website counter at 2:45 showed sales instinct. You didn't simply accept "I'm going online" as an exit — you challenged it with a real value argument: an agent can answer questions in real time that a website can't. That's not a bad reframe. And your exit handling was correct. You recognized an uncloseable moment and didn't chase it. The call ended warmly, the callback number was delivered clearly, and the consumer left without negative sentiment.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>Before releasing any consumer who says "I'll call back," ask: "Morning or afternoon tomorrow works better for you? I'll have your New Orleans plan options already pulled up so we only need 10 minutes." One question converts an open-ended maybe into a committed slot.</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>There are two things worth taking into the next call. First: at 1:17 you said "I work for Medicare." That language implies you're a government employee and violates CMS marketing rules. The correct line is always "I'm a licensed Medicare agent" or "I work with Medicare-approved plans." This isn't a style preference — it's a compliance requirement. Fix it in every call going forward.</p>
            <p>Second: at 2:06, when the consumer mentioned her medications, that was the only actionable data point in the entire call. "Which medications are you on?" takes five seconds and gives you the ability to run a real drug-tier comparison — the one thing that might have made her choose the phone over Google. Without knowing the drug names, everything else is generic. On calls like this one — skeptical consumer, short timeline, existing coverage — the specific drug question is often the only hook you have to make the conversation personal. Use it.</p>
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
              { cat: 'Objection Handling', score: 7, max: 15 },
              { cat: 'Call Outcome Quality', score: 9, max: 10 },
              { cat: 'Compliance', score: 11, max: 15 },
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
          <p>The Certainty System · Ashley Whitehurst · Unknown Consumer (3:38) · April 15, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 — No Callback Appointment · RC2 — Medications Not Probed · RC4 — "I Work for Medicare" Compliance Flag · ZIP 00126 New Orleans LA</p>
        </div>

      </div>
    </PageShell>
  )
}
