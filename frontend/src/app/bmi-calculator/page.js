'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Scale, Ruler, Weight } from 'lucide-react'

export default function BMICalculator() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [unit, setUnit] = useState('metric') // metric or imperial

  const calculateBMI = () => {
    if (!height || !weight) return null

    let bmi
    if (unit === 'metric') {
      // Height in cm, weight in kg
      bmi = (weight / Math.pow(height / 100, 2))
    } else {
      // Height in inches, weight in pounds
      bmi = (weight / Math.pow(height, 2)) * 703
    }

    const category =
      bmi < 18.5 ? 'Underweight' :
        bmi < 25 ? 'Normal weight' :
          bmi < 30 ? 'Overweight' :
            'Obese'

    const healthyWeightRange = {
      min: (18.5 * Math.pow(unit === 'metric' ? height / 100 : height, 2) * (unit === 'imperial' ? 1 / 703 : 1)).toFixed(1),
      max: (24.9 * Math.pow(unit === 'metric' ? height / 100 : height, 2) * (unit === 'imperial' ? 1 / 703 : 1)).toFixed(1)
    }

    return {
      bmi: bmi.toFixed(1),
      category,
      healthyWeightRange
    }
  }

  const result = calculateBMI()

  return (
    <div className="min-h-screen  flex justify-center">
      <div className="max-w-2xl w-full mx-4 sm:mx-auto p-6 pt-16">
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-lg bg-[#0B2E33] text-white mr-4 animate-bounce">
            <Scale className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#0B2E33]">Free BMI Calculator - Calculate Your Body Mass Index Online</h1>
            <p className="text-sm text-[#0B2E33]/70 mt-1">Calculate your Body Mass Index</p>
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

            {/* Height Input */}
            <div>
              <label className="block text-sm font-medium text-[#0B2E33] mb-2">
                Height ({unit === 'metric' ? 'cm' : 'inches'})
              </label>
              <div className="relative">
                <Ruler className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0B2E33]/70" />
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder={unit === 'metric' ? '175' : '69'}
                  className="w-full pl-10 p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 backdrop-blur-xl text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
                />
              </div>
            </div>

            {/* Weight Input */}
            <div>
              <label className="block text-sm font-medium text-[#0B2E33] mb-2">
                Weight ({unit === 'metric' ? 'kg' : 'lbs'})
              </label>
              <div className="relative">
                <Weight className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0B2E33]/70" />
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder={unit === 'metric' ? '70' : '154'}
                  className="w-full pl-10 p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 backdrop-blur-xl text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
                />
              </div>
            </div>

            {/* Results */}
            {result && (
              <div className="mt-8 space-y-4">
                <div className="bg-[#B8E3E9]/20 p-4 rounded-lg border border-[#93B1B5]/30">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-[#0B2E33]/70">Your BMI</div>
                      <div className="text-2xl font-bold text-[#0B2E33]">{result.bmi}</div>
                    </div>
                    <div>
                      <div className="text-sm text-[#0B2E33]/70">Category</div>
                      <div className="text-2xl font-bold text-[#0B2E33]">{result.category}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#B8E3E9]/20 p-4 rounded-lg border border-[#93B1B5]/30">
                  <div className="text-sm text-[#0B2E33]/70 mb-2">Healthy Weight Range</div>
                  <div className="text-lg font-bold text-[#0B2E33]">
                    {result.healthyWeightRange.min} - {result.healthyWeightRange.max} {unit === 'metric' ? 'kg' : 'lbs'}
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
            <Link href="/calorie-calculator" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Calorie Calculator
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