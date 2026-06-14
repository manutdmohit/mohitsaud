import { siteConfig, siteUrl } from '@/lib/site-data';

export function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: siteUrl,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tikapur',
      addressRegion: 'Kailali',
      addressCountry: 'NP',
    },
    sameAs: [siteConfig.github, siteConfig.linkedin],
    knowsAbout: [
      'Node.js',
      'Next.js',
      'React',
      'TypeScript',
      'MongoDB',
      'REST APIs',
      'Web Development',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${siteConfig.name} Portfolio`,
    url: siteUrl,
    description: siteConfig.summary,
    inLanguage: 'en',
    author: {
      '@type': 'Person',
      name: siteConfig.name,
    },
  };

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: siteConfig.title,
    url: siteUrl,
    description: siteConfig.summary,
    mainEntity: {
      '@type': 'Person',
      name: siteConfig.name,
      jobTitle: siteConfig.role,
    },
  };

  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    url: siteUrl,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    areaServed: ['Nepal', 'Australia'],
    serviceType: [
      'Full-Stack Web Development',
      'API Development',
      'Next.js Development',
      'Node.js Development',
    ],
  };

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [personSchema, websiteSchema, profilePageSchema, professionalServiceSchema],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
}
