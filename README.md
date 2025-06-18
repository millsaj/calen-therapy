# Calen Therapy Website

A professional website for Calen Therapy, offering various therapy services provided by Helen Mills Porter and Carl Porter.

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

## Project Structure

- `/app` - Next.js App Router pages and layouts
- `/app/_components` - Reusable React components
  - `/layout` - Layout components like Header, Footer
- `/app/_config` - Sitewide config or data files
- `/public` - Static assets

In typescript you can access `/app/*` with `import "@app/_components/layout/Footer"`.

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS

## Component Design Principles

See the AI_README.md file for detailed component design conventions and content structure.

## Deployment

This project is deployed using netifly.

Production Env: https://www.calentherapy.co.uk
