'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CheckmarkFilled, CloseFilled, Warning, Calendar,
  ArrowRight, ChevronDown, ChevronUp, Location, Time,
  Subtract, Keyboard
} from '@carbon/icons-react'
import { SPRING_FAST } from '@/lib/motion'
import PageShell from '@/components/layout/PageShell'
import styles from './page.module.css'

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

type PageSignal = 'neutral' | 'red' | 'yellow' | 'green'
type SignalState = 'unchecked' | 'dismissed' | 'active'

interface SEPDetail {
  id: string
  name: string
  code: string
  window: string
  isTimeSensitive: boolean
  allowed: string[]
  script: string
  verify: string
  nextStep: string
  warning?: string
}

interface SignalCard {
  id: string
  label: string
  phase: string
  askThis: string
  listenFor: string[]
  callout: string
  frequency: 'high' | 'medium' | 'low'
  sep: SEPDetail
}

interface FemaDeclaration {
  state: string
  disaster: string
  counties: string[]
  allCounties: boolean
  sepStartDate: string
  sepEndDate: string
  declarationType: string
}

interface EnrollmentPeriod {
  period: 'AEP' | 'MA_OEP' | 'SEP_SEASON'
  label: string
  shortLabel: string
  color: 'green' | 'yellow' | 'red'
  note: string
  canEnroll: boolean
  daysLeft: number
  periodEndLabel: string
  nextPeriodLabel: string
}

/* ------------------------------------------------------------------ */
/* Enrollment Period                                                    */
/* ------------------------------------------------------------------ */

function daysUntilDate(target: Date): number {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  target.setHours(0, 0, 0, 0)
  return Math.ceil((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
}

function fmtDate(d: Date): string {
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })
}

function getEnrollmentPeriod(now: Date): EnrollmentPeriod {
  const y = now.getFullYear()
  const m = now.getMonth() + 1
  const day = now.getDate()

  if ((m === 10 && day >= 15) || m === 11 || (m === 12 && day <= 7)) {
    const periodEnd = new Date(y, 11, 7)
    const nextStart = new Date(y + 1, 0, 1)
    return {
      period: 'AEP', label: 'Annual Election Period', shortLabel: 'AEP', color: 'green',
      note: 'Open enrollment is active. No SEP required. You can enroll any Medicare beneficiary right now. Coverage effective January 1st.',
      canEnroll: true, daysLeft: daysUntilDate(periodEnd),
      periodEndLabel: `Closes ${fmtDate(periodEnd)}`, nextPeriodLabel: `MA OEP opens ${fmtDate(nextStart)}`,
    }
  }

  if (m >= 1 && m <= 3) {
    const periodEnd = new Date(y, 2, 31)
    const nextStart = new Date(y, 3, 1)
    return {
      period: 'MA_OEP', label: 'MA Open Enrollment Period', shortLabel: 'OEP', color: 'yellow',
      note: 'For MA plan holders only — one change available. Original Medicare enrollees still need a qualifying SEP.',
      canEnroll: false, daysLeft: daysUntilDate(periodEnd),
      periodEndLabel: `Closes ${fmtDate(periodEnd)}`, nextPeriodLabel: `SEP Season begins ${fmtDate(nextStart)}`,
    }
  }

  const periodEnd = new Date(y, 9, 14)
  const nextStart = new Date(y, 9, 15)
  return {
    period: 'SEP_SEASON', label: 'SEP Season', shortLabel: 'SEP Required', color: 'red',
    note: 'Outside open enrollment. A qualifying SEP is required for any plan change.',
    canEnroll: false, daysLeft: daysUntilDate(periodEnd),
    periodEndLabel: `Ends ${fmtDate(periodEnd)}`, nextPeriodLabel: `AEP opens ${fmtDate(nextStart)}`,
  }
}

/* ------------------------------------------------------------------ */
/* Deadline Calculator                                                 */
/* ------------------------------------------------------------------ */

function addMonths(date: Date, months: number): Date {
  const d = new Date(date)
  d.setMonth(d.getMonth() + months)
  return new Date(d.getFullYear(), d.getMonth() + 1, 0)
}

function formatDeadline(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

function daysRemaining(deadline: Date): number {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return Math.ceil((deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
}

function getUrgencyClass(days: number): string {
  if (days <= 14) return styles.deadlineCritical
  if (days <= 30) return styles.deadlineUrgent
  return styles.deadlineOk
}

function DeadlineCalc({ label }: { label: string }) {
  const [dateInput, setDateInput] = useState('')
  const [deadline, setDeadline] = useState<Date | null>(null)

  function calculate() {
    if (!dateInput) return
    const d = new Date(dateInput + 'T12:00:00')
    if (isNaN(d.getTime())) return
    setDeadline(addMonths(d, 2))
  }

  const days = deadline ? daysRemaining(deadline) : null

  return (
    <div className={styles.deadlineCalc}>
      <p className={styles.deadlineLabel}>
        <Time size={12} />
        {label}
      </p>
      <div className={styles.deadlineRow}>
        <input
          type="date"
          className={styles.deadlineInput}
          value={dateInput}
          onChange={e => { setDateInput(e.target.value); setDeadline(null) }}
          onBlur={calculate}
        />
        <button className={styles.deadlineBtn} onClick={calculate}>
          Calculate
        </button>
      </div>
      {deadline && days !== null && (
        <motion.div
          className={`${styles.deadlineResult} ${getUrgencyClass(days)}`}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={SPRING_FAST}
        >
          {days <= 0 ? (
            <span>Window has closed — check for other SEPs</span>
          ) : (
            <>
              <span className={styles.deadlineDays}>{days} days left</span>
              <span className={styles.deadlineDate}>Window closes {formatDeadline(deadline)}</span>
            </>
          )}
        </motion.div>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* SEP Signal Cards                                                    */
/* ------------------------------------------------------------------ */

const SIGNALS: SignalCard[] = [
  {
    id: 'moved',
    label: 'Address Mismatch / Moved',
    phase: 'min 5–8',
    askThis: 'Is the address we have on file still correct?',
    listenFor: ['"I moved"', 'new city or ZIP', '"staying with family"', '"house burned"', 'eviction', 'different address in system vs. what they say'],
    callout: 'System address doesn\'t match what they said? That\'s a live SEP. Don\'t just update the field and move on.',
    frequency: 'high',
    sep: {
      id: 'moved',
      name: 'Change of Permanent Residence SEP',
      code: 'MOV',
      window: 'Month before move (if notified in advance) + month of move + 2 full calendar months after.',
      isTimeSensitive: true,
      allowed: [
        'Enroll in any MA, MAPD, or PDP available at the new address',
        'Switch to any plan that serves the new ZIP or county',
      ],
      script: 'Good news — because you recently moved, you actually qualify for a Special Enrollment Period right now. That gives us a limited window to get you into a new plan at your current address. Let\'s look at what\'s available before that window closes.',
      verify: 'Confirm: (1) new address and ZIP, (2) exact move date. The window starts the month before the move only if the plan was notified in advance — otherwise it starts the month of the move. House fire, eviction, or moving in with family all count as long as it\'s a different physical address. Also triggers when MARx address differs from the address on the application being submitted.',
      nextStep: 'Confirm new ZIP, confirm move date, enter it in the deadline calculator — tell them exactly how many days they have left.',
      warning: 'NOT valid for a PO Box change — must be a change of physical residence. A "temporary" stay at a family member\'s address while repairs are done STILL counts if the plan doesn\'t serve the new address.',
    },
  },
  {
    id: 'dual-lis',
    label: 'Medicaid / Extra Help / QMB',
    phase: 'min 2–10',
    askThis: 'Do you have Medicaid, or does the state help pay for any of your healthcare?',
    listenFor: ['"I have Medicaid"', '"Extra Help" / "LIS"', '"QMB" / "SLMB"', '"state pays my Part B"', '$0 Part B premium', '"I get help from the state"'],
    callout: 'ANY Medicaid level, any Medicare Savings Program, or Extra Help = monthly SEP. This fires more than any other SEP on inbound calls.',
    frequency: 'high',
    sep: {
      id: 'dual-lis',
      name: 'Dual Eligible / LIS Monthly SEP',
      code: 'INT (D-SNP) / DEP (PDP)',
      window: 'Any month. Effective 1st of the following month. Repeatable every month.',
      isTimeSensitive: false,
      allowed: [
        'DEP: Drop MA plan → return to Original Medicare + enroll in PDP, or switch PDPs (any Medicaid level or LIS)',
        'INT: Join an aligned integrated D-SNP monthly (full-benefit duals only — FBDE, QMB+, SLMB+)',
        'MCD/NLS: Loss, gain, or change in Medicaid or Extra Help level → 3-month window, available all year including after Sept 30',
      ],
      script: 'Since you have [Medicaid / Extra Help], you actually have the ability to make changes to your plan every single month — you\'re not locked in. So if we find something today that works better for you, we can get that started for the 1st of next month.',
      verify: 'Two separate codes: INT requires FULL Medicaid (FBDE, QMB+, SLMB+) and is for D-SNP enrollment only. DEP is broader — any Medicaid level OR Extra Help/LIS qualifies, but only for PDP changes or dropping MA to Original Medicare. QMB, SLMB, and QI ALL qualify for DEP. "The state pays my Part B premium" = QMB = YES. Potential eligibility question: "Do you make more or less than $1,903 (single) or $2,575 (couple) per month?"',
      nextStep: 'Confirm Medicaid level in system. Full-benefit dual (FBDE, QMB+, SLMB+) → check if aligned integrated D-SNP is available in their county (INT). Any Medicaid/LIS → DEP for PDP changes. If they recently lost or gained Medicaid/Extra Help, use MCD or NLS (3-month window).',
    },
  },
  {
    id: 'chronic',
    label: 'Chronic Condition',
    phase: 'min 8–15',
    askThis: 'Do you have any ongoing health conditions like diabetes, heart disease, or COPD?',
    listenFor: ['diabetes / metformin', 'heart disease / pacemaker', 'COPD / kidney / dialysis', 'cancer / stroke', 'Alzheimer\'s / Parkinson\'s / MS'],
    callout: 'If a C-SNP is available in their county for that condition, they can enroll. Check Aetna, Humana, UHC, WellCare portals.',
    frequency: 'medium',
    sep: {
      id: 'chronic',
      name: 'Chronic Condition SNP (C-SNP) SEP',
      code: 'CSN',
      window: 'One-time per qualifying condition. Once enrolled, the SEP for that condition ends. A new qualifying condition triggers a new SEP.',
      isTimeSensitive: false,
      allowed: [
        'Enroll in the matching C-SNP for that condition',
      ],
      script: 'Because you have [condition], you may actually qualify for a Special Needs Plan designed specifically for people managing that condition. These plans often have much lower copays and benefits tailored to your exact needs — and you can enroll in one right now.',
      verify: 'You MUST verify a C-SNP exists in their county for that condition BEFORE confirming this SEP. Check Aetna, Humana, UHC, and WellCare portals. Pacemaker = heart condition. Blood clot on anticoagulants = cardiovascular. NOT valid moving C-SNP to C-SNP for the same condition (only valid if switching to a different-condition C-SNP).',
      nextStep: 'Look up C-SNP availability in their county on carrier portals. If a match exists, name the plan and move to enrollment.',
      warning: 'Must be enrolling INTO a C-SNP — this SEP cannot be used for standard MA/MAPD plans. Not valid for moving from one C-SNP to another C-SNP for the same condition.',
    },
  },
  {
    id: 'plan-ending',
    label: 'Plan Ending / Termination Letter',
    phase: 'min 5–12',
    askThis: 'Have you received any letters about your current plan ending or changing?',
    listenFor: ['"my plan is ending"', 'termination letter', '"plan won\'t be available"', 'auto-switched to different plan', '"Medicare ended my plan"'],
    callout: 'Humana, Aetna, UHC, WellCare exited hundreds of counties for 2026. Check the system — many callers have this SEP and don\'t know it.',
    frequency: 'medium',
    sep: {
      id: 'plan-ending',
      name: 'Plan Termination / Non-Renewal SEP',
      code: 'EOC / MYT',
      window: 'EOC (carrier left area): Dec 8 – end of Feb. MYT (Medicare ended contract): 2 months before + 1 month after contract end.',
      isTimeSensitive: false,
      allowed: [
        'Switch to any other MA or MAPD plan',
        'Return to Original Medicare',
        'Enroll in a new PDP',
      ],
      script: 'It looks like your current plan is actually leaving your area — which means you automatically qualify for a Special Enrollment Period to get into a new plan. Let\'s make sure we get you set up before your coverage ends.',
      verify: 'Check system for plan termination status. Ask if they received a letter. EOC = carrier decided to leave that ZIP (Dec 8 – Feb 28 window for Jan 1 exits). MYT = Medicare terminated the plan\'s contract (2 months before + 1 month after end). REC = plan taken over by the state for financial issues (lasts until state action ends or member switches).',
      nextStep: 'Confirm plan termination date from their letter or system. If confirmed, proceed to enrollment — their old coverage continues through the termination date.',
    },
  },
  {
    id: 'lost-coverage',
    label: 'Retired / Lost Job Coverage',
    phase: 'min 2–6',
    askThis: 'Have you recently retired or lost any employer health coverage?',
    listenFor: ['"I just retired"', '"lost my job" / "COBRA ended"', '"spouse lost their job"', '"husband passed, lost his insurance"', '"VA coverage" / "TRICARE"'],
    callout: 'Retirement, COBRA expiration, or losing spousal coverage = SEP. Ask for the exact date coverage ended — the clock is running.',
    frequency: 'medium',
    sep: {
      id: 'lost-coverage',
      name: 'Loss of Employer / Union Coverage SEP',
      code: 'LEC',
      window: 'Month of loss + 2 full calendar months after.',
      isTimeSensitive: true,
      allowed: [
        'Enroll in any MA or MAPD plan',
        'Enroll in any PDP',
      ],
      script: 'Because you recently lost your employer health coverage, you qualify for a Special Enrollment Period right now. That gives you a window from when that coverage ended to get into a new plan.',
      verify: 'Window starts the month coverage ended — not when they call. COBRA expiration counts. Death of a spouse with employer coverage counts. May coincide with delayed Part B (ICEP). Also check: LCC = involuntary loss of any creditable coverage (VA, TRICARE, ACA) — 2 months from loss or notification, whichever is later. LCC does NOT apply if they missed premium payments.',
      nextStep: 'Confirm the exact date coverage ended. Enter it in the deadline calculator. If the window is closing soon, prioritize enrollment over extended needs assessment.',
      warning: 'If they have other creditable drug coverage (VA, TRICARE) and are in an MAPD, they may qualify for CDC — switch to MA-only plan anytime.',
    },
  },
  {
    id: 'new-to-medicare',
    label: 'New to Medicare / Turning 65',
    phase: 'min 4–7',
    askThis: 'When did your Medicare Part B start?',
    listenFor: ['"I just got Medicare"', 'just turned 65', '"became eligible" recently', 'under-65 turning 65', '"I delayed my Part B"', 'born in 1961'],
    callout: 'Medicare started recently = IEP or ICEP may be open. Under-65 disability beneficiaries turning 65 get a BRAND NEW 7-month window (IEP2). 1961 is the golden birth year to watch for.',
    frequency: 'low',
    sep: {
      id: 'new-to-medicare',
      name: 'Initial Enrollment Period (IEP / ICEP)',
      code: 'IEP / ICEP / IEP2',
      window: 'IEP: 7 months (3 before + birthday month + 3 after). ICEP: 6 months (3 before + Part B month + 2 after, extended 1/1/2025). IEP2: fresh 7-month window when disability beneficiary turns 65.',
      isTimeSensitive: true,
      allowed: [
        'IEP: Enroll in MAPD or PDP for the first time (NOT valid for MA-only plans)',
        'ICEP: Enroll in MA or MAPD when Part B activates after delay (NOT valid for PDP — use IEP for PDP)',
        'IEP2: Uses MRD on application — same as IEP but a completely fresh window (MA-only plans prohibited)',
      ],
      script: 'Since you just became eligible for Medicare, you\'re actually still in your initial enrollment window. That means we can get you set up with the right plan right now — no special circumstances needed.',
      verify: 'Ask: "When exactly did your Part B start?" IEP = 7-month window around 65th birthday. ICEP = 6-month window for delayed Part B (extended as of 1/1/2025 to 3 months before + month of + 2 months after). Part A and Part B must have the SAME effective date for IEP; different dates → use ICEP. IEP2 = disability beneficiary turning 65 gets a completely fresh 7-month window — look for 1961 birth year in MARx. Also: OEP-N = if their first MA/MAPD already effectuated and they don\'t like it, they get month of effectuation + 2 months to make ONE change.',
      nextStep: 'Confirm Part B effective date. Calculate the window. IEP/IEP2 = 7 months, ICEP = 6 months. If already in a plan they don\'t like (OEP-N), they get one change within 3 months of effectuation. If bene was notified of A/B AFTER coverage started → RET (month of notice + 2 months).',
    },
  },
]

/* ------------------------------------------------------------------ */
/* Cheat Sheet                                                         */
/* ------------------------------------------------------------------ */

const CHEAT_SHEET: { category: string; items: { trigger: string; sep: string; window: string; code: string | null; note?: string }[] }[] = [
  {
    category: 'New to Medicare',
    items: [
      { trigger: 'Turning 65 / just got Medicare', sep: 'Initial Enrollment Period', window: '7 months (3 before + birthday month + 3 after)', code: 'IEP', note: 'NOT valid for MA-only plans' },
      { trigger: 'Under-65 disability beneficiary turning 65', sep: 'IEP2 (fresh window)', window: '7 months around 65th birthday', code: 'IEP2 (MRD)', note: '1961 birth year — MA-only prohibited' },
      { trigger: 'Delayed Part B, now activating', sep: 'Initial Coverage Election Period', window: '6 months (3 before + Part B month + 2 after)', code: 'ICEP', note: 'Extended 1/1/2025. NOT valid for PDP' },
      { trigger: 'New to Medicare, doesn\'t like first MA/MAPD', sep: 'New Enrollee OEP', window: 'Month of effectuation + 2 months', code: 'OEP-N', note: 'ONE change only. Not for PDP-only or Medigap' },
      { trigger: 'Notified of A/B AFTER coverage started', sep: 'Retroactive Entitlement', window: 'Month of notice + 2 months', code: 'RET', note: 'Part A and Part B must have same effective date' },
    ],
  },
  {
    category: 'Financial Eligibility',
    items: [
      { trigger: 'Full Medicaid — enrolling in D-SNP', sep: 'Integrated Care SEP', window: 'Any month, repeatable', code: 'INT', note: 'Full-benefit duals only (FBDE, QMB+, SLMB+)' },
      { trigger: 'Any Medicaid or LIS — PDP change', sep: 'Dual/LIS Monthly SEP', window: 'Any month, repeatable', code: 'DEP', note: 'All Medicaid levels + Extra Help. PDP or drop MA only' },
      { trigger: 'Lost/gained/changed Medicaid level', sep: 'Medicaid Change SEP', window: '3 months from change', code: 'MCD', note: 'Available all year including after Sept 30' },
      { trigger: 'Lost/gained/changed Extra Help level', sep: 'Extra Help Change SEP', window: '3 months from change', code: 'NLS', note: 'Available all year including after Sept 30' },
    ],
  },
  {
    category: 'Location / Life Change',
    items: [
      { trigger: 'Moved to a different ZIP or county', sep: 'Change of Residence SEP', window: 'Mo before (if notified) + mo of + 2 mo after', code: 'MOV', note: 'NOT valid for PO Box change' },
      { trigger: 'Released from incarceration', sep: 'Post-Incarceration SEP', window: '2 months after release', code: 'INC', note: 'Part A/B SEP is 12 months; MA/PDP is 2 months' },
      { trigger: 'Returned to US after living abroad', sep: 'Return to US SEP', window: '2 months after return', code: 'RUS' },
      { trigger: 'Recently became a US citizen', sep: 'Lawful Presence SEP', window: 'Month of + 2 full months', code: 'LAW' },
    ],
  },
  {
    category: 'Chronic / Special Needs',
    items: [
      { trigger: 'Has qualifying chronic condition + C-SNP available', sep: 'C-SNP Eligibility SEP', window: 'One-time per condition', code: 'CSN', note: 'Must enroll INTO a C-SNP. Not CSNP→CSNP same condition' },
      { trigger: 'Enrolled in state Pharmacy Assistance Program', sep: 'SPAP SEP', window: '1x/year while enrolled; 2 mo after loss', code: 'PAP', note: 'NY EPIC, NJ PAAD, PA PACE/PACENET, WI SeniorCare' },
      { trigger: 'Leaving PACE program', sep: 'PACE Disenrollment SEP', window: '2 months after disenrollment', code: 'PAC', note: 'Do NOT pull bene out of PACE plan' },
      { trigger: 'Lost Special Needs status', sep: 'SNP Loss SEP', window: 'Up to 3 months after disenrollment', code: 'SNP', note: 'Ends upon enrollment in another plan' },
    ],
  },
  {
    category: 'Institutionalized / LTC',
    items: [
      { trigger: 'In nursing home / SNF / LTC facility → MA/MAPD', sep: 'OEP-I (Institutionalized)', window: 'Unlimited while in facility + 2 mo after', code: 'OEP-I (LT2)', note: 'Does NOT include standard assisted living' },
      { trigger: 'In nursing home / SNF / LTC facility → PDP', sep: 'LTC SEP', window: 'Unlimited while in facility + 2 mo after', code: 'LTC', note: 'Must enroll in PDP' },
    ],
  },
  {
    category: 'Involuntary Disenrollment',
    items: [
      { trigger: 'Lost creditable coverage (VA, TRICARE, ACA)', sep: 'Loss of Creditable Coverage', window: '2 mo from loss or notification (later)', code: 'LCC', note: 'NOT for missed premium payments' },
      { trigger: 'Lost MAPD because lost Part B', sep: 'Involuntary Loss SEP', window: 'Notice + grace period + 2 mo after', code: 'INV', note: 'Must enroll in PDP only' },
      { trigger: 'Plan taken over by state (financial)', sep: 'Receivership SEP', window: 'Until state action ends or member switches', code: 'REC' },
      { trigger: 'Carrier ended plan in ZIP (non-renewal)', sep: 'Plan Non-Renewal SEP', window: 'Dec 8 – end of February', code: 'EOC' },
      { trigger: 'Medicare ended contract with plan', sep: 'Medicare Contract Termination', window: '2 mo before + 1 mo after end', code: 'MYT' },
    ],
  },
  {
    category: 'Voluntary Changes',
    items: [
      { trigger: 'Lost employer/union/COBRA coverage', sep: 'Loss of Employer Coverage SEP', window: 'Month of loss + 2 mo after', code: 'LEC', note: 'May coincide with delayed Part B (ICEP)' },
      { trigger: 'Dropped Cost Plan with drug coverage', sep: 'Cost Plan Disenrollment SEP', window: '2 full months after drop', code: 'OSD', note: 'PDP only' },
      { trigger: 'Dropped Medigap for first-time MA/MAPD, wants to return', sep: '12-Month Trial Right', window: '12 months from MA start', code: '12G', note: 'Guaranteed-issue Medigap on return' },
      { trigger: 'Joined MAPD at 65, wants to go back to OM + PDP', sep: 'Age-65 Trial Right', window: '12 months from MAPD start', code: '12J', note: 'Disenrolls from MAPD → Original Medicare + PDP' },
      { trigger: 'In MAPD but has other drug coverage (VA, TRICARE)', sep: 'Creditable Drug Coverage SEP', window: 'Anytime', code: 'CDC', note: 'Must switch to MA-only plan' },
      { trigger: 'Auto-enrolled into plan by Medicare', sep: 'Government Enrollment SEP', window: '3 months from effective date', code: 'DIF' },
    ],
  },
  {
    category: 'Star Ratings',
    items: [
      { trigger: 'Enrolling in a 5-star rated plan', sep: '5-Star SEP', window: 'Dec 8 – Nov 30 (once per year)', code: '5ST' },
      { trigger: 'Current plan under 3 stars for 3 consecutive years', sep: 'Low-Performing Plan SEP', window: 'Once per calendar year', code: 'LPI', note: 'Must enroll in 3+ star or unrated plan' },
    ],
  },
  {
    category: 'Disaster / Extension',
    items: [
      { trigger: 'FEMA/state disaster prevented enrollment', sep: 'Disaster SEP', window: 'Duration of emergency + 2 mo after end', code: 'DST', note: 'Extension to another missed SEP — not standalone. Do not proactively market.' },
    ],
  },
  {
    category: 'Election Periods',
    items: [
      { trigger: 'Oct 15 – Dec 7', sep: 'Annual Election Period', window: 'Coverage effective Jan 1. Last plan wins.', code: 'AEP' },
      { trigger: 'Jan 1 – Mar 31 (existing MA plan holders only)', sep: 'MA Open Enrollment Period', window: 'One change. Effective 1st of following month.', code: 'OEP', note: 'Not for Original Medicare enrollees to join MA' },
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Main Component                                                      */
/* ------------------------------------------------------------------ */

export default function SEPCheckPage() {
  const [signalStates, setSignalStates] = useState<Map<string, SignalState>>(
    () => new Map(SIGNALS.map(s => [s.id, 'unchecked']))
  )
  const [expandedSignal, setExpandedSignal] = useState<string | null>(null)
  const [femaInput, setFemaInput] = useState('')
  const [femaResults, setFemaResults] = useState<FemaDeclaration[]>([])
  const [femaSearched, setFemaSearched] = useState(false)
  const [femaDeclarations, setFemaDeclarations] = useState<FemaDeclaration[]>([])
  const [enrollmentPeriod, setEnrollmentPeriod] = useState<EnrollmentPeriod | null>(null)
  const [showCheatSheet, setShowCheatSheet] = useState(false)
  const [showMissed, setShowMissed] = useState(false)
  const [oepChoice, setOepChoice] = useState<'yes' | 'no' | null>(null)
  const femaInputRef = useRef<HTMLInputElement>(null)
  const signalRefs = useRef<Map<string, HTMLDivElement>>(new Map())

  useEffect(() => {
    setEnrollmentPeriod(getEnrollmentPeriod(new Date()))
    fetch('/data/fema-active.json')
      .then(r => r.json())
      .then(d => setFemaDeclarations(d.declarations || []))
      .catch(() => {})
  }, [])

  // Derived state
  const activeSignals = Array.from(signalStates.entries()).filter(([, s]) => s === 'active').map(([id]) => id)
  const dismissedSignals = Array.from(signalStates.entries()).filter(([, s]) => s === 'dismissed').map(([id]) => id)
  const uncheckedSignals = Array.from(signalStates.entries()).filter(([, s]) => s === 'unchecked').map(([id]) => id)
  const checkedCount = activeSignals.length + dismissedSignals.length
  const hasActiveSignals = activeSignals.length > 0
  const allChecked = uncheckedSignals.length === 0

  const signal: PageSignal = hasActiveSignals ? 'green'
    : femaResults.length > 0 ? 'yellow'
    : 'neutral'

  const isAEP = enrollmentPeriod?.period === 'AEP'
  const isOEP = enrollmentPeriod?.period === 'MA_OEP'
  const isSEPSeason = enrollmentPeriod?.period === 'SEP_SEASON'
  const oepHideBoard = isOEP && oepChoice === 'yes'

  function setSignalState(id: string, state: SignalState) {
    setSignalStates(prev => {
      const next = new Map(prev)
      next.set(id, state)
      return next
    })
  }

  function toggleExpanded(id: string) {
    setExpandedSignal(prev => prev === id ? null : id)
  }

  function handleFemaSearch() {
    const query = femaInput.trim().toLowerCase()
    if (!query) return
    const today = new Date()
    const matches = femaDeclarations.filter(d => {
      if (new Date(d.sepEndDate) < today) return false
      const stateMatch = d.state.toLowerCase().includes(query)
      const countyMatch = !d.allCounties && d.counties.some(c => c.toLowerCase().includes(query))
      return stateMatch || countyMatch
    })
    setFemaResults(matches)
    setFemaSearched(true)
  }

  function resetAll() {
    setSignalStates(new Map(SIGNALS.map(s => [s.id, 'unchecked'])))
    setExpandedSignal(null)
    setFemaInput('')
    setFemaResults([])
    setFemaSearched(false)
    setOepChoice(null)
    setShowMissed(false)
  }

  function scrollToSignal(id: string) {
    const el = signalRefs.current.get(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    setExpandedSignal(id)
  }

  function daysUntilFema(dateStr: string) {
    const d = new Date(dateStr)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return Math.ceil((d.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
  }

  // Keyboard shortcuts
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement)?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return

      const key = e.key.toLowerCase()

      // 1-6 toggle signal card expansion
      const num = parseInt(key)
      if (num >= 1 && num <= 6) {
        e.preventDefault()
        const sig = SIGNALS[num - 1]
        if (sig) toggleExpanded(sig.id)
        return
      }

      if (key === 'r') {
        e.preventDefault()
        resetAll()
        return
      }

      if (key === 'f') {
        e.preventDefault()
        femaInputRef.current?.focus()
        return
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  })

  const periodColorClass = {
    green: styles.bannerGreen,
    yellow: styles.bannerYellow,
    red: styles.bannerRed,
  }

  const daysLeftUrgency = enrollmentPeriod
    ? enrollmentPeriod.daysLeft <= 7 ? styles.daysLeftCritical
      : enrollmentPeriod.daysLeft <= 21 ? styles.daysLeftUrgent
      : styles.daysLeftOk
    : styles.daysLeftOk

  // Summary strip text
  function getSummaryText(): string {
    if (hasActiveSignals) {
      const names = activeSignals.map(id => {
        const sig = SIGNALS.find(s => s.id === id)!
        return sig.sep.name
      })
      return names.join(' · ') + ' — Use strongest SEP'
    }
    if (allChecked) {
      return 'All signals checked — no qualifying event. Disposition and move on.'
    }
    return `${checkedCount} of ${SIGNALS.length} checked · ${uncheckedSignals.length} signals to check`
  }

  return (
    <PageShell signal={signal}>
      <div className="page">

        {/* ── Sticky Summary Strip ──────────────────────────────────── */}
        {(checkedCount > 0 || femaSearched) && (
          <div
            className={`${styles.summaryStrip} ${hasActiveSignals ? styles.summaryStripActive : allChecked && !hasActiveSignals ? styles.summaryStripDone : ''}`}
            role="status"
            aria-live="polite"
          >
            <span className={styles.summaryText}>
              {hasActiveSignals && <CheckmarkFilled size={14} />}
              {getSummaryText()}
            </span>
            <span className={styles.summaryProgress}>
              {activeSignals.length} found · {checkedCount}/{SIGNALS.length} checked
            </span>
          </div>
        )}

        <div className={styles.layout}>

          {/* ============================================================
              LEFT COLUMN — Live Signal Board
          ============================================================ */}
          <div className={styles.leftCol}>

            {/* Page Header */}
            <div className={styles.pageHeader}>
              <div>
                <p className={styles.eyebrow}>Live Qualifier</p>
                <h1 className={`display-lg ${styles.pageTitle}`}>SEP Check</h1>
              </div>
              <div className={styles.headerActions}>
                <span className={styles.kbHint} title="Press 1-6 to expand signals, R to reset, F to focus FEMA">
                  <Keyboard size={14} />
                  1-6 · R · F
                </span>
                {(checkedCount > 0 || femaSearched) && (
                  <button className={styles.resetBtn} onClick={resetAll}>
                    New call
                  </button>
                )}
              </div>
            </div>

            {/* ── Enrollment Period Banner ──────────────────────────────── */}
            {enrollmentPeriod && (
              <div className={`${styles.periodBanner} ${periodColorClass[enrollmentPeriod.color]}`}>
                <div className={styles.periodBannerTop}>
                  <div className={styles.periodLeft}>
                    <Calendar size={15} />
                    <span className={styles.periodLabel}>{enrollmentPeriod.label}</span>
                    <span className={`${styles.periodShort} ${periodColorClass[enrollmentPeriod.color]}`}>
                      {enrollmentPeriod.shortLabel}
                    </span>
                  </div>
                  <span className={`${styles.daysLeft} ${daysLeftUrgency}`}>
                    {enrollmentPeriod.daysLeft <= 0
                      ? 'Period ended'
                      : `${enrollmentPeriod.daysLeft}d left · ${enrollmentPeriod.periodEndLabel}`}
                  </span>
                </div>
                <p className={styles.periodNote}>{enrollmentPeriod.note}</p>
              </div>
            )}

            {/* ── AEP BLOCK ────────────────────────────────────────────── */}
            {isAEP && (
              <div className={styles.aepBlock}>
                <CheckmarkFilled size={22} className={styles.aepIcon} />
                <div>
                  <p className={styles.aepTitle}>Open enrollment is active — no SEP required</p>
                  <p className={styles.aepBody}>
                    You can enroll any Medicare beneficiary right now. Coverage effective January&nbsp;1st.
                    AEP closes {enrollmentPeriod?.periodEndLabel?.replace('Closes ', '')}.
                    Skip the SEP qualifier and go straight to plan selection.
                  </p>
                </div>
              </div>
            )}

            {/* ── OEP BLOCK — Interactive Fork ─────────────────────────── */}
            {isOEP && (
              <div className={styles.oepBlock}>
                <div className={styles.oepHeader}>
                  <Calendar size={16} className={styles.oepIcon} />
                  <p className={styles.oepTitle}>MA Open Enrollment Period — Does this caller already have an MA plan?</p>
                </div>

                {/* Fork buttons */}
                <div className={styles.oepForkRow}>
                  <button
                    className={`${styles.oepForkBtn} ${styles.oepForkYes} ${oepChoice === 'yes' ? styles.oepForkSelected : ''} ${oepChoice === 'no' ? styles.oepForkFaded : ''}`}
                    onClick={() => setOepChoice(oepChoice === 'yes' ? null : 'yes')}
                    aria-pressed={oepChoice === 'yes'}
                  >
                    <CheckmarkFilled size={14} />
                    YES — has MA plan
                  </button>
                  <button
                    className={`${styles.oepForkBtn} ${styles.oepForkNo} ${oepChoice === 'no' ? styles.oepForkSelected : ''} ${oepChoice === 'yes' ? styles.oepForkFaded : ''}`}
                    onClick={() => setOepChoice(oepChoice === 'no' ? null : 'no')}
                    aria-pressed={oepChoice === 'no'}
                  >
                    <CloseFilled size={14} />
                    NO — Original Medicare only
                  </button>
                </div>

                <AnimatePresence>
                  {oepChoice === 'yes' && (
                    <motion.div
                      className={styles.oepResult}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className={`${styles.oepResultInner} ${styles.oepResultYes}`}>
                        <p className={styles.oepResultTitle}>One change available. No SEP needed.</p>
                        <ul className={styles.oepList}>
                          <li>MA plan → different MA plan</li>
                          <li>MA plan → Original Medicare (+ PDP)</li>
                          <li>One change only — locked until AEP after that</li>
                          <li>Coverage effective 1st of the following month</li>
                        </ul>
                        <p className={styles.oepNote}>Proceed to enrollment.</p>
                      </div>
                    </motion.div>
                  )}
                  {oepChoice === 'no' && (
                    <motion.div
                      className={styles.oepResult}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className={`${styles.oepResultInner} ${styles.oepResultNo}`}>
                        <p className={styles.oepResultTitle}>OEP doesn&apos;t help them. A qualifying SEP is required.</p>
                        <p className={styles.oepResultSub}>Work through the signals below to find one.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {oepHideBoard && (
                  <button
                    className={styles.oepShowSignals}
                    onClick={() => setOepChoice(null)}
                  >
                    Still need to check SEPs? Show signal board
                  </button>
                )}
              </div>
            )}

            {/* ── FEMA Block ───────────────────────────────────────────── */}
            {!(isAEP && !isSEPSeason && !isOEP) || true ? (
              <div className={styles.femaBlock}>
                <p className={styles.blockHeading}>
                  <Location size={14} />
                  FEMA Disaster SEP — Check State or County
                </p>
                <p className={styles.blockSub}>
                  Run this when you get their state. Type the state name or county name — not ZIP.
                  If there&apos;s an active declaration, <strong>DST SEP</strong> may apply.
                </p>
                <div className={styles.femaInputRow}>
                  <input
                    ref={femaInputRef}
                    className={styles.femaInput}
                    type="text"
                    value={femaInput}
                    onChange={e => setFemaInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleFemaSearch()}
                    placeholder="State name or county — e.g. Florida, Texas, Harris..."
                  />
                  <button className={styles.femaBtn} onClick={handleFemaSearch}>
                    Check
                  </button>
                </div>
                <p className={styles.femaHint}>
                  Don&apos;t have a county? Type the state. ZIP → state: check their address in the system.
                </p>

                <AnimatePresence>
                  {femaSearched && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {femaResults.length === 0 ? (
                        <div className={styles.femaNoMatch}>
                          <CloseFilled size={14} />
                          <span>No active declarations for &quot;{femaInput}&quot;. Verify at fema.gov/disasters before concluding no DST SEP exists.</span>
                        </div>
                      ) : (
                        <div className={styles.femaMatchList}>
                          <p className={styles.femaMatchCount}>
                            <CheckmarkFilled size={14} />
                            {femaResults.length} active declaration{femaResults.length > 1 ? 's' : ''} — DST SEP may apply
                          </p>
                          {femaResults.map((d, i) => {
                            const days = daysUntilFema(d.sepEndDate)
                            return (
                              <div key={i} className={styles.femaResult}>
                                <div className={styles.femaResultTop}>
                                  <span className={styles.femaState}>{d.state} — {d.disaster}</span>
                                  <span className={`${styles.femaDays} ${days <= 30 ? styles.femaDaysUrgent : ''}`}>
                                    {days}d left
                                  </span>
                                </div>
                                <p className={styles.femaCounties}>
                                  {d.allCounties ? 'All counties / Entire State' : d.counties.slice(0, 5).join(', ') + (d.counties.length > 5 ? ` +${d.counties.length - 5} more` : '')}
                                </p>
                                <div className={styles.femaChecklist}>
                                  <p className={styles.femaCheckTitle}>3-point DST SEP check:</p>
                                  <ol>
                                    <li>Beneficiary lived in this county during the incident</li>
                                    <li>AEP, IEP, or OEP was open during the incident</li>
                                    <li>The disaster prevented them from enrolling — and they didn&apos;t make an election during that period</li>
                                  </ol>
                                  <p className={styles.femaCode}>
                                    Application code: <code>SEP DST</code>
                                    <span className={styles.femaCodeNote}> · Agents can submit directly (CMS reversed April 2025 restriction, Mar 20, 2025)</span>
                                  </p>
                                  <p className={styles.femaMarketing}>Do not proactively market this SEP. Only use when beneficiary raises it.</p>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : null}

            {/* ── Signal Board ─────────────────────────────────────────── */}
            {!oepHideBoard && (
              <>
                {isOEP && (
                  <p className={styles.signalSubNote}>During OEP, these SEPs still apply to Original Medicare enrollees.</p>
                )}

                {/* Progress indicator */}
                <div className={styles.progressBar} role="status" aria-live="polite">
                  <div className={styles.progressFill} style={{ width: `${(checkedCount / SIGNALS.length) * 100}%` }} />
                  <span className={styles.progressText}>
                    Checked {checkedCount} of {SIGNALS.length}
                    {activeSignals.length > 0 && ` · ${activeSignals.length} SEP${activeSignals.length > 1 ? 's' : ''} found`}
                  </span>
                </div>

                <div className={styles.signalGrid}>
                  {SIGNALS.map((sig, idx) => {
                    const state = signalStates.get(sig.id) || 'unchecked'
                    const isExpanded = expandedSignal === sig.id

                    return (
                      <div
                        key={sig.id}
                        ref={el => { if (el) signalRefs.current.set(sig.id, el) }}
                        className={[
                          styles.signalCard,
                          state === 'active' ? styles.signalActive : '',
                          state === 'dismissed' ? styles.signalDismissed : '',
                          sig.frequency === 'high' ? styles.signalFreqHigh : '',
                          sig.frequency === 'low' ? styles.signalFreqLow : '',
                        ].filter(Boolean).join(' ')}
                        aria-expanded={isExpanded}
                      >
                        <button
                          className={styles.signalTap}
                          onClick={() => toggleExpanded(sig.id)}
                          aria-controls={`signal-detail-${sig.id}`}
                        >
                          <div className={styles.signalCheck}>
                            {state === 'active'
                              ? <CheckmarkFilled size={18} />
                              : state === 'dismissed'
                              ? <Subtract size={16} />
                              : <span className={styles.signalNum}>{idx + 1}</span>
                            }
                          </div>
                          <div className={styles.signalTapBody}>
                            <div className={styles.signalTopRow}>
                              <p className={styles.signalLabel}>{sig.label}</p>
                              <span className={styles.signalPhase}>
                                <Time size={10} />
                                {sig.phase}
                              </span>
                            </div>
                            <div className={styles.signalAskHear}>
                              <span className={styles.askTag}>ASK</span>
                              <span className={styles.askText}>{sig.askThis}</span>
                              <span className={styles.hearDot}>·</span>
                              <span className={styles.hearTag}>HEAR</span>
                              <span className={styles.hearKeywords}>{sig.listenFor.slice(0, 3).join(' · ')}</span>
                            </div>
                          </div>
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              id={`signal-detail-${sig.id}`}
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.22 }}
                              className={styles.sepDetail}
                            >
                              <div className={styles.sepDetailInner}>

                                {/* Action buttons — dismiss / activate */}
                                <div className={styles.signalActions}>
                                  <button
                                    className={`${styles.actionBtn} ${styles.actionDismiss} ${state === 'dismissed' ? styles.actionSelected : ''}`}
                                    onClick={() => setSignalState(sig.id, state === 'dismissed' ? 'unchecked' : 'dismissed')}
                                  >
                                    <Subtract size={14} />
                                    {state === 'dismissed' ? 'Dismissed' : 'No trigger'}
                                  </button>
                                  <button
                                    className={`${styles.actionBtn} ${styles.actionActivate} ${state === 'active' ? styles.actionSelected : ''}`}
                                    onClick={() => setSignalState(sig.id, state === 'active' ? 'unchecked' : 'active')}
                                  >
                                    <CheckmarkFilled size={14} />
                                    {state === 'active' ? 'SEP Found' : 'SEP found'}
                                  </button>
                                </div>

                                {/* Callout */}
                                <p className={styles.signalCallout}>{sig.callout}</p>

                                {/* Full listen-for list */}
                                <div className={styles.hearFullRow}>
                                  <span className={styles.hearLabel}>Listen for</span>
                                  <p className={styles.hearText}>{sig.listenFor.join(' · ')}</p>
                                </div>

                                {/* SEP detail — script first */}
                                <div className={styles.sepTopRow}>
                                  <p className={styles.sepDetailName}>
                                    {sig.sep.name}
                                    <code className={styles.activeSepCode}>{sig.sep.code}</code>
                                  </p>
                                  <div className={styles.sepWindow}>
                                    <Calendar size={12} />
                                    <span>{sig.sep.window}</span>
                                  </div>
                                </div>

                                {sig.sep.isTimeSensitive && (
                                  <DeadlineCalc
                                    label={
                                      sig.id === 'moved' ? 'When did they move?' :
                                      sig.id === 'lost-coverage' ? 'When did coverage end?' :
                                      'When did this happen?'
                                    }
                                  />
                                )}

                                {/* Script — auto-expanded when active */}
                                <div className={styles.scriptBlock}>
                                  <p className={styles.scriptLabel}>What to say</p>
                                  <p className={styles.sepScript}>
                                    &ldquo;{sig.sep.script}&rdquo;
                                  </p>
                                </div>

                                <ul className={styles.sepAllowed}>
                                  {sig.sep.allowed.map((a, i) => (
                                    <li key={i}>
                                      <CheckmarkFilled size={12} />
                                      {a}
                                    </li>
                                  ))}
                                </ul>

                                <div className={styles.nextStepBlock}>
                                  <p className={styles.nextStepLabel}>Next step</p>
                                  <p className={styles.nextStepText}>{sig.sep.nextStep}</p>
                                </div>

                                <div className={styles.sepVerify}>
                                  <Warning size={12} />
                                  <p>{sig.sep.verify}</p>
                                </div>

                                {sig.sep.warning && (
                                  <div className={styles.sepWarning}>
                                    <p>{sig.sep.warning}</p>
                                  </div>
                                )}

                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  })}
                </div>
              </>
            )}

            {/* ── Dig Deeper / No SEP ──────────────────────────────────── */}
            {!isAEP && !oepHideBoard && (
              <div className={styles.noSepBlock}>
                {uncheckedSignals.length > 0 && (
                  <div className={styles.digDeeper}>
                    <p className={styles.digDeeperTitle}>You haven&apos;t checked these yet</p>
                    <div className={styles.digDeeperList}>
                      {uncheckedSignals.map(id => {
                        const sig = SIGNALS.find(s => s.id === id)!
                        return (
                          <button
                            key={id}
                            className={styles.digDeeperItem}
                            onClick={() => scrollToSignal(id)}
                          >
                            <span className={styles.digDeeperNum}>
                              {SIGNALS.findIndex(s => s.id === id) + 1}
                            </span>
                            <span>{sig.label}</span>
                            <ArrowRight size={12} />
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}

                {allChecked && !hasActiveSignals && (
                  <motion.div
                    className={styles.cleanExit}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={SPRING_FAST}
                  >
                    <p className={styles.cleanExitTitle}>All signals checked — no qualifying event</p>
                    <p className={styles.cleanExitText}>Disposition and move on.</p>
                  </motion.div>
                )}
              </div>
            )}

          </div>

          {/* ============================================================
              RIGHT COLUMN — Active Summary + Reference
          ============================================================ */}
          <div className={styles.rightCol}>

            {/* Active SEP Summary */}
            <AnimatePresence>
              {hasActiveSignals && (
                <motion.div
                  className={styles.activeSummary}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={SPRING_FAST}
                  aria-live="polite"
                >
                  <p className={styles.activeSummaryLabel}>
                    <CheckmarkFilled size={14} />
                    {activeSignals.length} SEP{activeSignals.length > 1 ? 's' : ''} identified
                  </p>
                  {activeSignals.map(id => {
                    const sig = SIGNALS.find(s => s.id === id)!
                    return (
                      <div key={id} className={styles.activeSepRow}>
                        <ArrowRight size={12} />
                        <div>
                          <p className={styles.activeSepName}>
                            {sig.sep.name}
                            {sig.sep.code && <code className={styles.activeSepCode}>{sig.sep.code}</code>}
                          </p>
                          <p className={styles.activeSepWindow}>{sig.sep.window}</p>
                        </div>
                      </div>
                    )
                  })}
                  <p className={styles.activeSummaryNote}>
                    Use the strongest SEP — the one with the broadest enrollment options.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Common Missed Scenarios — collapsed by default, hidden when signals active */}
            {!hasActiveSignals && (
              <div className={styles.missedBlock}>
                <button
                  className={styles.missedToggle}
                  onClick={() => setShowMissed(prev => !prev)}
                  aria-expanded={showMissed}
                >
                  <span className={styles.blockHeading} style={{ marginBottom: 0 }}>
                    <Warning size={14} />
                    Most Commonly Missed
                  </span>
                  {showMissed ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>

                <AnimatePresence>
                  {showMissed && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className={styles.missedContent}
                    >
                      <div className={styles.missedList}>
                        <div className={styles.missedItem}>
                          <p className={styles.missedTrigger}>&ldquo;I know I have a Medicaid&rdquo;</p>
                          <p className={styles.missedSep}>→ Dual/LIS Monthly SEP — open right now</p>
                          <p className={styles.missedNote}>Said in minute 2. Agent noticed, moved on, forgot. Looked for SEP at minute 23. Asked one question. Found nothing. Call ended without enrollment.</p>
                        </div>
                        <div className={styles.missedItem}>
                          <p className={styles.missedTrigger}>System shows TX address · caller gives TN address</p>
                          <p className={styles.missedSep}>→ Change of Residence SEP — open right now</p>
                          <p className={styles.missedNote}>Agent updated address in system and kept shopping for plans. Never named the SEP. Caller had a live 2-month window that was never used.</p>
                        </div>
                        <div className={styles.missedItem}>
                          <p className={styles.missedTrigger}>&ldquo;My house burned in February… I have Medicaid and it pays my Part B&rdquo;</p>
                          <p className={styles.missedSep}>→ Move SEP + Dual/LIS SEP (two at once)</p>
                          <p className={styles.missedNote}>Both signals surfaced in the first 10 minutes. Agent found zero SEPs. 30-minute call ended with &ldquo;contact your carrier about the OTC card.&rdquo;</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Call Flow Order */}
            <div className={styles.ruleBlock}>
              <p className={styles.blockHeading}>Call Flow Order</p>
              <div className={styles.ruleList}>
                <div className={styles.ruleRow}>
                  <span className={styles.ruleNum}>1</span>
                  <p>Get ZIP / state → run FEMA check</p>
                </div>
                <div className={styles.ruleRow}>
                  <span className={styles.ruleNum}>2</span>
                  <p>Verify address in system → address mismatch = Move SEP</p>
                </div>
                <div className={styles.ruleRow}>
                  <span className={styles.ruleNum}>3</span>
                  <p>Qualifying questions → hear &ldquo;Medicaid&rdquo; = tap immediately</p>
                </div>
                <div className={styles.ruleRow}>
                  <span className={styles.ruleNum}>4</span>
                  <p>View plan in system → check for termination status</p>
                </div>
                <div className={styles.ruleRow}>
                  <span className={styles.ruleNum}>5</span>
                  <p>Health / medication questions → hear a condition = check C-SNP</p>
                </div>
                <div className={styles.ruleRow}>
                  <span className={styles.ruleNum}>6</span>
                  <p>No signals found → all checked, disposition and move on</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── Full SEP Reference — full width below grid ──────────── */}
        <div className={styles.refSection}>
          <button
            className={styles.cheatToggle}
            onClick={() => setShowCheatSheet(!showCheatSheet)}
            aria-expanded={showCheatSheet}
          >
            <span className={styles.cheatToggleLabel}>Full SEP Trigger Reference</span>
            {showCheatSheet ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
          </button>

          <AnimatePresence>
            {showCheatSheet && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className={styles.cheatSheet}
              >
                <div className={styles.cheatTable}>
                  <div className={styles.cheatHeader}>
                    <span>Trigger</span>
                    <span>SEP</span>
                    <span>Window</span>
                    <span>Code</span>
                  </div>
                  {CHEAT_SHEET.map((group, gi) => (
                    <div key={gi}>
                      <div className={styles.cheatCategory}>{group.category}</div>
                      {group.items.map((row, i) => (
                        <div key={i} className={styles.cheatRow}>
                          <span className={styles.cheatTrigger}>{row.trigger}</span>
                          <span className={styles.cheatSep}>
                            {row.sep}
                            {row.note && <span className={styles.cheatNote}>{row.note}</span>}
                          </span>
                          <span className={styles.cheatWindow}>{row.window}</span>
                          <span className={styles.cheatCodeCol}>{row.code && <code className={styles.cheatCode}>{row.code}</code>}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <p className={styles.cheatSource}>CMS MA/PD Enrollment Guidance CY2025–2026 · 42 CFR §422.62, §423.38 · ACC — DO NOT USE (CMS internal only)</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </PageShell>
  )
}
