import AboutClient from './AboutClient';

export const metadata = {
  title: 'About — The team behind Storemate',
  description:
    'Storemate IT Services and Consultancy is a Surendranagar-based studio focused on building fast, modern websites and apps. Meet the team and our philosophy.',
  alternates: { canonical: '/about' },
};

export default function Page() {
  return <AboutClient />;
}
