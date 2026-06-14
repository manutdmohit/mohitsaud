'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Spinner } from '@/components/ui/spinner';
import { siteConfig } from '@/lib/site-data';

const MIN_LOAD_MS = 700;
const MAX_LOAD_MS = 2500;

export function PageLoader() {
  const prefersReducedMotion = useReducedMotion();
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (prefersReducedMotion) {
      setIsLoading(false);
      return;
    }

    const startedAt = Date.now();
    let finished = false;
    let minTimer: number | undefined;
    let maxTimer: number | undefined;

    const finish = () => {
      if (finished) return;
      finished = true;
      setIsLoading(false);
    };

    const scheduleFinish = () => {
      const elapsed = Date.now() - startedAt;
      const remaining = Math.max(0, MIN_LOAD_MS - elapsed);
      minTimer = window.setTimeout(finish, remaining);
    };

    maxTimer = window.setTimeout(finish, MAX_LOAD_MS);

    if (document.readyState === 'complete') {
      scheduleFinish();
    } else {
      window.addEventListener('load', scheduleFinish, { once: true });
    }

    return () => {
      if (minTimer) window.clearTimeout(minTimer);
      if (maxTimer) window.clearTimeout(maxTimer);
      window.removeEventListener('load', scheduleFinish);
    };
  }, [prefersReducedMotion]);

  if (!mounted) return null;

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-5 site-navbar"
          aria-live="polite"
          aria-busy="true"
        >
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-display text-xl tracking-tight text-foreground"
          >
            {siteConfig.name.split(' ')[0]}
            <span className="text-muted-foreground">.</span>
          </motion.p>
          <Spinner size="lg" className="text-primary" />
          <span className="sr-only">Loading portfolio</span>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
