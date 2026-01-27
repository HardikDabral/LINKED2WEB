'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Percent, Calculator, ArrowRight} from 'lucide-react'

export default function PercentageCalculator() {
  const [mode, setMode] = useState('findPercentage') // findPercentage, findValue, findTotal
  const [number1, setNumber1] = useState('')
  const [number2, setNumber2] = useState('')
  const [result, setResult] = useState(null)

  const calculate = () => {
    const num1 = parseFloat(number1)
    const num2 = parseFloat(number2)

    if (isNaN(num1) || isNaN(num2)) {
      setResult(null)
      return
    }

    let calculatedResult
    switch (mode) {
      case 'findPercentage':
        calculatedResult = (num1 / num2) * 100
        break
      case 'findValue':
        calculatedResult = (num1 * num2) / 100
        break
      case 'findTotal':
        calculatedResult = (num1 * 100) / num2
        break
      default:
        calculatedResult = 0
    }

    setResult(calculatedResult.toFixed(2))
  }

  const getPlaceholders = () => {
    switch (mode) {
      case 'findPercentage':
        return { num1: 'Value', num2: 'Total' }
      case 'findValue':
        return { num1: 'Total', num2: 'Percentage' }
      case 'findTotal':
        return { num1: 'Value', num2: 'Percentage' }
    }
  }

  const getResultLabel = () => {
    switch (mode) {
      case 'findPercentage':
        return 'Percentage'
      case 'findValue':
        return 'Value'
      case 'findTotal':
        return 'Total'
    }
  }

  return (
    <div className="min-h-screen  flex justify-center">
  <div className="max-w-2xl w-full mx-4 sm:mx-auto p-6 pt-16">
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-lg bg-[#0B2E33] text-white mr-4 animate-bounce">
            <Percent className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#0B2E33]">Free Percentage Calculator - Calculate Percentages Online</h1>
            <p className="text-sm text-[#0B2E33]/70 mt-1">Calculate percentages easily</p>
          </div>
        </div>

        <div className="bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <div className="space-y-6">
            {/* Calculator Type Selection */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={() => setMode('findPercentage')}
                className={`p-3 rounded-lg text-center transition-all ${
                  mode === 'findPercentage'
                    ? 'bg-[#0B2E33] text-white'
                    : 'bg-white/50 text-[#0B2E33] hover:bg-[#0B2E33] hover:text-white'
                }`}
              >
                What % of Total?
              </button>
              <button
                onClick={() => setMode('findValue')}
                className={`p-3 rounded-lg text-center transition-all ${
                  mode === 'findValue'
                    ? 'bg-[#0B2E33] text-white'
                    : 'bg-white/50 text-[#0B2E33] hover:bg-[#0B2E33] hover:text-white'
                }`}
              >
                % of a Number
              </button>
              <button
                onClick={() => setMode('findTotal')}
                className={`p-3 rounded-lg text-center transition-all ${
                  mode === 'findTotal'
                    ? 'bg-[#0B2E33] text-white'
                    : 'bg-white/50 text-[#0B2E33] hover:bg-[#0B2E33] hover:text-white'
                }`}
              >
                Value is % of What?
              </button>
            </div>

            {/* Calculator Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div>
                <label className="block text-sm font-medium text-[#0B2E33] mb-2">
                  {getPlaceholders().num1}
                </label>
                <input
                  type="number"
                  value={number1}
                  onChange={(e) => {
                    setNumber1(e.target.value)
                    setResult(null)
                  }}
                  placeholder="Enter number"
                  className="w-full p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0B2E33] mb-2">
                  {getPlaceholders().num2}
                </label>
                <input
                  type="number"
                  value={number2}
                  onChange={(e) => {
                    setNumber2(e.target.value)
                    setResult(null)
                  }}
                  placeholder="Enter number"
                  className="w-full p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
                />
              </div>
            </div>

            {/* Calculate Button */}
            <button
              onClick={calculate}
              className="w-full p-3 bg-[#0B2E33] text-white rounded-lg hover:bg-[#4F7C82] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4" />
              Calculate
            </button>

            {/* Result */}
            {result !== null && (
              <div className="mt-6 p-4 bg-[#B8E3E9]/20 rounded-lg border border-[#93B1B5]/30">
                <div className="flex items-center gap-4">
                  <div className="flex-1 text-center">
                    <div className="text-sm text-[#0B2E33]/70">
                      {mode === 'findPercentage' ? `${number1} is what % of ${number2}?` :
                       mode === 'findValue' ? `${number2}% of ${number1} is:` :
                       `${number1} is ${number2}% of what?`}
                    </div>
                    <div className="mt-2 text-2xl font-bold text-[#0B2E33]">
                      {result}{mode === 'findPercentage' ? '%' : ''}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Tools Section */}
        <div className="mt-8 bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <h2 className="text-xl font-bold text-[#0B2E33] mb-4">Related Calculators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/discount-calculator" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Discount Calculator
            </Link>
            <Link href="/tip-calculator" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Tip Calculator
            </Link>
            <Link href="/gst-calculator" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → GST Calculator
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