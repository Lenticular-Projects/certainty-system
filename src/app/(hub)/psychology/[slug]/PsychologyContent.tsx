'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import PageShell from '@/components/layout/PageShell'
import CalloutBlock from '@/components/ui/CalloutBlock'
import CrossLinks from '@/components/ui/CrossLinks'
import { SPRING } from '@/lib/motion'
import styles from './page.module.css'

/* ─── Page metadata ─── */
interface PageMeta {
  title: string
  movement: string
  description: string
  crossLinks: Array<{ label: string; href: string }>
}

const pageMeta: Record<string, PageMeta> = {
  'your-brain': {
    title: 'Your Brain on a Call',
    movement: 'Movement 1',
    description: 'Before you can understand what\u2019s happening in the client\u2019s head, you have to understand what\u2019s happening in yours.',
    crossLinks: [
      { label: 'Pattern 3 \u2014 Logic Responses', href: '/patterns/logic-responses' },
      { label: 'Pattern 4 \u2014 Permission-Seeking', href: '/patterns/permission-seeking-language' },
      { label: 'Their Brain on a Call', href: '/psychology/their-brain' },
    ],
  },
  'their-brain': {
    title: 'Their Brain on a Call',
    movement: 'Movement 2',
    description: 'What\u2019s actually happening neurologically when a client resists, stalls, or says \u201CI need to think about it.\u201D',
    crossLinks: [
      { label: 'Pillar 2 \u2014 Reframing', href: '/pillars/reframing' },
      { label: 'Pillar 3 \u2014 The Shift', href: '/pillars/the-shift' },
      { label: 'Why the System Is Built This Way', href: '/psychology/why-it-works' },
    ],
  },
  'why-it-works': {
    title: 'Why the System Is Built This Way',
    movement: 'Movement 3',
    description: 'Every pillar, signal, and protocol maps to a specific psychological mechanism. This section connects them.',
    crossLinks: [
      { label: 'Four Pillars', href: '/pillars' },
      { label: 'Close Confirmation Protocol', href: '/close-confirmation' },
      { label: 'Three Client Signals', href: '/signals' },
      { label: 'Your Brain on a Call', href: '/psychology/your-brain' },
    ],
  },
}

/* ─── Section wrapper ─── */
function Section({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      className={styles.section}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={SPRING}
    >
      {children}
    </motion.section>
  )
}

function Takeaway({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.takeaway}>
      <div className={styles.takeawayLabel}>The Takeaway</div>
      <div className={styles.takeawayText}>{children}</div>
    </div>
  )
}

/* ─── MOVEMENT 1: YOUR BRAIN ─── */
function YourBrainContent() {
  return (
    <>
      <Section>
        <h2 className={styles.sectionTitle}>You Default to Logic Because Your Brain Is Under Stress</h2>
        <p className={styles.bodyLead}>
          You&rsquo;ve felt this moment. The client pushes back and before you&rsquo;ve decided what to do, you&rsquo;re explaining the plan again. More features. More numbers. You know the system says name the emotion first. But your brain reaches for the product pitch instead.
        </p>
        <p className={styles.body}>
          This is not a discipline problem. It is brain chemistry.
        </p>
        <p className={styles.body}>
          <span className={styles.conceptLabel}>Stress-Induced Cognitive Narrowing</span>
        </p>
        <p className={styles.body}>
          Amy Arnsten at Yale has spent decades mapping what happens inside the brain under pressure. When you feel socially threatened &mdash; and a client pushing back is a social threat &mdash; stress chemicals flood your prefrontal cortex, the part responsible for flexible thinking and reading emotions. They don&rsquo;t enhance it. They shut it down. The older, deeper part of your brain &mdash; the basal ganglia, where your most rehearsed habits live &mdash; takes over.
        </p>
        <p className={styles.body}>
          Your brain doesn&rsquo;t <em>choose</em> the product pitch. It <em>defaults</em> to it. It&rsquo;s the most practiced thing you have. Arnsten&rsquo;s research shows that even mild, uncontrollable stress can cause a rapid loss of the cognitive flexibility you need most.
        </p>
        <p className={styles.body}>
          This is why <Link href="/patterns/logic-responses"><strong>Pattern 3</strong></Link> is the most common failure in the call data. Agents don&rsquo;t lack knowledge. Under stress, their brains can&rsquo;t access it.
        </p>
        <Takeaway>
          The system isn&rsquo;t asking you to fight your biology in real time. It&rsquo;s asking you to rehearse the right response &mdash; naming the emotion, reading the signal &mdash; enough times that it <em>becomes</em> the autopilot.
        </Takeaway>
      </Section>

      <Section>
        <h2 className={styles.sectionTitle}>You Can&rsquo;t Unsee What You Know</h2>
        <p className={styles.body}>
          <span className={styles.conceptLabel}>The Curse of Knowledge</span>
        </p>
        <p className={styles.body}>
          Camerer, Loewenstein, and Weber (1989): Once you know the plan is better, you psychologically cannot reconstruct the client&rsquo;s state of not knowing.
        </p>
        <p className={styles.body}>
          Elizabeth Newton ran an experiment at Stanford where people tapped the rhythm of a well-known song while listeners tried to guess it. Tappers predicted 50% accuracy. Actual accuracy: 2.5%. The tappers couldn&rsquo;t stop hearing the melody in their heads. To the listener, it was random taps.
        </p>
        <p className={styles.body}>
          That&rsquo;s you on every call. You see the comparison clearly. When the client hesitates, your brain interprets it as &ldquo;they need more information.&rdquo; But the client isn&rsquo;t hesitating because they lack information. They&rsquo;re hesitating because they&rsquo;re afraid, overwhelmed, or anchored to what they already have.
        </p>
        <Takeaway>
          Every time you feel the urge to explain something for the second time, pause. Something else &mdash; an emotion, a fear, a bias &mdash; is standing between them and the information. <Link href="/pillars/reframing">Reframing</Link>, <Link href="/pillars/the-shift">The Shift</Link>, and the Human Layer address that something else.
        </Takeaway>
      </Section>

      <Section>
        <h2 className={styles.sectionTitle}>Your Voice Tells on You</h2>
        <p className={styles.body}>
          <span className={styles.conceptLabel}>Emotional Contagion</span>
        </p>
        <p className={styles.body}>
          Hatfield, Cacioppo, and Rapson: Human beings automatically mimic the vocal patterns of the person they&rsquo;re talking to. When you speak with confidence &mdash; steady pace, downward inflection, controlled volume &mdash; the client&rsquo;s nervous system registers safety. When you hedge &mdash; rising inflection, filled pauses, speeding up &mdash; the client&rsquo;s nervous system registers threat.
        </p>
        <p className={styles.body}>
          Research confirms: confident speech is communicated through speed and volume (Kimble and Seidel). Falling intonation increases perceived confidence and persuasive impact (Guyer and Fabrigar). Rising intonation &mdash; the sound of a question where there should be a statement &mdash; broadcasts doubt.
        </p>
        <CalloutBlock type="neutral">
          <Link href="/patterns/permission-seeking-language"><strong>Permission-seeking language &mdash; Pattern 4</strong></Link> isn&rsquo;t just weak phrasing. It&rsquo;s an acoustic signal. &ldquo;Would it be okay if I showed you something?&rdquo; has rising inflection built in. &ldquo;Let me show you what this plan does for your situation&rdquo; has falling inflection. The client&rsquo;s brain reads the sound, not the words.
        </CalloutBlock>
      </Section>

      <Section>
        <h2 className={styles.sectionTitle}>Explaining Is Self-Soothing</h2>
        <p className={styles.body}>
          <span className={styles.conceptLabel}>Intolerance of Uncertainty</span>
        </p>
        <p className={styles.body}>
          When a client pushes back and you start explaining harder, you&rsquo;re not doing it for them. You&rsquo;re doing it for you. Research on intolerance of uncertainty (Dugas et al.) shows the brain hates ambiguity. Talking &mdash; reciting known facts, product features, numbers &mdash; fills the void and gives you the illusion of control.
        </p>
        <p className={styles.body}>
          But studies in therapeutic settings show that information-giving in high-anxiety conversations doesn&rsquo;t help the anxious listener. It makes them worse. Reflective listening &mdash; naming what the person was feeling &mdash; improved outcomes. The agent&rsquo;s attempt to manage their own stress through data is the exact thing that amplifies the client&rsquo;s stress.
        </p>
        <Takeaway>
          The silence after a pushback feels dangerous. It isn&rsquo;t. The instinct to fill it with information is your brain self-soothing. The system asks you to sit in that discomfort for one second, read the signal, and respond to what the client actually needs.
        </Takeaway>
      </Section>

      <Section>
        <h2 className={styles.sectionTitle}>The Rewiring Timeline</h2>
        <p className={styles.body}>
          <span className={styles.conceptLabel}>66 Days + Implementation Intentions</span>
        </p>
        <p className={styles.body}>
          <strong>66 days</strong> &mdash; that&rsquo;s the median time for a new behavior to become automatic (Lally, University College London). Not 21 &mdash; that&rsquo;s a myth. Missing one day doesn&rsquo;t reset the clock. Roughly 80% adherence is enough.
        </p>
        <p className={styles.body}>
          <strong>The shortcut &mdash; implementation intentions</strong> (Gollwitzer): Simple if-then plans dramatically accelerate the rewiring. <em>&ldquo;When the client pushes back, I will name the emotion I hear before I say anything about the plan.&rdquo;</em> A meta-analysis of 94 studies showed a medium-to-large effect. The if-then link fires automatically &mdash; even under stress, even under cognitive load.
        </p>
        <p className={styles.body}>
          <strong>Deliberate practice</strong> (Ericsson) matters more than call volume. Making 200 calls where you default to the pitch 200 times deepens the old habit. Practicing the specific moment &mdash; client pushes back, you name the emotion &mdash; with immediate feedback builds the new one.
        </p>
        <Takeaway>
          Pick the one moment that gets you most. Build your if-then plan. Practice it until it fires without thinking. One pattern down. Then the next one.
        </Takeaway>
      </Section>
    </>
  )
}

/* ─── MOVEMENT 2: THEIR BRAIN ─── */
function TheirBrainContent() {
  return (
    <>
      <Section>
        <h2 className={styles.sectionTitle}>The Emotional Brain Fires First &mdash; and Usually Wins</h2>
        <p className={styles.body}>
          <span className={styles.conceptLabel}>Dual-Process Theory</span>
        </p>
        <p className={styles.bodyLead}>
          Daniel Kahneman won a Nobel Prize for work that boils down to this: human beings have two systems of thinking. System 1 is fast, automatic, emotional, and always on. System 2 is slow, deliberate, analytical, and lazy. System 1 fires first. System 2 sometimes checks the work &mdash; but only if the person is calm, motivated, and has enough mental bandwidth.
        </p>
        <p className={styles.body}>
          On a phone call with a 75-year-old comparing health plan options, those conditions are almost never met. Working memory &mdash; the cognitive function needed to hold multiple plan variables simultaneously &mdash; is the function most compromised by normal aging (Carpenter and Yoon).
        </p>
        <p className={styles.body}>
          The enrollment decision comes down to how the interaction <em>feels</em>. System 1 makes the call. System 2 constructs the justification afterward &mdash; if it comes in at all.
        </p>
        <CalloutBlock type="red">
          <strong>&ldquo;I need to think about it&rdquo; is almost never System 2 asking for a spreadsheet.</strong> It is System 1 sounding an alarm. The cognitive load is too high. The emotional safety is too low. The anticipated regret of making the wrong choice feels worse than the regret of doing nothing.
        </CalloutBlock>
      </Section>

      <Section>
        <h2 className={styles.sectionTitle}>Fear Takes the Rational Brain Offline</h2>
        <p className={styles.body}>
          <span className={styles.conceptLabel}>Amygdala Activation</span>
        </p>
        <p className={styles.body}>
          When a client feels afraid, four things happen in sequence:
        </p>
        <ol className={styles.orderedList}>
          <li>The threat reaches the amygdala through a fast route (12 milliseconds) before the rational brain can evaluate it (LeDoux, NYU)</li>
          <li>The amygdala triggers stress chemicals that flood the prefrontal cortex (Arnsten, Yale)</li>
          <li>The prefrontal cortex &mdash; the part needed for rational evaluation &mdash; goes offline</li>
          <li>The client literally cannot process comparative plan information while in this state</li>
        </ol>
        <p className={styles.body}>
          This is why the system says: <strong>never respond to <Link href="/signals">RED</Link> with logic.</strong> It&rsquo;s not a style preference. It&rsquo;s a neurological impossibility.
        </p>
        <p className={styles.body}>
          <strong>How to reopen it:</strong> Name the emotion. When a person feels genuinely understood, their brain activity synchronizes with the speaker&rsquo;s &mdash; a phenomenon called <strong>neural coupling</strong> (Stephens et al., Princeton). The amygdala quiets. The prefrontal cortex comes back online. The wall comes down because you made them feel safe enough to lower it.
        </p>
        <Takeaway>
          That is what <Link href="/pillars/reframing">Reframing</Link> is. The neurologically necessary first step before anything else you say can land.
        </Takeaway>
      </Section>

      <Section>
        <h2 className={styles.sectionTitle}>They Feel Losses Twice as Hard as Gains</h2>
        <p className={styles.body}>
          <span className={styles.conceptLabel}>Loss Aversion + Status Quo Bias</span>
        </p>
        <p className={styles.body}>
          Kahneman and Tversky&rsquo;s prospect theory: people feel losses ~2x as intensely as equivalent gains. In elderly populations, three forces compound this:
        </p>
        <ul className={styles.list}>
          <li><strong>The certainty effect</strong> (Mather): Older adults weight certain outcomes more heavily. Current plan = certain. New plan = uncertain.</li>
          <li><strong>The endowment effect</strong> (Kahneman, Knetsch, Thaler): People irrationally overvalue things they own.</li>
          <li><strong>Status quo bias</strong> (Samuelson and Zeckhauser): Only ~10% of Medicare Part D consumers switch annually. 88% chose a more expensive plan than necessary. Beneficiaries forgo $1,500+ per year to avoid switching.</li>
        </ul>
        <Takeaway>
          This is why <Link href="/pillars/the-shift">The Shift</Link> exists. &ldquo;Here&rsquo;s what you gain by switching&rdquo; fights all three forces. &ldquo;Here&rsquo;s what you&rsquo;re losing every month by staying&rdquo; turns loss aversion in your favor. And Step 3 &mdash; humanizing the number &mdash; balances the loss frame with something emotionally positive.
        </Takeaway>
      </Section>

      <Section>
        <h2 className={styles.sectionTitle}>What Happens When Someone Feels Understood</h2>
        <p className={styles.body}>
          <span className={styles.conceptLabel}>Neural Coupling</span>
        </p>
        <p className={styles.body}>
          Stephens et al. at Princeton put speakers and listeners in fMRI machines and watched what happened during real conversation. When communication was working, the listener&rsquo;s brain activity began to mirror the speaker&rsquo;s. Literally. The same regions activated in the same patterns. In some areas, the listener&rsquo;s brain <em>anticipated</em> the speaker&rsquo;s next thought.
        </p>
        <p className={styles.body}>
          When you name what the client is feeling, their brain recognizes its internal state has been decoded. This triggers the brain&rsquo;s reward system. Feeling understood <em>feels good</em> neurologically. And that reward response quiets the amygdala and brings the rational brain back online.
        </p>
        <CalloutBlock type="green">
          <strong>The Human Layer is not rapport for the sake of being nice.</strong> It is the neurological prerequisite for rational decision-making. Until the client feels understood, their rational brain is unavailable.
        </CalloutBlock>
      </Section>

      <Section>
        <h2 className={styles.sectionTitle}>A Story Beats an Argument</h2>
        <p className={styles.body}>
          <span className={styles.conceptLabel}>Narrative Transportation</span>
        </p>
        <p className={styles.body}>
          Green and Brock: When a person is absorbed in a story, the cognitive resources needed for counterarguing get redirected to processing the narrative. Transportation and counterarguing are fundamentally incompatible. The brain can&rsquo;t do both.
        </p>
        <p className={styles.body}>
          A meta-analysis (Braddock and Dillard, 7,000+ participants) confirmed narratives reliably shift beliefs, attitudes, and behaviors. The effect works through character identification &mdash; the closer the story subject matches the listener&rsquo;s situation, the deeper the absorption.
        </p>
        <Takeaway>
          The <Link href="/storytelling">Story Bank</Link> exists because information gets counterargued. Stories get experienced. A 60-second story outperforms a 5-minute logical argument.
        </Takeaway>
      </Section>

      <Section>
        <h2 className={styles.sectionTitle}>A 75-Year-Old Is at the Edge of Cognitive Capacity</h2>
        <p className={styles.body}>
          <span className={styles.conceptLabel}>Cognitive Load + Aging</span>
        </p>
        <p className={styles.body}>
          Research by Tymula et al. found that even the healthiest older adults showed dramatically inconsistent choices with complex decisions. The brain compensates by shifting to simpler strategies &mdash; fewer variables, fewer comparisons.
        </p>
        <p className={styles.body}>
          The critical finding: while general working memory declines with age, working memory for emotional information remains selectively unimpaired. Connecting the plan to something emotionally real isn&rsquo;t just more persuasive. It&rsquo;s more <em>processable</em>.
        </p>
        <Takeaway>
          This is why the <Link href="/math-breakdown">Math Breakdown</Link> annualizes. You&rsquo;re simplifying the cognitive frame from twelve monthly variables to one annual comparison. The cognitive load drops. The decision becomes possible.
        </Takeaway>
      </Section>
    </>
  )
}

/* ─── MOVEMENT 3: WHY IT WORKS ─── */
function WhyItWorksContent() {
  return (
    <>
      <Section>
        <h2 className={styles.sectionTitle}>Every Decision Is Emotional First</h2>
        <p className={styles.body}>
          <span className={styles.conceptLabel}>Somatic Marker Hypothesis</span>
        </p>
        <p className={styles.body}>
          Antonio Damasio at USC: Patients with damage to the emotional processing center of the brain had perfectly intact analytical abilities &mdash; but couldn&rsquo;t make decisions. Without emotional signals, they became trapped in endless analysis. The body generates emotional signals (gut feelings) that pre-filter decisions before the rational mind engages.
        </p>
        <p className={styles.body}>
          Every decision is emotional first. Even &ldquo;compare the numbers&rdquo; runs through an emotional filter. $1,400 in lost benefits isn&rsquo;t just a number &mdash; it&rsquo;s a <em>feeling</em>. The number triggers the feeling. The feeling drives the decision. The rational mind constructs the justification afterward.
        </p>
        <CalloutBlock type="green">
          <strong>This is why the system works.</strong> The Human Layer creates emotional resonance. Reframing addresses the emotional block. The Shift creates emotional urgency. Storytelling delivers the emotional experience. The Math Breakdown provides the rational justification the client needs <em>after</em> the emotional decision is already leaning your way.
        </CalloutBlock>
      </Section>

      <Section>
        <h2 className={styles.sectionTitle}>More Information Does Not Change Minds</h2>
        <p className={styles.body}>
          <span className={styles.conceptLabel}>Information Deficit Model (Debunked)</span>
        </p>
        <p className={styles.body}>
          Dan Kahan at Yale: The most scientifically literate people showed the <em>most</em> polarized responses to complex risks. They used their analytical skills to defend their existing position, not update it. Kahan calls it <strong>identity-protective cognition</strong>. Ziva Kunda&rsquo;s foundational work on <strong>motivated reasoning</strong> confirmed: people recruit cognitive processes selectively to reach conclusions they&rsquo;re already motivated to reach.
        </p>
        <Takeaway>
          This is why <Link href="/patterns/logic-responses">Pattern 3</Link> is so expensive. When a client is in RED and you respond with more information, you&rsquo;re feeding their motivated reasoning engine. The system&rsquo;s answer: address the emotional state first through <Link href="/pillars/reframing">Reframing</Link>, so information arrives at a brain ready to process it fairly.
        </Takeaway>
      </Section>

      <Section>
        <h2 className={styles.sectionTitle}>Reframing Changes the Brain &mdash; Suppression Makes It Worse</h2>
        <p className={styles.body}>
          <span className={styles.conceptLabel}>Cognitive Reappraisal vs. Suppression</span>
        </p>
        <p className={styles.body}>
          James Gross&rsquo;s research: <strong>Suppression</strong> &mdash; pushing down the emotion &mdash; <em>increases</em> amygdala activity. The fear gets louder. It exhausts cognitive resources and impairs memory. <strong>Reappraisal</strong> &mdash; changing the meaning &mdash; <em>decreases</em> amygdala activation. The fear quiets. Working memory returns.
        </p>
        <p className={styles.body}>
          When you ignore the client&rsquo;s emotion and keep presenting, you&rsquo;re forcing them into suppression. When you reframe &mdash; &ldquo;I hear you&rsquo;re worried about losing Dr. Smith; let me show you that he&rsquo;s actually in this network&rdquo; &mdash; you&rsquo;re performing cognitive reappraisal.
        </p>
        <CalloutBlock type="red">
          <strong><Link href="/pillars/reframing">Pillar 2 &mdash; Reframing</Link></strong> is cognitive reappraisal applied to a sales conversation. You&rsquo;re not arguing with the fear. You&rsquo;re changing what it means.
        </CalloutBlock>
      </Section>

      <Section>
        <h2 className={styles.sectionTitle}>The First Number Wins</h2>
        <p className={styles.body}>
          <span className={styles.conceptLabel}>Anchoring Effect</span>
        </p>
        <p className={styles.body}>
          Tversky and Kahneman: The first numerical value a person encounters becomes a reference point that biases every subsequent judgment. Even arbitrary anchors shifted estimates by 20 points. Expertise didn&rsquo;t fix it. Gourville&rsquo;s &ldquo;pennies-a-day&rdquo; research: framing a cost as &ldquo;85 cents per day&rdquo; yielded 52% agreement. The identical cost framed as &ldquo;$300 per year&rdquo; yielded 30%.
        </p>
        <Takeaway>
          This is why the <Link href="/math-breakdown">Math Breakdown</Link> annualizes. Presenting $117/month creates a small anchor. Presenting $1,400/year creates a large anchor. Same math. Different brain.
        </Takeaway>
      </Section>

      <Section>
        <h2 className={styles.sectionTitle}>Guided vs. Sold To &mdash; The Line Is Autonomy</h2>
        <p className={styles.body}>
          <span className={styles.conceptLabel}>Reactance + Self-Determination Theory</span>
        </p>
        <p className={styles.body}>
          Brehm&rsquo;s <strong>psychological reactance</strong>: When a person perceives their freedom is threatened, they push back &mdash; not because your recommendation is wrong, but because they feel controlled. Deci and Ryan&rsquo;s <strong>Self-Determination Theory</strong>: three needs &mdash; autonomy, competence, relatedness. When all three are met, the person experiences guidance. When autonomy is threatened, they experience coercion.
        </p>
        <p className={styles.body}>
          Research shows that simply reminding someone they&rsquo;re free to decide dramatically reduces reactance (Carpenter, meta-analysis).
        </p>
        <Takeaway>
          The consultant frame works because &ldquo;Let me show you what I found&rdquo; satisfies autonomy. &ldquo;You need to switch&rdquo; threatens it. <Link href="/pillars/persuasion">Pillar 1 &mdash; Persuasion</Link> is the art of leading without triggering the defense.
        </Takeaway>
      </Section>

      <Section>
        <h2 className={styles.sectionTitle}>Their Words Matter More Than Yours</h2>
        <p className={styles.body}>
          <span className={styles.conceptLabel}>The Echo Effect</span>
        </p>
        <p className={styles.body}>
          Three things happen simultaneously when you use the client&rsquo;s own words: mimicry drives affiliation (Van Baaren), self-referential processing activates &mdash; information processed as self-relevant is encoded deeper (Kelley; Fossati), and neural coupling triggers as the client feels their reality has been heard.
        </p>
        <Takeaway>
          Client Gold isn&rsquo;t just close material because it&rsquo;s persuasive. It&rsquo;s close material because the client&rsquo;s brain processes their own words in a fundamentally different way than yours.
        </Takeaway>
      </Section>

      <Section>
        <h2 className={styles.sectionTitle}>Certainty Is a Feeling, Not a Conclusion</h2>
        <p className={styles.body}>
          <span className={styles.conceptLabel}>Processing Fluency + Self-Generation</span>
        </p>
        <p className={styles.body}>
          The brain uses ease of processing as a proxy for truth (Reber and Schwarz). The <strong>generation effect</strong> (Slamecka and Graf): information a person generates themselves is remembered significantly better. <strong>Saying-is-believing</strong> (Higgins and Rholes): articulating a position shifts memory and beliefs to align with what was said.
        </p>
        <p className={styles.body}>
          When the <Link href="/close-confirmation">Close Confirmation Protocol</Link> asks the client to restate their decision, they are generating their own certainty. That articulation cements the decision through the generation effect, saying-is-believing, and processing fluency simultaneously.
        </p>
        <CalloutBlock type="red">
          <strong><Link href="/patterns/hollow-yes">Pattern 9 &mdash; the Hollow Yes</Link></strong> is so dangerous because a &ldquo;sure, okay&rdquo; has no self-referential depth. No generation effect. No saying-is-believing reinforcement. Self-generated certainty is the only kind that holds.
        </CalloutBlock>
      </Section>

      <Section>
        <h2 className={styles.sectionTitle}>The Complete Map</h2>
        <p className={styles.body}>
          Every component of the Certainty System maps to a specific psychological mechanism.
        </p>
        <div className={styles.mapTable}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>System Component</th>
                <th>Psychological Mechanism</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>RED Signal &mdash; name the emotion</td><td>Amygdala hijack + neural coupling</td></tr>
              <tr><td>GREEN Signal &mdash; present and advance</td><td>System 1/System 2 alignment</td></tr>
              <tr><td>YELLOW Signal &mdash; redirect with a statement</td><td>Intolerance of uncertainty</td></tr>
              <tr><td>Pillar 1 &mdash; Persuasion</td><td>Emotional contagion + reactance management</td></tr>
              <tr><td>Pillar 2 &mdash; Reframing</td><td>Cognitive reappraisal vs. suppression</td></tr>
              <tr><td>Pillar 3 &mdash; The Shift</td><td>Loss aversion + anchoring effect</td></tr>
              <tr><td>Pillar 4 &mdash; Refocusing</td><td>Dead air amplification + uncertainty</td></tr>
              <tr><td>The Human Layer</td><td>Neural coupling + self-referential processing</td></tr>
              <tr><td>Client Gold</td><td>Self-referential encoding + somatic markers</td></tr>
              <tr><td>Math Breakdown Step 3</td><td>Socioemotional selectivity + cognitive load</td></tr>
              <tr><td>Storytelling</td><td>Narrative transportation + social proof</td></tr>
              <tr><td>Close Confirmation</td><td>Self-generation + processing fluency + implementation intentions</td></tr>
              <tr><td>Pattern 3 &mdash; Logic to Emotion</td><td>Information deficit model (debunked)</td></tr>
              <tr><td>Pattern 4 &mdash; Permission-Seeking</td><td>Vocal confidence signaling</td></tr>
              <tr><td>Pattern 5 &mdash; Dead Air</td><td>Uncertainty amplification + rumination</td></tr>
              <tr><td>Pattern 9 &mdash; Hollow Yes</td><td>Oettingen Paradox + absence of self-generation</td></tr>
            </tbody>
          </table>
        </div>
      </Section>
    </>
  )
}

/* ─── Client component ─── */
export default function PsychologyContent({ slug }: { slug: string }) {
  const meta = pageMeta[slug]

  if (!meta) {
    notFound()
  }

  const contentMap: Record<string, () => JSX.Element> = {
    'your-brain': YourBrainContent,
    'their-brain': TheirBrainContent,
    'why-it-works': WhyItWorksContent,
  }

  const Content = contentMap[slug]

  return (
    <PageShell signal="neutral">
      {/* Page header */}
      <header className={styles.header}>
        <motion.div
          className={styles.movementLabel}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.05 }}
        >
          {meta.movement}
        </motion.div>

        <motion.h1
          className={`${styles.headline} display-xl`}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.1 }}
        >
          {meta.title}
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.2 }}
        >
          {meta.description}
        </motion.p>
      </header>

      {/* Body content */}
      {Content && <Content />}

      {/* Cross links */}
      <CrossLinks links={meta.crossLinks} />
    </PageShell>
  )
}
