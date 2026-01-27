export const metadata = {
  title: 'GST Calculator - Calculate GST Amount & Price | Handy Helper',
  description: 'Calculate GST (Goods and Services Tax) amounts and total prices. Free GST calculator for different tax rates with accurate calculations. GST calculator, GST tool, tax calculator, GST amount, GST price, tax calculator, GST rate, goods and services tax.',
  keywords: 'GST calculator, GST tool, tax calculator, GST amount, GST price, tax calculator, GST rate, goods and services tax',
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'),
  alternates: {
    canonical: '/gst-calculator',
  },
  openGraph: {
    title: 'GST Calculator - Calculate GST Amount & Price | Handy Helper',
    description: 'Calculate GST (Goods and Services Tax) amounts and total prices. Free GST calculator for different tax rates with accurate calculations.',
    url: '/gst-calculator',
    siteName: 'Handy Helper Tools',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'GST Calculator' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GST Calculator - Calculate GST Amount & Price | Handy Helper',
    description: 'Calculate GST (Goods and Services Tax) amounts and total prices. Free GST calculator.',
    images: ['/og-image.jpg'],
  },
}

export default function GSTLayout({ children }) {
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "GST Calculator",
    "description": "Free GST tax calculator",
    "url": `${baseUrl}/gst-calculator`,
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
      { "@type": "ListItem", "position": 2, "name": "GST Calculator", "item": `${baseUrl}/gst-calculator` }
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

