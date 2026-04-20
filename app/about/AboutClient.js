'use client';

import { motion } from 'framer-motion';
import { Zap, Eye, HeartHandshake, Rocket } from 'lucide-react';
import { SITE } from '@/lib/site-config';
import CTASection from '@/components/CTASection';

const values = [
  {
    icon: Zap,
    title: 'Speed matters',
    description:
      'Fast sites, fast replies, fast iterations. Hum waste nahi karte — na time, na tumhara budget.',
  },
  {
    icon: Eye,
    title: 'Design with intent',
    description:
      'Har pixel, har interaction ek reason ke saath. Trendy nahi, timeless solutions.',
  },
  {
    icon: HeartHandshake,
    title: 'Long-term partners',
    description:
      'Launch pe kaam khatam nahi hota. Hum saath chalte hain — updates, scaling, support.',
  },
  {
    icon: Rocket,
    title: 'Modern stack only',
    description:
      'Next.js, React, Tailwind, React Native. Kal ki technology, aaj ke projects me.',
  },
];

export default function AboutClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-5 md:px-8 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
        <div
          aria-hidden="true"
          className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-neon-magenta/10 blur-[120px]"
        />

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-px bg-neon-cyan" />
              <span className="text-xs font-mono uppercase tracking-widest text-neon-cyan">
                About us
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-8">
              Ek chhota studio with{' '}
              <span className="gradient-text italic">big ambitions.</span>
            </h1>
            <div className="space-y-6 text-lg md:text-xl text-ink-muted leading-relaxed max-w-3xl">
              <p>
                <span className="text-ink">Storemate</span> started with a
                simple observation — Surendranagar ke local businesses ko agency-level
                quality chahiye, but most agencies either charge too much or
                deliver template work.
              </p>
              <p>
                Hum wo gap fill karte hain.{' '}
                <span className="text-neon-cyan">
                  Metro-quality work, local accessibility.
                </span>{' '}
                Modern tech, honest pricing, aur ek team jo aapki problem apni
                samajhti hai.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values grid */}
      <section className="px-5 md:px-8 py-16 md:py-24 bg-bg-elevated/40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-neon-cyan" />
              <span className="text-xs font-mono uppercase tracking-widest text-neon-cyan">
                What we believe
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight max-w-3xl">
              Principles that shape every project.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                }}
                className="p-7 md:p-9 rounded-2xl border border-white/5 bg-bg"
              >
                <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center text-neon-cyan mb-5">
                  <value.icon size={22} />
                </div>
                <h3 className="font-display text-2xl md:text-3xl mb-3">
                  {value.title}
                </h3>
                <p className="text-ink-muted leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder card */}
      <section className="px-5 md:px-8 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative p-8 md:p-12 lg:p-16 rounded-3xl border border-white/5 bg-bg-elevated overflow-hidden"
          >
            <div
              aria-hidden="true"
              className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-neon-cyan/10 blur-[100px]"
            />
            <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="relative aspect-square max-w-[240px] rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-lime flex items-center justify-center">
                  <span className="font-display text-7xl text-bg">
                    {SITE.founder
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
              </div>
              <div className="md:col-span-3">
                <p className="text-xs font-mono uppercase tracking-widest text-neon-lime mb-3">
                  Founder
                </p>
                <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-4">
                  {SITE.founder}
                </h2>
                <p className="text-ink-muted leading-relaxed mb-6">
                  Developer, designer, aur founder at Storemate. Startup-speed
                  execution ke saath agency-level craft combine karna — yehi
                  mission hai.
                </p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-neon-cyan text-sm hover:underline"
                >
                  {SITE.email} →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
