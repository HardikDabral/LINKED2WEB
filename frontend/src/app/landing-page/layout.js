export const metadata = {
  title: 'Free Online Calculators & Tools - Handy Helper',
  description: 'Free calculators and tools: BMI, EMI, age, percentage, QR generator, language translator, and 30+ more utility tools. Fast, accurate, and completely free.',
  keywords: 'free online calculators, BMI calculator, EMI calculator, age calculator, percentage calculator, QR code generator, language translator, meme generator, countdown timer, utility tools, online tools, free calculators, handy helper tools, calculator tools, productivity tools',
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'),
  alternates: {
    canonical: '/landing-page',
  },
  openGraph: {
    title: 'Free Online Calculators & Tools - Handy Helper',
    description: 'Free calculators and tools: BMI, EMI, age, percentage, QR generator, language translator, and 30+ more utility tools. Fast, accurate, and completely free.',
    url: '/landing-page',
    siteName: 'Handy Helper Tools',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Free Online Calculators & Tools - Handy Helper' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Online Calculators & Tools - Handy Helper',
    description: 'Free calculators and tools: BMI, EMI, age, percentage, QR generator, language translator, and 30+ more utility tools.',
    images: ['/og-image.jpg'],
  },
}

export default function LandingPageLayout({ children }) {
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Handy Helper Tools",
    "url": `${baseUrl}/landing-page`,
    "description": "Free online calculators and utility tools",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/?search={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
      { "@type": "ListItem", "position": 2, "name": "Landing Page", "item": `${baseUrl}/landing-page` }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      {children}
    </>
  )
}

