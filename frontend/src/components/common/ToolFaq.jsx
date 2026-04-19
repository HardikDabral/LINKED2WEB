import { HelpCircle } from 'lucide-react'

export default function ToolFaq({ items, title = 'Frequently Asked Questions' }) {
  if (!items || items.length === 0) return null

  return (
    <section className="mt-16 bg-white/50 backdrop-blur-xl rounded-[40px] p-8 md:p-12 border border-[#0B2E33]/5 shadow-sm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: items.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />

      <h2 className="text-2xl md:text-3xl font-black text-[#0B2E33] mb-8 flex items-center gap-3">
        <HelpCircle size={28} />
        {title}
      </h2>

      <div className="space-y-6">
        {items.map((faq, i) => (
          <div key={i} className="border-b border-[#0B2E33]/10 pb-6 last:border-0">
            <h3 className="text-lg font-bold text-[#0B2E33] mb-2">{faq.q}</h3>
            <p className="text-[#0B2E33]/70 leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
