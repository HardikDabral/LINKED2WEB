'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Calendar, Calculator, Timer, TimerOff, ClipboardList, Clock, Search, DollarSign, RefreshCcw, Wallet, Split, Scale, Droplets, Moon, FileText, Percent, Binary, Braces, GraduationCap, Palette, Image, Wifi, QrCode, Shuffle, Dices, ImagePlus, Languages, Receipt } from 'lucide-react'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const tools = [
    {
      id: 'age-calculator',
      name: 'Age Calculator',
      description: 'Calculate your exact age from date of birth with precision.',
      icon: Calculator,
      category: 'Date & Time'
    },
    {
      id: 'day-counter',
      name: 'Day Counter',
      description: 'Count the exact number of days between any two dates.',
      icon: Calendar,
      category: 'Date & Time'
    },
    {
      id: 'countdown-timer',
      name: 'Countdown Timer',
      description: 'Set a timer for events or deadlines.',
      icon: Timer,
      category: 'Date & Time'
    },
    {
      id: 'stopwatch',
      name: 'Stopwatch',
      description: 'Track elapsed time with precision.',
      icon: TimerOff,
      category: 'Date & Time'
    },
    {
      id: 'todo-list',
      name: 'To-Do List',
      description: 'Create and manage tasks efficiently.',
      icon: ClipboardList,
      category: 'Productivity'
    },
    {
      id: 'pomodoro',
      name: 'Pomodoro Timer',
      description: 'Boost productivity with timed work sessions.',
      icon: Clock,
      category: 'Productivity'
    },
    {
      id: 'emi-calculator',
      name: 'EMI Calculator',
      description: 'Calculate loan EMIs (Home, Car, Personal).',
      icon: DollarSign,
      category: 'Finance'
    },
    {
      id: 'gst-calculator',
      name: 'GST Calculator',
      description: 'Calculate GST amounts and total price with different tax rates.',
      icon: Receipt,
      category: 'Finance'
    },
    {
      id: 'interest-calculator',
      name: 'Interest Calculator',
      description: 'Calculate Simple & Compound Interest easily.',
      icon: RefreshCcw,
      category: 'Finance'
    },
    {
      id: 'salary-calculator',
      name: 'Salary Calculator',
      description: 'Compute take-home pay after deductions.',
      icon: Wallet,
      category: 'Finance'
    },
    {
      id: 'expense-splitter',
      name: 'Expense Splitter',
      description: 'Split bills among friends easily.',
      icon: Split,
      category: 'Finance'
    },
    {
      id: 'tip-calculator',
      name: 'Tip Calculator',
      description: 'Calculate tips for services.',
      icon: Calculator,
      category: 'Finance'
    },
    {
      id: 'discount-calculator',
      name: 'Discount Calculator',
      description: 'Find the final price after discounts.',
      icon: DollarSign,
      category: 'Finance'
    },
    // New Health & Fitness Section
    {
      id: 'bmi-calculator',
      name: 'BMI Calculator',
      description: 'Calculate Body Mass Index and check your weight category.',
      icon: Scale,
      category: 'Health & Fitness'
    },
    {
      id: 'calorie-calculator',
      name: 'Calorie Calculator',
      description: 'Estimate daily calorie needs based on your lifestyle.',
      icon: Calculator,
      category: 'Health & Fitness'
    },
    {
      id: 'water-intake-calculator',
      name: 'Water Intake Calculator',
      description: 'Calculate your daily water requirement.',
      icon: Droplets,
      category: 'Health & Fitness'
    },
    {
      id: 'sleep-calculator',
      name: 'Sleep Calculator',
      description: 'Find the best times to sleep or wake up.',
      icon: Moon,
      category: 'Health & Fitness'
    },
    {
      id: 'gpa-calculator',
      name: 'GPA Calculator',
      description: 'Calculate your Grade Point Average (GPA).',
      icon: GraduationCap,
      category: 'Education & Learning'
    },
    {
      id: 'word-counter',
      name: 'Word Counter',
      description: 'Count words, characters, and sentences in your text.',
      icon: FileText,
      category: 'Education & Learning'
    },
    {
      id: 'percentage-calculator',
      name: 'Percentage Calculator',
      description: 'Calculate percentages and find values easily.',
      icon: Percent,
      category: 'Education & Learning'
    },
    {
      id: 'math-solver',
      name: 'Math Equation Solver',
      description: 'Solve arithmetic, linear, and quadratic equations.',
      icon: Binary,
      category: 'Education & Learning'
    },
    {
      id: 'json-formatter',
      name: 'JSON Formatter',
      description: 'Format, validate and beautify JSON data.',
      icon: Braces,
      category: 'Tech & Coding'
    },
    {
      id: 'base64-tool',
      name: 'Base64 Encoder/Decoder',
      description: 'Convert text to and from Base64 format.',
      icon: Binary,
      category: 'Tech & Coding'
    },
    {
      id: 'color-picker',
      name: 'Color Picker',
      description: 'Pick and convert colors between HEX and RGB formats.',
      icon: Palette,
      category: 'Tech & Coding'
    },
    {
      id: 'image-resizer',
      name: 'Image Resizer',
      description: 'Resize and optimize your images online.',
      icon: Image,
      category: 'Tech & Coding'
    },
    {
      id: 'wifi-speed-test',
      name: 'WiFi Speed Test',
      description: 'Test your internet connection speed.',
      icon: Wifi,
      category: 'Tech & Coding'
    },
    // New Fun & Miscellaneous section
    {
      id: 'qr-generator',
      name: 'QR Code Generator',
      description: 'Generate QR codes for links or text.',
      icon: QrCode,
      category: 'Fun & Miscellaneous'
    },
    {
      id: 'random-name-picker',
      name: 'Random Name Picker',
      description: 'Pick random names from a list easily.',
      icon: Shuffle,
      category: 'Fun & Miscellaneous'
    },
    {
      id: 'decision-maker',
      name: 'Decision Maker',
      description: 'Flip a coin or pick a random choice for decisions.',
      icon: Dices,
      category: 'Fun & Miscellaneous'
    },
    {
      id: 'meme-generator',
      name: 'Meme Generator',
      description: 'Create custom memes with your own images and text.',
      icon: ImagePlus,
      category: 'Fun & Miscellaneous'
    },
    {
      id: 'language-translator',
      name: 'Language Translator',
      description: 'Quick and easy translations between multiple languages.',
      icon: Languages,
      category: 'Education & Learning'
    },
  ]
  const filteredTools = tools.filter(tool => 
    tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Handy Helper Tools Collection",
            "description": "Collection of free online calculators and utility tools",
            "itemListElement": tools.slice(0, 10).map((tool, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": tool.name,
              "url": `https://handy-helper.vercel.app/${tool.id}`
            }))
          })
        }}
      />
      <div className="max-w-7xl mx-auto px-4 pt-14 md:pt-18 pb-8  min-h-[calc(100vh-4rem)]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#0B2E33]">
              Free Online Calculators & Tools - Handy Helper
            </h1>
            <p className="text-sm md:text-base text-[#0B2E33]/90">A collection of useful tools to help you with everyday tasks.</p>
          </div>
          
          <div className="relative max-w-md w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tools..."
              className="w-full px-4 py-2.5 pr-10 rounded-lg bg-white/50 backdrop-blur-xl border border-[#93B1B5]/40 text-[#0B2E33] placeholder-[#0B2E33]/60 focus:outline-none focus:border-[#0B2E33] focus:ring-2 focus:ring-[#0B2E33]/20"
            />
            <Search className="w-5 h-5 text-[#0B2E33]/70 absolute right-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredTools.map((tool) => (
            <Link
              key={tool.id}
              href={`/${tool.id}`}
              className="group block bg-white/50 backdrop-blur-xl rounded-xl p-4 md:p-6 hover:bg-white/60 transition-all duration-300 border border-[#93B1B5]/40 hover:border-[#0B2E33]/40"
            >
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="p-2 md:p-3 rounded-lg bg-[#0B2E33] text-white">
                  <tool.icon className="w-4 h-4 md:w-6 md:h-6" />
                </div>
                <div>
                  <h2 className="text-base md:text-lg font-semibold text-[#0B2E33] mb-1">{tool.name}</h2>
                  <p className="text-xs md:text-sm text-[#0B2E33]/80 mb-2 md:mb-3">{tool.description}</p>
                  <span className="text-xs md:text-sm text-[#0B2E33] font-medium flex items-center gap-1">
                    Use Tool 
                    <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </>
  )
}
