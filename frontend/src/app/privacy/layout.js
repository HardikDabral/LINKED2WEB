export const metadata = {
  title: 'Privacy Policy - Handy Helper Tools',
  description: 'Read our Privacy Policy to understand how Handy Helper Tools collects, uses, and protects your personal information when using our free online calculators and utility tools.',
  keywords: 'privacy policy, data protection, privacy, user privacy, data collection, personal information, GDPR, privacy rights',
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'),
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy - Handy Helper Tools',
    description: 'Read our Privacy Policy to understand how Handy Helper Tools collects, uses, and protects your personal information.',
    url: '/privacy',
    siteName: 'Handy Helper Tools',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Privacy Policy - Handy Helper Tools' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - Handy Helper Tools',
    description: 'Read our Privacy Policy to understand how Handy Helper Tools collects, uses, and protects your personal information.',
    images: ['/og-image.jpg'],
  },
}

export default function PrivacyLayout({ children }) {
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'
  
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
      { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": `${baseUrl}/privacy` }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      {children}
    </>
  )
}

