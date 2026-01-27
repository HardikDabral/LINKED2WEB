'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Receipt, Sparkles } from 'lucide-react'

export default function GSTCalculator() {
  const [amount, setAmount] = useState('')
  const [gstRate, setGstRate] = useState('18')
  const [calculationType, setCalculationType] = useState('exclusive') // Removed TypeScript syntax

  const calculateGST = () => {
    const baseAmount = parseFloat(amount) || 0
    const rate = parseFloat(gstRate) || 0

    if (calculationType === 'inclusive') {
      const basePrice = (baseAmount * 100) / (100 + rate)
      const gstAmount = baseAmount - basePrice
      return {
        basePrice: basePrice.toFixed(2),
        gstAmount: gstAmount.toFixed(2),
        total: baseAmount.toFixed(2),
        type: 'inclusive'
      }
    } else {
      const gstAmount = (baseAmount * rate) / 100
      const total = baseAmount + gstAmount
      return {
        basePrice: baseAmount.toFixed(2),
        gstAmount: gstAmount.toFixed(2),
        total: total.toFixed(2),
        type: 'exclusive'
      }
    }
  }

  const result = calculateGST()

  return (
    <div className="min-h-screen  flex justify-center">
  <div className="max-w-2xl w-full mx-4 sm:mx-auto p-6 pt-16">
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-lg bg-[#0B2E33] text-white mr-4 animate-bounce">
            <Receipt className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#0B2E33]">Free GST Calculator - Calculate GST Online</h1>
            <p className="text-sm text-[#0B2E33]/70 mt-1">
              Calculate GST amounts for both inclusive and exclusive prices
            </p>
          </div>
        </div>

        <div className="bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <div className="space-y-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#0B2E33] mb-2">Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
                placeholder={`Enter ${calculationType === 'exclusive' ? 'base' : 'total'} amount`}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-[#0B2E33] mb-2">GST Rate (%)</label>
              <select
                value={gstRate}
                onChange={(e) => setGstRate(e.target.value)}
                className="w-full p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
              >
                <option value="5">5%</option>
                <option value="12">12%</option>
                <option value="18">18%</option>
                <option value="28">28%</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-[#0B2E33] mb-2">Calculation Type</label>
              <div className="flex space-x-4">
                <button
                  onClick={() => setCalculationType('exclusive')}
                  className={`flex-1 py-2 px-4 rounded-lg border transition-all ${
                    calculationType === 'exclusive'
                      ? 'bg-[#0B2E33] text-white border-[#0B2E33]'
                      : 'bg-white/50 border-[#93B1B5]/40 text-[#0B2E33]'
                  }`}
                >
                  Exclusive GST
                </button>
                <button
                  onClick={() => setCalculationType('inclusive')}
                  className={`flex-1 py-2 px-4 rounded-lg border transition-all ${
                    calculationType === 'inclusive'
                      ? 'bg-[#0B2E33] text-white border-[#0B2E33]'
                      : 'bg-white/50 border-[#93B1B5]/40 text-[#0B2E33]'
                  }`}
                >
                  Inclusive GST
                </button>
              </div>
              <p className="text-xs text-[#0B2E33]/50 mt-2">
                {calculationType === 'exclusive'
                  ? 'GST will be added to the base amount'
                  : 'GST is already included in the amount'}
              </p>
            </div>

            <div className="mt-8 p-4 bg-[#B8E3E9]/20 rounded-lg border border-[#93B1B5]/30">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[#0B2E33]/70">
                    {result.type === 'exclusive' ? 'Base Price:' : 'Base Price (after GST):'}
                  </span>
                  <span className="text-lg font-medium text-[#0B2E33]">₹{result.basePrice}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#0B2E33]/70">GST Amount ({gstRate}%):</span>
                  <span className="text-lg font-medium text-[#0B2E33]">₹{result.gstAmount}</span>
                </div>
                <div className="pt-2 border-t border-[#93B1B5]/30 flex justify-between items-center">
                  <span className="font-medium text-[#0B2E33]">
                    {result.type === 'exclusive' ? 'Total Amount:' : 'Amount (GST Inclusive):'}
                  </span>
                  <span className="text-2xl font-bold text-[#0B2E33]">₹{result.total}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm text-[#0B2E33]/70 bg-white/30 p-4 rounded-lg mt-4">
            <p className="font-medium flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              GST Calculator Tips
            </p>
            <ul className="list-disc ml-5 space-y-1 mt-2">
              <li>Use exclusive GST when you know the base price (before tax)</li>
              <li>Use inclusive GST when you have the final price (after tax)</li>
              <li>Common GST rates: 5% for essential goods, 12% for processed foods, 18% for most services</li>
              <li>28% GST applies to luxury items and certain services</li>
              <li>Always keep invoices showing GST breakup for business expenses</li>
              <li>CGST and SGST are equal halves of the total GST rate</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <div className="bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
            <h2 className="text-lg font-semibold text-[#0B2E33] mb-4">GST Calculation Formulas</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-[#0B2E33] mb-2">Exclusive GST (Add GST to Base Amount)</h3>
                <div className="bg-[#B8E3E9]/20 p-3 rounded-lg">
                  <p className="text-[#0B2E33]/80">GST Amount = Base Amount × (GST Rate ÷ 100)</p>
                  <p className="text-[#0B2E33]/80">Total Amount = Base Amount + GST Amount</p>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-[#0B2E33] mb-2">Inclusive GST (Extract GST from Total)</h3>
                <div className="bg-[#B8E3E9]/20 p-3 rounded-lg">
                  <p className="text-[#0B2E33]/80">Base Amount = Total Amount × (100 ÷ (100 + GST Rate))</p>
                  <p className="text-[#0B2E33]/80">GST Amount = Total Amount - Base Amount</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Tools Section */}
        <div className="mt-8 bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <h2 className="text-xl font-bold text-[#0B2E33] mb-4">Related Finance Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/discount-calculator" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Discount Calculator
            </Link>
            <Link href="/percentage-calculator" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Percentage Calculator
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