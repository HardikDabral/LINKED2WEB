export const metadata = {
  title: 'EMI Calculator - Free Loan EMI Calculator | Handy Helper',
  description: 'Calculate your loan EMI (Equated Monthly Installment) for home loans, car loans, and personal loans. Free EMI calculator with interest rate, loan amount, and tenure calculations. EMI calculator, loan EMI, home loan calculator, car loan EMI, personal loan calculator, loan calculator, monthly EMI, free EMI calculator.',
  keywords: 'EMI calculator, loan EMI, home loan calculator, car loan EMI, personal loan calculator, EMI calculation, loan calculator, monthly EMI, free EMI calculator, loan interest calculator',
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'),
  alternates: {
    canonical: '/emi-calculator',
  },
  openGraph: {
    title: 'EMI Calculator - Free Loan EMI Calculator | Handy Helper',
    description: 'Calculate your loan EMI for home loans, car loans, and personal loans. Free EMI calculator.',
    url: '/emi-calculator',
    siteName: 'Handy Helper Tools',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EMI Calculator - Free Loan EMI Calculator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EMI Calculator - Free Loan EMI Calculator | Handy Helper',
    description: 'Calculate your loan EMI for home loans, car loans, and personal loans. Free EMI calculator.',
    images: ['/og-image.jpg'],
  },
}

export default function EMILayout({ children }) {
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "EMI Calculator",
    "description": "Free loan EMI calculator for home, car, and personal loans",
    "url": `${baseUrl}/emi-calculator`,
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "EMI Calculator",
        "item": `${baseUrl}/emi-calculator`
      }
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

