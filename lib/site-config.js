// Single source of truth for business info.
// Change here → updates everywhere (SEO, schema, contact, footer).

export const SITE = {
  name: 'Storemate',
  legalName: 'Storemate IT Services and Consultancy',
  tagline: 'Websites & Apps that actually ship',
  description:
    'Surendranagar-based web & app development agency. We build fast, modern websites and mobile apps for businesses across Gujarat and India.',
  url: 'https://storemate.in', // Change to your actual domain when live
  email: 'arpitpattani2004@gmail.com',
  phone: '+919909283562',
  phoneDisplay: '+91 99092 83562',
  whatsapp: '919909283562',
  address: {
    city: 'Surendranagar',
    state: 'Gujarat',
    country: 'India',
    postalCode: '363001', // Update if different
    region: 'IN-GJ',
  },
  social: {
    // Add when available
    instagram: '',
    linkedin: '',
    twitter: '',
  },
  founder: 'Arpit Pattani',
  founded: '2024',
};

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export const SERVICES = [
  {
    slug: 'web-development',
    title: 'Website Development',
    tagline: 'Tez, sundar, aur Google-ready',
    description:
      'Custom websites built with Next.js, React, and modern frameworks. Blazing fast, SEO-optimized, and mobile-first.',
    features: [
      'Next.js / React builds',
      'Sub-second load times',
      'SEO-ready architecture',
      'CMS integration',
    ],
  },
  {
    slug: 'wordpress-development',
    title: 'Wordpress Development',
    tagline: 'Tez, sundar, aur SEO-ready',
    description:
      'Custom websites built with Wordpress. Blazing fast, SEO-optimized, and mobile-first.',
    features: [
      'Wordpress builds',
      'SEO-ready architecture',
      'CMS integration',
    ],
  },
  {
    slug: 'app-development',
    title: 'Mobile App Development',
    tagline: 'iOS + Android, ek hi codebase',
    description:
      'Cross-platform mobile apps using React Native and Flutter. Native performance, faster shipping, lower cost.',
    features: [
      'React Native / Flutter',
      'iOS + Android ready',
      'Push notifications',
      'API integration',
    ],
  },
  {
    slug: 'ecommerce',
    title: 'E-commerce Solutions',
    tagline: 'Bech ke paise kamao, online',
    description:
      'Full-stack online stores with payment gateways, inventory management, and conversion-focused UX.',
    features: [
      'Razorpay / Stripe integration',
      'Admin dashboard',
      'Inventory tracking',
      'Order management',
    ],
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    tagline: 'Design jo sell karta hai',
    description:
      'User-first design that converts. Wireframes, prototypes, and production-ready designs in Figma.',
    features: [
      'User research',
      'Wireframing & prototyping',
      'Design systems',
      'Usability testing',
    ],
  },
];

export const PROJECTS = [
  {
    title: 'Retail Inventory Platform',
    category: 'Web App',
    description:
      'Full-stack inventory management system for a multi-branch retail business in Gujarat.',
    tech: ['Next.js', 'PostgreSQL', 'Tailwind'],
    year: '2025',
  },
  {
    title: 'Local Services Marketplace',
    category: 'Mobile App',
    description:
      'On-demand services app connecting customers with local vendors. Live in 3 cities.',
    tech: ['React Native', 'Node.js', 'Firebase'],
    year: '2025',
  },
  {
    title: 'D2C Fashion Store',
    category: 'E-commerce',
    description:
      'Custom Shopify alternative for a growing fashion brand. 3x faster than competitors.',
    tech: ['Next.js', 'Razorpay', 'Sanity CMS'],
    year: '2024',
  },
];
