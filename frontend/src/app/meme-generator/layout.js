export const metadata = {
  title: 'Meme Generator - Create Custom Memes | Handy Helper',
  description: 'Create custom memes with your own images and text. Free meme generator tool with templates and customization options. Meme generator, create memes, meme maker, meme tool, custom memes, meme creator, funny memes, meme editor.',
  keywords: 'meme generator, create memes, meme maker, meme tool, custom memes, meme creator, funny memes, meme editor',
}

export default function MemeLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Meme Generator",
    "description": "Free custom meme generator tool",
    "applicationCategory": "EntertainmentApplication",
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

