import { business } from '@/data/business';

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    name: business.name,
    telephone: business.phoneDisplay,
    url: business.website,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3526 W Liberty Rd, Suite 300',
      addressLocality: 'Ann Arbor',
      addressRegion: 'MI',
      postalCode: '48103',
      addressCountry: 'US',
    },
    areaServed: [
      'Ann Arbor, MI',
      'Dexter, MI',
      'Saline, MI',
      'Chelsea, MI',
      'Ypsilanti, MI',
      'Pittsfield Charter Township, MI',
      'Scio Township, MI',
      'Canton, MI',
      'Plymouth, MI',
      'Belleville, MI',
    ],
    hasMap: business.mapsLink,
  };
}

export function serviceJsonLd(serviceName: string, locationName: string, canonicalUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    areaServed: {
      '@type': 'City',
      name: locationName,
    },
    provider: {
      '@type': 'HVACBusiness',
      name: business.name,
      telephone: business.phoneDisplay,
      url: business.website,
    },
    url: canonicalUrl,
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
