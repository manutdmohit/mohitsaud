'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin, Mail, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 py-8 border-t">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4 md:mb-0"
          >
            <Link href="/" className="font-bold text-lg">
              Mohit<span className="text-primary"> Saud</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex space-x-6 mb-4 md:mb-0"
          >
            <Link
              href="#home"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#experience"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-4"
          >
            <Link
              href="https://github.com/manutdmohit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                <Github size={18} />
                <span className="sr-only">GitHub</span>
              </motion.div>
            </Link>
            <Link
              href="https://www.linkedin.com/in/mohitsaud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </motion.div>
            </Link>
            <Link
              href="mailto:saudmohit@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                <Mail size={18} />
                <span className="sr-only">Email</span>
              </motion.div>
            </Link>
            <Link
              href="tel:+9779868551045"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                <Phone size={18} />
                <span className="sr-only">Phone</span>
              </motion.div>
            </Link>
            <Link
              href="https://wa.me/9779868551045"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                <MessageCircle size={18} />
                <span className="sr-only">WhatsApp</span>
              </motion.div>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 text-center text-sm text-muted-foreground"
        >
          <p>© {currentYear} Mohit Saud. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
