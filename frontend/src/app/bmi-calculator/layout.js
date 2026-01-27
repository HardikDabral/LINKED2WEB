export const metadata = {
  title: 'BMI Calculator - Free Body Mass Index Calculator | Handy Helper',
  description: 'Calculate your Body Mass Index (BMI) for free. Supports metric and imperial units. Get instant BMI results, weight category, and healthy weight range recommendations. BMI calculator, body mass index, BMI tool, health calculator, weight calculator, BMI metric, BMI imperial, free BMI calculator, BMI chart, healthy weight.',
  keywords: 'BMI calculator, body mass index, BMI tool, health calculator, weight calculator, BMI metric, BMI imperial, free BMI calculator, BMI chart, healthy weight',
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'),
  alternates: {
    canonical: '/bmi-calculator',
  },
  openGraph: {
    title: 'BMI Calculator - Free Body Mass Index Calculator | Handy Helper',
    description: 'Calculate your Body Mass Index (BMI) for free. Supports metric and imperial units.',
    url: '/bmi-calculator',
    siteName: 'Handy Helper Tools',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BMI Calculator - Free Body Mass Index Calculator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BMI Calculator - Free Body Mass Index Calculator | Handy Helper',
    description: 'Calculate your Body Mass Index (BMI) for free. Supports metric and imperial units.',
    images: ['/og-image.jpg'],
  },
}

export default function BMILayout({ children }) {
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "BMI Calculator",
    "description": "Free Body Mass Index calculator supporting metric and imperial units",
    "url": `${baseUrl}/bmi-calculator`,
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Metric BMI calculation",
      "Imperial BMI calculation",
      "Weight category classification",
      "Healthy weight range recommendations"
    ]
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
        "name": "BMI Calculator",
        "item": `${baseUrl}/bmi-calculator`
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

