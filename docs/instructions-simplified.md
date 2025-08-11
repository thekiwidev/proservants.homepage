# MigranX Build Playbook (Next.js marketing site)

## 1.Core principles

- Clarity over cleverness: each section earns attention and ends with a CTA.
- Design system first: tokens → primitives → blocks; no one-off styling.
- SEO is a feature: metadata, structured data, and share images are mandatory.
- Fast by default: LCP ≤ 2.5s, CLS ≤ 0.05, TBT ≤ 200ms; Lighthouse mobile ≥ 95.
- Accessible for all: WCAG AA+.
- Marketing site goal: convert visitors; every page must map to a single measurable outcome (sign-up, download, lead, booking) with tracking.
- Monitor INP along with other Web Vitals and regress only with an explicit waiver.

## 2. Tech & repo setup

- Next.js App Router + TypeScript + Tailwind; TypeScript strict.
- ESLint + Prettier; Husky + lint-staged.
- Vercel previews → staging → production.
- Env safety: only NEXT_PUBLIC\_\* is exposed; staging sets X-Robots-Tag: noindex.

## 3. Project shape (high level)

- app: routes, layout, page metadata, sitemap, robots, dynamic OG images.
- components/ui: primitives (Button, Card, Tag, Icon, Input…).
- components/blocks: Hero, Features, Steps, Logos, Stats, Testimonials, FAQ, CTA.
- components/layout: Header, Footer, Section, Container, Grid.
- content: MDX/JSON copy and FAQs. lib: seo/schema/analytics helpers. styles: globals.css tokens.

## 4. Design system Tokens

- Use palette from globals.css. Apply 60/30/10: 60% neutral surfaces; 30% Primary (Apricot) accents/active; 10% Accent for CTAs/links.
- Never paint full pages with Primary. Accent remains special (≤10% of a viewport).

Primitives

- Button (accentSolid, primarySolid, ghost, link), Card (elevation, tone), Tag/Pill/Badge/Chip, Heading (eyebrow/highlight), Icon, Divider, Kicker, Input/Select/Textarea/Checkbox.
- All primitives include aria labels, roles, and visible focus.

Blocks

- Hero (media, title, sub, primary/secondary CTAs), Features (3–6), Steps (3–5), Logos, Stats, Testimonials, FAQ, CTA.
- Per page: one Hero; one or two proof blocks; one journey block; one final CTA.

## 5. SEO & sharing Default metadata

- In layout, set metadataBase; default title and template; description; canonical; themeColor; icons. Open Graph: type website, siteName, site URL, default image. Twitter: summary_large_image with handles.

Per-page metadata

- Each page sets unique title, description, canonical URL, OG url/image.

Sitemap & robots

- Provide sitemap.xml for core pages; set priorities and lastModified. robots.txt allows production, blocks staging; include sitemap link.

Structured data (JSON-LD)

- Organization and WebSite on home. BreadcrumbList on inner pages. FAQPage on FAQ. Product/Service for offerings; JobPosting if recruiting. Validate in Rich Results.

Dynamic social images

- Generate branded OG/Twitter images via an API route that accepts a “title” param; reference it in per-page metadata. Test in share debuggers.

Canonicalization & sharing hygiene

- Enforce one canonical domain (www or apex). Titles ≲ 60 chars; descriptions ≲ 155. Write alt text and descriptive filenames.

## 6. Performance budget & implementation

- Images: next/image with sizes; AVIF/WebP; allowed domains only; lazy-load noncritical media.
- Fonts: next/font; ship used weights; host locally; preconnect sparingly.
- Scripts: load essentials afterInteractive; defer the rest; block third-party tags until consent.
- Caching: static or ISR (hourly revalidate) for marketing pages; cache API responses at the edge when possible.
- Code: server components by default; client only when interactive; split blocks by route.
- Measure: Lighthouse CI on PRs; enforce budgets; monitor Web Vitals in Vercel.

## 7. Accessibility

- Contrast AA+: body vs surface and button text vs fill ≥ 4.5:1; darken a shade if needed.
- One h1 per page; semantic headings; header/main/footer landmarks.
- Keyboard-first: visible focus, proper labels, logical tab order.
- Images: descriptive alt; decorative images empty alt.
- Forms: labels, help text, and error messages bound to inputs.
- Add automated checks (axe) to CI.

## 8. Analytics, pixels, consent

- GA4 and Vercel Analytics. Optional Meta/Google Ads pixels load only after consent.
- Consent banner distinguishes necessary vs marketing; store consent choice; block nonessential scripts until granted.
- UTM plan: heroes and major buttons pass campaign params using a documented naming scheme.

## 9. Content workflow

- Store copy in MDX or CMS with fields: title, description, slug, ogTitle, ogDescription, lastUpdated.
- Voice: clear, people-first, optimistic. Headlines ≤ 7 words; subheads ≤ 18. End each section with one CTA.
- Localize strings used in OG images to keep shares on-brand.

## 10. Forms & CTAs

- Validate inputs and show success/error states; track generate_lead, begin_checkout, complete_registration; confirm conversions server-side when possible.
- On success, route to a unique confirmation URL for analytics.
- One primary CTA per section (Accent solid); optional secondary CTA (Primary or ghost).

## 11. Internationalization (optional)

- When adding locales, use localized routes and alternates.languages metadata.
- Translate nav, footer, titles, descriptions, and JSON-LD inLanguage.
- Hreflang and canonical must not conflict.

## 12. Security & robots

- Security headers: CSP allowing your domain and required analytics; X-Content-Type-Options: nosniff; Referrer-Policy: strict-origin-when-cross-origin.
- Staging and previews return noindex and may require password protection.

## 13. QA & launch checklists Pre-merge (each PR)

- Page defines generateMetadata with canonical; OG/Twitter previews render; JSON-LD validates; Lighthouse mobile ≥ 95; Axe shows 0 serious issues; CTAs fire analytics.

Pre-launch

- Sitemap lists key routes; robots allows production and blocks staging.
- Branded 404/500; favicons and app icons complete; theme color set.
- Domain redirects and canonicalization verified (www/non-www unified).

## 14. AI build instructions (paste into tools) Global header

- Use tokens from globals.css and the 60/30/10 ratio: 60% neutral surfaces, 30% Primary accents/surfaces, 10% Accent for CTAs/links.
- Do not use Primary as a full background; keep Accent scarce and special.
- Compose pages from blocks: Hero → Proof (logos/testimonials/stats) → Features/Steps → final CTA.
- Output semantic, accessible React. Include per-page metadata (title, description, canonical, OG/Twitter) and a route-specific OG image.
- Add JSON-LD by page type: Organization and WebSite on home; FAQPage on FAQ; BreadcrumbList on inner pages.
- Keep copy tight; headline and subhead limits apply; close every section with one clear CTA.
- Prefer server components; minimize client code; images optimized and described.

Per-page copy ask example (Sellers)

- Target small to mid-size vendors; tone confident, friendly, jargon-free. Provide: a value-prop Hero with CTA “Register as a Seller”; a 3-step onboarding block; 3–4 benefit cards; one-line testimonial; final CTA. Return a JSON-like shape with fields for each block so the UI can hydrate.

## 15. Implementation helpers (guidance, not code)

- Provide a tiny SEO helper that builds absolute URLs from NEXT_PUBLIC_SITE_URL for canonical and OG fields.
- Configure images to allow only the domains you use.
- Add a minimal Analytics component that loads GA4 asynchronously and sends a basic config on mount.
- Use a dynamic OG image endpoint that accepts a title parameter and reflects brand colors and typography.

This playbook is the single source of truth for styles, structure, SEO, performance, a11y, analytics, and workflow. If a decision isn’t covered, default to clarity, speed, and accessibility, then document the rule for the next contributor.
