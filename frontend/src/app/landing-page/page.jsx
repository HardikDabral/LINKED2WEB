import React from 'react'
import Herosection from '@/components/landing-page/Herosection'
import About from '@/components/landing-page/About'
import CoolSection from '@/components/landing-page/CoolSection'
import WhyUs from '@/components/landing-page/WhyUs'
import Cool2 from '@/components/landing-page/cool2'
import Faq from '@/components/landing-page/Faq'
import Navbar from '@/components/landing-page/Navbar'

export const metadata = {
  title: 'Free Online Calculators & Tools - Handy Helper',
  description: 'Discover powerful free calculators and tools: BMI calculator, EMI calculator, age calculator, percentage calculator, QR generator, language translator, and 30+ more utility tools. Fast, accurate, and completely free.',
  keywords: [
    'free online calculators',
    'BMI calculator',
    'EMI calculator',
    'age calculator',
    'percentage calculator',
    'QR code generator',
    'language translator',
    'meme generator',
    'countdown timer',
    'utility tools',
    'online tools',
    'free calculators',
    'handy helper tools',
    'calculator tools',
    'productivity tools'
  ],
  openGraph: {
    title: 'Free Online Calculators & Tools - Handy Helper',
    description: 'Discover powerful free calculators and tools: BMI calculator, EMI calculator, age calculator, and 30+ more utility tools.',
    type: 'website',
  },
}

const page = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <About />
      <CoolSection />
      <WhyUs />
      <Cool2 />
      <Faq />
    </div>
  )
}

export default page