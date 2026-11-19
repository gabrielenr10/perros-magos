## Project

Christmas landing page for Rivanimal, a Spanish animal shelter. Visitors browse gift suggestions, buy them in external stores, and deliver them to the shelter. The site is static and Spanish-only. See `README.md` for setup, commands, and project structure.

## Tooling

- Astro 7 with static output, Tailwind CSS 4 through `@tailwindcss/vite`, and TypeScript.
- Use **pnpm only**: `pnpm dev`, `pnpm build`, `pnpm exec ...`. Never use npm, npx, or yarn.
- Do not add dependencies unless strictly necessary. Point out and justify any new package before adding it.
- Run Prettier as the final task: `pnpm exec prettier --write <files>`.
- No adapter, SSR, or UI framework is needed.

## Workflow

- Keep every change buildable with `pnpm build`.
- **Do not commit.** Leave the working tree ready for review, present a summary of the changes and verification, and let the user commit.
- Keep changes focused and reviewable; avoid mixing unrelated refactors.
- Check layouts at 360 / 768 / 1280 px and keyboard-test interactive elements before handing off.

## Code conventions

- Spanish copy, `lang="es"`, fully static content.
- Colocate copy in the component that renders it. Catalog content belongs in `src/data/categories.ts` and `src/data/gifts.ts`.
- Avoid speculative abstractions. Extract a component only when it has at least three real uses.
- Reuse existing shared components (`Button`, `Badge`, `SectionHeading`, `StepCard`) instead of duplicating their styles.
- Style with Tailwind utilities and the tokens in `src/styles/global.css`. Root content wrappers use the `page-shell` utility.
- Keep section anchors stable and in Spanish (for example `inicio`, `como-funciona`, `catalogo`).
- Accessibility: semantic heading order (`h1` → `h2` → `h3`), visible focus, `aria-hidden` on decorations, and respect `prefers-reduced-motion`.

## Design decisions

- Gift cards link to an external `storeUrl` and open it in a new tab.
- Category filters are a vanilla Astro script with progressive enhancement, not a UI framework island.
- Fonts (`Nunito` for display, `Nunito Sans` for body) load from Google Fonts through a `<link>` in `BaseLayout`.
- Placeholder content and links are marked with TODOs; replace them as real assets and URLs become available.

## Development

When starting the dev server, use background mode:

```sh
pnpm dev --background
```

Manage the background server with `pnpm exec astro dev status`, `pnpm exec astro dev stop`, and `pnpm exec astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Working with images](https://docs.astro.build/en/guides/images/)
