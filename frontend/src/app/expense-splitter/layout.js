export const metadata = {
  title: 'Expense Splitter - Split Bills & Expenses | Handy Helper',
  description: 'Split bills and expenses among friends easily. Free expense splitter calculator for restaurants, trips, and shared costs. Expense splitter, bill splitter, split bills, expense calculator, bill calculator, cost splitter, shared expenses, split cost.',
  keywords: 'expense splitter, bill splitter, split bills, expense calculator, bill calculator, cost splitter, shared expenses, split cost',
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'),
  alternates: {
    canonical: '/expense-splitter',
  },
  openGraph: {
    title: 'Expense Splitter - Split Bills & Expenses | Handy Helper',
    description: 'Split bills and expenses among friends easily. Free expense splitter calculator for restaurants, trips, and shared costs.',
    url: '/expense-splitter',
    siteName: 'Handy Helper Tools',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Expense Splitter' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expense Splitter - Split Bills & Expenses | Handy Helper',
    description: 'Split bills and expenses among friends easily. Free expense splitter calculator.',
    images: ['/og-image.jpg'],
  },
}

export default function ExpenseLayout({ children }) {
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://handy-helper.vercel.app' : 'http://localhost:3000'
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Expense Splitter",
    "description": "Free bill and expense splitter calculator",
    "url": `${baseUrl}/expense-splitter`,
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
      { "@type": "ListItem", "position": 2, "name": "Expense Splitter", "item": `${baseUrl}/expense-splitter` }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      {children}
    </>
  )
}

