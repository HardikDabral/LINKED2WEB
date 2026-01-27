'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Calendar, Calculator, ArrowRight, Info, Clock } from 'lucide-react'

export default function DayCounter() {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const calculateDays = () => {
    if (!startDate || !endDate) {
      setError('Please select both dates')
      return
    }

    const start = new Date(startDate)
    const end = new Date(endDate)

    if (start > end) {
      setError('End date must be after start date')
      setResult(null)
      return
    }

    setError('')
    const diffTime = Math.abs(end - start)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    setResult({
      days: diffDays,
      weeks: Math.floor(diffDays / 7),
      remainingDays: diffDays % 7,
      months: Math.floor(diffDays / 30.44),
      years: Math.floor(diffDays / 365.25),
      totalHours: diffDays * 24,
      totalMinutes: diffDays * 24 * 60
    })
  }

  return (
    <div className="min-h-screen  flex justify-center">
      <div className="max-w-2xl w-full mx-4 sm:mx-auto p-6 pt-16">
        <div className="flex items-center mb-6 sm:mb-8">
          <div className="p-3 rounded-lg bg-[#0B2E33] text-white mr-3 sm:mr-4 animate-bounce">
            <Calculator className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#0B2E33]">Free Day Counter - Count Days Between Dates</h1>
        </div>

        <div className="bg-white/70 sm:bg-white/50 backdrop-blur-md sm:backdrop-blur-xl rounded-xl p-5 sm:p-6 shadow-lg border border-[#93B1B5]/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 sm:mb-6">
            <div>
              <label className="block text-sm font-medium text-[#0B2E33] mb-2 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Start Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => {
                    setStartDate(e.target.value)
                    setError('')
                  }}
                  className="w-full p-3 border border-[#93B1B5]/50 rounded-lg bg-white/80 text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/30"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0B2E33] mb-2 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                End Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={endDate}
                  min={startDate}
                  onChange={(e) => {
                    setEndDate(e.target.value)
                    setError('')
                  }}
                  className="w-full p-3 border border-[#93B1B5]/50 rounded-lg bg-white/80 text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/30"
                />
              </div>
            </div>
          </div>

          {error && (
            <div className="mb-4 text-sm text-red-600 flex items-center">
              <Info className="w-4 h-4 mr-1" /> {error}
            </div>
          )}

          <button
            onClick={calculateDays}
            className="w-full bg-[#0B2E33] text-white py-3 rounded-lg hover:bg-[#4F7C82] transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
          >
            <Calculator className="w-4 h-4" />
            Calculate Duration
          </button>

          {result && (
            <div className="mt-7 sm:mt-8 space-y-6 animate-fade-in">
              <div className="flex items-center justify-center gap-2 text-[#0B2E33]">
                <span className="font-medium">{new Date(startDate).toLocaleDateString()}</span>
                <ArrowRight className="w-4 h-4" />
                <span className="font-medium">{new Date(endDate).toLocaleDateString()}</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <div className="bg-[#B8E3E9]/30 p-3 sm:p-4 rounded-lg border border-[#93B1B5]/40 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#0B2E33]">{result.years}</div>
                  <div className="text-xs sm:text-sm text-[#0B2E33]/70">Years</div>
                </div>
                <div className="bg-[#B8E3E9]/30 p-3 sm:p-4 rounded-lg border border-[#93B1B5]/40 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#0B2E33]">{result.months}</div>
                  <div className="text-xs sm:text-sm text-[#0B2E33]/70">Months</div>
                </div>
                <div className="bg-[#B8E3E9]/30 p-3 sm:p-4 rounded-lg border border-[#93B1B5]/40 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#0B2E33]">{result.weeks}</div>
                  <div className="text-xs sm:text-sm text-[#0B2E33]/70">Weeks</div>
                </div>
                <div className="bg-[#B8E3E9]/30 p-3 sm:p-4 rounded-lg border border-[#93B1B5]/40 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#0B2E33]">{result.days}</div>
                  <div className="text-xs sm:text-sm text-[#0B2E33]/70">Days</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-[#E3F2FD]/30 p-3 sm:p-4 rounded-lg border border-[#93B1B5]/40">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-[#0B2E33]" />
                    <span className="text-sm font-medium text-[#0B2E33]">Total Hours</span>
                  </div>
                  <div className="text-lg font-bold text-[#0B2E33] mt-1">
                    {result.totalHours.toLocaleString()}
                  </div>
                </div>
                <div className="bg-[#E3F2FD]/30 p-3 sm:p-4 rounded-lg border border-[#93B1B5]/40">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-[#0B2E33]" />
                    <span className="text-sm font-medium text-[#0B2E33]">Total Minutes</span>
                  </div>
                  <div className="text-lg font-bold text-[#0B2E33] mt-1">
                    {result.totalMinutes.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 text-center text-xs text-[#0B2E33]/50">
          Note: Months and years are approximate calculations
        </div>

        {/* Related Tools Section */}
        <div className="mt-8 bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <h2 className="text-xl font-bold text-[#0B2E33] mb-4">Related Date & Time Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/age-calculator" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Age Calculator
            </Link>
            <Link href="/countdown-timer" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Countdown Timer
            </Link>
            <Link href="/stopwatch" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
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