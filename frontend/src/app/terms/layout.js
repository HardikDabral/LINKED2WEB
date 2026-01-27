export const metadata = {
  title: 'Terms and Conditions - Handy Helper Tools',
  description: 'Read our Terms and Conditions for using Handy Helper Tools. Learn about user rights, responsibilities, and service terms for our free online calculators and utility tools.',
  keywords: 'terms and conditions, terms of service, user agreement, legal terms, service terms, website terms',
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'),
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms and Conditions - Handy Helper Tools',
    description: 'Read our Terms and Conditions for using Handy Helper Tools. Learn about user rights, responsibilities, and service terms.',
    url: '/terms',
    siteName: 'Handy Helper Tools',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Terms and Conditions - Handy Helper Tools' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms and Conditions - Handy Helper Tools',
    description: 'Read our Terms and Conditions for using Handy Helper Tools.',
    images: ['/og-image.jpg'],
  },
}

export default function TermsLayout({ children }) {
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'
  
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
      { "@type": "ListItem", "position": 2, "name": "Terms and Conditions", "item": `${baseUrl}/terms` }
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

