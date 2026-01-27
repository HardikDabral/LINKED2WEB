'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Calculator, DollarSign, Users, Percent } from 'lucide-react'

export default function TipCalculator() {
  const [billAmount, setBillAmount] = useState('')
  const [tipPercentage, setTipPercentage] = useState(15)
  const [numPeople, setNumPeople] = useState(1)
  const [customTip, setCustomTip] = useState('')

  const predefinedTips = [10, 15, 18, 20, 25]

  const calculateTip = () => {
    const bill = parseFloat(billAmount) || 0
    const tip = (bill * (tipPercentage / 100))
    const total = bill + tip
    const perPerson = total / numPeople

    return {
      tipAmount: tip.toFixed(2),
      totalAmount: total.toFixed(2),
      perPerson: perPerson.toFixed(2)
    }
  }

  const result = calculateTip()

  return (
    <div className="min-h-screen  flex justify-center">
  <div className="max-w-2xl w-full mx-4 sm:mx-auto p-6 pt-16">
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-lg bg-[#0B2E33] text-white mr-4 animate-bounce">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#0B2E33]">Free Tip Calculator - Calculate Tips & Gratuity Instantly</h1>
            <p className="text-sm text-[#0B2E33]/70 mt-1">Calculate tips for services</p>
          </div>
        </div>

        <div className="bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <div className="space-y-6">
            {/* Bill Amount */}
            <div>
              <label className="block text-sm font-medium text-[#0B2E33] mb-2">Bill Amount</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0B2E33]/70" />
                <input
                  type="number"
                  value={billAmount}
                  onChange={(e) => setBillAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full pl-10 p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 backdrop-blur-xl text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
                />
              </div>
            </div>

            {/* Tip Percentage */}
            <div>
              <label className="block text-sm font-medium text-[#0B2E33] mb-2">Select Tip %</label>
              <div className="grid grid-cols-3 gap-2">
                {predefinedTips.map((tip) => (
                  <button
                    key={tip}
                    onClick={() => {
                      setTipPercentage(tip)
                      setCustomTip('')
                    }}
                    className={`p-3 rounded-lg text-center transition-all ${
                      tipPercentage === tip && !customTip
                        ? 'bg-[#0B2E33] text-white'
                        : 'bg-white/50 text-[#0B2E33] hover:bg-[#0B2E33] hover:text-white'
                    }`}
                  >
                    {tip}%
                  </button>
                ))}
                <div className="relative">
                  <input
                    type="number"
                    value={customTip}
                    onChange={(e) => {
                      setCustomTip(e.target.value)
                      setTipPercentage(parseFloat(e.target.value) || 0)
                    }}
                    placeholder="Custom"
                    className="w-full p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
                  />
                </div>
              </div>
            </div>

            {/* Number of People */}
            <div>
              <label className="block text-sm font-medium text-[#0B2E33] mb-2">Number of People</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0B2E33]/70" />
                <input
                  type="number"
                  min="1"
                  value={numPeople}
                  onChange={(e) => setNumPeople(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full pl-10 p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 backdrop-blur-xl text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
                />
              </div>
            </div>

            {/* Results */}
            <div className="mt-8 space-y-4">
              <div className="bg-[#B8E3E9]/20 p-4 rounded-lg border border-[#93B1B5]/30">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="text-sm text-[#0B2E33]/70">Tip Amount</div>
                    <div className="text-2xl font-bold text-[#0B2E33]">₹{result.tipAmount}</div>
                  </div>
                  <Percent className="w-6 h-6 text-[#0B2E33]/70" />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-[#0B2E33]/70">Total Amount</div>
                    <div className="text-2xl font-bold text-[#0B2E33]">₹{result.totalAmount}</div>
                  </div>
                  <DollarSign className="w-6 h-6 text-[#0B2E33]/70" />
                </div>
              </div>

              {numPeople > 1 && (
                <div className="bg-[#B8E3E9]/20 p-4 rounded-lg border border-[#93B1B5]/30">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-[#0B2E33]/70">Per Person</div>
                      <div className="text-2xl font-bold text-[#0B2E33]">₹{result.perPerson}</div>
                    </div>
                    <Users className="w-6 h-6 text-[#0B2E33]/70" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Tools Section */}
        <div className="mt-8 bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <h2 className="text-xl font-bold text-[#0B2E33] mb-4">Related Finance Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/expense-splitter" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Expense Splitter
            </Link>
            <Link href="/discount-calculator" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Discount Calculator
            </Link>
            <Link href="/emi-calculator" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → EMI Calculator
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