export const SITE = {
  name: 'M & G Security',
  title: 'M & G Security -- Professional Security Services Berks County, PA',
  description:
    'M & G Security - owned and operated by KRE Securities, LLC provides professional security services for events, construction sites, corporate properties and more across Berks County, PA.',
  url:
    (typeof process !== 'undefined' && process.env.SITE_URL) ||
    'https://mandgsecurity.clientsite.agency/',
  lang: 'en',
  logoSrc: 'https://pagesmith-cdn.com/f57c14f2/images/3d957a88-20e5-4612-a102-248b0fcabfa4_compressed_mg-lockup_gold-head_white-text-1536.webp',
  phone: '(610) 562-0971',
  phoneHref: 'tel:+16105620971',
  email: 'jemes@kresecurity.com',
  addressLines: [
    'P.O. Box 6255',
    'Wyomissing, PA 19610',
  ],
  twitterHandle: '@mgsecurity',
  socials: {
    facebook: 'https://www.facebook.com/mgsecurity',
    twitter: '',
    github: '',
    linkedin: '',
  },
} as const;

export type SiteConfig = typeof SITE;
