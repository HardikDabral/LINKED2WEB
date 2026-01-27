export const metadata = {
  title: 'Language Translator - Free Online Translation Tool | Handy Helper',
  description: 'Translate text between 100+ languages instantly. Free online language translator supporting multiple languages with accurate translations. Language translator, online translator, free translator, translate text, multilingual translator, language converter, text translator, translation tool.',
  keywords: 'language translator, online translator, free translator, translate text, multilingual translator, language converter, text translator, translation tool',
}

export default function TranslatorLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Language Translator",
    "description": "Free online language translator supporting 100+ languages",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      {children}
    </>
  )
}

