'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/site-data';
import { staggerContainer, staggerItem } from '@/lib/motion';

const highlights = [
  '4+ years experience',
  'Node.js · Next.js · MongoDB',
  'REST APIs & payments',
];

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const sectionClass =
    'section-padding pt-24 sm:pt-28 md:pt-36 pb-24 sm:pb-20 border-b border-border';

  if (prefersReducedMotion) {
    return (
      <section id="home" className={sectionClass}>
        <HeroContent />
      </section>
    );
  }

  return (
    <section id="home" className={sectionClass}>
      <motion.div
        className="max-w-5xl mx-auto container-padding"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <HeroContent motionEnabled />
      </motion.div>
    </section>
  );
}

function HeroContent({ motionEnabled = false }: { motionEnabled?: boolean }) {
  const Wrapper = motionEnabled ? motion.div : 'div';
  const itemProps = motionEnabled ? { variants: staggerItem } : {};

  const inner = (
    <>
      <Wrapper {...itemProps} className="flex items-center gap-2 mb-6 sm:mb-8">
        <span className="status-dot h-2 w-2 rounded-full bg-primary shrink-0" aria-hidden />
        <span className="text-sm text-muted-foreground">Available for freelance & full-time</span>
      </Wrapper>

      <Wrapper {...itemProps}>
        <h1 className="font-display text-[2rem] leading-tight sm:text-5xl md:text-6xl lg:text-7xl tracking-tight max-w-4xl">
          {siteConfig.name}
        </h1>
        <p className="mt-2 sm:mt-3 text-lg sm:text-xl md:text-2xl text-primary font-medium">
          {siteConfig.role}
        </p>
      </Wrapper>

      <Wrapper {...itemProps}>
        <p className="mt-6 sm:mt-8 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl text-balance">
          {siteConfig.summary}
        </p>
      </Wrapper>

      <Wrapper {...itemProps} className="mt-8 sm:mt-10 flex flex-col gap-3 sm:flex-row">
        <Button size="lg" className="w-full sm:w-auto h-11 shadow-sm" asChild>
          <Link href="#projects">
            View projects
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
        <Button size="lg" variant="outline" className="w-full sm:w-auto h-11" asChild>
          <Link href="#contact">Get in touch</Link>
        </Button>
      </Wrapper>

      <Wrapper
        {...itemProps}
        className="mt-8 sm:mt-12 flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted-foreground"
      >
        <Link
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 min-h-10 hover:text-foreground transition-colors"
        >
          <Github className="h-4 w-4" />
          GitHub
        </Link>
        <Link
          href={siteConfig.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 min-h-10 hover:text-foreground transition-colors"
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </Link>
        <Link
          href={`mailto:${siteConfig.email}`}
          className="inline-flex items-center gap-1.5 min-h-10 hover:text-foreground transition-colors"
        >
          <Mail className="h-4 w-4" />
          Email
        </Link>
      </Wrapper>

      <Wrapper {...itemProps}>
        <ul className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-border flex flex-col gap-3 sm:grid sm:grid-cols-3 sm:gap-6">
          {highlights.map((item) => (
            <li key={item} className="text-sm text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>
      </Wrapper>
    </>
  );

  if (motionEnabled) return inner;

  return <div className="max-w-5xl mx-auto container-padding">{inner}</div>;
}
