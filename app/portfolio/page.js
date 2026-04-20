import PortfolioClient from './PortfolioClient';

export const metadata = {
  title: 'Our Work — Portfolio of Websites & Apps',
  description:
    'Selected projects by Storemate — web apps, mobile apps, and e-commerce platforms we have built for businesses in Gujarat and across India.',
  alternates: { canonical: '/portfolio' },
};

export default function Page() {
  return <PortfolioClient />;
}
