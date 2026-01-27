export const metadata = {
  title: 'Age Calculator - Calculate Your Exact Age | Handy Helper',
  description: 'Calculate your exact age in years, months, days, hours, and minutes. Free age calculator from date of birth. Find your age in different units instantly. Age calculator, calculate age, date of birth calculator, age in days, age in months, how old am I, birthday calculator, age finder, free age calculator.',
  keywords: 'age calculator, calculate age, date of birth calculator, age in days, age in months, how old am I, birthday calculator, age finder, free age calculator',
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'),
  alternates: {
    canonical: '/age-calculator',
  },
  openGraph: {
    title: 'Age Calculator - Calculate Your Exact Age | Handy Helper',
    description: 'Calculate your exact age in years, months, days, hours, and minutes. Free age calculator from date of birth.',
    url: '/age-calculator',
    siteName: 'Handy Helper Tools',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Age Calculator' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Age Calculator - Calculate Your Exact Age | Handy Helper',
    description: 'Calculate your exact age in years, months, days, hours, and minutes. Free age calculator.',
    images: ['/og-image.jpg'],
  },
}

export default function AgeLayout({ children }) {
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Age Calculator",
    "description": "Free age calculator from date of birth",
    "url": `${baseUrl}/age-calculator`,
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
      { "@type": "ListItem", "position": 2, "name": "Age Calculator", "item": `${baseUrl}/age-calculator` }
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

