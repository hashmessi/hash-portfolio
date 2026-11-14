# Portfolio Polish Plan: Handoff

**Date:** 2026-11-13 · **Scope:** `hash-portfolio/` (Next.js 16 static export, basePath `/hash-portfolio`)
**Inputs:** `portfolio-design-spec.md` (v2.0), `Portfolio — Final Website Copy.md` (copy source of truth)
**Method:** read all sections, primitives and visuals; ran `npm run build` (exit 0, 13 static pages); loaded the dev server in a browser at desktop and 375px mobile in dark mode; computed contrast ratios from the tokens in `globals.css`.

> The build is green and the content matches the copy doc, but the site is **not ready to send**. Fix the P0 items first: one breaks mobile, one breaks navigation, and one is a false compliance claim.

---

## Summary

| Priority | Count | Theme |
|---|---|---|
| **P0: ship blockers** | 6 | Mobile clipping, dead nav on case-study pages, false WCAG claim, failing contrast, no reduced-motion, no fonts |
| **P1: design polish** | 8 | Dark-mode tactility lost, headings/semantics, tiny text, spec drift |
| **P2: cleanup** | 6 | Dead code, unused assets, per-page metadata |

---

## P0: Ship blockers

### P0-1 · Signature cards clip on mobile (critical)
- **Evidence:** at 375px the layout viewport grows to **574px**. `body { overflow-x: hidden }` hides the scrollbar, so the right ~200px of every signature card is **cut off** (one-liners, badges and buttons are truncated mid-word).
- **Root cause:** `SignatureSection.tsx:216`: the visual column is `shrink-0` and has no `min-w-0`. Visual telemetry rows use `truncate` / `whitespace-nowrap` (TrustDial log line, PromiseSeal `text-[9px] truncate` rows), so their unbroken min-content width (~430px) sets the column width. The left column (`:60`, `flex-1`) has the same `min-width: auto` problem.
- **Fix:** add `min-w-0 w-full` to the visual column (keep `lg:w-[420px] xl:w-[460px] lg:shrink-0`) and `min-w-0` to the left column. Do the same in each visual's root wrapper if any row still overflows.
- **Accept:** at 375px, `document.documentElement.scrollWidth === 375` and all 4 cards are fully visible. Also check 320px.

### P0-2 · Nav and footer links do nothing on `/work/[slug]`
- **Evidence:** on `/work/chainbreak`, clicking "Applied AI" in the navbar does nothing (verified: URL unchanged).
- **Root cause:** `Navbar.tsx:30` `preventDefault()` + `getElementById` → the element doesn't exist on case-study pages. The brand link (`:52`) also `preventDefault`s, so **"Hashvanth M U" doesn't go home** from a case study. Footer anchors (`Footer.tsx:51-75`) are bare `#id`, so they also stay on the case-study page.
- **Fix:** use `href="/#signature-work"` via `next/link` everywhere (Next prepends basePath). Only intercept with smooth scroll when `pathname === "/"`, via `usePathname()`. Let the brand link navigate normally when not on `/`.
- **Accept:** from every `/work/*` page, each nav, footer and brand link lands on the right homepage section.

### P0-3 · Mobile drawer stays open after "Get in touch"
- **Root cause:** `TactileButton` only spreads `...props` (including `onClick`) onto `<button>`. The `href` → `<Link>`/`<a>` branches drop it, so `Navbar.tsx:90,132` `onClick` never runs.
- **Fix:** forward `onClick` (and `aria-*`) to the anchor/Link branches. Type the props as a union of anchor and button attributes instead of using the `as unknown as` casts in Navbar.
- **Accept:** on mobile, tapping "Get in touch" scrolls to contact and closes the drawer.

### P0-4 · Remove the false "WCAG 2.1 AA Compliant" claim
- `Footer.tsx:130` claims compliance. The site currently fails 1.4.3, 1.4.11, 2.3.3/2.2.2 and 2.5.8 (below). Delete the claim now and re-add it only after an audit passes. A recruiter who runs axe will see it fail.

### P0-5 · Contrast failures (WCAG 1.4.3 / 1.4.11)
Computed from the `globals.css` tokens:

| Element | FG / BG | Ratio | Need | Result |
|---|---|---|---|---|
| Dark **primary button** text (white on `--accent #2997FF`) | #FFF / #2997FF | **3.02** | 4.5 | ❌ |
| Dark **danger/block** chips (white on `#FF453A`) | #FFF / #FF453A | **3.41** | 4.5 | ❌ |
| Light **award** badge text (`#B8860B` on white) | #B8860B / #FFF | **3.25** | 4.5 | ❌ |
| Dark card border `--line-bold #383842` vs surface | — | **1.61** | 3.0 (1.4.11) | ❌ |
| Light text-2, dark text-2, light accent, light primary btn | — | 5.1–6.4 | 4.5 | ✅ |

- **Fix:** dark primary buttons use dark ink text (`#0A0A0C` on `#2997FF` ≈ 7:1) or a deeper accent fill (`#0A6CDB`-ish, check ≥4.5 with white). Dark block chips: ink text, or darken to ~`#D70015`. Light `--award`: `#8A6508` or darker (check ≥4.5). Dark `--line-bold`: raise to ~`#6B6B78` (≥3:1 on `#121215`). This also fixes P1-1.
- **Accept:** re-run the ratio script, with every row ≥ its target in both themes.

### P0-6 · `prefers-reduced-motion` is ignored everywhere (spec §5.3, WCAG 2.3.3 / 2.2.2)
- No `reduced-motion` media query in the CSS and no `MotionConfig`. Lenis smooth scroll, Framer entrances, infinite `animate-pulse` (every MonoBadge dot and visual header), `animate-ping` (`ThesisSection.tsx:51`) and `animate-bounce` (`FirewallGate.tsx:113`) all run unconditionally.
- **Fix (smallest):** wrap the app in `<MotionConfig reducedMotion="user">`. In `SmoothScroll`, skip Lenis when `matchMedia('(prefers-reduced-motion: reduce)').matches`. Add a global CSS block: `@media (prefers-reduced-motion: reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}`. Drop `animate-bounce` on the BLOCK chip entirely; the slam-shut should be one-shot, not looping.
- **Accept:** with OS reduced motion on, nothing loops and scrolling is native.

### P0-7 · Inter / JetBrains Mono are never loaded
- **Evidence:** `document.fonts` contains only Next dev-overlay fonts. The `--font-sans`/`--font-mono` stacks fall back to Segoe UI/Consolas on Windows and SF on macOS, so the typography the spec locks (§2.2) never renders and differs per OS.
- **Fix:** `next/font/google` (`Inter`, `JetBrains_Mono`, `display: "swap"`, CSS variables) in `layout.tsx`, mapped into `@theme`. This self-hosts at build and works with static export.
- **Accept:** computed font on `h1` resolves to the Inter face; no CLS from the font swap (next/font adjusts fallback metrics).

---

## P1: Design polish (the "senior" gap)

### P1-1 · Dark mode loses the neo-retro identity
Dark is the **default** theme, but card borders (`#383842`, 1.6:1) and the tactile shadow (`#000` on `#0A0A0C`) are effectively invisible, so cards read as generic dark panels (confirmed in the screenshot). The fix in P0-5 (`--line-bold` → ~`#6B6B78`) brings back the edges. For the shadow, use a visible offset color in dark (e.g. `--shadow-tactile: 4px 4px 0 0 #2A2A33` or the accent at low alpha) so the "physical press" reads. Update the hover shadows that hardcode `var(--line-bold)` to use the same token.

### P1-2 · Heading outline is broken (WCAG 1.3.1 / 2.4.6)
Current outline: `H1 → H2 Thesis → H2 Signature → H2 Applied → H2 More → H2 Contact`.
- **Manifesto has no heading at all** (`ManifestoSection.tsx`). Add `<h2>How I build</h2>`.
- **No project has a heading.** Project names are `<Link>`s styled big (`SignatureSection.tsx`, Applied, More Builds). Wrap them in `<h3>`.
- Give each `<section>` `aria-labelledby` pointing at its h2.

### P1-3 · Ambiguous repeated link text (WCAG 2.4.4)
12× "GitHub", 6× "Case study", 5× "Live demo", 3× "Deep dive". Add visually hidden context: `GitHub<span class="sr-only"> repository for TrustPulse</span>`, or `aria-label`. Add an sr-only "(opens in new tab)" for the `target="_blank"` links.

### P1-4 · Micro-type is too small to read
99 text nodes render below 11px (`text-[9px]`/`text-[10px]` across all 4 visuals, nav sublabel, badges). That's below a legible floor on 1x displays and fails the "senior" bar. Set a floor of **11px for decorative telemetry and 12px (`caption` token) for anything a reader needs**. Simplify visuals by removing rows instead of shrinking type.

### P1-5 · Interactive visuals lack names/state (WCAG 4.1.2) and touch size (2.5.8)
- Scenario toggles in all 4 visuals (`Verified/Disputed`, `Attack/Safe`, …) need `aria-pressed`, and the result region needs `aria-live="polite"` so screen-reader users hear "BLOCK – violation SEC-403".
- Each dial/SVG needs `role="img"` + `aria-label` summarising the state (e.g. "Trust score 87.4%, verified").
- 15 targets are under 24×24px (scenario buttons `px-2 py-1 text-[10px]`, theme-toggle segments). Make them at least 24px tall, and 44px on mobile.
- Mobile menu button: add `aria-expanded`, `aria-controls`, close on `Escape`, and return focus to the button.

### P1-6 · Spec drift: decide, then align spec or code
| Spec says | Built | Recommendation |
|---|---|---|
| §02 Thesis: **pinned GSAP scrub**, 3 phases crossfade | Static fade-in stack; GSAP is imported but no ScrollTrigger is used | Build the pin (it's the "Apple pacing" moment), *or* drop GSAP and update the spec. Don't ship GSAP for nothing (~70KB). |
| §07 **Metrics section** (02 / 10 / 05 counters) | Not in `page.tsx` | Skip it; the proof strip already says this. Remove §07 from the spec. |
| Résumé button (Hero, Contact) | Missing everywhere | Copy doc lists `Résumé` in Contact. Add a PDF to `public/` and a secondary button. Recruiters look for this first. |
| Thesis subtext | Same paragraph shown **twice** (Thesis card + Signature intro) | Keep it in Signature only; give the Thesis card the "Deterministic code." conclusion (`THESIS_CONTENT.conclusion`, currently unused). |
| Copy panel: "architecture diagram showing where the ALLOW/BLOCK gate sits" | Visuals are state toys, not architecture | Add a one-line "Agent → [Gate] → Tool" strip above each visual. |
| Copy panel: embed PromiseLoop video on page | External link only | Use a click-to-load YouTube facade (no iframe until clicked, to protect LCP). |

### P1-7 · Hero LCP: headline starts at `opacity: 0`
`HeroSection.tsx` animates the `h1` from opacity 0 with a delay, so LCP waits for JS hydration and Framer. Render the h1 visible (animate only `y`, or no animation) to meet the LCP < 1.8s budget.

### P1-8 · Open copy facts (from "Before you publish")
Still unresolved in the data: **My role / team size** for TrustPulse, ChainBreak and Maruthuva (no `role` field rendered anywhere); SmartAttend **hardware** behind 1.24s; DealClose **45-min baseline** method; contact line role type. These need answers from Hashvanth, not the implementer. Add a `role?: string` field to `Project` and render it under the award badge when present.

---

## P2: Cleanup

1. **Dead components:** `ScrollReveal`, `TextReveal`, `MagneticButton`, `ParallaxLayer` aren't imported anywhere. Delete them.
2. **Dead state:** `TrustDial` `"updating"` scenario (`TrustDial.tsx:15,42`) is unreachable. Delete it or add its button.
3. **Unused assets:** `public/images/*.png` (1.9MB) are referenced nowhere but ship in `out/`. Delete them, plus the Next starter SVGs in `public/`.
4. **Lenis cleanup leak:** `SmoothScroll.tsx` adds an anonymous ticker fn but removes `lenis.raf`, so it is never removed (double ticks under StrictMode/HMR). Keep a named ref to the callback.
5. **Per-page metadata:** every `/work/*` page has the homepage `<title>`. Add `generateMetadata` (title = project name, description = one-liner) plus a homepage OG image.
6. **Single source for contact:** `Footer.tsx:106` hardcodes the email and LinkedIn; read from `CONTACT_CONTENT`. Also remove the `ThemeToggle` effect that re-sets `data-theme` (the inline script already does it). Size the placeholder exactly like the mounted control to avoid nav shift.

---

## Suggested execution order (each step independently verifiable)

| # | Step | Files | Verify |
|---|---|---|---|
| 1 | P0-1 mobile overflow | `SignatureSection.tsx`, visuals roots | 375px & 320px: `scrollWidth === innerWidth` |
| 2 | P0-2/3 routing + button onClick | `Navbar.tsx`, `Footer.tsx`, `TactileButton.tsx` | click every nav link from `/work/chainbreak`; mobile drawer closes |
| 3 | P0-4/5 + P1-1 tokens | `globals.css`, `Footer.tsx` | contrast script all ✅; dark screenshot shows card edges |
| 4 | P0-6 reduced motion | `layout.tsx`, `SmoothScroll.tsx`, `globals.css`, `FirewallGate.tsx` | emulate reduced motion: no loops |
| 5 | P0-7 fonts + P1-7 LCP | `layout.tsx`, `globals.css`, `HeroSection.tsx` | Lighthouse mobile: LCP < 1.8s, CLS < 0.02 |
| 6 | P1-2/3/5 semantics & a11y | sections + visuals | axe DevTools 0 serious/critical; keyboard-only pass through all toggles |
| 7 | P1-4 type floor | visuals, Navbar | no text < 11px (`querySelectorAll` check) |
| 8 | P1-6 spec decisions | per decision | update `portfolio-design-spec.md` to match what shipped |
| 9 | P2 cleanup | listed | `npm run build` exit 0, `npm run lint` clean |

**Definition of done:** `npm run build` exits 0. Lighthouse ≥95 in all four categories on mobile. axe shows 0 serious issues. Manual keyboard and 375px passes in **both** themes. Only then restore any accessibility claim in the footer.
