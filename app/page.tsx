import type { Metadata } from 'next';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import FloatingContact from '@/components/floating-contact';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import { siteConfig, siteUrl } from '@/lib/site-data';

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.summary,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    url: siteUrl,
    title: siteConfig.title,
    description: siteConfig.summary,
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <FloatingContact />
    </>
  );
}
