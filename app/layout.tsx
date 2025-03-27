import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { Toaster } from '@/components/ui/sonner';

import Navbar from '@/components/Navbar';

import { ThemeProvider } from '@/components/theme-provider';
import Footer from '@/components/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mohit Saud | Web Developer & Software Engineer',
  description:
    'Experienced web developer specializing in modern JavaScript frameworks, UI/UX, and scalable web applications.',
  authors: [
    {
      name: 'Mohit Saud',
      url: 'https://mohitsaud.com.np',
    },
  ],
  openGraph: {
    title: 'Mohit Saud | Web Developer & Software Engineer',
    description:
      'Experienced web developer specializing in modern JavaScript frameworks, UI/UX, and scalable web applications.',
    type: 'website',
    url: 'https://mohitsaud.com.np',
    images: [
      {
        url: 'https://yourwebsite.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mohit Saud Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohit Saud | Web Developer',
    description:
      'Portfolio showcasing projects and expertise in full-stack development.',
    site: '@yourhandle',
    creator: '@yourhandle',
    images: ['https://yourwebsite.com/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
