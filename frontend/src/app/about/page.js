'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function About() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const form = useRef() // Add this line
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus(null)

        // Replace with your EmailJS service ID, template ID, and public key
        // At the top of your file, after the imports
        const PUBLIC_KEY = "7gepOB29LyC_EFpEi"
        const TEMPLATE_ID = "template_fjmaxvi"
        
        // In your handleSubmit function, update these values:
        emailjs.sendForm(
          'service_nvzwvfx', // You need to provide your service ID from EmailJS
          TEMPLATE_ID,
          form.current,
          PUBLIC_KEY
        )
            .then((result) => {
                setIsSubmitting(false)
                setSubmitStatus('success')
                setFormData({ name: '', email: '', message: '' })
            }, (error) => {
                setIsSubmitting(false)
                setSubmitStatus('error')
                console.error(error)
            })
    }

    const handleEmailClick = () => {
        window.location.href =
            'mailto:handyhelpertoolscalculator@gmail.com?subject=' +
            encodeURIComponent('Inquiry from Fruupy (fruupy.com)')
    }

    return (
        <main className="min-h-[calc(100vh-4rem)]">
            <div className="container mx-auto px-4 py-12 md:py-16">
                {/* About Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto mb-16"
                >
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-[#0B2E33] mb-8 text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        About Fruupy — Free Online Calculators &amp; Tools on fruupy.com
                    </motion.h1>
                    <p className="mx-auto mb-10 max-w-3xl text-center text-base leading-relaxed text-[#0B2E33]/75 md:text-lg">
                        This About page explains what <strong className="text-[#0B2E33]">Fruupy</strong> is, how{' '}
                        <span className="font-medium text-[#4F7C82]">fruupy.com</span> fits into your day, and how to reach the
                        team behind Fruupy. Whether you discovered Fruupy through search, a friend&apos;s Fruupy link, or the
                        Fruupy landing page, you are on the official Fruupy story — always verify you are browsing{' '}
                        <span className="font-medium text-[#4F7C82]">fruupy.com</span> for authentic Fruupy tools.
                    </p>

                    <motion.article
                        className="space-y-6 text-base md:text-lg text-[#0B2E33]/90 bg-white/50 backdrop-blur-xl rounded-xl p-6 md:p-8 border border-[#93B1B5]/40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <p className="leading-relaxed">
                            <strong className="text-[#0B2E33]">Fruupy</strong> at{' '}
                            <span className="font-medium text-[#4F7C82]">fruupy.com</span> is a free online hub for calculators
                            and lightweight utilities — the kind of small math and productivity jobs that interrupt your day if
                            you do not have a trustworthy tab open. Fruupy exists so you can estimate loan payments, check BMI,
                            count days between dates, run a Pomodoro session, or tally words for a draft without installing
                            desktop software, fighting paywalls, or signing up for accounts you will never use again.
                        </p>

                        <p className="leading-relaxed">
                            The Fruupy project is built and maintained with input from{' '}
                            <strong className="text-[#0B2E33]">Explore with Ramesh</strong>, with an emphasis on clear labels,
                            honest formulas, and pages that read well on phones as well as laptops. When you share a Fruupy link,
                            you are pointing someone to the same Fruupy EMI calculator or Fruupy age tool you used — URLs on
                            fruupy.com are meant to be bookmarked, sent in chat, and revisited whenever the next question pops up.
                        </p>

                        <motion.h2
                            className="text-2xl md:text-3xl font-semibold text-[#0B2E33] mt-8 mb-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            What you will find on Fruupy
                        </motion.h2>

                        <p className="leading-relaxed">
                            Fruupy groups tools into categories that match how people actually search: finance Fruupy pages for
                            loans, interest, and tax-style estimates; health-related Fruupy calculators such as BMI; date and
                            time Fruupy utilities for age, countdowns, and duration; and productivity Fruupy helpers including
                            timers, lists, and writing stats. Each Fruupy page is designed to answer one primary question quickly,
                            then offer enough context that you understand what the numbers mean — without turning fruupy.com into
                            a wall of ads or unrelated content.
                        </p>

                        <motion.h2
                            className="text-2xl md:text-3xl font-semibold text-[#0B2E33] mt-8 mb-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.65, duration: 0.6 }}
                        >
                            Why Fruupy stays simple
                        </motion.h2>

                        <ul className="space-y-3 list-none pl-0">
                            <motion.li
                                className="flex gap-2 leading-relaxed"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7, duration: 0.4 }}
                            >
                                <span className="text-[#0B2E33] font-bold shrink-0">•</span>
                                <span>
                                    <span className="font-medium text-[#0B2E33]">Plain interfaces:</span> Fruupy tools favor large
                                    inputs, readable results, and short explanations so you are not hunting for the calculate
                                    button on fruupy.com.
                                </span>
                            </motion.li>
                            <motion.li
                                className="flex gap-2 leading-relaxed"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8, duration: 0.4 }}
                            >
                                <span className="text-[#0B2E33] font-bold shrink-0">•</span>
                                <span>
                                    <span className="font-medium text-[#0B2E33]">Mobile-first layouts:</span> Fruupy is used on
                                    commutes and shop floors; fruupy.com scales typography and spacing so touch targets stay
                                    comfortable on small screens.
                                </span>
                            </motion.li>
                            <motion.li
                                className="flex gap-2 leading-relaxed"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.9, duration: 0.4 }}
                            >
                                <span className="text-[#0B2E33] font-bold shrink-0">•</span>
                                <span>
                                    <span className="font-medium text-[#0B2E33]">Fast feedback:</span> Fruupy aims for instant or
                                    near-instant results once you enter valid numbers, keeping your flow when you are juggling
                                    tabs.
                                </span>
                            </motion.li>
                            <motion.li
                                className="flex gap-2 leading-relaxed"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.0, duration: 0.4 }}
                            >
                                <span className="text-[#0B2E33] font-bold shrink-0">•</span>
                                <span>
                                    <span className="font-medium text-[#0B2E33]">Free access:</span> Core Fruupy calculators and
                                    utilities on fruupy.com are free to use for typical personal and small-business tasks, with no
                                    mandatory signup.
                                </span>
                            </motion.li>
                        </ul>

                        <motion.h2
                            className="text-2xl md:text-3xl font-semibold text-[#0B2E33] mt-8 mb-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.05, duration: 0.6 }}
                        >
                            Trust, privacy, and accurate math on fruupy.com
                        </motion.h2>

                        <p className="leading-relaxed">
                            Fruupy is built for everyday estimates — not for replacing bankers, doctors, or accountants. Always
                            double-check high-stakes numbers with a professional and official paperwork. For how Fruupy handles
                            cookies, analytics, and general privacy topics, read the Fruupy Privacy Policy linked in the site
                            footer. If you spot a bug on a Fruupy page or believe a formula should be documented differently,
                            email the team using the contact details below; those messages directly influence Fruupy roadmaps and
                            copy updates.
                        </p>

                        <p className="leading-relaxed">
                            Whether you are a student verifying homework, a creator timing focus blocks, a shop owner roughing
                            out margins, or a parent planning a budget, Fruupy wants fruupy.com to be the calm tab you open when
                            you need an answer and then close when you are done — no clutter, no guilt, just useful Fruupy tools
                            that respect your time.
                        </p>

                        <h2 className="mt-10 text-2xl font-semibold text-[#0B2E33] md:text-3xl">
                            Popular Fruupy calculators and Fruupy utilities on fruupy.com
                        </h2>
                        <p className="leading-relaxed">
                            The Fruupy library on <span className="font-medium text-[#4F7C82]">fruupy.com</span> keeps growing, but
                            many visitors start with the same Fruupy pages: the Fruupy EMI calculator for loans, the Fruupy BMI
                            calculator for quick health checks, the Fruupy GST calculator for tax-style estimates, the Fruupy age
                            calculator and Fruupy day counter for dates, the Fruupy percentage calculator for discounts and marks,
                            and Fruupy productivity helpers like the Fruupy Pomodoro timer, Fruupy stopwatch, and Fruupy to-do
                            list. Fruupy also hosts creative and technical Fruupy tools — for example Fruupy QR generator flows,
                            Fruupy word counter sessions for writers, and Fruupy formatters developers open beside their editors.
                            Every Fruupy URL on fruupy.com is a standalone Fruupy experience: you can deep-link a Fruupy tool in
                            chat, assign a Fruupy bookmark folder in your browser, or pin Fruupy on your phone&apos;s home screen
                            so Fruupy is one tap away.
                        </p>
                        <ul className="list-none space-y-2 pl-0">
                            <li className="flex gap-2 leading-relaxed">
                                <span className="shrink-0 font-bold text-[#4F7C82]">Fruupy ·</span>
                                <span>
                                    Finance on Fruupy at fruupy.com — EMI, interest, GST, tips, discounts, salary estimates, and
                                    related Fruupy calculators for money questions you need answered before a meeting.
                                </span>
                            </li>
                            <li className="flex gap-2 leading-relaxed">
                                <span className="shrink-0 font-bold text-[#4F7C82]">Fruupy ·</span>
                                <span>
                                    Health and lifestyle Fruupy pages — BMI, calories, water intake, sleep timing, and other Fruupy
                                    utilities that translate inputs into numbers you can discuss with a professional later.
                                </span>
                            </li>
                            <li className="flex gap-2 leading-relaxed">
                                <span className="shrink-0 font-bold text-[#4F7C82]">Fruupy ·</span>
                                <span>
                                    Date, time, and focus Fruupy tools — age, countdowns, day counters, Pomodoro, stopwatch, and
                                    Fruupy timers that make fruupy.com a tab you keep open while you work.
                                </span>
                            </li>
                        </ul>

                        <h2 className="mt-10 text-2xl font-semibold text-[#0B2E33] md:text-3xl">
                            How Fruupy works when you visit fruupy.com
                        </h2>
                        <p className="leading-relaxed">
                            Using Fruupy is intentional friction reduction. You type <span className="font-medium text-[#4F7C82]">fruupy.com</span> into your
                            browser (or follow a Fruupy search result that points to fruupy.com), pick the Fruupy tool that
                            matches your task, enter the numbers or text Fruupy asks for, and read the Fruupy output on the same
                            Fruupy page. Most Fruupy calculators on fruupy.com do not require a Fruupy account — the point of
                            Fruupy is speed. When Fruupy updates a formula or improves Fruupy copy, those changes appear on
                            fruupy.com for every Fruupy visitor, so sharing a Fruupy link means your classmates or coworkers see
                            the same Fruupy experience you do.
                        </p>
                        <p className="leading-relaxed">
                            Fruupy optimizes fruupy.com for phones because Fruupy users open Fruupy on the bus, at a counter, and
                            between meetings. Large Fruupy buttons, readable Fruupy typography, and short Fruupy helper text keep
                            the Fruupy interface calm even when you only have one hand free. If a Fruupy page ever feels unclear,
                            tell Fruupy — the Fruupy team refines fruupy.com based on real Fruupy feedback.
                        </p>

                        <h2 className="mt-10 text-2xl font-semibold text-[#0B2E33] md:text-3xl">
                            Who uses Fruupy, and why fruupy.com matters to them
                        </h2>
                        <p className="leading-relaxed">
                            Students use Fruupy on fruupy.com for homework checks, word counts, and quick Fruupy percentage math.
                            Freelancers use Fruupy invoices-side — Fruupy GST estimates, Fruupy timers for billing blocks, Fruupy
                            QR codes for portfolios. Shop owners use Fruupy margin shortcuts on fruupy.com before they commit
                            numbers to a ledger. Parents use Fruupy family-planning Fruupy calculators and Fruupy countdowns for
                            trips and exams. Developers keep Fruupy formatters and Fruupy generators in a Fruupy bookmark group.
                            None of these Fruupy personas owe Fruupy a subscription for the core Fruupy catalog; Fruupy is built
                            so fruupy.com stays approachable for occasional Fruupy visits and daily Fruupy power users alike.
                        </p>

                        <h2 className="mt-10 text-2xl font-semibold text-[#0B2E33] md:text-3xl">
                            Fruupy, Explore with Ramesh, and the future of fruupy.com
                        </h2>
                        <p className="leading-relaxed">
                            Fruupy is developed alongside <strong className="text-[#0B2E33]">Explore with Ramesh</strong>, with a
                            focus on teaching-friendly explanations and search-friendly Fruupy page structure. The Fruupy roadmap
                            is shaped by what Fruupy users request through email and forms on fruupy.com: new Fruupy calculators,
                            sharper Fruupy labels, and Fruupy accessibility tweaks. When you invest thirty seconds telling Fruupy
                            what broke or what Fruupy should build next, you help every other Fruupy visitor on fruupy.com.
                        </p>
                        <p className="leading-relaxed">
                            Fruupy will keep publishing policies on fruupy.com so you know how Fruupy approaches privacy and
                            terms. Fruupy is not a bank, clinic, or law firm — Fruupy outputs are informational — yet Fruupy still
                            aims for careful Fruupy math and honest Fruupy disclaimers on every Fruupy screen. Trust Fruupy for
                            quick checks; trust licensed professionals for life-changing Fruupy-adjacent decisions, then use
                            Fruupy on fruupy.com to double-check the arithmetic afterward if you like.
                        </p>

                        <h2 className="mt-10 text-2xl font-semibold text-[#0B2E33] md:text-3xl">
                            Stay connected with Fruupy on fruupy.com
                        </h2>
                        <p className="leading-relaxed">
                            The fastest way to stay current with Fruupy is to bookmark <span className="font-medium text-[#4F7C82]">fruupy.com</span> and revisit
                            Fruupy when you need a new Fruupy tool. Share Fruupy links generously — Fruupy grows when people
                            recommend Fruupy the same way you found Fruupy. If you represent a school, nonprofit, or company that
                            wants to highlight Fruupy in a resource list, you may link directly to fruupy.com or to individual
                            Fruupy calculator pages; Fruupy appreciates attribution to Fruupy by name so readers know they are
                            heading to the real Fruupy site.
                        </p>
                        <p className="leading-relaxed">
                            Below this Fruupy About article, the Fruupy contact section lists how to email Fruupy, call Fruupy
                            during office hours, and send Fruupy a message through the Fruupy form. Fruupy reads those notes and
                            routes them into Fruupy bug trackers and Fruupy content queues. Thank you for choosing Fruupy —{' '}
                            <span className="font-medium text-[#4F7C82]">fruupy.com</span> exists because people like you keep
                            opening Fruupy tabs.
                        </p>
                    </motion.article>
                </motion.div>

                {/* Contact Section */}
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                >
                    <motion.h2
                        className="text-4xl font-bold text-[#0B2E33] mb-3 text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.3, duration: 0.6 }}
                    >
                        Contact Fruupy · fruupy.com
                    </motion.h2>
                    <p className="mx-auto mb-8 max-w-2xl text-center text-sm leading-relaxed text-[#0B2E33]/70 md:text-base">
                        Email Fruupy, call Fruupy during office hours, or use the Fruupy message form — Fruupy responds to
                        fruupy.com questions and Fruupy tool feedback as quickly as possible.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Contact Info */}
                        <motion.div
                            className="bg-white/50 backdrop-blur-xl rounded-xl p-6 md:p-8 border border-[#93B1B5]/40 hover:bg-white/60 transition-all duration-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.4, duration: 0.6 }}
                            whileHover={{ scale: 1.01 }}
                        >
                            <h3 className="text-2xl font-semibold text-[#0B2E33] mb-6">Get in touch with Fruupy</h3>
                            <p className="text-[#0B2E33]/90 mb-6 leading-relaxed">
                                Questions about Fruupy, ideas for new fruupy.com tools, or bug reports about a specific Fruupy
                                calculator? Reach out — feedback shapes which Fruupy pages ship next and how copy on fruupy.com
                                is clarified.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-[#0B2E33] flex items-center justify-center text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-[#0B2E33]/70">Email</p>
                                        <button
                                            onClick={handleEmailClick}
                                            className="text-[#0B2E33] font-medium hover:text-[#4F7C82] transition-colors"
                                        >
                                            handyhelpertoolscalculator@gmail.com
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-[#0B2E33] flex items-center justify-center text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-[#0B2E33]/70">Phone</p>
                                        <p className="text-[#0B2E33] font-medium">+91-7834964514</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-[#0B2E33] flex items-center justify-center text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-[#0B2E33]/70">Office Hours</p>
                                        <p className="text-[#0B2E33] font-medium">Monday to Saturday, 10:00 AM – 6:00 PM</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-[#0B2E33] flex items-center justify-center text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-[#0B2E33]/70">Location</p>
                                        <p className="text-[#0B2E33] font-medium">New Delhi, India</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            className="bg-white/50 backdrop-blur-xl rounded-xl p-6 md:p-8 border border-[#93B1B5]/40 hover:bg-white/60 transition-all duration-300"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.5, duration: 0.6 }}
                            whileHover={{ scale: 1.01 }}
                        >
                            <h3 className="text-2xl font-semibold text-[#0B2E33] mb-6">Send Fruupy a message</h3>

                            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                                {/* Make sure input names match your EmailJS template variables */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-[#0B2E33]/70 mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"  // Changed from user_name to name to match formData structure
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2.5 rounded-lg bg-white/70 border border-[#93B1B5]/40 text-[#0B2E33] placeholder-[#0B2E33]/60 focus:outline-none focus:border-[#0B2E33] focus:ring-2 focus:ring-[#0B2E33]/20"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-[#0B2E33]/70 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2.5 rounded-lg bg-white/70 border border-[#93B1B5]/40 text-[#0B2E33] placeholder-[#0B2E33]/60 focus:outline-none focus:border-[#0B2E33] focus:ring-2 focus:ring-[#0B2E33]/20"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-[#0B2E33]/70 mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows="4"
                                        className="w-full px-4 py-2.5 rounded-lg bg-white/70 border border-[#93B1B5]/40 text-[#0B2E33] placeholder-[#0B2E33]/60 focus:outline-none focus:border-[#0B2E33] focus:ring-2 focus:ring-[#0B2E33]/20 resize-none"
                                    ></textarea>
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#0B2E33] text-white px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-[#4F7C82] mt-4 disabled:opacity-70"
                                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                >
                                    {isSubmitting ? 'Sending...' : 'Submit'}
                                </motion.button>

                                {submitStatus === 'success' && (
                                    <p className="text-green-600 text-center mt-2">Message sent successfully!</p>
                                )}
                                {submitStatus === 'error' && (
                                    <p className="text-red-600 text-center mt-2">Failed to send message. Please try again.</p>
                                )}
                            </form>

                            <p className="text-center text-sm text-[#0B2E33]/70 mt-4">
                                Fruupy aims to reply within 24–48 hours. Mention the Fruupy tool URL on fruupy.com if your note is
                                about a specific Fruupy page.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </main>
    )
}

