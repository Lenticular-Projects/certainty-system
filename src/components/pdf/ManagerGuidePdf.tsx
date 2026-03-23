import React from 'react'
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer'
import { registerFonts } from '@/lib/pdf/fonts'
import { base, colors, fonts } from '@/lib/pdf/styles'

registerFonts()

/* ------------------------------------------------------------------ */
/* Local styles                                                        */
/* ------------------------------------------------------------------ */

const s = StyleSheet.create({
  /* Time block card */
  timeBlock: {
    padding: 10,
    paddingLeft: 12,
    marginBottom: 6,
    borderLeftWidth: 3,
    borderLeftColor: colors.sage,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.ink10,
  },
  timeBlockHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  timeBlockTime: {
    fontFamily: fonts.body,
    fontSize: 10,
    fontWeight: 700,
    color: colors.sage,
    marginRight: 8,
  },
  timeBlockName: {
    fontFamily: fonts.heading,
    fontSize: 11,
    fontWeight: 700,
    color: colors.ink,
  },
  timeBlockMethod: {
    fontFamily: fonts.body,
    fontSize: 7.5,
    fontWeight: 700,
    letterSpacing: 0.5,
    textTransform: 'uppercase' as const,
    color: colors.ink60,
    marginBottom: 6,
  },
  /* Script callout */
  scriptBox: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    paddingLeft: 12,
    marginTop: 4,
    marginBottom: 4,
    borderLeftWidth: 3,
    borderLeftColor: colors.sage,
  },
  scriptLabel: {
    fontFamily: fonts.body,
    fontSize: 7.5,
    fontWeight: 700,
    letterSpacing: 0.8,
    textTransform: 'uppercase' as const,
    color: colors.sage,
    marginBottom: 4,
  },
  scriptText: {
    fontFamily: fonts.heading,
    fontStyle: 'italic',
    fontSize: 10,
    lineHeight: 1.55,
    color: colors.ink,
  },
  /* Facilitator note callout */
  facilitatorBox: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    paddingLeft: 12,
    marginTop: 4,
    marginBottom: 4,
    borderLeftWidth: 3,
    borderLeftColor: colors.amber,
  },
  facilitatorLabel: {
    fontFamily: fonts.body,
    fontSize: 7.5,
    fontWeight: 700,
    letterSpacing: 0.8,
    textTransform: 'uppercase' as const,
    color: colors.amber,
    marginBottom: 4,
  },
  facilitatorText: {
    fontSize: 9,
    lineHeight: 1.55,
    color: colors.ink,
  },
  /* Screen instruction callout */
  screenBox: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    paddingLeft: 12,
    marginTop: 4,
    marginBottom: 4,
    borderLeftWidth: 3,
    borderLeftColor: colors.blue,
  },
  screenLabel: {
    fontFamily: fonts.body,
    fontSize: 7.5,
    fontWeight: 700,
    letterSpacing: 0.8,
    textTransform: 'uppercase' as const,
    color: colors.blue,
    marginBottom: 4,
  },
  screenText: {
    fontSize: 9,
    lineHeight: 1.55,
    color: colors.ink,
  },
  /* Transition phrase */
  transitionBox: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    paddingLeft: 12,
    marginTop: 4,
    marginBottom: 4,
    borderLeftWidth: 2,
    borderLeftColor: colors.ink20,
  },
  transitionLabel: {
    fontFamily: fonts.body,
    fontSize: 7,
    fontWeight: 700,
    letterSpacing: 0.8,
    textTransform: 'uppercase' as const,
    color: colors.ink60,
    marginBottom: 3,
  },
  transitionText: {
    fontFamily: fonts.heading,
    fontStyle: 'italic',
    fontSize: 9,
    lineHeight: 1.45,
    color: colors.ink60,
  },
  /* Checklist item */
  checkRow: {
    flexDirection: 'row',
    marginBottom: 4,
    paddingLeft: 4,
  },
  checkBox: {
    width: 10,
    height: 10,
    borderWidth: 1,
    borderColor: colors.ink20,
    borderRadius: 2,
    marginRight: 8,
    marginTop: 2,
  },
  checkText: {
    fontSize: 9,
    lineHeight: 1.5,
    color: colors.ink,
    flex: 1,
  },
  /* Drill scenario */
  drillCard: {
    padding: 8,
    paddingLeft: 10,
    marginBottom: 4,
    borderLeftWidth: 2,
    borderLeftColor: colors.ink10,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.ink10,
  },
  drillNumber: {
    fontFamily: fonts.body,
    fontSize: 8,
    fontWeight: 700,
    color: colors.sage,
    marginBottom: 2,
  },
  drillPrompt: {
    fontFamily: fonts.heading,
    fontStyle: 'italic',
    fontSize: 9.5,
    lineHeight: 1.45,
    color: colors.ink,
    marginBottom: 4,
  },
  drillAnswer: {
    fontSize: 9,
    lineHeight: 1.45,
    color: colors.ink,
  },
  drillCode: {
    fontWeight: 700,
    color: colors.sage,
  },
  /* Quiz card */
  quizCard: {
    padding: 8,
    paddingLeft: 10,
    marginBottom: 4,
    borderLeftWidth: 2,
    borderLeftColor: colors.ink10,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.ink10,
  },
  quizQuestion: {
    fontSize: 9,
    lineHeight: 1.5,
    color: colors.ink,
    marginBottom: 4,
  },
  quizAnswer: {
    fontSize: 9,
    lineHeight: 1.45,
    color: colors.ink,
  },
  quizExplanation: {
    fontSize: 8.5,
    lineHeight: 1.45,
    color: colors.ink60,
    fontStyle: 'italic',
    marginTop: 3,
  },
  /* Roleplay card */
  roleplayCard: {
    padding: 10,
    paddingLeft: 12,
    marginBottom: 8,
    borderLeftWidth: 3,
    borderLeftColor: colors.sage,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.ink10,
  },
  roleplayTitle: {
    fontFamily: fonts.heading,
    fontSize: 11,
    fontWeight: 700,
    color: colors.ink,
    marginBottom: 6,
  },
  roleplayBody: {
    fontSize: 9,
    lineHeight: 1.6,
    color: colors.ink,
    marginBottom: 4,
  },
  roleplayNote: {
    fontSize: 8.5,
    lineHeight: 1.5,
    color: colors.ink60,
    fontStyle: 'italic',
  },
  /* Red line cards */
  redLineCard: {
    padding: 10,
    paddingLeft: 12,
    marginBottom: 6,
    borderLeftWidth: 3,
    borderLeftColor: colors.red,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.ink10,
  },
  redLineNum: {
    fontFamily: fonts.heading,
    fontSize: 9,
    fontWeight: 700,
    color: colors.red,
    marginBottom: 2,
  },
  redLineRule: {
    fontSize: 10,
    fontWeight: 700,
    color: colors.ink,
    marginBottom: 4,
  },
  redLineDetail: {
    fontSize: 9,
    lineHeight: 1.55,
    color: colors.ink60,
  },
  /* Benchmark table */
  benchmarkRow: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: colors.ink10,
    paddingVertical: 5,
    paddingHorizontal: 4,
  },
  benchmarkHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.ink20,
    paddingVertical: 5,
    paddingHorizontal: 4,
  },
  colCode: { width: '40%' },
  colBench: { width: '60%' },
  /* Timing columns */
  timingRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 10,
  },
  timingCol: {
    flex: 1,
    padding: 8,
    paddingLeft: 10,
    borderLeftWidth: 2,
    borderLeftColor: colors.ink10,
  },
  timingLabel: {
    fontSize: 7,
    fontWeight: 700,
    letterSpacing: 0.8,
    textTransform: 'uppercase' as const,
    marginBottom: 6,
  },
  /* Emphasis card */
  emphasisCard: {
    padding: 10,
    paddingLeft: 12,
    marginBottom: 8,
    borderLeftWidth: 4,
    borderLeftColor: colors.sage,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.ink10,
  },
  /* Key points */
  keyPointRow: {
    flexDirection: 'row',
    marginBottom: 4,
    paddingLeft: 4,
  },
  keyDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.sage,
    marginTop: 5,
    marginRight: 8,
  },
  keyText: {
    fontSize: 9,
    lineHeight: 1.5,
    color: colors.ink,
    flex: 1,
  },
  /* URL link list */
  urlRow: {
    flexDirection: 'row',
    marginBottom: 4,
    paddingLeft: 4,
  },
  urlDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.blue,
    marginTop: 5,
    marginRight: 8,
  },
  urlText: {
    fontSize: 9,
    lineHeight: 1.5,
    color: colors.blue,
    flex: 1,
  },
})

/* ------------------------------------------------------------------ */
/* Helper components                                                   */
/* ------------------------------------------------------------------ */

function PageFooter({ label, pageNum }: { label: string; pageNum?: boolean }) {
  return (
    <View style={base.pageFooter} fixed>
      <Text>{label}</Text>
      <Text render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`} />
    </View>
  )
}

function Bullet({ children }: { children: string }) {
  return (
    <View style={s.keyPointRow}>
      <View style={s.keyDot} />
      <Text style={s.keyText}>{children}</Text>
    </View>
  )
}

function UrlBullet({ children }: { children: string }) {
  return (
    <View style={s.urlRow}>
      <View style={s.urlDot} />
      <Text style={s.urlText}>{children}</Text>
    </View>
  )
}

function CheckItem({ children }: { children: string }) {
  return (
    <View style={s.checkRow}>
      <View style={s.checkBox} />
      <Text style={s.checkText}>{children}</Text>
    </View>
  )
}

function SayThis({ children }: { children: string }) {
  return (
    <View style={s.scriptBox}>
      <Text style={s.scriptLabel}>SAY THIS</Text>
      <Text style={s.scriptText}>&ldquo;{children}&rdquo;</Text>
    </View>
  )
}

function FacilitatorNote({ children }: { children: string }) {
  return (
    <View style={s.facilitatorBox}>
      <Text style={s.facilitatorLabel}>FACILITATOR NOTE</Text>
      <Text style={s.facilitatorText}>{children}</Text>
    </View>
  )
}

function ScreenInstruction({ children }: { children: string }) {
  return (
    <View style={s.screenBox}>
      <Text style={s.screenLabel}>ON SCREEN</Text>
      <Text style={s.screenText}>{children}</Text>
    </View>
  )
}

function Transition({ children }: { children: string }) {
  return (
    <View style={s.transitionBox}>
      <Text style={s.transitionLabel}>TRANSITION</Text>
      <Text style={s.transitionText}>&ldquo;{children}&rdquo;</Text>
    </View>
  )
}

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const drillScenarios = [
  { num: 1, prompt: 'I was just diagnosed with diabetes last month.', answer: 'CSN', detail: '(verify C-SNP in their county)' },
  { num: 2, prompt: 'I retired from Ford two weeks ago and my benefits ended.', answer: 'LEC', detail: '(month of loss + 2 months)' },
  { num: 3, prompt: 'I just moved from Ohio to Florida.', answer: 'MOV', detail: '(verify address change)' },
  { num: 4, prompt: 'I\'m on Medicaid.', answer: 'INT', detail: 'if full Medicaid, DEP if partial or LIS' },
  { num: 5, prompt: 'My husband passed away and I was on his employer insurance.', answer: 'LEC', detail: '(death of covered spouse)' },
  { num: 6, prompt: 'I\'m turning 65 next month.', answer: 'IEP', detail: '(7-month window)' },
  { num: 7, prompt: 'I have COPD and I\'m on oxygen.', answer: 'CSN', detail: '(chronic lung disorder)' },
  { num: 8, prompt: 'I got a letter saying my plan is being discontinued.', answer: 'EOC', detail: '(Dec 8 \u2013 end of Feb)' },
  { num: 9, prompt: 'I\'m in a skilled nursing facility recovering from hip surgery.', answer: 'OEP-I', detail: '(verify facility type)' },
  { num: 10, prompt: 'My COBRA coverage just ran out.', answer: 'LEC', detail: '(COBRA expiration counts)' },
  { num: 11, prompt: 'I lost my VA coverage.', answer: 'LCC', detail: '(not employer = LCC, not LEC)' },
  { num: 12, prompt: 'I have heart failure and my doctor says I need a special plan.', answer: 'CSN', detail: '(heart failure is qualifying)' },
]

const quizQuestions = [
  {
    num: 1,
    question: 'Beneficiary has Part A effective January 2024 and Part B effective May 2024. Same dates or different? What code?',
    answer: 'Different dates. ICEP',
    explanation: 'Different Part A/B effective dates mean ICEP, not IEP. This is the most common confusion point for new agents.',
  },
  {
    num: 2,
    question: 'Beneficiary says they\'re on Medicaid. They get full benefits — doctor visits, hospital, everything covered. INT or DEP?',
    answer: 'Full Medicaid. INT — enroll into D-SNP.',
    explanation: 'Full Medicaid = INT. They get dual-eligible benefits through a D-SNP plan. This is year-round, repeatable.',
  },
  {
    num: 3,
    question: 'Beneficiary says they get Extra Help with their prescriptions but doesn\'t have full Medicaid. INT or DEP?',
    answer: 'LIS only. DEP — enroll into PDP.',
    explanation: 'No full Medicaid means they don\'t qualify for INT. DEP covers LIS recipients. Also year-round, repeatable.',
  },
  {
    num: 4,
    question: 'Beneficiary moved from Texas to Arizona AND lost their employer coverage when they relocated. MOV or LEC?',
    answer: 'Both! Check for both SEPs.',
    explanation: 'Two life events = two possible SEPs. Always check for all applicable codes, not just the first one you find.',
  },
  {
    num: 5,
    question: 'Beneficiary lost their TRICARE coverage. LCC or LEC?',
    answer: 'Not employer. LCC',
    explanation: 'TRICARE is government/military, not employer-sponsored. Non-employer coverage loss = LCC.',
  },
  {
    num: 6,
    question: 'Beneficiary lost their employer insurance because they retired. LCC or LEC?',
    answer: 'Employer. LEC',
    explanation: 'Employer-sponsored coverage loss = LEC. Get the exact last day of coverage.',
  },
  {
    num: 7,
    question: 'Beneficiary dropped their Medigap Plan F last AEP to try Medicare Advantage for the first time. It\'s been 8 months. 12G or 12J?',
    answer: 'Had Medigap. 12G',
    explanation: 'Had Medigap before switching to MA = 12G trial right. Within 12 months they can switch back.',
  },
]

const benchmarks = [
  { code: 'DST', bench: '~15%' },
  { code: 'MOV', bench: '~10%' },
  { code: 'LCC', bench: '~4%' },
  { code: 'ACC', bench: '~3%' },
  { code: 'PAP', bench: '~5%' },
]

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export function ManagerGuidePdf() {
  const footer = 'Mega Care / Certainty System — Manager\u2019s Facilitator Guide'

  return (
    <Document title="SEP Training Session — Manager\u2019s Facilitator Guide" author="Mega Care Insurance">

      {/* ============================================================ */}
      {/* COVER PAGE                                                    */}
      {/* ============================================================ */}
      <Page size="LETTER" style={base.coverPage}>
        <Text style={base.eyebrow}>MANAGER&apos;S FACILITATOR GUIDE</Text>
        <Text style={base.coverTitle}>SEP Training Session</Text>
        <Text style={base.coverSubtitle}>
          Everything you need to run a 2-hour SEP training session for your team.
          Agents walk out knowing the money codes, recognizing triggers on calls,
          and understanding the compliance lines they cannot cross.
        </Text>
        <View style={{ marginTop: 24 }}>
          <Text style={[base.body, { fontWeight: 700, marginBottom: 4 }]}>Session length: 2 hours</Text>
          <Text style={[base.body, { marginBottom: 2 }]}>Audience: Licensed Medicare Advantage sales agents</Text>
          <Text style={base.body}>
            Goal: Agents walk out knowing the money codes, recognizing triggers on calls, and understanding
            the compliance lines they cannot cross.
          </Text>
        </View>
        <View style={{ marginTop: 'auto' as unknown as number }}>
          <Text style={[base.coverMeta, { fontSize: 11, fontWeight: 700, color: colors.ink, marginBottom: 4 }]}>Mega Care Insurance</Text>
          <Text style={base.coverMeta}>Powered by The Certainty System</Text>
        </View>
      </Page>

      {/* ============================================================ */}
      {/* BEFORE THE SESSION                                            */}
      {/* ============================================================ */}
      <Page size="LETTER" style={base.page}>
        <Text style={base.eyebrow}>PREPARATION</Text>
        <Text style={base.h1}>Before the Session</Text>
        <View style={base.divider} />

        <View style={s.emphasisCard}>
          <Text style={[base.body, { fontWeight: 700, marginBottom: 4 }]}>First time running this training?</Text>
          <Text style={[base.body, { marginBottom: 0 }]}>
            Read through the entire guide once before the session. The exercises are designed to be fast-paced
            &mdash; you need to know the answers before the agents do. The drill scenarios (pages 5-6) are
            especially important to rehearse. If you hesitate, they will too.
          </Text>
        </View>

        <Text style={base.h2}>Technology Setup Checklist</Text>
        <CheckItem>Laptop connected to projector/TV (test it before agents arrive)</CheckItem>
        <CheckItem>Open The Certainty System in your browser with four tabs ready:</CheckItem>
        <View style={{ paddingLeft: 26, marginBottom: 4 }}>
          <UrlBullet>/sep-check &mdash; SEP verification tool (used during CSN demo)</UrlBullet>
          <UrlBullet>/sep &mdash; Full SEP guide pages (reference during deep dives)</UrlBullet>
          <UrlBullet>/sep-compliance &mdash; Compliance checklist (used during compliance section)</UrlBullet>
          <UrlBullet>/sep/quick-reference &mdash; Money Codes reference (used during Hour 1 walkthrough)</UrlBullet>
        </View>
        <CheckItem>Test your audio if you plan to play any call recordings</CheckItem>
        <CheckItem>Confirm WiFi is working &mdash; the live demo requires an internet connection</CheckItem>

        <Text style={[base.h2, { marginTop: 20 }]}>Documents to Have Printed</Text>
        <CheckItem>Money Codes quick-reference sheet &mdash; one per agent (this is their desk reference after training)</CheckItem>
        <CheckItem>Compliance cheat sheet &mdash; one per agent (their pre-submission checklist)</CheckItem>
        <CheckItem>Optional: SEP Training Guide PDFs for agents who want the full deep dive on all codes</CheckItem>

        <Text style={[base.h2, { marginTop: 20 }]}>Room Setup</Text>
        <Bullet>Place one printed Money Codes sheet and one compliance cheat sheet face-down at each seat</Bullet>
        <Bullet>Agents should be able to see the projected screen and their printed cheat sheets simultaneously</Bullet>
        <Bullet>Whiteboard or flip chart available for the &ldquo;What Did They Say?&rdquo; drill (to tally scores if you want to make it competitive)</Bullet>
        <Bullet>Keep it informal &mdash; this is not a lecture, it&apos;s pattern recognition training</Bullet>

        <Text style={[base.h2, { marginTop: 20 }]}>Your Mindset Going In</Text>
        <View style={s.emphasisCard}>
          <Text style={base.body}>
            This is not &ldquo;here are 37 codes, memorize them.&rdquo; This is &ldquo;here are the 5-6 codes
            that make you money, and here&apos;s how to recognize them on a live call.&rdquo;
          </Text>
          <Text style={[base.body, { marginBottom: 0 }]}>
            If agents leave knowing CSN, LEC, MOV, INT/DEP, and the three compliance lines they can&apos;t
            cross &mdash; the session was a success. Everything else is bonus.
          </Text>
        </View>

        <PageFooter label={footer} />
      </Page>

      {/* ============================================================ */}
      {/* HOUR 1: FOUNDATION + THE MONEY CODES                         */}
      {/* ============================================================ */}
      <Page size="LETTER" style={base.page}>
        <Text style={base.eyebrow}>HOUR 1</Text>
        <Text style={base.h1}>Foundation + The Money Codes</Text>
        <View style={base.divider} />

        {/* 0:00 - 0:10 */}
        <View style={s.timeBlock}>
          <View style={s.timeBlockHeader}>
            <Text style={s.timeBlockTime}>0:00 &ndash; 0:10</Text>
            <Text style={s.timeBlockName}>Why SEPs Matter</Text>
          </View>
          <Text style={s.timeBlockMethod}>TALK</Text>

          <ScreenInstruction>
            No screen needed for this section. Keep the projector on the Certainty System homepage or turn it off.
            You want all eyes on you for this opener.
          </ScreenInstruction>

          <FacilitatorNote>
            Stand up for this. Don&apos;t sit behind a desk. Make eye contact around the room before you start
            speaking. This opening sets the tone for the entire session &mdash; if you deliver it with energy,
            the room will stay engaged. If you read it flat, you&apos;ll lose them.
          </FacilitatorNote>

          <Text style={base.body}>
            Key message: AEP ends December 7th. From April 1st through October 14th, there is no open
            enrollment. If a beneficiary does not have a valid SEP, you cannot enroll them. Period.
            That means from April to October, your ability to make money depends entirely on whether you
            can identify SEPs on inbound calls.
          </Text>

          <SayThis>
            SEP season is where the agents who know their stuff separate themselves from everyone else.
            Most agents sit around waiting for AEP. You&apos;re not going to be most agents. Last SEP season,
            agents who knew C-SNP alone were enrolling 5 to 10 beneficiaries a month while the average agent
            enrolled zero outside AEP. The difference is knowing what to listen for.
          </SayThis>

          <FacilitatorNote>
            Pause after the last line. Let it land. Then pick up the energy and pivot to the cheat sheets.
          </FacilitatorNote>

          <Transition>
            Let me show you the codes that actually matter. Flip over the Money Codes sheet in front of you.
          </Transition>
        </View>

        {/* 0:10 - 0:25 */}
        <View style={s.timeBlock}>
          <View style={s.timeBlockHeader}>
            <Text style={s.timeBlockTime}>0:10 &ndash; 0:25</Text>
            <Text style={s.timeBlockName}>The Money Codes</Text>
          </View>
          <Text style={s.timeBlockMethod}>WALK THROUGH THE CHEAT SHEET</Text>

          <ScreenInstruction>
            Open The Certainty System to /sep/quick-reference and project it on screen. This mirrors the printed
            Money Codes sheet. Point to the screen as you walk through each code so agents can follow along on
            both their printed copy and the projected version.
          </ScreenInstruction>

          <FacilitatorNote>
            Have agents look at their printed Money Codes sheet. Tell them to follow along &mdash; you are going
            to walk through each row in the &ldquo;They Just Told You Something&rdquo; table. For each code,
            do this exact sequence: (1) read the &ldquo;What they said&rdquo; column out loud in a conversational
            voice, as if you are a beneficiary on a call, (2) name the code, (3) state the enrollment window,
            (4) state the next step. Do not ad-lib or skip ahead.
          </FacilitatorNote>

          <Text style={base.body}>
            Have agents look at their printed Money Codes sheet. Walk through each code in the
            &ldquo;They Just Told You Something&rdquo; table. For each one:
          </Text>
          <Bullet>Read the &ldquo;What they said&rdquo; column out loud (use a natural, conversational tone)</Bullet>
          <Bullet>Name the code</Bullet>
          <Bullet>State the window</Bullet>
          <Bullet>State the next step</Bullet>

          <Text style={[base.h3, { marginTop: 10 }]}>Spend the most time on these four:</Text>
          <Text style={base.body}>
            <Text style={base.bold}>CSN</Text> &mdash; The #1 opportunity. 17 million eligible. Year-round.
            No ticking clock. The question that opens the door: &ldquo;Do you have any ongoing health
            conditions like diabetes, heart failure, or COPD?&rdquo;
          </Text>
          <Text style={base.body}>
            <Text style={base.bold}>LEC</Text> &mdash; Extremely common. People retiring, losing jobs,
            COBRA running out. Get the exact date of coverage loss.
          </Text>
          <Text style={base.body}>
            <Text style={base.bold}>INT/DEP</Text> &mdash; Medicaid population. INT = full Medicaid, enroll
            into D-SNP. DEP = any Medicaid/LIS, enroll into PDP. Both repeatable, any month.
          </Text>
          <Text style={base.body}>
            <Text style={base.bold}>MOV</Text> &mdash; People who moved. Verify address change with Social
            Security. Window: month before + month of + 2 after.
          </Text>

          <SayThis>
            You don&apos;t need to memorize 37 codes. You need to recognize what someone tells you on a call
            and match it to the right code. That&apos;s it. The cheat sheet does the rest. Keep it on your desk.
            Keep it open on your screen. Use it on every single call.
          </SayThis>

          <Transition>
            Now let&apos;s see if you can actually do it. I&apos;m going to read you some things a beneficiary
            might say, and you tell me the code. Ready?
          </Transition>
        </View>

        <PageFooter label={footer} />
      </Page>

      {/* ============================================================ */}
      {/* HOUR 1 CONTINUED: DRILL + CSN DEEP DIVE                     */}
      {/* ============================================================ */}
      <Page size="LETTER" style={base.page}>
        <Text style={base.eyebrow}>HOUR 1 (CONTINUED)</Text>
        <Text style={base.h1}>The Drill + CSN Deep Dive</Text>
        <View style={base.divider} />

        {/* 0:25 - 0:40 */}
        <View style={s.timeBlock}>
          <View style={s.timeBlockHeader}>
            <Text style={s.timeBlockTime}>0:25 &ndash; 0:40</Text>
            <Text style={s.timeBlockName}>&ldquo;What Did They Say?&rdquo; Drill</Text>
          </View>
          <Text style={s.timeBlockMethod}>INTERACTIVE</Text>

          <ScreenInstruction>
            Turn the projector off or switch to a blank screen. You don&apos;t want agents looking at a
            reference during this drill &mdash; the point is to build recall from what they just learned.
            They can keep their printed cheat sheets face-down.
          </ScreenInstruction>

          <Text style={[base.body, { fontWeight: 700 }]}>
            This is the most important exercise in the session.
          </Text>

          <FacilitatorNote>
            Timing matters here. Spend no more than 30 seconds per scenario. Read the prompt, wait 3-5 seconds
            for someone to call out the answer. If they hesitate, give the answer yourself and move on immediately.
            Do not lecture after each one &mdash; speed builds pattern recognition. If you slow down to explain
            every answer, the energy dies and agents stop engaging. Save detailed explanations for the ones they
            get wrong. For ones they get right, just say &ldquo;Correct&rdquo; or &ldquo;Good&rdquo; and read
            the next one.
          </FacilitatorNote>

          <Text style={base.body}>
            Read each scenario below out loud in a conversational tone, as if you are a beneficiary on the phone.
            Agents call out the SEP code. If they get it wrong, give the correct answer with a one-sentence
            explanation and move on. If they get it right, move on. Keep the pace fast.
          </Text>

          <FacilitatorNote>
            Optional: Write agent names on the whiteboard and tally correct answers to make it competitive.
            Agents respond well to a little friendly competition.
          </FacilitatorNote>

          <Text style={[base.bodyMuted, { fontSize: 8, marginBottom: 2 }]}>
            (Full scenarios on next page)
          </Text>
        </View>

        {/* 0:40 - 0:55 */}
        <View style={s.timeBlock}>
          <View style={s.timeBlockHeader}>
            <Text style={s.timeBlockTime}>0:40 &ndash; 0:55</Text>
            <Text style={s.timeBlockName}>CSN Deep Dive</Text>
          </View>
          <Text style={s.timeBlockMethod}>TALK + LIVE DEMO</Text>

          <ScreenInstruction>
            Navigate to /sep-check on The Certainty System and project it on screen. This is a live tool
            agents will use on every call. Walk them through it step by step.
          </ScreenInstruction>

          <FacilitatorNote>
            Reference the Money Codes cheat sheet &mdash; have agents look at the CSN row. Then look up at the
            screen as you demo the tool. You are connecting the printed reference to the live tool they will
            actually use.
          </FacilitatorNote>

          <Text style={base.h3}>Key points to cover:</Text>
          <Bullet>C-SNP is the single biggest enrollment opportunity outside AEP</Bullet>
          <Bullet>17 million beneficiaries are eligible nationwide</Bullet>
          <Bullet>Available year-round &mdash; no expiring window</Bullet>
          <Bullet>Must enroll INTO a C-SNP (not standard MA/MAPD)</Bullet>
          <Bullet>Provider must attest to the diagnosis within 2 months of enrollment</Bullet>
          <Bullet>C-SNP to C-SNP for the same condition does NOT qualify &mdash; only a different condition</Bullet>

          <Text style={[base.h3, { marginTop: 8 }]}>Live demo (do this step by step):</Text>
          <Text style={base.body}>
            1. Type a ZIP code into the SEP Check tool on screen (use a local ZIP agents will recognize).
          </Text>
          <Text style={base.body}>
            2. Show the C-SNP availability results. Point out the qualifying conditions listed.
          </Text>
          <Text style={base.body}>
            3. Say: &ldquo;This is how fast it is. ZIP code in, answer out. You will do this on every call where
            someone mentions a chronic condition. Bookmark this page right now on your work computer.&rdquo;
          </Text>

          <Text style={[base.body, { marginTop: 6 }]}>
            <Text style={base.bold}>The question every agent should ask on every call:</Text>
          </Text>
          <View style={s.scriptBox}>
            <Text style={s.scriptText}>
              &ldquo;Do you have any ongoing health conditions your doctor treats regularly &mdash;
              like diabetes, heart failure, or COPD?&rdquo;
            </Text>
          </View>

          <SayThis>
            If you ask this question on every inbound call from April through October, you will find CSN
            enrollments that other agents completely miss. This is how you eat during SEP season. The agents
            who ask this question make money year-round. The agents who don&apos;t sit around waiting for AEP.
          </SayThis>

          <Transition>
            We&apos;re going to take a 5-minute break. When we come back, we&apos;re going to cover the
            confusion points that trip up even experienced agents, and then the compliance rules that will
            end your career if you break them.
          </Transition>
        </View>

        {/* 0:55 - 1:00 */}
        <View style={s.timeBlock}>
          <View style={s.timeBlockHeader}>
            <Text style={s.timeBlockTime}>0:55 &ndash; 1:00</Text>
            <Text style={s.timeBlockName}>Break</Text>
          </View>
          <Text style={s.timeBlockMethod}>5-MINUTE BREAK</Text>
          <FacilitatorNote>
            During the break, switch your projected screen to The Certainty System /sep/quick-reference page.
            This is what agents will see when they sit back down, reinforcing the codes they just learned.
          </FacilitatorNote>
        </View>

        <PageFooter label={footer} />
      </Page>

      {/* ============================================================ */}
      {/* DRILL SCENARIOS                                               */}
      {/* ============================================================ */}
      <Page size="LETTER" style={base.page}>
        <Text style={base.eyebrow}>EXERCISE</Text>
        <Text style={base.h1}>&ldquo;What Did They Say?&rdquo; Drill</Text>
        <Text style={[base.bodyMuted, { marginBottom: 4 }]}>
          Read each scenario out loud in a conversational tone. Agents call out the SEP code.
        </Text>
        <Text style={[base.bodyMuted, { marginBottom: 12, fontWeight: 700 }]}>
          Pacing: 30 seconds max per scenario. Hesitation = give the answer and move on.
        </Text>
        <View style={base.divider} />

        {drillScenarios.map((scenario) => (
          <View key={scenario.num} style={s.drillCard} wrap={false}>
            <Text style={s.drillNumber}>Scenario {scenario.num}</Text>
            <Text style={s.drillPrompt}>&ldquo;{scenario.prompt}&rdquo;</Text>
            <Text style={s.drillAnswer}>
              Answer: <Text style={s.drillCode}>{scenario.answer}</Text> {scenario.detail}
            </Text>
          </View>
        ))}

        <View style={[s.scriptBox, { marginTop: 10 }]}>
          <Text style={s.scriptLabel}>AFTER THE DRILL</Text>
          <Text style={s.scriptText}>
            &ldquo;Notice how you didn&apos;t need to memorize anything. You just listened to what they said
            and matched it. That&apos;s exactly what happens on a real call. The cheat sheet is your safety net
            &mdash; but after doing this a few dozen times, you won&apos;t even need to look at it.&rdquo;
          </Text>
        </View>

        <FacilitatorNote>
          If agents struggled with specific scenarios, make a mental note. You can revisit those codes during
          the Confusion Killers section in Hour 2. If agents aced the drill, acknowledge it: &ldquo;You picked
          that up fast. Now let&apos;s see how you handle the tricky ones.&rdquo;
        </FacilitatorNote>

        <PageFooter label={footer} />
      </Page>

      {/* ============================================================ */}
      {/* HOUR 2: CONFUSION POINTS + COMPLIANCE                        */}
      {/* ============================================================ */}
      <Page size="LETTER" style={base.page}>
        <Text style={base.eyebrow}>HOUR 2</Text>
        <Text style={base.h1}>Confusion Points + Compliance + Live Practice</Text>
        <View style={base.divider} />

        {/* 1:00 - 1:15 */}
        <View style={s.timeBlock}>
          <View style={s.timeBlockHeader}>
            <Text style={s.timeBlockTime}>1:00 &ndash; 1:15</Text>
            <Text style={s.timeBlockName}>Confusion Killers</Text>
          </View>
          <Text style={s.timeBlockMethod}>QUIZ FORMAT</Text>

          <ScreenInstruction>
            Open The Certainty System to /sep/quick-reference and project on screen. Scroll to the section
            that shows commonly confused code pairs. Agents should also reference the Confusion Killers section
            of their printed Money Codes cheat sheet.
          </ScreenInstruction>

          <FacilitatorNote>
            This section is a quiz, not a lecture. Read each question, let agents answer, then give the correct
            answer with a one-sentence explanation of WHY. One sentence max. Do not turn this into a lecture
            &mdash; the explanations are there to anchor the answer, not to teach a class. If you spend more
            than 90 seconds on any single question, you are going too slow.
          </FacilitatorNote>

          <Text style={base.body}>
            Have agents look at the Confusion Killers section of their cheat sheet. For each pair,
            ask the distinguishing question. Have agents answer. After each answer, briefly explain WHY
            in one sentence.
          </Text>

          <Transition>
            You know the money codes. Now let&apos;s see if you can handle the ones that trip people up.
            These are the pairs that agents confuse the most. Get these wrong and you submit the wrong SEP.
          </Transition>
        </View>

        <Text style={base.h2}>Quiz Questions</Text>

        {quizQuestions.map((q) => (
          <View key={q.num} style={s.quizCard} wrap={false}>
            <Text style={s.drillNumber}>Question {q.num}</Text>
            <Text style={s.quizQuestion}>{q.question}</Text>
            <Text style={s.quizAnswer}>
              Answer: <Text style={{ fontWeight: 700, color: colors.sage }}>{q.answer}</Text>
            </Text>
            <Text style={s.quizExplanation}>Why: {q.explanation}</Text>
          </View>
        ))}

        <PageFooter label={footer} />
      </Page>

      {/* ============================================================ */}
      {/* HOUR 2 CONTINUED: TIMING + COMPLIANCE                        */}
      {/* ============================================================ */}
      <Page size="LETTER" style={base.page}>
        <Text style={base.eyebrow}>HOUR 2 (CONTINUED)</Text>
        <Text style={base.h1}>Timing + Compliance</Text>
        <View style={base.divider} />

        {/* 1:15 - 1:30 */}
        <View style={s.timeBlock}>
          <View style={s.timeBlockHeader}>
            <Text style={s.timeBlockTime}>1:15 &ndash; 1:30</Text>
            <Text style={s.timeBlockName}>&ldquo;When Did That Happen?&rdquo;</Text>
          </View>
          <Text style={s.timeBlockMethod}>WALK THROUGH TIMING</Text>

          <ScreenInstruction>
            Pull up /sep/quick-reference on The Certainty System and scroll to the timing section. Point to each
            category on screen as you walk through the three columns below. Agents should also reference their
            printed cheat sheet.
          </ScreenInstruction>

          <FacilitatorNote>
            Reference the Money Codes cheat sheet &mdash; have agents find the timing section. Point to the
            projected screen and their printed sheet simultaneously. Walk through each column left to right:
            always open, ticking clock, calendar-bound. For ticking clock codes, emphasize that getting the
            exact date is non-negotiable.
          </FacilitatorNote>

          <Text style={base.body}>
            Key message: Most SEPs have ticking clocks. The exact date of the triggering event determines
            whether the window is still open. This is why &ldquo;When exactly did that happen?&rdquo; is the
            most important question on every SEP call.
          </Text>
          <Text style={base.h3}>Walk through the three timing categories:</Text>
        </View>

        <View style={s.timingRow}>
          <View style={s.timingCol}>
            <Text style={[s.timingLabel, { color: colors.sage }]}>ALWAYS OPEN</Text>
            <Bullet>CSN &mdash; Year-round (condition + C-SNP available)</Bullet>
            <Bullet>INT &mdash; Any month, repeatable (full Medicaid)</Bullet>
            <Bullet>DEP &mdash; Any month, repeatable (any Medicaid/LIS)</Bullet>
            <Bullet>OEP-I &mdash; Unlimited while in qualifying facility</Bullet>
            <Bullet>CDC &mdash; Anytime (has other drug coverage)</Bullet>
          </View>
          <View style={s.timingCol}>
            <Text style={[s.timingLabel, { color: colors.amber }]}>TICKING CLOCK</Text>
            <Bullet>IEP &mdash; 7 months around 65th birthday</Bullet>
            <Bullet>LEC &mdash; Month of loss + 2 months</Bullet>
            <Bullet>MOV &mdash; Month before + month of + 2 after</Bullet>
            <Bullet>MCD &mdash; 3 months from status change</Bullet>
            <Bullet>LCC &mdash; 2 months from loss or notification</Bullet>
          </View>
          <View style={s.timingCol}>
            <Text style={[s.timingLabel, { color: colors.blue }]}>CALENDAR-BOUND</Text>
            <Bullet>5ST &mdash; Dec 8 through Nov 30 (1x/yr)</Bullet>
            <Bullet>EOC &mdash; Dec 8 through end of Feb</Bullet>
            <Bullet>AEP &mdash; Oct 15 through Dec 7</Bullet>
            <Bullet>OEP &mdash; Jan 1 through Mar 31 (1 change)</Bullet>
          </View>
        </View>

        <SayThis>
          If you can&apos;t get the exact date, you can&apos;t confirm the SEP. And if you can&apos;t
          confirm the SEP, you can&apos;t enroll. The date is everything.
        </SayThis>

        <Transition>
          Now we need to talk about the things that will end your career. I&apos;m not exaggerating.
          These are the three compliance lines you cannot cross.
        </Transition>

        <View style={base.divider} />

        {/* 1:30 - 1:45 */}
        <View style={s.timeBlock}>
          <View style={s.timeBlockHeader}>
            <Text style={s.timeBlockTime}>1:30 &ndash; 1:45</Text>
            <Text style={s.timeBlockName}>Three Things That Get You Fired</Text>
          </View>
          <Text style={s.timeBlockMethod}>TALK &mdash; COMPLIANCE</Text>

          <ScreenInstruction>
            Pull up /sep-compliance on The Certainty System and project it on screen. Tell agents to bookmark
            this page right now on their work computers &mdash; it is their pre-submission checklist for every
            SEP enrollment.
          </ScreenInstruction>

          <FacilitatorNote>
            Change your tone here. Lower your voice slightly. Slow down. This is the most serious part of the
            training. No jokes, no lightening the mood. Make eye contact with specific agents as you deliver
            each red line. Reference the compliance cheat sheet &mdash; have agents look at the compliance
            section of their printed handout.
          </FacilitatorNote>

          <Text style={[base.body, { fontWeight: 700 }]}>
            This is non-negotiable. No jokes, no lightening the mood. This is serious.
          </Text>
        </View>

        <View style={s.redLineCard} wrap={false}>
          <Text style={s.redLineNum}>1</Text>
          <Text style={s.redLineRule}>DST is NOT a standalone SEP.</Text>
          <Text style={s.redLineDetail}>
            A disaster does NOT create a new enrollment window. It only extends a window the beneficiary
            already had and missed because of the disaster. Never advertise it. Never bring it up.
            If a beneficiary mentions a disaster, ask: &ldquo;Were you trying to make a plan change during
            the disaster and were unable to?&rdquo; If not, DST does not apply.
            Carrier benchmark: ~15%. Exceed it and you get audited.
          </Text>
        </View>

        <View style={s.redLineCard} wrap={false}>
          <Text style={s.redLineNum}>2</Text>
          <Text style={s.redLineRule}>Never enroll Medicaid in a give-back plan.</Text>
          <Text style={s.redLineDetail}>
            Beneficiaries with Medicaid already have their Part B premium paid by the state. A give-back
            benefit &mdash; which reduces the Part B premium &mdash; has zero value for them. It creates
            compliance risk and wastes a plan benefit they can&apos;t use.
          </Text>
        </View>

        <View style={s.redLineCard} wrap={false}>
          <Text style={s.redLineNum}>3</Text>
          <Text style={s.redLineRule}>Always verify the election period with the beneficiary.</Text>
          <Text style={s.redLineDetail}>
            Before every submission, you must have a conversation &mdash; not a checkbox &mdash; confirming:
            What is the qualifying event? When did it happen? Does the beneficiary understand they are
            enrolling based on this event? Use the compliance checklist at /sep-compliance before every
            SEP submission. No exceptions.
          </Text>
        </View>

        <PageFooter label={footer} />
      </Page>

      {/* ============================================================ */}
      {/* BENCHMARKS + COMPLIANCE SCRIPT                                */}
      {/* ============================================================ */}
      <Page size="LETTER" style={base.page}>
        <Text style={base.eyebrow}>COMPLIANCE (CONTINUED)</Text>
        <Text style={base.h1}>Watched SEPs + Roleplay</Text>
        <View style={base.divider} />

        <Text style={base.h2}>5 Most-Watched SEPs and Benchmarks</Text>
        <Text style={[base.bodyMuted, { marginBottom: 8 }]}>
          Also mention these during the compliance section. If anyone on your team is heavy on these codes, have a conversation before compliance does.
        </Text>

        <ScreenInstruction>
          Keep /sep-compliance projected on screen. Point to the benchmark section if it is visible, or
          reference the compliance cheat sheet.
        </ScreenInstruction>

        <View style={s.benchmarkHeader}>
          <Text style={[base.tableHeaderCell, s.colCode]}>SEP Code</Text>
          <Text style={[base.tableHeaderCell, s.colBench]}>Benchmark</Text>
        </View>
        {benchmarks.map((row) => (
          <View key={row.code} style={s.benchmarkRow} wrap={false}>
            <Text style={[base.tableCell, s.colCode, { fontWeight: 700, color: colors.sage }]}>{row.code}</Text>
            <Text style={[base.tableCell, s.colBench]}>{row.bench}</Text>
          </View>
        ))}

        <SayThis>
          Compliance is not optional. If you submit the wrong SEP, the enrollment gets rejected. If you
          do it repeatedly, you get suspended. If it looks intentional, you lose your contract. Use the
          compliance cheat sheet before every SEP enrollment. Use the /sep-compliance page on The Certainty
          System before every submission. No shortcuts.
        </SayThis>

        <Transition>
          You know the codes, you know the confusion points, you know the compliance rules. Now let&apos;s
          put it all together. I&apos;m going to play the beneficiary, and you&apos;re going to handle the call.
        </Transition>

        <View style={base.divider} />

        {/* 1:45 - 1:55 */}
        <Text style={base.h2}>Live Scenario Roleplay</Text>
        <View style={s.timeBlock}>
          <View style={s.timeBlockHeader}>
            <Text style={s.timeBlockTime}>1:45 &ndash; 1:55</Text>
            <Text style={s.timeBlockName}>Live Scenario Roleplay</Text>
          </View>
          <Text style={s.timeBlockMethod}>YOU PLAY THE BENEFICIARY &mdash; PICK 2-3 AGENTS TO HANDLE THE CALL</Text>

          <ScreenInstruction>
            Switch to /sep-check on The Certainty System. Leave it up so agents can reference it during the
            roleplay if needed &mdash; they will use this tool on real calls, so let them practice with it now.
          </ScreenInstruction>

          <FacilitatorNote>
            How to run roleplay well: You are the beneficiary. Sit in a chair facing the agent, not standing
            at the front of the room. Use a conversational tone &mdash; not a reading-from-a-script tone. Make
            them work for the information. Don&apos;t volunteer the qualifying condition or date right away.
            Answer their questions naturally, the way a real caller would. If the agent asks a great question,
            give them the information. If they don&apos;t ask, don&apos;t offer it. Pick 2-3 different agents
            across the scenarios so more people get practice. After each roleplay, ask the group: &ldquo;What
            did they do well? What did they miss?&rdquo; Keep group feedback to 60 seconds max per scenario.
          </FacilitatorNote>
        </View>

        <View style={s.roleplayCard} wrap={false}>
          <Text style={s.roleplayTitle}>Scenario 1 &mdash; CSN</Text>
          <Text style={s.roleplayBody}>
            You&apos;re a 72-year-old woman. You mention you&apos;ve been managing your diabetes for
            15 years and take insulin. You called because your current plan copays are too high. You
            don&apos;t know what a C-SNP is. Don&apos;t mention diabetes unless they ask about health conditions.
          </Text>
          <Text style={s.roleplayNote}>
            What the agent should do: Ask about chronic conditions. Identify CSN. Ask for your ZIP code.
            Use /sep-check to verify C-SNP availability. Explain the tailored benefits of a C-SNP plan.
          </Text>
        </View>

        <View style={s.roleplayCard} wrap={false}>
          <Text style={s.roleplayTitle}>Scenario 2 &mdash; LEC + ICEP</Text>
          <Text style={s.roleplayBody}>
            You&apos;re a 67-year-old man. You just retired last month. Your employer coverage ended.
            You&apos;ve had Part A since 65 but delayed Part B &mdash; it&apos;s activating now.
            If they ask when you retired, say &ldquo;about three weeks ago.&rdquo; Make them push for
            the exact date.
          </Text>
          <Text style={s.roleplayNote}>
            What the agent should do: Identify LEC (employer loss) AND ICEP (Part B activating with different
            date from Part A). Get the exact coverage end date (not &ldquo;about three weeks ago&rdquo;).
            Mention the CMS-L564 and CMS-40B forms.
          </Text>
        </View>

        <View style={s.roleplayCard} wrap={false}>
          <Text style={s.roleplayTitle}>Scenario 3 &mdash; MOV</Text>
          <Text style={s.roleplayBody}>
            You&apos;re a 70-year-old who just moved from Michigan to Florida. Your current plan
            doesn&apos;t have doctors in Florida. You haven&apos;t updated your address with Social Security yet.
          </Text>
          <Text style={s.roleplayNote}>
            What the agent should do: Identify MOV. Ask when you moved. Discover you haven&apos;t updated
            your address with Social Security &mdash; this must happen first. Explain the timeline and next
            steps before enrollment can proceed.
          </Text>
        </View>

        <Text style={[base.bodyMuted, { marginTop: 4 }]}>
          After each roleplay: Ask the group &ldquo;What did they do well? What did they miss?&rdquo;
          Keep feedback to 60 seconds. Focus on one thing done well and one thing to improve.
        </Text>

        <PageFooter label={footer} />
      </Page>

      {/* ============================================================ */}
      {/* WRAP + AFTER THE SESSION                                      */}
      {/* ============================================================ */}
      <Page size="LETTER" style={base.page}>
        <Text style={base.eyebrow}>WRAP-UP</Text>
        <Text style={base.h1}>Closing + After the Session</Text>
        <View style={base.divider} />

        {/* 1:55 - 2:00 */}
        <View style={s.timeBlock}>
          <View style={s.timeBlockHeader}>
            <Text style={s.timeBlockTime}>1:55 &ndash; 2:00</Text>
            <Text style={s.timeBlockName}>Wrap + Resources</Text>
          </View>
          <Text style={s.timeBlockMethod}>HANDOUTS + SCREEN</Text>

          <ScreenInstruction>
            Open The Certainty System to /sep and project on screen. This is the main SEP hub page with
            links to every resource. Walk agents through what they are seeing.
          </ScreenInstruction>
        </View>

        <Text style={base.h3}>Hand out (if not already distributed):</Text>
        <Bullet>Money Codes quick-reference sheet (tell agents: &ldquo;This goes on your desk or taped to your monitor&rdquo;)</Bullet>
        <Bullet>Compliance cheat sheet (tell agents: &ldquo;Check this before every SEP submission&rdquo;)</Bullet>

        <Text style={[base.h3, { marginTop: 10 }]}>Show these on screen and have agents bookmark each one:</Text>
        <View style={s.emphasisCard}>
          <Text style={base.body}>
            <Text style={base.bold}>/sep-check</Text> &mdash; &ldquo;This is your SEP verification tool. Use it on every call. Bookmark it now.&rdquo;
          </Text>
          <Text style={base.body}>
            <Text style={base.bold}>/sep</Text> &mdash; &ldquo;Full guides for every SEP category if you want to go deeper on any code.&rdquo;
          </Text>
          <Text style={base.body}>
            <Text style={base.bold}>/sep-compliance</Text> &mdash; &ldquo;Pre-enrollment compliance checklist. Use it before every SEP submission. No exceptions.&rdquo;
          </Text>
          <Text style={[base.body, { marginBottom: 0 }]}>
            <Text style={base.bold}>/sep/quick-reference</Text> &mdash; &ldquo;Digital version of the Money Codes cheat sheet. Same content as your printed sheet, always up to date.&rdquo;
          </Text>
        </View>

        <View style={s.scriptBox}>
          <Text style={s.scriptLabel}>CLOSING MESSAGE</Text>
          <Text style={s.scriptText}>
            &ldquo;You now know the codes that make money during SEP season. You know the question that
            opens every CSN enrollment. You know the pairs that trip agents up. And you know the three
            lines that get you fired. Everything is on your cheat sheet and on The Certainty System.
            SEP season starts April 1st. Be ready.&rdquo;
          </Text>
        </View>

        <FacilitatorNote>
          End on time. Do not run over. Agents remember the last thing that happens &mdash; if you end
          crisply and with energy, that is the impression they take with them. If you trail off or let it
          fizzle, the whole session feels less impactful.
        </FacilitatorNote>

        <View style={base.divider} />

        <Text style={base.h1}>After the Session</Text>

        <Text style={base.h2}>Same Day: Email All Agents These Links</Text>
        <Text style={base.body}>
          Send a follow-up email within 2 hours of the session. Subject line: &ldquo;SEP Training Resources
          &mdash; Bookmark These.&rdquo; Include the following links:
        </Text>
        <UrlBullet>/sep-check &mdash; SEP verification tool (use on every call)</UrlBullet>
        <UrlBullet>/sep &mdash; Full SEP guides for all codes</UrlBullet>
        <UrlBullet>/sep-compliance &mdash; Pre-enrollment compliance checklist</UrlBullet>
        <UrlBullet>/sep/quick-reference &mdash; Money Codes quick-reference (digital version)</UrlBullet>

        <Text style={base.h2}>Week 1: First SEP Calls</Text>
        <Text style={base.body}>
          Schedule a 15-minute team standup after agents have taken their first real SEP calls.
          Answer questions, share wins, address confusion. Ask specifically: &ldquo;Has anyone identified
          a CSN opportunity yet?&rdquo; If not, revisit the qualifying conditions list together.
        </Text>

        <Text style={base.h2}>Week 2: CSN Check-In</Text>
        <Text style={base.body}>
          Ask each agent how many CSN enrollments they have identified. If the answer is zero, sit down
          one-on-one and review the qualifying conditions list. Ask them to tell you the CSN question from
          memory. If they cannot, have them write it on a sticky note for their monitor:
          &ldquo;Do you have any ongoing health conditions your doctor treats regularly?&rdquo;
        </Text>

        <Text style={base.h2}>Ongoing</Text>
        <Bullet>Distribute the SEP Training Guide PDF to agents who want the full deep dive on all 37 codes</Bullet>
        <Bullet>Keep the Money Codes cheat sheet updated if codes or windows change</Bullet>
        <Bullet>Monitor the team&apos;s SEP code usage &mdash; if anyone is heavy on DST, MOV, or ACC, have a conversation before compliance does</Bullet>
        <Bullet>Re-run the &ldquo;What Did They Say?&rdquo; drill monthly during SEP season (it takes 15 minutes and keeps pattern recognition sharp)</Bullet>

        <View style={{ marginTop: 24 }}>
          <View style={base.divider} />
          <Text style={[base.bodyMuted, { fontStyle: 'italic', textAlign: 'center' }]}>
            This guide was built by Mega Care Insurance, powered by The Certainty System.
            For questions or updates, contact the training team.
          </Text>
        </View>

        <PageFooter label={footer} />
      </Page>
    </Document>
  )
}
