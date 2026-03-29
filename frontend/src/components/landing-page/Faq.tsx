"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
    {
        question: "What is Fruupy and is Fruupy really free?",
        answer:
            "Fruupy is a curated library of free online calculators and small browser utilities hosted at fruupy.com. The standard Fruupy experience — opening a tool, entering numbers or text, and reading results — does not sit behind a paywall. Explore with Ramesh builds Fruupy so students, freelancers, and small businesses can solve everyday math without installing desktop software or creating yet another account. If Fruupy ever introduces optional paid features in the future, they will be clearly labeled; the core Fruupy calculators you use today are intended to stay free to access on fruupy.com.",
    },
    {
        question: "Do I need an account to use Fruupy at fruupy.com?",
        answer:
            "No account is required for the majority of Fruupy tools. You visit fruupy.com, choose the Fruupy calculator or utility you need, and your browser runs the page. That matters on shared computers, school Chromebooks, and locked-down office networks where installing apps is not allowed. Fruupy is built for quick sessions: bookmark a Fruupy EMI page, share a Fruupy age-calculator link in a family chat, or keep a Fruupy Pomodoro tab open while you work — all without signing in.",
    },
    {
        question: "Is fruupy.com safe? What happens to my inputs on Fruupy?",
        answer:
            "Fruupy is designed for routine calculations and productivity helpers, not for storing banking passwords or confidential client records. Treat any public website — including Fruupy — the same way: do not paste secrets you would not happily write on a sticky note in a café. Many Fruupy tools process inputs locally in your browser or only send minimal data needed for the feature. For a full explanation of cookies, analytics, and data practices, read the Privacy Policy linked from fruupy.com. If something on a Fruupy page ever looks suspicious, contact the Fruupy team through the About page so it can be reviewed.",
    },
    {
        question: "How do I find a specific tool on Fruupy?",
        answer:
            "Start at the Fruupy home page on fruupy.com and scroll through the sections: finance, health, date and time, productivity, and more. Each Fruupy tool has its own URL, so once you discover the Fruupy GST calculator or Fruupy word counter you use weekly, bookmark it or drop it into your notes app. Fruupy grows over time — new utilities ship alongside improvements to existing Fruupy pages — so checking fruupy.com periodically or following Fruupy updates helps you catch new releases.",
    },
    {
        question: "Can I use Fruupy on my phone or tablet?",
        answer:
            "Yes. Fruupy layouts are responsive: typography, tap targets, and forms are tuned so Fruupy remains usable on small screens. Whether you are on the bus estimating a loan with the Fruupy EMI calculator or timing a workout with a Fruupy timer, fruupy.com is meant to work in mobile Safari, Chrome, and other modern mobile browsers without installing an app from an app store.",
    },
    {
        question: "Does Fruupy work offline?",
        answer:
            "Most Fruupy pages need an initial load from fruupy.com so your browser can fetch the latest scripts and copy. After that, some Fruupy tools may continue to function briefly if your connection drops, but Fruupy is primarily an online service. For guaranteed offline math, export your Fruupy results or keep a local spreadsheet — Fruupy focuses on fast, accurate online calculators when you are connected.",
    },
    {
        question: "Who builds Fruupy and how can I give feedback?",
        answer:
            "Fruupy is developed under the Explore with Ramesh umbrella, with a focus on clear explanations, honest formulas, and pages that search engines and humans can both understand. If a Fruupy calculator looks wrong, if copy on fruupy.com is confusing, or if you want a specific Fruupy tool added, use the contact options on the Fruupy About page. Thoughtful feedback directly shapes which Fruupy utilities ship next.",
    },
    {
        question: "Are Fruupy calculator results financial or medical advice?",
        answer:
            "No. Fruupy outputs are informational estimates based on the numbers you enter and the formulas documented on each Fruupy page. Banks, insurers, and doctors use their own rules and professional judgment. Before making a major money or health decision, confirm details with a qualified professional and official sources — use Fruupy as a starting point for quick checks, not as a substitute for personalized advice.",
    },
];

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="relative w-full overflow-hidden border-t border-[#93B1B5]/35 bg-gradient-to-b from-white to-[#F8FBFC] px-4 py-20 sm:px-6 md:px-8 lg:px-12">
            <div
                className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-70"
                aria-hidden
                style={{
                    background: 'radial-gradient(circle, rgba(184, 227, 233, 0.5) 0%, transparent 70%)',
                }}
            />
            <div
                className="pointer-events-none absolute inset-0 z-[1]"
                aria-hidden
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(11, 46, 51, 0.09) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(11, 46, 51, 0.09) 1px, transparent 1px)
          `,
                    backgroundSize: '32px 32px',
                }}
            />

            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#4F7C82]">
                        SUPPORT
                    </p>
                    <h2 className="text-3xl font-black tracking-tighter text-[#0B2E33] md:text-5xl">
                        Fruupy FAQ · <span className="text-[#4F7C82]">fruupy.com</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#0B2E33]/65">
                        Common questions about <strong className="text-[#0B2E33]">Fruupy</strong>,{' '}
                        <span className="font-medium text-[#4F7C82]">fruupy.com</span>, free online calculators, privacy, and
                        how Fruupy fits into your daily workflow — from EMI checks to Pomodoro timers.
                    </p>
                </div>

                <div className="overflow-hidden rounded-3xl border border-[#93B1B5]/40 bg-white shadow-sm">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className="group border-b border-[#93B1B5]/25 last:border-b-0">
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="flex w-full items-center justify-between px-6 py-6 text-left transition-all hover:bg-[#F8FBFC]"
                                >
                                    <span className="text-sm font-medium text-[#0B2E33] sm:text-base group-hover:text-[#0B2E33]">
                                        {faq.question}
                                    </span>
                                    <span className="ml-6 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#93B1B5]/50 bg-[#F8FBFC] text-[#4F7C82] transition-colors group-hover:border-[#4F7C82] group-hover:bg-white">
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
                                            <div className="px-6 pb-6 pr-12 text-sm leading-relaxed text-[#0B2E33]/70">
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
