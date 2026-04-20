'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const steps = [
  {
    num: '01',
    title: 'Discover',
    hinglish: 'Samajhna pehle',
    description:
      'We dig into your business, goals, and users. No assumptions — real conversations, clear scope.',
  },
  {
    num: '02',
    title: 'Design',
    hinglish: 'Sundar, but useful',
    description:
      'Wireframes first, then pixel-perfect UI in Figma. You approve before we write a single line of code.',
  },
  {
    num: '03',
    title: 'Develop',
    hinglish: 'Build karte hain',
    description:
      'Modern stack (Next.js, React Native). Weekly demos. You see progress, not just promises.',
  },
  {
    num: '04',
    title: 'Deploy',
    hinglish: 'Live karte hain',
    description:
      'Launch, monitor, optimize. Post-launch support included for 30 days. Scale when you are ready.',
  },
];

export default function Process() {
  return (
    <section className="relative py-20 md:py-32 px-5 md:px-8 bg-bg-elevated/40">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          kicker="How we work"
          title="Chaar steps. Koi surprises nahi."
          description="Transparent process, weekly updates, aur ek clear timeline. Aap hamesha loop me rehte ho."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative group"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-white/10 to-transparent -translate-x-4"
                />
              )}

              <div className="relative h-full p-6 md:p-7 rounded-2xl border border-white/5 hover:border-neon-cyan/30 bg-bg transition-colors duration-300">
                <div className="font-mono text-xs text-neon-cyan mb-4">
                  STEP / {step.num}
                </div>
                <h3 className="font-display text-3xl mb-1">{step.title}</h3>
                <p className="text-neon-lime text-sm font-mono mb-4 italic">
                  {step.hinglish}
                </p>
                <p className="text-ink-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
