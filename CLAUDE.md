# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server with Turbopack
npm run build      # Static export build (outputs to /out)
npm run start      # Serve the production build
npm run lint       # Run ESLint with auto-fix
```

There are no tests in this project.

## Architecture

This is a **Next.js 15 static site** (output: "export") for Calen Therapy — a counselling/therapy practice in Wigan/St Helens, UK run by Helen and Carl Porter.

### Config-driven content (`app/_config/`)

All site content and configuration lives here — **this is where most content changes happen**:

- `contact.ts` — address, phone numbers, emails
- `pricing.ts` — session rate (`rateValue` + formatted `rate` string)
- `approaches.ts` — therapy approaches (each tagged with which therapist offers it: `helen` / `carl`)
- `focuses.ts` — therapy focus areas (same therapist tagging pattern)
- `images.ts` — all image paths + Netlify image transform helper (`getImageUrl`)
- `routes.ts` — all internal and external URLs in one place
- `metadata.ts` — `buildMetadata()` helper used on every page for SEO/OG tags
- `testimonials.ts`, `experience.ts` — therapist background and testimonial data
- `index.ts` — re-exports everything; import from `@app/_config`

### Page structure

- `app/page.tsx` — home page
- `app/approaches/[approach]/page.tsx` — one page per therapy approach; all use the `ApproachPage` template component
- `app/focuses/[focus]/page.tsx` — one page per focus area; all use the `FocusPage` template component
- `app/meet-us/helen/` and `app/meet-us/carl/` — individual therapist pages
- `app/contact-us/`, `app/faqs/`, `app/find-us/` — standalone pages

### Reusable templates

`ApproachPage` (`app/approaches/ApproachPage.tsx`) and `FocusPage` (`app/focuses/FocusPage.tsx`) are shared layout templates. Each approach/focus `page.tsx` simply imports the template and passes structured content props. The `signs` items in these templates should be a multiple of 3.

### Layout + sections

- `app/_components/layout/` — `Header`, `Footer`, and `navigation.ts` (nav items built from config)
- `app/_components/sections/` — reusable section blocks: `StripedSection`, `CallToAction`, `Testimonials`, `Approaches`, `Focuses`, `FindUs`, `TheSpace`
- `app/_components/hero/` — `FullPageHero`, `NormalPageHero`, `SplitPageHero`
- `app/_components/home/` — home-page-specific components

### Styling

Tailwind CSS v4. CSS variables for the colour palette — the `ColorPaletteSwitcher` component exists but is commented out in `layout.tsx`. Theme colours like `text-primary`, `bg-secondary` are CSS-variable-based.

### Path alias

`@app/*` maps to `./app/*` (configured in `tsconfig.json`).

### Deployment

Hosted on Netlify. Images use Netlify Image CDN via `getImageUrl()` — this only activates when the `NETLIFY` environment variable is set. Forms submit to a static `/form-submission.html` page handled by Netlify Forms.
