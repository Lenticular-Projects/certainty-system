'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function MarieJeanCallPage() {
  return (
    <PageShell signal="green">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/karimah-ali" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Karimah Ali · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Karimah Ali × Marie Jean</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 20, 2026 · 01:36:26 · Delray Beach, FL (ZIP 33444) · <strong style={{ color: 'var(--sage-dark)' }}>79 / 100</strong> · Enrolled (C-SNP · ICEP)</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Karimah enrolled Marie Jean — a newly Medicare-eligible diabetic in Delray Beach, FL — into the CareComplete HMO C-SNP (CarePlus/Humana) effective May 1, 2026, at a $0 premium. Marie had just started Medicare Part A and B on April 1, 2026, making her ICEP window active. The C-SNP identification was the pivotal moment: when Marie mentioned &ldquo;blood sugar&rdquo; in the initial medication screen, Karimah immediately confirmed the diabetes diagnosis and pivoted to the C-SNP plan — unlocking a grocery benefit upgrade from $105 to $195/month and a $200 vision benefit. That single diagnostic move is the foundation of this entire enrollment.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The call ran 96 minutes — long, but not lost. Marie is a fragile consumer: recently moved, no current doctor, medications run out, Social Security only income, daily loneliness. Karimah spent 25 minutes in a live doctor search and located Dr. Pierre Dorsainville on Congress Park Drive — close to Marie&apos;s address, transportation included. She completed all seven Phase VI disclosure elements, obtained a clean voice signature, and delivered the confirmation number. Where the score loses points: no annualization of the $90/month OTC increase ($1,080/year), no connection of that dollar figure to Marie&apos;s stated financial stress, and an unstructured doctor search that burned unnecessary time on a fragile consumer who could have hung up at any of those 5-minute silences.</p>
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
              { cat: 'Lead Quality', score: 15, max: 20 },
              { cat: 'Signal Reading', score: 13, max: 20 },
              { cat: 'Math Breakdown', score: 10, max: 20 },
              { cat: 'Objection Handling', score: 13, max: 15 },
              { cat: 'Call Outcome Quality', score: 9, max: 10 },
              { cat: 'Compliance', score: 19, max: 20 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>79/100 — earned enrollment on a high-difficulty call. Penalized for call inefficiency and incomplete math presentation, not for the outcome.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Correct C-SNP Identification and Pivot (5:42):</strong> When Marie mentioned &ldquo;blood sugar,&rdquo; Karimah confirmed diabetes immediately and pivoted to the C-SNP plan — directly unlocking the $195 OTC benefit and $200 vision allowance. This diagnostic move was the foundation of the entire enrollment value proposition.</li>
            <li><strong>Transportation Need Surfaced and Confirmed as Covered (6:55):</strong> Consumer said she needed a doctor &ldquo;nearby&rdquo; or &ldquo;transportation.&rdquo; Karimah confirmed the transportation benefit was included at 16:29, removing a concrete barrier before it became an objection. This kept the consumer engaged through the entire 96-minute call.</li>
            <li><strong>Persistent Doctor Search with Genuine Advocacy (9:59):</strong> Karimah spent 25 minutes finding Dr. Pierre Dorsainville on Congress Park Drive — in-network, close to Marie&apos;s new address, accepting new patients. She did not give up or offer a placeholder. For a consumer who had no doctor and needed one urgently, this was the advocacy that sealed the enrollment.</li>
            <li><strong>Clean and Complete Phase VI Execution (1:05:59):</strong> All seven Phase VI elements delivered — intent confirmed, plan name stated, $0 premium disclosed, disenrollment warning read, May 1st effective date stated multiple times, understanding confirmed, and voice signature obtained with name, DOB, and agreement. Confirmation number issued and spelled out letter by letter. No gaps.</li>
            <li><strong>Warm, Patient Rapport Through Chaos (28:56):</strong> A child or pet disrupted Marie&apos;s home mid-call at 28:56. Karimah waited without pressure and re-established contact. That patience kept a fragile, cooperative consumer from hanging up.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC3 · 37:37, 38:07, 51:41</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Math Not Completed — No Annualization or Humanization</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Marie said &ldquo;I have to go back to work — I need money&rdquo; at 51:41. The plan was adding $90/month in OTC groceries ($1,080/year), $200 for glasses, and covering all medications. None of this was annualized and none of it was connected to her stated financial reality. The emotional case for enrollment was left entirely unmade. Karimah had the number and she had the words — the only missing step was connecting them.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Marie, you just told me you need money. Starting May 1st, this plan gives you $195 every month for groceries — that&apos;s $90 more than you&apos;re getting now, automatically, without working. Over a year, that&apos;s more than $1,000 extra just for food. This plan puts money back in your pocket so you don&apos;t have to choose between food and medicine.&rdquo;</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC1 · 9:59, 13:24, 30:05, 33:23</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Extended Unstructured Doctor Search</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>The doctor search from 9:59 to roughly 33:59 consumed 25 minutes — multiple multi-minute holds with no updates. Consumer engagement dropped to near-silence. The outcome was correct (a close doctor was found), but the execution was inefficient. With a consumer this cooperative and this fragile, any one of those long silences could have been a hangup.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Let me take about 60 seconds to find you the closest doctor.&rdquo; Pull top 2 candidates before coming back on the line. Then: &ldquo;I found your doctor — Dr. Pierre Dorsainville on Congress Park Drive, two miles from you. I&apos;m going to set you up with him.&rdquo; Move to confirmation immediately. Same outcome in 5 minutes instead of 25.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Gold Audit */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Client Gold Audit</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #1 · 51:41 · MISSED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;I have to go back to work — I need money.&rdquo;</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>Core fear: financial survival. Marie is 65, diabetic, on Social Security only, and feels she needs to return to work to survive despite not being physically able. This was the most powerful Client Gold on this call — Karimah had the dollar figures to respond to it directly. The acknowledgment was minimal and the pivot moved past it immediately.</p>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #2 · 1:23:00 · MISSED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;I&apos;m always lonely every day — that gives me stress.&rdquo;</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>Surfaced post-enrollment during the SDOH survey — could not be retroactively deployed as an enrollment anchor. But it deserved a genuine human response connecting the plan&apos;s care management resources to Marie&apos;s isolation. The connection to Dr. Pierre&apos;s office — &ldquo;they&apos;re going to know your name, know your history&rdquo; — was available and unused.</p>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #3 · 1:23:38 · PARTIALLY USED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;I only have Social Security little money to pay all that — it&apos;s hard.&rdquo;</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>Karimah acknowledged this warmly — &ldquo;hopefully being on this plan will help that get a little better&rdquo; — but did not connect it to the $1,080/year OTC increase or the zero-copay structure that directly addresses it. The numbers were sitting right there.</p>
            </div>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Karimah — this was a real win. You enrolled a fragile, newly eligible consumer into exactly the right plan, found her a doctor close to her home, and held the call together through 96 minutes of chaos. That takes patience and real skill. The C-SNP identification at 5:42 is what this entire enrollment hinged on — that single question unlocked the $195 OTC benefit and made the plan worth enrolling in. You should feel good about this one.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '14px' }}>Here&apos;s where you leave money on the table: you never make the math feel real. You told Marie she&apos;d get $195 a month. At 51:41, she told you &ldquo;I have to go back to work — I need money.&rdquo; That was your moment. &ldquo;Marie, you just told me you need money. Starting May 1st, this plan gives you $195 every month for food — that&apos;s $90 more than you&apos;re getting now, automatically, without working.&rdquo; You had the number. You had her words. Connect them every time. And before your next long doctor search, set the consumer&apos;s expectation first: &ldquo;Let me take 60 seconds to find you the closest doctor.&rdquo; Then come back with the answer, not a progress update.</p>
        </section>

      </div>
    </PageShell>
  )
}
