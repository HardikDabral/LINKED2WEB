"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer
            className="relative w-full border-t border-white/5 px-4 pt-16 pb-8 sm:px-6 md:px-8 lg:px-12 overflow-hidden"
            style={{
                backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
                backgroundSize: '32px 32px',
            }}
        >
            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:gap-16">
                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="mb-6 block text-lg font-bold tracking-tight text-white uppercase italic">
                            Fruupy
                        </Link>
                        <p className="text-xs leading-relaxed text-zinc-500 max-w-xs">
                            Discover powerful free online calculators and utility tools for everyday tasks. Fast, accurate, and 100% free.
                        </p>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h3 className="mb-4 text-[10px] font-bold uppercase tracking-wider text-white">Tools</h3>
                        <ul className="space-y-3">
                            {['BMI Calculator', 'EMI Calculator', 'Age Calculator', 'Percentage'].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="flex items-center gap-1 text-xs font-medium text-zinc-500 transition-colors hover:text-white">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h3 className="mb-4 text-[10px] font-bold uppercase tracking-wider text-white">Company</h3>
                        <ul className="space-y-3">
                            {['About', 'Privacy', 'Terms', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase()}`} className="flex items-center gap-1 text-xs font-medium text-zinc-500 transition-colors hover:text-white">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA Column */}
                    <div className="col-span-2 md:col-span-1">
                        <h3 className="mb-4 text-[10px] font-bold uppercase tracking-wider text-white">Stay Updated</h3>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white/20 transition-colors"
                            />
                            <button className="flex-shrink-0 bg-white text-black text-xs font-bold px-3 py-2 rounded-lg hover:bg-zinc-200 transition-colors">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
                    <p className="text-[10px] text-zinc-600">
                        © {new Date().getFullYear()} Fruupy. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        {['Privacy', 'Terms', 'Cookies'].map((item) => (
                            <Link key={item} href={`/${item.toLowerCase()}`} className="text-[10px] text-zinc-600 transition-colors hover:text-zinc-400">
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Big Watermark Effect */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex justify-center overflow-hidden opacity-[0.03]">
                    <h1 className="select-none text-[15vw] font-bold leading-none text-white blur-sm uppercase italic">
                        Fruupy
                    </h1>
                </div>
            </div>
        </footer>
    );
}
