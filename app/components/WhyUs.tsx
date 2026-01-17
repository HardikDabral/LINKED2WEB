"use client";

import { ChevronRight } from "lucide-react";

export default function WhyUs() {
  const widgets = [
    {
      header: "CHAT WIDGET",
      title: "AI-powered conversations",
      status: "Live",
      description: "Context-aware answers with quick actions, tone control, and guardrails.",
      features: ["Smart suggestions", "Safety + escalation", "No login required"],
      footer: "Async · SEO-safe",
      link: "Learn more",
      accent: "purple",
    },
    {
      header: "SEARCH WIDGET",
      title: "Semantic search",
      status: "Live",
      description: "Website-scoped vector search with fast results, filters, and recency bias.",
      features: ["Filters + facets", "URL-aware ranking", "Structured snippets"],
      footer: "Async · SEO-safe",
      link: "Learn more",
      accent: "blue",
    },
  ];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '32px 32px',
      }}
    >
      {/* Grayish Gradient Shade - Right Side Centered */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[600px] w-[400px] rounded-full pointer-events-none blur-3xl"
        style={{
          background: 'radial-gradient(ellipse at right center, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.01) 50%, transparent 70%)'
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white uppercase tracking-tighter mb-4">
              OUR APPROACH
            </h2>
            <div className="h-16 w-full md:w-[300px] rounded-full bg-gradient-to-r from-zinc-800 to-zinc-900 border border-white/5 overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-100%] animate-shine" />
            </div>
          </div>
          <div className="text-right">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white uppercase tracking-tighter">
              ENSURES
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white uppercase tracking-tighter">
              {'{RESULTS}'}
            </h2>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[600px]">

          {/* Card 1: Analysis (Vertical Left) */}
          <div className="md:row-span-2 rounded-[2rem] border border-white/10 bg-[#0A0A0A] p-8 flex flex-col justify-between group hover:border-white/20 transition-all duration-500">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Detailed Trend Analysis</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                We dive deep into your business goals and market trends. Analyzing the best marketing practices in your niche to propose viral concepts based on data.
              </p>
            </div>
            <div className="mt-8 flex justify-end">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-colors duration-300">
                <div className="w-2 h-2 rounded-full bg-white group-hover:bg-black transition-colors duration-300"></div>
              </div>
            </div>
          </div>

          {/* Card 2: Filming / Dev (Top Middle Left) */}
          <div className="rounded-[2rem] border border-white/10 bg-[#0A0A0A] p-8 flex flex-col justify-between group hover:border-white/20 transition-all duration-500">
            <h3 className="text-xl font-bold text-white mb-2">Development</h3>
            <p className="text-xs text-gray-300">
              We build scalable, clean code using modern frameworks to ensure longevity.
            </p>
          </div>

          {/* Card 3: Audience (Top Middle Right) */}
          <div className="rounded-[2rem] border border-white/10 bg-[#0A0A0A] p-8 flex flex-col justify-between group hover:border-white/20 transition-all duration-500">
            <h3 className="text-xl font-bold text-white mb-2">User Research</h3>
            <p className="text-xs text-gray-300">
              Compiling a full portrait of your target audience to maximize engagement.
            </p>
          </div>

          {/* Card 4: Strategy (Vertical Right) */}
          <div className="md:row-span-2 rounded-[2rem] border border-white/10 bg-[#0A0A0A] p-8 flex flex-col justify-between group hover:border-white/20 transition-all duration-500">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Content Strategy</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                We write compelling scripts and layouts that capture attention from the first second and spark interest in your niche.
              </p>
            </div>
            <div className="mt-8 flex justify-end">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-colors duration-300">
                <div className="w-2 h-2 rounded-full bg-white group-hover:bg-black transition-colors duration-300"></div>
              </div>
            </div>
          </div>

          {/* Card 5: Editing (Wide Middle) */}
          <div className="md:col-span-2 rounded-[2rem] border border-white/10 bg-[#0A0A0A] p-8 flex items-center justify-between group hover:border-white/20 transition-all duration-500">
            <div className="flex-1 pr-4">
              <h3 className="text-xl font-bold text-white mb-1">Pixel-Perfect Design</h3>
            </div>
            <div className="flex-1 border-l border-white/10 pl-6">
              <p className="text-xs text-gray-300">
                Creating dynamic visual hierarchies that reveal your brand's identity clearly.
              </p>
            </div>
          </div>

          {/* Card 6: Promotion (Wide Bottom) */}
          <div className="md:col-span-3 rounded-[2rem] border border-white/10 bg-[#0A0A0A] p-8 flex flex-col md:flex-row items-center justify-between group hover:border-white/20 transition-all duration-500">
            <h3 className="text-xl font-bold text-white mb-2 md:mb-0 md:w-1/3">SEO & Promotion</h3>
            <p className="text-sm text-gray-200 md:w-2/3 md:border-l md:border-white/10 md:pl-8">
              We optimize every aspect of your site to ensure it ranks high and stays relevant, driving consistent traffic for the long term.
            </p>
          </div>

          {/* Card 7: CTA (Bottom Right) */}
          <div className="rounded-[2rem] bg-white p-8 flex items-center justify-center hover:scale-[1.02] transition-transform cursor-pointer relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-zinc-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 flex items-center gap-2">
              <span className="text-sm font-bold text-black uppercase tracking-wider">Discuss Project</span>
              <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
