export const metadata = {
  title: 'Day Counter - Calculate Days Between Dates | Fruupy',
  description: 'Count the exact number of days between any two dates. Free day counter calculator for dates, events, and deadlines. Day counter, days between dates, date calculator, day calculator, count days, date difference, days calculator, calendar calculator.',
  keywords: 'fruupy, day counter, days between dates, date calculator, day calculator, count days, date difference, days calculator, calendar calculator',
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://www.fruupy.com' : 'http://localhost:3000'),
  alternates: {
    canonical: '/tools/day-counter',
  },
  openGraph: {
    title: 'Day Counter - Calculate Days Between Dates | Fruupy',
    description: 'Count the exact number of days between any two dates. Free day counter calculator for dates, events, and deadlines.',
    url: '/tools/day-counter',
    siteName: 'Fruupy',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Day Counter' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Day Counter - Calculate Days Between Dates | Fruupy',
    description: 'Count the exact number of days between any two dates. Free day counter calculator.',
    images: ['/og-image.jpg'],
  },
}

export default function DayCounterLayout({ children }) {
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://www.fruupy.com' : 'http://localhost:3000'
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Day Counter",
    "description": "Free day counter calculator for dates",
    "url": `${baseUrl}/tools/day-counter`,
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
      { "@type": "ListItem", "position": 2, "name": "Day Counter", "item": `${baseUrl}/tools/day-counter` }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      {children}
    </>
  )
}

