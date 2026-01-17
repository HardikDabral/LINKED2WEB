"use client";

import { useState } from 'react';
import { ArrowUpRight, Search, Zap, BarChart3, Fingerprint, MousePointerClick } from 'lucide-react';

export default function About() {
  const [activeFeature, setActiveFeature] = useState(0);
  const features = [
    {
      title: "Page-aware",
      description: "Answers stay in-context for every URL.",
      detail: "Ships async · crawler-safe",
      status: "Live",
    },
    {
      title: "Performance-first",
      description: "Async embed, sub-30KB start, zero CLS.",
      detail: "Ships async · crawler-safe",
      status: "Live",
    },
    {
      title: "Lead-ready",
      description: "Intent-based capture with frictionless prompts.",
      detail: "Ships async · crawler-safe",
      status: "Live",
    },
  ];

  const metrics = [
    {
      title: "Improve Content Discovery",
      description: "Help visitors find what they need faster with AI-powered search that understands intent.",
      metric: "3x faster discovery",
    },
    {
      title: "Reduce Bounce Rate",
      description: "Keep visitors on your site longer by helping them find relevant content quickly.",
      metric: "45% lower bounce",
    },
    {
      title: "Increase Conversions",
      description: "Guide users to the right pages and products, leading to higher conversion rates.",
      metric: "32% more conversions",
    },
    {
      title: "Better User Experience",
      description: "Modern, intuitive search interface that users expect from contemporary websites.",
      metric: "5-star UX",
    },
  ];

  return (
    <section
      className="relative z-10 min-h-screen w-full overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '32px 32px',
      }}
    >
      {/* Grayish Gradient Shade - Left Side Centered */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[600px] w-[400px] rounded-full pointer-events-none blur-3xl"
        style={{
          background: 'radial-gradient(ellipse at left center, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.01) 50%, transparent 70%)'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-12">
        {/* Features Expanding Cards Section (Glassy Monochrome) */}
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-stretch lg:h-[380px]">

          {/* Section Title Block */}
          <div className="flex-shrink-0 lg:w-1/3 flex flex-col justify-between pr-4">
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tighter text-white sm:text-3xl md:text-4xl lg:text-5xl mb-4">
                MY SERVICES
              </h2>
              <p className="text-xs md:text-sm text-zinc-300 max-w-[260px] leading-relaxed">
                I offer a full range of website development services, including corporate sites, landing pages, e-commerce platforms, and portfolios.
              </p>
            </div>

            {/* Tech Stack Subtle Display (Desktop) */}
            <div className="hidden lg:block mt-6">
              <p className="text-[10px] font-mono text-zinc-600 mb-3 uppercase tracking-widest">Powered By</p>
              <div className="flex flex-wrap gap-1.5">
                {["Next.js", "Vercel", "Pinecone", "OpenAI"].map((tech, i) => (
                  <span key={i} className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-full text-[9px] text-zinc-500 transition-colors hover:border-white/20 hover:text-white">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Horizontal Accordion */}
          <div className="flex-1 flex flex-col h-auto lg:flex-row gap-2 min-w-0">
            {features.map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveFeature(index)}
                onClick={() => setActiveFeature(index)}
                className={`relative overflow-hidden rounded-[1.5rem] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer group w-full
                  ${activeFeature === index
                    ? 'h-[280px] lg:h-auto lg:flex-[4] bg-zinc-950 border border-white/20'
                    : 'h-[70px] lg:h-auto lg:flex-[0.4] bg-black border border-white/5 hover:border-white/20'
                  }
                `}
              >
                {/* Active State Content */}
                <div className={`absolute inset-0 p-6 flex flex-col justify-between transition-opacity duration-500 ${activeFeature === index ? 'opacity-100 delay-200' : 'opacity-0 pointer-events-none'}`}>

                  <div className="flex justify-between items-start">
                    <span className="text-3xl lg:text-4xl font-bold text-white/10">0{index + 1}</span>
                    <span className="px-2.5 py-1 rounded-full bg-white/5 text-white/90 text-[10px] border border-white/10 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                      {feature.status}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl lg:text-2xl font-bold text-white leading-tight">{feature.title}</h3>
                    <p className="text-xs lg:text-sm text-zinc-300 leading-relaxed max-w-sm">{feature.description}</p>

                    <div className="pt-3 border-t border-white/5 flex flex-wrap gap-3">
                      <div className="flex items-center gap-1.5">
                        <div className="h-1 w-1 rounded-full bg-white/40" />
                        <span className="text-[10px] text-zinc-300 uppercase tracking-wider">{feature.detail}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Inactive State Content (Vertical Text) */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${activeFeature === index ? 'opacity-0' : 'opacity-100'}`}>
                  <h3 className="hidden lg:block rotate-180 text-nowrap text-sm font-bold tracking-widest text-white/30 group-hover:text-white transition-colors" style={{ writingMode: 'vertical-rl' }}>
                    {feature.title}
                  </h3>
                  <div className="lg:hidden w-full h-full flex items-center px-6 justify-between">
                    <span className="text-base font-bold text-white/60">{feature.title}</span>
                    <span className="text-xs font-mono text-white/20">0{index + 1}</span>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Mobile Tech Stack */}
          <div className="lg:hidden mt-6 text-center">
            <p className="text-[10px] font-mono text-zinc-600 mb-3 uppercase tracking-widest">Powered By</p>
            <div className="flex flex-wrap justify-center gap-1.5">
              {["Next.js", "Vercel", "Pinecone", "OpenAI"].map((tech, i) => (
                <span key={i} className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-full text-[9px] text-zinc-500 hover:border-white/30 hover:text-white">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Main Headline Section (Modern Glassy) */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono text-zinc-500">02</span>
            <div className="h-px flex-1 bg-white/10"></div>
            <span className="px-2.5 py-0.5 rounded-full border border-white/10 text-[10px] uppercase tracking-wider text-zinc-400 bg-white/5 backdrop-blur-md">Impact & Metrics</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-medium text-white leading-[1.1] tracking-tight mb-6">
            Real business <span className="inline-flex items-center justify-center translate-y-1 mx-1.5 w-12 h-8 md:w-14 md:h-10 rounded-full bg-zinc-800 border border-white/10 text-white rotate-3 transition-transform hover:rotate-6 hover:bg-zinc-700"><ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" /></span> impact <br className="hidden md:block" />
            from <span className="text-zinc-500">better search.</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border border-black bg-zinc-900 flex items-center justify-center text-[8px] text-white">Use</div>
              ))}
              <div className="w-8 h-8 rounded-full border border-black bg-white flex items-center justify-center text-black text-[10px] font-bold">+2k</div>
            </div>
            <p className="text-sm md:text-base text-zinc-300 max-w-lg leading-relaxed">
              See how AI-powered <span className="inline-flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded-full text-white text-xs border border-white/10 mx-1 backdrop-blur-sm"><Zap className="w-3 h-3 fill-white" /> chat</span> and search drive results.
            </p>
          </div>
        </div>

        {/* Metrics Bento Grid (Glassy Monochrome) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">

          {/* Card 1: Content Discovery */}
          <div className="group md:col-span-2 relative h-[240px] overflow-hidden rounded-[1.5rem] bg-zinc-900/30 border border-white/5 p-6 md:p-8 transition-all hover:bg-zinc-900/50 hover:border-white/10 duration-500 backdrop-blur-sm">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
              <Search size={180} className="text-white rotate-12" />
            </div>
            <div className="relative z-10 flex h-full flex-col justify-between text-white">
              <div className="flex justify-between items-start">
                <div className="bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-sm">
                  <span className="text-xs font-bold tracking-tight flex items-center gap-1.5 text-zinc-200">
                    <Search className="w-3 h-3" /> Discovery
                  </span>
                </div>
                <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center text-white rotate-45 group-hover:rotate-0 transition-transform duration-500 border border-white/5">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div>
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-5xl md:text-6xl font-bold tracking-tighter leading-none text-white">3x</span>
                  <span className="text-sm font-medium opacity-60 text-zinc-400">faster</span>
                </div>
                <h3 className="text-lg font-semibold leading-tight mb-1 text-white">Improve Discovery</h3>
                <p className="text-zinc-300 text-xs md:text-sm max-w-xs">AI-powered search that understands intent instantly.</p>
              </div>
            </div>
          </div>

          {/* Card 2: Bounce Rate */}
          <div className="group relative h-[240px] overflow-hidden rounded-[1.5rem] bg-black border border-white/10 p-6 flex flex-col justify-between transition-all hover:border-white/20 hover:bg-zinc-900/50">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center mb-4 text-zinc-500 group-hover:bg-white/10 group-hover:text-white transition-colors duration-300 border border-white/5">
                <MousePointerClick className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-medium text-zinc-300 border-l-2 border-zinc-700 pl-2 mb-1 group-hover:border-white transition-colors">Bounce Rate</h3>
              <p className="text-xs text-zinc-400">Keep users engaged longer.</p>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/5">
              <div className="text-3xl font-bold text-white mb-1">-45%</div>
              <div className="text-[10px] text-emerald-400/80 font-mono flex items-center gap-1.5">
                <div className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse"></div>
                REDUCED
              </div>
            </div>
          </div>

          {/* Card 3: Conversions */}
          <div className="group relative h-[220px] overflow-hidden rounded-[1.5rem] bg-zinc-900 p-6 transition-transform hover:scale-[1.01] origin-bottom border border-white/10 hover:border-white/20">
            <div className="absolute -bottom-6 -right-6 text-white/5 rotate-12">
              <BarChart3 size={140} />
            </div>

            <div className="relative z-10 flex h-full flex-col justify-between text-white">
              <div className="flex items-start justify-between">
                <div className="bg-white/5 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-300">Conversion</span>
                </div>
              </div>

              <div className="mt-auto">
                <h3 className="text-xl font-bold leading-none mb-2 max-w-[120px]">Boost Sales</h3>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold tracking-tighter">32%</span>
                  <div className="mb-1.5 w-6 h-6 rounded-full bg-white text-black flex items-center justify-center">
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: UX */}
          <div className="group md:col-span-2 relative h-[220px] overflow-hidden rounded-[1.5rem] bg-black border border-white/10 p-8 flex items-center justify-between transition-all hover:border-white/20">
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat transition-[background-position_0s] duration-0 group-hover:bg-[position:200%_0,0_0] group-hover:duration-[1500ms]"></div>

            <div className="relative z-10 max-w-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Zap key={i} className="w-3.5 h-3.5 text-zinc-600 fill-zinc-600 group-hover:text-white group-hover:fill-white transition-colors duration-500" />
                  ))}
                </div>
                <span className="text-[10px] font-mono text-zinc-500">5.0 RATING</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Better UX</h3>
              <p className="text-xs text-zinc-300 max-w-[280px]">Modern, intuitive interfaces that your users expect.</p>
            </div>

            <div className="relative z-10 hidden md:flex items-center justify-center w-28 h-28 rounded-full border border-white/10 bg-white/5 backdrop-blur-md group-hover:bg-white/10 transition-colors">
              <Fingerprint className="w-10 h-10 text-zinc-500 group-hover:text-white transition-colors duration-500" />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}


