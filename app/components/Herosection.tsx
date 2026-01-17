"use client";

import Image from "next/image";
import { Spotlight } from "./ui/Spotlight";

export default function Herosection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12">
      {/* Background Image */}
      <div className="absolute inset-4 sm:inset-6 md:inset-8 lg:inset-12 z-0 rounded-3xl overflow-hidden bg-[#020202]">
        {/* Background Video */}
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video> */}

        <Spotlight
          // Subtle, wide, premium white glow (Pro look)
          gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 0%, 100%, 0.05) 0, hsla(0, 0%, 100%, 0.02) 50%, hsla(0, 0%, 100%, 0) 80%)"
          gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 100%, 0.03) 0, hsla(0, 0%, 100%, 0.01) 80%, transparent 100%)"
          gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 100%, 0.02) 0, hsla(0, 0%, 100%, 0.005) 80%, transparent 100%)"
          translateY={-350}
          width={800}
          smallWidth={300}
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
            className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md sm:mb-8 sm:px-4 sm:py-2 md:px-5 md:py-2.5">
            <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-300 sm:text-xs sm:font-semibold sm:text-zinc-200">
              FRUUPY · HANDY HELPER TOOLS
            </span>
          </div>

          {/* Main Headline */}
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="mb-4 text-2xl font-semibold leading-tight tracking-tight text-white sm:mb-5 sm:text-3xl sm:font-bold md:mb-6 md:text-4xl lg:text-5xl xl:text-6xl">
            Free Online Calculators & Tools
          </h1>

          {/* Description */}
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="mb-8 max-w-2xl text-sm leading-relaxed text-gray-300 sm:mb-10 sm:text-base md:mb-12 md:text-lg lg:text-xl">
            A collection of useful tools to help you with everyday tasks. From age calculators to finance tools, we have it all.
          </p>

          {/* CTA Buttons */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="mb-12 flex w-full flex-col items-center gap-3 sm:mb-14 sm:flex-row sm:justify-center md:mb-16 md:gap-4">
            <button className="group relative w-full overflow-hidden rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black shadow-lg shadow-white/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-white/10 sm:w-auto sm:px-7 sm:py-3 sm:text-base sm:font-bold md:rounded-full md:px-8 md:py-3 cursor-pointer">
              <span className="relative z-10">Browse Tools</span>
              <div className="absolute inset-0 bg-zinc-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
            <button className="group relative w-full overflow-hidden rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10 hover:shadow-lg hover:shadow-white/5 sm:w-auto sm:px-7 sm:py-3 sm:text-base sm:font-semibold md:rounded-full md:px-8 md:py-3 cursor-pointer">
              <span className="relative z-10">View All</span>
            </button>
          </div>

          {/* Performance Metrics */}
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="500"
            className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 md:gap-4">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/10 sm:px-4 sm:py-2 md:px-5 md:py-2.5">
              <span className="text-[10px] font-medium text-zinc-300 sm:text-xs sm:font-semibold">
                50+ Tools
              </span>
            </div>
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/10 sm:px-4 sm:py-2 md:px-5 md:py-2.5">
              <span className="text-[10px] font-medium text-zinc-300 sm:text-xs sm:font-semibold">
                100% Free
              </span>
            </div>
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/10 sm:px-4 sm:py-2 md:px-5 md:py-2.5">
              <span className="text-[10px] font-medium text-zinc-300 sm:text-xs sm:font-semibold">
                No Login
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

