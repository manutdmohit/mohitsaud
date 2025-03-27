'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ModeToggle } from '@/components/mode-toggle';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Menu,
  X,
  ChevronDown,
  Download,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showSocialMenu, setShowSocialMenu] = useState(false);
  const socialMenuRef = useRef<HTMLDivElement>(null);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close social menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        socialMenuRef.current &&
        !socialMenuRef.current.contains(event.target as Node)
      ) {
        setShowSocialMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500',
        scrolled
          ? 'py-3 bg-background/85 backdrop-blur-md border-b shadow-sm'
          : 'py-6 bg-transparent'
      )}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="group relative">
            <span className="font-bold text-xl relative z-10 transition-colors duration-300">
              Mohit<span className="text-primary"> Saud</span>
            </span>
            <motion.div
              className="absolute -bottom-1 left-0 h-[2px] bg-primary"
              initial={{ width: 0 }}
              animate={{ width: scrolled ? '100%' : '0%' }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex items-center dark:bg-muted/50  backdrop-blur-sm rounded-full p-1 border border-border/50 dark">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300',
                    activeSection === item.href.substring(1)
                      ? 'text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      className="absolute inset-0 bg-primary-foreground dark:bg-primary rounded-full -z-10"
                      layoutId="activeSection"
                      transition={{ type: 'spring', duration: 0.6 }}
                    />
                  )}
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-3">
            {/* Social links dropdown */}
            <div className="relative hidden md:block" ref={socialMenuRef}>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-1 text-sm font-medium cursor-pointer"
                onClick={() => setShowSocialMenu(!showSocialMenu)}
              >
                Connect
                <ChevronDown
                  size={16}
                  className={cn(
                    'transition-transform duration-200',
                    showSocialMenu ? 'rotate-180' : ''
                  )}
                />
              </Button>

              <AnimatePresence>
                {showSocialMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-card rounded-lg shadow-lg border border-border overflow-hidden z-50"
                  >
                    <div className="p-2 space-y-1">
                      <Link
                        href="https://github.com/manutdmohit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                      >
                        <Github size={16} />
                        GitHub
                      </Link>
                      <Link
                        href="https://www.linkedin.com/in/mohitsaud"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                      >
                        <Linkedin size={16} />
                        LinkedIn
                      </Link>
                      <Link
                        href="mailto:saudmohit@gmail.com"
                        className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                      >
                        <Mail size={16} />
                        Email
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resume button */}
            <Link
              href="/Mohit_Saud_Resume.pdf"
              download="Mohit_Saud_Resume.pdf"
            >
              <Button
                size="sm"
                variant="outline"
                className="hidden md:flex items-center gap-1 border-primary/30 hover:border-primary cursor-pointer"
              >
                <Download size={14} />
                Resume
              </Button>
            </Link>

            {/* Theme toggle */}
            <ModeToggle />

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="bg-card/95 backdrop-blur-md border-b px-4 py-5 space-y-4">
              <div className="space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'block px-4 py-2 text-sm font-medium rounded-md transition-colors',
                      activeSection === item.href.substring(1)
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted'
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="pt-4 border-t border-border/50 cursor-pointer">
                <p className="px-4 text-xs font-medium text-muted-foreground mb-2">
                  Connect with me
                </p>
                <div className="flex space-x-2 px-4">
                  <Link
                    href="https://github.com/manutdmohit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-muted transition-colors"
                  >
                    <Github size={18} />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/mohitsaud"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-muted transition-colors"
                  >
                    <Linkedin size={18} />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="mailto:saudmohit@gmail.com"
                    className="p-2 rounded-full hover:bg-muted transition-colors"
                  >
                    <Mail size={18} />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>
              </div>

              <div className="px-4">
                <a
                  href="/Mohit_Saud_Resume.pdf"
                  download="Mohit_Saud_Resume.pdf"
                >
                  <Button className="w-full" size="sm">
                    <Download size={14} className="mr-2" />
                    Download Resume
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
