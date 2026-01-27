'use client'
import { useState } from 'react'
import Link from 'next/link'
import { DollarSign, Calculator, Percent, Clock, RefreshCcw } from 'lucide-react'

export default function InterestCalculator() {
  const [principal, setPrincipal] = useState('')
  const [rate, setRate] = useState('')
  const [time, setTime] = useState('')
  const [interestType, setInterestType] = useState('simple')
  const [compoundingFrequency, setCompoundingFrequency] = useState('yearly')
  const [result, setResult] = useState(null)

  const calculateInterest = () => {
    const p = parseFloat(principal)
    const r = parseFloat(rate) / 100
    const t = parseFloat(time)
    
    if (interestType === 'simple') {
      const interest = p * r * t
      const amount = p + interest
      setResult({
        interest: interest.toFixed(2),
        amount: amount.toFixed(2)
      })
    } else {
      let n = 1
      switch (compoundingFrequency) {
        case 'yearly': n = 1; break
        case 'half-yearly': n = 2; break
        case 'quarterly': n = 4; break
        case 'monthly': n = 12; break
      }
      const amount = p * Math.pow(1 + (r / n), n * t)
      const interest = amount - p
      setResult({
        interest: interest.toFixed(2),
        amount: amount.toFixed(2)
      })
    }
  }

  return (
    <div className="min-h-screen  flex justify-center">
  <div className="max-w-2xl w-full mx-4 sm:mx-auto p-6 pt-16">
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-lg bg-[#0B2E33] text-white mr-4 animate-bounce">
            <RefreshCcw className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-[#0B2E33]">Free Interest Calculator - Calculate Interest Online</h1>
        </div>
        
        <div className="bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <div className="space-y-4 mb-6">
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setInterestType('simple')}
                className={`flex-1 py-2 px-4 rounded-lg ${
                  interestType === 'simple'
                    ? 'bg-[#0B2E33] text-white'
                    : 'bg-white/50 text-[#0B2E33] border border-[#93B1B5]/40'
                }`}
              >
                Simple Interest
              </button>
              <button
                onClick={() => setInterestType('compound')}
                className={`flex-1 py-2 px-4 rounded-lg ${
                  interestType === 'compound'
                    ? 'bg-[#0B2E33] text-white'
                    : 'bg-white/50 text-[#0B2E33] border border-[#93B1B5]/40'
                }`}
              >
                Compound Interest
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#0B2E33] mb-2 flex items-center">
                <DollarSign className="w-4 h-4 mr-2" />
                Principal Amount
              </label>
              <input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                placeholder="Enter principal amount"
                className="w-full p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 backdrop-blur-xl text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[#0B2E33] mb-2 flex items-center">
                <Percent className="w-4 h-4 mr-2" />
                Interest Rate (% per year)
              </label>
              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                placeholder="Enter interest rate"
                className="w-full p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 backdrop-blur-xl text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[#0B2E33] mb-2 flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Time (Years)
              </label>
              <input
                type="number"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="Enter time in years"
                className="w-full p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 backdrop-blur-xl text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
              />
            </div>

            {interestType === 'compound' && (
              <div>
                <label className="block text-sm font-medium text-[#0B2E33] mb-2">
                  Compounding Frequency
                </label>
                <select
                  value={compoundingFrequency}
                  onChange={(e) => setCompoundingFrequency(e.target.value)}
                  className="w-full p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 backdrop-blur-xl text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
                >
                  <option value="yearly">Yearly</option>
                  <option value="half-yearly">Half-Yearly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
            )}
          </div>

          <button
            onClick={calculateInterest}
            className="w-full bg-[#0B2E33] text-white py-3 rounded-lg hover:bg-[#4F7C82] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Calculator className="w-4 h-4" />
            Calculate Interest
          </button>

          {result && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#B8E3E9]/20 p-4 rounded-lg border border-[#93B1B5]/30">
                <div className="text-2xl font-bold text-[#0B2E33]">₹{result.interest}</div>
                <div className="text-sm text-[#0B2E33]/70">Total Interest</div>
              </div>
              <div className="bg-[#B8E3E9]/20 p-4 rounded-lg border border-[#93B1B5]/30">
                <div className="text-2xl font-bold text-[#0B2E33]">₹{result.amount}</div>
                <div className="text-sm text-[#0B2E33]/70">Total Amount</div>
              </div>
            </div>
          )}
        </div>

        {/* Related Tools Section */}
        <div className="mt-8 bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <h2 className="text-xl font-bold text-[#0B2E33] mb-4">Related Finance Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/emi-calculator" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → EMI Calculator
            </Link>
            <Link href="/salary-calculator" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Salary Calculator
            </Link>
            <Link href="/tip-calculator" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Tip Calculator
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