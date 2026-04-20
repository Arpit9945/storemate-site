import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SITE, NAV_LINKS, SERVICES } from '@/lib/site-config';

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/5 bg-bg-elevated">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-lime" />
              <span className="font-display text-2xl">{SITE.name}</span>
            </div>
            <p className="text-ink-muted text-sm leading-relaxed max-w-sm mb-6">
              {SITE.description}
            </p>
            <p className="text-ink-dim text-xs font-mono">{SITE.legalName}</p>
          </div>

          {/* Nav */}
          <div className="md:col-span-2">
            <h3 className="text-xs uppercase tracking-widest text-ink-dim mb-4">
              Navigate
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-muted hover:text-neon-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h3 className="text-xs uppercase tracking-widest text-ink-dim mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href="/services"
                    className="text-sm text-ink-muted hover:text-neon-cyan transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — NAP for local SEO */}
          <div className="md:col-span-3">
            <h3 className="text-xs uppercase tracking-widest text-ink-dim mb-4">
              Get in touch
            </h3>
            <address className="not-italic space-y-3 text-sm">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-start gap-2 text-ink-muted hover:text-neon-cyan transition-colors break-all"
              >
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <span>{SITE.email}</span>
              </a>
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-start gap-2 text-ink-muted hover:text-neon-cyan transition-colors"
              >
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <span>{SITE.phoneDisplay}</span>
              </a>
              <div className="flex items-start gap-2 text-ink-muted">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>
                  {SITE.address.city}, {SITE.address.state}
                  <br />
                  {SITE.address.country}
                </span>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="text-xs text-ink-dim font-mono">
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          <p className="text-xs text-ink-dim">
            Built with <span className="text-neon-cyan">♦</span> in{' '}
            {SITE.address.city}
          </p>
        </div>
      </div>
    </footer>
  );
}
