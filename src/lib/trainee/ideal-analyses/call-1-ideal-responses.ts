/**
 * Ideal Form Responses — Call 1: Ashley Whitehurst vs. Gerald Cramer
 *
 * Layer 2 for AI grading: what a perfect trainee would write in each field.
 * The AI compares the trainee's submission directly against this answer key.
 */

export const call1IdealResponses = {
  callType: 'The Misinformed Caller',
  callTypeReasoning:
    'Client called about a grocery benefit he saw on his phone. He is confused about his current plan — was on Geisinger, got switched to another plan without his knowledge. Does not understand what he has or what he is eligible for. This confusion about plan details and benefits is the hallmark of The Misinformed Caller.',

  primarySignal: 'RED',
  signalChange:
    'Stays RED throughout the entire call. Fear intensifies after 4:35 when his scam detection rule surfaces. Never shifts to YELLOW or GREEN — the agent never de-escalates the fear.',
  agentSignalCorrect: 'No',
  agentSignalResponse:
    'The agent consistently responded to RED (fear/distrust) signals with logic — explaining regulations, her license, and the process. She never named the emotion, validated his fear, or pivoted to empathy-based tools. At 8:07, she directly contradicted his fear with "this isn\'t a scam, sir," which is the opposite of what a RED signal requires.',

  clientGold: [
    {
      item: '"The house I built" (3:33)',
      agentUsed: 'Partially — agent said "That\'s amazing" but never leveraged it to build trust about his competence and independence.',
      deployment:
        'Should have been used to build trust: "A man who can build his own house is clearly someone who knows how to make smart decisions. Let\'s make sure this is a smart one for you."',
    },
    {
      item: '"I don\'t really get around that good anymore" (4:20)',
      agentUsed: 'No — agent gave a generic "I understand" and moved on immediately.',
      deployment:
        'Should have been used as an empathy bid: "That\'s completely understandable, Gerald. Please don\'t trouble yourself. You stay right where you are, and I\'ll handle everything from my end."',
    },
    {
      item: '"I get all my pills and my doctors and everything through the VA" (6:27)',
      agentUsed: 'No — agent accepted it as a deflection and let it end the conversation thread.',
      deployment:
        'Should have been reframed: "Many veterans I help use a plan like this specifically because it adds benefits the VA doesn\'t cover, like this grocery card, without messing with their VA benefits at all."',
    },
  ],

  pillarsUsed: [],
  pillarsNote:
    'No pillars were effectively deployed. The agent needed Reframing (Pillar 2) to address the scam fear — reframing her role from "person asking for information" to "protector of his interests." She also needed Persuasion (Pillar 1) to leverage the Client Gold about the house he built.',

  mathAttempted: 'No',
  mathSteps: [],
  mathNote:
    'The call never progressed to a plan presentation. The agent could not get past the verification stage due to the unresolved trust objection.',

  objections:
    `Objection 1 (4:35): "Don't ask me to repeat them back to you... because then I know it's a scam."
Signal: RED (fear). Agent response: "Okay, no problem." INCORRECT — dismissed the fear entirely. Should have validated his caution and named the emotion.

Objection 2 (6:05): "Well, then I better let it go then the way it is."
Signal: RED (distrust). Agent response: Logic about needing to pull him up. INCORRECT — pushed process when trust hadn't been established.

Objection 3 (7:34): "Three times already since January on this phone... I found out it was a scam."
Signal: RED (intense fear). Agent response: "This isn't a scam, sir." INCORRECT — direct contradiction of an emotional statement. Worst possible response. Should have said: "That is terrible, and you are right to be on guard."

Objection 4 (9:12): "I'll better pass on it just to be safe."
Signal: RED (final). Agent response: "You would probably just need to keep what you have." INCORRECT — complete surrender of lead. Should have offered her license number and a callback option.`,

  leadMoment:
    'The agent held the frame through the initial disclosures (0:21–1:17) and moved confidently through the compliance steps. This was her strongest moment of lead.',
  slippageMoment:
    'Lead was lost at 4:35 when the client first mentioned his scam detection rule, and the agent\'s "Okay, no problem" failed to address it. Complete surrender occurred at 9:31 when she told him to "keep what you have."',

  complianceTpmo: true,
  complianceSoa: true,
  complianceEnrollmentVerification: false,

  outcome: 'Missed Opportunity',
  biggestRight:
    'Excellent compliance adherence — the agent delivered all required disclosures (TPMO, recording notice, SOA) clearly and at the correct time. She maintained a professional tone throughout the entire call despite escalating resistance.',
  biggestMiss:
    'Responding to every emotional objection with logic. At 7:34, when the client revealed he had been scammed three times, the agent said "this isn\'t a scam" — a direct contradiction of his fear. She needed to name and validate the fear first, then pivot to trust-building, not process.',

  failurePatterns: [
    'Logic Responses to Emotional Objections',
    'Client Gold Ignored',
  ],

  closersEdge:
    'At 7:34: "Gerald, that is terrible, and I am so sorry that happened to you. You are 100% right to be suspicious of any call you get. Let\'s not move forward until you feel completely safe. What can I do to prove to you that I\'m one of the good guys?"',
}
