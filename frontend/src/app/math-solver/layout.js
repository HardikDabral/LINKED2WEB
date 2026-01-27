export const metadata = {
  title: 'Math Solver - Solve Equations Online | Handy Helper',
  description: 'Solve arithmetic, linear, and quadratic equations instantly. Free online math solver with step-by-step solutions. Math solver, equation solver, algebra calculator, math calculator, solve equations, quadratic solver, linear equations, math tool.',
  keywords: 'math solver, equation solver, algebra calculator, math calculator, solve equations, quadratic solver, linear equations, math tool',
}

export default function MathLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Math Solver",
    "description": "Free online math equation solver",
    "applicationCategory": "EducationApplication",
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

