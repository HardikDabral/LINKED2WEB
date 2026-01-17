"use client";

import Image from "next/image";

export default function CoolSection() {
    return (
        <section className="relative w-full bg-black text-white px-4 py-12 sm:px-6 md:px-8 lg:px-12 border-t border-white/5">
            <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

                {/* Left Column: Typography Showcase */}
                <div className="flex flex-col justify-between border-t border-white/20 pt-4">

                    {/* Header Row */}
                    <div className="flex justify-between items-baseline mb-6 text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                        <span>Grotesque Tymeline</span>
                        <span>2024</span>
                        <span className="text-white">2 Styles</span>
                    </div>

                    {/* Intro Text */}
                    <div className="mb-8 max-w-sm">
                        <p className="text-sm leading-relaxed text-zinc-300">
                            Introducing Neue Montreal, a versatile Grotesque font with
                            the spirit of a display font. Compatible with 2 weights in
                            Roman. A bold cut and a slightly lighter text copy.
                        </p>
                    </div>

                    <div className="w-full h-px bg-white/20 mb-6" />

                    {/* Alphabet Grid */}
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-none text-white break-words mb-2 opacity-90">
                            ABCDEFGHIJKLMNO
                        </h2>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-none text-zinc-400 break-words mb-2 opacity-80">
                            PQRSTUVWXYZabcd
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight leading-none text-zinc-500 break-words opacity-60">
                                efghijklmnopqrstuvwx
                            </h2>
                            <div className="flex flex-col justify-end">
                                <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold tracking-tight leading-none text-zinc-600 break-words opacity-40">
                                    yz0123456789!@€£
                                </h2>
                                <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold tracking-tight leading-none text-zinc-700 break-words opacity-20">
                                    $&*))(({"{"}§?
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="mt-2 hidden lg:block">
                        <span className="text-[9px] uppercase font-bold tracking-widest text-zinc-600">
                            Climac-Brands
                        </span>
                    </div>

                </div>

                {/* Right Column: Media Card */}
                <div className="relative w-full h-[300px] lg:h-auto lg:min-h-[400px] border border-white/20 rounded-2xl overflow-hidden group">
                    {/* Top Bar Overlay */}
                    <div className="absolute top-0 left-0 right-0 p-4 z-20 flex justify-between items-start">
                        <div className="flex flex-col gap-1">
                            <span className="text-[9px] font-mono text-white/60 uppercase tracking-widest text-shadow-sm">Surround</span>
                            <div className="w-10 h-0.5 bg-white/20 rounded-full overflow-hidden">
                                <div className="w-1/2 h-full bg-white"></div>
                            </div>
                        </div>
                        <span className="text-[9px] font-mono text-white/60 uppercase tracking-widest">=============</span>
                    </div>

                    {/* Main Image */}
                    <div className="absolute inset-2 rounded-xl overflow-hidden border border-white/5">
                        {/* Using standard img tag to match cool2 style */}
                        <img
                            src="/LandingPage/cools.jpg"
                            alt="Cool Section Visual"
                            className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                    </div>

                    {/* Scanlines Effect */}
                    <div className="absolute inset-0 pointer-events-none opacity-30 z-30" style={{
                        backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
                        backgroundSize: '100% 4px, 4px 100%'
                    }} />
                </div>

            </div>
        </section>
    );
}
