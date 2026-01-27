export const metadata = {
  title: 'Color Picker - Free Color Picker Tool | Handy Helper',
  description: 'Pick colors and convert between HEX, RGB, HSL formats. Free online color picker tool with color codes and palette generator. Color picker, color tool, HEX color, RGB color, HSL color, color converter, color palette, color codes.',
  keywords: 'color picker, color tool, HEX color, RGB color, HSL color, color converter, color palette, color codes',
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'),
  alternates: {
    canonical: '/color-picker',
  },
  openGraph: {
    title: 'Color Picker - Free Color Picker Tool | Handy Helper',
    description: 'Pick colors and convert between HEX, RGB, HSL formats. Free online color picker tool with color codes and palette generator.',
    url: '/color-picker',
    siteName: 'Handy Helper Tools',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Color Picker' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Color Picker - Free Color Picker Tool | Handy Helper',
    description: 'Pick colors and convert between HEX, RGB, HSL formats. Free online color picker tool.',
    images: ['/og-image.jpg'],
  },
}

export default function ColorLayout({ children }) {
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Color Picker",
    "description": "Free color picker and converter tool",
    "url": `${baseUrl}/color-picker`,
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
      { "@type": "ListItem", "position": 2, "name": "Color Picker", "item": `${baseUrl}/color-picker` }
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

