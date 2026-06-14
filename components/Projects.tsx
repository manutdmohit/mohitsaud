'use client';

import Link from 'next/link';
import { SectionHeader } from '@/components/section-header';
import { FadeIn } from '@/components/fade-in';
import { siteConfig } from '@/lib/site-data';
import { ArrowUpRight } from 'lucide-react';

const featuredProjects = [
  {
    title: 'Gundri',
    subtitle: 'Hotel booking platform',
    description:
      'Full-stack booking platform with Stripe and Khalti payments, admin dashboard, and SEO-focused production deployment.',
    liveUrl: 'https://gundri.com',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Khalti'],
  },
  {
    title: 'Lens Aura',
    subtitle: 'Full-stack web application',
    description:
      'Admin panel, SendGrid email notifications, Telegram alerts, and role-based access on a scalable Node.js backend.',
    liveUrl: 'https://www.lensaura.com.au',
    tags: ['Next.js', 'Node.js', 'SendGrid', 'Telegram API'],
  },
  {
    title: 'TopUp Ghar',
    subtitle: 'Web application',
    description:
      'Production app with admin panel, REST APIs, MongoDB data layer, and Telegram notifications for transactions.',
    liveUrl: 'https://www.topupghar.com',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'REST APIs'],
  },
  {
    title: 'Secure Pal.',
    subtitle: 'Consultancy website',
    description:
      'Modern consultancy site built with Next.js and Tailwind CSS, optimized for SEO and performance.',
    liveUrl: 'https://www.securepal.com.au',
    tags: ['Next.js', 'Tailwind CSS', 'SEO'],
  },
  {
    title: 'Proficient Legal',
    subtitle: 'Law firm website',
    description:
      'Professional Australian law firm website — SEO optimized, scalable, and production-ready.',
    liveUrl: 'https://www.proficientlegal.com.au',
    tags: ['Next.js', 'TypeScript', 'SEO'],
  },
];

const additionalProjects = [
  { title: 'Eco Finance and Home Loans', liveUrl: 'https://www.ecofinanceandhomeloans.com.au' },
  { title: 'Zest Life Disability', liveUrl: 'https://www.zestlifeability.com.au' },
  { title: 'Khadga Smriti Pratisthan', liveUrl: 'https://www.khadgasmritipratisthan.com' },
  { title: 'Karna Shahi Portfolio', liveUrl: 'https://www.karnashahi.com' },
  { title: 'Volunteers Without Frontiers', liveUrl: 'https://www.vwf.vercel.app' },
  { title: 'Support Education Consultancy', liveUrl: 'https://www.supporteduconsultancy.edu.np' },
  { title: 'Bhagirathi Abroad Study', liveUrl: 'https://www.bhagirathiabroadstudy.com' },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding section-divider">
      <div className="max-w-5xl mx-auto container-padding">
        <FadeIn>
          <SectionHeader
            number="03 — Projects"
            title="Selected work"
            description="Production applications and client websites shipped across hospitality, fintech, consultancy, and education."
          />
        </FadeIn>

        <div className="space-y-4">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.liveUrl} delay={index * 0.05}>
            <article className="surface-card p-6 md:p-7 group">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-medium text-foreground">{project.title}</h3>
                    <span className="text-sm text-muted-foreground">{project.subtitle}</span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded border border-border text-muted-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline shrink-0"
                >
                  Visit
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.08}>
        <div className="mt-16">
          <h3 className="font-display text-xl mb-6">More client work</h3>
          <ul className="divide-y divide-border border-y border-border">
            {additionalProjects.map((project) => (
              <li key={project.liveUrl}>
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 py-4 text-sm group"
                >
                  <span className="text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </span>
                  <span className="text-muted-foreground hidden sm:inline truncate max-w-xs">
                    {project.liveUrl.replace(/^https?:\/\/(www\.)?/, '')}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          More on{' '}
          <Link
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            GitHub
          </Link>
          .
        </p>
        </FadeIn>
      </div>
    </section>
  );
}
