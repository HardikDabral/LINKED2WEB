export const metadata = {
  title: 'Percentage Calculator - Calculate Percentages | Handy Helper',
  description: 'Calculate percentages, find percentage of numbers, and percentage change. Free percentage calculator with multiple calculation modes. Percentage calculator, percent calculator, calculate percentage, percentage tool, percent tool, percentage finder, percent converter.',
  keywords: 'percentage calculator, percent calculator, calculate percentage, percentage tool, percent tool, percentage finder, percent converter',
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'),
  alternates: {
    canonical: '/percentage-calculator',
  },
  openGraph: {
    title: 'Percentage Calculator - Calculate Percentages | Handy Helper',
    description: 'Calculate percentages, find percentage of numbers, and percentage change. Free percentage calculator.',
    url: '/percentage-calculator',
    siteName: 'Handy Helper Tools',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Percentage Calculator' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Percentage Calculator - Calculate Percentages | Handy Helper',
    description: 'Calculate percentages, find percentage of numbers, and percentage change. Free percentage calculator.',
    images: ['/og-image.jpg'],
  },
}

export default function PercentageLayout({ children }) {
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Percentage Calculator",
    "description": "Free percentage calculator",
    "url": `${baseUrl}/percentage-calculator`,
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
      { "@type": "ListItem", "position": 2, "name": "Percentage Calculator", "item": `${baseUrl}/percentage-calculator` }
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

