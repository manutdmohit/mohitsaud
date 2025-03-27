'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, X, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <>
            {/* WhatsApp button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="mb-4"
            >
              <Link
                href="https://wa.me/9779868551045"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <MessageCircle size={20} />
                <span className="text-sm font-medium overflow-hidden whitespace-nowrap max-w-0 group-hover:max-w-xs transition-all duration-500">
                  WhatsApp
                </span>
              </Link>
            </motion.div>

            {/* Phone button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="mb-4"
            >
              <Link
                href="tel:+9779868551045"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Phone size={20} />
                <span className="text-sm font-medium overflow-hidden whitespace-nowrap max-w-0 group-hover:max-w-xs transition-all duration-500">
                  Call
                </span>
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-300',
          isOpen
            ? 'bg-muted hover:bg-muted/80'
            : 'bg-primary hover:bg-primary/90 text-primary-foreground'
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? <X size={24} /> : <Plus size={24} />}
        </motion.div>
      </motion.button>
    </div>
  );
}
