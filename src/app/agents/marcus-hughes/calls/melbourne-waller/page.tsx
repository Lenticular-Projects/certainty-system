'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function MelbourneWallerCallPage() {
  return (
    <PageShell signal="green">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/marcus-hughes" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Marcus Hughes · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Marcus Hughes × Melbourne Waller</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 20, 2026 · 26:32 · Tennessee (ZIP 38111) · <strong style={{ color: 'var(--sage-dark)' }}>78 / 100</strong> · Enrolled</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Marcus Hughes successfully enrolled Melbourne Waller into the UnitedHealthcare Dual Complete D-SNP plan, effective May 1, 2026, at a $0 monthly premium. The pivotal moment came early — at 3:21 when Marcus spotted 'I see you have Medicaid' in the system and immediately pivoted from a standard Medicare Advantage pitch to a D-SNP enrollment, correctly identifying Melbourne's dual-eligible status as the pathway to the food card he called in for. This was a sharp signal read.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The call had one significant dead zone: a system verification hold from approximately 5:12 to 13:03 — over seven minutes where Marcus had Melbourne on mute while checking Medicaid eligibility levels. Marcus managed the hold with periodic check-ins and maintained the relationship, but this stretch represents a process efficiency gap. When he came back at 13:20, he closed smoothly: he acknowledged the Medicaid level was partial/recent but enrolled anyway using the INT SEP (recently gained Medicaid eligibility), with an appropriate caution to Melbourne to keep his number for any follow-up paperwork.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Compliance was largely executed — TPMO disclaimer, SOA question equivalent, plan name, premium, effective date, disenrollment warning, and understanding confirmation were all delivered. The full disclosure script was read at 21:04–24:52, and Melbourne confirmed with 'yes' at each checkpoint. Marcus closed with a post-enrollment loyalty anchor, texted the policy details, and instructed Melbourne not to re-engage with other agents.</p>
          </div>
        </section>

        {/* Score Breakdown */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Certainty Score Breakdown</h2>
          <div style={{ background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', borderBottom: '1px solid rgba(19,17,16,0.08)', background: 'rgba(19,17,16,0.03)' }}>
              <span>Category</span>
              <span>Score</span>
              <span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 16, max: 20 },
              { cat: 'Signal Reading', score: 15, max: 20 },
              { cat: 'Math Breakdown', score: 10, max: 20 },
              { cat: 'Objection Handling', score: 12, max: 15 },
              { cat: 'Call Outcome Quality', score: 9, max: 10 },
              { cat: 'Compliance', score: 11, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>78/100 reflects a clean enrollment with process efficiency concerns (7+ minute hold) and incomplete math framework execution.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Immediate Assumptive Frame (0:20):</strong> Marcus opened with 'Alright, I'm going to get you that food card Mr. Wall, let me see what's available' — setting an assumptive, outcome-oriented frame in the first 20 seconds. This positioned him as a solution provider rather than a salesperson and set the consumer's expectations correctly.</li>
            <li><strong>D-SNP Pivot on Medicaid Detection (3:21):</strong> When Marcus spotted Medicaid in the system, he immediately pivoted: 'If you have Medicaid, my man, I should be able to get you a food card, no problem.' This was the correct product identification — a dual-eligible beneficiary needs a D-SNP, not a standard MAPD, and the food card (OTC benefit) is the signature benefit. Sharp system reading.</li>
            <li><strong>INT SEP Correctly Applied (19:04):</strong> Marcus correctly identified and stated the INT SEP: 'joining or switching a plan that coordinates coverage between your Medicare or Medicaid plans — since you recently just got approved we can use this for your special enrollment period.' This is the correct SEP for a newly Medicaid-eligible beneficiary enrolling in a D-SNP.</li>
            <li><strong>Post-Enrollment Loyalty Anchor (26:01):</strong> Marcus told Melbourne: 'Don't repeat this process, don't speak with anybody, just wait until you get everything in the mailbox.' This is a retention move — it protects the enrollment from competitor agents calling back and reassures the consumer. Combined with texting the policy details directly, this closes the post-call vulnerability window.</li>
            <li><strong>VA Benefits Handled Correctly (1:02):</strong> Marcus asked 'Do you get your doctor visits and your medication through your VA?' and when confirmed, said 'So we wouldn't have to worry about that' — correctly recognizing that VA coverage operates separately and doesn't conflict with Medicare Advantage enrollment. He later noted VA as secondary insurance on the application.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC2 · 0:13</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Client Gold Ignored — 'Hungry'</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>The emotional anchor for the entire enrollment was sitting in the first 15 seconds. A 73-year-old veteran saying he's hungry could have been the closing moment — 'Melbourne, you called me hungry today — I want to make sure that doesn't happen. This $283 a month is specifically for your groceries. You're going to have that handled every single month.' Instead, it was bypassed entirely.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>When Melbourne says 'Hungry' at 0:13: 'Melbourne, I hear you — and I'm going to make sure you leave this call today with that handled. You're going to have money every single month for your groceries. Let me look into this right now for you.'</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC3 · 4:28, 13:33, 15:47</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Math Left at Step 1 — No Annualization or Humanization</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Marcus stated $283/month three times but never said '$3,396 per year.' For a fixed-income caller who opened by saying he was hungry, annualizing this number would have deepened the emotional commitment to the plan and made the benefit feel more real. The math was transactional when it should have been transformational.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>At 15:47, after stating $283/month: 'That's $283 every month — over the year, Melbourne, that's over $3,300 going back into your pocket just for groceries and utilities. That's real money. That's yours every single month just for being on the right plan.'</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 3 · RC1 · 5:12–13:20</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Extended System Hold — 7+ Minute Dead Zone</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>A seven-minute hold with a cooperative but minimally engaged 73-year-old is a churn risk. Melbourne stayed on the line, but this was passive luck — he had no active reason to hold. Any competing agent could have called during this window.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>Before the hold: 'Melbourne, this might take me two or three minutes to pull up — I want you to know exactly why I'm doing this. I'm checking to make sure you qualify for the full $283 a month, not a partial. I want to get you everything you're entitled to. Stay right here with me.' Check in every 60-90 seconds with a progress update, not just 'okay okay okay.'</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Gold Audit */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Client Gold Audit</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Gold #1 · 0:13 · MISSED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;Hungry.&rdquo;</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>Melbourne opened the call by saying he was hungry — a one-word statement that revealed genuine food insecurity or urgency. This is the single most powerful emotional anchor on the call. A 73-year-old veteran saying he's hungry is not a product request — it's a life situation. Marcus moved past it entirely, treating it as a transaction trigger rather than an emotional deployer. At close, when Marcus could have connected the $283/month OTC card back to this moment, he instead read disclosures.</p>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(111, 159, 102, 0.08)', borderRadius: '10px', borderLeft: '3px solid var(--sage-dark)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--sage-dark)', margin: '0 0 6px' }}>Gold #2 · 3:15 · LEVERAGED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;No, they don't have food card.&rdquo;</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>Melbourne confirmed his existing plan doesn't provide the food card benefit — creating the exact contrast Marcus needed. Marcus leveraged this correctly by pivoting to the D-SNP with the $283 OTC benefit. This was the commercial turning point of the call.</p>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(111, 159, 102, 0.08)', borderRadius: '10px', borderLeft: '3px solid var(--sage-dark)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--sage-dark)', margin: '0 0 6px' }}>Gold #3 · 0:51 · LEVERAGED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;I have some VA.&rdquo;</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>Melbourne revealed VA benefit status, which Marcus correctly acknowledged with a respectful salute and then handled procedurally — confirmed VA covers his doctor visits and medications, correctly noted it wouldn't interfere with the Medicare Advantage enrollment. This was proper signal handling.</p>
            </div>
          </div>
        </section>

        {/* The Moment That Decided This Call */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>The Moment That Decided This Call</h2>
          <div style={{ padding: '20px 24px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
            <p style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 8px' }}>3:21 — Signal Read</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}><strong>Marcus:</strong> "If you have Medicaid, my man, I should be able to get you a food card, no problem."</p>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', marginTop: '12px' }}>This was the winning line. Melbourne called looking for a food card, Marcus spotted Medicaid eligibility in the system, and in one sentence transformed a standard Medicare Advantage call into a D-SNP enrollment. Melbourne confirmed his Medicaid status, Marcus identified the INT SEP, and the call closed from this moment forward. Everything that followed was execution of what was already decided here.</p>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Marcus, this was a clean enrollment and you should be proud of how fast you read the room. From the moment Melbourne said 'I need a food card,' you never wavered — you told him you were getting it and you delivered. The D-SNP catch at 3:21, the INT SEP application, keeping him with UnitedHealthcare so nothing felt like a change — that's a polished execution. The post-call loyalty anchor is a nice touch that most agents skip entirely.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '14px' }}>Here's what I want you to work on: Melbourne told you he was hungry at 0:13. That's Client Gold, and you left it on the table. When someone that age says they're hungry, that's not a product feature request — that's a life situation. Every time the food card came up after that, you had an opportunity to connect it back: 'You told me you were hungry today — this plan is going to change that starting May 1st.' At close, instead of reading the disclosure and moving on, that line would have been the emotional anchor of the entire call. The enrollment was already done in Melbourne's mind by 3:43 — the closing moment should have matched that emotionally.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '14px' }}>The math also needs to go further. $283/month is Step 1 — you did that three times. Step 2 is annualization: $283 times 12 is $3,396 a year. Say that number out loud. Step 3 is humanization: connect it to what Melbourne told you — that he's hungry, that he needs groceries. 'Melbourne, that's over $3,300 a year going into your pocket for your groceries. That's what today's call was worth.' On your next dual-eligible caller, run all three steps every time. The difference between a consumer who enrolls and one who calls back to cancel is often how real the benefit felt to them in the moment. Make it real.</p>
        </section>

      </div>
    </PageShell>
  )
}
