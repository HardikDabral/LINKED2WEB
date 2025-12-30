"use client";

import Image from "next/image";

export default function Herosection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12">
      {/* Background Image */}
      <div className="absolute inset-4 sm:inset-6 md:inset-8 lg:inset-12 z-0 rounded-3xl overflow-hidden">
        <Image
          src="/LandingPage/Herosection.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-3rem)] sm:min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)] w-full items-center justify-center px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12">
        <div className="flex w-full max-w-5xl flex-col items-center text-center">
          {/* Top Tag */}
          <div 
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-delay="100"
            className="mb-6 inline-flex items-center rounded-full border border-purple-500/30 bg-gray-900/60 px-3 py-1.5 backdrop-blur-md sm:mb-8 sm:px-4 sm:py-2 md:px-5 md:py-2.5">
            <span className="text-[10px] font-medium uppercase tracking-wider text-white/90 sm:text-xs sm:font-semibold sm:text-white/95">
              LINKED2WEB · AI CHAT + SEARCH IN 10 MINUTES
            </span>
          </div>

          {/* Main Headline */}
          <h1 
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="mb-4 text-2xl font-semibold leading-tight tracking-tight text-white sm:mb-5 sm:text-3xl sm:font-bold md:mb-6 md:text-4xl lg:text-5xl xl:text-6xl">
            Launch AI chat + search with one lightweight embed
          </h1>

          {/* Description */}
          <p 
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="mb-8 max-w-2xl text-sm leading-relaxed text-gray-300 sm:mb-10 sm:text-base md:mb-12 md:text-lg lg:text-xl">
            Ship a modern, page-aware assistant that answers, searches, and
            captures leads without hurting performance or brand.
          </p>

          {/* CTA Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="mb-12 flex w-full flex-col items-center gap-3 sm:mb-14 sm:flex-row sm:justify-center md:mb-16 md:gap-4">
            <button className="group relative w-full overflow-hidden rounded-full bg-white px-6 py-2.5 text-sm font-medium text-gray-900 shadow-lg shadow-purple-500/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/20 sm:w-auto sm:px-7 sm:py-3 sm:text-base sm:font-semibold md:rounded-full md:px-8 md:py-3">
              <span className="relative z-10">Start free</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-blue-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
            <button className="group relative w-full overflow-hidden rounded-full border-2 border-white/30 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-white/50 hover:bg-white/20 hover:shadow-lg hover:shadow-purple-500/20 sm:w-auto sm:px-7 sm:py-3 sm:text-base sm:font-semibold md:rounded-full md:px-8 md:py-3">
              <span className="relative z-10">Explore features</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </div>

          {/* Performance Metrics */}
          <div 
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
            className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 md:gap-4">
            <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-gray-900/60 px-3 py-1.5 backdrop-blur-md transition-all hover:border-purple-500/50 hover:bg-gray-900/80 sm:px-4 sm:py-2 md:px-5 md:py-2.5">
              <span className="text-[10px] font-medium text-white/90 sm:text-xs sm:font-semibold sm:text-white/95">
                92ms Avg response
              </span>
            </div>
            <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-gray-900/60 px-3 py-1.5 backdrop-blur-md transition-all hover:border-purple-500/50 hover:bg-gray-900/80 sm:px-4 sm:py-2 md:px-5 md:py-2.5">
              <span className="text-[10px] font-medium text-white/90 sm:text-xs sm:font-semibold sm:text-white/95">
                99.99% Uptime
              </span>
            </div>
            <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-gray-900/60 px-3 py-1.5 backdrop-blur-md transition-all hover:border-purple-500/50 hover:bg-gray-900/80 sm:px-4 sm:py-2 md:px-5 md:py-2.5">
              <span className="text-[10px] font-medium text-white/90 sm:text-xs sm:font-semibold sm:text-white/95">
                50k+ Messages/mo
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

