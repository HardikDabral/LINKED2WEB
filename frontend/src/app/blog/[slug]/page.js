import { notFound } from 'next/navigation'

const blogs = [
  {
    slug: 'keyword-research-kaise-kare',
    title: 'Keyword Research Kaise Kare: Full Guide for Beginners',
    excerpt:
      'Seekhiye kaise keywords research karein aur apni website ya blog ko Google ke first page par rank karayein.',
    date: 'March 4, 2026',
    category: 'SEO',
    content: [
      'Keyword research ka simple matlab hai yeh samajhna ki log Google par kya search kar rahe hain. Jab aap unhi topics par content banate ho jinko audience already dhoond rahi hai, ranking ke chances naturally improve hote hain.',
      'Shuruaat broad topic se karo, fir usse related long-tail keywords nikaalo. Example: "SEO" ke bajaye "SEO friendly article kaise likhe" jaisa intent-based keyword beginner websites ke liye better hota hai.',
      'Keyword choose karte waqt teen cheezein dekho: search intent, competition, aur practical value. Sirf volume dekhkar keyword pick karna common mistake hai.',
      'Jab ek keyword shortlist ho jaye, uske aas-paas supporting sections banao. Isse article topical depth dikhata hai aur Google ko samajh aata hai ki content useful hai.',
      'Akhri tip: har article ke liye ek primary keyword rakho aur 5-10 related secondary phrases naturally include karo. Overstuffing kabhi mat karo.'
    ],
  },
  {
    slug: 'seo-friendly-article-kaise-likhe',
    title: 'SEO Friendly Article Kaise Likhe: 10 Pro Tips',
    excerpt:
      'Agar aap chahte hain ki aapka article rank kare, toh follow karein hamari yeh step-by-step SEO writing guide.',
    date: 'March 2, 2026',
    category: 'Content Writing',
    content: [
      'SEO writing ka first rule hai clarity. User page par aaya kyun hai, uska answer first few lines me milna chahiye. Long intros se bounce rate badh sakta hai.',
      'H1, H2 aur H3 hierarchy clean rakho. Har section ka ek clear objective ho aur text scan-friendly ho. Short paragraphs aur bullet points readability improve karte hain.',
      'Internal linking smartly use karo. Relevant tool pages aur related guides par links dene se crawl path bhi improve hota hai aur users site par zyada time spend karte hain.',
      'Images add karte waqt descriptive alt text likho. Yeh accessibility ke saath image discovery me bhi help karta hai.',
      'Publishing ke baad article ko update karna equally important hai. Fresh examples, latest year mention, aur outdated sections remove karne se ranking stability better hoti hai.'
    ],
  },
  {
    slug: 'free-online-tools-se-paise-kaise-kamaye',
    title: 'Free Online Tools Se Paise Kaise Kamaye (2026)',
    excerpt:
      'Kya aapko pata hai aap Fruupy jaise tools use karke freelancing se acche paise kama sakte hain? Jaaniye kaise.',
    date: 'February 28, 2026',
    category: 'Make Money',
    content: [
      'Free online tools sirf personal use ke liye nahi hote, yeh client services ka base bhi ban sakte hain. Aap quick deliverables bana sakte ho without heavy software investment.',
      'Example: content writers ke liye word counter, marketers ke liye percentage tools, aur students/professionals ke liye calculators ka combination ek service stack ban sakta hai.',
      'Aap Fiverr, Upwork, ya direct LinkedIn outreach se micro-services sell kar sakte ho, jahan fast turnaround important hota hai.',
      'Income grow karne ka best tarika hai process standardize karna. Same tool workflows ko templates me convert karo, phir quality consistent rahegi.',
      'Long-term growth ke liye apna personal brand banao: mini case studies publish karo, before/after results share karo, aur trust signals collect karo.'
    ],
  },
]

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }))
}

export async function generateMetadata({ params }) {
  const blog = blogs.find((item) => item.slug === params.slug)

  if (!blog) {
    return {}
  }

  return {
    title: `${blog.title} | Fruupy Blog`,
    description: blog.excerpt,
    alternates: {
      canonical: `/blog/${blog.slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: `/blog/${blog.slug}`,
      type: 'article',
    },
  }
}

export default function BlogPostPage({ params }) {
  const blog = blogs.find((item) => item.slug === params.slug)

  if (!blog) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-24 pb-20 px-4">
      <article className="max-w-3xl mx-auto bg-white rounded-3xl border border-[#0B2E33]/10 p-8 md:p-12">
        <p className="text-xs font-bold uppercase tracking-wide text-[#4F7C82] mb-4">{blog.category}</p>
        <h1 className="text-3xl md:text-4xl font-black text-[#0B2E33] leading-tight mb-4">{blog.title}</h1>
        <p className="text-sm text-[#0B2E33]/60 mb-8">{blog.date}</p>
        <p className="text-lg text-[#0B2E33]/80 leading-relaxed mb-8">{blog.excerpt}</p>
        <div className="space-y-5 text-[#0B2E33]/90 leading-relaxed">
          {blog.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  )
}
