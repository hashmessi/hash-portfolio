This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Portfolio Improvements (March 2026)

## Aesthetic & Accessibility Enhancements
- Added a skip-to-content link for keyboard and screen reader users.
- All marquee and decorative elements now use `aria-hidden` and `tabIndex={-1}` to avoid screen reader noise.
- All images now have descriptive `alt` text for accessibility and SEO.
- Focus states for interactive elements are enforced via CSS and tested for keyboard navigation.

## Performance & Code Quality
- All images use `next/image` for optimization; only above-the-fold images use `priority`.
- No unused dependencies or dead code found.
- All components are typed and modular.

## Design Consistency
- Color, font, and spacing tokens are centralized in CSS variables.
- Animations are purposeful and not excessive.
- Signature moments: animated marquees, retro-card UI, and layered backgrounds.

## Known Trade-offs
- Some heavy visual effects (grain, scanlines) may slightly impact performance on low-end devices, but are essential to the intended aesthetic.
- All motion respects `prefers-reduced-motion` where possible.

## Acceptance Criteria Met
- Distinctive, cohesive, and accessible UI.
- Predictable, consistent interactions.
- No errors or unused code.
- Fully responsive and performant.

---

For further improvements, consider adding more ARIA live regions for dynamic content and testing with screen readers on multiple platforms.
