'use client';

import { SectionHeader } from '@/components/section-header';
import { FadeIn } from '@/components/fade-in';

const experiences = [
  {
    title: 'Freelance Software Engineer',
    company: 'Self-employed',
    period: 'Oct 2023 — Present',
    description:
      'Building full-stack products for clients — booking platforms, admin dashboards, payment integrations, and production deployments with Next.js, Node.js, and MongoDB.',
    skills: ['Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'Stripe', 'Khalti'],
  },
  {
    title: 'Node.js Developer',
    company: 'Prabidhi Labs',
    location: 'Kathmandu, Nepal',
    period: 'Mar 2022 — Aug 2023',
    description:
      'Developed and maintained web applications with Node.js, Express, and MongoDB. Built REST APIs and collaborated with cross-functional teams on production features.',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Git'],
  },
  {
    title: 'Node.js Content Writer',
    company: 'Nikolavinci',
    location: 'Kathmandu, Nepal',
    period: 'Jun 2021 — Dec 2021',
    description:
      'Authored technical articles and tutorials on Node.js development, documentation, and modern web development practices.',
    skills: ['Technical Writing', 'Node.js', 'Documentation', 'SEO'],
  },
];

const certifications = [
  {
    name: 'Node.js API Masterclass',
    description: 'RESTful APIs, authentication, middleware, and production Node.js backends.',
  },
  {
    name: 'MERN Stack Projects',
    description: 'Full-stack projects with MongoDB, Express, React, and Node.js.',
  },
  {
    name: 'Next.js From Scratch',
    year: '2024',
    description: 'App Router, server components, routing, and modern React patterns.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding section-divider bg-muted/40">
      <div className="max-w-5xl mx-auto container-padding">
        <FadeIn>
          <SectionHeader
            number="02 — Experience"
            title="Work history"
            description="From Node.js development roles to freelance delivery of production systems for international clients."
          />
        </FadeIn>

        <ol className="relative border-l border-border ml-3 space-y-12">
          {experiences.map((exp, index) => (
            <li key={`${exp.company}-${exp.period}`} className="pl-8 relative">
              <span
                className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background"
                aria-hidden
              />
              <FadeIn delay={index * 0.06}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h3 className="font-medium text-foreground">{exp.title}</h3>
                <time className="text-xs text-muted-foreground tabular-nums">{exp.period}</time>
              </div>
              <p className="text-sm text-primary mb-3">
                {exp.company}
                {exp.location ? ` · ${exp.location}` : ''}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
              <ul className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-xs px-2 py-0.5 rounded border border-border bg-background text-muted-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
              </FadeIn>
            </li>
          ))}
        </ol>

        <FadeIn delay={0.1}>
        <div className="mt-20">
          <h3 className="font-display text-xl mb-6">Certifications & training</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <article key={cert.name} className="surface-card p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="text-sm font-medium leading-snug">{cert.name}</h4>
                  {cert.year ? (
                    <span className="text-xs text-muted-foreground shrink-0">{cert.year}</span>
                  ) : null}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
              </article>
            ))}
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}
