export const metadata = {
  title: 'Water Intake Calculator - Daily Water Requirement | Handy Helper',
  description: 'Calculate your daily water requirement based on weight, activity level, and climate. Free water intake calculator for optimal hydration. Water intake calculator, daily water, hydration calculator, water requirement, water calculator, hydration tool, daily water intake, water needs.',
  keywords: 'water intake calculator, daily water, hydration calculator, water requirement, water calculator, hydration tool, daily water intake, water needs',
}

export default function WaterLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Water Intake Calculator",
    "description": "Free daily water requirement calculator",
    "applicationCategory": "HealthApplication",
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

