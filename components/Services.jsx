'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Code2, Smartphone, ShoppingBag, Palette } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { SERVICES } from '@/lib/site-config';

const icons = {
  'web-development': Code2,
  'wordpress-development': Code2,
  'app-development': Smartphone,
  ecommerce: ShoppingBag,
  'ui-ux-design': Palette,
};

export default function Services() {
  return (
    <section className="relative py-20 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          kicker="What we do"
          title="Services jo result laate hain"
          description="From idea to launch — ek complete team jo aapka digital product design, develop aur deploy karti hai."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {SERVICES.map((service, i) => {
            const Icon = icons[service.slug];
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  href="/services"
                  className="group relative block p-7 md:p-9 rounded-2xl bg-bg-elevated border border-white/5 hover:border-neon-cyan/40 transition-all duration-500 overflow-hidden h-full"
                >
                  {/* Hover glow */}
                  <div
                    aria-hidden="true"
                    className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-neon-cyan/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  <div className="relative flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center text-neon-cyan group-hover:bg-neon-cyan group-hover:text-bg transition-all duration-300">
                      <Icon size={22} />
                    </div>
                    <ArrowUpRight
                      size={22}
                      className="text-ink-dim group-hover:text-neon-cyan group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300"
                    />
                  </div>

                  <h3 className="font-display text-3xl md:text-4xl mb-2 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-neon-lime text-sm font-mono mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-ink-muted leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="flex flex-wrap gap-2">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-ink-muted"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
