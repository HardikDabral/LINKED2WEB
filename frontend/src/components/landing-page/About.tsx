"use client";

import { useState } from 'react';
import { ArrowUpRight, Search, Zap, BarChart3, Fingerprint, MousePointerClick } from 'lucide-react';

export default function About() {
  const [activeFeature, setActiveFeature] = useState(0);
  const features = [
    {
      title: "Fruupy in your browser",
      description:
        "Every Fruupy calculator and tool runs in the browser at fruupy.com — no download, no extension, no clutter. Use Fruupy for loan EMI estimates, BMI checks, age-from-DOB math, tip splits, JSON formatting, Base64, color codes, and dozens more utilities without leaving the tab you already have open.",
      detail: "Fruupy · fruupy.com",
      status: "Live",
    },
    {
      title: "Fast Fruupy results",
      description:
        "Fruupy is tuned for speed: pick a tool, type your inputs, and read the output immediately. Whether you are comparing home-loan scenarios, counting words for an article, timing a presentation with a Pomodoro, or resizing an image for the web, Fruupy keeps interactions short so you can get back to real work.",
      detail: "Fruupy performance",
      status: "Live",
    },
    {
      title: "Free on Fruupy",
      description:
        "Fruupy stays free — bookmark fruupy.com on phone and laptop, share Fruupy with friends, and return whenever homework, budgeting, or a quick conversion pops up. Explore with Ramesh focuses on helpful public tools first: transparent, accessible, and built for everyday people who do not want another subscription.",
      detail: "Fruupy forever free",
      status: "Live",
    },
  ];

  return (
    <section
      aria-label="About Fruupy — fruupy.com free calculators and tools"
      className="relative z-10 min-h-screen w-full overflow-hidden bg-gradient-to-b from-white to-[#F8FBFC]"
    >
      {/* Blur under grid so lines stay crisp (inline bgImage was killing the gradient + blur washed the grid) */}
      <div
        className="pointer-events-none absolute left-0 top-1/2 z-0 h-[600px] w-[400px] -translate-y-1/2 blur-3xl"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse at left center, rgba(184, 227, 233, 0.55) 0%, rgba(79, 124, 130, 0.12) 40%, transparent 70%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(11, 46, 51, 0.09) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(11, 46, 51, 0.09) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-12">
        {/* Features Expanding Cards Section (Glassy Monochrome) */}
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-stretch lg:h-[380px]">

          {/* Section Title Block */}
          <div className="flex-shrink-0 lg:w-1/3 flex flex-col justify-between pr-4">
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tighter text-[#0B2E33] sm:text-3xl md:text-4xl lg:text-5xl mb-4">
                FRUUPY AT A GLANCE
              </h2>
              <p className="text-xs md:text-sm text-[#0B2E33]/70 max-w-[320px] leading-relaxed">
                <strong className="text-[#0B2E33]">Fruupy</strong> is the free toolkit at{' '}
                <span className="font-medium text-[#4F7C82]">fruupy.com</span> — online calculators, timers, converters,
                text utilities, and lightweight productivity helpers for students, professionals, and families. From salary
                and GST math to sleep cycles, water intake, and random pickers, Fruupy covers the small jobs that eat time
                when you do not have a spreadsheet handy.
              </p>
            </div>

            {/* Tech Stack Subtle Display (Desktop) */}
            <div className="hidden lg:block mt-6">
              <p className="text-[10px] font-mono text-[#4F7C82] mb-3 uppercase tracking-widest">Fruupy stack</p>
              <div className="flex flex-wrap gap-1.5">
                {["Fruupy", "fruupy.com", "Next.js", "Web"].map((tech, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-full border border-[#93B1B5]/40 bg-white text-[9px] text-[#0B2E33]/60 transition-colors hover:border-[#4F7C82] hover:text-[#0B2E33]">
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
                className={`relative overflow-hidden rounded-[1.5rem] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer group w-full shadow-sm
                  ${activeFeature === index
                    ? 'h-[280px] lg:h-auto lg:flex-[4] border-2 border-[#4F7C82] bg-white shadow-md'
                    : 'h-[70px] lg:h-auto lg:flex-[0.4] border border-[#93B1B5]/40 bg-[#F8FBFC] hover:border-[#4F7C82]/50'
                  }
                `}
              >
                {/* Active State Content */}
                <div className={`absolute inset-0 p-6 flex flex-col justify-between transition-opacity duration-500 ${activeFeature === index ? 'opacity-100 delay-200' : 'opacity-0 pointer-events-none'}`}>

                  <div className="flex justify-between items-start">
                    <span className="text-3xl lg:text-4xl font-bold text-[#B8E3E9]">0{index + 1}</span>
                    <span className="px-2.5 py-1 rounded-full bg-[#0B2E33]/[0.06] text-[#0B2E33] text-[10px] border border-[#93B1B5]/40 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#4F7C82] animate-pulse" />
                      {feature.status}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl lg:text-2xl font-bold text-[#0B2E33] leading-tight">{feature.title}</h3>
                    <p className="text-xs lg:text-sm text-[#0B2E33]/70 leading-relaxed max-w-sm">{feature.description}</p>

                    <div className="pt-3 border-t border-[#93B1B5]/30 flex flex-wrap gap-3">
                      <div className="flex items-center gap-1.5">
                        <div className="h-1 w-1 rounded-full bg-[#4F7C82]" />
                        <span className="text-[10px] text-[#0B2E33]/60 uppercase tracking-wider">{feature.detail}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Inactive State Content (Vertical Text) */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${activeFeature === index ? 'opacity-0' : 'opacity-100'}`}>
                  <h3 className="hidden lg:block rotate-180 text-nowrap text-sm font-bold tracking-widest text-[#0B2E33]/40 group-hover:text-[#0B2E33] transition-colors" style={{ writingMode: 'vertical-rl' }}>
                    {feature.title}
                  </h3>
                  <div className="lg:hidden w-full h-full flex items-center px-6 justify-between">
                    <span className="text-base font-bold text-[#0B2E33]/80">{feature.title}</span>
                    <span className="text-xs font-mono text-[#4F7C82]">0{index + 1}</span>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#B8E3E9]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Mobile Tech Stack */}
          <div className="lg:hidden mt-6 text-center">
            <p className="text-[10px] font-mono text-[#4F7C82] mb-3 uppercase tracking-widest">Fruupy stack</p>
            <div className="flex flex-wrap justify-center gap-1.5">
              {["Fruupy", "fruupy.com", "Next.js", "Web"].map((tech, i) => (
                <span key={i} className="px-2.5 py-1 rounded-full border border-[#93B1B5]/40 bg-white text-[9px] text-[#0B2E33]/60 hover:border-[#4F7C82] hover:text-[#0B2E33]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <article className="mb-16 rounded-[1.5rem] border border-[#93B1B5]/40 bg-white p-8 shadow-sm md:mb-20 md:p-10 lg:p-12">
          <h2 className="mb-4 text-xl font-bold text-[#0B2E33] md:text-2xl">
            What Fruupy offers on <span className="text-[#4F7C82]">fruupy.com</span>
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-[#0B2E33]/75 md:text-[15px]">
            <p>
              <strong className="text-[#0B2E33]">Fruupy</strong> groups reliable web calculators and micro-tools so you do
              not have to hunt ten different sites. Finance users open Fruupy for EMI, interest, salary take-home, tip and
              discount math, expense splitting, and GST. Health and wellness visitors use Fruupy for BMI, calories, water
              intake, and sleep timing. Students and writers rely on Fruupy for GPA, percentage problems, word counts, and
              language help alongside formatters like JSON and Base64.
            </p>
            <p>
              Productivity on Fruupy means Pomodoro timers, to-do lists, stopwatches, countdowns, and day counters that run
              without friction. Creators use Fruupy for QR codes, memes, color picking, and image resizing. Each Fruupy page
              is designed to load quickly, read clearly on phones, and explain what the numbers mean in plain language where
              it matters.
            </p>
            <p>
              When you tell someone &quot;check Fruupy&quot; or send them to <span className="font-medium text-[#4F7C82]">fruupy.com</span>, you are pointing to a single brand that stands for free access and steady improvements. Explore with Ramesh welcomes feedback — the roadmap for Fruupy grows from real requests, not hidden paywalls.
            </p>
          </div>
        </article>

        {/* Main Headline Section (Modern Glassy) */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono text-[#4F7C82]">02</span>
            <div className="h-px flex-1 bg-[#93B1B5]/40"></div>
            <span className="px-2.5 py-0.5 rounded-full border border-[#93B1B5]/40 text-[10px] uppercase tracking-wider text-[#4F7C82] bg-white">Fruupy impact</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-medium text-[#0B2E33] leading-[1.1] tracking-tight mb-6">
            <span className="text-[#4F7C82]">Fruupy</span> saves time <span className="inline-flex items-center justify-center translate-y-1 mx-1.5 w-12 h-8 md:w-14 md:h-10 rounded-full border border-[#93B1B5]/50 bg-[#B8E3E9]/40 text-[#0B2E33] rotate-3 transition-transform hover:rotate-6 hover:bg-[#B8E3E9]/60"><ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" /></span> every day <br className="hidden md:block" />
            on <span className="text-[#4F7C82]">fruupy.com</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-[#0B2E33]/10 flex items-center justify-center text-[8px] text-[#0B2E33] font-medium">F</div>
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-white bg-[#0B2E33] flex items-center justify-center text-white text-[10px] font-bold">F</div>
            </div>
            <p className="text-sm md:text-base text-[#0B2E33]/70 max-w-2xl leading-relaxed">
              Thousands use <strong className="font-semibold text-[#0B2E33]">Fruupy</strong> on{' '}
              <span className="font-medium text-[#4F7C82]">fruupy.com</span> for instant{' '}
              <span className="inline-flex items-center gap-1 bg-[#0B2E33]/[0.06] px-2 py-0.5 rounded-full text-[#0B2E33] text-xs border border-[#93B1B5]/40 mx-1"><Zap className="w-3 h-3 fill-[#4F7C82] text-[#4F7C82]" /> results</span>{' '}
              — loan and rent math, classroom assignments, content deadlines, and quick conversions. Fruupy traffic peaks
              around exam season, tax planning, and New Year health goals because one Fruupy bookmark replaces a folder of
              single-purpose apps.
            </p>
          </div>
        </div>

        {/* Metrics Bento Grid (Glassy Monochrome) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">

          {/* Card 1: Content Discovery */}
          <div className="group md:col-span-2 relative h-[240px] overflow-hidden rounded-[1.5rem] border border-[#93B1B5]/40 bg-white p-6 md:p-8 transition-all hover:border-[#4F7C82]/50 hover:shadow-md duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-[0.08] group-hover:opacity-[0.14] transition-opacity text-[#B8E3E9]">
              <Search size={180} className="rotate-12 text-[#4F7C82]" />
            </div>
            <div className="relative z-10 flex h-full flex-col justify-between text-[#0B2E33]">
              <div className="flex justify-between items-start">
                <div className="bg-[#F8FBFC] px-3 py-1.5 rounded-full border border-[#93B1B5]/40 shadow-sm">
                  <span className="text-xs font-bold tracking-tight flex items-center gap-1.5 text-[#0B2E33]">
                    <Search className="w-3 h-3 text-[#4F7C82]" /> Discovery
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#0B2E33] rotate-45 group-hover:rotate-0 transition-transform duration-500 border border-[#93B1B5]/40 bg-white">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div>
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-5xl md:text-6xl font-bold tracking-tighter leading-none text-[#0B2E33]">3x</span>
                  <span className="text-sm font-medium text-[#0B2E33]/50">faster</span>
                </div>
                <h3 className="text-lg font-semibold leading-tight mb-1 text-[#0B2E33]">Find any Fruupy tool</h3>
                <p className="text-[#0B2E33]/65 text-xs md:text-sm max-w-md">
                  Search Fruupy on fruupy.com — BMI, EMI, age, word count, QR, JSON, timers, and dozens more in one place. The
                  Fruupy home page lists every public tool so newcomers see the full Fruupy library at a glance.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Bounce Rate */}
          <div className="group relative h-[240px] overflow-hidden rounded-[1.5rem] border border-[#93B1B5]/40 bg-[#F8FBFC] p-6 flex flex-col justify-between transition-all hover:border-[#4F7C82]/50 hover:bg-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#B8E3E9]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="w-8 h-8 rounded-full flex items-center justify-center mb-4 text-[#4F7C82] border border-[#93B1B5]/40 bg-white group-hover:bg-[#0B2E33] group-hover:text-white transition-colors duration-300">
                <MousePointerClick className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-medium text-[#0B2E33] border-l-2 border-[#4F7C82] pl-2 mb-1">Stay on Fruupy</h3>
              <p className="text-xs text-[#0B2E33]/60 md:max-w-[220px]">
                Fruupy keeps flows short: get your number, copy the result, then share fruupy.com with friends or teammates.
                Shallow pages mean less waiting and fewer distractions than ad-heavy calculator portals.
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-[#93B1B5]/30">
              <div className="text-3xl font-bold text-[#0B2E33] mb-1">-45%</div>
              <div className="text-[10px] text-[#4F7C82] font-mono flex items-center gap-1.5">
                <div className="w-1 h-1 rounded-full bg-[#4F7C82] animate-pulse"></div>
                REDUCED
              </div>
            </div>
          </div>

          {/* Card 3: Conversions */}
          <div className="group relative h-[220px] overflow-hidden rounded-[1.5rem] border border-[#93B1B5]/40 bg-white p-6 transition-transform hover:scale-[1.01] origin-bottom hover:border-[#4F7C82]/50 hover:shadow-md">
            <div className="absolute -bottom-6 -right-6 text-[#B8E3E9] rotate-12">
              <BarChart3 size={140} className="text-[#4F7C82]/20" />
            </div>

            <div className="relative z-10 flex h-full flex-col justify-between text-[#0B2E33]">
              <div className="flex items-start justify-between">
                <div className="bg-[#F8FBFC] px-3 py-1 rounded-full border border-[#93B1B5]/40">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#4F7C82]">Conversion</span>
                </div>
              </div>

              <div className="mt-auto">
                <h3 className="text-xl font-bold leading-none mb-2 max-w-[180px]">Trust Fruupy</h3>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold tracking-tighter">32%</span>
                  <div className="mb-1.5 w-6 h-6 rounded-full bg-[#0B2E33] text-white flex items-center justify-center">
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: UX */}
          <div className="group md:col-span-2 relative h-[220px] overflow-hidden rounded-[1.5rem] border border-[#93B1B5]/40 bg-[#F8FBFC] p-8 flex items-center justify-between transition-all hover:border-[#4F7C82]/50 hover:bg-white">
            <div className="absolute inset-0 opacity-30 bg-[linear-gradient(45deg,transparent_25%,rgba(184,227,233,0.35)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat transition-[background-position_0s] duration-0 group-hover:bg-[position:200%_0,0_0] group-hover:duration-[1500ms]"></div>

            <div className="relative z-10 max-w-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Zap key={i} className="w-3.5 h-3.5 text-[#4F7C82] fill-[#4F7C82]/40 group-hover:fill-[#4F7C82] transition-colors duration-500" />
                  ))}
                </div>
                <span className="text-[10px] font-mono text-[#0B2E33]/50">5.0 RATING</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0B2E33] mb-2">Fruupy experience</h3>
              <p className="text-xs text-[#0B2E33]/65 max-w-md md:text-sm">
                The same clean Fruupy look across fruupy.com — large type, high-contrast teal accents, and predictable layouts
                so switching between Fruupy tools never feels like learning a new product. Accessibility and mobile spacing
                stay first-class as Fruupy grows.
              </p>
            </div>

            <div className="relative z-10 hidden md:flex items-center justify-center w-28 h-28 rounded-full border border-[#93B1B5]/40 bg-white group-hover:border-[#4F7C82]/50 transition-colors shadow-sm">
              <Fingerprint className="w-10 h-10 text-[#4F7C82] group-hover:text-[#0B2E33] transition-colors duration-500" />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}


