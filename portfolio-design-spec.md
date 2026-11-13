# Portfolio Website: Design & Build Spec (v2.0 Locked)

**Owner:** Hashvanth M U  
**Positioning:** *"I build the trust layer for autonomous AI."*  
**Aesthetic World:** **Apple/Meta Cinematic Clarity × Gumroad Neo-Retro Tactility**  
**Theme Engine:** Obsidian Dark Mode (Default) + Crisp Dynamic Light Mode Toggle  
**Status:** **Locked v2.0** — Approved via Senior Product & UI Audit  

---

## 1. Design Philosophy & Aesthetic Fusion

This site solves a specific challenge: **How to present elite, technical AI systems engineering with immediate product authority, playful physical tactility, and zero corporate blandness.**

The visual architecture fuses three distinct disciplines:
1. **Apple Product Pacing:** One idea per viewport, generous whitespace (128px section margins), fluid typography scale, and seamless scroll choreography (Lenis + GSAP ScrollTrigger).
2. **Meta / Linear Product Clarity:** High-signal information architecture, quiet micro-UI, JetBrains Mono technical telemetry, explicit causal flows, and zero fake decorative gradients or 3D gimmicks.
3. **Gumroad Neo-Retro Tactile Energy:** Chunky geometric borders (1.5px–2px solid ink), physical offset drop-shadows (`3px 3px 0px` / `4px 4px 0px`), tactile mechanical press states (`active:translate-x-[2px] active:translate-y-[2px] active:shadow-none`), high-contrast pill tags, and bold card surfaces that feel physical to the touch.

### Core Invariants
1. **One Idea Per Screen:** Every viewport communicates exactly one technical thesis or project mechanic.
2. **Deterministic Code Decides:** Visuals are not passive screenshots; they are interactive, deterministic state machines (Bayesian dials, firewall gates, receipt seals, blast-radius graphs).
3. **Physical Tactility in Both Modes:** Dark mode uses luminous obsidian with crisp structural borders and sharp ink offsets; Light mode provides high-contrast editorial punch with bold ink borders and deep solid shadows.
4. **Fast is Non-Negotiable:** 60 fps GPU-accelerated scroll, zero layout shift (CLS < 0.02), LCP < 1.8s, static Next.js export.

---

## 2. Dynamic Design Tokens

### 2.1 Color Tokens & Theme Matrix

| Token | Light Mode (Editorial Neo-Retro) | Dark Mode (Default Obsidian Neo-Retro) | Role / Usage |
|---|---|---|---|
| `--bg` | `#FBFBFD` (Apple Warm White) | `#0A0A0C` (Deep Obsidian) | Page canvas |
| `--surface` | `#FFFFFF` (Pure Card White) | `#121215` (Elevated Obsidian Surface) | Cards, panels, modals |
| `--surface-subtle` | `#F3F3F6` (Muted Grey) | `#1A1A1E` (Inset Row Surface) | Tag pills, nested blocks, code containers |
| `--line` | `#E2E2E8` (Subtle Divider) | `#24242A` (Low-contrast structural line) | Hairlines, inner grid dividers |
| `--line-bold` | `#111113` (High-contrast Ink) | `#383842` / `#4E4E5A` (Tactile Edge) | Gumroad card/button borders (1.5px–2px) |
| `--text` | `#111113` (Deep Carbon) | `#F4F4F6` (Crisp Titanium White) | Primary display & body copy |
| `--text-2` | `#66666E` (Neutral Charcoal) | `#92929E` (Muted Monospace Grey) | Secondary descriptions, metadata, labels |
| `--shadow-tactile` | `4px 4px 0px 0px #111113` | `4px 4px 0px 0px #000000` | Gumroad solid offset drop shadow |
| `--shadow-tactile-sm` | `2px 2px 0px 0px #111113` | `2px 2px 0px 0px #000000` | Small tags, badges, secondary buttons |
| `--accent` | `#0066CC` (Electric Royal Blue) | `#2997FF` (Apple Signal Blue) | ALLOW state, active links, primary CTA |
| `--block` | `#D91F26` (Firewall Red) | `#FF453A` (Vivid Crimson) | BLOCK state, security rejections |
| `--award` | `#B8860B` (Amber Gold) | `#FFD60A` (Luminous Neon Gold) | Hackathon & trophy badges |

---

### 2.2 Typography Scale

- **Sans Display & Body:** `Inter Variable` (self-hosted, `-0.03em` tracking on display, `0` tracking on body).
- **Technical Monospace:** `JetBrains Mono Variable` (used for hashes, causal lineages, payload states, stack tags, award badges).

| Token | Size | Weight | Tracking | Application |
|---|---|---|---|---|
| `display` | `clamp(44px, 7vw, 100px)` | 700 | `-0.04em` | Hero statement, thesis statement |
| `h1` | `clamp(36px, 5vw, 64px)` | 700 | `-0.03em` | Major section headers |
| `h2` | `clamp(26px, 3.2vw, 40px)` | 600 | `-0.02em` | Project titles, modal headers |
| `h3` | `20px` | 600 | `-0.01em` | Card titles, step labels |
| `body-lg` | `20px` | 400 | `0` | Lead thesis paragraph, hero subhead |
| `body` | `16px` | 400 | `0` | Card copy, outcome bullets, about copy |
| `mono-sm` | `13px` | 500 | `0.02em` | Stack tags, commit hashes, latency metrics |
| `caption` | `12px` | 600 | `0.05em` | Eyebrow tags, award chips, section indicators |

---

### 2.3 Tactile Components & Geometry

1. **Gumroad Tactile Button (Primary):**
   - Base: `bg-accent text-white font-medium rounded-xl border-2 border-line-bold shadow-tactile`
   - Hover: `hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_var(--line-bold)]`
   - Active (Press): `active:translate-x-1 active:translate-y-1 active:shadow-none`
   - Transition: `transition-all duration-100 ease-out`
2. **Gumroad Tactile Button (Secondary / Neutral):**
   - Base: `bg-surface text-text font-medium rounded-xl border-2 border-line-bold shadow-tactile`
   - Interaction: Same tactile press mechanics.
3. **Neo-Retro Card Container:**
   - Base: `bg-surface border-2 border-line-bold rounded-2xl p-6 md:p-8 shadow-tactile transition-transform duration-200`
   - Hover: `hover:-translate-y-1 hover:shadow-[6px_6px_0px_var(--line-bold)]`
4. **Monospace Badge Pill:**
   - Base: `inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-md border border-line-bold bg-surface-subtle text-text-2`

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
  - `Résumé ↗` (Gumroad Secondary Button)
- **Theme Toggle:** Floating or navbar-docked segmented tactile pill switch (`[ ☾ Dark ]` / `[ ☼ Light ]`).

---

### 02 Thesis Section (Apple-style Pinned Scroll Narrative)
- Pinned viewport scrub:
  - Phase 1: *"AI used to answer questions."*
  - Phase 2 (Crossfade): *"Now it takes actions."*
  - Phase 3 (Accent lock): *"So who decides what it's allowed to do? Deterministic code."*

---

### 03 Signature Work: The Trust Layer for AI (4 Large Interactive Case Panels)

Intro: *"As AI moves from answering questions to taking actions, the hard problem changes. It's no longer 'is the output good?' but 'should this action be allowed?' These four systems are my answer."*

Each project card features:
- Left: Editorial copy, problem, solution, 3 outcome bullets, key decision pull-quote, tech stack pills, and live demo / GitHub links.
- Right: Custom interactive SVG/Canvas state-machine visual.

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

### 07 Recognition & Live Metrics
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
