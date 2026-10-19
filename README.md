# Aayan Shaikh — Portfolio V2

Local static portfolio built with Astro 7, Tailwind CSS 4, and GSAP ScrollTrigger. Node 22.19+ recommended (a transitive dependency requires it).

```powershell
cd C:\coding\website2
npm install
npm run dev
```

Visit http://127.0.0.1:4321. `npm run check` checks Astro and TypeScript; `npm run build` generates `dist/`; `npm run preview` serves the production output.

## Content

Edit `src/data/projects.ts` for project text, metadata, and image references. Homepage experience and contact information live in `src/pages/index.astro`. The reusable layout includes navigation, metadata, and motion. Styles live in `src/styles/global.css` and use Tailwind's Vite integration.

Project descriptions and downloaded images come from https://aayanshaikh.vercel.app/projects. Contact information comes from its contact page. These are owner-published source claims, not independently verified results. Quantitative improvement claims were omitted. Reference composition: https://www.abbassyed.ca/; no assets or copy from that site were reused.

## Before publishing

- Confirm Stealth Startup role, responsibilities, dates, and University of Guelph robotics research details. These entries are deliberately brief because the supplied request names them but supporting details were unavailable.
- Add a current resume PDF to `public/` and update the resume page and navigation link if direct downloads are desired. The current resume page provides a working email request link, matching the old portfolio's approach.
- Replace the explicitly labelled additional-documentation placeholders on case-study pages with genuine assets. Existing cover images are real assets from the old site.
- Confirm image permissions and project status, particularly AlertCore. Its old portfolio linked only the general GitHub profile, so no project repository was invented.

## Motion and accessibility

Native scrolling, no scroll hijacking or Lenis. GSAP animates headline entry, section reveals, dividers, and mild desktop image parallax. `prefers-reduced-motion` disables all animation and smooth scrolling, including when the preference changes. Content remains readable without JavaScript. Navigation stays visible on mobile without a menu interaction. Semantic headings, skip navigation, visible focus rings, explicit image dimensions, and lazy loading are included. No external fonts or image requests are needed at runtime.

No hosting registration or deployment was performed.


## Minimal redesign
Homepage updated to a black, compact layout based on the Joshua Baker reference supplied by the owner. Six genuine project cards, floating image parallax, short introduction, About, Experience & education, and Contact. No borrowed testimonials or client logos. Previous source saved in work/backups/src-before-minimal. IEEE and Group images also originate from the old portfolio.

## Fonts and project galleries
Uses locally bundled Geist Variable from Fontsource. All six cards open local detail pages. Descriptions and 23 gallery images were imported from C:/coding/webnew; AlertCore retains the original GitHub profile link because no project-specific repository was provided. Images open full size in a new tab.

## Life journal
Edit src/data/life.ts to add years and dated entries with a title, paragraphs, and optional image. Years and entries sort newest first. The Life page and homepage link are ready; 2026 and 2025 are empty until personal updates are supplied.

## October 18 additions

- K.A.R.E.N: https://devpost.com/software/karen-5g01yk and the linked https://github.com/YimingH34/uottahack-8-karen. Team work is described without inventing individual responsibility. Cover is labelled as awaiting images.
- Campus Event Booking: https://github.com/AayanShaikh007/1420_final. Collaborative Java/JavaFX course project; screenshots remain to be supplied.
- Experience and education: src/data/experience.ts, based on local hardware and software resume sources in C:/coding/1resumes. Robotics dates conflict between those versions and are intentionally omitted. Stealth Startup still needs a title, dates, and responsibilities from the owner. Unnecessary quantitative resume claims were omitted.
- Contact lists school/work and personal addresses separately.
- Git initialized locally on codex/portfolio-v2 with the same author identity used in webnew. Earlier files were checkpointed individually at the current time. No historical dates were reconstructed and no remote push was performed. Future changes should follow AGENTS.md and use small frequent commits.
- Validation: Astro check and production build pass; 18 pages generated.


Owner clarification: use Stealth Startup as the public organization label; Guelph work concerns strawberry-picking robots; IEEE project leadership covers PCB, computer vision, and MATLAB. LinkedIn is https://www.linkedin.com/in/as770/. Automated LinkedIn retrieval returned HTTP 999, so no additional profile claims were inferred.

Campus Event Booking now uses owner-supplied JavaFX screenshots, with Booking Management as cover. Mosaic Generator is deliberately last, labelled Grade 12, with input/output images sourced from its GitHub README: https://github.com/AayanShaikh007/Mosaic-Generator.

## Life entries
Ten stories were adapted from the owner-supplied October 18 notes, using the revised San Francisco, first-year, uOttaHack and Hack the North drafts. Entries live individually in src/data/life-entries/*.json; life.ts groups and sorts them. sortDate is an internal ordering key; dateLabel shows the supplied month, date range, or season without inventing exact attendance dates. Personal claims come from the supplied drafts. No stock or fabricated photography was added. Native details controls expose the full text without JavaScript.

Life scroll motion: per-year progress tracks, reversible marker highlights, and one-time entry reveals. Reduced-motion and no-JavaScript views remain static and readable. Expanding or closing a story refreshes ScrollTrigger positions.

Homepage progress: a sticky header shows scroll progress and accessible section jump markers for Work, About, Experience, Education, and Contact. Current header links highlight where applicable. Progress recalculates when Show More expands the catalogue, images load, or the viewport changes. Reduced motion disables decorative transitions; position updates remain direct.

Hardware source CAD audit: see docs/cad-inventory.md for repository links, formats, sizes, conversion priorities, and missing assemblies.

KB-01 now has an optional Explore in 3D section using a 930 KB compressed GLB converted from the original STEP assembly. The viewer supports rotation, zoom, and reset; loading is deferred until clicked. See docs/kb01-model.md for conversion details and source limitations.

Hardware viewers now share an optional click-to-load component, with separate part selectors for multi-model projects. Sources, conversion details and explicit missing-export limitations are documented in docs/hardware-models.md. Nano LoRa is included from its repository documentation with a labelled text cover.

