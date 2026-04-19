'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Calendar, Calculator, Info, User, Clock, Baby, Smile, Frown } from 'lucide-react'
import ToolFaq from '@/components/common/ToolFaq'

const faqs = [
  { q: "How does the age calculator work?", a: "It compares your date of birth against today’s date using the Gregorian calendar and returns your age in years, months, and days, plus total days lived and a countdown to your next birthday." },
  { q: "Does it account for leap years?", a: "Yes. Because the calculation uses real calendar arithmetic (not a fixed 365-day year), leap years are handled automatically, so Feb 29 birthdays and extra days are counted correctly." },
  { q: "Why does the month or day count look off by one?", a: "Your age in years only increases on or after your birthday this year. If your birthday hasn’t happened yet, the calculator shows last year’s completed age plus the partial months and days that have passed." },
  { q: "Is my date of birth stored anywhere?", a: "No. The calculation happens entirely in your browser — nothing is sent to a server, and your date of birth is not saved or shared." },
]

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('')
  const [age, setAge] = useState(null)
  const [showDetails, setShowDetails] = useState(false)
  const [error, setError] = useState('')
  const today = new Date().toISOString().split('T')[0]

  const calculateAge = () => {
    if (!birthDate) {
      setError('Please select your date of birth')
      return
    }

    const birth = new Date(birthDate)
    const today = new Date()

    if (birth > today) {
      setError("Birth date cannot be in the future")
      setAge(null)
      return
    }

    setError('')

    let years = today.getFullYear() - birth.getFullYear()
    let months = today.getMonth() - birth.getMonth()
    let days = today.getDate() - birth.getDate()

    if (months < 0 || (months === 0 && days < 0)) {
      years--
      months += 12
    }

    if (days < 0) {
      const prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, birth.getDate())
      days = Math.floor((today - prevMonth) / (1000 * 60 * 60 * 24))
    }

    const totalDays = Math.floor((today - birth) / (1000 * 60 * 60 * 24))
    const totalMonths = years * 12 + months
    const nextBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate())
    if (nextBirthday < today) {
      nextBirthday.setFullYear(nextBirthday.getFullYear() + 1)
    }
    const daysUntilNextBirthday = Math.floor((nextBirthday - today) / (1000 * 60 * 60 * 24))

    setAge({
      years,
      months,
      days,
      totalDays,
      totalMonths,
      nextBirthday: nextBirthday.toDateString(),
      daysUntilNextBirthday,
      isBirthdayToday: daysUntilNextBirthday === 365 || daysUntilNextBirthday === 0
    })
  }

  const getLifeStage = (years) => {
    if (years < 1) return { text: 'Newborn', icon: <Baby className="w-4 h-4" /> }
    if (years < 3) return { text: 'Toddler', icon: <Baby className="w-4 h-4" /> }
    if (years < 13) return { text: 'Child', icon: <Smile className="w-4 h-4" /> }
    if (years < 20) return { text: 'Teenager', icon: <User className="w-4 h-4" /> }
    if (years < 65) return { text: 'Adult', icon: <User className="w-4 h-4" /> }
    return { text: 'Senior', icon: <User className="w-4 h-4" /> }
  }

  return (
    <div className="min-h-screen  flex justify-center">
      <div className="max-w-2xl w-full mx-4 sm:mx-auto p-6 pt-16">
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-lg bg-[#0B2E33] text-white mr-4 animate-bounce">
            <Calculator className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-[#0B2E33]">Free Age Calculator - Calculate Your Exact Age Online</h1>
        </div>

        <div className="bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-lg border border-[#93B1B5]/50">
          <div className="mb-6">
            <label className="block text-sm font-medium text-[#0B2E33] mb-2 flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Date of Birth
            </label>
            <div className="relative">
              <input
                type="date"
                value={birthDate}
                max={today}
                placeholder="DD/MM/YYYY"
                onChange={(e) => {
                  setBirthDate(e.target.value)
                  setError('')
                }}
                className="w-full p-3 border border-[#93B1B5]/50 rounded-lg bg-white/80 text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/30 placeholder:text-[#0B2E33]/50"
              />
            </div>
            {error && <p className="mt-2 text-sm text-red-600 flex items-center"><Frown className="w-4 h-4 mr-1" /> {error}</p>}
          </div>

          <div className="flex gap-4 mb-6">
            <button
              onClick={calculateAge}
              className="flex-1 bg-[#0B2E33] text-white py-3 rounded-lg hover:bg-[#4F7C82] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4" />
              Calculate Age
            </button>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex-1 bg-[#4F7C82] text-white py-3 rounded-lg hover:bg-[#0B2E33] transition-all duration-300 flex items-center justify-center gap-2"
              disabled={!age}
            >
              <Info className="w-4 h-4" />
              {showDetails ? 'Hide Details' : 'Show Details'}
            </button>
          </div>

          {age && (
            <div className="space-y-6">
              <div className="animate-fade-in">
                <h2 className="text-xl font-semibold text-[#0B2E33] mb-4 flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Your Age
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-[#B8E3E9]/30 p-4 rounded-lg border border-[#93B1B5]/40 text-center">
                    <div className="text-2xl font-bold text-[#0B2E33]">{age.years}</div>
                    <div className="text-sm text-[#0B2E33]/70">Years</div>
                  </div>
                  <div className="bg-[#B8E3E9]/30 p-4 rounded-lg border border-[#93B1B5]/40 text-center">
                    <div className="text-2xl font-bold text-[#0B2E33]">{age.months}</div>
                    <div className="text-sm text-[#0B2E33]/70">Months</div>
                  </div>
                  <div className="bg-[#B8E3E9]/30 p-4 rounded-lg border border-[#93B1B5]/40 text-center">
                    <div className="text-2xl font-bold text-[#0B2E33]">{age.days}</div>
                    <div className="text-sm text-[#0B2E33]/70">Days</div>
                  </div>
                </div>
              </div>

              {age.isBirthdayToday && (
                <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 animate-pulse">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Smile className="h-5 w-5 text-yellow-700" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-yellow-700">
                        🎉 Happy Birthday! 🎉
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {showDetails && (
                <div className="animate-fade-in">
                  <h2 className="text-xl font-semibold text-[#0B2E33] mb-4 flex items-center">
                    <Info className="w-5 h-5 mr-2" />
                    Detailed Information
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#E3F2FD]/30 p-4 rounded-lg border border-[#93B1B5]/40">
                      <div className="flex items-center mb-2">
                        <Clock className="w-4 h-4 mr-2 text-[#0B2E33]" />
                        <span className="text-sm font-medium text-[#0B2E33]">Life Stage</span>
                      </div>
                      <div className="flex items-center">
                        {getLifeStage(age.years).icon}
                        <span className="ml-2 text-[#0B2E33]">{getLifeStage(age.years).text}</span>
                      </div>
                    </div>
                    <div className="bg-[#E3F2FD]/30 p-4 rounded-lg border border-[#93B1B5]/40">
                      <div className="flex items-center mb-2">
                        <Calendar className="w-4 h-4 mr-2 text-[#0B2E33]" />
                        <span className="text-sm font-medium text-[#0B2E33]">Next Birthday</span>
                      </div>
                      <div className="text-[#0B2E33]">{age.nextBirthday}</div>
                    </div>
                    <div className="bg-[#E3F2FD]/30 p-4 rounded-lg border border-[#93B1B5]/40">
                      <div className="flex items-center mb-2">
                        <Clock className="w-4 h-4 mr-2 text-[#0B2E33]" />
                        <span className="text-sm font-medium text-[#0B2E33]">Days Until Next Birthday</span>
                      </div>
                      <div className="text-[#0B2E33]">{age.daysUntilNextBirthday} days</div>
                    </div>
                    <div className="bg-[#E3F2FD]/30 p-4 rounded-lg border border-[#93B1B5]/40">
                      <div className="flex items-center mb-2">
                        <Calculator className="w-4 h-4 mr-2 text-[#0B2E33]" />
                        <span className="text-sm font-medium text-[#0B2E33]">Total Days Alive</span>
                      </div>
                      <div className="text-[#0B2E33]">{age.totalDays.toLocaleString()} days</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {!age && !error && (
            <div className="mt-6 text-center text-sm text-[#0B2E33]/70">
              Select your date of birth to calculate your age
            </div>
          )}
        </div>

        <div className="mt-6 text-center text-xs text-[#0B2E33]/50">
          Note: Age calculation is based on the Gregorian calendar
        </div>

        {/* About Age Calculator Section */}
        <div className="mt-8 bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <h2 className="text-xl font-bold text-[#0B2E33] mb-4">How the Age Calculator Works</h2>
          <div className="text-sm text-[#0B2E33]/80 space-y-4 leading-relaxed">
            <p>
              The Age Calculator is a highly accurate tool designed to determine your exact age based on the Gregorian calendar. Using your date of birth, it calculates the time elapsed in years, months, and days, providing a precise breakdown of your life journey so far.
            </p>
            <p>
              Beyond just your current age, this tool offers detailed insights such as the total number of days you've been alive, your current life stage, and even a countdown to your next birthday. Whether you're curious about your chronological age or need the exact figure for official purposes, our calculator provides instant and reliable results.
            </p>
            <p>
              To use the tool, simply select your birth date from the calendar input above and click "Calculate Age." You can then toggle the "Show Details" button for even more granular information about your age.
            </p>
          </div>
        </div>

        <ToolFaq items={faqs} />

        {/* Related Tools Section */}
        <div className="mt-8 bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <h2 className="text-xl font-bold text-[#0B2E33] mb-4">Related Date & Time Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/tools/day-counter" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Day Counter
            </Link>
            <Link href="/tools/countdown-timer" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Countdown Timer
            </Link>
            <Link href="/tools/stopwatch" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Stopwatch
            </Link>
            <Link href="/" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → View All Tools
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}