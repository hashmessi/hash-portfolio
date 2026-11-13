# Phase 01 Plan: Foundation, Design System, Dynamic Theme Engine & Shell

**Phase:** 01  
**Goal:** Establish the architectural bedrock, install missing dependencies, build the dynamic Dark/Light theme system, configure Inter + JetBrains Mono typography, implement Gumroad neo-retro tactile primitives, create the single-source-of-truth `projects.ts` data layer, and ship the responsive Navbar & Footer shell.  
**Assigned Roles:**
- Lead Architect (`/brutal-product-engine`): Package cleanup, Next.js config, `projects.ts` schema, directory structure.
- Impeccable Design Engineer (`/impeccable`): Design tokens, theme engine, Gumroad tactile buttons & cards, typography, Navbar & Footer.
- QA & Verification Lead (`/gsd-ui-review`): Typecheck, contrast validation, build pass, theme toggle reactivity.

---

## Wave Breakdown

### Wave 1: Environment & Architecture Reset
- **Task 1.1**: Clean out obsolete arcade assets and gaming styles (`VT323`, `Press_Start_2P`, `Pacifico`, scanline/crt css).
- **Task 1.2**: Verify and install project dependencies via `npm install` (`next`, `react`, `react-dom`, `framer-motion`, `gsap`, `lenis`, `lucide-react`, `tailwindcss`, `clsx`, `tailwind-merge`).
- **Task 1.3**: Configure `src/app/globals.css` with Tailwind v4 `@theme` tokens matching `portfolio-design-spec.md` v2.0:
  - Dark mode obsidian palette (`--bg: #0A0A0C`, `--surface: #121215`, `--line-bold: #383842`)
  - Light mode editorial palette (`--bg: #FBFBFD`, `--surface: #FFFFFF`, `--line-bold: #111113`)
  - Gumroad tactile shadow variables (`--shadow-tactile: 4px 4px 0px 0px ...`)
  - Allow/Block accent tokens (`--accent: #2997FF / #0066CC`, `--block: #FF453A / #D91F26`, `--award: #FFD60A / #B8860B`).

### Wave 2: Typography, Theme Engine & Gumroad Tactile Primitives
- **Task 2.1**: Set up Inter & JetBrains Mono font loading in `src/app/layout.tsx` with `next/font/google` (`display: swap`).
- **Task 2.2**: Implement `ThemeToggle.tsx` and theme context/script in `src/components/core/ThemeToggle.tsx` (supports Dark default, persists in `localStorage`, avoids flash of unstyled content).
- **Task 2.3**: Build core Gumroad neo-retro tactile UI primitives in `src/components/core/`:
  - `TactileButton.tsx`: Supports primary (accent fill), secondary (surface fill), and ghost; incorporates 2px solid border, tactile offset shadow, and hover/active press mechanics (`active:translate-x-1 active:translate-y-1 active:shadow-none`).
  - `TactileCard.tsx`: Bordered container with offset shadow, hover elevation, and rounded-2xl geometry.
  - `MonoBadge.tsx`: JetBrains Mono chip with border, subtle background, and optional status dot/icon.

### Wave 3: Data Layer & Application Shell
- **Task 3.1**: Create `src/data/projects.ts` containing typed records for all 9 projects from `Portfolio — Final Website Copy.md` (Signature: TrustPulse, ChainBreak, PromiseLoop, Warden; Applied: Maruthuva, SmartAttend, Puma-X; More: DealClose, FitBridge).
- **Task 3.2**: Build modern responsive `Navbar.tsx`:
  - Apple-style subtle glass/blur backdrop (`backdrop-blur-md`).
  - Monospace identity logo: `HASHVANTH M U // TRUST LAYER`.
  - Quick jump links: `[Signature]`, `[Applied AI]`, `[Manifesto]`, `[Contact]`.
  - Tactile segmented theme toggle switch and Résumé link.
- **Task 3.3**: Build `Footer.tsx` with high-contrast tactile layout, copyright, back-to-top trigger, and quick links.

---

## Verification Criteria & Quality Gate

1. `npm run build` exits 0 with zero TypeScript or Lint errors.
2. Dark mode renders `#0A0A0C` background with `#F4F4F6` text; Light mode renders `#FBFBFD` with `#111113` text.
3. Theme toggle instantly switches theme with zero layout shift and persists on page reload.
4. Gumroad buttons physically depress by 2px on click and release their offset shadow.
5. All 9 projects exist in `projects.ts` with valid TypeScript typing and verified URLs.

