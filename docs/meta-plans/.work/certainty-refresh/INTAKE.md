# INTAKE — Certainty System Refresh

## Confirmed summary (approved by Jonathan, 2026-06-12)

Refresh the Certainty System — a Medicare sales training tool ("part tool, part encyclopedia") used by agents on Macs and PCs. Goals: clean up the codebase, improve design/UI/UX, make the site more intuitive for agents, and identify what can be removed or upgraded — including issues the owner may not know to ask about. This is a refresh, not a rebuild: no drastic re-architecture. Trigger is exploratory ("see what a fresh, capable engineering look surfaces"); the definition of "done" is intentionally open and should be PROPOSED by the analysis pass, then confirmed by the user. Trainee portal is confirmed for full deletion. FEMA data pipeline must not be touched. Objection handbook and SEP content are locked at the content level — design-level polish is allowed but the substance works and must not be destroyed. Primary worry: breaking what agents use daily.

## Raw answers (trimmed)

**Q1 — What:** "Figure out how this can be improved from a technical standpoint... clean up the code and make it look better and upgrade it... part tool part encyclopedia... make it a bit more intuitive... things out there on the internet that can make this better for agents to use. People are using it across Macs and PCs... improve the code, the design, the UI/UX, all of that, even things I may not even be paying attention to or understand."

**Q2 — Project root:** /Users/jonathanhall/Desktop/Lenticular-Coding-Base/certainty-system (confirmed).

**Q3 — Why now:** "I just want to see if we can improve it. I want to see what Fable 5 can do." Exploratory; no specific breakage or complaint cited.

**Q4 — Done:** "I don't know what done looks like. That's why I'm looking for [you] to help me figure out what can be improved." → Done = to be proposed by analysis, confirmed by user.

**Q5 — Fixed constraints:** "I don't know what's fixed... I don't want to drastically change it to the point where it's just really crazy. I just want to refresh." Assistant's assumptions (stay on Next.js/Vercel, existing paid services only, solo developer + Claude, no hard deadline) were presented and not contradicted.

**Q6 — Prior decisions:** Paused 7-phase refactor plan — user doesn't recognize it ("I don't know what that is") → treat as input, not obligation. Trainee portal — "we can delete that. I don't really need that." PDFs — user doesn't recognize them ("I don't know what the PDFs are") → flag for analysis.

**Q1 addendum (mid-pipeline, 2026-06-12):** "I'm also wondering about your perspective on the overall visual design of it, like a visual redesign or an upgrade." → A visual design upgrade/redesign opinion is explicitly in scope — the analysis should take a position on whether the current design language (Geist/Playfair, green-on-cream editorial style) should be kept and polished vs. upgraded, within the "refresh, not crazy rebuild" constraint.

**Q7 — Out of scope / worries:** FEMA data pipeline — do not touch. Objection content — do not change ("that stuff works, like the SEP stuff and the objection handbook... I don't want to destroy that"); design/UI/UX-level changes to those pages are acceptable. Worry: don't mess up what works.
