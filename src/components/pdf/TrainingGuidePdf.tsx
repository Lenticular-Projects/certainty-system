import React from 'react'
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer'
import { registerFonts } from '@/lib/pdf/fonts'
import { base, colors, fonts } from '@/lib/pdf/styles'

registerFonts()

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

interface SepCode {
  code: string
  name: string
  plainEnglish: string
  trigger: string
  window: string
  qualifies: string
  mistakes: string
  talkTrack: string
  scenario: string
  extra?: string[]
}

interface ComparisonBox {
  title: string
  colA: string
  colB: string
  rows: { label: string; a: string; b: string }[]
}

interface AppendixEntry {
  code: string
  fullName: string
  trigger: string
  window: string
  keyDetail: string
}

/* ------------------------------------------------------------------ */
/* Local styles                                                        */
/* ------------------------------------------------------------------ */

const s = StyleSheet.create({
  coverAccent: {
    width: 60,
    height: 5,
    backgroundColor: colors.sage,
    marginBottom: 20,
  },
  coverAudience: {
    fontSize: 10,
    color: colors.ink,
    marginBottom: 4,
  },
  tocSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.ink10,
  },
  tocLabel: {
    fontSize: 10,
    color: colors.ink,
  },
  tocPage: {
    fontSize: 10,
    color: colors.ink60,
  },
  tocSub: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 3,
    paddingLeft: 14,
  },
  tocSubLabel: {
    fontSize: 9,
    color: colors.ink60,
  },
  partHeader: {
    backgroundColor: colors.sage,
    paddingVertical: 28,
    paddingHorizontal: 52,
    marginHorizontal: -52,
    marginTop: -48,
    marginBottom: 20,
  },
  partNumber: {
    fontFamily: fonts.body,
    fontSize: 9,
    fontWeight: 700,
    letterSpacing: 1.5,
    textTransform: 'uppercase' as const,
    color: 'rgba(255,255,255,0.7)',
    marginBottom: 6,
  },
  partTitle: {
    fontFamily: fonts.heading,
    fontSize: 24,
    fontWeight: 700,
    color: '#FFFFFF',
  },
  chapterTitle: {
    fontFamily: fonts.heading,
    fontSize: 18,
    fontWeight: 700,
    color: colors.ink,
    marginBottom: 14,
    marginTop: 16,
  },
  chapterSubtitle: {
    fontSize: 9.5,
    color: colors.ink60,
    lineHeight: 1.55,
    marginBottom: 18,
  },
  /* SEP code entry */
  sepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    marginTop: 16,
  },
  sepBadge: {
    fontFamily: fonts.body,
    fontSize: 10,
    fontWeight: 700,
    color: colors.sage,
    backgroundColor: colors.sageTint,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginRight: 10,
  },
  sepName: {
    fontFamily: fonts.heading,
    fontSize: 14,
    fontWeight: 700,
    color: colors.ink,
  },
  fieldLabel: {
    fontFamily: fonts.body,
    fontSize: 8,
    fontWeight: 700,
    letterSpacing: 0.5,
    textTransform: 'uppercase' as const,
    color: colors.sage,
    marginBottom: 2,
    marginTop: 8,
  },
  fieldText: {
    fontSize: 9,
    lineHeight: 1.55,
    color: colors.ink,
    marginBottom: 2,
  },
  talkTrackBox: {
    backgroundColor: '#f0f5f1',
    borderRadius: 6,
    padding: 14,
    marginTop: 4,
    marginBottom: 4,
    borderLeftWidth: 3,
    borderLeftColor: colors.sage,
    borderWidth: 0.5,
    borderColor: '#d0ddd3',
  },
  talkTrackText: {
    fontFamily: fonts.heading,
    fontStyle: 'italic',
    fontSize: 9,
    lineHeight: 1.5,
    color: colors.ink,
  },
  scenarioBox: {
    backgroundColor: colors.bg,
    borderRadius: 6,
    padding: 10,
    marginTop: 4,
    marginBottom: 8,
    borderLeftWidth: 3,
    borderLeftColor: colors.sage,
    borderWidth: 0.5,
    borderColor: colors.ink10,
  },
  /* Comparison box */
  compBox: {
    backgroundColor: colors.bg,
    borderRadius: 8,
    padding: 12,
    marginTop: 12,
    marginBottom: 12,
    borderWidth: 0.5,
    borderColor: colors.ink10,
  },
  compTitle: {
    fontFamily: fonts.heading,
    fontSize: 11,
    fontWeight: 700,
    color: colors.sage,
    marginBottom: 8,
  },
  compHeaderRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.ink20,
    paddingBottom: 4,
    marginBottom: 4,
  },
  compLabelCol: { width: '28%' },
  compACol: { width: '36%', paddingHorizontal: 4 },
  compBCol: { width: '36%', paddingHorizontal: 4 },
  compHeaderCell: {
    fontSize: 8,
    fontWeight: 700,
    letterSpacing: 0.5,
    textTransform: 'uppercase' as const,
    color: colors.ink60,
  },
  compRow: {
    flexDirection: 'row',
    paddingVertical: 3,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.ink10,
  },
  compLabel: {
    fontSize: 8,
    fontWeight: 700,
    color: colors.ink,
  },
  compCell: {
    fontSize: 8.5,
    lineHeight: 1.4,
    color: colors.ink,
  },
  /* Warning box */
  warnBox: {
    backgroundColor: '#fef7f4',
    borderRadius: 6,
    padding: 12,
    marginVertical: 8,
    borderLeftWidth: 3,
    borderLeftColor: colors.red,
    borderWidth: 0.5,
    borderColor: '#f0d0c4',
  },
  warnTitle: {
    fontSize: 8.5,
    fontWeight: 700,
    letterSpacing: 0.5,
    textTransform: 'uppercase' as const,
    color: colors.red,
    marginBottom: 4,
  },
  warnText: {
    fontSize: 9,
    lineHeight: 1.5,
    color: colors.ink,
  },
  /* Standard enrollment table */
  stdTableRow: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: colors.ink10,
    paddingVertical: 5,
    paddingHorizontal: 2,
  },
  stdTableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.ink20,
    paddingVertical: 4,
    paddingHorizontal: 2,
    backgroundColor: colors.bg,
  },
  /* Decision tree */
  stepBox: {
    backgroundColor: colors.bg,
    borderRadius: 6,
    padding: 10,
    marginBottom: 6,
    borderLeftWidth: 3,
    borderLeftColor: colors.sage,
    borderWidth: 0.5,
    borderColor: colors.ink10,
  },
  stepTitle: {
    fontFamily: fonts.body,
    fontSize: 10,
    fontWeight: 700,
    color: colors.sage,
    marginBottom: 4,
  },
  /* Calendar month card */
  monthCard: {
    backgroundColor: colors.bg,
    borderRadius: 6,
    padding: 10,
    marginBottom: 6,
    borderWidth: 0.5,
    borderColor: colors.ink10,
  },
  monthName: {
    fontFamily: fonts.heading,
    fontSize: 11,
    fontWeight: 700,
    color: colors.ink,
    marginBottom: 3,
  },
  /* Compliance table */
  complianceRow: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: colors.ink10,
    paddingVertical: 5,
  },
  /* Appendix table */
  appxColCode: { width: '8%' },
  appxColName: { width: '18%' },
  appxColTrigger: { width: '22%' },
  appxColWindow: { width: '22%' },
  appxColDetail: { width: '30%' },
})

/* ------------------------------------------------------------------ */
/* Data: SEP Codes by Chapter                                          */
/* ------------------------------------------------------------------ */

const chapter1Codes: SepCode[] = [
  {
    code: 'IEP',
    name: 'Initial Enrollment Period',
    plainEnglish: 'The beneficiary is turning 65 and getting Medicare for the first time. This is their original, default enrollment window. Seven months total.',
    trigger: 'Turning 65 years old, or becoming eligible for Medicare due to disability after 24 months on SSDI. Part A and Part B must share the same effective date.',
    window: 'Seven months — three months before the 65th birthday month, the birthday month itself, and three months after.',
    qualifies: 'Anyone turning 65 with both Part A and Part B starting on the same date. Also applies to disability beneficiaries reaching 24 months of SSDI. NOT already in an active MA/MAPD plan. NOT valid for MA-only plans — must include drug coverage (MAPD or standalone PDP).',
    mistakes: 'Confusing IEP with ICEP. The single distinguishing question: do Part A and Part B have the same effective date? If yes, IEP. If different, ICEP. Trying to use IEP after a plan has already effectuated — once in an active plan, IEP is no longer available (use OEP-N).',
    talkTrack: 'Since you are right in your initial enrollment window, we can get you set up with the right plan today — no special circumstances needed. You have a seven-month window, and I want to make sure we use it well.',
    scenario: 'Mr. Williams mentions he just turned 65 last month. MARx shows Part A and Part B share the same effective date. No existing plan on file. He is in his IEP with five months remaining. You tell him exactly when his window closes and move to plan comparison.',
  },
  {
    code: 'IEP2',
    name: 'Disability Beneficiary Turning 65',
    plainEnglish: 'Someone who has been on Medicare through disability is now turning 65, and they get a brand-new seven-month window — as if they were enrolling for the very first time.',
    trigger: 'A Medicare beneficiary who originally qualified through disability (under 65) is now turning 65. MARx will show a Medicare Reason for Disability (MRD) code. Calculate the current golden birth year by subtracting 65 from the current year.',
    window: 'Seven months — identical structure to IEP. Three months before the 65th birthday month, the birthday month, and three months after. Uses MRD on the application.',
    qualifies: 'Disability beneficiaries turning 65. They already have Medicare through disability, but they get a completely fresh enrollment window at 65. MA-only plans are prohibited — must enroll in MAPD or PDP.',
    mistakes: 'Agents do not realize this is a separate, fresh window. The beneficiary may already be in a plan through their disability enrollment, but IEP2 gives them a new opportunity. Do not confuse their existing disability-era enrollment with using their IEP2. MA-only plans are prohibited.',
    talkTrack: 'Because you are turning 65 and you have been on Medicare through disability, you actually get a brand-new enrollment window — a fresh start. We can look at all the plans available to you right now.',
    scenario: 'Mrs. Thompson has been on Medicare since age 58 due to disability. She is turning 65 next month. MARx shows the MRD indicator. She has a fresh IEP2 window opening up — seven months to get her into the right MAPD plan.',
  },
  {
    code: 'ICEP',
    name: 'Initial Coverage Election Period',
    plainEnglish: 'The beneficiary delayed Part B — usually because they had employer coverage — and is now activating it. Part A and Part B have different effective dates.',
    trigger: 'Part B activation after a delay. Part A and Part B have different effective dates in MARx. Most often when someone had employer coverage past 65, kept Part A, delayed Part B, and is now activating Part B because they retired or lost employer coverage.',
    window: 'Five months — three months before the Part B effective month, the Part B effective month, and one month after. Recently extended from the previous shorter duration.',
    qualifies: 'Beneficiaries whose Part A and Part B have different effective dates. NOT valid for PDP enrollment — ICEP is for MA or MAPD only. If they need a standalone PDP, use IEP instead.',
    mistakes: 'Using ICEP when Part A and Part B share the same date (that is IEP). Using ICEP for PDP enrollment (not valid). Using outdated window calculations. ICEP often coincides with LEC — if employer coverage is ending at the same time Part B activates, document both codes.',
    talkTrack: 'Since your Part B is just now starting, you are in your initial enrollment window for a Medicare Advantage plan. We have a five-month window to work with — let me show you what is available in your area.',
    scenario: 'Mr. Garcia is 68. He had Part A since turning 65 but kept his employer insurance and delayed Part B. He just retired, Part B starts next month. MARx shows different effective dates. This is ICEP, not IEP. You also check for LEC since employer coverage is ending.',
  },
  {
    code: 'OEP-N',
    name: 'New Enrollee OEP',
    plainEnglish: 'The beneficiary just enrolled in their very first MA or MAPD plan, it has gone into effect, and they do not like it. They get one chance to change.',
    trigger: 'First-time MA/MAPD enrollment that has effectuated. The beneficiary realizes the plan is not right — network does not include their doctor, formulary misses their medications.',
    window: 'Month of effectuation plus two months. If the plan went into effect January 1st, they have January, February, and March.',
    qualifies: 'First-time MA/MAPD enrollees only. The plan must have actually effectuated — a pending enrollment does not trigger OEP-N. Cannot be used by PDP-only or Medigap beneficiaries. One change only — once used, it is gone.',
    mistakes: 'Trying to use OEP-N for someone with prior MA history — it is for first-timers only. Trying to use it before the plan has effectuated. Trying to use it for a PDP-only beneficiary. Not realizing that once OEP-N is used, it is consumed forever.',
    talkTrack: 'Since this is your first Medicare Advantage plan and it just went into effect, you actually have a window right now to make one change if it is not the right fit. Let\u2019s look at what else is available.',
    scenario: 'Mrs. Davis enrolled in an MAPD plan during AEP. It went into effect January 1st. She calls in February because her PCP is not in the network. She has never been in an MA plan before. OEP-N — she has until the end of March. One shot.',
  },
  {
    code: 'RET',
    name: 'Retroactive Entitlement',
    plainEnglish: 'The beneficiary was retroactively enrolled in Medicare — their Part A and/or Part B started without them knowing, and they only found out after the fact.',
    trigger: 'Notification of Medicare entitlement after coverage has already begun. Commonly surfaces when Social Security retroactively awards disability or Medicare benefits. Clock starts from notification date, not coverage date.',
    window: 'Month of notification plus two full calendar months.',
    qualifies: 'Beneficiaries notified of Part A and/or Part B after their coverage had already started. If they have both Part A and Part B, both effective dates must be the same (if different, use ICEP instead).',
    mistakes: 'Calculating the window from the coverage effective date instead of the notification date. Confusing RET with ICEP when Part A and Part B have different dates.',
    talkTrack: 'It sounds like you were enrolled in Medicare before you even knew about it. The good news is that gives you a window right now to choose a plan. Let me walk you through what is available.',
    scenario: 'Mr. Robinson calls confused. He received a letter from Social Security last week saying his Part A and Part B have been active since January. He had no idea. His notification date is this month, so his RET window is this month plus two more.',
  },
]

const chapter2Codes: SepCode[] = [
  {
    code: 'INT',
    name: 'Integrated Care SEP',
    plainEnglish: 'The beneficiary has full Medicaid and wants to enroll in a D-SNP (Dual-Eligible Special Needs Plan). They can do this any month, as many times as they want.',
    trigger: 'Full Medicaid status. The beneficiary must have FBDE (Full Benefit Dual Eligible), QMB+, SLMB+, or Full Medicaid. Partial levels like QMB-only do NOT qualify for INT.',
    window: 'Any month. Repeatable. No annual limit.',
    qualifies: 'Beneficiaries with full Medicaid enrolling into a D-SNP only. Verify Medicaid level before using this code. QMB-only does NOT qualify — they need QMB+ or higher. The D-SNP must be an integrated plan: FIDE SNP, HIDE SNP, or AIP. The Medicaid MCO must match the carrier offering the D-SNP.',
    mistakes: 'Using INT for someone with QMB-only (not eligible). Using INT for a PDP enrollment (INT is D-SNP only — use DEP for PDP). Not verifying Medicaid level before submitting. Enrolling into a D-SNP that is not FIDE, HIDE, or AIP.',
    talkTrack: 'Since you have full Medicaid, you have the ability to enroll in a Special Needs Plan designed specifically for people with both Medicare and Medicaid. These plans coordinate your benefits and often have zero or very low out-of-pocket costs. And you can make this change any time — you are not locked in.',
    scenario: 'Mrs. Hernandez mentions the state pays for everything. You confirm full Medicaid (FBDE). She is in a standard MAPD plan. An aligned integrated D-SNP is available in her county through Humana. You enroll her using INT. If next month she wants to switch to a different D-SNP, she can.',
    extra: [
      'MCO Matching — Critical Detail: INT can only be used to enroll into one of three integrated D-SNP types: FIDE SNP, HIDE SNP, or D-SNP that is an AIP. The MCO on the Medicaid side must match the carrier offering the D-SNP. Check carrier portals and state Medicaid managed care directories to confirm alignment.',
    ],
  },
  {
    code: 'DEP',
    name: 'Dual/LIS Monthly SEP',
    plainEnglish: 'The beneficiary has any level of Medicaid or Extra Help/LIS and wants to change their standalone Part D drug plan. Any month. Repeatable.',
    trigger: 'Any level of Medicaid — including QMB-only, SLMB-only, QI, and all higher levels. Or any level of Extra Help/LIS — Auto, Full, or Partial tiers.',
    window: 'Any month. Repeatable every month. No limit.',
    qualifies: 'Anyone with any Medicaid level or any LIS/Extra Help level. DEP is for PDP enrollment only. Cannot use DEP for MA or MAPD plans. If they want a D-SNP, use INT instead (and verify full Medicaid).',
    mistakes: 'Trying to use DEP for MA or MAPD enrollment (PDP only). Confusing DEP with INT — DEP has a lower bar (any Medicaid/LIS) but limited to PDP. INT has a higher bar (full Medicaid) but allows D-SNP. Confusing the ongoing monthly DEP with the one-time NLS change-in-status SEP.',
    talkTrack: 'Since you have Medicaid [or Extra Help], you actually have the ability to change your drug plan every single month — you are not locked in. If we find something better today, we can get that started for the first of next month.',
    scenario: 'Mr. Chen has QMB-only — the state pays his Part B premium, but he does not have full Medicaid. He is unhappy with his current PDP\u2019s formulary. QMB-only does not qualify for INT, but it qualifies for DEP. You can switch his PDP today.',
    extra: [
      'The LIS Two-SEP Distinction: LIS beneficiaries have access to two different SEPs. (1) Ongoing monthly DEP — available every month, repeatable, for switching between standalone PDPs. (2) One-time change-in-status SEP (NLS) — triggered when LIS level actually changes, gives a 3-month window and allows MAPD or PDP enrollment. If a beneficiary\u2019s LIS status just changed, they have both DEP and NLS — use NLS for broader plan options.',
    ],
  },
  {
    code: 'MCD',
    name: 'Medicaid Change SEP',
    plainEnglish: 'The beneficiary\u2019s Medicaid status recently changed — they gained it, lost it, or their level shifted. Three-month window.',
    trigger: 'Any change in Medicaid level. Gained Medicaid for the first time. Lost Medicaid entirely. Shifted from QMB-only to full Medicaid. Any change counts.',
    window: 'Three months from the date the Medicaid change took effect. Available all year — including after September 30th.',
    qualifies: 'Any beneficiary whose Medicaid level changed within the last three months.',
    mistakes: 'Calculating the window from the call date instead of the Medicaid change date. Not realizing MCD is available past September 30th. Missing the trigger because the beneficiary does not explicitly say "my Medicaid changed" — listen for green, purple, or orange Social Security letters.',
    talkTrack: 'Since your Medicaid situation just changed, you have a three-month window to adjust your Medicare plan. Let\u2019s make sure you are in the right plan for your current situation.',
    scenario: 'Mrs. Patterson calls in October. It is after September 30th, so most agents would think no enrollment is possible until AEP. But she just got approved for full Medicaid last month. That Medicaid change triggers MCD — a three-month window, available all year. She can enroll in a D-SNP right now using both MCD and INT.',
  },
  {
    code: 'NLS',
    name: 'Extra Help Change SEP',
    plainEnglish: 'The beneficiary\u2019s Extra Help (LIS) level recently changed — gained, lost, or shifted between tiers. Three-month window.',
    trigger: 'Any change in Extra Help/LIS status. Gained LIS for the first time. Lost LIS entirely. Shifted between tiers (Auto to Full, Full to Partial, etc.).',
    window: 'Three months from the date of the LIS change. Available all year — including after September 30th.',
    qualifies: 'Any beneficiary whose Extra Help/LIS level changed within the last three months.',
    mistakes: 'Not listening for the trigger. Beneficiaries rarely say "my Extra Help level changed." They say things like "I got a letter from Social Security" or "my copays went up." Green, purple, or orange letters from Social Security signal an Extra Help change. If Medicaid changed at the same time, MCD applies too.',
    talkTrack: 'It sounds like your Extra Help benefits recently changed. That gives you a special window right now to switch to a plan that better fits your current situation.',
    scenario: 'Mr. Adams calls in November. He got a purple letter from Social Security saying his Extra Help level changed from Full to Partial. His copays on medications just went up. NLS window is three months from the change date — and since NLS is available past September 30th, you can help him today.',
  },
]

const chapter3Codes: SepCode[] = [
  {
    code: 'MOV',
    name: 'Change of Permanent Residence SEP',
    plainEnglish: 'The beneficiary moved to a new address where their current plan may not be available. They have a window to enroll in a plan that serves their new location.',
    trigger: 'A change of physical residence to a different ZIP code or county. House fire, eviction, or moving in with family all count as long as it is a different physical address. System address mismatch is a potential live SEP.',
    window: 'Month before the move (if notified in advance) plus the month of the move plus two full calendar months after the move.',
    qualifies: 'Any beneficiary who moved to a new physical address. Can enroll in any MA, MAPD, or PDP available at the new address.',
    mistakes: 'Accepting a PO Box change as a MOV trigger — it is NOT valid. Must be a physical address change. Updating the address in the system and moving on without offering enrollment. Missing the SEP because the agent does not ask about the address or check for mismatches.',
    talkTrack: 'Because you have moved to a new area, you are actually in a special enrollment window right now. We can get you set up with the right plan for your new address today. Based on your move date, you have [X] days left in that window.',
    scenario: 'Mrs. Rodriguez calls about her plan. You verify her address and she gives a Florida address — but MARx shows Texas. She moved three weeks ago. That address mismatch is a live MOV SEP. You confirm the move date, calculate the window, and move to plan comparison for her new Florida address.',
  },
  {
    code: 'INC',
    name: 'Post-Incarceration SEP',
    plainEnglish: 'The beneficiary was recently released from a correctional facility and needs to re-enroll in a Medicare plan.',
    trigger: 'Release from a jail, prison, or detention center. Medicare is suspended — not terminated — during incarceration, so Part A and Part B should still be intact upon release.',
    window: 'Two months from the release date.',
    qualifies: 'Any Medicare beneficiary released from incarceration within the last two months. Can enroll in MA, MAPD, or PDP.',
    mistakes: 'Assuming Medicare was terminated during incarceration — it is suspended, not cancelled. Calculating the window from the call date instead of the release date. Not knowing that pre-release planning is possible — enrollment can be submitted up to one month before the release date.',
    talkTrack: 'Welcome back. Since you were just released, you have a two-month window to get enrolled in a Medicare plan. Your Medicare should still be active — let me verify that and then we can look at what is available.',
    scenario: 'Mr. Jackson says he just got out of a correctional facility two weeks ago and needs health insurance. Part A and Part B are still active (suspended during incarceration, now reinstated). Release date was two weeks ago, so he has about six weeks left in his INC window.',
  },
  {
    code: 'RUS',
    name: 'Return to US SEP',
    plainEnglish: 'The beneficiary was living permanently outside the United States and has now returned. They have two months to enroll.',
    trigger: 'Returning to the US after permanent residence abroad. Short trips and vacations do NOT qualify — this is for beneficiaries who were living outside the US full-time.',
    window: 'Two months from the return date.',
    qualifies: 'Medicare beneficiaries who permanently resided outside the US and have now returned. Can enroll in MA, MAPD, or PDP.',
    mistakes: 'Applying RUS to someone who was on vacation or a short trip. Not verifying that Part A and Part B are still active after extended absence. Not confirming the US return address is current in the system.',
    talkTrack: 'Welcome back to the States. Since you have been living abroad, you have a special enrollment window to get set up with a Medicare plan here. Let me check your Medicare status and we will find the right plan for your area.',
    scenario: 'Mrs. Kim has been living in South Korea with family for three years and just moved back to California last month. You verify Part A and Part B are still active, confirm her new California address, and proceed to enrollment under RUS.',
  },
  {
    code: 'LAW',
    name: 'Lawful Presence SEP',
    plainEnglish: 'The beneficiary recently became a US citizen or gained lawful status that makes them newly eligible for Medicare.',
    trigger: 'Becoming a US citizen or acquiring qualifying lawful presence that triggers Medicare eligibility for the first time.',
    window: 'Month of the status change plus two full calendar months.',
    qualifies: 'Beneficiaries who recently crossed the eligibility threshold through citizenship or lawful presence. Can enroll in MA, MAPD, or PDP.',
    mistakes: 'Assuming citizenship automatically starts Medicare — it does not. Part A and Part B must be confirmed active or activating. Some non-citizens may have waiting periods for premium-free Part A.',
    talkTrack: 'Congratulations on your citizenship. That actually opens a Medicare enrollment window for you right now. Let me check your Medicare eligibility and we will get you set up.',
    scenario: 'Mr. Nguyen recently became a US citizen at age 67. He has been told he now qualifies for Medicare. You verify Part A and Part B are being activated, confirm his address, and enroll him using LAW.',
  },
]

const chapter4Codes: SepCode[] = [
  {
    code: 'CSN',
    name: 'C-SNP Eligibility SEP',
    plainEnglish: 'The beneficiary has a qualifying chronic condition and a C-SNP (Chronic Condition Special Needs Plan) is available in their county for that condition. They can enroll.',
    trigger: 'The beneficiary has a severe or disabling chronic condition — diabetes, heart failure, ESRD, COPD, cancer, and many others — and a matching C-SNP exists in their county. The condition alone is not enough; a C-SNP for that specific condition must be available where they live.',
    window: 'Once per calendar year per qualifying condition. A new qualifying condition triggers a new SEP.',
    qualifies: 'Beneficiaries with a qualifying chronic condition enrolling INTO a C-SNP. Must be enrolling into a C-SNP — cannot be used for standard MA or MAPD. C-SNP to C-SNP for the same condition is NOT valid.',
    mistakes: 'Confirming the SEP before verifying a C-SNP actually exists in the beneficiary\u2019s county. Not all counties have C-SNPs. Check Aetna, Humana, UHC, and WellCare carrier portals first. C-SNP to C-SNP for the same condition is NOT valid — only switching for a different condition qualifies.',
    talkTrack: 'Because you have [condition], you may actually qualify for a Special Needs Plan built specifically for people managing that. These plans often have lower copays and benefits tailored to your exact needs — and you can enroll right now.',
    scenario: 'Mrs. Washington mentions she takes metformin and insulin for her diabetes. You check Humana\u2019s carrier portal and find a Diabetes Management C-SNP in her county. She qualifies for CSN. You explain the tailored benefits and proceed to enrollment.',
    extra: [
      'Qualifying chronic conditions: Chronic alcohol/drug dependence, autoimmune disorders (lupus, rheumatoid arthritis, MS), cancer, cardiovascular disorders, chronic heart failure, dementia/Alzheimer\u2019s, diabetes, end-stage liver disease, ESRD/dialysis, hematologic disorders, HIV/AIDS, chronic lung disorders (COPD, emphysema), chronic mental health conditions (schizophrenia, bipolar, major depression), neurological disorders (Parkinson\u2019s, epilepsy, ALS), and stroke/CVA.',
      'Provider attestation: C-SNP enrollment requires the beneficiary\u2019s provider to attest that the beneficiary has been diagnosed with the qualifying condition. This must be completed prior to the end of the second month of enrollment. If not confirmed, the beneficiary will be disenrolled but gets a two-month SEP (SNP code) to join another plan.',
      'Why C-SNP is your biggest SEP-season tool: 17 million eligible beneficiaries. Year-round availability. No ticking clock. High-value plans with lower copays for condition-specific services. The question that opens the door: "Do you have any ongoing health conditions like diabetes, heart failure, or COPD?"',
    ],
  },
  {
    code: 'PAP',
    name: 'SPAP SEP',
    plainEnglish: 'The beneficiary is enrolled in an approved State Pharmaceutical Assistance Program and can change their PDP once per year, or has two months after losing that program.',
    trigger: 'Active enrollment in a CMS-approved SPAP program. Common qualifying programs: New York (EPIC), New Jersey (PAAD), Pennsylvania (PACE/PACENET), Wisconsin (SeniorRx).',
    window: 'One PDP change per year while actively enrolled. If they lose the SPAP enrollment, two months from the loss date.',
    qualifies: 'Beneficiaries currently enrolled in a CMS-approved SPAP program. PDP enrollment or changes only.',
    mistakes: 'Assuming all state assistance programs qualify — only CMS-approved SPAP programs count. Not confirming the beneficiary is still actively enrolled in the program.',
    talkTrack: 'Since you are enrolled in [state program], you have the ability to change your drug plan right now. Let\u2019s see if there is something that works better with your current medications.',
    scenario: 'Mr. O\u2019Brien from New York mentions he is in the EPIC program. You confirm EPIC is a CMS-approved SPAP. He has not used his annual PAP change yet this year. You can switch his PDP today.',
  },
  {
    code: 'PAC',
    name: 'PACE Disenrollment SEP',
    plainEnglish: 'The beneficiary has already left a PACE program on their own. They have two months to enroll in a new plan.',
    trigger: 'Voluntary disenrollment from a PACE (Program of All-Inclusive Care for the Elderly) plan — which has already occurred. You should never suggest or initiate PACE disenrollment.',
    window: 'Two months from the PACE disenrollment date.',
    qualifies: 'Beneficiaries who have already disenrolled from PACE. Can enroll in MA, MAPD, or PDP.',
    mistakes: 'Encouraging or initiating PACE disenrollment — NEVER do this. PACE provides comprehensive, coordinated care for frail elderly individuals. This SEP only applies after disenrollment has already happened on the beneficiary\u2019s initiative.',
    talkTrack: 'Since you have already left the PACE program, you have a two-month window to get enrolled in a new plan. Let me show you what is available.',
    scenario: 'Mrs. Foster left her PACE program two weeks ago because she moved to a new area where PACE is not available. She has about six weeks left in her PAC window. You confirm the disenrollment date and proceed.',
  },
  {
    code: 'SNP',
    name: 'SNP Loss SEP',
    plainEnglish: 'The beneficiary is in a Special Needs Plan but has lost their SNP eligibility — either because the qualifying condition was not verified in time or they no longer meet the criteria.',
    trigger: 'Loss of SNP eligibility. Most commonly: the provider failed to verify the qualifying chronic condition within two months of enrollment. Or the beneficiary no longer meets the SNP eligibility criteria.',
    window: 'From the time of SNP eligibility loss up to three months after the SNP\u2019s grace period ends.',
    qualifies: 'Beneficiaries currently in a C-SNP (or other SNP) who have lost eligibility. They need a new plan before the SNP disenrollment date to avoid a coverage gap.',
    mistakes: 'Not acting fast enough — the window is measured from the grace period end, not the call date. Not realizing that provider failure to verify is common and often not the beneficiary\u2019s fault.',
    talkTrack: 'It looks like your Special Needs Plan eligibility has changed. The good news is you have a window right now to get into a new plan so there is no gap in your coverage. Let me help you with that.',
    scenario: 'Mr. Brown calls confused. He got a letter saying his C-SNP enrollment is being terminated because his doctor never sent in the condition verification paperwork. This is not his fault. You calculate how much of his SNP window remains and move quickly to enroll him in a new plan.',
  },
]

const chapter5Codes: SepCode[] = [
  {
    code: 'OEP-I',
    name: 'Institutionalized OEP',
    plainEnglish: 'The beneficiary lives in a nursing home, SNF, or LTC facility. They can enroll in or switch MA/MAPD plans at any time — unlimited changes while in the facility, plus two months after discharge.',
    trigger: 'Current residence in a qualifying care facility: nursing home, skilled nursing facility, or long-term care facility.',
    window: 'Unlimited while in the facility. Plus two full months after discharge.',
    qualifies: 'Beneficiaries currently living in a qualifying facility. Must enroll in MA or MAPD only — NOT PDP. For PDP enrollment in a care facility, use LTC instead.',
    mistakes: 'Applying OEP-I to assisted living facilities or residential homes — they do NOT qualify. Must be a licensed nursing home or SNF. Using OEP-I for PDP enrollment (use LTC). Not confirming the beneficiary is still in the facility.',
    talkTrack: 'Because you are in a care facility right now, you have the ability to change your Medicare Advantage plan at any time. There is no deadline pressure — we can make sure you are in the plan that serves you best.',
    scenario: 'Mrs. Grant\u2019s daughter calls on her behalf. Mrs. Grant is in a skilled nursing facility recovering from a hip replacement. She is unhappy with her MAPD coverage for rehab services. OEP-I applies — unlimited changes. You switch her to an MAPD with better rehab coverage.',
  },
  {
    code: 'LTC',
    name: 'LTC SEP',
    plainEnglish: 'Same facility requirement as OEP-I, but for standalone PDP enrollment instead of MA/MAPD.',
    trigger: 'Current residence in a qualifying care facility: skilled nursing facility, nursing home, intermediate care facility (mentally disabled), psychiatric hospital, rehabilitation hospital, or long-term care hospital.',
    window: 'Unlimited while in the facility. Plus two full months after discharge.',
    qualifies: 'Beneficiaries in a qualifying facility who need a standalone PDP. Must enroll in PDP only — NOT MA/MAPD (use OEP-I for that).',
    mistakes: 'Confusing LTC with OEP-I. They cover the same facility types, but LTC is PDP-only and OEP-I is MA/MAPD-only. Applying to assisted living facilities (not qualifying).',
    talkTrack: 'Since you are in a care facility, you can change your drug plan at any time. Let me look at what is available and find the best one for your current medications.',
    scenario: 'Mr. Mitchell is in a long-term care hospital. He is on Original Medicare (not MA) and needs a better Part D plan. LTC applies — he can switch PDPs at any time while in the facility.',
  },
]

const chapter6Codes: SepCode[] = [
  {
    code: 'LCC',
    name: 'Loss of Creditable Coverage',
    plainEnglish: 'The beneficiary lost other creditable health or drug coverage — VA, TRICARE, employer, ACA — and now needs a Medicare plan.',
    trigger: 'Involuntary loss of creditable coverage. VA benefits ending, TRICARE ending, employer coverage ending, ACA marketplace coverage ending. The loss must be involuntary — if the beneficiary stopped paying premiums and lost coverage, LCC does NOT apply.',
    window: 'Two months from the date of loss OR the date of notification — whichever is later.',
    qualifies: 'Beneficiaries who involuntarily lost creditable coverage. Can enroll in MA, MAPD, or PDP.',
    mistakes: 'Using LCC when the beneficiary forfeited coverage by not paying premiums — that is voluntary. Calculating from the loss date when the notification date was later. Not recognizing that VA and TRICARE are creditable coverage.',
    talkTrack: 'Since you just lost your [VA/TRICARE/employer] coverage, you qualify for a special enrollment window right now. We need to get you into a plan before that window closes. When exactly did that coverage end?',
    scenario: 'Mrs. Clark\u2019s husband was a veteran and they had VA coverage. He passed away last month and she lost her VA health benefits. You confirm the loss date, calculate two months from that date (or from notification, whichever is later), and proceed.',
  },
  {
    code: 'INV',
    name: 'Involuntary Loss SEP',
    plainEnglish: 'The beneficiary lost their Medicare Advantage plan because their Part B was terminated or dropped. They need a PDP to keep drug coverage.',
    trigger: 'Loss of MA/MAPD plan because Part B was terminated. Without Part B, you cannot be in Medicare Advantage. The beneficiary falls back to Original Medicare (Part A only) and needs a standalone PDP.',
    window: 'From notice of Part B loss, through the plan\u2019s grace period, plus two months after coverage ends.',
    qualifies: 'Beneficiaries who lost MA/MAPD due to Part B termination. Must enroll in PDP only — cannot re-enter MA until Part B is reinstated.',
    mistakes: 'Trying to enroll in MA when Part B is not active. Not realizing that when Part B is eventually restored, ICEP or another qualifying SEP will apply for MA re-enrollment.',
    talkTrack: 'It looks like your Part B was dropped, which means your Medicare Advantage plan ended too. The important thing right now is to get you into a drug plan so your prescriptions are covered. When Part B gets reinstated, we can look at getting you back into an Advantage plan.',
    scenario: 'Mr. Taylor calls in a panic. His MAPD plan is ending because his Part B was terminated — he missed a premium payment. You enroll him in a PDP using INV and advise him to contact Social Security to reinstate Part B.',
  },
  {
    code: 'REC',
    name: 'Receivership SEP',
    plainEnglish: 'The beneficiary\u2019s insurance carrier has been taken over by the state due to financial instability. They can switch plans at any time until the situation resolves.',
    trigger: 'State financial receivership of the beneficiary\u2019s plan carrier. This is rare — CMS and the state communicate directly with affected beneficiaries.',
    window: 'From the effective date of state action until the action ends or the beneficiary enrolls in a new plan — whichever comes first.',
    qualifies: 'Beneficiaries whose current carrier is under active state financial receivership. Can switch to any MA, MAPD, or PDP.',
    mistakes: 'Confusing REC with EOC — REC is a financial solvency issue, EOC is a carrier market exit. Verify receivership status with your compliance team before using this code.',
    talkTrack: 'Your current carrier is going through some financial changes, and CMS is offering you the ability to switch to any other plan right now. Let\u2019s find one that maintains the coverage you need.',
    scenario: 'Mrs. White calls referencing a letter about her insurance company being "taken over by the state." You verify with your compliance team that the carrier is indeed under receivership. REC applies — she can switch to any plan immediately.',
  },
  {
    code: 'EOC',
    name: 'Plan Non-Renewal SEP',
    plainEnglish: 'The beneficiary\u2019s carrier decided to stop offering their plan in their area. The plan is ending, and they need a new one.',
    trigger: 'Carrier non-renewal. The carrier decided to leave the beneficiary\u2019s service area — they were not terminated by Medicare, they chose to exit. The beneficiary should have received an ANOC letter.',
    window: 'December 8th through the end of February.',
    qualifies: 'Beneficiaries whose plan was non-renewed by the carrier. Can enroll in any MA, MAPD, or PDP.',
    mistakes: 'Confusing EOC with MYT — EOC is carrier-initiated (they chose to leave), MYT is CMS-initiated (Medicare terminated the contract). Not checking the system for plan termination status.',
    talkTrack: 'It looks like your current plan is actually leaving your area — which means you automatically qualify for a special enrollment window to get into a new plan. Let\u2019s make sure we get you set up before your current coverage ends.',
    scenario: 'Mr. Lopez calls in January. His Humana MAPD plan is no longer being offered in his county. EOC applies. He has until the end of February. You also note that since he is in an MA plan during January through March, OEP may also be available.',
  },
  {
    code: 'MYT',
    name: 'Medicare Contract Termination',
    plainEnglish: 'Medicare itself terminated the contract with the beneficiary\u2019s plan carrier. CMS-initiated, not carrier-initiated.',
    trigger: 'CMS has terminated its contract with the plan carrier. This is a CMS enforcement action — different from a carrier voluntarily leaving a market.',
    window: 'Two months before the contract end date plus one full month after.',
    qualifies: 'Beneficiaries whose plan carrier\u2019s contract was terminated by CMS. Can enroll in any MA, MAPD, or PDP.',
    mistakes: 'Confusing MYT with EOC. EOC = carrier chose to leave. MYT = Medicare terminated the contract. Different trigger, different window, different code.',
    talkTrack: 'Medicare has ended the contract with your current plan\u2019s carrier, so your coverage will be changing. The good news is you have a window right now to choose a new plan. Let me help you find the right one.',
    scenario: 'Mrs. Anderson received a formal CMS letter saying her plan\u2019s contract is being terminated effective June 30th. MYT applies. Her window opens two months before termination (April) and extends one month after (July).',
  },
]

const chapter7Codes: SepCode[] = [
  {
    code: 'LEC',
    name: 'Loss of Employer Coverage SEP',
    plainEnglish: 'The beneficiary lost employer, union, or COBRA coverage — through retirement, layoff, COBRA expiration, or death of a covered spouse.',
    trigger: 'Loss of employer, union, or COBRA coverage for any reason. Retirement. Layoff. COBRA expiration. Death of a spouse who carried the employer coverage. All count.',
    window: 'Month of loss plus two full calendar months.',
    qualifies: 'Beneficiaries who lost employer/union/COBRA coverage. Can enroll in MA, MAPD, or PDP.',
    mistakes: 'Calculating from the call date instead of the coverage end date. Not recognizing COBRA expiration as a qualifying loss. Not checking whether Part B was also delayed (ICEP may apply simultaneously). Not checking for remaining VA or TRICARE drug coverage (CDC may also apply).',
    talkTrack: 'Because your employer coverage just ended, you qualify for a Special Enrollment Period right now. That gives you a window from when that coverage ended to get into a new Medicare plan. When exactly did your coverage terminate?',
    scenario: 'Mrs. Martinez just retired last month and her employer coverage ended March 31st. She has had Part A since turning 65 but delayed Part B — which is now activating May 1st. This is both LEC and ICEP. You document both codes and enroll her in the MAPD plan that best fits.',
    extra: [
      'Delayed Part B forms to know: CMS-L564 (Request for Employment Information) is completed by the employer to verify the beneficiary had employer coverage. CMS-40B (Application for Enrollment in Medicare Part B) is the actual Part B enrollment form submitted to Social Security. Reference these form numbers on the call to build credibility.',
    ],
  },
  {
    code: 'OSD',
    name: 'Cost Plan Disenrollment SEP',
    plainEnglish: 'The beneficiary dropped a Medicare Cost Plan that included drug coverage and needs a standalone PDP.',
    trigger: 'Dropping a Medicare Cost Plan that included Part D drug coverage and returning to Original Medicare. Cost Plans are a distinct plan type operating in limited markets, primarily in the Midwest (Minnesota, Iowa, and surrounding areas).',
    window: 'Two full calendar months after the month they drop the Cost Plan.',
    qualifies: 'Beneficiaries who dropped a Cost Plan with drug coverage. Must enroll in PDP only — OSD does not apply to MA/MAPD enrollment.',
    mistakes: 'Not knowing what a Cost Plan is (they are rare and market-specific). Trying to use OSD for MA enrollment. Applying OSD when the dropped Cost Plan did not include drug coverage.',
    talkTrack: 'Since you left your Cost Plan, you have a two-month window to get into a drug plan so your prescriptions stay covered. Let me find the best option for your medications.',
    scenario: 'Mr. Hansen from Minnesota just dropped his HealthPartners Cost Plan last month. The plan included Part D drug coverage. He needs a standalone PDP now. OSD gives him two months.',
  },
  {
    code: '12G',
    name: '12-Month Trial Right (Medigap)',
    plainEnglish: 'The beneficiary dropped a Medigap plan to join their very first MA/MAPD plan and now wants to go back. They have 12 months to return to Original Medicare plus Medigap plus PDP.',
    trigger: 'The beneficiary specifically dropped a Medicare Supplement (Medigap) policy to enroll in their first-ever MA/MAPD plan. Now they want to return.',
    window: '12 months from the MA plan effective date.',
    qualifies: 'First-time MA enrollees who dropped a Medigap plan to join MA. Returns them to Original Medicare plus Medigap (with guaranteed issue rights varying by state) plus standalone PDP.',
    mistakes: 'Confusing 12G with 12J. Key difference: 12G requires a prior Medigap plan that was dropped. 12J does not require Medigap history. Trying to use 12G for someone with prior MA history — it must be their first time in MA.',
    talkTrack: 'Since you dropped your Medigap plan to try Medicare Advantage for the first time and it has been less than 12 months, you have the right to go back to Original Medicare with your supplement. Let me help you get that set up.',
    scenario: 'Mrs. Sullivan had a Medigap Plan G for years. During last AEP, she switched to an MAPD plan for the first time (effective January 1st). It is now June, and she hates it. She dropped her Medigap to join MA, this is her first MA plan, and it has been less than 12 months. 12G applies.',
    extra: [
      'Practical context: If you sold MAPD plans during the most recent AEP and any of those clients had Medigap before, those clients have a 12G trial right through the end of the current calendar year. Proactively check in — if they are happy, you solidify the relationship. If unhappy, you help them exercise 12G before the window closes. The 12-month clock starts from the MA plan effective date (usually January 1st), not from the application signing date.',
    ],
  },
  {
    code: '12J',
    name: 'Age-65 Trial Right',
    plainEnglish: 'The beneficiary enrolled in MA/MAPD for the first time when they turned 65 and wants to go back to Original Medicare plus PDP within 12 months.',
    trigger: 'First-time MA/MAPD enrollment upon turning 65. The beneficiary wants to leave MA within the first year.',
    window: '12 months from the initial MA plan effective date.',
    qualifies: 'First-time age-65 MA enrollees. Must also enroll in a standalone PDP — PDP enrollment is mandatory under 12J. Returns to Original Medicare plus PDP.',
    mistakes: 'Not enrolling in a PDP — it is mandatory, not optional, under 12J. Confusing with 12G — 12J does not require a prior Medigap plan. Applying 12J to someone who was not a first-time age-65 enrollee.',
    talkTrack: 'Since you enrolled in Medicare Advantage for the first time when you turned 65 and it has been less than a year, you have the option to return to Original Medicare. We will also need to set you up with a drug plan. Let me walk you through the options.',
    scenario: 'Mr. Reynolds turned 65 in January and enrolled in an MAPD plan effective January 1st. It is now September. He feels Original Medicare would give him more flexibility. He has no Medigap history (so 12G does not apply), but 12J does — first-time age-65 MA enrollment within 12 months.',
  },
  {
    code: 'CDC',
    name: 'Creditable Drug Coverage SEP',
    plainEnglish: 'The beneficiary is in an MAPD plan but also has other creditable drug coverage (VA, TRICARE, employer retiree drug) — they can move to an MA-only plan to drop the duplicate drug coverage.',
    trigger: 'Beneficiary enrolled in MAPD (or PDP) who has other active creditable drug coverage. They are paying for drug coverage they do not need because VA, TRICARE, or employer retiree coverage already handles it.',
    window: 'Anytime. No window restriction.',
    qualifies: 'Beneficiaries in MAPD or PDP with other active creditable drug coverage. Must move OUT of MAPD/PDP and INTO an MA-only plan — the Part D component must be dropped.',
    mistakes: 'Trying to use CDC to switch between MAPD plans — it is not a switching tool. The destination must be MA-only. Not verifying that the other creditable drug coverage is still active.',
    talkTrack: 'Since you already have drug coverage through [VA/TRICARE/employer], you are actually paying for duplicate drug coverage in your current plan. We can move you to a Medicare Advantage plan without the drug component, which could save you money. And we can do this at any time.',
    scenario: 'Mr. Cooper is in an MAPD plan but also has TRICARE for Life, which includes drug coverage. He is effectively paying for Part D twice. CDC lets him move to an MA-only plan, drop the duplicate Part D, and potentially lower his costs. Available anytime.',
  },
  {
    code: 'DIF',
    name: 'Government Enrollment SEP',
    plainEnglish: 'Medicare automatically enrolled the beneficiary in a plan without their choice. They have three months to switch to whatever they actually want.',
    trigger: 'Government auto-enrollment. Medicare placed the beneficiary into a plan without their active selection. In MARx, look for an "X" indicator next to the plan code.',
    window: 'Three months from the auto-enrollment effective date.',
    qualifies: 'Beneficiaries who were automatically enrolled by the government. Can switch to any MA, MAPD, or PDP.',
    mistakes: 'Not checking for the "X" indicator in MARx. Not recognizing the trigger — the beneficiary may not know how they got into their plan. Common with low-income beneficiaries automatically assigned to benchmark LIS drug plans.',
    talkTrack: 'It looks like Medicare placed you in this plan automatically — you did not choose it yourself. That means you have a three-month window right now to switch to whatever plan actually fits your needs. Let me help you find the right one.',
    scenario: 'Mrs. Nelson calls confused. She does not recognize her current drug plan. MARx shows an "X" next to the plan code — government auto-enrollment. She is a low-income beneficiary automatically assigned to a benchmark LIS plan. DIF applies — three months to switch.',
  },
  {
    code: 'ACC',
    name: 'Accessible Format SEP',
    plainEnglish: 'The beneficiary requested plan materials in an accessible format (large print, Braille, audio) and did not receive them in time to make an enrollment decision during their available window.',
    trigger: 'The beneficiary requested accessible format materials and either did not receive them or received them too late to make an informed enrollment decision within an election period they already had open.',
    window: 'Equal to the time lost waiting for accessible materials — essentially extends the enrollment period the beneficiary missed due to the delay.',
    qualifies: 'Beneficiaries who genuinely need accessible format materials and were unable to make a timely enrollment decision because of the delay in receiving them.',
    mistakes: 'This is a heavily watched SEP. Carrier benchmarks are approximately 3% of enrollments. Do NOT use ACC as a convenience code. The beneficiary must have actually requested accessible materials and been unable to enroll during their window because of the delay.',
    talkTrack: 'It sounds like you needed those materials in a different format and did not get them in time to make your decision. That actually qualifies you for additional time to make your enrollment choice. Let me help you with that now.',
    scenario: 'Mrs. Williams is legally blind and requested large-print plan comparison materials during AEP. The materials arrived in mid-December — after AEP closed on December 7th. She was unable to compare plans. ACC gives her additional time. You verify she actually requested the materials and confirm the dates.',
  },
]

const chapter8Codes: SepCode[] = [
  {
    code: '5ST',
    name: '5-Star SEP',
    plainEnglish: 'A 5-star rated plan is available in the beneficiary\u2019s area, and they can enroll in it outside of AEP.',
    trigger: 'The existence of a CMS 5-star rated MA, MAPD, or PDP in the beneficiary\u2019s service area. This is the only SEP that allows year-round enrollment without a qualifying life event — the "event" is simply that a top-rated plan exists nearby.',
    window: 'December 8th through November 30th of the following year. Once per calendar year.',
    qualifies: 'Any beneficiary with a 5-star plan available in their ZIP code. One use per year.',
    mistakes: 'Not verifying that the plan still holds 5 stars for the current plan year — designations change annually. Using 5ST twice in the same year. Offering 5ST without confirming a 5-star plan actually exists in the beneficiary\u2019s specific ZIP code.',
    talkTrack: 'There is a plan in your area that earned the highest quality rating from Medicare — five out of five stars. Because of that rating, you can actually enroll in it right now, outside of the normal enrollment windows.',
    scenario: 'Mrs. Campbell calls about her current plan. You check carrier portals and discover a 5-star rated MAPD plan in her county. Even though it is July and no other SEP applies, 5ST lets her switch.',
  },
  {
    code: 'LPI',
    name: 'Low-Performing Plan SEP',
    plainEnglish: 'The beneficiary is stuck in a plan that has been rated 2.5 stars or lower for three straight years. They can leave at any time.',
    trigger: 'The beneficiary\u2019s current plan has a CMS star rating of 2.5 or lower for three consecutive contract years. CMS designates these as low-performing plans.',
    window: 'Anytime while enrolled in a low-performing plan. No window restriction.',
    qualifies: 'Beneficiaries currently in a low-performing plan. Must enroll into a plan rated 3 stars or higher.',
    mistakes: 'Not checking the plan\u2019s current star rating. Enrolling the beneficiary into another plan rated below 3 stars — the destination must be 3 stars or higher.',
    talkTrack: 'Your current plan has been rated below average by Medicare for three years in a row. You do not have to stay in it — you can switch to a higher-rated plan at any time. Let me show you what is available.',
    scenario: 'Mr. Webb calls referencing a CMS letter about his plan being "low-performing." You verify in MARx that his plan is rated 2.0 stars for three consecutive years. LPI applies — he can switch at any time to a plan rated 3 stars or higher.',
  },
]

const chapter9Codes: SepCode[] = [
  {
    code: 'DST',
    name: 'Disaster SEP',
    plainEnglish: 'A FEMA-declared disaster prevented the beneficiary from making an enrollment during a window they already had open. The disaster extends that missed window — it does NOT create a new one.',
    trigger: 'A FEMA-declared disaster or CMS-designated public health emergency affected the beneficiary\u2019s area during a time when they had an active enrollment window (AEP, IEP, OEP, or another SEP) and the disaster prevented them from using it.',
    window: 'Duration of the emergency plus two full months after the declared end date.',
    qualifies: 'Beneficiaries who (1) were in an area affected by a FEMA declaration, (2) had an active enrollment window during the disaster period, (3) were prevented from enrolling because of the disaster, and (4) did NOT use any other SEP since the disaster. All four conditions must be met.',
    mistakes: 'The biggest one: treating DST as a standalone SEP. A disaster alone does NOT create a new enrollment window. The beneficiary must have had an existing window that was disrupted. If a hurricane hit in August but the beneficiary did not have any active SEP during August, DST does not apply. Also, if the beneficiary used ANY other SEP after the disaster, DST is no longer available. Do NOT proactively market or suggest this SEP.',
    talkTrack: 'It sounds like the disaster in your area may have prevented you from enrolling during your window. If that is the case, you may have additional time. Let me check the FEMA declarations for your area and see if we can help.',
    scenario: 'Mr. Sanchez calls in April. A hurricane hit his area in October, during AEP. He was displaced and could not complete his AEP enrollment. He has not used any other SEP since. The FEMA declaration for his county is still active. DST applies — the disaster extended his missed AEP window.',
    extra: [
      'DST requires two enrollment reasons on the application: (1) the election period the beneficiary missed (AEP, IEP, OEP, etc.), and (2) "Affected by an emergency or major disaster (as declared by FEMA or a government entity)."',
      'DST Pre-Submission Checklist: Is there an active FEMA declaration for the beneficiary\u2019s county? Do the dates overlap with an enrollment period? Which enrollment period did the beneficiary miss? Was the beneficiary actually prevented from enrolling? Has the beneficiary used any other SEP since? Did the beneficiary raise the disaster situation (you should never bring it up)?',
    ],
  },
]

const chapter10Codes: SepCode[] = [
  {
    code: 'AEP',
    name: 'Annual Election Period',
    plainEnglish: 'October 15th through December 7th. Everyone can change plans. No SEP needed. Coverage effective January 1st.',
    trigger: 'The calendar. October 15th rolls around and the door opens for every Medicare beneficiary.',
    window: 'October 15 through December 7 each year. Coverage effective January 1st of the following year. The last enrollment submitted wins.',
    qualifies: 'All Medicare beneficiaries. No restrictions.',
    mistakes: 'Confusing AEP with OEP — AEP is October through December for everyone; OEP is January through March for existing MA members only. Not realizing that submitting multiple plans during AEP is valid — only the last one takes effect.',
    talkTrack: 'We are in open enrollment right now, which means we can look at all the plans available to you and get you enrolled today. Whatever we choose will take effect January 1st.',
    scenario: 'Anyone calling between October 15th and December 7th. No SEP discovery needed. Confirm their Medicare status, compare plans, enroll. The simplest calls of the year.',
  },
  {
    code: 'OEP',
    name: 'MA Open Enrollment Period',
    plainEnglish: 'January 1st through March 31st. Existing MA members get one change. Effective the first of the following month.',
    trigger: 'The calendar, plus the beneficiary must already be enrolled in an MA or MAPD plan.',
    window: 'January 1 through March 31. One change only. Effective the 1st of the following month.',
    qualifies: 'Beneficiaries currently enrolled in an MA or MAPD plan. NOT available to PDP-only or Original Medicare beneficiaries.',
    mistakes: 'Treating OEP as a free-for-all like AEP — it is one change only, for existing MA members only. Not checking MARx to see if OEP has already been used. Using OEP for a dual-eligible beneficiary who has INT or DEP available — those monthly SEPs are better options.',
    talkTrack: 'Since you are already in a Medicare Advantage plan, you have the option to make one change during this open enrollment window. That change would take effect the first of next month.',
    scenario: 'Mr. Perez calls in February. He enrolled in an MAPD during AEP but wants to switch to a different one. He is not dual-eligible, not new to Medicare, and has no other qualifying event. But he is in an MA plan during OEP — he can make one change.',
  },
]

/* ------------------------------------------------------------------ */
/* Comparison Boxes                                                    */
/* ------------------------------------------------------------------ */

const comparisons: ComparisonBox[] = [
  {
    title: 'IEP vs ICEP',
    colA: 'IEP',
    colB: 'ICEP',
    rows: [
      { label: 'The one question', a: 'Do Part A and Part B share the same effective date?', b: 'Are the dates different?' },
      { label: 'If YES', a: 'Use IEP', b: 'Use ICEP' },
      { label: 'Window', a: '7 months around 65th birthday', b: '5 months around Part B start' },
      { label: 'Anchor date', a: '65th birthday', b: 'Part B effective date' },
      { label: 'PDP eligible?', a: 'Yes', b: 'No — ICEP is MA/MAPD only' },
      { label: 'MA-only eligible?', a: 'No', b: 'Yes' },
      { label: 'Common overlap', a: 'None typical', b: 'Often overlaps with LEC' },
    ],
  },
  {
    title: 'INT vs DEP',
    colA: 'INT',
    colB: 'DEP',
    rows: [
      { label: 'The one question', a: 'Does the beneficiary have FULL Medicaid?', b: 'Do they have ANY Medicaid or LIS?' },
      { label: 'Medicaid level required', a: 'Full: FBDE, QMB+, SLMB+, Full', b: 'Any: QMB-only, SLMB-only, QI, LIS-only — all qualify' },
      { label: 'What can they enroll in?', a: 'D-SNP only', b: 'PDP only' },
      { label: 'Repeatable?', a: 'Yes, any month', b: 'Yes, any month' },
      { label: 'Key trap', a: 'QMB-only does NOT qualify', b: 'Cannot use for MA/MAPD' },
    ],
  },
  {
    title: 'MOV vs LEC',
    colA: 'MOV',
    colB: 'LEC',
    rows: [
      { label: 'The one question', a: 'Did they physically move?', b: 'Did they lose employer/union/COBRA coverage?' },
      { label: 'Trigger', a: 'New physical address', b: 'Coverage termination' },
      { label: 'Window', a: 'Month before (if notified) + month of + 2 months after', b: 'Month of loss + 2 months' },
      { label: 'What they enroll in', a: 'Any plan at new address', b: 'Any MA, MAPD, or PDP' },
      { label: 'Key trap', a: 'PO Box change does NOT count', b: 'COBRA expiration counts as loss' },
      { label: 'Overlap', a: 'May overlap with LEC if move caused job loss', b: 'May overlap with ICEP if Part B also activating' },
    ],
  },
  {
    title: 'OEP-I vs LTC',
    colA: 'OEP-I (LT2)',
    colB: 'LTC',
    rows: [
      { label: 'The one question', a: 'Do they need MA/MAPD?', b: 'Do they need a PDP?' },
      { label: 'Enrolls into', a: 'MA or MAPD only', b: 'Standalone PDP only' },
      { label: 'Facility types', a: 'Same qualifying facilities', b: 'Same qualifying facilities' },
      { label: 'Window', a: 'Unlimited + 2 months after discharge', b: 'Unlimited + 2 months after discharge' },
      { label: 'Key trap', a: 'Assisted living does NOT qualify', b: 'Assisted living does NOT qualify' },
    ],
  },
  {
    title: 'LCC vs LEC',
    colA: 'LCC',
    colB: 'LEC',
    rows: [
      { label: 'The one question', a: 'Did they lose creditable coverage that is NOT employer-based?', b: 'Did they lose employer/union/COBRA coverage?' },
      { label: 'Covers', a: 'VA, TRICARE, ACA, other creditable coverage', b: 'Employer, union, COBRA specifically' },
      { label: 'Window', a: '2 months from loss or notification (later)', b: 'Month of loss + 2 months' },
      { label: 'Key trap', a: 'NOT valid if they stopped paying premiums', b: 'COBRA expiration counts' },
      { label: 'Overlap', a: 'May overlap with MOV', b: 'May overlap with ICEP' },
    ],
  },
  {
    title: 'EOC vs MYT',
    colA: 'EOC',
    colB: 'MYT',
    rows: [
      { label: 'The one question', a: 'Did the carrier choose to leave?', b: 'Did Medicare terminate the contract?' },
      { label: 'Who initiated?', a: 'Carrier decided to exit the market', b: 'CMS enforcement action' },
      { label: 'Window', a: 'Dec 8 through end of February', b: '2 months before + 1 month after contract end' },
      { label: 'Beneficiary notice', a: 'ANOC letter from carrier', b: 'Formal CMS letter' },
      { label: 'Key trap', a: 'Overlaps with OEP for existing MA members', b: 'Enrollment takes effect after contract end date' },
    ],
  },
  {
    title: '12G vs 12J',
    colA: '12G',
    colB: '12J',
    rows: [
      { label: 'The one question', a: 'Did they drop a Medigap plan to join MA?', b: 'Did they join MA for the first time at 65?' },
      { label: 'Prior Medigap required?', a: 'Yes — must have dropped Medigap to join MA', b: 'No — no Medigap history needed' },
      { label: 'PDP required?', a: 'Yes', b: 'Yes — mandatory' },
      { label: 'Window', a: '12 months from MA effective date', b: '12 months from MA effective date' },
      { label: 'Returns to', a: 'Original Medicare + Medigap (guaranteed issue) + PDP', b: 'Original Medicare + PDP' },
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Standard enrollment periods table                                   */
/* ------------------------------------------------------------------ */

const standardPeriods = [
  { period: 'Initial Enrollment Period (IEP)', when: '7 months around 65th birthday', who: 'Newly eligible', what: 'Enroll in MAPD or PDP', effective: '1st of month of eligibility or following month' },
  { period: 'General Enrollment Period (GEP)', when: 'Jan 1 \u2013 Mar 31', who: 'Missed IEP', what: 'Sign up for Part B; enroll in MA/MAPD/PDP', effective: '1st of month after sign-up' },
  { period: 'Annual Election Period (AEP)', when: 'Oct 15 \u2013 Dec 7', who: 'All beneficiaries', what: 'Join, switch, or drop MA/MAPD/PDP', effective: 'January 1' },
  { period: 'MA Open Enrollment Period (OEP)', when: 'Jan 1 \u2013 Mar 31', who: 'Existing MA/MAPD', what: 'One plan change', effective: '1st of following month' },
  { period: 'New-to-MA OEP (OEP-N)', when: 'Month of effectuation + 2 months', who: 'First-time MA/MAPD', what: 'One change if dissatisfied', effective: '1st of following month' },
  { period: 'Medigap OEP', when: '6 months after enrolling in Part B (65+)', who: 'Part B enrollees at 65+', what: 'Guaranteed issue Medigap', effective: 'Varies' },
]

/* ------------------------------------------------------------------ */
/* Decision tree steps                                                 */
/* ------------------------------------------------------------------ */

const decisionSteps: { title: string; items: string[] }[] = [
  {
    title: 'Step 1: What Season Is It?',
    items: [
      'Oct 15 \u2013 Dec 7? AEP is open. Enroll without an SEP. Still identify Medicaid, chronic conditions, etc.',
      'Jan 1 \u2013 Mar 31? OEP is open for existing MA members. Check: are they already in an MA plan? If yes, one change.',
      'Apr 1 \u2013 Oct 14? SEP Season. You must find a qualifying event or you cannot help them.',
    ],
  },
  {
    title: 'Step 2: Are They New to Medicare?',
    items: [
      'Part B started recently with same A/B dates \u2192 IEP',
      'Part B started recently with different A/B dates \u2192 ICEP',
      'Disability beneficiary turning 65 \u2192 IEP2',
      'Already in MA plan that effectuated and wants to change \u2192 OEP-N',
      'Notified of Medicare after it started \u2192 RET',
    ],
  },
  {
    title: 'Step 3: Do They Have Medicaid or Extra Help?',
    items: [
      'Full Medicaid \u2192 INT (D-SNP, any month)',
      'Any Medicaid or LIS \u2192 DEP (PDP, any month)',
      'Medicaid or LIS recently changed \u2192 MCD or NLS (3-month window)',
    ],
  },
  {
    title: 'Step 4: Did Something Change?',
    items: [
      'Moved \u2192 MOV. Confirm new address, move date. PO Box does not count.',
      'Lost employer/union/COBRA coverage \u2192 LEC. Get the date.',
      'Lost VA/TRICARE/ACA/other creditable coverage \u2192 LCC. Must be involuntary.',
      'Plan ending (carrier left) \u2192 EOC. Plan ending (CMS terminated) \u2192 MYT.',
      'Released from incarceration \u2192 INC. Two months.',
      'Returned from living abroad \u2192 RUS. Two months.',
      'Became a US citizen \u2192 LAW. Month of change + 2 months.',
      'Medicare auto-enrolled them \u2192 DIF. Three months.',
    ],
  },
  {
    title: 'Step 5: Chronic Condition or Special Situation?',
    items: [
      'Chronic condition + C-SNP available \u2192 CSN. Check carrier portals.',
      'In a nursing home/SNF \u2192 OEP-I (MA/MAPD) or LTC (PDP)',
      'In a State Pharmaceutical Assistance Program \u2192 PAP',
      'Left a PACE program \u2192 PAC. Two months.',
      'Lost SNP eligibility \u2192 SNP. Act fast.',
      'Has other drug coverage + in MAPD \u2192 CDC. Switch to MA-only anytime.',
    ],
  },
  {
    title: 'Step 6: Star Ratings and Trial Rights',
    items: [
      '5-star plan available \u2192 5ST. Dec 8 through Nov 30.',
      'Plan rated 2.5 stars or below for 3 years \u2192 LPI. Anytime.',
      'Dropped Medigap for first MA within 12 months \u2192 12G',
      'First MA at 65 within 12 months \u2192 12J',
      'Lost Part B and lost MA \u2192 INV. PDP only.',
      'Carrier under state receivership \u2192 REC',
      'Dropped a Cost Plan with drug coverage \u2192 OSD. PDP only.',
    ],
  },
  {
    title: 'Step 7: Disaster Extension',
    items: [
      'FEMA disaster prevented enrollment during an existing window \u2192 DST',
      'Verify: (1) active FEMA declaration, (2) they had an open window, (3) no other SEP used since, (4) they raised it first.',
    ],
  },
  {
    title: 'Step 8: No SEP Found',
    items: [
      'Be honest: "Based on what you have shared, I do not see a qualifying event right now."',
      'Tell them when the next window opens (AEP/OEP).',
      'Let them know if anything changes (move, lose coverage, Medicaid change), call right away.',
      'Do not force it. Do not fabricate an SEP.',
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Calendar data                                                       */
/* ------------------------------------------------------------------ */

const calendarMonths: { month: string; periods: string; focus: string }[] = [
  { month: 'January', periods: 'MA OEP begins (Jan 1). EOC window open (through end of Feb). All SEPs available.', focus: 'Dual-eligible auto-assigned plans (DIF). New MA enrollees unhappy with Jan 1 plan (OEP-N). Medicaid redetermination changes (MCD/NLS).' },
  { month: 'February', periods: 'OEP continues. EOC window closing at end of month.', focus: 'Deadline pressure for EOC. OEP-N beneficiaries still have time. LIS changes from January redeterminations (NLS).' },
  { month: 'March', periods: 'OEP final month — closes March 31st.', focus: 'Urgency messaging for OEP. After March 31st, only valid SEPs allow enrollment. Ensure dual-eligible beneficiaries know they have INT/DEP.' },
  { month: 'April', periods: 'SEP Season begins. No general enrollment period open.', focus: 'Every call requires discovery. Train on the six signal cards: address mismatch (MOV), Medicaid/LIS (INT/DEP), chronic condition (CSN), plan ending (EOC/MYT), lost coverage (LEC/LCC), new to Medicare (IEP/ICEP).' },
  { month: 'May \u2013 September', periods: 'Deep SEP Season. 5-Star SEP available (through Nov 30).', focus: 'Discovery mindset is everything. Listen for triggers. Ask about recent changes. MCD and NLS available past September 30th.' },
  { month: 'October 1\u201314', periods: 'Still SEP Season — AEP starts Oct 15.', focus: 'Pre-AEP energy. If they have a qualifying event, help now. If not, AEP is days away.' },
  { month: 'Oct 15 \u2013 Dec 7 (AEP)', periods: 'Annual Election Period. Open to all.', focus: 'Highest volume. Still identify Medicaid status for plan selection. IEP/ICEP still active. Last enrollment submitted wins.' },
  { month: 'December 8\u201331', periods: 'AEP closed (Dec 7). EOC opens Dec 8. 5-Star SEP active.', focus: 'Plan non-renewals (EOC). 5-star enrollments. IEP/ICEP for December birthdays. Preparing for OEP starting Jan 1.' },
]

/* ------------------------------------------------------------------ */
/* Compliance data                                                     */
/* ------------------------------------------------------------------ */

const watchedSeps = [
  { code: 'DST', name: 'Disaster SEP', benchmark: '~15%', why: 'Agents treat it as a free enrollment ticket during hurricane season. It is an extension of a missed window, not a new one.' },
  { code: 'MOV', name: 'Moving SEP', benchmark: '~10%', why: 'Agents accept PO Box changes or unverified address changes as valid moves. Address must be verified with Social Security.' },
  { code: 'LCC', name: 'Loss of Creditable Coverage', benchmark: '~4%', why: 'Agents use LCC for voluntary coverage lapses (missed premiums). Must be involuntary loss only.' },
  { code: 'ACC', name: 'Accessible Format', benchmark: '~3%', why: 'Agents use ACC as a convenience code when no other SEP applies. Must be a genuine accessibility need.' },
  { code: 'PAP', name: 'SPAP', benchmark: '~5%', why: 'Agents enroll beneficiaries who are not actually in a qualifying state pharmaceutical assistance program.' },
]

const doNotList = [
  'DO NOT enroll Medicaid beneficiaries in give-back plans. Medicaid pays their Part B premium — the give-back goes nowhere.',
  'DO NOT advertise, market, or proactively contact beneficiaries about the Disaster SEP.',
  'DO NOT assume or infer an SEP. The qualifying event must be confirmed by the beneficiary and verified in the system.',
  'DO NOT use ACC for a beneficiary who does not actually need accessible format materials.',
  'DO NOT submit an enrollment without verifying the election period with the beneficiary first.',
  'DO NOT use DST as a standalone SEP — it is an extension of a missed window, not a new enrollment period.',
  'DO NOT use LCC when the beneficiary voluntarily dropped their coverage or missed premium payments.',
  'DO NOT submit an INT enrollment without confirming the D-SNP is an integrated plan (FIDE, HIDE, or AIP) and that the Medicaid MCO aligns with the carrier.',
]

/* ------------------------------------------------------------------ */
/* Appendix: All 37 codes                                              */
/* ------------------------------------------------------------------ */

const appendixCodes: AppendixEntry[] = [
  { code: 'IEP', fullName: 'Initial Enrollment Period', trigger: 'Turning 65 / first Medicare eligibility', window: '7 months (3 before + birthday month + 3 after)', keyDetail: 'Part A and Part B must share same effective date. NOT valid for MA-only plans.' },
  { code: 'IEP2', fullName: 'IEP2 (Fresh Window at 65)', trigger: 'Disability beneficiary turning 65', window: '7 months around 65th birthday', keyDetail: 'Uses MRD on application. Watch for turning-65 DOB. MA-only prohibited.' },
  { code: 'ICEP', fullName: 'Initial Coverage Election Period', trigger: 'Delayed Part B, now activating', window: '5 months (3 before + Part B month + 1 after)', keyDetail: 'Part A/B have different effective dates. NOT valid for PDP. Recently extended.' },
  { code: 'OEP-N', fullName: 'New Enrollee OEP', trigger: 'First MA/MAPD effectuated, wants to change', window: 'Month of effectuation + 2 months', keyDetail: 'One change only. Not for PDP-only or Medigap-only beneficiaries.' },
  { code: 'RET', fullName: 'Retroactive Entitlement', trigger: 'Notified of A/B after coverage already started', window: 'Month of notice + 2 months', keyDetail: 'Clock starts from notification date, not coverage date.' },
  { code: 'INT', fullName: 'Integrated Care SEP', trigger: 'Full Medicaid, enrolling in D-SNP', window: 'Any month, repeatable', keyDetail: 'Requires FBDE, QMB+, SLMB+, or Full Medicaid. D-SNP enrollment only.' },
  { code: 'DEP', fullName: 'Dual/LIS Monthly SEP', trigger: 'Any Medicaid or LIS, PDP change', window: 'Any month, repeatable', keyDetail: 'Any Medicaid level or LIS qualifies. PDP enrollment only.' },
  { code: 'MCD', fullName: 'Medicaid Change SEP', trigger: 'Gained/lost/changed Medicaid level', window: '3 months from change', keyDetail: 'Available all year including after September 30th.' },
  { code: 'NLS', fullName: 'Extra Help Change SEP', trigger: 'Gained/lost/changed LIS level', window: '3 months from change', keyDetail: 'Available all year including after September 30th. Watch for SS letters.' },
  { code: 'MOV', fullName: 'Change of Residence SEP', trigger: 'Moved to new ZIP or county', window: 'Month before (if notified) + month of + 2 after', keyDetail: 'NOT valid for PO Box change. Physical address must change.' },
  { code: 'INC', fullName: 'Post-Incarceration SEP', trigger: 'Released from correctional facility', window: '2 months after release', keyDetail: 'Medicare suspended, not terminated, during incarceration.' },
  { code: 'RUS', fullName: 'Return to US SEP', trigger: 'Returned from living permanently abroad', window: '2 months after return', keyDetail: 'Short trips/vacations do not qualify.' },
  { code: 'LAW', fullName: 'Lawful Presence SEP', trigger: 'Became US citizen or gained qualifying status', window: 'Month of status change + 2 months', keyDetail: 'Citizenship does not auto-start Medicare. Confirm Part A/B.' },
  { code: 'CSN', fullName: 'C-SNP Eligibility SEP', trigger: 'Qualifying chronic condition + C-SNP available', window: 'Once per calendar year', keyDetail: 'Must enroll INTO a C-SNP. Provider attestation required within 2 months. Not valid C-SNP to C-SNP same condition.' },
  { code: 'PAP', fullName: 'SPAP SEP', trigger: 'Enrolled in state pharmacy assistance program', window: '1x/year while enrolled; 2 months after loss', keyDetail: 'Common programs: NY EPIC, NJ PAAD, PA PACE/PACENET, WI SeniorRx.' },
  { code: 'PAC', fullName: 'PACE Disenrollment SEP', trigger: 'Left PACE program', window: '2 months after disenrollment', keyDetail: 'NEVER suggest or initiate PACE disenrollment.' },
  { code: 'SNP', fullName: 'SNP Loss SEP', trigger: 'Lost SNP eligibility / condition not verified', window: 'Up to 3 months after grace period ends', keyDetail: 'Often due to provider failing to verify within 2 months.' },
  { code: 'OEP-I', fullName: 'Institutionalized OEP', trigger: 'In nursing home/SNF/LTC facility', window: 'Unlimited while in facility + 2 months after', keyDetail: 'MA/MAPD only. Assisted living does NOT qualify.' },
  { code: 'LTC', fullName: 'LTC SEP', trigger: 'In nursing home/SNF/LTC facility', window: 'Unlimited while in facility + 2 months after', keyDetail: 'PDP only. Same facilities as OEP-I but different plan type.' },
  { code: 'LCC', fullName: 'Loss of Creditable Coverage', trigger: 'Lost VA, TRICARE, ACA, other creditable coverage', window: '2 months from loss or notification (whichever later)', keyDetail: 'NOT valid if beneficiary missed premium payments.' },
  { code: 'INV', fullName: 'Involuntary Loss SEP', trigger: 'Lost MAPD because Part B terminated', window: 'Notice + grace period + 2 months after', keyDetail: 'PDP only. Cannot re-enter MA until Part B restored.' },
  { code: 'REC', fullName: 'Receivership SEP', trigger: 'Plan carrier under state financial receivership', window: 'Until state action ends or member switches', keyDetail: 'Rare. Verify with compliance team. Not same as EOC.' },
  { code: 'EOC', fullName: 'Plan Non-Renewal SEP', trigger: 'Carrier ended plan in service area', window: 'December 8 \u2013 end of February', keyDetail: 'Carrier-initiated market exit. Beneficiary received ANOC letter.' },
  { code: 'MYT', fullName: 'Medicare Contract Termination', trigger: 'CMS terminated contract with carrier', window: '2 months before + 1 month after end', keyDetail: 'CMS enforcement action. Formal CMS letter to beneficiary.' },
  { code: 'LEC', fullName: 'Loss of Employer Coverage SEP', trigger: 'Lost employer/union/COBRA coverage', window: 'Month of loss + 2 months after', keyDetail: 'COBRA expiration counts. May coincide with ICEP. Know CMS-L564 and CMS-40B forms.' },
  { code: 'OSD', fullName: 'Cost Plan Disenrollment SEP', trigger: 'Dropped Cost Plan with drug coverage', window: '2 full months after drop', keyDetail: 'PDP only. Cost Plans primarily in Midwest markets.' },
  { code: '12G', fullName: '12-Month Trial Right (Medigap)', trigger: 'Dropped Medigap for first MA, wants to return', window: '12 months from MA effective date', keyDetail: 'Must have dropped Medigap to join first-ever MA plan.' },
  { code: '12J', fullName: 'Age-65 Trial Right', trigger: 'First MA enrollment at 65, wants to leave', window: '12 months from MA effective date', keyDetail: 'PDP enrollment mandatory. No Medigap history required.' },
  { code: 'CDC', fullName: 'Creditable Drug Coverage SEP', trigger: 'In MAPD but has other drug coverage (VA/TRICARE)', window: 'Anytime', keyDetail: 'Must move OUT of MAPD into MA-only plan.' },
  { code: 'DIF', fullName: 'Government Enrollment SEP', trigger: 'Auto-enrolled into plan by Medicare', window: '3 months from effective date', keyDetail: 'Look for "X" indicator in MARx. Common with LIS auto-assignments.' },
  { code: '5ST', fullName: '5-Star SEP', trigger: '5-star plan available in area', window: 'December 8 \u2013 November 30 (once per year)', keyDetail: 'Verify plan still holds 5 stars for current year.' },
  { code: 'LPI', fullName: 'Low-Performing Plan SEP', trigger: 'Plan rated 2.5 stars or below for 3 years', window: 'Anytime while enrolled', keyDetail: 'Must enroll into plan rated 3+ stars.' },
  { code: 'DST', fullName: 'Disaster SEP', trigger: 'FEMA disaster prevented enrollment', window: 'Duration of emergency + 2 months after end', keyDetail: 'Extension only — not standalone. Must have had active window. Use pre-submission checklist.' },
  { code: 'ACC', fullName: 'Accessible Format SEP', trigger: 'Requested accessible materials, not received in time', window: 'Equal to time lost', keyDetail: 'Only for genuine accessibility needs. Benchmark ~3%. Heavily audited.' },
  { code: 'AEP', fullName: 'Annual Election Period', trigger: 'Calendar (Oct 15 \u2013 Dec 7)', window: 'Coverage effective January 1. Last plan wins.', keyDetail: 'Open to all. No SEP required. Multiple submissions OK.' },
  { code: 'OEP', fullName: 'MA Open Enrollment Period', trigger: 'Calendar (Jan 1 \u2013 Mar 31) for existing MA members', window: 'One change. Effective 1st of following month.', keyDetail: 'MA members only. One change per year. MARx shows if used.' },
  { code: 'GEP', fullName: 'General Enrollment Period', trigger: 'Missed IEP, signing up for Part B', window: 'Jan 1 \u2013 Mar 31. Coverage effective 1st of month after sign-up.', keyDetail: 'For beneficiaries who missed their IEP. May incur late enrollment penalty.' },
]

const appendixFinal = appendixCodes

/* ------------------------------------------------------------------ */
/* Confusion point summaries                                           */
/* ------------------------------------------------------------------ */

const confusionPoints: { title: string; question: string; summary: string[] }[] = [
  {
    title: 'IEP vs ICEP',
    question: 'Do Part A and Part B have the same effective date?',
    summary: [
      'Same date \u2192 IEP. 7 months around birthday.',
      'Different dates \u2192 ICEP. 5 months around Part B start.',
      'Disability turning 65 \u2192 IEP2. Fresh 7-month window.',
      'Already in effectuated MA \u2192 OEP-N. Not IEP.',
      'Notified retroactively \u2192 RET.',
    ],
  },
  {
    title: 'INT vs DEP',
    question: 'Does the beneficiary have FULL Medicaid?',
    summary: [
      'Full Medicaid (FBDE, QMB+, SLMB+) \u2192 INT for D-SNP. Any month.',
      'Any Medicaid or LIS (including QMB-only) \u2192 DEP for PDP. Any month.',
      'QMB-only \u2192 DEP only, NOT INT.',
      'Income shortcut: under $1,903/month single \u2192 likely QMB or higher.',
    ],
  },
  {
    title: 'EOC vs MYT',
    question: 'Did the carrier choose to leave, or did Medicare terminate the contract?',
    summary: [
      'Carrier letter (ANOC) \u2192 EOC. Dec 8 through end of Feb.',
      'CMS letter \u2192 MYT. 2 months before + 1 month after contract end.',
    ],
  },
  {
    title: 'MOV vs LEC',
    question: 'Did they change their physical address, or did they lose health coverage?',
    summary: [
      'Moved \u2192 MOV. PO Box does not count.',
      'Lost employer/COBRA \u2192 LEC. COBRA expiration counts.',
      'Can overlap — retired and moved = both LEC and MOV.',
    ],
  },
  {
    title: '12G vs 12J',
    question: 'Did they drop a Medigap plan to join MA?',
    summary: [
      'Had Medigap, dropped it for first MA \u2192 12G. Returns to OM + Medigap + PDP.',
      'First MA at 65, no Medigap history \u2192 12J. Returns to OM + PDP (mandatory).',
    ],
  },
  {
    title: 'OEP-I vs LTC',
    question: 'Do they need MA/MAPD, or do they need a standalone PDP?',
    summary: [
      'MA/MAPD in nursing home \u2192 OEP-I.',
      'PDP in nursing home \u2192 LTC.',
      'Same facilities. Same windows. Different plan types.',
    ],
  },
  {
    title: 'LCC vs LEC',
    question: 'Was it employer/union/COBRA coverage, or was it other creditable coverage?',
    summary: [
      'Employer/union/COBRA \u2192 LEC. Retirement and COBRA expiration count.',
      'VA/TRICARE/ACA/other \u2192 LCC. Must be involuntary.',
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Helper components                                                   */
/* ------------------------------------------------------------------ */

function Footer({ section }: { section: string }) {
  return (
    <View style={base.pageFooter} fixed>
      <Text>Mega Care / Certainty System — SEP Training Guide</Text>
      <Text>{section}</Text>
    </View>
  )
}

function Bullet({ text }: { text: string }) {
  return (
    <View style={base.bulletRow}>
      <View style={base.bulletDot} />
      <Text style={base.bulletText}>{text}</Text>
    </View>
  )
}

function SepEntry({ entry }: { entry: SepCode }) {
  return (
    <View style={{ marginBottom: 14 }}>
      <View style={s.sepHeader}>
        <Text style={s.sepBadge}>{entry.code}</Text>
        <Text style={s.sepName}>{entry.name}</Text>
      </View>
      <Text style={s.fieldText}>{entry.plainEnglish}</Text>

      <Text style={s.fieldLabel}>What Triggers It</Text>
      <Text style={s.fieldText}>{entry.trigger}</Text>

      <Text style={s.fieldLabel}>Enrollment Window</Text>
      <Text style={s.fieldText}>{entry.window}</Text>

      <Text style={s.fieldLabel}>Who Qualifies</Text>
      <Text style={s.fieldText}>{entry.qualifies}</Text>

      <Text style={s.fieldLabel}>Common Mistakes</Text>
      <Text style={s.fieldText}>{entry.mistakes}</Text>

      <Text style={s.fieldLabel}>Talk Track</Text>
      <View style={s.talkTrackBox} wrap={false}>
        <Text style={s.talkTrackText}>&ldquo;{entry.talkTrack}&rdquo;</Text>
      </View>

      <Text style={s.fieldLabel}>Real-World Scenario</Text>
      <View style={s.scenarioBox} wrap={false}>
        <Text style={s.fieldText}>{entry.scenario}</Text>
      </View>

      {entry.extra && entry.extra.map((e, i) => (
        <View key={i} style={[base.cardAccent, { marginTop: 4 }]} wrap={false}>
          <Text style={[s.fieldText, { fontSize: 8.5, color: colors.ink60 }]}>{e}</Text>
        </View>
      ))}
    </View>
  )
}

function ComparisonBoxComponent({ comp }: { comp: ComparisonBox }) {
  return (
    <View style={s.compBox} wrap={false}>
      <Text style={s.compTitle}>Comparison: {comp.title}</Text>
      <View style={s.compHeaderRow}>
        <View style={s.compLabelCol} />
        <View style={s.compACol}><Text style={s.compHeaderCell}>{comp.colA}</Text></View>
        <View style={s.compBCol}><Text style={s.compHeaderCell}>{comp.colB}</Text></View>
      </View>
      {comp.rows.map((row, i) => (
        <View key={i} style={s.compRow}>
          <View style={s.compLabelCol}><Text style={s.compLabel}>{row.label}</Text></View>
          <View style={s.compACol}><Text style={s.compCell}>{row.a}</Text></View>
          <View style={s.compBCol}><Text style={s.compCell}>{row.b}</Text></View>
        </View>
      ))}
    </View>
  )
}

/* ------------------------------------------------------------------ */
/* Main Document                                                       */
/* ------------------------------------------------------------------ */

export function TrainingGuidePdf() {
  return (
    <Document title="The Complete SEP Training Guide" author="Mega Care Insurance">

      {/* ============================================================= */}
      {/* COVER PAGE                                                     */}
      {/* ============================================================= */}
      <Page size="LETTER" style={base.coverPage}>
        <Text style={{ fontFamily: fonts.body, fontSize: 9, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' as const, color: colors.sage, marginBottom: 12 }}>Mega Care Insurance</Text>
        <View style={s.coverAccent} />
        <Text style={base.coverTitle}>The Complete SEP{'\n'}Training Guide</Text>
        <Text style={{ fontFamily: fonts.heading, fontSize: 14, fontWeight: 700, color: colors.ink, marginBottom: 8 }}>For Licensed Medicare Advantage Sales Agents</Text>
        <Text style={base.coverSubtitle}>
          The master training document for Special Enrollment Periods. Every SEP code you will encounter on inbound Medicare calls, organized by category, with talk tracks, real-world scenarios, common mistakes, and side-by-side comparisons.
        </Text>
        <View style={{ marginTop: 20 }}>
          <Text style={s.coverAudience}>Audience: Licensed Medicare Advantage sales agents handling inbound calls</Text>
          <Text style={s.coverAudience}>Contains: All 37 SEP codes with complete details</Text>
          <Text style={[s.coverAudience, { marginTop: 6, fontWeight: 700 }]}>Current Plan Year &bull; March 2026</Text>
        </View>
        <Text style={base.coverMeta}>Mega Care / Certainty System &bull; Powered by The Certainty System</Text>
      </Page>

      {/* ============================================================= */}
      {/* TABLE OF CONTENTS                                              */}
      {/* ============================================================= */}
      <Page size="LETTER" style={base.page}>
        <Text style={base.eyebrow}>CONTENTS</Text>
        <Text style={[base.h1, { marginBottom: 16 }]}>Table of Contents</Text>

        <View style={s.tocSection}>
          <Text style={[s.tocLabel, { fontWeight: 700 }]}>Part 1: How to Think About SEPs</Text>
        </View>
        {['What SEPs Are and Why They Exist', 'AEP vs OEP vs SEP Season', 'Standard Enrollment Periods', 'Discovery Mindset', 'Time-Sensitive vs Always-Available SEPs'].map((t) => (
          <View key={t} style={s.tocSub}><Text style={s.tocSubLabel}>{t}</Text></View>
        ))}

        <View style={[s.tocSection, { marginTop: 8 }]}>
          <Text style={[s.tocLabel, { fontWeight: 700 }]}>Part 2: The SEP Categories</Text>
        </View>
        {[
          'Ch 1: New to Medicare — IEP, IEP2, ICEP, OEP-N, RET',
          'Ch 2: Financial Eligibility — INT, DEP, MCD, NLS',
          'Ch 3: Location & Life Changes — MOV, INC, RUS, LAW',
          'Ch 4: Chronic & Special Needs — CSN, PAP, PAC, SNP',
          'Ch 5: Institutionalized & LTC — OEP-I, LTC',
          'Ch 6: Involuntary Disenrollment — LCC, INV, REC, EOC, MYT',
          'Ch 7: Voluntary Changes — LEC, OSD, 12G, 12J, CDC, DIF, ACC',
          'Ch 8: Star Ratings — 5ST, LPI',
          'Ch 9: Disaster — DST',
          'Ch 10: Election Periods — AEP, OEP',
        ].map((t) => (
          <View key={t} style={s.tocSub}><Text style={s.tocSubLabel}>{t}</Text></View>
        ))}

        <View style={[s.tocSection, { marginTop: 8 }]}>
          <Text style={[s.tocLabel, { fontWeight: 700 }]}>Part 3: The Confusion Points</Text>
        </View>
        {['IEP vs ICEP', 'INT vs DEP', 'EOC vs MYT', 'MOV vs LEC', '12G vs 12J', 'OEP-I vs LTC', 'LCC vs LEC'].map((t) => (
          <View key={t} style={s.tocSub}><Text style={s.tocSubLabel}>{t}</Text></View>
        ))}

        <View style={[s.tocSection, { marginTop: 8 }]}>
          <Text style={[s.tocLabel, { fontWeight: 700 }]}>Part 4: The Enrollment Calendar</Text>
        </View>

        <View style={[s.tocSection, { marginTop: 8 }]}>
          <Text style={[s.tocLabel, { fontWeight: 700 }]}>Part 5: Quick Decision Tree</Text>
        </View>

        <View style={[s.tocSection, { marginTop: 8 }]}>
          <Text style={[s.tocLabel, { fontWeight: 700 }]}>Part 6: Compliance</Text>
        </View>
        {['Election Period Verification', 'The 5 Most Watched SEPs', 'The DO NOT List', 'Ask Before You Submit Protocol'].map((t) => (
          <View key={t} style={s.tocSub}><Text style={s.tocSubLabel}>{t}</Text></View>
        ))}

        <View style={[s.tocSection, { marginTop: 8 }]}>
          <Text style={[s.tocLabel, { fontWeight: 700 }]}>Appendix: All 37 Codes Reference Table</Text>
        </View>

        <Footer section="Table of Contents" />
      </Page>

      {/* ============================================================= */}
      {/* PART 1: HOW TO THINK ABOUT SEPS                               */}
      {/* ============================================================= */}
      <Page size="LETTER" style={base.page} break>
        <View style={s.partHeader}>
          <Text style={s.partNumber}>PART 1</Text>
          <Text style={s.partTitle}>How to Think About SEPs</Text>
        </View>

        <Text style={base.h2}>What SEPs Are and Why They Exist</Text>
        <Text style={base.body}>
          Medicare is not like shopping for car insurance. You cannot change your Medicare plan whenever you feel like it. The government controls when beneficiaries can make changes, and outside of specific windows, you cannot enroll anyone in anything. That is the entire reason Special Enrollment Periods exist.
        </Text>
        <Text style={base.body}>
          A Special Enrollment Period is a window of time &mdash; triggered by a specific life event &mdash; during which a Medicare beneficiary is allowed to enroll in, switch, or drop a Medicare Advantage or Part D plan. Without a valid SEP, the enrollment will be rejected. Period.
        </Text>
        <Text style={base.body}>
          Think of it this way: Medicare gives every beneficiary a locked door. AEP opens the door once a year for everyone. SEPs are the keys that open that door at other times &mdash; but only if the right life event happened, only for the right type of plan change, and only within the right timeframe. Your job is to figure out which key the beneficiary is holding, often before they even realize they have one.
        </Text>

        <Text style={base.h2}>AEP vs OEP vs SEP Season &mdash; The Annual Rhythm</Text>
        <View style={base.cardAccent} wrap={false}>
          <Text style={[base.h3, { marginTop: 0 }]}>Annual Election Period (AEP): Oct 15 &ndash; Dec 7</Text>
          <Text style={base.body}>Every beneficiary can enroll, switch, or drop. No qualifying event needed. Coverage effective January 1st. Last plan submitted wins.</Text>
        </View>
        <View style={base.cardAccent} wrap={false}>
          <Text style={[base.h3, { marginTop: 0 }]}>MA Open Enrollment Period (OEP): Jan 1 &ndash; Mar 31</Text>
          <Text style={base.body}>Only for existing MA members. One change only. Effective 1st of following month. If on Original Medicare with PDP only, OEP does not apply.</Text>
        </View>
        <View style={base.cardAccent} wrap={false}>
          <Text style={[base.h3, { marginTop: 0 }]}>SEP Season: Apr 1 &ndash; Oct 14</Text>
          <Text style={base.body}>The only way to enroll someone is with a valid SEP. No SEP, no enrollment. This is where knowing these codes separates the professionals from the amateurs.</Text>
        </View>
        <View style={base.card} wrap={false}>
          <Text style={[base.body, { fontWeight: 700, marginBottom: 2 }]}>Critical insight:</Text>
          <Text style={base.body}>Even during AEP and OEP, SEPs still matter. A beneficiary calling in January who has Medicaid does not need to use their one OEP change &mdash; they have an INT or DEP SEP that lets them change every single month. Knowledge of SEPs is not just for SEP season. It is for every season.</Text>
        </View>

        <Footer section="Part 1: How to Think About SEPs" />
      </Page>

      <Page size="LETTER" style={base.page}>
        <Text style={base.h2}>Standard Enrollment Periods &mdash; The Foundation</Text>
        <Text style={base.body}>Before you can understand SEPs, you need to understand the enrollment periods that every beneficiary has access to by default.</Text>

        <View style={base.tableHeader}>
          <Text style={[base.tableHeaderCell, { width: '22%' }]}>Period</Text>
          <Text style={[base.tableHeaderCell, { width: '18%' }]}>When</Text>
          <Text style={[base.tableHeaderCell, { width: '14%' }]}>Who</Text>
          <Text style={[base.tableHeaderCell, { width: '22%' }]}>What They Can Do</Text>
          <Text style={[base.tableHeaderCell, { width: '24%' }]}>Effective Date</Text>
        </View>
        {standardPeriods.map((row) => (
          <View key={row.period} style={base.tableRow} wrap={false}>
            <Text style={[base.tableCell, { width: '22%', fontWeight: 600, fontSize: 8 }]}>{row.period}</Text>
            <Text style={[base.tableCell, { width: '18%', fontSize: 8 }]}>{row.when}</Text>
            <Text style={[base.tableCell, { width: '14%', fontSize: 8 }]}>{row.who}</Text>
            <Text style={[base.tableCell, { width: '22%', fontSize: 8 }]}>{row.what}</Text>
            <Text style={[base.tableCell, { width: '24%', fontSize: 8 }]}>{row.effective}</Text>
          </View>
        ))}

        <View style={[base.card, { marginTop: 12 }]} wrap={false}>
          <Text style={[base.body, { fontWeight: 700, marginBottom: 2 }]}>Why this matters for SEP knowledge:</Text>
          <Text style={base.body}>Every SEP exists because something happened outside these standard windows. Your first job on every call is to determine whether a standard window is open before hunting for an SEP.</Text>
        </View>
        <View style={base.card} wrap={false}>
          <Text style={[base.body, { fontWeight: 700, marginBottom: 2 }]}>CMS Election Period Hierarchy:</Text>
          <Text style={base.body}>When a beneficiary qualifies for more than one enrollment period: (1) IEP/ICEP, (2) MA OEP, (3) SEP, (4) AEP, (5) OEP-Institutional. Always use the one most beneficial to the beneficiary.</Text>
        </View>

        <Text style={base.h2}>Discovery Mindset</Text>
        <Text style={base.body}>
          The beneficiary almost never calls and says, &ldquo;I have a Special Enrollment Period.&rdquo; They call and say, &ldquo;I just moved to Florida.&rdquo; They call and say, &ldquo;My husband passed away and I was on his insurance.&rdquo; Every one of those statements is a live SEP. Your job is to translate their life into the correct enrollment code.
        </Text>
        <Text style={base.body}>
          The best agents on inbound calls are not the ones who know the most about plan benefits. They are the ones who catch SEPs that other agents miss. Every missed SEP is a lost enrollment.
        </Text>

        <Text style={base.h2}>The Most Important Question</Text>
        <View style={s.talkTrackBox} wrap={false}>
          <Text style={[s.talkTrackText, { fontSize: 11 }]}>&ldquo;When exactly did that happen?&rdquo;</Text>
        </View>
        <Text style={[base.body, { marginTop: 6 }]}>
          SEPs are time-sensitive. The difference between an enrollment and a dead call is often a single date. Get the date. Get it early. Get it exact. Then calculate the window, state the deadline, and create urgency.
        </Text>
        <View style={s.talkTrackBox} wrap={false}>
          <Text style={s.talkTrackText}>&ldquo;Mrs. Johnson, based on that date, you have 47 days left in your enrollment window. Let&rsquo;s make sure we get you into the right plan before that closes.&rdquo;</Text>
        </View>

        <Text style={base.h2}>Time-Sensitive vs Always-Available SEPs</Text>
        <Text style={base.body}>
          <Text style={base.bold}>Time-sensitive SEPs</Text> have windows that open and close on specific dates. Once closed, they are gone. Examples: MOV, LEC, IEP. When identified, urgency is your friend.
        </Text>
        <Text style={base.body}>
          <Text style={base.bold}>Always-available SEPs</Text> do not expire as long as the qualifying condition persists. Examples: INT, DEP, CDC, OEP-I. The reframe: &ldquo;you have options right now&rdquo; instead of &ldquo;you are stuck.&rdquo;
        </Text>

        <Footer section="Part 1: How to Think About SEPs" />
      </Page>

      {/* ============================================================= */}
      {/* PART 2: THE SEP CATEGORIES                                     */}
      {/* ============================================================= */}

      {/* Chapter 1: New to Medicare */}
      <Page size="LETTER" style={base.page} break>
        <View style={s.partHeader}>
          <Text style={s.partNumber}>PART 2</Text>
          <Text style={s.partTitle}>The SEP Categories</Text>
        </View>

        <Text style={s.chapterTitle}>Chapter 1: New to Medicare</Text>
        <Text style={s.chapterSubtitle}>Where every Medicare journey begins. Five codes in this category, and confusing them is one of the most common mistakes agents make.</Text>

        {chapter1Codes.map((code) => (
          <SepEntry key={code.code} entry={code} />
        ))}

        <ComparisonBoxComponent comp={comparisons[0]} />

        <Footer section="Part 2: Ch 1 — New to Medicare" />
      </Page>

      {/* Chapter 2: Financial Eligibility */}
      <Page size="LETTER" style={base.page} break>
        <Text style={s.chapterTitle}>Chapter 2: Financial Eligibility</Text>
        <Text style={s.chapterSubtitle}>SEPs tied to Medicaid and Extra Help (LIS). If you work inbound Medicare calls, you will use these codes more than almost any others.</Text>

        {chapter2Codes.map((code) => (
          <SepEntry key={code.code} entry={code} />
        ))}

        <View style={s.warnBox} wrap={false}>
          <Text style={s.warnTitle}>Warning: Give-Back Plans and Medicaid Beneficiaries</Text>
          <Text style={s.warnText}>Never enroll a Medicaid beneficiary in a &ldquo;give-back&rdquo; plan. Medicaid already pays the Part B premium. A give-back plan would reduce a premium the beneficiary is not paying &mdash; the savings go nowhere. Steer toward D-SNPs, not give-back plans.</Text>
        </View>

        <ComparisonBoxComponent comp={comparisons[1]} />

        <Footer section="Part 2: Ch 2 — Financial Eligibility" />
      </Page>

      {/* Chapter 3: Location and Life Changes */}
      <Page size="LETTER" style={base.page} break>
        <Text style={s.chapterTitle}>Chapter 3: Location and Life Changes</Text>
        <Text style={s.chapterSubtitle}>SEPs triggered by physical changes in the beneficiary&rsquo;s life &mdash; where they live, where they came from, their legal status.</Text>

        {chapter3Codes.map((code) => (
          <SepEntry key={code.code} entry={code} />
        ))}

        <ComparisonBoxComponent comp={comparisons[2]} />

        <Footer section="Part 2: Ch 3 — Location & Life Changes" />
      </Page>

      {/* Chapter 4: Chronic and Special Needs */}
      <Page size="LETTER" style={base.page} break>
        <Text style={s.chapterTitle}>Chapter 4: Chronic and Special Needs</Text>
        <Text style={s.chapterSubtitle}>Some beneficiaries have conditions or circumstances requiring specialized plan types. CSN is the single biggest enrollment opportunity outside of AEP.</Text>

        {chapter4Codes.map((code) => (
          <SepEntry key={code.code} entry={code} />
        ))}

        <Footer section="Part 2: Ch 4 — Chronic & Special Needs" />
      </Page>

      {/* Chapter 5: Institutionalized and LTC */}
      <Page size="LETTER" style={base.page} break>
        <Text style={s.chapterTitle}>Chapter 5: Institutionalized and Long-Term Care</Text>
        <Text style={s.chapterSubtitle}>Two codes split along one simple line: MA/MAPD vs PDP.</Text>

        {chapter5Codes.map((code) => (
          <SepEntry key={code.code} entry={code} />
        ))}

        <ComparisonBoxComponent comp={comparisons[3]} />

        <Footer section="Part 2: Ch 5 — Institutionalized & LTC" />
      </Page>

      {/* Chapter 6: Involuntary Disenrollment */}
      <Page size="LETTER" style={base.page} break>
        <Text style={s.chapterTitle}>Chapter 6: Involuntary Disenrollment</Text>
        <Text style={s.chapterSubtitle}>The beneficiary loses coverage through no fault of their own &mdash; plan leaves the area, Medicare terminates the contract, they lose creditable coverage.</Text>

        {chapter6Codes.map((code) => (
          <SepEntry key={code.code} entry={code} />
        ))}

        <ComparisonBoxComponent comp={comparisons[4]} />
        <ComparisonBoxComponent comp={comparisons[5]} />

        <Footer section="Part 2: Ch 6 — Involuntary Disenrollment" />
      </Page>

      {/* Chapter 7: Voluntary Changes */}
      <Page size="LETTER" style={base.page} break>
        <Text style={s.chapterTitle}>Chapter 7: Voluntary Changes</Text>
        <Text style={s.chapterSubtitle}>Triggered by the beneficiary&rsquo;s own actions &mdash; leaving employer coverage, dropping a cost plan, exercising a trial right, or having other drug coverage.</Text>

        {chapter7Codes.map((code) => (
          <SepEntry key={code.code} entry={code} />
        ))}

        <ComparisonBoxComponent comp={comparisons[6]} />

        <Footer section="Part 2: Ch 7 — Voluntary Changes" />
      </Page>

      {/* Chapter 8: Star Ratings */}
      <Page size="LETTER" style={base.page} break>
        <Text style={s.chapterTitle}>Chapter 8: Star Ratings</Text>
        <Text style={s.chapterSubtitle}>CMS rates every Medicare plan on a star system. Two SEPs are tied directly to those ratings.</Text>

        {chapter8Codes.map((code) => (
          <SepEntry key={code.code} entry={code} />
        ))}

        <Footer section="Part 2: Ch 8 — Star Ratings" />
      </Page>

      {/* Chapter 9: Disaster */}
      <Page size="LETTER" style={base.page} break>
        <Text style={s.chapterTitle}>Chapter 9: Disaster</Text>
        <Text style={s.chapterSubtitle}>One SEP in this category, and it is the most misunderstood code in the entire system.</Text>

        {chapter9Codes.map((code) => (
          <SepEntry key={code.code} entry={code} />
        ))}

        <View style={s.warnBox} wrap={false}>
          <Text style={s.warnTitle}>Compliance Warning: DST Is the Most Watched SEP</Text>
          <Text style={s.warnText}>Carrier compliance teams flag DST usage harder than any other code. Benchmark is approximately 15%. Three non-negotiable rules:</Text>
          <Text style={[s.warnText, { marginTop: 4 }]}>1. Never advertise or market DST. The beneficiary must raise the situation first.</Text>
          <Text style={s.warnText}>2. The beneficiary must have missed another enrollment period. DST extends a missed window &mdash; it does not create a new one.</Text>
          <Text style={s.warnText}>3. Verify the FEMA declaration. Confirm the county is covered and dates overlap with the missed enrollment period.</Text>
        </View>

        <Footer section="Part 2: Ch 9 — Disaster" />
      </Page>

      {/* Chapter 10: Election Periods */}
      <Page size="LETTER" style={base.page} break>
        <Text style={s.chapterTitle}>Chapter 10: Election Periods</Text>
        <Text style={s.chapterSubtitle}>Not technically SEPs &mdash; standing enrollment periods on a fixed annual schedule. You must know them cold because they interact with every SEP.</Text>

        {chapter10Codes.map((code) => (
          <SepEntry key={code.code} entry={code} />
        ))}

        <Footer section="Part 2: Ch 10 — Election Periods" />
      </Page>

      {/* ============================================================= */}
      {/* PART 3: THE CONFUSION POINTS                                   */}
      {/* ============================================================= */}
      <Page size="LETTER" style={base.page} break>
        <View style={s.partHeader}>
          <Text style={s.partNumber}>PART 3</Text>
          <Text style={s.partTitle}>The Confusion Points</Text>
        </View>

        <Text style={base.body}>These are the code pairs that agents mix up most. Master these distinctions and you will avoid the most common enrollment errors.</Text>

        {confusionPoints.map((cp) => (
          <View key={cp.title} style={[base.card, { marginBottom: 10 }]} wrap={false}>
            <Text style={[base.h3, { marginTop: 0, color: colors.sage }]}>{cp.title}</Text>
            <Text style={[base.body, { fontWeight: 700, fontStyle: 'italic', marginBottom: 4 }]}>&ldquo;{cp.question}&rdquo;</Text>
            {cp.summary.map((line, i) => (
              <Bullet key={i} text={line} />
            ))}
          </View>
        ))}

        <Footer section="Part 3: The Confusion Points" />
      </Page>

      {/* ============================================================= */}
      {/* PART 4: THE ENROLLMENT CALENDAR                                */}
      {/* ============================================================= */}
      <Page size="LETTER" style={base.page} break>
        <View style={s.partHeader}>
          <Text style={s.partNumber}>PART 4</Text>
          <Text style={s.partTitle}>The Enrollment Calendar</Text>
        </View>

        <Text style={base.body}>Know where you are in the calendar and you will know what tools are available.</Text>

        {calendarMonths.map((m) => (
          <View key={m.month} style={s.monthCard} wrap={false}>
            <Text style={s.monthName}>{m.month}</Text>
            <Text style={s.fieldLabel}>Active Periods</Text>
            <Text style={s.fieldText}>{m.periods}</Text>
            <Text style={s.fieldLabel}>What to Think About</Text>
            <Text style={s.fieldText}>{m.focus}</Text>
          </View>
        ))}

        <Footer section="Part 4: The Enrollment Calendar" />
      </Page>

      {/* ============================================================= */}
      {/* PART 5: QUICK DECISION TREE                                    */}
      {/* ============================================================= */}
      <Page size="LETTER" style={base.page} break>
        <View style={s.partHeader}>
          <Text style={s.partNumber}>PART 5</Text>
          <Text style={s.partTitle}>Quick Decision Tree</Text>
        </View>

        <Text style={base.body}>A beneficiary calls. You do not know what SEP they have. Here is the path.</Text>

        {decisionSteps.map((step) => (
          <View key={step.title} style={s.stepBox} wrap={false}>
            <Text style={s.stepTitle}>{step.title}</Text>
            {step.items.map((item, i) => (
              <Bullet key={i} text={item} />
            ))}
          </View>
        ))}

        <Footer section="Part 5: Quick Decision Tree" />
      </Page>

      {/* ============================================================= */}
      {/* PART 6: COMPLIANCE                                             */}
      {/* ============================================================= */}
      <Page size="LETTER" style={base.page} break>
        <View style={s.partHeader}>
          <Text style={s.partNumber}>PART 6</Text>
          <Text style={s.partTitle}>Compliance</Text>
        </View>

        <Text style={[base.h2, { marginTop: 0 }]}>The Election Period Verification Rule</Text>
        <Text style={base.body}>
          Before every SEP enrollment, you must verify the election period with the beneficiary. This is not optional &mdash; it is a CMS requirement. You must ask the questions, discuss the qualifying event, and verify the election period being used with the beneficiary before submitting the enrollment. Election Period Verification is not a checkbox you click at the end. It is a conversation you have before you start the application.
        </Text>
        <View style={s.talkTrackBox} wrap={false}>
          <Text style={s.talkTrackText}>&ldquo;If you cannot explain to the beneficiary which SEP they are using and why they qualify for it, you should not be submitting that enrollment.&rdquo;</Text>
        </View>

        <Text style={base.h2}>The 5 Most Watched SEPs</Text>
        <Text style={base.body}>Carriers track SEP usage rates against industry benchmarks. If your rates exceed these thresholds, expect a compliance review.</Text>

        <View style={base.tableHeader}>
          <Text style={[base.tableHeaderCell, { width: '10%' }]}>Code</Text>
          <Text style={[base.tableHeaderCell, { width: '18%' }]}>Name</Text>
          <Text style={[base.tableHeaderCell, { width: '12%' }]}>Benchmark</Text>
          <Text style={[base.tableHeaderCell, { width: '60%' }]}>Why It Is Watched</Text>
        </View>
        {watchedSeps.map((row) => (
          <View key={row.code} style={base.tableRow} wrap={false}>
            <Text style={[base.tableCell, { width: '10%', fontWeight: 700, color: colors.red, fontSize: 8.5 }]}>{row.code}</Text>
            <Text style={[base.tableCell, { width: '18%', fontSize: 8.5 }]}>{row.name}</Text>
            <Text style={[base.tableCell, { width: '12%', fontWeight: 600, fontSize: 8.5 }]}>{row.benchmark}</Text>
            <Text style={[base.tableCell, { width: '60%', fontSize: 8.5 }]}>{row.why}</Text>
          </View>
        ))}

        <Text style={base.h2}>What Happens When You Submit the Wrong SEP</Text>
        <Bullet text="Enrollment rejection. The beneficiary is left without the plan they thought they were getting." />
        <Bullet text="Retroactive disenrollment. CMS can retroactively disenroll the beneficiary months later." />
        <Bullet text="Carrier compliance review. Your enrollment patterns are flagged with mandatory retraining." />
        <Bullet text="Suspension of enrollment privileges. The carrier suspends your ability to submit enrollments." />
        <Bullet text="Contract termination. Repeated violations lead to carrier contract termination and potential CMS sanction." />

        <Footer section="Part 6: Compliance" />
      </Page>

      <Page size="LETTER" style={base.page}>
        <Text style={base.h2}>The &ldquo;Ask Before You Submit&rdquo; Protocol</Text>
        <Text style={base.body}>Before every SEP enrollment, run through these five questions. If you cannot answer all five with confidence, stop and verify.</Text>

        {[
          { q: '1. What is the qualifying event?', d: 'Can you name the specific life event that triggered this SEP?' },
          { q: '2. When did it happen?', d: 'Do you have the specific date? Is the window still open?' },
          { q: '3. Does the beneficiary understand?', d: 'Can the beneficiary explain in their own words why they qualify? "Okay" is not verification.' },
          { q: '4. Is this the right SEP code?', d: 'Are you using the most appropriate code per the CMS hierarchy?' },
          { q: '5. Is the plan type valid?', d: 'Does this SEP code allow enrollment in the plan type you are submitting?' },
        ].map((item) => (
          <View key={item.q} style={base.bulletRow}>
            <View style={base.bulletDot} />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 9, fontWeight: 700, lineHeight: 1.5, color: colors.ink, marginBottom: 2 }}>{item.q}</Text>
              <Text style={{ fontSize: 9, lineHeight: 1.5, color: colors.ink60 }}>{item.d}</Text>
            </View>
          </View>
        ))}

        <Text style={base.h2}>Red Flags That Get You Flagged</Text>
        {[
          'High DST volume without a matching FEMA declaration.',
          'MOV enrollments without address verification in MARx.',
          'ACC usage above 3% of total enrollments.',
          'Multiple SEP codes on the same beneficiary in a short period.',
          'SEP enrollments clustered at the end of enrollment windows.',
          'LCC for beneficiaries who simply stopped paying premiums.',
        ].map((flag) => (
          <Bullet key={flag} text={flag} />
        ))}

        <Text style={base.h2}>The DO NOT List</Text>
        <View style={s.warnBox}>
          {doNotList.map((item) => (
            <Text key={item} style={[s.warnText, { marginBottom: 4 }]}>&bull; {item}</Text>
          ))}
        </View>

        <Text style={base.h2}>When in Doubt</Text>
        <Bullet text="Check the SEP Check tool in the Certainty System at /sep-check." />
        <Bullet text="Check carrier portals (Humana Vantage/Mentor DMS-024, UHC Election Period Booklet, etc.)." />
        <Bullet text="Contact your upline for edge cases." />
        <Bullet text="Contact carrier compliance before submitting if the situation is genuinely ambiguous." />
        <View style={base.card} wrap={false}>
          <Text style={[base.body, { fontWeight: 700 }]}>The single best habit you can develop: if you are not 100% sure the SEP is valid, pause and verify. The five minutes it takes to confirm will save you weeks of dealing with a compliance review.</Text>
        </View>

        <Footer section="Part 6: Compliance" />
      </Page>

      {/* ============================================================= */}
      {/* APPENDIX: ALL 37 CODES REFERENCE TABLE                        */}
      {/* ============================================================= */}
      <Page size="LETTER" style={base.page} break>
        <View style={s.partHeader}>
          <Text style={s.partNumber}>APPENDIX</Text>
          <Text style={s.partTitle}>All 37 Codes Reference Table</Text>
        </View>

        <View style={base.tableHeader}>
          <Text style={[base.tableHeaderCell, s.appxColCode]}>Code</Text>
          <Text style={[base.tableHeaderCell, s.appxColName]}>Full Name</Text>
          <Text style={[base.tableHeaderCell, s.appxColTrigger]}>Trigger</Text>
          <Text style={[base.tableHeaderCell, s.appxColWindow]}>Window</Text>
          <Text style={[base.tableHeaderCell, s.appxColDetail]}>Key Detail</Text>
        </View>
        {appendixFinal.map((row) => (
          <View key={row.code + row.fullName} style={base.tableRow} wrap={false}>
            <Text style={[base.tableCell, s.appxColCode, { fontWeight: 700, color: colors.sage, fontSize: 7.5 }]}>{row.code}</Text>
            <Text style={[base.tableCell, s.appxColName, { fontSize: 7.5 }]}>{row.fullName}</Text>
            <Text style={[base.tableCell, s.appxColTrigger, { fontSize: 7.5 }]}>{row.trigger}</Text>
            <Text style={[base.tableCell, s.appxColWindow, { fontSize: 7.5 }]}>{row.window}</Text>
            <Text style={[base.tableCell, s.appxColDetail, { fontSize: 7.5 }]}>{row.keyDetail}</Text>
          </View>
        ))}

        <View style={[base.card, { marginTop: 12 }]} wrap={false}>
          <Text style={base.body}>
            This document contains all 37 SEP codes with complete details. For the most current FEMA declarations and real-time SEP verification, use the SEP Check tool at /sep-check.
          </Text>
        </View>

        <Footer section="Appendix" />
      </Page>

    </Document>
  )
}
