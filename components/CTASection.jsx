'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SITE } from '@/lib/site-config';

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-32 px-5 md:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-8 md:p-16 lg:p-20 rounded-3xl border border-white/10 bg-bg-elevated overflow-hidden"
        >
          {/* Background grid */}
          <div className="absolute inset-0 grid-bg-dense opacity-40" aria-hidden="true" />

          {/* Glow */}
          <div
            aria-hidden="true"
            className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-neon-cyan/20 blur-[100px]"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-neon-lime/10 blur-[100px]"
          />

          <div className="relative">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-px bg-neon-cyan" />
              <span className="text-xs font-mono uppercase tracking-widest text-neon-cyan">
                Let's build together
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6">
              Ready to ship{' '}
              <span className="gradient-text italic">something real?</span>
            </h2>

            <p className="text-ink-muted text-lg max-w-2xl mb-10 leading-relaxed">
              Chalo baat karte hain. 15-minute free consultation — no sales pitch,
              just clarity on what your project needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-neon-cyan text-bg font-medium hover:glow-cyan transition-all"
              >
                Book a free call
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <a
                href={`mailto:${SITE.email}?subject=Project%20inquiry`}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/15 hover:border-neon-cyan text-ink hover:text-neon-cyan transition-all"
              >
                Email us directly
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
