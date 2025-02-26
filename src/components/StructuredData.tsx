import { Helmet } from 'react-helmet-async';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "רעות עמרני - קוסמטיקה",
    "image": [
      "URL_TO_YOUR_IMAGE"
    ],
    "description": "טיפולי פנים מקצועיים ואסתטיקה מתקדמת",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "YOUR_CITY",
      "addressRegion": "IL",
      "addressCountry": "IL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 31.8903,  // Replace with actual latitude
      "longitude": 34.8199  // Replace with actual longitude
    },
    "url": "YOUR_WEBSITE_URL",
    "telephone": "YOUR_PHONE",
    "priceRange": "₪₪-₪₪₪",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "09:00",
        "closes": "20:00"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}