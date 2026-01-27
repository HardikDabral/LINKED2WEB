export const metadata = {
  title: {
    default: 'Tools Calculator - Free Online Calculators & Tools',
    template: '%s | Tools Calculator'
  },
  description: 'Free online calculators and tools for everyday calculations. BMI calculator, EMI calculator, age calculator, percentage calculator, and many more useful tools. Fast, accurate, and completely free.',
  keywords: [
    'calculator',
    'online tools',
    'free calculator',
    'BMI calculator',
    'EMI calculator',
    'age calculator',
    'percentage calculator',
    'math tools',
    'financial calculator',
    'unit converter',
    'utility tools',
    'web calculator'
  ],
  authors: [{ name: 'Tools Calculator Team' }],
  creator: 'Tools Calculator',
  publisher: 'Tools Calculator',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://toolscalculator.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://toolscalculator.com',
    siteName: 'Tools Calculator',
    title: 'Tools Calculator - Free Online Calculators & Tools',
    description: 'Free online calculators and tools for everyday calculations. BMI calculator, EMI calculator, age calculator, percentage calculator, and many more useful tools.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tools Calculator - Free Online Calculators & Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tools Calculator - Free Online Calculators & Tools',
    description: 'Free online calculators and tools for everyday calculations. Fast, accurate, and completely free.',
    images: ['/og-image.jpg'],
    creator: '@toolscalculator',
    site: '@toolscalculator',
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
  applicationName: 'Tools Calculator',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Tools Calculator',
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
 return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="New Delhi, India" />
        <meta name="geo.position" content="28.6139;77.2090" />
        <meta name="ICBM" content="28.6139, 77.2090" />
        <meta name="DC.title" content="Tools Calculator" />
        <meta name="DC.creator" content="Tools Calculator Team" />
        <meta name="DC.subject" content="Online Calculators, Utility Tools" />
        <meta name="DC.description" content="Free online calculators and tools for everyday calculations" />
        <meta name="DC.publisher" content="Tools Calculator" />
        <meta name="DC.contributor" content="Tools Calculator Team" />
        <meta name="DC.date" content="2024" />
        <meta name="DC.type" content="Service" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.identifier" content="https://toolscalculator.com" />
        <meta name="DC.language" content="en" />
        <meta name="DC.coverage" content="Worldwide" />
        <meta name="DC.rights" content="Copyright 2024 Tools Calculator" />
      </head>
      <body>{children}</body>
    </html>
  )
}
