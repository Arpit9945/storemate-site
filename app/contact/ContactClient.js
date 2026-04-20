'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, MapPin, Send, Check } from 'lucide-react';
import { SITE } from '@/lib/site-config';

export default function ContactClient() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // On submit, pre-fill a WhatsApp message with the form content.
  // This is the cheapest + highest-conversion path for a solo agency
  // — no backend needed, direct to founder's phone.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    const text = `*New project inquiry from Storemate website*

*Name:* ${form.name}
*Email:* ${form.email}
*Service:* ${form.service || 'Not specified'}
*Budget:* ${form.budget || 'Not specified'}

*Message:*
${form.message}`;

    const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

    setSubmitted(true);
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 px-5 md:px-8 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
        <div
          aria-hidden="true"
          className="absolute top-20 left-1/3 w-96 h-96 rounded-full bg-neon-cyan/10 blur-[120px]"
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
                Contact
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-6">
              Let's build{' '}
              <span className="gradient-text italic">something.</span>
            </h1>
            <p className="text-ink-muted text-lg md:text-xl max-w-2xl leading-relaxed">
              Koi bhi form fill karo, WhatsApp karo, ya sidha call karo. Reply
              24 hours ke andar — working days pe guaranteed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact grid */}
      <section className="px-5 md:px-8 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Direct contact cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi Storemate! I'd like to discuss a project.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-6 rounded-2xl border border-white/5 hover:border-[#25D366]/50 bg-bg-elevated transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-[#25D366]/15 flex items-center justify-center flex-shrink-0">
                <MessageCircle size={20} className="text-[#25D366]" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-mono uppercase tracking-widest text-ink-dim mb-1">
                  WhatsApp — fastest
                </p>
                <p className="font-medium text-lg group-hover:text-[#25D366] transition-colors">
                  {SITE.phoneDisplay}
                </p>
                <p className="text-sm text-ink-muted mt-1">
                  Typical reply in {'<'}2 hours
                </p>
              </div>
            </a>

            <a
              href={`mailto:${SITE.email}`}
              className="group flex items-start gap-4 p-6 rounded-2xl border border-white/5 hover:border-neon-cyan/50 bg-bg-elevated transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-neon-cyan/15 flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-neon-cyan" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-mono uppercase tracking-widest text-ink-dim mb-1">
                  Email
                </p>
                <p className="font-medium text-lg group-hover:text-neon-cyan transition-colors break-all">
                  {SITE.email}
                </p>
                <p className="text-sm text-ink-muted mt-1">
                  For detailed briefs
                </p>
              </div>
            </a>

            <a
              href={`tel:${SITE.phone}`}
              className="group flex items-start gap-4 p-6 rounded-2xl border border-white/5 hover:border-neon-lime/50 bg-bg-elevated transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-neon-lime/15 flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-neon-lime" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-mono uppercase tracking-widest text-ink-dim mb-1">
                  Call
                </p>
                <p className="font-medium text-lg group-hover:text-neon-lime transition-colors">
                  {SITE.phoneDisplay}
                </p>
                <p className="text-sm text-ink-muted mt-1">
                  Mon–Sat, 10am–7pm
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4 p-6 rounded-2xl border border-white/5 bg-bg-elevated">
              <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-ink-muted" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-ink-dim mb-1">
                  Location
                </p>
                <p className="font-medium text-lg">
                  {SITE.address.city}, {SITE.address.state}
                </p>
                <p className="text-sm text-ink-muted mt-1">
                  Serving clients across India
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="p-6 md:p-10 rounded-2xl border border-white/5 bg-bg-elevated">
              {submitted ? (
                <div className="py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-neon-lime/20 flex items-center justify-center mx-auto mb-6">
                    <Check size={32} className="text-neon-lime" />
                  </div>
                  <h3 className="font-display text-3xl mb-3">
                    Opening WhatsApp...
                  </h3>
                  <p className="text-ink-muted max-w-md mx-auto">
                    Your message has been prepared. Just hit send in WhatsApp
                    and we'll reply soon.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: '',
                        email: '',
                        service: '',
                        budget: '',
                        message: '',
                      });
                    }}
                    className="mt-6 text-sm text-neon-cyan hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Field
                      label="Your name *"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                    <Field
                      label="Email *"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <SelectField
                      label="What do you need?"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      options={[
                        'Website Development',
                        'Wordpress Development',
                        'Mobile App',
                        'E-commerce Store',
                        'UI/UX Design',
                        'Not sure — help me figure out',
                      ]}
                    />
                    <SelectField
                      label="Budget range"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      options={[
                        'Under ₹25,000',
                        '₹25,000 – ₹75,000',
                        '₹75,000 – ₹2,00,000',
                        '₹2,00,000+',
                        'Not decided yet',
                      ]}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-ink-dim mb-2">
                      Tell us about your project *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="What are you building? Any existing references or must-haves?"
                      className="w-full px-4 py-3 rounded-xl bg-bg border border-white/10 focus:border-neon-cyan focus:outline-none text-ink placeholder:text-ink-dim resize-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-neon-cyan text-bg font-medium hover:glow-cyan transition-all"
                  >
                    Send via WhatsApp
                    <Send
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>

                  <p className="text-xs text-ink-dim text-center">
                    By submitting, this opens WhatsApp with your message
                    pre-filled. You confirm before sending.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, value, onChange, type = 'text', required }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-mono uppercase tracking-widest text-ink-dim mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 rounded-xl bg-bg border border-white/10 focus:border-neon-cyan focus:outline-none text-ink placeholder:text-ink-dim transition-colors"
      />
    </div>
  );
}

function SelectField({ label, name, value, onChange, options }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-mono uppercase tracking-widest text-ink-dim mb-2"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-xl bg-bg border border-white/10 focus:border-neon-cyan focus:outline-none text-ink transition-colors appearance-none cursor-pointer"
      >
        <option value="">Select...</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
