import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import FeaturedWork from '@/components/FeaturedWork';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Storemate — Web & App Development in Surendranagar, Gujarat',
  description:
    'Storemate IT Services and Consultancy — Surendranagar-based agency building fast, modern websites and mobile apps. Next.js, React Native, e-commerce, UI/UX design.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <FeaturedWork />
      <CTASection />
    </>
  );
}
