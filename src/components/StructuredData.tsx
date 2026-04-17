import { SITE } from '../config/site';

/** JSON-LD for search and answer engines (Google, Bing, AI overviews). */
export default function StructuredData() {
  const imageUrl = new URL(SITE.ogImagePath, SITE.url).href;

  const hairSalon = {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    '@id': `${SITE.url}/#business`,
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    image: imageUrl,
    telephone: SITE.phoneE164,
    foundingDate: SITE.foundingYear,
    priceRange: '££',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.streetAddress,
      addressLocality: SITE.address.addressLocality,
      addressRegion: SITE.address.addressRegion,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Brentwood',
    },
    hasMap: SITE.googleMapsPlaceUrl,
    employee: {
      '@type': 'Person',
      name: 'Linda Kirby',
      jobTitle: 'Proprietor',
    },
  };

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where is Hair at Woodmans?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${SITE.name} is at ${SITE.address.streetAddress}, ${SITE.address.addressLocality}, ${SITE.address.addressRegion} ${SITE.address.postalCode}, United Kingdom.`,
        },
      },
      {
        '@type': 'Question',
        name: 'How do I book an appointment at Hair at Woodmans?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Call ${SITE.phoneDisplay} to book. The salon does not take online bookings; appointments are arranged by telephone.`,
        },
      },
      {
        '@type': 'Question',
        name: 'What hair services does Hair at Woodmans offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Services include cut and blow dry, colour and tinting, highlights and lowlights, perms and sets, occasion styling, and conditioning treatments. Call to discuss what you need.',
        },
      },
      {
        '@type': 'Question',
        name: 'When is Hair at Woodmans open?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The salon is open Monday to Saturday and closed on Sunday. Hours may vary; call ahead to confirm.',
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(hairSalon)}</script>
      <script type="application/ld+json">{JSON.stringify(faq)}</script>
    </>
  );
}
