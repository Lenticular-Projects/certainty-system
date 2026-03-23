# SEP Compliance Cheat Sheet

**Purpose:** Quick-reference for agents. Print it, keep it on screen, use it before every SEP enrollment. This is the difference between a clean submission and a compliance review.

---

## Before Every SEP Enrollment — The Verification Checklist

Ask yourself these five questions before submitting. If you cannot answer all five with confidence, stop and verify.

| # | Question | Why It Matters |
|---|----------|---------------|
| 1 | **What is the qualifying event?** | Can you name the specific life event? (Moved, lost coverage, gained Medicaid, chronic condition, etc.) |
| 2 | **When did it happen?** | Do you have the date? Is the SEP window still open? |
| 3 | **Does the beneficiary understand?** | Can they explain in their own words why they qualify? "Okay" is not verification. |
| 4 | **Is this the right SEP code?** | Is there a more beneficial enrollment period available per the CMS hierarchy? |
| 5 | **Is the plan type valid for this SEP?** | INT = D-SNP only. DEP = PDP only. ICEP = MA/MAPD only. CDC = MA-only. Check before submitting. |

---

## The 5 Most Watched SEPs

These are the codes carrier compliance teams track most aggressively. Exceed the benchmark and expect an audit.

| Code | Name | Benchmark | What Gets Flagged |
|------|------|-----------|-------------------|
| **DST** | Disaster SEP | ~15% | Using it as a standalone SEP. Marketing or advertising it. No matching FEMA declaration. |
| **MOV** | Moving SEP | ~10% | PO Box changes submitted as moves. No address verification with Social Security. MARx still shows old address. |
| **LCC** | Loss of Creditable Coverage | ~4% | Using it when the beneficiary stopped paying premiums (voluntary loss). Must be involuntary. |
| **ACC** | Accessible Format | ~3% | Using it as a convenience code. Beneficiary did not actually request accessible materials. |
| **PAP** | SPAP | ~5% | Beneficiary not actively enrolled in a qualifying state pharmaceutical assistance program. |

---

## Red Flags That Get You Flagged

These patterns trigger automated compliance alerts:

- High DST volume without matching FEMA declarations in your service area
- MOV enrollments without corresponding address changes in MARx
- ACC usage above 3% of total enrollments
- Multiple different SEP codes used for the same beneficiary in a short period
- SEP enrollments consistently submitted on the last day of windows
- LCC for beneficiaries whose coverage lapsed due to non-payment
- INT enrollments into D-SNPs that are not FIDE, HIDE, or AIP
- Give-back plan enrollments for Medicaid beneficiaries

---

## What Happens When You Submit the Wrong SEP

| Stage | What Happens | Impact |
|-------|-------------|--------|
| **1. Rejection** | Enrollment denied at submission | Beneficiary has no plan. You wasted their time. |
| **2. Retro disenrollment** | Accepted enrollment later audited and reversed | Beneficiary loses coverage they thought was active — sometimes months later. |
| **3. Compliance review** | Your enrollment patterns flagged | Corrective action plan. Mandatory retraining. |
| **4. Suspension** | Enrollment privileges suspended | Cannot submit any enrollments, sometimes across all carriers. |
| **5. Termination** | Carrier contract terminated | Potential CMS sanction. Career impact. |

---

## When in Doubt — The Escalation Path

1. **Check the SEP Check tool** at `/sep-check` — all 37 codes with eligibility criteria
2. **Check carrier portals** — Humana (Vantage/Mentor DMS-024), UHC (Election Period Booklet), Devoted (Agent Portal SEP tracker)
3. **Contact your upline** — they have seen the edge cases
4. **Contact carrier compliance** — a pre-submission question is always better than a post-audit correction

---

## The DO NOT List

These are bright-line rules. No exceptions. No gray area.

- **DO NOT** enroll Medicaid beneficiaries in give-back plans
  - Medicaid pays their Part B premium. The give-back goes nowhere. Use D-SNPs instead.

- **DO NOT** advertise or market the Disaster SEP
  - The beneficiary must raise the situation. You cannot send mailers, run ads, or proactively call about DST.

- **DO NOT** assume or infer an SEP
  - The qualifying event must be confirmed by the beneficiary and verifiable in the system.

- **DO NOT** use ACC for beneficiaries who do not need accessible format materials
  - Carrier benchmark is 3%. This code is actively audited.

- **DO NOT** submit an enrollment without verifying the election period with the beneficiary
  - CMS requires Election Period Verification — it is a conversation, not a checkbox.

- **DO NOT** use DST as a standalone SEP
  - It extends a missed window. It does not create a new one. The beneficiary must have had another enrollment period open during the disaster.

- **DO NOT** use LCC for voluntary coverage loss
  - If the beneficiary missed premium payments and their coverage lapsed, LCC does not apply.

- **DO NOT** submit INT without confirming the D-SNP is integrated
  - INT requires FIDE, HIDE, or AIP designation. Not all D-SNPs qualify. MCO must match.

- **DO NOT** use OEP for dual-eligible beneficiaries who have INT or DEP
  - INT and DEP are monthly and repeatable. OEP is one-and-done. Do not waste it.

- **DO NOT** hold applications
  - Applications must be submitted within 24 hours of receipt. You cannot hold them until a more convenient time.

---

## SEP Plan Type Quick Reference

Not every SEP allows enrollment in every plan type. Check before you submit.

| SEP Code | MA | MAPD | PDP | D-SNP | MA-Only |
|----------|:--:|:----:|:---:|:-----:|:-------:|
| INT | - | - | - | YES | - |
| DEP | - | - | YES | - | - |
| MCD | - | YES | YES | - | - |
| NLS | - | YES | YES | - | - |
| ICEP | YES | YES | - | - | YES |
| IEP | - | YES | YES | - | - |
| OEP-I | YES | YES | - | - | - |
| LTC | - | - | YES | - | - |
| CDC | - | - | - | - | YES |
| INV | - | - | YES | - | - |
| OSD | - | - | YES | - | - |
| 12G | - | - | YES | - | - |
| 12J | - | - | YES | - | - |
| MOV | YES | YES | YES | - | - |
| LEC | YES | YES | YES | - | - |
| CSN | - | - | - | C-SNP | - |

---

## The Single Best Habit

If you are not 100% sure the SEP is valid, **pause and verify**. The five minutes it takes to confirm will save you weeks of dealing with a compliance review. Ask before you submit.
