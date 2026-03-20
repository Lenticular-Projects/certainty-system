# SEP Signal Detection — CallFlow3 Integration Spec

## What This Is

This document contains everything CallFlow3 needs to implement SEP (Special Enrollment Period) signal detection in real-time call analysis. It is extracted from the Certainty System's SEP Check reference page and is intended to be **self-contained** — no Certainty System source code reading required.

CallFlow3 should use this data to:
1. Detect when a caller likely qualifies for a Special Enrollment Period
2. Flag the SEP type, code, and enrollment window
3. Surface this information to the agent reviewing the call analysis

## What the Certainty System Already Has (Context)

The Certainty System is a Medicare sales training app. Its **SEP Check** page (`/sep-check`) is an interactive reference tool that agents use during calls. It contains:

- An **enrollment period banner** showing whether AEP, OEP, or SEP Season is active
- **6 signal cards** — high-priority patterns agents should listen for during calls
- A **35+ item cheat sheet** — every SEP code with trigger phrases, qualifying criteria, windows, scripts, and watch-outs
- A **C-SNP condition search** — 15 qualifying chronic conditions with all medical aliases
- A **FEMA disaster lookup** — active declarations by state/county with ZIP code search
- **Deadline calculators** and a **Medicaid routing decision tree**

CallFlow3's job is to automate the detection side: listen to the call transcript and flag when an SEP signal is present.

---

## Part 1: Complete SEP Code Reference

Every SEP code, organized by category. Each entry includes the trigger phrase (what callers say), the SEP code, the enrollment window, what's allowed, qualifying criteria, watch-outs, and agent scripts where applicable.

---

### New to Medicare

#### IEP — Initial Enrollment Period

- **Trigger:** "Turning 65" / "just got Medicare"
- **Code:** `IEP`
- **Window:** 7 months (3 before + birthday month + 3 after)
- **What it is:** The first-and-only chance to enroll in Medicare coverage at age 65. 7 months total. If the beneficiary misses it and has no employer coverage, they face late enrollment penalties.
- **Qualifying criteria:**
  - Turning 65 — Part A and Part B must share the same effective date
  - Under 65 on disability for 24+ months also qualifies (but use IEP2 if they're now turning 65)
  - Only valid if beneficiary is NOT already in an active, effectuated MA/MAPD plan
  - NOT valid for MA-only plans (must include drug coverage or be MAPD)
- **Watch-outs:**
  - IEP vs ICEP: If Part A and Part B have DIFFERENT effective dates → it's ICEP, not IEP
  - Already effectuated? If any plan has gone active, IEP is no longer available — need OEP-N or an SEP
  - Calculate the window from their birthday, not their Part B date
- **Script:** "Since you're right in your enrollment window, we can get you set up today — no special circumstances needed."
- **Notes:** Beneficiary just turned 65; on disability for 24 months; if beneficiary is in an ACTIVE plan that has effectuated, this is no longer a valid option; NOT valid for MA-only plan

#### IEP2 — Fresh Window for Under-65 Disability Beneficiary Turning 65

- **Trigger:** Under-65 disability beneficiary turning 65
- **Code:** `IEP2` (uses MRD on application)
- **Window:** 7 months around 65th birthday
- **What it is:** A disability beneficiary turning 65 gets a brand-new 7-month IEP window, as if newly eligible. MARx shows their Medicare Reason for Disability (MRD). The golden year to spot: 1961 DOB — they're turning 65 now.
- **Qualifying criteria:**
  - Was on Medicare due to disability (under 65), now turning 65
  - Look for 1961 birth year in MARx (aging in during this cycle)
  - MA-only plans are prohibited — must include Part D
- **Watch-outs:**
  - Do not confuse existing disability plan enrollment with their IEP2 — they have a fresh window
  - MA-only is PROHIBITED — always enroll into MAPD or PDP
- **Notes:** 1961 is the GOLDEN YEAR to look for in MARx DOB; MA-only plans are prohibited

#### ICEP — Initial Coverage Election Period

- **Trigger:** Delayed Part B, now activating
- **Code:** `ICEP`
- **Window:** 5 months (3 before + Part B month + 1 after)
- **What it is:** Applies when a beneficiary delayed Part B (kept employer coverage) and is now activating it. Part A and Part B will have different effective dates — that's the trigger. As of 1/1/2025, the window expanded to 5 months.
- **Qualifying criteria:**
  - Part A and Part B have DIFFERENT effective dates
  - 5-month window: 3 months before Part B month + Part B month + 1 month after
  - NOT valid for a PDP (Part D standalone)
- **Watch-outs:**
  - If both Part A and Part B share the same effective date → use IEP, not ICEP
  - Window extended as of 1/1/2025 — old notes showing 3 months are outdated
  - Employer coverage ending at the same time? May also trigger LEC — document both
- **Notes:** Part A and Part B have different effective dates; timeframe extended as of 1/1/25; NOT valid for a PDP

#### OEP-N — New Enrollee OEP

- **Trigger:** New to Medicare, doesn't like first MA/MAPD
- **Code:** `OEP-N`
- **Window:** Month of effectuation + 2 months
- **What it is:** If a beneficiary just enrolled in their very first MA/MAPD plan and doesn't like it, they get one chance to change within 3 months of the plan's effective date.
- **Qualifying criteria:**
  - First-time MA/MAPD enrollment only — NOT for returning MA members
  - One change only during the 3-month window (month of effectuation + 2 months after)
  - Cannot be used if they only have a PDP or Medigap — must have an MA/MAPD that effectuated
- **Watch-outs:**
  - One change means one — if they already used OEP-N once, it's gone
  - PDP-only or Medigap-only beneficiaries CANNOT use OEP-N
  - The plan must have actually effectuated — pending enrollment doesn't count
- **Script:** "Since this is your first Medicare Advantage plan and it just went into effect, you actually have a window right now to make one change if it's not the right fit."
- **Notes:** Allows ONE CHANGE only; those with only a PDP and/or a Medigap plan are unable to use this

#### RET — Retroactive Entitlement

- **Trigger:** Notified of A/B AFTER coverage started
- **Code:** `RET`
- **Window:** Month of notice + 2 months
- **What it is:** Covers beneficiaries who were retroactively enrolled in Medicare — their Part A and/or Part B started without them knowing, and they only found out after the fact. The clock starts from the notification date, not from when coverage began.
- **Qualifying criteria:**
  - Was notified of Part A and/or Part B AFTER their coverage had already started
  - If they have both Part A and Part B, both effective dates must be the same
  - Window: the month of notification + 2 full calendar months
- **Watch-outs:**
  - The trigger is the notification date, not the coverage effective date — confirm exactly when they received the notice
  - If Part A and Part B have different effective dates → use ICEP, not RET
  - Commonly surfaces when Social Security retroactively awards disability or Medicare benefits
- **Notes:** If beneficiary has Part A and Part B, they must have the same effective date

---

### Financial Eligibility

#### INT — Integrated Care SEP (D-SNP Enrollment)

- **Trigger:** Full Medicaid — enrolling in D-SNP
- **Code:** `INT`
- **Window:** Any month, repeatable
- **What it is:** Allows a beneficiary with full Medicaid to enroll in a D-SNP at any time. Repeatable — can be used multiple times per year. Always verify Medicaid level before using.
- **Qualifying criteria:**
  - Must have FULL Medicaid: FBDE (Full Benefit Dual Eligible), QMB+, SLMB+, or Full
  - Enrolling into a D-SNP (Dual-Eligible Special Needs Plan) only
  - Any month, repeatable — no annual limit
  - Check the INT/MCO Reference Sheet to confirm eligibility before enrolling
- **Watch-outs:**
  - QMB-only does NOT qualify for INT — they need QMB+ or higher
  - Wrong Medicaid level = invalid enrollment. Always verify before submitting
  - If they only have LIS (Low Income Subsidy) without full Medicaid → use DEP instead
- **Notes:** Beneficiary MUST have FULL Medicaid (FBDE, QMB+, SLMB+, Full); see INT/MCO Reference Sheet

#### DEP — Dual/LIS Monthly SEP (PDP Change)

- **Trigger:** Any Medicaid or LIS — PDP change
- **Code:** `DEP`
- **Window:** Any month, repeatable
- **What it is:** Any beneficiary with any level of Medicaid or LIS/Extra Help can change their standalone Part D drug plan every single month — no annual limit, no window to miss. DEP is PDP-only.
- **Qualifying criteria:**
  - Any level of Medicaid OR any level of LIS/Extra Help — including QMB-only and LIS-only
  - MUST be enrolling into a standalone PDP; cannot use DEP for MA or MAPD
  - Available any month, repeatable every month
- **Watch-outs:**
  - DEP = PDP only. If they want a D-SNP → use INT (requires full Medicaid)
  - Do not confuse with INT: DEP = any Medicaid/LIS level for PDP; INT = full Medicaid for D-SNP only
  - If their Medicaid or LIS level recently changed → MCD or NLS may also apply
- **Script:** "Since you have [Medicaid / Extra Help], you actually have the ability to change your drug plan every single month — you're not locked in. If we find something better today, we can get that started for the 1st of next month."
- **Notes:** MUST enroll into a PDP; all levels of Medicaid qualify; if beneficiary only has LIS, they are still eligible

#### MCD — Medicaid Change SEP

- **Trigger:** Lost/gained/changed Medicaid level
- **Code:** `MCD`
- **Window:** 3 months from change
- **What it is:** When a beneficiary gains, loses, or changes their Medicaid level, they get 3 months to adjust their Medicare plan enrollment. Available all year — including past the typical September 30th cutoff.
- **Qualifying criteria:**
  - Gained, lost, or had a Medicaid level change (e.g., QMB-only to full Medicaid, or lost Medicaid entirely)
  - 3 months from the date the Medicaid change took effect
  - Available all year — does NOT cut off after September 30th
- **Watch-outs:**
  - Document the date the Medicaid change took effect — the window runs from that date, not the call date
  - If they now qualify for full Medicaid and want a D-SNP → INT may also be available simultaneously
  - Look for green, purple, or orange Social Security letters — these often signal an MCD/NLS event
- **Notes:** Available all year INCLUDING AFTER SEPT 30TH

#### NLS — Extra Help Change SEP

- **Trigger:** Lost/gained/changed Extra Help level
- **Code:** `NLS`
- **Window:** 3 months from change
- **What it is:** When a beneficiary's Extra Help (LIS) level changes — gained, lost, or shifted between tiers — they get 3 months to change plans. Available all year past September 30th. Beneficiaries often don't realize their LIS level changed after an annual Social Security redetermination.
- **Qualifying criteria:**
  - Gained, lost, or had a level change in Extra Help/LIS (Auto, Full, or Partial tiers all count)
  - 3 months from the date of the LIS change
  - Available all year — does NOT cut off after September 30th
- **Watch-outs:**
  - Look for green, purple, or orange letters from Social Security — these signal an Extra Help change
  - A shift between LIS tiers (e.g., Full to Partial) qualifies — not just gaining or losing it entirely
  - If Medicaid also changed at the same time → MCD applies too; document both codes
- **Notes:** Available all year INCLUDING AFTER SEPT 30TH

---

### Location / Life Change

#### MOV — Change of Permanent Residence SEP

- **Trigger:** Moved to a different ZIP or county
- **Code:** `MOV`
- **Window:** Month before (if notified in advance) + month of move + 2 full calendar months after
- **What it is:** If the beneficiary moved to a new ZIP code or county and their current plan doesn't serve the new area, they have a live SEP. The moment you see a system address mismatch, stop and treat it as an actionable SEP.
- **Qualifying criteria:**
  - Moved to a new ZIP code or county where their current plan isn't available
  - Window: month before the move (if notified in advance) + month of move + 2 full calendar months after
  - Can enroll in any MA, MAPD, or PDP available at the new address
- **Watch-outs:**
  - PO Box change ONLY does NOT qualify — must be a physical address change
  - Address update in the system ≠ SEP used — you still need to submit the enrollment
  - If they moved months ago and are outside the window, check for other SEPs (LCC, etc.)
- **Script:** "Because you've moved to a new area, you're actually in a special enrollment window right now. We can get you set up with the right plan for your new address today."
- **Notes:** NOT valid with change of PO Box

#### INC — Post-Incarceration SEP

- **Trigger:** Released from incarceration
- **Code:** `INC`
- **Window:** 2 months after release
- **What it is:** A beneficiary recently released from a correctional facility gets 2 months to enroll. Medicare is suspended — not terminated — during incarceration, so Part A and B should still be intact.
- **Qualifying criteria:**
  - Released from a correctional facility (jail, prison, or detention center)
  - Window: 2 months from the release date
  - Can enroll in MA, MAPD, or PDP available at their address
- **Watch-outs:**
  - Medicare is suspended during incarceration, not terminated — Part A/B should still be active upon release
  - Verify the exact release date — the 2-month window starts from that date, not from when they call
  - Pre-release planning is possible: enrollment can be submitted up to 1 month before the release date

#### RUS — Return to US SEP

- **Trigger:** Returned to US after living abroad
- **Code:** `RUS`
- **Window:** 2 months after return
- **What it is:** A Medicare beneficiary who was living permanently outside the US gets 2 months to enroll in a plan after returning. Medicare is generally suspended during extended foreign residence.
- **Qualifying criteria:**
  - Was living permanently abroad (not vacationing) and has now returned to the US
  - Window: 2 months from the return date
  - Can enroll in MA, MAPD, or PDP available at their US address
- **Watch-outs:**
  - Short trips and vacations do NOT qualify — must have been permanently residing outside the US
  - Verify their US address is current in the system before submitting enrollment
  - If absent for an extended period, confirm Part A/B are still active before proceeding

#### LAW — Lawful Presence SEP

- **Trigger:** Recently became a US citizen
- **Code:** `LAW`
- **Window:** Month of status change + 2 full months
- **What it is:** When a beneficiary becomes a US citizen or gains the lawful status that makes them newly eligible for Medicare, they have the month of the status change plus 2 full months to enroll.
- **Qualifying criteria:**
  - Recently became a US citizen or acquired qualifying lawful presence for Medicare eligibility
  - Window: the month of the status change + 2 full calendar months
  - Can enroll in MA, MAPD, or PDP
- **Watch-outs:**
  - Citizenship alone does not auto-start Medicare — confirm Part A/B are active or activating first
  - The window starts from the date citizenship or qualifying status was officially granted, not the call date
  - Some non-citizens may have waiting periods for premium-free Part A — confirm full Medicare eligibility before proceeding

---

### Chronic / Special Needs

#### CSN — C-SNP Eligibility SEP

- **Trigger:** Has qualifying chronic condition + C-SNP available in their county
- **Code:** `CSN`
- **Window:** Once per calendar year
- **What it is:** A beneficiary with a qualifying severe or disabling chronic condition can enroll in a C-SNP built for that condition. Available once per calendar year. Use when a beneficiary discloses a condition and a matching C-SNP exists in their county.
- **Qualifying criteria:**
  - Must have a qualifying severe or disabling chronic condition that matches the C-SNP
  - Must be enrolling INTO a C-SNP — not any standard MA or MAPD plan
  - Once per calendar year
  - NOT valid for moving from one C-SNP to another C-SNP for the same condition type
- **Watch-outs:**
  - Always verify a C-SNP for that exact condition exists in their county before confirming this SEP — check carrier portals
  - C-SNP to C-SNP for the same condition = NOT valid; switching to a C-SNP for a different condition = valid
  - Let the beneficiary volunteer conditions naturally — do not ask leading diagnostic questions
- **Script:** "Because you have [condition], you may actually qualify for a Special Needs Plan built specifically for people managing that condition. These plans often have lower copays and benefits tailored to your exact needs — and you can enroll right now."
- **Notes:** MUST be enrolling into a C-SNP; not valid moving beneficiary from C-SNP to C-SNP unless it is a different condition C-SNP

#### PAP — SPAP (State Pharmaceutical Assistance Program) SEP

- **Trigger:** Enrolled in state Pharmacy Assistance Program
- **Code:** `PAP`
- **Window:** 1x/year while enrolled; 2 months after loss
- **What it is:** Beneficiaries enrolled in an approved State Pharmaceutical Assistance Program (SPAP) — like NY's EPIC or NJ's PAAD — get one PDP change per year plus a 2-month window if they lose that state program.
- **Qualifying criteria:**
  - Currently enrolled in a CMS-approved SPAP program
  - Once per calendar year while enrolled; 2 months after losing SPAP enrollment
  - For PDP enrollment or changes only
- **Watch-outs:**
  - Not all state assistance programs qualify — must be on the CMS-approved SPAP list
  - Common qualifying programs: New York (EPIC), New Jersey (PAAD), Pennsylvania (PACE/PACENET), Wisconsin (SeniorRx)
  - Confirm the beneficiary is still actively enrolled in the SPAP program before submitting
- **Notes:** Very common for those in New York (EPIC), New Jersey (PAAD), Pennsylvania (PACE/PACENET), Wisconsin (SeniorRx)

#### PAC — PACE Disenrollment SEP

- **Trigger:** Leaving PACE program
- **Code:** `PAC`
- **Window:** 2 months after disenrollment
- **What it is:** When a beneficiary voluntarily disenrolls from a PACE plan, they get 2 months to enroll in a new plan. Never suggest or initiate PACE disenrollment — only applies after disenrollment has already occurred.
- **Qualifying criteria:**
  - Beneficiary has already disenrolled from a PACE program on their own initiative
  - Window: 2 months from the PACE disenrollment date
  - Can enroll in MA, MAPD, or PDP
- **Watch-outs:**
  - DO NOT suggest, encourage, or initiate PACE disenrollment — PACE provides comprehensive coordinated care
  - The 2-month window starts from the PACE disenrollment date, not from when they call
  - If they are considering leaving PACE, make sure they fully understand the coverage they are giving up
- **Notes:** DO NOT pull beneficiary out of PACE plan

#### SNP — SNP Loss SEP

- **Trigger:** Lost Special Needs status
- **Code:** `SNP`
- **Window:** Up to 3 months after the SNP's grace period ends
- **What it is:** When a beneficiary in a Special Needs Plan loses their SNP eligibility — either because the qualifying condition wasn't verified within 2 months, or they no longer meet the criteria — they have a window to find a new plan before being disenrolled.
- **Qualifying criteria:**
  - In a C-SNP but the qualifying chronic condition was not verified by the provider within 2 months of enrollment
  - OR the beneficiary no longer meets the SNP eligibility criteria
  - Window: from the time of SNP eligibility loss up to 3 months after the SNP's grace period ends
- **Watch-outs:**
  - Provider failure to verify is a common trigger — this is often not the beneficiary's fault
  - The window is measured from the grace period end, not when they call — act fast
  - The beneficiary needs a new plan before the SNP disenrollment date to avoid a coverage gap
- **Notes:** Beneficiary no longer eligible for C-SNP and/or the provider failed to verify the chronic condition within 2 months of enrollment

---

### Institutionalized / LTC

#### OEP-I (LT2) — Institutionalized OEP

- **Trigger:** In nursing home / SNF / LTC facility → MA/MAPD
- **Code:** `OEP-I` (a.k.a. `LT2`)
- **Window:** Unlimited while in facility + 2 months after discharge
- **What it is:** A beneficiary living in a nursing home, SNF, or LTC facility has an ongoing enrollment right — they can enroll, switch, or disenroll from an MA/MAPD plan at any time while in the facility, plus 2 months after discharge.
- **Qualifying criteria:**
  - Currently living in a nursing home, skilled nursing facility, or long-term care facility
  - Enrolling into an MA or MAPD plan only (NOT PDP-only — use LTC SEP for that)
  - Unlimited changes while in facility + 2 months after discharge
- **Watch-outs:**
  - Assisted living facilities and residential homes do NOT qualify — must be a licensed nursing home or SNF
  - For PDP enrollment in LTC → use the LTC SEP, not OEP-I
  - Confirm they are still in the facility before using this SEP
- **Notes:** MUST enroll in a MA/MAPD; does NOT include assisted living facilities or residential homes

#### LTC — LTC SEP (PDP for Facility Residents)

- **Trigger:** In nursing home / SNF / LTC facility → PDP
- **Code:** `LTC`
- **Window:** Unlimited while in facility + 2 months after discharge
- **What it is:** A beneficiary in a qualifying care facility who needs Part D drug coverage uses the LTC SEP for a standalone PDP. Unlimited PDP changes while in the facility plus 2 months after leaving. For MA/MAPD, use OEP-I instead.
- **Qualifying criteria:**
  - Currently in: skilled nursing facility, nursing home, intermediate care facility (mentally disabled), psychiatric hospital, rehabilitation hospital, or long-term care hospital
  - Enrolling into a standalone PDP only — NOT for MA/MAPD (use OEP-I for that)
  - Unlimited changes while in facility + 2 months after discharge
- **Watch-outs:**
  - Assisted living facilities and residential homes do NOT qualify
  - LTC = PDP only; OEP-I = MA/MAPD — do not mix them up even though they cover the same facility types
  - Confirm the beneficiary is still in the facility at the time of enrollment
- **Notes:** MUST enroll in a PDP; does NOT include assisted living facilities or residential homes

---

### Involuntary Disenrollment

#### LCC — Loss of Creditable Coverage

- **Trigger:** Lost creditable coverage (VA, TRICARE, ACA)
- **Code:** `LCC`
- **Window:** 2 months from loss or notification (whichever is later)
- **What it is:** When a beneficiary loses other creditable drug or health coverage (VA, TRICARE, employer, ACA), they get 2 months from the loss or notification (whichever is later) to enroll. One of the most common SEPs on inbound calls.
- **Qualifying criteria:**
  - Lost VA, TRICARE, employer/union, ACA, or other creditable coverage
  - 2 months from date of loss OR date of notification — whichever comes later
  - Can enroll in MA, MAPD, or PDP depending on what they lost
- **Watch-outs:**
  - Did NOT pay premiums and lost coverage? LCC does NOT apply — they forfeited it voluntarily
  - Date of notification vs date of loss — use the later of the two to calculate the window
  - TRICARE and VA are creditable — losing them absolutely qualifies
- **Notes:** Does NOT apply to beneficiaries who missed premium payments and lost coverage

#### INV — Involuntary Loss SEP

- **Trigger:** Lost MAPD because lost Part B
- **Code:** `INV`
- **Window:** Notice + grace period + 2 months after coverage ends
- **What it is:** When a beneficiary loses their Medicare Advantage plan because Part B was terminated or dropped, they qualify for a standalone PDP to preserve drug coverage. Cannot re-enter MA until Part B is restored.
- **Qualifying criteria:**
  - Lost MA/MAPD plan because Part B was terminated or dropped
  - MUST enroll in a standalone PDP only — MA/MAPD requires active Part B
  - Window: from notice of Part B loss → through the plan grace period → 2 months after coverage ends
- **Watch-outs:**
  - PDP only — they cannot re-enter MA until Part B is reinstated
  - When Part B is eventually restored, ICEP or another qualifying SEP will apply for MA re-enrollment
  - This is involuntary — the beneficiary lost coverage they did not choose to leave
- **Notes:** MUST enroll in PDP only

#### REC — Receivership SEP

- **Trigger:** Plan taken over by state (financial)
- **Code:** `REC`
- **Window:** Until state action ends or member switches
- **What it is:** If a beneficiary's insurance carrier is placed under state financial receivership, the beneficiary can switch to any other plan from the month state action begins until the action ends or they enroll in a new plan. Rare — CMS communicates directly with affected beneficiaries.
- **Qualifying criteria:**
  - Beneficiary's current plan carrier is under active state financial receivership
  - Can switch to any available MA, MAPD, or PDP
  - Window: from the effective date of state action until the action ends OR beneficiary enrolls elsewhere
- **Watch-outs:**
  - Rare situation — CMS and the state will proactively notify affected beneficiaries
  - Do not confuse with EOC (carrier non-renewal) — REC is a financial solvency issue, not a market exit
  - Verify the receivership status with compliance team before using this code

#### EOC — Plan Non-Renewal SEP

- **Trigger:** Carrier ended plan in ZIP (non-renewal)
- **Code:** `EOC`
- **Window:** December 8 – end of February
- **What it is:** When a carrier decides to stop offering a plan in a service area, affected beneficiaries get a window from December 8th through the end of February to choose a new plan. The beneficiary should have received an ANOC letter.
- **Qualifying criteria:**
  - Beneficiary's plan was non-renewed by the carrier in their service area
  - Window: December 8 – end of February
  - Can enroll in any available MA, MAPD, or PDP
- **Watch-outs:**
  - The carrier initiates non-renewal — the beneficiary should have received an ANOC letter about it
  - This window overlaps with OEP (Jan 1–Mar 31) for existing MA holders — OEP may also be available
  - Beneficiaries who don't act may be defaulted to Original Medicare — confirm their situation before proceeding
- **Script:** "It looks like your current plan is actually leaving your area — which means you automatically qualify for a Special Enrollment Period to get into a new plan. Let's make sure we get you set up before your current coverage ends."

#### MYT — Medicare Contract Termination

- **Trigger:** Medicare ended contract with plan
- **Code:** `MYT`
- **Window:** 2 months before + 1 month after end
- **What it is:** When CMS terminates its contract with a Medicare plan carrier — different from a carrier voluntarily leaving a market — affected beneficiaries can begin enrolling in a new plan 2 months before the termination date. CMS-initiated, not carrier-initiated.
- **Qualifying criteria:**
  - CMS has terminated its contract with the beneficiary's current plan carrier
  - Window: 2 months before the contract end date + 1 full month after
  - Can enroll in any available MA, MAPD, or PDP
- **Watch-outs:**
  - CMS-initiated — do not confuse with EOC (carrier non-renewal); MYT is a CMS enforcement action
  - Beneficiaries should have received a formal CMS notice well in advance of the termination date
  - Enrollments made during the pre-termination window take effect after the contract end date

---

### Voluntary Changes

#### LEC — Loss of Employer Coverage SEP

- **Trigger:** Lost employer/union/COBRA coverage
- **Code:** `LEC`
- **Window:** Month of loss + 2 full calendar months after
- **What it is:** When a beneficiary loses employer, union, or COBRA coverage — through retirement, layoff, COBRA expiration, or death of a covered spouse — they qualify. One of the most common SEPs on inbound calls. COBRA expiration is treated the same as any other employer coverage loss.
- **Qualifying criteria:**
  - Lost employer, union, or COBRA coverage for any reason: retirement, job loss, COBRA expiration, or spousal coverage ending due to death
  - Window: month of loss + 2 full calendar months
  - Can enroll in MA, MAPD, or PDP
- **Watch-outs:**
  - Window starts from when coverage ended, not when they call — get the exact termination date
  - If Part B was also delayed alongside employer coverage → ICEP may apply simultaneously; document both
  - If they have remaining VA or TRICARE drug coverage → CDC may also apply to drop MAPD for MA-only
- **Script:** "Because your employer coverage just ended, you qualify for a Special Enrollment Period right now. That gives you a window from when that coverage ended to get into a new Medicare plan."
- **Notes:** May coincide with delayed Part B (ICEP)

#### OSD — Cost Plan Disenrollment SEP

- **Trigger:** Dropped Cost Plan with drug coverage
- **Code:** `OSD`
- **Window:** 2 full months after drop
- **What it is:** When a beneficiary drops a Medicare Cost Plan that included drug coverage and returns to Original Medicare, they get 2 full months to enroll in a standalone PDP. Cost Plans operate in limited markets primarily in the Midwest.
- **Qualifying criteria:**
  - Dropped a Medicare Cost Plan that included Part D drug coverage
  - MUST enroll in a standalone PDP only — OSD does not apply to MA/MAPD enrollment
  - 2 full calendar months after the month they drop the Cost Plan
- **Watch-outs:**
  - Cost Plans operate in limited markets — primarily Minnesota, Iowa, and parts of the Midwest
  - This SEP does not apply if the dropped Cost Plan did not include drug coverage
  - For MA enrollment after leaving a Cost Plan, a different qualifying SEP would be needed
- **Notes:** MUST enroll in PDP only

#### 12G — 12-Month Trial Right (Medigap)

- **Trigger:** Dropped Medigap for first-time MA/MAPD, wants to return
- **Code:** `12G`
- **Window:** 12 months from MA start
- **What it is:** A beneficiary who dropped a Medigap plan specifically to join their very first MA/MAPD plan gets 12 months to return to Original Medicare + Medigap + PDP. Also called the "12-Month Trial Right."
- **Qualifying criteria:**
  - Specifically dropped a Medigap/Medicare Supplement to join their FIRST MA/MAPD plan
  - 12-month window from the MA plan effective date
  - Returns to Original Medicare + Medigap; must also enroll in a standalone PDP
- **Watch-outs:**
  - Must be their FIRST time in MA — if they have prior MA history, Trial Right rules may not apply
  - After 12G they leave MA and return to Original Medicare + Medigap — Medigap guaranteed issue rights vary by state
  - Distinct from 12J: 12G specifically requires a prior Medigap plan that was dropped to join MA
- **Notes:** Also known as 12-Month Trial Right

#### 12J — Age-65 Trial Right

- **Trigger:** Joined MAPD at 65, wants to go back to OM + PDP
- **Code:** `12J`
- **Window:** 12 months from MAPD start
- **What it is:** A beneficiary who enrolled in an MA/MAPD plan for the first time when they turned 65 gets 12 months to change their mind and return to Original Medicare + a standalone PDP. PDP enrollment is mandatory under 12J.
- **Qualifying criteria:**
  - Enrolled in an MA/MAPD plan for the first time upon turning 65
  - Within the first 12 months of that initial MA enrollment
  - MUST also enroll in a standalone PDP — required, not optional
- **Watch-outs:**
  - PDP enrollment is mandatory — cannot use 12J to return to Original Medicare without also adding a PDP
  - After 12J they return to Original Medicare + PDP; they can re-enter MA during a future AEP
  - Distinct from 12G: 12J does not require a prior Medigap plan — it's for any first-time age-65 MA enrollment
- **Notes:** MUST enroll in PDP only

#### CDC — Creditable Drug Coverage SEP

- **Trigger:** In MAPD but has other drug coverage (VA, TRICARE)
- **Code:** `CDC`
- **Window:** Anytime
- **What it is:** When a beneficiary in an MA/MAPD plan has other creditable drug coverage — VA benefits, TRICARE, or employer retiree drug coverage — they can move to an MA-only plan to eliminate duplicate drug costs. Available anytime.
- **Qualifying criteria:**
  - Currently enrolled in an MA/MAPD plan (with Part D built in)
  - Has other creditable drug coverage active: VA benefits, TRICARE, employer retiree drug coverage, etc.
  - MUST move OUT of MAPD (or PDP) and INTO an MA-only plan — the Part D component must be dropped
  - Available anytime — no window restriction
- **Watch-outs:**
  - The destination must be an MA-only plan — this is not a tool for switching between MAPD plans
  - If the VA or TRICARE drug coverage later ends → LCC will apply to add drug coverage back
  - The beneficiary's other creditable drug coverage must still be active at the time of the CDC enrollment
- **Notes:** MUST enroll them OUT of a MAPD or PDP and INTO a MA-only plan

#### DIF — Government Enrollment SEP

- **Trigger:** Auto-enrolled into plan by Medicare
- **Code:** `DIF`
- **Window:** 3 months from effective date
- **What it is:** When Medicare automatically enrolls a beneficiary in a plan — rather than the beneficiary making an active choice — they get 3 months from the effective date to switch to any plan they prefer. In MARx, look for an 'X' indicator next to the plan code.
- **Qualifying criteria:**
  - Beneficiary was automatically enrolled by the government — they did not choose the plan themselves
  - 3 months from the auto-enrollment effective date
  - Can enroll in any MA, MAPD, or PDP
- **Watch-outs:**
  - MARx: an 'X' indicator next to the plan code signals auto-enrollment — look for it
  - The beneficiary may describe not recognizing their current plan or not knowing how they got on it
  - Common with low-income beneficiaries automatically assigned to benchmark LIS drug plans
- **Notes:** MARx may indicate this with an X by the plan; the beneficiary may also state they were automatically enrolled by Medicare

---

### Star Ratings

#### 5ST — 5-Star SEP

- **Trigger:** Enrolling in a 5-star rated plan
- **Code:** `5ST`
- **Window:** December 8 – November 30 (once per year)
- **What it is:** If a Medicare plan in the beneficiary's area has earned CMS's top 5-star quality rating, the beneficiary can switch to it any time between December 8th and November 30th — outside of AEP. This is the only SEP that allows year-round enrollment without a qualifying life event.
- **Qualifying criteria:**
  - A 5-star rated MA, MAPD, or PDP is available in the beneficiary's service area
  - Window: December 8 – November 30 of the following year
  - Once per calendar year
- **Watch-outs:**
  - 5-star plan designations change annually — verify the plan still holds 5 stars for the current plan year
  - Only one use per calendar year — cannot use 5ST twice in the same year
  - Confirm a 5-star plan actually exists in their specific ZIP code before offering this

#### LPI — Low-Performing Plan SEP

- **Trigger:** Current plan rated 2.5 stars or lower for 3 consecutive years
- **Code:** `LPI`
- **Window:** Anytime while enrolled in a low-performing plan
- **What it is:** When a beneficiary's plan has been rated 2.5 stars or lower for 3 consecutive years, CMS designates it a low-performing plan and sends a warning notice. They can switch to any 3-star or higher plan at any time.
- **Qualifying criteria:**
  - Currently enrolled in a plan with a CMS star rating of 2.5 or lower for 3 consecutive contract years
  - MUST enroll into a plan rated 3 stars or higher
  - Available anytime — no window restriction
- **Watch-outs:**
  - CMS sends a warning notice to affected beneficiaries — they may call referencing a letter or warning
  - The destination plan MUST be rated 3+ stars — verify before submitting
  - Check the plan's current star rating in MARx or CMS plan finder before proceeding
- **Notes:** MUST enroll the beneficiary in a plan with a 3+ star rating

---

### Disaster / Extension

#### DST — Disaster SEP

- **Trigger:** FEMA/state disaster prevented enrollment
- **Code:** `DST`
- **Window:** Duration of emergency + 2 months after end
- **What it is:** The Disaster SEP is an **extension**, not a standalone SEP. It applies when a FEMA-declared disaster or public health emergency prevented a beneficiary from making an enrollment election during an open window (AEP, IEP, OEP, or another SEP). The disaster extends the missed window — it does not create a new one. The beneficiary must NOT have used a different SEP since the disaster.
- **Qualifying criteria:**
  - A FEMA-declared or CMS-designated disaster or public health emergency affected the beneficiary's area
  - The beneficiary had an active enrollment window (AEP, IEP, OEP, or SEP) during the disaster period
  - The disaster must have actually prevented their enrollment — and they did NOT use any other SEP since then
  - Window: duration of the emergency + 2 full months after the declared end date
  - As of March 20, 2025: agents can submit DST SEP directly (CMS reversed the April 2025 restriction)
- **Watch-outs:**
  - A disaster alone does NOT create a new SEP — a specific existing window must have been missed because of it
  - If the beneficiary used ANY other SEP after the disaster, DST no longer applies
  - Do NOT proactively market or suggest this SEP — only use it when the beneficiary raises the situation
  - Always verify active FEMA declarations before submitting
- **Notes:** For beneficiaries who have been affected by the disaster; disasters by themselves are NOT a SEP — this is an extension to a missed SEP

---

### Election Periods (Not SEPs, But Context-Critical)

#### AEP — Annual Election Period

- **Trigger:** October 15 – December 7
- **Code:** `AEP`
- **Window:** Coverage effective January 1. Last plan wins.
- **What it is:** AEP is the main annual window for all Medicare beneficiaries to change their Part D or Medicare Advantage plan. The last plan enrolled wins — if a beneficiary enrolls multiple times during AEP, only the last submission counts.
- **Qualifying criteria:**
  - Oct 15 – Dec 7 each year, open to all Medicare beneficiaries
  - Coverage effective January 1 of the following year
  - Last enrollment submitted wins — earlier AEP enrollments are overridden
- **Watch-outs:**
  - AEP is for ALL beneficiaries, but OEP (Jan–Mar) is for MA plan holders only — don't confuse them
  - Submitting multiple plans during AEP is valid — last one takes effect
  - Plans take effect Jan 1 — make sure the beneficiary knows their current plan is still active through Dec 31
- **Notes:** Last plan standing wins — plan effectuates January 1st of the following year

#### OEP — MA Open Enrollment Period

- **Trigger:** January 1 – March 31 (existing MA plan holders only)
- **Code:** `OEP`
- **Window:** One change. Effective 1st of following month.
- **What it is:** The MA Open Enrollment Period (Jan 1–Mar 31) allows existing MA plan holders to make ONE change. Not for first-time enrollees — it's a course-correction window. The change is effective the 1st of the following month.
- **Qualifying criteria:**
  - Must currently be enrolled in an MA or MAPD plan
  - One change only — cannot be used again once exercised
  - Effective 1st of the following month (Jan enrollment → Feb 1 effective, etc.)
  - Can still be used even if the current plan hasn't effectuated yet (e.g., AEP enrollment pending)
- **Watch-outs:**
  - Only ONE change — if they already used OEP this year, it's gone until next year
  - Not available to PDP-only or Original Medicare beneficiaries — must already be in MA
  - MARx will flag when OEP has been used — check before submitting
- **Notes:** MARx will indicate when this SEP was used; if the plan has not gone into effect yet, you CAN still use OEP to override it

---

## Part 2: Primary Signal Cards (6 High-Priority Detection Patterns)

These are the 6 patterns agents are trained to listen for during calls. They are ordered by detection frequency and represent the most common SEP triggers on inbound Medicare sales calls.

### Signal 1: Address Mismatch / Moved (HIGH PRIORITY)
- **Detection phase:** Minutes 5–8 of call
- **Ask:** "Is the address we have on file still correct?"
- **Listen for:** "I moved" · new city or ZIP · "staying with family" · "house burned" · eviction · different address in system vs. what they say
- **Callout:** System address doesn't match what they said? That's a live SEP. Don't just update the field and move on.
- **SEP:** MOV — Change of Permanent Residence
- **Window:** Month before move (if notified in advance) + month of move + 2 full calendar months after
- **Time-sensitive:** YES

### Signal 2: Medicaid / Extra Help / QMB (HIGH PRIORITY)
- **Detection phase:** Minutes 2–10 of call
- **Ask:** "Do you have Medicaid, or does the state help pay for any of your healthcare?"
- **Listen for:** "I have Medicaid" · "Extra Help" / "LIS" · "QMB" / "SLMB" · "state pays my Part B" · $0 Part B premium · "I get help from the state"
- **Callout:** ANY Medicaid level, any Medicare Savings Program, or Extra Help = monthly SEP. This fires more than any other SEP on inbound calls.
- **SEP:** INT (D-SNP) / DEP (PDP)
- **Window:** Any month. Effective 1st of the following month. Repeatable every month.
- **Time-sensitive:** NO

### Signal 3: Chronic Condition (MEDIUM PRIORITY)
- **Detection phase:** Minutes 8–15 of call
- **Ask:** "Do you have any ongoing health conditions like diabetes, heart disease, or COPD?"
- **Listen for:** diabetes / metformin · heart disease / pacemaker · COPD / kidney / dialysis · cancer / stroke · Alzheimer's / Parkinson's / MS
- **Callout:** If a C-SNP is available in their county for that condition, they can enroll. Check Aetna, Humana, UHC, WellCare portals.
- **SEP:** CSN — C-SNP Eligibility
- **Window:** One-time per qualifying condition. Once enrolled, the SEP for that condition ends. A new qualifying condition triggers a new SEP.
- **Time-sensitive:** NO

### Signal 4: Plan Ending / Termination Letter (MEDIUM PRIORITY)
- **Detection phase:** Minutes 5–12 of call
- **Ask:** "Have you received any letters about your current plan ending or changing?"
- **Listen for:** "my plan is ending" · termination letter · "plan won't be available" · auto-switched to different plan · "Medicare ended my plan"
- **Callout:** Humana, Aetna, UHC, WellCare exited hundreds of counties for 2026. Check the system — many callers have this SEP and don't know it.
- **SEP:** EOC / MYT — Plan Termination / Non-Renewal
- **Window:** EOC: Dec 8 – end of Feb. MYT: 2 months before + 1 month after contract end.
- **Time-sensitive:** NO

### Signal 5: Retired / Lost Job Coverage (MEDIUM PRIORITY)
- **Detection phase:** Minutes 2–6 of call
- **Ask:** "Have you recently retired or lost any employer health coverage?"
- **Listen for:** "I just retired" · "lost my job" / "COBRA ended" · "spouse lost their job" · "husband passed, lost his insurance" · "VA coverage" / "TRICARE"
- **Callout:** Retirement, COBRA expiration, or losing spousal coverage = SEP. Ask for the exact date coverage ended — the clock is running.
- **SEP:** LEC — Loss of Employer Coverage
- **Window:** Month of loss + 2 full calendar months after
- **Time-sensitive:** YES

### Signal 6: New to Medicare / Turning 65 (LOW PRIORITY)
- **Detection phase:** Minutes 4–7 of call
- **Ask:** "When did your Medicare Part B start?"
- **Listen for:** "I just got Medicare" · just turned 65 · "became eligible" recently · under-65 turning 65 · "I delayed my Part B" · born in 1961
- **Callout:** Medicare started recently = IEP or ICEP may be open. Under-65 disability beneficiaries turning 65 get a BRAND NEW 7-month window (IEP2). 1961 is the golden birth year to watch for.
- **SEP:** IEP / ICEP / IEP2
- **Window:** IEP: 7 months (3 before + birthday month + 3 after). ICEP: 5 months (3 before + Part B month + 1 after, extended 1/1/2025). IEP2: fresh 7-month window when disability beneficiary turns 65.
- **Time-sensitive:** YES

---

## Part 3: C-SNP Qualifying Conditions (15 Conditions + All Aliases)

These are the 15 CMS-recognized qualifying chronic conditions for Chronic Condition Special Needs Plans. Each condition includes all known medical aliases — CallFlow3 should match against these when scanning call transcripts for chronic condition mentions.

| # | Condition | Category | Aliases |
|---|-----------|----------|---------|
| 1 | Chronic Alcohol / Drug Dependence | Substance Use | alcoholism, alcohol use, AUD, drug addiction, substance abuse, substance use disorder, SUD, opioid use disorder, OUD, opioid |
| 2 | Autoimmune Disorder | Autoimmune | lupus, SLE, rheumatoid arthritis, RA, multiple sclerosis, MS, psoriasis, scleroderma, Sjogren, vasculitis, myositis, IBD, Crohn, Crohn's, ulcerative colitis, Graves', Hashimoto, autoimmune |
| 3 | Cancer (Active/Invasive) | Oncology | lung cancer, breast cancer, prostate cancer, colon cancer, colorectal cancer, leukemia, lymphoma, bladder cancer, kidney cancer, pancreatic cancer, ovarian cancer, melanoma, brain tumor, chemotherapy, chemo, radiation, cancer, oncology |
| 4 | Cardiovascular Disorder | Cardiovascular | heart disease, coronary artery disease, CAD, heart attack, MI, myocardial infarction, angina, arrhythmia, atrial fibrillation, AFib, aortic stenosis, peripheral artery disease, PAD, pacemaker, stent, DVT, deep vein thrombosis, pulmonary embolism, blood clot |
| 5 | Chronic Heart Failure | Cardiovascular | CHF, congestive heart failure, heart failure, HF, cardiomyopathy, systolic dysfunction, diastolic dysfunction, ejection fraction, EF |
| 6 | Dementia | Neurological | Alzheimer's, Alzheimers, vascular dementia, memory loss, cognitive decline, Lewy body dementia, frontotemporal dementia, FTD, memory care, forgetfulness, dementia |
| 7 | Diabetes Mellitus | Endocrine | diabetes, type 2 diabetes, T2D, T1D, type 1 diabetes, insulin, metformin, A1C, diabetic, blood sugar, glucose, Ozempic, Januvia, Jardiance |
| 8 | End-Stage Liver Disease | Hepatic | ESLD, cirrhosis, liver failure, liver disease, hepatitis C, hep C, hepatic, portal hypertension, ascites, liver transplant |
| 9 | End-Stage Renal Disease (ESRD) | Renal | ESRD, kidney failure, renal failure, dialysis, hemodialysis, peritoneal dialysis, kidney disease, CKD stage 5, kidney transplant, creatinine, GFR |
| 10 | Hematologic Disorder | Blood | sickle cell disease, sickle cell, thalassemia, hemophilia, multiple myeloma, myeloma, blood disorder, polycythemia, myelodysplastic syndrome, MDS, aplastic anemia |
| 11 | HIV / AIDS | Infectious Disease | HIV, AIDS, human immunodeficiency virus, antiretroviral, CD4, viral load, HIV positive, Truvada, Biktarvy |
| 12 | Chronic Lung Disorder | Pulmonary | COPD, emphysema, chronic bronchitis, pulmonary fibrosis, IPF, asthma, pulmonary hypertension, oxygen therapy, oxygen tank, bronchiectasis, lung disease, nebulizer, inhaler, albuterol |
| 13 | Chronic Mental Health Condition | Behavioral Health | schizophrenia, bipolar disorder, bipolar, major depression, major depressive disorder, MDD, PTSD, post-traumatic stress, schizoaffective, psychosis, severe depression, treatment-resistant depression, psychiatric |
| 14 | Neurological Disorder | Neurological | Parkinson's, Parkinsons, epilepsy, seizures, ALS, amyotrophic lateral sclerosis, Lou Gehrig's, neuropathy, Huntington, tremors, motor neuron disease, ataxia, cerebral palsy |
| 15 | Stroke / CVA | Neurological | stroke, CVA, cerebrovascular accident, TIA, mini-stroke, hemorrhagic stroke, ischemic stroke, brain attack, cerebral infarction, hemiplegia, aphasia |

---

## Part 4: Enrollment Period Logic (AEP / OEP / SEP Season)

CallFlow3 should know which enrollment period is active to contextualize SEP flags. During AEP, no SEP is required for enrollment — so SEP detection is informational only. During OEP, only existing MA plan holders can make one change. During SEP Season, a qualifying SEP is **required** for any plan change.

### Date Logic

```
function getEnrollmentPeriod(now):
  year = now.year
  month = now.month
  day = now.day

  // AEP: Oct 15 – Dec 7
  if (month == 10 AND day >= 15) OR (month == 11) OR (month == 12 AND day <= 7):
    return {
      period: "AEP",
      label: "Annual Election Period",
      color: "green",
      note: "Open enrollment is active. No SEP required. Coverage effective January 1st.",
      canEnroll: true
    }

  // MA OEP: Jan 1 – Mar 31
  if month >= 1 AND month <= 3:
    return {
      period: "MA_OEP",
      label: "MA Open Enrollment Period",
      color: "yellow",
      note: "For MA plan holders only — one change available. Original Medicare enrollees still need a qualifying SEP.",
      canEnroll: false
    }

  // SEP Season: Apr 1 – Oct 14
  return {
    period: "SEP_SEASON",
    label: "SEP Season",
    color: "red",
    note: "Outside open enrollment. A qualifying SEP is required for any plan change.",
    canEnroll: false
  }
```

### Behavior by Period

| Period | Dates | SEP Flag Behavior |
|--------|-------|-------------------|
| **AEP** | Oct 15 – Dec 7 | Informational only — anyone can enroll. Still flag SEPs for documentation purposes (helps if the enrollment carries past Dec 7). |
| **MA OEP** | Jan 1 – Mar 31 | Flag SEPs for Original Medicare enrollees (they need one). MA plan holders can use OEP for one change without an SEP. |
| **SEP Season** | Apr 1 – Oct 14 | Critical — a qualifying SEP is required. All SEP flags should be surfaced prominently. |

---

## Part 5: FEMA Disaster Data

Active FEMA and state-declared disasters are stored in `public/data/fema-active.json` in the Certainty System. CallFlow3 should maintain its own copy or reference for DST (Disaster SEP) detection.

### Data Structure

```json
{
  "lastUpdated": "2026-02-18",
  "source": "Humana Compliance Communication, February 18, 2026",
  "note": "Source: Humana carrier compliance communication. FEMA.gov/disasters for county-level FEMA DR updates.",
  "declarations": [
    {
      "state": "California",
      "disaster": "Canyon Fire (FEMA Major Disaster)",
      "counties": ["Los Angeles"],
      "allCounties": false,
      "sepStartDate": "2025-08-07",
      "sepEndDate": "2026-10-31",
      "declarationType": "FEMA",
      "status": "active"
    },
    {
      "state": "Alabama",
      "disaster": "Severe Weather",
      "counties": ["Entire State"],
      "allCounties": true,
      "sepStartDate": "2026-01-22",
      "sepEndDate": "2026-05-31",
      "declarationType": "Governor",
      "status": "active"
    }
  ]
}
```

### Field Definitions

| Field | Type | Description |
|-------|------|-------------|
| `state` | string | US state or territory name |
| `disaster` | string | Description of the disaster event |
| `counties` | string[] | Affected counties. `["Entire State"]` or `["Entire Territory"]` when `allCounties` is true |
| `allCounties` | boolean | If true, the entire state/territory is affected |
| `sepStartDate` | string | ISO date — when the disaster SEP window opened |
| `sepEndDate` | string | ISO date — when the disaster SEP window closes |
| `declarationType` | `"FEMA"` or `"Governor"` | FEMA = federal major disaster declaration; Governor = state-level emergency declaration |
| `status` | string | Always `"active"` in this file (expired entries are removed) |

### Current Active States (as of 2026-02-18)

Alabama, Arkansas, California, Delaware, District of Columbia, Florida, Georgia, Hawaii, Indiana, Kentucky, Louisiana, Maryland, Mississippi, Missouri, Montana, New Jersey, New Mexico, New York, North Carolina, Ohio, Oregon, Pennsylvania, Puerto Rico, South Carolina, Tennessee, Texas, Virginia, Washington, West Virginia, Wisconsin, Wyoming

### How to Use for DST Detection

1. If the caller mentions a disaster, weather event, or displacement → check if their state/county has an active declaration
2. If an active declaration exists AND the caller had an enrollment window they missed during the disaster period → DST applies
3. The disaster alone is NOT an SEP — it extends a missed window. The caller must have had a valid window (AEP, IEP, OEP, or another SEP) that was disrupted by the disaster
4. If the caller used any other SEP after the disaster, DST no longer applies

---

## Part 6: Implementation Spec for CallFlow3

### Type Definition

Add an optional `sep_flag` field to the call analysis output:

```typescript
interface SepFlag {
  /** Whether an SEP signal was detected */
  detected: boolean
  /** The SEP code(s) that likely apply — e.g., "MOV", "INT", "LEC" */
  codes: string[]
  /** Human-readable summary of why the flag was raised */
  reason: string
  /** Confidence level */
  confidence: 'high' | 'medium' | 'low'
  /** Whether this SEP has a time-sensitive window */
  timeSensitive: boolean
  /** The enrollment window description */
  window?: string
}

interface CallAnalysis {
  // ... existing fields ...
  sep_flag?: SepFlag
}
```

### Prompt Addition (Copy-Paste Ready)

Add this section to the CallFlow3 analysis prompt:

```
## SEP Signal Detection

Listen for Special Enrollment Period (SEP) triggers in the call. An SEP allows a Medicare beneficiary to change plans outside of the Annual Election Period (Oct 15 – Dec 7).

HIGH-PRIORITY signals (flag with high confidence):
- Address mismatch or recent move → MOV (Change of Residence)
- Mentions Medicaid, Extra Help, LIS, QMB, SLMB, or state paying Part B → INT/DEP (Dual/LIS)
- Recent retirement, job loss, or COBRA ending → LEC (Loss of Employer Coverage)

MEDIUM-PRIORITY signals (flag with medium confidence):
- Chronic conditions (diabetes, heart disease, COPD, cancer, ESRD, etc.) → CSN (C-SNP eligible)
- Plan ending, termination letter, plan leaving area → EOC/MYT (Plan Termination)
- Recently got Medicare, turning 65, delayed Part B → IEP/ICEP/IEP2

LOW-PRIORITY signals (flag only if clearly stated):
- Released from incarceration → INC
- Returned from living abroad → RUS
- In nursing home or SNF → OEP-I/LTC
- 5-star plan available → 5ST
- Auto-enrolled by Medicare → DIF
- Disaster prevented enrollment → DST

When you detect an SEP signal:
1. Identify the most likely SEP code(s)
2. Note the specific transcript evidence (what the caller said)
3. Assess confidence: high (caller explicitly stated the qualifying event), medium (strong implication from context), low (possible but ambiguous)
4. Note if the SEP is time-sensitive (MOV, LEC, IEP/ICEP have hard deadlines)

If the current date is during AEP (Oct 15 – Dec 7), still flag SEPs for documentation but note that no SEP is currently required.
If the current date is during OEP (Jan 1 – Mar 31), flag SEPs for non-MA enrollees (MA holders can use OEP).
If the current date is during SEP Season (Apr 1 – Oct 14), flag all detected SEPs — they are required.

Output the SEP flag as:
{
  "sep_flag": {
    "detected": true/false,
    "codes": ["CODE1", "CODE2"],
    "reason": "Brief explanation of what was detected",
    "confidence": "high/medium/low",
    "timeSensitive": true/false,
    "window": "Description of the enrollment window"
  }
}

If no SEP signal is detected, set detected to false and leave other fields empty.
Do NOT flag SEP signals speculatively — only flag when transcript evidence supports it.
```

### JSON Schema Addition

```json
{
  "sep_flag": {
    "type": "object",
    "description": "SEP signal detection result",
    "properties": {
      "detected": { "type": "boolean" },
      "codes": {
        "type": "array",
        "items": { "type": "string" },
        "description": "SEP codes detected (e.g., MOV, INT, LEC)"
      },
      "reason": { "type": "string" },
      "confidence": {
        "type": "string",
        "enum": ["high", "medium", "low"]
      },
      "timeSensitive": { "type": "boolean" },
      "window": { "type": "string" }
    },
    "required": ["detected"]
  }
}
```

### Display Spec (Amber Warning Block)

When `sep_flag.detected === true`, render an amber warning block in the call analysis UI:

```
┌─────────────────────────────────────────────────┐
│ ⚠ SEP Signal Detected                          │
│                                                 │
│ Code: MOV — Change of Permanent Residence       │
│ Window: Month of move + 2 months after          │
│ Confidence: High                                │
│ ⏰ Time-sensitive                               │
│                                                 │
│ "Caller mentioned moving from Tampa to Orlando  │
│  last month — system address doesn't match."    │
└─────────────────────────────────────────────────┘
```

**Styling:**
- Background: `rgba(180, 83, 9, 0.08)` (amber tint)
- Border-left: `3px solid #92400e`
- Text color: `#92400e` for the header, `#131110` for body
- Icon: warning triangle (⚠)
- Border radius: `8px`
- Padding: `16px`
- Font: system default (match CallFlow3 UI)

**Placement:** Below the main analysis output, above any action items or recommendations.

### Flagging Rules

**When to flag:**
- Caller explicitly mentions a qualifying event (moved, lost coverage, has Medicaid, etc.)
- System data shows a mismatch (address doesn't match, plan termination in system)
- Caller describes a chronic condition and a C-SNP exists in their area
- Caller is clearly new to Medicare (just turned 65, just got Part B)

**When NOT to flag:**
- During AEP when the caller is enrolling normally (still flag for documentation, but mark as informational)
- Caller mentions a condition but no C-SNP exists in their area (CSN requires a matching plan)
- Vague or ambiguous statements without corroborating evidence
- Caller already used the SEP they're referencing (e.g., already used OEP this year)
- PO Box change only (does not qualify for MOV)
- Missed premium payments leading to coverage loss (does not qualify for LCC)

### Calibration Targets

- **Expected flag rate:** 10–20% of analyzed calls should have `sep_flag.detected = true`
  - Higher during SEP Season (Apr–Oct) when callers are more likely to have qualifying events
  - Lower during AEP (Oct–Dec) when most enrollments don't require an SEP
- **Confidence distribution:** ~40% high, ~40% medium, ~20% low
- **Most common codes:** INT/DEP (Medicaid/LIS), MOV (moved), LEC (lost employer coverage), CSN (chronic condition)
- **False positive tolerance:** Prefer false positives over false negatives — it's better to flag a possible SEP that an agent investigates than to miss one. An unflagged SEP = missed enrollment opportunity.

---

## Quick Reference: All SEP Codes

| Code | Name | Window | Time-Sensitive |
|------|------|--------|----------------|
| IEP | Initial Enrollment Period | 7 months around 65th birthday | Yes |
| IEP2 | Disability→65 Fresh Window | 7 months around 65th birthday | Yes |
| ICEP | Initial Coverage Election | 5 months around Part B start | Yes |
| OEP-N | New Enrollee OEP | Effectuation month + 2 months | No |
| RET | Retroactive Entitlement | Notice month + 2 months | No |
| INT | Integrated Care (D-SNP) | Any month, repeatable | No |
| DEP | Dual/LIS Monthly (PDP) | Any month, repeatable | No |
| MCD | Medicaid Change | 3 months from change | No |
| NLS | Extra Help Change | 3 months from change | No |
| MOV | Change of Residence | Month before + month of + 2 after | Yes |
| INC | Post-Incarceration | 2 months after release | Yes |
| RUS | Return to US | 2 months after return | Yes |
| LAW | Lawful Presence | Month of + 2 months | Yes |
| CSN | C-SNP Eligibility | Once per calendar year | No |
| PAP | SPAP | 1x/year; 2 months after loss | No |
| PAC | PACE Disenrollment | 2 months after disenrollment | No |
| SNP | SNP Loss | Up to 3 months after grace period | Yes |
| OEP-I | Institutionalized (MA/MAPD) | Unlimited + 2 months after discharge | No |
| LTC | LTC (PDP) | Unlimited + 2 months after discharge | No |
| LCC | Loss of Creditable Coverage | 2 months from loss/notification | Yes |
| INV | Involuntary Loss (PDP only) | Notice + grace + 2 months | Yes |
| REC | Receivership | Until state action ends | No |
| EOC | Plan Non-Renewal | Dec 8 – end of Feb | No |
| MYT | Medicare Contract Termination | 2 months before + 1 month after | No |
| LEC | Loss of Employer Coverage | Month of loss + 2 months | Yes |
| OSD | Cost Plan Disenrollment (PDP) | 2 months after drop | No |
| 12G | 12-Month Trial Right (Medigap) | 12 months from MA start | No |
| 12J | Age-65 Trial Right (PDP) | 12 months from MAPD start | No |
| CDC | Creditable Drug Coverage | Anytime | No |
| DIF | Government Auto-Enrollment | 3 months from effective date | No |
| 5ST | 5-Star | Dec 8 – Nov 30 (1x/year) | No |
| LPI | Low-Performing Plan | Anytime while in low-rated plan | No |
| DST | Disaster Extension | Emergency duration + 2 months | Yes |
| AEP | Annual Election Period | Oct 15 – Dec 7 | N/A |
| OEP | MA Open Enrollment | Jan 1 – Mar 31 (1 change) | N/A |
