import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ColorPaletteSwitcher from '@/components/ui/ColorPaletteSwitcher';
import './globals.css';
import { mainNav } from '@/config/navigation';

export const metadata: Metadata = {
  title: 'Calen Therapy',
  description: 'Professional therapy services in Wigan',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* TODO: Remove this + Add meta tags for SEO */}
        <meta name="robots" content="noindex" />

        {/* TODO: Replace logo */}
        <link rel="icon" href="/favicon.svg" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </head>

      <body className="font-sans antialiased text-gray-800 bg-secondary">
        <Header items={mainNav} />

        <main className="min-h-screen bg-white">{children}</main>

        <Footer />
        <ColorPaletteSwitcher />
      </body>
    </html>
  );
}
