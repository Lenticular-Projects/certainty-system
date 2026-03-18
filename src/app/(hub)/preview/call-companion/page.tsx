'use client'

import { useState, useMemo } from 'react'
import Fuse from 'fuse.js'
import { ChevronDown, ChevronUp } from '@carbon/icons-react'
import PageShell from '@/components/layout/PageShell'
import { objections } from '@/lib/objections-data'
import styles from './page.module.css'

/* ------------------------------------------------------------------ */
/* Data — Stage 1: Call Types                                          */
/* ------------------------------------------------------------------ */

type CallSignal = 'green' | 'yellow' | 'red'

interface CallType {
  number: number
  title: string
  signal: CallSignal
  pillar: string
  biggestMistake: string
  phrases: string[]
  keyMoves: string[]
}

const CALL_TYPES: CallType[] = [
  {
    number: 1,
    title: 'The Money Caller',
    signal: 'green',
    pillar: 'The Shift (Math Breakdown)',
    biggestMistake: 'Stopping at the monthly number — Step 3 is the close',
    phrases: ['card i saw on tv', 'grocery', 'food card', 'money put back', 'social security', 'part b giveback', 'part b give back', 'grocery card', 'otc', 'money for', '$1,200', 'advertised', 'qualify for the'],
    keyMoves: [
      'Step 1 — State the comparison: current benefit vs. available. Side by side.',
      'Step 2 — Annualize it. $35/month sounds minor. $420/year lands.',
      'Step 3 — Humanize it. Connect the annual number to what they told you. This is the close.',
    ],
  },
  {
    number: 2,
    title: 'The Scared Switcher',
    signal: 'red',
    pillar: 'Reframing',
    biggestMistake: 'Logic response to an emotional objection — name the fear first',
    phrases: ['happy with what i have', "don't want to change", "don't want to switch", 'plan works', "had this plan for years", "insurance lady", "devil you know", "my daughter set this up", 'love my plan', 'love humana', 'love aetna', 'love united'],
    keyMoves: [
      'Name the fear before presenting anything — no math, no product, no logic.',
      '"I hear you — you\'ve had something that worked and you don\'t want to risk it. What I\'m showing you doesn\'t take that away. It adds to it."',
      'Brand loyalist: upgrade within the carrier, never attack it.',
      'Relationship loyalist: never suggest they go talk to their current agent.',
    ],
  },
  {
    number: 3,
    title: 'The Misinformed Caller',
    signal: 'red',
    pillar: 'Reframing + Persuasion',
    biggestMistake: 'Building the sale on a false foundation without verifying live',
    phrases: ['my doctor said i can\'t', 'told me i can\'t', 'lose my doctor', 'a and b is all i need', 'parts a and b', 'other agent told me', 'daughter told me', 'can\'t change', 'have to stay'],
    keyMoves: [
      'Live verification is the tool — "Let me check that right now while we\'re on the phone."',
      'The screen is the authority, not you vs. them.',
      'Never confront the false belief directly — resolve it with what you find.',
    ],
  },
  {
    number: 4,
    title: 'Third Party Controlled',
    signal: 'green',
    pillar: 'Persuasion',
    biggestMistake: 'Selling to the wrong person — the sale dies in a conversation you\'re not in',
    phrases: ['need to talk to my daughter', 'need to talk to my son', 'talk to my husband', 'talk to my wife', 'son handles', 'daughter handles', 'check with my', 'have my son call', 'caregiver', 'not home right now', 'handles the finances'],
    keyMoves: [
      'Get the third party on the call now — "Is [name] available right now?"',
      'If not available, arm the primary caller with exact words: "My doctor is confirmed. Medications covered. $[amount] more per year."',
      'Do not agree to a callback without arming them first.',
    ],
  },
  {
    number: 5,
    title: 'The Detail Staller',
    signal: 'yellow',
    pillar: 'The Shift',
    biggestMistake: 'Giving them something to research — every exit request kills the sale',
    phrases: ['send me something', 'look it over', 'want to think about it', 'plan id', 'look it up', 'do some research', 'call you back', 'read the materials', 'make sure i\'m making the right'],
    keyMoves: [
      'Make inaction expensive in specific dollars before anything else.',
      '"Every month we wait, that\'s $[monthly] you don\'t get. $[annual] this year."',
      'Do not give the plan ID. Do not mail documents. Do not agree to a callback without the number on the table.',
    ],
  },
  {
    number: 6,
    title: 'The Time Bomb',
    signal: 'yellow',
    pillar: 'Refocusing',
    biggestMistake: 'Spending time on rapport — use the constraint as urgency, not a reason to reschedule',
    phrases: ['only have a few minutes', 'ride is coming', "don't have a lot of time", 'appointment this afternoon', 'procedure scheduled', 'not feeling well', 'make this quick', 'caregiver is coming'],
    keyMoves: [
      'Identify the constraint immediately. Acknowledge it. Use it to accelerate.',
      '"Tell me the one benefit you care most about and I\'ll go straight there. That takes 4 minutes."',
      'Run minimum viable Math Breakdown (Steps 1 and 2 minimum), then close.',
    ],
  },
  {
    number: 7,
    title: 'Commercial Myth Caller',
    signal: 'red',
    pillar: 'Reframing',
    biggestMistake: 'Defending the system or correcting them directly — you become part of the betrayal',
    phrases: ['commercial said', 'tv said', 'saw on tv', '$900 a month', '$6,000', '$1,200 check', 'man on tv', 'why is yours less', 'advertised that much', 'that\'s not what they said'],
    keyMoves: [
      'Join the frustration first — "You\'re right to be frustrated."',
      'Explain national max vs. zip-code reality without defending the commercial.',
      'Then redirect: "Let me show you what\'s actually available for your area right now."',
    ],
  },
  {
    number: 8,
    title: 'The Veteran',
    signal: 'red',
    pillar: 'The Shift',
    biggestMistake: 'Mentioning PCP selection before neutralizing VA displacement fear — call ends immediately',
    phrases: ['va', 'veteran', 'veterans', 'va benefits', 'va doctor', 'va care', 'va hospital', 'the va covers', 'already have va', 'earned my benefits', 'don\'t need medicare'],
    keyMoves: [
      '"Your VA covers everything at the VA. This covers everything outside the VA. They stack — this is additive, not a replacement."',
      'Do NOT mention PCP selection until the displacement fear is resolved.',
      'Then bridge to what Medicare Advantage covers that VA doesn\'t: ER away from home, community specialists, dental, OTC.',
    ],
  },
  {
    number: 9,
    title: 'The Timing Objector',
    signal: 'red',
    pillar: 'The Shift',
    biggestMistake: 'Accepting the timing objection and offering a callback — the stall sounds logical but always costs money',
    phrases: ['wait until i get settled', 'moving in a few months', 'wait and see', 'get through the holidays', 'next year', 'open enrollment', 'procedure next week', 'don\'t want to do anything right before', 'wait for medicaid'],
    keyMoves: [
      '"Every month we don\'t do this is $[monthly benefit] you don\'t get. That\'s $[annual] this year."',
      'SEPs protect moves — coverage doesn\'t gap. Most timing concerns are not actual barriers.',
      '"What\'s the specific concern? Let\'s see if it\'s actually a barrier or just a reason to pause."',
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Data — Stage 2: Signal Moves                                        */
/* ------------------------------------------------------------------ */

const SIGNAL_MOVES = {
  green: {
    label: 'GREEN',
    move: 'Open and with you. Execute the Math Breakdown. Move toward close. Don\'t overstay rapport.',
    pillar: 'Persuasion + The Shift',
    bridges: [] as string[],
  },
  yellow: {
    label: 'YELLOW',
    move: 'Drifting. Validate in one sentence, bridge back. Don\'t let it sit.',
    pillar: 'Refocusing',
    bridges: [
      '"Let me bring you back to what you told me earlier about [situation]."',
      '"Here\'s the thing — you\'ve already given me everything I need to show you this."',
      '"I hear that — and here\'s what changes if we take 2 more minutes."',
      '"You called for a reason. Let\'s make sure that reason gets answered before we hang up."',
    ],
  },
  red: {
    label: 'RED',
    move: 'Resistant. Name the emotion first — don\'t defend. Reframe before redirecting.',
    pillar: 'Reframing',
    bridges: [] as string[],
  },
}

/* ------------------------------------------------------------------ */
/* Data — Stage 4: Field Reference (from human-layer page)            */
/* ------------------------------------------------------------------ */

interface FieldRef {
  situation: string
  benefit: string
  language: string
}

const FIELD_REFERENCE: FieldRef[] = [
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

/* ------------------------------------------------------------------ */
/* Stage 1 — Who Is This Caller?                                       */
/* ------------------------------------------------------------------ */

function Stage1({ query, setQuery }: { query: string; setQuery: (v: string) => void }) {
  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return null
    return CALL_TYPES.filter((ct) =>
      ct.title.toLowerCase().includes(q) ||
      ct.phrases.some((p) => p.toLowerCase().includes(q))
    )
  }, [query])

  const signalColor = (s: CallSignal) =>
    s === 'green' ? styles.sigGreen : s === 'yellow' ? styles.sigYellow : styles.sigRed

  const dotClass = (s: CallSignal) =>
    s === 'green' ? styles.dotGreen : s === 'yellow' ? styles.dotYellow : styles.dotRed

  const chipDotClass = (s: CallSignal) =>
    s === 'green' ? styles.dotGreen : s === 'yellow' ? styles.dotYellow : styles.dotRed

  return (
    <section className={styles.stageCard}>
      <div className={styles.stageHeader}>
        <span className={styles.stageNum}>Stage 1</span>
        <span className={styles.stageTitle}>Who Is This Caller?</span>
      </div>
      <div className={styles.stageBody}>
        <input
          type="text"
          className={styles.stageInput}
          placeholder="Type what the caller is saying or how the call opened…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {/* No query — show chips */}
        {!query.trim() && (
          <div className={styles.chipsRow}>
            {CALL_TYPES.map((ct) => (
              <button
                key={ct.number}
                className={styles.typeChip}
                onClick={() => setQuery(ct.phrases[0])}
              >
                <span className={`${styles.typeChipDot} ${chipDotClass(ct.signal)}`} />
                {ct.number}. {ct.title}
              </button>
            ))}
          </div>
        )}

        {/* Has query — show results */}
        {query.trim() && results !== null && (
          results.length === 0 ? (
            <div className={styles.noMatch}>No matching call type. Try different words from the opening.</div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {results.map((ct) => (
                <div key={ct.number} className={styles.typeResult}>
                  <div className={styles.typeResultTop}>
                    <span className={styles.typeResultNum}>Type {ct.number}</span>
                    <div className={styles.typeResultTitleGroup}>
                      <div className={styles.typeResultTitle}>{ct.title}</div>
                      <div className={`${styles.typeResultSignal} ${signalColor(ct.signal)}`}>
                        <span className={`${styles.typeResultDot} ${dotClass(ct.signal)}`} />
                        {ct.signal.toUpperCase()} signal
                      </div>
                    </div>
                  </div>
                  <div className={styles.typeResultGrid}>
                    <div className={styles.typeResultRow}>
                      <span className={styles.typeRowLabel}>Pillar</span>
                      <span className={styles.typeRowValue}>{ct.pillar}</span>
                    </div>
                    <div className={styles.typeResultRow}>
                      <span className={styles.typeRowLabel}>Biggest mistake</span>
                      <span className={styles.typeRowValueBold}>{ct.biggestMistake}</span>
                    </div>
                    <div className={styles.typeResultRow}>
                      <span className={styles.typeRowLabel}>Key moves</span>
                      <ul className={styles.keyMovesList}>
                        {ct.keyMoves.map((m, i) => <li key={i}>{m}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Stage 2 — What Signal Are They In?                                  */
/* ------------------------------------------------------------------ */

function Stage2({ selected, setSelected }: { selected: CallSignal | null; setSelected: (v: CallSignal | null) => void }) {
  const toggle = (sig: CallSignal) => setSelected(selected === sig ? null : sig)

  const move = selected ? SIGNAL_MOVES[selected] : null

  return (
    <section className={styles.stageCard}>
      <div className={styles.stageHeader}>
        <span className={styles.stageNum}>Stage 2</span>
        <span className={styles.stageTitle}>What Signal Are They In?</span>
      </div>
      <div className={styles.stageBody}>
        <div className={styles.signalBtnRow}>
          {(['green', 'yellow', 'red'] as CallSignal[]).map((sig) => {
            const isSelected = selected === sig
            const isFaded = selected !== null && !isSelected
            const btnClass = `${styles.signalBtn} ${styles[`signalBtn${sig.charAt(0).toUpperCase() + sig.slice(1)}` as keyof typeof styles]} ${isSelected ? styles.signalBtnSelected : ''} ${isFaded ? styles.signalBtnFaded : ''}`
            const dotClass = styles[`dotBtn${sig.charAt(0).toUpperCase() + sig.slice(1)}` as keyof typeof styles]
            return (
              <button key={sig} className={btnClass} onClick={() => toggle(sig)}>
                <span className={`${styles.signalBtnDot} ${dotClass}`} />
                {sig.toUpperCase()}
              </button>
            )
          })}
        </div>

        {move && (
          <div className={`${styles.signalResult} ${styles[`signalResult${selected!.charAt(0).toUpperCase() + selected!.slice(1)}`]}`}>
            <div className={styles.signalResultLabel}>{move.label}</div>
            <div className={styles.signalResultMove}>{move.move}</div>
            <div className={styles.signalResultPillar}>
              Pillar: <strong>{move.pillar}</strong>
            </div>
            {move.bridges.length > 0 && (
              <ul className={styles.signalBridgeList}>
                {move.bridges.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Stage 3 — They Said Something                                       */
/* ------------------------------------------------------------------ */

function ObjCard({ obj }: { obj: (typeof objections)[0] }) {
  const [avoidOpen, setAvoidOpen] = useState(false)

  const cardClass = `${styles.objCard} ${obj.signal === 'green' ? styles.objCardGreen : obj.signal === 'yellow' ? styles.objCardYellow : styles.objCardRed}`

  return (
    <div className={cardClass}>
      <div className={styles.objPhrase}>{obj.clientPhrase}</div>
      <div className={styles.objUnderneath}>{obj.underneath}</div>
      <div className={styles.objResponses}>
        {obj.responses.slice(0, 2).map((r, i) => (
          <div key={i} className={styles.objResponseItem}>
            {r.label && <div className={styles.objResponseLabel}>{r.label}</div>}
            <div className={styles.objResponseText}>{r.text}</div>
          </div>
        ))}
      </div>
      {obj.doNotSay && obj.doNotSay.length > 0 && (
        <>
          <button className={styles.objAvoidToggle} onClick={() => setAvoidOpen(!avoidOpen)}>
            {avoidOpen ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
            Avoid
          </button>
          {avoidOpen && (
            <ul className={styles.objAvoidList}>
              {obj.doNotSay.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          )}
        </>
      )}
    </div>
  )
}

function Stage3({ query, setQuery }: { query: string; setQuery: (v: string) => void }) {
  const fuse = useMemo(
    () => new Fuse(objections, { keys: ['clientPhrase', 'tags'], threshold: 0.35, ignoreLocation: true }),
    []
  )

  const results = useMemo(() => {
    const q = query.trim()
    if (!q) return null
    return fuse.search(q).slice(0, 3).map((r) => r.item)
  }, [query, fuse])

  return (
    <section className={styles.stageCard}>
      <div className={styles.stageHeader}>
        <span className={styles.stageNum}>Stage 3</span>
        <span className={styles.stageTitle}>They Said Something</span>
      </div>
      <div className={styles.stageBody}>
        <input
          type="text"
          className={styles.stageInput}
          placeholder="Type what the caller said…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {query.trim() && results !== null && (
          results.length === 0 ? (
            <div className={styles.noMatch}>No match. Try other words from what they said.</div>
          ) : (
            <div className={styles.objResultList}>
              {results.map((obj) => <ObjCard key={obj.id} obj={obj} />)}
            </div>
          )
        )}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Stage 4 — Close the Bridge                                          */
/* ------------------------------------------------------------------ */

function Stage4({ query, setQuery }: { query: string; setQuery: (v: string) => void }) {
  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return null
    return FIELD_REFERENCE.filter((r) => r.situation.toLowerCase().includes(q) || r.benefit.toLowerCase().includes(q))
  }, [query])

  return (
    <section className={styles.stageCard}>
      <div className={styles.stageHeader}>
        <span className={styles.stageNum}>Stage 4</span>
        <span className={styles.stageTitle}>Close the Bridge</span>
      </div>
      <div className={styles.stageBody}>
        <input
          type="text"
          className={styles.stageInput}
          placeholder="What did the caller reveal? (dental, transportation, fixed income…)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {query.trim() && results !== null && (
          results.length === 0 ? (
            <div className={styles.noMatch}>No match. Try: dental, transportation, fixed income, surgery, chronic, caretaking, Medicaid.</div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {results.map((r, i) => (
                <div key={i} className={styles.bridgeResult}>
                  <div className={styles.bridgeSituation}>{r.situation}</div>
                  <div className={styles.bridgeBenefit}>{r.benefit}</div>
                  <blockquote className={styles.bridgeScript}>{r.language}</blockquote>
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function CallCompanionPage() {
  const [s1Query, setS1Query] = useState('')
  const [s2Signal, setS2Signal] = useState<CallSignal | null>(null)
  const [s3Query, setS3Query] = useState('')
  const [s4Query, setS4Query] = useState('')

  return (
    <PageShell signal="neutral">
      <p className={styles.eyebrow}>Live Call Companion</p>
      <h1 className={`display-xl ${styles.pageTitle}`}>Four tools. One tab.</h1>
      <p className={styles.pageDesc}>
        All four call stages visible at once — identify the caller, read the signal, handle the objection, bridge to close.
      </p>

      <div className={styles.stageStack}>
        <Stage1 query={s1Query} setQuery={setS1Query} />
        <Stage2 selected={s2Signal} setSelected={setS2Signal} />
        <Stage3 query={s3Query} setQuery={setS3Query} />
        <Stage4 query={s4Query} setQuery={setS4Query} />
      </div>
    </PageShell>
  )
}
