export type Objection = {
  id: string
  section: string
  clientPhrase: string
  signal: 'red' | 'yellow' | 'green'
  underneath: string
  doNotSay?: string[]
  responses: Array<{ label?: string; text: string; position?: 'early' | 'late' }>
  pillar: string
  tags?: string[]
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
    underneath: 'They have connected their current plan to their health and safety. "Happy" is based on no comparison. The absence of complaints is not the same as receiving full value. Early in the call this is a reframe — late in the call, when the comparison is already on the table, this becomes a cost-of-inaction close.',
    tags: ['happy', 'works fine', 'satisfied', 'plan works', 'happy with it', 'good plan', 'no complaints', 'like my plan'],
    doNotSay: [
      'Explaining why the new plan is better before naming what they\'re feeling — logic against fear does not work',
      '"But your plan is costing you money." — sounds like an attack; they defend it',
      '"You\'re missing out on a lot of benefits." — they hear criticism, not opportunity',
    ],
    responses: [
      {
        position: 'early',
        text: '"I hear you — and I\'m glad it\'s been working. I just want to make sure what you have is still the best version available to you this year, because plans change every January. Let me take a quick look and I\'ll tell you straight — if you\'re already on the right plan, I\'ll be the first to say so."',
      },
      {
        position: 'late',
        text: '"I hear you — and you\'ve now seen the comparison. Staying where you are is your call, but it\'s not a neutral one anymore — it\'s a decision to leave [annualized difference] on the table this year. I just want to make sure that\'s a choice you\'re making on purpose."',
      },
    ],
    pillar: 'Reframing — don\'t challenge the plan, make inaction visible; early is about looking, late is about the cost of staying',
  },

  {
    id: 'dont-want-change',
    section: 'Fear of Change & Switching',
    clientPhrase: '"I don\'t want to change."',
    signal: 'red',
    underneath: '"I don\'t want to" is not a decision — it\'s discomfort with motion. The fear is about losing something safe, not about the plan itself. Early: make looking feel safe. Late: make staying feel expensive.',
    tags: ['don\'t want to change', 'don\'t want to switch', 'not changing', 'leave it alone', 'don\'t mess with it'],
    doNotSay: [
      'Presenting benefits or plan details before naming the fear',
      '"Change is sometimes a good thing!" — invalidates their experience',
    ],
    responses: [
      {
        position: 'early',
        text: '"I hear you — you\'ve had a plan that\'s worked and you don\'t want to risk losing what you have. What I\'m showing you doesn\'t take that away. It adds to it."',
      },
      {
        position: 'late',
        text: '"I hear you — and you\'ve already seen what\'s available. Staying where you are isn\'t neutral anymore — it\'s a decision that costs you [annualized difference] this year. That\'s the only thing I want to make sure you\'re seeing clearly before you decide."',
      },
    ],
    pillar: 'Reframing — early: adding not replacing; late: inaction now has a specific cost',
  },

  {
    id: 'devil-you-know',
    section: 'Fear of Change & Switching',
    clientPhrase: '"I\'d rather stick with what I\'ve got." / "Better the devil you know."',
    signal: 'red',
    underneath: 'Past experience — theirs or someone they know — where a change went wrong. The emotion is real and must be named before anything else can land. Early: looking is safe. Late: the devil you know is costing you a specific amount.',
    tags: ['stick with', 'devil you know', 'rather stay', 'know what I have', 'comfortable with it', 'rather keep'],
    doNotSay: [
      'Explaining Medicare mechanics — logic against fear almost always fails',
      '"There\'s nothing to worry about." — dismisses the concern without addressing it',
    ],
    responses: [
      {
        position: 'early',
        text: '"I get that — you\'ve got something that\'s been working and you don\'t want to take a chance. All I want to do is take a look and make sure what you\'ve got is still the best fit for you right now. If it is, nothing changes."',
      },
      {
        position: 'late',
        text: '"I hear you — and you\'ve now seen what\'s on the other side. The devil you know is costing you [annualized difference] this year compared to what\'s available. That\'s the one thing I want to make sure you\'re weighing before you decide."',
      },
    ],
    pillar: 'Reframing — early: looking is safe; late: the familiar option now has a visible price tag',
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
        label: 'Standard',
        text: '"Yeah, absolutely — I can definitely help you with that. It goes through the Medicare system, so I\'m going to need to pull a few things together to find the right plan for you. But once I have that, I\'m going to do everything I can to make sure you\'re getting every benefit that\'s available to you. As long as you work with me, I\'ll take care of the rest."',
      },
      {
        label: 'If they push back — "I don\'t want to switch anything"',
        text: '"I hear you — I\'m not trying to change something that\'s working. What I\'m showing you doesn\'t take that away. It adds to it. Let me just check what\'s available for your zip code."',
      },
    ],
    pillar: 'Reframing — you\'re the step that gets them the card; create a handshake first',
  },

  {
    id: 'commercial-amount',
    section: 'Commercial & Benefit',
    clientPhrase: '"The commercial said I could get $6,000 / $900 / $1,200. Yours is less."',
    signal: 'red',
    underneath: 'The commercial set an expectation. The reality feels like a downgrade. They need someone to validate the frustration — then show them the real total picture fast, because they\'re motivated and ready to act.',
    tags: ['commercial said', 'ad said', 'tv said', 'promised more', 'less than advertised', 'said I could get', 'not what I saw', 'different from commercial'],
    doNotSay: [
      '"I don\'t control the commercial." — abandons all authority',
      '"That\'s not how it works." — shames them for believing it',
      'Defending the system — you become part of what betrayed them',
    ],
    responses: [
      {
        label: 'Validate and anchor on real value',
        text: '"You\'re right to be frustrated — those commercials show the national maximum, not what\'s specific to your area. What I\'m looking at for your zip code right now is [amount] — and that\'s real. The commercial showed the ceiling. I\'m showing you your actual number. And we need to get it locked in before [enrollment window closes]."',
      },
      {
        label: 'Pivot to total value',
        text: '"Here\'s what the commercial doesn\'t show: the total. When we add up [grocery / OTC / Part B giveback / dental], the real annual number for your area is [total annualized]. That\'s the actual picture — and it\'s available right now."',
      },
    ],
    pillar: 'Reframing — validate the frustration, anchor on the real verified number, add enrollment window urgency',
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
    underneath: 'This is almost never about needing time. It\'s a polite exit from a call that stopped leading. The client doesn\'t have a compelling reason to decide now — so the agent\'s job is to create one. Early: find the real concern. Late: the cost of waiting is already a specific number; use it.',
    tags: ['think about it', 'need to think', 'call me back', 'let me think', 'not today', 'think it over', 'sleep on it'],
    doNotSay: [
      '"Of course — I\'ll call you back." — the call almost never converts; you are handing them the exit',
      'Accepting it as a real answer without isolating the actual concern',
    ],
    responses: [
      {
        position: 'early',
        label: 'Isolate the concern',
        text: '"Before you go — is there something specific you want to think through? If there\'s a concern, I\'d rather address it right now while I have everything in front of me. What\'s the one thing that\'s holding you back?"',
      },
      {
        position: 'late',
        label: 'Make waiting expensive',
        text: '"You\'ve already seen the full picture — [benefit comparison, annualized amount]. Every month you wait is [monthly amount] that doesn\'t come back. I\'m not asking you to make a permanent decision, I\'m asking you not to leave [annualized amount] on the table. Give me five more minutes."',
      },
    ],
    pillar: 'The Shift — early: find the real objection; late: make inaction have a visible monthly cost',
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
        text: '"I hear you — and honestly, anything I\'d send right now wouldn\'t have your specific numbers on it anyway. What I can show you right now is built around your zip code, your situation, your doctors. That\'s more useful than any brochure. What was the main thing you were hoping to learn from it?"',
      },
    ],
    pillar: 'Refocusing — redirect from the exit back to their actual need',
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
    underneath: 'This client has connected the brand to their health and safety. Logic will not touch this first. Go in through the loyalty, not against it — same carrier upgrades are the easiest close here.',
    tags: ['love', 'love my plan', 'love my carrier', 'great care', 'happy with carrier', 'been good to me', 'trusted', 'loyal'],
    doNotSay: [
      'Presenting a competing carrier\'s plan as the first move',
      'Saying their current plan is "inferior" — the moment you insult a plan, the client defends it',
    ],
    responses: [
      {
        label: 'Same brand upgrade',
        text: '"I\'m glad [carrier] has taken care of you — and my job isn\'t to move you away from them. It\'s to make sure you\'re on the right [carrier] plan for this year, because they have multiple options in your area and some pay significantly more. You could stay with the same company and get [annualized difference] more per year. Let me show you what they have."',
      },
      {
        label: 'Introducing a different carrier',
        text: '"I completely respect that. Before you go — on a scale of 1 to 10, how confident are you that your current [carrier] plan is the strongest one available right now? If you\'re a 10, we\'re done. But if there\'s any doubt, the difference is [annualized amount] a year — and that number doesn\'t care which carrier it comes from."',
      },
    ],
    pillar: 'Reframing — validate the loyalty, anchor on the annualized gap; same-brand upgrade removes the loyalty barrier entirely',
  },

  {
    id: 'bad-carrier-experience',
    section: 'Loyalty',
    clientPhrase: '"I\'ve been with this carrier before and I wasn\'t happy."',
    signal: 'red',
    underneath: 'Real experience that created a real barrier. You cannot argue with lived experience. Early: validate and open the door to looking. Late: the specific numbers already on the table differentiate this from what they had before.',
    tags: ['bad experience', 'wasn\'t happy', 'had them before', 'didn\'t like them', 'problems with', 'issues with', 'used to have'],
    doNotSay: [
      '"I\'m sure things are different now." — dismissive',
      'Moving past the objection with "I understand" and no follow-through',
    ],
    responses: [
      {
        position: 'early',
        text: '"I hear you — and I\'m not going to dismiss what you went through. Before we close the door, can I show you what this year\'s plan looks like? It\'s a different structure, and if it doesn\'t hold up, you say no. But you should see the numbers first."',
      },
      {
        position: 'late',
        text: '"I hear you — and what you went through was real. What\'s also real is that [doctor] is confirmed in-network on this plan and you\'re looking at [annualized amount] more per year than you have now. This isn\'t the same plan you had. Does what I\'ve shown you address what went wrong before?"',
      },
    ],
    pillar: 'Reframing — validate the past, differentiate with specific verified facts; early opens the door, late uses what was already proven',
  },

  {
    id: 'have-agent',
    section: 'Loyalty',
    clientPhrase: '"I have an insurance lady / agent who handles this."',
    signal: 'red',
    underneath: 'Their loyalty is to a person, not a plan. Do not attack that person — you will lose. Work alongside the relationship, not against it.',
    tags: ['agent', 'insurance agent', 'insurance lady', 'my agent', 'person who handles', 'already have someone', 'person I use', 'lady who does it'],
    doNotSay: [
      '"You should go talk to them." — handing the sale directly to a competitor',
      'Criticizing the other agent directly — they will defend the person',
    ],
    responses: [
      {
        label: 'When a specific gap exists',
        text: '"I completely respect that relationship — and I\'m not here to replace anyone. Here\'s what I want you to know: your current plan doesn\'t include [specific gap]. Your agent either didn\'t know this was available or doesn\'t have access to it. I\'m not criticizing them — I just want you to have what you\'re entitled to. Can we fix this today before [enrollment window] closes?"',
      },
      {
        label: 'No specific gap identified yet',
        text: '"Your agent cares about you — and so do I. The difference is I\'m looking at what\'s available right now, and I can see there\'s [annualized amount] a year you\'re not getting. A good agent would want you to have that. Let\'s look at the numbers together."',
      },
    ],
    pillar: 'Reframing — validate the loyalty, identify the gap, add urgency through the enrollment window',
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
        text: '"No problem — let me pull up your zip code and see what\'s available."',
      },
    ],
    pillar: 'Persuasion — green signal; acknowledge and move immediately',
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
    clientPhrase: '"How do I know you\'re not a scam?" / "Is this a legitimate company?"',
    signal: 'red',
    underneath: 'Active skepticism — they\'re deciding right now whether you\'re real. Early: prove legitimacy through action before asking for anything. Late: point to what was already verified on this call as the evidence.',
    tags: ['scam', 'legitimate', 'real', 'fraud', 'how do I know', 'is this real', 'verify', 'prove it', 'too good to be true', 'skeptical'],
    doNotSay: [
      '"I\'m a licensed agent with [company]." — they cannot verify this in the moment',
      '"We\'re a legitimate company." — a scammer would say this',
      '"I\'m not here to scam you." — a scammer would also say this',
    ],
    responses: [
      {
        position: 'early',
        text: '"That\'s the right question to ask — and I want to prove it to you right now. I\'m going to look up what\'s in the Medicare system for your zip code, and when I tell you what I find, you can verify it on Medicare.gov yourself. I\'m not asking you to take my word for it — I\'m asking you to check what I show you."',
      },
      {
        position: 'late',
        text: '"You\'ve already seen what I\'m working with — [verified doctor, specific benefit amount, plan details]. This is a legitimate, government-regulated program and everything I\'ve shown you is verifiable. The question now is whether you want to leave [annualized amount] on the table or get it locked in before [enrollment window closes]."',
      },
      {
        label: 'For "The government says not to give out info"',
        text: '"You\'re right — and those warnings exist because scammers call seniors every day. Here\'s the difference: I\'m not asking for money or a bank account. I\'m looking up Medicare benefits that already exist in your name — the same thing your doctor\'s office does every time you check in for an appointment."',
      },
    ],
    pillar: 'Persuasion — early: demonstrate before asking; late: point to what\'s already been verified on this call',
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
    underneath: 'Real frustration — and it\'s justified. Separate yourself from the experience immediately. They called about a benefit — get back to that. One question reframes the whole call.',
    tags: ['stop calling', 'keep calling', 'tired of calls', 'leave me alone', 'calls all the time', 'sick of this', 'constantly calling', 'harassment'],
    doNotSay: [
      '"I understand — but let me just tell you about..." — immediately confirms you are exactly what they\'re tired of',
      'Defending the volume of calls or explaining why they receive them',
      'Apologizing and then pitching anyway — contradicts itself',
    ],
    responses: [
      {
        text: '"I hear you — and I\'m not here to add to that. You called today because you saw something about a benefit and wanted a real answer. I\'m going to give you exactly that and nothing else. What specifically were you looking for — and I\'ll tell you right now whether it\'s real for your area or not. That\'s the whole call."',
      },
    ],
    pillar: 'Reframing — separate yourself from the experience; pivot immediately to the specific benefit they called about',
  },

  {
    id: 'no-phone-decisions',
    section: 'Trust & Credibility',
    clientPhrase: '"I don\'t like to make decisions over the phone."',
    signal: 'red',
    underneath: 'Almost always about trust, not channel. Early: build trust through action. Late: the numbers are already on the table — this is no longer a phone decision, it\'s a math decision, and the math is already done.',
    tags: ['phone decisions', 'over the phone', 'not on the phone', 'don\'t do this by phone', 'want to see it', 'in person'],
    doNotSay: [
      '"I\'m not going to push you to decide today if you\'re not ready." — permission-seeking; kills the same-call close',
      'Offering to call back — validates the objection and ends the sale',
    ],
    responses: [
      {
        position: 'early',
        text: '"I completely understand — and I\'m going to show you exactly why you can trust this right now. I\'m going to verify your doctors in the system, show you the real numbers for your area, and walk you through what changes and what stays the same. At the end of that, you\'ll know because I\'ve shown you — not just told you."',
      },
      {
        position: 'late',
        text: '"I hear you — and I\'d feel the same way normally. But you\'ve already seen [doctor confirmed, benefit verified, plan details]. This isn\'t a phone decision anymore — it\'s a math decision, and the math is already in front of you. Is there anything specific you\'re still unsure about, or is it more of a general discomfort with the channel?"',
      },
    ],
    pillar: 'Persuasion — early: build trust through action; late: the verification is done, pivot from channel to math',
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
    underneath: 'The monthly number didn\'t land — it almost never does. Annual numbers land. Numbers connected to something the client said land the most. Early: annualize and push for full picture. Late: connect the annual number to what was already said.',
    tags: ['not significant', 'not enough', 'small difference', 'not worth it', 'barely anything', 'too small', 'small amount', 'not worth the hassle'],
    doNotSay: [
      '"So that\'s not enough for you, the $[X] extra?" — hands the client permission to confirm the benefit is too small; they will confirm it',
      'Restating the monthly number — they already dismissed it once',
    ],
    responses: [
      {
        position: 'early',
        text: '"Let me show you the full picture — [monthly benefit] times 12 is [annualized amount], and that\'s before we factor in [dental / OTC / copay savings]. Every month you stay where you are is [monthly amount] that doesn\'t come back. Is that still not worth 10 more minutes?"',
      },
      {
        position: 'late',
        text: '"[Annualized amount] is what we\'re actually talking about — and you mentioned [what they said: groceries, prescriptions, bills, dental]. That\'s exactly what this money is for. The question isn\'t whether [monthly amount] is significant — the question is why you\'d leave [annualized amount] on the table this year."',
      },
    ],
    pillar: 'The Shift — annualize first, humanize with Client Gold second; the monthly number almost never closes alone',
  },

  {
    id: 'already-free',
    section: 'Financial',
    clientPhrase: '"My current plan is free. Why would I switch?"',
    signal: 'red',
    underneath: '"Free" means $0 premium — it says nothing about the value inside the plan. The client is treating no premium as maximum value. The correct reframe: both plans are free. The only difference is [annualized amount] a year going to you or sitting unclaimed.',
    tags: ['free', 'it\'s free', 'plan is free', 'no cost', 'zero premium', 'don\'t pay anything', 'costs nothing'],
    doNotSay: [
      '"Well this plan is also free." — true but completely misses the point',
      'Presenting a plan with a premium to a client who just said they won\'t pay for one',
    ],
    responses: [
      {
        text: '"Free just means $0 premium — it says nothing about what\'s inside the plan. What I\'m looking at right now is that your current plan has $0 in [grocery / OTC / giveback] and the plan I\'m showing you has $[amount]. Both plans are $0 premium. The only difference is [annualized amount] a year that\'s either going into your pocket or sitting unclaimed. And that window closes [date]."',
      },
    ],
    pillar: 'The Shift — reframe free as a premium description, not a value description; both are free, one pays you more',
  },

  {
    id: 'cant-afford-copays',
    section: 'Financial',
    clientPhrase: '"I can\'t afford the copays on a new plan." / "I\'m on a fixed income."',
    signal: 'red',
    underneath: 'This client is protecting a fragile budget. They are not resisting the plan — they are scared of an unexpected bill. The fix is a side-by-side that shows the net position is better, not the same. Their fixed income is the urgency — every month they stay is money they\'re not getting.',
    tags: ['fixed income', 'can\'t afford', 'copays', 'too expensive', 'budget', 'can\'t pay', 'don\'t have the money', 'tight budget', 'social security only'],
    doNotSay: [
      'Dismissing the concern or pivoting away before addressing it directly',
      'Presenting premium costs before showing the net benefit offset',
    ],
    responses: [
      {
        text: '"I hear you — and that\'s exactly what I want to protect. Let me show you the side by side: current plan copay versus this plan\'s copay, current benefit versus this plan\'s benefit. Even if you used it every single month, you come out ahead — because the [benefit amount] offsets the difference. Your fixed income is actually better protected on this plan. And every month you wait is [monthly benefit] that doesn\'t come back."',
      },
    ],
    pillar: 'The Shift — show the net position, not just the copay; fixed income is the urgency, not the barrier',
  },

  // ─── SECTION 11: FAMILY & THIRD PARTY ────────────────────────────────────

  {
    id: 'talk-to-family',
    section: 'Family & Third Party',
    clientPhrase: '"I need to talk to my son / daughter / husband first."',
    signal: 'green',
    underneath: 'They\'re interested. They have deferred the final say. The conversation without the agent is where the sale dies. First move is always to get the third party on the call right now. If that fails, arm the caller with the exact language they need.',
    tags: ['son', 'daughter', 'husband', 'wife', 'spouse', 'family', 'talk to', 'need to talk', 'involve', 'check with', 'run it by', 'ask first'],
    doNotSay: [
      '"Of course — go ahead and talk to them." — the call is over; the third party will almost never say yes',
      'Offering to call back — a callback after a family conversation almost never closes',
    ],
    responses: [
      {
        position: 'early',
        label: 'Get them on now',
        text: '"I completely understand — and is [name] available right now? It\'s much easier for them to hear it directly from me than second-hand. A 10-minute call together is all it takes. Can we do that?"',
      },
      {
        position: 'late',
        label: 'Get them on now with the numbers',
        text: '"Absolutely — and is [name] available right now? I\'d rather walk both of you through what I\'ve found together. You\'ve already seen [doctor confirmed, benefit amount] — they\'ll want to hear this directly."',
      },
      {
        label: 'If they can\'t get on — arm the caller',
        text: '"Understood. Here\'s what to tell them: your doctor is confirmed in-network, medications are covered, and this plan pays [annualized amount] more per year than what you have now. Write those three things down — that\'s everything they\'ll want to know."',
      },
    ],
    pillar: 'Persuasion — first move is always a three-way call right now; if that fails, arm the caller with the three facts',
  },

  {
    id: 'kids-set-it-up',
    section: 'Family & Third Party',
    clientPhrase: '"My daughter / son handles my insurance. They told me not to touch it."',
    signal: 'red',
    underneath: 'The client doesn\'t want to make a unilateral decision and risk family conflict. The family member is a gatekeeper — turn them into an ally.',
    tags: ['son', 'daughter', 'handles', 'told me not to', 'don\'t touch', 'family handles', 'children', 'kids'],
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
    tags: ['family', 'object', 'mad', 'upset', 'disagree', 'shouldn\'t have', 'spouse', 'husband', 'wife'],
    responses: [
      {
        text: '"If your family asks why you switched, you can tell them exactly this: \'A licensed agent ran the side-by-side with me. My doctor is confirmed in-network. My medications are covered. I was leaving $[amount] a year on the table — and now I\'m not.\' That\'s the answer."',
      },
    ],
    pillar: 'Persuasion — the Confidence Statement is the post-enrollment armor',
  },

  {
    id: 'wife-husband-nurse-professional',
    section: 'Family & Third Party',
    clientPhrase: '"My wife is a nurse / My husband handles this / I need my wife to look it over first."',
    signal: 'red',
    underneath: 'The client is deferring to a spouse or partner who has healthcare expertise — or who simply makes these decisions. This is not a stall; it is a real process requirement. The agent\'s job is not to override it — it is to use the expertise as a reason to get that person on the phone right now, not later. A nurse or healthcare professional will understand the value of a better plan immediately. That is an asset. Never treat it as a wall.',
    tags: ['wife', 'husband', 'spouse', 'nurse', 'doctor', 'professional', 'partner', 'look it over', 'involved', 'need to ask', 'check with', 'talk to my wife', 'talk to my husband', 'she handles', 'he handles', 'run it by'],
    doNotSay: [
      '"That\'s fair — let me give you a call back." — this hands the decision to someone who was never on the call and ends the sale',
      '"I don\'t want to be high pressure." — this signals weakness and validates the exit; there is no urgency in a call that apologizes for itself',
      'Accepting the callback as the outcome — a callback is not a close; it is a lead that almost never converts',
    ],
    responses: [
      {
        label: 'Early in call — no numbers established yet',
        text: '"That makes complete sense — and honestly, having a nurse in the family makes this easier, not harder. Is she available right now? I\'d rather walk both of you through this together so she can ask her questions directly and you can make this decision together today."',
      },
      {
        label: 'Late in call — numbers and plan already established',
        text: '"Completely respect that. Here\'s what I want you to tell her: your doctor is confirmed in-network, your current plan has [current benefit], this plan has [new benefit] — that\'s [annualized difference] more per year. A nurse is going to look at those numbers and tell you this is a legitimate upgrade. Can we get her on the phone for five minutes right now so she hears it directly?"',
      },
      {
        label: 'If getting them on the phone now is not possible',
        text: '"I understand. The one thing I want to make sure of is that this enrollment window doesn\'t close before she has a chance to look at it — every month you wait is [monthly benefit] that doesn\'t come back. Write down these three things for her: doctor confirmed, [benefit amount] per year, zero cost to change. That\'s the whole picture."',
      },
    ],
    pillar: 'Persuasion — validate the expertise, use it as a bridge to a three-way call now; urgency is the enrollment window, not pressure',
  },

  // ─── SECTION 12: RESISTANCE AT CLOSE ─────────────────────────────────────

  {
    id: 'not-enrolling-today',
    section: 'Resistance at Close',
    clientPhrase: '"I\'m not enrolling today." / "I don\'t enroll on first contact."',
    signal: 'red',
    underneath: 'Often a practiced defense, not a real no. The agent\'s job is to make waiting feel expensive in specific dollar terms, then isolate whether there\'s a real concern underneath.',
    tags: ['not enrolling today', 'not today', 'first contact', 'don\'t decide same day', 'need more time', 'not ready', 'not doing it today'],
    doNotSay: [
      'Accepting it and scheduling a callback — the lead almost never converts',
      'Pushing harder with more benefits information — that\'s not the issue',
    ],
    responses: [
      {
        text: '"Before you go — every month you wait on this is [monthly benefit] that doesn\'t come back. That\'s [annualized amount] this year. On a scale of 1 to 10, how confident are you that your current plan is the best one available right now? If you\'re a 10, we\'re done. But if there\'s any doubt, tell me what specifically you\'d need to see — because I probably have it right here."',
      },
    ],
    pillar: 'The Shift — make waiting cost a specific monthly number; use the 1-to-10 to find the real objection',
  },

  {
    id: 'too-good-to-be-true',
    section: 'Resistance at Close',
    clientPhrase: '"This sounds too good to be true." / "There\'s got to be a catch."',
    signal: 'red',
    underneath: 'Skepticism. Early: reframe the skepticism — nobody told them it was theirs. Late: the verification that already happened on this call is the proof it\'s real.',
    tags: ['too good to be true', 'catch', 'sounds suspicious', 'really', 'hard to believe', 'doesn\'t make sense', 'what\'s the catch', 'seems too easy'],
    responses: [
      {
        position: 'early',
        text: '"That reaction makes complete sense — and I\'d feel the same way. Here\'s why it sounds that way: most people have been leaving these benefits unclaimed for years because nobody walked them through it. This isn\'t new money from somewhere mysterious — it\'s a legitimate, government-funded benefit that\'s been allocated and is sitting in a plan waiting to be claimed. Let me show you what specifically is available in your area."',
      },
      {
        position: 'late',
        text: '"I understand the instinct — and here\'s what makes this different from that feeling: you\'ve already seen [doctor confirmed, specific benefit amount, plan verified]. This is a legitimate program, everything I\'ve shown you is on a recorded line, and the numbers are specific to your zip code. It\'s real — and the only question is whether you want it working for you starting [effective date]."',
      },
    ],
    pillar: 'Reframing — early: nobody told you it was yours; late: the verification that happened on this call is the proof',
  },

  {
    id: 'been-burned',
    section: 'Resistance at Close',
    clientPhrase: '"I\'ve been burned before — I don\'t trust this."',
    signal: 'red',
    underneath: 'A real experience where a phone enrollment went badly. Trust is the only issue here. The product is not the problem. Early: prove through action before asking for anything. Late: everything already shown is the proof.',
    tags: ['burned before', 'burned', 'bad experience', 'happened before', 'last time', 'don\'t trust', 'been hurt', 'got scammed before'],
    doNotSay: [
      'Defending the industry or the process',
      'Minimizing what happened to them',
    ],
    responses: [
      {
        position: 'early',
        text: '"I hear you — and I\'m not going to tell you that didn\'t happen. What I want to show you is that what I\'m doing right now is different. I\'m going to verify Dr. [name] is covered in the system right now, before you give me anything else. You\'ll see it in real time — that\'s the difference."',
      },
      {
        position: 'late',
        text: '"I hear you — and what happened before was real. What\'s also real is that [doctor] is confirmed, [benefit] is verified, and everything I\'ve shown you is on a recorded, legitimate, government-regulated line. You\'ve already seen the proof. The only thing left is deciding whether [annualized amount] is worth making the move."',
      },
    ],
    pillar: 'Persuasion — early: demonstrate before asking; late: the call itself is the evidence',
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
    tags: ['no', 'absolutely not', 'not interested', 'stop calling', 'final no', 'don\'t want it'],
    responses: [
      {
        text: '"I completely respect that — and before we hang up, I want to make sure you know: if your situation changes or your plan changes its benefits next year, you can always call back. My number is [number]. You deserve to have the right plan."',
      },
    ],
    pillar: 'Refocusing — graceful exit preserves the relationship',
  },

  // ─── NEW ENTRIES: CALL-POSITION AWARE ────────────────────────────────────

  {
    id: 'unauthorized-switch',
    section: 'Trust & Credibility',
    clientPhrase: '"People have been changing my insurance without my permission." / "This happened to me before."',
    signal: 'red',
    underneath: 'This is different from a general scam fear — someone actually transferred this client without consent. The wound is specific and real. Explaining that the practice is illegal does nothing. The agent\'s job is to establish that this call is verifiably different: recorded, regulated, nothing moves without their verbal yes. Then use that betrayal as the reason to act now — they deserve a plan that\'s actually theirs.',
    tags: ['transferred', 'switched without permission', 'changed without asking', 'didn\'t authorize', 'happened before', 'without my consent', 'they changed it', 'unauthorized'],
    doNotSay: [
      '"That\'s illegal for an agent to do." — correct but irrelevant; logic against trauma never lands',
      'Moving past it and presenting a plan before acknowledging what happened',
    ],
    responses: [
      {
        position: 'early',
        text: '"What happened to you was wrong — and that\'s exactly why this is a legitimate, government-regulated program on a recorded line where nothing changes without your explicit verbal approval. Let me show you what\'s available so you know exactly what you\'re entitled to."',
      },
      {
        position: 'late',
        text: '"What happened to you was wrong — and everything I\'ve shown you today, [doctor confirmed, benefit amount, plan details], is verifiable and nothing moves forward without you saying yes. Don\'t let what someone else did be the reason you leave [annualized benefit] on the table this year."',
      },
    ],
    pillar: 'Reframing — name the violation, establish the recorded line as the safeguard, use the past betrayal as urgency',
  },

  {
    id: 'agents-all-lie',
    section: 'Trust & Credibility',
    clientPhrase: '"Everybody says that." / "Agents lie." / "They all say the same thing."',
    signal: 'red',
    underneath: 'Industry-wide cynicism — not about one bad experience, but wholesale distrust of the category. The only move is to stop asking them to trust you and start showing them something verifiable. The word \'legitimate\' is the anchor — government-regulated, recorded line, verified for their specific zip code. These are facts, not promises.',
    tags: ['everybody says', 'agents lie', 'all the same', 'they all say', 'don\'t trust', 'heard it before', 'promises', 'misleading', 'lies', 'prove it'],
    doNotSay: [
      'Defending yourself or explaining your credentials — sounds exactly like every other agent',
      '"I\'m different" without showing how — an empty claim',
    ],
    responses: [
      {
        position: 'early',
        text: '"I hear you — and the way I prove I\'m different is I don\'t make promises, I show you verified numbers for your specific zip code on a legitimate, government-regulated program on a recorded line. Give me 60 seconds to show you exactly what\'s available for your area."',
      },
      {
        position: 'late',
        text: '"I hear you — and the numbers I just showed you are verified, specific to your situation, and this is a legitimate program. You\'ve already seen [what was found]. The only thing left is making sure you actually get what you\'re entitled to before this window closes."',
      },
    ],
    pillar: 'Reframing — stop asking for trust, start showing verifiable facts; legitimate and recorded are the two anchors',
  },

  {
    id: 'just-signed-up',
    section: 'Fear of Change & Switching',
    clientPhrase: '"I literally just signed up." / "I just changed plans this month."',
    signal: 'red',
    underneath: 'The client feels settled — they just did the work of enrolling and do not want to revisit it. This is not the same as long-term loyalty. The correct move is not to challenge the decision they made, but to confirm whether the plan they just got actually includes the benefit they called about. If it does, great. If it doesn\'t, there may be a window right now to correct it.',
    tags: ['just signed up', 'just changed', 'just enrolled', 'recently switched', 'new plan', 'just joined', 'just did it', 'already enrolled'],
    responses: [
      {
        text: '"That\'s good — it means you\'re active in the system right now. The only thing I want to confirm is that the plan you just got includes the [specific benefit] you called about, because not every plan at that carrier offers it — and if yours doesn\'t, we may have a window right now to get you the version that does."',
      },
    ],
    pillar: 'Refocusing — confirm what they got, not challenge what they did; urgency is the active window',
  },

  {
    id: 'not-worth-the-change',
    section: 'Financial',
    clientPhrase: '"That\'s not worth it to me." / "It\'s not enough to bother changing for." / "I don\'t really see the value."',
    signal: 'red',
    underneath: 'The monthly number didn\'t land. It almost never does. The Math Breakdown is missing Step 2 (annualize) and Step 3 (humanize). A client who says the value isn\'t there has not seen the full picture — either the annual number was never stated, or it was never connected to something real in their life. The fix is always to show them the complete total and tie it to what they already said.',
    tags: ['not worth it', 'not enough', 'too small', 'doesn\'t matter', 'not a big deal', 'makes no difference', 'not enough to change', 'small amount', 'barely anything'],
    doNotSay: [
      'Restating the monthly number — they already heard it and dismissed it',
      'Adding more plan features — they\'re not asking for more features, they\'re questioning value',
    ],
    responses: [
      {
        position: 'early',
        text: '"Let me show you the full picture before you decide — [monthly benefit] over the course of a year is [annualized amount], and that\'s before we factor in [dental / OTC / copay savings]. Every month you stay on your current plan is [monthly amount] that doesn\'t come back."',
      },
      {
        position: 'late',
        label: 'Standard late — use what you learned',
        text: '"[Annualized amount] is what we\'re talking about — and you mentioned [what they said: groceries / prescription / dental / bills]. That\'s exactly what this money is for. Staying on your current plan means that problem doesn\'t get solved this year."',
      },
      {
        position: 'late',
        label: 'If they say the total is still too small',
        text: '"Let\'s add everything up — [benefit 1] plus [benefit 2] plus [benefit 3] comes out to [total annualized]. That\'s the real number. Is that still not enough to make this worth it for you?"',
      },
    ],
    pillar: 'The Shift — annualize first, humanize second, show the full total if needed; the monthly number almost never closes on its own',
  },

  {
    id: 'doesnt-feel-right',
    section: 'Trust & Credibility',
    clientPhrase: '"Something just doesn\'t feel right." / "I\'m not sure I trust this." / "I\'m a little uneasy."',
    signal: 'red',
    underneath: 'Vague distrust with no specific target. Not a scam accusation, not a past trauma — just discomfort. The agent who asks \'what specifically doesn\'t feel right?\' often opens a door to a solvable concern. The agent who tries to convince them often entrenches it. The move is to anchor the legitimacy claim in something verifiable and specific, then name the cost of staying put.',
    tags: ['feel right', 'doesn\'t feel right', 'gut feeling', 'don\'t trust', 'uneasy', 'nervous', 'suspicious', 'not sure', 'not comfortable', 'seems off'],
    doNotSay: [
      '"I promise you this is legitimate." — a promise is asking for trust they don\'t have yet',
      '"You can decide from there." — an exit ramp; removes urgency entirely',
    ],
    responses: [
      {
        position: 'early',
        text: '"Fair — and the best way I can address that is to show you exactly what I\'m looking at right now: a legitimate, government-regulated benefit verified for your specific zip code on a recorded line. Let me show you the actual number for your area and you can judge it from what you see."',
      },
      {
        position: 'late',
        text: '"I hear you — and you\'ve already seen the verified numbers: [doctor confirmed, benefit amount, plan details]. This is a legitimate program and everything I\'ve shown you is real. The question is whether you want to leave [annualized amount] on the table this year or get it working for you starting [effective date]."',
      },
    ],
    pillar: 'Reframing — anchor legitimacy in specifics already verified; make staying put the thing that needs explaining, not moving forward',
  },

  {
    id: 'scared-they-will-take-more',
    section: 'Trust & Credibility',
    clientPhrase: '"Somebody took money from me." / "I\'m scared they\'re going to take more." / "I had money taken out."',
    signal: 'red',
    underneath: 'Financial loss trauma tied specifically to Medicare or Social Security. This client had actual money removed — by a bad agent, a scammer, or a billing error. Every new plan looks like another threat. The direction of money needs to be made explicit: this plan adds, it does not take. That reframe — money toward them, not away — is the only thing that addresses the fear directly.',
    tags: ['took money', 'stole', 'scared', 'afraid', 'lost money', 'they took', 'overcharged', 'financial loss', 'deducted', 'missing money', 'took from me', 'they took it'],
    doNotSay: [
      'Explaining why this plan is different without naming the direction of money explicitly',
    ],
    responses: [
      {
        text: '"I hear you — and what I\'m showing you moves in the exact opposite direction: this plan puts [monthly amount] more into your [Social Security check / account] every single month, which is [annualized amount] more per year than you\'re getting right now. That\'s money going to you — and that\'s exactly why we need to get this locked in before [enrollment window closes]."',
      },
    ],
    pillar: 'Reframing — make the direction of money explicit; this plan adds, urgency is the enrollment window',
  },

  {
    id: 'client-bought-signal-ignored',
    section: 'Resistance at Close',
    clientPhrase: 'Client said yes — now looping, second-guessing, or stalling mid-enrollment.',
    signal: 'yellow',
    underneath: 'The client gave a buying signal — "let\'s do it," "okay, go ahead," "I\'m ready" — and then the agent kept going. Discovery questions, re-verification, re-explanation. Every minute after a buying signal is a minute for doubt to grow. When a client says yes, the presentation stops and the paperwork starts. The job at this moment is to confirm the three things they care about and submit.',
    tags: ['let\'s do it', 'go ahead', 'okay', 'I\'m ready', 'yes', 'alright', 'sure', 'do it', 'looping', 'second guessing', 'going back', 'hesitating after yes'],
    doNotSay: [
      'Asking more discovery questions after a yes — gives doubt time to grow',
      'Re-summarizing the plan — the sale is already made; don\'t reopen it',
    ],
    responses: [
      {
        text: '"[Name], you already made the right call — [doctor] is confirmed, your coverage stays intact, and this puts [monthly amount] more in your pocket starting [effective date]. Let\'s get this submitted right now so it\'s official and you don\'t lose your spot."',
      },
    ],
    pillar: 'Persuasion — a yes is a yes; confirm the three things they care about and submit immediately',
  },

  {
    id: 'news-said-everyone-gets-it',
    section: 'Commercial & Benefit',
    clientPhrase: '"The news said everyone can get this." / "The president said seniors get this benefit." / "I heard everyone on Medicare qualifies."',
    signal: 'yellow',
    underneath: 'Public messaging — TV news, political statements, advertisements — set an expectation that these benefits are automatically available to all Medicare members. The client is not wrong that the benefits exist. They are wrong about the mechanism. The correct move is to validate what they heard, then reframe the enrollment step as finding out whether their specific window is open — not as correcting them.',
    tags: ['news said', 'president said', 'everyone can get it', 'saw on TV', 'commercial said', 'heard about it', 'advertised', 'automatically', 'all seniors', 'everyone qualifies'],
    doNotSay: [
      '"That\'s not how it works." — shames them for believing what they heard',
      'Explaining the full Medicare plan structure before establishing eligibility — kills momentum',
    ],
    responses: [
      {
        text: '"They\'re right — these are legitimate, government-funded benefits and you absolutely can qualify. What the ads don\'t explain is that they come through specific Medicare plans during specific enrollment windows — and I need to check right now whether your window is open, because if it is, we don\'t want to miss it."',
      },
    ],
    pillar: 'Reframing — validate what they heard, reframe enrollment as checking their window; urgency is don\'t miss it',
  },

  {
    id: 'grief-or-life-crisis',
    section: 'Family & Third Party',
    clientPhrase: 'Client discloses a major loss or crisis during the call — death in family, health emergency, financial collapse.',
    signal: 'red',
    underneath: 'The client is carrying something real and heavy. Agents who acknowledge it briefly and pivot purposefully keep the call. Agents who linger in the grief lose momentum and can\'t get back. Agents who ignore it entirely lose trust. The correct sequence is: one genuine beat of acknowledgment, then reframe getting coverage handled as a service to them — one less thing they have to carry. The purpose of the call becomes a gift, not a sale.',
    tags: ['lost someone', 'passed away', 'death', 'grief', 'crisis', 'overwhelming', 'too much', 'just happened', 'funeral', 'hospital', 'just lost', 'husband died', 'wife died', 'son died', 'daughter died'],
    doNotSay: [
      '"I\'m so sorry — now, back to your Medicare plan..." — the pivot is too fast; they feel unheard',
      'Staying in the grief for multiple exchanges — you lose the call\'s purpose and can\'t recover',
    ],
    responses: [
      {
        text: '"[Name], I\'m sorry — and the best thing I can do for you right now is get your coverage handled so it\'s one less thing on your mind. Let\'s take care of this today."',
      },
      {
        label: 'If they return to the grief',
        text: '"I hear you — and I\'m not going anywhere. The reason I want to get this done today is so you don\'t have to think about it again. Let\'s finish this."',
      },
    ],
    pillar: 'Reframing — one genuine beat, then pivot; getting coverage handled is a service to them in a hard moment',
  },

  {
    id: 'stay-put-not-worth-it',
    section: 'Resistance at Close',
    clientPhrase: '"I think I\'m just going to stay where I am." / "It didn\'t really feel worth it."',
    signal: 'red',
    underneath: 'This is a soft no — not a hard refusal, but inertia winning. The Math Breakdown didn\'t connect to anything real in their life. The correct move is to ask a diagnostic question that reveals whether the issue is the number or the change. Both have specific responses. Neither response accepts the exit.',
    tags: ['stay put', 'staying where I am', 'keeping what I have', 'not going to change', 'not worth it', 'going to stay', 'I\'ll pass', 'going to keep it', 'staying with my plan'],
    doNotSay: [
      '"Of course — I understand." — accepts the exit; the call is over',
      'Re-listing plan features — they\'re not asking for more information',
    ],
    responses: [
      {
        position: 'early',
        text: '"Before you go — staying where you are right now means leaving [annualized amount] on the table this year. I want to make sure that\'s a decision you\'re making on purpose. What specifically didn\'t feel worth it?"',
      },
      {
        position: 'late',
        label: 'Diagnostic — ask first',
        text: '"You\'ve seen the full comparison — [current] versus [new], that\'s [annualized difference] this year. Staying put now has a specific dollar cost. Was it the number that didn\'t feel big enough, or is it more about not wanting to go through a change right now?"',
      },
      {
        position: 'late',
        label: 'If it\'s the number',
        text: '"Let me show you the full picture — [benefit 1] plus [benefit 2] plus [benefit 3] comes out to [total annualized]. That\'s what you\'re leaving behind every year you stay where you are. Does that change the picture?"',
      },
      {
        position: 'late',
        label: 'If it\'s about not wanting to change',
        text: '"I hear that — but staying where you are isn\'t neutral anymore. You\'ve seen what\'s available. The question is whether [annualized amount] this year is worth 10 minutes right now. That\'s really what we\'re talking about."',
      },
    ],
    pillar: 'The Shift — inaction now has a cost; diagnose whether the issue is the number or the change, then respond specifically',
  },

  {
    id: 'conflicting-benefit-amounts',
    section: 'Resistance at Close',
    clientPhrase: '"You said a different number earlier." / "Someone told me a different amount." / "Which one is it?"',
    signal: 'yellow',
    underneath: 'Trust fractures the moment the numbers don\'t match. The client noticed and they\'re right to question it. The agent who papers over it loses all credibility. The agent who owns it immediately and corrects it actually builds more trust than if the error never happened. Own it in one sentence. Fix it. Move.',
    tags: ['different number', 'two numbers', 'you said', 'which one', 'confused', 'different amount', 'contradicted', 'changed the number', 'what is it'],
    responses: [
      {
        text: '"You\'re right to catch that — let me pull the confirmed number right now. [Looks it up.] The correct amount is [X] — that\'s the official figure and that\'s what we\'re working with."',
      },
    ],
    pillar: 'Persuasion — own the error in one beat, correct it immediately, keep moving; don\'t dwell',
  },

]
