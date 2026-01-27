export const metadata = {
  title: 'Image Resizer - Resize Images Online | Handy Helper',
  description: 'Resize and optimize images online for free. Free image resizer tool with multiple format support and quality control. Image resizer, resize image, image optimizer, photo resizer, image tool, resize photos, image compressor, photo editor.',
  keywords: 'image resizer, resize image, image optimizer, photo resizer, image tool, resize photos, image compressor, photo editor',
}

export default function ImageResizerLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Image Resizer",
    "description": "Free online image resizer and optimizer",
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

