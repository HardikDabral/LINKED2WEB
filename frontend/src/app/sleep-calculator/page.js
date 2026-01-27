'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Moon, Sun, Clock } from 'lucide-react'

export default function SleepCalculator() {
  const [calculationType, setCalculationType] = useState('sleep') // 'sleep' or 'wake'
  const [time, setTime] = useState('')

  const calculateSleepCycles = (baseTime) => {
    const cycles = []
    let currentTime = new Date(baseTime)

    // Each sleep cycle is approximately 90 minutes
    // We'll show 6 cycles (from 1.5 to 9 hours)
    for (let i = 1; i <= 6; i++) {
      currentTime = new Date(currentTime.getTime() + 90 * 60000)
      cycles.push(currentTime)
    }

    return cycles
  }

  const handleCalculate = (e) => {
    e.preventDefault()
    if (!time) return

    const [hours, minutes] = time.split(':')
    const baseTime = new Date()
    baseTime.setHours(parseInt(hours))
    baseTime.setMinutes(parseInt(minutes))
    baseTime.setSeconds(0)

    if (calculationType === 'sleep') {
      // Add 14 minutes average time to fall asleep
      baseTime.setMinutes(baseTime.getMinutes() + 14)
    } else {
      // Subtract 14 minutes and work backwards
      baseTime.setMinutes(baseTime.getMinutes() - 14)
    }

    return calculateSleepCycles(baseTime)
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
  }

  const results = time ? handleCalculate({ preventDefault: () => {} }) : null

  return (
    <div className="min-h-screen  flex justify-center">
  <div className="max-w-2xl w-full mx-4 sm:mx-auto p-6 pt-16">
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-lg bg-[#0B2E33] text-white mr-4 animate-bounce">
            <Moon className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#0B2E33]">Free Sleep Calculator - Calculate Optimal Sleep Schedule</h1>
            <p className="text-sm text-[#0B2E33]/70 mt-1">Calculate optimal sleep and wake times</p>
          </div>
        </div>

        <div className="bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <div className="space-y-6">
            {/* Calculator Type Toggle */}
            <div className="flex gap-4">
              <button
                onClick={() => setCalculationType('sleep')}
                className={`flex-1 p-3 rounded-lg text-center transition-all flex items-center justify-center gap-2 ${
                  calculationType === 'sleep'
                    ? 'bg-[#0B2E33] text-white'
                    : 'bg-white/50 text-[#0B2E33] hover:bg-[#0B2E33] hover:text-white'
                }`}
              >
                <Moon className="w-4 h-4" />
                I want to sleep at...
              </button>
              <button
                onClick={() => setCalculationType('wake')}
                className={`flex-1 p-3 rounded-lg text-center transition-all flex items-center justify-center gap-2 ${
                  calculationType === 'wake'
                    ? 'bg-[#0B2E33] text-white'
                    : 'bg-white/50 text-[#0B2E33] hover:bg-[#0B2E33] hover:text-white'
                }`}
              >
                <Sun className="w-4 h-4" />
                I want to wake up at...
              </button>
            </div>

            {/* Time Input */}
            <div>
              <label className="block text-sm font-medium text-[#0B2E33] mb-2">
                {calculationType === 'sleep' ? 'Bedtime' : 'Wake-up time'}
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0B2E33]/70" />
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full pl-10 p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
                />
              </div>
            </div>

            {/* Results */}
            {results && (
              <div className="mt-8 space-y-4">
                <div className="bg-[#B8E3E9]/20 p-4 rounded-lg border border-[#93B1B5]/30">
                  <h3 className="text-lg font-semibold text-[#0B2E33] mb-4">
                    {calculationType === 'sleep' ? 'Recommended wake-up times' : 'Recommended bedtimes'}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {results.map((time, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg ${
                          index === 3 || index === 4
                            ? 'bg-[#0B2E33]/10 border-2 border-[#0B2E33]/20'
                            : 'bg-white/30'
                        }`}
                      >
                        <div className="text-sm text-[#0B2E33]/70">
                          {(index + 1) * 1.5} hours
                        </div>
                        <div className="text-lg font-semibold text-[#0B2E33]">
                          {formatTime(time)}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-[#0B2E33]/70">
                    {calculationType === 'sleep'
                      ? '* Includes 14 minutes to fall asleep'
                      : '* Plan to be in bed 14 minutes before these times'}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Tools Section */}
        <div className="mt-8 bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <h2 className="text-xl font-bold text-[#0B2E33] mb-4">Related Health Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/bmi-calculator" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → BMI Calculator
            </Link>
            <Link href="/calorie-calculator" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Calorie Calculator
            </Link>
            <Link href="/water-intake-calculator" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Water Intake Calculator
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