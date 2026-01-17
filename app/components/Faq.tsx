"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
    {
        question: "Do I need to code to use Linked2web?",
        answer:
            "Not at all. You can copy-paste our snippet into any website builder (Webflow, WordPress, React, etc.) and it just works.",
    },
    {
        question: "How does the pricing work?",
        answer:
            "We offer a free tier for hobbyists. Pro plans start at $29/mo based on message volume and indexed pages.",
    },
    {
        question: "Is my data secure?",
        answer:
            "Yes. We are SOC2 Type II compliant and never train our global models on your private business data.",
    },
    {
        question: "Can I customize the design?",
        answer:
            "Absolutely. You have full control over colors, fonts, tone, and widget behavior to match your brand perfectly.",
    },
];

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section
            className="relative w-full px-4 py-20 sm:px-6 md:px-8 lg:px-12 border-t border-white/5 overflow-hidden"
            style={{
                backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
                backgroundSize: '32px 32px',
            }}
        >
            {/* Grayish Gradient Blob */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full pointer-events-none blur-3xl opacity-50"
                style={{
                    background: 'radial-gradient(circle, rgba(0, 0, 0, 0.05) 0%, transparent 100%)'
                }}
            />

            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <p className="text-xs mb-3 font-bold tracking-[0.2em] uppercase opacity-70 text-zinc-400">
                        SUPPORT
                    </p>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white">
                        Frequently Asked <span className="text-zinc-500">Questions</span>
                    </h2>
                </div>

                <div className="rounded-3xl border border-white/10 overflow-hidden  backdrop-blur-sm">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className="group border-b border-white/5 last:border-b-0">
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="flex w-full items-center justify-between px-6 py-6 text-left transition-all hover:bg-white/[0.02]"
                                >
                                    <span className="text-sm sm:text-base font-medium text-zinc-200 group-hover:text-white">
                                        {faq.question}
                                    </span>
                                    <span className="ml-6 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition-colors group-hover:border-white/20 group-hover:text-white">
                                        {isOpen ? (
                                            <Minus className="h-3 w-3" />
                                        ) : (
                                            <Plus className="h-3 w-3" />
                                        )}
                                    </span>
                                </button>
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25, ease: "easeOut" }}
                                        >
                                            <div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed pr-12">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
