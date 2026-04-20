'use client'

import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import styles from './page.module.css'

// ─────────────────────────────────────────────────────────────
// Data: all quotes verbatim from call JSON files
// Source: /04-json/ across March–April 2026
// Top closers: Marcus Hughes, Lawrence Morris, Steeve Exalant
// ─────────────────────────────────────────────────────────────

type Example = {
  agent: 'Marcus' | 'Lawrence' | 'Steeve'
  consumer: string
  date: string
  timestamp: string
  context: string
  quote: string
}

type WeakContrast = {
  agent: string
  consumer: string
  date: string
  timestamp: string
  context: string
  quote: string
  whyItFailed: string
}

type PressurePoint = {
  number: string
  title: string
  whatHappens: string
  examples: Example[]
  weakContrast?: WeakContrast
  sharedMove: string
  mechanism: string
  teach: string
}

const LENSES = [
  {
    agent: 'Marcus',
    lens: 'The Gap Hunter',
    description:
      "Marcus runs formulary checks, network checks, and carrier history checks as closing tools — not as compliance or suitability steps. He is hunting for one specific fact about the consumer's current plan that makes it indefensible. When he finds it, the enrollment is already done. \"Zero out of five of your medications are covered.\" \"$104,000 if your coverage drops.\" \"Your doctor isn't in network right now — you're paying out of pocket when you go.\" These aren't arguments. They are Black Swans — pieces of hidden information that, once surfaced, make the current situation structurally untenable.",
    signature: 'What is failing in your current plan, specifically — and in dollars?',
  },
  {
    agent: 'Lawrence',
    lens: 'The Patient Verifier',
    description:
      "Lawrence builds enrollments on visible evidence. When a consumer names a doctor, Lawrence does not promise the doctor is in network — he pulls up the provider's website in real time, reads from it aloud, and confirms. When he presents a benefit, he annualizes the figure on the spot. And when a consumer expresses fear of not qualifying, Lawrence deploys a dignity frame — \"you've worked your whole life and paid into these programs\" — that treats the enrollment as entitlement the consumer has earned, not charity they are receiving. Trust is built through visible work, not through reassurance.",
    signature: 'Here is what I am looking at right now. Here is what it says.',
  },
  {
    agent: 'Steeve',
    lens: 'The Protective Frame',
    description:
      "Steeve never positions himself as selling. He positions himself as correcting someone else's mistake. \"Someone was trying to take you off your chronic plan.\" \"They tried to bamboozle you.\" \"I don't know why whoever helped you didn't put you under this plan.\" The consumer's distrust — which on an average call would be aimed at the current agent — gets redirected at a third-party villain. The consumer and Steeve are on the same team against an outside threat. Objections don't form because there is no opponent to object to. The enrollment is framed as a remedy, not a purchase.",
    signature: "Someone did something to you. I'm going to fix it.",
  },
]

// ─── FLOW: THE PROCESS ─────────────────────────────────────────

const FLOW_PHASES = [
  {
    num: '01',
    title: 'Opening',
    duration: '60–90 seconds',
    summary:
      "Top closers open by demonstrating they have already done the work. The first sentence either names what the consumer called about or confirms what is already on file. It never asks the consumer to re-establish context. Authority is established before the first objection is possible.",
    detail:
      "On warm transfers: \"I apologize having you repeat some of the same questions.\" On cold calls: \"You said you called about that grocery card? I'm going to help you out today.\" On consumer-initiated inquiries: the agent opens by quoting the reason for the call and then promises immediate action. The consumer's first impression is not that they are being sold to — it is that the person on the other end is prepared.",
  },
  {
    num: '02',
    title: 'Discovery',
    duration: '8–18 minutes',
    summary:
      "The call is not a sales pitch — it is an interrogation performed with warmth. Top closers collect chronic conditions, doctor names, medication lists, address history, Medicaid status, and emotional disclosures in a patient, structured sequence. They do not present a plan until they know what the plan must solve.",
    detail:
      "Every piece of information collected is ammunition. A chronic condition triggers C-SNP eligibility. A Medicaid disclosure unlocks D-SNP pathways. A medication name hints at a diagnosis. An address history reveals an SEP. An emotional disclosure — \"I'm on one check a month,\" \"I had a bad experience with another agent,\" \"my husband passed away\" — is Client Gold, held silently for later deployment. Top closers do not react to these disclosures. They file them.",
  },
  {
    num: '03',
    title: 'Gap Identification',
    duration: '2–5 minutes',
    summary:
      "The single most distinctive move. Top closers actively hunt for what is wrong with the current plan — and they hunt with closing intent. The formulary check is not a check. It is an attempt to find the medication that isn't covered. The network check is an attempt to find the doctor that isn't in network. The carrier history check is an attempt to find the previous agent who churned the consumer.",
    detail:
      "The moment a gap is found, the gap becomes the frame of the rest of the call. \"Zero out of five medications.\" \"Your doctor is out of network.\" \"Someone took you off your chronic plan.\" The consumer's current situation is now defined by the gap. The new plan is introduced as the correction — not as an alternative.",
  },
  {
    num: '04',
    title: 'Plan Match & Presentation',
    duration: '5–10 minutes',
    summary:
      "Top closers lead the plan presentation with the benefit that matches the consumer's stated reason for calling. If the consumer called about a food card, the presentation opens with the OTC dollar amount. If the consumer called about dental, it opens with the dental allowance. The star rating and the premium come second.",
    detail:
      "The plan is never presented as an alternative to the current plan. It is presented as a correction, an upgrade, a continuation. \"I'm not switching your insurance. I'm keeping you with Aetna. I'm just giving you a stronger policy with them.\" \"This is still your Humana. It's a Humana Gold Plus Lung — a C-SNP plan built for your conditions.\" The word \"switch\" does not appear.",
  },
  {
    num: '05',
    title: 'The Math Breakdown',
    duration: '2–4 minutes',
    summary:
      "Every benefit number stated as three distinct figures: the monthly, the annual, and the humanized. \"$130 a month. That's $1,560 for the year. For someone on one check a month, that's real money.\" Top closers do not expect the consumer to do the multiplication. They do it out loud, every time.",
    detail:
      "When the gap involves medication cost, top closers deploy the risk anchor: \"If your coverage dropped, you'd be out $104,000 a year on these medications. You don't have that money, right?\" This is loss framing at maximum intensity. Losses feel twice as large as equivalent gains. The status quo becomes the riskier position.",
  },
  {
    num: '06',
    title: 'Objection Handling',
    duration: 'as long as it takes',
    summary:
      "Top closers never surrender to an objection. They do not offer callbacks. They do not defend themselves. They either reframe the objection through language substitution, solve it in real time with evidence, or redirect the distrust at a third party.",
    detail:
      "When content-free hesitation appears, they do not ask what the consumer is unsure about. Asking for content manufactures an objection that wasn't there. Instead, they restate the value stack, redeploy the gap, or name the stakes of walking away. The objection handling library is rehearsed, specific, and never improvised under pressure.",
  },
  {
    num: '07',
    title: 'The Close',
    duration: 'under 60 seconds',
    summary:
      "A binary question with the plan name stated. \"Does this plan look like what you want to go with for the new year? Yes or no?\" No permission-seeking. No \"would you like to.\" The plan is named. The question is asked. The silence that follows is the close.",
    detail:
      "On consumers who have demonstrated clear enrollment signals during discovery, top closers use the assumptive close instead: \"Let's get you started.\" No question mark. The next step is the voice signature.",
  },
  {
    num: '08',
    title: 'The Post-Close Lock',
    duration: '60 seconds',
    summary:
      "The call does not end after the enrollment. The post-close lock is 60 seconds that protects the enrollment from the next three agents who will call this consumer this week. Direct number, carrier customer service, confirmation code, anti-churn instructions, and — when warranted — a verbal commitment to hang up on other agents.",
    detail:
      "\"From today forward, do not pick up any more phone calls about Medicare. Do not switch your policy. Do not do anything further with Medicare. Stick with what you have.\" For consumers who have been churned repeatedly, top closers ask: \"If the name is not mine, what are you going to do?\" The consumer must answer: \"Hang up.\" Once they say it aloud, they remember it.",
  },
]

// ─── PRESSURE POINTS: HOW THEY PUSH THROUGH ───────────────────

const PRESSURE_POINTS: PressurePoint[] = [
  // 1. Carrier / Agent Loyalty
  {
    number: '01',
    title: "When the consumer is loyal to their current plan",
    whatHappens:
      "The consumer says some version of \"I'm happy with what I have\" or \"I've been with them for years.\" The objection sounds like carrier preference. It almost never is. The consumer is defending themselves against the cognitive weight of a decision. They are using the carrier name as armor.",
    examples: [
      {
        agent: 'Marcus',
        consumer: 'Polly Hunt',
        date: '03-25-2026',
        timestamp: '31:01',
        context: 'Polly had resisted switching repeatedly across 30 minutes. Marcus deployed this line — then redeployed it five more times across the call.',
        quote:
          "Polly, I'm not switching your insurance. I'm keeping you with Aetna. I'm just giving you a stronger policy with them.",
      },
      {
        agent: 'Lawrence',
        consumer: 'Cephas Nemrod',
        date: '03-23-2026',
        timestamp: '21:31',
        context: 'Cephas had voiced concern about leaving his current Humana plan. Lawrence named the carrier, named the specific plan within the carrier, and framed it as a specialized upgrade within the same relationship.',
        quote:
          "This is still your Humana. It's a Humana Gold Plus Lung. It's a C-SNP plan.",
      },
      {
        agent: 'Steeve',
        consumer: 'Michael Morgan',
        date: '03-18-2026',
        timestamp: '13:24',
        context: 'Morgan had been churned between plans six times in three months. He was defending Aetna — which he actually preferred but had been moved off of.',
        quote:
          "Here's what I can do for you Mr. Morgan — since you were happy with Aetna, they treated you well and you loved it, I can put you back in your Aetna and I can be your agent for the full year.",
      },
    ],
    weakContrast: {
      agent: 'A weaker agent',
      consumer: 'David Beatty',
      date: '03-31-2026',
      timestamp: '7:45',
      context: "Consumer said he'd been with UnitedHealthcare for 5–6 years and wasn't comfortable with Humana. The agent had a legitimately better benefit to pitch ($355 vs. $331 OTC).",
      quote:
        "That's up to you, boss. I can't force you to do anything, but I can guide you to the water. I can't force you to drink. Humana is a stronger company all around.",
      whyItFailed:
        'Two fatal moves in one response. First, the "I can\'t force you" framing tells the consumer the agent has already surrendered — the decision is now entirely theirs to refuse. Second, "Humana is a stronger company all around" is the exact thing a top closer would never say — it argues AGAINST the consumer\'s loyalty, which entrenches them. The consumer had a real objection (five years of loyalty) that could have been reframed into a close: "After five years, you\'re still calling around looking for something better — that tells me they haven\'t been giving you what you deserve." The reframe was available. The surrender was the choice.',
    },
    sharedMove:
      "Delete the word \"switch\" from the conversation. Reframe the enrollment as continuity, upgrade, correction, or restoration. The consumer's loyalty is not argued against — it is honored by being absorbed into the new enrollment. Same carrier. Same name on the card. Better benefits.",
    mechanism:
      "Loyalty objections are protection against decisional weight, not expressions of allegiance. Arguing that the new plan is better forces the consumer to defend their existing choice, which entrenches them. Removing the word \"switch\" removes the thing they are defending against. What remains is not a decision; it is an acceptance of improvement to what they already have.",
    teach:
      "The words \"switch\" and \"change\" should be banned from every script, every training example, and every call monitoring rubric. The drill: agents rewrite their standard pitch using only the substitutions — upgrade, stronger policy, put you back, same carrier stronger plan, correction. Practice until the language is reflexive under pressure.",
  },

  // 2. Medication Coverage Gap (The Black Swan)
  {
    number: '02',
    title: "When the formulary check reveals the current plan fails the consumer",
    whatHappens:
      "The consumer is on medications. The agent runs the formulary check. The current plan covers few or none of them, or is about to drop one. This is a Black Swan moment — a single fact that, once surfaced, makes the current plan structurally indefensible.",
    examples: [
      {
        agent: 'Marcus',
        consumer: 'Linda Cook',
        date: '03-17-2026',
        timestamp: '27:10',
        context: "Linda had switched plans every month since January. Marcus discovered the new plan she was being moved to would cover none of her medications.",
        quote:
          "I don't know who you spoke with, Linda, but on my screen it says zero out of five of your medications are covered on that policy. I am very glad I can help you out today.",
      },
      {
        agent: 'Marcus',
        consumer: 'Christy Tuttle',
        date: '04-16-2026',
        timestamp: '15:33',
        context: "Christy had 11 medications including Austedo and Rexulti, two of the most expensive on market. Marcus discovered her current plan covered only 2 of 11.",
        quote:
          "If you were to come out of pocket, do you know how much it's telling me for the one year of coverage? $104,000. You don't have that money, right? Not hardly. Let's get you on this plan. This is going to cover 10 out of your 11 medications.",
      },
      {
        agent: 'Lawrence',
        consumer: 'Joseph Conley',
        date: '03-26-2026',
        timestamp: '16:27',
        context: "Joseph was on Ozempic and worried about the cost. Lawrence ran the check with precision and gave him the exact annual figure.",
        quote:
          "There's a little bit of a cost to it but for the year — for the entire year it's about ninety-one dollars.",
      },
    ],
    weakContrast: {
      agent: 'A weaker agent',
      consumer: 'Lyman',
      date: '03-31-2026',
      timestamp: '19:00',
      context: 'The consumer had disclosed multiple chronic conditions, including malabsorption syndrome, and a non-covered medication (Brimonidine/Timolol) was identified. The agent found the gap but didn\'t weaponize it.',
      quote:
        'The agent walked the consumer through the formulary exception process as a procedural step. No risk anchor was deployed. No C-SNP pivot was offered. The medication gap was treated as a coverage logistics problem to be solved administratively, not as the closing moment.',
      whyItFailed:
        "A top closer would have heard 'chronic conditions stack up' and pivoted immediately to a C-SNP plan framed around those specific conditions, with a binary comparison between the current plan's coverage and the C-SNP's coverage. The formulary gap was the Black Swan — and the agent politely stepped around it. The enrollment died because the agent turned the weapon into a workflow.",
    },
    sharedMove:
      "Turn the coverage gap into a binary number the consumer cannot rationalize past. Zero of five. Two of eleven. $104,000. $91 a year. Specific figures destroy the consumer's ability to maintain the fiction that the current plan is fine. Top closers never say \"your plan doesn't cover everything\" — they say the exact number.",
    mechanism:
      "Anchoring plus loss aversion. Specific numbers have no reference frame to argue against. Zero has no counter. A $104,000 exposure is catastrophic even if the probability is low, because humans weight rare losses heavily when the magnitude is large. Top closers engineer the moment where the status quo becomes the dangerous choice.",
    teach:
      "Every agent should be trained to run the formulary check with closing intent, not as a suitability step. The drill: agents practice identifying the strongest binary framing that the plan data supports, and deploying it in a single sentence, without editorial. The line \"it says zero out of five of your medications are covered\" must be delivered with zero softening language.",
  },

  // 3. Doctor Network
  {
    number: '03',
    title: "When the consumer needs to keep their doctor",
    whatHappens:
      "The consumer names a doctor. The doctor is the single most important thing to them. A promise that the doctor is in network is not enough; the consumer has been lied to before. This is where average agents lose the call by making claims they can't back up. Top closers perform the verification in front of the consumer.",
    examples: [
      {
        agent: 'Lawrence',
        consumer: 'Troy Poole',
        date: '03-25-2026',
        timestamp: '12:13',
        context: "Troy wanted Humana PPO, not HMO, because his doctor had denied him in the past. Lawrence went to the doctor's website live.",
        quote:
          "I want to make sure it says Dr. Garcia accepts Humana PPO. I'm looking at that right now. According to this, he does take Humana PPO. He takes United Health Care. It says he takes Humana.",
      },
      {
        agent: 'Marcus',
        consumer: 'Mary Carey',
        date: '03-30-2026',
        timestamp: '9:43',
        context: "Marcus had planned to pitch UnitedHealthcare. He ran the doctor check, found Dr. Aliband was in Aetna's network but NOT UHC's. He pivoted carriers mid-call without hesitation.",
        quote:
          "In your case right now, because I want to keep your doctor, we're going to go with the Aetna giveback. Because I see you have Aetna right now, correct?",
      },
      {
        agent: 'Marcus',
        consumer: 'Tony Gibson',
        date: '04-06-2026',
        timestamp: '15:02',
        context: "Marcus ran the doctor check and found Tony's primary doctor was not in network on the current plan — Tony had been paying out of pocket without knowing it.",
        quote:
          "We are making this update because it looks like previously you were on a chronic special needs plan, rightfully so — because your primary doctor, he's not in network with your plan right now. So when you do go and see him, you're going to pay out of pocket and we don't want that for you. So with UnitedHealthcare, it's going to keep him in network.",
      },
    ],
    weakContrast: {
      agent: 'A weaker agent',
      consumer: 'Zellmo Ridley',
      date: '03-30-2026',
      timestamp: '19:12',
      context: "The consumer said she didn't want UnitedHealthcare because the ride limit caused her to miss blood pressure appointments. The agent's response came AFTER the consumer had already firmly refused UHC.",
      quote:
        "You know what's stopping you making that change? I mean, at least from what I'm saying, it's the same thing with Edna.",
      whyItFailed:
        "The real objection was named at 13:27 — unreliable transportation to blood pressure appointments. That was a concrete, solvable fear. A top closer would have verified whether the new plan solved the transportation problem specifically (different ride benefits, different network) before presenting anything. Instead, the agent pitched UHC, got refused, and then tried to argue the consumer out of the refusal after the fact. Arguing after a firm no doesn't recover the sale — it cements the decision. The doctor/carrier issue was never verified; the pressure was applied instead.",
    },
    sharedMove:
      "Never promise. Verify visibly. When the verification surfaces a conflict, pivot the carrier rather than argue the plan. The consumer's doctor is non-negotiable, and top closers do not try to negotiate it — they build the plan around it.",
    mechanism:
      "Verification is theater. The consumer hears the keyboard, hears the agent read from the provider website, watches the data become visible. This is evidence, not promise. Evidence does not require trust; it replaces the need for trust. Promises require trust the consumer hasn't granted yet.",
    teach:
      "Every agent must run doctor network verification in real time, out loud, before presenting a plan. Ban the phrase \"I believe your doctor is in network.\" Replace with the verification performance: \"Let me look at this right now. Here's what it says.\" The drill: mock calls where the trainer varies whether the doctor is or isn't in network, and the agent must either confirm visibly or pivot carriers without showing hesitation.",
  },

  // 4. The Scam / Trust Objection
  {
    number: '04',
    title: "When the consumer has been burned by a previous agent",
    whatHappens:
      "The consumer says some version of \"I've been switched too many times,\" \"I don't trust any of this,\" or \"I don't know what I'm on anymore.\" The distrust is real — earned by prior agents who churned them or enrolled them without consent. Defensive reassurance fails here, because it sounds like what the last agent said.",
    examples: [
      {
        agent: 'Steeve',
        consumer: 'William Moore',
        date: '03-18-2026',
        timestamp: '30:28',
        context: "Moore had been enrolled in a Devoted Health plan without his knowledge. Steeve discovered it and named the prior agent's behavior with deliberate emotional intensity.",
        quote:
          "They tried to bamboozle you into a devoted plan, telling you, you know, saying you were chronically ill when you're not.",
      },
      {
        agent: 'Steeve',
        consumer: 'Laverne Watts',
        date: '03-18-2026',
        timestamp: '(mid-call)',
        context: "Watts had been churned. Steeve discovered someone had attempted to take her off her C-SNP plan.",
        quote:
          "I see you probably spoke with somebody and they were trying to take you off of your chronic plan and try to put you on to another plan that was not chronic. And that was going to take away your benefits.",
      },
      {
        agent: 'Steeve',
        consumer: 'Jeffrey Bryce',
        date: '03-18-2026',
        timestamp: '8:22',
        context: "Bryce qualified for a C-SNP plan that a prior agent had failed to enroll him in. Steeve discredited the prior agent without having to argue anything about himself.",
        quote:
          "I don't know why whoever helped you didn't put you under this plan.",
      },
      {
        agent: 'Marcus',
        consumer: 'Oleson Toe',
        date: '03-18-2026',
        timestamp: '39:25',
        context: "Oleson had been switched to WellCare without understanding it. Marcus positioned the re-enrollment as restoration, not as a new sale.",
        quote:
          "So it looks like you spoke with somebody and they put you on a WellCare plan. Do you remember that? I'm not changing anything, Olson. I'm putting you right back to the policy you had because somebody took you off of it.",
      },
    ],
    weakContrast: {
      agent: 'A weaker agent',
      consumer: 'Cindy Laggett',
      date: '03-31-2026',
      timestamp: '5:42',
      context: "Cindy had said earlier in the call that she'd \"checked on it before and didn't think this card will do anything\" — a trust-objection rooted in a prior bad experience. When she refused to share her Medicare number at 4:49, the agent reached for regulatory authority.",
      quote:
        "I'm not going to pressure you at all. The only reason I ask is because of CMS.gov and federal law. Other people give me that information.",
      whyItFailed:
        "Three fatal moves. (1) \"I'm not going to pressure you\" signals that pressure is on the table — it's a tell. (2) Citing federal law to a skeptical consumer is what the fraud caller the consumer is afraid of would do. (3) \"Other people give me that information\" is the social-proof move that fails here because the consumer is specifically not other people; that's the whole point of their objection. The correct move was tactical empathy: acknowledge the fear, redirect the distrust at the prior agent who created it, and make the Medicare number optional with a clear alternative. Instead, the agent escalated authority and lost the call.",
    },
    sharedMove:
      "Redirect the distrust outward at a specific third party. Villain framing creates an alliance between agent and consumer against a named threat. The top closer is not the person to be trusted — they are the person fixing the thing that was done wrong. No defensive self-advocacy is ever needed.",
    mechanism:
      "Reassurance amplifies distrust. The phrase \"trust me\" triggers the opposite of trust. The only way to neutralize a trust objection is to make trust unnecessary by putting the threat somewhere else. Consumers have often been burned; naming the burn in strong emotional language validates their experience and aligns the agent with them against a real pattern of harm. \"Bamboozle\" is not a neutral word — it is outrage, voiced by the agent on the consumer's behalf.",
    teach:
      "Train every agent to detect trust friction early and redirect distrust externally. Ban the phrases \"trust me,\" \"I promise,\" \"I'm legitimate.\" Replace with specific villain framing tied to the consumer's actual history — prior churning, unauthorized enrollments, confusing offers. The villain must be specific and named: the prior agent, the previous carrier, the churning pattern. Never vague.",
  },

  // 5. Financial anxiety / low income
  {
    number: '05',
    title: "When the consumer is on a fixed income",
    whatHappens:
      "The consumer says \"I'm on one check a month,\" or the discovery has revealed Social Security as the sole income source. Monthly benefit numbers feel too small to matter. Average agents leave the math in the abstract. Top closers do the annualization out loud and tie the figure to the consumer's actual life.",
    examples: [
      {
        agent: 'Lawrence',
        consumer: 'Cephas Nemrod',
        date: '03-23-2026',
        timestamp: '25:16',
        context: "Cephas had expressed vulnerability about not qualifying. Lawrence had already applied the dignity frame. At the close he combined the OTC and giveback into one humanized annual figure.",
        quote:
          "That's $780 for the year. And then on top of that, you're also going to receive another $166 a month to your Social Security check. So if you kind of take those two numbers, you're looking at about almost $2,800 in money and grocery cards that you're going to be able to receive for the year.",
      },
      {
        agent: 'Lawrence',
        consumer: 'Zura Davis',
        date: '03-17-2026',
        timestamp: '(benefit presentation)',
        context: "Zura had a $130/month current benefit. Lawrence presented the new benefit with both the monthly figure and the annualization in one breath.",
        quote:
          "Right now you currently get $130 on that extra benefits card that you can help pay for utilities. The most I was able to find for you — this one is $210 a month. So if you kind of annualize that, you're looking at about $2,500 for the year.",
      },
      {
        agent: 'Marcus',
        consumer: 'Patricia Allen',
        date: '03-19-2026',
        timestamp: '16:56',
        context: "Patricia called about a food card. Marcus reframed it as Part B giveback and annualized the value with humanization tied to her Social Security.",
        quote:
          "$106 times 12 for one year — that's $1,200 increase on your check. That could be a lot of money you missed out on.",
      },
    ],
    weakContrast: {
      agent: 'Most weaker agents',
      consumer: 'Across many missed-enrollment calls',
      date: 'March–April 2026',
      timestamp: 'Plan presentation phase',
      context: 'The most common failure across weak-agent calls is not a specific line — it is an absence. Monthly benefit numbers get stated. The multiplication never happens.',
      quote:
        'You get $75 a quarter on a prepaid spending card. [Agent continues to the next benefit without annualizing.]',
      whyItFailed:
        "$75 a quarter is $300 a year. $300 a year is rent money for half a month. The consumer hears \"$75\" and dismisses it as nothing meaningful. The consumer would respond to $300 with a different emotional register. Weak agents let the monthly or quarterly figure stand alone — and the consumer does the math in their head, which they don't do. The benefit never lands. In most missed calls, Step 2 of the math breakdown (annualization) is simply skipped. Step 3 (humanization — tying the number to the consumer's life) is almost never attempted.",
    },
    sharedMove:
      "Three-step math, always all three steps. The monthly, the annual, and the humanization tied to the consumer's specific life. Top closers never say a number without its annualized version, and never say an annualized number without connecting it to the consumer's stated situation.",
    mechanism:
      "$130 a month sounds like pocket change. $1,560 a year sounds like a mortgage payment. The consumer is doing the comparison math in the abstract unless the agent does it for them. Once the annual figure is stated aloud, it becomes the reference point for everything that follows. Humanization — \"for someone on one check a month\" — transforms an abstract number into a specific impact on the consumer's life.",
    teach:
      "The three-step math must be drilled until it is reflexive. Every benefit number spoken must have its annualized version. Every annualized version must have its humanization. The drill: agents practice on the top 10 benefits they pitch most often until they can deliver all three steps in a single breath without thinking.",
  },

  // 6. Chronic condition disclosure
  {
    number: '06',
    title: "When the consumer discloses a chronic condition",
    whatHappens:
      "The consumer says they have diabetes, COPD, heart disease, or another chronic condition. To an average agent, this is compliance data. To a top closer, this is a door opening. Chronic conditions unlock C-SNP plans with enhanced benefits. They also unlock a specific authority frame the agent can deploy.",
    examples: [
      {
        agent: 'Steeve',
        consumer: 'Deborah Mitchell',
        date: '03-16-2026',
        timestamp: '57:00',
        context: "Deborah had COPD, diabetes, and heart failure. Steeve connected all three conditions directly to the plan benefits in one sentence.",
        quote:
          "Deborah, with your COPD, your diabetes, and your heart condition, every single specialist visit is covered at zero dollars on this plan. This is the coverage that was built for where you are right now.",
      },
      {
        agent: 'Steeve',
        consumer: 'Paul Pankey',
        date: '03-24-2026',
        timestamp: '(post-disclosure)',
        context: "Paul disclosed cancer and a prior stroke. Steeve named the C-SNP eligibility and tied it to a specific outcome — food — that Paul could feel.",
        quote:
          "Based on your condition, you are entitled here to what is called a chronic plan. The chronic plan, first of all, is going to put food on your table.",
      },
      {
        agent: 'Marcus',
        consumer: 'Barbara Winkles',
        date: '03-23-2026',
        timestamp: '5:27',
        context: "Barbara disclosed chronic kidney disease and diabetes. Marcus recognized the C-SNP pathway immediately and framed the pivot as relief, not sales.",
        quote:
          "I'm very glad we hopped on the phone today so we can get you going in the right doors to get you the right coverage, Barbara. Because I'm seeing you do qualify for chronic plans, and these plans are tailored to individuals like yourself with chronic conditions.",
      },
    ],
    weakContrast: {
      agent: 'A weaker agent',
      consumer: 'Lyman',
      date: '03-31-2026',
      timestamp: '7:30',
      context: "Lyman disclosed malabsorption syndrome and multiple other chronic conditions stacking on each other. The agent took the information and moved on.",
      quote:
        "I've got several health conditions that stack up and overlap each other... I do not have diabetes, but I do have malabsorption syndrome... my digestion is just as affected.",
      whyItFailed:
        'The consumer delivered the pivot on a silver platter. Multiple chronic conditions, self-described as "stacking and overlapping" — this is C-SNP language coming from the consumer\'s own mouth. A top closer would have responded within 10 seconds: "That\'s exactly why C-SNP plans exist — they\'re built for people whose conditions stack like yours. Let me see what\'s available in your county." Instead, the agent listened, acknowledged, and continued into medication collection. The entire authority frame that chronic condition disclosure unlocks was never activated. The call was closeable from minute 7. It stayed open until minute 26.',
    },
    sharedMove:
      "Chronic condition disclosure triggers immediate C-SNP framing, with the conditions named specifically and connected to specific benefits. The phrase \"built for your condition\" appears repeatedly. The enrollment is positioned as entitlement earned by the consumer's medical situation, not as an upsell.",
    mechanism:
      "Naming the conditions back to the consumer validates their experience of managing them. Tying the plan to the conditions establishes clinical authority without requiring the agent to claim expertise. The consumer doesn't have to trust that the agent knows what they're doing — the fact that the plan maps to their specific conditions is the evidence.",
    teach:
      "Train every agent on C-SNP and D-SNP trigger conditions and the corresponding pivot language. The drill: the trainer discloses a chronic condition mid-call, and the agent must deliver within 10 seconds a response that (1) names the condition, (2) identifies the plan type, and (3) connects at least one benefit directly to the condition. No generic responses allowed.",
  },

  // 7. Wavering at close
  {
    number: '07',
    title: "When the consumer wavers without content",
    whatHappens:
      "Near the voice signature, the consumer freezes. They say some version of \"I don't know\" or \"Let me think about it\" or \"Why am I doing this again?\" There is no specific objection — just decisional fatigue. The average-agent move is to ask what they are unsure about. Top closers do the opposite.",
    examples: [
      {
        agent: 'Marcus',
        consumer: 'Christy Tuttle',
        date: '04-16-2026',
        timestamp: '21:17',
        context: "Christy had already verbally committed. Then she asked the post-agreement question that kills many enrollments. Marcus redeployed the full value stack — four dimensions at once — without ever defending the new plan against the old one.",
        quote:
          "God forbid anything, Christy — UnitedHealthcare, if they were to throw you under the bus or anything, if they were to change your Medicaid level, you have $104,000 of medications you'd have to deal with. I'm keeping everything the same for your everyday living. Same doctor. Same medications. Just more money and protection.",
      },
      {
        agent: 'Steeve',
        consumer: 'Michael Morgan',
        date: '03-18-2026',
        timestamp: '14:04',
        context: "Morgan said \"let's just leave it like it is until I understand what's going on.\" Steeve neither surrendered nor argued. He re-engaged softly and the consumer overcame the hesitation on his own.",
        quote:
          'Reached across softly, named what the consumer was actually afraid of (losing what he already had), restated that he was being "put back" into a plan he liked, and let Morgan arrive at the yes without pressure. The hesitation dissolved on its own.',
      },
      {
        agent: 'Marcus',
        consumer: 'Barbara Winkles',
        date: '03-23-2026',
        timestamp: '31:37',
        context: "Barbara hesitated at the final close with a weak \"I think so.\" Marcus refused to accept the ambiguity.",
        quote:
          "Just because these lines are being recorded and I do want to make sure I'm helping you — I just need you to say a proper yes or a no.",
      },
    ],
    weakContrast: {
      agent: 'A weaker agent',
      consumer: 'Sheila Jones',
      date: '03-31-2026',
      timestamp: '3:54',
      context: "Sheila was an existing member who became guarded at a verification gate. She deflected rather than refusing — a clear hesitation signal, not a final no.",
      quote:
        "Yeah, no worries. You can definitely call back.",
      whyItFailed:
        "The consumer hesitated. The agent handed her the exit. Two words killed the call: \"call back.\" No specific time. No alternative (Medicare card number instead of SSN). No direct number. No urgency. The consumer left the call with zero commitment to return and no structural reason to. The agent had an alternative path available — the Medicare card number offers the same lookup — but never offered it. The rule top closers follow: never respond to hesitation with permission to leave. Always offer the alternative path forward first.",
    },
    sharedMove:
      "Do not ask what the consumer is unsure about. Asking for content generates content that hardens into a reason to say no. Instead: redeploy the full value stack, re-engage softly, or force a binary commitment. The wavering is a symptom of fatigue, not a real objection.",
    mechanism:
      "Content-free hesitation is decisional fatigue. The consumer is not thinking — they are feeling. A question that asks for thinking increases cognitive load and makes the feeling worse. A declarative redirect bypasses the cognitive problem entirely and brings the consumer back to the emotional momentum they had before the wobble.",
    teach:
      "Every agent must have memorized redirects for the content-free hesitation moment — not objection handlers, declarative sentences. The rule: never respond to \"I don't know\" with a question mark. The drill: the trainer delivers the wavering line at five different points in a mock call. The agent must respond with a redirect every time, never with a question.",
  },

  // 8. Callback request
  {
    number: '08',
    title: "When the consumer asks to call back tomorrow",
    whatHappens:
      "The consumer says \"let me think about it\" or \"let me call you back.\" Every agent on the team hears this request. Top closers refuse to treat it as a legitimate next step. Callbacks close at under 20% of the original call rate. A callback is, statistically, a lost deal.",
    examples: [
      {
        agent: 'Marcus',
        consumer: 'Joseph Young',
        date: '04-16-2026',
        timestamp: '(post-enrollment)',
        context: "Rather than offering a callback, Marcus positioned himself as the ongoing relationship and pre-empted the need for a callback conversation entirely.",
        quote:
          "I'm going to get you on a very strong plan for your health needs until October. I'll be your agent, and when the new benefits come out, we can make a switch to anything that's increasing for you.",
      },
      {
        agent: 'Marcus',
        consumer: 'Polly Hunt',
        date: '03-25-2026',
        timestamp: '41:32',
        context: "When Polly slowed down and started asking about timing, Marcus named the window as a fact rather than applying pressure.",
        quote:
          "We are on the last week of open enrollment, so these policies are not going to last much longer.",
      },
      {
        agent: 'Steeve',
        consumer: 'Paul Pankey',
        date: '03-24-2026',
        timestamp: '37:27',
        context: "Paul asked whether he could enroll today — he had been told he couldn't. Steeve used the moment to close rather than to schedule a callback.",
        quote:
          "Yeah, you're gonna get it today. The reason they never said that to you is because they probably didn't ask you if you had any chronic illness like the cancer.",
      },
    ],
    weakContrast: {
      agent: 'A weaker agent',
      consumer: 'Sheila Jones',
      date: '03-31-2026',
      timestamp: '3:54',
      context: "Same call as above. The consumer said vaguely that she'd 'call that' — a deflection that could have been converted into a structured next step. The agent accepted it unconditionally.",
      quote:
        'Yeah, no worries. You can definitely call back.',
      whyItFailed:
        "No scheduled time. No named callback number. No pre-scheduled follow-up commitment. The consumer exited with every off-ramp intact. Callbacks close at under 20% of the original-call rate in the industry — and without a scheduled time, that rate drops to near zero. This moment also confirms a pattern we see repeatedly: the first objection is the entire call. Weak agents lose deals in the first 5 minutes because they interpret every piece of friction as a final answer. A four-minute call that never reached plan presentation is not a call. It's a surrender.",
    },
    sharedMove:
      "Treat the callback request as a symptom, not a valid request. Either redeploy the gap, name the stakes of walking away, or reposition yourself as the ongoing relationship so the callback is pre-empted. The consumer's option should never be \"talk tomorrow\" — it should always be \"finish this now or miss the window.\"",
    mechanism:
      "Sunk cost is psychologically real. A consumer who has spent 30 minutes on a call has already invested the hardest part. Framing continuation as \"finish what we started\" and framing a callback as \"start over tomorrow\" tips the scale toward staying. This is not pressure — it is accurate accounting of the effort already made.",
    teach:
      "Every agent should have three memorized responses to the callback request. All three are declarative sentences. All three name either the sunk cost or a specific cost of deferral. None ask what the consumer is unsure about. The explicit rule: callbacks are never a first response. Exhaust in-call options first, always.",
  },

  // 9. Consumer reveals deep vulnerability
  {
    number: '09',
    title: "When the consumer reveals something emotionally heavy",
    whatHappens:
      "A consumer discloses something that most agents don't know how to handle: a death in the family, a history of not being insured, a medical crisis, long-term isolation. The revelation is high-signal Client Gold, but it is also a test. If the agent moves past it too quickly, they lose the consumer. If they stay in it too long, they lose the close.",
    examples: [
      {
        agent: 'Lawrence',
        consumer: 'Cephas Nemrod',
        date: '03-23-2026',
        timestamp: '7:47',
        context: "Cephas expressed fear that he didn't qualify for the benefits being advertised — that they were for other people. Lawrence responded with the dignity frame.",
        quote:
          "You've worked your whole life and you paid into these programs your whole life. So you definitely need to be able to take advantage of whatever is available to you.",
      },
      {
        agent: 'Lawrence',
        consumer: 'Ronnie McCutcheon',
        date: '03-30-2026',
        timestamp: '13:51',
        context: "Ronnie revealed a lifetime without insurance, just starting on Social Security, navigating everything for the first time. Lawrence held the moment and returned to it at close.",
        quote:
          "Back first of the year, I just got started on Social Security and all this stuff is brand new to me. And to that point, I had no insurance, I mean I had nothing.",
      },
      {
        agent: 'Steeve',
        consumer: 'Deborah Mitchell',
        date: '03-16-2026',
        timestamp: '(52:04 anxiety attack)',
        context: "Deborah went into a visible anxiety attack mid-call. Steeve slowed his voice, lowered his tone, and talked her through it before returning to the enrollment.",
        quote:
          'Steeve switched registers entirely — slower cadence, lower volume, explicit reassurance about what was happening on the call. He held space for the anxiety without pressuring the decision, and the enrollment resumed when Deborah was ready.',
      },
    ],
    weakContrast: {
      agent: 'A weaker agent',
      consumer: 'Unknown Consumer',
      date: '03-30-2026',
      timestamp: '1:14',
      context: 'The consumer disclosed that she was only on the call because her husband had told her to look into benefits — a family-authority disclosure that carries both a trust signal (she trusts her husband) and an urgency signal (someone else thinks this matters).',
      quote:
        'We can take a look. Alright, so no problem.',
      whyItFailed:
        "The agent did not acknowledge the husband. Did not name him as an ally. Did not connect the reason for calling to the solution. The consumer had handed the agent a gift — a family member co-signing the decision before it was made — and the agent filed it as noise. A top closer would have responded: \"Your husband is looking out for you. Let's make sure we find you exactly what he sent you to get. You mentioned food card — that's one of the biggest benefits available. Let's see what's in your zip code.\" Instead: procedural acknowledgment, no momentum built. The call was lost in the first ninety seconds.",
    },
    sharedMove:
      "Name the experience. Validate the lifetime of work or hardship behind it. Deploy the dignity frame — \"you've worked your whole life\" — or slow the call down to match the consumer's emotional state. Never move past the disclosure. Never rush back to the pitch. But also — never sit in it so long that the call loses momentum.",
    mechanism:
      "Consumers who have disclosed something vulnerable are testing whether the agent is paying attention. If the agent matches the emotional weight, the consumer now has evidence they are dealing with a person, not a transaction. The enrollment that follows is built on a different foundation — not persuasion, but recognition.",
    teach:
      "Agents must be trained to slow down, lower their register, and deploy the dignity frame when vulnerability appears. The drill: trainers deliver emotional disclosures at various points in a mock call, and the agent must respond with validation before returning to the enrollment track. Monitoring rubrics should include a category for how the agent responds to Client Gold moments.",
  },
]

// ─── CONSUMER TYPES ───────────────────────────────────────────

type ConsumerType = {
  id: string
  name: string
  triggerLine: string
  description: string
  breakingPoint: string
  theMove: string
  difficulty: 'medium' | 'high' | 'near-loss'
  agentWhoOwnsThis: 'Marcus' | 'Lawrence' | 'Steeve' | 'All Three'
  callRef: string
}

const CONSUMER_TYPES: ConsumerType[] = [
  {
    id: 'practical-evaluator',
    name: 'The Practical Evaluator',
    triggerLine: '"I mean, I see things on TV where I can buy dental insurance for like $30."',
    description: "Deliberate, number-focused, low emotion. Not resisting — auditing. Every objection is a cost-comparison question in disguise. They want math that works for their actual life, not features that sound good. The moment the arithmetic answers their specific question, resistance ends.",
    breakingPoint: "Run the three-step math with their specific numbers. State the net annual difference. Wait. They close themselves.",
    theMove: '"Right now you\'re getting $50 a month. This plan gives you $130. That\'s $80 more a month, $960 more a year. Even with the $80 specialist copay twice a year, you\'re still ahead $800. Does that math work for you?"',
    difficulty: 'medium',
    agentWhoOwnsThis: 'Marcus',
    callRef: 'Marcus vs. Herschel Cross, William Hall',
  },
  {
    id: 'informed-auditor',
    name: 'The Informed Auditor',
    triggerLine: '"Well, I already have Aetna. They give me like $130 grocery card."',
    description: "They have been around. They know what they have and they are calling to verify, not browse. Treat them as uninformed and you lose them in two minutes. The resistance isn't emotional — it's intellectual. Raise the bar instead of re-explaining.",
    breakingPoint: "Pull up their specific plan. Run the true side-by-side. Respect that they already know the number and show what the new plan adds specifically.",
    theMove: '"You\'re right — $130 is a strong OTC benefit. Let me pull up your exact Aetna plan and show you what this one adds on top of that. I want to show you the comparison in real numbers, not talk you into anything."',
    difficulty: 'high',
    agentWhoOwnsThis: 'Lawrence',
    callRef: 'Lawrence vs. Zura Davis',
  },
  {
    id: 'doctor-loyalist',
    name: 'The Doctor Loyalist',
    triggerLine: '"I\'ve been going to him for a long time. I can\'t cut that out."',
    description: "Warm but immovable on one point. The doctor is not a preference — it's a hard line. The most common near-loss type on the team. This consumer will close themselves the moment you prove the doctor is safe. Nothing else matters until that is resolved.",
    breakingPoint: "Name their specific doctor. Go to the provider website live. Read the confirmation out loud. The moment they hear you say the name and confirm it, resistance evaporates.",
    theMove: '"Tell me the exact name. I\'m pulling up the network right now. We\'re not moving forward until I confirm your doctor is in. If the network doesn\'t have her, I\'ll find you a plan that does."',
    difficulty: 'near-loss',
    agentWhoOwnsThis: 'Lawrence',
    callRef: 'Lawrence vs. Anita Tabo, Troy Poole · Marcus vs. Mary Carey',
  },
  {
    id: 'trust-wounded',
    name: 'The Trust-Wounded',
    triggerLine: '"Every time I talk to somebody they tell me one thing and then something else happens."',
    description: "Burned before. The objection is not about this plan — it is about the entire category. They are testing whether you will behave like every other agent. The fatal move: defending yourself or the industry. The winning move: invite scrutiny before they ask for it.",
    breakingPoint: "Refuse to defend anything. Make a transparency commitment unprompted. Offer them verification before the pitch.",
    theMove: '"I get it. Here\'s what I\'m going to do differently: I\'m checking your specific doctor before I pitch you anything. I\'m showing you what your current plan actually covers on the medications you named. If the numbers don\'t work for you, I\'ll tell you. You can verify everything I show you."',
    difficulty: 'near-loss',
    agentWhoOwnsThis: 'Marcus',
    callRef: 'Marcus vs. Oleson Toe · Lawrence vs. Joseph Conley',
  },
  {
    id: 'exploitation-victim',
    name: 'The Exploitation Victim',
    triggerLine: '"I was changed six times in three months and I didn\'t even know it."',
    description: "Churned — sometimes repeatedly — often without their knowledge. They are not afraid of the wrong plan. They are afraid of losing control of their own situation again. The enrollment is not the close. The protection commitment is the close.",
    breakingPoint: "Name what happened to them. Validate the injustice. Offer the relationship, not just the plan. The consumer closes themselves once they feel protected.",
    theMove: '"Six times in three months without you knowing — that is not okay. That ends today. You go back to Aetna, you have my direct number, and nothing changes on your coverage without you calling me first. That\'s my commitment."',
    difficulty: 'near-loss',
    agentWhoOwnsThis: 'Steeve',
    callRef: 'Steeve vs. Michael Morgan',
  },
  {
    id: 'staller',
    name: 'The Staller',
    triggerLine: '"Let me think about it. Give me your name and I\'ll call you back."',
    description: "Not objecting — fatigued. The ask is not for time; it is for the pressure to stop. Two completely different stall types need two completely different responses. Applying urgency to a soft stall ends the call. Agreeing to a pressure stall loses the deal.",
    breakingPoint: "Read which stall type you're dealing with. Pressure stall: name the sunk cost and the window. Soft stall: Steeve's agree-then-re-enter. \"I can do that.\" Pause. Then offer them what they already said they wanted.",
    theMove: '"I can do that. But — since you mentioned you were happy with Aetna before — I can put you right back on Aetna today and be your agent for the full year. You\'d have my direct number. If that sounds right, we can get it done in the next few minutes."',
    difficulty: 'near-loss',
    agentWhoOwnsThis: 'Steeve',
    callRef: 'Steeve vs. Michael Morgan · Marcus vs. Polly Hunt',
  },
  {
    id: 'cognitively-overloaded',
    name: 'The Cognitively Overloaded',
    triggerLine: '"I can\'t really understand too much. I might get that brain blow."',
    description: "Elderly or cognitively fatigued. Will not hang up in anger — will simply go silent and stop engaging. The resistance is not a refusal; it is a shutdown. The fix is not recovery. It is prevention. Set the protocol at the start of the call before any complexity arrives.",
    breakingPoint: "Pre-set a repeat contract at the opening. When confusion surfaces, invoke it. The consumer agreed to slow down before the difficulty started.",
    theMove: '"If anything I say is confusing, just tell me to repeat it and I\'ll explain it a different way. I\'ll go at whatever pace works for you."',
    difficulty: 'near-loss',
    agentWhoOwnsThis: 'Steeve',
    callRef: 'Steeve vs. Patrick Montagna',
  },
]

// ─── OBJECTION CHAINS ─────────────────────────────────────────

type ChainStep = {
  sequence: number
  type: string
  consumerPhrase: string
  agentResponse: string
  outcome: 'recovered' | 'partial'
  timestamp: string
}

type ObjectionChain = {
  agent: 'Marcus' | 'Lawrence' | 'Steeve'
  consumer: string
  date: string
  difficulty: 'high' | 'near-loss'
  chainSummary: string
  steps: ChainStep[]
  whatBrokeIt: string
  closingLine: string
}

const OBJECTION_CHAINS: ObjectionChain[] = [
  {
    agent: 'Marcus',
    consumer: 'Polly Hunt',
    date: '03-25-2026',
    difficulty: 'near-loss',
    chainSummary: "Five objections spread across 75 minutes. Starts with privacy resistance, moves through financial fear, triggers an explicit stall at minute 41, re-emerges with doctor loyalty, then resurfaces as a plan-type concern after enrollment is already submitted. The call required patience across five separate reinventions of the same enrollment.",
    steps: [
      {
        sequence: 1,
        type: 'Trust',
        consumerPhrase: "Do I have to? [give Medicare number]",
        agentResponse: "So I would have to. It's required for me to ask you so I can see you have Medicare Parts A and B, see what plan you have and see what's available.",
        outcome: 'recovered',
        timestamp: '3:22',
      },
      {
        sequence: 2,
        type: 'Price',
        consumerPhrase: "Because they put money back on my check. So I won't be getting that extra money on my check.",
        agentResponse: "So with this policy, it's not gonna be money on your check. It's gonna be on the over-the-counter card and the flex wallet.",
        outcome: 'recovered',
        timestamp: '31:14',
      },
      {
        sequence: 3,
        type: 'Timing Stall',
        consumerPhrase: "Let me think about it and give me your name.",
        agentResponse: "I'm going to let you know this, okay? We are on the last week of open enrollment, so these policies are not going to last much longer.",
        outcome: 'recovered',
        timestamp: '41:11',
      },
      {
        sequence: 4,
        type: 'Doctor Loyalty',
        consumerPhrase: "I have to go to my pain manager. I can't cut that out.",
        agentResponse: "I can give you a referral. That's no problem. Your primary doctors are in network. That's not changing.",
        outcome: 'recovered',
        timestamp: '40:52',
      },
      {
        sequence: 5,
        type: 'Plan Type',
        consumerPhrase: "This is HMO now, not PPO, right?",
        agentResponse: "Correct. You are on HMO now, not a PPO. So you might need some referrals to doctors.",
        outcome: 'recovered',
        timestamp: '1:12:06',
      },
    ],
    whatBrokeIt: "Marcus personally walked the pain management doctor's network status in real time. Problem-solving, not persuasion — and not argument — defused the longest stall.",
    closingLine: "Polly, Dr. Krishnamurthy is in-network, the give-back stays because this is still Aetna, and the referral only takes 30 seconds. There's nothing left here that costs you anything.",
  },
  {
    agent: 'Marcus',
    consumer: 'Oleson Toe',
    date: '03-18-2026',
    difficulty: 'high',
    chainSummary: "Three-phase resistance: a trust wound from a prior agent who ghosted a callback, forensic scrutiny of plan limits, then a long emotional tangent. Marcus had to survive the distrust before he could address any plan content.",
    steps: [
      {
        sequence: 1,
        type: 'Trust',
        consumerPhrase: "Someone did that to me when I called back. They never did answer.",
        agentResponse: "I'm not going to disconnect from you — if we do, can I call you back at this number? By the end of this call, you'll trust me, okay? I'm a licensed agent and I'm trying to help you out today.",
        outcome: 'recovered',
        timestamp: '2:19',
      },
      {
        sequence: 2,
        type: 'Benefits Doubt',
        consumerPhrase: "And may I know for what reason that is now offered or covered?",
        agentResponse: "So I have to read that on every phone call. That doesn't concern you, but that's just letting you know right now we're just offering the strongest benefits available.",
        outcome: 'partial',
        timestamp: '1:29',
      },
      {
        sequence: 3,
        type: 'Skepticism',
        consumerPhrase: "Under what condition that UnitedHealthcare will not cover anything regarding this plan?",
        agentResponse: "Since you have Medicare and full Medicaid, this plan will cover everything for you. There's honestly nothing that is not covering you. This is the same plan you've always had. I'm just putting you back on your same plan.",
        outcome: 'recovered',
        timestamp: '61:00',
      },
    ],
    whatBrokeIt: "Answering the coverage-limit question directly with specific condition examples instead of generic language. Marcus named conditions, named the coverage — and the forensic scrutiny stopped.",
    closingLine: "Mr. Toe, what UnitedHealthcare won't cover is what Medicare itself doesn't cover — everything else, you're good. And I'm not going anywhere after this call.",
  },
  {
    agent: 'Lawrence',
    consumer: 'Joseph Conley',
    date: '03-26-2026',
    difficulty: 'near-loss',
    chainSummary: "The trust wound was stated up-front and was the only real objection. The call was a single test: whether Lawrence could absorb a direct accusation of dishonesty without defending himself or the industry. He didn't defend it. That was the move.",
    steps: [
      {
        sequence: 1,
        type: 'Trust',
        consumerPhrase: "Every time I talk, somebody tell me one thing or another and some lie to me a lot.",
        agentResponse: "No, we don't like lies — especially when you lie. Then moved directly to plan details without defending other agents or explaining the industry.",
        outcome: 'partial',
        timestamp: '4:30',
      },
    ],
    whatBrokeIt: "Lawrence didn't defend himself or the industry. He agreed with the disgust and moved forward. Joseph read the refusal to defend as character and stayed on the call.",
    closingLine: "Mr. Conley, I'm not going to tell you what the last guy told you. I'm going to tell you what's on my screen, and if it's wrong, you tell me.",
  },
  {
    agent: 'Lawrence',
    consumer: 'Anita Tabo',
    date: '03-16-2026',
    difficulty: 'near-loss',
    chainSummary: "A single hard no, stated plainly and early. No multi-stage resistance — just one immovable wall. The entire call depended on whether Lawrence could verify the one thing Anita cared about faster than she could hang up.",
    steps: [
      {
        sequence: 1,
        type: 'Doctor Loyalty',
        consumerPhrase: "I don't want to change from Archwell Health.",
        agentResponse: "Lawrence immediately asked for nurse practitioner Tammy Wagstaff's full name, pulled up the Humana provider tool, and confirmed her in-network status live — before presenting a single plan benefit.",
        outcome: 'recovered',
        timestamp: '6:20',
      },
    ],
    whatBrokeIt: "Immediate, visible verification. Lawrence didn't argue, reassure, or pitch anything. He ran the check. The moment Anita heard Tammy Wagstaff confirmed in-network, every remaining objection became irrelevant.",
    closingLine: "Anita, Tammy Wagstaff is in the Humana network. You're not leaving her — you're upgrading around her.",
  },
  {
    agent: 'Steeve',
    consumer: 'Michael Morgan',
    date: '03-18-2026',
    difficulty: 'near-loss',
    chainSummary: "Morgan had been churned between plans six times in three months and didn't understand what was happening on this call. The stall was not aggression — it was exhaustion. Pushing past it would have ended the call.",
    steps: [
      {
        sequence: 1,
        type: 'Timing Stall',
        consumerPhrase: "Let's just leave it like it is until I understand what's going on.",
        agentResponse: "I can do that. [pause] — then offered the Aetna option, Morgan's preferred carrier, as a soft on-ramp: \"If you love Aetna, I can put you with Aetna and be your agent for as long as you want.\" Morgan re-engaged and said \"Let's go back to Aetna\" at 16:33.",
        outcome: 'recovered',
        timestamp: '14:04',
      },
    ],
    whatBrokeIt: "Agreement, not pressure. Steeve accepted the stall out loud, then offered something Morgan had already said he wanted. The stall dissolved because there was nothing left to stall against.",
    closingLine: "Mr. Morgan, if you love Aetna, I can put you back in Aetna and be your agent for the full year. You're not changing anything — you're staying with who you know.",
  },
]

// ─── PATTERN TRAITS (synthesis) ────────────────────────────────

const PATTERN_TRAITS = [
  {
    title: "They hunt for the gap, not the fit",
    body:
      "Average agents look for reasons the new plan fits. Top closers look for reasons the current plan fails. The moment they find one — a medication not covered, a doctor out of network, a benefit absent — the enrollment is already done. Everything after is paperwork.",
  },
  {
    title: "They delete the word 'switch'",
    body:
      "Every top closer refuses to describe what's happening as a switch. Upgrade, correction, stronger policy, put you back, same carrier stronger plan. The language substitution is reflexive. The consumer never has to defend against the thing they are afraid of, because that thing never gets named.",
  },
  {
    title: "They verify visibly",
    body:
      "When a consumer names a doctor, top closers go to the provider's website and read from it aloud. When a consumer mentions a benefit, top closers pull up the plan document and quote from it. Evidence replaces trust. Trust is never requested.",
  },
  {
    title: "They redirect distrust outward",
    body:
      "When a trust objection appears, top closers never defend themselves. They name a third-party villain — a prior agent, a previous carrier, a churning pattern — and position themselves as the one fixing it. The consumer's distrust gets aimed somewhere other than the current agent.",
  },
  {
    title: "They always annualize",
    body:
      "Monthly numbers are never stated alone. Every benefit is delivered in three parts: monthly, annualized, and humanized. \"$130 a month. That's $1,560 for the year. For someone on one check a month, that's real money.\" The annualization is not optional and never skipped.",
  },
  {
    title: "They deploy loss as anchor",
    body:
      "When a consumer is on expensive medications or has specialized coverage, top closers quantify the exposure: \"$104,000 if your coverage drops.\" The risk anchor converts the current plan from a safe default into a liability. Losses feel twice as large as gains; the math favors acting.",
  },
  {
    title: "They treat chronic conditions as a door",
    body:
      "Chronic condition disclosure triggers immediate C-SNP framing with the conditions named specifically and tied to benefits. \"Built for your condition\" is the anchor phrase. The enrollment is positioned as entitlement earned by the consumer's medical situation, not as a product upsell.",
  },
  {
    title: "They deploy the dignity frame on vulnerability",
    body:
      "When a consumer reveals financial hardship, isolation, or lifetime disadvantage, top closers do not offer sympathy. They offer dignity. \"You've worked your whole life and paid into these programs. You deserve this.\" The enrollment is not charity; it is the return on a life of work.",
  },
  {
    title: "They never surrender to hesitation",
    body:
      "Content-free hesitation is decisional fatigue, not an objection. Top closers never ask \"what are you unsure about?\" They redeploy the value stack, re-engage softly, or force a binary commitment. The wobble dissolves without ever becoming a reason.",
  },
  {
    title: "They honor the consumer's stated preference",
    body:
      "When a consumer names a carrier they prefer, top closers pull up that carrier. When a consumer names a doctor, top closers build the plan around that doctor. The sale is never won by overriding what the consumer already said they wanted.",
  },
  {
    title: "They redeploy the winning line",
    body:
      "The sentence that worked the first time gets used five, ten, fifteen more times in the same call. \"I'm not switching your insurance. I'm keeping you with Aetna.\" Top closers find the phrase that resonates with this specific consumer and reuse it at every resistance point.",
  },
  {
    title: "They lock the enrollment at the end",
    body:
      "Every enrolled consumer leaves the call with the agent's direct number, the carrier customer service, a confirmation code, specific anti-churn instructions, and — when warranted — a verbal commitment to hang up on other agents. The post-close lock takes 60 seconds and protects against the three agents who will call this consumer this week.",
  },
]

// ─── REPLICATION PROCESS ──────────────────────────────────────

const REPLICATION_STAGES = [
  {
    stage: 'Stage 1',
    weeks: 'Weeks 1–2',
    title: 'Classify the Raw Material',
    lead: 'Before you teach anyone anything, find out which kind of top closer they are naturally wired to become.',
    body:
      'Every agent has a natural instinct that maps to one of the three lenses. Some are naturally curious and want to dig — they become Gap Hunters. Some are naturally methodical and want to prove — they become Patient Verifiers. Some are naturally protective and want to rescue — they become Protective Frames. Trying to force an agent into the wrong lens produces a mediocre imitation. Matching the training to the instinct produces a star.',
    actions: [
      'Baseline every agent on four measurements: close rate, surrender rate on the nine pressure points, three-step math deployment rate, and post-close lock execution rate.',
      'Shadow every agent for two full calls. After each, ask them a single question: "When that call got hard, what were you thinking?" The answer reveals the lens. "I was trying to find something wrong with their plan" is a Gap Hunter. "I was trying to prove it to them" is a Patient Verifier. "I wanted to help them out of that situation" is a Protective Frame.',
      "Match each agent to a lens. Write it down. This becomes their coaching path.",
    ],
  },
  {
    stage: 'Stage 2',
    weeks: 'Weeks 2–4',
    title: 'Install the Foundation',
    lead: 'Four non-negotiable moves every top closer shares. Every agent masters these regardless of lens, before anything else.',
    body:
      "These are the floor. A Gap Hunter who doesn't annualize leaves money on the table. A Protective Frame who asks \"what are you unsure about?\" loses the close. These four moves cut across all three lenses and all nine pressure points. They are drilled until they are reflexive — until the agent could not respond the wrong way even if they tried.",
    actions: [
      'Language substitution: ban "switch" and "change" from every script. Replace with upgrade, stronger policy, put you back, same carrier stronger plan. Drill daily until the substitution is reflexive.',
      'Three-step math: every benefit number spoken must have its annualized version, and every annualized version must have its humanization. No exceptions. Drill until the three-step delivery happens in one breath.',
      "Real-time verification: when the consumer names a doctor or a medication, the agent opens the provider site or formulary out loud and reads from it. Evidence replaces promises. Ban the phrase \"I believe your doctor is in network.\"",
      'The hesitation reflex: when the consumer says "I don\'t know" or "let me think about it," the agent responds with a declarative sentence, never a question. Ban the phrase "what are you unsure about?"',
    ],
  },
  {
    stage: 'Stage 3',
    weeks: 'Weeks 4–8',
    title: 'Build the Lens',
    lead: 'With the foundation in place, deepen the agent\'s natural lens through targeted drills and paired shadowing with the top closer whose lens matches theirs.',
    body:
      'This is the stage where an average agent turns into a specialist. A Gap Hunter goes into formulary drill bootcamp. A Patient Verifier learns precision annualization and the dignity frame. A Protective Frame learns villain identification and rescue framing. Paired shadowing is essential — the agent sits with the top closer who shares their lens, for three full shifts minimum, listening to how the lens gets deployed across real calls. Then they try it themselves with the top closer on the line as backup.',
    actions: [
      "Gap Hunter path — formulary check drills with closing intent; Black Swan identification (find the one fact that makes the current plan indefensible); risk anchor deployment at catastrophic-loss scale ($104K exposures and higher); accusation audit practice for consumers with churn histories.",
      "Patient Verifier path — real-time website verification drills (open provider site, read aloud, confirm network); precision annualization practice (exact dollar figures, never ranges); the dignity frame deployment (\"you've worked your whole life\"); doctor-continuity pivoting when the check surfaces a conflict.",
      "Protective Frame path — villain identification (prior agent, previous carrier, churning pattern); rescue framing (\"someone took you off your chronic plan\"); post-close retention coaching (\"if the name's not mine, what are you going to do?\"); emotional pacing during consumer distress.",
      'Paired shadowing for each agent with the matching top closer for three full shifts. Live-call observation, not classroom. Then reverse — the trainee takes calls with the top closer listening and coaching in real time via whisper feedback.',
    ],
  },
  {
    stage: 'Stage 4',
    weeks: 'Weeks 8–12',
    title: 'Stress Test',
    lead: 'Controlled role-plays specifically attacking the agent\'s weakest pressure points, with graduated difficulty and measurable targets.',
    body:
      'The difference between a trained agent and a top closer is performance under pressure. A classroom-passing agent can surrender on a live call when the consumer pushes back hard. Stage 4 builds pressure resistance. Trainers play the hardest consumer archetypes — the churn victim, the loyalist, the scam-fearful, the spouse-deferrer — and hit the agent with the exact objections that have lost the most deals. The agent must respond from memorized playbook, not improvisation. The goal is to make the right response boring — automatic — so that when a real consumer creates the situation, the agent cannot respond any other way.',
    actions: [
      "Role-play each of the nine pressure points at three difficulty levels: compliant, resistant, hostile. Agent must respond correctly at all three levels.",
      "Live call whisper coaching on the hardest daily calls, targeting the agent's three weakest pressure points identified in the Stage 1 baseline.",
      "Weekly objection-handling review: the agent and the coach review every objection from the week's calls and grade the response against the playbook.",
      'Target outcomes by end of Stage 4: >60% close rate on wavering consumers, >70% on callback requests, >50% on trust objections, 100% annualization rate on every benefit stated.',
    ],
  },
  {
    stage: 'Stage 5',
    weeks: 'Week 12+',
    title: 'Deploy, Track, and Teach',
    lead: 'Full floor deployment with retention tracking, and — critically — the graduating agent joins the coaching team for the next cohort.',
    body:
      "Deployment is not the end of the process. Retention tracking catches the difference between an agent who closes deals and an agent who closes deals that stick. A high close rate with 30-day churn is not a top closer — it is a pipeline filler. The retention number tells the truth. And peer teaching is the multiplier — a newly-minted top closer who coaches the next cohort reinforces their own moves while transferring them to the next agent. This is how one stage becomes a system that builds stars continuously.",
    actions: [
      "Full floor deployment with the lens-specific playbook in hand.",
      "Monthly retention tracking: are this agent's enrollments still active at 30, 60, 90 days? Falling retention triggers remedial coaching on post-close lock execution.",
      "Peer teaching: each graduating agent co-coaches the next cohort. They share what worked, what was hardest, and which drills made the biggest difference.",
      "Feed the loop: every new pressure point we discover on the floor gets added to the drill library. The system gets smarter with every cohort.",
    ],
  },
]

// ─── COMPONENT ─────────────────────────────────────────────────

export default function TopCloserAnalysisPage() {
  return (
    <main className={styles.root}>
      {/* HERO */}
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
          A forensic breakdown of what our three highest-performing agents
          actually do — the exact words, the exact moves, the repeatable process
          that separates a star from everyone else.
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

      {/* THESIS */}
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
          Three agents who don&rsquo;t work together,<br />
          don&rsquo;t share a playbook,<br />
          and don&rsquo;t know each other&rsquo;s scripts<br />
          <em>run the same process.</em>
        </motion.h2>

        <motion.div
          className={styles.thesisBody}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ ...SPRING, delay: 0.2 }}
        >
          <p>
            We spent three weeks reading across every enrolled call from the
            three agents who consistently out-close the rest of the team.
            What we found is not a collection of talents. It is a single
            repeatable process, executed through three different personal
            lenses.
          </p>
          <p>
            They use different words. They lean into different emotional
            registers. One hunts for gaps. One performs evidence. One creates
            villains. But at the level of the moves they make — how they open,
            how they discover, how they handle objections, how they close — they
            are doing the same thing.
          </p>
          <p>
            That is the important finding. Because a process that three
            different people run the same way, without coordinating, is a
            process that can be taught. What follows is that process, move by
            move, with the exact words pulled from real calls.
          </p>
        </motion.div>
      </section>

      {/* THREE LENSES */}
      <section className={`${styles.section} ${styles.lenses}`}>
        <motion.p
          className={styles.eyebrowAlt}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
        >
          Three Lenses, One Process
        </motion.p>

        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={SPRING}
        >
          How Each Agent<br />Runs the Same Call
        </motion.h2>

        <div className={styles.lensGrid}>
          {LENSES.map((lens, i) => (
            <motion.div
              key={lens.agent}
              className={styles.lensCard}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ ...SPRING, delay: 0.1 * i }}
            >
              <div className={styles.lensHeader}>
                <p className={styles.lensAgent}>Agent {String.fromCharCode(65 + i)}</p>
                <h3 className={styles.lensName}>{lens.lens}</h3>
              </div>
              <p className={styles.lensDescription}>{lens.description}</p>
              <div className={styles.lensSignature}>
                <p className={styles.lensSigLabel}>Signature question</p>
                <p className={styles.lensSigQuote}>&ldquo;{lens.signature}&rdquo;</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* THE FLOW */}
      <section className={`${styles.section} ${styles.flow}`}>
        <motion.p
          className={styles.eyebrowAlt}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
        >
          Part One
        </motion.p>

        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={SPRING}
        >
          The Flow
        </motion.h2>

        <motion.p
          className={styles.sectionLead}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ ...SPRING, delay: 0.1 }}
        >
          How top closers actually run a call, phase by phase. This is not a
          script. It is the structural sequence underneath the conversation —
          and it is the same across all three agents, even when their language
          differs.
        </motion.p>

        <div className={styles.flowList}>
          {FLOW_PHASES.map((phase, i) => (
            <motion.div
              key={phase.num}
              className={styles.flowBlock}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ ...SPRING, delay: 0.05 * i }}
            >
              <div className={styles.flowNum}>{phase.num}</div>
              <div className={styles.flowBody}>
                <div className={styles.flowHeader}>
                  <h3 className={styles.flowTitle}>{phase.title}</h3>
                  <span className={styles.flowDuration}>{phase.duration}</span>
                </div>
                <p className={styles.flowSummary}>{phase.summary}</p>
                <p className={styles.flowDetail}>{phase.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRESSURE POINTS */}
      <section className={`${styles.section} ${styles.pressureIntro}`}>
        <motion.p
          className={styles.eyebrowAlt}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
        >
          Part Two
        </motion.p>

        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={SPRING}
        >
          How They Push Through<br />the Tense Moments
        </motion.h2>

        <motion.p
          className={styles.sectionLead}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ ...SPRING, delay: 0.1 }}
        >
          Nine recurring pressure points on every Medicare call, and the
          specific moves our three top closers use to push through each one.
          Every example below is a verbatim quote from an enrolled call.
          Multiple examples per pressure point, across the three agents —
          because the point is to show that the move is not individual. It is a
          pattern.
        </motion.p>
      </section>

      {PRESSURE_POINTS.map((pp, idx) => (
        <PressurePointSection key={pp.title} pp={pp} index={idx} />
      ))}

      {/* CONSUMER TYPES */}
      <section className={`${styles.section} ${styles.consumerTypes}`}>
        <motion.p
          className={styles.eyebrowAlt}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
        >
          Part Three · Reading the Consumer
        </motion.p>

        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={SPRING}
        >
          Seven Consumer Types.<br />
          Seven Different Ways to Close.
        </motion.h2>

        <motion.p
          className={styles.sectionLead}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ ...SPRING, delay: 0.1 }}
        >
          Top closers don&rsquo;t apply the same move to every consumer. They read
          who they&rsquo;re talking to in the first two minutes and adapt. The same
          objection from two different consumer types means two different things —
          and needs two different responses. Every type below has a specific
          breaking point. Know the type, know the move.
        </motion.p>

        <div className={styles.consumerGrid}>
          {CONSUMER_TYPES.map((ct, i) => (
            <motion.div
              key={ct.id}
              className={styles.consumerCard}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ ...SPRING, delay: 0.06 * i }}
            >
              <div className={styles.consumerCardTop}>
                <span className={`${styles.consumerDifficulty} ${styles[`difficulty_${ct.difficulty.replace('-', '_')}`]}`}>
                  {ct.difficulty === 'near-loss' ? 'Near-Loss' : ct.difficulty.charAt(0).toUpperCase() + ct.difficulty.slice(1)}
                </span>
                <span className={styles.consumerCallRef}>{ct.callRef}</span>
              </div>

              <h3 className={styles.consumerName}>{ct.name}</h3>

              <blockquote className={styles.consumerTrigger}>
                {ct.triggerLine}
              </blockquote>

              <p className={styles.consumerDescription}>{ct.description}</p>

              <div className={styles.consumerBreaking}>
                <span className={styles.consumerBreakingLabel}>Breaking point</span>
                <p className={styles.consumerBreakingText}>{ct.breakingPoint}</p>
              </div>

              <div className={styles.consumerMoveBlock}>
                <span className={styles.consumerMoveLabel}>The move</span>
                <p className={styles.consumerMoveText}>{ct.theMove}</p>
              </div>

              <div className={styles.consumerFooter}>
                <span className={styles.consumerAgent}>Owned by: {ct.agentWhoOwnsThis}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* OBJECTION CHAINS */}
      <section className={`${styles.section} ${styles.chains}`}>
        <motion.p
          className={styles.eyebrowAlt}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
        >
          Part Four · Objection Chains
        </motion.p>

        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={SPRING}
        >
          How the Chain<br />Actually Breaks
        </motion.h2>

        <motion.p
          className={styles.chainsSectionLead}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ ...SPRING, delay: 0.1 }}
        >
          Five real calls where the consumer objected more than once &mdash; sometimes five times.
          Each sequence shows every objection in order, the agent&rsquo;s exact response, and what
          finally broke the chain. This is not theory. These are the calls.
        </motion.p>

        <div className={styles.chainsGrid}>
          {OBJECTION_CHAINS.map((chain, i) => (
            <ObjectionChainCard key={`${chain.agent}-${chain.consumer}`} chain={chain} index={i} />
          ))}
        </div>
      </section>

      {/* THE PATTERN */}
      <section className={`${styles.section} ${styles.pattern}`}>
        <motion.p
          className={styles.eyebrowAlt}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
        >
          Part Five · The Synthesis
        </motion.p>

        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={SPRING}
        >
          What Emerges
        </motion.h2>

        <motion.p
          className={styles.patternLead}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ ...SPRING, delay: 0.1 }}
        >
          The behaviors that show up on every enrolled call from all three top
          agents, regardless of the consumer, the plan, or the pressure point.
          This is the profile of the closer we want to replicate. Twelve
          learnable, measurable, drillable moves.
        </motion.p>

        <div className={styles.patternGrid}>
          {PATTERN_TRAITS.map((trait, i) => (
            <motion.div
              key={trait.title}
              className={styles.patternCard}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ ...SPRING, delay: 0.04 * i }}
            >
              <div className={styles.patternNum}>{String(i + 1).padStart(2, '0')}</div>
              <h3 className={styles.patternTitle}>{trait.title}</h3>
              <p className={styles.patternBody}>{trait.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* REPLICATION PROCESS */}
      <section className={`${styles.section} ${styles.training}`}>
        <motion.p
          className={styles.eyebrowAlt}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
        >
          Part Six · The Replication Process
        </motion.p>

        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={SPRING}
        >
          How We Build<br />
          Another Top Closer
        </motion.h2>

        <motion.div
          className={styles.trainingBody}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ ...SPRING, delay: 0.1 }}
        >
          <p>
            Up to this point, the document has shown what our top closers do
            and what weaker agents do instead. This section is the operational
            answer to the only question that matters: <em>how do we take an
            average agent and turn them into one of the top three?</em>
          </p>
          <p>
            A five-stage, twelve-week process. Every stage has a specific
            goal, specific actions, and a measurable outcome. The process is
            reverse-engineered from the actual behaviors observed on the top
            closers&rsquo; calls — not from a training manual, not from theory,
            and not from best-practice blog posts. This is what the data says
            works.
          </p>
        </motion.div>

        <div className={styles.stageList}>
          {REPLICATION_STAGES.map((stage, i) => (
            <motion.div
              key={stage.stage}
              className={styles.stageBlock}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ ...SPRING, delay: 0.06 * i }}
            >
              <div className={styles.stageHeader}>
                <span className={styles.stageNum}>{stage.stage}</span>
                <span className={styles.stageWeeks}>{stage.weeks}</span>
              </div>
              <h3 className={styles.stageTitle}>{stage.title}</h3>
              <p className={styles.stageLead}>{stage.lead}</p>
              <p className={styles.stageBody}>{stage.body}</p>
              <div className={styles.stageActionsWrap}>
                <p className={styles.stageActionsLabel}>What happens in this stage</p>
                <ul className={styles.stageActions}>
                  {stage.actions.map((a, j) => (
                    <li key={j}>{a}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* THE DECISION */}
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
            Every move in this document was pulled from a real call, performed
            by a real agent, in a real conversation where a real enrollment
            happened. None of it is proprietary. None of it is the result of
            personality or talent. It is process. It is teachable.
          </p>
          <p>
            We have the training infrastructure to deliver it. We have the
            call-monitoring systems to measure it. What we don&rsquo;t have yet
            is a decision to rebuild training around the actual pattern the
            data shows — instead of around the script we&rsquo;ve been using.
          </p>
          <p className={styles.askClose}>
            Proposed pilot: pick four mid-performing agents. Run the six-phase
            drill program for two weeks. Measure close rate on the specific
            pressure points above — wavering, carrier loyalty, trust objection,
            callback request — before and after. If it translates, scale to the
            full floor within 60 days.
          </p>
        </motion.div>

        <div className={styles.signoff}>
          <p className={styles.signoffLine}>Prepared by the Certainty System</p>
          <p className={styles.signoffLine}>
            Based on forensic analysis of enrolled calls from the team&rsquo;s top
            three agents · March–April 2026
          </p>
        </div>
      </section>
    </main>
  )
}

// ─── OBJECTION CHAIN CARD ──────────────────────────────────────

function ObjectionChainCard({ chain, index }: { chain: ObjectionChain; index: number }) {
  return (
    <motion.div
      className={styles.chainCard}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ ...SPRING, delay: 0.06 * index }}
    >
      <div className={styles.chainCardTop}>
        <div className={styles.chainCardMeta}>
          <span className={styles.chainAgent}>{chain.agent}</span>
          <span className={styles.chainConsumerRef}>vs. {chain.consumer} &middot; {chain.date}</span>
        </div>
        <span className={`${styles.chainDifficulty} ${styles[`difficulty_${chain.difficulty.replace('-', '_')}`]}`}>
          {chain.difficulty === 'near-loss' ? 'Near-Loss' : 'High'}
        </span>
      </div>

      <p className={styles.chainSummary}>{chain.chainSummary}</p>

      <div className={styles.chainSteps}>
        {chain.steps.map((step) => (
          <div key={step.sequence} className={styles.chainStep}>
            <div className={styles.chainStepHeader}>
              <span className={styles.chainStepNum}>{String(step.sequence).padStart(2, '0')}</span>
              <span className={styles.chainStepType}>{step.type}</span>
              <span className={styles.chainStepTime}>{step.timestamp}</span>
              <span className={`${styles.chainStepOutcome} ${step.outcome === 'recovered' ? styles.chainOutcomeRecovered : styles.chainOutcomePartial}`}>
                {step.outcome === 'recovered' ? 'Broke Through' : 'Partial'}
              </span>
            </div>
            <blockquote className={styles.chainConsumerPhrase}>{step.consumerPhrase}</blockquote>
            <p className={styles.chainAgentResponse}>{step.agentResponse}</p>
          </div>
        ))}
      </div>

      <div className={styles.chainBreaking}>
        <span className={styles.chainBreakingLabel}>What broke the chain</span>
        <p className={styles.chainBreakingText}>{chain.whatBrokeIt}</p>
      </div>

      <div className={styles.chainClosingLine}>
        <span className={styles.chainClosingLabel}>The closing line</span>
        <p className={styles.chainClosingText}>&ldquo;{chain.closingLine}&rdquo;</p>
      </div>
    </motion.div>
  )
}

// ─── PRESSURE POINT SECTION ────────────────────────────────────

function PressurePointSection({
  pp,
  index,
}: {
  pp: PressurePoint
  index: number
}) {
  return (
    <section className={`${styles.section} ${styles.pressureSection}`}>
      <motion.p
        className={styles.pairIndex}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.4 }}
      >
        Pressure Point {pp.number} / {String(9).padStart(2, '0')}
      </motion.p>

      <motion.h2
        className={styles.pairTitle}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={SPRING}
      >
        {pp.title}
      </motion.h2>

      <motion.p
        className={styles.pairDescription}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ ...SPRING, delay: 0.1 }}
      >
        {pp.whatHappens}
      </motion.p>

      <p className={styles.examplesLabel}>What our top closers do</p>

      <div className={styles.examplesGrid}>
        {pp.examples.map((ex, i) => (
          <motion.div
            key={`${ex.agent}-${ex.consumer}`}
            className={styles.exampleCard}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ ...SPRING, delay: 0.08 * i }}
          >
            <div className={styles.exampleHeader}>
              <span className={styles.exampleAgent}>{ex.agent}</span>
              <span className={styles.exampleMeta}>
                vs. {ex.consumer} · {ex.date} · {ex.timestamp}
              </span>
            </div>
            <p className={styles.exampleContext}>{ex.context}</p>
            <blockquote className={styles.exampleQuote}>
              &ldquo;{ex.quote}&rdquo;
            </blockquote>
          </motion.div>
        ))}
      </div>

      {pp.weakContrast && (
        <motion.div
          className={styles.contrastBlock}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ ...SPRING, delay: 0.1 }}
        >
          <div className={styles.contrastLabelRow}>
            <span className={styles.contrastLabel}>In the same situation, a weaker agent said:</span>
          </div>
          <div className={styles.contrastCard}>
            <div className={styles.contrastHeader}>
              <span className={styles.contrastMeta}>
                vs. {pp.weakContrast.consumer} · {pp.weakContrast.date} · {pp.weakContrast.timestamp}
              </span>
            </div>
            <p className={styles.contrastContext}>{pp.weakContrast.context}</p>
            <blockquote className={styles.contrastQuote}>
              &ldquo;{pp.weakContrast.quote}&rdquo;
            </blockquote>
            <div className={styles.contrastWhy}>
              <p className={styles.contrastWhyLabel}>Why it failed</p>
              <p className={styles.contrastWhyText}>{pp.weakContrast.whyItFailed}</p>
            </div>
          </div>
        </motion.div>
      )}

      <motion.div
        className={styles.analysisStack}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ ...SPRING, delay: 0.1 }}
      >
        <div className={styles.analysisRow}>
          <p className={styles.analysisLabel}>The shared move</p>
          <p className={styles.analysisBody}>{pp.sharedMove}</p>
        </div>

        <div className={styles.analysisRow}>
          <p className={styles.analysisLabel}>Why it works</p>
          <p className={styles.analysisBody}>{pp.mechanism}</p>
        </div>

        <div className={`${styles.analysisRow} ${styles.trainingRow}`}>
          <p className={styles.analysisLabel}>How we train it</p>
          <p className={styles.analysisBody}>{pp.teach}</p>
        </div>
      </motion.div>
    </section>
  )
}
