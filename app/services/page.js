import ServicesClient from './ServicesClient';

export const metadata = {
  title: 'Services — Web & App Development, E-commerce, UI/UX',
  description:
    'Storemate services: custom website development with Next.js and React, cross-platform mobile apps, e-commerce solutions, and UI/UX design for businesses in Surendranagar and across India.',
  alternates: { canonical: '/services' },
};

export default function Page() {
  return <ServicesClient />;
}
