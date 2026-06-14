'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MessageCircle, Phone, Plus, X } from 'lucide-react';
import { siteConfig } from '@/lib/site-data';
import { cn } from '@/lib/utils';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2 pb-[env(safe-area-inset-bottom)]">
      {isOpen ? (
        <>
          <Link
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm shadow-sm hover:border-primary/40 transition-colors"
          >
            <MessageCircle className="h-4 w-4 text-[#25D366]" />
            WhatsApp
          </Link>
          <Link
            href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm shadow-sm hover:border-primary/40 transition-colors"
          >
            <Phone className="h-4 w-4 text-primary" />
            Call
          </Link>
        </>
      ) : null}

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close contact menu' : 'Open contact menu'}
        aria-expanded={isOpen}
        className={cn(
          'flex h-11 w-11 items-center justify-center rounded-md border shadow-sm transition-colors',
          isOpen
            ? 'border-border bg-muted text-foreground'
            : 'border-primary bg-primary text-primary-foreground'
        )}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
      </button>
    </div>
  );
}
