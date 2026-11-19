## Project

Christmas landing page for Rivanimal, a Spanish animal shelter. Visitors browse gift suggestions, buy them in external stores, and deliver them to the shelter. The site is static and Spanish-only. See `README.md` for current status and the roadmap.

## Tooling

- Astro 7 with static output, Tailwind CSS 4 through `@tailwindcss/vite`, and TypeScript.
- Use **pnpm only**: `pnpm dev`, `pnpm build`, `pnpm exec ...`. Never use npm, npx, or yarn.
- Do not add dependencies unless strictly necessary. Point out and justify any new package before adding it.
- Run Prettier as the final task of every step: `pnpm exec prettier --write <files>`.
- No adapter, SSR, or UI framework is needed.

## Workflow

- Work on the `feature/landing-page` branch.
- Implement one step from the README roadmap at a time. Steps are designed to be atomic commits.
- **Do not commit.** Leave the working tree ready for review, present a summary of the changes and verification, and let the user commit.
- Keep every step buildable with `pnpm build`.
- Check layouts at 360 / 768 / 1280 px and keyboard-test interactive elements before handing off.

## Code conventions

- Spanish copy, `lang="es"`, fully static content.
- Colocate copy in its component. Catalog content belongs in `src/data/categories.ts` and `src/data/gifts.ts`; do not reintroduce a global `site.ts`.
- Avoid speculative abstractions. Components are extracted only when they have at least three real uses.
- Do not add `Container`, `Icon`, `SnowflakeBand`, or `LandingLayout` components; those were deliberately removed.
- Reuse `Button`, `Badge`, `SectionHeading`, and `StepCard` where they fit.
- Style with Tailwind utilities and the tokens in `src/styles/global.css`. Root content wrappers use the `page-shell` utility.
- Section ids in use: `inicio`, `como-funciona`, `catalogo`.
- Accessibility: semantic heading order (`h1` → `h2` → `h3`), visible focus, `aria-hidden` on decorations, and respect `prefers-reduced-motion`.

## Design decisions

- The logo is a temporary transparent crop of the mockup. Product photos are gray placeholders until real assets arrive.
- Gift cards link to an external `storeUrl`. The heart button is presentational for now: `aria-disabled="true"`, `data-favorite`, no behavior.
- "Por confirmar" is a static decorative pill on every gift card.
- The category filters are a vanilla Astro script with progressive enhancement, not a React island.
- Fonts are loaded from Google Fonts (`Nunito` for display, `Nunito Sans` for body) through a `<link>` in `BaseLayout`.
- The footer is intentionally minimal, matching the mockup: logo and copyright line only, with no email or social links.
- Pending real content: gift store URLs, "Saber más" target, contact email, official logo, product photos, canonical domain, and Open Graph image.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
