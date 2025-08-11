# MigranX Build Playbook (Next.js, Marketing-site)

## 1) Core principles

- **Clarity > cleverness.** Every section must earn attention and point to a CTA.
- **Design system first.** All UI is built from tokens + composable components.
- **SEO is a feature.** Treat metadata, structured data, and content depth as requirements, not polish.
- **Fast by default.** Target **LCP ≤ 2.5s, CLS ≤ 0.05, TBT ≤ 200ms**, Lighthouse ≥ 95 on mobile.
- **Accessible to everyone.** WCAG AA or better.

---

## 2) Tech + repo setup

- **Next.js (App Router) + TypeScript + Tailwind.**
- **Strict mode on** (`"strictNullChecks": true`, `"noImplicitAny": true`).
- **ESLint + Prettier** (use `eslint-config-next`).
- **Husky + lint-staged** to block bad commits.
- **Vercel** deploys with Preview → Staging → Production.
- **Env safety:** `NEXT_PUBLIC_*` only for public vars; staging uses `X-Robots-Tag: noindex`.

---

## 3) Project structure (src/)

```file
src/
  app/
    (marketing)/             # route groups by audience if helpful
      page.tsx               # homepage
      opengraph-image.tsx    # default OG
      twitter-image.tsx
    sellers/ page.tsx
    drivers/ page.tsx
    faq/ page.tsx
    community/ page.tsx
    layout.tsx
    sitemap.ts
    robots.ts
  components/
    ui/                      # primitive building blocks (Button, Card, Tag, Icon)
    blocks/                  # marketing blocks (Hero, Features, Steps, Logos, Testimonial)
    layout/                  # Header, Footer, Section, Container, Grid
  content/                   # MDX or JSON for copy & FAQs
  lib/                       # helpers (seo.ts, schema.ts, analytics.ts)
  styles/ globals.css        # your tokens already live here
```

---

## 4) Design system (tokens → primitives → blocks)

### 4.1 Tokens

- Use the palette you defined in `globals.css`.
- **60/30/10 rule (adapted):**

  - **60%** neutral/off-white surfaces
  - **30%** **Primary** (Apricot) for section accents, highlights, active states
  - **10%** **Accent** for CTAs/links/important indicators

- Do **not** use Primary as page-wide background. Accent stays special (≤10% on any viewport).

### 4.2 Primitives (always available as props-driven components)

- `Button` (variants: `accentSolid`, `primarySolid`, `ghost`, `link`)
- `Card` (props: `elevation`, `tone`)
- `Tag/Pill`, `Badge`, `Chip`
- `Heading` (`as`, `eyebrow?`, `highlight?`)
- `Icon` (Lucide), `Divider`, `Kicker` (small overline)
- `Input`, `Select`, `Textarea`, `Checkbox`

### 4.3 Blocks (compose primitives; content via props/MDX)

- `Hero` (media: image/video, title, sub, primaryCTA, secondaryCTA)
- `Features` (3–6 items; icon + title + copy)
- `Steps` (How-it-works, 3–5 steps)
- `Logos` (trust strip)
- `Stats` (KPI cards)
- `Testimonials` (carousel or grid)
- `FAQ` (accordion)
- `CTA` (banner/card)

> Rule: every page uses **1 hero**, **1–2 proof blocks (logos/testimonials/stats)**, **1 journey block (steps/features)**, and **1 CTA**.

---

## 5) SEO + sharing (the non-negotiables)

### 5.1 Default metadata (App Router)

Create a rock-solid default in `app/layout.tsx`:

```ts
// src/app/layout.tsx
import type { Metadata } from "next";
export const metadata: Metadata = {
  metadataBase: new URL("https://www.migranx.com"),
  title: {
    default: "MigranX — Discover & Deliver Home Essentials",
    template: "%s · MigranX",
  },
  description:
    "Shop and deliver culturally loved products easily. Sellers grow. Drivers earn.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "MigranX",
    url: "https://www.migranx.com",
    images: ["/api/og"], // dynamic OG route (below)
  },
  twitter: {
    card: "summary_large_image",
    site: "@migranx",
    creator: "@migranx",
  },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  themeColor: "#ffffff",
};
```

Per-page metadata:

```ts
// any page.tsx
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Sellers — Grow with MigranX",
    description: "List products, reach buyers, and scale with logistics.",
    alternates: { canonical: "/sellers" },
    openGraph: { url: "https://www.migranx.com/sellers" },
  };
}
```

### 5.2 Sitemap & robots

```ts
// src/app/sitemap.ts
import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.migranx.com/", lastModified: new Date(), priority: 1 },
    {
      url: "https://www.migranx.com/sellers",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://www.migranx.com/drivers",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://www.migranx.com/faq",
      lastModified: new Date(),
      priority: 0.6,
    },
  ];
}
```

```ts
// src/app/robots.ts
import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://www.migranx.com/sitemap.xml",
  };
}
```

### 5.3 Structured data (JSON-LD)

Add helpers in `lib/schema.ts` and include via `<script type="application/ld+json" />`.

```ts
// lib/schema.ts
export const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MigranX",
  url: "https://www.migranx.com",
  logo: "https://www.migranx.com/logo.png",
};
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://www.migranx.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.migranx.com/search?q={query}",
    "query-input": "required name=query",
  },
};
// Page-specific examples: BreadcrumbList, FAQPage, Product/Service, JobPosting (if recruiting)
```

### 5.4 Dynamic social images (OG/Twitter)

Use the OG Image API for on-brand previews:

```ts
// src/app/api/og/route.tsx
import { ImageResponse } from "next/og";
export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? "MigranX";
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 64,
          background: "#fff",
          color: "#111",
        }}
      >
        <div
          style={{
            borderTop: "12px solid var(--color-primary-500)",
            padding: "48px",
          }}
        >
          {title}
        </div>
      </div>
    ),
    { ...size }
  );
}
```

Call per page with `openGraph.images: [`/api/og?title=Sellers`]`.

---

## 6) Performance budget & implementation

- **Images:** `next/image`, set `sizes`, use AVIF/WebP, define `images.domains` in `next.config.mjs`.
- **Fonts:** `next/font` (local if brand) to avoid FOIT. Preload variable weights you actually use.
- **Scripts:** `strategy="afterInteractive"` only for essentials; defer everything else.
- **Caching:** prefer **Static** or **ISR** (`export const revalidate = 3600`) for marketing pages.
- **Preconnect** CDNs you truly hit; don’t over-preconnect.
- **Code-split** blocks; avoid client components unless interactive.
- **Measure:** add Lighthouse CI to PRs; fail builds if budgets exceed.

---

## 7) Accessibility rules

- Color contrast AA+; if a brand tone fails, step one shade darker.
- Focus states visible for all interactive elements.
- Landmarks: one `<h1>` per page; semantic headings.
- Alt text for images; decorative images `alt=""`.
- Labels + descriptions for all form fields.
- Test with `@axe-core/playwright` (CI gate).

---

## 8) Analytics, pixels & consent

- **GA4** via `gtag.js` (in a tiny `Analytics` component).
- **Vercel Analytics** for performance.
- Optional: **Meta Pixel**, **Google Ads** conversion tags (load after consent).
- **Consent banner** (necessary vs marketing categories) with a consent cookie; respect `granted/denied` before loading non-essential scripts.
- UTM rigor: all CTAs in heroes/buttons accept a `utm_source/site` plan.

---

## 9) Content workflow

- Start simple: **MDX** for static marketing copy & FAQs (`src/content/**`).

  - MDX front-matter: `title`, `description`, `slug`, `ogTitle`, `ogDescription`, `lastUpdated`.

- If you need a CMS: **Contentlayer**, **Sanity**, or **Dato** with the same fields.
- **Tone & voice:** clear, optimistic, people-first. Short headlines (≤7 words). Subheads ≤ 18 words. Each section ends in a CTA.

---

## 10) Forms & CTAs

- Validate with **Zod**; handle optimistic UI and error states.
- Convert events: `begin_checkout`, `generate_lead`, `complete_registration`.
- Send to backend or a form service; always return a success page with unique URL (trackable).
- Show one **primary CTA** per section (Accent solid), plus one **secondary** (Primary or ghost).

---

## 11) Internationalization (optional)

- If/when adding locales, use `app/[locale]/…` and `alternates.languages` in metadata.
- Translate: nav, footers, SEO titles/descriptions, and JSON-LD `inLanguage`.

---

## 12) Security & robots

- **Security headers**: CSP (script-src self, vercel domains, analytics if used), `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`.
- **Staging**: `robots.ts` returns `noindex` + password on previews if needed.

---

## 13) QA & launch checklists

### Pre-merge (every PR)

- [ ] All pages have `generateMetadata` with canonical.
- [ ] OG/Twitter preview looks right (run share debugger).
- [ ] JSON-LD validates (Rich Results Test).
- [ ] Lighthouse mobile ≥ 95.
- [ ] Axe passes (0 serious violations).
- [ ] All CTAs fire analytics events.

### Pre-launch

- [ ] `sitemap.xml` lists key routes.
- [ ] `robots.txt` allows prod, blocks staging.
- [ ] 404/500 branded.
- [ ] Favicons & app icons complete.
- [ ] Domain redirects & canonicalization tested (www/non-www → single).

---

## 14) AI build instructions (paste into your tools)

**Global prompt header (reuse across pages):**

> You are building a marketing page in Next.js using a design system. Follow these non-negotiables:
> • Use the brand tokens defined in `globals.css`. Base layout is 60% neutral surfaces, 30% Primary (Apricot) accents/surfaces, 10% Accent for CTAs/links.
> • Primary is **not** a page background. Accent is reserved for key CTAs/links.
> • Compose the page with blocks: Hero → Proof (logos/testimonials/stats) → Features/Steps → CTA.
> • Generate clean, accessible HTML/React with semantic headings.
> • Provide `generateMetadata()` with unique title, description, canonical, and OG image.
> • Add JSON-LD appropriate to the page (Organization on home, FAQPage on FAQ, BreadcrumbList on all inner pages).
> • Keep copy tight: headline ≤ 7 words, subhead ≤ 18. End every section with one primary CTA.
> • Ensure AA contrast and focus styles.
> • Prefer server components; keep client code minimal.
> • Optimize images with `next/image` and provide realistic alt text.

**Per-page copy ask (example – Sellers):**

> Create copy for “Sellers” targeting small to mid-size vendors. Tone: confident, friendly, no jargon. Include:
>
> 1. Hero (value prop + primary CTA: “Register as a Seller”)
> 2. 3-step onboarding block
> 3. 3–4 benefit cards with short headlines
> 4. Testimonial (1–2 lines)
> 5. Final CTA.
>    Return JSON with fields for each block.

---

## 15) Little implementation helpers

**`lib/seo.ts`**

```ts
export function absoluteUrl(path = "/") {
  const base = process.env.NEXT_PUBLIC_SITE_URL!;
  return new URL(path, base).toString();
}
```

**`next.config.mjs`**

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ["images.ctfassets.net", "cdn.sanity.io"] },
  experimental: { optimizePackageImports: ["lucide-react"] },
};
export default nextConfig;
```

- **Analytics component**

```tsx
// src/components/Analytics.tsx
export function Analytics() {
  if (process.env.NEXT_PUBLIC_GA_ID) {
    return (
      <>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer=window.dataLayer||[];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');
        `,
          }}
        />
      </>
    );
  }
  return null;
}
```

---

if you want, I can drop this into a `PLAYBOOK.md` and scaffold the folder/files (layout metadata, sitemap, robots, OG image route, `schema.ts`, `seo.ts`) so it’s all ready to ship.
