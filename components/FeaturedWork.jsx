'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { PROJECTS } from '@/lib/site-config';

export default function FeaturedWork() {
  return (
    <section className="relative py-20 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <SectionHeader
            kicker="Selected work"
            title="Recent projects, real results."
            description="Ek jhalak — kya banaya hai, kyun banaya, aur kya impact hua."
          />
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-neon-cyan hover:gap-3 transition-all whitespace-nowrap"
          >
            View all work
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="space-y-4">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
              }}
              className="group relative p-6 md:p-8 rounded-2xl border border-white/5 hover:border-neon-cyan/30 hover:bg-bg-elevated/50 transition-all cursor-pointer"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start md:items-center">
                <div className="md:col-span-1 font-mono text-xs text-ink-dim">
                  {project.year}
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-display text-2xl md:text-3xl tracking-tight group-hover:text-neon-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-neon-lime mt-1">
                    {project.category}
                  </p>
                </div>
                <p className="md:col-span-5 text-sm text-ink-muted leading-relaxed">
                  {project.description}
                </p>
                <div className="md:col-span-2 flex flex-wrap gap-1.5 justify-start md:justify-end">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-1 rounded-md bg-white/5 text-ink-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
