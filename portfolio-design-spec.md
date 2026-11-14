# Portfolio Website: Design & Build Spec (v2.0 Locked)

**Owner:** Hashvanth M U  
**Positioning:** *"I build the trust layer for autonomous AI."*  
**Aesthetic World:** Editorial billboard rhythm (adapted from extract.studio-DESIGN.md)
**Theme:** Light only
**Status:** **v3.0 Editorial** (Phase 04). Supersedes the v2.0 visual system (dark default, Gumroad tactile components).

---

## 1. Design Philosophy & Aesthetic (v3.0 Editorial)

Adapted from `extract.studio-DESIGN.md`: an editorial studio system, applied to a personal engineering portfolio. Adapt the pattern, don't copy the studio's name, wordmark, copy, imagery or ticker phrase.

1. **Billboard, then proposition.** A full-width heavy wordmark opens the page; a serif statement follows in a half-width measure.
2. **Typeset, not engineered.** Serif statements at regular weight; grotesk for captions and names; sentence case throughout.
3. **Exhibits, not cards.** Each interactive demo sits on an ink panel with its caption below. No box shadows, no pills, no gradient surfaces.
4. **Color belongs to the work.** White paper and near-black ink carry the page. The pale green fills one proof band. Blue, red and gold appear only inside the ink demos.
5. **Deterministic code decides.** The demos are state machines driven by real rules; they are never decorative.

### Core invariants
1. One idea per section; the rule-and-heading structure separates them.
2. Light only. The theme toggle and dark tokens were removed in Phase 04.
3. Motion is optional: all loops and the thesis pin stop under `prefers-reduced-motion`.
4. Static Next.js export; no layout shift from fonts (`next/font`, `display: swap`).

---

## 2. Design Tokens (v3.0)

### 2.1 Colors

| Token | Value | Role | Contrast |
|---|---|---|---|
| `--paper` | `#FFFFFF` | Canvas, index, tags | — |
| `--ink` | `#070707` | Text, 1px rules, exhibit and closing panels | 20.1:1 on paper |
| `--ink-2` | `#5A5A60` | Secondary text | 6.9:1 on paper, 6.4:1 on green |
| `--ink-2-rev` | `#A1A1A8` | Secondary text on ink | 7.9:1 |
| `--green` | `#E7FEDA` | Proof band, active index item, selection | — |
| `--rule-soft` | `#E4E4E0` | Non-ink dividers | decorative |
| `--allow` / `--block` / `--award` (paper) | `#0066CC` / `#D91F26` / `#8A6508` | Only where text sits on paper | 5.6 / 5.0 / 5.3:1 |
| `--allow` / `--block` / `--award` (on ink, `.on-ink`) | `#2997FF` / `#FF453A` / `#FFD60A` | Demo state colors | 6.7 / 5.9 / 14.3:1 on ink |

All text pairs were computed with the WCAG formula; the lowest text pair is 5.0:1.

### 2.2 Typography

| Role | Font | Notes |
|---|---|---|
| Statements, titles, ticker | **Instrument Serif** 400 | Regular weight only; italic for the thesis conclusion |
| Body, captions, labels, UI | **Instrument Sans** 400 / 700 | Bold for names; normal tracking |
| Wordmark | **Archivo** (wdth 62–125, wght 900) | SVG text, fitted to width |
| Demo telemetry | JetBrains Mono | Inside ink exhibits only |

Recipes (`globals.css`, fluid `clamp()` formulas from design.md):

| Class | Font | Size (1440px) | Line height | Use |
|---|---|---|---|---|
| `type-statement` | Serif | 44px | 1.25 | Proposition, thesis lines, manifesto |
| `type-detail-title` | Serif | 69px | 1.25 | Case-study one-liner |
| `type-ticker` | Serif | 104px | 1.5 | Closing ticker |
| `type-label` | Sans | 34px | 1.25 | Ruled section headings |
| `type-body` / `type-reading` | Sans | 21px | 1.5 / 1.4 | Captions and reading copy |
| `type-name` | Sans 700 | 21px | 1.25 | Project names, row labels |
| `type-small` | Sans | 18px | 1.5 | Index, tags, utility text |

Minimum rendered size: 11px (the 0/50/100 scale numbers on the dial are decorative and exempt).

### 2.3 Space, radius, motion
- Spacing: 9.3, 18.5, 23.2, 32.5, 37.1, 64.9, 74.2, 92.7, 111.3px (design.md scale, `--spacing-s1`…`s9`).
- Container: 1320px content, 60px gutters at ≥640px, 16px below.
- Radius: 9.3px media and index, 5px tags, 4.6px form. Nothing else is rounded.
- Motion: color 0.2s `cubic-bezier(.4,0,.2,1)`; closing ticker 40s linear; thesis scrub on scroll (Framer Motion `useScroll`); all disabled under reduced motion.

### 2.4 Components
Editorial primitives in `src/components/editorial/`: `FloatingIndex`, `ClosingPanel`, `TextLink`, `RuledHeading`, `ExhibitTile`, `LedgerRow`, `Wordmark`, `TypeExhibit`. Demos in `src/components/visuals/` share `Exhibit` and `ScenarioToggle`.

> **Scope of v3.0:** §1–2 are rewritten here. §3 (copy lock) and §4 (file structure) were written for v2.0; the copy in §3 still holds, but the component names in §4 are outdated. See `.planning/phases/04-editorial-redesign/PLAN.md` for the current structure.

---

## 3. Section Specifications & Copy Lock

Content source: `Portfolio — Final Website Copy.md` (Verbatim truth).

### 01 Hero Section
- **Eyebrow:** `AI SYSTEMS ENGINEER` (Mono badge with glowing green active heartbeat indicator)
- **Headline:** `I build the trust layer for autonomous AI.`
- **Subhead:** `AI agents can now browse, pay, delete data and sign deals. I build the systems that decide what they're allowed to do: runtime guardrails, payment gates and governed data operations, where deterministic code has the final say instead of a model's guess.`
- **Proof Strip:**
  - 🏆 `1st Prize, AI Full-Stack Hackathon`
  - 🛡️ `Best Cybersecurity Solution, TLN Cybersecurity Challenge`
  - ⚡ `10 products built · 5 with live demos`
- **Actions:**
  - `View selected work ↓` (Gumroad Primary Button)
  - `GitHub ↗` (Gumroad Secondary Button)
  - `Contact` (Gumroad Secondary Button). Per the copy doc; Résumé lives in Contact once the PDF exists.
- **Theme Toggle:** Floating or navbar-docked segmented tactile pill switch (`[ ☾ Dark ]` / `[ ☼ Light ]`).

---

### 02 Thesis Section (Apple-style Pinned Scroll Narrative)
- Pinned viewport scrub (300vh track, sticky viewport, Framer Motion `useScroll`, no GSAP):
  - Phase 1: *"AI used to answer questions."*
  - Phase 2 (Crossfade): *"Now it takes actions."*
  - Phase 3 (Accent lock): *"So who decides what it's allowed to do? Deterministic code."*
  - Reduced motion: no pin; all three lines render as a static stack.

---

### 03 Signature Work: The Trust Layer for AI (4 Large Interactive Case Panels)

Intro: *"As AI moves from answering questions to taking actions, the hard problem changes. It's no longer 'is the output good?' but 'should this action be allowed?' These four systems are my answer."*

Each project card features:
- Left: Editorial copy, problem, solution, 3 outcome bullets, key decision pull-quote, tech stack pills, and live demo / GitHub links.
- Right: a gate strip (`input → [gate] → effect`) showing where the deterministic check sits, then the interactive state-machine visual. Every toggle exposes `aria-pressed`, and the state is announced through a polite live region.
- PromiseLoop: click-to-load YouTube facade under the visual (no iframe until clicked).
- Optional `role` line (team size and contribution), rendered only when the data has it.

#### Project 01: TrustPulse
- **Award:** 🏆 `Overall 1st Prize, AI Full-Stack Hackathon`
- **One-liner:** Live credibility score for claims, which updates as evidence and consensus change.
- **Problem:** Misinformation moves faster than fact-checkers. A one-time "true/false" label goes stale as soon as new evidence or new sources appear.
- **Key Decision:** Credibility modeled as a probability that moves with Bayesian evidence, not a static binary label.
- **Interactive Visual:** Dynamic Trust Dial with 4 fillable Bayesian axis bars (AI Evidence, Fact-Check API, Community Consensus, Source Authority). Needle sweeps to live score `87.4% [VERIFIED]`.
- **Stack:** `Next.js 14` · `TypeScript` · `Gemini 1.5 Flash` · `Fact Check API` · `Supabase` · `PostgreSQL`
- **Links:** [Live Demo](https://trust-pulse-kappa.vercel.app/) · [GitHub](https://github.com/hashmessi/TrustPulse-)

#### Project 02: ChainBreak (+ ChainBreak-Web3)
- **Award:** 🛡️ `Best Cybersecurity Solution, TLN Cybersecurity Challenge`
- **One-liner:** A runtime firewall for AI agents that blocks unsafe actions before they execute.
- **Problem:** Agents have access to DBs, APIs and infrastructure. A single malicious or misaligned tool call can leak data or trigger unapproved mutations.
- **Key Decision:** Enforcement is 100% deterministic. A guardrail an LLM can be argued out of is not a guardrail.
- **Extension:** Includes **ChainBreak-Web3** (transaction simulation, calldata inspection, multi-step spending limits before signing).
- **Interactive Visual:** Multi-node agent tool-calling pipeline. A hazardous step enters (`DELETE /api/users`), causal lineage triggers red warning, and the mechanical gate slams shut: `[BLOCK - VIOLATION #SEC-403]`.
- **Stack:** `Python` · `FastAPI` · `React` · `Deterministic Policy Engine` · `Web3.js`
- **Links:** [Live Demo](https://chainbreak.onrender.com/) · [GitHub](https://github.com/hashmessi/ChainBreak) · [Web3 Extension](https://github.com/hashmessi/ChainBreak-Web3)

#### Project 03: PromiseLoop
- **One-liner:** AI shopping agents can't take your money until they deliver what you approved.
- **Problem:** An agent can authorize a payment, but authorization says nothing about whether the right product arrived at the agreed terms.
- **Key Decision:** Code decides whether money moves, not a model. The LLM can shop, but it cannot approve its own work.
- **Interactive Visual:** Dual-card reconciliation. Step 1: User approves intent → SHA-256 sealed receipt is generated. Step 2: Merchant fulfillment payload arrives → field-by-field diff runs. Step 3: Drift detected → PayPal capture locked; Match confirmed → funds released.
- **Stack:** `React` · `TypeScript` · `Python` · `FastAPI` · `PostgreSQL` · `PayPal APIs`
- **Links:** [Live Demo](https://promiseloop-web.onrender.com/) · [Demo Video](https://youtu.be/NWzrT7E8OqI) · [GitHub](https://github.com/hashmessi/Paypal-DEV)

#### Project 04: Warden-MCP
- **One-liner:** Governed data-deletion for AI agents with human sign-off, instant rollback, and hash-chained audit trails.
- **Problem:** Agents connected to company databases can wipe personal data across multiple systems with zero blast-radius visibility and no recovery path.
- **Key Decision:** Destructive actions are reversible by design because pre-execution snapshots are taken *before* deletion, never after.
- **Interactive Visual:** Cross-database topology (PostgreSQL + MongoDB). Agent requests deletion → blast-radius perimeter illuminates (`14 records across 3 tables`) → Human Approval Toggle flips → Hash-chain block connects (`SHA-256 #8a2f...`).
- **Stack:** `Node.js` · `TypeScript` · `Model Context Protocol (MCP)` · `PostgreSQL` · `MongoDB` · `Next.js`
- **Links:** [GitHub](https://github.com/hashmessi/Warden-MCP)

---

### 04 Applied AI Section (3 Medium Tactile Cards)
Intro: *"These projects take models off the benchmark page and put them in front of real people: patients, classrooms and shoppers."*

- **05. Maruthuva TSL:**
  - One-liner: Two-way communication bridge between Deaf patients and doctors via Tamil Sign Language.
  - Stack: `Python` · `MediaPipe` · `Sarvam AI` · `AI4Bharat` · `JavaScript`
  - Links: [GitHub](https://github.com/hashvanth21/MaruthuvaTSL)
- **06. SmartAttend:**
  - Metric Callout: **~1.24s end-to-end on 57-student class photo**
  - Key Decision: Wrote inference pipeline in **Rust on ONNX Runtime** for local offline edge execution on college hardware.
  - Stack: `Rust` · `Python` · `ONNX Runtime` · `OpenCV` · `FastAPI` · `React` · `SQLite`
  - Links: [GitHub](https://github.com/hashmessi/SmartAttend)
- **07. Puma-X:**
  - One-liner: Biomechanical shoe recommendation based on foot width, arch type, and pronation mechanics.
  - Stack: `React` · `TypeScript` · `Node.js` · `Express` · `Supabase`
  - Links: [GitHub](https://github.com/hashmessi/puma-X)

---

### 05 More Builds (Compact Neo-Retro List Rows)
- **08. DealClose:** Real estate trust pipeline — property research to e-signed PDF agreement with field confidence scores. (28s vs 45m manual). [Live Demo](https://deal-close-plum.vercel.app/) · [GitHub](https://github.com/hashmessi/DealClose)
- **09. FitBridge:** AI fitness & nutrition coach with cuisine-aware meal generation and streaming SSE coach. [Live Demo](https://fitbridge.vercel.app/) · [GitHub](https://github.com/hashmessi/fitbridge)
- *Note:* Faculty Feedback Analyzer removed from homepage as recommended by senior panel verdict.

---

### 06 How I Build (Engineering Manifesto & Focus Areas)
- **Statement:**
  > *"Models suggest.  
  > Code decides.  
  > Every action is auditable."*
- **Copy:** *"I'm drawn to the point where AI stops being a demo and starts taking real actions. That's where the important engineering happens: deciding what a system is allowed to do, proving what it did, and making mistakes reversible."*
- **Focus Areas (Mono Tag Matrix):**
  - `[ AI Agent Security & Runtime Governance ]`
  - `[ Agentic Commerce & Auditable Automation ]`
  - `[ Applied ML: Computer Vision & Accessibility ]`
  - `[ Full-Stack Systems & Edge Inference ]`

---

### 07 Recognition & Live Metrics (folded into 06: counters row at the end of the Manifesto section, not a separate section)
- Tactile counter cards:
  - `[ 02 ]` Hackathon & Challenge Awards
  - `[ 10 ]` Autonomous Products & Systems Engineered
  - `[ 05 ]` Live Production Demos Available

---

### 08 Contact & Footer
- **Heading:** `Building agents that need guardrails?`
- **Copy:** `I'm looking for AI Engineering, AI Systems, and Forward-Deployed Engineering roles at teams shipping autonomous agents into production.`
- **Tactile CTAs:**
  - `Email Hashvanth` (Primary Gumroad Action)
  - `GitHub (@hashmessi)`
  - `LinkedIn`
  - `Download Résumé`
- **Footer:** `© 2026 Hashvanth M U · Built with Next.js & Lenis · Trust Layer Architecture`

---

## 4. Engineering Architecture & Code Structure

```
src/
├── app/
│   ├── layout.tsx              # Root HTML, Inter & JetBrains Mono fonts, Theme Script
│   ├── page.tsx                # Composed 8 sections
│   ├── globals.css             # Tailwind v4 theme variables, tactile utilities, animations
│   └── work/
│       └── [slug]/
│           └── page.tsx        # Case-study dynamic deep-dive route
├── components/
│   ├── core/
│   │   ├── ThemeToggle.tsx     # Tactile Light/Dark mode switcher
│   │   ├── SmoothScroll.tsx    # Lenis smooth-scroll provider
│   │   ├── TactileButton.tsx   # Gumroad 3D press button primitive
│   │   ├── TactileCard.tsx     # Gumroad offset bordered card primitive
│   │   └── MonoBadge.tsx       # Monospace tag / award badge
│   ├── layout/
│   │   ├── Navbar.tsx          # Clean blurred sticky header with theme switcher & jump links
│   │   └── Footer.tsx          # High-contrast neo-retro footer
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ThesisSection.tsx
│   │   ├── SignatureSection.tsx
│   │   ├── AppliedAISection.tsx
│   │   ├── MoreBuildsSection.tsx
│   │   ├── ManifestoSection.tsx
│   │   ├── MetricsSection.tsx
│   │   └── ContactSection.tsx
│   └── visuals/
│       ├── TrustDial.tsx       # SVG Bayesian dial for TrustPulse
│       ├── FirewallGate.tsx    # SVG ALLOW/BLOCK tool-lineage gate for ChainBreak
│       ├── PromiseSeal.tsx     # SVG SHA-256 seal & diff for PromiseLoop
│       └── BlastRadius.tsx     # SVG multi-database topology & approval gate for Warden
├── data/
│   └── projects.ts             # Single source of truth typed data for all 9 projects
└── lib/
    ├── utils.ts                # cn helper, formatters
    └── motion.ts               # Easing curves, GSAP & Framer Motion variants
```

---

## 5. Non-Functional Budgets & Quality Gates

1. **Performance:** Lighthouse Score ≥ 95 in Performance, Accessibility, Best Practices, SEO. LCP < 1.8s.
2. **Motion Rigor:** Framer Motion for enter/hover transitions; GSAP ScrollTrigger strictly for pinned signature scrub panels; Lenis for smooth scroll.
3. **Accessibility:** WCAG 2.1 AA compliance. Minimum contrast ratio 4.5:1 in both Dark and Light modes. `prefers-reduced-motion` fully respected.
4. **Zero Layout Shift:** Explicit aspect ratios for cards and SVGs (`aspect-video` or fixed viewboxes).


---

## 6. Implementation & Build Verification

| Phase | Description | Status | Verification Run |
|---|---|---|---|
| **Phase 01** | Foundation, Tokens, Theme Engine, Projects Data Layer, Shell | ✅ Verified & Complete | `npm run build` exited 0 |
| **Phase 02** | Hero, Thesis, Signature Panels with 4 Interactive SVG Mechanics | ✅ Verified & Complete | `npm run build` exited 0 |
| **Phase 03** | Applied AI, More Builds, Manifesto, Case Studies (`/work/[slug]`), Static Export | ✅ Verified & Complete | `npm run build` exited 0 (13/13 static pages) |

**All 9 projects verified against `Portfolio — Final Website Copy.md` verbatim.**
