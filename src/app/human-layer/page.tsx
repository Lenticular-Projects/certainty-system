'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SPRING, staggerContainer, staggerChild } from '@/lib/motion'
import PageShell from '@/components/layout/PageShell'
import CalloutBlock from '@/components/ui/CalloutBlock'
import CrossLinks from '@/components/ui/CrossLinks'
import styles from './page.module.css'

const loopStages = [
  {
    number: 1,
    title: 'Hear What They\'re Dealing With',
    what: 'During discovery, the client will say something real — about money, health, family, fear, or frustration. That is Client Gold. The job is to hold it.',
    sounds: 'I\'ve been putting off the dental work for two years — just can\'t afford it right now.',
    mistake: 'Acknowledging it with "I understand" or "that makes sense" and moving back to the script. The client felt heard for a second. The close material was never picked up.',
    signal: 'You\'re doing it right when you catch yourself mentally flagging what they said — not just logging it as a discovery data point, but holding it as the reason this specific plan is right for this specific person.',
  },
  {
    number: 2,
    title: 'Find the Benefit That Fits It',
    what: 'Match what they told you to a specific plan benefit. Not generically — for them. The dental benefit is not just a feature on a plan. It is the answer to what they just said they can\'t afford.',
    sounds: 'This plan has a $2,000 dental benefit. That\'s the work they\'ve been putting off — covered.',
    mistake: 'Presenting the dental benefit as a bullet point in a general plan overview. It lands as a feature. It never becomes a solution.',
    signal: 'You\'re doing it right when the benefit you\'re presenting is answering something the client said — and you know exactly what it\'s answering.',
  },
  {
    number: 3,
    title: 'Say It Back in Their Words',
    what: 'When the plan is in front of them, bridge back to what they told you. Use their language. Not a paraphrase — their words.',
    sounds: 'You mentioned you\'ve been putting off the dental work for two years. That\'s exactly what this plan was built for. Here\'s what that means for you — $2,000 in dental this year. That work happens.',
    mistake: 'Presenting the benefit without making the connection. "This plan has a $2,000 dental benefit" is not the same statement. The connection between what they said and what the plan does — that is the close. Without it, it\'s a recitation.',
    signal: 'You\'re doing it right when you hear yourself saying their words back and the response on the line changes — tone shifts, the client gets quieter, or they say something like "yeah, that\'s right" or "I didn\'t know that was possible."',
  },
  {
    number: 4,
    title: 'They Feel It',
    what: 'The client does not hear a benefit. They see their life improving. That is the close.',
    sounds: 'So starting January 1st, that dental work — the one you\'ve been putting off — that\'s done. That\'s yours.',
    mistake: 'Treating the close as a data handoff. Listing what they get. The client received information. They did not feel a decision.',
    signal: 'You\'re doing it right when the client\'s response is about their life — not about the plan. "I could finally get that done." "I didn\'t realize I could do that." Those are closing responses.',
  },
]

const fieldReference = [
  {
    situation: 'Fixed income / "I can\'t stretch the check" / "money\'s tight at the end of the month"',
    benefit: 'Give Back benefit / grocery-utility allowance',
    language: '"You mentioned money is tight at the end of the month. This plan puts $[X] back into your Social Security every month. That\'s $[X × 12] a year — back in your pocket, no strings."',
  },
  {
    situation: 'Surgery coming up / procedure scheduled / "I have something coming up medically"',
    benefit: 'Surgical copay structure / out-of-pocket maximum',
    language: '"You mentioned you have a procedure coming up. The out-of-pocket maximum on this plan is $[X]. That\'s the most you could ever pay in a year, no matter what happens. Your current plan doesn\'t cap it the same way."',
  },
  {
    situation: 'Can\'t drive / no transportation / "I depend on someone else for rides"',
    benefit: 'Transportation benefit (covered rides to appointments)',
    language: '"You told me you rely on others to get to your appointments. This plan covers your rides — [X] per year, door to door. That\'s not something you\'re asking for. It\'s already in the plan."',
  },
  {
    situation: 'Dental problems / hasn\'t seen a dentist in years / "I can\'t afford the dental work"',
    benefit: 'Dental benefit',
    language: '"You\'ve been putting off the dental work. This plan has a $[X] dental benefit. That work happens this year."',
  },
  {
    situation: 'Managing a chronic condition / multiple medications / frequent doctor visits',
    benefit: 'Copay structure / specialist access / drug formulary',
    language: '"You\'re managing [condition] and seeing specialists regularly. Let me show you what the copay structure looks like on this plan compared to what you\'re paying now — because that adds up fast."',
  },
  {
    situation: 'Caretaking a family member / "I\'m spending a lot of time helping someone else"',
    benefit: 'Flex / OTC benefit',
    language: '"You\'re already spending your time and energy on someone else. This plan puts $[X] back every quarter — OTC, household, whatever you need. That\'s time and money back."',
  },
  {
    situation: 'Named a specific dollar amount ("I only have $X left after bills")',
    benefit: 'Match the Give Back or flex benefit to their exact number',
    language: '"You said you have about $[X] left at the end of the month. This plan adds $[Y] back. That changes that number."',
  },
  {
    situation: 'Was denied Medicaid / almost qualified / "I was close to the line"',
    benefit: 'Frame the plan benefit as what the system denied them',
    language: '"You almost qualified for Medicaid — which means the system already told you you\'re near the line. This plan is what fills that gap. $[X] in [benefit] — the help you were close to getting, through a different door."',
  },
]

export default function HumanLayerPage() {
  return (
    <PageShell signal="neutral">

      {/* Header */}
      <motion.h1
        className="display-xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={SPRING}
      >
        The Human Layer
      </motion.h1>

      <motion.p
        className={`body-lg ${styles.intro}`}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...SPRING, delay: 0.1 }}
      >
        There is a specific kind of lost call that does not show up cleanly in a failure pattern audit. The compliance was clean. The signal reads were mostly right. The Math Breakdown ran through Step 2. And the client said they&rsquo;d think about it — and hung up.
      </motion.p>

      <motion.p
        className={`body-lg ${styles.introSecond}`}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...SPRING, delay: 0.15 }}
      >
        That call did not fail because the agent made a mistake. It failed because the agent never showed up as a person talking to another person. They showed up as a benefit presentation delivered in the direction of a human being. The client heard math. They needed to hear themselves.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...SPRING, delay: 0.2 }}
      >
        <CalloutBlock type="neutral">
          <strong>The Human Layer is not a fifth pillar.</strong> It does not replace anything in the system. It is the operating layer underneath every other tool — the practice of making the system personal, call by call, client by client, with what that specific person told you.
        </CalloutBlock>
      </motion.div>

      {/* Diagram */}
      <motion.div
        className={`glass ${styles.imageWrapper}`}
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={SPRING}
      >
        <Image
          src="/images/human-layer-diagram.png"
          alt="The Human Layer — four-stage loop: Hear, Find, Say It Back, They Feel It"
          width={1440}
          height={810}
          className={styles.image}
        />
      </motion.div>

      {/* What the Missing Layer Costs */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={SPRING}
      >
        <h2 className="display-lg">What the Missing Layer Costs</h2>
        <p className="body-lg">
          A 33-minute call. The product was right. The compliance was clean. The annualized number was calculated correctly — $1,416 per year. The net advantage was $1,241 annually.
        </p>
        <p className="body-lg">
          Late in the call, the client said: <em>&ldquo;I always look at it as a cost expense to me financially. Am I losing anything?&rdquo;</em>
        </p>
        <p className="body-lg">
          That was not a question. It was the close — the client&rsquo;s decision frame, in their own words, at the exact moment the call needed to become personal. The agent answered with abstract reassurance. The client left with their old plan.
        </p>
        <p className="body-lg">
          The math existed. The connection never happened. That is what a missing Human Layer costs.
        </p>
      </motion.section>

      {/* The Loop */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={SPRING}
      >
        <h2 className="display-lg">The Human Layer Loop</h2>
        <p className="body-lg">
          Most agents treat discovery and the close as two separate phases. They ask questions to gather information, then pivot to presentation mode. Everything collected during discovery sits unused.
        </p>
        <p className="body-lg">
          The Human Layer teaches that discovery and the close are the same conversation. Everything the client tells you about their life is potential close material. The job during discovery is not just to qualify — it is to listen for the detail that will make the plan feel personal when you bring it back.
        </p>

        <motion.div
          className={styles.loopGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
        >
          {loopStages.map((stage) => (
            <motion.div key={stage.number} className={`${styles.loopCard} glass`} variants={staggerChild}>
              <div className={styles.stageHeader}>
                <span className={styles.stageNum}>{stage.number}</span>
                <h3 className={styles.stageTitle}>{stage.title}</h3>
              </div>
              <p className="body-md">{stage.what}</p>
              <p className={styles.stageSounds}><em>&ldquo;{stage.sounds}&rdquo;</em></p>
              <div className={styles.stageMistake}>
                <span className={styles.badgeRed}>❌ Common mistake</span>
                <p className="body-md">{stage.mistake}</p>
              </div>
              <div className={styles.stageSignal}>
                <span className={styles.badgeGreen}>✅ Signal you&rsquo;re doing it right</span>
                <p className="body-md">{stage.signal}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Bridge-back formula */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={SPRING}
      >
        <h2 className="display-lg">The Bridge-Back Formula</h2>
        <p className="body-lg">Stage 3 has a specific structure. Use it every time.</p>
        <div className={styles.formula}>
          <p className="mono-block">
            &ldquo;You mentioned [what they said]. That&rsquo;s exactly what this plan was built for. Here&rsquo;s what that means for you — [specific benefit connected to their situation].&rdquo;
          </p>
        </div>
        <p className="body-lg">The bridge-back is not a transition. It is the close. If it is absent, the Math Breakdown ends at Step 2.</p>
      </motion.section>

      {/* Client Gold */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={SPRING}
      >
        <h2 className="display-lg">Client Gold</h2>
        <p className="body-lg">
          Client Gold is the emotionally significant things a client says during the call that become close material. Not every piece of information the client gives you is Client Gold. The difference is specificity and stakes.
        </p>
        <p className="body-lg">
          <strong>Client Gold is:</strong> a named fear, a real constraint, a specific situation that has been causing them pain or cost. &ldquo;I haven&rsquo;t been to the dentist in two years&rdquo; is Client Gold. &ldquo;I usually see my doctor a few times a year&rdquo; is not.
        </p>

        <div className={styles.goldChecks}>
          <div className={styles.goldCheck}>
            <span className={styles.goldCheckLabel}>How to recognize it</span>
            <p className="body-lg">The client slows down, their tone shifts, or they volunteer a detail you didn&rsquo;t ask for. They&rsquo;re telling you something real. The agent who is still in script mode misses it. The agent who is listening catches it.</p>
          </div>
          <div className={styles.goldCheck}>
            <span className={styles.goldCheckLabel}>How to hold it</span>
            <p className="body-lg">Don&rsquo;t just acknowledge and move on. Make a mental note — or a literal one. This is coming back at the close. If you can&rsquo;t remember it two minutes later, you did not hold it.</p>
          </div>
          <div className={styles.goldCheck}>
            <span className={styles.goldCheckLabel}>When to deploy it</span>
            <p className="body-lg">At the Math Breakdown — specifically Step 3. Too early and it feels like manipulation. Too late and the window has closed. The right moment is when the benefit is in front of them and you are making the case for why it matters.</p>
          </div>
        </div>

        <div className={styles.contrastBlock}>
          <div className={styles.contrastGood}>
            <div className={styles.contrastLabel}><span className={styles.badgeGreen}>✅ Recognized and deployed</span></div>
            <p className="body-md">Client during discovery: <em>&ldquo;I haven&rsquo;t been to the dentist in two years. I just can&rsquo;t afford it.&rdquo;</em></p>
            <p className="body-md">Agent at the close: <em>&ldquo;You mentioned the dental — that you haven&rsquo;t been in two years because of the cost. This plan has a $2,000 dental benefit. That work happens this year. That&rsquo;s exactly what we&rsquo;re fixing right now.&rdquo;</em></p>
          </div>
          <div className={styles.contrastBad}>
            <div className={styles.contrastLabel}><span className={styles.badgeRed}>❌ Heard and ignored</span></div>
            <p className="body-md">Client during discovery: <em>&ldquo;I haven&rsquo;t been to the dentist in two years. I just can&rsquo;t afford it.&rdquo;</em></p>
            <p className="body-md">Agent: <em>&ldquo;I understand. And do you have any medical conditions I should know about?&rdquo;</em></p>
            <p className="body-md">At the close: <em>&ldquo;This plan also includes a dental benefit up to $2,000.&rdquo;</em></p>
            <p className={styles.contrastVerdict}>The benefit was mentioned. The connection was never made. The close did not happen.</p>
          </div>
        </div>

        <CalloutBlock type="red">
          <strong>The one-sentence rule:</strong> If you heard something real about their life and never brought it back, you didn&rsquo;t close — you presented.
        </CalloutBlock>
      </motion.section>

      {/* Field Reference */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={SPRING}
      >
        <h2 className="display-lg">Situation → Benefit Field Reference</h2>
        <p className="body-lg">Given what the client tells you, here is the benefit to connect and the language to use. Keep this open during discovery.</p>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>What the client says</th>
                <th>Benefit to connect</th>
                <th>Language to use</th>
              </tr>
            </thead>
            <tbody>
              {fieldReference.map((row, i) => (
                <tr key={i}>
                  <td><em>{row.situation}</em></td>
                  <td><strong>{row.benefit}</strong></td>
                  <td className={styles.languageCell}>{row.language}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* Connects to the System */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={SPRING}
      >
        <h2 className="display-lg">How The Human Layer Connects to the Rest of the System</h2>

        <div className={styles.connectGrid}>
          <div className={styles.connectCard}>
            <h3 className={styles.connectTitle}>Pillar 2 — Reframing</h3>
            <p className="body-md">Generic reframes push back. Reframes built from what the client told you disarm resistance. The Human Layer makes every reframe personal.</p>
          </div>
          <div className={styles.connectCard}>
            <h3 className={styles.connectTitle}>Math Breakdown — Step 3</h3>
            <p className="body-md">You cannot humanize the annual number if you weren&rsquo;t listening during discovery. The Human Layer is what makes Step 3 possible. Without it, the Math Breakdown ends at Step 2.</p>
          </div>
          <div className={styles.connectCard}>
            <h3 className={styles.connectTitle}>Pillar 4 — Refocusing</h3>
            <p className="body-md">The bridge-back statement that redirects a drifting client works best when it ties to something the client already told you they care about.</p>
          </div>
          <div className={styles.connectCard}>
            <h3 className={styles.connectTitle}>Signal Reading</h3>
            <p className="body-md">A GREEN client closes faster when the connection is personal. A RED client softens when they hear their own words reflected back. A YELLOW client refocuses when the bridge uses their own situation.</p>
          </div>
          <div className={styles.connectCard}>
            <h3 className={styles.connectTitle}>Pattern 1 — Client Gold Ignored</h3>
            <p className="body-md">The Human Layer is the full execution of what Client Gold recognition is supposed to produce. When this loop is absent, Pattern 1 is the result.</p>
          </div>
          <div className={styles.connectCard}>
            <h3 className={styles.connectTitle}>Close Confirmation</h3>
            <p className="body-md">The Human Layer makes the close confirmation specific — <em>&ldquo;That&rsquo;s your [what they named]&rdquo;</em> — instead of a generic dollar amount the client is already half-certain about.</p>
          </div>
        </div>
      </motion.section>

      <CrossLinks links={[
        { label: 'Math Breakdown', href: '/math-breakdown' },
        { label: 'Four Pillars', href: '/pillars' },
        { label: 'Storytelling', href: '/storytelling' },
        { label: 'How Calls Are Graded', href: '/how-calls-are-graded' },
      ]} />
    </PageShell>
  )
}
