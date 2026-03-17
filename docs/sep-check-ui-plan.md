# SEP Check — Aesthetic & UX Improvement Plan

> **Context for the auditing LLM:** This document describes a set of planned UI/UX improvements to the SEP Check page at `src/app/(hub)/preview/sep-check/page.tsx` and its companion `page.module.css`. The goal is to make the page feel more premium and legible without changing any structural layout or functional behavior. **No changes have been implemented yet.** This plan is provided for external audit and critique before execution.

---

## About This Page

The SEP Check page is a live workflow tool used by insurance agents during calls to identify qualifying Special Enrollment Periods (SEPs) for Medicare beneficiaries. It consists of:

- A **left column** with a signal board (6 expandable signal cards), an enrollment period banner, a FEMA disaster check, and a progress bar
- A **right column** (sticky) with an active SEP summary, a "most missed" collapsible, and a call flow order reference
- A **full-width cheat sheet** at the bottom that expands/collapses

The app uses **Next.js**, **Framer Motion**, **CSS Modules**, and **Carbon icons**. The design language is a "Dark Forensic" / "IBM-but-better" aesthetic — dark ink on cream, with sage, mustard, and terracotta as the accent tones.

---

## Diagnosed Problems

### 1. Tint Fatigue — Background Flood
The biggest visual issue. When a signal card becomes active, the entire card background fills with a sage tint (`rgba(238, 243, 239, 0.7)`). The same happens to the AEP block, FEMA results, and the right column active summary. When multiple states are tinted simultaneously, the eye has no anchor — everything reads as equally important.

**Pattern:** heavy background fills are being used to communicate state, but color belongs in borders and text, not flood fills.

### 2. Glassmorphism Lacks Dimensionality
The signal cards and info blocks use `backdrop-filter: blur(12px)` and `rgba(255, 255, 255, 0.45)` backgrounds — which is the right direction — but without the top inset highlight that makes glass look like glass. The result is flat frosted panels rather than elevated surfaces.

### 3. Hover States Are Flat
`.signalCard` only transitions `border-color` and `box-shadow` on hover. There's no spatial lift, making the cards feel like static text blocks even though they're interactive.

### 4. `.scriptBlock` Is Low Contrast
The "What to say" block uses a `2px solid var(--ink-20)` left border (nearly invisible) and a `var(--ink-60)` text color. This is the most action-critical text on the page during a live call — it should be the most legible, not the dimmest.

### 5. `.deadlineCalc` Disappears
The deadline calculator lives inside expanded signal cards and uses `var(--cream-2)` for its background — identical to the panel it sits inside, so it reads as flat content. Given it's time-sensitive, it needs a visual edge.

### 6. Right Column Not Addressed
`.activeSummary`, `.ruleBlock`, and `.missedBlock` all have isolated styling issues. `.ruleNum` circles are white/outlined and look like footnotes. `.activeSummary` has the same tint flood problem as the signal cards. Neither was in the original plan.

### 7. Animation Quality Is Mechanical
- The progress bar uses `transition: width 0.3s ease` — a CSS transition — and cannot take a spring. It needs to be converted to a Framer `motion.div`.
- Signal cards appear all at once on load. No staggered entrance.
- Activating a signal (clicking "SEP found") has no micro-reward feedback.
- The `.cleanExit` (all signals checked, none found) already uses Framer, but a weak `y: 8` fade — not the moment it deserves.

---

## Proposed Changes

### CSS — `page.module.css`

#### Signal Cards — Active State
```css
/* BEFORE */
.signalActive {
  border-color: var(--sage);
  box-shadow: 0 0 0 1px var(--sage);
  background: rgba(238, 243, 239, 0.7);
}

/* AFTER */
.signalActive {
  border-color: var(--sage);
  border-left: 4px solid var(--sage);
  box-shadow: 0 8px 20px rgba(45, 90, 61, 0.07);
  background: rgba(255, 255, 255, 0.55);
}
```

#### Signal Cards — Base Glass Treatment
Add to `.signalCard`:
```css
box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7), 0 4px 12px rgba(0,0,0,0.03);
will-change: transform;
```

#### Signal Cards — Hover Lift
```css
.signalCard:hover {
  transform: translateY(-2px);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.8), 0 8px 20px rgba(0,0,0,0.07);
  border-color: rgba(19, 17, 16, 0.18);
}
.signalTap:hover .signalCheck {
  transform: scale(1.1);
}
```
Add `transition: transform 0.15s` to `.signalCard` base.

#### AEP Block — Tint Reduction
```css
.aepBlock {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1.5px solid rgba(106, 139, 110, 0.4);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.8), 0 4px 12px rgba(106,139,110,0.05);
  /* remove the solid sage background */
}
```
The sage accent lives in the icon, title color, and border — not the background.

#### FEMA Results — Tint Reduction
```css
.femaResult {
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(106, 139, 110, 0.2);
  border-left: 3px solid var(--sage);
  /* remove the solid sage-tint background */
}
```

#### Script Block — Legibility Fix
```css
.scriptBlock {
  border-left: 3px solid var(--sage); /* was 2px solid var(--ink-20) */
  background: rgba(45, 90, 61, 0.04);
}
.sepScript {
  color: var(--ink); /* was var(--ink-60) */
}
```

#### Deadline Calc — Visibility Fix
```css
.deadlineCalc {
  border: 1px solid rgba(184, 68, 32, 0.15);
  border-left: 3px solid var(--terracotta);
}
.deadlineBtn {
  transition: background 0.15s, transform 0.1s;
}
.deadlineBtn:active {
  transform: scale(0.97);
}
```

#### Active Summary (Right Column) — Tint Reduction
```css
.activeSummary {
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(106, 139, 110, 0.25);
  border-left: 4px solid var(--sage);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.7), 0 4px 12px rgba(0,0,0,0.03);
  /* remove the sage-tint background */
}
```

#### Rule Block — Step Number Treatment
```css
.ruleNum {
  background: var(--ink);
  color: var(--cream);
  border: none; /* was 1px solid var(--ink-20), outlined */
}
```

#### Clean Exit — Visual Close
```css
.cleanExit {
  border-top: 2px solid var(--ink-20);
}
```
The existing Framer animation on this element (`y: 8 → 0`) is fine; just needs the CSS border to feel like a proper end-state.

---

### Animations — `page.tsx`

#### 1. Staggered Card Entrance
The `SIGNALS.map(...)` block inside `.signalGrid` renders cards all at once. Wrap the grid container in a Framer `motion.div` with `variants` using `staggerChildren: 0.05`, and give each card a `motion.div` wrapper with `initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}`.

#### 2. SEP Found — Micro-reward
When a signal state changes to `'active'`, trigger a brief `scale` pulse on the card. The cleanest approach: make the `.signalCard` a `motion.div` and use `useAnimate` to fire `scale: [1, 1.015, 1]` on state change via a `useEffect` keyed to `state === 'active'`.

#### 3. Spring Progress Bar
The `.progressFill` div currently has `transition: width 0.3s ease` in CSS. This cannot be replaced with a spring via CSS alone. Convert it to:
```tsx
<motion.div
  className={styles.progressFill}
  animate={{ width: `${(checkedCount / SIGNALS.length) * 100}%` }}
  transition={{ type: 'spring', stiffness: 200, damping: 22 }}
/>
```
Remove the `transition` in CSS for this element.

---

## What Is NOT Changing

- No layout changes (the 2-column grid stays)
- No structural JSX changes (no components added or removed)
- No color token changes (same `--sage`, `--mustard`, `--terracotta` palette)
- No behavior or logic changes
- Responsive breakpoints at 960px and 640px are untouched

---

## Files Affected

| File | Type | Scope |
|---|---|---|
| `src/app/(hub)/preview/sep-check/page.module.css` | CSS | Signal cards, AEP, FEMA, script, deadline, right col |
| `src/app/(hub)/preview/sep-check/page.tsx` | TSX | Progress bar, stagger entrance, SEP found pulse |
