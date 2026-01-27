export const metadata = {
  title: 'Discount Calculator - Calculate Discounts & Savings | Handy Helper',
  description: 'Calculate discounts, sale prices, and savings instantly. Free discount calculator for percentage off, final price, and amount saved. Discount calculator, sale calculator, percentage off, discount price, savings calculator, price calculator, discount tool, sale price.',
  keywords: 'discount calculator, sale calculator, percentage off, discount price, savings calculator, price calculator, discount tool, sale price',
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'),
  alternates: {
    canonical: '/discount-calculator',
  },
  openGraph: {
    title: 'Discount Calculator - Calculate Discounts & Savings | Handy Helper',
    description: 'Calculate discounts, sale prices, and savings instantly. Free discount calculator for percentage off, final price, and amount saved.',
    url: '/discount-calculator',
    siteName: 'Handy Helper Tools',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Discount Calculator' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discount Calculator - Calculate Discounts & Savings | Handy Helper',
    description: 'Calculate discounts, sale prices, and savings instantly. Free discount calculator.',
    images: ['/og-image.jpg'],
  },
}

export default function DiscountLayout({ children }) {
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Discount Calculator",
    "description": "Free discount and savings calculator",
    "url": `${baseUrl}/discount-calculator`,
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
      { "@type": "ListItem", "position": 2, "name": "Discount Calculator", "item": `${baseUrl}/discount-calculator` }
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

