import Link from 'next/link';
import { BookOpen, Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';

const blogs = [
    {
        slug: 'keyword-research-kaise-kare',
        title: 'Keyword Research Kaise Kare: Full Guide for Beginners',
        excerpt: 'Seekhiye kaise keywords research karein aur apni website ya blog ko Google ke first page par rank karayein.',
        date: 'March 4, 2026',
        readTime: '8 min read',
        category: 'SEO',
        image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c1d1?w=800&auto=format&fit=crop&q=60',
    },
    {
        slug: 'seo-friendly-article-kaise-likhe',
        title: 'SEO Friendly Article Kaise Likhe: 10 Pro Tips',
        excerpt: 'Agar aap chahte hain ki aapka article rank kare, toh follow karein hamari yeh step-by-step SEO writing guide.',
        date: 'March 2, 2026',
        readTime: '6 min read',
        category: 'Content Writing',
        image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=60',
    },
    {
        slug: 'free-online-tools-se-paise-kaise-kamaye',
        title: 'Free Online Tools Se Paise Kaise Kamaye (2026)',
        excerpt: 'Kya aapko pata hai aap Fruupy jaise tools use karke freelancing se acche paise kama sakte hain? Jaaniye kaise.',
        date: 'February 28, 2026',
        readTime: '10 min read',
        category: 'Make Money',
        image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&auto=format&fit=crop&q=60',
    }
];

export const metadata = {
    title: 'Blog - SEO Tips, Marketing & Digital Growth | Fruupy',
    description: 'Learn latest SEO strategies, digital marketing tips, and how to optimize your content with Explore with Ramesh on Fruupy Blog.',
};

export default function BlogPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B2E33]/5 border border-[#0B2E33]/10 text-[#0B2E33] text-xs font-semibold mb-6">
                        <TrendingUp size={14} />
                        <span>Latest Insights & Guides</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-[#0B2E33] mb-6">
                        Fruupy Blog: <span className="text-[#4F7C82]">Content & SEO</span> mastery
                    </h1>
                    <p className="max-w-2xl mx-auto text-[#0B2E33]/70 text-lg leading-relaxed">
                        Expert articles by Ramesh on how to grow your digital presence using the right tools and strategies.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {blogs.map((blog) => (
                        <article key={blog.slug} className="group bg-white rounded-3xl border border-[#0B2E33]/10 overflow-hidden hover:shadow-2xl transition-all duration-500">
                            <div className="aspect-video overflow-hidden relative">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0B2E33] text-[10px] font-bold uppercase tracking-wider">
                                        {blog.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-4 text-xs text-[#0B2E33]/50 mb-4 font-bold">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        <span>{blog.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock size={14} />
                                        <span>{blog.readTime}</span>
                                    </div>
                                </div>
                                <h2 className="text-xl font-bold text-[#0B2E33] mb-4 group-hover:text-[#4F7C82] transition-colors leading-tight">
                                    {blog.title}
                                </h2>
                                <p className="text-sm text-[#0B2E33]/60 mb-6 leading-relaxed line-clamp-3">
                                    {blog.excerpt}
                                </p>
                                <Link
                                    href={`/blog/${blog.slug}`}
                                    className="inline-flex items-center gap-2 text-[#0B2E33] font-black text-sm group/btn"
                                >
                                    Read Full Article
                                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Newsletter / CTA */}
                <div className="bg-[#0B2E33] rounded-[40px] p-10 md:p-20 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Don't Miss Any Update</h2>
                        <p className="text-[#B8E3E9]/70 text-lg mb-10 max-w-xl mx-auto">
                            Subscribe to our newsletter and get the latest SEO tips and tool updates delivered directly to your inbox.
                        </p>
                        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#B8E3E9] transition-all"
                                required
                            />
                            <button className="bg-[#B8E3E9] text-[#0B2E33] px-8 py-4 rounded-2xl font-black hover:scale-105 active:scale-95 transition-all shadow-xl">
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* Abstract shapes */}
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#B8E3E9]/10 rounded-full blur-3xl"></div>
                </div>
            </div>
        </main>
    );
}
