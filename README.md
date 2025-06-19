# Calen Therapy Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/adc0320a-9768-4d48-9e40-a639f1a05b70/deploy-status)](https://app.netlify.com/projects/calen-therapy/deploys)

A professional website for Calen Therapy, offering various therapy services provided by Helen Mills Porter and Carl Porter (my parents).

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS

## Project Structure

- `/app` - Next.js App Router pages and layouts
- `/app/_components` - Reusable React components
  - `/layout` - Layout components like Header, Footer
- `/app/_config` - Sitewide config or data files
- `/public` - Static assets

In typescript you can access `/app/*` with `import "@app/_components/layout/Footer"`.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building static site

We deploy the application as a static site. Use the build tool to generate the site. This checks all typescript is valid and also applies linting rules.

```bash
npm run build
# or
yarn build
```

## Deployment

This project is deployed using netifly.

Production Env: https://calentherapy.co.uk.

## License

This project follows a dual license: CC BY-NC-ND 4.0 for website content and MIT for code. See [LICENSE.txt](./LICENSE.txt) for more detail.

For any licensing questions or permission requests, please contact h.m.porter@hotmail.com.
