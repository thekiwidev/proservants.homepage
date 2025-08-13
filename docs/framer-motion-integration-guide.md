# Framer Motion integration guide

Below is an updated, step-by-step guide to adding frame (keyframe-style) animations to a single Next.js + Tailwind page using Framer Motion, with an eye toward eventually reusing on other pages. You can paste each step (and code snippet) into your editor and let Copilot fill in / refine as needed.

1. **Bun** as your package manager
2. **Web-sourced best practices** for Framer Motion + Next.js + Tailwind
3. A “client-only” setup to preserve SSR performance

I’ve cited key recommendations so you can point Copilot at the same sources.

---

## 1. Prerequisites

- Next.js project scaffolded
- Tailwind CSS configured
- Bun installed (≥ 1.0)
- Context7 enabled for Copilot coding

---

## 2. Install Framer Motion via Bun

```bash
# In your project root
bun add framer-motion
```

> **Why Bun?**
> Bun’s native performance gives faster installs and cold-starts than npm/yarn without changing Framer Motion usage.

---

## 3. Create a Client-Only Animation Component

Framer Motion must run **client-side** to avoid SSR pitfalls. Best practice is to use the Next.js “use client” directive at the top of any file importing Framer Motion ([Reddit][1], [Medium][2]).

```tsx
// app/your-page.tsx or pages/your-page.tsx
"use client";

import { motion } from "framer-motion";
import { frameAnimation } from "../lib/animations";
```

---

## 4. Define Reusable Variants & Respect Reduced Motion

In `lib/animations.ts`, centralize your keyframes and include a reduced-motion check (accessed via CSS media query):

```ts
const prefersReducedMotion =
  typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

export const frameAnimation = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: prefersReducedMotion ? 0 : 0.6,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: prefersReducedMotion ? 0 : 0.4, ease: "easeIn" },
  },
};
```

> **Best practice:** Always check `prefers-reduced-motion` to honor user preferences ([Medium][2]).

---

## 5. Wrap Your Page or Component

Apply your variants to the root container:

```tsx
"use client";

import { motion } from "framer-motion";
import { frameAnimation } from "../lib/animations";

export default function MobilePage() {
  return (
    <motion.div
      className="min-h-screen bg-white p-4 flex flex-col"
      variants={frameAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* …your UI… */}
    </motion.div>
  );
}
```

---

## 6. Staggered Lists & Interaction Variants

In `lib/animations.ts`, add a stagger container and item variants:

```ts
export const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

export const itemFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
```

Use on lists:

```tsx
<motion.ul variants={staggerContainer} initial="hidden" animate="visible">
  {items.map((item) => (
    <motion.li
      key={item.id}
      variants={itemFade}
      whileHover={{ scale: 1.05 }}
      className="p-4 bg-gray-100 rounded-lg"
    >
      {item.text}
    </motion.li>
  ))}
</motion.ul>
```

> **Pro tip:** Add `whileHover` or `whileTap` for interactive feedback.

---

## 7. Tailwind-Only Keyframes Alternative

If you ever need **pure CSS**:

1. Update `tailwind.config.js`:

   ```js
   module.exports = {
     theme: {
       extend: {
         keyframes: {
           fadeInScale: {
             "0%": { opacity: "0", transform: "scale(0.8)" },
             "100%": { opacity: "1", transform: "scale(1)" },
           },
         },
         animation: {
           "fade-in-scale": "fadeInScale 0.6s ease-out forwards",
         },
       },
     },
   };
   ```

2. Use in JSX:

   ```jsx
   <div className="animate-fade-in-scale">…</div>
   ```

---

## 8. Performance & SSR Considerations

- **Isolate** animations in client components (“use client”) to preserve SSR for the rest ([Reddit][1]).
- **Tree-shake** unused variants by importing only what you need.
- **Throttling**: Avoid heavy layout animations on scroll; prefer Intersection Observer + `whileInView`.

---

## 9. ScrollAnimate Wrapper

The `ScrollAnimate` component provides a convenient way to fade/slide content based on scroll position.

```tsx
import { ScrollAnimate, SectionHeading } from "@/components/ui";

<ScrollAnimate type="text" direction="left">
  <SectionHeading>Animated Text</SectionHeading>
</ScrollAnimate>

<ScrollAnimate type="image" direction="none">
  <img src="/path/to/image.png" alt="demo" />
</ScrollAnimate>
```

Options:

- `type`: `"text" | "image"` – chooses between slide or scale variants.
- `direction`: `"left" | "right" | "none"` – starting offset for text animations.

Animations play once when fully scrolled into view and reset if the element leaves before completion.

---

## ✅ Acceptance Criteria

1. **Bun** installed `framer-motion` without errors.
2. Page files begin with `"use client"` and animate on mount/unmount.
3. Variants central in `lib/animations.ts`, respecting `prefers-reduced-motion`.
4. List items stagger and respond to hover/tap.
5. Alternative Tailwind keyframes tested.
6. No SSR breakage—animated components are client-only.

With this, Copilot (in Context7) can follow each step, fill in imports/type annotations, and extend the same pattern to other pages.

[1]: https://www.reddit.com/r/nextjs/comments/1d48ok7/framer_motion_and_ssr/?utm_source=chatgpt.com "Framer Motion and SSR : r/nextjs"
[2]: https://medium.com/%40dolce-emmy/resolving-framer-motion-compatibility-in-next-js-14-the-use-client-workaround-1ec82e5a0c75?utm_source=chatgpt.com "Resolving Framer Motion Compatibility in Next.js 14"
