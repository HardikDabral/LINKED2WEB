export const metadata = {
  title: 'GPA Calculator - Grade Point Average Calculator | Handy Helper',
  description: 'Calculate your GPA (Grade Point Average) easily. Free GPA calculator for students with weighted and unweighted GPA calculations. GPA calculator, grade point average, GPA tool, GPA converter, calculate GPA, student GPA, academic calculator, grade calculator.',
  keywords: 'GPA calculator, grade point average, GPA tool, GPA converter, calculate GPA, student GPA, academic calculator, grade calculator',
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'),
  alternates: {
    canonical: '/gpa-calculator',
  },
  openGraph: {
    title: 'GPA Calculator - Grade Point Average Calculator | Handy Helper',
    description: 'Calculate your GPA (Grade Point Average) easily. Free GPA calculator for students with weighted and unweighted GPA calculations.',
    url: '/gpa-calculator',
    siteName: 'Handy Helper Tools',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'GPA Calculator' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GPA Calculator - Grade Point Average Calculator | Handy Helper',
    description: 'Calculate your GPA (Grade Point Average) easily. Free GPA calculator for students.',
    images: ['/og-image.jpg'],
  },
}

export default function GPALayout({ children }) {
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "GPA Calculator",
    "description": "Free Grade Point Average calculator",
    "url": `${baseUrl}/gpa-calculator`,
    "applicationCategory": "EducationApplication",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
      { "@type": "ListItem", "position": 2, "name": "GPA Calculator", "item": `${baseUrl}/gpa-calculator` }
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

