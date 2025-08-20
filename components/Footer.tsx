'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Resume', href: '/Mohit_Saud_Resume.pdf' },
        { name: 'GitHub', href: 'https://github.com/mohitsaud' },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/mohitsaud' },
        { name: 'Blog', href: '#' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Web Development', href: '#projects' },
        { name: 'API Development', href: '#projects' },
        { name: 'UI/UX Design', href: '#projects' },
        { name: 'Consulting', href: '#contact' },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/mohitsaud',
      label: 'GitHub',
      color: 'hover:text-gray-800 dark:hover:text-gray-200',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/mohitsaud',
      label: 'LinkedIn',
      color: 'hover:text-blue-600',
    },
    {
      icon: Mail,
      href: 'mailto:saudmohit@gmail.com',
      label: 'Email',
      color: 'hover:text-red-500',
    },
  ];

  return (
    <footer className="bg-background border-t border-border/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-gradient-to-t from-purple-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="inline-block mb-4">
                <span className="font-bold text-2xl">
                  Mohit<span className="text-primary"> Saud</span>
                </span>
              </Link>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Full-stack developer passionate about creating exceptional digital experiences 
                with modern web technologies.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full bg-muted hover:bg-primary/10 transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-4 text-foreground">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-border/50 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Mohit Saud. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span className="hidden sm:inline">in Nepal</span>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/Mohit_Saud_Resume.pdf"
                download="Mohit_Saud_Resume.pdf"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Download Resume
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="p-2 h-auto"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
