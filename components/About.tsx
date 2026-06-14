'use client';

import { SectionHeader } from '@/components/section-header';
import { FadeIn } from '@/components/fade-in';
import { siteConfig } from '@/lib/site-data';
import { GraduationCap, MapPin, Mail, Phone } from 'lucide-react';

const coreTech = [
  'Next.js',
  'Node.js',
  'TypeScript',
  'React',
  'MongoDB',
  'MySQL',
  'Stripe',
  'Khalti',
];

export default function About() {
  return (
    <section id="about" className="section-padding section-divider">
      <div className="max-w-5xl mx-auto container-padding">
        <FadeIn>
          <SectionHeader
            number="01 — About"
            title="Engineering background, product-focused development"
            description="I combine an electronics engineering foundation with years of shipping full-stack products for clients in Nepal and Australia."
          />
        </FadeIn>

        <FadeIn delay={0.08}>
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              With a background in electronics and communication engineering, I approach
              software with the same emphasis on reliability, clarity, and systems thinking.
            </p>
            <p>
              As a freelance software engineer, I&apos;ve built booking platforms, admin
              dashboards, payment flows, and client websites end to end. Previously at
              Prabidhi Labs and Nikolavinci, I focused on Node.js development and technical
              writing.
            </p>
            <p>
              I care about maintainable architecture, predictable APIs, and interfaces that
              feel straightforward for both users and the teams operating them.
            </p>

            <div className="pt-4">
              <p className="section-label mb-3">Core stack</p>
              <ul className="flex flex-wrap gap-2">
                {coreTech.map((tech) => (
                  <li
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-md border border-border bg-card text-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="surface-card p-6">
              <p className="section-label mb-4">Contact</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="h-4 w-4 mt-0.5 text-muted-foreground shrink-0" />
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors">
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-4 w-4 mt-0.5 text-muted-foreground shrink-0" />
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground shrink-0" />
                  <span>{siteConfig.location}</span>
                </li>
              </ul>
            </div>

            <div className="surface-card p-6">
              <p className="section-label mb-4 flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Education
              </p>
              <div className="space-y-1">
                <p className="font-medium text-sm">Bachelor of Engineering</p>
                <p className="text-sm text-muted-foreground">Electronics & Communication</p>
                <p className="text-sm text-muted-foreground">Tribhuvan University, Nepal</p>
                <p className="text-xs text-muted-foreground mt-2">2013 – 2017</p>
              </div>
            </div>
          </aside>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}
