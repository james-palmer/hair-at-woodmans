/** Public site facts — used for SEO JSON-LD and consistent copy. */
export const SITE = {
  name: 'Hair at Woodmans',
  /** Used in <title> after the brand name */
  titleSuffix: 'Hairdressers in Brentwood, Essex',
  description:
    'Hair at Woodmans is a friendly hairdressing salon on Hanging Hill Lane, Brentwood. Expert cuts, colour, highlights, perms and occasion styling. Call 07771 606009 to book. Open Monday–Saturday.',
  url: 'https://hairatwoodmans.co.uk',
  locale: 'en_GB',
  phoneE164: '+447771606009',
  phoneDisplay: '07771 606009',
  /** Est. year shown in the hero — used in structured data */
  foundingYear: '1984',
  /** Optional: set when you have a verified Place ID */
  googleMapsPlaceUrl:
    'https://maps.google.com/?q=1-3+Hanging+Hill+Lane,+Brentwood,+Essex,+CM13+2DD',
  address: {
    streetAddress: '1–3 Hanging Hill Lane',
    addressLocality: 'Brentwood',
    addressRegion: 'Essex',
    postalCode: 'CM13 2DD',
    addressCountry: 'GB',
  },
  /** Approximate Brentwood centre — replace with precise salon lat/lng if you have them */
  geo: {
    latitude: 51.6209,
    longitude: 0.3056,
  },
  /** Social / JSON-LD preview image (same photo as hero; unique URL for OG caches) */
  ogImagePath: '/og-image.jpg',
} as const;
