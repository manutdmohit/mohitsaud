'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-6">
              Node.js & Next.js Developer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Hi, I&apos;m <span className="text-primary">Mohit Saud</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              A passionate web developer specializing in Node.js and Next.js,
              with a background in Electronics and Communication Engineering.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild>
                <Link href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>

            <div className="flex space-x-5">
              <Link
                href="https://github.com/mohitsaud"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/mohitsaud"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:saudmohit@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-xl bg-background/80 backdrop-blur-sm shadow-lg flex items-center justify-center">
                  <div className="text-center p-6">
                    <h2 className="text-2xl font-bold mb-2">Mohit Saud</h2>
                    <p className="text-muted-foreground mb-4">
                      Node.js/Next.js Developer
                    </p>
                    <div className="flex justify-center space-x-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        TypeScript
                      </span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        Next.js
                      </span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        Node.js
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
