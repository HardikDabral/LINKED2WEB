'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FileText, Type, Hash, AlignJustify, Clock, HelpCircle, BookOpen, Lightbulb, Share2 } from 'lucide-react'
import ShareButtons from '@/components/common/ShareButtons'

export default function WordCounter() {
  const [text, setText] = useState('')
  const [stats, setStats] = useState({
    characters: 0,
    charactersNoSpace: 0,
    words: 0,
    sentences: 0,
    paragraphs: 0,
    readingTime: 0
  })

  useEffect(() => {
    const calculateStats = () => {
      const characters = text.length
      const charactersNoSpace = text.replace(/\s/g, '').length
      const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length
      const sentences = text.trim() === '' ? 0 : text.split(/[.!?]+/).filter(Boolean).length
      const paragraphs = text.trim() === '' ? 0 : text.split(/\n\s*\n/).filter(Boolean).length
      const readingTime = Math.ceil(words / 200) // Average reading speed 200 wpm

      setStats({
        characters,
        charactersNoSpace,
        words,
        sentences,
        paragraphs,
        readingTime
      })
    }

    calculateStats()
  }, [text])

  const faqs = [
    {
      q: "Is this word counter free to use?",
      a: "Yes, Fruupy's Word Counter is 100% free with no hidden charges or premium tiers. You can use it as many times as you want without registration."
    },
    {
      q: "Does this tool store my text?",
      a: "Absolutely not. Your privacy is our priority. All calculations are performed in your browser, and your text is never sent to our servers or stored anywhere."
    },
    {
      q: "What is the limit for text length?",
      a: "There is no hard limit. You can count words for short social media posts or long academic essays. However, extremely large texts (millions of words) might slow down your browser."
    },
    {
      q: "How accurate is the reading time estimate?",
      a: "We use an average reading speed of 200 words per minute (WPM), which is the standard for adult readers. Actual reading time may vary based on content complexity."
    }
  ]

  return (
    <main className="min-h-screen pb-20">
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })
        }}
      />

      <div className="max-w-4xl mx-auto px-4 pt-16">
        {/* Header Section */}
        <div className="flex items-center mb-8 bg-white/30 backdrop-blur-md p-6 rounded-3xl border border-[#0B2E33]/10 shadow-sm">
          <div className="p-4 rounded-2xl bg-[#0B2E33] text-white mr-5 shadow-lg">
            <FileText size={32} />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-[#0B2E33]">Free Online Word Counter</h1>
            <p className="text-[#0B2E33]/60 mt-2 font-medium">Accurate character count, word count, and reading time analysis tool.</p>
          </div>
        </div>

        {/* Input Area */}
        <div className="bg-white rounded-3xl p-4 md:p-8 shadow-2xl border border-[#0B2E33]/5 mb-10 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4">
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${text.length > 0 ? 'bg-[#0B2E33] text-white' : 'bg-[#0B2E33]/10 text-[#0B2E33]'}`}>
              {text.length > 0 ? 'Live Counting...' : 'Ready'}
            </span>
          </div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Start typing or paste your content here (articles, essays, blog posts)..."
            className="w-full h-80 md:h-[450px] p-6 text-lg border-none bg-transparent text-[#0B2E33] focus:outline-none placeholder-[#0B2E33]/30 resize-none font-medium"
          />
        </div>

        {/* Real-time Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {[
            { label: 'Words', value: stats.words, icon: Type },
            { label: 'Characters', value: stats.characters, icon: Hash },
            { label: 'Sentences', value: stats.sentences, icon: AlignJustify },
            { label: 'Paragraphs', value: stats.paragraphs, icon: AlignJustify },
            { label: 'Char (No Space)', value: stats.charactersNoSpace, icon: Hash },
            { label: 'Reading Time', value: `${stats.readingTime}m`, icon: Clock },
          ].map((stat, i) => (
            <div key={i} className="bg-white border border-[#0B2E33]/10 rounded-2xl p-4 text-center hover:shadow-lg transition-all">
              <stat.icon size={18} className="mx-auto mb-2 text-[#0B2E33]/40" />
              <p className="text-2xl font-black text-[#0B2E33]">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-wider font-bold text-[#0B2E33]/40">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Social Sharing */}
        <ShareButtons
          title="Check out this free Online Word Counter by Fruupy!"
        />

        {/* Comprehensive SEO Content */}
        <article className="prose prose-slate max-w-none bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-[#0B2E33]/5 mb-16 shadow-xl">
          <div className="mb-10">
            <h2 className="flex items-center gap-3 text-2xl font-black text-[#0B2E33] mb-6">
              <BookOpen className="text-[#0B2E33]" size={24} />
              The Ultimate Guide to Word Counting & Content Optimization
            </h2>
            <p className="text-[#0B2E33]/80 leading-relaxed mb-4">
              In the world of digital marketing, academic writing, and social media, the length of your content matters more than you think. Whether you are aiming for the perfect SEO-optimized blog post, a precise character count for a tweet, or staying within the strict limits of a college essay, <strong>Fruupy's Free Online Word Counter</strong> is designed to give you the exact metrics you need instantly.
            </p>
            <p className="text-[#0B2E33]/80 leading-relaxed mb-4">
              Our tool provides real-time analysis of your text, helping editors, students, and writers maintain consistency and flow. Unlike other basic counters, we analyze words, characters (with and without spaces), sentences, paragraphs, and even provide an estimated reading time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            <div className="bg-[#0B2E33]/5 p-6 rounded-2xl border border-[#0B2E33]/10">
              <h3 className="text-xl font-bold text-[#0B2E33] mb-4 flex items-center gap-2">
                <Lightbulb size={20} className="text-yellow-600" />
                How to Use the Word Counter?
              </h3>
              <ol className="space-y-3 text-sm text-[#0B2E33]/80 font-medium list-decimal pl-4">
                <li>Copy the text you want to analyze from your document or website.</li>
                <li>Paste the text into the white input area above.</li>
                <li>Wait for a fraction of a second—no buttons required!</li>
                <li>View your detailed statistics in the dashboard below the text box.</li>
                <li>Modify your text directly in the box to see stats update live.</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#0B2E33] mb-4">Why Character Count Matters?</h3>
              <p className="text-sm text-[#0B2E33]/70 leading-relaxed">
                Different platforms have specific character limits. For example, <strong>Twitter (X)</strong> allows 280 characters, while <strong>Meta Descriptions</strong> for SEO should ideally be between 150-160 characters. Our tool counts every space and symbol ensuring you never exceed these limits unnecessarily.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-[#0B2E33] mb-4">SEO Benefits of Optimal Word Count</h3>
          <p className="text-sm text-[#0B2E33]/80 leading-relaxed mb-6">
            Search engines like Google don't just look for keywords; they look for comprehensive answers. While there is no "perfect" word count, research shows that top-ranking pages often have between 1,500 and 2,500 words. Using our counter helps you ensure your content is deep enough to provide value while remaining concise enough to keep readers engaged.
          </p>

          {/* FAQ Section */}
          <div className="mt-16 border-t border-[#0B2E33]/10 pt-16">
            <h2 className="flex items-center gap-3 text-2xl font-black text-[#0B2E33] mb-10">
              <HelpCircle className="text-[#0B2E33]" size={24} />
              Frequently Asked Questions (FAQ)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, i) => (
                <div key={i} className="group">
                  <h4 className="font-bold text-[#0B2E33] mb-2 group-hover:text-[#4F7C82] transition-colors">{faq.q}</h4>
                  <p className="text-sm text-[#0B2E33]/70 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Related Tools Section */}
        <div className="bg-white/30 backdrop-blur-xl rounded-3xl p-10 shadow-sm border border-[#0B2E33]/10">
          <h2 className="text-2xl font-black text-[#0B2E33] mb-6">Explore More Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: 'Language Translator', href: '/language-translator', desc: 'Translate 50+ languages' },
              { name: 'JSON Formatter', href: '/json-formatter', desc: 'Beautify your code' },
              { name: 'Base64 Tool', href: '/base64-tool', desc: 'Secure encode/decode' },
              { name: 'BMI Calculator', href: '/bmi-calculator', desc: 'Check your health' },
              { name: 'GPA Calculator', href: '/gpa-calculator', desc: 'Calculate your grades' },
              { name: 'QR Generator', href: '/qr-generator', desc: 'Create custom QR codes' },
            ].map((tool) => (
              <Link
                key={tool.name}
                href={tool.href}
                className="group p-5 rounded-2xl bg-white/50 border border-[#0B2E33]/10 hover:bg-[#0B2E33] hover:text-white transition-all shadow-sm"
              >
                <h3 className="font-bold mb-1">{tool.name}</h3>
                <p className="text-xs opacity-60">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}