'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from '@carbon/icons-react'
import { SPRING } from '@/lib/motion'
import PageShell from '@/components/layout/PageShell'
import CalloutBlock from '@/components/ui/CalloutBlock'
import CrossLinks from '@/components/ui/CrossLinks'
import styles from './page.module.css'

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

interface SystemLink {
  type: 'pattern' | 'pillar' | 'objection' | 'calltype'
  label: string
  href: string
}

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const planTypes = [
  {
    tag: 'Plan Type 01',
    name: 'HMO',
    full: 'Health Maintenance Organization',
    analogy: '"An all-inclusive resort. Everything you need is inside and it\'s affordable. But you need a guide — your Primary Care Doctor — to take you anywhere, and you can\'t leave the resort for covered care."',
    pros: [
      'Usually $0/month premium',
      'Richest extra benefits — dental, vision, groceries, OTC',
      '$0 copays for most in-network services',
      'Coordinated care — your PCP acts as your quarterback',
    ],
    cons: [
      'Must stay in-network for coverage',
      'Need a referral to see a specialist',
      'No coverage outside network (except emergencies)',
    ],
    note: 'A referral is not a wall. It\'s your primary care doctor sending a note to a specialist. One call from their office. Most patients never make that call themselves — the doctor\'s office handles it.',
  },
  {
    tag: 'Plan Type 02',
    name: 'PPO',
    full: 'Preferred Provider Organization',
    analogy: '"A shopping mall. Your favorite stores (in-network doctors) give you the best deals, but you can shop anywhere — you\'ll just pay more at stores outside the mall."',
    pros: [
      'See any doctor that accepts Medicare — no referrals',
      'Works nationwide — great for travelers or snowbirds',
      'Flexibility to see out-of-area specialists',
    ],
    cons: [
      'Higher premiums and/or copays than HMOs',
      'Fewer extra benefits — smaller grocery cards, dental, OTC',
      'Out-of-network costs can still be significant',
    ],
    note: 'A PPO charges for flexibility. If a client has local doctors and doesn\'t travel, they\'re paying for a feature they don\'t use. That\'s money leaving their pocket every month for nothing.',
  },
  {
    tag: 'Plan Type 03',
    name: 'HMO-POS',
    full: 'Point of Service',
    analogy: '"The all-inclusive resort, but they hand you a hall pass for specific situations — certain specialists outside the resort, certain dental work."',
    pros: [
      'HMO-level pricing and extra benefits',
      'Limited out-of-network access for specific situations',
      'Same rich grocery/OTC benefits as a standard HMO',
    ],
    cons: [
      'Out-of-network costs can still be high',
      'Referral requirement still exists for specialists',
      'Over-explaining it technically will kill the call',
    ],
    note: 'The HMO-POS is the most mishandled plan type on calls. The word "referral" triggers fear. Do not define the plan. Describe what the client\'s life looks like on it.',
  },
  {
    tag: 'Plan Type 04',
    name: 'PFFS',
    full: 'Private Fee-for-Service',
    analogy: '"A freelancer — you can go to any doctor, but they have to agree to the plan\'s payment terms each time you show up."',
    pros: [
      'Maximum flexibility, similar to Original Medicare',
      'Possible extra benefits depending on the plan',
    ],
    cons: [
      'Rare and not widely available',
      'Doctors can decline to see you at the door',
    ],
    note: 'You won\'t sell many PFFS plans, but knowing they exist means you\'re never caught off guard if a client or system mentions one.',
  },
]

const comparisonRows = [
  { feature: 'Referrals needed?', hmo: '✓ Yes', ppo: '✗ No', pos: '✓ Yes (specialists)', pffs: '✗ No' },
  { feature: 'Stay in network?', hmo: '✓ Required', ppo: '✗ Optional', pos: '✓ Mostly', pffs: '✗ Not required' },
  { feature: 'Extra benefits', hmo: '⭐⭐⭐ Highest', ppo: '⭐⭐ Moderate', pos: '⭐⭐⭐ Highest', pffs: '⭐ Varies' },
  { feature: 'Premium cost', hmo: '$ Lowest', ppo: '$$ Higher', pos: '$ Lowest', pffs: '$$ Varies' },
  { feature: 'Nationwide?', hmo: '✗ No', ppo: '✓ Yes', pos: '✗ Mostly No', pffs: '✓ Yes' },
  { feature: 'Best for…', hmo: 'Local patients, max benefits', ppo: 'Travelers, multiple specialists', pos: 'Local + HMO benefits', pffs: 'Rare situations' },
]

const keyTerms = [
  {
    name: 'MOOP',
    abbr: 'Maximum Out-of-Pocket',
    body: 'The most a client would ever pay out of their own pocket in a single calendar year. Once they hit that number, the plan covers 100% of everything for the rest of the year. Original Medicare has NO MOOP — there is no cap, no ceiling, no limit on what a bad year could cost.',
    pitch: '"Think of the MOOP as a ceiling. If something serious happens — a hospitalization, a surgery — your costs stop at that number. With Original Medicare, there\'s no ceiling. Bills can keep climbing. The MOOP protects you."',
    salesNote: 'When a client\'s current plan has a high MOOP ($8,500–$9,250) and the proposed plan has a lower one or $0, always state the difference in dollars: "That\'s $5,950 less risk sitting over your head right now."',
  },
  {
    name: 'Part B Giveback',
    abbr: 'Also called Part B Premium Reduction',
    body: 'Some Medicare Advantage plans pay a portion — or all — of the client\'s Medicare Part B premium back to them as a credit on their Social Security check. The standard Part B premium is approximately $174–$185/month. A giveback plan might reduce this by $50, $100, $150, or the full amount.',
    pitch: '"The Part B giveback means a portion of what you pay into Medicare every month comes back to you in your Social Security check. So instead of that $175 leaving your check, part of it — or all of it — comes back."',
    salesNote: 'Watch out: a plan with a high giveback can have high copays and a high MOOP. Always compare the full picture. A client who gains $100/month in giveback but now has a $500 specialist copay is not better off.',
  },
  {
    name: 'QMB',
    abbr: 'Qualified Medicare Beneficiary',
    body: 'A level of Medicaid assistance where the state pays the client\'s Medicare Part B premium, deductibles, and cost-sharing (copays/coinsurance). A QMB client is a D-SNP candidate. If a client says "I don\'t pay my Part B premium" or "the state pays my insurance" — that is QMB. Confirm it. Then pivot to D-SNP.',
    pitch: null,
    salesNote: 'QMB clients on a D-SNP often have $0 copays across the board. They are among the highest-value leads in Medicare. Never skip the Medicaid question.',
  },
  {
    name: 'LIS / Extra Help',
    abbr: 'Low Income Subsidy',
    body: 'A federal program that helps low-income beneficiaries pay for prescription drug costs — Part D premiums, deductibles, and copays. Clients with LIS/Extra Help frequently qualify for D-SNP as well. If a client mentions "extra help with my medications," probe for full Medicaid eligibility immediately.',
    pitch: null,
    salesNote: 'LIS and D-SNP eligibility often overlap. One triggers the other. If you hear "extra help," ask the Medicaid question next.',
  },
]

const enrollmentPeriods = [
  {
    abbr: 'AEP',
    name: 'Annual Enrollment Period',
    dates: 'October 15 – December 7',
    coverage: 'Coverage starts January 1',
    body: 'The main season. Anyone on Medicare can switch plans or enroll in Medicare Advantage for the first time. Highest volume, most competition, biggest opportunity.',
    warning: null,
  },
  {
    abbr: 'OEP',
    name: 'Open Enrollment Period',
    dates: 'January 1 – March 31',
    coverage: null,
    body: 'For people who are already on a Medicare Advantage plan. They can switch to a different MA plan, or go back to Original Medicare.',
    warning: 'You cannot use OEP to enroll someone currently on Original Medicare into a Medicare Advantage plan for the first time. If they\'re on Original Medicare during OEP, you need a qualifying SEP event or you must wait for AEP.',
  },
  {
    abbr: 'SEP',
    name: 'Special Enrollment Period',
    dates: 'Year-round',
    coverage: 'Triggered by a qualifying life event',
    body: 'A window that opens when something changes in the client\'s life or coverage situation. This is how you enroll people year-round outside of AEP. Always probe for qualifying events on every call outside AEP.',
    warning: null,
  },
  {
    abbr: 'IEP',
    name: 'Initial Enrollment Period',
    dates: '7-month window around 65th birthday',
    coverage: '3 months before, birthday month, 3 months after',
    body: 'When someone first becomes eligible for Medicare. Brand-new-to-Medicare clients. No plan loyalties yet. Be their expert from day one and you earn a client for life.',
    warning: null,
  },
]

const sepEvents = [
  { event: 'Moved to a new service area', result: 'New zip code or state = new plan options available' },
  { event: 'Lost employer or union coverage', result: 'Coverage ending = SEP window opens immediately' },
  { event: 'Newly qualified for Medicaid', result: 'Immediate D-SNP eligibility — highest priority' },
  { event: 'New chronic condition diagnosis', result: 'C-SNP eligibility may apply' },
  { event: 'Moving out of nursing home', result: 'New enrollment window opens' },
  { event: 'Current plan has low CMS star rating', result: 'Eligible to switch mid-year' },
  { event: 'Declared disaster area (FEMA)', result: 'Emergency SEP may apply' },
]

const originalMaRows = [
  { feature: 'Monthly Cost', original: 'Part B premium (~$175–185/mo) + no cap on spending', ma: 'Often $0 additional premium + annual out-of-pocket maximum' },
  { feature: 'Out-of-Pocket Max', original: '❌ None. Unlimited liability.', ma: '✅ Capped (typically $3,000–$9,250/year)' },
  { feature: 'Dental / Vision / Hearing', original: '❌ Not covered', ma: '✅ Usually included' },
  { feature: 'Prescription Drugs', original: 'Requires a separate Part D plan', ma: '✅ Usually built in (MAPD)' },
  { feature: 'Extra Benefits', original: '❌ None', ma: '✅ OTC cards, groceries, transportation, gym' },
  { feature: 'Doctor Freedom', original: 'Any doctor that accepts Medicare', ma: 'Depends on network type (HMO/PPO)' },
  { feature: 'Care Coordination', original: '❌ You manage it yourself', ma: '✅ HMO plans coordinate care via PCP' },
]

const mistakes: {
  num: string
  title: string
  what: string
  cost: string
  fix: string
  script: string | null
  lesson: string
  systemLinks: SystemLink[]
}[] = [
  {
    num: '01',
    title: 'Surrendering to "I Only Want a PPO"',
    what: 'A client — a retired nurse and former insurance agent — kept saying "I only want a PPO, no HMOs." The HMO-POS plan offered $90/month more in grocery and utility benefits. That\'s $1,080 per year. The agent tried to explain the technical difference, got trapped in the word "referral," and the client shut it down. Final words: "I wish there was more I could do for you."',
    cost: '$1,080 per year left on the table. The client stayed on an inferior plan because the agent couldn\'t reframe one word.',
    fix: 'Never debate plan types before checking the network. If the client\'s doctors are in-network on the HMO-POS, the referral objection loses most of its power — the referral is a 5-minute call the doctor\'s office handles.',
    script: '"Before we decide anything — let me check your doctors right now. If they\'re in this network, the referral is just your primary care doctor sending a note. It takes 5 minutes and their office handles it. If your doctors are covered, that $1,080 a year is yours for one 5-minute phone call. Let me check."',
    lesson: 'Check the network first. Reframe second. Never fight the word "referral" with a definition — fight it with math.',
    systemLinks: [
      { type: 'pattern', label: 'Pattern 3 — Logic Responses to Emotional Objections', href: '/patterns/logic-responses' },
      { type: 'pattern', label: 'Pattern 4 — Permission-Seeking Language', href: '/patterns/permission-seeking-language' },
      { type: 'pillar', label: 'Pillar 2 — Reframing', href: '/pillars/reframing' },
      { type: 'objection', label: 'Objection: Loyalty', href: '/objections' },
    ],
  },
  {
    num: '02',
    title: 'Explaining the Plan Instead of the Life',
    what: 'Same pattern — PPO bias, referral fear. The agent entered a lengthy technical explanation of what "POS" stands for, how the network works, what Point of Service means. The moment the word "referral" came up again, the client said "No. I don\'t want that. No returns." Call over.',
    cost: 'Clients don\'t buy plan structures. They buy outcomes. Technical explanations give clients ammunition to reject the plan.',
    fix: 'Never define a plan. Describe what life looks like on it.',
    script: '"On this plan, you call your doctor\'s office — exactly like you do today. You see your specialists — exactly like you do today. The only difference is there\'s an extra $90 in your pocket every month for groceries and utilities. That\'s the entire difference."',
    lesson: 'The client doesn\'t care what HMO-POS stands for. They care if their doctors are covered and if they\'ll have more money.',
    systemLinks: [
      { type: 'pattern', label: 'Pattern 3 — Logic Responses to Emotional Objections', href: '/patterns/logic-responses' },
      { type: 'pillar', label: 'Pillar 2 — Reframing', href: '/pillars/reframing' },
      { type: 'pillar', label: 'Pillar 3 — The Shift', href: '/pillars/the-shift' },
    ],
  },
  {
    num: '03',
    title: 'Stating Monthly Numbers, Never Annualizing',
    what: 'Agents quoted benefit differences in monthly terms — "$90 more a month," "$40 more on the flex card" — and never added it up. On one call, a client said $40 wasn\'t enough to switch. The agent accepted that and the call ended.',
    cost: '$40/month is $480/year. $90/month is $1,080/year. When you say it monthly, clients compare it to pocket change. When you say it annually, it becomes a real bill they\'ve been quietly paying.',
    fix: 'Always convert monthly to annual. Always connect the annual number to something the client mentioned — their light bill, their groceries, their prescriptions.',
    script: '"$90 a month sounds modest. But that\'s $1,080 a year. That\'s three or four months of your electric bills. That money is already funded — it exists right now in your zip code. The only question is whether it goes to you or stays unclaimed."',
    lesson: 'Monthly numbers don\'t move people. Annual numbers do. Always convert. Always humanize.',
    systemLinks: [
      { type: 'pattern', label: 'Pattern 2 — Incomplete Math Breakdown', href: '/patterns/incomplete-math-breakdown' },
      { type: 'pillar', label: 'Pillar 3 — The Shift', href: '/pillars/the-shift' },
      { type: 'objection', label: 'Objection: Benefit & Plan Comparison', href: '/objections' },
    ],
  },
  {
    num: '04',
    title: 'Losing the Part B Giveback Client',
    what: 'A client called specifically about a Part B giveback. The agent found a strong plan with lower specialist copays and a significantly lower MOOP. But when it came time to close, she pitched the medical benefits instead of the money the client called about. The client\'s response: "Just what I expected — nothing." He felt like it was bait-and-switch, even though it wasn\'t.',
    cost: 'The agent sold the wrong thing to the right client. The client called for one reason. The pitch never addressed it.',
    fix: 'Always close around the client\'s stated motivation first. Everything else is supporting evidence.',
    script: '"You called about that giveback — here\'s what I found. This plan reduces your Part B premium by $[amount] every month, which comes back to your Social Security check. That\'s $[annualized] a year. And on top of that — your specialist copay drops and your out-of-pocket maximum is lower. You called about one thing. You\'re getting three."',
    lesson: 'Lead with what they called about. Then add the rest.',
    systemLinks: [
      { type: 'pattern', label: 'Pattern 1 — Client Gold Ignored', href: '/patterns/client-gold-ignored' },
      { type: 'pillar', label: 'Pillar 3 — The Shift', href: '/pillars/the-shift' },
      { type: 'calltype', label: 'Call Type 1 — The Money Caller', href: '/call-types/money-caller' },
    ],
  },
  {
    num: '05',
    title: 'Not Knowing OEP Rules',
    what: 'Enrollment attempts were made during OEP (January–March) on clients who are currently on Original Medicare — not Medicare Advantage. OEP does not apply to those clients. The enrollment cannot go through.',
    cost: 'Thirty minutes of call time, a client ready to enroll, and a compliance dead-end. The client\'s trust in the process takes a hit.',
    fix: 'Before you spend 20 minutes on discovery, ask: "Are you currently on a Medicare Advantage plan, or are you on Original Medicare — just Part A and Part B?" If they\'re on Original Medicare during OEP, you need a qualifying SEP event or you set an AEP callback.',
    script: null,
    lesson: 'Two questions at the top of the call saves you from a compliance violation at the bottom. Know your window before you invest the call.',
    systemLinks: [
      { type: 'pillar', label: 'Pillar 1 — Persuasion', href: '/pillars/persuasion' },
      { type: 'calltype', label: 'Call Type 8 — The Timing Objector', href: '/call-types/timing-objector' },
    ],
  },
  {
    num: '06',
    title: 'Missing the D-SNP Qualifying Question',
    what: 'Full calls were spent pitching standard Medicare Advantage plans to clients who qualified for D-SNP — and the Medicaid question was never asked. When a client mentions "food stamps," "SSI," "state assistance," or "Medicaid card" — that is the signal.',
    cost: 'D-SNP clients enrolled into standard MA plans are underserved — and it\'s a compliance violation if they have full Medicaid. The best plan was never presented.',
    fix: 'Ask the Medicaid qualifying question early, every call. If yes — stop everything and pivot to D-SNP.',
    script: '"Besides your Medicare card, do you receive any other assistance — Medicaid, state help with your premiums, food stamp benefits, or a separate state insurance card?"',
    lesson: 'This is the most important qualifying question in discovery. It changes the entire plan you recommend. Ask it early. Ask it every time.',
    systemLinks: [
      { type: 'pattern', label: 'Pattern 1 — Client Gold Ignored', href: '/patterns/client-gold-ignored' },
      { type: 'pillar', label: 'Pillar 1 — Persuasion', href: '/pillars/persuasion' },
      { type: 'objection', label: 'Objection: Fear of Losing Existing Benefits', href: '/objections' },
    ],
  },
  {
    num: '07',
    title: 'Accepting Brand Loyalty Without a Counter',
    what: 'A client said "Is that with Florida Blue? I\'m not changing if it\'s not Florida Blue." The response: "No, it\'s not Florida Blue." Call ended. No reframe, no challenge, no fight.',
    cost: 'That client was leaving $206/month in Part B giveback and $2,200 in reduced MOOP exposure on the table — for a brand name.',
    fix: 'Brand loyalty is an emotion, not a reason. Match the feeling first. Then use their own words to redirect to the math.',
    script: '"I completely understand the loyalty — you\'ve been with them for years. But you told me that card feels worn out and hasn\'t given you anything back. They\'re keeping that $206 every month. This plan sends it back to you. That\'s $2,472 a year. Why would we stay loyal to a company that isn\'t staying loyal to us?"',
    lesson: 'Never accept brand loyalty as a final answer. Match the emotion. Redirect to math.',
    systemLinks: [
      { type: 'pattern', label: 'Pattern 3 — Logic Responses to Emotional Objections', href: '/patterns/logic-responses' },
      { type: 'pattern', label: 'Pattern 4 — Permission-Seeking Language', href: '/patterns/permission-seeking-language' },
      { type: 'pillar', label: 'Pillar 2 — Reframing', href: '/pillars/reframing' },
      { type: 'objection', label: 'Objection: Loyalty', href: '/objections' },
    ],
  },
  {
    num: '08',
    title: 'Dead Air During System Navigation',
    what: 'Multiple calls were lost not because the agent didn\'t find a good plan — but because the client mentally checked out during the search. Silent gaps of 60, 90, even 150+ seconds. One client thought the call dropped and nearly hung up. The agent had found a great plan. The silence killed it before the pitch.',
    cost: 'You can do all the right work and lose the call because you went quiet while doing it.',
    fix: 'Narrate the search out loud. Never let more than 10 seconds pass in silence.',
    script: '"I\'m pulling up your zip code now... I\'ve got your current plan here, looking at what\'s available in your area... I can see your doctor right here in the system, checking network status... Good — they\'re in network. Now I\'m looking at the benefit comparison..."',
    lesson: 'The sale can die in the silence. Narrate the navigation. Keep the client with you every step of the way.',
    systemLinks: [
      { type: 'pattern', label: 'Pattern 5 — System Navigation Dead Air', href: '/patterns/system-navigation-dead-air' },
      { type: 'pillar', label: 'Pillar 4 — Refocusing', href: '/pillars/refocusing' },
    ],
  },
]

const scenarios: {
  letter: string
  title: string
  setup: string
  steps: string[] | null
  script: string | null
  systemLinks: SystemLink[]
}[] = [
  {
    letter: 'A',
    title: 'Pitching HMO Over PPO',
    setup: 'Client likes their PPO "for the freedom" but only sees local, in-network doctors anyway.',
    steps: null,
    script: '"You\'re paying for freedom you don\'t use. An HMO gives you access to the same local doctors, but adds a bigger dental allowance and a grocery card on top. Let\'s make your plan match your actual life — not a lifestyle you\'re paying for but don\'t live."',
    systemLinks: [
      { type: 'pillar', label: 'Pillar 3 — The Shift', href: '/pillars/the-shift' },
      { type: 'objection', label: 'Objection: Benefit & Plan Comparison', href: '/objections' },
    ],
  },
  {
    letter: 'B',
    title: 'Pitching PPO Over HMO',
    setup: 'Client is frustrated by referral waits, sees out-of-area specialists, or splits time between states.',
    steps: null,
    script: '"An HMO puts you in the passenger seat — you need permission to go certain places. A PPO puts you in the driver\'s seat. Your knee hurts? Call the knee doctor directly and go. No one has to approve it. If you see multiple specialists or travel, the PPO earns its keep."',
    systemLinks: [
      { type: 'pillar', label: 'Pillar 3 — The Shift', href: '/pillars/the-shift' },
      { type: 'objection', label: 'Objection: Network & Coverage', href: '/objections' },
    ],
  },
  {
    letter: 'C',
    title: 'Overcoming "I Just Want a PPO"',
    setup: 'Client has a PPO preference but you\'re not sure why.',
    steps: [
      'Ask why before you fight it. "When you say PPO — is it because you travel, or is it more about not wanting referrals?"',
      'Check their doctors\' network status on the HMO-POS before addressing the referral. If they\'re in-network, the objection loses most of its power.',
      'If it\'s purely habit: "Since you stay local, let me show you both plans side by side. You\'ll see how much more the HMO puts in your pocket — and you decide from there."',
    ],
    script: null,
    systemLinks: [
      { type: 'pattern', label: 'Pattern 3 — Logic Responses to Emotional Objections', href: '/patterns/logic-responses' },
      { type: 'pillar', label: 'Pillar 2 — Reframing', href: '/pillars/reframing' },
      { type: 'objection', label: 'Objection: Loyalty', href: '/objections' },
      { type: 'objection', label: 'Objection: Network & Coverage', href: '/objections' },
    ],
  },
  {
    letter: 'D',
    title: 'Unlocking a D-SNP',
    setup: 'Client mentions Medicaid, food stamps, state help, SSI, or a Medicaid card during discovery.',
    steps: null,
    script: '"Hold on — because of what you just told me, you qualify for a completely different category of plan. These are called Special Needs Plans and they offer significantly more than standard Medicare Advantage. We\'re talking $0 copays across the board, a higher grocery card, free transportation to your doctor appointments. Standard plans can\'t touch these benefit levels. Let me pull up what you actually qualify for."',
    systemLinks: [
      { type: 'pillar', label: 'Pillar 1 — Persuasion', href: '/pillars/persuasion' },
      { type: 'pillar', label: 'Pillar 3 — The Shift', href: '/pillars/the-shift' },
      { type: 'calltype', label: 'Call Type 2 — The Scared Switcher', href: '/call-types/scared-switcher' },
      { type: 'objection', label: 'Objection: Fear of Losing Existing Benefits', href: '/objections' },
    ],
  },
  {
    letter: 'E',
    title: 'Bringing Up a C-SNP',
    setup: 'Client mentions diabetes, heart failure, or a chronic condition during discovery.',
    steps: null,
    script: '"I want to flag something — because you mentioned your diabetes, there\'s a specific plan type designed entirely around that condition. The insulin copays, the A1C testing, the eye exams — it\'s built for someone in exactly your situation. Let me check if there\'s one in your area before we look at anything else."',
    systemLinks: [
      { type: 'pattern', label: 'Pattern 1 — Client Gold Ignored', href: '/patterns/client-gold-ignored' },
      { type: 'pillar', label: 'Pillar 1 — Persuasion', href: '/pillars/persuasion' },
    ],
  },
  {
    letter: 'F',
    title: 'Using the MOOP as a Sales Tool',
    setup: 'Client is on a plan with a high MOOP ($8,500–$9,250) and you\'ve found a plan with a significantly lower one.',
    steps: null,
    script: '"I want to show you something that matters a lot and most agents never bring up. Your current plan has a maximum out-of-pocket of $9,250. If something serious happens this year — a hospitalization, a surgery — you could owe up to $9,250 before the plan covers 100%. The plan I\'m looking at caps that at $3,300. That\'s $5,950 less risk sitting over your head. Even if you never hit it — knowing that ceiling is lower is worth something."',
    systemLinks: [
      { type: 'pattern', label: 'Pattern 2 — Incomplete Math Breakdown', href: '/patterns/incomplete-math-breakdown' },
      { type: 'pillar', label: 'Pillar 3 — The Shift', href: '/pillars/the-shift' },
      { type: 'objection', label: 'Objection: Financial', href: '/objections' },
    ],
  },
  {
    letter: 'G',
    title: 'The Part B Giveback Client',
    setup: 'Client called specifically about a Part B giveback or "money back on my Social Security."',
    steps: [
      'Sell the giveback first. Everything else is a bonus.',
      'Find the plan with the best giveback available in their area.',
      'Confirm the overall plan is competitive — giveback + benefits combined.',
    ],
    script: '"You called about getting money back on your Social Security — and I found it. This plan reduces your Part B premium by $[amount] every month. That\'s $[annualized] a year coming back to your check automatically. On top of that, your specialist copay is lower, your out-of-pocket maximum is better, and you pick up [benefit]. You called about one thing. You\'re actually getting three."',
    systemLinks: [
      { type: 'pattern', label: 'Pattern 1 — Client Gold Ignored', href: '/patterns/client-gold-ignored' },
      { type: 'pillar', label: 'Pillar 3 — The Shift', href: '/pillars/the-shift' },
      { type: 'calltype', label: 'Call Type 1 — The Money Caller', href: '/call-types/money-caller' },
      { type: 'objection', label: 'Objection: Commercial & Benefit', href: '/objections' },
    ],
  },
]

const killPhrases: {
  kill: string
  use: string
  isNever?: boolean
  systemLinks: SystemLink[]
}[] = [
  {
    kill: '"I wish there was more I could do for you."',
    use: '"Before we hang up — your doctors are in-network. That referral is a 5-minute call that pays you $1,080 a year. Tell me what\'s still holding us back."',
    systemLinks: [
      { type: 'pattern', label: 'Pattern 4 — Permission-Seeking', href: '/patterns/permission-seeking-language' },
      { type: 'pillar', label: 'Pillar 1 — Persuasion', href: '/pillars/persuasion' },
    ],
  },
  {
    kill: '"So that\'s not enough for you — the $40 extra?"',
    use: '"$40 a month is $480 a year. What would you do with an extra $480 every year?"',
    systemLinks: [
      { type: 'pattern', label: 'Pattern 2 — Incomplete Math Breakdown', href: '/patterns/incomplete-math-breakdown' },
      { type: 'pillar', label: 'Pillar 3 — The Shift', href: '/pillars/the-shift' },
    ],
  },
  {
    kill: '"It\'s not much different than a PPO."',
    use: '"The benefits are actually stronger. The structure is different — but your doctors, your costs, your day-to-day? Better."',
    systemLinks: [
      { type: 'pattern', label: 'Pattern 4 — Permission-Seeking', href: '/patterns/permission-seeking-language' },
      { type: 'pillar', label: 'Pillar 2 — Reframing', href: '/pillars/reframing' },
    ],
  },
  {
    kill: '"I totally understand" (when they\'re walking)',
    use: '"I hear you — and I want to make sure you have the full picture before we hang up. Can I show you one number?"',
    systemLinks: [
      { type: 'pattern', label: 'Pattern 4 — Permission-Seeking', href: '/patterns/permission-seeking-language' },
      { type: 'pillar', label: 'Pillar 2 — Reframing', href: '/pillars/reframing' },
    ],
  },
  {
    kill: '"You can just look up the brochure."',
    use: 'Never say this. You are the expert. Do not hand them your job.',
    isNever: true,
    systemLinks: [
      { type: 'pattern', label: 'Pattern 1 — Client Gold Ignored', href: '/patterns/client-gold-ignored' },
      { type: 'pillar', label: 'Pillar 1 — Persuasion', href: '/pillars/persuasion' },
    ],
  },
  {
    kill: '[Silence for 60+ seconds during system search]',
    use: 'Narrate out loud: "I\'m pulling up your doctors now... checking the network... I can see your plan right here..."',
    systemLinks: [
      { type: 'pattern', label: 'Pattern 5 — System Navigation Dead Air', href: '/patterns/system-navigation-dead-air' },
      { type: 'pillar', label: 'Pillar 4 — Refocusing', href: '/pillars/refocusing' },
    ],
  },
  {
    kill: '"I\'m not here to strong-arm you."',
    use: 'Say nothing. Stay in the frame. Offering the exit invites them to take it.',
    systemLinks: [
      { type: 'pattern', label: 'Pattern 4 — Permission-Seeking', href: '/patterns/permission-seeking-language' },
      { type: 'pillar', label: 'Pillar 1 — Persuasion', href: '/pillars/persuasion' },
    ],
  },
]

/* ------------------------------------------------------------------ */
/* System Connection Tags Component                                    */
/* ------------------------------------------------------------------ */

const typeLabels: Record<SystemLink['type'], string> = {
  pattern: 'Pattern',
  pillar: 'Pillar',
  objection: 'Objection',
  calltype: 'Call Type',
}

const typeColors: Record<SystemLink['type'], string> = {
  pattern: styles.tagPattern,
  pillar: styles.tagPillar,
  objection: styles.tagObjection,
  calltype: styles.tagCallType,
}

function SystemConnections({ links }: { links: SystemLink[] }) {
  return (
    <div className={styles.systemConnections}>
      <span className={styles.systemConnectionsLabel}>Use in the system</span>
      <div className={styles.systemTags}>
        {links.map((link) => (
          <Link key={link.href + link.label} href={link.href} className={`${styles.systemTag} ${typeColors[link.type]}`}>
            <span className={styles.systemTagType}>{typeLabels[link.type]}</span>
            <span className={styles.systemTagLabel}>{link.label.replace(/^(Pattern \d+ — |Pillar \d+ — |Call Type \d+ — |Objection: )/, '')}</span>
            <ArrowRight size={12} className={styles.systemTagArrow} />
          </Link>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Medicare101Page() {
  return (
    <PageShell signal="neutral">

      {/* Hero */}
      <motion.h1
        className="display-xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={SPRING}
      >
        Medicare 101
      </motion.h1>

      <motion.p
        className={`body-lg ${styles.intro}`}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...SPRING, delay: 0.1 }}
      >
        Not a textbook. A field reference. Know these cold before you get on a call.
        Written in plain English. Built from real call data.
      </motion.p>

      {/* TOC */}
      <motion.nav
        className={styles.toc}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...SPRING, delay: 0.18 }}
        aria-label="Page sections"
      >
        <p className={styles.tocTitle}>What this covers</p>
        <div className={styles.tocGrid}>
          {[
            { num: '01', label: 'Network Types', href: '#network-types' },
            { num: '02', label: 'Special Needs Plans', href: '#snp' },
            { num: '03', label: 'Key Benefit Terms', href: '#key-terms' },
            { num: '04', label: 'Enrollment Periods', href: '#enrollment' },
            { num: '05', label: 'Original Medicare vs. MA', href: '#comparison' },
            { num: '06', label: 'Real Mistakes from Real Calls', href: '#mistakes' },
            { num: '07', label: 'Sales Strategies', href: '#scenarios' },
          ].map((item) => (
            <a key={item.href} href={item.href} className={styles.tocItem}>
              <span className={styles.tocNum}>{item.num}</span>
              {item.label}
            </a>
          ))}
        </div>
      </motion.nav>

      {/* ============================================================ */}
      {/* SECTION 1 — NETWORK TYPES                                    */}
      {/* ============================================================ */}
      <motion.section
        id="network-types"
        className={styles.section}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={SPRING}
      >
        <p className={styles.sectionLabel}>Section 01</p>
        <h2 className={`display-lg ${styles.sectionTitle}`}>Network Types</h2>
        <p className={`body-lg ${styles.sectionIntro}`}>
          Comes up on every single call. Agents capitulate instead of pivoting. Know the difference — then know how to sell it.
        </p>

        <div className={styles.planGrid}>
          {planTypes.map((plan) => (
            <motion.div
              key={plan.name}
              className={`${styles.planCard} glass`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={SPRING}
            >
              <p className={styles.planTag}>{plan.tag}</p>
              <div>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className="body-md" style={{ color: 'var(--ink-60)', marginTop: 2 }}>{plan.full}</p>
              </div>
              <p className={styles.planAnalogy}>{plan.analogy}</p>
              <div className={styles.prosConsRow}>
                <div className={styles.prosCons}>
                  <h4>Pros</h4>
                  <ul>
                    {plan.pros.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                </div>
                <div className={`${styles.prosCons} ${styles.cons}`}>
                  <h4>Cons</h4>
                  <ul>
                    {plan.cons.map((c, i) => <li key={i}>{c}</li>)}
                  </ul>
                </div>
              </div>
              <p className={styles.planNote}><strong>Agent note:</strong> {plan.note}</p>
            </motion.div>
          ))}
        </div>

        <h3 className="display-lg" style={{ marginBottom: 'var(--space-4)', marginTop: 'var(--space-7)' }}>
          Side-by-Side
        </h3>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Feature</th>
                <th>HMO</th>
                <th>PPO</th>
                <th>HMO-POS</th>
                <th>PFFS</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.feature}>
                  <td className={styles.rowLabel}>{row.feature}</td>
                  <td>{row.hmo}</td>
                  <td>{row.ppo}</td>
                  <td>{row.pos}</td>
                  <td>{row.pffs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* ============================================================ */}
      {/* SECTION 2 — SPECIAL NEEDS PLANS                              */}
      {/* ============================================================ */}
      <motion.section
        id="snp"
        className={styles.section}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={SPRING}
      >
        <p className={styles.sectionLabel}>Section 02</p>
        <h2 className={`display-lg ${styles.sectionTitle}`}>Special Needs Plans</h2>

        <CalloutBlock type="green">
          <strong>SNPs are the most benefit-rich plans in all of Medicare Advantage.</strong> If a client qualifies, these are your first recommendation — every time. Ask the qualifying questions early in every call.
        </CalloutBlock>

        <div className={styles.snpGrid} style={{ marginTop: 'var(--space-6)' }}>
          <motion.div
            className={`${styles.snpCard} glass`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={SPRING}
          >
            <span className={styles.snpBadge}>D-SNP</span>
            <h3 className={styles.snpName}>Dual Eligible Special Needs Plan</h3>
            <p className={styles.snpBody}>
              <strong>Who qualifies:</strong> Anyone with both Medicare AND Medicaid — whether full Medicaid or a partial program (QMB, SLMB, QI, QDWI).
            </p>
            <p className={styles.snpBody}>
              <strong>Why it matters:</strong> These plans carry $0 premiums, $0 copays, the largest grocery/OTC cards in Medicare, free transportation, enhanced dental and vision. Standard MA plans cannot legally compete with these benefit levels.
            </p>
            <div className={styles.snpQuestion}>
              <strong>Ask this every call</strong>
              &ldquo;Besides your Medicare card, do you receive any other help — Medicaid, state assistance with your premiums, food stamp benefits, or a separate state insurance card?&rdquo;
            </div>
            <div>
              <p className="body-md" style={{ marginBottom: 'var(--space-2)', fontWeight: 600 }}>Also listen for:</p>
              <div className={styles.chipRow}>
                {['Food stamps / SNAP', 'State assistance', 'SSI / disability', 'Extra help with prescriptions', 'Medicaid card', 'The state pays my premium', 'QMB'].map((chip) => (
                  <span key={chip} className={styles.chip}>{chip}</span>
                ))}
              </div>
            </div>
            <CalloutBlock type="red">
              <strong>Compliance — non-negotiable:</strong> A client with full Medicaid MUST be enrolled in a D-SNP, not a standard MA plan. Enrolling a full dual-eligible client into a non-D-SNP is a compliance violation.
            </CalloutBlock>
          </motion.div>

          <motion.div
            className={`${styles.snpCard} glass`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...SPRING, delay: 0.1 }}
          >
            <span className={styles.snpBadge}>C-SNP</span>
            <h3 className={styles.snpName}>Chronic Condition Special Needs Plan</h3>
            <p className={styles.snpBody}>
              <strong>Who qualifies:</strong> Anyone diagnosed with specific chronic conditions — diabetes, heart failure, ESRD, chronic lung disease (COPD), and others designated by CMS.
            </p>
            <p className={styles.snpBody}>
              <strong>Why it matters:</strong> Engineered around the client&rsquo;s specific condition. Lower copays for condition-specific care, built-in care coordination, extra benefits matched to what that client actually uses.
            </p>
            <div className={styles.snpQuestion}>
              <strong>Ask this every call</strong>
              &ldquo;Do you have diabetes, heart failure, or any chronic condition you see a specialist for on a regular basis?&rdquo;
            </div>
            <div className={styles.snpQuestion}>
              <strong>The pitch</strong>
              &ldquo;There&rsquo;s a plan built specifically for someone with your condition. Your insulin copays, your cardiology visits, your A1C testing — it&rsquo;s designed for someone exactly like you. This isn&rsquo;t a generic plan. It&rsquo;s built around your health.&rdquo;
            </div>
          </motion.div>
        </div>

        <CalloutBlock type="yellow">
          <strong>Ask both qualifying questions, every call, early:</strong>
          <ol style={{ marginTop: 'var(--space-2)', marginLeft: 'var(--space-5)', lineHeight: 1.8 }}>
            <li>&ldquo;Do you receive Medicaid, state assistance, or any extra help with your Medicare?&rdquo; → D-SNP check</li>
            <li>&ldquo;Do you have diabetes, heart failure, or any ongoing chronic condition you see a specialist for?&rdquo; → C-SNP check</li>
          </ol>
          <p style={{ marginTop: 'var(--space-3)' }}>If either answer is yes — stop. Pivot. That person&rsquo;s eligibility just changed entirely.</p>
        </CalloutBlock>
      </motion.section>

      {/* ============================================================ */}
      {/* SECTION 3 — KEY TERMS                                        */}
      {/* ============================================================ */}
      <motion.section
        id="key-terms"
        className={styles.section}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={SPRING}
      >
        <p className={styles.sectionLabel}>Section 03</p>
        <h2 className={`display-lg ${styles.sectionTitle}`}>Key Benefit Terms</h2>
        <p className={`body-lg ${styles.sectionIntro}`}>
          These come up on almost every call. Clients ask about them. Agents stumble explaining them. Know these cold — and know the sales angle inside each one.
        </p>

        <div className={styles.termGrid}>
          {keyTerms.map((term) => (
            <motion.div
              key={term.name}
              className={styles.termBlock}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={SPRING}
            >
              <h3 className={styles.termName}>
                {term.name} <span className={styles.termAbbr}>— {term.abbr}</span>
              </h3>
              <p className={styles.termBody} dangerouslySetInnerHTML={{ __html: term.body.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              {term.pitch && (
                <p className={styles.termPitch}>&ldquo;{term.pitch.replace(/^"|"$/g, '')}&rdquo;</p>
              )}
              {term.salesNote && (
                <p className={styles.planNote} style={{ marginTop: 'var(--space-3)' }}>
                  <strong>Sales note:</strong> {term.salesNote}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ============================================================ */}
      {/* SECTION 4 — ENROLLMENT PERIODS                               */}
      {/* ============================================================ */}
      <motion.section
        id="enrollment"
        className={styles.section}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={SPRING}
      >
        <p className={styles.sectionLabel}>Section 04</p>
        <h2 className={`display-lg ${styles.sectionTitle}`}>Enrollment Periods</h2>

        <CalloutBlock type="red">
          <strong>Know these cold.</strong> If you don&rsquo;t know which enrollment window you&rsquo;re in, you can spend 30 minutes on a call and realize you can&rsquo;t enroll the person. That is a wasted call, a frustrated client, and a compliance risk. Ask the qualifying questions <em>early</em> — before you invest the full call.
        </CalloutBlock>

        <div className={styles.periodGrid}>
          {enrollmentPeriods.map((period) => (
            <motion.div
              key={period.abbr}
              className={`${styles.periodCard} glass`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={SPRING}
            >
              <p className={styles.periodAbbr}>{period.abbr}</p>
              <h3 className={styles.periodName}>{period.name}</h3>
              <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                <span className={styles.periodDates}>{period.dates}</span>
                {period.coverage && <span className={styles.periodDates}>{period.coverage}</span>}
              </div>
              <p className={styles.periodBody}>{period.body}</p>
              {period.warning && (
                <div className={styles.periodWarning}>
                  <strong>⚠ Common mistake:</strong> {period.warning}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <h3 className="display-lg" style={{ marginTop: 'var(--space-7)', marginBottom: 'var(--space-4)' }}>
          SEP Qualifying Events
        </h3>
        <p className="body-md" style={{ color: 'var(--ink-60)', marginBottom: 'var(--space-5)', maxWidth: 720 }}>
          Ask about these on every call outside of AEP. Any one of them opens the enrollment window.
        </p>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Qualifying Event</th>
                <th>What It Opens</th>
              </tr>
            </thead>
            <tbody>
              {sepEvents.map((row) => (
                <tr key={row.event}>
                  <td className={styles.rowLabel}>{row.event}</td>
                  <td>{row.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="display-lg" style={{ marginTop: 'var(--space-7)', marginBottom: 'var(--space-4)' }}>
          Quick Enrollment Decision Tree
        </h3>
        <p className="body-md" style={{ color: 'var(--ink-60)', marginBottom: 'var(--space-5)', maxWidth: 720 }}>
          Use this before you go 20 minutes deep into a call.
        </p>
        <div className={styles.decisionTree}>
          {[
            { condition: 'Oct 15 – Dec 7', result: 'AEP — enroll anyone on Medicare.', items: [] },
            { condition: 'Jan 1 – Mar 31', result: 'OEP — but only if they are already on a Medicare Advantage plan.', items: ['If they\'re on Original Medicare → need an SEP event or wait for AEP'] },
            { condition: 'Outside those windows', result: 'SEP — ask:', items: ['"Have you moved recently?"', '"Did you lose employer or union coverage?"', '"Do you receive Medicaid or any state assistance?"', '"Have you been diagnosed with a new condition?"', 'YES to any → SEP applies. Confirm the event. Enroll.', 'NO to all → cannot enroll today. Set AEP callback.'] },
            { condition: 'Turning 65 soon?', result: 'IEP — 7-month window. New-to-Medicare client. Highest impressionability.', items: [] },
          ].map((row, i) => (
            <div key={i} className={styles.treeRow}>
              <p className={styles.treeCondition}>{row.condition}</p>
              <div className={styles.treeResult}>
                <strong>{row.result}</strong>
                {row.items.length > 0 && (
                  <ul className={styles.treeResultList}>
                    {row.items.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ============================================================ */}
      {/* SECTION 5 — ORIGINAL MEDICARE vs MA                          */}
      {/* ============================================================ */}
      <motion.section
        id="comparison"
        className={styles.section}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={SPRING}
      >
        <p className={styles.sectionLabel}>Section 05</p>
        <h2 className={`display-lg ${styles.sectionTitle}`}>Original Medicare vs. Medicare Advantage</h2>
        <p className={`body-lg ${styles.sectionIntro}`}>
          When a client says &ldquo;I&rsquo;ll just stick with Original Medicare&rdquo; — this table is your weapon.
        </p>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Original Medicare (A &amp; B)</th>
                <th>Medicare Advantage (Part C)</th>
              </tr>
            </thead>
            <tbody>
              {originalMaRows.map((row) => (
                <tr key={row.feature}>
                  <td className={styles.rowLabel}>{row.feature}</td>
                  <td>{row.original}</td>
                  <td>{row.ma}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <CalloutBlock type="neutral">
          <strong>Lead with the out-of-pocket cap — it&rsquo;s the most visceral number:</strong>
          <p style={{ marginTop: 'var(--space-3)', fontStyle: 'italic' }}>
            &ldquo;With Original Medicare, there is no ceiling on what you can owe. If something serious happens — a hospitalization, surgery — bills can climb to $50,000, $100,000 with nothing stopping them. Medicare Advantage puts a cap on that. After your maximum, the plan covers everything. Original Medicare doesn&rsquo;t offer that protection.&rdquo;
          </p>
        </CalloutBlock>
      </motion.section>

      {/* ============================================================ */}
      {/* SECTION 6 — REAL MISTAKES                                    */}
      {/* ============================================================ */}
      <motion.section
        id="mistakes"
        className={styles.section}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={SPRING}
      >
        <p className={styles.sectionLabel}>Section 06</p>
        <h2 className={`display-lg ${styles.sectionTitle}`}>Real Mistakes from Real Calls</h2>
        <p className={`body-lg ${styles.sectionIntro}`}>
          These are actual situations from calls in our system. Real enrollments were lost because of basic Medicare knowledge gaps. Each one maps back to a specific Certainty System tool — the one that would have fixed it.
        </p>

        <div className={styles.mistakeList}>
          {mistakes.map((m) => (
            <motion.div
              key={m.num}
              className={styles.mistakeCard}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={SPRING}
            >
              <div className={styles.mistakeHeader}>
                <span className={styles.mistakeNum}>Mistake {m.num}</span>
                <h3 className={styles.mistakeTitle}>{m.title}</h3>
              </div>

              <div>
                <p className={styles.mistakeLabel}>What happened</p>
                <p className={styles.mistakeBody}>{m.what}</p>
              </div>

              <div className={styles.mistakeCost}>
                <strong>The real cost:</strong> {m.cost}
              </div>

              <div>
                <p className={styles.mistakeLabel}>The right move</p>
                <p className={styles.mistakeBody}>{m.fix}</p>
              </div>

              {m.script && (
                <p className={styles.mistakeScript}>&ldquo;{m.script.replace(/^"|"$/g, '')}&rdquo;</p>
              )}

              <div className={styles.mistakeLesson}>
                <strong>The lesson</strong>
                {m.lesson}
              </div>

              <SystemConnections links={m.systemLinks} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ============================================================ */}
      {/* SECTION 7 — SCENARIOS                                        */}
      {/* ============================================================ */}
      <motion.section
        id="scenarios"
        className={styles.section}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={SPRING}
      >
        <p className={styles.sectionLabel}>Section 07</p>
        <h2 className={`display-lg ${styles.sectionTitle}`}>Sales Strategies &amp; Positioning</h2>
        <p className={`body-lg ${styles.sectionIntro}`}>
          Tying it all together. These are the most common situations, exactly what to say, and the Certainty System tool behind each move.
        </p>

        <div className={styles.scenarioList}>
          {scenarios.map((s) => (
            <motion.div
              key={s.letter}
              className={styles.scenarioCard}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={SPRING}
            >
              <p className={styles.scenarioLetter}>Scenario {s.letter}</p>
              <h3 className={styles.scenarioTitle}>{s.title}</h3>
              <p className={styles.scenarioSetup}><strong>Setup:</strong> {s.setup}</p>

              {s.steps && (
                <div className={styles.scenarioSteps}>
                  {s.steps.map((step, i) => (
                    <div key={i} className={styles.scenarioStep}>
                      <span className={styles.stepNum}>{i + 1}</span>
                      <p className={styles.stepBody}>{step}</p>
                    </div>
                  ))}
                </div>
              )}

              {s.script && (
                <p className={styles.scenarioScript}>&ldquo;{s.script.replace(/^"|"$/g, '')}&rdquo;</p>
              )}

              <SystemConnections links={s.systemLinks} />
            </motion.div>
          ))}
        </div>

        {/* Kill phrases */}
        <h3 className="display-lg" style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-2)' }}>
          Phrases That Kill Sales — And What to Say Instead
        </h3>
        <p className="body-md" style={{ color: 'var(--ink-60)', marginBottom: 'var(--space-5)', maxWidth: 720 }}>
          Each phrase maps to the pattern it creates and the pillar that fixes it.
        </p>
        <div className={styles.killList}>
          {killPhrases.map((row, i) => (
            <div key={i} className={styles.killCard}>
              <div className={styles.killRow}>
                <div className={styles.killCol}>
                  <p className={styles.killColLabel}>❌ What kills the call</p>
                  <p className={styles.killPhrase}>{row.kill}</p>
                </div>
                <div className={styles.killDivider} />
                <div className={styles.killCol}>
                  <p className={styles.killColLabel}>✅ What closes it</p>
                  {row.isNever
                    ? <p className={`${styles.killPhrase} ${styles.neverSay}`}>{row.use}</p>
                    : <p className={styles.closePhrase}>{row.use}</p>
                  }
                </div>
              </div>
              <SystemConnections links={row.systemLinks} />
            </div>
          ))}
        </div>
      </motion.section>

      {/* Cross-links */}
      <CrossLinks links={[
        { label: 'Objection Handbook', href: '/objections' },
        { label: 'Math Breakdown', href: '/math-breakdown' },
        { label: 'Nine Failure Patterns', href: '/patterns' },
        { label: 'Close Confirmation', href: '/close-confirmation' },
      ]} />

    </PageShell>
  )
}
