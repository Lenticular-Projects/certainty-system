'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from '@carbon/icons-react'
import { SPRING, SPRING_FAST, staggerContainer, staggerChild } from '@/lib/motion'
import { useSignalHover } from '@/hooks/useSignalHover'
import styles from './page.module.css'

const sectionCards = [
  // Row 1
  { label: 'The Human Layer', href: '/human-layer', description: 'The operating layer underneath every other tool. What separates a presentation from a close.', signal: 'neutral' as const },
  { label: '9 Call Types', href: '/call-types', description: 'Identify the client in the first two minutes.', signal: 'neutral' as const },
  { label: 'Three Client Signals', href: '/signals', description: 'GREEN, RED, YELLOW — read the client state.', signal: 'neutral' as const },
  // Row 2
  { label: 'Four Pillars', href: '/pillars', description: 'The four tools for the four situations.', signal: 'neutral' as const },
  { label: 'Objection Handbook', href: '/objections', description: 'Find the phrase. Deploy the response.', signal: 'neutral' as const },
  { label: 'Storytelling', href: '/storytelling', description: 'The delivery mechanism. What makes the system survive a real call.', signal: 'neutral' as const },
  // Row 3
  { label: 'Medicare 101', href: '/medicare-101', description: 'Networks, SNPs, enrollment periods, and the mistakes that cost real enrollments.', signal: 'neutral' as const },
  { label: 'Close Confirmation', href: '/close-confirmation', description: 'Every call ends here. The step between enrollment and retention.', signal: 'green' as const },
  { label: 'Nine Failure Patterns', href: '/patterns', description: 'The nine ways calls fail — and the fix for each.', signal: 'neutral' as const },
]

function SectionCard({ card }: { card: typeof sectionCards[number] }) {
  const hover = useSignalHover(card.signal)
  return (
    <motion.div variants={staggerChild} className={styles.cardWrapper}>
      <Link href={card.href} className={styles.cardLink}>
        <motion.div
          className={`${styles.card} glass`}
          whileHover={{ y: -4, scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          transition={SPRING_FAST}
          {...hover}
        >
          <h3 className={styles.cardTitle}>{card.label}</h3>
          <p className={styles.cardDesc}>{card.description}</p>
          <ArrowRight size={16} className={styles.cardArrow} />
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default function HomePage() {
  const [videoFailed, setVideoFailed] = useState(false)

  useEffect(() => {
    document.body.setAttribute('data-signal', 'neutral')
    document.body.setAttribute('data-page-signal', 'neutral')
  }, [])

  return (
    <>
      {/* Hero — no overlay, full gradient */}
      <section className={styles.hero}>
        {!videoFailed && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className={styles.heroVideo}
            src="/hero-bg.mp4"
            onError={() => setVideoFailed(true)}
          />
        )}

        <div className={styles.heroWatermark} aria-hidden="true">CERTAINTY</div>

        <div className={styles.heroContent}>
          <motion.p
            className={styles.heroLabel}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING, delay: 0.05 }}
          >
            The Certainty System
          </motion.p>

          <motion.h1
            className={`${styles.heroHeadline} display-xl`}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING, delay: 0.15 }}
          >
            The system that turns a conversation into a commitment.
          </motion.h1>

          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING, delay: 0.25 }}
          >
            A field reference for Medicare Advantage agents. Built from real call data.
          </motion.p>

          <motion.div
            className={styles.heroCtas}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING, delay: 0.4 }}
          >
            <Link href="/objections" className={styles.ctaPrimary}>
              Open Objection Handbook
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Certainty Definition */}
      <section className={styles.definitionSection}>
        <motion.div
          className={styles.definitionImageWrap}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={SPRING}
        >
          <Image
            src="/images/certainty-homepage-card.png"
            alt="cer·tain·ty — The state of being 100% confident, free from doubt. Certainty must exist in the agent before it can exist in the client."
            width={1456}
            height={816}
            className={styles.definitionImage}
            priority={false}
          />
        </motion.div>
      </section>

      {/* The Problem */}
      <section className={styles.editorialSection}>
        <motion.div
          className={styles.editorialInner}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={SPRING}
        >
          <span className={styles.editorialEyebrow}>The Problem</span>
          <h2 className={`${styles.editorialHeadline} display-lg`}>
            Knowing Medicare is not the same as knowing how to sell it.
          </h2>
          <p className={styles.editorialBody}>
            Most agents understand plans, benefits, formularies, networks, and compliance. That knowledge is not the issue. The issue is that the industry has been treating product knowledge and sales skill as the same thing — and they are not.
          </p>
          <p className={styles.editorialBody}>
            The result is a consistent, predictable pattern of lost enrollments that shows up across agents, call types, and markets. These are not random losses. They are the same mistakes, made the same way, at the same moments in the call — over and over again. And they trace back not to what agents know about Medicare, but to what they don&apos;t know about people.
          </p>
          <p className={`${styles.editorialBody} ${styles.editorialBold}`}>
            Every missed enrollment is real money that walked out the door. Not because the client didn&apos;t need a better plan. Not because the math wasn&apos;t there. But because the agent didn&apos;t know what to do at the moment it mattered.
          </p>
        </motion.div>
      </section>

      {/* Core Philosophy */}
      <section className={styles.philosophySection}>
        <motion.div
          className={styles.philosophyInner}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={SPRING}
        >
          <span className={styles.editorialEyebrow}>The Core Philosophy</span>
          <h2 className={`${styles.editorialHeadline} display-lg`}>
            Every agent&apos;s job on every call is the same three things.
          </h2>

          <div className={styles.threeJobs}>
            <motion.div
              className={`${styles.jobCard} glass`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...SPRING, delay: 0.05 }}
            >
              <span className={styles.jobNum}>01</span>
              <p className={styles.jobText}>Remain in the lead</p>
            </motion.div>
            <motion.div
              className={`${styles.jobCard} glass`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...SPRING, delay: 0.12 }}
            >
              <span className={styles.jobNum}>02</span>
              <p className={styles.jobText}>Keep the lead</p>
            </motion.div>
            <motion.div
              className={`${styles.jobCard} glass`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...SPRING, delay: 0.19 }}
            >
              <span className={styles.jobNum}>03</span>
              <p className={styles.jobText}>Recover the lead when you lose it</p>
            </motion.div>
          </div>

          <p className={styles.editorialBody}>
            This is not about being aggressive. It is structural. Whoever holds the lead controls what the client focuses on, what they compare, and ultimately what they decide. When an agent loses the lead, they don&apos;t just lose control of the conversation — they hand the client over to their own fear and inertia.
          </p>

          <div className={`${styles.insightBlock} glass`}>
            <p className={styles.insightText}>
              Selling is not presenting information. Selling is leading a person from where they are to where they should be — in a way that feels like their idea.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Foundational Truth */}
      <section className={styles.editorialSection}>
        <motion.div
          className={styles.editorialInner}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={SPRING}
        >
          <span className={styles.editorialEyebrow}>The Foundational Truth</span>
          <h2 className={`${styles.editorialHeadline} display-lg`}>
            The job is not to sell a plan. It&apos;s to improve a life.
          </h2>
          <p className={styles.editorialBody}>
            Most clients are on zero-premium plans. They&apos;re not writing a check — so the standard &ldquo;you&apos;re losing money&rdquo; frame falls flat. What they <em>are</em> doing is leaving a better option unclaimed. A $200 Part B giveback when $250 is available. A $2,000 dental benefit when $4,000 is on the table. The difference is real money. It just doesn&apos;t feel like a loss yet.
          </p>
          <p className={styles.editorialBody}>
            The client thinks their decision is neutral: <em>&ldquo;My plan works. Why change?&rdquo;</em> The agent&apos;s job is to reframe that: <em>&ldquo;You&apos;ve seen what&apos;s available. Staying where you are is now a choice — and that choice costs you $600 this year.&rdquo;</em>
          </p>
          <p className={`${styles.editorialBody} ${styles.editorialBold}`}>
            Loss aversion is twice as powerful as the desire to gain. The moment a client understands that inaction has a specific dollar cost — not a missed opportunity, but an active loss — staying is no longer the safe choice.
          </p>
        </motion.div>
      </section>

      {/* System map */}
      <section className={styles.mapSection}>
        <motion.p className={styles.mapLabel}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={SPRING}
        >
          The System at a Glance
        </motion.p>
        <motion.div
          className={`${styles.mapWrapper} glass`}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={SPRING}
        >
          <Image
            src="/images/system-map.png"
            alt="The Certainty System — complete map of signals, pillars, patterns, and call types"
            width={900}
            height={600}
            className={styles.mapImage}
            priority={false}
          />
        </motion.div>
      </section>

      {/* Section nav cards */}
      <section className={styles.cardsSection}>
        <motion.div
          className={`${styles.cardsGrid} grid-3`}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {sectionCards.map((card) => (
            <SectionCard key={card.href} card={card} />
          ))}
        </motion.div>
      </section>
    </>
  )
}
