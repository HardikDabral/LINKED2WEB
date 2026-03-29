"use client";

import Link from "next/link";
import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Browse",
      price: "$0",
      description: "Use every Fruupy calculator on fruupy.com — no account, no paywall.",
      features: ["30+ Fruupy tools", "fruupy.com in browser", "Fruupy mobile friendly", "Share Fruupy links"],
      featured: false,
    },
    {
      name: "Everyday",
      price: "$0",
      description: "Fruupy is perfect for students, freelancers, and quick math on fruupy.com.",
      features: ["Fruupy finance & health", "Fruupy timers & productivity", "Fruupy JSON & text tools", "New Fruupy tools often"],
      featured: true,
    },
    {
      name: "Share",
      price: "$0",
      description: "Bookmark fruupy.com and share Fruupy tool links with anyone.",
      features: ["fruupy.com/tool URLs", "Fruupy clean UI", "Fast Fruupy load", "Explore with Ramesh · Fruupy"],
      featured: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="w-full border-t border-[#93B1B5]/35 bg-white px-4 py-20 text-[#0B2E33] sm:px-6 md:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-20 flex flex-col items-end justify-between gap-8 border-b border-[#93B1B5]/40 pb-8 md:flex-row">
          <div>
            <div className="mb-4 text-xs font-mono uppercase tracking-widest text-[#4F7C82]">Always free</div>
            <h2 className="text-5xl font-bold tracking-tighter text-[#0B2E33] md:text-6xl">Fruupy pricing</h2>
            <p className="mt-2 text-sm font-medium text-[#4F7C82]">fruupy.com</p>
          </div>
          <p className="mt-6 max-w-xs text-right text-sm text-[#0B2E33]/65 md:mt-0 md:text-left">
            Honest Fruupy pricing: everything on fruupy.com is free. Same Fruupy quality for everyone — just open Fruupy and
            use the tools you need.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex min-h-[500px] flex-col justify-between border p-8 transition-colors duration-300 ${
                plan.featured
                  ? "border-[#4F7C82] bg-[#F8FBFC] shadow-md ring-1 ring-[#4F7C82]/20"
                  : "border-[#93B1B5]/40 bg-white hover:border-[#4F7C82]/40"
              }`}
            >
              {plan.featured && (
                <div className="absolute right-0 top-0 p-4">
                  <span className="border border-[#4F7C82]/50 bg-white px-2 py-1 text-[10px] font-mono uppercase tracking-widest text-[#0B2E33]">
                    Most used
                  </span>
                </div>
              )}

              <div>
                <div className="mb-8 text-xs font-mono uppercase tracking-widest text-[#4F7C82]">{plan.name}</div>
                <div className="mb-4 flex items-baseline gap-1">
                  <span className="text-5xl font-bold tracking-tighter text-[#0B2E33]">{plan.price}</span>
                  <span className="text-sm text-[#0B2E33]/50">forever</span>
                </div>
                <p className="mb-8 border-b border-[#93B1B5]/35 pb-8 text-xs leading-relaxed text-[#0B2E33]/65">
                  {plan.description}
                </p>

                <ul className="flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-4 w-4 shrink-0 text-[#4F7C82]" />
                      <span className="text-sm text-[#0B2E33]/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/"
                className={`mt-12 block w-full border py-3 text-center text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
                  plan.featured
                    ? "border-[#0B2E33] bg-[#0B2E33] text-white hover:bg-[#0B2E33]/90"
                    : "border-[#93B1B5]/50 bg-white text-[#0B2E33] hover:border-[#4F7C82] hover:bg-[#F8FBFC]"
                }`}
              >
                Open Fruupy
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
