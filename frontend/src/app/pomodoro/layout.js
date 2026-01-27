export const metadata = {
  title: 'Pomodoro Timer - Productivity Timer | Handy Helper',
  description: 'Boost productivity with Pomodoro technique timer. Free Pomodoro timer with work and break sessions for better focus. Pomodoro timer, pomodoro technique, productivity timer, focus timer, work timer, study timer, pomodoro app, time management.',
  keywords: 'pomodoro timer, pomodoro technique, productivity timer, focus timer, work timer, study timer, pomodoro app, time management',
}

export default function PomodoroLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Pomodoro Timer",
    "description": "Free Pomodoro technique productivity timer",
    "applicationCategory": "ProductivityApplication",
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

