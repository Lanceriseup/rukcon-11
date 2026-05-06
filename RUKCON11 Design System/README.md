# RUKCON11 — Design System

> **RUKCON11: ALL IN.** A high-stakes gathering of high-powered businessmen and their wives. Premium, but with grit. Masculine-first, with the women in the room recognized as equal partners — never an afterthought.

---

## The brand at a glance

**RUKCON11** is the eleventh edition of an annual, invitation-only convention for top-performing entrepreneurs, operators, and executives. The "ALL IN" tag signals total commitment — chips on the table, no hedge.

The visual identity is built around three forces:

1. **GOLD** — primary. Earned, not flashy. Aged-coin gold, never neon.
2. **TEAL** — supporting. The brushstroke. Sun-bleached, slightly Caribbean. Lets the wives' presence cut through the masculine register.
3. **GRIT** — texture, brushstroke marks, condensed type, almost-square corners. We are not a SaaS dashboard.

### Sources provided
- `uploads/SCR-20260427-oudb.png` — primary logo, solid teal brushstroke variant (light + dark backgrounds).
- `uploads/SCR-20260427-oufw.png` — secondary logo, teal→gold gradient brushstroke variant (light + dark backgrounds).

No codebase, Figma, or copy decks were provided. The system below is **derived from the logo + brief**: "Lead primarily with Gold, leave room for teal to shine through. Masculine-first, recognizes women, premium with grit, not luxury-overdone." Where this required interpretation, choices are flagged below.

---

## Index

| File | Purpose |
|---|---|
| `README.md` | This file — brand, content, visual, iconography, and index |
| `SKILL.md` | Agent skill manifest — load this in Claude Code to get a RUKCON11 designer |
| `colors_and_type.css` | All color + type CSS variables and semantic styles |
| `assets/` | Logos (4 variants), placeholder icons, brand textures |
| `preview/` | Design System tab cards (registered) |
| `ui_kits/` | _(none — no product surfaces were provided. See Caveats.)_ |
| `slides/` | _(none — no slide template provided.)_ |

---

## CONTENT FUNDAMENTALS

> No copy samples were provided. Voice rules below are **derived from the brief and logo wordmark.** Treat them as v1; please send any existing landing copy, invitation language, or past-year decks to refine.

### Voice
**Direct. Earned. A little salty.** RUKCON11 talks to people who run things. Don't explain the obvious. Don't hedge. The reader has a P&L and a calendar that's already on fire — respect both.

### Tone register
- **Primary:** confident, declarative, slightly clipped.
- **Avoid:** corporate ("synergize," "leverage"), self-help mush ("unlock your potential"), or false intimacy ("hey friend!").
- **Do** use: short sentences. Verbs in front. Numbers when you have them.

### Person & address
- Default to **second person** ("You're at the table"), occasionally **first-person plural** ("We don't do panels here").
- Never "I" from the brand voice. The brand is the room, not a single host.
- The wives are addressed as participants, not plus-ones. Avoid "and their spouses" boilerplate; "couples," "partners in the room," or naming both audiences directly is preferred.

### Casing
- Display headlines: **ALL CAPS** in the condensed display face. Short. 2–6 words.
- Subheads: Sentence case.
- Body: sentence case.
- The script "All In" mark is a **graphic element** — type it as `<span class="script">All In</span>` and never substitute body type for it.

### Punctuation
- Periods on display lines are fine and even encouraged for finality. ("ALL IN.")
- Em dashes for emphasis — not parentheses.
- One exclamation point per page, max. We don't beg for attention.

### Emoji & unicode
- **No emoji.** They undercut the register.
- Sparingly use unicode dividers (`·` or `—`) between metadata items.

### Sample copy (use as anchors)

> **ALL IN.**
> Eleven years. One room. The operators who build the things you read about — and the partners who make the building possible.

> **You're not here to network.**
> You're here because the people you needed to meet four years ago are sitting two seats over.

> **Three days. No panels. No badges that say "VP of Synergy."**

### Don'ts
- ❌ "Join us for an unforgettable journey of growth and connection."
- ❌ "Unlock your full potential surrounded by like-minded leaders."
- ❌ "Bring your spouse along!"
- ✅ "Bring the person you'd call from a foxhole."

---

## VISUAL FOUNDATIONS

### Color
**Gold leads, teal supports, ink anchors.** ~60% ink (black/paper), 25% gold, 12% teal, 3% accent. Teal is never the primary on a hero — it's always either a brushstroke mark, an underline, an accent rule, or a single CTA.

- **Brand gold** `#C99B30` — aged coin, not lemon. Used for: primary CTAs, the `11` disc, key numerals, gold-foil moments.
- **Brand teal** `#1FA0A8` — sun-bleached, never electric. Used for: brushstroke graphics, secondary CTAs aimed at the partner audience, eyebrow rules, link hover states.
- **Ink** `#141414` — slightly warm black. Default text and dark surfaces.
- **Paper** `#F5F4F0` — warm off-white. Default light surface. Never pure `#FFF` for content backgrounds — too clinical.

### Typography
- **Display + Body:** **Montserrat** — the brand face. Full weight range available (100 Thin → 900 Black, with italics). Used at **900 Black uppercase** for hero headlines and the RUKCON wordmark, **800 ExtraBold** for section titles, **500 Medium** for ledes/eyebrows, **400 Regular** for body. Files in `fonts/` and loaded via `@font-face` in `colors_and_type.css`.
- **Script:** **Caveat Brush** (Google Fonts) — supporting script with a cleaner brushstroke feel that matches the logo's hand-lettered "ALL IN" mark. Used **only** for accent words, max 3 words per use. (Permanent Marker remains as a marker-style fallback if the brush feel is wrong for the surface.)
- **Mono:** **JetBrains Mono** (Google Fonts) — for codes, IDs, agenda timestamps.

> **Note on the script mark:** the "ALL IN" hand-lettering on the logo is a custom drawing, not a font. Use the logo art for that mark in real materials; Permanent Marker is the supporting fallback when typesetting new short script accents (e.g. "Together." on couple-facing material).

### Spacing
8-pt grid. Spacing tokens: `--s-1` (4px) through `--s-10` (128px). Section vertical padding on hero/landing should err generous — `--s-9` (96px) minimum on desktop.

### Backgrounds
- **Default:** flat warm paper (`--ink-50`) or flat ink (`--ink-900`). No gradient body backgrounds.
- **Hero accents:** the **brushstroke** is the signature motif. Use as a background mark behind a numeral, headline, or photo crop. Two flavors: **solid teal** (sharp, premium) and **teal→gold gradient** (warmer, hospitality moments — couple-facing material).
- **Photography backgrounds:** allowed full-bleed for hero sections. Always with a 60% ink scrim or warm-paper duotone wash so display type holds.
- **No** repeating patterns, no Memphis textures, no SaaS gradient meshes.

### Imagery vibe
Warm, slightly grainy, golden-hour. Black-and-white is acceptable for portraiture (especially principals/founders). Never cool-blue corporate stock. Avoid stock photography of "shaking hands at a desk." Prefer environmental shots: rooms, tables, hands, glassware, signage.

### Animation
Restrained. The brand doesn't bounce.
- **Hover:** 120–200ms, `ease-out`. Color shift only — no scale.
- **Press:** instant color darken (no shrink, no scale-down — it reads consumer).
- **Section reveals:** 360ms fade + 8px translate-y on scroll-in. Once. Never repeated.
- **The brushstroke** is the only thing allowed to "draw on" — a stroke-dasharray reveal at 600ms `ease-grit` for hero entrances. Use sparingly, once per page.

### Hover & press states
- **Buttons (gold primary):** hover → `--gold-300` (lighter, glints brighter). Press → `--gold-500` (darker).
- **Buttons (teal secondary):** hover → `--teal-300`. Press → `--teal-500`.
- **Text links:** underline on hover only, in `--accent` (gold) or `--accent-2` (teal) depending on context.
- **Cards:** elevate `--shadow-sm` → `--shadow-md` on hover. No scale.

### Borders
- Default border: `1px solid rgba(20,20,20,0.12)`.
- **Strong border** (used on premium content blocks): `1px solid var(--gold-400)` — a single hairline of gold reads "earned."
- Card borders should be visible on paper, not hairline — RUKCON cards have weight.

### Shadows
- `--shadow-sm` for resting cards.
- `--shadow-md` for hover/elevated.
- `--shadow-lg` for modals and the rare floating element.
- `--shadow-gold` — a tinted gold drop, only for the highest-tier CTA (e.g., the "Reserve Seat" button on the home page).

### Corner radii
**Almost-square.** `--r-sm: 2px` for cards, `--r-md: 4px` for buttons, `--r-pill` only for tag chips. Big rounded corners read consumer-app and break the register.

### Transparency & blur
Used sparingly:
- **60% ink scrim** (`rgba(20,20,20,0.6)`) over hero photos.
- **Backdrop blur (`12px`)** acceptable on a sticky nav over photography.
- Never frosted/glass cards over white. We're not a fintech onboarding flow.

### Cards
Cards have:
- 1px hairline border (`var(--border)` or gold for premium tiers)
- `--r-sm` (2px) corner radius
- `--shadow-sm` resting elevation
- Internal padding `--s-5` (24px) minimum
- Optional 4px-tall **gold or teal accent rail** along the **top edge** (never left — left-rail accents are AI-slop tropes)

### Layout rules
- 12-column grid on desktop, 8 max on tablet, 4 on mobile.
- Hero sections: asymmetric. The brushstroke breaks out of the grid by design.
- Sticky chrome: nav at top only. No floating action buttons.
- Footer is dense — agenda recap, partners, legal — and lives on `--ink-900`.

---

## ICONOGRAPHY

> No icon set was provided in the source materials. Recommendation below is a **substitution flag**.

### Approach
- **Style:** outlined, 1.5px stroke, square caps, 24×24 base. Never filled-bubble, never duotone, never glyph-on-circle.
- **Library:** **[Lucide](https://lucide.dev)** via CDN — closest match to the brand's stripped-back, condensed register. Loaded as:
  ```html
  <script src="https://unpkg.com/lucide@latest"></script>
  <i data-lucide="award"></i>
  ```
- **Color:** icons inherit `--fg` by default; `--accent` (gold) for emphasized icons; never paint icons teal except in nav-active states for partner-facing surfaces.
- **Sizing:** 16, 20, 24, 32px. Stick to the scale.

### When to use icons
- Agenda items, room markers, dietary flags — yes.
- Decorating headlines — no.
- Replacing words a senior reader can read — no. ("Schedule" beats a calendar glyph.)

### Logos available in `assets/`
| File | Usage |
|---|---|
| `logo-rukcon11-allin-solid.png` | Original solid variant, both backgrounds (source artwork) |
| `logo-rukcon11-allin-gradient.png` | Original gradient variant, both backgrounds (source artwork) |
| `logo-solid-light.png` | Solid teal brushstroke, **for light backgrounds** |
| `logo-solid-dark.png` | Solid teal brushstroke, **for dark backgrounds** |
| `logo-gradient-light.png` | Teal→gold gradient brushstroke, light backgrounds — couple-facing material |
| `logo-gradient-dark.png` | Teal→gold gradient brushstroke, dark backgrounds |

**Clear space:** a `RUKCON` cap-height of clear space on all sides.
**Minimum size:** 120px wide for screen, 1" wide for print.
**Never:** rotate, recolor, stretch, swap script for a different font, place on a busy photo without a scrim.

### Emoji
**Never** use emoji in product UI. Acceptable in private/internal Slack only.

### Unicode
Acceptable as separators in metadata strings: `Sept 14 · Aspen · By invitation`. Use em-dash `—` for sentence breaks, mid-dot `·` for inline lists, never bullet `•`.

---

## CAVEATS — please review

1. **No source codebase or Figma** provided — the system is logo-derived. Send any landing page, invitation, or past-year materials and we'll align the system to them.
2. **Brand font confirmed: Montserrat** (full family in `fonts/`). The "ALL IN" hand-lettering on the logo remains a custom drawing — use the logo art for that mark, never re-typeset it.
3. **No icon set was specified** — Lucide is the recommended substitute. Confirm or send your set.
4. **No UI kit was generated** — no codebase / Figma / product screens were provided. Once you share a website, invitation flow, or registration UI, we'll build the kit against real source.
5. **No slide template was provided** — slide samples not generated. Send a past deck and we'll create matching templates.
6. **Copy samples are speculative.** Voice rules are extrapolated from the "ALL IN" tagline and brief. Real samples will sharpen this fast.
