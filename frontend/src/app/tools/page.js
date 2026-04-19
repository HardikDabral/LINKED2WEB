'use client'
import { useState } from 'react'
import Link from 'next/link'
import {
  Calendar, Calculator, Timer, TimerOff, ClipboardList, Clock, Search,
  DollarSign, RefreshCcw, Wallet, Split, Scale, Droplets, Moon, FileText,
  Percent, Binary, Braces, GraduationCap, Palette, Image, Wifi, QrCode,
  Shuffle, Dices, ImagePlus, Languages, Receipt, ArrowRight, CheckCircle2,
  TrendingUp, ShieldCheck, Zap
} from 'lucide-react'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')

  const tools = [
    {
      id: 'age-calculator',
      name: 'Age Calculator',
      description: 'Calculate your exact age from date of birth with years, months, and days.',
      icon: Calculator,
      category: 'Date & Time'
    },
    {
      id: 'day-counter',
      name: 'Day Counter',
      description: 'Count the exact number of days between any two dates accurately.',
      icon: Calendar,
      category: 'Date & Time'
    },
    {
      id: 'countdown-timer',
      name: 'Countdown Timer',
      description: 'Set a precise timer for your important events or deadlines.',
      icon: Timer,
      category: 'Date & Time'
    },
    {
      id: 'stopwatch',
      name: 'Stopwatch',
      description: 'Track elapsed time with millisecond precision online.',
      icon: TimerOff,
      category: 'Date & Time'
    },
    {
      id: 'todo-list',
      name: 'To-Do List',
      description: 'Create, manage, and track your daily tasks efficiently.',
      icon: ClipboardList,
      category: 'Productivity'
    },
    {
      id: 'pomodoro',
      name: 'Pomodoro Timer',
      description: 'Boost focus and productivity with the Pomodoro technique.',
      icon: Clock,
      category: 'Productivity'
    },
    {
      id: 'emi-calculator',
      name: 'EMI Calculator',
      description: 'Calculate Home, Car, or Personal Loan EMIs instantly.',
      icon: DollarSign,
      category: 'Finance'
    },
    {
      id: 'gst-calculator',
      name: 'GST Calculator',
      description: 'Calculate GST amounts with customizable tax rates.',
      icon: Receipt,
      category: 'Finance'
    },
    {
      id: 'interest-calculator',
      name: 'Interest Calculator',
      description: 'Calculate Simple and Compound Interest on your savings.',
      icon: RefreshCcw,
      category: 'Finance'
    },
    {
      id: 'salary-calculator',
      name: 'Salary Calculator',
      description: 'Compute your take-home pay after all tax deductions.',
      icon: Wallet,
      category: 'Finance'
    },
    {
      id: 'expense-splitter',
      name: 'Expense Splitter',
      description: 'Split restaurant bills or trip expenses among friends.',
      icon: Split,
      category: 'Finance'
    },
    {
      id: 'tip-calculator',
      name: 'Tip Calculator',
      description: 'Quickly calculate tips and split the total bill.',
      icon: Calculator,
      category: 'Finance'
    },
    {
      id: 'discount-calculator',
      name: 'Discount Calculator',
      description: 'Calculate savings and final prices during sales.',
      icon: DollarSign,
      category: 'Finance'
    },
    {
      id: 'bmi-calculator',
      name: 'BMI Calculator',
      description: 'Check your Body Mass Index and health category.',
      icon: Scale,
      category: 'Health & Fitness'
    },
    {
      id: 'calorie-calculator',
      name: 'Calorie Calculator',
      description: 'Estimate daily calorie needs based on activity levels.',
      icon: Calculator,
      category: 'Health & Fitness'
    },
    {
      id: 'water-intake-calculator',
      name: 'Water Intake Calculator',
      description: 'Find out how much water you should drink daily.',
      icon: Droplets,
      category: 'Health & Fitness'
    },
    {
      id: 'sleep-calculator',
      name: 'Sleep Calculator',
      description: 'Optimize your sleep cycles for a better morning.',
      icon: Moon,
      category: 'Health & Fitness'
    },
    {
      id: 'gpa-calculator',
      name: 'GPA Calculator',
      description: 'Calculate your academic Grade Point Average easily.',
      icon: GraduationCap,
      category: 'Education'
    },
    {
      id: 'word-counter',
      name: 'Word Counter',
      description: 'Count words, characters, and sentences in your text.',
      icon: FileText,
      category: 'Education'
    },
    {
      id: 'percentage-calculator',
      name: 'Percentage Calculator',
      description: 'Solve percentage problems and find values quickly.',
      icon: Percent,
      category: 'Education'
    },
    {
      id: 'math-solver',
      name: 'Math Solver',
      description: 'Solve arithmetic and algebraic equations instantly.',
      icon: Binary,
      category: 'Education'
    },
    {
      id: 'json-formatter',
      name: 'JSON Formatter',
      description: 'Format, validate and beautify your JSON data.',
      icon: Braces,
      category: 'Tech'
    },
    {
      id: 'base64-tool',
      name: 'Base64 Tool',
      description: 'Encode and decode text to Base64 format online.',
      icon: Binary,
      category: 'Tech'
    },
    {
      id: 'color-picker',
      name: 'Color Picker',
      description: 'Get HEX and RGB codes from an intuitive color tool.',
      icon: Palette,
      category: 'Tech'
    },
    {
      id: 'image-resizer',
      name: 'Image Resizer',
      description: 'Resize and optimize any image file for the web.',
      icon: Image,
      category: 'Tech'
    },
    {
      id: 'wifi-speed-test',
      name: 'WiFi Speed Test',
      description: 'Check your internet upload and download speeds.',
      icon: Wifi,
      category: 'Tech'
    },
    {
      id: 'qr-generator',
      name: 'QR Code Generator',
      description: 'Generate customizable QR codes for links and text.',
      icon: QrCode,
      category: 'Miscellaneous'
    },
    {
      id: 'random-name-picker',
      name: 'Random Picker',
      description: 'Pick random items or names from any custom list.',
      icon: Shuffle,
      category: 'Miscellaneous'
    },
    {
      id: 'decision-maker',
      name: 'Decision Maker',
      description: 'Flip a coin or use a random choice for quick decisions.',
      icon: Dices,
      category: 'Miscellaneous'
    },
    {
      id: 'meme-generator',
      name: 'Meme Generator',
      description: 'Create funny viral memes with custom text and images.',
      icon: ImagePlus,
      category: 'Miscellaneous'
    },
    {
      id: 'language-translator',
      name: 'Translator',
      description: 'Translate text between 50+ languages instantly.',
      icon: Languages,
      category: 'Education'
    },
  ]

  const categories = [...new Set(tools.map(t => t.category))]

  const filteredTools = tools.filter(tool =>
    tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Fruupy - Free Online Tools",
            "url": "https://www.fruupy.com",
            "description": "Premium collection of free online calculators, SEO tools, and digital utilities.",
            "publisher": {
              "@type": "Person",
              "name": "Explore with Ramesh"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-16 pb-16 md:pt-24 md:pb-24 px-4 overflow-hidden bg-gradient-to-b from-white to-[#F8FBFC]">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B2E33]/5 border border-[#0B2E33]/10 text-[#0B2E33] text-xs font-semibold mb-6 animate-fade-in">
            <TrendingUp size={14} />
            <span>Trusted by 10,000+ Daily Users</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#0B2E33] tracking-tight mb-6 leading-tight">
            Free Online <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2E33] to-[#4F7C82]">SEO, Marketing</span> & Utility Tools
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-[#0B2E33]/70 mb-10 leading-relaxed">
            Boost your productivity with <strong>Fruupy's</strong> premium collection of 100% free online tools. Whether you need an <strong>EMI calculator</strong> for finance, a <strong>Word Counter</strong> for SEO, or a <strong>BMI calculator</strong> for health, we provide fast and accurate results without any login or subscription. Explore with Ramesh our wide range of utilities designed for professionals and students alike.
          </p>

          <div className="relative max-w-2xl mx-auto group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#0B2E33]/20 to-[#4F7C82]/20 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex items-center bg-white border border-[#93B1B5]/40 rounded-2xl p-2 shadow-2xl">
              <div className="pl-4 pr-2">
                <Search className="w-5 h-5 text-[#0B2E33]/50" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 30+ tools (e.g., 'EMI', 'Word Counter', 'BMI')..."
                className="w-full py-3 px-2 bg-transparent text-[#0B2E33] placeholder-[#0B2E33]/40 focus:outline-none font-medium"
              />
              <button className="bg-[#0B2E33] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#0B2E33]/90 transition-all shadow-lg active:scale-95 hidden sm:block">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Floating background elements */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-[#B8E3E9]/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-[#0B2E33]/5 rounded-full blur-[100px] pointer-events-none"></div>
      </section>

      {/* Featured Tools Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-[#0B2E33] mb-2">Our Popular Tools</h2>
            <p className="text-[#0B2E33]/60">Most used utilities by our community this week.</p>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide no-scrollbar max-w-full">
            {['All', ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setSearchQuery(cat === 'All' ? '' : cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${(searchQuery === cat || (cat === 'All' && searchQuery === ''))
                    ? 'bg-[#0B2E33] text-white shadow-md'
                    : 'bg-white border border-[#93B1B5]/40 text-[#0B2E33] hover:border-[#0B2E33]'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTools.map((tool) => (
            <Link
              key={tool.id}
              href={`/tools/${tool.id}`}
              className="group relative bg-white border border-[#93B1B5]/30 rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4 inline-flex p-3 rounded-xl bg-[#0B2E33]/5 text-[#0B2E33] group-hover:bg-[#0B2E33] group-hover:text-white transition-colors">
                <tool.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#0B2E33] mb-2">{tool.name}</h3>
              <p className="text-sm text-[#0B2E33]/70 mb-6 line-clamp-2">{tool.description}</p>
              <div className="flex items-center text-sm font-bold text-[#0B2E33] group-hover:gap-2 transition-all">
                Try Tool <ArrowRight size={16} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg text-[#0B2E33]/60 mb-4">No tools found matching "{searchQuery}"</p>
            <button onClick={() => setSearchQuery('')} className="text-[#0B2E33] font-bold underline">Clear search</button>
          </div>
        )}
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-[#0B2E33] mb-6">Need a Custom Tool?</h2>
        <p className="max-w-xl mx-auto text-[#0B2E33]/70 mb-10 leading-relaxed text-lg">
          We are always building new features! If there's a specific calculator or utility you need, let us know and we'll build it for you.
        </p>
        <Link href="/about" className="inline-flex items-center gap-2 bg-[#0B2E33] text-white px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-2xl active:scale-95">
          Contact Support <ArrowRight size={20} />
        </Link>
      </section>
    </main>
  )
}

