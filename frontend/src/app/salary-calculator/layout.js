export const metadata = {
  title: 'Salary Calculator - Calculate Take Home Salary | Handy Helper',
  description: 'Calculate your take-home salary after deductions. Free salary calculator with tax deductions and net salary calculations. Salary calculator, take home salary, salary tool, net salary, gross salary, salary after tax, income calculator, pay calculator.',
  keywords: 'salary calculator, take home salary, salary tool, net salary, gross salary, salary after tax, income calculator, pay calculator',
}

export default function SalaryLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Salary Calculator",
    "description": "Free take-home salary calculator",
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

