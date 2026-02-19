import { useEffect } from 'react';

const SEO_TITLE = 'Terra Sushi Verona Menu | Sushi, Poké, Recensioni e Delivery Borgo Roma';
const SEO_DESCRIPTION =
  'Terra Sushi Verona: menu sushi e poké, opzioni senza glutine, recensioni clienti e consegna a domicilio in zona Borgo Roma.';
const SEO_KEYWORDS =
  'terra sushi menu, terra sushi verona menu, terra sushi borgo roma, terra sushi recensioni, sushi verona, poke verona';

function upsertMetaByName(name, content) {
  let element = document.head.querySelector(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('name', name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function upsertMetaByProperty(property, content) {
  let element = document.head.querySelector(`meta[property="${property}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('property', property);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function upsertCanonical(href) {
  let element = document.head.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

function upsertJsonLd(id, payload) {
  let element = document.head.querySelector(`script[data-seo-id="${id}"]`);
  if (!element) {
    element = document.createElement('script');
    element.type = 'application/ld+json';
    element.setAttribute('data-seo-id', id);
    document.head.appendChild(element);
  }
  element.textContent = JSON.stringify(payload);
}

export default function SeoHead({ mapsLink }) {
  useEffect(() => {
    const canonicalUrl = window.location.href.split('#')[0];
    const origin = window.location.origin;
    const imageUrl = `${origin}${import.meta.env.BASE_URL}hero.svg`;

    document.title = SEO_TITLE;
    upsertMetaByName('description', SEO_DESCRIPTION);
    upsertMetaByName('keywords', SEO_KEYWORDS);
    upsertMetaByName('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    upsertCanonical(canonicalUrl);

    upsertMetaByProperty('og:type', 'website');
    upsertMetaByProperty('og:locale', 'it_IT');
    upsertMetaByProperty('og:site_name', 'Terra Sushi Verona');
    upsertMetaByProperty('og:title', SEO_TITLE);
    upsertMetaByProperty('og:description', SEO_DESCRIPTION);
    upsertMetaByProperty('og:url', canonicalUrl);
    upsertMetaByProperty('og:image', imageUrl);

    upsertMetaByName('twitter:card', 'summary_large_image');
    upsertMetaByName('twitter:title', SEO_TITLE);
    upsertMetaByName('twitter:description', SEO_DESCRIPTION);
    upsertMetaByName('twitter:image', imageUrl);

    upsertJsonLd('restaurant', {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Restaurant',
          '@id': `${canonicalUrl}#restaurant`,
          name: 'Terra Sushi Verona',
          url: canonicalUrl,
          image: [imageUrl],
          servesCuisine: ['Japanese', 'Poke', 'Chinese'],
          areaServed: ['Verona', 'Borgo Roma'],
          priceRange: '€€',
          telephone: '+39 045 611 5166',
          hasMap: mapsLink,
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Via Monfalcone 2',
            postalCode: '37135',
            addressLocality: 'Verona',
            addressRegion: 'VR',
            addressCountry: 'IT'
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              opens: '11:30',
              closes: '15:00'
            },
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              opens: '18:30',
              closes: '23:00'
            }
          ]
        },
        {
          '@type': 'FAQPage',
          '@id': `${canonicalUrl}#faq`,
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Dove trovo Terra Sushi menu?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Puoi richiedere il menu Terra Sushi direttamente da questa pagina tramite telefono o WhatsApp.'
              }
            },
            {
              '@type': 'Question',
              name: 'Terra Sushi Verona menu è disponibile online?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sì, il menu Terra Sushi Verona viene condiviso tramite canali diretti e aggiornato in base alla disponibilità.'
              }
            },
            {
              '@type': 'Question',
              name: 'Terra Sushi è in zona Borgo Roma?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Terra Sushi serve la zona di Verona e Borgo Roma, con opzioni in sala, take away e consegna.'
              }
            },
            {
              '@type': 'Question',
              name: 'Dove posso leggere le recensioni Terra Sushi?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Nella sezione recensioni di questa landing trovi opinioni reali di clienti su qualità, servizio e poké.'
              }
            }
          ]
        },
        {
          '@type': 'WebSite',
          '@id': `${canonicalUrl}#website`,
          url: canonicalUrl,
          name: 'Terra Sushi Verona'
        }
      ]
    });
  }, [mapsLink]);

  return null;
}
