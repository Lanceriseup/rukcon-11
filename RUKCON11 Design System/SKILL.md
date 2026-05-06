---
name: rukcon11-design
description: Use this skill to generate well-branded interfaces and assets for RUKCON11 — the annual invitation-only convention for high-powered businessmen and their wives. Contains essential design guidelines, colors, type, fonts, logos, and brand voice rules for prototyping and production work. Lead with gold, let teal shine through, masculine-first but recognizes women, premium with grit (not over-luxe).
user-invocable: true
---

# RUKCON11 Design Skill

Read the `README.md` file within this skill, and explore the other available files. Key files:

- `README.md` — brand, voice, visual foundations, iconography, caveats
- `colors_and_type.css` — drop-in CSS variables and semantic type styles
- `assets/` — logos (4 background-aware variants)
- `preview/` — example specimens for every token in the system

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. Always import `colors_and_type.css` so type and color tokens are available.

If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick rules to internalize

1. **Gold leads, teal supports, ink anchors.** ~60% ink, 25% gold, 12% teal, 3% other.
2. **Type is Montserrat across the board.** 900 Black uppercase for hero headlines, 800 ExtraBold for section titles, 500 Medium for ledes, 400 Regular for body. The "ALL IN" script is the logo's hand-lettered mark — don't re-typeset it.
3. **Almost-square corners** (2–4px), **flat warm paper backgrounds**, restrained motion, **no emoji**.
4. **Voice is direct.** Don't hedge, don't beg, don't say "synergize." See README → CONTENT FUNDAMENTALS.
5. **Brushstroke is sacred.** It's the signature motif. Two flavors (solid teal, teal→gold gradient) — use sparingly, once per hero.
6. **Recognize the partner audience without diminishing them.** "Couples" or "partners in the room," not "spouses" or "plus-ones."

## Common tasks

- **Slide deck** → use `font-display` for titles, paper or ink background, gold numerals, teal eyebrow rules. Brushstroke mark on cover slide only.
- **Invitation / save-the-date** → gradient brushstroke logo, gold-foil-feel CTA, generous whitespace.
- **Web hero** → photo + 60% ink scrim, ALL CAPS display headline, single gold CTA, single teal secondary.
