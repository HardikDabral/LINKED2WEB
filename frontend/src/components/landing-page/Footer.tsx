"use client";

import Link from "next/link";
import { ArrowUpRight, Github, Twitter, Instagram } from "lucide-react";

const tools = [
  { name: "BMI Calculator", href: "/tools/bmi-calculator" },
  { name: "EMI Calculator", href: "/tools/emi-calculator" },
  { name: "Age Calculator", href: "/tools/age-calculator" },
  { name: "Percentage Calculator", href: "/tools/percentage-calculator" },
  { name: "GPA Calculator", href: "/tools/gpa-calculator" },
  { name: "QR Generator", href: "/tools/qr-generator" },
  { name: "Word Counter", href: "/tools/word-counter" },
];

const resources = [
  { name: "About Us", href: "/about" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Contact Support", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-[#93B1B5]/40 bg-gradient-to-b from-[#F8FBFC] to-white px-4 pb-10 pt-20 sm:px-6 md:px-8 lg:px-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(11,46,51,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,46,51,0.06) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          <div className="flex flex-col gap-6">
            <Link href="/" className="text-2xl font-bold uppercase italic tracking-tighter text-[#0B2E33]">
              Fruupy
            </Link>
            <a
              href="https://www.fruupy.com"
              className="text-xs font-semibold tracking-wide text-[#4F7C82] hover:text-[#0B2E33] hover:underline"
            >
              www.fruupy.com
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-[#0B2E33]/70">
              <strong className="text-[#0B2E33]">Fruupy</strong> at{' '}
              <span className="font-medium text-[#4F7C82]">fruupy.com</span> — free online calculators and utility tools for
              everyday tasks. Fast, accurate Fruupy tools by <strong className="text-[#0B2E33]">Explore with Ramesh</strong>.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="rounded-full border border-[#93B1B5]/40 bg-white p-2.5 text-[#4F7C82] transition-all hover:border-[#4F7C82] hover:text-[#0B2E33]"
              >
                <Twitter size={16} />
              </Link>
              <Link
                href="#"
                className="rounded-full border border-[#93B1B5]/40 bg-white p-2.5 text-[#4F7C82] transition-all hover:border-[#4F7C82] hover:text-[#0B2E33]"
              >
                <Github size={16} />
              </Link>
              <Link
                href="#"
                className="rounded-full border border-[#93B1B5]/40 bg-white p-2.5 text-[#4F7C82] transition-all hover:border-[#4F7C82] hover:text-[#0B2E33]"
              >
                <Instagram size={16} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-[#4F7C82]">Popular Tools</h3>
            <ul className="grid grid-cols-1 gap-3">
              {tools.map((tool) => (
                <li key={tool.name}>
                  <Link
                    href={tool.href}
                    className="group flex items-center gap-1 text-sm text-[#0B2E33]/70 transition-colors hover:text-[#0B2E33]"
                  >
                    <span>{tool.name}</span>
                    <ArrowUpRight
                      size={12}
                      className="translate-x-1 -translate-y-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-[#4F7C82]">Resources</h3>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-1 text-sm text-[#0B2E33]/70 transition-colors hover:text-[#0B2E33]"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight
                      size={12}
                      className="translate-x-1 -translate-y-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#4F7C82]">Stay Updated</h3>
            <p className="text-sm text-[#0B2E33]/70">
              Hear when Fruupy adds new tools on fruupy.com.
            </p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-[#93B1B5]/40 bg-white px-4 py-3 pr-24 text-sm text-[#0B2E33] placeholder:text-[#0B2E33]/40 focus:border-[#4F7C82] focus:outline-none"
              />
              <button className="absolute right-1.5 top-1.5 rounded-lg bg-[#0B2E33] px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-[#0B2E33]/90">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-[#93B1B5]/35 pt-10 md:flex-row">
                    <p className="text-xs text-[#0B2E33]/50">
                      © {new Date().getFullYear()} Fruupy · fruupy.com. All rights reserved.
                    </p>
          <div className="flex items-center gap-8">
            {["Privacy", "Terms"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-xs text-[#0B2E33]/50 underline-offset-4 transition-colors hover:text-[#0B2E33] hover:underline"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-[-5%] left-0 right-0 flex select-none justify-center overflow-hidden opacity-[0.06]">
          <span className="text-[22vw] font-black uppercase italic leading-none tracking-tighter text-[#0B2E33] blur-[2px]">
            Fruupy
          </span>
        </div>
      </div>
    </footer>
  );
}
