'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import WaveSurfer from 'wavesurfer.js'
import { listeningBriefing } from '@/lib/trainee/listening-briefing'
import type { CallRubric } from '@/lib/trainee/analysis-rubric'
import styles from './CallAnalysisForm.module.css'

/* ── Reference Data (matches site terminology) ── */

const CALL_TYPES = [
  'Select a call type...',
  'The Money Caller',
  'The Scared Switcher',
  'The Misinformed Caller',
  'Third Party Controlled',
  'The Detail Staller',
  'The Time Bomb',
  'Commercial Myth Caller',
  'The Veteran',
  'The Timing Objector',
]

const CALL_TYPE_SLUGS: Record<string, string> = {
  'The Money Caller': 'money-caller',
  'The Scared Switcher': 'scared-switcher',
  'The Misinformed Caller': 'misinformed',
  'Third Party Controlled': 'third-party-controlled',
  'The Detail Staller': 'detail-staller',
  'The Time Bomb': 'time-bomb',
  'Commercial Myth Caller': 'commercial-myth-caller',
  'The Veteran': 'veteran',
  'The Timing Objector': 'timing-objector',
}

const PILLARS = ['Persuasion', 'Reframing', 'The Shift', 'Refocusing']

const PILLAR_SLUGS: Record<string, string> = {
  Persuasion: 'persuasion',
  Reframing: 'reframing',
  'The Shift': 'the-shift',
  Refocusing: 'refocusing',
}

const FAILURE_PATTERNS = [
  'Client Gold Ignored',
  'Incomplete Math Breakdown',
  'Logic Responses to Emotional Objections',
  'Permission-Seeking Language',
  'System Navigation Dead Air',
  'Rapport Without an Off-Switch',
  'The Third Party Blind Spot',
  'Accepting Misinformation as Truth',
  'The Hollow Yes',
]

const PATTERN_SLUGS: Record<string, string> = {
  'Client Gold Ignored': 'client-gold-ignored',
  'Incomplete Math Breakdown': 'incomplete-math-breakdown',
  'Logic Responses to Emotional Objections': 'logic-responses',
  'Permission-Seeking Language': 'permission-seeking-language',
  'System Navigation Dead Air': 'system-navigation-dead-air',
  'Rapport Without an Off-Switch': 'rapport-without-off-switch',
  'The Third Party Blind Spot': 'third-party-blind-spot',
  'Accepting Misinformation as Truth': 'accepting-misinformation',
  'The Hollow Yes': 'hollow-yes',
}

const OUTCOMES = [
  'Select outcome...',
  'Enrolled',
  'Missed Opportunity',
  'Correct No-Sale',
  'Unclosable',
]

const SPEED_OPTIONS = [1, 1.25, 1.5]

/* ── Section Study Links (for results feedback) ── */

const SECTION_STUDY_LINKS: Array<{ match: string; label: string; href: string }> = [
  { match: 'call type', label: 'Call Types', href: '/call-types' },
  { match: 'misinformed', label: 'The Misinformed Caller', href: '/call-types/misinformed' },
  { match: 'scared', label: 'The Scared Switcher', href: '/call-types/scared-switcher' },
  { match: 'signal', label: 'Signals', href: '/signals' },
  { match: 'client gold', label: 'Human Layer', href: '/human-layer' },
  { match: 'pillar', label: 'Pillars', href: '/pillars' },
  { match: 'math', label: 'Math Breakdown', href: '/math-breakdown' },
  { match: 'objection', label: 'Objections', href: '/objections' },
  { match: 'compliance', label: 'How Calls Are Graded', href: '/how-calls-are-graded' },
  { match: 'enrollment', label: 'How Calls Are Graded', href: '/how-calls-are-graded' },
]

function findStudyLinks(text: string): Array<{ label: string; href: string }> {
  const lower = text.toLowerCase()
  const seen = new Set<string>()
  const matches: Array<{ label: string; href: string }> = []
  for (const entry of SECTION_STUDY_LINKS) {
    if (lower.includes(entry.match) && !seen.has(entry.href)) {
      seen.add(entry.href)
      matches.push({ label: entry.label, href: entry.href })
    }
  }
  return matches
}

/* ── Hub Link Component ── */

function HubLink({ href, label }: { href: string; label?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.hubLink}
      title={label ? `View ${label} in Knowledge Hub` : 'Open in Knowledge Hub'}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 1H2a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1V7" />
        <path d="M7 1h4v4" />
        <path d="M5 7L11 1" />
      </svg>
    </a>
  )
}

/* ── Main Form Component ── */

interface Objection {
  quote: string
  timestamp: string
  signal: string
  agentResponse: string
  correct: string
  correction: string
}

interface Props {
  callId: string
  rubric: CallRubric
}

export default function CallAnalysisForm({ callId, rubric }: Props) {
  // Audio state
  const waveformRef = useRef<HTMLDivElement>(null)
  const wavesurferRef = useRef<WaveSurfer | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [speedIndex, setSpeedIndex] = useState(0)

  // Briefing state
  const [briefingOpen, setBriefingOpen] = useState(true)

  // Section 1: Call Identification
  const [callType, setCallType] = useState('')
  const [callTypeReasoning, setCallTypeReasoning] = useState('')
  const [primarySignal, setPrimarySignal] = useState('')

  // Section 2: Signal Reading
  const [signalChange, setSignalChange] = useState('')
  const [agentSignalCorrect, setAgentSignalCorrect] = useState('')
  const [agentSignalResponse, setAgentSignalResponse] = useState('')

  // Section 3: Client Gold
  const [clientGold1, setClientGold1] = useState('')
  const [clientGold1Used, setClientGold1Used] = useState('')
  const [clientGold1Deploy, setClientGold1Deploy] = useState('')
  const [clientGold2, setClientGold2] = useState('')
  const [clientGold2Used, setClientGold2Used] = useState('')
  const [clientGold2Deploy, setClientGold2Deploy] = useState('')
  const [clientGold3, setClientGold3] = useState('')
  const [clientGold3Used, setClientGold3Used] = useState('')
  const [clientGold3Deploy, setClientGold3Deploy] = useState('')

  // Section 4: Pillars & Math Breakdown
  const [pillarsUsed, setPillarsUsed] = useState<string[]>([])
  const [mathAttempted, setMathAttempted] = useState('')
  const [mathSteps, setMathSteps] = useState<string[]>([])

  // Section 5: Objections
  const [objections, setObjections] = useState<Objection[]>([
    { quote: '', timestamp: '', signal: '', agentResponse: '', correct: '', correction: '' },
  ])

  // Section 6: Lead & Authority Frame
  const [leadMoment, setLeadMoment] = useState('')
  const [slippageMoment, setSlippageMoment] = useState('')

  // Section 7: Compliance Checklist
  const [complianceTpmo, setComplianceTpmo] = useState(false)
  const [complianceSoa, setComplianceSoa] = useState(false)
  const [complianceEnrollmentVerification, setComplianceEnrollmentVerification] = useState(false)

  // Section 8: Overall Assessment
  const [outcome, setOutcome] = useState('')
  const [biggestRight, setBiggestRight] = useState('')
  const [biggestMiss, setBiggestMiss] = useState('')
  const [patterns, setPatterns] = useState<string[]>([])
  const [closersEdge, setClosersEdge] = useState('')

  // Submission state
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState<Record<string, unknown> | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Initialize WaveSurfer
  useEffect(() => {
    if (!waveformRef.current) return

    const ws = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: '#c8c4bd',
      progressColor: '#2D5A3D',
      cursorColor: '#1a1a1a',
      cursorWidth: 1,
      barWidth: 2,
      barGap: 2,
      barRadius: 2,
      height: 48,
      normalize: true,
      url: rubric.audioPath,
    })

    ws.on('ready', () => setDuration(ws.getDuration()))
    ws.on('timeupdate', (time) => setCurrentTime(time))
    ws.on('play', () => setIsPlaying(true))
    ws.on('pause', () => setIsPlaying(false))
    ws.on('finish', () => setIsPlaying(false))

    wavesurferRef.current = ws
    return () => { ws.destroy() }
  }, [rubric.audioPath])

  const togglePlay = useCallback(() => {
    wavesurferRef.current?.playPause()
  }, [])

  const rewind15 = useCallback(() => {
    const ws = wavesurferRef.current
    if (!ws) return
    const newTime = Math.max(0, ws.getCurrentTime() - 15)
    ws.seekTo(newTime / ws.getDuration())
  }, [])

  const cycleSpeed = useCallback(() => {
    setSpeedIndex((prev) => {
      const next = (prev + 1) % SPEED_OPTIONS.length
      wavesurferRef.current?.setPlaybackRate(SPEED_OPTIONS[next])
      return next
    })
  }, [])

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
    const s = Math.floor(seconds % 60)
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  const togglePillar = (p: string) => {
    setPillarsUsed((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    )
  }

  const toggleMathStep = (step: string) => {
    setMathSteps((prev) =>
      prev.includes(step) ? prev.filter((x) => x !== step) : [...prev, step]
    )
  }

  const togglePattern = (p: string) => {
    setPatterns((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    )
  }

  const updateObjection = (index: number, field: string, value: string) => {
    setObjections((prev) =>
      prev.map((obj, i) => (i === index ? { ...obj, [field]: value } : obj))
    )
  }

  const addObjection = () => {
    if (objections.length < 4) {
      setObjections((prev) => [
        ...prev,
        { quote: '', timestamp: '', signal: '', agentResponse: '', correct: '', correction: '' },
      ])
    }
  }

  const removeObjection = (index: number) => {
    setObjections((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setResult(null)

    const newErrors: Record<string, string> = {}
    if (!callType) newErrors.callType = 'Select a call type'
    if (!primarySignal) newErrors.primarySignal = 'Select a signal'
    if (!outcome) newErrors.outcome = 'Select an outcome'
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setSubmitting(false)
      return
    }
    setErrors({})

    const submission = {
      callId,
      callType,
      callTypeReasoning,
      primarySignal,
      signalChange,
      agentSignalCorrect,
      agentSignalResponse,
      clientGold: [
        { item: clientGold1, agentUsed: clientGold1Used, deployment: clientGold1Deploy },
        { item: clientGold2, agentUsed: clientGold2Used, deployment: clientGold2Deploy },
        { item: clientGold3, agentUsed: clientGold3Used, deployment: clientGold3Deploy },
      ],
      pillarsUsed,
      mathAttempted,
      mathSteps,
      objections,
      leadMoment,
      slippageMoment,
      complianceTpmo,
      complianceSoa,
      complianceEnrollmentVerification,
      outcome,
      biggestRight,
      biggestMiss,
      patterns,
      closersEdge,
    }

    try {
      const res = await fetch('/api/analysis/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submission),
      })

      const data = await res.json()
      setResult(data)
    } catch (_err) {
      setResult({ error: 'Failed to submit. Please try again.' })
    } finally {
      setSubmitting(false)
    }
  }

  const handleRetry = () => {
    setResult(null)
  }

  return (
    <div className={styles.page}>
      {/* ── Zone 1: Sticky Audio Bar ── */}
      <div className={styles.audioBar}>
        <div className={styles.audioBarInner}>
          <div className={styles.audioBarHeader}>
            <span className={styles.callTitle}>
              {rubric.title}
            </span>
            <span className={styles.callDuration}>{rubric.duration}</span>
          </div>

          <div ref={waveformRef} className={styles.waveformContainer} />

          <div className={styles.audioControls}>
            <button
              className={`${styles.controlBtn} ${styles.playBtn}`}
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <rect x="3" y="2" width="4" height="12" rx="1" />
                  <rect x="9" y="2" width="4" height="12" rx="1" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M4 2.5v11l9-5.5z" />
                </svg>
              )}
            </button>

            <button
              className={`${styles.controlBtn} ${styles.rewindBtn}`}
              onClick={rewind15}
              aria-label="Rewind 15 seconds"
            >
              -15s
            </button>

            <span className={styles.timeDisplay}>
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>

            <span className={styles.controlSpacer} />

            <button className={styles.speedBtn} onClick={cycleSpeed}>
              {SPEED_OPTIONS[speedIndex]}x
            </button>
          </div>
        </div>
      </div>

      {/* ── Zone 2: Listening Briefing ── */}
      <section className={styles.briefingSection}>
        <button
          className={styles.briefingToggle}
          onClick={() => setBriefingOpen(!briefingOpen)}
        >
          <h2 className={styles.briefingTitle}>{listeningBriefing.title}</h2>
          <span
            className={`${styles.briefingChevron} ${briefingOpen ? styles.briefingChevronOpen : ''}`}
          >
            &#9662;
          </span>
        </button>

        <div
          className={`${styles.briefingContent} ${briefingOpen ? styles.briefingContentOpen : styles.briefingContentClosed}`}
        >
          <p className={styles.briefingIntro}>{listeningBriefing.intro}</p>
          <ul className={styles.briefingList}>
            {listeningBriefing.instructions.map((item, i) => (
              <li key={i} className={styles.briefingItem}>
                <div className={styles.briefingItemLabel}>{item.label}</div>
                <div className={styles.briefingItemDetail}>{item.detail}</div>
              </li>
            ))}
          </ul>
          <p className={styles.briefingClosing}>{listeningBriefing.closing}</p>
        </div>
      </section>

      <div className={styles.divider}>
        <div className={styles.dividerLine} />
      </div>

      {/* ── Results Display ── */}
      {result && (
        <div className={styles.resultSection}>
          {(result as { passed?: boolean }).passed ? (
            <div className={styles.resultPass}>
              <h3>Passed</h3>
              {(result as { overallScore?: number }).overallScore != null && (
                <div className={styles.overallScore}>{(result as { overallScore: number }).overallScore} / 100</div>
              )}
              <p>{(result as { summary?: string }).summary ?? 'Great analysis. You identified the key elements of this call.'}</p>
            </div>
          ) : (result as { error?: string }).error ? (
            <div className={styles.resultFail}>
              <h3>Error</h3>
              <p>{(result as { error: string }).error}</p>
              <button className={styles.retryBtn} onClick={handleRetry}>Try Again</button>
            </div>
          ) : (
            <div className={styles.resultFail}>
              <h3>Not Yet</h3>
              {(result as { overallScore?: number }).overallScore != null && (
                <div className={styles.overallScore}>{(result as { overallScore: number }).overallScore} / 100</div>
              )}
              <p>{(result as { summary?: string }).summary ?? 'Review the feedback below and try again.'}</p>
              <button className={styles.retryBtn} onClick={handleRetry}>Try Again</button>
            </div>
          )}

          {/* ── Before You Retry block ── */}
          {!(result as { passed?: boolean }).passed &&
            !(result as { error?: string }).error &&
            Array.isArray((result as { focusAreas?: string[] }).focusAreas) &&
            ((result as { focusAreas: string[] }).focusAreas).length > 0 && (
            <div className={styles.focusBlock}>
              <div className={styles.focusBlockTitle}>Before You Retry</div>
              <ul className={styles.focusBlockList}>
                {((result as { focusAreas: string[] }).focusAreas).map((item, i) => {
                  const links = findStudyLinks(item)
                  return (
                    <li key={i} className={styles.focusBlockItem}>
                      <span>{item}</span>
                      {links.map((link, j) => (
                        <span key={j} className={styles.sectionStudyLink}>
                          <HubLink href={link.href} label={link.label} />
                          <span>{link.label}</span>
                        </span>
                      ))}
                    </li>
                  )
                })}
              </ul>
            </div>
          )}

          {/* ── SEP Signal Flag (informational) ── */}
          {(result as { sep_flag?: { signals: Array<{ type: string; sep_code: string; caller_quote: string; timestamp: string; recommended_follow_up: string }>; no_sale_concern?: string; summary: string } }).sep_flag && (() => {
            const flag = (result as { sep_flag: { signals: Array<{ type: string; sep_code: string; caller_quote: string; timestamp: string; recommended_follow_up: string }>; no_sale_concern?: string; summary: string } }).sep_flag
            return (
              <div className={styles.sepFlagBlock}>
                <div className={styles.sepFlagHeader}>
                  <span className={styles.sepFlagIcon}>&#9888;</span>
                  <span className={styles.sepFlagTitle}>SEP Signal — Review Recommended</span>
                  <HubLink href="/sep-check" label="SEP Check" />
                </div>
                <p className={styles.sepFlagSummary}>{flag.summary}</p>
                {flag.signals.map((sig, i) => (
                  <div key={i} className={styles.sepFlagSignal}>
                    <div className={styles.sepFlagSignalHeader}>
                      <span className={styles.sepFlagSignalType}>{sig.type}</span>
                      <span className={styles.sepFlagSignalCode}>{sig.sep_code}</span>
                    </div>
                    <p className={styles.sepFlagQuote}>
                      &ldquo;{sig.caller_quote}&rdquo; <span className={styles.sepFlagTimestamp}>({sig.timestamp})</span>
                    </p>
                    <p className={styles.sepFlagFollowUp}>Agent should have asked: {sig.recommended_follow_up}</p>
                  </div>
                ))}
                {flag.no_sale_concern && (
                  <p className={styles.sepFlagConcern}>
                    <strong>Note:</strong> This call ended without enrollment. {flag.no_sale_concern}
                  </p>
                )}
              </div>
            )
          })()}

          {(result as { sections?: Array<{ name: string; score: number; maxScore: number; feedback: string }> }).sections && (
            <div className={styles.resultSections}>
              {((result as { sections: Array<{ name: string; score: number; maxScore: number; feedback: string }> }).sections).map((section, i) => {
                const ratio = section.maxScore > 0 ? section.score / section.maxScore : 0
                const isZero = section.score === 0
                const isWeak = ratio < 0.7
                const scoreStyle = ratio >= 0.7
                  ? {}
                  : ratio >= 0.4
                    ? { color: '#92400e', background: 'rgba(251, 191, 36, 0.15)' }
                    : { color: '#B84420', background: 'rgba(224, 92, 52, 0.1)' }
                const feedbackStyle = isZero
                  ? { color: 'rgba(19,17,16,0.7)' }
                  : ratio >= 1
                    ? { color: 'rgba(19,17,16,0.4)' }
                    : undefined
                const sectionStudyLinks = isWeak ? findStudyLinks(section.name.toLowerCase()) : []
                return (
                  <div key={i} className={styles.resultSectionItem}>
                    <div className={styles.resultSectionHeader}>
                      <span className={styles.resultSectionName}>
                        {section.name}
                        {sectionStudyLinks.map((link, j) => (
                          <span key={j} className={styles.sectionStudyLink}>
                            <HubLink href={link.href} label={link.label} />
                            <span>Review</span>
                          </span>
                        ))}
                      </span>
                      <span
                        className={styles.resultSectionScore}
                        style={isZero ? { ...scoreStyle, fontWeight: 700, fontSize: '0.8125rem' } : scoreStyle}
                      >
                        {section.score}/{section.maxScore}
                      </span>
                    </div>
                    <p className={styles.resultSectionFeedback} style={feedbackStyle}>{section.feedback}</p>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      )}

      {/* ── Zone 3: Analysis Form ── */}
      {!result && (
        <form className={styles.formSection} onSubmit={handleSubmit}>
          <h2 className={styles.formTitle}>Call Analysis</h2>

          {/* Section 1: Call Identification */}
          <div className={styles.formGroup}>
            <div className={styles.formGroupHeader}>
              <span className={styles.formGroupNumber}>Section 1</span>
              <span className={styles.formGroupTitle}>
                Call Identification
                <HubLink href="/call-types" label="Call Types" />
              </span>
            </div>
            <p className={styles.formGroupHint}>Usually clear within the first 2 minutes</p>

            <div className={styles.fieldRow}>
              <label className={styles.fieldLabel}>
                What type of call is this?
                {callType && CALL_TYPE_SLUGS[callType] && (
                  <HubLink href={`/call-types/${CALL_TYPE_SLUGS[callType]}`} label={callType} />
                )}
              </label>
              <select
                className={styles.selectField}
                value={callType}
                onChange={(e) => setCallType(e.target.value)}
              >
                {CALL_TYPES.map((ct) => (
                  <option key={ct} value={ct === CALL_TYPES[0] ? '' : ct}>
                    {ct}
                  </option>
                ))}
              </select>
              {errors.callType && <p style={{ color: '#B84420', fontSize: 13, marginTop: 4 }}>{errors.callType}</p>}
            </div>

            <div className={styles.fieldRow}>
              <label className={styles.fieldLabel}>
                Why? <span className={styles.fieldSublabel}>2-3 sentences explaining what you heard</span>
              </label>
              <textarea
                className={styles.textField}
                value={callTypeReasoning}
                onChange={(e) => setCallTypeReasoning(e.target.value)}
                placeholder="What did the client say or do in the first two minutes that told you this?"
              />
            </div>

            <div className={styles.fieldRow}>
              <label className={styles.fieldLabel}>
                Primary signal at the start of the call
                <HubLink href="/signals" label="Signals" />
              </label>
              <div className={styles.radioGroup}>
                {['RED', 'YELLOW', 'GREEN'].map((sig) => (
                  <label key={sig} className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="primarySignal"
                      value={sig}
                      checked={primarySignal === sig}
                      onChange={(e) => setPrimarySignal(e.target.value)}
                    />
                    {sig}
                  </label>
                ))}
              </div>
              {errors.primarySignal && <p style={{ color: '#B84420', fontSize: 13, marginTop: 4 }}>{errors.primarySignal}</p>}
            </div>
          </div>

          {/* Section 2: Signal Reading */}
          <div className={styles.formGroup}>
            <div className={styles.formGroupHeader}>
              <span className={styles.formGroupNumber}>Section 2</span>
              <span className={styles.formGroupTitle}>
                Signal Reading
                <HubLink href="/signals" label="Signals" />
              </span>
            </div>
            <p className={styles.formGroupHint}>Update as you listen</p>

            <div className={styles.fieldRow}>
              <label className={styles.fieldLabel}>
                Did the signal change? If so, when and to what?
              </label>
              <textarea
                className={styles.textField}
                value={signalChange}
                onChange={(e) => setSignalChange(e.target.value)}
                placeholder="e.g., RED → GREEN around minute 6 after the reframe on cost"
              />
            </div>

            <div className={styles.fieldRow}>
              <label className={styles.fieldLabel}>
                Did the agent respond correctly to the signal?
              </label>
              <div className={styles.radioGroup}>
                {['Yes', 'No'].map((opt) => (
                  <label key={opt} className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="agentSignalCorrect"
                      value={opt}
                      checked={agentSignalCorrect === opt}
                      onChange={(e) => setAgentSignalCorrect(e.target.value)}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            <div className={styles.fieldRow}>
              <label className={styles.fieldLabel}>
                Explain their response <span className={styles.fieldSublabel}>What did they do when they read the signal?</span>
              </label>
              <textarea
                className={styles.textField}
                value={agentSignalResponse}
                onChange={(e) => setAgentSignalResponse(e.target.value)}
                placeholder="How did the agent adjust (or fail to adjust) based on what the client was showing?"
              />
            </div>
          </div>

          {/* Section 3: Client Gold */}
          <div className={styles.formGroup}>
            <div className={styles.formGroupHeader}>
              <span className={styles.formGroupNumber}>Section 3</span>
              <span className={styles.formGroupTitle}>
                Client Gold
                <HubLink href="/human-layer" label="Human Layer" />
              </span>
            </div>
            <p className={styles.formGroupHint}>
              Identify at least 2 emotionally significant admissions from the client
            </p>

            <div className={styles.clientGoldBlock}>
              <div className={styles.fieldRow}>
                <label className={styles.fieldLabel}>Client Gold #1</label>
                <textarea
                  className={styles.textField}
                  value={clientGold1}
                  onChange={(e) => setClientGold1(e.target.value)}
                  placeholder='e.g., "The house I built" (3:33)'
                />
              </div>
              <div className={styles.fieldRow}>
                <label className={styles.fieldLabel}>
                  Did the agent use it? <span className={styles.fieldSublabel}>How?</span>
                </label>
                <textarea
                  className={styles.textField}
                  value={clientGold1Used}
                  onChange={(e) => setClientGold1Used(e.target.value)}
                  placeholder="Yes/No — describe what the agent did or should have done"
                  style={{ minHeight: 60 }}
                />
              </div>
              <div className={styles.fieldRow}>
                <label className={styles.fieldLabel}>
                  Where should it have been deployed?
                </label>
                <textarea
                  className={styles.textField}
                  value={clientGold1Deploy}
                  onChange={(e) => setClientGold1Deploy(e.target.value)}
                  placeholder="What sentence could the agent have said using this Client Gold?"
                  style={{ minHeight: 60 }}
                />
              </div>
            </div>

            <div className={styles.clientGoldBlock}>
              <div className={styles.fieldRow}>
                <label className={styles.fieldLabel}>Client Gold #2</label>
                <textarea
                  className={styles.textField}
                  value={clientGold2}
                  onChange={(e) => setClientGold2(e.target.value)}
                  placeholder={'e.g., "I don\'t really get around that good anymore" (4:20)'}
                />
              </div>
              <div className={styles.fieldRow}>
                <label className={styles.fieldLabel}>
                  Did the agent use it? <span className={styles.fieldSublabel}>How?</span>
                </label>
                <textarea
                  className={styles.textField}
                  value={clientGold2Used}
                  onChange={(e) => setClientGold2Used(e.target.value)}
                  placeholder="Yes/No — describe what the agent did or should have done"
                  style={{ minHeight: 60 }}
                />
              </div>
              <div className={styles.fieldRow}>
                <label className={styles.fieldLabel}>
                  Where should it have been deployed?
                </label>
                <textarea
                  className={styles.textField}
                  value={clientGold2Deploy}
                  onChange={(e) => setClientGold2Deploy(e.target.value)}
                  placeholder="What sentence could the agent have said using this Client Gold?"
                  style={{ minHeight: 60 }}
                />
              </div>
            </div>

            <div className={styles.clientGoldBlock}>
              <div className={styles.fieldRow}>
                <label className={styles.fieldLabel}>Client Gold #3</label>
                <textarea
                  className={styles.textField}
                  value={clientGold3}
                  onChange={(e) => setClientGold3(e.target.value)}
                  placeholder="e.g., another emotionally significant admission from the client"
                />
              </div>
              <div className={styles.fieldRow}>
                <label className={styles.fieldLabel}>
                  Did the agent use it? <span className={styles.fieldSublabel}>How?</span>
                </label>
                <textarea
                  className={styles.textField}
                  value={clientGold3Used}
                  onChange={(e) => setClientGold3Used(e.target.value)}
                  placeholder="Yes/No — describe what the agent did or should have done"
                  style={{ minHeight: 60 }}
                />
              </div>
              <div className={styles.fieldRow}>
                <label className={styles.fieldLabel}>
                  Where should it have been deployed?
                </label>
                <textarea
                  className={styles.textField}
                  value={clientGold3Deploy}
                  onChange={(e) => setClientGold3Deploy(e.target.value)}
                  placeholder="What sentence could the agent have said using this Client Gold?"
                  style={{ minHeight: 60 }}
                />
              </div>
            </div>
          </div>

          {/* Section 4: Pillars & Math Breakdown */}
          <div className={styles.formGroup}>
            <div className={styles.formGroupHeader}>
              <span className={styles.formGroupNumber}>Section 4</span>
              <span className={styles.formGroupTitle}>Pillars & Math Breakdown</span>
            </div>
            <p className={styles.formGroupHint}>Fill in as you hear them</p>

            <div className={styles.fieldRow}>
              <label className={styles.fieldLabel}>
                Which pillar(s) did the agent use?
              </label>
              <div className={styles.checkboxGroup}>
                {PILLARS.map((p) => (
                  <label
                    key={p}
                    className={`${styles.checkboxLabel} ${pillarsUsed.includes(p) ? styles.checkboxLabelChecked : ''}`}
                  >
                    <input
                      type="checkbox"
                      checked={pillarsUsed.includes(p)}
                      onChange={() => togglePillar(p)}
                    />
                    {p}
                    <HubLink href={`/pillars/${PILLAR_SLUGS[p]}`} label={p} />
                  </label>
                ))}
              </div>
            </div>

            <div className={styles.fieldRow}>
              <label className={styles.fieldLabel}>
                Math Breakdown attempted?
                <HubLink href="/math-breakdown" label="Math Breakdown" />
              </label>
              <div className={styles.radioGroup}>
                {['Yes', 'No'].map((opt) => (
                  <label key={opt} className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="mathAttempted"
                      value={opt}
                      checked={mathAttempted === opt}
                      onChange={(e) => {
                        setMathAttempted(e.target.value)
                        if (e.target.value === 'No') setMathSteps([])
                      }}
                    />
                    {opt}
                  </label>
                ))}
              </div>

              {mathAttempted === 'Yes' && (
                <div className={styles.mathSteps}>
                  <div className={styles.mathStepsLabel}>Steps completed:</div>
                  <div className={styles.checkboxGroup}>
                    {['Step 1: Comparison', 'Step 2: Annualized', 'Step 3: Humanized'].map((step) => (
                      <label
                        key={step}
                        className={`${styles.checkboxLabel} ${mathSteps.includes(step) ? styles.checkboxLabelChecked : ''}`}
                      >
                        <input
                          type="checkbox"
                          checked={mathSteps.includes(step)}
                          onChange={() => toggleMathStep(step)}
                        />
                        {step}
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Section 5: Objections */}
          <div className={styles.formGroup}>
            <div className={styles.formGroupHeader}>
              <span className={styles.formGroupNumber}>Section 5</span>
              <span className={styles.formGroupTitle}>
                Objections
                <HubLink href="/objections" label="Objections" />
              </span>
            </div>
            <p className={styles.formGroupHint}>Capture each one as it happens</p>

            {objections.map((obj, index) => (
              <div key={index} className={styles.clientGoldBlock}>
                <div className={styles.fieldRow}>
                  <label className={styles.fieldLabel}>
                    Objection {index + 1}
                    {objections.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeObjection(index)}
                        style={{ marginLeft: 8, fontSize: 12, color: '#B84420', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                      >
                        Remove
                      </button>
                    )}
                  </label>
                  <textarea
                    className={styles.textField}
                    value={obj.quote}
                    onChange={(e) => updateObjection(index, 'quote', e.target.value)}
                    placeholder={`Quote: "I don't want to change my plan"`}
                    style={{ minHeight: 60 }}
                  />
                </div>
                <div className={styles.fieldRow}>
                  <label className={styles.fieldLabel}>Timestamp</label>
                  <input
                    type="text"
                    className={styles.selectField}
                    value={obj.timestamp}
                    onChange={(e) => updateObjection(index, 'timestamp', e.target.value)}
                    placeholder="e.g. 4:35"
                    style={{ maxWidth: 120 }}
                  />
                </div>
                <div className={styles.fieldRow}>
                  <label className={styles.fieldLabel}>Signal at this moment</label>
                  <div className={styles.radioGroup}>
                    {['RED', 'YELLOW', 'GREEN'].map((sig) => (
                      <label key={sig} className={styles.radioLabel}>
                        <input
                          type="radio"
                          name={`objection-signal-${index}`}
                          value={sig}
                          checked={obj.signal === sig}
                          onChange={(e) => updateObjection(index, 'signal', e.target.value)}
                        />
                        {sig}
                      </label>
                    ))}
                  </div>
                </div>
                <div className={styles.fieldRow}>
                  <label className={styles.fieldLabel}>
                    How did the agent respond?
                  </label>
                  <textarea
                    className={styles.textField}
                    value={obj.agentResponse}
                    onChange={(e) => updateObjection(index, 'agentResponse', e.target.value)}
                    placeholder="Describe what the agent said or did"
                    style={{ minHeight: 60 }}
                  />
                </div>
                <div className={styles.fieldRow}>
                  <label className={styles.fieldLabel}>Was the response correct?</label>
                  <div className={styles.radioGroup}>
                    {['Yes', 'No'].map((opt) => (
                      <label key={opt} className={styles.radioLabel}>
                        <input
                          type="radio"
                          name={`objection-correct-${index}`}
                          value={opt}
                          checked={obj.correct === opt}
                          onChange={(e) => updateObjection(index, 'correct', e.target.value)}
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>
                {obj.correct === 'No' && (
                  <div className={styles.fieldRow}>
                    <label className={styles.fieldLabel}>
                      What should they have said?
                    </label>
                    <textarea
                      className={styles.textField}
                      value={obj.correction}
                      onChange={(e) => updateObjection(index, 'correction', e.target.value)}
                      placeholder="Write the correct response according to the system"
                      style={{ minHeight: 60 }}
                    />
                  </div>
                )}
              </div>
            ))}

            {objections.length < 4 && (
              <button
                type="button"
                onClick={addObjection}
                className={styles.retryBtn}
                style={{ marginTop: 8 }}
              >
                + Add Objection
              </button>
            )}
          </div>

          {/* Section 6: Lead & Authority Frame */}
          <div className={styles.formGroup}>
            <div className={styles.formGroupHeader}>
              <span className={styles.formGroupNumber}>Section 6</span>
              <span className={styles.formGroupTitle}>Lead & Authority Frame</span>
            </div>
            <p className={styles.formGroupHint}>
              Evaluate the agent&apos;s call control
            </p>

            <div className={styles.fieldRow}>
              <label className={styles.fieldLabel}>
                Moment of the lead{' '}
                <span className={styles.fieldSublabel}>
                  Cite one moment where the agent took control
                </span>
              </label>
              <textarea
                className={styles.textField}
                value={leadMoment}
                onChange={(e) => setLeadMoment(e.target.value)}
                placeholder="When did the agent move to the next step without asking permission?"
              />
            </div>

            <div className={styles.fieldRow}>
              <label className={styles.fieldLabel}>
                Moment of slippage{' '}
                <span className={styles.fieldSublabel}>
                  Where did the agent lose the lead?
                </span>
              </label>
              <textarea
                className={styles.textField}
                value={slippageMoment}
                onChange={(e) => setSlippageMoment(e.target.value)}
                placeholder="Dead air, system navigation paralysis, permission-seeking, or full surrender?"
              />
            </div>
          </div>

          {/* Section 7: Compliance Checklist */}
          <div className={styles.formGroup}>
            <div className={styles.formGroupHeader}>
              <span className={styles.formGroupNumber}>Section 7</span>
              <span className={styles.formGroupTitle}>Compliance Checklist</span>
            </div>
            <p className={styles.formGroupHint}>
              Did the agent hit the mandatory markers?
            </p>

            <div className={styles.checkboxGroup} style={{ flexDirection: 'column' }}>
              <label className={`${styles.checkboxLabel} ${complianceTpmo ? styles.checkboxLabelChecked : ''}`}>
                <input
                  type="checkbox"
                  checked={complianceTpmo}
                  onChange={(e) => setComplianceTpmo(e.target.checked)}
                />
                TPMO Disclaimer read completely
              </label>
              <label className={`${styles.checkboxLabel} ${complianceSoa ? styles.checkboxLabelChecked : ''}`}>
                <input
                  type="checkbox"
                  checked={complianceSoa}
                  onChange={(e) => setComplianceSoa(e.target.checked)}
                />
                Scope of Appointment (SOA) obtained
              </label>
              <label className={`${styles.checkboxLabel} ${complianceEnrollmentVerification ? styles.checkboxLabelChecked : ''}`}>
                <input
                  type="checkbox"
                  checked={complianceEnrollmentVerification}
                  onChange={(e) => setComplianceEnrollmentVerification(e.target.checked)}
                />
                Enrollment Verification / Health Questions completed
              </label>
            </div>
          </div>

          {/* Section 8: Overall Assessment */}
          <div className={styles.formGroup}>
            <div className={styles.formGroupHeader}>
              <span className={styles.formGroupNumber}>Section 8</span>
              <span className={styles.formGroupTitle}>Overall Assessment</span>
            </div>
            <p className={styles.formGroupHint}>Fill in after the call ends</p>

            <div className={styles.fieldRow}>
              <label className={styles.fieldLabel}>Call outcome</label>
              <select
                className={styles.selectField}
                value={outcome}
                onChange={(e) => setOutcome(e.target.value)}
              >
                {OUTCOMES.map((o) => (
                  <option key={o} value={o === OUTCOMES[0] ? '' : o}>
                    {o}
                  </option>
                ))}
              </select>
              {errors.outcome && <p style={{ color: '#B84420', fontSize: 13, marginTop: 4 }}>{errors.outcome}</p>}
            </div>

            <div className={styles.fieldRow}>
              <label className={styles.fieldLabel}>
                Single biggest thing the agent did right
              </label>
              <textarea
                className={styles.textField}
                value={biggestRight}
                onChange={(e) => setBiggestRight(e.target.value)}
                placeholder="What was the most effective moment or technique?"
              />
            </div>

            <div className={styles.fieldRow}>
              <label className={styles.fieldLabel}>
                Single biggest thing the agent should have done differently
              </label>
              <textarea
                className={styles.textField}
                value={biggestMiss}
                onChange={(e) => setBiggestMiss(e.target.value)}
                placeholder="What was the biggest missed opportunity?"
              />
            </div>

            <div className={styles.fieldRow}>
              <label className={styles.fieldLabel}>
                Failure pattern(s) present
              </label>
              <div className={styles.checkboxGroup}>
                {FAILURE_PATTERNS.map((p) => (
                  <label
                    key={p}
                    className={`${styles.checkboxLabel} ${patterns.includes(p) ? styles.checkboxLabelChecked : ''}`}
                  >
                    <input
                      type="checkbox"
                      checked={patterns.includes(p)}
                      onChange={() => togglePattern(p)}
                    />
                    {p}
                    <HubLink href={`/patterns/${PATTERN_SLUGS[p]}`} label={p} />
                  </label>
                ))}
              </div>
            </div>

            <div className={styles.fieldRow}>
              <label className={styles.fieldLabel}>
                The Closer&apos;s Edge{' '}
                <span className={styles.fieldSublabel}>
                  What is the one sentence you would have said?
                </span>
              </label>
              <textarea
                className={styles.textField}
                value={closersEdge}
                onChange={(e) => setClosersEdge(e.target.value)}
                placeholder="If you were the agent, what is the one sentence you would have said to save this call or lock it in?"
              />
            </div>
          </div>

          {/* Submit */}
          <div className={styles.submitRow}>
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={submitting}
            >
              {submitting ? 'Grading...' : 'Submit Analysis'}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
