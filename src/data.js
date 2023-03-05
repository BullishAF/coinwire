import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Products',
      links: [
        {
          text: 'Newsroom',
          href: '#',
        },
        {
          text: 'Press Releases',
          href: '#',
        },
        {
          text: 'Research',
          href: '#',
        },
        {
          text: 'Pricing',
          href: '#',
        },
      ],
    },
    {
      text: 'Latest News',
      href: getBlogPermalink(),
    },
  ],
  actions: [
    { type: 'button', text: 'Contact', href: '#' }
  ],
};
  
export const footerData = {
  links: [
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Database', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Careers', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    &copy 2023 🌐 coinwire.us · All rights reserved.
  `,
};
