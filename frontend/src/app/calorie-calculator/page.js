'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Calculator, Activity } from 'lucide-react'

export default function CalorieCalculator() {
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('male')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [activityLevel, setActivityLevel] = useState('moderate')
  const [unit, setUnit] = useState('metric')

  const activityLevels = {
    sedentary: { label: 'Sedentary (little or no exercise)', factor: 1.2 },
    light: { label: 'Lightly active (light exercise 1-3 days/week)', factor: 1.375 },
    moderate: { label: 'Moderately active (moderate exercise 3-5 days/week)', factor: 1.55 },
    active: { label: 'Very active (hard exercise 6-7 days/week)', factor: 1.725 },
    extreme: { label: 'Extra active (very hard exercise & physical job)', factor: 1.9 }
  }

  const calculateCalories = () => {
    if (!age || !weight || !height) return null

    let bmr
    const weightKg = unit === 'metric' ? parseFloat(weight) : parseFloat(weight) * 0.453592
    const heightCm = unit === 'metric' ? parseFloat(height) : parseFloat(height) * 2.54

    // Mifflin-St Jeor Equation
    if (gender === 'male') {
      bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * parseFloat(age)) + 5
    } else {
      bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * parseFloat(age)) - 161
    }

    const tdee = bmr * activityLevels[activityLevel].factor

    return {
      maintain: Math.round(tdee),
      mildLoss: Math.round(tdee - 500),
      weightLoss: Math.round(tdee - 1000),
      mildGain: Math.round(tdee + 500),
      weightGain: Math.round(tdee + 1000)
    }
  }

  const result = calculateCalories()

  return (
    <div className="min-h-screen  flex justify-center">
      <div className="max-w-2xl w-full mx-4 sm:mx-auto p-6 pt-16">
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-lg bg-[#0B2E33] text-white mr-4 animate-bounce">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#0B2E33]">Free Calorie Calculator - Calculate Daily Calorie Needs</h1>
            <p className="text-sm text-[#0B2E33]/70 mt-1">Calculate your daily calorie needs</p>
          </div>
        </div>

        <div className="bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <div className="space-y-6">
            {/* Unit Toggle */}
            <div className="flex gap-4">
              <button
                onClick={() => setUnit('metric')}
                className={`flex-1 p-3 rounded-lg text-center transition-all ${unit === 'metric'
                    ? 'bg-[#0B2E33] text-white'
                    : 'bg-white/50 text-[#0B2E33] hover:bg-[#0B2E33] hover:text-white'
                  }`}
              >
                Metric
              </button>
              <button
                onClick={() => setUnit('imperial')}
                className={`flex-1 p-3 rounded-lg text-center transition-all ${unit === 'imperial'
                    ? 'bg-[#0B2E33] text-white'
                    : 'bg-white/50 text-[#0B2E33] hover:bg-[#0B2E33] hover:text-white'
                  }`}
              >
                Imperial
              </button>
            </div>

            {/* Gender Selection */}
            <div className="flex gap-4">
              <button
                onClick={() => setGender('male')}
                className={`flex-1 p-3 rounded-lg text-center transition-all ${gender === 'male'
                    ? 'bg-[#0B2E33] text-white'
                    : 'bg-white/50 text-[#0B2E33] hover:bg-[#0B2E33] hover:text-white'
                  }`}
              >
                Male
              </button>
              <button
                onClick={() => setGender('female')}
                className={`flex-1 p-3 rounded-lg text-center transition-all ${gender === 'female'
                    ? 'bg-[#0B2E33] text-white'
                    : 'bg-white/50 text-[#0B2E33] hover:bg-[#0B2E33] hover:text-white'
                  }`}
              >
                Female
              </button>
            </div>

            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#0B2E33] mb-2">Age</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="25"
                  className="w-full p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
                />
              </div>
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
              <div>
                <label className="block text-sm font-medium text-[#0B2E33] mb-2">
                  Height ({unit === 'metric' ? 'cm' : 'inches'})
                </label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder={unit === 'metric' ? '175' : '69'}
                  className="w-full p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
                />
              </div>
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

            {/* Results */}
            {result && (
              <div className="mt-8 space-y-4">
                <div className="bg-[#B8E3E9]/20 p-4 rounded-lg border border-[#93B1B5]/30">
                  <h3 className="text-lg font-semibold text-[#0B2E33] mb-4">Daily Calorie Needs</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-[#0B2E33]">Weight Loss</span>
                      <span className="font-medium text-[#0B2E33]">{result.weightLoss} calories</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#0B2E33]">Mild Weight Loss</span>
                      <span className="font-medium text-[#0B2E33]">{result.mildLoss} calories</span>
                    </div>
                    <div className="flex justify-between items-center bg-[#0B2E33]/10 p-2 rounded">
                      <span className="text-[#0B2E33] font-medium">Maintain Weight</span>
                      <span className="font-bold text-[#0B2E33]">{result.maintain} calories</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#0B2E33]">Mild Weight Gain</span>
                      <span className="font-medium text-[#0B2E33]">{result.mildGain} calories</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#0B2E33]">Weight Gain</span>
                      <span className="font-medium text-[#0B2E33]">{result.weightGain} calories</span>
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
            <Link href="/water-intake-calculator" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Water Intake Calculator
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