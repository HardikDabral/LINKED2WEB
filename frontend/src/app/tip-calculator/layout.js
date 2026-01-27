export const metadata = {
  title: 'Tip Calculator - Calculate Tips & Gratuity | Handy Helper',
  description: 'Calculate tips for services easily. Free tip calculator with percentage options and split bill functionality. Tip calculator, gratuity calculator, restaurant tip calculator, service tip tool.',
  keywords: 'tip calculator, gratuity calculator, tip tool, calculate tip, restaurant tip, service tip, tip percentage, tip splitter, free tip calculator, gratuity tool',
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'),
  alternates: {
    canonical: '/tip-calculator',
  },
  openGraph: {
    title: 'Tip Calculator - Calculate Tips & Gratuity | Handy Helper',
    description: 'Calculate tips for services easily. Free tip calculator with percentage options and split bill functionality.',
    url: '/tip-calculator',
    siteName: 'Handy Helper Tools',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Tip Calculator' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tip Calculator - Calculate Tips & Gratuity | Handy Helper',
    description: 'Calculate tips for services easily. Free tip calculator with percentage options.',
    images: ['/og-image.jpg'],
  },
}

export default function TipLayout({ children }) {
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Tip Calculator",
    "description": "Free tip and gratuity calculator",
    "url": `${baseUrl}/tip-calculator`,
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
      { "@type": "ListItem", "position": 2, "name": "Tip Calculator", "item": `${baseUrl}/tip-calculator` }
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

