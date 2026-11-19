# Rivanimal · Navidad Solidaria

Landing page for a Christmas letter from the shelter dogs of **Rivanimal**. Visitors browse a catalog of gift suggestions, buy the items in external stores, and deliver them to the shelter, where the "Reyes Magos" hand them to the dogs.

## Stack

- Astro 7 with static output
- Tailwind CSS 4 through `@tailwindcss/vite`
- TypeScript
- pnpm (the only package manager used)
- Prettier with the Astro and Tailwind plugins

No UI framework; the catalog filter is a small vanilla script.

## Commands

```sh
pnpm install
pnpm dev --background   # manage with: pnpm exec astro dev status | stop | logs
pnpm build
pnpm preview
pnpm exec astro ...
pnpm exec prettier --write .
```

## Project structure

```text
src/
├── assets/       # Images imported and optimized by Astro
├── components/   # Page sections and reusable UI components
├── data/         # Catalog types and content (categories and gifts)
├── layouts/      # HTML shell, global styles, and SEO metadata
├── pages/        # File-based routes; index.astro is the landing page
└── styles/       # Tailwind theme tokens, utilities, and base styles

public/           # Static files served as-is, such as favicons
```

## Conventions

- All copy is in Spanish and the site is fully static (`lang="es"`).
- Copy stays colocated in its component; shared catalog content lives in `src/data/`.
- Colors, fonts, radius, and shadows are Tailwind theme tokens in `src/styles/global.css`.
- Use the AA-safe oranges for text and buttons: `flame-600` on buttons and `flame-700` for small text. `flame-500` is only for large decorative surfaces.
- Do not add dependencies unless they are strictly necessary. Explain the reason before adding one.
- Run Prettier before handing off.

## Placeholders

- The logo is a temporary transparent crop of the mockup; replace it with the official SVG.
- Gift images are gray placeholders until real product photos are available.
- Gift store URLs, the "Saber más" target, and the contact email still need real values.
- The canonical domain and an Open Graph image are intentionally not configured yet.
