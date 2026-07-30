/**
 * Storemate — central site configuration
 *
 * This is the ONLY file that should contain the domain, subdomain URLs,
 * and contact details. Every page/component must import from here instead
 * of hardcoding a URL, email, or phone number.
 */

const domain = "storematehq.com";

export const site = {
  name: "Storemate",
  domain,
  url: `https://${domain}`,

  // Product subdomains
  products: {
    crm: {
      name: "Storemate CRM",
      tagline: "Jewellery business management, simplified.",
      url: `https://app.${domain}`,
      status: "live" as const,
    },
    connect: {
      name: "Storemate Connect",
      tagline: "Instagram & WhatsApp automation for your store.",
      url: `https://connect.${domain}`,
      status: "live" as const, // Instagram automation is live
      whatsappStatus: "coming-soon" as const, // WhatsApp automation ships later
    },
  },

  // Contact
  contact: {
    email: "support@storematehq.com",
    supportEmail: "support@storematehq.com",
    phone: "+91 99092 83562",
    whatsapp: "+91 99092 83562",
  },

  socials: {
    instagram: "https://instagram.com/the_storemate",
    twitter: "https://twitter.com/the_storemate",
    linkedin: "https://linkedin.com/company/the_storemate",
  },
};

export type Site = typeof site;
