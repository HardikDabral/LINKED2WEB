export const metadata = {
  title: 'Blog - SEO, Content & Digital Marketing Tips | Fruupy',
  description: 'Read Fruupy\'s blog for practical SEO tips, content writing guides, and digital marketing strategies in Hindi and English. Learn keyword research, article writing, and how to earn online.',
  keywords: 'fruupy blog, SEO tips Hindi, keyword research kaise kare, SEO article kaise likhe, online paise kaise kamaye, digital marketing blog, content writing guide',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog - SEO, Content & Digital Marketing Tips | Fruupy',
    description: 'Practical SEO tips, content writing guides, and digital marketing strategies.',
    url: '/blog',
    siteName: 'Fruupy',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Fruupy Blog' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - SEO, Content & Digital Marketing Tips | Fruupy',
    description: 'Practical SEO tips, content writing guides, and digital marketing strategies.',
    images: ['/og-image.jpg'],
  },
}

export default function BlogLayout({ children }) {
  return children
}
