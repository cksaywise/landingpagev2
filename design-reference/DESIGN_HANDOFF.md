# Handoff: Saywise Landing Page

## Overview
A marketing landing page for **Saywise**, a Resume 2.0 platform that lets makers showcase their work through stories, multimedia, and case studies instead of bullet-point resumes. The page positions the product, walks visitors through how it works, surfaces social proof, explains four feature pillars, shows example profiles, answers common questions, and drives signup via a "drop in your LinkedIn URL" CTA.

## About the Design Files
The files in this bundle are **design references created in HTML** — a prototype showing the intended look and behavior, not production code to copy directly. The task is to **recreate this design in the target codebase's existing environment** (React/Next.js, Vue, etc.) using its established patterns, component library, and tokens. If no codebase environment exists yet, choose the most appropriate framework for the project (Next.js + Tailwind is a reasonable default for a marketing page) and implement there.

The prototype uses plain HTML/CSS with CDN-loaded icons (Lucide) and inline SVG. There is no build step. Treat the HTML as a visual spec, not a starter.

## Fidelity
**High-fidelity (hifi).** Colors, type ramp, spacing, hover states, and interaction details are intended to be final. Reproduce pixel-perfectly using the codebase's existing libraries and patterns.

---

## Screens / Views

The page is a single long-scroll landing page. Sections in document order:

### 1. Top navigation (sticky)
- **Layout**: Full-width, 64px tall, sticky to top. Three columns: brand (left), pill nav (center), CTA buttons (right).
- **Transparent over hero** — gains a white blurred backdrop + 1px hairline divider once user scrolls past 80px.
- **Brand**: Saywise wordmark/logo image, ~22px tall, rendered as black (using `filter: brightness(0)` on the white asset, or use a black SVG version directly).
- **Pill nav**: Rounded `9999px` pill, 1px hairline border, secondary-bg fill, 4px inner padding. Links: 13px/500 weight, ink-2 color, padded `8px 14px`, rounded full. Hover → ink-1 color + accent-soft background.
- **Right CTAs**: Two pills. Ghost (white fill, hairline border, 13px/500, "Sign in") and solid (ink-1 fill, bg-1 text, 13px/500, "Get started"). Both `border-radius: 9999px`, padding `10px 18px`. Press: `scale(0.985)` for 100ms.

### 2. Hero
- **Layout**: 1040px max-width container, centered, ~120px top padding / 64px bottom. Soft blue gradient backdrop scoped to the hero only (radial wash from top with two large blurred color blobs — blue + faint lavender).
- **Headline**: `Resume is dead.` on line 1, `Your work isn't.` on line 2 (line 2 in muted/ink-3 color). 96px / 500 weight / 0.98 line-height / -0.045em tracking. Text-balance, max-width ~1000px.
- **Sub-headline**: 19px / 400 / 1.55 line-height / -0.012em, ink-2 color, max-width 580px, centered, with comfortable space (~28px+) above and below.
- **Three step cards** below (24px gap, 3-col grid):
  - Each card: aspect-ratio ~1:1.15, tile-bg fill, 1px hairline rule, media-radius (6px), 24px padding.
  - Top: mono kicker "Step 01/02/03" (11px JetBrains Mono, +0.16em tracking, uppercase, ink-3).
  - Title: 22px / 500 heading font, -0.022em tracking.
  - Description: 14px body, ink-2, max-width 260px.
  - Bottom: placeholder art block (dashed border with diagonal hatch pattern) — to be replaced with real screenshots/illustrations.
  - Hover: border strengthens, `translateY(-2px)` over 150ms.
  - **Copy** (final):
    - 01 — Drop in a link · "LinkedIn, Notion, GitHub — wherever your work already lives."
    - 02 — We draft your story · "A timeline of projects, talks, and writing — extracted and arranged."
    - 03 — Make it yours · "Pick a theme, edit in your voice, and ship a profile that feels like you."

### 3. CTA strip (dark)
- **Layout**: Full-width black band, 56px vertical padding. Inner content uses the 1040px container.
- **Background**: `var(--color-sys-ink)` (#0a0a0a), text bg-1 (#fff).
- **Mono kicker**: "Start now" (white, dot bullet matches white).
- **Headline**: 44px / 500 / 1.05 line-height / -0.03em. Single line — `white-space: nowrap`. Copy: "Turn your LinkedIn into a Saywise profile in 60 seconds."
- **Form**: 560px max-width pill input + button row. Input bg `rgba(255,255,255,0.06)`, border `rgba(255,255,255,0.14)`, rounded pill, 6px outer padding / 22px left padding. Input itself transparent, 15px / 400, white text. Submit button: bg-1 fill, ink text, 14px / 500, padded `14px 22px`, rounded pill — labeled `Start →`.
- **Meta line**: 12px JetBrains Mono, +0.04em tracking, `rgba(255,255,255,0.5)`. Copy: "Free · No credit card · Takes about a minute"

### 4. Logos ticker
- **Layout**: 96px top / 128px bottom padding, centered. Small eyebrow heading (22px / 500 / -0.018em, ink-2 color, 72px bottom margin) reading "Companies hiring on Saywise."
- **Ticker**: 960px max-width container, `overflow: hidden`, with left/right linear-gradient mask (transparent → black 12% → black 88% → transparent).
- **Track**: Flex row, `width: max-content`, 72px gap, `animation: ticker-scroll 42s linear infinite` translating from 0 to -50%. The full set of 10 logos is duplicated inline (aria-hidden on the duplicate) so the loop is seamless.
- **Logo cell**: Inline-flex, 10px gap between bug and wordmark, 22px tall icon image + 18px / 600 heading-font wordmark with -0.02em tracking. Default opacity 0.5, grayscale 100%; on hover restores to full opacity + color. Hovering the ticker container pauses the animation.
- **Logos**: Linear, Stripe, Notion, Figma, Vercel, Anthropic, Airbnb, Shopify, Spotify, Discord (icons pulled from `cdn.simpleicons.org`; in production swap for permissioned partner logos).

### 5. Feature blocks (×4)
Identical structural template, repeated four times. Each section is 88px vertical padding with a top hairline divider.

**Common structure:**
- Centered heading (44px / 500 / -0.038em / 1.02 line-height), single-line, max-width 720px, text-balance.
- Tab strip below the heading: equal-width cells in a row, 1px hairline rule below, vertical hairline dividers between tabs. Active tab: ink-1 color + 2px ink-1 underline (drawn via `border-bottom-color`). Inactive: ink-3 color. Padding `14px 18px`, 13px / 500. Each tab has a mono index (10px JetBrains Mono, +0.12em tracking, "01"/"02"/"03"). Clicking swaps the panel below.
- Tab content panel: split layout. Left column (380px fixed): `h3` 30px / 500 / -0.028em (the tab's headline) + 16px body paragraph (ink-2). Right column (1fr): placeholder media frame — tile-bg fill, 1px hairline, 16:10 aspect, faint diagonal-hatch overlay, with a small mono pill label saying what the visual will be.
- Three tabs per section. Switching tabs swaps both copy and media-label.

**Section content:**

#### 5a. "Stand out and get the next opportunity"
- Tab 01 — Multimedia storytelling → headline "Tell the stories a resume can't." + copy describing embedded video/screenshots/writing.
- Tab 02 — Detail level → (your final tab 2 copy)
- Tab 03 — Honest and unbiased → (your final tab 3 copy)

#### 5b. "Prove your work. Show, don't just tell"
- Tab 01 — Case studies → headline "Earn credibility instantly."
- Tab 02 — Writing samples
- Tab 03 — Public artifacts

#### 5c. "Create effortlessly and continuously"
- Tab 01 — AI content extraction → headline "Tell your human story. Let AI do the heavy lifting."
- Tab 02 — Automatic updates
- Tab 03 — Link to profile

#### 5d. "Made for modern hiring"
- Tab 01 — AI-native → headline "Built for the AI era."
- Tab 02 — Dynamic profile generation
- Tab 03 — Mock interviews

### 6. Stats strip (dark)
- **Layout**: Full-width black band, 88px vertical padding, three columns separated by 1px `rgba(255,255,255,0.14)` left borders.
- **Each stat**: large number (64px / 400 heading font, -0.04em tracking, white) + 15px ink-2-equivalent (`rgba(255,255,255,0.65)`) caption, max 280px wide.
- **Stats** (placeholders): 74% / 1.4× / $3K with explanatory captions.

### 7. Profile gallery
- **Layout**: 96px vertical padding. Centered section heading (44px / 500). Three-column 24px-gap grid of profile cards.
- **Profile card**: 3:4 aspect, tile bg, 1px hairline, media radius, 28px padding. Top: 64px circular avatar (gradient placeholder). Name (22px / 500 heading). Role (14px / 400, ink-2). Hover: border-strengthen + `translateY(-2px)`.
- Three placeholder profiles: Maya Chen (Designer & writer · Brooklyn), Dimas Ardiansyah (Engineer · Berlin), Priya Raman (PM · Bengaluru).

### 8. FAQ
- **Layout**: 96px vertical padding, top hairline divider, 760px max-width content. Centered "FAQ" heading (44px / 500).
- **Accordion**: 9 items, each separated by top hairline (and bottom hairline on the last). Padding `24px 8px`. Grid: `1fr auto`. Left: question (20px / 500 heading, -0.018em). Right: 32px circular hairline button with a Lucide `plus` icon. Clicking expands an answer panel below the question (body 16px / 400 / 1.55 line-height, ink-2, max-width ~600px) and rotates the plus to a × (via 45deg transform).
- **Questions** (full Q&A copy is in the HTML — `.faq-item` blocks). Order:
  1. What is Saywise?
  2. Why do I need another profile page when I already have a resume?
  3. Why can't I just use Notion or Framer to build my page?
  4. Can't I just vibe code my own site using Claude Code?
  5. Will recruiters and hiring managers actually check out my Saywise profile?
  6. Can I practice job interviews on Saywise?
  7. Does Saywise help surface job opportunities?
  8. How do I get started?
  9. How much does Saywise cost?

### 9. Final CTA strip
- Identical structure to section 3. Headline: "Your next role won't fit in a PDF. Start your Saywise profile."
- Sits flush against the footer (no bottom margin).

### 10. Footer
- **Layout**: Black band, generous vertical padding. Single centered element: the Saywise wordmark (white version) rendered very large (~clamped 200–320px responsive size). Nothing else — no links, no legal line, no social column.

---

## Interactions & Behavior

- **Sticky nav scroll state**: Listen to scroll; toggle `.scrolled` on `nav` past 80px. Scrolled adds: white-ish backdrop (color-mix with bg), 1px hairline bottom border, blur. Default (over hero): transparent.
- **Tab switching**: Clicking a `.tab` removes `.active` from siblings in the same `.tabs` row, applies `.active` to the clicked tab, then resolves the `data-target` attr to a `.feature-copy-panel` ID and toggles `.active` on the matching panel within the same section.
- **FAQ accordion**: Clicking a `.faq-item` toggles its `.open` class. Open state expands `.faq-a` (transition `max-height` and opacity) and rotates the plus icon 45deg.
- **Ticker hover**: `.ticker:hover .ticker-track { animation-play-state: paused }`. Individual logo hover restores opacity 1 + removes grayscale.
- **Button press**: All `.btn` elements use `transform: scale(0.985)` on `:active` for 100ms.
- **Card hover (steps + profiles)**: 1px upward translate over 150ms + border `--color-sys-rule` → `--color-sys-rule-strong`.

No form submission logic is wired — submit handlers are `event.preventDefault()` stubs. In production, validate the LinkedIn URL pattern (`linkedin.com/in/<handle>`) and POST to your onboarding endpoint.

## State Management
This is a marketing page. Minimal state:
- `navScrolled: boolean` — driven by scroll listener.
- `activeTab: string` — one per feature section (4 total).
- `openFaq: string | null` (or a `Set<string>` if multiple can be open simultaneously — current prototype allows multiple).
- `email: string` (or `linkedinUrl: string`) — controlled input on both CTA strips. Submission would POST to the signup endpoint.

## Design Tokens

Colors and type are defined as CSS custom properties in `colors_and_type.css` (lifted from the Saywise design system). Key values:

**Color (light, Minimal theme):**
- `--color-sys-bg` (page background): `#ffffff`
- `--color-sys-bg-2` (rails/footers): `#fafaf9`
- `--color-sys-tile` (card fill): `#fafaf9`
- `--color-sys-ink` (primary text): `#0a0a0a`
- `--color-sys-ink-2` (body): `#525252`
- `--color-sys-ink-3` (meta): `#a3a3a3`
- `--color-sys-rule` (hairline): `#e5e5e5`
- `--color-sys-rule-strong`: `#d4d4d4`
- `--color-sys-accent`: theme-dependent
- `--color-sys-accent-soft`: theme-dependent (used as nav-link hover tint)

(See `colors_and_type.css` for all eight themes — Minimal is canonical here.)

**Typography:**
- `--font-heading`: Geist Variable (fallback: Inter / system)
- `--font-sans`: Geist Variable (fallback: Inter / system)
- `--font-mono`: JetBrains Mono (used for kickers, indices, meta lines, stat captions)

Tracking conventions: hero `-0.045em`, h2 `-0.038em`, h3 `-0.028em`, body `-0.01em`, mono kickers `+0.16em`/`+0.18em` uppercase.

**Spacing scale** (4px grid; key vars in `colors_and_type.css` as `--sp-*`):
- Section vertical: 88–96px
- Strip vertical (CTAs, stats): 56–88px
- Card padding: 24–28px
- Inline gaps: 8–12px
- Headline → form: 28px
- Heading → tabs: 32–40px

**Radius:**
- Pills / buttons / chips: `9999px`
- Media / cards: `var(--radius-sys-media)` (6px in Rounded mode, 0 in Sharp mode)

**Shadows:**
- One shadow used sparingly: `0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04)`. Avoid elsewhere — Saywise prefers rule-and-fill for hierarchy.

## Assets

- `assets/saywise-logo-white.png` — Saywise wordmark, white-on-transparent. Used in the nav (filtered to black via `filter: brightness(0)`) and at large size in the footer. In production, prefer SVG and serve a true black version for the nav rather than CSS-filtering.
- `assets/hero-sky-8bit.png` — Soft blue/lavender gradient backdrop for the hero. Replace with a CSS gradient or higher-quality image in production.
- Brand-bug icons in the ticker come from `cdn.simpleicons.org/<brand>/0a0a0a`. **Do not ship these without permission** — these are placeholder partner logos. Replace with logos you have the right to use.

## Files

- `Saywise Landing.html` — single-file prototype. All structure, copy, and styles live here.
- `colors_and_type.css` — flattened design tokens from the Saywise design system (colors for all 8 themes, font definitions, spacing scale, radii).
- `assets/` — image assets referenced by the HTML.
