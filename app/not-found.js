import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: '404 — Page not found',
};

export default function NotFound() {
  return (
    <section className="min-h-[100svh] flex items-center justify-center px-5 py-20">
      <div className="text-center max-w-lg">
        <p className="font-mono text-xs uppercase tracking-widest text-neon-cyan mb-6">
          Error 404
        </p>
        <h1 className="font-display text-7xl md:text-9xl leading-none tracking-tight mb-4">
          <span className="gradient-text italic">Lost</span>
        </h1>
        <p className="text-ink-muted text-lg mb-10">
          Ye page kahin nahi hai. Shayad move ho gaya, ya kabhi tha hi nahi.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neon-cyan text-bg font-medium hover:glow-cyan transition-all"
        >
          <ArrowLeft size={18} />
          Back to home
        </Link>
      </div>
    </section>
  );
}
