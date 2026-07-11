/**
 * StoreMate — central site configuration
 *
 * This is the ONLY file that should contain the domain, subdomain URLs,
 * and contact details. Every page/component must import from here instead
 * of hardcoding a URL, email, or phone number.
 *
 * When the real domain is purchased: update `domain` below (and nothing else).
 */

const domain = "storemate.com"; // 🔧 PLACEHOLDER — replace with real domain when purchased

export const site = {
  name: "StoreMate",
  domain,
  url: `https://${domain}`,

  // Product subdomains
  products: {
    crm: {
      name: "StoreMate CRM",
      tagline: "Jewellery business management, simplified.",
      url: `https://app.${domain}`,
      status: "live" as const,
    },
    connect: {
      name: "StoreMate Connect",
      tagline: "Instagram & WhatsApp automation for your store.",
      url: `https://connect.${domain}`,
      status: "live" as const, // Instagram automation is live
      whatsappStatus: "coming-soon" as const, // WhatsApp automation ships later
    },
  },

  // Contact — update once real details are available
  contact: {
    email: "hello@storemate.com",
    supportEmail: "support@storemate.com",
    phone: "+91 00000 00000",
    whatsapp: "+91 00000 00000",
  },

  socials: {
    instagram: "https://instagram.com/storemate",
    twitter: "https://twitter.com/storemate",
    linkedin: "https://linkedin.com/company/storemate",
  },
};

export type Site = typeof site;
