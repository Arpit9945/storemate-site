/**
 * Technologies we build custom projects with.
 * Logos are simplified marks in each brand's colour, drawn on a 32×32 viewBox
 * (inner SVG markup — render inside <svg viewBox="0 0 32 32">).
 */
export interface Tech {
  name: string;
  logo: string;
}

export const logos: Record<string, string> = {
  'React JS': '<g fill="none" stroke="#149ECA" stroke-width="1.6"><ellipse cx="16" cy="16" rx="13" ry="5"/><ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(120 16 16)"/></g><circle cx="16" cy="16" r="2.6" fill="#149ECA"/>',
  'Next.js': '<circle cx="16" cy="16" r="14" fill="#111"/><path d="M11.5 22V10l10.5 13.5" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.5 10v7" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/>',
  'Node.js': '<path d="M16 2.5 28 9.5v13L16 29.5 4 22.5v-13Z" fill="#5FA04E"/><text x="16" y="20.5" font-size="10.5" font-weight="800" fill="#fff" text-anchor="middle" font-family="Arial, sans-serif">JS</text>',
  'Astro': '<path d="M12.2 4.5h7.6l7 20.5c-2.6-1.4-6-2.2-10.8-2.2S7.8 23.6 5.2 25Z" fill="#17191E"/><path d="M11.3 24.2c-.4 2.6 1.6 4.8 4.7 5.3-.8-1.4-.5-2.6.6-3.4 1.6-1.1 2.2-1.9 1.9-2.9-1.6.5-5 .9-7.2 1Z" fill="#E2349A"/><path d="M13.8 17.5 16 10.5l2.2 7c-1.4-.3-3-.3-4.4 0Z" fill="#fff"/>',
  'WordPress': '<circle cx="16" cy="16" r="14" fill="#21759B"/><circle cx="16" cy="16" r="11.2" fill="none" stroke="#fff" stroke-width="1.4"/><path d="m9.2 11.5 4 11 2.6-7.4M12.8 11.5h-3.6M15 11.5l4.2 11 3.6-10.4M18.5 11.5H15M21 11.5h2.6" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
  'SCSS': '<circle cx="16" cy="16" r="14" fill="#CC6699"/><path d="M20.5 10.5c-1.8-1.6-6.2-1.2-7.6.6-1.6 2 .4 3.4 2.6 4.4 2.4 1.1 4 2.4 2.2 4.6-1.6 2-5.2 1.8-6.6.2" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>',
  'Shopify': '<path d="M8 10.5h16l-1.6 17H9.6Z" fill="#95BF47"/><path d="M12 12V9a4 4 0 0 1 8 0v3" fill="none" stroke="#5E8E3E" stroke-width="1.8" stroke-linecap="round"/><path d="M18.4 15.2c-1-.8-3.6-.7-3.8.8-.3 2 4.2 1.6 3.9 4.2-.3 2.2-3.2 2.4-4.7 1.2" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/>',
  'MongoDB': '<path d="M16 3c3.8 4.6 6.2 8.4 6.2 12.6 0 4.8-3 8.2-5.4 9.8L16.4 29h-.8l-.4-3.6C12.8 23.8 9.8 20.4 9.8 15.6 9.8 11.4 12.2 7.6 16 3Z" fill="#47A248"/><path d="M16 6v20" stroke="#B8E0A5" stroke-width="1.1"/>',
  'MySQL': '<ellipse cx="16" cy="8.5" rx="10" ry="4" fill="#4479A1"/><path d="M6 8.5v15c0 2.2 4.5 4 10 4s10-1.8 10-4v-15c0 2.2-4.5 4-10 4s-10-1.8-10-4Z" fill="#4479A1" fill-opacity="0.85"/><path d="M6 16c0 2.2 4.5 4 10 4s10-1.8 10-4" fill="none" stroke="#fff" stroke-opacity="0.7" stroke-width="1.3"/>',
  'TypeScript': '<rect x="3" y="3" width="26" height="26" rx="5" fill="#3178C6"/><text x="22" y="25" font-size="12" font-weight="800" fill="#fff" text-anchor="end" font-family="Arial, sans-serif">TS</text>',
  'JavaScript': '<rect x="3" y="3" width="26" height="26" rx="5" fill="#F7DF1E"/><text x="23" y="25" font-size="12" font-weight="800" fill="#111" text-anchor="end" font-family="Arial, sans-serif">JS</text>',
  'Tailwind CSS': '<path d="M9 13.5c1.2-4.6 4-6.4 8.4-5.3 2.5.6 3.3 2.8 5.2 3.3 1.8.4 3.4-.2 4.4-1.5-1.2 4.6-4 6.4-8.4 5.3-2.5-.6-3.3-2.8-5.2-3.3-1.8-.4-3.4.2-4.4 1.5ZM4.6 21.5c1.2-4.6 4-6.4 8.4-5.3 2.5.6 3.3 2.8 5.2 3.3 1.8.4 3.4-.2 4.4-1.5-1.2 4.6-4 6.4-8.4 5.3-2.5-.6-3.3-2.8-5.2-3.3-1.8-.4-3.4.2-4.4 1.5Z" fill="#38BDF8"/>',
  'Express.js': '<rect x="3" y="3" width="26" height="26" rx="7" fill="#1E1420"/><text x="16" y="20.5" font-size="11" font-weight="700" fill="#fff" text-anchor="middle" font-family="Arial, sans-serif">ex</text>',
  'PHP': '<ellipse cx="16" cy="16" rx="14" ry="8.5" fill="#777BB4"/><text x="16" y="19.6" font-size="9.5" font-weight="800" font-style="italic" fill="#fff" text-anchor="middle" font-family="Arial, sans-serif">php</text>',
  'Laravel': '<path d="M6 8.5 12 5l6 3.5v7l6-3.5 6 3.5v7L18 29l-12-7Z" fill="none" stroke="#FF2D20" stroke-width="1.8" stroke-linejoin="round"/><path d="M12 5v14l6 3.5M18 15.5l6 3.5V12" fill="none" stroke="#FF2D20" stroke-width="1.8" stroke-linejoin="round"/>',
  'WooCommerce': '<rect x="2" y="7" width="28" height="17" rx="5" fill="#7F54B3"/><path d="M14 24l2 4 2-4" fill="#7F54B3"/><text x="16" y="19.5" font-size="8.5" font-weight="800" fill="#fff" text-anchor="middle" font-family="Arial, sans-serif">Woo</text>',
  'GraphQL': '<path d="M16 3.5 26.8 9.75v12.5L16 28.5 5.2 22.25V9.75Z" fill="none" stroke="#E10098" stroke-width="1.6"/><path d="M16 3.5 5.6 22h20.8Z" fill="none" stroke="#E10098" stroke-width="1.4"/><g fill="#E10098"><circle cx="16" cy="3.5" r="2.4"/><circle cx="26.8" cy="9.75" r="2.4"/><circle cx="26.8" cy="22.25" r="2.4"/><circle cx="16" cy="28.5" r="2.4"/><circle cx="5.2" cy="22.25" r="2.4"/><circle cx="5.2" cy="9.75" r="2.4"/></g>',
  'PostgreSQL': '<circle cx="16" cy="16" r="14" fill="#336791"/><text x="16" y="20" font-size="11" font-weight="800" fill="#fff" text-anchor="middle" font-family="Arial, sans-serif">Pg</text>',
  'Firebase': '<path d="M7 24 10.5 4.5l4.2 7.8L17 8l8 16-9 5Z" fill="#FFA000"/><path d="M7 24 16 29l9-5-4.6-12.5Z" fill="#F57C00"/><path d="M7 24l3.5-19.5 4.2 7.8Z" fill="#FFCA28"/>',
  'Figma': '<path d="M12 4h4v8h-4a4 4 0 0 1 0-8Z" fill="#F24E1E"/><path d="M16 4h4a4 4 0 0 1 0 8h-4Z" fill="#FF7262"/><path d="M12 12h4v8h-4a4 4 0 0 1 0-8Z" fill="#A259FF"/><circle cx="20" cy="16" r="4" fill="#1ABCFE"/><path d="M12 20h4v4a4 4 0 1 1-4-4Z" fill="#0ACF83"/>',
  'AWS': '<text x="16" y="17" font-size="11.5" font-weight="800" fill="#232F3E" text-anchor="middle" font-family="Arial, sans-serif">aws</text><path d="M6 21.5c6 3.6 14 3.6 20 0" fill="none" stroke="#FF9900" stroke-width="2" stroke-linecap="round"/><path d="M23.5 20.5l2.8.8-.6 2.8" fill="none" stroke="#FF9900" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
  'Vercel': '<path d="M16 6 27 25H5Z" fill="#111"/>',
  'Razorpay': '<path d="M13 4h12l-9 24H8l4-10.5-5 1Z" fill="#3395FF"/><path d="M15.5 11 25 4l-4.5 12Z" fill="#072654"/>',
};


export const toTech = (names: string[]): Tech[] => names.map((name) => ({ name, logo: logos[name] }));

/** Grouped for the Services page tech grid. */
export const techGroups: { title: string; items: Tech[] }[] = [
  { title: 'Front-end', items: toTech(['React JS', 'Next.js', 'Astro', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'SCSS']) },
  { title: 'Back-end & APIs', items: toTech(['Node.js', 'Express.js', 'PHP', 'Laravel', 'GraphQL']) },
  { title: 'Databases', items: toTech(['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase']) },
  { title: 'Platforms & payments', items: toTech(['WordPress', 'Shopify', 'WooCommerce', 'Razorpay']) },
  { title: 'Design & cloud', items: toTech(['Figma', 'AWS', 'Vercel']) },
];

export const techCount = Object.keys(logos).length;
