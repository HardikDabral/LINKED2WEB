export const metadata = {
  title: 'Decision Maker - Random Choice Picker | Handy Helper',
  description: 'Make decisions easily with our random choice picker. Flip a coin, pick random options, or use our decision maker tool for quick choices. Decision maker, random picker, coin flip, random choice, decision tool, random selector, choice picker, decision helper.',
  keywords: 'decision maker, random picker, coin flip, random choice, decision tool, random selector, choice picker, decision helper',
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'),
  alternates: {
    canonical: '/decision-maker',
  },
  openGraph: {
    title: 'Decision Maker - Random Choice Picker | Handy Helper',
    description: 'Make decisions easily with our random choice picker. Flip a coin, pick random options, or use our decision maker tool.',
    url: '/decision-maker',
    siteName: 'Handy Helper Tools',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Decision Maker' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Decision Maker - Random Choice Picker | Handy Helper',
    description: 'Make decisions easily with our random choice picker. Flip a coin, pick random options.',
    images: ['/og-image.jpg'],
  },
}

export default function DecisionLayout({ children }) {
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Decision Maker",
    "description": "Free random choice picker and decision tool",
    "url": `${baseUrl}/decision-maker`,
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
      { "@type": "ListItem", "position": 2, "name": "Decision Maker", "item": `${baseUrl}/decision-maker` }
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

