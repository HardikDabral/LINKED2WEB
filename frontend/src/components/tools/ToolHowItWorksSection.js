'use client'

import { usePathname } from 'next/navigation'

const toolMeta = {
  'age-calculator': { name: 'Age Calculator', description: 'Calculate your exact age from date of birth in years, months, and days.' },
  'day-counter': { name: 'Day Counter', description: 'Count exact days between two dates for planning, travel, and deadlines.' },
  'countdown-timer': { name: 'Countdown Timer', description: 'Create a live countdown for events, launches, and reminders.' },
  stopwatch: { name: 'Stopwatch', description: 'Track elapsed time with lap-style precision in your browser.' },
  'todo-list': { name: 'To-Do List', description: 'Create and manage lightweight tasks for daily productivity.' },
  pomodoro: { name: 'Pomodoro Timer', description: 'Run focused work and break cycles using the Pomodoro method.' },
  'emi-calculator': { name: 'EMI Calculator', description: 'Estimate monthly loan repayments from principal, rate, and tenure.' },
  'gst-calculator': { name: 'GST Calculator', description: 'Add or remove GST instantly using common tax rates.' },
  'interest-calculator': { name: 'Interest Calculator', description: 'Calculate simple or compound interest for savings and loans.' },
  'salary-calculator': { name: 'Salary Calculator', description: 'Estimate take-home salary after deductions and tax assumptions.' },
  'expense-splitter': { name: 'Expense Splitter', description: 'Split shared expenses fairly among friends, teams, or groups.' },
  'tip-calculator': { name: 'Tip Calculator', description: 'Calculate tips and per-person bill split in seconds.' },
  'discount-calculator': { name: 'Discount Calculator', description: 'Find discount amount and final price after savings.' },
  'bmi-calculator': { name: 'BMI Calculator', description: 'Compute body mass index using height and weight values.' },
  'calorie-calculator': { name: 'Calorie Calculator', description: 'Estimate daily calorie needs based on profile and activity.' },
  'water-intake-calculator': { name: 'Water Intake Calculator', description: 'Estimate recommended daily water intake from key factors.' },
  'sleep-calculator': { name: 'Sleep Calculator', description: 'Plan sleep and wake times around sleep cycles.' },
  'gpa-calculator': { name: 'GPA Calculator', description: 'Calculate grade point average from courses and grades.' },
  'word-counter': { name: 'Word Counter', description: 'Count words, characters, and text length metrics instantly.' },
  'percentage-calculator': { name: 'Percentage Calculator', description: 'Solve percentage increase, decrease, and conversion questions.' },
  'math-solver': { name: 'Math Solver', description: 'Evaluate and solve common arithmetic and algebra inputs quickly.' },
  'language-translator': { name: 'Language Translator', description: 'Translate short text between multiple supported languages.' },
  'json-formatter': { name: 'JSON Formatter', description: 'Format, validate, and beautify JSON for clean readability.' },
  'base64-tool': { name: 'Base64 Tool', description: 'Encode plain text to Base64 and decode Base64 back to text.' },
  'color-picker': { name: 'Color Picker', description: 'Generate and inspect color values like HEX and RGB.' },
  'image-resizer': { name: 'Image Resizer', description: 'Resize images to exact dimensions for web and social use.' },
  'wifi-speed-test': { name: 'WiFi Speed Test', description: 'Measure internet speed indicators in a simple test flow.' },
  'qr-generator': { name: 'QR Code Generator', description: 'Create QR codes from URLs, text, and shareable content.' },
  'random-name-picker': { name: 'Random Name Picker', description: 'Randomly choose names or items from a custom list.' },
  'decision-maker': { name: 'Decision Maker', description: 'Make fast random decisions when options are equally valid.' },
  'meme-generator': { name: 'Meme Generator', description: 'Create custom memes by adding text to images.' },
}

function toTitleFromSlug(slug) {
  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

export default function ToolHowItWorksSection() {
  const pathname = usePathname()
  if (!pathname || !pathname.startsWith('/tools/') || pathname === '/tools') return null

  const toolId = pathname.replace('/tools/', '')
  const meta = toolMeta[toolId] || {
    name: toTitleFromSlug(toolId),
    description: 'Use this free Fruupy tool to solve your task quickly and accurately.',
  }

  return (
    <section className="px-4 pb-16">
      <article className="mx-auto max-w-5xl rounded-[28px] border border-[#93B1B5]/25 bg-white/60 p-6 backdrop-blur-xl md:p-8">
        <h2 className="text-2xl font-black text-[#0B2E33]">How {meta.name} Works</h2>
        <p className="mt-2 text-sm leading-relaxed text-[#0B2E33]/70 md:text-base">
          {meta.description} This section is available on all Fruupy tools so users and search engines can quickly understand what the tool does.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-[#93B1B5]/30 bg-white p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-[#4F7C82]">Step 1</p>
            <p className="mt-2 text-sm text-[#0B2E33]/80">
              Enter your inputs in the required fields (numbers, dates, text, or options depending on the tool).
            </p>
          </div>
          <div className="rounded-2xl border border-[#93B1B5]/30 bg-white p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-[#4F7C82]">Step 2</p>
            <p className="mt-2 text-sm text-[#0B2E33]/80">
              Click calculate, generate, or run. Fruupy processes your input instantly using the tool logic.
            </p>
          </div>
          <div className="rounded-2xl border border-[#93B1B5]/30 bg-white p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-[#4F7C82]">Step 3</p>
            <p className="mt-2 text-sm text-[#0B2E33]/80">
              Review results, adjust values if needed, and use the output for planning, sharing, or decision-making.
            </p>
          </div>
        </div>
      </article>
    </section>
  )
}
