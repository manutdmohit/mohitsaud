'use client';

import { SectionHeader } from '@/components/section-header';
import { FadeIn } from '@/components/fade-in';

const skillGroups = [
  {
    title: 'Languages',
    items: ['JavaScript (ES6+)', 'TypeScript', 'Python'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3', 'Shadcn'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'Nest.js', 'REST APIs', 'JWT Authentication'],
  },
  {
    title: 'Databases',
    items: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Tools & platforms',
    items: ['Git', 'GitHub', 'Vercel', 'Stripe', 'Khalti', 'SendGrid', 'Telegram API', 'AWS (working knowledge)'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding section-divider bg-muted/40">
      <div className="max-w-5xl mx-auto container-padding">
        <FadeIn>
          <SectionHeader
            number="04 — Skills"
            title="Technical toolkit"
            description="Technologies I use regularly when building and shipping production web applications."
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {skillGroups.map((group, index) => (
            <FadeIn key={group.title} delay={index * 0.05}>
            <div>
              <h3 className="section-label mb-4">{group.title}</h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted-foreground border-b border-border/60 pb-2 last:border-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
