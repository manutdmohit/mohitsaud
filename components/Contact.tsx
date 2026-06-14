'use client';

import type React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/section-header';
import { FadeIn } from '@/components/fade-in';
import { Spinner } from '@/components/ui/spinner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { siteConfig } from '@/lib/site-data';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      toast.success("Message sent — I'll reply within 24 hours.");
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      toast.error('Could not send message. Please email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding section-divider">
      <div className="max-w-5xl mx-auto container-padding">
        <FadeIn>
          <SectionHeader
            number="05 — Contact"
            title="Start a conversation"
            description="Open to freelance projects, full-time roles, and collaborations. Reach out by form or directly."
          />
        </FadeIn>

        <FadeIn delay={0.08}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16">
          <aside className="space-y-6">
            <ul className="space-y-5 text-sm">
              <li className="flex gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-muted-foreground shrink-0" />
                <div>
                  <p className="text-muted-foreground mb-0.5">Email</p>
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors">
                    {siteConfig.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-muted-foreground shrink-0" />
                <div>
                  <p className="text-muted-foreground mb-0.5">Phone / WhatsApp</p>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground shrink-0" />
                <div>
                  <p className="text-muted-foreground mb-0.5">Location</p>
                  <span>{siteConfig.location}</span>
                </div>
              </li>
            </ul>

            <div className="pt-4 border-t border-border flex flex-wrap gap-4 text-sm">
              <Link href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                GitHub
              </Link>
              <Link href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                LinkedIn
              </Link>
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="surface-card p-6 md:p-8 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project inquiry"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                className="resize-none"
              />
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto min-w-[140px]">
              {isSubmitting ? (
                <>
                  <Spinner size="sm" className="mr-2" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send message
                </>
              )}
            </Button>
          </form>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}
