"use client";

import Image from "next/image";

export default function Cool2() {
    return (
        <section className="w-full bg-black text-white px-4 py-20 sm:px-6 md:px-8 lg:px-12 border-t border-white/10">
            <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

                {/* Card 1: Where We Are Now (Number 2) */}
                <div className="relative flex flex-col justify-between border border-zinc-800 bg-black p-6 h-[700px] group hover:border-zinc-600 transition-colors duration-500">
                    {/* Inner Frame Definition */}
                    <div className="flex flex-col h-full py-4 relative">

                        {/* Top Meta */}
                        <div className="flex justify-between items-start text-xs font-mono uppercase tracking-widest text-zinc-500 mb-20">
                            <span>Category</span>
                            <span>01</span>
                        </div>

                        {/* Main Title */}
                        <h3 className="text-5xl md:text-6xl font-bold tracking-tighter leading-[0.9] text-white mb-12">
                            Date &<br />Time
                        </h3>

                        {/* 3-Column Description Grid matching the reference */}
                        <div className="grid grid-cols-3 gap-4 mb-auto">
                            <p className="text-[10px] text-zinc-500 leading-tight">
                                Age Calculator. Calculate exact age from date of birth with precision.
                            </p>
                            <p className="text-[10px] text-zinc-500 leading-tight">
                                Day Counter. Count exact days between two dates instantly.
                            </p>
                            <p className="text-[10px] text-zinc-500 leading-tight">
                                Stopwatch & Timer. Track elapsed time for events or tasks.
                            </p>
                        </div>

                        {/* Big Number */}
                        <div className="border-t border-zinc-800 pt-8 mt-8">
                            <span className="block text-[18rem] leading-[0.7] font-bold tracking-tighter text-white -ml-2">
                                1
                            </span>
                        </div>
                    </div>
                </div>

                {/* Center Visual: The Model */}
                <div className="relative h-[700px] border border-zinc-800 bg-zinc-900 overflow-hidden group">
                    {/* Using standard img for reliability */}
                    <img
                        src="/LandingPage/ccol.jpg"
                        alt="Center Visual"
                        className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                    {/* Simulated Scanlines */}
                    <div className="absolute inset-0 pointer-events-none opacity-30" style={{
                        backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
                        backgroundSize: '100% 4px, 4px 100%'
                    }} />
                </div>

                {/* Card 3: Where We Are Now (Number 3) - Repeated design for symmetry */}
                <div className="relative flex flex-col justify-between border border-zinc-800 bg-black p-6 h-[700px] group hover:border-zinc-600 transition-colors duration-500">
                    {/* Inner Frame Definition */}
                    <div className="flex flex-col h-full py-4 relative">

                        {/* Top Meta */}
                        <div className="flex justify-between items-start text-xs font-mono uppercase tracking-widest text-zinc-500 mb-20">
                            <span>Category</span>
                            <span>02</span>
                        </div>

                        {/* Main Title */}
                        <h3 className="text-5xl md:text-6xl font-bold tracking-tighter leading-[0.9] text-white mb-12">
                            Productivity<br />Tools
                        </h3>

                        {/* 3-Column Description Grid */}
                        <div className="grid grid-cols-3 gap-4 mb-auto">
                            <p className="text-[10px] text-zinc-500 leading-tight">
                                To-Do List. Create and manage daily tasks efficiently.
                            </p>
                            <p className="text-[10px] text-zinc-500 leading-tight">
                                Pomodoro Timer. Boost focus with timed work sessions.
                            </p>
                            <p className="text-[10px] text-zinc-500 leading-tight">
                                Word Counter. Count words, characters, and sentences instantly.
                            </p>
                        </div>

                        {/* Big Number */}
                        <div className="border-t border-zinc-800 pt-8 mt-8">
                            <span className="block text-[18rem] leading-[0.7] font-bold tracking-tighter text-white -ml-2">
                                2
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
