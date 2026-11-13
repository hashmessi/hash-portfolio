# Phase 02 Plan: Hero, Thesis & Signature Trust Layer Panels

**Phase:** 02  
**Goal:** Build the cinematic scroll narrative: the high-authority Hero section, the pinned scroll Thesis, and the 4 large Signature Case Panels showcasing the "Trust Layer for Autonomous AI" with interactive SVG state-machine mechanics.  
**Assigned Roles:**
- Lead Architect (`/brutal-product-engine`): Deterministic state logic for interactive visual components, casing data flow.
- Impeccable Design Engineer (`/impeccable`): Hero spatial layout, proof badges, typography hierarchy, Apple-style viewport framing, editorial project text.
- Motion & SVG Choreographer (`/impeccable animate`): Lenis smooth scrolling, GSAP ScrollTrigger pinning, SVG animations (needle sweep, firewall gate slam, receipt hash sealing, blast-radius pulse).
- QA & Verification Lead (`/gsd-ui-review`): 60 fps scrub audit, touch-device fallback, reduced-motion compliance.

---

## Wave Breakdown

### Wave 1: Hero & Scroll Thesis Section
- **Task 1.1**: Build `HeroSection.tsx`:
  - Eyebrow badge: `AI SYSTEMS ENGINEER` with pulsing status beacon.
  - Fluid display headline: `I build the trust layer for autonomous AI.`
  - Subhead (max 56ch): Communicates runtime guardrails, payment gates, governed data operations.
  - Proof strip: 🏆 1st Prize, AI Full-Stack Hackathon · 🛡️ Best Cybersecurity Solution, TLN · ⚡ 10 products, 5 live demos.
  - Gumroad tactile CTAs: `View selected work ↓` (primary accent), `GitHub ↗`, `Résumé ↗`.
- **Task 1.2**: Implement `ThesisSection.tsx`:
  - Pinned 150vh viewport scrub using GSAP ScrollTrigger.
  - Text phase crossfade: "AI used to answer questions." → "Now it takes actions." → "So who decides what it's allowed to do? Deterministic code."
  - Mobile fallback: Clean non-pinned fade-up sequence.

### Wave 2: Interactive SVG Visual Mechanics
- **Task 2.1**: Build `TrustDial.tsx` (TrustPulse mechanic):
  - SVG gauge with 4 Bayesian parameter bars (AI Evidence, Fact-Check API, Community Signals, Source Authority).
  - Score counter sweeps from 0% to 87.4% [VERIFIED] as user scrolls or interacts.
  - Hackathon 1st Prize badge overlay.
- **Task 2.2**: Build `FirewallGate.tsx` (ChainBreak mechanic):
  - Agent tool-calling stream: `GET /api/profile` [ALLOW] → `POST /api/summarize` [ALLOW] → `DELETE /api/users` [DANGER].
  - Heavy mechanical gate drops with crimson flash: `[BLOCK - VIOLATION #SEC-403]`.
  - Causal data lineage highlights in JetBrains Mono.
- **Task 2.3**: Build `PromiseSeal.tsx` (PromiseLoop mechanic):
  - Split-screen comparison card: Buyer Approved Promise Receipt vs. Merchant Delivery Payload.
  - SHA-256 seal animation (`a8f9...31c2`).
  - Drift engine detects SKU mismatch → PayPal capture locked; match confirmed → funds released.
- **Task 2.4**: Build `BlastRadius.tsx` (Warden-MCP mechanic):
  - Multi-database topology graph showing PostgreSQL and MongoDB nodes.
  - Blast-radius perimeter expands showing impacted personal data records.
  - Human Approval toggle switches from `PENDING` to `APPROVED`.
  - SHA-256 hash-chained immutable audit block links into the ledger.

### Wave 3: Signature Section Assembly & Scroll Choreography
- **Task 3.1**: Build `SignatureSection.tsx`:
  - 4 full-viewport panels alternating or grid-paired with Left editorial copy and Right interactive visual.
  - Left column: Award chip, project title, one-liner, 3 outcome bullets, "Key Decision" pull-quote, stack tags, live demo & GitHub links.
  - Right column: Houses the corresponding SVG visual wrapped in a Gumroad tactile container.
- **Task 3.2**: Wire `SmoothScroll.tsx` with Lenis and sync with GSAP `ScrollTrigger.update()`.
- **Task 3.3**: Implement `@media (prefers-reduced-motion: reduce)` fallbacks across all 4 panels.

---

## Verification Criteria & Quality Gate

1. Hero headline passes the 5-second test: a first-time visitor immediately understands Hashvanth builds trust layers for AI.
2. Scroll scrub operates at 60 fps without dropped frames or paint flashing.
3. TrustDial, FirewallGate, PromiseSeal, and BlastRadius animate reliably and reset cleanly when scrolling backwards.
4. All external links for live demos (Kappa Vercel, Render) and GitHub repositories are hooked up to real valid URLs.
5. Mobile view (375px) renders full text and visuals stacked vertically without horizontal overflow.

