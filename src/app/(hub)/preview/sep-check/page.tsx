'use client'

import { useState, useEffect, useRef, Fragment } from 'react'
import { motion, AnimatePresence, useReducedMotion, animate as fmAnimate } from 'framer-motion'
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
      window: 'IEP: 7 months (3 before + birthday month + 3 after). ICEP: 5 months (3 before + Part B month + 1 after, extended 1/1/2025). IEP2: fresh 7-month window when disability beneficiary turns 65.',
      isTimeSensitive: true,
      allowed: [
        'IEP: Enroll in MAPD or PDP for the first time (NOT valid for MA-only plans)',
        'ICEP: Enroll in MA or MAPD when Part B activates after delay (NOT valid for PDP — use IEP for PDP)',
        'IEP2: Uses MRD on application — same as IEP but a completely fresh window (MA-only plans prohibited)',
      ],
      script: 'Since you just became eligible for Medicare, you\'re actually still in your initial enrollment window. That means we can get you set up with the right plan right now — no special circumstances needed.',
      verify: 'Ask: "When exactly did your Part B start?" IEP = 7-month window around 65th birthday. ICEP = 5-month window for delayed Part B (extended as of 1/1/2025 to 3 months before + month of + 1 month after). Part A and Part B must have the SAME effective date for IEP; different dates → use ICEP. IEP2 = disability beneficiary turning 65 gets a completely fresh 7-month window — look for 1961 birth year in MARx. Also: OEP-N = if their first MA/MAPD already effectuated and they don\'t like it, they get month of effectuation + 2 months to make ONE change.',
      nextStep: 'Confirm Part B effective date. Calculate the window. IEP/IEP2 = 7 months, ICEP = 5 months. If already in a plan they don\'t like (OEP-N), they get one change within 3 months of effectuation. If beneficiary was notified of A/B AFTER coverage started → RET (month of notice + 2 months).',
    },
  },
]

/* ------------------------------------------------------------------ */
/* Cheat Sheet                                                         */
/* ------------------------------------------------------------------ */

interface CheatItem {
  trigger: string
  sep: string
  window: string
  code: string | null
  notes?: string[]
  detail?: {
    what: string
    qualify: string[]
    watch?: string[]
    script?: string
  }
}

const CHEAT_SHEET: { category: string; items: CheatItem[] }[] = [
  {
    category: 'New to Medicare',
    items: [
      { trigger: 'Turning 65 / just got Medicare', sep: 'Initial Enrollment Period', window: '7 months (3 before + birthday month + 3 after)', code: 'IEP', notes: ['Beneficiary just turned 65', 'On disability for 24 months', 'If beneficiary is in an ACTIVE plan that has effectuated, this is no longer a valid option', 'NOT valid for a MA-only plan'], detail: {
        what: "The IEP is the first-and-only chance to enroll in Medicare coverage at age 65. It's the default enrollment window and the most generous — 7 months total. If the beneficiary misses it and has no employer coverage, they'll face late enrollment penalties.",
        qualify: [
          'Turning 65 — Part A and Part B must share the same effective date',
          "Under 65 on disability for 24+ months also qualifies (but use IEP2 if they're now turning 65)",
          'Only valid if beneficiary is NOT already in an active, effectuated MA/MAPD plan',
          'NOT valid for MA-only plans (must include drug coverage or be MAPD)',
        ],
        watch: [
          "IEP vs ICEP: If Part A and Part B have DIFFERENT effective dates → it's ICEP, not IEP",
          'Already effectuated? If any plan has gone active, IEP is no longer available — you need OEP-N or an SEP',
          'Calculate the window from their birthday, not their Part B date',
        ],
        script: "Since you're right in your enrollment window, we can get you set up today — no special circumstances needed.",
      }},
      { trigger: 'Under-65 disability beneficiary turning 65', sep: 'IEP2 (fresh window)', window: '7 months around 65th birthday', code: 'IEP2 (MRD)', notes: ['1961 is the GOLDEN YEAR to look for in MARx DOB', 'MA-only plans are prohibited'], detail: {
        what: "A disability beneficiary turning 65 gets a brand-new 7-month IEP window, as if they were newly eligible. MARx shows their Medicare Reason for Disability (MRD). The golden year to spot: 1961 DOB — they're turning 65 now.",
        qualify: [
          'Was on Medicare due to disability (under 65), now turning 65',
          "Look for 1961 birth year in MARx (they're aging in during this AEP cycle)",
          'MA-only plans are prohibited — must include Part D',
        ],
        watch: [
          'Do not confuse their existing disability plan enrollment with using their IEP2 — they have a fresh window',
          'MA-only is PROHIBITED — always enroll into MAPD or PDP',
        ],
      }},
      { trigger: 'Delayed Part B, now activating', sep: 'Initial Coverage Election Period', window: '5 months (3 before + Part B month + 1 after)', code: 'ICEP', notes: ['Part A and Part B have different effective dates', 'Timeframe extended as of 1/1/25', 'NOT valid for a PDP'], detail: {
        what: "The ICEP applies when a beneficiary delayed Part B (kept employer coverage) and is now activating it. Part A and Part B will have different effective dates — that's the trigger. As of 1/1/2025, the window expanded to 5 months.",
        qualify: [
          'Part A and Part B have DIFFERENT effective dates',
          '5-month window: 3 months before Part B month + Part B month + 1 month after',
          'NOT valid for a PDP (Part D standalone)',
        ],
        watch: [
          'If both Part A and Part B share the same effective date → use IEP, not ICEP',
          'Window extended as of 1/1/2025 — old notes showing 3 months are outdated',
          'Employer coverage ending at the same time? This may also trigger LEC — document both',
        ],
      }},
      { trigger: "New to Medicare, doesn't like first MA/MAPD", sep: 'New Enrollee OEP', window: 'Month of effectuation + 2 months', code: 'OEP-N', notes: ['Allows ONE CHANGE only', 'Those with only a PDP and/or a Medigap plan are unable to use this'], detail: {
        what: "If a beneficiary just enrolled in their very first MA/MAPD plan and doesn't like it, they get one chance to change within 3 months of the plan's effective date. This is their New Enrollee OEP — a one-time course-correction.",
        qualify: [
          'First-time MA/MAPD enrollment only — this is NOT for returning MA members',
          'One change only during the 3-month window (month of effectuation + 2 months after)',
          'Cannot be used if they only have a PDP or Medigap — must have an MA/MAPD that effectuated',
        ],
        watch: [
          "One change means one — if they already used OEP-N once, it's gone",
          'PDP-only or Medigap-only beneficiaries CANNOT use OEP-N',
          "The plan must have actually effectuated — pending enrollment doesn't count",
        ],
        script: "Since this is your first Medicare Advantage plan and it just went into effect, you actually have a window right now to make one change if it's not the right fit.",
      }},
      { trigger: 'Notified of A/B AFTER coverage started', sep: 'Retroactive Entitlement', window: 'Month of notice + 2 months', code: 'RET', notes: ['If beneficiary has Part A and Part B, they must have the same effective date'], detail: {
        what: "This SEP covers beneficiaries who were retroactively enrolled in Medicare — their Part A and/or Part B started without them knowing, and they only found out after the fact. The clock starts from the notification date, not from when coverage began.",
        qualify: [
          'Was notified of Part A and/or Part B AFTER their coverage had already started',
          'If they have both Part A and Part B, both effective dates must be the same',
          'Window: the month of notification + 2 full calendar months',
        ],
        watch: [
          'The trigger is the notification date, not the coverage effective date — confirm exactly when they received the notice',
          'If Part A and Part B have different effective dates → use ICEP, not RET',
          'Commonly surfaces when Social Security retroactively awards disability or Medicare benefits',
        ],
      }},
    ],
  },
  {
    category: 'Financial Eligibility',
    items: [
      { trigger: 'Full Medicaid — enrolling in D-SNP', sep: 'Integrated Care SEP', window: 'Any month, repeatable', code: 'INT', notes: ['Beneficiary MUST have FULL Medicaid (FBDE, QMB+, SLMB+, Full)', 'Please see the INT/MCO Reference Sheet to determine eligibility before enrolling'], detail: {
        what: "The Integrated Care SEP allows a beneficiary with full Medicaid to enroll in a D-SNP at any time. It's repeatable — meaning they can use it multiple times per year if their situation changes. Always verify Medicaid level before using this SEP.",
        qualify: [
          'Must have FULL Medicaid: FBDE (Full Benefit Dual Eligible), QMB+, SLMB+, or Full',
          'Enrolling into a D-SNP (Dual-Eligible Special Needs Plan) only',
          'Any month, repeatable — no annual limit',
          'Check the INT/MCO Reference Sheet to confirm eligibility before enrolling',
        ],
        watch: [
          'QMB-only does NOT qualify for INT — they need QMB+ or higher',
          'Wrong Medicaid level = invalid enrollment. Always verify before submitting',
          'If they only have LIS (Low Income Subsidy) without full Medicaid → use DEP instead',
        ],
      }},
      { trigger: 'Any Medicaid or LIS — PDP change', sep: 'Dual/LIS Monthly SEP', window: 'Any month, repeatable', code: 'DEP', notes: ['MUST enroll into a PDP', 'All levels of Medicaid qualify. If beneficiary only has LIS, they are still eligible'], detail: {
        what: "Any beneficiary with any level of Medicaid or LIS/Extra Help can change their standalone Part D drug plan every single month — no annual limit, no window to miss. For D-SNP enrollment, use INT instead. DEP is PDP-only.",
        qualify: [
          'Any level of Medicaid OR any level of LIS/Extra Help — including QMB-only and LIS-only',
          'MUST be enrolling into a standalone PDP; cannot use DEP for MA or MAPD',
          'Available any month, repeatable every month',
        ],
        watch: [
          'DEP = PDP only. If they want a D-SNP → use INT (requires full Medicaid)',
          'Do not confuse with INT: DEP = any Medicaid/LIS level for PDP; INT = full Medicaid for D-SNP only',
          'If their Medicaid or LIS level recently changed → MCD or NLS may also apply',
        ],
        script: "Since you have [Medicaid / Extra Help], you actually have the ability to change your drug plan every single month — you're not locked in. If we find something better today, we can get that started for the 1st of next month.",
      }},
      { trigger: 'Lost/gained/changed Medicaid level', sep: 'Medicaid Change SEP', window: '3 months from change', code: 'MCD', notes: ['Available all year INCLUDING AFTER SEPT 30TH'], detail: {
        what: "When a beneficiary gains, loses, or changes their Medicaid level, they get 3 months to adjust their Medicare plan enrollment. This SEP is available all year — including past the typical September 30th cutoff. Listen for any mention of recent Medicaid changes.",
        qualify: [
          'Gained, lost, or had a Medicaid level change (e.g., QMB-only to full Medicaid, or lost Medicaid entirely)',
          '3 months from the date the Medicaid change took effect',
          'Available all year — does NOT cut off after September 30th',
        ],
        watch: [
          'Document the date the Medicaid change took effect — the window runs from that date, not the call date',
          'If they now qualify for full Medicaid and want a D-SNP → INT may also be available simultaneously',
          'Look for green, purple, or orange Social Security letters — these often signal an MCD/NLS event',
        ],
      }},
      { trigger: 'Lost/gained/changed Extra Help level', sep: 'Extra Help Change SEP', window: '3 months from change', code: 'NLS', notes: ['Available all year INCLUDING AFTER SEPT 30TH'], detail: {
        what: "When a beneficiary's Extra Help (LIS) level changes — gained, lost, or shifted between tiers — they get 3 months to change plans. Available all year past September 30th. Beneficiaries often don't realize their LIS level changed after an annual Social Security redetermination.",
        qualify: [
          'Gained, lost, or had a level change in Extra Help/LIS (Auto, Full, or Partial tiers all count)',
          '3 months from the date of the LIS change',
          'Available all year — does NOT cut off after September 30th',
        ],
        watch: [
          'Look for green, purple, or orange letters from Social Security — these signal an Extra Help change',
          'A shift between LIS tiers (e.g., Full to Partial) qualifies — not just gaining or losing it entirely',
          'If Medicaid also changed at the same time → MCD applies too; document both codes',
        ],
      }},
    ],
  },
  {
    category: 'Location / Life Change',
    items: [
      { trigger: 'Moved to a different ZIP or county', sep: 'Change of Residence SEP', window: 'Mo before (if notified) + mo of + 2 mo after', code: 'MOV', notes: ['NOT valid with change of PO Box'], detail: {
        what: "If the beneficiary moved to a new ZIP code or county and their current plan doesn't serve the new area, they have a live SEP right now. The moment you see a system address mismatch, stop and treat it as an actionable SEP.",
        qualify: [
          "Moved to a new ZIP code or county where their current plan isn't available",
          'Window: month before the move (if notified in advance) + month of move + 2 full calendar months after',
          'Can enroll in any MA, MAPD, or PDP available at the new address',
        ],
        watch: [
          'PO Box change ONLY does NOT qualify — must be a physical address change',
          'Address update in the system ≠ SEP used — you still need to submit the enrollment',
          'If they moved months ago and are outside the window, check for other SEPs (LCC, etc.)',
        ],
        script: "Because you've moved to a new area, you're actually in a special enrollment window right now. We can get you set up with the right plan for your new address today.",
      }},
      { trigger: 'Released from incarceration', sep: 'Post-Incarceration SEP', window: '2 months after release', code: 'INC', detail: {
        what: "A beneficiary recently released from a correctional facility gets 2 months to enroll in Medicare coverage. Medicare is suspended — not terminated — during incarceration, so Part A and B should still be intact. They just need to re-enroll in a plan after release.",
        qualify: [
          'Released from a correctional facility (jail, prison, or detention center)',
          'Window: 2 months from the release date',
          'Can enroll in MA, MAPD, or PDP available at their address',
        ],
        watch: [
          'Medicare is suspended during incarceration, not terminated — Part A/B should still be active upon release',
          'Verify the exact release date — the 2-month window starts from that date, not from when they call',
          'Pre-release planning is possible: enrollment can be submitted up to 1 month before the release date',
        ],
      }},
      { trigger: 'Returned to US after living abroad', sep: 'Return to US SEP', window: '2 months after return', code: 'RUS', detail: {
        what: "A Medicare beneficiary who was living permanently outside the US gets 2 months to enroll in a plan after returning. Medicare is generally suspended during extended foreign residence — Part A and B should still be there, but they need an active plan once back on US soil.",
        qualify: [
          'Was living permanently abroad (not vacationing) and has now returned to the US',
          'Window: 2 months from the return date',
          'Can enroll in MA, MAPD, or PDP available at their US address',
        ],
        watch: [
          'Short trips and vacations do NOT qualify — must have been permanently residing outside the US',
          'Verify their US address is current in the system before submitting enrollment',
          'If absent for an extended period, confirm Part A/B are still active before proceeding',
        ],
      }},
      { trigger: 'Recently became a US citizen', sep: 'Lawful Presence SEP', window: 'Month of + 2 full months', code: 'LAW', detail: {
        what: "When a beneficiary becomes a US citizen or gains the lawful status that makes them newly eligible for Medicare, they have the month of the status change plus 2 full months to enroll. This SEP is specifically for those who recently crossed the eligibility threshold — not those who were always eligible.",
        qualify: [
          'Recently became a US citizen or acquired qualifying lawful presence for Medicare eligibility',
          'Window: the month of the status change + 2 full calendar months',
          'Can enroll in MA, MAPD, or PDP',
        ],
        watch: [
          'Citizenship alone does not auto-start Medicare — confirm Part A/B are active or activating first',
          'The window starts from the date citizenship or qualifying status was officially granted, not the call date',
          'Some non-citizens may have waiting periods for premium-free Part A — confirm full Medicare eligibility before proceeding',
        ],
      }},
    ],
  },
  {
    category: 'Chronic / Special Needs',
    items: [
      { trigger: 'Has qualifying chronic condition + C-SNP available', sep: 'C-SNP Eligibility SEP', window: 'Once per calendar year', code: 'CSN', notes: ['MUST be enrolling into a C-SNP', 'Not valid moving beneficiary from CSNP to CSNP — UNLESS it is a Specific Condition CSNP going to a different Condition CSNP'], detail: {
        what: "A beneficiary with a qualifying severe or disabling chronic condition — such as diabetes, heart failure, ESRD, or COPD — can enroll in a Chronic Condition SNP (C-SNP) built for that condition. Available once per calendar year. Use it when a beneficiary discloses a condition and a matching C-SNP exists in their county.",
        qualify: [
          'Must have a qualifying severe or disabling chronic condition that matches the C-SNP',
          'Must be enrolling INTO a C-SNP — not any standard MA or MAPD plan',
          'Once per calendar year',
          'NOT valid for moving from one C-SNP to another C-SNP for the same condition type',
        ],
        watch: [
          'Always verify a C-SNP for that exact condition exists in their county before confirming this SEP — check carrier portals',
          'C-SNP to C-SNP for the same condition = NOT valid; switching to a C-SNP for a different condition = valid',
          "Let the beneficiary volunteer conditions naturally — do not ask leading diagnostic questions",
        ],
        script: "Because you have [condition], you may actually qualify for a Special Needs Plan built specifically for people managing that condition. These plans often have lower copays and benefits tailored to your exact needs — and you can enroll right now.",
      }},
      { trigger: 'Enrolled in state Pharmacy Assistance Program', sep: 'SPAP SEP', window: '1x/year while enrolled; 2 mo after loss', code: 'PAP', notes: ['Check approved options site for eligible programs', 'Very common for those in New York (EPIC), New Jersey (PAAD), Pennsylvania (PACE/PACENET), Wisconsin (SeniorRx)'], detail: {
        what: "Beneficiaries enrolled in an approved State Pharmaceutical Assistance Program (SPAP) — like NY's EPIC or NJ's PAAD — get one PDP change per year plus a 2-month window if they lose that state program. Ask about state assistance programs when you hear them mention help paying for medications from the state.",
        qualify: [
          'Currently enrolled in a CMS-approved SPAP program',
          'Once per calendar year while enrolled; 2 months after losing SPAP enrollment',
          'For PDP enrollment or changes only',
        ],
        watch: [
          'Not all state assistance programs qualify — must be on the CMS-approved SPAP list',
          'Common qualifying programs: New York (EPIC), New Jersey (PAAD), Pennsylvania (PACE/PACENET), Wisconsin (SeniorRx)',
          'Confirm the beneficiary is still actively enrolled in the SPAP program before submitting',
        ],
      }},
      { trigger: 'Leaving PACE program', sep: 'PACE Disenrollment SEP', window: '2 months after disenrollment', code: 'PAC', notes: ['DO NOT pull beneficiary out of PACE plan'], detail: {
        what: "When a beneficiary voluntarily disenrolls from a PACE (Program of All-Inclusive Care for the Elderly) plan, they get 2 months to enroll in a new plan. PACE is a comprehensive, coordinated program for frail elderly individuals — never suggest or initiate PACE disenrollment. This SEP only applies after disenrollment has already occurred.",
        qualify: [
          'Beneficiary has already disenrolled from a PACE program on their own initiative',
          'Window: 2 months from the PACE disenrollment date',
          'Can enroll in MA, MAPD, or PDP',
        ],
        watch: [
          'DO NOT suggest, encourage, or initiate PACE disenrollment — PACE provides comprehensive coordinated care',
          'The 2-month window starts from the PACE disenrollment date, not from when they call',
          'If they are considering leaving PACE, make sure they fully understand the comprehensive coverage they are giving up',
        ],
      }},
      { trigger: 'Lost Special Needs status', sep: 'SNP Loss SEP', window: "Up to 3 months after the SNP's grace period ends", code: 'SNP', notes: ['Beneficiary no longer eligible for CSNP and/or the Provider failed to verify the chronic condition within 2 months of enrollment'], detail: {
        what: "When a beneficiary in a Special Needs Plan loses their SNP eligibility — either because the qualifying condition wasn't verified within 2 months of enrollment, or they no longer meet the criteria — they have a window to find a new plan before being disenrolled. Act quickly: the window is measured from the grace period end date.",
        qualify: [
          'In a C-SNP but the qualifying chronic condition was not verified by the provider within 2 months of enrollment',
          'OR the beneficiary no longer meets the SNP eligibility criteria',
          "Window: from the time of SNP eligibility loss up to 3 months after the SNP's grace period ends",
        ],
        watch: [
          "Provider failure to verify is a common trigger — this is often not the beneficiary's fault",
          'The window is measured from the grace period end, not when they call — act fast',
          'The beneficiary needs a new plan before the SNP disenrollment date to avoid a coverage gap',
        ],
      }},
    ],
  },
  {
    category: 'Institutionalized / LTC',
    items: [
      { trigger: 'In nursing home / SNF / LTC facility → MA/MAPD', sep: 'OEP-I (Institutionalized)', window: 'Unlimited while in facility + 2 mo after', code: 'OEP-I (LT2)', notes: ['MUST enroll in a MA/MAPD', 'Does NOT include assisted living facilities or residential homes'], detail: {
        what: 'A beneficiary living in a nursing home, SNF, or LTC facility has an ongoing enrollment right — they can enroll, switch, or disenroll from an MA/MAPD plan at any time while in the facility, plus 2 months after discharge.',
        qualify: [
          'Currently living in a nursing home, skilled nursing facility, or long-term care facility',
          'Enrolling into an MA or MAPD plan only (NOT PDP-only — use LTC SEP for that)',
          'Unlimited changes while in facility + 2 months after discharge',
        ],
        watch: [
          'Assisted living facilities and residential homes do NOT qualify — must be a licensed nursing home or SNF',
          'For PDP enrollment in LTC → use the LTC SEP, not OEP-I',
          'Confirm they are still in the facility before using this SEP',
        ],
      }},
      { trigger: 'In nursing home / SNF / LTC facility → PDP', sep: 'LTC SEP', window: 'Unlimited while in facility + 2 mo after', code: 'LTC', notes: ['MUST enroll in a PDP', 'Does NOT include assisted living facilities or residential homes'], detail: {
        what: "A beneficiary residing in a qualifying care facility who needs Part D drug coverage uses the LTC SEP for a standalone PDP. They get unlimited PDP changes while in the facility plus 2 months after leaving. For MA/MAPD enrollment in a care facility, use OEP-I instead — they are two separate SEPs for the same facility types.",
        qualify: [
          'Currently in: skilled nursing facility, nursing home, intermediate care facility (mentally disabled), psychiatric hospital, rehabilitation hospital, or long-term care hospital',
          'Enrolling into a standalone PDP only — NOT for MA/MAPD (use OEP-I for that)',
          'Unlimited changes while in facility + 2 months after discharge',
        ],
        watch: [
          'Assisted living facilities and residential homes do NOT qualify — must be a licensed qualifying facility type',
          'LTC = PDP only; OEP-I = MA/MAPD — do not mix them up even though they cover the same facility types',
          'Confirm the beneficiary is still in the facility at the time of enrollment',
        ],
      }},
    ],
  },
  {
    category: 'Involuntary Disenrollment',
    items: [
      { trigger: 'Lost creditable coverage (VA, TRICARE, ACA)', sep: 'Loss of Creditable Coverage', window: '2 mo from loss or notification (later)', code: 'LCC', notes: ['Does NOT apply to beneficiaries who missed premium payments and lost coverage'], detail: {
        what: 'When a beneficiary loses other creditable drug or health coverage (VA, TRICARE, employer, ACA), they get 2 months from the loss or notification (whichever is later) to enroll. This is one of the most common SEPs on inbound calls.',
        qualify: [
          'Lost VA, TRICARE, employer/union, ACA, or other creditable coverage',
          '2 months from date of loss OR date of notification — whichever comes later',
          'Can enroll in MA, MAPD, or PDP depending on what they lost',
        ],
        watch: [
          'Did NOT pay premiums and lost coverage? LCC does NOT apply — they forfeited it voluntarily',
          'Date of notification vs date of loss — use the later of the two to calculate the window',
          'TRICARE and VA are creditable — losing them absolutely qualifies',
        ],
      }},
      { trigger: 'Lost MAPD because lost Part B', sep: 'Involuntary Loss SEP', window: 'Notice + grace period + 2 mo after', code: 'INV', notes: ['MUST enroll in PDP only'], detail: {
        what: "When a beneficiary loses their Medicare Advantage plan because Part B was terminated or dropped, they qualify for a standalone PDP to preserve drug coverage. They cannot re-enter MA until Part B is restored. The window runs from the Part B loss notice through the plan's grace period plus 2 more months after coverage ends.",
        qualify: [
          'Lost MA/MAPD plan because Part B was terminated or dropped',
          'MUST enroll in a standalone PDP only — MA/MAPD requires active Part B',
          "Window: from notice of Part B loss → through the plan grace period → 2 months after coverage ends",
        ],
        watch: [
          'PDP only — they cannot re-enter MA until Part B is reinstated',
          'When Part B is eventually restored, ICEP or another qualifying SEP will apply for MA re-enrollment',
          'This is involuntary — the beneficiary lost coverage they did not choose to leave',
        ],
      }},
      { trigger: 'Plan taken over by state (financial)', sep: 'Receivership SEP', window: 'Until state action ends or member switches', code: 'REC', detail: {
        what: "If a beneficiary's insurance carrier is placed under state financial receivership — meaning the state has taken control due to financial instability — the beneficiary can switch to any other plan from the month state action begins until the action ends or they enroll in a new plan. This is rare and CMS communicates directly with affected beneficiaries.",
        qualify: [
          "Beneficiary's current plan carrier is under active state financial receivership",
          'Can switch to any available MA, MAPD, or PDP',
          'Window: from the effective date of state action until the action ends OR beneficiary enrolls elsewhere — whichever comes first',
        ],
        watch: [
          'Rare situation — CMS and the state will proactively notify affected beneficiaries',
          'Do not confuse with EOC (carrier non-renewal) — REC is a financial solvency issue, not a market exit',
          'Verify the receivership status with your compliance team before using this code',
        ],
      }},
      { trigger: 'Carrier ended plan in ZIP (non-renewal)', sep: 'Plan Non-Renewal SEP', window: 'Dec 8 – end of February', code: 'EOC', detail: {
        what: "When a carrier decides to stop offering a plan in a service area, affected beneficiaries get a window from December 8th through the end of February to choose a new plan. The beneficiary should have received an Annual Notice of Change (ANOC) letter. If they call confused about their coverage ending, this is likely the SEP.",
        qualify: [
          "Beneficiary's plan was non-renewed by the carrier in their service area",
          'Window: December 8 – end of February',
          'Can enroll in any available MA, MAPD, or PDP',
        ],
        watch: [
          'The carrier initiates non-renewal — the beneficiary should have received an ANOC letter about it',
          'This window overlaps with OEP (Jan 1–Mar 31) for existing MA holders — OEP may also be available',
          "Beneficiaries who don't act may be defaulted to Original Medicare — confirm their situation before proceeding",
        ],
        script: "It looks like your current plan is actually leaving your area — which means you automatically qualify for a Special Enrollment Period to get into a new plan. Let's make sure we get you set up before your current coverage ends.",
      }},
      { trigger: 'Medicare ended contract with plan', sep: 'Medicare Contract Termination', window: '2 mo before + 1 mo after end', code: 'MYT', detail: {
        what: "When CMS terminates its contract with a Medicare plan carrier — different from a carrier voluntarily leaving a market — affected beneficiaries can begin enrolling in a new plan 2 months before the termination date. CMS-initiated, not carrier-initiated. Beneficiaries receive formal advance notice from CMS.",
        qualify: [
          "CMS has terminated its contract with the beneficiary's current plan carrier",
          'Window: 2 months before the contract end date + 1 full month after',
          'Can enroll in any available MA, MAPD, or PDP',
        ],
        watch: [
          'CMS-initiated — do not confuse with EOC (carrier non-renewal); MYT is a CMS enforcement action',
          'Beneficiaries should have received a formal CMS notice well in advance of the termination date',
          'Enrollments made during the pre-termination window take effect after the contract end date',
        ],
      }},
    ],
  },
  {
    category: 'Voluntary Changes',
    items: [
      { trigger: 'Lost employer/union/COBRA coverage', sep: 'Loss of Employer Coverage SEP', window: 'Month of loss + 2 mo after', code: 'LEC', notes: ['May coincide with delayed Part B (ICEP)'], detail: {
        what: "When a beneficiary loses employer, union, or COBRA coverage — through retirement, layoff, COBRA expiration, or death of a covered spouse — they qualify for a SEP. The window starts the month coverage ends. This is one of the most common SEPs on inbound calls. COBRA expiration is treated the same as any other employer coverage loss.",
        qualify: [
          'Lost employer, union, or COBRA coverage for any reason: retirement, job loss, COBRA expiration, or spousal coverage ending due to death',
          'Window: month of loss + 2 full calendar months',
          'Can enroll in MA, MAPD, or PDP',
        ],
        watch: [
          "Window starts from when coverage ended, not when they call — get the exact termination date and use the deadline calculator",
          'If Part B was also delayed alongside employer coverage → ICEP may apply simultaneously; document both',
          'If they have remaining VA or TRICARE drug coverage → CDC may also apply to drop MAPD for MA-only',
        ],
        script: "Because your employer coverage just ended, you qualify for a Special Enrollment Period right now. That gives you a window from when that coverage ended to get into a new Medicare plan.",
      }},
      { trigger: 'Dropped Cost Plan with drug coverage', sep: 'Cost Plan Disenrollment SEP', window: '2 full months after drop', code: 'OSD', notes: ['MUST enroll in PDP only'], detail: {
        what: "When a beneficiary drops a Medicare Cost Plan that included drug coverage and returns to Original Medicare, they get 2 full months to enroll in a standalone PDP. Cost Plans are a distinct Medicare plan type — not MA — operating in limited markets primarily in the Midwest.",
        qualify: [
          'Dropped a Medicare Cost Plan that included Part D drug coverage',
          'MUST enroll in a standalone PDP only — OSD does not apply to MA/MAPD enrollment',
          '2 full calendar months after the month they drop the Cost Plan',
        ],
        watch: [
          'Cost Plans operate in limited markets — primarily Minnesota, Iowa, and parts of the Midwest',
          'This SEP does not apply if the dropped Cost Plan did not include drug coverage',
          'For MA enrollment after leaving a Cost Plan, a different qualifying SEP would be needed',
        ],
      }},
      { trigger: 'Dropped Medigap for first-time MA/MAPD, wants to return', sep: '12-Month Trial Right', window: '12 months from MA start', code: '12G', notes: ['Also known as: 12-Month Trial Right'], detail: {
        what: "A beneficiary who dropped a Medicare Supplement (Medigap) plan specifically to join their very first MA/MAPD plan gets a 12-month Trial Right to return to Original Medicare + Medigap + PDP. Also called the '12-Month Trial Right.' It protects first-time MA enrollees who decide Medicare Advantage is not the right fit.",
        qualify: [
          'Specifically dropped a Medigap/Medicare Supplement to join their FIRST MA/MAPD plan',
          '12-month window from the MA plan effective date',
          'Returns to Original Medicare + Medigap; must also enroll in a standalone PDP',
        ],
        watch: [
          'Must be their FIRST time in MA — if they have prior MA history, Trial Right rules may not apply',
          'After 12G they leave MA and return to Original Medicare + Medigap — Medigap guaranteed issue rights vary by state',
          'Distinct from 12J: 12G specifically requires a prior Medigap plan that was dropped to join MA',
        ],
      }},
      { trigger: 'Joined MAPD at 65, wants to go back to OM + PDP', sep: 'Age-65 Trial Right', window: '12 months from MAPD start', code: '12J', notes: ['MUST enroll in PDP only'], detail: {
        what: "A beneficiary who enrolled in an MA/MAPD plan for the first time when they turned 65 gets 12 months to change their mind and return to Original Medicare + a standalone PDP. PDP enrollment is mandatory under 12J — returning to Original Medicare alone is not valid.",
        qualify: [
          'Enrolled in an MA/MAPD plan for the first time upon turning 65',
          'Within the first 12 months of that initial MA enrollment',
          'MUST also enroll in a standalone PDP — required, not optional',
        ],
        watch: [
          'PDP enrollment is mandatory — cannot use 12J to return to Original Medicare without also adding a PDP',
          'After 12J they return to Original Medicare + PDP; they can re-enter MA during a future AEP',
          'Distinct from 12G: 12J does not require a prior Medigap plan — it\'s for any first-time age-65 MA enrollment',
        ],
      }},
      { trigger: 'In MAPD but has other drug coverage (VA, TRICARE)', sep: 'Creditable Drug Coverage SEP', window: 'Anytime', code: 'CDC', notes: ['MUST enroll them OUT of a MAPD or PDP and INTO a MA-only plan'], detail: {
        what: "When a beneficiary in an MA/MAPD plan has other creditable drug coverage — VA benefits, TRICARE, or employer retiree drug coverage — they can move to an MA-only plan to eliminate duplicate drug costs. Available anytime. The move must be OUT of MAPD and INTO an MA-only plan specifically.",
        qualify: [
          'Currently enrolled in an MA/MAPD plan (with Part D built in)',
          'Has other creditable drug coverage active: VA benefits, TRICARE, employer retiree drug coverage, etc.',
          'MUST move OUT of MAPD (or PDP) and INTO an MA-only plan — the Part D component must be dropped',
          'Available anytime — no window restriction',
        ],
        watch: [
          'The destination must be an MA-only plan — this is not a tool for switching between MAPD plans',
          'If the VA or TRICARE drug coverage later ends → LCC will apply to add drug coverage back',
          "The beneficiary's other creditable drug coverage must still be active at the time of the CDC enrollment",
        ],
      }},
      { trigger: 'Auto-enrolled into plan by Medicare', sep: 'Government Enrollment SEP', window: '3 months from effective date', code: 'DIF', notes: ['MARx may indicate this with an X by the plan', 'The beneficiary may also state they were automatically enrolled by Medicare'], detail: {
        what: "When Medicare automatically enrolls a beneficiary in a plan — rather than the beneficiary making an active choice — that beneficiary gets 3 months from the effective date to switch to any plan they prefer. In MARx, look for an 'X' indicator next to the plan code, which signals government auto-enrollment.",
        qualify: [
          'Beneficiary was automatically enrolled by the government — they did not choose the plan themselves',
          '3 months from the auto-enrollment effective date',
          'Can enroll in any MA, MAPD, or PDP',
        ],
        watch: [
          "MARx: an 'X' indicator next to the plan code signals auto-enrollment — look for it",
          'The beneficiary may describe not recognizing their current plan or not knowing how they got on it',
          'Common with low-income beneficiaries automatically assigned to benchmark LIS drug plans',
        ],
      }},
    ],
  },
  {
    category: 'Star Ratings',
    items: [
      { trigger: 'Enrolling in a 5-star rated plan', sep: '5-Star SEP', window: 'Dec 8 – Nov 30 (once per year)', code: '5ST', detail: {
        what: "If a Medicare plan in the beneficiary's area has earned CMS's top 5-star quality rating, the beneficiary can switch to it any time between December 8th and November 30th — outside of AEP. This is the only SEP that allows year-round enrollment without a qualifying life event. 5-star designations change each plan year.",
        qualify: [
          "A 5-star rated MA, MAPD, or PDP is available in the beneficiary's service area",
          'Window: December 8 – November 30 of the following year',
          'Once per calendar year',
        ],
        watch: [
          '5-star plan designations change annually — verify the plan still holds 5 stars for the current plan year',
          'Only one use per calendar year — cannot use 5ST twice in the same year',
          'Confirm a 5-star plan actually exists in their specific ZIP code before offering this',
        ],
      }},
      { trigger: 'Current plan rated 2.5 stars or lower for 3 consecutive years', sep: 'Low-Performing Plan SEP', window: 'Anytime while enrolled in a low-performing plan', code: 'LPI', notes: ['MUST enroll the beneficiary in a plan with a 3+ star rating'], detail: {
        what: "When a beneficiary's plan has been rated 2.5 stars or lower for 3 consecutive years, CMS designates it a low-performing plan and sends the beneficiary a warning notice. They can switch to any 3-star or higher plan at any time. The destination plan must be rated 3+ stars — they cannot be moved into another low-performing plan.",
        qualify: [
          'Currently enrolled in a plan with a CMS star rating of 2.5 or lower for 3 consecutive contract years',
          'MUST enroll into a plan rated 3 stars or higher',
          'Available anytime — no window restriction',
        ],
        watch: [
          'CMS sends a warning notice to affected beneficiaries — they may call referencing a letter or warning',
          'The destination plan MUST be rated 3+ stars — verify before submitting',
          'Check the plan\'s current star rating in MARx or CMS plan finder before proceeding',
        ],
      }},
    ],
  },
  {
    category: 'Disaster / Extension',
    items: [
      { trigger: 'FEMA/state disaster prevented enrollment', sep: 'Disaster SEP', window: 'Duration of emergency + 2 mo after end', code: 'DST', notes: ['For beneficiaries who have been affected by the disaster', 'Disasters by themselves are NOT a SEP — this is an extension to a missed SEP'], detail: {
        what: "The Disaster SEP is an extension, not a standalone SEP. It applies when a FEMA-declared disaster or public health emergency prevented a beneficiary from making an enrollment election during an open window (AEP, IEP, OEP, or another SEP). The disaster extends the missed window — it does not create a new one. The beneficiary must NOT have used a different SEP since the disaster.",
        qualify: [
          "A FEMA-declared or CMS-designated disaster or public health emergency affected the beneficiary's area",
          'The beneficiary had an active enrollment window (AEP, IEP, OEP, or SEP) during the disaster period',
          'The disaster must have actually prevented their enrollment — and they did NOT use any other SEP since then',
          'Window: duration of the emergency + 2 full months after the declared end date',
          'As of March 20, 2025: agents can submit DST SEP directly (CMS reversed the April 2025 restriction)',
        ],
        watch: [
          'A disaster alone does NOT create a new SEP — a specific existing window must have been missed because of it',
          'If the beneficiary used ANY other SEP after the disaster, DST no longer applies',
          'Do NOT proactively market or suggest this SEP — only use it when the beneficiary raises the situation',
          'Always verify active FEMA declarations using the FEMA lookup tool on this page before submitting',
        ],
      }},
    ],
  },
  {
    category: 'Election Periods',
    items: [
      { trigger: 'Oct 15 – Dec 7', sep: 'Annual Election Period', window: 'Coverage effective Jan 1. Last plan wins.', code: 'AEP', notes: ['Last plan standing wins — plan effectuates January 1st of the following year'], detail: {
        what: 'AEP is the main annual window for all Medicare beneficiaries to change their Part D or Medicare Advantage plan. The last plan enrolled wins — if a beneficiary enrolls multiple times during AEP, only the last submission counts.',
        qualify: [
          'Oct 15 – Dec 7 each year, open to all Medicare beneficiaries',
          'Coverage effective January 1 of the following year',
          'Last enrollment submitted wins — earlier AEP enrollments are overridden',
        ],
        watch: [
          "AEP is for ALL beneficiaries, but OEP (Jan–Mar) is for MA plan holders only — don't confuse them",
          'Submitting multiple plans during AEP is valid — last one takes effect',
          "Plans take effect Jan 1 — make sure the beneficiary knows their current plan is still active through Dec 31",
        ],
      }},
      { trigger: 'Jan 1 – Mar 31 (existing MA plan holders only)', sep: 'MA Open Enrollment Period', window: 'One change. Effective 1st of following month.', code: 'OEP', notes: ['MARx will indicate when this SEP was used', 'If the plan has not gone into effect yet, you CAN still use OEP to override it'], detail: {
        what: "The MA Open Enrollment Period (Jan 1–Mar 31) allows existing MA plan holders to make ONE change. It's not for first-time enrollees — it's a course-correction window for people already in an MA plan. The change is effective the 1st of the following month.",
        qualify: [
          'Must currently be enrolled in an MA or MAPD plan',
          'One change only — cannot be used again once exercised',
          'Effective 1st of the following month (Jan enrollment → Feb 1 effective, etc.)',
          "Can still be used even if the current plan hasn't effectuated yet (e.g., AEP enrollment pending)",
        ],
        watch: [
          "Only ONE change — if they already used OEP this year, it's gone until next year",
          'Not available to PDP-only or Original Medicare beneficiaries — must already be in MA',
          'MARx will flag when OEP has been used — check before submitting',
        ],
      }},
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Framer Motion Variants                                              */
/* ------------------------------------------------------------------ */

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring' as const, stiffness: 200, damping: 25 },
  },
}

/* ------------------------------------------------------------------ */
/* Chronic Condition Search                                            */
/* ------------------------------------------------------------------ */

interface CsnpCondition {
  name: string
  category: string
  aliases: string[]
}

const CSNP_CONDITIONS: CsnpCondition[] = [
  { name: 'Chronic Alcohol / Drug Dependence', category: 'Substance Use', aliases: ['alcoholism', 'alcohol use', 'AUD', 'drug addiction', 'substance abuse', 'substance use disorder', 'SUD', 'opioid use disorder', 'OUD', 'opioid'] },
  { name: 'Autoimmune Disorder', category: 'Autoimmune', aliases: ['lupus', 'SLE', 'rheumatoid arthritis', 'RA', 'multiple sclerosis', 'MS', 'psoriasis', 'scleroderma', 'Sjogren', 'vasculitis', 'myositis', 'IBD', 'Crohn', "Crohn's", 'ulcerative colitis', "Graves'", 'Hashimoto', 'autoimmune'] },
  { name: 'Cancer (Active/Invasive)', category: 'Oncology', aliases: ['lung cancer', 'breast cancer', 'prostate cancer', 'colon cancer', 'colorectal cancer', 'leukemia', 'lymphoma', 'bladder cancer', 'kidney cancer', 'pancreatic cancer', 'ovarian cancer', 'melanoma', 'brain tumor', 'chemotherapy', 'chemo', 'radiation', 'cancer', 'oncology'] },
  { name: 'Cardiovascular Disorder', category: 'Cardiovascular', aliases: ['heart disease', 'coronary artery disease', 'CAD', 'heart attack', 'MI', 'myocardial infarction', 'angina', 'arrhythmia', 'atrial fibrillation', 'AFib', 'aortic stenosis', 'peripheral artery disease', 'PAD', 'pacemaker', 'stent', 'DVT', 'deep vein thrombosis', 'pulmonary embolism', 'blood clot'] },
  { name: 'Chronic Heart Failure', category: 'Cardiovascular', aliases: ['CHF', 'congestive heart failure', 'heart failure', 'HF', 'cardiomyopathy', 'systolic dysfunction', 'diastolic dysfunction', 'ejection fraction', 'EF'] },
  { name: 'Dementia', category: 'Neurological', aliases: ["Alzheimer's", 'Alzheimers', 'vascular dementia', 'memory loss', 'cognitive decline', 'Lewy body dementia', 'frontotemporal dementia', 'FTD', 'memory care', 'forgetfulness', 'dementia'] },
  { name: 'Diabetes Mellitus', category: 'Endocrine', aliases: ['diabetes', 'type 2 diabetes', 'T2D', 'T1D', 'type 1 diabetes', 'insulin', 'metformin', 'A1C', 'diabetic', 'blood sugar', 'glucose', 'Ozempic', 'Januvia', 'Jardiance'] },
  { name: 'End-Stage Liver Disease', category: 'Hepatic', aliases: ['ESLD', 'cirrhosis', 'liver failure', 'liver disease', 'hepatitis C', 'hep C', 'hepatic', 'portal hypertension', 'ascites', 'liver transplant'] },
  { name: 'End-Stage Renal Disease (ESRD)', category: 'Renal', aliases: ['ESRD', 'kidney failure', 'renal failure', 'dialysis', 'hemodialysis', 'peritoneal dialysis', 'kidney disease', 'CKD stage 5', 'kidney transplant', 'creatinine', 'GFR'] },
  { name: 'Hematologic Disorder', category: 'Blood', aliases: ['sickle cell disease', 'sickle cell', 'thalassemia', 'hemophilia', 'multiple myeloma', 'myeloma', 'blood disorder', 'polycythemia', 'myelodysplastic syndrome', 'MDS', 'aplastic anemia'] },
  { name: 'HIV / AIDS', category: 'Infectious Disease', aliases: ['HIV', 'AIDS', 'human immunodeficiency virus', 'antiretroviral', 'CD4', 'viral load', 'HIV positive', 'Truvada', 'Biktarvy'] },
  { name: 'Chronic Lung Disorder', category: 'Pulmonary', aliases: ['COPD', 'emphysema', 'chronic bronchitis', 'pulmonary fibrosis', 'IPF', 'asthma', 'pulmonary hypertension', 'oxygen therapy', 'oxygen tank', 'bronchiectasis', 'lung disease', 'nebulizer', 'inhaler', 'albuterol'] },
  { name: 'Chronic Mental Health Condition', category: 'Behavioral Health', aliases: ['schizophrenia', 'bipolar disorder', 'bipolar', 'major depression', 'major depressive disorder', 'MDD', 'PTSD', 'post-traumatic stress', 'schizoaffective', 'psychosis', 'severe depression', 'treatment-resistant depression', 'psychiatric'] },
  { name: 'Neurological Disorder', category: 'Neurological', aliases: ["Parkinson's", 'Parkinsons', 'epilepsy', 'seizures', 'ALS', 'amyotrophic lateral sclerosis', "Lou Gehrig's", 'neuropathy', 'Huntington', 'tremors', 'motor neuron disease', 'ataxia', 'cerebral palsy'] },
  { name: 'Stroke / CVA', category: 'Neurological', aliases: ['stroke', 'CVA', 'cerebrovascular accident', 'TIA', 'mini-stroke', 'hemorrhagic stroke', 'ischemic stroke', 'brain attack', 'cerebral infarction', 'hemiplegia', 'aphasia'] },
]

function ChronicConditionSearch() {
  const [query, setQuery] = useState('')

  const trimmed = query.trim().toLowerCase()
  const matches = trimmed.length < 2 ? [] : CSNP_CONDITIONS.filter(c => {
    const haystack = [c.name, c.category, ...c.aliases].join(' ').toLowerCase()
    return haystack.includes(trimmed)
  })
  const noMatch = trimmed.length >= 2 && matches.length === 0

  return (
    <div className={styles.csnpSearch}>
      <p className={styles.csnpSearchLabel}>Condition Lookup — C-SNP Eligibility</p>
      <input
        className={styles.csnpInput}
        type="text"
        placeholder="Type a condition (e.g. diabetes, lupus, ESRD…)"
        value={query}
        onChange={e => setQuery(e.target.value)}
        autoComplete="off"
        spellCheck={false}
      />
      {matches.length > 0 && (
        <div className={styles.csnpResultList}>
          {matches.map((c, i) => (
            <div key={i} className={styles.csnpMatch}>
              <div className={styles.csnpMatchTop}>
                <span className={styles.csnpMatchName}>{c.name}</span>
                <span className={styles.csnpMatchCategory}>{c.category}</span>
              </div>
              <div className={styles.csnpQualify}>
                <CheckmarkFilled size={12} />
                Qualifying — verify C-SNP plan availability in carrier portal
              </div>
            </div>
          ))}
        </div>
      )}
      {noMatch && (
        <p className={styles.csnpNoMatch}>Not on CMS qualifying list — not a C-SNP trigger</p>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Medicaid Router                                                     */
/* ------------------------------------------------------------------ */

function MedicaidRouter() {
  const [q1, setQ1] = useState<'yes' | 'no' | null>(null)
  const [q2, setQ2] = useState<'yes' | 'unsure' | 'no' | null>(null)
  const [q3, setQ3] = useState<'yes' | 'no' | null>(null)

  function reset() { setQ1(null); setQ2(null); setQ3(null) }
  function pickQ1(v: 'yes' | 'no') { setQ1(q1 === v ? null : v); setQ2(null); setQ3(null) }
  function pickQ2(v: 'yes' | 'unsure' | 'no') { setQ2(q2 === v ? null : v); setQ3(null) }
  function pickQ3(v: 'yes' | 'no') { setQ3(q3 === v ? null : v) }

  return (
    <div className={styles.routerBlock}>
      <p className={styles.routerQuestion}>Do they currently have Medicaid or Extra Help (LIS)?</p>
      <div className={styles.oepForkRow}>
        <button
          className={`${styles.oepForkBtn} ${styles.oepForkYes} ${q1 === 'yes' ? styles.oepForkSelected : ''} ${q1 === 'no' ? styles.oepForkFaded : ''}`}
          onClick={() => pickQ1('yes')}
          aria-pressed={q1 === 'yes'}
        >
          <CheckmarkFilled size={14} /> YES — has Medicaid or LIS
        </button>
        <button
          className={`${styles.oepForkBtn} ${styles.oepForkNo} ${q1 === 'no' ? styles.oepForkSelected : ''} ${q1 === 'yes' ? styles.oepForkFaded : ''}`}
          onClick={() => pickQ1('no')}
          aria-pressed={q1 === 'no'}
        >
          <CloseFilled size={14} /> NO — neither
        </button>
      </div>

      <AnimatePresence>
        {q1 === 'no' && (
          <motion.div className={styles.oepResult} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}>
            <div className={`${styles.oepResultInner} ${styles.oepResultNo}`}>
              <p className={styles.oepResultTitle}>No dual/LIS SEP available. Move on.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {q1 === 'yes' && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}>
            <p className={styles.routerQuestion}>Is it full Medicaid? (State covers premiums, copays, and deductibles)</p>
            <div className={styles.routerThreeRow}>
              <button
                className={`${styles.oepForkBtn} ${styles.oepForkYes} ${q2 === 'yes' ? styles.oepForkSelected : ''} ${q2 !== null && q2 !== 'yes' ? styles.oepForkFaded : ''}`}
                onClick={() => pickQ2('yes')}
                aria-pressed={q2 === 'yes'}
              >
                YES — Full Medicaid
              </button>
              <button
                className={`${styles.oepForkBtn} ${styles.oepForkNo} ${q2 === 'unsure' ? styles.oepForkSelected : ''} ${q2 !== null && q2 !== 'unsure' ? styles.oepForkFaded : ''}`}
                onClick={() => pickQ2('unsure')}
                aria-pressed={q2 === 'unsure'}
              >
                NOT SURE
              </button>
              <button
                className={`${styles.oepForkBtn} ${styles.oepForkNo} ${q2 === 'no' ? styles.oepForkSelected : ''} ${q2 !== null && q2 !== 'no' ? styles.oepForkFaded : ''}`}
                onClick={() => pickQ2('no')}
                aria-pressed={q2 === 'no'}
              >
                NO — LIS / partial only
              </button>
            </div>

            <AnimatePresence>
              {q2 === 'yes' && (
                <motion.div className={styles.oepResult} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}>
                  <div className={`${styles.oepResultInner} ${styles.oepResultYes}`}>
                    <p className={styles.oepResultTitle}>INT — Integrated Care SEP</p>
                    <p className={styles.oepResultSub}>Enroll in aligned D-SNP, any month. Also check DEP for PDP changes.</p>
                  </div>
                </motion.div>
              )}
              {q2 === 'unsure' && (
                <motion.div className={styles.oepResult} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}>
                  <div className={`${styles.oepResultInner} ${styles.oepResultNo}`}>
                    <p className={styles.oepResultTitle}>Ask: is income below the threshold?</p>
                    <p className={styles.oepResultSub}>Under $1,903/mo (single) or $2,575/mo (couple)? If yes, likely QMB — qualifies for both INT and DEP.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {q2 === 'no' && (
              <>
                <p className={styles.routerQuestion}>Did their Medicaid or Extra Help status recently change?</p>
                <div className={styles.oepForkRow}>
                  <button
                    className={`${styles.oepForkBtn} ${styles.oepForkYes} ${q3 === 'yes' ? styles.oepForkSelected : ''} ${q3 === 'no' ? styles.oepForkFaded : ''}`}
                    onClick={() => pickQ3('yes')}
                    aria-pressed={q3 === 'yes'}
                  >
                    <CheckmarkFilled size={14} /> YES — recently changed
                  </button>
                  <button
                    className={`${styles.oepForkBtn} ${styles.oepForkNo} ${q3 === 'no' ? styles.oepForkSelected : ''} ${q3 === 'yes' ? styles.oepForkFaded : ''}`}
                    onClick={() => pickQ3('no')}
                    aria-pressed={q3 === 'no'}
                  >
                    <CloseFilled size={14} /> NO — same status ongoing
                  </button>
                </div>
                <AnimatePresence>
                  {q3 === 'yes' && (
                    <motion.div className={styles.oepResult} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}>
                      <div className={`${styles.oepResultInner} ${styles.oepResultYes}`}>
                        <p className={styles.oepResultTitle}>MCD or NLS — 3-month window</p>
                        <p className={styles.oepResultSub}>From change date. Available all year, even after Sept 30.</p>
                      </div>
                    </motion.div>
                  )}
                  {q3 === 'no' && (
                    <motion.div className={styles.oepResult} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}>
                      <div className={`${styles.oepResultInner} ${styles.oepResultYes}`}>
                        <p className={styles.oepResultTitle}>DEP — Dual/LIS Monthly SEP</p>
                        <p className={styles.oepResultSub}>PDP changes only, any month, repeatable.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {q1 !== null && (
        <button className={styles.routerReset} onClick={reset}>Start over</button>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* IEP Classifier                                                      */
/* ------------------------------------------------------------------ */

function IEPClassifier() {
  const [q1, setQ1] = useState<'yes' | 'no' | null>(null)
  const [q2, setQ2] = useState<'yes' | 'no' | null>(null)
  const [q3, setQ3] = useState<'yes' | 'no-retro' | 'no-clean' | null>(null)

  function reset() { setQ1(null); setQ2(null); setQ3(null) }
  function pickQ1(v: 'yes' | 'no') { setQ1(q1 === v ? null : v); setQ2(null); setQ3(null) }
  function pickQ2(v: 'yes' | 'no') { setQ2(q2 === v ? null : v); setQ3(null) }
  function pickQ3(v: 'yes' | 'no-retro' | 'no-clean') { setQ3(q3 === v ? null : v) }

  return (
    <div className={styles.routerBlock}>
      <p className={styles.routerQuestion}>Do Part A and Part B have the same effective date?</p>
      <div className={styles.oepForkRow}>
        <button
          className={`${styles.oepForkBtn} ${styles.oepForkYes} ${q1 === 'yes' ? styles.oepForkSelected : ''} ${q1 === 'no' ? styles.oepForkFaded : ''}`}
          onClick={() => pickQ1('yes')}
          aria-pressed={q1 === 'yes'}
        >
          <CheckmarkFilled size={14} /> YES — same date
        </button>
        <button
          className={`${styles.oepForkBtn} ${styles.oepForkNo} ${q1 === 'no' ? styles.oepForkSelected : ''} ${q1 === 'yes' ? styles.oepForkFaded : ''}`}
          onClick={() => pickQ1('no')}
          aria-pressed={q1 === 'no'}
        >
          <CloseFilled size={14} /> NO — different dates
        </button>
      </div>

      <AnimatePresence>
        {q1 === 'no' && (
          <motion.div className={styles.oepResult} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}>
            <div className={`${styles.oepResultInner} ${styles.oepResultYes}`}>
              <p className={styles.oepResultTitle}>ICEP — 5-month window</p>
              <p className={styles.oepResultSub}>3 before Part B month + month of + 1 after. Part B was delayed — use Part B effective date as the anchor.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {q1 === 'yes' && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}>
            <p className={styles.routerQuestion}>Are they on disability and turning 65?</p>
            <div className={styles.oepForkRow}>
              <button
                className={`${styles.oepForkBtn} ${styles.oepForkYes} ${q2 === 'yes' ? styles.oepForkSelected : ''} ${q2 === 'no' ? styles.oepForkFaded : ''}`}
                onClick={() => pickQ2('yes')}
                aria-pressed={q2 === 'yes'}
              >
                <CheckmarkFilled size={14} /> YES — disability + 65
              </button>
              <button
                className={`${styles.oepForkBtn} ${styles.oepForkNo} ${q2 === 'no' ? styles.oepForkSelected : ''} ${q2 === 'yes' ? styles.oepForkFaded : ''}`}
                onClick={() => pickQ2('no')}
                aria-pressed={q2 === 'no'}
              >
                <CloseFilled size={14} /> NO — standard enrollment
              </button>
            </div>

            <AnimatePresence>
              {q2 === 'yes' && (
                <motion.div className={styles.oepResult} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}>
                  <div className={`${styles.oepResultInner} ${styles.oepResultYes}`}>
                    <p className={styles.oepResultTitle}>IEP2 — Fresh 7-month window at 65</p>
                    <p className={styles.oepResultSub}>Look for 1961 DOB in MARx. MA-only plans are prohibited.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {q2 === 'no' && (
              <>
                <p className={styles.routerQuestion}>Have they already enrolled in an MA/MAPD plan that has effectuated?</p>
                <div className={styles.routerThreeRow}>
                  <button
                    className={`${styles.oepForkBtn} ${styles.oepForkYes} ${q3 === 'yes' ? styles.oepForkSelected : ''} ${q3 !== null && q3 !== 'yes' ? styles.oepForkFaded : ''}`}
                    onClick={() => pickQ3('yes')}
                    aria-pressed={q3 === 'yes'}
                  >
                    YES — plan effectuated
                  </button>
                  <button
                    className={`${styles.oepForkBtn} ${styles.oepForkNo} ${q3 === 'no-retro' ? styles.oepForkSelected : ''} ${q3 !== null && q3 !== 'no-retro' ? styles.oepForkFaded : ''}`}
                    onClick={() => pickQ3('no-retro')}
                    aria-pressed={q3 === 'no-retro'}
                  >
                    NO — notified retroactively
                  </button>
                  <button
                    className={`${styles.oepForkBtn} ${styles.oepForkNo} ${q3 === 'no-clean' ? styles.oepForkSelected : ''} ${q3 !== null && q3 !== 'no-clean' ? styles.oepForkFaded : ''}`}
                    onClick={() => pickQ3('no-clean')}
                    aria-pressed={q3 === 'no-clean'}
                  >
                    NO — hasn&apos;t enrolled yet
                  </button>
                </div>
                <AnimatePresence>
                  {q3 === 'yes' && (
                    <motion.div className={styles.oepResult} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}>
                      <div className={`${styles.oepResultInner} ${styles.oepResultYes}`}>
                        <p className={styles.oepResultTitle}>OEP-N — One change available</p>
                        <p className={styles.oepResultSub}>Window: month of effectuation + 2 months.</p>
                      </div>
                    </motion.div>
                  )}
                  {q3 === 'no-retro' && (
                    <motion.div className={styles.oepResult} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}>
                      <div className={`${styles.oepResultInner} ${styles.oepResultYes}`}>
                        <p className={styles.oepResultTitle}>RET — Retroactive entitlement</p>
                        <p className={styles.oepResultSub}>Window: month of notification + 2 months.</p>
                      </div>
                    </motion.div>
                  )}
                  {q3 === 'no-clean' && (
                    <motion.div className={styles.oepResult} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}>
                      <div className={`${styles.oepResultInner} ${styles.oepResultYes}`}>
                        <p className={styles.oepResultTitle}>IEP — 7-month window</p>
                        <p className={styles.oepResultSub}>3 before 65th birthday month + birthday month + 3 after. Confirm Part B start date.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {q1 !== null && (
        <button className={styles.routerReset} onClick={reset}>Start over</button>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Signal Card Item Component                                          */
/* ------------------------------------------------------------------ */

function SignalCardItem({
  sig, idx, state, isExpanded, prefersReducedMotion,
  onToggle, onSetState, onRefSet,
}: {
  sig: SignalCard
  idx: number
  state: SignalState
  isExpanded: boolean
  prefersReducedMotion: boolean
  onToggle: (id: string) => void
  onSetState: (id: string, state: SignalState) => void
  onRefSet: (id: string, el: HTMLDivElement | null) => void
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const hasPulsed = useRef(false)

  useEffect(() => {
    onRefSet(sig.id, cardRef.current)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (state === 'active' && !hasPulsed.current && !prefersReducedMotion && cardRef.current) {
      hasPulsed.current = true
      fmAnimate(cardRef.current, {
        scale: [1, 1.04, 1],
        backgroundColor: ['rgba(255,255,255,0.5)', 'rgba(106,139,110,0.12)', 'rgba(255,255,255,0.5)'],
      }, { duration: 0.4 }).then(() => {
        if (cardRef.current) {
          cardRef.current.style.removeProperty('background-color')
          cardRef.current.style.removeProperty('transform')
        }
      })
    }
  }, [state, prefersReducedMotion])

  return (
    <motion.div
      ref={cardRef}
      variants={itemVariants}
      className={[
        styles.signalCard,
        'glassSubtle',
        state === 'active' ? styles.signalActive : '',
        state === 'dismissed' ? styles.signalDismissed : '',
        sig.frequency === 'high' ? styles.signalFreqHigh : '',
        sig.frequency === 'low' ? styles.signalFreqLow : '',
      ].filter(Boolean).join(' ')}
      aria-expanded={isExpanded}
    >
      <button
        className={styles.signalTap}
        onClick={() => onToggle(sig.id)}
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
            {sig.frequency === 'high' && state === 'unchecked' && (
              <span className={styles.signalFreqHighBadge}>High Priority</span>
            )}
          </div>
          <div className={styles.signalAskHear}>
            <span className={styles.askTag}>ASK</span>
            <span className={styles.askText}>{sig.askThis}</span>
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
                  onClick={() => onSetState(sig.id, state === 'dismissed' ? 'unchecked' : 'dismissed')}
                >
                  <Subtract size={14} />
                  {state === 'dismissed' ? 'Dismissed' : 'No trigger'}
                </button>
                <button
                  className={`${styles.actionBtn} ${styles.actionActivate} ${state === 'active' ? styles.actionSelected : ''}`}
                  onClick={() => onSetState(sig.id, state === 'active' ? 'unchecked' : 'active')}
                >
                  <CheckmarkFilled size={14} />
                  {state === 'active' ? 'SEP Found' : 'SEP found'}
                </button>
              </div>

              {/* Callout */}
              <p className={styles.signalCallout}>{sig.callout}</p>

              {/* Full listen-for list */}
              <div className={styles.hearFullRow}>
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

              {sig.id === 'dual-lis' && <MedicaidRouter />}
              {sig.id === 'new-to-medicare' && <IEPClassifier />}
              {sig.id === 'chronic' && <ChronicConditionSearch />}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/* Main Component                                                      */
/* ------------------------------------------------------------------ */

export default function SEPCheckPage() {
  const prefersReducedMotion = useReducedMotion() ?? false

  const [signalStates, setSignalStates] = useState<Map<string, SignalState>>(
    () => new Map(SIGNALS.map(s => [s.id, 'unchecked']))
  )
  const [expandedSignal, setExpandedSignal] = useState<string | null>(null)
  const [femaInput, setFemaInput] = useState('')
  const [femaResults, setFemaResults] = useState<FemaDeclaration[]>([])
  const [femaSearched, setFemaSearched] = useState(false)
  const [femaDeclarations, setFemaDeclarations] = useState<FemaDeclaration[]>([])
  const [femaLastUpdated, setFemaLastUpdated] = useState<string>('')
  const [femaError, setFemaError] = useState<string | null>(null)
  const [zipContext, setZipContext] = useState<string>('')
  const [enrollmentPeriod, setEnrollmentPeriod] = useState<EnrollmentPeriod | null>(null)
  const [showCheatSheet, setShowCheatSheet] = useState(false)
  const [oepChoice, setOepChoice] = useState<'yes' | 'no' | null>(null)
  const [expandedCheat, setExpandedCheat] = useState<string | null>(null)
  const [undoSnapshot, setUndoSnapshot] = useState<{
    signalStates: [string, SignalState][]
    femaInput: string
    oepChoice: 'yes' | 'no' | null
  } | null>(null)
  const femaInputRef = useRef<HTMLInputElement>(null)
  const signalRefs = useRef<Map<string, HTMLDivElement>>(new Map())
  const undoTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    setEnrollmentPeriod(getEnrollmentPeriod(new Date()))
    fetch('/data/fema-active.json')
      .then(r => r.json())
      .then(d => {
        setFemaDeclarations(d.declarations || [])
        setFemaLastUpdated(d.lastUpdated || '')
      })
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

  async function handleFemaSearch() {
    const rawQuery = femaInput.trim()
    if (!rawQuery) return
    setFemaError(null)
    setZipContext('')
    let resolvedQuery = rawQuery.toLowerCase()
    if (/^\d{5}$/.test(rawQuery)) {
      try {
        const res = await fetch(`https://api.zippopotam.us/us/${rawQuery}`)
        if (res.ok) {
          const data = await res.json()
          const place = data.places[0]
          const resolved = `ZIP ${rawQuery} \u2192 ${place['place name']}, ${place.state}`
          setZipContext(resolved)
          resolvedQuery = place.state.toLowerCase()
        } else {
          setFemaError(`ZIP code ${rawQuery} not found. Try searching by state or county name.`)
          setFemaSearched(true)
          return
        }
      } catch {
        // Network error — fall through to text search with original input
      }
    }
    const today = new Date()
    const matches = femaDeclarations.filter(d => {
      if (new Date(d.sepEndDate) < today) return false
      const stateMatch = d.state.toLowerCase().includes(resolvedQuery)
      const countyMatch = !d.allCounties && d.counties.some(c => c.toLowerCase().includes(resolvedQuery))
      return stateMatch || countyMatch
    })
    setFemaResults(matches)
    setFemaSearched(true)
  }

  function resetAll() {
    setUndoSnapshot({
      signalStates: Array.from(signalStates.entries()),
      femaInput,
      oepChoice,
    })
    if (undoTimerRef.current) clearTimeout(undoTimerRef.current)
    setSignalStates(new Map(SIGNALS.map(s => [s.id, 'unchecked'])))
    setExpandedSignal(null)
    setFemaInput('')
    setFemaResults([])
    setFemaSearched(false)
    setFemaError(null)
    setZipContext('')
    setOepChoice(null)
    setExpandedCheat(null)
    undoTimerRef.current = setTimeout(() => setUndoSnapshot(null), 8000)
  }

  function handleUndo() {
    if (!undoSnapshot) return
    if (undoTimerRef.current) clearTimeout(undoTimerRef.current)
    setSignalStates(new Map(undoSnapshot.signalStates))
    setFemaInput(undoSnapshot.femaInput)
    setOepChoice(undoSnapshot.oepChoice)
    setUndoSnapshot(null)
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
                  <p className={styles.oepTitle}>Does this caller have an MA plan?</p>
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
                  Run this when you get their state. Type a state, county, or 5-digit ZIP.
                  If there&apos;s an active declaration, <strong>DST SEP</strong> may apply.
                </p>
                {femaLastUpdated && (Date.now() - new Date(femaLastUpdated).getTime()) / 86400000 > 30 && (
                  <div className={styles.femaStale}>
                    Data last updated {femaLastUpdated}. Check for a new Humana compliance communication.
                  </div>
                )}
                <div className={styles.femaInputRow}>
                  <input
                    ref={femaInputRef}
                    className={styles.femaInput}
                    type="text"
                    value={femaInput}
                    onChange={e => setFemaInput(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter') handleFemaSearch() }}
                    placeholder="State, county, or ZIP — e.g. Florida, Harris, 33601..."
                  />
                  <button className={styles.femaBtn} onClick={handleFemaSearch}>
                    Check
                  </button>
                </div>
                <p className={styles.femaHint}>
                  ZIP codes are resolved to state automatically. Don&apos;t have a county? Type the state.
                </p>

                <AnimatePresence>
                  {femaSearched && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {zipContext && (
                        <div className={styles.femaZipBadge}>{zipContext}</div>
                      )}
                      {femaError ? (
                        <div className={styles.femaNoMatch}>
                          <CloseFilled size={14} />
                          <span>{femaError}</span>
                        </div>
                      ) : femaResults.length === 0 ? (
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
                {/* Mobile active summary — shown inline on small screens only */}
                <div className={styles.mobileOnly}>
                  <AnimatePresence>
                    {hasActiveSignals && (
                      <motion.div
                        className={styles.activeSummary}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={SPRING_FAST}
                        aria-hidden="true"
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
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Progress indicator */}
                <div className={styles.progressBar} role="status" aria-live="polite">
                  <motion.div
                    className={styles.progressFill}
                    animate={{ width: `${(checkedCount / SIGNALS.length) * 100}%` }}
                    transition={prefersReducedMotion
                      ? { duration: 0 }
                      : { type: 'spring', stiffness: 300, damping: 30 }
                    }
                  />
                  <span className={styles.progressText}>
                    Checked {checkedCount} of {SIGNALS.length}
                    {activeSignals.length > 0 && ` · ${activeSignals.length} SEP${activeSignals.length > 1 ? 's' : ''} found`}
                  </span>
                </div>

                <motion.div
                  className={styles.signalGrid}
                  variants={prefersReducedMotion ? {} : containerVariants}
                  initial="hidden"
                  animate="show"
                >
                  {SIGNALS.map((sig, idx) => {
                    const state = signalStates.get(sig.id) || 'unchecked'
                    const isExpanded = expandedSignal === sig.id
                    return (
                      <SignalCardItem
                        key={sig.id}
                        sig={sig}
                        idx={idx}
                        state={state}
                        isExpanded={isExpanded}
                        prefersReducedMotion={prefersReducedMotion}
                        onToggle={toggleExpanded}
                        onSetState={setSignalState}
                        onRefSet={(id, el) => { if (el) signalRefs.current.set(id, el) }}
                      />
                    )
                  })}
                </motion.div>
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
                    initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.98 }}
                    animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
                    transition={prefersReducedMotion ? { duration: 0.15 } : { ...SPRING_FAST, delay: 0.1 }}
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
                  className={`${styles.activeSummary} ${styles.desktopOnly}`}
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
                <div className={styles.cheatNav} aria-label="Jump to category">
                  {CHEAT_SHEET.map((group, gi) => (
                    <button
                      key={gi}
                      className={styles.cheatNavChip}
                      onClick={() => document.getElementById(`cheat-cat-${gi}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                    >
                      {group.category}
                    </button>
                  ))}
                </div>
                <div className={styles.cheatTable}>
                  <div className={styles.cheatHeader}>
                    <span>Trigger</span>
                    <span>SEP</span>
                    <span>Window</span>
                    <span>Code</span>
                  </div>
                  {CHEAT_SHEET.map((group, gi) => (
                    <div key={gi}>
                      <div id={`cheat-cat-${gi}`} className={styles.cheatCategory}>{group.category}</div>
                      {group.items.map((row, i) => {
                        const rowKey = row.code ?? row.sep
                        const isExpanded = expandedCheat === rowKey
                        return (
                          <Fragment key={i}>
                            <div
                              className={`${styles.cheatRow}${row.detail ? ` ${styles.cheatRowClickable}` : ''}${isExpanded ? ` ${styles.cheatRowExpanded}` : ''}`}
                              onClick={() => {
                                if (!row.detail) return
                                setExpandedCheat(prev => prev === rowKey ? null : rowKey)
                              }}
                            >
                              <span className={styles.cheatTrigger}>{row.trigger}</span>
                              <span className={styles.cheatSep}>
                                {row.sep}
                                {row.notes && row.notes.length > 0 && (
                                  <ul className={styles.cheatNoteList}>
                                    {row.notes.map((n, i) => (
                                      <li key={i} className={styles.cheatNoteItem}>{n}</li>
                                    ))}
                                  </ul>
                                )}
                              </span>
                              <span className={styles.cheatWindow}>{row.window}</span>
                              <span className={styles.cheatCodeCol}>
                                {row.code && <code className={styles.cheatCode}>{row.code}</code>}
                                {row.detail && (
                                  <span className={styles.cheatExpandIcon} aria-hidden="true">
                                    {isExpanded ? '▴' : '▾'}
                                  </span>
                                )}
                              </span>
                            </div>
                            <AnimatePresence>
                              {row.detail && isExpanded && (
                                <motion.div
                                  className={styles.cheatDetailPanel}
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.18, ease: 'easeOut' }}
                                >
                                  <p className={styles.cheatDetailWhat}>{row.detail.what}</p>
                                  {row.detail.qualify.length > 0 && (
                                    <ul className={styles.cheatDetailList}>
                                      {row.detail.qualify.map(q => <li key={q}>{q}</li>)}
                                    </ul>
                                  )}
                                  {row.detail.watch && (
                                    <>
                                      <p className={styles.cheatDetailWatchLabel}>Watch out</p>
                                      <ul className={styles.cheatDetailList}>
                                        {row.detail.watch.map(w => <li key={w}>{w}</li>)}
                                      </ul>
                                    </>
                                  )}
                                  {row.detail.script && (
                                    <blockquote className={styles.cheatDetailScript}>{row.detail.script}</blockquote>
                                  )}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </Fragment>
                        )
                      })}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Undo banner — fixed bottom, auto-dismisses after 8s */}
      <AnimatePresence>
        {undoSnapshot && (
          <motion.div
            className={styles.undoBanner}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={SPRING_FAST}
            role="status"
            aria-live="polite"
          >
            <span>Call reset.</span>
            <button className={styles.undoBtn} onClick={handleUndo}>Undo</button>
          </motion.div>
        )}
      </AnimatePresence>
    </PageShell>
  )
}
