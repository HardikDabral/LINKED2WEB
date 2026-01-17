"use client";

import React from "react";
import { Check } from "lucide-react";

export default function Pricing() {
    const plans = [
        {
            name: "Basic",
            price: "$29",
            description: "Essential features for individuals starting out.",
            features: ["2 Projects", "Basic Analytics", "24/7 Support", "1GB Storage"],
            featured: false,
        },
        {
            name: "Standard",
            price: "$59",
            description: "Ideal for growing teams and businesses.",
            features: ["10 Projects", "Advanced Analytics", "Priority Support", "10GB Storage", "Custom Domain"],
            featured: true,
        },
        {
            name: "Premium",
            price: "$99",
            description: "Advanced tools for scaling enterprises.",
            features: ["Unlimited Projects", "Enterprise Analytics", "Dedicated Manager", "100GB Storage", "API Access", "SSO Integration"],
            featured: false,
        },
    ];

    return (
        <section id="pricing" className="w-full bg-black text-white px-4 py-20 sm:px-6 md:px-8 lg:px-12 border-t border-white/10">
            <div className="mx-auto max-w-[1440px]">
                {/* Section Header */}
                <div className="mb-20 flex flex-col md:flex-row justify-between items-end border-b border-zinc-800 pb-8">
                    <div>
                        <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">
                            The Investment
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-white">
                            Pricing Plans
                        </h2>
                    </div>
                    <p className="text-zinc-400 text-sm max-w-xs mt-6 md:mt-0 text-right md:text-left">
                        Transparent pricing for teams of all sizes. Choose the plan that fits your trajectory.
                    </p>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative flex flex-col justify-between p-8 border ${plan.featured ? "border-white bg-zinc-900" : "border-zinc-800 bg-black"
                                } group hover:border-zinc-500 transition-colors duration-300 min-h-[500px]`}
                        >
                            {plan.featured && (
                                <div className="absolute top-0 right-0 p-4">
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-white border border-white/20 px-2 py-1">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            {/* Card Header */}
                            <div>
                                <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-8">
                                    {plan.name}
                                </div>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-5xl font-bold tracking-tighter text-white">{plan.price}</span>
                                    <span className="text-zinc-500 text-sm">/mo</span>
                                </div>
                                <p className="text-zinc-400 text-xs leading-relaxed border-b border-zinc-800 pb-8 mb-8">
                                    {plan.description}
                                </p>

                                {/* Features */}
                                <ul className="flex flex-col gap-3">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3">
                                            <Check className="w-4 h-4 text-white" />
                                            <span className="text-sm text-zinc-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA Button */}
                            <button
                                className={`mt-12 w-full py-3 text-sm font-bold tracking-wide uppercase transition-all duration-300 border ${plan.featured
                                    ? "bg-white text-black border-white hover:bg-zinc-200"
                                    : "bg-transparent text-white border-zinc-800 hover:border-white hover:bg-white/5"
                                    }`}
                            >
                                Choose {plan.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
