export const metadata = {
  title: 'Countdown Timer - Free Online Countdown | Handy Helper',
  description: 'Create countdown timers for events, deadlines, and special moments. Free online countdown timer with customizable alerts and notifications. Countdown timer, timer, countdown, event timer, deadline timer, countdown clock, online timer, free timer.',
  keywords: 'countdown timer, timer, countdown, event timer, deadline timer, countdown clock, online timer, free timer',
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'),
  alternates: {
    canonical: '/countdown-timer',
  },
  openGraph: {
    title: 'Countdown Timer - Free Online Countdown | Handy Helper',
    description: 'Create countdown timers for events, deadlines, and special moments. Free online countdown timer with customizable alerts.',
    url: '/countdown-timer',
    siteName: 'Handy Helper Tools',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Countdown Timer' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Countdown Timer - Free Online Countdown | Handy Helper',
    description: 'Create countdown timers for events, deadlines, and special moments. Free online countdown timer.',
    images: ['/og-image.jpg'],
  },
}

export default function CountdownLayout({ children }) {
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Countdown Timer",
    "description": "Free online countdown timer",
    "url": `${baseUrl}/countdown-timer`,
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
      { "@type": "ListItem", "position": 2, "name": "Countdown Timer", "item": `${baseUrl}/countdown-timer` }
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

