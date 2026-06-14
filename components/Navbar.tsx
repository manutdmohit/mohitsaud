'use client';

import { useState, useEffect, useCallback, useId } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { navItems, siteConfig } from '@/lib/site-data';
import { Download } from 'lucide-react';

export default function Navbar() {
  const menuId = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mounted, setMounted] = useState(false);

  const closeMenu = useCallback(() => setIsOpen(false), []);
  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);

      const sections = ['home', ...navItems.map((item) => item.href.slice(1))];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (current) setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeMenu]);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(min-width: 768px)').matches) closeMenu();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [closeMenu]);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    closeMenu();
  };

  const mobileMenu =
    mounted && isOpen
      ? createPortal(
          <div className="fixed inset-0 z-[100] md:hidden" role="presentation">
            <button
              type="button"
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={closeMenu}
              aria-label="Close navigation menu"
            />

            <nav
              id={menuId}
              aria-label="Mobile navigation"
              className="absolute inset-x-0 top-16 bottom-0 flex flex-col site-navbar border-t-0 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex-1 overflow-y-auto overscroll-contain">
                <div className="max-w-5xl mx-auto container-padding py-4">
                  <p className="px-3 pb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Navigate
                  </p>
                  <ul className="space-y-1">
                    <li>
                      <Link
                        href="#home"
                        onClick={() => handleNavClick('home')}
                        className={cn(
                          'flex min-h-12 items-center rounded-lg px-3 text-base transition-colors',
                          activeSection === 'home'
                            ? 'bg-accent text-accent-foreground font-medium'
                            : 'text-foreground hover:bg-muted'
                        )}
                      >
                        Home
                      </Link>
                    </li>
                    {navItems.map((item) => {
                      const id = item.href.slice(1);
                      return (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            onClick={() => handleNavClick(id)}
                            className={cn(
                              'flex min-h-12 items-center rounded-lg px-3 text-base transition-colors',
                              activeSection === id
                                ? 'bg-accent text-accent-foreground font-medium'
                                : 'text-foreground hover:bg-muted'
                            )}
                          >
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <div className="shrink-0 border-t border-border bg-muted/30">
                <div className="max-w-5xl mx-auto container-padding py-4 space-y-3">
                  <Link
                    href={siteConfig.resume}
                    download
                    onClick={closeMenu}
                    className="flex min-h-12 items-center gap-2 rounded-lg px-3 text-sm font-medium text-primary hover:bg-muted transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    Download resume
                  </Link>
                  <div className="flex gap-2 px-3">
                    <Link
                      href={siteConfig.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                      className="flex-1 min-h-11 inline-flex items-center justify-center rounded-lg border border-border text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                      GitHub
                    </Link>
                    <Link
                      href={siteConfig.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                      className="flex-1 min-h-11 inline-flex items-center justify-center rounded-lg border border-border text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                      LinkedIn
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <header
        className={cn(
          'site-navbar fixed top-0 inset-x-0 z-[110] overflow-visible transition-shadow duration-200',
          scrolled && 'site-navbar-scrolled'
        )}
      >
        <div className="max-w-5xl mx-auto container-padding overflow-visible">
          <div className="flex h-16 items-center justify-between gap-4 overflow-visible">
            <Link
              href="#home"
              onClick={() => handleNavClick('home')}
              className="font-display text-lg tracking-tight shrink-0 hover:text-primary transition-colors"
            >
              {siteConfig.name.split(' ')[0]}
              <span className="text-muted-foreground">.</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8" aria-label="Main">
              {navItems.map((item) => {
                const id = item.href.slice(1);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'text-sm transition-colors',
                      activeSection === id
                        ? 'text-foreground font-medium'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-1 sm:gap-2 overflow-visible">
              <Link href={siteConfig.resume} download className="hidden sm:block">
                <Button variant="outline" size="sm">
                  <Download className="h-3.5 w-3.5 mr-1.5" />
                  Resume
                </Button>
              </Link>
              <ModeToggle />

              <Button
                type="button"
                variant="outline"
                size="icon"
                className="md:hidden h-10 w-10 shrink-0"
                onClick={toggleMenu}
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isOpen}
                aria-controls={menuId}
              >
                <span className="relative flex h-4 w-5 flex-col justify-between" aria-hidden>
                  <span
                    className={cn(
                      'block h-0.5 w-full rounded-full bg-current transition-all duration-200 origin-center',
                      isOpen && 'translate-y-[7px] rotate-45'
                    )}
                  />
                  <span
                    className={cn(
                      'block h-0.5 w-full rounded-full bg-current transition-all duration-200',
                      isOpen && 'opacity-0 scale-x-0'
                    )}
                  />
                  <span
                    className={cn(
                      'block h-0.5 w-full rounded-full bg-current transition-all duration-200 origin-center',
                      isOpen && '-translate-y-[7px] -rotate-45'
                    )}
                  />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenu}
    </>
  );
}
