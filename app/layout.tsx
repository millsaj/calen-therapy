import Header from '@app/_components/layout/Header';
import Footer from '@app/_components/layout/Footer';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="geo.region" content="GB-WGN" />
        <meta name="geo.placename" content="Wigan" />
      </head>

      <body className="font-sans antialiased text-gray-800 bg-secondary">
        <Header />

        <main className="min-h-screen bg-white">{children}</main>

        <Footer />
        
        {/* Uncomment the line below to enable color palette switcher */}
        {/* <ColorPaletteSwitcher /> */}
      </body>
    </html>
  );
}
