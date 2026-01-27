export const metadata = {
  title: 'Stopwatch - Online Stopwatch Timer | Handy Helper',
  description: 'Track elapsed time with precision using our free online stopwatch. Professional stopwatch timer with lap times and splits. Stopwatch, timer, stopwatch online, lap timer, time tracker, chronometer, stopwatch tool, time measurement.',
  keywords: 'stopwatch, timer, stopwatch online, lap timer, time tracker, chronometer, stopwatch tool, time measurement',
}

export default function StopwatchLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Stopwatch",
    "description": "Free online stopwatch timer",
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

