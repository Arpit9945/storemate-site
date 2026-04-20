'use client';

import { motion } from 'framer-motion';

export default function SectionHeader({ kicker, title, description, align = 'left' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`max-w-3xl mb-12 md:mb-16 ${alignClass}`}
    >
      {kicker && (
        <div className={`inline-flex items-center gap-2 mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="w-8 h-px bg-neon-cyan" />
          <span className="text-xs font-mono uppercase tracking-widest text-neon-cyan">
            {kicker}
          </span>
        </div>
      )}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-4 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-ink-muted text-base md:text-lg leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}
