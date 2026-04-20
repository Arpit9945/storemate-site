'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '@/lib/site-config';
import CTASection from '@/components/CTASection';

const categories = ['All', 'Web App', 'Mobile App', 'E-commerce'];

export default function PortfolioClient() {
  return (
    <>
      {/* Page hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 px-5 md:px-8 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
        <div
          aria-hidden="true"
          className="absolute top-20 left-0 w-96 h-96 rounded-full bg-neon-lime/10 blur-[120px]"
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
                Portfolio
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight max-w-5xl mb-6">
              Work that{' '}
              <span className="gradient-text italic">speaks for itself.</span>
            </h1>
            <p className="text-ink-muted text-lg md:text-xl max-w-2xl leading-relaxed">
              Real projects, real clients, real results. Har case study me
              problem, solution, aur impact clearly explained.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="px-5 md:px-8 mb-12">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm border transition-all ${
                i === 0
                  ? 'bg-neon-cyan text-bg border-neon-cyan'
                  : 'border-white/10 text-ink-muted hover:border-white/30 hover:text-ink'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects grid */}
      <section className="px-5 md:px-8 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group cursor-pointer"
            >
              {/* Image placeholder — replace with real screenshots */}
              <div className="relative aspect-[4/3] rounded-2xl border border-white/5 bg-bg-elevated overflow-hidden mb-5">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 grid-bg-dense opacity-40"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-lime/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-6xl md:text-8xl text-ink-dim/20 group-hover:text-neon-cyan/30 transition-colors duration-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="absolute top-5 left-5 font-mono text-xs text-ink-dim">
                  {project.year}
                </div>
                <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-bg/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={18} className="text-neon-cyan" />
                </div>
              </div>

              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="font-display text-2xl md:text-3xl tracking-tight group-hover:text-neon-cyan transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs font-mono text-neon-lime flex-shrink-0 mt-2">
                  {project.category}
                </span>
              </div>
              <p className="text-ink-muted text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-1 rounded-md bg-white/5 text-ink-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
