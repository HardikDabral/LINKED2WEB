export const metadata = {
  title: 'WiFi Speed Test - Test Internet Speed | Handy Helper',
  description: 'Test your internet connection speed instantly. Free WiFi speed test tool to check download, upload speeds, and ping. WiFi speed test, internet speed test, speed test, network speed, bandwidth test, connection speed, speed checker, internet test.',
  keywords: 'wifi speed test, internet speed test, speed test, network speed, bandwidth test, connection speed, speed checker, internet test',
}

export default function WiFiLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "WiFi Speed Test",
    "description": "Free internet speed test tool",
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

