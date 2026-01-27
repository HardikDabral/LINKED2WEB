import Link from 'next/link'
import { Calculator, Calendar, Timer, TimerOff, ClipboardList, Clock, DollarSign, RefreshCcw, Wallet, Split, Scale, Droplets, Moon, GraduationCap, FileText, Percent, Binary, Braces, Palette, Image, Wifi, QrCode, Shuffle, Dices, ImagePlus, Languages, Receipt } from 'lucide-react'

export default function Sidebar() {
  const categories = {
    'Date & Time': [
      { id: 'age-calculator', name: 'Age Calculator', icon: Calculator },
      { id: 'day-counter', name: 'Day Counter', icon: Calendar },
      { id: 'countdown-timer', name: 'Countdown Timer', icon: Timer },
      { id: 'stopwatch', name: 'Stopwatch', icon: TimerOff }
    ],
    'Productivity': [
      { id: 'todo-list', name: 'To-Do List', icon: ClipboardList },
      { id: 'pomodoro', name: 'Pomodoro Timer', icon: Clock }
    ],
    'Finance': [
      { id: 'emi-calculator', name: 'EMI Calculator', icon: DollarSign },
      { id: 'gst-calculator', name: 'GST Calculator', icon: Receipt }, // Add this line
      { id: 'interest-calculator', name: 'Interest Calculator', icon: RefreshCcw },
      { id: 'salary-calculator', name: 'Salary Calculator', icon: Wallet },
      { id: 'expense-splitter', name: 'Expense Splitter', icon: Split },
      { id: 'tip-calculator', name: 'Tip Calculator', icon: Calculator },
      { id: 'discount-calculator', name: 'Discount Calculator', icon: DollarSign }
    ],
    'Health & Fitness': [
      { id: 'bmi-calculator', name: 'BMI Calculator', icon: Scale },
      { id: 'calorie-calculator', name: 'Calorie Calculator', icon: Calculator },
      { id: 'water-intake-calculator', name: 'Water Intake Calculator', icon: Droplets },
      { id: 'sleep-calculator', name: 'Sleep Calculator', icon: Moon }
    ],
    'Education & Learning': [
      { id: 'gpa-calculator', name: 'GPA Calculator', icon: GraduationCap },
      { id: 'word-counter', name: 'Word Counter', icon: FileText },
      { id: 'percentage-calculator', name: 'Percentage Calculator', icon: Percent },
      { id: 'math-solver', name: 'Math Equation Solver', icon: Binary },
      { id: 'language-translator', name: 'Language Translator', icon: Languages }
    ],
    'Tech & Coding': [
      { id: 'json-formatter', name: 'JSON Formatter', icon: Braces },
      { id: 'base64-tool', name: 'Base64 Encoder/Decoder', icon: Binary },
      { id: 'color-picker', name: 'Color Picker', icon: Palette },
      { id: 'image-resizer', name: 'Image Resizer', icon: Image },
      { id: 'wifi-speed-test', name: 'WiFi Speed Test', icon: Wifi }
    ],
    'Fun & Miscellaneous': [
      { id: 'qr-generator', name: 'QR Code Generator', icon: QrCode },
      { id: 'random-name-picker', name: 'Random Name Picker', icon: Shuffle },
      { id: 'decision-maker', name: 'Decision Maker', icon: Dices },
      { id: 'meme-generator', name: 'Meme Generator', icon: ImagePlus }
    ]
  }

  return (
    <div className="hidden md:block w-64 h-[calc(100vh-4rem)] fixed left-0 top-16 backdrop-blur-xl border-r border-[#93B1B5]/20">
      <nav className="p-6 h-full flex flex-col">
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          {Object.entries(categories).map(([category, tools]) => (
            <div key={category} className="mb-6">
              <h2 className="text-sm font-semibold bg-gradient-to-r from-[#0B2E33] to-[#4F7C82] text-transparent bg-clip-text mb-3">
                {category}
              </h2>
              <ul className="space-y-1">
                {tools.map(tool => (
                  <li key={tool.id}>
                    <Link
                      href={`/${tool.id}`}
                      className="flex items-center px-3 py-2.5 rounded-lg hover:bg-[#B8E3E9]/20 group transition-all duration-300"
                    >
                      <tool.icon className="w-5 h-5 mr-3 text-[#0B2E33]/60 group-hover:text-[#0B2E33] transition-colors" />
                      <span className="text-[#0B2E33]/80 group-hover:text-[#0B2E33] transition-colors">{tool.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>
    </div>
  )
}