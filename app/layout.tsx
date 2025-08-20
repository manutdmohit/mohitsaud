import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
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

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mohit Saud | Full-Stack Developer & Software Engineer',
  description:
    'Experienced full-stack developer specializing in Next.js, Node.js, and modern web technologies. Building scalable applications with exceptional user experiences.',
  keywords: [
    'Mohit Saud',
    'Full-Stack Developer',
    'Next.js Developer',
    'Node.js Developer',
    'React Developer',
    'TypeScript Developer',
    'Web Development',
    'Software Engineer',
    'Portfolio',
    'Kathmandu',
    'Nepal',
  ],
  authors: [
    {
      name: 'Mohit Saud',
      url: 'https://mohitsaud.com.np',
    },
  ],
  creator: 'Mohit Saud',
  publisher: 'Mohit Saud',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mohitsaud.com.np'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Mohit Saud | Full-Stack Developer & Software Engineer',
    description:
      'Experienced full-stack developer specializing in Next.js, Node.js, and modern web technologies. Building scalable applications with exceptional user experiences.',
    type: 'website',
    url: 'https://mohitsaud.com.np',
    siteName: 'Mohit Saud Portfolio',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mohit Saud - Full-Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohit Saud | Full-Stack Developer',
    description:
      'Portfolio showcasing expertise in full-stack development with Next.js, Node.js, and modern web technologies.',
    site: '@mohitsaud',
    creator: '@mohitsaud',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
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
