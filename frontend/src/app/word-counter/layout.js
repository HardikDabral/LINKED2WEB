export const metadata = {
  title: 'Word Counter - Count Words & Characters | Handy Helper',
  description: 'Count words, characters, sentences, and paragraphs in your text. Free word counter tool with detailed statistics. Word counter, character counter, word count, text counter, word tool, character count, word analyzer, text analyzer.',
  keywords: 'word counter, character counter, word count, text counter, word tool, character count, word analyzer, text analyzer',
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'),
  alternates: {
    canonical: '/word-counter',
  },
  openGraph: {
    title: 'Word Counter - Count Words & Characters | Handy Helper',
    description: 'Count words, characters, sentences, and paragraphs in your text. Free word counter tool with detailed statistics.',
    url: '/word-counter',
    siteName: 'Handy Helper Tools',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Word Counter' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Word Counter - Count Words & Characters | Handy Helper',
    description: 'Count words, characters, sentences, and paragraphs in your text. Free word counter tool.',
    images: ['/og-image.jpg'],
  },
}

export default function WordCounterLayout({ children }) {
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Word Counter",
    "description": "Free word and character counter tool",
    "url": `${baseUrl}/word-counter`,
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
      { "@type": "ListItem", "position": 2, "name": "Word Counter", "item": `${baseUrl}/word-counter` }
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

