import type { Metadata } from 'next';
import { IBM_Plex_Sans, Libre_Baskerville } from 'next/font/google';
import './globals.css';

import { Toaster } from '@/components/ui/sonner';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/components/theme-provider';
import Footer from '@/components/Footer';
import { PageLoader } from '@/components/page-loader';
import { StructuredData } from '@/components/structured-data';
import { siteMetadata } from '@/lib/metadata';

const bodyFont = IBM_Plex_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

const displayFont = Libre_Baskerville({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bodyFont.variable} ${displayFont.variable} antialiased`}>
        <StructuredData />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <PageLoader />
          <Navbar />
          <main className="relative z-0">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
