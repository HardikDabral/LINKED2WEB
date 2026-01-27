'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Droplets, Activity } from 'lucide-react'

export default function WaterIntakeCalculator() {
  const [weight, setWeight] = useState('')
  const [activityLevel, setActivityLevel] = useState('moderate')
  const [climate, setClimate] = useState('moderate')
  const [unit, setUnit] = useState('metric')

  const activityLevels = {
    sedentary: { label: 'Sedentary (little or no exercise)', factor: 30 },
    light: { label: 'Lightly active (light exercise 1-3 days/week)', factor: 35 },
    moderate: { label: 'Moderately active (moderate exercise 3-5 days/week)', factor: 40 },
    active: { label: 'Very active (hard exercise 6-7 days/week)', factor: 45 }
  }

  const climateFactor = {
    cold: 0.9,
    moderate: 1.0,
    hot: 1.1
  }

  const calculateWaterIntake = () => {
    if (!weight) return null

    const weightKg = unit === 'metric' ? parseFloat(weight) : parseFloat(weight) * 0.453592
    const baseIntake = weightKg * activityLevels[activityLevel].factor
    const adjustedIntake = baseIntake * climateFactor[climate]

    return {
      mlPerDay: Math.round(adjustedIntake),
      litersPerDay: (adjustedIntake / 1000).toFixed(1),
      glassesPerDay: Math.round(adjustedIntake / 250), // Assuming 250ml per glass
      minIntake: Math.round(adjustedIntake * 0.8),
      maxIntake: Math.round(adjustedIntake * 1.2)
    }
  }

  const result = calculateWaterIntake()

  return (
    <div className="min-h-screen  flex justify-center">
  <div className="max-w-2xl w-full mx-4 sm:mx-auto p-6 pt-16">
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-lg bg-[#0B2E33] text-white mr-4 animate-bounce">
            <Droplets className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#0B2E33]">Free Water Intake Calculator - Calculate Daily Water Needs</h1>
            <p className="text-sm text-[#0B2E33]/70 mt-1">Calculate your daily water needs</p>
          </div>
        </div>

        <div className="bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <div className="space-y-6">
            {/* Unit Toggle */}
            <div className="flex gap-4">
              <button
                onClick={() => setUnit('metric')}
                className={`flex-1 p-3 rounded-lg text-center transition-all ${
                  unit === 'metric'
                    ? 'bg-[#0B2E33] text-white'
                    : 'bg-white/50 text-[#0B2E33] hover:bg-[#0B2E33] hover:text-white'
                }`}
              >
                Metric (kg)
              </button>
              <button
                onClick={() => setUnit('imperial')}
                className={`flex-1 p-3 rounded-lg text-center transition-all ${
                  unit === 'imperial'
                    ? 'bg-[#0B2E33] text-white'
                    : 'bg-white/50 text-[#0B2E33] hover:bg-[#0B2E33] hover:text-white'
                }`}
              >
                Imperial (lbs)
              </button>
            </div>

            {/* Weight Input */}
            <div>
              <label className="block text-sm font-medium text-[#0B2E33] mb-2">
                Weight ({unit === 'metric' ? 'kg' : 'lbs'})
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder={unit === 'metric' ? '70' : '154'}
                className="w-full p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
              />
            </div>

            {/* Activity Level */}
            <div>
              <label className="block text-sm font-medium text-[#0B2E33] mb-2">Activity Level</label>
              <select
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
                className="w-full p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
              >
                {Object.entries(activityLevels).map(([key, { label }]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>
            </div>

            {/* Climate */}
            <div>
              <label className="block text-sm font-medium text-[#0B2E33] mb-2">Climate</label>
              <div className="flex gap-4">
                <button
                  onClick={() => setClimate('cold')}
                  className={`flex-1 p-3 rounded-lg text-center transition-all ${
                    climate === 'cold'
                      ? 'bg-[#0B2E33] text-white'
                      : 'bg-white/50 text-[#0B2E33] hover:bg-[#0B2E33] hover:text-white'
                  }`}
                >
                  Cold
                </button>
                <button
                  onClick={() => setClimate('moderate')}
                  className={`flex-1 p-3 rounded-lg text-center transition-all ${
                    climate === 'moderate'
                      ? 'bg-[#0B2E33] text-white'
                      : 'bg-white/50 text-[#0B2E33] hover:bg-[#0B2E33] hover:text-white'
                  }`}
                >
                  Moderate
                </button>
                <button
                  onClick={() => setClimate('hot')}
                  className={`flex-1 p-3 rounded-lg text-center transition-all ${
                    climate === 'hot'
                      ? 'bg-[#0B2E33] text-white'
                      : 'bg-white/50 text-[#0B2E33] hover:bg-[#0B2E33] hover:text-white'
                  }`}
                >
                  Hot
                </button>
              </div>
            </div>

            {/* Results */}
            {result && (
              <div className="mt-8 space-y-4">
                <div className="bg-[#B8E3E9]/20 p-4 rounded-lg border border-[#93B1B5]/30">
                  <h3 className="text-lg font-semibold text-[#0B2E33] mb-4">Daily Water Intake</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-[#0B2E33]/10 p-2 rounded">
                      <span className="text-[#0B2E33] font-medium">Recommended Intake</span>
                      <span className="font-bold text-[#0B2E33]">{result.litersPerDay} L ({result.mlPerDay} ml)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#0B2E33]">Glasses of Water</span>
                      <span className="font-medium text-[#0B2E33]">{result.glassesPerDay} glasses</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#0B2E33]">Minimum Intake</span>
                      <span className="font-medium text-[#0B2E33]">{(result.minIntake / 1000).toFixed(1)} L</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#0B2E33]">Maximum Intake</span>
                      <span className="font-medium text-[#0B2E33]">{(result.maxIntake / 1000).toFixed(1)} L</span>
                    </div>
                  </div>
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
            <Link href="/sleep-calculator" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Sleep Calculator
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