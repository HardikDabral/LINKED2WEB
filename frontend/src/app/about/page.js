'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function About() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)
    const [isHovered, setIsHovered] = useState(false)
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
        window.location.href = 'mailto:support@toolscalculator.com?subject=Inquiry from Tools Calculator'
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
                        About Handy Helper - Free Online Calculators & Tools
                    </motion.h1>

                    <motion.div
                        className="space-y-6 text-lg text-[#0B2E33]/90 bg-white/50 backdrop-blur-xl rounded-xl p-6 md:p-8 border border-[#93B1B5]/40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <p className="leading-relaxed">
                            Tools Calculator is a free online platform designed to make your everyday calculations fast and stress-free. Our goal is to help users save time by offering simple and accurate calculators in one place.
                        </p>

                        <p className="leading-relaxed">
                            We understand that not everyone is a math expert, and sometimes small calculations can be confusing. That's why we created Tools Calculator – to provide easy tools for all. Whether you want to find out your Body Mass Index (BMI), calculate your loan EMI, convert units, or check your age in seconds – our tools are ready to help.
                        </p>

                        <motion.h2
                            className="text-2xl md:text-3xl font-semibold text-[#0B2E33] mt-8 mb-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            What Makes Us Special?
                        </motion.h2>

                        <ul className="space-y-2 list-none pl-0">
                            <motion.li
                                className="flex items-center gap-2"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7, duration: 0.4 }}
                            >
                                <span className="text-[#0B2E33] font-bold">•</span> <span className="font-medium">Simple Interface:</span> Anyone can use our tools without any technical knowledge.
                            </motion.li>
                            <motion.li
                                className="flex items-center gap-2"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8, duration: 0.4 }}
                            >
                                <span className="text-[#0B2E33] font-bold">•</span> <span className="font-medium">Mobile Responsive:</span> Our website looks and works great on mobile devices too.
                            </motion.li>
                            <motion.li
                                className="flex items-center gap-2"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.9, duration: 0.4 }}
                            >
                                <span className="text-[#0B2E33] font-bold">•</span> <span className="font-medium">Fast Results:</span> Get answers in seconds, without delay.
                            </motion.li>
                            <motion.li
                                className="flex items-center gap-2"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.0, duration: 0.4 }}
                            >
                                <span className="text-[#0B2E33] font-bold">•</span> <span className="font-medium">Free for All:</span> No charges, no sign-ups – just visit and calculate.
                            </motion.li>
                        </ul>

                        <p className="leading-relaxed mt-6">
                            We are always working to add more tools and improve your experience. Your feedback helps us grow, so we always welcome your suggestions and ideas.
                        </p>

                        <p className="leading-relaxed">
                            Whether you're a student solving homework, a professional working with numbers, or just someone looking for an answer – Tools Calculator is the right place for you.
                        </p>

                        <p className="leading-relaxed">
                            We believe that the right tools should be available to everyone, easily and freely. That's why Tools Calculator is here – making daily life easier, one calculation at a time.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Contact Section */}
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                >
                    <motion.h2
                        className="text-4xl font-bold text-[#0B2E33] mb-8 text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.3, duration: 0.6 }}
                    >
                        Contact Us
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Contact Info */}
                        <motion.div
                            className="bg-white/50 backdrop-blur-xl rounded-xl p-6 md:p-8 border border-[#93B1B5]/40 hover:bg-white/60 transition-all duration-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.4, duration: 0.6 }}
                            whileHover={{ scale: 1.01 }}
                        >
                            <h3 className="text-2xl font-semibold text-[#0B2E33] mb-6">Get in Touch</h3>
                            <p className="text-[#0B2E33]/90 mb-6">
                                We're happy to hear from you! If you have any questions, feedback, or suggestions, feel free to contact us.
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
                            <h3 className="text-2xl font-semibold text-[#0B2E33] mb-6">Send a Message</h3>

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
                                All messages are answered within 24–48 hours.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </main>
    )
}

