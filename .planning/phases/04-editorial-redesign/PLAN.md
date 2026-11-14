# Phase 04 Plan: Editorial Redesign (Type System & Components)

**Phase:** 04
**Goal:** Replace the "AI-template" look (Inter + mono everywhere, Gumroad offset shadows, pulsing badges, glow gradients, pill tags, dense cards) with an editorial system adapted from `../../../../extract.studio-DESIGN.md`: a billboard wordmark, regular-weight serif statements, a plain grotesk for captions, white paper with ink, one pale-green proof band, and an inset black closing panel.
**Supersedes:** the visual parts of `portfolio-design-spec.md` v2.0 (theme matrix §2.1, typography §2.2, tactile components §2.3). The copy lock (§3 copy, `Portfolio — Final Website Copy.md`) is unchanged.
**Date:** 2026-11-14

---

## 0. Locked decisions (from the user, 2026-11-14)

| # | Decision | Consequence |
|---|---|---|
| D1 | **Light-only editorial** | Delete the dark tokens, theme script, `ThemeToggle` and `data-theme` logic. Dark exists only as **ink exhibits** (project visuals) and the closing panel. |
| D2 | **Full editorial component swap** | No offset shadows, pulsing dots, gradient glows or pill CTAs. Actions are underlined text links; frames are 1px ink outlines at a 9.3px radius. |
| D3 | **HASHVANTH billboard wordmark** opens the page | The h1 is the serif proposition; the wordmark is a labelled brand graphic. |

**Adapt, don't copy (design.md "Do not copy"):** take the *pattern* only. No extract.studio name, wordmark, copy, ticker phrase or imagery. Voice stays first-person "I" and copy stays verbatim from the copy doc. The studio "we" voice does not apply to a personal portfolio.

---

## 1. Design system (tokens)

### 1.1 Type: why these fonts
Inter is design.md's named fallback for ABC Diatype, and it is exactly what reads as "generic AI". So the sans fallback is replaced, not followed.

| Role | Font (next/font/google) | Settings | Replaces |
|---|---|---|---|
| Serif statements | **Instrument Serif** 400 (+ italic) | normal tracking, 1.25 lh | Inter 700 display |
| Sans UI / captions / body | **Instrument Sans** (variable, wght 400–700) | 400 body, 700 names, normal tracking | Inter |
| Billboard wordmark | **Archivo** (variable, wdth 62–125, wght 900) | wdth ≈ 62–75, wght 900, caps | (none) |
| Telemetry inside exhibits only | JetBrains Mono (keep) | 11–13px | mono used site-wide |

Instrument Serif and Instrument Sans come from the same foundry and pair natively (Feature Deck / Diatype analogues). All three fonts are confirmed in `next/font` font-data. No mono anywhere outside the four visuals.

### 1.2 Type recipes (`globals.css` → `@theme` + utility classes)
Copy design.md's fluid `clamp()` formulas exactly.

| Token / class | Font | Size | LH | Use here |
|---|---|---|---|---|
| `type-statement` | Serif 400 | `clamp(1.75rem, 1.528rem + 1.111vw, 2.972rem)` (44px@1440) | 1.25 | Hero proposition, thesis lines, manifesto, section bridges |
| `type-detail-title` | Serif 400 | `clamp(2.419rem, 1.967rem + 2.261vw, 4.906rem)` (69px) | 1.25 | Case-study title |
| `type-ticker` | Serif 400 | `clamp(3.5rem, 2rem + 5vw, 6.5rem)` (104px desktop; fluid floor added for mobile) | 1.5 | Closing ticker |
| `type-label` | Sans 400 | `clamp(1.424rem, 1.29rem + 0.669vw, 2.16rem)` (34px) | 1.25 | Ruled section labels |
| `type-body` | Sans 400 | `clamp(1rem, 0.955rem + 0.227vw, 1.25rem)` (21px) | 1.5 (1.4 for reading) | Captions, descriptions |
| `type-name` | Sans 700 | same as body | 1.25 | Bold project names |
| `type-small` | Sans 400 | `clamp(0.889rem, 0.861rem + 0.139vw, 1.042rem)` (18px) | 1.5 | Floating index, tags, utility |

Sentence case everywhere. No uppercase tracking-widest eyebrows.

### 1.3 Color (WCAG checked, ratios computed)
| Token | Value | Use | Contrast |
|---|---|---|---|
| `--paper` | `#FFFFFF` | Canvas, index, tags | — |
| `--ink` | `#070707` | Text, 1px rules, exhibit backing, closing panel | 20.1:1 on paper, 18.8:1 on green |
| `--ink-2` | `#5A5A60` | Secondary text (design.md has none; needed for metadata) | 6.9:1 paper, 6.4:1 green |
| `--ink-2-rev` | `#A1A1A8` | Secondary text on ink | 7.9:1 |
| `--green` | `#E7FEDA` | Proof band, selection, active index item | — |
| `--allow` / `--block` / `--award` | `#2997FF` / `#FF453A` / `#FFD60A` | **Only inside ink exhibits** (current dark values, which already pass on dark) | ≥5.8:1 on ink |

Delete `--accent`-as-site-color, `--shadow-*`, `--line-bold`, `--surface*` and `--on-*` (once the exhibits no longer use them).

### 1.4 Space, radius, motion
- Spacing scale (design.md values, named): `--s-1 9.3px`, `--s-2 18.5px`, `--s-3 23.2px`, `--s-4 32.5px`, `--s-5 37.1px`, `--s-6 64.9px`, `--s-7 74.2px`, `--s-8 92.7px`, `--s-9 111.3px`, exposed via `@theme --spacing-*`.
- Container: `max-w-[1320px] px-[60px]` desktop, `px-4` (16px) mobile.
- Radius: `--r-media 9.3px` (exhibits, panels, index), `--r-tag 5px`, `--r-form 4.6px`. Nothing else is rounded.
- Motion: colour transitions 0.2s `cubic-bezier(.4,0,.2,1)`, transforms 0.3s ease-in-out, ticker 40s linear infinite. Everything stops under `prefers-reduced-motion` (the existing global rule already covers it). Keep Lenis and the thesis scrub.

---

## 2. Components: delete / keep / new

| Status | Component | Notes |
|---|---|---|
| ❌ Delete | `ThemeToggle`, `TactileButton`, `TactileCard`, `MonoBadge`, `Navbar` (top bar + drawer), `Footer` (link grid), tactile CSS utilities, hero radial gradient, thesis glow, every `animate-pulse` dot | Grep must show 0 imports before deleting. |
| ✅ Keep, restyle | `VideoFacade` (ink frame, white text "Play demo", 9.3px radius), 4 visuals, `SmoothScroll`, `ThesisSection` scrub logic | |
| 🆕 `Wordmark` | Inline SVG `<text>` "HASHVANTH", Archivo 900 condensed, `textLength` = viewBox width, `lengthAdjust="spacingAndGlyphs"`, ink fill. Derive the viewBox ratio from the measured text bbox (≈5.5–6.5:1); don't hardcode 1320×233. `role="img" aria-label="Hashvanth M U"`. | Full container width at every breakpoint. |
| 🆕 `FloatingIndex` | Fixed `bottom-[45px]`, centred, paper, 1px ink, 9.3px radius, 9.3px padding. Four links: **Work · Thesis · About · Contact** (`type-small`, 13.9/18.5px padding). `/#id` + homepage smooth-scroll logic moved from `Navbar`. Active section = green fill, via one IntersectionObserver. On case pages: **Home · Work · Contact**. | Must fit 320px: compact padding below `sm`; never becomes a full-width bar. Mobile drawer and hamburger removed. |
| 🆕 `TextLink` | Underlined 1px, `type-body`; external links get an sr-only "(opens in new tab)". Supports the `context` prop (sr-only "for X") ported from `TactileButton`. | Replaces every button except visual toggles and the video play button. |
| 🆕 `RuledHeading` | 1px ink top rule; `type-label` h2 on the left, optional `TextLink` on the right; 64.9px gap before content. | |
| 🆕 `ExhibitTile` | Ink panel, 4:3, 9.3px radius, containing a visual. Caption 23.2px below: **Name** — descriptor (`type-name` + `type-body`, one baseline). Optional `AwardTag` top-right (paper, 1px ink, 5px radius, `type-small`). The caption name is the link to `/work/[slug]`; the tile itself is not a link, because the visuals contain buttons and links can't nest interactive controls. | |
| 🆕 `LedgerRow` | 1px rule; left: bold name + id; right: one-liner, a key metric/decision line and text links. Used for Applied AI, More Builds and focus areas. | No fake imagery for projects without visuals (design.md: no empty media). |
| 🆕 `ClosingPanel` | Inset ink panel (9.3px, 64.9px top inset), top row: availability line + Email / GitHub / LinkedIn / Résumé columns (`type-small`, `--ink-2-rev` labels). Below: `Ticker` repeating "Building agents that need guardrails?" with an em-dash separator, clipped, 40s linear; `aria-hidden` on the duplicates, so one copy is readable. Bottom-left: © line. No newsletter form (no backend, so don't fake one). | Replaces `ContactSection` + `Footer`. |

---

## 3. Page flow mapping

| # | design.md recipe | Content (verbatim copy doc) | Replaces |
|---|---|---|---|
| 1 | Billboard opening | `Wordmark` (74.2px top) → 92.7px → **h1** serif proposition "I build the trust layer for autonomous AI." (660px measure, right half empty) → 92.7px → **main media stage**: full-width ink exhibit staging `FirewallGate` (the ALLOW/BLOCK thesis), caption below: **ChainBreak** — blocks unsafe agent actions before they run. No subhead, proof strip or CTAs here; the `FloatingIndex` supplies actions. | HeroSection |
| 2 | Editorial bridge | Copy-doc subhead as `type-statement` in a ~770px measure, then `TextLink` "Selected work". | Hero subhead |
| 3 | Pinned thesis (kept) | Three serif lines, paper background, ink/`--ink-2`. Accent "Deterministic code." uses italic serif instead of blue. | ThesisSection styling |
| 4 | Ruled heading + portfolio field | `RuledHeading` "Signature work" + section intro → 2-col `ExhibitTile` grid (37.1px gutter, 74.2px row gap): TrustPulse, ChainBreak*, PromiseLoop, Warden-MCP. Award tags on TrustPulse and ChainBreak. *ChainBreak is already the hero stage, so its tile shows the Web3 extension caption, or the hero uses PromiseSeal instead (pick whichever reads better at review). | SignatureSection's long cards (problem, outcomes, key decision and stack move to case pages, which already render them) |
| 5 | Ledger | `RuledHeading` "Applied AI" + intro → 3 `LedgerRow`s (Maruthuva, SmartAttend with its ~1.24s metric, Puma-X). Then `RuledHeading` "More builds" → 2 rows (DealClose, FitBridge). | AppliedAI + MoreBuilds cards |
| 6 | Positioning bridge + capabilities ledger | `RuledHeading` "How I build"; serif statement "Models suggest. Code decides. Every action is auditable."; about copy as reading text; the 4 focus areas as a 2×2 bold-label ledger. | ManifestoSection (counters move to 7) |
| 7 | Green editorial desk | Full-bleed `--green` band, 111.3px padding, 3 update items: **1st Prize, AI Full-Stack Hackathon** — TrustPulse; **Best Cybersecurity Solution** — ChainBreak, TLN Challenge; **10 products, 5 live demos** — try them yourself. | Proof strip + counters |
| 8 | Shared monumental ending | `ClosingPanel` on green (white on case pages); 74.2px green below. | ContactSection + Footer |

**Case study (`/work/[slug]`):** compact wordmark (165px wide, links home) → short label "Case study · 02" → `type-detail-title` (one-liner, 880px measure) → full-width ink exhibit (visual or video) → context row: reading text (problem + what I built) on the left, metadata on the right (Award, Role*, Stack as a plain comma list, Links) → outcomes + key decision as ledger rows → `VideoFacade` when present → `RuledHeading` "More work" + 2 `ExhibitTile`s (next 2 projects) → `ClosingPanel` on white. *Role renders only when the data has it.

---

## 4. Exhibit (visual) refactor rules
The four visuals become **exhibits on ink**, not cards:
1. Drop their own card chrome (`border-2`, `shadow-tactile-sm`, `bg-surface`), title-bar pulse dot and badge. The tile caption carries the name.
2. Re-colour for a dark backing: text `#FFFFFF` / `--ink-2-rev`, rules `rgba(255,255,255,.14)`, `--allow` / `--block` / `--award` for states.
3. **Fit 4:3** (641×481 at desktop, full width on mobile, min 320px): keep only the core mechanic. Trust dial + status + 4 axis bars; 3 pipeline steps + gate verdict; receipt vs payload + capture lock; 2 DB nodes + approval gate + hash link. Cut the telemetry log rows first. The 11px floor and the existing aria (group label, live region, `aria-pressed`, 36px toggles) stay.
4. One `size` prop at most (`"tile" | "stage"`), for the hero stage. No second implementation per visual.

---

## 5. Waves

### Wave 1: Foundation (tokens, fonts, light-only)
- 1.1 `layout.tsx`: swap fonts (Instrument Serif, Instrument Sans, Archivo; keep JetBrains Mono), delete the theme script, update `themeColor` to `#FFFFFF`.
- 1.2 `globals.css`: new tokens (§1.3–1.4), type recipe classes (§1.2), `@theme` spacing and fonts; delete the dark block, shadows and tactile utilities. Selection = `--green` + ink.
- 1.3 Delete `ThemeToggle` and its imports.
- **Check:** `npm run build` exit 0; computed `h1` font = Instrument Serif; no `data-theme` in output HTML.

### Wave 2: Primitives
- 2.1 `Wordmark`, `TextLink`, `RuledHeading`, `ExhibitTile` (+ `AwardTag`), `LedgerRow`, `FloatingIndex`, `ClosingPanel`/`Ticker` in `src/components/editorial/`.
- 2.2 Replace `Navbar` + `Footer` in `layout.tsx` with `FloatingIndex` (+ `ClosingPanel` rendered by pages, since its surround colour differs per page type). Leave room at the page bottom so the index never covers the last content (≥120px bottom padding).
- **Check:** at 320 / 375 / 1440, the index fits on one row, every link ≥44px tall on touch, Escape/Tab order is sane, and active state updates on scroll.

> **Wave 2 status (2026-11-14):** done for `TextLink`, `FloatingIndex` and `ClosingPanel` + ticker. `Navbar`, `Footer` and `ContactSection` were removed. `Wordmark`, `RuledHeading`, `ExhibitTile` and `LedgerRow` move to Wave 3, where they are first used, so none of them ship unused. The index-clearance padding lives in `ClosingPanel` (every page ends with it), not `<main>`, so it keeps the surround colour.

> **Wave 3 status (2026-11-14):** built. Homepage uses `Wordmark`, `RuledHeading`, `ExhibitTile`, `LedgerRow`, `ClosingPanel`. Old `TactileButton`, `TactileCard`, `MonoBadge` remain only because the case-study page (Wave 4) still imports them. Deviations: (1) the ChainBreak demo is the first wide signature tile instead of a separate hero stage, so it isn't shown twice; (2) tiles have no fixed 4:3 frame, because the demos need their natural height and fixed frames clipped them; (3) the hero subhead is `type-reading`, not `type-statement`, to keep the opening short. Checked at 1440px and 375px: no horizontal overflow, wordmark fits, grid layout correct.

### Wave 3: Homepage sections (§3 rows 1–8)
- 3.1 Hero + bridge; 3.2 thesis restyle; 3.3 signature tiles; 3.4 ledgers; 3.5 manifesto; 3.6 green band; 3.7 closing panel.
- 3.8 Visual refactor per §4 (all four).
- Delete `TactileButton`, `TactileCard`, `MonoBadge`, `Navbar`, `Footer` once grep shows no imports.
- **Check:** desktop and 375px screenshots compared against design.md's Do/Don't list (§7); `scrollWidth === innerWidth` at 320/375.

> **Wave 4 status (2026-11-14):** built. Case pages use the compact wordmark, a `type-detail-title` one-liner, a full-width demo (or a `TypeExhibit` serif line for projects without one), the video facade when present, a reading/metadata row, a ruled ledger for decision, outcomes, extension and scope, and "More work" with the next two projects. The tactile button, card and badge components are deleted, and the legacy color aliases are gone. Checked: PromiseLoop (demo + video) and Maruthuva TSL (typographic exhibit) at 1440px and 375px, no horizontal overflow; all nine slugs are generated.

### Wave 4: Case-study template
- 4.1 Rebuild `work/[slug]/page.tsx` per §3 "Case study".
- **Check:** all 9 slugs render; projects without a visual get a typographic exhibit (serif one-liner on ink), not an empty frame.

### Wave 5: Verification & spec
- 5.1 Contrast script over §1.3 pairs (all must pass); axe: 0 serious; keyboard pass; reduced motion (ticker and scrub stop, scrub falls back to static stack).
- 5.2 Lighthouse mobile ≥95 in all four categories; LCP element is the wordmark or the h1 (preload: 3 font families, so subset `latin` and limit the variable axes in use).
- 5.3 Rewrite `portfolio-design-spec.md` §1–2 to v3.0 "Editorial", and update the ROADMAP status.
- 5.4 `npm run lint` clean, `npm run build` exit 0.

---

> **Wave 5 status (2026-11-14):** contrast: all text and state pairs computed, 0 failures (lowest text pair 5.0:1). Automated accessibility scan (axe-core, local copy): 0 violations on the homepage and all nine case pages after one fix (demo status text on ink was using the paper-blue value). Spec rewritten to v3.0 §1–2. **Not done:** Lighthouse (not run; the browser sandbox blocked external tools, so no CDN loads), manual keyboard pass, screen-reader pass, and reduced-motion check in a real browser (the code path exists, not exercised).

## 6. Risks & mitigations
| Risk | Mitigation |
|---|---|
| Interactive visuals don't fit 4:3 without the current density | Cut telemetry rows (§4.3). If one still overflows at 320px, allow `aspect-[4/3]` → `min-h` on mobile only. |
| Three font families hurt LCP | `display: swap`, latin subset, Archivo only for the wordmark (one weight/width instance); measure in 5.2 before adding anything. |
| Floating index covers content and CTAs on mobile | Bottom padding on `main`, index ≤ 56px tall, safe-area inset (`bottom: max(45px, env(safe-area-inset-bottom))`, 16px on mobile). |
| Losing the dense project detail on the homepage hurts recruiters | Detail stays one click away on case pages (they already render problem / outcomes / decision); tile captions keep the one-liner and award tag. |
| Drift from the locked v2.0 spec | Wave 5.3 replaces the spec so the docs match what shipped. |

## 7. Acceptance (design.md Do/Don't, mapped)
- [ ] No bold-grotesk headlines; every statement is serif 400.
- [ ] No top navigation bar; only the floating index.
- [ ] No box-shadow anywhere (grep `shadow` = 0 in src, except the optional testimonial shadow, which isn't used).
- [ ] No pill buttons; actions are underlined text.
- [ ] No gradients as surfaces.
- [ ] Captions sit below exhibits, never over them.
- [ ] Green appears only as the proof band, the active index state and selection.
- [ ] Ticker runs at ≥3× the utility text size, clipped, and stops under reduced motion.
- [ ] Copy matches `Portfolio — Final Website Copy.md` verbatim (proposition, intros, one-liners, contact line).
