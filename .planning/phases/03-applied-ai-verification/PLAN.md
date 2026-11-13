# Phase 03 Plan: Applied AI, Case Studies, Responsive Hardening & Full Verification Gate

**Phase:** 03  
**Goal:** Deliver the remaining content sections (Applied AI, More Builds, Engineering Manifesto, Metrics, Contact), build the deep-dive Case Study route (`/work/[slug]`), execute responsive hardening across all breakpoints (375px to 1440px), and pass the full engineering verification gate (Lighthouse 95+, WCAG 2.1 AA, 0 contrast errors).  
**Assigned Roles:**
- Lead Architect (`/brutal-product-engine`): Dynamic routing for `/work/[slug]`, static export configuration, metadata & OpenGraph tags.
- Impeccable Design Engineer (`/impeccable`): Applied AI tactile cards, More Builds list rows, Manifesto typographic rhythm, Contact section design.
- Verification QA Lead (`/gsd-ui-review`): Run the 6-pillar UI review, contrast audit across Light and Dark modes, accessibility check, Lighthouse speed check.

---

## Wave Breakdown

### Wave 1: Applied AI, More Builds & Manifesto Sections
- **Task 1.1**: Build `AppliedAISection.tsx`:
  - 3 medium Gumroad tactile cards:
    - `Maruthuva TSL`: Tamil Sign Language clinic bridge, MediaPipe gestures, Sarvam AI audio.
    - `SmartAttend`: Rust ONNX inference engine, callout metric badge **~1.24s on 57 students**.
    - `Puma-X`: Biomechanical foot mechanics, pronation analysis, ranking rules.
  - Desktop responsive grid / horizontal snap row; mobile vertical stack.
- **Task 1.2**: Build `MoreBuildsSection.tsx`:
  - Compact tactile list rows for `DealClose` (28s real estate trust pipeline) and `FitBridge` (AI fitness & meal engine).
  - Hover reveals full tech stack badges and outbound action arrows.
  - Faculty Feedback Analyzer omitted from main view per panel verdict.
- **Task 1.3**: Build `ManifestoSection.tsx` & `MetricsSection.tsx`:
  - Typographic statement: "Models suggest. Code decides. Every action is auditable."
  - 4 Focus Area pills in JetBrains Mono.
  - 3 animated counter cards: 2 Awards · 10 Products · 5 Live Demos.
- **Task 1.4**: Build `ContactSection.tsx`:
  - High-impact closing callout: "Building agents that need guardrails?"
  - Open roles: AI Engineering, AI Systems, Forward-Deployed.
  - Tactile action buttons: Email, GitHub, LinkedIn, Résumé.

### Wave 2: Case Study Template & Routing (`/work/[slug]`)
- **Task 2.1**: Implement `src/app/work/[slug]/page.tsx`:
  - Dynamic route reading project metadata, outcomes, architecture notes, and key decisions from `projects.ts`.
  - Architecture breakdown section showing ALLOW/BLOCK gate placement.
  - Embedded video player placeholder / live demo frame for PromiseLoop & ChainBreak.
  - "Next Project →" loop footer for continuous recruiter engagement.
- **Task 2.2**: Configure static generation (`generateStaticParams`) for instant zero-latency page transitions.

### Wave 3: Responsive Hardening, Accessibility & Full Verification Gate
- **Task 3.1**: Mobile inspection at 375px, 768px, 1024px, 1440px:
  - Verify touch targets ≥ 44px.
  - Confirm zero horizontal scroll or element clipping.
  - Ensure all Gumroad buttons and cards depress cleanly on touch.
- **Task 3.2**: Accessibility & Contrast Validation:
  - Test all text contrast ratios (≥ 4.5:1 for body copy in both Dark and Light modes).
  - Ensure keyboard focus rings (`outline-2 outline-accent`) on all interactive buttons and links.
  - Semantic landmark audit (`<main>`, `<header>`, `<nav>`, `<section>`, `<footer>`).
- **Task 3.3**: Production Build & Final Verification:
  - Run `next build` to confirm static export compiles with 0 errors.
  - Run final git diff review to ensure zero dead code or accidental files.

---

## Verification Criteria & Quality Gate

1. `next build` generates 100% static HTML pages with zero errors.
2. All 9 projects from copy document are accessible and correctly framed.
3. Contrast ratios exceed 4.5:1 across both Dark and Light modes.
4. Mobile layout at 375px width has zero horizontal overflow and readable text hierarchy.
5. All 15 checks in `portfolio-design-spec.md` Section 10 (Design Critique Lock C1–C15) pass.

