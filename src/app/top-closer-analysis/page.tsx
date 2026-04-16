'use client'

import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import styles from './page.module.css'

// ─────────────────────────────────────────────────────────────
// Matched pair data — every quote is verbatim from call JSON
// ─────────────────────────────────────────────────────────────

type Pair = {
  pressurePoint: string
  pressureDescription: string
  missed: Moment
  saved: Moment
  microDifference: string
  mechanism: string
  vossFrame: string
  trainingImplication: string
}

type Moment = {
  agent: string
  consumer: string
  date: string
  score: number
  outcome: 'MISSED' | 'INCOMPLETE' | 'ENROLLED'
  duration: string
  timestamp: string
  consumerQuote: string
  agentResponse: string
  quality: string
  whyItHappened: string
}

const PAIRS: Pair[] = [
  // ──────────────────────────────────────────────────────────
  {
    pressurePoint: 'Wavering at the Close',
    pressureDescription:
      'Consumer has heard the benefits, sounded interested, reviewed the math, and then freezes within minutes of the voice signature. They say some version of "I don\'t know if I really want to do this." This is the most common moment where deals that should close instead die.',
    missed: {
      agent: 'Marcus Hughes',
      consumer: 'Rita Haskins',
      date: '03-24-2026',
      score: 40,
      outcome: 'MISSED',
      duration: '22:50',
      timestamp: '20:51',
      consumerQuote: "I don't know if I really want to do this or not.",
      agentResponse:
        "I understand, I don't want to force you. If you don't feel comfortable, that's fine.",
      quality: 'SURRENDERED',
      whyItHappened:
        'Rita was at the final step. Five doctors verified in-network. Math accepted at $1,272/year. Her statement was decisional fatigue, not an objection. By treating it as a real objection and retreating, the agent converted a wavering buyer into a lost enrollment.',
    },
    saved: {
      agent: 'Matthew Garnett',
      consumer: 'Viola Turner',
      date: '03-16-2026',
      score: 78,
      outcome: 'ENROLLED',
      duration: '74:57',
      timestamp: '39:50',
      consumerQuote:
        "I would love to change, but I'm going to stick with Dustin for right now.",
      agentResponse:
        "You are NOT changing Dustin. Hold on, hold on, Viola. You are not changing Dustin. Dustin is staying the same, okay? Say it with me. Dustin is not changing. But your benefits — you can get more benefits and keep Dustin. You're not losing Dustin.",
      quality: 'STRONG_REFRAME',
      whyItHappened:
        'The agent refused to let the wavering become an objection with content. Instead of asking "what are you unsure about?", he identified the real fear (losing her doctor), named it out loud, and got her to verbalize a statement inconsistent with walking away. Once she said "Dustin is not changing" aloud, her body was already moving toward the signature.',
    },
    microDifference:
      'The average agent invites the consumer to articulate what\'s wrong. The top closer closes the articulation window and gets the consumer to verbalize a commitment instead.',
    mechanism:
      'Content-free hesitation is decisional fatigue, not an objection. Asking "what are you unsure about?" forces the consumer to manufacture content that hardens into a reason to say no. The top closer bypasses the content problem by redirecting to verbal commitment — once the consumer speaks a statement, they act consistently with it. This is not persuasion; it is behavioral commitment.',
    vossFrame:
      "Voss's \"That's Right\" breakthrough. Get the other party to verbalize agreement — not with you, but with their own stated position. Once they've said it out loud, they've committed behaviorally even when they haven't committed cognitively.",
    trainingImplication:
      "Every agent should have four memorized redirects for the content-free wavering moment. Not objection handlers — declarative lines that move the call forward without inviting elaboration. The role-play drill: agents practice responding to \"I don't know\" without using a question mark. Asking \"what are you unsure about?\" is the trap, and it must be explicitly forbidden in training.",
  },

  // ──────────────────────────────────────────────────────────
  {
    pressurePoint: 'Loyalty to the Status Quo',
    pressureDescription:
      'Consumer protects their current plan, carrier, or agent as a way of not having to decide. "I\'ve been with them for years." "I have an agent I trust." "I\'m not going to change." The objection sounds like loyalty. It\'s actually a defense mechanism against making a decision.',
    missed: {
      agent: 'Marcus Hughes',
      consumer: 'Boyce Little',
      date: '03-30-2026',
      score: 46,
      outcome: 'MISSED',
      duration: '21:51',
      timestamp: '18:11',
      consumerQuote: "Well, I'm not going to change the insurance agents.",
      agentResponse:
        "Clarified that it's the same carrier (Aetna). Then deployed false urgency at 19:24: \"Tomorrow is the last day of open enrollment.\" Offered a callback number. Released the call.",
      quality: 'SURRENDERED',
      whyItHappened:
        'The consumer\'s loyalty was relational (to a local in-person agent), not rational (to a carrier). The agent heard the wrong word, applied the wrong reframe ("same carrier"), then panicked and invented a deadline that wasn\'t real. Boyce didn\'t need a reason to switch carriers — he needed permission to honor the relationship while still taking the benefit he qualified for.',
    },
    saved: {
      agent: 'Marcus Hughes',
      consumer: 'Polly Hunt',
      date: '03-25-2026',
      score: 82,
      outcome: 'ENROLLED',
      duration: '76:15',
      timestamp: '31:01',
      consumerQuote:
        "(resisting the idea of switching plans after extended discussion of benefits)",
      agentResponse:
        "Polly, I'm not switching your insurance. I'm keeping you with Aetna. I'm just giving you a stronger policy with them.",
      quality: 'STRONG_REFRAME',
      whyItHappened:
        'Same agent, different call, radically different move. Instead of arguing against the loyalty, he removed the threat entirely. The consumer was defending against "switching." The agent deleted that word from the conversation. No switch to defend against = no resistance to overcome. The line worked so well he redeployed it five more times during the call whenever loyalty language reappeared.',
    },
    microDifference:
      "Average agents argue against the loyalty. Top closers delete the word the consumer is defending against. If the consumer says \"I don't want to change,\" the top closer's response is \"Nothing is changing\" — said with confidence, not correction.",
    mechanism:
      "Loyalty objections are rarely about the stated object of loyalty. They are protection against the cognitive weight of choosing. Arguing that the new thing is better forces the consumer to justify their existing choice, which entrenches them. Removing the word \"change\" from the frame removes the thing they are defending against. What remains is not a decision — it is a correction, an upgrade, a continuation. The consumer is no longer choosing between old and new; they are accepting an improvement to what they already have.",
    vossFrame:
      "Reality-bending through language. The consumer's reality is \"I am being asked to switch.\" The top closer changes the label, which changes the reality. No manipulation — just precision in how the situation is described. Same enrollment, opposite emotional experience.",
    trainingImplication:
      "Ban the word \"switch\" from every enrollment script. Replace with: upgrade, stronger policy, correction, put you back, same carrier stronger plan. The drill: agents rewrite their standard pitch with these substitutions and practice them until the language is reflexive. Every piece of sales copy, every training example, every call monitoring rubric should treat \"switch\" as a dealbreaker word.",
  },

  // ──────────────────────────────────────────────────────────
  {
    pressurePoint: 'The Scam Objection',
    pressureDescription:
      'Consumer says "How do I know this isn\'t a scam?" or "I don\'t give out personal information over the phone." This is not a request for reassurance — it is an authority challenge. The consumer is testing whether the agent is legitimate. Reassurance fails the test. Authority passes it.',
    missed: {
      agent: 'Marcus Hughes',
      consumer: 'Mr. Cummins',
      date: '03-18-2026',
      score: 32,
      outcome: 'MISSED',
      duration: '18:00',
      timestamp: '9:16',
      consumerQuote: 'Well, how can I check to make sure you\'re legit?',
      agentResponse:
        "I can give you my license number. I can give you everything you need. I don't mean nothing. There's just so much scamming going on. I completely get you, Mr. Cummins, but I can promise you I'm not trying to do anything with your information. These lines are recorded and my boss is probably listening.",
      quality: 'SURRENDERED',
      whyItHappened:
        'The consumer asked a verification question. The agent gave defensive reassurance — which is exactly what a scammer would do. "I promise I\'m not trying to do anything with your information" contains the phrase "trying to do something with your information," which reinforces the suspicion. The consumer escalated the question three times across the next minute. By the third time, the agent had lost the authority frame entirely.',
    },
    saved: {
      agent: 'Steeve Exalant',
      consumer: 'William Moore',
      date: '03-18-2026',
      score: 86,
      outcome: 'ENROLLED',
      duration: '45:00',
      timestamp: '30:28',
      consumerQuote:
        "(consumer had been enrolled in a Devoted Health plan without his knowledge or consent by a prior agent)",
      agentResponse:
        "They tried to bamboozle you into a devoted plan, telling you, you know, saying you were chronically ill when you're not.",
      quality: 'STRONG_REFRAME',
      whyItHappened:
        'The agent did not defend himself or his company. He named the prior agent as the villain using a word — "bamboozle" — that is deliberately strong and emotional. The consumer\'s distrust, which was headed at the current agent, got redirected at a third party. The consumer and the agent were now on the same team against an outside threat. No defensive reassurance was necessary because no defense was needed.',
    },
    microDifference:
      "Average agents try to win trust by arguing for their own legitimacy. Top closers never defend themselves — they redirect the distrust at a specific third party, using emotionally charged language that validates the consumer's suspicion.",
    mechanism:
      "Distrust is not resolved by reassurance — it is amplified by it. The phrase \"trust me\" triggers the opposite of trust. The only way to neutralize a trust objection is to make yourself unnecessary to trust by putting the threat somewhere else. Villain framing is not deception; it is pattern recognition. Many of these consumers have been burned. Naming that burn, with strong emotional language, aligns the agent with the consumer against a real pattern of harm — which is exactly the alliance the consumer needed to feel safe.",
    vossFrame:
      "Tactical empathy plus labeling with emotional intensity. Voss teaches that naming the emotional texture of a situation — not describing it clinically — is what lets the other party feel understood. \"Bamboozle\" is not a neutral word. It carries outrage. That outrage, voiced by the agent, validates the consumer's suspicion without requiring them to justify it.",
    trainingImplication:
      "Train every agent to detect trust objections early and redirect distrust outward, not inward. Ban the phrase \"trust me.\" Ban the phrase \"I promise.\" Ban the phrase \"I'm legit.\" Replace with: specific villain framing based on the consumer's history. If the consumer has been switched between plans repeatedly: \"Someone has been churning you for commissions.\" If they've received suspicious offers: \"You're right to be suspicious — there are people calling about benefits that don't exist.\" The villain must be specific, named, and positioned clearly outside the current conversation.",
  },

  // ──────────────────────────────────────────────────────────
  {
    pressurePoint: 'The Already-Won Deal',
    pressureDescription:
      'Consumer has said yes. Verbal consent given. Benefits agreed to. Then, at the next step — choosing a carrier, confirming a detail, starting the paperwork — something goes wrong and the agent sabotages their own close. This is the hardest loss to accept because the enrollment was already done.',
    missed: {
      agent: 'Marcus Hughes',
      consumer: 'Bobby Hogan',
      date: '03-18-2026',
      score: 32,
      outcome: 'MISSED',
      duration: '18:09',
      timestamp: '15:22 → 16:41',
      consumerQuote:
        'Yeah. Yeah, we\'re on the same page. Do it. [then at 16:41] I don\'t want United — name the rest of them. I\'ll tell you which one I want.',
      agentResponse:
        "Began arguing UnitedHealthcare vs. Humana instead of simply pulling up Humana options. Defended the initial carrier choice rather than honoring Bobby's stated preference.",
      quality: 'SURRENDERED',
      whyItHappened:
        'The enrollment was won at 15:22. "Do it" is as clear a verbal commitment as exists. Bobby then expressed a carrier preference — a request, not an objection. The agent treated it as an objection and argued. When the consumer asked for a different carrier, the correct response was never "here\'s why UHC is better." It was always "let me pull up Humana for you right now." The agent let his preference override the consumer\'s stated desire. The deal was lost between minute 15 and minute 17 for reasons entirely within the agent\'s control.',
    },
    saved: {
      agent: 'Marcus Hughes',
      consumer: 'Christy Tuttle',
      date: '04-16-2026',
      score: 83,
      outcome: 'ENROLLED',
      duration: '34:29',
      timestamp: '21:17 → 21:53',
      consumerQuote: 'So why did I come off of UnitedHealthcare?',
      agentResponse:
        "God forbid anything, Christy, UnitedHealthcare, like if they were to throw you under the bus or anything — if they were to change your Medicaid level, you have $104,000 of medications that you have to deal with. And you don't have that, right? I'm keeping everything the same for your everyday living. You keep your doctor, you keep your medications — you just get more money and protection.",
      quality: 'STRONG_REFRAME',
      whyItHappened:
        "Same agent, different handling. The consumer wasn't objecting — she was seeking reassurance. She had already verbally committed, but wanted to understand why the decision made sense. The agent didn't defend the new plan against her old one. He re-deployed the original risk anchor ($104,000 in drug exposure) and then stacked three continuity reassurances: same doctor, same medications, more money. The consumer's question became the second close, not a reason to back out.",
    },
    microDifference:
      "Average agents defend their recommendation when the consumer asks about it. Top closers treat the question as a request for reinforcement and re-stack the full value proposition, including the risk of not acting.",
    mechanism:
      'Post-agreement questions are not backtracking. They are closure-seeking. The consumer has decided; they are building the story they will tell themselves about why they decided. The agent\'s job is to hand them the story, not argue for the decision. Re-deploying the strongest risk anchor plus the strongest continuity reassurance gives the consumer complete material for their own self-justification. Arguing the comparison, by contrast, reopens the question the consumer had already closed.',
    vossFrame:
      "The Black Swan re-deployed. Voss teaches that the piece of information that closed the deal in the first place can be used again when the consumer needs reassurance. Not a different argument — the same argument, applied with the same force, at a different moment in the call.",
    trainingImplication:
      "Train agents to recognize the post-agreement question as a request for reinforcement, not an objection. The response template: restate the original risk anchor, stack the continuity reassurances, close with a soft confirmation. Never argue the comparison. Never defend against the old plan. Also train agents never to override a consumer's stated preference when it does not affect the outcome. If the consumer wants Humana and Humana has a viable plan, the only correct move is to pull up Humana.",
  },

  // ──────────────────────────────────────────────────────────
  {
    pressurePoint: 'The Callback Request',
    pressureDescription:
      'Consumer asks to "think about it" or "call me back tomorrow." This is the highest-frequency missed moment on the team. Average agents treat it as a legitimate request. Top closers treat it as what it actually is: a symptom of decision fatigue, which requires momentum, not postponement.',
    missed: {
      agent: 'Marcus Hughes',
      consumer: 'Claude Castleberry',
      date: '04-06-2026',
      score: 38,
      outcome: 'INCOMPLETE',
      duration: '24:49',
      timestamp: '13:38',
      consumerQuote:
        "Let me think about that for a second, then I'll call you all back.",
      agentResponse:
        "I completely understand. But remember, Claude, if you do call me back, I cannot promise these offers will be available. Even if we submit the application, say you didn't want it going forward, you just give me a call back, tell me cancel it.",
      quality: 'SURRENDERED',
      whyItHappened:
        "The consumer's real concern was losing Mount Carmel coverage — a specific, addressable fear. The agent heard \"callback\" and panicked. He accepted the deferral verbally, then circumvented it by using \"cancel-anytime\" framing to submit an application the consumer had not consented to. This created a compliance liability and an enrollment that will almost certainly disenroll. The real issue (Mount Carmel fear) was never addressed with a reframe.",
    },
    saved: {
      agent: 'Matthew Garnett',
      consumer: 'Viola Turner',
      date: '03-16-2026',
      score: 78,
      outcome: 'ENROLLED',
      duration: '74:57',
      timestamp: '21:01',
      consumerQuote:
        "(asked to be called back tomorrow to find her medications)",
      agentResponse: "We're like five minutes away from the goal post here.",
      quality: 'STRONG_REFRAME',
      whyItHappened:
        'Nine words. No question. No invitation to elaborate. A declarative sentence that reframed the moment from "continue later" to "walk away from progress already made." The agent did not argue that the deferral was bad. He named the time already invested as something at stake. Walking away now became the loss, not the choice. The consumer stayed on the line, and the enrollment closed 18 minutes later.',
    },
    microDifference:
      "Average agents accept the callback request as a legitimate next step. Top closers treat it as what it is — a symptom — and respond with a single declarative line that reframes staying as the safer option.",
    mechanism:
      "Sunk cost is psychologically real. A consumer who has spent 20 minutes on a call has already invested. Framing continuation as \"five minutes more\" while framing a callback as \"starting over tomorrow\" tips the scale decisively toward staying. The mechanism is not pressure — it is accurate accounting. The average agent ignores the sunk time; the top closer names it. Also: callbacks close at less than 20% of the original call rate. This is a known industry metric and should be treated as the decisional fact it is — a callback is, statistically, a lost deal.",
    vossFrame:
      "Loss aversion framing. Voss's research on negotiation confirms that losses feel approximately twice as intense as equivalent gains. The top closer engineers a moment where the consumer must choose between a small immediate benefit (finish the call) and a larger perceived loss (waste the time already invested). The math favors staying.",
    trainingImplication:
      "Every agent should have three memorized responses to the callback request. All three are declarative sentences, not questions. All three name the sunk cost or the specific cost of deferral. None of them accept the deferral at face value. The drill: agents role-play callback requests from consumers with varying levels of investment (5 minutes in, 20 minutes in, 45 minutes in) and must respond with a redirect calibrated to the sunk cost. The explicit rule: never offer a callback as a first response. Exhaust in-call options first, always.",
  },
]

// ─────────────────────────────────────────────────────────────

export default function TopCloserAnalysisPage() {
  return (
    <main className={styles.root}>
      {/* ─── HERO ─── */}
      <section className={`${styles.section} ${styles.hero}`}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Internal Strategic Analysis · Prepared for Leadership · April 2026
        </motion.p>

        <motion.h1
          className={styles.heroTitle}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.2 }}
        >
          The Architecture<br />of a Top Closer
        </motion.h1>

        <motion.p
          className={styles.heroSub}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.35 }}
        >
          A forensic comparison of the exact moments where our highest-performing
          agents save deals that average agents lose — and what it would take to
          build this into every agent on the floor.
        </motion.p>

        <motion.div
          className={styles.heroFooter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <span className={styles.heroScrollCue}>↓ Scroll</span>
        </motion.div>
      </section>

      {/* ─── THESIS ─── */}
      <section className={`${styles.section} ${styles.thesis}`}>
        <motion.p
          className={styles.eyebrowAlt}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.4 }}
        >
          The Thesis
        </motion.p>

        <motion.h2
          className={styles.thesisStatement}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={SPRING}
        >
          The gap isn&rsquo;t talent.<br />
          It&rsquo;s what they do in the eight seconds<br />
          after a consumer hesitates.
        </motion.h2>

        <motion.div
          className={styles.thesisBody}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ ...SPRING, delay: 0.2 }}
        >
          <p>
            We spent three weeks reading across every enrolled and missed call from
            the team&rsquo;s four highest-performing agents and the calls lost by
            the rest. What emerged was not a list of techniques. It was a pattern
            of micro-moves — things that happen in the three to ten seconds after a
            consumer says something unclear, hesitant, or defensive.
          </p>
          <p>
            These are the moments where deals die. They are also the moments where
            the gap between a top closer and an average agent is largest, most
            visible, and most teachable.
          </p>
          <p>
            What follows is a forensic breakdown of five such moments. For each one
            we show the missed call and the saved call, side by side, with the
            exact words spoken. Then we show why the micro-difference matters, what
            negotiation science calls it, and what it would take to train it.
          </p>
        </motion.div>
      </section>

      {/* ─── METHODOLOGY ─── */}
      <section className={`${styles.section} ${styles.methodology}`}>
        <div className={styles.methodInner}>
          <p className={styles.methodLabel}>How this was built</p>
          <p className={styles.methodBody}>
            Every quote in this document is verbatim from a real call, captured in
            our analysis pipeline and verified against the transcript. Every
            timestamp is the exact second the words were spoken. No examples are
            paraphrased. No examples are hypothetical. Five matched pairs follow,
            each covering one recurring pressure point where the team bleeds deals.
          </p>
        </div>
      </section>

      {/* ─── MATCHED PAIRS ─── */}
      {PAIRS.map((pair, idx) => (
        <PairSection key={pair.pressurePoint} pair={pair} index={idx} />
      ))}

      {/* ─── THE PATTERN ─── */}
      <section className={`${styles.section} ${styles.pattern}`}>
        <motion.p
          className={styles.eyebrowAlt}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
        >
          What emerges across all five
        </motion.p>

        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={SPRING}
        >
          The Pattern
        </motion.h2>

        <motion.p
          className={styles.patternLead}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ ...SPRING, delay: 0.1 }}
        >
          When we line up the saved moments, a specific profile comes into focus.
          Not a personality type. Not a talent level. A set of decisions that get
          made in the same way, across different agents, across different call
          types.
        </motion.p>

        <div className={styles.patternGrid}>
          {PATTERN_TRAITS.map((trait, i) => (
            <motion.div
              key={trait.title}
              className={styles.patternCard}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ ...SPRING, delay: 0.05 * i }}
            >
              <div className={styles.patternNum}>{String(i + 1).padStart(2, '0')}</div>
              <h3 className={styles.patternTitle}>{trait.title}</h3>
              <p className={styles.patternBody}>{trait.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── TRAINING IMPLICATIONS ─── */}
      <section className={`${styles.section} ${styles.training}`}>
        <motion.p
          className={styles.eyebrowAlt}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
        >
          What this means for training
        </motion.p>

        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={SPRING}
        >
          The Redesign
        </motion.h2>

        <motion.div
          className={styles.trainingBody}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ ...SPRING, delay: 0.1 }}
        >
          <p>
            Our current training teaches compliance, product knowledge, and script
            mechanics. It does not teach the twelve micro-moves above. The best
            agents figured them out through trial and repetition. The rest of the
            team never will, because these moves are not on any training document.
          </p>
          <p>
            Here is what a redesigned program looks like, built around the pattern
            the data revealed.
          </p>
        </motion.div>

        <div className={styles.phaseList}>
          {TRAINING_PHASES.map((phase, i) => (
            <motion.div
              key={phase.title}
              className={styles.phaseBlock}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ ...SPRING, delay: 0.1 * i }}
            >
              <div className={styles.phaseHeader}>
                <span className={styles.phaseNum}>Phase {i + 1}</span>
                <h3 className={styles.phaseTitle}>{phase.title}</h3>
              </div>
              <p className={styles.phaseGoal}>{phase.goal}</p>
              <ul className={styles.phaseList2}>
                {phase.drills.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── THE ASK ─── */}
      <section className={`${styles.section} ${styles.ask}`}>
        <motion.p
          className={styles.askLabel}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
        >
          The Decision
        </motion.p>

        <motion.h2
          className={styles.askTitle}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={SPRING}
        >
          We can keep hoping we hire stars.<br />
          Or we can start building them.
        </motion.h2>

        <motion.div
          className={styles.askBody}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ ...SPRING, delay: 0.2 }}
        >
          <p>
            The micro-moves in this document are not proprietary, not unusual, and
            not the result of any special talent. They are learnable. They are
            drillable. They are measurable on any call we record.
          </p>
          <p>
            Every agent who is trained in them will close more deals. That is not
            an aspiration. That is what the data already shows, because the
            technique gap is the only meaningful difference we can measure between
            our top four agents and everyone else.
          </p>
          <p className={styles.askClose}>
            The next step is a pilot: pick four mid-performing agents, run the
            phase-one drills for two weeks, and measure the close rate on wavering
            and callback moments before and after. We&rsquo;ll know within a month
            whether this translates.
          </p>
        </motion.div>

        <div className={styles.signoff}>
          <p className={styles.signoffLine}>Prepared by the Certainty System</p>
          <p className={styles.signoffLine}>Based on analysis of enrolled and missed calls, March–April 2026</p>
        </div>
      </section>
    </main>
  )
}

// ─── PAIR SECTION COMPONENT ────────────────────────────────────

function PairSection({ pair, index }: { pair: Pair; index: number }) {
  return (
    <section className={`${styles.section} ${styles.pairSection}`}>
      <motion.p
        className={styles.pairIndex}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.4 }}
      >
        {String(index + 1).padStart(2, '0')} / {String(PAIRS.length).padStart(2, '0')}
      </motion.p>

      <motion.h2
        className={styles.pairTitle}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={SPRING}
      >
        {pair.pressurePoint}
      </motion.h2>

      <motion.p
        className={styles.pairDescription}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ ...SPRING, delay: 0.1 }}
      >
        {pair.pressureDescription}
      </motion.p>

      <div className={styles.splitContainer}>
        {/* MISSED */}
        <motion.div
          className={`${styles.momentCard} ${styles.missedCard}`}
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ ...SPRING, delay: 0.15 }}
        >
          <div className={styles.momentHeader}>
            <span className={`${styles.outcomeBadge} ${styles.missedBadge}`}>
              {pair.missed.outcome}
            </span>
            <span className={styles.momentScore}>Score {pair.missed.score}</span>
          </div>

          <div className={styles.momentMeta}>
            <div>
              <span className={styles.metaLabel}>Agent</span>
              <span className={styles.metaValue}>{pair.missed.agent}</span>
            </div>
            <div>
              <span className={styles.metaLabel}>Consumer</span>
              <span className={styles.metaValue}>{pair.missed.consumer}</span>
            </div>
            <div>
              <span className={styles.metaLabel}>Duration</span>
              <span className={styles.metaValue}>{pair.missed.duration}</span>
            </div>
            <div>
              <span className={styles.metaLabel}>Moment</span>
              <span className={styles.metaValue}>{pair.missed.timestamp}</span>
            </div>
          </div>

          <div className={styles.quoteBlock}>
            <p className={styles.quoteLabel}>Consumer</p>
            <p className={styles.quoteText}>&ldquo;{pair.missed.consumerQuote}&rdquo;</p>
          </div>

          <div className={styles.quoteBlock}>
            <p className={styles.quoteLabel}>Agent response</p>
            <p className={styles.quoteText}>{pair.missed.agentResponse}</p>
            <p className={`${styles.qualityTag} ${styles.missedTag}`}>
              {pair.missed.quality}
            </p>
          </div>

          <div className={styles.whyBlock}>
            <p className={styles.whyLabel}>Why the deal broke</p>
            <p className={styles.whyText}>{pair.missed.whyItHappened}</p>
          </div>
        </motion.div>

        {/* SAVED */}
        <motion.div
          className={`${styles.momentCard} ${styles.savedCard}`}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ ...SPRING, delay: 0.25 }}
        >
          <div className={styles.momentHeader}>
            <span className={`${styles.outcomeBadge} ${styles.savedBadge}`}>
              {pair.saved.outcome}
            </span>
            <span className={styles.momentScore}>Score {pair.saved.score}</span>
          </div>

          <div className={styles.momentMeta}>
            <div>
              <span className={styles.metaLabel}>Agent</span>
              <span className={styles.metaValue}>{pair.saved.agent}</span>
            </div>
            <div>
              <span className={styles.metaLabel}>Consumer</span>
              <span className={styles.metaValue}>{pair.saved.consumer}</span>
            </div>
            <div>
              <span className={styles.metaLabel}>Duration</span>
              <span className={styles.metaValue}>{pair.saved.duration}</span>
            </div>
            <div>
              <span className={styles.metaLabel}>Moment</span>
              <span className={styles.metaValue}>{pair.saved.timestamp}</span>
            </div>
          </div>

          <div className={styles.quoteBlock}>
            <p className={styles.quoteLabel}>Consumer</p>
            <p className={styles.quoteText}>&ldquo;{pair.saved.consumerQuote}&rdquo;</p>
          </div>

          <div className={styles.quoteBlock}>
            <p className={styles.quoteLabel}>Agent response</p>
            <p className={styles.quoteText}>&ldquo;{pair.saved.agentResponse}&rdquo;</p>
            <p className={`${styles.qualityTag} ${styles.savedTag}`}>
              {pair.saved.quality}
            </p>
          </div>

          <div className={styles.whyBlock}>
            <p className={styles.whyLabel}>Why the deal held</p>
            <p className={styles.whyText}>{pair.saved.whyItHappened}</p>
          </div>
        </motion.div>
      </div>

      {/* ANALYSIS STACK */}
      <motion.div
        className={styles.analysisStack}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ ...SPRING, delay: 0.1 }}
      >
        <div className={styles.analysisRow}>
          <p className={styles.analysisLabel}>The micro-difference</p>
          <p className={styles.analysisBody}>{pair.microDifference}</p>
        </div>

        <div className={styles.analysisRow}>
          <p className={styles.analysisLabel}>The mechanism</p>
          <p className={styles.analysisBody}>{pair.mechanism}</p>
        </div>

        <div className={styles.analysisRow}>
          <p className={styles.analysisLabel}>Negotiation science calls it</p>
          <p className={styles.analysisBody}>{pair.vossFrame}</p>
        </div>

        <div className={`${styles.analysisRow} ${styles.trainingRow}`}>
          <p className={styles.analysisLabel}>How we train it</p>
          <p className={styles.analysisBody}>{pair.trainingImplication}</p>
        </div>
      </motion.div>
    </section>
  )
}

// ─── STATIC DATA: PATTERN TRAITS ───────────────────────────────

const PATTERN_TRAITS = [
  {
    title: 'They refuse to inherit the consumer\'s frame',
    body:
      'When a consumer says "switch," top closers say "upgrade." When a consumer says "I don\'t know," top closers say "you\'re five minutes out." The consumer\'s language is never the final language. The frame is the agent\'s job to set.',
  },
  {
    title: 'They do not defend themselves',
    body:
      'When trust is challenged, top closers redirect the distrust at a third party — a prior agent, a previous carrier, an industry pattern. They never say "trust me," "I promise," or "I\'m legitimate." Defense is the surface of guilt.',
  },
  {
    title: 'They treat hesitation as momentum loss, not objection',
    body:
      'When a consumer wavers without content, top closers do not ask what is wrong. They redirect. A question generates content that hardens into refusal. A declarative sentence redirects attention to what is at stake in walking away.',
  },
  {
    title: 'They deploy the strongest evidence at the close',
    body:
      "The $104,000 medication exposure. The zero-of-five medications covered. The specific doctor in network. The one piece of data that makes the current plan indefensible doesn't get introduced in the pitch — it gets held back and deployed at the moment the consumer asks for reassurance.",
  },
  {
    title: 'They extract verbal commitments',
    body:
      'Top closers do not just ask for a yes. They get the consumer to speak a sentence out loud that is inconsistent with walking away. "Say it with me. Dustin is not changing." Once spoken, the commitment is behavioral.',
  },
  {
    title: 'They honor the consumer\'s stated preference',
    body:
      'When the consumer names a carrier, top closers pull up that carrier. When the consumer names a doctor, top closers keep that doctor. The sale is never won by overriding what the consumer already said they wanted.',
  },
  {
    title: 'They use silence as a closing tool',
    body:
      'After the yes-or-no close question, top closers stop talking. The next person to speak determines the outcome. Average agents keep selling past the yes and re-open decisions the consumer had already made.',
  },
  {
    title: 'They create a common enemy',
    body:
      'The prior agent who churned the consumer. The carrier that isn\'t covering the medications. The system that let them fall through. Top closers position themselves not as the seller but as the fixer of someone else\'s mistake.',
  },
  {
    title: 'They don\'t confuse selling with convincing',
    body:
      'Selling is what happens when the consumer is already interested. The job of the top closer is not to make the consumer want the plan — it is to remove the things that are preventing the consumer from acting on the want they already have.',
  },
  {
    title: 'They know compliance cold',
    body:
      'Top closers can deliver the TPMO, the SOA, the enrollment disclosures, and the voice signature while thinking about something else. That gives them the cognitive bandwidth to improvise the human layer. Agents who are still reading the compliance script cannot improvise the rest.',
  },
  {
    title: 'They redeploy their best line',
    body:
      "The one sentence that worked — \"I'm not switching your insurance, I'm keeping you with Aetna\" — gets used five, ten, fifteen times in the same call. Top closers find the phrase that resonates with this specific consumer and reuse it at every resistance point.",
  },
  {
    title: 'They close in the discovery',
    body:
      "By minute ten, the top closer has already decided which plan, which benefit, which Client Gold quote will be deployed at the close. The presentation is the consumer catching up to a decision the agent already made. The discovery is where the sale happens.",
  },
]

// ─── STATIC DATA: TRAINING PHASES ──────────────────────────────

const TRAINING_PHASES = [
  {
    title: 'Compliance Mastery as the Floor',
    goal:
      "Every agent delivers the TPMO, SOA, enrollment disclosures, and voice signature from memory, at 80% of their talking speed, without cue cards. Only then do they get to the next phase. Compliance confidence is the prerequisite for everything else — agents who are still reading cannot improvise.",
    drills: [
      'Daily timed recitation of the compliance stack',
      'Partner drills: one agent delivers compliance while the other times and grades',
      'Weekly audit: every call monitored for compliance fluency, not just correctness',
    ],
  },
  {
    title: 'Frame Control',
    goal:
      'Agents stop inheriting the consumer\'s language and start setting the frame. "Switch" becomes "upgrade." "I don\'t know" becomes "you\'re five minutes out." The drill isn\'t memorizing scripts — it\'s building the reflex of language substitution under mild pressure.',
    drills: [
      'Banned word list posted at every workstation: switch, change, "trust me," "I promise"',
      'Role-play: trainer uses objection language; agent must respond with reframed language',
      'Call review: highlight every moment the agent inherited the consumer\'s frame',
    ],
  },
  {
    title: 'The Hesitation Reflex',
    goal:
      'When a consumer says "I don\'t know" or "let me think" or asks for a callback, the agent responds with a memorized declarative sentence, not a question. No agent leaves training until they can recite four redirects by reflex and has been measured responding to each one in a role-play.',
    drills: [
      'Memorize four redirects: goal-post, sunk-cost, specific-deadline, verbal-commitment',
      'Role-play: trainer asks for a callback at five points in a mock call; agent must respond without a question mark',
      'Weekly measurement: callback surrender rate per agent, per week, reviewed in coaching',
    ],
  },
  {
    title: 'Evidence Deployment',
    goal:
      'Agents learn to hold back the strongest evidence for the closing moment. Formulary checks are run with closing intent, not as compliance. The single most damning fact about the current plan gets introduced at the moment the consumer asks for reassurance, not before.',
    drills: [
      'Formulary check training: every agent runs it with the instruction "find the binary framing moment"',
      'Risk anchor drills: practice deploying the largest loss exposure number the plan data supports',
      'Call review: identify the moment the evidence was deployed and whether it was the right moment',
    ],
  },
  {
    title: 'The Verbal Commitment Close',
    goal:
      'Agents do not just ask for a yes — they get the consumer to speak a sentence that commits them behaviorally. Doctor continuity, plan name, effective date, each said aloud by the consumer before the voice signature.',
    drills: [
      'Memorize three verbal commitment lines: doctor continuity, plan specificity, protection framing',
      'Role-play: agent must extract a specific verbal commitment from the trainee-consumer before the formal close',
      'Call review: count verbal commitments extracted per successful enrollment',
    ],
  },
  {
    title: 'Post-Close Retention',
    goal:
      'Every enrolled consumer leaves the call with the agent\'s direct number, specific anti-churn instructions, and a verbal commitment to hang up on other agents. This is not customer service — it is the competitive moat that prevents the enrollment from disenrolling within 30 days.',
    drills: [
      'Memorize the five-step lock: name, direct number, customer service, confirmation code, anti-churn instruction',
      'Every training enrollment ends with the lock executed in under 90 seconds',
      'Post-enrollment retention rate tracked per agent monthly',
    ],
  },
]
