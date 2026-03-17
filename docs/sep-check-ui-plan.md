# SEP Check — Aesthetic & UX Improvement Plan (v2)

> **Status:** Updated based on audit feedback. Ready for implementation.
> 
> **Goal:** Make the page feel more premium, cohesive, and legible without changing structural layout or functional behavior. Focus on eliminating "tint fatigue," adding satisfying micro-interactions, and building safety into destructive actions.

---

## Summary of Key Improvements

1. **Eliminated background tint floods** — moved accent to borders and text
2. **Standardized glass treatment** — consistent 0.5 alpha, inset highlights, 10px radius
3. **Added state change animations** — smooth morphs between active/dismissed/unchecked
4. **Fixed critical legibility** — script block now high-contrast
5. **Built reset safety** — confirmation + 5-minute undo window
6. **Respects motion preferences** — all animations have reduced-motion fallbacks
7. **Tighter spring physics** — progress bar feels precise, not bouncy

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
  background: rgba(255, 255, 255, 0.5);
}
```

**Rationale:** Reduced background alpha from 0.55 to 0.5 for consistency across all glass elements. The 4px left border creates immediate visual hierarchy without the heavy tint flood.

---

#### Signal Cards — State Change Animation (NEW)
Add transition properties for smooth state morphing:
```css
.signalCard {
  /* existing properties */
  transition: border-color 0.25s ease, 
              background 0.25s ease, 
              box-shadow 0.25s ease,
              transform 0.15s ease;
}

.signalDismissed {
  opacity: 0.45;
  background: var(--cream-2);
  border-color: var(--ink-20);
  transform: scale(0.995);
}

/* Smooth morph for check icon */
.signalCheck {
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), 
              color 0.15s ease;
}
```

**Why:** State changes feel mechanical without animation. The scale(0.995) on dismissed cards creates subtle spatial hierarchy—active cards feel "closer," dismissed cards feel "receded." The cubic-bezier on the check icon adds a satisfying "pop."

---

#### Signal Cards — Base Glass Treatment
Add to `.signalCard`:
```css
.signalCard {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1.5px solid rgba(19, 17, 16, 0.08);
  border-radius: 10px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7), 
              0 4px 12px rgba(0,0,0,0.03);
  will-change: transform;
  overflow: hidden;
  transition: border-color 0.25s ease, 
              background 0.25s ease, 
              box-shadow 0.25s ease,
              transform 0.15s ease;
}
```

**Glass Treatment Consistency Rule:**
All glass-like elements should follow this exact pattern:
- `background: rgba(255, 255, 255, 0.5)` — standardized alpha
- `backdrop-filter: blur(12px)` — consistent blur radius
- `border: 1.5px solid rgba(19, 17, 16, 0.08)` — subtle definition
- `box-shadow: inset 0 1px 0 rgba(255,255,255,0.7), 0 4px 12px rgba(0,0,0,0.03)` — top highlight + soft drop shadow
- `border-radius: 10px` — unified corner radius

**Apply this to:** Signal cards, FEMA block, missed block, ref section, AEP block, OEP block.

**Why the inset highlight matters:** Without it, glass looks like frosted plastic. The 1px white inset creates the "light from above" cue that makes surfaces feel elevated and dimensional.

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

#### AEP Block — Tint Reduction (Revised)
```css
/* BEFORE */
.aepBlock {
  background: var(--sage-tint);  /* Heavy solid tint */
  border: 1.5px solid rgba(106, 139, 110, 0.3);
}

/* AFTER */
.aepBlock {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1.5px solid rgba(106, 139, 110, 0.4);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.8), 
              0 4px 12px rgba(106,139,110,0.05);
}

.aepIcon { 
  color: var(--sage);  /* Stronger accent */
}

.aepTitle { 
  color: var(--sage-dark);  /* Maintain hierarchy through text */
}
```

**Why:** The original plan missed AEP/OEP blocks. These were using solid `sage-tint`/`mustard-tint` backgrounds—contributing to the same tint fatigue. Moving to glass treatment with stronger icon/title accents maintains visual punch without background floods.

---

#### OEP Block — Tint Reduction (NEW)
```css
/* BEFORE */
.oepBlock {
  background: var(--mustard-tint);  /* Heavy solid tint */
  border: 1.5px solid rgba(196, 154, 32, 0.3);
}

/* AFTER */
.oepBlock {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1.5px solid rgba(196, 154, 32, 0.4);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.8), 
              0 4px 12px rgba(196,154,32,0.05);
}

.oepIcon { color: var(--mustard-dark); }
.oepTitle { color: var(--mustard-dark); }

.oepResultYes {
  background: rgba(106, 139, 110, 0.08);  /* Subtle, not solid */
}

.oepResultNo {
  background: rgba(184, 68, 32, 0.05);  /* Subtle, not solid */
}
```

**Rationale:** Same treatment as AEP block. The result inner blocks now use subtle alpha backgrounds instead of solid tints, creating a cohesive "glass everywhere" system.

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

#### 3. Spring Progress Bar (Revised)
The `.progressFill` div currently has `transition: width 0.3s ease` in CSS. This cannot be replaced with a spring via CSS alone. Convert it to:

```tsx
<motion.div
  className={styles.progressFill}
  animate={{ width: `${(checkedCount / SIGNALS.length) * 100}%` }}
  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
/>
```

**Revised spring values:** Changed from `stiffness: 200, damping: 22` to `stiffness: 300, damping: 30`. 

**Why:** The original values created too much bounce for a progress bar, which should feel precise and grounded. These tighter values provide a snappy, professional feel without the "jelly" effect. Progress bars communicate completion status—excessive bounce undermines that clarity.

Remove the `transition` in CSS for this element.

**Accessibility:** Wrap in `prefers-reduced-motion` check:
```tsx
const prefersReducedMotion = useReducedMotion()
// ...
transition={prefersReducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 300, damping: 30 }}
```

---

### Accessibility — Motion & Focus (NEW)

All new animations must respect `prefers-reduced-motion`:

```tsx
import { useReducedMotion } from 'framer-motion'

function SignalCard({ ... }) {
  const prefersReducedMotion = useReducedMotion()
  
  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3 }}
    />
  )
}
```

**Focus State Improvements:**
The keyboard shortcuts (1-6, R, F) exist but have no visual feedback. Add focus rings:

```css
.signalCard:focus-visible {
  outline: 2px solid var(--sage);
  outline-offset: 2px;
}

.resetBtn:focus-visible,
.femaBtn:focus-visible {
  outline: 2px solid var(--ink);
  outline-offset: 2px;
}
```

**Why:** Power users rely on keyboard navigation. Without focus indicators, the experience feels broken even when it technically works.

---

### Reset Confirmation & Undo (NEW)

The reset button (R key and "New call" button) currently clears all state instantly with no recovery path. In a live call workflow, accidental resets are catastrophic.

#### Phase 1: Confirmation Toast
Replace instant reset with a confirmation pattern:

```tsx
const [showResetConfirm, setShowResetConfirm] = useState(false)
const resetTimeoutRef = useRef<NodeJS.Timeout>()

function handleResetClick() {
  if (showResetConfirm) {
    // Second click — actually reset
    performReset()
    setShowResetConfirm(false)
  } else {
    // First click — show confirmation
    setShowResetConfirm(true)
    resetTimeoutRef.current = setTimeout(() => {
      setShowResetConfirm(false)
    }, 3000)
  }
}

function performReset() {
  // Store undo state
  sessionStorage.setItem('sepCheck_undo', JSON.stringify({
    signalStates: Array.from(signalStates.entries()),
    timestamp: Date.now()
  }))
  
  // Clear state
  setSignalStates(new Map(SIGNALS.map(s => [s.id, 'unchecked'])))
  // ... other resets
}
```

#### Phase 2: Undo Capability
Store pre-reset state in sessionStorage for 5 minutes:

```tsx
const [canUndo, setCanUndo] = useState(false)

useEffect(() => {
  const saved = sessionStorage.getItem('sepCheck_undo')
  if (saved) {
    const data = JSON.parse(saved)
    if (Date.now() - data.timestamp < 5 * 60 * 1000) {
      setCanUndo(true)
    } else {
      sessionStorage.removeItem('sepCheck_undo')
    }
  }
}, [signalStates]) // Check after reset

function handleUndo() {
  const saved = sessionStorage.getItem('sepCheck_undo')
  if (saved) {
    const data = JSON.parse(saved)
    setSignalStates(new Map(data.signalStates))
    sessionStorage.removeItem('sepCheck_undo')
    setCanUndo(false)
  }
}
```

#### Visual Design
```css
.resetBtnConfirm {
  background: var(--tc-tint);
  border-color: var(--terracotta);
  color: var(--tc-dark);
  animation: pulse-warning 1.5s ease-in-out infinite;
}

@keyframes pulse-warning {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.undoBanner {
  position: fixed;
  bottom: var(--space-5);
  left: 50%;
  transform: translateX(-50%);
  background: var(--ink);
  color: var(--cream);
  padding: var(--space-3) var(--space-5);
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  z-index: 100;
}

.undoBtn {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.3);
  color: inherit;
  padding: var(--space-1) var(--space-3);
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
}
```

**Why:** In high-pressure call environments, accidental clicks happen. The two-phase reset (click once to confirm intent, click again to execute) plus the 5-minute undo window provides safety without friction. The pulsing button on first click makes the required second action obvious.

---

### Clean Exit — Enhanced Animation (Revised)

The current `y: 8 → 0` animation is too subtle for a workflow completion moment.

```tsx
<motion.div
  className={styles.cleanExit}
  initial={{ opacity: 0, y: 20, scale: 0.98 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ 
    type: 'spring', 
    stiffness: 250, 
    damping: 25,
    delay: 0.1 
  }}
>
```

**CSS Enhancement:**
```css
.cleanExit {
  background: var(--cream-2);
  border-top: 2px solid var(--ink-20);
  border-bottom: 2px solid var(--ink-20);  /* Visual closure on both sides */
  border-radius: 10px;
  padding: var(--space-6);
  text-align: center;
  position: relative;
}

.cleanExit::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: var(--ink-20);
  border-radius: 0 0 3px 3px;
}
```

**Why:** The completion state deserves a moment of finality. The scale adds weight, the slight delay lets the user finish their last action before the UI responds, and the decorative top bar creates visual "punctuation" to the workflow.

---

### Staggered Entrance — Optimization (Revised)

The original plan suggests `variants` with `staggerChildren: 0.05` on the grid container. This has a subtle bug: it will re-stagger on every re-render if not properly keyed.

**Better approach:**
```tsx
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30
    }
  }
}

// In render:
<motion.div 
  className={styles.signalGrid}
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  {SIGNALS.map((sig, idx) => (
    <motion.div
      key={sig.id}
      variants={itemVariants}
      // No custom prop needed — variants handle stagger automatically
    >
      <SignalCard ... />
    </motion.div>
  ))}
</motion.div>
```

**Key insight:** Framer Motion's `variants` system handles stagger automatically when children use the same variant names. The parent container controls timing, children just declare their states.

**Reduced Motion:**
```tsx
const prefersReducedMotion = useReducedMotion()
const containerVariants = {
  visible: {
    transition: {
      staggerChildren: prefersReducedMotion ? 0 : 0.05,
      delayChildren: prefersReducedMotion ? 0 : 0.1,
    }
  }
}
```

---

### SEP Found — Micro-reward Animation (Revised)

**Trigger:** Only on first activation (state changing from 'unchecked' or 'dismissed' → 'active').

**Implementation:**
```tsx
const [hasPulsed, setHasPulsed] = useState<Set<string>>(new Set())

useEffect(() => {
  if (state === 'active' && !hasPulsed.has(sig.id)) {
    setHasPulsed(prev => new Set([...prev, sig.id]))
    
    // Trigger animation via ref or state
    animate(scope.current, 
      { scale: [1, 1.02, 1] },
      { type: 'spring', stiffness: 400, damping: 20 }
    )
  }
}, [state, sig.id, hasPulsed])
```

**Why:** The first activation is a discovery moment—it deserves a micro-celebration. Subsequent toggles shouldn't pulse (that would be annoying). The scale is subtle (1.02 not 1.015) so it's noticeable but not jarring.

---

### Right Column Z-Index & Overlap (NEW)

The sticky right column (`top: 80px`) and sticky summary strip (`top: 56px`) can collide during scroll.

**Fix:**
```css
.summaryStrip {
  position: sticky;
  top: 56px;
  z-index: 10;  /* Base layer */
}

.rightCol {
  position: sticky;
  top: 80px;
  z-index: 5;  /* Lower than summary strip */
}
```

**Why:** During scroll, the summary strip should slide OVER the right column content, not behind it. This maintains the hierarchy: summary strip is transient/important, right column is persistent/reference.

---

### Rule Number Circle — Text Contrast Fix (NEW)

The plan mentions filling `.ruleNum` with `--ink` background but doesn't specify text color.

```css
.ruleNum {
  background: var(--ink);
  color: var(--cream);  /* ADD THIS — was missing */
  border: none;
  font-size: 0.5625rem;
  font-weight: 700;
  border-radius: 50%;
  width: 17px;
  height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 3px;
}
```

**Why:** Ink background with ink text (the default) has ~1.5:1 contrast ratio—completely illegible. Cream text on ink background achieves ~12:1 contrast, well above WCAG AAA.

---

## What Is NOT Changing

- No layout changes (the 2-column grid stays)
- No structural JSX changes (no components added or removed)
- No color token changes (same `--sage`, `--mustard`, `--terracotta` palette)
- No behavior or logic changes
- Responsive breakpoints at 960px and 640px are untouched

---

## Background Alpha Standardization (NEW)

The plan originally had inconsistent background values across elements. Here's the unified system:

| Element | Old Value | New Value | Reasoning |
|---------|-----------|-----------|-----------|
| Signal cards (base) | 0.45 | **0.5** | Sweet spot for legibility on textured backgrounds |
| Signal cards (active) | 0.7 tint | **0.5** | Consistent with base, border-left provides accent |
| AEP block | solid tint | **0.5** | Remove tint fatigue |
| OEP block | solid tint | **0.5** | Remove tint fatigue |
| FEMA results | 0.55 | **0.55** | Keep—slightly higher for result importance |
| Active summary | solid tint | **0.5** | Remove tint fatigue |
| Deadline calc | cream-2 | **cream-2** | Keep—needs to be distinct as interactive widget |

**Rationale:** Standardizing on 0.5 for most elements creates visual cohesion. Elements that require higher prominence (FEMA results with matches, interactive widgets) can deviate intentionally, not accidentally.

---

## Implementation Priority (NEW)

### Phase 1: Foundation (Immediate Impact)
1. **Tint reduction** on signal cards, AEP/OEP blocks, active summary
2. **Script block legibility** fix (critical for call flow)
3. **Background alpha standardization** to 0.5
4. **Rule number text color** fix (accessibility)

### Phase 2: Interaction Polish
5. **Hover lift** on signal cards
6. **State change animations** (active ↔ dismissed)
7. **Spring progress bar**
8. **Focus states** for keyboard navigation

### Phase 3: Animation Layer
9. **Staggered entrance** on page load
10. **SEP found micro-reward** (first activation only)
11. **Clean exit enhancement**

### Phase 4: Safety & Polish
12. **Reset confirmation** with undo
13. **Reduced motion** support throughout
14. **Z-index fixes** for sticky elements

**Why this order:** Foundation changes (Phase 1) improve the experience for every user immediately. Interaction polish (Phase 2) makes the UI feel responsive. Animation (Phase 3) adds delight but isn't critical. Safety features (Phase 4) protect against edge cases.

---

## Files Affected

| File | Type | Scope |
|---|---|---|
| `src/app/(hub)/preview/sep-check/page.module.css` | CSS | Signal cards, AEP, FEMA, script, deadline, right col |
| `src/app/(hub)/preview/sep-check/page.tsx` | TSX | Progress bar, stagger entrance, SEP found pulse |
