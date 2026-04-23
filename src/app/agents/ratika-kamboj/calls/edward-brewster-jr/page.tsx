'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function EdwardBrewsterJrCallPage() {
  return (
    <PageShell signal="green">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/ratika-kamboj" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Ratika Kamboj · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Ratika Kamboj × Edward Brewster Jr.</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 21, 2026 · 43:58 · Etowah, TN (McMinn County) · <strong style={{ color: 'var(--forest)' }}>82 / 100</strong> · Enrolled</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Ratika enrolled Edward Brewster Jr. in an AARP Medicare Advantage HMO-POS from UnitedHealthcare, effective May 1, 2026, using the MOV Special Enrollment Period. Edward had recently moved to Etowah, Tennessee — address discrepancy surfaced at 5:03, Ratika identified it, confirmed the move, collected the new address, and correctly applied the MOV SEP as the qualifying event. That was the pivotal play. Without it, this enrollment doesn&apos;t happen outside AEP.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Edward called for a grocery card that wasn&apos;t available (no Medicaid). Ratika navigated this correctly — explained the Medicaid requirement, offered a future path (apply for Medicaid), and pivoted to the dental upgrade ($1,000 → $2,500) and OTC card ($65/quarter) as the primary value. When Edward escalated the grocery card frustration at 22:24, she held position again. No surrender. The call progressed cleanly through Phase VI: plan name, $0 premium, disenrollment warning, effective date, understanding confirmed, voice signature obtained.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Enrollment code: 2PH7KR4LD5. All 3 medications confirmed $0. Dr. Thomas Vance in-network confirmed before close. This was the week&apos;s only enrollment and it was earned.</p>
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
              { cat: 'Lead Quality',        score: 16, max: 20 },
              { cat: 'Signal Reading',      score: 15, max: 20 },
              { cat: 'Math Breakdown',      score: 14, max: 20 },
              { cat: 'Objection Handling',  score: 12, max: 15 },
              { cat: 'Call Outcome Quality',score: 10, max: 10 },
              { cat: 'Compliance',          score: 15, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>82/100 — strong compliance execution and MOV SEP identification. Score capped by partial math humanization and a missed emotional anchor around post-surgery disclosure.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>MOV SEP Identified and Applied (5:03):</strong> When the system showed an old address and Edward confirmed he had moved, Ratika caught it, updated to the new address (158 County Road 811, Etowah, TN 37331), and applied the MOV SEP as the qualifying event. She later cited it explicitly at 41:54. This was the legal basis for the enrollment — without this discovery and application, the call ends without a plan change.</li>
            <li><strong>Grocery Card Objection — Position Held (21:00 and 22:24):</strong> Edward called for a grocery card that wasn&apos;t available. Ratika did not back down, apologize excessively, or offer something she couldn&apos;t deliver. She explained the Medicaid requirement clearly, offered a concrete future path, and pivoted to the dental and OTC benefits. When Edward escalated at 22:24 (&ldquo;I don&apos;t know why everybody else I know got a damn grocery card&rdquo;), she held position again. Two escalations, no surrender.</li>
            <li><strong>All 3 Medications Confirmed $0 Before Close (18:43):</strong> Proactively confirmed Tamsulosin, Losartan, and Ibuprofen all covered at $0 under the new plan before moving to the close. This eliminated a major potential objection and gave Edward confidence that the upgrade would not increase his drug costs.</li>
            <li><strong>Doctor Network Confirmed Before Enrollment (24:51):</strong> Confirmed Dr. Thomas Vance was in-network under the new plan before enrolling. This is a required suitability check and it was executed correctly — consumer explicitly heard &ldquo;your doctor is in network, zero dollar copay for you&rdquo; before saying yes.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC2 · 7:27, 7:57</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Post-Surgery Client Gold Ignored</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>At 7:27, Edward disclosed he was still recovering from surgery and &ldquo;hurting real badly.&rdquo; He&apos;d tried to work the day before. This is the call&apos;s highest-leverage emotional moment — a man in pain, financially vulnerable during recovery. Ratika said &ldquo;I&apos;m so sorry, still recovering&rdquo; and moved on. Connecting the enrollment to his recovery would have added emotional urgency and reduced the grocery card friction that came up at 21:00.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>The Line</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Edward, you&apos;re still recovering and hurting. That&apos;s exactly why we&apos;re doing this today — the last thing you need while you&apos;re healing is to find out your coverage isn&apos;t working. Let&apos;s make sure you&apos;re completely protected starting May 1st so you can focus on getting better.&rdquo;</p>
              </div>
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC3 · 10:23, 41:14</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Math Step 3 Missing — Dental Value Not Humanized</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Ratika presented the dental upgrade ($1,000 → $2,500, $1,500 more) correctly at 10:46 and again at 41:17. She never connected it to the specific work Edward said he needed (extractions and bridges he&apos;d been putting off). The math was presented but not weaponized. &ldquo;You have $2,500 — that&apos;s $1,500 more than you had before&rdquo; is Step 2. Step 3 is &ldquo;you can finally book that appointment.&rdquo;</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>The Line</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Edward, you told me you need extractions and bridges and you haven&apos;t gone. On your old plan you had $1,000. On this plan you have $2,500 — that&apos;s $1,500 more than you had before. You can walk into the dentist the first week of May and start taking care of those teeth. This plan gives you that.&rdquo;</p>
              </div>
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 3 · RC4 · 30:27</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Effective Date Stated as 2025</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Ratika stated &ldquo;May 1st, 2025&rdquo; for the effective date. The consumer immediately corrected her. While it was fixed quickly, the effective date is a required Phase VI element and stating a wrong year in an enrollment call is both a compliance flag and a credibility hit. The consumer shouldn&apos;t be correcting the agent on enrollment details.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>The Line</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>Before stating the effective date: pause, confirm the year internally. &ldquo;Your new plan will start May 1st, 2026 — that&apos;s next month.&rdquo; Never state a year from memory during enrollment. One second of verification eliminates the error entirely.</p>
              </div>
            </div>

          </div>
        </section>

        {/* Client Gold Audit */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Client Gold Audit</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            <div style={{ padding: '16px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #1 · 7:27 · MISSED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;Well, I had surgery here about a month ago... I&apos;m hurting real badly.&rdquo;</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>Medical vulnerability and financial anxiety during recovery — a man who tried to go back to work too early because he can&apos;t afford to sit still. This was the most emotionally weighted moment in the call. Brief sympathy and move on is not enough. The enrollment anchor from this disclosure is: &ldquo;You need to focus on getting better, not on whether your insurance is working.&rdquo; That framing makes the May 1st effective date feel urgent and protective.</p>
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #2 · 9:56 · LEVERAGED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;Yeah, I got to have the teeth... I got to have dental work, but I ain&apos;t went to it.&rdquo;</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>Edward confirmed postponed dental work — extractions and bridges he&apos;d been putting off, which reveals cost hesitancy. Ratika correctly used the $2,500 dental allowance as the primary close driver. Partially leveraged: the number was stated but the humanized action — &ldquo;now you can finally stop putting it off and book that appointment&rdquo; — was not delivered with full closing force.</p>
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #3 · 22:24 · PARTIALLY USED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;I don&apos;t know why everybody else I know got a damn grocery card.&rdquo;</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>Social comparison frustration — Edward feels left out of something his neighbors have. Ratika correctly explained the Medicaid distinction and held position. She could have warmed it slightly: &ldquo;I completely understand your frustration — and you&apos;re right that those plans exist. The difference is those are Medicaid plans. What I can tell you is that what you&apos;re getting today — the dental upgrade, the OTC card — is real money in your pocket.&rdquo; Lead with validation before the explanation.</p>
            </div>

          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Ratika, this is a win — and it was earned. The MOV SEP identification at 5:03 is exactly the proactive discovery instinct this work requires. Without that catch, there is no enrollment. Holding the grocery card objection twice without surrendering shows real discipline. And a clean Phase VI — plan name, $0 premium, disenrollment warning, effective date (once corrected), understanding confirmed, voice signature — shows you know how to close correctly when you have a committed consumer. Two things to sharpen coming off this call. First: when a consumer discloses surgery and says they&apos;re hurting, that disclosure is an enrollment anchor, not just a conversation point. Stop and connect the plan to their recovery. That framing makes the &ldquo;no grocery card&rdquo; conversation easier because the consumer understands why they&apos;re doing this. Second: you stated the dental math correctly — $1,500 more toward dental — but never delivered the closing line that connects it to what Edward told you he needed. &ldquo;You told me you need extractions and bridges and you haven&apos;t gone. This plan gives you $2,500. You can book that appointment in May.&rdquo; That is Step 3 of the Math Breakdown and it was available on this call. Use it.</p>
        </section>

      </div>
    </PageShell>
  )
}
