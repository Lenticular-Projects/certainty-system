export type Objection = {
  id: string
  section: string
  clientPhrase: string
  signal: 'red' | 'yellow' | 'green'
  underneath: string
  doNotSay?: string[]
  responses: Array<{ label?: string; text: string }>
  pillar: string
}

export const sections = [
  'All',
  'Fear of Change & Switching',
  'Commercial & Benefit',
  'Stall',
  'Network & Coverage',
  'Loyalty',
  'Timing',
  'Benefit & Plan Comparison',
  'Trust & Credibility',
  'Fear of Losing Existing Benefits',
  'Financial',
  'Family & Third Party',
  'Resistance at Close',
]

export const objections: Objection[] = [

  // ─── SECTION 1: FEAR OF CHANGE & SWITCHING ───────────────────────────────

  {
    id: 'happy-with-plan',
    section: 'Fear of Change & Switching',
    clientPhrase: '"I\'m happy with what I have." / "My plan works."',
    signal: 'red',
    underneath: 'They have connected their current plan to their health and safety. "Happy" is based on no comparison. The absence of complaints is not the same as receiving full value.',
    doNotSay: [
      'Explaining why the new plan is better — logic against fear does not work',
      '"But your plan is costing you money." — sounds like an attack; they defend it',
      '"You\'re missing out on a lot of benefits." — they hear criticism, not opportunity',
    ],
    responses: [
      {
        label: 'Reframe what "happy" means',
        text: '"I love hearing that — and I want to make sure that feeling is based on the full picture. What I\'m looking at right now is that your current plan doesn\'t include [specific benefit]. That\'s $[amount] a year that\'s already funded for you — you\'re just not getting it. If I\'m wrong, I\'ll tell you."',
      },
      {
        label: 'For long-term plan holders',
        text: '"You\'ve been on this plan a while — and I respect that. I just want to make sure what you have is still the right plan for your situation this year. Plans restructure every January. It takes me a couple minutes to verify. If what you have is the strongest plan in your area, I\'ll tell you and we\'re done."',
      },
    ],
    pillar: 'The Shift — reframe "happy" as "leaving money behind"',
  },

  {
    id: 'dont-want-change',
    section: 'Fear of Change & Switching',
    clientPhrase: '"I don\'t want to change."',
    signal: 'red',
    underneath: '"I don\'t want to" is not a decision — it\'s discomfort with motion. The fear is about losing something safe, not about the plan itself.',
    doNotSay: [
      'Presenting benefits or plan details before naming the fear',
      '"Change is sometimes a good thing!" — invalidates their experience',
    ],
    responses: [
      {
        text: '"I hear you — and I wouldn\'t want you to change anything either. I want to make sure what you have is still the right plan for your situation this year. It takes me a couple minutes to verify. If it\'s already the strongest plan available in your area, I\'ll tell you and we\'re done. Fair?"',
      },
    ],
    pillar: 'Reframing — redirect from "changing" to "verifying"',
  },

  {
    id: 'devil-you-know',
    section: 'Fear of Change & Switching',
    clientPhrase: '"Better safe than sorry." / "I\'d rather stick with what I know."',
    signal: 'red',
    underneath: 'Past experience — theirs or someone they know — where a change went wrong. The emotion is real and must be named before anything else can land.',
    doNotSay: [
      'Explaining Medicare mechanics — logic against fear almost always fails',
      '"There\'s nothing to worry about." — dismisses the concern without addressing it',
    ],
    responses: [
      {
        text: '"I hear you — you\'ve had a plan that\'s worked and you don\'t want to risk losing what you have. That makes complete sense. What I\'m showing you doesn\'t take anything away. It just makes sure you\'re not leaving benefits on the table every month that could improve your quality of life."',
      },
    ],
    pillar: 'Reframing — name the fear, redirect toward what they\'re currently leaving behind',
  },

  {
    id: 'just-changed',
    section: 'Fear of Change & Switching',
    clientPhrase: '"I just changed plans recently. I don\'t want to change again."',
    signal: 'red',
    underneath: 'The client feels like they already did their homework. Changing again means they made a mistake — and nobody wants to feel that.',
    doNotSay: [
      'Pressing forward with a benefits comparison before acknowledging the fatigue',
      'Responding with plan names and network lists — this is an emotional objection, not an information gap',
    ],
    responses: [
      {
        text: '"I completely understand — you just went through this and the last thing you want is more confusion. What I want to make sure is that the plan you moved to is actually giving you everything you\'re entitled to. It takes me a couple minutes to verify. If you\'re on the right plan, I\'ll tell you and you\'ll know for certain."',
      },
    ],
    pillar: 'Reframing — validate the fatigue, reframe the purpose as verification not selling',
  },

  {
    id: 'not-deciding-today',
    section: 'Fear of Change & Switching',
    clientPhrase: '"I\'m not making any decisions today." / "I\'m just looking."',
    signal: 'red',
    underneath: 'This is rarely about time. It\'s about not yet feeling safe enough to decide.',
    doNotSay: [
      '"Of course, take your time." — validates the exit; the call is over',
      'Offering a callback as the first response',
    ],
    responses: [
      {
        text: '"I hear you — and I\'m not asking you to decide anything today. I\'m asking you to look at a number. The decision you make after that is yours. Can I show you the comparison?"',
      },
    ],
    pillar: 'The Shift — reduce the perceived commitment to looking, not deciding',
  },

  // ─── SECTION 2: COMMERCIAL & BENEFIT ─────────────────────────────────────

  {
    id: 'just-want-the-money',
    section: 'Commercial & Benefit',
    clientPhrase: '"I just want the money." / "I just want the food card."',
    signal: 'green',
    underneath: 'This caller wants the benefit, not the process. They believe they can get the card without touching their plan — like a coupon or government check. They are not resistant to the benefit; they are resistant to what they think is an unnecessary step.',
    doNotSay: [
      '"It doesn\'t work that way." — dismissive; makes them feel foolish',
      '"You have to enroll in a plan to get it." — lands like a trap; triggers resistance',
      'Jumping into plan comparison before resolving the misunderstanding',
    ],
    responses: [
      {
        label: 'Explain how it actually works',
        text: '"That card is real — and I want to make sure you actually get it. Here\'s how it works: the grocery benefit isn\'t something the government mails out separately. It\'s loaded onto a card that comes with a specific plan. Think of the plan as the account — the card is what you spend from. My job is to find the plan in your area that loads the highest amount. That\'s the whole call."',
      },
      {
        label: 'If they push back — "I don\'t want to switch"',
        text: '"I hear you — this isn\'t about switching to something worse. I\'m looking for whether there\'s a plan that gives you that grocery money AND covers everything your current plan already covers. A lot of times there is. Let me check what\'s available for your zip code."',
      },
      {
        label: 'If they say "I\'m not doing all this"',
        text: '"I completely understand — you called for the benefit, not the process. Here\'s the truth: the benefit doesn\'t exist outside the plan. The plan is what delivers the money to your card every month. I\'m not adding a step — I am the step."',
      },
    ],
    pillar: 'Reframing — the benefit and the plan are the same thing; you activate the card',
  },

  {
    id: 'commercial-amount',
    section: 'Commercial & Benefit',
    clientPhrase: '"The commercial said I could get $6,000 / $900 / $1,200. Yours is less."',
    signal: 'red',
    underneath: 'The commercial set an expectation. The reality feels like a downgrade. They need someone to validate that feeling — and then give them something real.',
    doNotSay: [
      '"I don\'t control the commercial." — abandons all authority; you are nobody on this call',
      '"That\'s not how it works." — shames them for believing it; call ends',
      'Defending the system — you become part of what betrayed them',
    ],
    responses: [
      {
        label: 'Validate and anchor on real value',
        text: '"You\'re right to be frustrated — and I want to be straight with you. Those commercials show the national maximum — the highest available anywhere in the country. Your actual benefit is based on your zip code and the plans available there. What I\'m looking at for your area right now is $[amount] — and that\'s real. The commercial showed the ceiling. I\'m showing you your floor."',
      },
      {
        label: 'Pivot to total value',
        text: '"Here\'s what those commercials don\'t show you. The total value isn\'t just one benefit. By the time we add up the grocery card, the Part B giveback, the dental, and the OTC allowance — the real total for your area is [annualized number]. That\'s the actual picture."',
      },
    ],
    pillar: 'Reframing — validate the frustration; anchor on real available value',
  },

  {
    id: 'card-not-available',
    section: 'Commercial & Benefit',
    clientPhrase: '"I called about the card I saw on TV but it\'s not available in my area."',
    signal: 'red',
    underneath: 'They came in ready to buy. The specific benefit not being at max is a detour, not a dead end.',
    responses: [
      {
        text: '"I completely understand why that\'s frustrating — you came in looking for something specific. Here\'s what I want to show you: even if that exact benefit isn\'t at the maximum in your area, the total value of what\'s available is often higher than what the commercial showed. Let me run the full picture for your zip code."',
      },
    ],
    pillar: 'The Shift — pivot from single benefit to total annual value',
  },

  {
    id: 'commercial-a-and-b',
    section: 'Commercial & Benefit',
    clientPhrase: '"The commercial said A and B is all I need to get the card."',
    signal: 'red',
    underneath: 'Deceived by advertising into thinking the benefit is automatic. The wrong response makes you part of the betrayal.',
    doNotSay: [
      '"I don\'t control the commercial." — surrenders all authority',
      '"That\'s not how it works — you can\'t just call and have a card mailed to you." — shames them; triggers defensiveness',
    ],
    responses: [
      {
        text: '"Those commercials make it sound automatic — and I understand why. What they don\'t explain is that the government distributes those funds through specific plans. You\'ve already done the hard part by getting Parts A and B. My job is to make sure that money actually gets to you instead of sitting unclaimed."',
      },
    ],
    pillar: 'Reframing — become the ally; position enrollment as the activation step the commercial left out',
  },

  // ─── SECTION 3: STALL ────────────────────────────────────────────────────

  {
    id: 'think-about-it',
    section: 'Stall',
    clientPhrase: '"I need to think about it." / "Call me back later."',
    signal: 'red',
    underneath: 'This is almost never about needing time. It\'s about inaction not yet feeling expensive enough. The client doesn\'t have a compelling reason to decide now.',
    doNotSay: [
      '"Of course — I\'ll call you back." — the lead is almost never recovered once the call ends this way',
      '"What specifically do you need to think about?" — open-ended; gives them room to manufacture more objections',
    ],
    responses: [
      {
        label: 'Step 1 — Find the real objection',
        text: '"Of course — before I let you go, can I ask: is there something specific you want to think through? Because if there\'s a concern, I\'d rather address it now while I have everything pulled up."',
      },
      {
        label: 'Step 2 — Make the delay cost something',
        text: '"Here\'s what I want you to know before you go: every month we wait on this, that\'s $[monthly benefit] that doesn\'t come back. I\'m not asking you to make a permanent decision — I\'m asking you to not leave $[amount] on the table. Work with me for a few more minutes."',
      },
    ],
    pillar: 'The Shift — reframe what they\'re thinking about; make inaction the cost',
  },

  {
    id: 'send-something',
    section: 'Stall',
    clientPhrase: '"Can you send me something to look over?"',
    signal: 'red',
    underneath: 'They want a dignified way to end the call. The request for mail is not genuine information-seeking — it\'s an escape hatch.',
    doNotSay: [
      '"Sure, what\'s your email?" — you are handing them the exit',
      '"I can\'t do that" without explanation — sounds like an obstacle',
    ],
    responses: [
      {
        text: '"I hear you — you want to see it in writing before you do anything. Here\'s the thing: the official plan documents only get generated once an application is on file — that\'s how the system works. What I can do is submit the application today, which triggers those documents to arrive at your door. And if anything in those documents doesn\'t match what I\'ve told you today, you call me directly and we sort it out."',
      },
    ],
    pillar: 'The Shift — enrollment generates the documentation; reframe "send me something" as enrollment itself',
  },

  {
    id: 'give-plan-id',
    section: 'Stall',
    clientPhrase: '"Give me the plan ID so I can look it up."',
    signal: 'red',
    underneath: 'The client is constructing an exit. Providing the plan ID hands them everything they need to walk away — and nothing they need to stay.',
    doNotSay: [
      'Providing the plan ID or website URL — this tells the client you are not necessary for this transaction',
    ],
    responses: [
      {
        text: '"I hear you — you want to verify this yourself, and I respect that. Here\'s the thing: I have direct system access to every plan available in your zip code. I can pull what would take you a long time to find on your own and have it in front of you right now. The research is done. All I\'m asking is for you to look at the numbers and decide for yourself. If you don\'t like what you see, we\'re done. Fair?"',
      },
    ],
    pillar: 'Persuasion — position yourself as the tool that completes their research',
  },

  // ─── SECTION 4: NETWORK & COVERAGE ───────────────────────────────────────

  {
    id: 'doctor-said-stay',
    section: 'Network & Coverage',
    clientPhrase: '"My doctor told me I have to stay on my current plan."',
    signal: 'red',
    underneath: 'Doctor\'s office staff almost never understand Medicare plan contracting. The "mandate" is almost certainly misinformation.',
    doNotSay: [
      'Arguing directly with what the doctor\'s office said',
      'Accepting it as true and trying to work around it',
    ],
    responses: [
      {
        text: '"I hear you — and I want to make sure you have the right information before you decide anything. Let me check Dr. [name]\'s status live right now, while we\'re on the phone. Doctors\' offices sometimes aren\'t up to date on which plans they\'re contracted with — those contracts change every year."',
      },
    ],
    pillar: 'Persuasion — live verification is the authority; show, don\'t argue',
  },

  {
    id: 'lose-medicaid',
    section: 'Network & Coverage',
    clientPhrase: '"I was told I\'d lose my Medicaid if I switch."',
    signal: 'red',
    underneath: 'False fear with very high emotional stakes. Medicaid and Medicare Advantage are completely separate programs.',
    responses: [
      {
        text: '"I completely understand why that would stop you — and I want to make sure you have the right information. Medicaid and your Medicare Advantage plan are two separate programs. Switching your Medicare plan does not affect your Medicaid status. Your Medicaid is based on your income — not which Medicare plan you choose. I can verify your eligibility right now while we\'re on the phone. You won\'t lose a single dollar of Medicaid by looking at what\'s available."',
      },
    ],
    pillar: 'Reframing — name the fear, dismantle the false belief with fact, verify live',
  },

  {
    id: 'denied-before',
    section: 'Network & Coverage',
    clientPhrase: '"I was denied before / I tried this before and it didn\'t work."',
    signal: 'red',
    underneath: 'Past failure created a real barrier. Eligibility changes every year and varies by plan.',
    responses: [
      {
        text: '"I hear you — and I want to find out what happened. Eligibility changes every year, and it depends on the specific plan. Just because one plan or one situation said no doesn\'t mean every option in your area says no. I can check eligibility right now for everything available in your zip code. If there\'s something you qualify for that you were told you didn\'t, I want you to have it. Can I check?"',
      },
    ],
    pillar: 'Persuasion — make checking feel low-risk; position yourself as the verification authority',
  },

  {
    id: 'no-hmo',
    section: 'Network & Coverage',
    clientPhrase: '"I don\'t want an HMO. I want to be able to see any doctor."',
    signal: 'red',
    underneath: 'Network structure resistance based on incomplete information about plan types available.',
    responses: [
      {
        text: '"That makes sense — and I want to show you what\'s actually available in your area, because PPO and HMO-POS plans exist alongside HMOs and they work very differently. Some give you the flexibility to see any doctor in-network without a referral. Let me check what plan types are available in your zip code before we rule anything out."',
      },
    ],
    pillar: 'Persuasion — present options before accepting the frame',
  },

  // ─── SECTION 5: LOYALTY ───────────────────────────────────────────────────

  {
    id: 'love-carrier',
    section: 'Loyalty',
    clientPhrase: '"I love [carrier] — they\'ve taken great care of me."',
    signal: 'red',
    underneath: 'This client has connected the brand to their health and safety. Logic will not touch this first. Go in through the loyalty, not against it.',
    doNotSay: [
      'Presenting a competing carrier\'s plan as the first move',
      'Saying their current plan is "inferior" — the moment you insult a plan, the client defends it. The call ends.',
    ],
    responses: [
      {
        label: 'Same brand upgrade',
        text: '"I love that [carrier] has taken great care of you — that matters. My job today isn\'t to move you away from [carrier]. It\'s to make sure you\'re on the right [carrier] plan for this year, because they have multiple plans in your area and some of them pay significantly more. Can I show you what else [carrier] has available?"',
      },
      {
        label: 'Introducing a different carrier',
        text: '"I completely respect that. Before you go — on a scale of 1 to 10, how confident are you that your current [carrier] plan is the strongest one available in your area right now? If you\'re a 10, we\'re done. But if there\'s any doubt, let me verify."',
      },
    ],
    pillar: 'Reframing — validate the loyalty, redirect toward the upgrade within the brand',
  },

  {
    id: 'bad-carrier-experience',
    section: 'Loyalty',
    clientPhrase: '"I\'ve been with this carrier before and I wasn\'t happy."',
    signal: 'red',
    underneath: 'Real experience that created a real barrier. You cannot argue with lived experience.',
    doNotSay: [
      '"I\'m sure things are different now." — dismissive',
      'Moving past the objection with "I understand" and no follow-through',
    ],
    responses: [
      {
        text: '"I hear you — and I\'m not going to dismiss what you went through. What I want to show you is that this year\'s [carrier] plan is a different structure than what you had before. More importantly, it covers Dr. [name] and it gives you $[amount] a month you\'re currently not getting. Can I show you the comparison before you decide?"',
      },
    ],
    pillar: 'Reframing — validate the past experience, differentiate the current offer with a specific anchor',
  },

  {
    id: 'have-agent',
    section: 'Loyalty',
    clientPhrase: '"I have an insurance lady / agent who handles this."',
    signal: 'red',
    underneath: 'Their loyalty is to a person, not a plan. Do not attack that person — you will lose.',
    doNotSay: [
      '"You should go talk to them." — handing the sale directly to a competitor',
      'Criticizing the other agent directly',
    ],
    responses: [
      {
        label: 'When a specific gap exists',
        text: '"I completely respect loyalty — and I\'m not here to replace anyone. Here\'s what I want you to know: your current plan doesn\'t cover [specific thing]. Your current agent either didn\'t know or didn\'t have access to a plan that fixes this. I\'m not criticizing them — I just want you to have coverage that actually works. Can we fix this today?"',
      },
      {
        label: 'No specific gap yet identified',
        text: '"Your current agent cares about you — and so do I. The difference is I\'m looking at what\'s available right now, and I see $[amount] a month you\'re leaving on the table. A good agent would want you to have that. Let\'s look at the numbers."',
      },
    ],
    pillar: 'Reframing — validate the loyalty, identify the gap, position yourself as the solution',
  },

  // ─── SECTION 6: TIMING ───────────────────────────────────────────────────

  {
    id: 'already-did-this-today',
    section: 'Timing',
    clientPhrase: '"I already did this today." / "I just talked to someone about this."',
    signal: 'red',
    underneath: 'Almost never true — or if it is, the call didn\'t result in an enrollment. Inbound callers who say this are trying to skip the verification process. They called because they want a benefit. Your job is to reframe the verification as the thing that confirms they actually get what they called for.',
    doNotSay: [
      '"Oh, okay — I\'ll let you go then." — kills the call on a deflection that was almost certainly not real',
      '"Who did you talk to?" — accusatory; puts them on the defensive',
      'Accepting the statement at face value',
    ],
    responses: [
      {
        text: '"I hear you — and I want to make sure whatever you did earlier actually got you the benefit you were looking for. A lot of times people go through part of the process but the enrollment doesn\'t go all the way through, and the benefit never activates. Can I verify whether what you set up earlier is showing as active in the system? That way you\'ll know for certain."',
      },
      {
        label: 'If they resist the verification',
        text: '"I\'m not asking you to start over. I just want to confirm it went through. If it did, you\'ll know it\'s done and I\'ll let you go. If it didn\'t, we catch it right now instead of finding out later when the benefit doesn\'t show up."',
      },
    ],
    pillar: 'Persuasion — position the verification as protecting what they already set up, not restarting it',
  },

  {
    id: 'already-signed-up',
    section: 'Timing',
    clientPhrase: '"I already signed up this year — I think I\'m good."',
    signal: 'red',
    underneath: 'The client renewed but may not have compared their options. Auto-renewal is not the same as choosing the best plan.',
    responses: [
      {
        text: '"That\'s actually great timing — because we\'re in the Open Enrollment Period right now, which means you have a one-time opportunity to review what you just enrolled in and compare it to what\'s currently available. If what you have is the best option, I\'ll tell you and we\'re done. If there\'s something better, you\'ll want to know before that window closes."',
      },
    ],
    pillar: 'Persuasion — position OEP as the window, not the pressure',
  },

  {
    id: 'next-enrollment',
    section: 'Timing',
    clientPhrase: '"I\'ll do this next open enrollment."',
    signal: 'red',
    underneath: 'Delay stall — they want to push the decision to a future date.',
    responses: [
      {
        text: '"I hear you — and I want to show you what that wait actually costs. The benefit we\'re talking about is $[monthly]. Between now and next open enrollment is [X] months. That money is already funded — it exists right now for people in your zip code. The only question is whether it goes to you or someone else."',
      },
    ],
    pillar: 'The Shift — make the wait expensive in specific dollars',
  },

  {
    id: 'procedure-coming',
    section: 'Timing',
    clientPhrase: '"I have a procedure / appointment coming up. I don\'t want to mess up my coverage."',
    signal: 'red',
    underneath: 'Fear of a coverage gap during a critical time.',
    responses: [
      {
        text: '"Completely valid — and here\'s the important thing: your current coverage stays active until the new plan\'s effective date. There is no gap. Your appointment is fully covered under your current plan. Once the new plan starts, [benefit] starts too. You\'re protected the whole way through."',
      },
    ],
    pillar: 'Reframing — eliminate the false fear of a coverage gap, then pivot',
  },

  {
    id: 'moving-soon',
    section: 'Timing',
    clientPhrase: '"I\'m moving soon. Let me wait until I\'m settled."',
    signal: 'red',
    underneath: 'Timing stall anchored to a life event.',
    responses: [
      {
        text: '"Where are you moving? Let me check what plans are available there — that way you\'re making a decision based on where you\'re actually going. And when you move, there\'s a Special Enrollment Period that lets you change plans immediately. We can lock in your benefit now, you get the money in the meantime, and you adjust when you move."',
      },
    ],
    pillar: 'The Shift — SEP protects the move; make the wait cost real dollars',
  },

  {
    id: 'waiting-medicaid',
    section: 'Timing',
    clientPhrase: '"I\'m waiting to see if I qualify for Medicaid."',
    signal: 'red',
    underneath: 'Stall anchored to an outcome that may already have an answer.',
    responses: [
      {
        label: 'If Medicaid already said no',
        text: '"So you\'re waiting for something that\'s already given you an answer. Every month we wait from here is $[monthly benefit] you don\'t get. I want to show you what that number looks like."',
      },
      {
        label: 'If still pending',
        text: '"If Medicaid comes through, we can adjust your plan. If it doesn\'t, you\'re already covered. Either way, the benefit you\'re eligible for right now starts [date]. Every month we wait on the Medicaid answer, that\'s $[monthly] sitting on the table."',
      },
    ],
    pillar: 'The Shift — make waiting expensive; enrollment is the low-risk option either way',
  },

  // ─── SECTION 7: BENEFIT & PLAN COMPARISON ────────────────────────────────

  {
    id: 'want-giveback',
    section: 'Benefit & Plan Comparison',
    clientPhrase: '"I want the Part B Giveback."',
    signal: 'green',
    underneath: 'Motivated, specific — they know what they want. The risk is chasing the giveback number without checking whether the overall plan is the right fit.',
    responses: [
      {
        text: '"A Part B Giveback is real savings — and we\'re going to find you the best one available in your area. One thing I want to make sure of: plans with the highest giveback sometimes have higher copays when you actually use the plan. My job is to find you the plan that puts the most money back overall — not just the biggest number on the monthly summary. Let me pull up what\'s available in your zip code right now."',
      },
    ],
    pillar: 'The Shift — total savings, not just the giveback number',
  },

  {
    id: 'original-medicare',
    section: 'Benefit & Plan Comparison',
    clientPhrase: '"I want to stick with Original Medicare."',
    signal: 'red',
    underneath: 'Philosophical resistance to Medicare Advantage as a concept.',
    responses: [
      {
        text: '"I completely understand — a lot of people feel that way, and I want to make sure you\'re making that choice with the full picture. If there\'s a $0 premium plan that includes your doctors, covers your medications, and gives you [benefit], that\'s worth taking a look at. If it doesn\'t fit, we stay with what you have. My only goal is to make sure you\'re not leaving something on the table."',
      },
    ],
    pillar: 'Persuasion — make the comparison feel low-stakes',
  },

  {
    id: 'medigap',
    section: 'Benefit & Plan Comparison',
    clientPhrase: '"I want to stick with my Medigap / Supplement plan."',
    signal: 'red',
    underneath: 'Comfort with current structure — but supplement premiums increase every year and don\'t cover dental, hearing, or prescriptions.',
    responses: [
      {
        text: '"Medigap does offer great flexibility — and I want to make sure the premium you\'re paying is worth what you\'re getting. Supplement premiums increase every year, and they don\'t cover dental, hearing, or prescriptions. Let me show you whether an Advantage plan in your area could give you those benefits and potentially put money back in your pocket. If the numbers don\'t work, I\'ll tell you."',
      },
    ],
    pillar: 'The Shift — total cost including premium vs. total value including extra benefits',
  },

  {
    id: 'no-prescriptions',
    section: 'Benefit & Plan Comparison',
    clientPhrase: '"I don\'t take prescriptions — I don\'t need a Part D plan."',
    signal: 'yellow',
    underneath: 'Logic-based objection, potentially uninformed about late enrollment penalties.',
    responses: [
      {
        text: '"That\'s great — staying healthy is the goal. Here\'s the thing worth knowing: if you go without Part D coverage for an extended period and need it later, Medicare adds a lifelong late enrollment penalty to your premium. Even a low-cost plan protects you from that — and most Advantage plans include Part D at no extra cost. It\'s less about what you need today and more about making sure you\'re protected long-term."',
      },
    ],
    pillar: 'The Shift — future cost of inaction vs. zero cost of protection now',
  },

  {
    id: 'healthy-dont-need',
    section: 'Benefit & Plan Comparison',
    clientPhrase: '"I\'m healthy — I don\'t need this."',
    signal: 'red',
    underneath: 'Low perceived need — but benefits are funded regardless of health status.',
    responses: [
      {
        text: '"I love hearing that — and the goal is to keep it that way. Here\'s what I want to make sure: even if you never need to use the medical side of this plan, there are benefits on it — grocery card, dental, OTC, giveback — that are funded and available to you regardless of your health. That money doesn\'t know whether you\'re healthy or not. It either goes to you every month or it stays unclaimed."',
      },
    ],
    pillar: 'The Shift — benefits are funded regardless of health usage',
  },

  // ─── SECTION 8: TRUST & CREDIBILITY ──────────────────────────────────────

  {
    id: 'is-this-scam',
    section: 'Trust & Credibility',
    clientPhrase: '"How do I know you\'re real? Is this a scam?" / "The government doesn\'t give out free money."',
    signal: 'red',
    underneath: 'Real skepticism, probably justified. Proving legitimacy through action is more powerful than words. A scammer would say "I promise this is real" — you\'re going to show, not tell.',
    doNotSay: [
      'Getting defensive or listing credentials before addressing the emotional concern',
      '"I promise you this is real." — a scammer would say the exact same thing',
    ],
    responses: [
      {
        label: 'Standard response',
        text: '"I completely understand — and I\'d be careful too. Here\'s what I\'d like to do: let me show you what I can already see in the system before you give me anything. If I can pull up your current plan details, you\'ll know I\'m working in the right place. Everything I do follows Medicare guidelines. Does that seem fair?"',
      },
      {
        label: 'For "The government doesn\'t give out free money"',
        text: '"You\'re right to be skeptical — and here\'s the accurate version: the government funds Medicare Advantage plans at a higher rate for certain zip codes and income levels. Those plans are required to use that funding for specific benefits — dental, grocery, cash back on Part B. It\'s not free money from nowhere. It\'s federally allocated funding that gets distributed through licensed plans. My job is to find which plan in your area is distributing the most of it."',
      },
    ],
    pillar: 'Persuasion — demonstrate access and legitimacy before requesting anything',
  },

  {
    id: 'talked-to-someone-today',
    section: 'Trust & Credibility',
    clientPhrase: '"I already talked to someone about this today." / "You\'re the third person to call me about this."',
    signal: 'red',
    underneath: 'Fatigue mixed with potential trust erosion. If true, another agent may have already attempted an enrollment — or failed. Your job is to separate yourself from whoever came before without attacking them.',
    doNotSay: [
      '"Well, did they enroll you?" — confrontational; puts them on the spot',
      '"That call may not have been legitimate." — damages your own credibility',
      'Continuing to pitch as if they didn\'t say it',
    ],
    responses: [
      {
        text: '"I appreciate you telling me that — and I\'m not going to repeat what they did. Can I ask: did that call get you the benefit you were looking for, or did something stop it from going through? Because if it\'s done, I\'ll confirm it in the system and let you go. If it\'s not, I\'d rather find that out now than have you wait until next month and the benefit doesn\'t show up."',
      },
      {
        label: 'If they say it\'s done',
        text: '"Let me verify it\'s active right now. If it\'s confirmed, you\'re set and I won\'t take another minute of your time."',
      },
    ],
    pillar: 'Persuasion — become the verification checkpoint, not another sales call',
  },

  {
    id: 'family-says-scam',
    section: 'Trust & Credibility',
    clientPhrase: '"My son / daughter / family told me this is a scam."',
    signal: 'red',
    underneath: 'Third-party-reinforced trust barrier — the hardest version of the scam objection. The client is caught between wanting the benefit and not wanting to disobey someone they trust. Never argue with the family member.',
    doNotSay: [
      '"Your son/daughter is wrong." — direct attack on a trusted person; call ends immediately',
      '"A lot of people think that, but..." — dismisses the concern without addressing it',
      'Providing credentials verbally only — a scammer can claim to be licensed just as easily',
    ],
    responses: [
      {
        text: '"I\'m really glad your [family member] is looking out for you — that\'s exactly what they should be doing. And honestly, they\'re right that there are bad actors out there. Here\'s what I want to do: I\'m not going to ask you for anything right now. Let me pull up what\'s already in the system — your current plan — and show you what I can see before you give me a single piece of information. And if you want to call your [family member] right now and have them on the line, I\'m completely fine with that."',
      },
      {
        label: 'If they want to bring family in',
        text: '"Absolutely — let\'s do it. I\'d rather walk both of you through the numbers at the same time so they hear it directly from me."',
      },
    ],
    pillar: 'Reframing — honor the family member\'s instinct, invite the third party onto the call',
  },

  {
    id: 'stop-calling',
    section: 'Trust & Credibility',
    clientPhrase: '"You people keep calling me. Stop it." / "I\'m tired of these calls."',
    signal: 'red',
    underneath: 'Real frustration — and it\'s justified. Medicare seniors are among the most targeted populations for phone marketing. They are not necessarily resistant to the benefit; they are resistant to the experience. Separate yourself from that experience immediately or you lose the call.',
    doNotSay: [
      '"I understand — but let me just tell you about..." — immediately confirms you are exactly what they\'re tired of',
      'Defending the volume of calls or explaining why they receive them',
      'Apologizing for the industry and then pitching anyway',
    ],
    responses: [
      {
        text: '"I hear you — and I\'m not going to pretend that\'s not frustrating. You didn\'t call in to be pitched at. You called because you saw something about a benefit and you wanted a real answer. I\'m going to give you that and nothing else. Tell me what you were looking for when you called — and I\'ll either confirm you can get it or tell you straight that you can\'t. That\'s the whole call."',
      },
    ],
    pillar: 'Reframing — separate yourself from the experience they\'re tired of; be the honest answer they called for',
  },

  {
    id: 'no-personal-info',
    section: 'Trust & Credibility',
    clientPhrase: '"I don\'t give out personal information over the phone."',
    signal: 'red',
    underneath: 'Trust barrier — they need proof of legitimacy before giving access.',
    responses: [
      {
        text: '"That\'s a completely reasonable concern — and here\'s how I want to show you I\'m legitimate: I can verify information by looking up what\'s already in the system before you give me anything additional. Let me pull up your current plan details right now. If I can show you what you already have, you\'ll know I\'m in the right system. Is that fair?"',
      },
    ],
    pillar: 'Persuasion — prove legitimacy through action, not words',
  },

  {
    id: 'no-phone-decisions',
    section: 'Trust & Credibility',
    clientPhrase: '"I don\'t like to make decisions over the phone."',
    signal: 'red',
    underneath: 'Almost always about trust, not channel.',
    doNotSay: [
      '"I\'m not going to push you to decide today if you\'re not ready." — permission-seeking; kills the same-call close',
    ],
    responses: [
      {
        text: '"I completely understand — and I\'m going to show you exactly why you can trust this right now. I\'m going to verify your doctors in my system, show you the real numbers for your area, and walk you through what changes and what stays the same. At the end of that, you\'ll know whether I\'m legitimate because I\'ll have shown you — not just told you."',
      },
    ],
    pillar: 'Persuasion — prove legitimacy through action; maintain the same-call close as the goal',
  },

  // ─── SECTION 9: FEAR OF LOSING EXISTING BENEFITS ─────────────────────────

  {
    id: 'need-doctor-covered',
    section: 'Fear of Losing Existing Benefits',
    clientPhrase: '"I need to make sure my doctor is covered."',
    signal: 'green',
    underneath: 'This is not resistance. This is the lead. Confirm the doctor and the rest of the sale follows.',
    doNotSay: [
      '"They should be covered." — never guess',
      '"Most doctors take most plans." — no authority',
    ],
    responses: [
      {
        text: '"That\'s the first thing I\'m going to verify — give me Dr. [name] and I\'ll pull up their network status right now while we\'re on the phone. If they\'re covered, we keep going. If they\'re not, I check what other plans in your area do cover them."',
      },
    ],
    pillar: 'Persuasion — system access is the authority; once doctor is confirmed, execute The Math Breakdown',
  },

  {
    id: 'va-coverage',
    section: 'Fear of Losing Existing Benefits',
    clientPhrase: '"I don\'t want to mess up my VA coverage."',
    signal: 'red',
    underneath: 'Protective of an earned benefit. VA and Medicare are completely separate — switching Medicare does not touch VA benefits.',
    doNotSay: [
      'Discussing PCP selection requirements before addressing the VA displacement fear',
      'Any language that implies choosing between VA and Medicare',
    ],
    responses: [
      {
        text: '"Your VA coverage is yours — and it\'s not going anywhere. These are two completely separate programs. Your VA covers everything at the VA. This plan covers everything outside the VA — and gives you $[benefit amount] every month for groceries and other expenses. You\'re not choosing one over the other. You\'re adding to what you already have."',
      },
    ],
    pillar: 'The Shift — VA and Medicare are additive, not competing',
  },

  {
    id: 'coverage-gap-fear',
    section: 'Fear of Losing Existing Benefits',
    clientPhrase: '"Is this going to affect my current coverage? Will there be a gap?"',
    signal: 'green',
    underneath: 'A question, not resistance. Answer directly and move.',
    responses: [
      {
        text: '"No — your current coverage stays active until the new plan\'s effective date. There is no gap. You\'re protected the entire time."',
      },
    ],
    pillar: 'Persuasion — answer directly, then pivot to the enrollment',
  },

  // ─── SECTION 10: FINANCIAL ────────────────────────────────────────────────

  {
    id: 'difference-not-significant',
    section: 'Financial',
    clientPhrase: '"The difference isn\'t significant enough to bother switching."',
    signal: 'red',
    underneath: 'The client is comparing the monthly number against the effort of switching. Monthly numbers feel small. Annual numbers land.',
    doNotSay: [
      '"So that\'s not enough for you, the $40 extra?" — hands the client permission to confirm the benefit is too small. They will confirm it. The sale ends.',
    ],
    responses: [
      {
        text: '"I hear you — and let me show you what that actually represents. $[monthly] × 12 months = $[annual]. You mentioned you\'re paying for [specific expense from discovery]. That\'s $[annual] that could go toward that instead of sitting unclaimed. The question isn\'t whether $[monthly] is significant. The question is: why would you keep giving $[annual] back to your insurance company every year for doing nothing?"',
      },
    ],
    pillar: 'The Shift — annualize the number; connect it to the client\'s own words from discovery',
  },

  {
    id: 'already-free',
    section: 'Financial',
    clientPhrase: '"My current plan is free. Why would I switch?"',
    signal: 'red',
    underneath: '"Free" means $0 premium — it says nothing about the value of what\'s in the plan. The client is not accounting for unclaimed benefits.',
    doNotSay: [
      '"Well this plan is also free." — true but misses the point entirely',
    ],
    responses: [
      {
        text: '"Your current plan being free doesn\'t mean it\'s giving you everything you\'re entitled to. Free just means $0 premium — it says nothing about what\'s in the plan. What I\'m looking at right now is that your current plan has $0 in [grocery/OTC/giveback benefit] and the plan I\'m showing you has $[amount]. Both are $0 premium. The only difference is $[annualized] a year that\'s either going to you or sitting unclaimed."',
      },
    ],
    pillar: 'The Shift — reframe "free" as a premium description, not a value description',
  },

  {
    id: 'cant-afford-copays',
    section: 'Financial',
    clientPhrase: '"I can\'t afford the copays on a new plan." / "I\'m on a fixed income."',
    signal: 'red',
    underneath: 'This client is protecting a fragile budget. They are not resisting the plan — they are scared of an unexpected bill. This is solvable with the right comparison.',
    doNotSay: [
      'Dismissing the concern or pivoting away before addressing it directly',
    ],
    responses: [
      {
        text: '"I hear you — and that\'s exactly what I want to protect you from. Let me show you the comparison side by side. Current plan copay vs. this plan\'s copay. Current monthly benefit vs. this plan\'s benefit. Even if you used it every single month, you\'d still come out ahead because the [benefit] offsets the difference. Your fixed income is actually better protected on this plan than it is on your current one."',
      },
    ],
    pillar: 'The Shift — show the full cost picture; net benefit offsets copay fear',
  },

  // ─── SECTION 11: FAMILY & THIRD PARTY ────────────────────────────────────

  {
    id: 'talk-to-family',
    section: 'Family & Third Party',
    clientPhrase: '"I need to talk to my son / daughter / husband first."',
    signal: 'green',
    underneath: 'They\'re interested. They have deferred the final say. The conversation without the agent is where the sale dies.',
    responses: [
      {
        label: 'Get the third party on now',
        text: '"I completely understand — and I actually think that\'s the right call. Is [name] available right now? It\'s much easier than playing phone tag. That way they can hear everything directly from me."',
      },
      {
        label: 'Arm the caller',
        text: '"Absolutely. When you talk to [name], here\'s what I want you to be able to tell them: \'I verified my doctor is in-network. My medications are covered. The plan pays $[amount] a year more than what I have now.\' Write that down — those are the three things they\'ll want to know."',
      },
    ],
    pillar: 'Persuasion — get the third party on now or arm the caller for the conversation without you',
  },

  {
    id: 'kids-set-it-up',
    section: 'Family & Third Party',
    clientPhrase: '"My daughter / son handles my insurance. They told me not to touch it."',
    signal: 'red',
    underneath: 'The client doesn\'t want to make a unilateral decision and risk family conflict. The family member is a gatekeeper — turn them into an ally.',
    doNotSay: [
      'Continuing to sell to the client alone when a family member holds the real decision',
      '"You can always talk to them after."',
    ],
    responses: [
      {
        text: '"I love that you want to include your family — that\'s a great sign. Here\'s what I\'d suggest: can we get [son/daughter] on the phone right now? I\'d rather explain this to both of you at the same time so they hear the numbers directly from me. A lot of times, family members are the ones who say \'why didn\'t you do this sooner?\' once they see the math. Is [person] available?"',
      },
    ],
    pillar: 'Persuasion — turn the potential veto into an ally; bring them in now',
  },

  {
    id: 'family-will-object',
    section: 'Family & Third Party',
    clientPhrase: '"My family is going to say I shouldn\'t have done this."',
    signal: 'red',
    underneath: 'They said yes but don\'t have the language to defend it. This is Hollow Yes territory. The Close Confirmation is the armor.',
    responses: [
      {
        text: '"If your family asks why you switched, you can tell them exactly this: \'A licensed agent ran the side-by-side with me. My doctor is confirmed in-network. My medications are covered. I was leaving $[amount] a year on the table — and now I\'m not.\' That\'s the answer."',
      },
    ],
    pillar: 'Persuasion — the Confidence Statement is the post-enrollment armor',
  },

  // ─── SECTION 12: RESISTANCE AT CLOSE ─────────────────────────────────────

  {
    id: 'not-enrolling-today',
    section: 'Resistance at Close',
    clientPhrase: '"I\'m not enrolling today." / "I don\'t enroll on first contact."',
    signal: 'red',
    underneath: 'Often a practiced defense. It is not necessarily a real no.',
    doNotSay: [
      'Accepting it and scheduling a callback',
      'Pushing harder with more benefits information',
    ],
    responses: [
      {
        text: '"I completely respect that. Before you go — on a scale of 1 to 10, how confident are you that your current plan is the best one available in your area right now? If you\'re a 10, we\'re done. But if there\'s any doubt at all, what specifically would you need to see to feel confident you\'re on the right plan?"',
      },
    ],
    pillar: 'Persuasion — the 1-to-10 scale creates reasonable doubt without confrontation',
  },

  {
    id: 'too-good-to-be-true',
    section: 'Resistance at Close',
    clientPhrase: '"This sounds too good to be true." / "There\'s got to be a catch."',
    signal: 'red',
    underneath: 'Skepticism. The reason it sounds that way is because most people have been leaving these benefits unclaimed for years without knowing they existed.',
    responses: [
      {
        text: '"That reaction makes complete sense — and I\'d feel the same way. Here\'s why it sounds that way: most people in your situation have been leaving these benefits unclaimed for years without knowing they existed. This isn\'t new money coming from somewhere mysterious. It\'s money that\'s already been allocated by the federal government and is sitting in a plan waiting to be claimed. The reason you haven\'t heard about it is because nobody told you. That\'s what I\'m here to fix."',
      },
    ],
    pillar: 'Reframing — reframe "too good to be true" as "nobody told you it was yours"',
  },

  {
    id: 'been-burned',
    section: 'Resistance at Close',
    clientPhrase: '"I\'ve been burned before — I don\'t trust this."',
    signal: 'red',
    underneath: 'A real experience where a phone enrollment went badly. Trust is the only issue here. The product is not the problem.',
    doNotSay: [
      'Defending the industry or the process',
      'Minimizing what happened to them',
    ],
    responses: [
      {
        text: '"I hear you — and I\'m not going to tell you that didn\'t happen. What I want to show you is that what I\'m doing right now is different. I\'m not asking you to take anything on faith. I\'m going to show you Dr. [name] is covered in the system before you give me a single piece of information. I\'m going to give you the plan ID so you can verify it on Medicare.gov yourself after this call. And I\'m going to give you my direct number — so if anything isn\'t right, you have someone to call."',
      },
    ],
    pillar: 'Persuasion — demonstrate legitimacy through specific, verifiable actions before asking for anything',
  },

  {
    id: 'call-you-back',
    section: 'Resistance at Close',
    clientPhrase: '"I need to call you back." / "Let me call my doctor first."',
    signal: 'red',
    underneath: 'Exit mechanism — they want off the call with a reason to leave.',
    responses: [
      {
        text: '"I understand — and here\'s what I\'d like to do before you go: let me check Dr. [name] right now while we\'re on the phone. If they\'re covered, that\'s one call you don\'t have to make. If they\'re not, at least you\'ll know before you call them."',
      },
    ],
    pillar: 'Persuasion — eliminate the reason to call back by doing the work now',
  },

  {
    id: 'hard-no',
    section: 'Resistance at Close',
    clientPhrase: 'Hard No — absolute final refusal',
    signal: 'red',
    underneath: 'True end. Do not argue. Do not push. Exit cleanly. The number they have is future pipeline.',
    responses: [
      {
        text: '"I completely respect that — and before we hang up, I want to make sure you know: if your situation changes or your plan changes its benefits next year, you can always call back. My number is [number]. You deserve to have the right plan."',
      },
    ],
    pillar: 'Refocusing — graceful exit preserves the relationship',
  },

]
