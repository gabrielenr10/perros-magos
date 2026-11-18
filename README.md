# Rivanimal · Navidad Solidaria

Landing page for a Christmas letter from the shelter dogs of **Rivanimal**. Visitors browse a catalog of gift suggestions, buy the items in external stores, and deliver them to the shelter, where the "Reyes Magos" hand them to the dogs.

## Status

Work in progress on `feature/landing-page`.

- [x] Design tokens and `page-shell` utility
- [x] `BaseLayout` with Google Fonts and SEO
- [x] `Button`, `Badge`, and `SectionHeading`
- [x] Hero with temporary logo
- [x] How-it-works section and step cards
- [x] Gift categories and catalog data
- [x] Gift catalog (cards, filters, grid, and notice)
- [x] Final call to action
- [ ] Site footer
- [ ] Responsive and accessibility polish

## Stack

- Astro 7 with static output
- Tailwind CSS 4 through `@tailwindcss/vite`
- TypeScript
- pnpm (the only package manager used)
- Prettier with the Astro and Tailwind plugins

No UI framework and no client-side runtime. The catalog filter will be a small vanilla script.

## Commands

```sh
pnpm install
pnpm dev --background   # manage with: astro dev status | stop | logs
pnpm build
pnpm preview
pnpm exec astro ...
pnpm exec prettier --write .
```

## Project structure

```text
src/
├── assets/
│   └── rivanimal-logo.png       # temporary crop from the mockup
├── components/
│   ├── Badge.astro
│   ├── Button.astro
│   ├── CatalogNotice.astro
│   ├── FinalCta.astro
│   ├── GiftCard.astro
│   ├── GiftCatalog.astro
│   ├── GiftFilters.astro
│   ├── GiftGrid.astro
│   ├── Hero.astro
│   ├── HowItWorks.astro
│   ├── SectionHeading.astro
│   └── StepCard.astro
├── data/
│   ├── categories.ts            # category ids, labels, emoji, badge tone
│   └── gifts.ts                 # gift catalog entries
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css               # theme tokens, page-shell, base styles
```

## Conventions

- All copy is in Spanish and the site is fully static (`lang="es"`).
- Copy stays colocated in its component. Catalog content lives in `src/data/`, not in a global site config.
- Colors, fonts, radius, and shadows are Tailwind theme tokens in `src/styles/global.css`.
- Use the AA-safe oranges for text and buttons: `flame-600` on buttons and `flame-700` for small text. `flame-500` is only for large decorative surfaces.
- Do not add dependencies unless they are strictly necessary. Explain the reason before adding one.
- Run Prettier as the final task of every step.

## Placeholders

- The logo is a temporary transparent crop of the mockup; replace it with the official SVG.
- Gift images are gray placeholders until real product photos are available.
- Gift store URLs, the "Saber más" target, the contact email, and the footer social links still need real values.
- The canonical domain and an Open Graph image are intentionally not configured yet.
