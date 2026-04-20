'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Check,
  ArrowRight,
  Code2,
  Smartphone,
  ShoppingBag,
  Palette,
} from 'lucide-react';
import { SERVICES } from '@/lib/site-config';
import CTASection from '@/components/CTASection';

const icons = {
  'web-development': Code2,
  'wordpress-development': Code2,
  'app-development': Smartphone,
  ecommerce: ShoppingBag,
  'ui-ux-design': Palette,
};

export default function ServicesClient() {
  return (
    <>
      {/* Page hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-5 md:px-8 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
        <div
          aria-hidden="true"
          className="absolute top-20 right-0 w-96 h-96 rounded-full bg-neon-cyan/10 blur-[120px]"
        />

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-px bg-neon-cyan" />
              <span className="text-xs font-mono uppercase tracking-widest text-neon-cyan">
                Services
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight max-w-5xl mb-6">
              Everything you need to{' '}
              <span className="gradient-text italic">go live.</span>
            </h1>
            <p className="text-ink-muted text-lg md:text-xl max-w-2xl leading-relaxed">
              Design, development, launch, iterate. Ek team, ek timeline, zero
              handoffs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service details — alternating layout */}
      <section className="px-5 md:px-8 pb-20">
        <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
          {SERVICES.map((service, i) => {
            const Icon = icons[service.slug];
            const reverse = i % 2 === 1;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}
              >
                {/* Visual panel */}
                <div className="relative aspect-[4/3] rounded-3xl border border-white/5 bg-bg-elevated overflow-hidden group">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 grid-bg-dense opacity-50"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-transparent to-neon-lime/5"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-neon-cyan to-neon-lime opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Icon size={56} className="text-bg" strokeWidth={1.5} />
                      </div>
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-neon-cyan blur-3xl opacity-40 -z-10"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-5 left-5 font-mono text-xs text-ink-dim">
                    {String(i + 1).padStart(2, '0')} /{' '}
                    {String(SERVICES.length).padStart(2, '0')}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <p className="text-neon-lime text-sm font-mono mb-3">
                    {service.tagline}
                  </p>
                  <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-5">
                    {service.title}
                  </h2>
                  <p className="text-ink-muted text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check
                          size={18}
                          className="text-neon-cyan mt-0.5 flex-shrink-0"
                        />
                        <span className="text-ink">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 text-neon-cyan font-medium hover:gap-3 transition-all"
                  >
                    Discuss your project
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}
