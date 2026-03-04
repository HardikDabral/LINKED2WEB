import { Inter } from 'next/font/google' // CSS Fix Trigger

import Script from 'next/script'
import './globals.css'
import ClientLayout from '@/components/layout/ClientLayout'
import AdSense from '@/components/ads/AdSense'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
  fallback: ['system-ui', 'arial'],
})

export const metadata = {
  title: {
    default: 'Fruupy - Free Online Calculators & Utility Tools',
    template: '%s | Fruupy'
  },
  description: 'Fruupy provides accurate free online calculators for BMI, EMI, age, percentage and 100+ other utility tools. Explore with Ramesh our collection of reliable, fast, and free web tools designed for students and professionals.',
  keywords: 'fruupy, explore with ramesh, free online calculators, BMI calculator, EMI calculator, age calculator, percentage calculator, utility tools, web calculator, math tools, financial calculator, unit converter, online tools, free calculator, digital marketing tools, SEO tools',
  authors: [{ name: 'Ramesh Chandra' }, { name: 'Explore with Ramesh' }],
  creator: 'Explore with Ramesh',
  publisher: 'Fruupy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://www.fruupy.com' : 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NODE_ENV === 'production' ? 'https://www.fruupy.com/' : 'http://localhost:3000',
    siteName: 'Fruupy',
    title: 'Fruupy - Free Online Calculators & Utility Tools',
    description: 'Explore Fruupy for a comprehensive collection of free online calculators and utility tools. Get accurate results for BMI, EMI, age, and more with our fast and reliable tools.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fruupy - Free Online Calculators & Utility Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fruupy - Free Online Calculators & Utility Tools',
    description: 'Fruupy provides accurate free online calculators for BMI, EMI, age, and percentage. Our reliable utility tools are designed for speed and precision. 100% free for everyone.',
    images: ['/og-image.jpg'],
    creator: '@fruupy',
    site: '@fruupy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'utility tools',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#B8E3E9' },
    { media: '(prefers-color-scheme: dark)', color: '#0B2E33' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  applicationName: 'Fruupy',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Fruupy',
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  other: {
    'msapplication-TileColor': '#B8E3E9',
    'msapplication-config': '/browserconfig.xml',
  },
}

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Fruupy",
    "description": "Fruupy offers more than 30+ professional free online calculators and utility tools for everyday use. From financial EMI calculations to health BMI tracking, we provide accurate and fast results.",
    "url": process.env.NODE_ENV === 'production' ? "https://www.fruupy.com" : "http://localhost:3000",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250"
    },
    "featureList": [
      "BMI Calculator",
      "EMI Calculator",
      "Age Calculator",
      "Percentage Calculator",
      "QR Code Generator",
      "Language Translator",
      "Meme Generator",
      "Countdown Timer"
    ],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": process.env.NODE_ENV === 'production' ? "https://www.fruupy.com/?search={search_term_string}" : "http://localhost:3000/?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Fruupy",
    "url": process.env.NODE_ENV === 'production' ? "https://www.fruupy.com" : "http://localhost:3000",
    "logo": process.env.NODE_ENV === 'production' ? "https://www.fruupy.com/logo.png" : "http://localhost:3000/logo.png",
    "description": "Fruupy provides a wide range of reliable, free online calculators and utility tools designed to help users with everyday tasks efficiently.",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "handyhelpertoolscalculator@gmail.com",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://twitter.com/handyhelpertools",
      "https://facebook.com/handyhelpertools"
    ]
  }

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Fruupy",
    "url": process.env.NODE_ENV === 'production' ? "https://www.fruupy.com" : "http://localhost:3000",
    "description": "The ultimate destination for accurate, fast, and free online calculators and utility tools for every use case.",
    "publisher": {
      "@type": "Organization",
      "name": "Fruupy"
    }
  }
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7DDK13YTTP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7DDK13YTTP');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
        />
        {/* AdSense Auto Ads - Automatically blocks on low-content pages */}
        <AdSense enableAutoAds={true} />
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
