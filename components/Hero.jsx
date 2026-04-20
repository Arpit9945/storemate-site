'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SITE } from '@/lib/site-config';

export default function Hero() {
  const words = ['websites', 'mobile apps', 'e-commerce', 'platforms'];

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-24 pb-16">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg pointer-events-none"
        aria-hidden="true"
      />

      {/* Glow orbs */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-neon-cyan/10 blur-[120px] animate-pulse-glow"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-neon-lime/10 blur-[120px] animate-pulse-glow"
        style={{ animationDelay: '1.5s' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full">
        {/* Location tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6 md:mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-neon-lime animate-pulse" />
          <span className="text-xs font-mono text-ink-muted">
            Based in {SITE.address.city}, {SITE.address.state} — Open for work
          </span>
        </motion.div>

        {/* Main headline */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight max-w-5xl">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            We build{' '}
            <span className="gradient-text italic">{words[0]}</span>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="block"
          >
            that <span className="text-neon-cyan">actually</span> ship.
          </motion.span>
        </h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 md:mt-8 max-w-2xl text-lg md:text-xl text-ink-muted leading-relaxed"
        >
          Surendranagar-based studio crafting{' '}
          <span className="text-ink">tez, modern</span> websites and mobile apps
          for businesses that mean business.{' '}
          <span className="font-mono text-sm text-neon-lime">
            No template-wale shortcuts.
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-neon-cyan text-bg font-medium hover:glow-cyan transition-all"
          >
            Start a project
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            href="/portfolio"
            className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/15 hover:border-neon-cyan text-ink hover:text-neon-cyan transition-all"
          >
            <Sparkles size={18} />
            See our work
          </Link>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-3xl"
        >
          {[
            { value: '20+', label: 'Projects shipped' },
            { value: '<2s', label: 'Avg load time' },
            { value: '100%', label: 'Mobile responsive' },
            { value: '24/7', label: 'Support' },
          ].map((stat, i) => (
            <div key={i} className="border-l border-white/10 pl-4">
              <div className="font-display text-3xl md:text-4xl text-neon-cyan">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-ink-muted mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-ink-dim">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-neon-cyan to-transparent"
        />
      </motion.div>
    </section>
  );
}
