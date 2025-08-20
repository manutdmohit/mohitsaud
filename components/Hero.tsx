'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Sparkles,
  Code,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: '1s' }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20 mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">
              Available for new opportunities
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="block">Hi, I'm</span>
            <span className="gradient-text block">Mohit Saud</span>
            <span className="block text-3xl md:text-4xl lg:text-5xl text-muted-foreground font-normal mt-4">
              Full-Stack Developer
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            I craft exceptional digital experiences with modern web
            technologies. Specializing in{' '}
            <span className="text-primary font-medium">Next.js</span>,{' '}
            <span className="text-primary font-medium">Node.js</span>, and{' '}
            <span className="text-primary font-medium">TypeScript</span>. Let's
            build something amazing together.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button size="lg" className="btn-primary text-lg px-8 py-6" asChild>
              <Link href="#contact">
                Let's Connect <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="btn-outline text-lg px-8 py-6"
              asChild
            >
              <Link href="#projects">View My Work</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-8 mb-12"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">3+</div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">
                Projects Completed
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-6"
          >
            <Link
              href="https://github.com/mohitsaud"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-muted hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6 group-hover:text-primary transition-colors" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mohitsaud"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-muted hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6 group-hover:text-primary transition-colors" />
            </Link>
            <Link
              href="mailto:saudmohit@gmail.com"
              className="group p-3 rounded-full bg-muted hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6 group-hover:text-primary transition-colors" />
            </Link>
            <Link
              href="/Mohit_Saud_Resume.pdf"
              download="Mohit_Saud_Resume.pdf"
              className="group p-3 rounded-full bg-muted hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <Download className="w-6 h-6 group-hover:text-primary transition-colors" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 right-20 hidden lg:block"
      >
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
          <Code className="w-8 h-8 text-primary" />
        </div>
      </motion.div>

      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '1s' }}
        className="absolute bottom-20 left-20 hidden lg:block"
      >
        <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
          <Zap className="w-6 h-6 text-purple-500" />
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ y, opacity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
