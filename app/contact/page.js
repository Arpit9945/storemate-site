import ContactClient from './ContactClient';

export const metadata = {
  title: 'Contact — Start your project with Storemate',
  description:
    'Get in touch with Storemate in Surendranagar. Email, WhatsApp, or fill the form. We reply within 24 hours on working days.',
  alternates: { canonical: '/contact' },
};

export default function Page() {
  return <ContactClient />;
}
