export const metadata = {
  title: 'Calorie Calculator - Daily Calorie Needs Calculator | Handy Helper',
  description: 'Calculate your daily calorie needs based on age, gender, weight, height, and activity level. Free calorie calculator for weight loss, maintenance, or gain. Calorie calculator, daily calories, calorie needs, BMR calculator, TDEE calculator, calorie intake, weight loss calculator, calorie counter.',
  keywords: 'calorie calculator, daily calories, calorie needs, BMR calculator, TDEE calculator, calorie intake, weight loss calculator, calorie counter',
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'),
  alternates: {
    canonical: '/calorie-calculator',
  },
  openGraph: {
    title: 'Calorie Calculator - Daily Calorie Needs Calculator | Handy Helper',
    description: 'Calculate your daily calorie needs based on age, gender, weight, height, and activity level. Free calorie calculator.',
    url: '/calorie-calculator',
    siteName: 'Handy Helper Tools',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Calorie Calculator' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calorie Calculator - Daily Calorie Needs Calculator | Handy Helper',
    description: 'Calculate your daily calorie needs based on age, gender, weight, height, and activity level.',
    images: ['/og-image.jpg'],
  },
}

export default function CalorieLayout({ children }) {
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Calorie Calculator",
    "description": "Free daily calorie needs calculator",
    "url": `${baseUrl}/calorie-calculator`,
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
      { "@type": "ListItem", "position": 2, "name": "Calorie Calculator", "item": `${baseUrl}/calorie-calculator` }
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

