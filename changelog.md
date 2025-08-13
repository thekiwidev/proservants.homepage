# Changelog

All notable changes to the MigranX website project will be documented in this file.

## [0.3.1] - Fix: Align ScrollAnimate props with Framer Motion

### Fixed

- Resolved TypeScript build error in `components/ui/scroll-animate.tsx` by switching component props to use `HTMLMotionProps<"div">` (omitting `style`, `children`, and `ref`) to match `motion.div` expectations.

## [0.3.0] - 2025-08-09

### [0.3.0] - 2025-08-09 - Changed

- **Component Architecture Refactor**

  - Reorganized components into `home`, `shared`, and `ui` directories for better modularity and scalability.
  - Centralized shared components like `Header` and `Footer` into the main `layout.tsx` to streamline page rendering and reduce code duplication.
  - Grouped page-specific components by feature (e.g., all homepage components are now in `components/home/`).

- **`SectionHeading` Component Enhancement**
  - The `highlight` prop now accepts any valid hex color code, allowing for more flexible and dynamic text styling.
  - Highlighting logic is now smarter: it correctly scopes styles to `<span>` elements within the heading for granular control, and applies to the entire heading only when no `<span>` is present.

### Fixed

- Corrected a bug where the `SectionHeading` component would apply highlights to the entire text instead of just the specified `<span>` element.
- Resolved TypeScript errors related to implicit `any` types and incorrect prop types in the `SectionHeading` component.

---

## [0.2.0] - 2025-08-06

### Added

- **Complete MigranX website implementation**

  - Modern landing page with hero section, features, and call-to-action areas
  - Comprehensive component library with reusable UI components
  - Custom color palette (Apricot primary, Turquoise Blue accent, Off-white background)
  - Sen font family integration for consistent typography
  - Responsive design with mobile-first approach

- **New Components**

  - Header component with navigation
  - Hero section with app download buttons
  - Features showcase sections
  - Product exploration feature section
  - Delivery and shipping feature sections
  - Shopping cart feature section
  - How it works step-by-step guide
  - Trust indicators section
  - Final call-to-action section
  - Footer with comprehensive links

- **UI Component Library**

  - Button component with variants (primary, secondary, outline)
  - Container component for consistent layout
  - Section heading component
  - Paragraph component with styled text
  - Utility functions for CSS class management

- **Assets and Branding**

  - MigranX logo (dark variant)
  - App store download badges (iOS and Google Play)
  - Product showcase images
  - Brand-consistent iconography

- **Development Infrastructure**

  - GitHub Actions workflow configuration
  - TypeScript configuration for better development experience
  - ESLint setup for code quality
  - Tailwind CSS v4 with custom design tokens
  - PostCSS configuration

- **Dependencies**
  - `clsx` for conditional CSS classes
  - `react-icons` for consistent iconography
  - `tailwind-merge` for CSS class merging
  - Updated to React 19.1.0 and Next.js 15.4.5

### [0.2.0] - 2025-08-06 - Changed

- **Complete UI/UX Redesign**

  - Replaced default Next.js template with custom MigranX branding
  - Implemented comprehensive design system
  - Updated typography to use Sen font family
  - Applied custom color palette throughout the application

- **Layout and Styling**

  - Migrated from default Next.js styling to custom CSS with design tokens
  - Implemented CSS custom properties for theming
  - Added iOS-style button animations and interactions
  - Updated global styles with custom CSS variables

- **Application Structure**

  - Reorganized page structure to showcase MigranX features
  - Implemented component-based architecture
  - Added proper metadata for SEO optimization
  - Updated application title and description

- **Font and Typography**
  - Replaced Geist fonts with Sen font family
  - Configured font weights (400, 500, 600, 700, 800)
  - Applied consistent typography across all components

### Technical Details

- **Font Integration**: Switched from Geist to Sen font with multiple weights
- **Color System**: Implemented comprehensive color palette with CSS custom properties
- **Animation**: Added bubble and ripple animation keyframes for interactive elements
- **Component Architecture**: Built modular, reusable component system
- **Styling**: Migrated to Tailwind CSS v4 with custom configuration
- **Build System**: Updated PostCSS configuration for Tailwind v4 compatibility

### Documentation

- Added comprehensive project documentation in `docs/`
- Included MigranX website vendor brief with project specifications

---

## [0.1.0] - Initial Release

- Initial Next.js project setup with TypeScript
- Basic project structure and configuration
- Default Next.js template implementation
