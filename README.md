# MigranX Website (Next.js)

Production-ready marketing website for MigranX, built with Next.js App Router, Tailwind CSS v4, and React 19. It showcases the product value, links to mobile apps, and includes briefs for future pages (Homepage, Sellers, Drivers) to guide content and design.

Tech stack
—

- Next.js 15 (App Router)
- React 19
- Tailwind CSS v4 (+ @tailwindcss/postcss)
- TypeScript
- Bun (package manager)
- Framer Motion (scroll-driven animations)

Scripts
—

- dev: bun dev
- build: bun run build
- start: bun run start
- lint: bun run lint

Quick start
—

1. bun install
2. bun dev
3. Open <http://localhost:3000>

File structure (key paths)
—

```text
app/
	globals.css
	layout.tsx
	page.tsx
components/
	home/
		hero-section.tsx
		features-section.tsx
		explore-feature-section.tsx
		cart-feature-section.tsx
		delivery-feature-section.tsx
		shipping-feature-section.tsx
		how-it-works-section.tsx
		trust-section.tsx
		final-cta-section.tsx
	shared/
		header.tsx
		footer.tsx
	ui/
		button.tsx
		container.tsx
		paragraph.tsx
		section-heading.tsx
		scroll-animate.tsx
docs/
	migranx-website-homepage-brief.md
	migranx-website-vendor-brief.md
	migranx-website-driver-brief.md
	migranx-website-redesign-brief.md
lib/
	animations.ts
	utils.ts
public/
	images/
	videos/
```

Content and design briefs
—

- Homepage: docs/migranx-website-homepage-brief.md
- Sellers (Vendors): docs/migranx-website-vendor-brief.md
- Drivers: docs/migranx-website-driver-brief.md
- Redesign overview: docs/migranx-website-redesign-brief.md

Notes
—

- Shared UI comes from components/ui and components/shared; prefer these over custom-styled HTML.
- Animations use Framer Motion; see lib/animations.ts and the ScrollAnimate component.
- Color/theme tokens are defined in app/globals.css (Tailwind v4 utilities layered).
