export const metadata = {
  title: 'JSON Formatter - Format & Validate JSON | Handy Helper',
  description: 'Format, validate, and beautify JSON data online. Free JSON formatter with syntax highlighting and error detection. JSON formatter, JSON validator, JSON beautifier, format JSON, JSON tool, JSON parser, JSON editor, JSON viewer.',
  keywords: 'JSON formatter, JSON validator, JSON beautifier, format JSON, JSON tool, JSON parser, JSON editor, JSON viewer',
}

export default function JSONLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "JSON Formatter",
    "description": "Free JSON formatter and validator",
    "applicationCategory": "DeveloperApplication",
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

