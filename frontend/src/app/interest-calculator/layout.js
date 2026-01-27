export const metadata = {
  title: 'Interest Calculator - Simple & Compound Interest | Handy Helper',
  description: 'Calculate simple and compound interest for loans and investments. Free interest calculator with principal, rate, and time calculations. Interest calculator, compound interest, simple interest, loan interest, investment calculator, interest rate, interest tool, financial calculator.',
  keywords: 'interest calculator, compound interest, simple interest, loan interest, investment calculator, interest rate, interest tool, financial calculator',
}

export default function InterestLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Interest Calculator",
    "description": "Free simple and compound interest calculator",
    "applicationCategory": "FinanceApplication",
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

