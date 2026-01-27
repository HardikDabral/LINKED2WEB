export const metadata = {
  title: 'Random Name Picker - Pick Random Names | Handy Helper',
  description: 'Pick random names from a list easily. Free random name picker tool for teams, groups, and decision making. Random name picker, name picker, random selector, name generator, random choice, pick names, random tool, name selector.',
  keywords: 'random name picker, name picker, random selector, name generator, random choice, pick names, random tool, name selector',
}

export default function RandomNameLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Random Name Picker",
    "description": "Free random name picker tool",
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

