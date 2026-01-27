export const metadata = {
  title: 'Sleep Calculator - Best Sleep & Wake Times | Handy Helper',
  description: 'Find the best times to sleep or wake up based on sleep cycles. Free sleep calculator for optimal rest and wake times. Sleep calculator, sleep cycle, wake up time, bedtime calculator, sleep time, sleep tool, circadian rhythm, sleep schedule.',
  keywords: 'sleep calculator, sleep cycle, wake up time, bedtime calculator, sleep time, sleep tool, circadian rhythm, sleep schedule',
}

export default function SleepLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Sleep Calculator",
    "description": "Free sleep cycle and wake time calculator",
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

