"use client";

import Link from "next/link";
import { ArrowUpRight, Github, Twitter, Instagram } from "lucide-react";

const tools = [
    { name: "BMI Calculator", href: "/bmi-calculator" },
    { name: "EMI Calculator", href: "/emi-calculator" },
    { name: "Age Calculator", href: "/age-calculator" },
    { name: "Percentage Calculator", href: "/percentage-calculator" },
    { name: "GPA Calculator", href: "/gpa-calculator" },
    { name: "QR Generator", href: "/qr-generator" },
    { name: "Word Counter", href: "/word-counter" },
];

const resources = [
    { name: "About Us", href: "/about" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Contact Support", href: "/about" },
];

export default function Footer() {
    return (
        <footer className="relative w-full border-t border-white/10 bg-black px-4 pt-20 pb-10 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
            {/* Background grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-white uppercase italic">
                            Fruupy
                        </Link>
                        <p className="max-w-xs text-sm leading-relaxed text-zinc-400">
                            Discover powerful free online calculators and utility tools for everyday tasks. Fast, accurate, and 100% free by <strong>Explore with Ramesh</strong>.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all">
                                <Twitter size={16} />
                            </Link>
                            <Link href="#" className="p-2.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all">
                                <Github size={16} />
                            </Link>
                            <Link href="#" className="p-2.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all">
                                <Instagram size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Tools Column */}
                    <div>
                        <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-zinc-500">Popular Tools</h3>
                        <ul className="grid grid-cols-1 gap-3">
                            {tools.map((tool) => (
                                <li key={tool.name}>
                                    <Link
                                        href={tool.href}
                                        className="group flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-white"
                                    >
                                        <span>{tool.name}</span>
                                        <ArrowUpRight size={12} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div>
                        <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-zinc-500">Resources</h3>
                        <ul className="space-y-3">
                            {resources.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="group flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-white"
                                    >
                                        <span>{item.name}</span>
                                        <ArrowUpRight size={12} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Stay Updated</h3>
                        <p className="text-sm text-zinc-400">Join our newsletter to get notified about new tools and features.</p>
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/20 transition-all"
                            />
                            <button className="absolute right-1.5 top-1.5 bg-white text-black text-xs font-bold px-4 py-2 rounded-lg hover:bg-zinc-200 transition-colors">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-10 md:flex-row">
                    <p className="text-xs text-zinc-500">
                        © {new Date().getFullYear()} Fruupy Team. All rights reserved.
                    </p>
                    <div className="flex items-center gap-8">
                        {['Privacy', 'Terms', 'Cookies'].map((item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                className="text-xs text-zinc-500 transition-colors hover:text-white underline-offset-4 hover:underline"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Big Watermark Effect */}
                <div className="pointer-events-none absolute bottom-[-5%] left-0 right-0 flex justify-center overflow-hidden select-none opacity-[0.03]">
                    <span className="text-[22vw] font-black leading-none text-white uppercase italic tracking-tighter blur-[2px]">
                        Fruupy
                    </span>
                </div>
            </div>
        </footer>
    );
}
