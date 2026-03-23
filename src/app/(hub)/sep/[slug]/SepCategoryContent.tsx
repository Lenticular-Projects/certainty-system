'use client'

import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import PageShell from '@/components/layout/PageShell'
import CrossLinks from '@/components/ui/CrossLinks'
import { SPRING } from '@/lib/motion'
import styles from './page.module.css'

/* ─── Page metadata ─── */
interface PageMeta {
  title: string
  category: string
  description: string
  crossLinks: Array<{ label: string; href: string }>
}

const pageMeta: Record<string, PageMeta> = {
  'new-to-medicare': {
    title: 'New to Medicare',
    category: 'Category 1',
    description: 'IEP, IEP2, ICEP, OEP-N, RET \u2014 the five codes that start every Medicare journey. These are the most fundamental enrollment periods every agent must master.',
    crossLinks: [
      { label: 'SEP Guides', href: '/sep' },
      { label: 'SEP Check Tool', href: '/sep-check' },
      { label: 'Financial Eligibility', href: '/sep/financial-eligibility' },
      { label: 'Call Types', href: '/call-types' },
    ],
  },
  'financial-eligibility': {
    title: 'Financial Eligibility',
    category: 'Category 2',
    description: 'INT, DEP, MCD, NLS \u2014 Medicaid and Extra Help SEPs. The highest-volume codes on inbound calls. Dual-eligible beneficiaries represent a massive portion of inbound volume.',
    crossLinks: [
      { label: 'SEP Guides', href: '/sep' },
      { label: 'SEP Check Tool', href: '/sep-check' },
      { label: 'Chronic & Special Needs', href: '/sep/chronic-special-needs' },
      { label: 'Objections', href: '/objections' },
    ],
  },
  'location-life-change': {
    title: 'Location & Life Changes',
    category: 'Category 3',
    description: 'MOV, INC, RUS, LAW \u2014 triggered by where they live, where they came from, their legal status. MOV is the most common by far.',
    crossLinks: [
      { label: 'SEP Guides', href: '/sep' },
      { label: 'SEP Check Tool', href: '/sep-check' },
      { label: 'Voluntary Changes', href: '/sep/voluntary-changes' },
      { label: 'Signals', href: '/signals' },
    ],
  },
  'chronic-special-needs': {
    title: 'Chronic & Special Needs',
    category: 'Category 4',
    description: 'CSN, PAP, PAC, SNP \u2014 the biggest off-season enrollment opportunity in Medicare. An estimated 17 million beneficiaries have at least one qualifying chronic condition.',
    crossLinks: [
      { label: 'SEP Guides', href: '/sep' },
      { label: 'SEP Check Tool', href: '/sep-check' },
      { label: 'Financial Eligibility', href: '/sep/financial-eligibility' },
      { label: 'C-SNP Playbook', href: '/csnp' },
    ],
  },
  'institutionalized-ltc': {
    title: 'Institutionalized & LTC',
    category: 'Category 5',
    description: 'OEP-I, LTC \u2014 two codes, one rule: MA/MAPD vs PDP. Both are unlimited while the beneficiary is in a qualifying facility.',
    crossLinks: [
      { label: 'SEP Guides', href: '/sep' },
      { label: 'SEP Check Tool', href: '/sep-check' },
      { label: 'Involuntary Disenrollment', href: '/sep/involuntary-disenrollment' },
    ],
  },
  'involuntary-disenrollment': {
    title: 'Involuntary Disenrollment',
    category: 'Category 6',
    description: 'LCC, INV, REC, EOC, MYT \u2014 when the beneficiary loses coverage through no fault of their own. Their plan leaves, Medicare terminates the contract, or they lose creditable coverage.',
    crossLinks: [
      { label: 'SEP Guides', href: '/sep' },
      { label: 'SEP Check Tool', href: '/sep-check' },
      { label: 'Voluntary Changes', href: '/sep/voluntary-changes' },
      { label: 'Location & Life Changes', href: '/sep/location-life-change' },
    ],
  },
  'voluntary-changes': {
    title: 'Voluntary Changes',
    category: 'Category 7',
    description: 'LEC, OSD, 12G, 12J, CDC, DIF, ACC \u2014 triggered by the beneficiary\u2019s own actions. Despite being &ldquo;voluntary,&rdquo; these are critical enrollment opportunities.',
    crossLinks: [
      { label: 'SEP Guides', href: '/sep' },
      { label: 'SEP Check Tool', href: '/sep-check' },
      { label: 'Involuntary Disenrollment', href: '/sep/involuntary-disenrollment' },
      { label: 'New to Medicare', href: '/sep/new-to-medicare' },
    ],
  },
  'star-ratings': {
    title: 'Star Ratings',
    category: 'Category 8',
    description: '5ST, LPI \u2014 one rewards quality, the other protects from it. Two SEPs tied directly to CMS star ratings.',
    crossLinks: [
      { label: 'SEP Guides', href: '/sep' },
      { label: 'SEP Check Tool', href: '/sep-check' },
      { label: 'Election Periods', href: '/sep/election-periods' },
    ],
  },
  'disaster-extension': {
    title: 'Disaster Extension',
    category: 'Category 9',
    description: 'DST \u2014 the most misunderstood and most heavily scrutinized SEP code in the system. A disaster extends a missed window \u2014 it does not create a new one.',
    crossLinks: [
      { label: 'SEP Guides', href: '/sep' },
      { label: 'SEP Check Tool', href: '/sep-check' },
      { label: 'Election Periods', href: '/sep/election-periods' },
      { label: 'Involuntary Disenrollment', href: '/sep/involuntary-disenrollment' },
    ],
  },
  'election-periods': {
    title: 'Election Periods',
    category: 'Category 10',
    description: 'AEP, OEP, SEP Season \u2014 the annual calendar every SEP lives inside. Not technically SEPs, but you must know them cold.',
    crossLinks: [
      { label: 'SEP Guides', href: '/sep' },
      { label: 'SEP Check Tool', href: '/sep-check' },
      { label: 'New to Medicare', href: '/sep/new-to-medicare' },
      { label: 'Disaster Extension', href: '/sep/disaster-extension' },
    ],
  },
}

/* ─── Reusable helpers ─── */

function Section({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      className={styles.section}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={SPRING}
    >
      {children}
    </motion.section>
  )
}

function SepCode({
  code,
  name,
  description,
  trigger,
  window,
  qualifies,
  mistakes,
  talkTrack,
  scenario,
  children,
}: {
  code: string
  name: string
  description: string
  trigger: string
  window: string
  qualifies: string
  mistakes: string[]
  talkTrack: string
  scenario?: string
  children?: React.ReactNode
}) {
  return (
    <div className={styles.codeEntry}>
      <div className={styles.codeHeader}>
        <span className={styles.codeBadge}>{code}</span>
        <span className={styles.codeName}>{name}</span>
      </div>
      <p className={styles.codeDesc}>{description}</p>

      <div className={styles.triggerBox}>
        <div className={styles.triggerLabel}>What Triggers It</div>
        <div className={styles.triggerText}>{trigger}</div>
      </div>

      <p className={styles.detailRow}>
        <span className={styles.detailLabel}>Window:</span> {window}
      </p>
      <p className={styles.detailRow}>
        <span className={styles.detailLabel}>Who qualifies:</span> {qualifies}
      </p>

      <div className={styles.mistakesLabel}>Common Mistakes</div>
      <ul className={styles.mistakesList}>
        {mistakes.map((m, i) => (
          <li key={i}>{m}</li>
        ))}
      </ul>

      <div className={styles.talkTrack}>
        <div className={styles.talkTrackLabel}>Talk Track</div>
        &ldquo;{talkTrack}&rdquo;
      </div>

      {scenario && (
        <div className={styles.scenario}>
          <div className={styles.scenarioLabel}>Scenario</div>
          {scenario}
        </div>
      )}

      {children}
    </div>
  )
}

function ComparisonTable({
  headers,
  rows,
}: {
  headers: string[]
  rows: string[][]
}) {
  return (
    <div className={styles.comparisonTable}>
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ComplianceCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.complianceCallout}>
      <div className={styles.complianceLabel}>Compliance Warning</div>
      <div className={styles.complianceText}>{children}</div>
    </div>
  )
}

function Takeaway({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.takeaway}>
      <div className={styles.takeawayLabel}>Key Insight</div>
      <div className={styles.takeawayText}>{children}</div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   CATEGORY 1: NEW TO MEDICARE
   ═══════════════════════════════════════════════════════════════════════ */

function NewToMedicareContent() {
  return (
    <>
      <Section>
        <SepCode
          code="IEP"
          name="Initial Enrollment Period"
          description="The beneficiary is turning 65 and getting Medicare for the first time. This is their original, default enrollment window. Seven months total."
          trigger="Turning 65 years old, or becoming eligible for Medicare due to disability after 24 months on SSDI. The key requirement is that Part A and Part B must share the same effective date."
          window="Seven months &mdash; three months before the 65th birthday month, the birthday month itself, and three months after."
          qualifies="Anyone turning 65 with both Part A and Part B starting on the same date. Also applies to disability beneficiaries reaching 24 months of SSDI. The beneficiary must NOT already be in an active, effectuated MA or MAPD plan. IEP is NOT valid for MA-only plans &mdash; must enroll in MAPD or standalone PDP."
          mistakes={[
            'Confusing IEP with ICEP. The single distinguishing question: do Part A and Part B have the same effective date? If yes, IEP. If different (because Part B was delayed), ICEP.',
            'Trying to use IEP after a plan has already effectuated \u2014 once the beneficiary is in an active plan, IEP is no longer available. They would need OEP-N instead.',
          ]}
          talkTrack="Since you are right in your initial enrollment window, we can get you set up with the right plan today \u2014 no special circumstances needed. You have a seven-month window, and I want to make sure we use it well."
          scenario="A beneficiary calls and mentions they just turned 65 last month. You pull up MARx and see Part A and Part B share the same effective date. No existing plan on file. They are in their IEP with five months remaining. You tell them exactly when their window closes and move to plan comparison."
        />
      </Section>

      <Section>
        <SepCode
          code="IEP2"
          name="Disability Beneficiary Turning 65"
          description="Someone who has been on Medicare through disability is now turning 65, and they get a brand-new seven-month window &mdash; as if they were enrolling for the very first time."
          trigger="A Medicare beneficiary who originally qualified through disability (under 65) is now turning 65. MARx will show a Medicare Reason for Disability (MRD) code."
          window="Seven months &mdash; identical structure to IEP. Three months before the 65th birthday month, the birthday month, and three months after. Uses MRD on the application."
          qualifies="Disability beneficiaries turning 65. They already have Medicare through disability, but they get a completely fresh enrollment window at 65. MA-only plans are prohibited &mdash; must enroll in MAPD or PDP."
          mistakes={[
            'Not realizing this is a separate, fresh window. The beneficiary may already be in a plan through their disability enrollment, but IEP2 gives them a new opportunity to change.',
            'MA-only plans are prohibited under IEP2 &mdash; always enroll into MAPD or PDP.',
          ]}
          talkTrack="Because you are turning 65 and you have been on Medicare through disability, you actually get a brand-new enrollment window \u2014 a fresh start. We can look at all the plans available to you right now and make sure you are in the best one going forward."
        />
      </Section>

      <Section>
        <SepCode
          code="ICEP"
          name="Initial Coverage Election Period"
          description="The beneficiary delayed Part B &mdash; usually because they had employer coverage &mdash; and is now activating it. Part A and Part B have different effective dates."
          trigger="Part B activation after a delay. The telltale sign: Part A and Part B have different effective dates in MARx. This happens most often when someone had employer coverage past 65, kept Part A, delayed Part B, and is now activating it."
          window="Five months &mdash; three months before the Part B effective month, the Part B effective month, and one month after. The anchor date is the Part B effective date, not the birthday."
          qualifies="Beneficiaries whose Part A and Part B have different effective dates. NOT valid for PDP enrollment &mdash; ICEP is for MA or MAPD only. If they need a standalone PDP, use IEP instead."
          mistakes={[
            'Using ICEP when Part A and Part B share the same date (that is IEP).',
            'Using ICEP for PDP enrollment (not valid).',
            'ICEP often coincides with LEC &mdash; if employer coverage is ending at the same time Part B activates, document both codes.',
          ]}
          talkTrack="Since your Part B is just now starting, you are in your initial enrollment window for a Medicare Advantage plan. We have a five-month window to work with \u2014 let me show you what is available in your area."
        />
      </Section>

      <Section>
        <SepCode
          code="OEP-N"
          name="New Enrollee OEP"
          description="The beneficiary just enrolled in their very first MA or MAPD plan, it has gone into effect, and they do not like it. They get one chance to change."
          trigger="First-time MA/MAPD enrollment that has effectuated. The beneficiary realizes the plan is not right &mdash; maybe the network does not include their doctor, maybe the formulary misses their medications."
          window="Month of effectuation plus two months."
          qualifies="First-time MA/MAPD enrollees only. The plan must have actually effectuated &mdash; a pending enrollment does not trigger OEP-N. Cannot be used by beneficiaries who only have a PDP or Medigap. One change only &mdash; once used, it is gone."
          mistakes={[
            'Trying to use OEP-N for someone who has prior MA history &mdash; it is for first-timers only.',
            'Trying to use it before the plan has effectuated.',
            'Not realizing that once OEP-N is used, it is consumed forever.',
          ]}
          talkTrack="Since this is your first Medicare Advantage plan and it just went into effect, you actually have a window right now to make one change if it is not the right fit. Let\u2019s look at what else is available."
        />
      </Section>

      <Section>
        <SepCode
          code="RET"
          name="Retroactive Entitlement"
          description="The beneficiary was retroactively enrolled in Medicare &mdash; their Part A and/or Part B started without them knowing, and they only found out after the fact."
          trigger="Notification of Medicare entitlement after coverage has already begun. Commonly surfaces when Social Security retroactively awards disability or Medicare benefits. The clock starts from the notification date, not from when coverage began."
          window="Month of notification plus two full calendar months."
          qualifies="Beneficiaries notified of Part A and/or Part B after their coverage had already started. If they have both Part A and Part B, both effective dates must be the same (if different, use ICEP instead)."
          mistakes={[
            'Calculating the window from the coverage effective date instead of the notification date.',
            'Confusing RET with ICEP when Part A and Part B have different dates.',
          ]}
          talkTrack="It sounds like you were enrolled in Medicare before you even knew about it. The good news is that gives you a window right now to choose a plan. Let me walk you through what is available."
        />
      </Section>

      <Section>
        <h2 className={styles.sectionTitle}>IEP vs ICEP</h2>
        <ComparisonTable
          headers={['', 'IEP', 'ICEP']}
          rows={[
            ['The one question', 'Do Part A and Part B share the same effective date?', 'Are the dates different?'],
            ['If YES', 'Use IEP', 'Use ICEP'],
            ['Window', '7 months around 65th birthday', '5 months around Part B start'],
            ['Anchor date', '65th birthday', 'Part B effective date'],
            ['PDP eligible?', 'Yes', 'No \u2014 ICEP is MA/MAPD only'],
            ['MA-only eligible?', 'No', 'Yes'],
            ['Common overlap', 'None typical', 'Often overlaps with LEC'],
          ]}
        />
      </Section>

      <Section>
        <h2 className={styles.sectionTitle}>Decision Tree: Which New-to-Medicare Code?</h2>
        <ol className={styles.list} style={{ listStyle: 'decimal' }}>
          <li>Same Part A/B dates, no prior plan? &rarr; <strong>IEP</strong></li>
          <li>Different Part A/B dates (delayed Part B)? &rarr; <strong>ICEP</strong></li>
          <li>Disability beneficiary turning 65? &rarr; <strong>IEP2</strong></li>
          <li>Already effectuated first MA plan, wants to change? &rarr; <strong>OEP-N</strong></li>
          <li>Notified of Medicare after it already started? &rarr; <strong>RET</strong></li>
        </ol>
      </Section>
    </>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   CATEGORY 2: FINANCIAL ELIGIBILITY
   ═══════════════════════════════════════════════════════════════════════ */

function FinancialEligibilityContent() {
  return (
    <>
      <Section>
        <SepCode
          code="INT"
          name="Integrated Care SEP"
          description="The beneficiary has full Medicaid and wants to enroll in a D-SNP (Dual-Eligible Special Needs Plan). They can do this any month, as many times as they want."
          trigger="Full Medicaid status. The beneficiary must have FBDE (Full Benefit Dual Eligible), QMB+, SLMB+, or Full Medicaid. Partial Medicaid levels like QMB-only do NOT qualify for INT."
          window="Any month. Repeatable. No annual limit."
          qualifies="Beneficiaries with full Medicaid enrolling into a D-SNP only. Must verify Medicaid level before using. The D-SNP must be an integrated type: FIDE SNP, HIDE SNP, or AIP. The MCO on the Medicaid side must match the carrier offering the D-SNP."
          mistakes={[
            'Using INT for someone with QMB-only (not eligible \u2014 QMB+ is required).',
            'Using INT for a PDP enrollment (INT is D-SNP only \u2014 use DEP for PDP).',
            'Not verifying Medicaid level before submitting.',
            'Enrolling into a D-SNP that is not FIDE, HIDE, or AIP \u2014 not all D-SNPs are integrated, and INT requires an integrated plan.',
          ]}
          talkTrack="Since you have full Medicaid, you have the ability to enroll in a Special Needs Plan designed specifically for people with both Medicare and Medicaid. These plans coordinate your benefits and often have zero or very low out-of-pocket costs. And you can make this change any time \u2014 you are not locked in."
        >
          <ComplianceCallout>
            <strong>Never enroll a Medicaid beneficiary in a &ldquo;give-back&rdquo; plan</strong> (plans that reduce the Part B premium). Medicaid already pays the beneficiary&rsquo;s Part B premium. A give-back plan would reduce a premium the beneficiary is not paying &mdash; the savings go nowhere, and the beneficiary may end up in a plan with a narrower network or worse benefits than a properly aligned D-SNP.
          </ComplianceCallout>
        </SepCode>
      </Section>

      <Section>
        <SepCode
          code="DEP"
          name="Dual/LIS Monthly SEP"
          description="The beneficiary has any level of Medicaid or Extra Help/LIS and wants to change their standalone Part D drug plan. Any month. Repeatable."
          trigger="Any level of Medicaid &mdash; including QMB-only, SLMB-only, QI, and all higher levels. Or any level of Extra Help/LIS &mdash; Auto, Full, or Partial tiers. The bar is much lower than INT."
          window="Any month. Repeatable every month. No limit."
          qualifies="Anyone with any Medicaid level or any LIS/Extra Help level. DEP is for PDP enrollment only. Cannot use DEP for MA or MAPD plans. If they want a D-SNP, use INT instead (and verify full Medicaid)."
          mistakes={[
            'Trying to use DEP for MA or MAPD enrollment (it is PDP only).',
            'Confusing DEP with INT.',
            'If the beneficiary\u2019s Medicaid or LIS level recently changed, MCD or NLS may also apply \u2014 document all applicable codes.',
          ]}
          talkTrack="Since you have Medicaid, you actually have the ability to change your drug plan every single month \u2014 you are not locked in. If we find something better today, we can get that started for the first of next month."
        >
          <Takeaway>
            <strong>The LIS Two-SEP Distinction:</strong> LIS/Extra Help beneficiaries have two SEPs. The ongoing monthly <strong>DEP</strong> is available every month, repeatable, for switching PDPs. The one-time <strong>NLS</strong> is triggered when the LIS level actually changes &mdash; it gives a three-month window and allows MAPD enrollment, not just PDP.
          </Takeaway>
        </SepCode>
      </Section>

      <Section>
        <SepCode
          code="MCD"
          name="Medicaid Change SEP"
          description="The beneficiary&rsquo;s Medicaid status recently changed &mdash; they gained it, lost it, or their level shifted. Three-month window."
          trigger="Any change in Medicaid level. Gained Medicaid for the first time. Lost Medicaid entirely. Shifted from QMB-only to full Medicaid. Shifted from full Medicaid down to partial. Any change counts."
          window="Three months from the date the Medicaid change took effect. Available all year &mdash; including after September 30th."
          qualifies="Any beneficiary whose Medicaid level changed within the last three months. Can enroll in MAPD or PDP."
          mistakes={[
            'Calculating the window from the call date instead of the Medicaid change date.',
            'Not realizing MCD is available past September 30th.',
            'Missing the trigger entirely because the beneficiary does not explicitly say \u201Cmy Medicaid changed\u201D \u2014 listen for green, purple, or orange Social Security letters.',
          ]}
          talkTrack="Since your Medicaid situation just changed, you have a three-month window to adjust your Medicare plan. Let\u2019s make sure you are in the right plan for your current situation."
        />
      </Section>

      <Section>
        <SepCode
          code="NLS"
          name="Extra Help Change SEP"
          description="The beneficiary&rsquo;s Extra Help (LIS) level recently changed &mdash; gained, lost, or shifted between tiers. Three-month window."
          trigger="Any change in Extra Help/LIS status. Gained LIS for the first time. Lost LIS entirely. Shifted between tiers. Any change counts."
          window="Three months from the date of the LIS change. Available all year &mdash; including after September 30th."
          qualifies="Any beneficiary whose Extra Help/LIS level changed within the last three months. Can enroll in MAPD or PDP."
          mistakes={[
            'Not listening for the trigger. Beneficiaries rarely say \u201Cmy Extra Help level changed.\u201D They say things like \u201CI got a letter from Social Security\u201D or \u201Cmy copays went up\u201D or \u201CI used to not pay anything for my medications.\u201D',
            'Green, purple, or orange letters from Social Security signal an Extra Help change.',
          ]}
          talkTrack="It sounds like your Extra Help benefits recently changed. That gives you a special window right now to switch to a plan that better fits your current situation."
        />
      </Section>

      <Section>
        <h2 className={styles.sectionTitle}>INT vs DEP</h2>
        <ComparisonTable
          headers={['', 'INT', 'DEP']}
          rows={[
            ['The one question', 'Does the beneficiary have FULL Medicaid?', 'Do they have ANY Medicaid or LIS?'],
            ['Medicaid level required', 'Full: FBDE, QMB+, SLMB+, Full', 'Any: QMB-only, SLMB-only, QI, LIS-only \u2014 all qualify'],
            ['What can they enroll in?', 'D-SNP only (must be FIDE, HIDE, or AIP)', 'PDP only'],
            ['Repeatable?', 'Yes, any month', 'Yes, any month'],
            ['Key trap', 'QMB-only does NOT qualify', 'Cannot use for MA/MAPD'],
            ['MCO matching', 'Must verify Medicaid MCO aligns with D-SNP carrier', 'Not applicable'],
          ]}
        />
      </Section>

      <Section>
        <h2 className={styles.sectionTitle}>Medicaid Level Quick Reference</h2>
        <ComparisonTable
          headers={['Level', 'What the State Pays', 'INT Eligible?', 'DEP Eligible?']}
          rows={[
            ['QMB-only', 'Part B premium only', 'NO', 'YES'],
            ['SLMB-only', 'Part B premium only', 'NO', 'YES'],
            ['QI', 'Part B premium only', 'NO', 'YES'],
            ['QMB+', 'Part B premium + cost sharing', 'YES', 'YES'],
            ['SLMB+', 'Part B premium + cost sharing', 'YES', 'YES'],
            ['FBDE (Full Benefit Dual Eligible)', 'Everything', 'YES', 'YES'],
            ['LIS-only (no Medicaid)', 'Drug cost assistance', 'NO', 'YES'],
          ]}
        />
      </Section>
    </>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   CATEGORY 3: LOCATION & LIFE CHANGES
   ═══════════════════════════════════════════════════════════════════════ */

function LocationLifeChangeContent() {
  return (
    <>
      <Section>
        <SepCode
          code="MOV"
          name="Change of Permanent Residence SEP"
          description="The beneficiary moved to a new address where their current plan may not be available. They have a window to enroll in a plan that serves their new location."
          trigger="A change of physical residence to a different ZIP code or county. House fire, eviction, or moving in with family all count as long as it is a different physical address. The moment you see a system address mismatch &mdash; their address in MARx does not match what they tell you &mdash; treat it as a potential live SEP."
          window="Month before the move (if the plan was notified in advance) plus the month of the move plus two full calendar months after the move."
          qualifies="Any beneficiary who moved to a new physical address. Can enroll in any MA, MAPD, or PDP available at the new address."
          mistakes={[
            'Accepting a PO Box change as a MOV trigger &mdash; it is NOT valid. Must be a physical address change.',
            'Updating the address in the system and moving on without offering enrollment &mdash; the address update is not the enrollment.',
            'Missing the SEP entirely because the agent does not ask about the address or does not check for mismatches.',
          ]}
          talkTrack="Because you have moved to a new area, you are actually in a special enrollment window right now. We can get you set up with the right plan for your new address today. Based on your move date, you have [X] days left in that window."
        >
          <ComplianceCallout>
            MOV is the second most watched SEP with a carrier benchmark of approximately 10% of enrollments. The beneficiary must have a verified address change with Social Security within the last 2 months. If MARx still shows the old address after your MOV enrollment, the carrier will question whether the move actually happened.
          </ComplianceCallout>
        </SepCode>
      </Section>

      <Section>
        <SepCode
          code="INC"
          name="Post-Incarceration SEP"
          description="The beneficiary was recently released from a correctional facility and needs to re-enroll in a Medicare plan."
          trigger="Release from a jail, prison, or detention center. Medicare is suspended &mdash; not terminated &mdash; during incarceration, so Part A and Part B should still be intact upon release."
          window="Two months from the release date."
          qualifies="Any Medicare beneficiary released from incarceration within the last two months. Can enroll in MA, MAPD, or PDP."
          mistakes={[
            'Assuming Medicare was terminated during incarceration &mdash; it is suspended, not cancelled.',
            'Calculating the window from the call date instead of the release date.',
            'Not knowing that pre-release planning is possible &mdash; enrollment can be submitted up to one month before the release date.',
          ]}
          talkTrack="Welcome back. Since you were just released, you have a two-month window to get enrolled in a Medicare plan. Your Medicare should still be active &mdash; let me verify that and then we can look at what is available in your area."
        />
      </Section>

      <Section>
        <SepCode
          code="RUS"
          name="Return to US SEP"
          description="The beneficiary was living permanently outside the United States and has now returned. They have two months to enroll."
          trigger="Returning to the US after permanent residence abroad. Short trips and vacations do NOT qualify &mdash; this is for beneficiaries who were living outside the US full-time."
          window="Two months from the return date."
          qualifies="Medicare beneficiaries who permanently resided outside the US and have now returned. Can enroll in MA, MAPD, or PDP."
          mistakes={[
            'Applying RUS to someone who was on vacation or a short trip.',
            'Not verifying that Part A and Part B are still active after extended absence.',
            'Not confirming the US return address is current in the system.',
          ]}
          talkTrack="Welcome back to the States. Since you have been living abroad, you have a special enrollment window to get set up with a Medicare plan here. Let me check your Medicare status and we will find the right plan for your area."
        />
      </Section>

      <Section>
        <SepCode
          code="LAW"
          name="Lawful Presence SEP"
          description="The beneficiary recently became a US citizen or gained lawful status that makes them newly eligible for Medicare."
          trigger="Becoming a US citizen or acquiring qualifying lawful presence that triggers Medicare eligibility for the first time."
          window="Month of the status change plus two full calendar months."
          qualifies="Beneficiaries who recently crossed the eligibility threshold through citizenship or lawful presence. Can enroll in MA, MAPD, or PDP."
          mistakes={[
            'Assuming citizenship automatically starts Medicare &mdash; it does not. Part A and Part B must be confirmed active or activating.',
          ]}
          talkTrack="Congratulations on your citizenship. That actually opens a Medicare enrollment window for you right now. Let me check your Medicare eligibility and we will get you set up."
        />
      </Section>

      <Section>
        <h2 className={styles.sectionTitle}>MOV vs LEC</h2>
        <ComparisonTable
          headers={['', 'MOV', 'LEC']}
          rows={[
            ['The one question', 'Did they physically move?', 'Did they lose employer/union/COBRA coverage?'],
            ['Trigger', 'New physical address', 'Coverage termination'],
            ['Window', 'Month before (if notified) + month of + 2 months after', 'Month of loss + 2 months'],
            ['What they enroll in', 'Any plan at new address', 'Any MA, MAPD, or PDP'],
            ['Key trap', 'PO Box change does NOT count', 'COBRA expiration counts as loss'],
            ['Overlap', 'May overlap with LEC if move caused job loss', 'May overlap with ICEP if Part B also activating'],
          ]}
        />
      </Section>

      <Section>
        <Takeaway>
          <strong>The Address Mismatch Signal:</strong> On every single inbound call, verify the beneficiary&rsquo;s current address. If what they tell you does not match what MARx shows, you may have a live MOV SEP sitting right in front of you. The beneficiary will not say &ldquo;I have a Moving SEP.&rdquo; They will say &ldquo;Oh yeah, I moved to my daughter&rsquo;s house in Tampa last month.&rdquo; That is your signal.
        </Takeaway>
      </Section>
    </>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   CATEGORY 4: CHRONIC & SPECIAL NEEDS
   ═══════════════════════════════════════════════════════════════════════ */

function ChronicSpecialNeedsContent() {
  return (
    <>
      <Section>
        <Takeaway>
          <strong>The Off-Season Opportunity:</strong> An estimated 17 million Medicare beneficiaries have at least one qualifying chronic condition. The CSN SEP is available year-round with no time limit &mdash; as long as the beneficiary has the condition and a matching C-SNP exists in their county, they can enroll. During SEP season, when most agents sit idle waiting for AEP, agents who understand C-SNPs are still enrolling beneficiaries every day.
        </Takeaway>
      </Section>

      <Section>
        <SepCode
          code="CSN"
          name="C-SNP Eligibility SEP"
          description="The beneficiary has a qualifying chronic condition and a C-SNP is available in their county for that condition. They can enroll."
          trigger="The beneficiary has a severe or disabling chronic condition &mdash; diabetes, heart failure, ESRD, COPD, cancer, and many others &mdash; and a matching C-SNP exists in their county. The condition alone is not enough. A C-SNP for that specific condition must be available where they live."
          window="Once per calendar year per qualifying condition. A new qualifying condition triggers a new SEP."
          qualifies="Beneficiaries with a qualifying chronic condition who are enrolling INTO a C-SNP. Must be enrolling into a C-SNP &mdash; this SEP cannot be used for standard MA or MAPD plans."
          mistakes={[
            'Confirming the SEP before verifying a C-SNP actually exists in the beneficiary\u2019s county. Not all counties have C-SNPs.',
            'C-SNP to C-SNP for the same condition is NOT valid &mdash; only switching to a C-SNP for a different condition qualifies.',
          ]}
          talkTrack="Because you have [condition], you may actually qualify for a Special Needs Plan built specifically for people managing that. These plans often have lower copays and benefits tailored to your exact needs &mdash; and you can enroll right now."
        >
          <ComplianceCallout>
            <strong>Provider attestation requirement:</strong> C-SNP enrollment often requires the beneficiary&rsquo;s provider to attest to the qualifying chronic condition. This must be completed prior to the end of the second month of enrollment. If the provider does not attest, the beneficiary will be disenrolled &mdash; but they get a two-month SEP (SNP code) to join another plan.
          </ComplianceCallout>
          <div className={styles.triggerBox} style={{ marginTop: 16 }}>
            <div className={styles.triggerLabel}>Qualifying Chronic Conditions</div>
            <div className={styles.triggerText}>
              Chronic alcohol/drug dependence, autoimmune disorders (lupus, rheumatoid arthritis, MS), cancer, cardiovascular disorders, chronic heart failure, dementia/Alzheimer&rsquo;s, diabetes, end-stage liver disease, ESRD/dialysis, hematologic disorders, HIV/AIDS, chronic lung disorders (COPD, emphysema), chronic mental health conditions (schizophrenia, bipolar, major depression), neurological disorders (Parkinson&rsquo;s, epilepsy, ALS), and stroke/CVA.
            </div>
          </div>
        </SepCode>
      </Section>

      <Section>
        <SepCode
          code="PAP"
          name="SPAP SEP (State Pharmaceutical Assistance Program)"
          description="The beneficiary is enrolled in an approved State Pharmaceutical Assistance Program and can change their PDP once per year, or has two months after losing that program."
          trigger="Active enrollment in a CMS-approved SPAP program. Common qualifying programs: New York (EPIC), New Jersey (PAAD), Pennsylvania (PACE/PACENET), Wisconsin (SeniorRx)."
          window="One PDP change per year while actively enrolled. If they lose the SPAP enrollment, two months from the loss date."
          qualifies="Beneficiaries currently enrolled in a CMS-approved SPAP program. PDP enrollment or changes only."
          mistakes={[
            'Assuming all state assistance programs qualify &mdash; only CMS-approved SPAP programs count.',
            'Not confirming the beneficiary is still actively enrolled in the program.',
          ]}
          talkTrack="Since you are enrolled in [state program], you have the ability to change your drug plan right now. Let\u2019s see if there is something that works better with your current medications."
        >
          <ComplianceCallout>
            PAP has a carrier benchmark of approximately 5% of enrollments. The beneficiary must be actively enrolled in a qualifying SPAP &mdash; not just eligible for one.
          </ComplianceCallout>
        </SepCode>
      </Section>

      <Section>
        <SepCode
          code="PAC"
          name="PACE Disenrollment SEP"
          description="The beneficiary has already left a PACE program on their own. They have two months to enroll in a new plan."
          trigger="Voluntary disenrollment from a PACE (Program of All-Inclusive Care for the Elderly) plan &mdash; which has already occurred. You should never suggest or initiate PACE disenrollment."
          window="Two months from the PACE disenrollment date."
          qualifies="Beneficiaries who have already disenrolled from PACE. Can enroll in MA, MAPD, or PDP."
          mistakes={[
            'Encouraging or initiating PACE disenrollment &mdash; NEVER do this. PACE provides comprehensive, coordinated care for frail elderly individuals.',
            'This SEP only applies after disenrollment has already happened on the beneficiary\u2019s initiative.',
          ]}
          talkTrack="Since you have already left the PACE program, you have a two-month window to get enrolled in a new plan. Let me show you what is available."
        />
      </Section>

      <Section>
        <SepCode
          code="SNP"
          name="SNP Loss SEP"
          description="The beneficiary is in a Special Needs Plan but has lost their SNP eligibility &mdash; either because the qualifying condition was not verified in time or they no longer meet the criteria."
          trigger="Loss of SNP eligibility. Most commonly: the provider failed to verify the qualifying chronic condition within two months of enrollment. Or the beneficiary no longer meets the SNP eligibility criteria."
          window="From the time of SNP eligibility loss up to three months after the SNP&rsquo;s grace period ends."
          qualifies="Beneficiaries currently in a C-SNP (or other SNP) who have lost eligibility. They need a new plan before the SNP disenrollment date to avoid a coverage gap."
          mistakes={[
            'Not acting fast enough &mdash; the window is measured from the grace period end, not the call date.',
          ]}
          talkTrack="It looks like your Special Needs Plan eligibility has changed. The good news is you have a window right now to get into a new plan so there is no gap in your coverage. Let me help you with that."
        />
      </Section>

      <Section>
        <h2 className={styles.sectionTitle}>C-SNP Opportunity Framing</h2>
        <p className={styles.bodyLead}>Why C-SNP is your biggest SEP-season tool:</p>
        <ol className={styles.list} style={{ listStyle: 'decimal' }}>
          <li><strong>17 million eligible beneficiaries.</strong> That is the estimated number of Medicare beneficiaries with at least one qualifying chronic condition.</li>
          <li><strong>Year-round availability.</strong> No time limit. No expiring window. As long as the condition exists and a C-SNP is available, the SEP is open.</li>
          <li><strong>No time pressure on the call.</strong> Unlike MOV (2 months) or LEC (2 months), C-SNP has no ticking clock. You can take the time to explain the benefits thoroughly.</li>
          <li><strong>High-value plans.</strong> C-SNPs typically offer lower copays for condition-specific services, care management programs, and benefits tailored to the chronic condition.</li>
          <li><strong>The question that opens the door:</strong> &ldquo;Do you have any ongoing health conditions like diabetes, heart failure, or COPD?&rdquo; That single question can unlock the biggest off-season enrollment opportunity in Medicare.</li>
        </ol>
      </Section>
    </>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   CATEGORY 5: INSTITUTIONALIZED & LTC
   ═══════════════════════════════════════════════════════════════════════ */

function InstitutionalizedLtcContent() {
  return (
    <>
      <Section>
        <SepCode
          code="OEP-I"
          name="Institutionalized OEP"
          description="The beneficiary lives in a nursing home, SNF, or LTC facility. They can enroll in or switch MA/MAPD plans at any time &mdash; unlimited changes while in the facility, plus two months after discharge."
          trigger="Current residence in a qualifying care facility: nursing home, skilled nursing facility, or long-term care facility."
          window="Unlimited while in the facility. Plus two full months after discharge. Can be used once per month while residing in the facility."
          qualifies="Beneficiaries currently living in a qualifying facility. Must enroll in MA or MAPD only &mdash; NOT PDP. For PDP enrollment in a care facility, use LTC instead."
          mistakes={[
            'Applying OEP-I to assisted living facilities or residential homes &mdash; they do NOT qualify. Must be a licensed nursing home or SNF.',
            'Using OEP-I for PDP enrollment (use LTC).',
            'Not confirming the beneficiary is still in the facility at the time of enrollment.',
          ]}
          talkTrack="Because you are in a care facility right now, you have the ability to change your Medicare Advantage plan at any time. There is no deadline pressure &mdash; we can make sure you are in the plan that serves you best."
          scenario="A beneficiary&rsquo;s daughter calls on her mother&rsquo;s behalf. Her mother is in a skilled nursing facility recovering from a hip replacement. She is unhappy with her current MAPD plan&rsquo;s coverage for rehabilitation services. Because she is in an SNF, OEP-I applies &mdash; unlimited changes. You can switch her to an MAPD with better rehab coverage today."
        />
      </Section>

      <Section>
        <SepCode
          code="LTC"
          name="LTC SEP"
          description="Same facility requirement as OEP-I, but for standalone PDP enrollment instead of MA/MAPD."
          trigger="Current residence in a qualifying care facility: skilled nursing facility, nursing home, intermediate care facility (mentally disabled), psychiatric hospital, rehabilitation hospital, or long-term care hospital."
          window="Unlimited while in the facility. Plus two full months after discharge."
          qualifies="Beneficiaries in a qualifying facility who need a standalone PDP. Must enroll in PDP only &mdash; NOT MA/MAPD (use OEP-I for that)."
          mistakes={[
            'Confusing LTC with OEP-I. They cover the same facility types, but LTC is PDP-only and OEP-I is MA/MAPD-only.',
            'Applying to assisted living facilities (not qualifying).',
          ]}
          talkTrack="Since you are in a care facility, you can change your drug plan at any time. Let me look at what is available and find the best one for your current medications."
          scenario="A beneficiary is in a long-term care hospital. He is on Original Medicare (not MA) and needs a better Part D plan because his current PDP does not cover two of his medications. LTC applies &mdash; he can switch PDPs at any time while in the facility. You find a PDP that covers all his drugs and enroll him today."
        />
      </Section>

      <Section>
        <h2 className={styles.sectionTitle}>OEP-I vs LTC</h2>
        <ComparisonTable
          headers={['', 'OEP-I (LT2)', 'LTC']}
          rows={[
            ['The one question', 'Do they need MA/MAPD?', 'Do they need a PDP?'],
            ['Enrolls into', 'MA or MAPD only', 'Standalone PDP only'],
            ['Facility types', 'Same qualifying facilities', 'Same qualifying facilities'],
            ['Window', 'Unlimited + 2 months after discharge', 'Unlimited + 2 months after discharge'],
            ['Key trap', 'Assisted living does NOT qualify', 'Assisted living does NOT qualify'],
          ]}
        />
      </Section>

      <Section>
        <h2 className={styles.sectionTitle}>Qualifying Facilities</h2>
        <p className={styles.body}><strong>Qualifies for both OEP-I and LTC:</strong></p>
        <ul className={styles.list}>
          <li>Skilled nursing facilities (SNFs)</li>
          <li>Nursing homes</li>
          <li>Intermediate care facilities for the mentally disabled</li>
          <li>Psychiatric hospitals</li>
          <li>Rehabilitation hospitals</li>
          <li>Long-term care hospitals</li>
        </ul>
        <p className={styles.body}><strong>Does NOT qualify:</strong></p>
        <ul className={styles.list}>
          <li>Assisted living facilities</li>
          <li>Residential care homes</li>
          <li>Group homes</li>
          <li>Independent living communities</li>
        </ul>
      </Section>
    </>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   CATEGORY 6: INVOLUNTARY DISENROLLMENT
   ═══════════════════════════════════════════════════════════════════════ */

function InvoluntaryDisenrollmentContent() {
  return (
    <>
      <Section>
        <SepCode
          code="LCC"
          name="Loss of Creditable Coverage"
          description="The beneficiary lost other creditable health or drug coverage &mdash; VA, TRICARE, employer, ACA &mdash; and now needs a Medicare plan."
          trigger="Involuntary loss of creditable coverage. VA benefits ending, TRICARE ending, employer coverage ending, ACA marketplace coverage ending. The loss must be involuntary &mdash; if the beneficiary stopped paying premiums and lost coverage, LCC does NOT apply."
          window="Two months from the date of loss OR the date of notification &mdash; whichever is later."
          qualifies="Beneficiaries who involuntarily lost creditable coverage. Can enroll in MA, MAPD, or PDP."
          mistakes={[
            'Using LCC when the beneficiary forfeited coverage by not paying premiums &mdash; that is voluntary, not involuntary.',
            'Calculating from the loss date when the notification date was later.',
          ]}
          talkTrack="Since you just lost your coverage, you qualify for a special enrollment window right now. We need to get you into a plan before that window closes. When exactly did that coverage end?"
        >
          <ComplianceCallout>
            LCC has a carrier benchmark of approximately 4% of enrollments. The coverage loss must be involuntary &mdash; the plan did not renew, Medicare terminated the plan&rsquo;s contract, or the beneficiary lost the coverage through no fault of their own.
          </ComplianceCallout>
        </SepCode>
      </Section>

      <Section>
        <SepCode
          code="INV"
          name="Involuntary Loss SEP"
          description="The beneficiary lost their Medicare Advantage plan because their Part B was terminated or dropped. They need a PDP to keep drug coverage."
          trigger="Loss of MA/MAPD plan because Part B was terminated. Without Part B, you cannot be in Medicare Advantage."
          window="From notice of Part B loss, through the plan&rsquo;s grace period, plus two months after coverage ends."
          qualifies="Beneficiaries who lost MA/MAPD due to Part B termination. Must enroll in PDP only &mdash; cannot re-enter MA until Part B is reinstated."
          mistakes={[
            'Trying to enroll in MA when Part B is not active.',
            'Not realizing that when Part B is eventually restored, ICEP or another qualifying SEP will apply for MA re-enrollment.',
          ]}
          talkTrack="It looks like your Part B was dropped, which means your Medicare Advantage plan ended too. The important thing right now is to get you into a drug plan so your prescriptions are covered. When Part B gets reinstated, we can look at getting you back into an Advantage plan."
        />
      </Section>

      <Section>
        <SepCode
          code="REC"
          name="Receivership SEP"
          description="The beneficiary&rsquo;s insurance carrier has been taken over by the state due to financial instability. They can switch plans at any time until the situation resolves."
          trigger="State financial receivership of the beneficiary&rsquo;s plan carrier. This is rare."
          window="From the effective date of state action until the action ends or the beneficiary enrolls in a new plan &mdash; whichever comes first."
          qualifies="Beneficiaries whose current carrier is under active state financial receivership. Can switch to any MA, MAPD, or PDP."
          mistakes={[
            'Confusing REC with EOC &mdash; REC is a financial solvency issue, EOC is a carrier market exit.',
          ]}
          talkTrack="Your current carrier is going through some financial changes, and CMS is offering you the ability to switch to any other plan right now. Let\u2019s find one that maintains the coverage you need."
        />
      </Section>

      <Section>
        <SepCode
          code="EOC"
          name="Plan Non-Renewal SEP"
          description="The beneficiary&rsquo;s carrier decided to stop offering their plan in their area. The plan is ending, and they need a new one."
          trigger="Carrier non-renewal. The carrier decided to leave the beneficiary&rsquo;s service area. The beneficiary should have received an Annual Notice of Change (ANOC) letter."
          window="December 8th through the end of February."
          qualifies="Beneficiaries whose plan was non-renewed by the carrier. Can enroll in any MA, MAPD, or PDP."
          mistakes={[
            'Confusing EOC with MYT &mdash; EOC is carrier-initiated (they chose to leave), MYT is CMS-initiated (Medicare terminated the contract).',
            'Beneficiaries who do not act may be defaulted to Original Medicare.',
          ]}
          talkTrack="It looks like your current plan is actually leaving your area &mdash; which means you automatically qualify for a special enrollment window to get into a new plan. Let\u2019s make sure we get you set up before your current coverage ends."
        />
      </Section>

      <Section>
        <SepCode
          code="MYT"
          name="Medicare Contract Termination"
          description="Medicare itself terminated the contract with the beneficiary&rsquo;s plan carrier. CMS-initiated, not carrier-initiated."
          trigger="CMS has terminated its contract with the plan carrier. This is a CMS enforcement action."
          window="Two months before the contract end date plus one full month after."
          qualifies="Beneficiaries whose plan carrier&rsquo;s contract was terminated by CMS. Can enroll in any MA, MAPD, or PDP."
          mistakes={[
            'Confusing MYT with EOC. EOC = carrier chose to leave. MYT = Medicare terminated the contract.',
          ]}
          talkTrack="Medicare has ended the contract with your current plan\u2019s carrier, so your coverage will be changing. The good news is you have a window right now to choose a new plan. Let me help you find the right one."
        />
      </Section>

      <Section>
        <h2 className={styles.sectionTitle}>EOC vs MYT</h2>
        <ComparisonTable
          headers={['', 'EOC', 'MYT']}
          rows={[
            ['The one question', 'Did the carrier choose to leave?', 'Did Medicare terminate the contract?'],
            ['Who initiated?', 'Carrier decided to exit the market', 'CMS enforcement action'],
            ['Window', 'Dec 8 through end of February', '2 months before + 1 month after contract end'],
            ['Beneficiary notice', 'ANOC letter from carrier', 'Formal CMS letter'],
            ['Key trap', 'Overlaps with OEP for existing MA members', 'Enrollment takes effect after contract end date'],
          ]}
        />
      </Section>

      <Section>
        <h2 className={styles.sectionTitle}>LCC vs LEC</h2>
        <ComparisonTable
          headers={['', 'LCC', 'LEC']}
          rows={[
            ['The one question', 'Did they lose creditable coverage that is NOT employer-based?', 'Did they lose employer/union/COBRA coverage?'],
            ['Covers', 'VA, TRICARE, ACA, other creditable coverage', 'Employer, union, COBRA specifically'],
            ['Window', '2 months from loss or notification (later)', 'Month of loss + 2 months'],
            ['Key trap', 'NOT valid if they stopped paying premiums', 'COBRA expiration counts'],
            ['Overlap', 'May overlap with MOV', 'May overlap with ICEP'],
          ]}
        />
      </Section>
    </>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   CATEGORY 7: VOLUNTARY CHANGES
   ═══════════════════════════════════════════════════════════════════════ */

function VoluntaryChangesContent() {
  return (
    <>
      <Section>
        <SepCode
          code="LEC"
          name="Loss of Employer Coverage SEP"
          description="The beneficiary lost employer, union, or COBRA coverage &mdash; through retirement, layoff, COBRA expiration, or death of a covered spouse."
          trigger="Loss of employer, union, or COBRA coverage for any reason. Retirement. Layoff. COBRA expiration. Death of a spouse who carried the employer coverage. All count."
          window="Month of loss plus two full calendar months."
          qualifies="Beneficiaries who lost employer/union/COBRA coverage. Can enroll in MA, MAPD, or PDP."
          mistakes={[
            'Calculating from the call date instead of the coverage end date.',
            'Not recognizing COBRA expiration as a qualifying loss.',
            'Not checking whether Part B was also delayed (ICEP may apply simultaneously).',
          ]}
          talkTrack="Because your employer coverage just ended, you qualify for a Special Enrollment Period right now. That gives you a window from when that coverage ended to get into a new Medicare plan. When exactly did your coverage terminate?"
        >
          <Takeaway>
            <strong>Delayed Part B forms to know:</strong> The <strong>CMS-L564</strong> (Request for Employment Information) is completed by the employer to verify coverage. The <strong>CMS-40B</strong> (Application for Enrollment in Medicare Part B) is the Part B enrollment form submitted to Social Security. Knowing these form numbers builds credibility on the call.
          </Takeaway>
        </SepCode>
      </Section>

      <Section>
        <SepCode
          code="OSD"
          name="Cost Plan Disenrollment SEP"
          description="The beneficiary dropped a Medicare Cost Plan that included drug coverage and needs a standalone PDP."
          trigger="Dropping a Medicare Cost Plan that included Part D drug coverage and returning to Original Medicare. Cost Plans are a distinct plan type &mdash; not Medicare Advantage &mdash; operating in limited markets, primarily in the Midwest."
          window="Two full calendar months after the month they drop the Cost Plan."
          qualifies="Beneficiaries who dropped a Cost Plan with drug coverage. Must enroll in PDP only."
          mistakes={[
            'Not knowing what a Cost Plan is (they are rare and market-specific).',
            'Trying to use OSD for MA enrollment.',
          ]}
          talkTrack="Since you left your Cost Plan, you have a two-month window to get into a drug plan so your prescriptions stay covered. Let me find the best option for your medications."
        />
      </Section>

      <Section>
        <SepCode
          code="12G"
          name="12-Month Trial Right (Medigap)"
          description="The beneficiary dropped a Medigap plan to join their very first MA/MAPD plan and now wants to go back. They have 12 months to return to Original Medicare plus Medigap plus PDP."
          trigger="The beneficiary specifically dropped a Medicare Supplement (Medigap) policy to enroll in their first-ever MA/MAPD plan. Now they want to return."
          window="12 months from the MA plan effective date."
          qualifies="First-time MA enrollees who dropped a Medigap plan to join MA. Returns them to Original Medicare plus Medigap (with guaranteed issue rights varying by state) plus standalone PDP."
          mistakes={[
            'Confusing 12G with 12J. The key difference: 12G requires a prior Medigap plan that was dropped. 12J does not require Medigap history.',
          ]}
          talkTrack="Since you dropped your Medigap plan to try Medicare Advantage for the first time and it has been less than 12 months, you have the right to go back to Original Medicare with your supplement. Let me help you get that set up."
        >
          <Takeaway>
            <strong>For agents who moved clients last AEP:</strong> If you sold MAPD plans during the most recent AEP and any of those clients had Medigap before, those clients have a 12G trial right through the end of the current calendar year. Proactively check in &mdash; if they are happy, you solidify the relationship. If they are not, you help them exercise 12G before the window closes rather than losing them to another agent.
          </Takeaway>
        </SepCode>
      </Section>

      <Section>
        <SepCode
          code="12J"
          name="Age-65 Trial Right"
          description="The beneficiary enrolled in MA/MAPD for the first time when they turned 65 and wants to go back to Original Medicare plus PDP within 12 months."
          trigger="First-time MA/MAPD enrollment upon turning 65."
          window="12 months from the initial MA plan effective date."
          qualifies="First-time age-65 MA enrollees. Must also enroll in a standalone PDP &mdash; PDP enrollment is mandatory under 12J."
          mistakes={[
            'Not enrolling in a PDP &mdash; it is mandatory under 12J.',
            'Confusing with 12G &mdash; 12J does not require a prior Medigap plan.',
          ]}
          talkTrack="Since you enrolled in Medicare Advantage for the first time when you turned 65 and it has been less than a year, you have the option to return to Original Medicare. We will also need to set you up with a drug plan. Let me walk you through the options."
        />
      </Section>

      <Section>
        <SepCode
          code="CDC"
          name="Creditable Drug Coverage SEP"
          description="The beneficiary is in an MAPD plan but also has other creditable drug coverage (VA, TRICARE, employer retiree drug) &mdash; they can move to an MA-only plan to drop the duplicate drug coverage."
          trigger="Beneficiary enrolled in MAPD (or PDP) who has other active creditable drug coverage."
          window="Anytime. No window restriction."
          qualifies="Beneficiaries in MAPD or PDP with other active creditable drug coverage. Must move OUT of MAPD/PDP and INTO an MA-only plan."
          mistakes={[
            'Trying to use CDC to switch between MAPD plans &mdash; the destination must be MA-only.',
          ]}
          talkTrack="Since you already have drug coverage through your VA benefits, you are actually paying for duplicate drug coverage in your current plan. We can move you to a Medicare Advantage plan without the drug component, which could save you money. And we can do this at any time."
        />
      </Section>

      <Section>
        <SepCode
          code="DIF"
          name="Government Enrollment SEP"
          description="Medicare automatically enrolled the beneficiary in a plan without their choice. They have three months to switch to whatever they actually want."
          trigger='Government auto-enrollment. Look for an "X" indicator next to the plan code in MARx.'
          window="Three months from the auto-enrollment effective date."
          qualifies="Beneficiaries who were automatically enrolled by the government."
          mistakes={[
            'Not checking for the "X" indicator in MARx. Common with low-income beneficiaries automatically assigned to benchmark LIS drug plans.',
          ]}
          talkTrack="It looks like Medicare placed you in this plan automatically &mdash; you did not choose it yourself. That means you have a three-month window right now to switch to whatever plan actually fits your needs."
        />
      </Section>

      <Section>
        <SepCode
          code="ACC"
          name="Accessible Format SEP"
          description="The beneficiary requested plan materials in an accessible format (large print, Braille, audio) and did not receive them in time to make an enrollment decision."
          trigger="The beneficiary requested accessible format materials and either did not receive them or received them too late."
          window="Equal to the time lost waiting for accessible materials."
          qualifies="Beneficiaries who genuinely need accessible format materials and were unable to make a timely enrollment decision because of the delay."
          mistakes={[
            'Using ACC as a convenience code. The beneficiary must have actually requested accessible materials and been genuinely prevented from enrolling.',
          ]}
          talkTrack="It sounds like you needed those materials in a different format and did not get them in time to make your decision. That actually qualifies you for additional time to make your enrollment choice."
        >
          <ComplianceCallout>
            <strong>ACC appears on every carrier&rsquo;s compliance watchlist</strong> with a benchmark of approximately 3% of enrollments. Do NOT use ACC as a convenience code. The beneficiary must have actually requested accessible materials and been genuinely prevented from enrolling because they did not receive them in time.
          </ComplianceCallout>
        </SepCode>
      </Section>

      <Section>
        <h2 className={styles.sectionTitle}>12G vs 12J</h2>
        <ComparisonTable
          headers={['', '12G', '12J']}
          rows={[
            ['The one question', 'Did they drop a Medigap plan to join MA?', 'Did they join MA for the first time at 65?'],
            ['Prior Medigap required?', 'Yes \u2014 must have dropped Medigap to join MA', 'No \u2014 no Medigap history needed'],
            ['PDP required?', 'Yes', 'Yes \u2014 mandatory'],
            ['Window', '12 months from MA effective date', '12 months from MA effective date'],
            ['Returns to', 'Original Medicare + Medigap (guaranteed issue) + PDP', 'Original Medicare + PDP'],
          ]}
        />
      </Section>

      <Section>
        <Takeaway>
          <strong>Trial Right Context:</strong> The trial right (12G/12J) exists because Medicare wants beneficiaries to feel safe trying Medicare Advantage without permanently giving up their Medigap or Original Medicare options. For agents, this means every first-time MA enrollment you make during AEP has a built-in trial right for the following year. Know which of your clients have active trial rights, check in with them, and you will either retain a satisfied client or help a dissatisfied one before they leave on their own.
        </Takeaway>
      </Section>
    </>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   CATEGORY 8: STAR RATINGS
   ═══════════════════════════════════════════════════════════════════════ */

function StarRatingsContent() {
  return (
    <>
      <Section>
        <SepCode
          code="5ST"
          name="5-Star SEP"
          description="A 5-star rated plan is available in the beneficiary&rsquo;s area, and they can enroll in it outside of AEP."
          trigger="The existence of a CMS 5-star rated MA, MAPD, or PDP in the beneficiary&rsquo;s service area. This is the only SEP that allows year-round enrollment without a qualifying life event &mdash; the &ldquo;event&rdquo; is simply that a top-rated plan exists nearby."
          window="December 8th through November 30th of the following year. Once per calendar year."
          qualifies="Any beneficiary with a 5-star plan available in their ZIP code. One use per year. An individual using this SEP can enroll in an MA-Only or an MAPD plan, even if coming from Original Medicare."
          mistakes={[
            'Not verifying that the plan still holds 5 stars for the current plan year &mdash; designations change annually.',
            'Using 5ST twice in the same year.',
            'Offering 5ST without confirming a 5-star plan actually exists in the beneficiary\u2019s specific ZIP code.',
          ]}
          talkTrack="There is a plan in your area that earned the highest quality rating from Medicare &mdash; five out of five stars. Because of that rating, you can actually enroll in it right now, outside of the normal enrollment windows."
          scenario="A beneficiary calls about their current plan. You check carrier portals and discover a 5-star rated MAPD plan available in their county. Even though it is July and no other SEP seems to apply, 5ST lets them switch. You explain the quality rating and proceed to enrollment."
        >
          <Takeaway>
            <strong>Corresponding PDP 5-Star SEP:</strong> If a beneficiary enrolls in another carrier&rsquo;s MA-Only 5-star PFFS or 5-star cost plan, there is a coordinating Part D SEP that allows enrollment into a PDP &mdash; even if the PDP is not itself a 5-star plan. The window is the month of enrollment plus two months.
          </Takeaway>
        </SepCode>
      </Section>

      <Section>
        <SepCode
          code="LPI"
          name="Low-Performing Plan SEP"
          description="The beneficiary is stuck in a plan that has been rated 2.5 stars or lower for three straight years. They can leave at any time."
          trigger="The beneficiary&rsquo;s current plan has a CMS star rating of 2.5 or lower for three consecutive contract years. CMS designates these as low-performing plans and sends warning notices."
          window="Anytime while enrolled in a low-performing plan. No window restriction."
          qualifies="Beneficiaries currently in a low-performing plan. Must enroll into a plan rated 3 stars or higher &mdash; cannot be moved into another low-performing plan."
          mistakes={[
            'Not checking the plan\u2019s current star rating.',
            'Enrolling the beneficiary into another plan rated below 3 stars &mdash; the destination must be 3 stars or higher.',
          ]}
          talkTrack="Your current plan has been rated below average by Medicare for three years in a row. You do not have to stay in it &mdash; you can switch to a higher-rated plan at any time. Let me show you what is available."
          scenario="A beneficiary calls referencing a letter from CMS about their plan being &ldquo;low-performing.&rdquo; You verify in MARx that their plan is rated 2.0 stars and has been for three consecutive years. LPI applies &mdash; they can switch at any time to a plan rated 3 stars or higher. You find a 4-star plan in their area and enroll them."
        />
      </Section>

      <Section>
        <h2 className={styles.sectionTitle}>Star Rating Quick Reference</h2>
        <ComparisonTable
          headers={['Star Rating', 'Designation', 'What It Means for the Beneficiary']}
          rows={[
            ['5 stars', 'Excellent', 'Other beneficiaries can enroll via 5ST SEP year-round'],
            ['4\u20134.5 stars', 'Above average', 'No special SEP implications'],
            ['3\u20133.5 stars', 'Average', 'No special SEP implications'],
            ['2.5 stars or below (3 years)', 'Low-performing', 'Beneficiary can leave anytime via LPI'],
            ['Below 3 stars (3 years)', 'CMS-granted SEP', 'CMS may directly offer a one-time SEP (agent cannot submit \u2014 direct to 1-800-MEDICARE)'],
          ]}
        />
      </Section>
    </>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   CATEGORY 9: DISASTER EXTENSION
   ═══════════════════════════════════════════════════════════════════════ */

function DisasterExtensionContent() {
  return (
    <>
      <Section>
        <SepCode
          code="DST"
          name="Disaster SEP"
          description="A FEMA-declared disaster prevented the beneficiary from making an enrollment during a window they already had open. The disaster extends that missed window &mdash; it does NOT create a new one."
          trigger="A FEMA-declared disaster or CMS-designated public health emergency affected the beneficiary&rsquo;s area during a time when they had an active enrollment window (AEP, IEP, OEP, or another SEP) and the disaster prevented them from using it."
          window="Duration of the emergency plus two full months after the declared end date."
          qualifies="Beneficiaries who meet ALL FOUR conditions: (1) Were in an area affected by a FEMA declaration, (2) Had an active enrollment window during the disaster period, (3) Were prevented from enrolling because of the disaster, (4) Did NOT use any other SEP since the disaster."
          mistakes={[
            'Treating DST as a standalone SEP. A disaster alone does NOT create a new enrollment window. The beneficiary must have had an existing window that was disrupted.',
            'If a hurricane hit in August but the beneficiary did not have any active SEP during August, DST does not apply.',
            'If the beneficiary used ANY other SEP after the disaster, DST is no longer available.',
            'Proactively marketing or suggesting this SEP &mdash; only use it when the beneficiary raises the situation.',
          ]}
          talkTrack="It sounds like the disaster in your area may have prevented you from enrolling during your window. If that is the case, you may have additional time. Let me check the FEMA declarations for your area and see if we can help."
          scenario="A beneficiary calls in April. A hurricane hit their area in October, during AEP. They were displaced and could not complete their AEP enrollment. They have not used any other SEP since. The FEMA declaration for their county is still active with an end date two months out. DST applies &mdash; the disaster extended their missed AEP window."
        />
      </Section>

      <Section>
        <ComplianceCallout>
          <strong>DST is the most watched SEP.</strong> Carrier compliance teams flag DST usage harder than any other SEP code. The industry benchmark is approximately <strong>15% of enrollments</strong> &mdash; if your DST usage exceeds that threshold, expect an audit.
        </ComplianceCallout>
      </Section>

      <Section>
        <h2 className={styles.sectionTitle}>Three Non-Negotiable Rules</h2>
        <ol className={styles.list} style={{ listStyle: 'decimal' }}>
          <li><strong>Never advertise or market DST.</strong> You cannot send mailers, run ads, or proactively call beneficiaries about disaster SEPs. The beneficiary must raise the situation first.</li>
          <li><strong>The beneficiary must have missed another enrollment period.</strong> DST extends a missed window &mdash; it does not create a new one. Ask: &ldquo;Were you trying to make a plan change during the disaster and were unable to?&rdquo;</li>
          <li><strong>Verify the FEMA declaration.</strong> Confirm the beneficiary&rsquo;s county is covered by an active FEMA declaration and the dates overlap with the enrollment period they missed.</li>
        </ol>
        <div className={styles.blockquote}>
          A senior compliance lead put it plainly: &ldquo;DST is the SEP that gets agents fired fastest. Not because they use it wrong on purpose, but because they assume it is a free enrollment ticket during hurricane season. It is not.&rdquo;
        </div>
      </Section>

      <Section>
        <h2 className={styles.sectionTitle}>When Completing the Application</h2>
        <p className={styles.body}>When a beneficiary qualifies for DST, the application requires two enrollment reasons:</p>
        <ol className={styles.list} style={{ listStyle: 'decimal' }}>
          <li>The election period that they missed (AEP, IEP, OEP, etc.)</li>
          <li>&ldquo;Affected by an emergency or major disaster (as declared by FEMA or a government entity)&rdquo;</li>
        </ol>
        <p className={styles.body}>The proposed enrollment period should be listed as &ldquo;Government entity declared disaster.&rdquo;</p>
      </Section>

      <Section>
        <h2 className={styles.sectionTitle}>DST Pre-Submission Checklist</h2>
        <ul className={styles.list}>
          <li>Is there an active FEMA declaration for the beneficiary&rsquo;s county?</li>
          <li>What were the declaration dates? Do they overlap with an enrollment period?</li>
          <li>Which enrollment period did the beneficiary miss? (AEP, IEP, OEP, or specific SEP)</li>
          <li>Was the beneficiary actually prevented from enrolling by the disaster?</li>
          <li>Has the beneficiary used any other SEP since the disaster?</li>
          <li>Did the beneficiary raise the disaster situation, or did you bring it up? (You should never bring it up)</li>
        </ul>
      </Section>
    </>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   CATEGORY 10: ELECTION PERIODS
   ═══════════════════════════════════════════════════════════════════════ */

function ElectionPeriodsContent() {
  return (
    <>
      <Section>
        <p className={styles.bodyLead}>
          These are not technically SEPs &mdash; they are standing enrollment periods available to all (or most) Medicare beneficiaries on a fixed annual schedule. But you must know them cold because they interact with every SEP you will encounter.
        </p>
      </Section>

      <Section>
        <SepCode
          code="AEP"
          name="Annual Election Period"
          description="The one time every year when every Medicare beneficiary in the country can enroll in, switch, or drop a plan. No qualifying event needed."
          trigger="The calendar. October 15th through December 7th, every year."
          window="October 15th through December 7th. Effective date: January 1st of the following year."
          qualifies="Every Medicare beneficiary in the country. No qualifying event needed."
          mistakes={[
            'The last plan submitted wins &mdash; if someone enrolls three times during AEP, only the final submission counts.',
          ]}
          talkTrack="We are in open enrollment right now, which means we can look at all the plans available to you and get you enrolled today. Whatever we choose will take effect January 1st."
        />
      </Section>

      <Section>
        <SepCode
          code="OEP"
          name="MA Open Enrollment Period"
          description="A three-month window for existing Medicare Advantage members to make one plan change. NOT available to PDP-only or Original Medicare beneficiaries."
          trigger="Being enrolled in a Medicare Advantage plan as of January 1st."
          window="January 1st through March 31st. Effective date: 1st of the following month."
          qualifies="Beneficiaries already enrolled in a Medicare Advantage plan. NOT available to PDP-only or Original Medicare beneficiaries. One change only &mdash; once used, it is gone until next year."
          mistakes={[
            'Wasting OEP on a dual-eligible beneficiary who has INT or DEP available. Those monthly SEPs are better options because OEP is one-and-done, while INT and DEP are repeatable every month.',
          ]}
          talkTrack="Since you are already in a Medicare Advantage plan, you have the option to make one change during this open enrollment window. That change would take effect the first of next month."
        >
          <ComplianceCallout>
            <strong>Important for dual-eligible beneficiaries:</strong> Do NOT waste OEP on a dual-eligible beneficiary who has INT or DEP available. Those monthly SEPs are better options because OEP is one-and-done, while INT and DEP are repeatable every month.
          </ComplianceCallout>
        </SepCode>
      </Section>

      <Section>
        <h2 className={styles.sectionTitle}>SEP Season: April 1 &ndash; October 14</h2>
        <p className={styles.bodyLead}>
          This is not a formal enrollment period &mdash; it is the absence of one. Between MA OEP closing on March 31st and AEP opening on October 15th, the only way to enroll someone is with a valid Special Enrollment Period.
        </p>
        <p className={styles.body}>
          During these six-plus months, agents who understand all 37 SEP codes can still enroll beneficiaries year-round. Agents who only know AEP sit idle for six months.
        </p>
        <h3 className={styles.sectionTitle} style={{ fontSize: '1.125rem' }}>What to Focus on During SEP Season</h3>
        <ul className={styles.list}>
          <li><strong>Discovery mindset</strong> &mdash; every call requires active listening for SEP triggers</li>
          <li><strong>Address mismatches</strong> &mdash; check every caller&rsquo;s address against MARx (MOV)</li>
          <li><strong>Medicaid/LIS status</strong> &mdash; ask on every call (INT/DEP)</li>
          <li><strong>Chronic conditions</strong> &mdash; ask about ongoing health conditions (CSN)</li>
          <li><strong>Coverage changes</strong> &mdash; listen for lost employer coverage, plan endings (LEC/LCC/EOC)</li>
          <li><strong>New-to-Medicare</strong> &mdash; turning 65, delayed Part B, disability aging in (IEP/ICEP/IEP2)</li>
        </ul>
      </Section>

      <Section>
        <h2 className={styles.sectionTitle}>Standard Enrollment Periods Summary</h2>
        <ComparisonTable
          headers={['Period', 'When', 'Who', 'What They Can Do', 'Effective Date']}
          rows={[
            ['IEP', '7 months around 65th birthday', 'Newly eligible', 'Enroll in MAPD or PDP', '1st of eligibility month or following month'],
            ['GEP', 'Jan 1 \u2013 Mar 31', 'Missed IEP', 'Sign up for Part B; enroll in MA/MAPD/PDP', '1st of month after sign-up'],
            ['AEP', 'Oct 15 \u2013 Dec 7', 'All beneficiaries', 'Join, switch, or drop MA/MAPD/PDP', 'January 1 of following year'],
            ['MA OEP', 'Jan 1 \u2013 Mar 31', 'Existing MA/MAPD only', 'One plan change', '1st of following month'],
            ['OEP-N', 'Effectuation month + 2', 'First-time MA/MAPD', 'One plan change', '1st of following month'],
            ['Medigap OEP', '6 months after Part B (age 65+)', 'Enrolling in Part B at 65+', 'Guaranteed issue Medigap', 'Varies'],
            ['SEP Season', 'Apr 1 \u2013 Oct 14', 'Everyone \u2014 with qualifying event', 'Requires valid SEP', 'Varies by SEP'],
          ]}
        />
      </Section>

      <Section>
        <h2 className={styles.sectionTitle}>CMS Election Period Hierarchy</h2>
        <p className={styles.body}>When a beneficiary qualifies for more than one enrollment period, CMS expects you to use the one most beneficial to them:</p>
        <ol className={styles.list} style={{ listStyle: 'decimal' }}>
          <li><strong>IEP/ICEP</strong> &mdash; always takes priority</li>
          <li><strong>MA OEP</strong> &mdash; second priority</li>
          <li><strong>SEP</strong> &mdash; third priority</li>
          <li><strong>AEP</strong> &mdash; fourth priority</li>
          <li><strong>OEP-Institutional</strong> &mdash; when moving into, residing in, or moving out of an institution</li>
        </ol>
        <Takeaway>
          Always use the enrollment period that gives the beneficiary the best effective date and the most plan options.
        </Takeaway>
      </Section>
    </>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════════════ */

export default function SepCategoryContent({ slug }: { slug: string }) {
  const meta = pageMeta[slug]

  if (!meta) {
    notFound()
  }

  const contentMap: Record<string, () => JSX.Element> = {
    'new-to-medicare': NewToMedicareContent,
    'financial-eligibility': FinancialEligibilityContent,
    'location-life-change': LocationLifeChangeContent,
    'chronic-special-needs': ChronicSpecialNeedsContent,
    'institutionalized-ltc': InstitutionalizedLtcContent,
    'involuntary-disenrollment': InvoluntaryDisenrollmentContent,
    'voluntary-changes': VoluntaryChangesContent,
    'star-ratings': StarRatingsContent,
    'disaster-extension': DisasterExtensionContent,
    'election-periods': ElectionPeriodsContent,
  }

  const Content = contentMap[slug]

  return (
    <PageShell signal="neutral">
      {/* Page header */}
      <header className={styles.header}>
        <motion.div
          className={styles.categoryLabel}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.05 }}
        >
          {meta.category}
        </motion.div>

        <motion.h1
          className={`${styles.headline} display-xl`}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.1 }}
        >
          {meta.title}
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.2 }}
        >
          {meta.description}
        </motion.p>
      </header>

      {/* Body content */}
      {Content && <Content />}

      {/* Cross links */}
      <CrossLinks links={meta.crossLinks} />
    </PageShell>
  )
}
