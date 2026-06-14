'use client';

import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navItems, siteConfig } from '@/lib/site-data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto container-padding py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="font-display text-lg">{siteConfig.name}</p>
            <p className="text-sm text-muted-foreground mt-1">{siteConfig.role}</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} {siteConfig.name}. Based in Nepal.</p>
          <div className="flex items-center gap-4">
            <Link href={siteConfig.resume} download className="hover:text-foreground transition-colors">
              Resume
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
