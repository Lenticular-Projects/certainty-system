import { NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { call1ExpertAnalysis } from '@/lib/trainee/ideal-analyses/call-1-expert'
import { call1IdealResponses } from '@/lib/trainee/ideal-analyses/call-1-ideal-responses'

const idealAnalyses: Record<string, { expert: string; ideal: Record<string, unknown> }> = {
  'call-1': { expert: call1ExpertAnalysis, ideal: call1IdealResponses },
}

export async function POST(request: Request) {
  try {
    const submission = await request.json()
    const { callId } = submission

    const analysis = idealAnalyses[callId]
    if (!analysis) {
      return NextResponse.json(
        { error: 'Unknown call ID' },
        { status: 400 }
      )
    }

    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Grading service not configured. Please contact your manager.' },
        { status: 503 }
      )
    }

    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' })

    const systemPrompt = `You are grading a trainee's call analysis for a Medicare sales training program called The Certainty System.

You have two reference documents:
1. EXPERT ANALYSIS — the full CallFlow report with deep context: timestamps, coaching notes, root causes, transcript excerpts
2. IDEAL FORM RESPONSES — what a perfect trainee would write in each form field (the answer key)

Your job:
- Compare each section of the trainee's submission to the ideal response
- Use the expert analysis for deeper context when evaluating nuance
- Credit valid observations even if they aren't in the ideal responses (the trainee may catch something extra)
- Be fair but rigorous — this is training for real sales calls

Return ONLY valid JSON (no markdown fences) with this structure:
{
  "passed": boolean,
  "overallScore": number (0-100),
  "summary": "Coaching summary paragraph — name the most significant miss and connect it to a real-world consequence. Example: 'Missing the fear signal means you'd run a math breakdown on a client who needs trust built first — which is exactly what failed on this call.'",
  "focusAreas": [
    "Specific, imperative action item before retrying — e.g. 'Re-read The Misinformed Caller — specifically how fear manifests in the first 90 seconds'",
    "Another specific action item referencing a named concept, content page, or behavior"
  ],
  "sections": [
    {
      "name": "Section Name",
      "score": number,
      "maxScore": number,
      "feedback": "Section feedback written in coaching voice (see instructions below)"
    }
  ]
}

FEEDBACK VOICE INSTRUCTIONS (critical — follow exactly):
- For zero-credit sections: "You said [what trainee said]. The correct answer is [correct answer]. [1-2 sentences explaining the diagnostic: why their answer is wrong, what the actual signal/behavior was, and why it matters.]"
- For partial-credit sections: "You identified [what they got right]. You missed [what they didn't catch] — [brief explanation of the gap]."
- For full-credit sections: "[What they demonstrated correctly.] This is exactly right."

FOCUS AREAS INSTRUCTIONS:
- Only populate focusAreas when passed is false. Return an empty array when passed is true.
- Max 3 items. Each must be a specific, actionable imperative — not vague.
- Reference named content areas where possible (e.g., 'The Misinformed Caller', 'RED signal', 'Enrollment Verification').
- Items should directly address the trainee's specific gaps, not generic advice.

IMPORTANT: The Expert Analysis document includes its own score breakdown for the AGENT's performance (Lead Quality, Signal Reading, etc.). Do NOT use that scoring schema. Use ONLY the 8-section trainee rubric defined below when grading the TRAINEE's submission.

Scoring guide (what earns full credit in each section):

- Call Type identification (15 pts): Full credit for correct call type + reasoning that identifies the specific trigger behavior. Partial (8–12) if call type is right but reasoning is superficial. Zero if call type is wrong.
- Signal Reading (15 pts): Full credit for correct initial signal + correct assessment of whether/when it changed + explanation of agent response quality. Partial if signal is correct but change or response analysis is missing.
- Client Gold (15 pts): Full credit for identifying 2+ pieces with specific quotes/timestamps, assessing whether agent used them, and proposing deployment sentences. Partial for identifying pieces without deployment analysis.
- Pillars & Math Breakdown (10 pts): Full credit for correctly identifying which pillars were used (or none) AND correct Math Breakdown assessment with steps. Partial if one component is correct.
- Objections (15 pts): Full credit for catching the key objections with signal labels and assessing agent response correctness. Partial for catching objections but missing signal or assessment.
- Lead & Authority Frame (10 pts): Full credit for citing a specific moment of lead AND a specific moment of slippage. Partial for identifying one but not the other.
- Compliance (5 pts): Full credit for correct boolean assessment of all 3 compliance items (TPMO, SOA, Enrollment Verification). Partial for getting 2 of 3 correct.
- Overall Assessment (15 pts): Full credit for correct outcome + accurate biggest right/miss + correct failure patterns + a meaningful Closer's Edge sentence. Partial for getting some but not all.

Timestamp tolerance: If trainee cites an event at a slightly different timestamp than the ideal (e.g., "around 4:30" vs "4:35"), give full credit if the event description is correct. Don't penalize for approximate timing.

The trainee's objections field is structured as an array of objects (quote, timestamp, signal, agentResponse, correct, correction). Evaluate each objection record individually.

Pass threshold: 65/100 AND must get Call Type and Primary Signal correct.

CRITICAL CONSTRAINT: Every section's "score" value MUST be between 0 and its "maxScore". Do not return a score that exceeds maxScore under any circumstances.`

    const userPrompt = `## EXPERT ANALYSIS (Layer 1 — Deep Context)

${analysis.expert}

## IDEAL FORM RESPONSES (Layer 2 — Answer Key)

${JSON.stringify(analysis.ideal, null, 2)}

## TRAINEE'S SUBMISSION

${JSON.stringify(submission, null, 2)}

Grade this submission. Return only valid JSON.`

    const result = await model.generateContent([
      { text: systemPrompt },
      { text: userPrompt },
    ])

    const responseText = result.response.text()

    // Strip markdown fences if present
    const cleaned = responseText
      .replace(/^```json\s*/i, '')
      .replace(/^```\s*/i, '')
      .replace(/\s*```$/i, '')
      .trim()

    const clampScores = (result: Record<string, unknown>) => {
      if (typeof result.overallScore === 'number') {
        result.overallScore = Math.max(0, Math.min(100, result.overallScore))
      }
      if (Array.isArray(result.sections)) {
        result.sections = result.sections.map(
          (s: { score: number; maxScore: number; [key: string]: unknown }) => ({
            ...s,
            score: Math.max(0, Math.min(s.score ?? 0, s.maxScore ?? 0)),
          })
        )
      }
      return result
    }

    const computePassed = (result: Record<string, unknown>) => {
      const callTypeSection = Array.isArray(result.sections)
        ? (result.sections as Array<{ name: string; score: number; maxScore: number }>).find(
            (s) => s.name.toLowerCase().includes('call type')
          )
        : undefined
      const signalSection = Array.isArray(result.sections)
        ? (result.sections as Array<{ name: string; score: number; maxScore: number }>).find(
            (s) => s.name.toLowerCase().includes('signal')
          )
        : undefined
      const callTypeCorrect = callTypeSection
        ? callTypeSection.score / callTypeSection.maxScore >= 0.7
        : false
      const signalCorrect = signalSection
        ? signalSection.score / signalSection.maxScore >= 0.7
        : false
      result.passed =
        typeof result.overallScore === 'number' &&
        result.overallScore >= 65 &&
        callTypeCorrect &&
        signalCorrect
      return result
    }

    let gradingResult
    try {
      gradingResult = computePassed(clampScores(JSON.parse(cleaned)))
    } catch (_err) {
      // Retry once if JSON parsing fails
      const retryResult = await model.generateContent([
        { text: systemPrompt },
        { text: userPrompt + '\n\nIMPORTANT: Your previous response was not valid JSON. Return ONLY the JSON object, no markdown fences or extra text.' },
      ])
      const retryText = retryResult.response.text()
        .replace(/^```json\s*/i, '')
        .replace(/^```\s*/i, '')
        .replace(/\s*```$/i, '')
        .trim()

      try {
        gradingResult = computePassed(clampScores(JSON.parse(retryText)))
      } catch (_err) {
        return NextResponse.json(
          { error: 'Grading failed — please try again.', passed: false },
          { status: 500 }
        )
      }
    }

    return NextResponse.json(gradingResult)
  } catch (error) {
    console.error('Analysis submit error:', error)
    return NextResponse.json(
      { error: 'An error occurred during grading. Please try again.', passed: false },
      { status: 500 }
    )
  }
}
