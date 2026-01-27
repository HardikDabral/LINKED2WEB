export const metadata = {
  title: 'Base64 Encoder/Decoder - Free Base64 Tool | Handy Helper',
  description: 'Encode and decode Base64 strings for free. Convert text to Base64 and Base64 to text instantly. Free online Base64 encoder and decoder tool. Base64 encoder, base64 decoder, base64 converter, base64 tool, encode base64, decode base64, base64 online, base64 string.',
  keywords: 'base64 encoder, base64 decoder, base64 converter, base64 tool, encode base64, decode base64, base64 online, base64 string',
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'),
  alternates: {
    canonical: '/base64-tool',
  },
  openGraph: {
    title: 'Base64 Encoder/Decoder - Free Base64 Tool | Handy Helper',
    description: 'Encode and decode Base64 strings for free. Convert text to Base64 and Base64 to text instantly.',
    url: '/base64-tool',
    siteName: 'Handy Helper Tools',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Base64 Tool' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Base64 Encoder/Decoder - Free Base64 Tool | Handy Helper',
    description: 'Encode and decode Base64 strings for free. Convert text to Base64 and Base64 to text instantly.',
    images: ['/og-image.jpg'],
  },
}

export default function Base64Layout({ children }) {
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Base64 Encoder/Decoder",
    "description": "Free Base64 encoder and decoder tool",
    "url": `${baseUrl}/base64-tool`,
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
      { "@type": "ListItem", "position": 2, "name": "Base64 Tool", "item": `${baseUrl}/base64-tool` }
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

