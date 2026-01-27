export const metadata = {
  title: 'QR Code Generator - Free QR Code Maker | Handy Helper',
  description: 'Generate QR codes for free. Create QR codes for URLs, text, contact info, and more. Customizable QR code generator with instant download. QR code generator, QR code maker, free QR code, QR code creator, generate QR code, QR code online, QR code tool, QR code scanner.',
  keywords: 'QR code generator, QR code maker, free QR code, QR code creator, generate QR code, QR code online, QR code tool, QR code scanner',
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'),
  alternates: {
    canonical: '/qr-generator',
  },
  openGraph: {
    title: 'QR Code Generator - Free QR Code Maker | Handy Helper',
    description: 'Generate QR codes for free. Create QR codes for URLs, text, contact info, and more. Customizable QR code generator.',
    url: '/qr-generator',
    siteName: 'Handy Helper Tools',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'QR Code Generator' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QR Code Generator - Free QR Code Maker | Handy Helper',
    description: 'Generate QR codes for free. Create QR codes for URLs, text, contact info, and more.',
    images: ['/og-image.jpg'],
  },
}

export default function QRLayout({ children }) {
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "QR Code Generator",
    "description": "Free QR code generator for URLs, text, and contact info",
    "url": `${baseUrl}/qr-generator`,
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
      { "@type": "ListItem", "position": 2, "name": "QR Code Generator", "item": `${baseUrl}/qr-generator` }
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

