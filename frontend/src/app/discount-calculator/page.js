'use client'
import { useState } from 'react'
import Link from 'next/link'
import { DollarSign, Percent, Calculator } from 'lucide-react'

export default function DiscountCalculator() {
  const [originalPrice, setOriginalPrice] = useState('')
  const [discountPercent, setDiscountPercent] = useState('')
  const [additionalDiscount, setAdditionalDiscount] = useState('')

  const calculateDiscount = () => {
    const price = parseFloat(originalPrice) || 0
    const discount1 = parseFloat(discountPercent) || 0
    const discount2 = parseFloat(additionalDiscount) || 0

    const firstDiscountAmount = price * (discount1 / 100)
    const priceAfterFirstDiscount = price - firstDiscountAmount
    const secondDiscountAmount = priceAfterFirstDiscount * (discount2 / 100)
    const finalPrice = priceAfterFirstDiscount - secondDiscountAmount
    const totalSaved = price - finalPrice

    return {
      originalPrice: price.toFixed(2),
      discountAmount: totalSaved.toFixed(2),
      finalPrice: finalPrice.toFixed(2),
      savedPercentage: ((totalSaved / price) * 100).toFixed(1)
    }
  }

  const result = calculateDiscount()

  return (
    <div className="min-h-screen  flex justify-center">
  <div className="max-w-2xl w-full mx-4 sm:mx-auto p-6 pt-16">
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-lg bg-[#0B2E33] text-white mr-4 animate-bounce">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#0B2E33]">Free Discount Calculator - Calculate Discounts Online</h1>
            <p className="text-sm text-[#0B2E33]/70 mt-1">Calculate final price after discounts</p>
          </div>
        </div>

        <div className="bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <div className="space-y-6">
            {/* Original Price */}
            <div>
              <label className="block text-sm font-medium text-[#0B2E33] mb-2">Original Price</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0B2E33]/70" />
                <input
                  type="number"
                  value={originalPrice}
                  onChange={(e) => setOriginalPrice(e.target.value)}
                  placeholder="0.00"
                  className="w-full pl-10 p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 backdrop-blur-xl text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
                />
              </div>
            </div>

            {/* First Discount */}
            <div>
              <label className="block text-sm font-medium text-[#0B2E33] mb-2">First Discount %</label>
              <div className="relative">
                <Percent className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0B2E33]/70" />
                <input
                  type="number"
                  value={discountPercent}
                  onChange={(e) => setDiscountPercent(e.target.value)}
                  placeholder="0"
                  className="w-full pl-10 p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 backdrop-blur-xl text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
                />
              </div>
            </div>

            {/* Additional Discount */}
            <div>
              <label className="block text-sm font-medium text-[#0B2E33] mb-2">Additional Discount %</label>
              <div className="relative">
                <Percent className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0B2E33]/70" />
                <input
                  type="number"
                  value={additionalDiscount}
                  onChange={(e) => setAdditionalDiscount(e.target.value)}
                  placeholder="0"
                  className="w-full pl-10 p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 backdrop-blur-xl text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
                />
              </div>
            </div>

            {/* Results */}
            <div className="mt-8 space-y-4">
              <div className="bg-[#B8E3E9]/20 p-4 rounded-lg border border-[#93B1B5]/30">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-[#0B2E33]/70">Original Price</div>
                    <div className="text-xl font-bold text-[#0B2E33]">₹{result.originalPrice}</div>
                  </div>
                  <div>
                    <div className="text-sm text-[#0B2E33]/70">You Save</div>
                    <div className="text-xl font-bold text-green-600">₹{result.discountAmount}</div>
                  </div>
                </div>
              </div>

              <div className="bg-[#B8E3E9]/20 p-4 rounded-lg border border-[#93B1B5]/30">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-[#0B2E33]/70">Final Price</div>
                    <div className="text-2xl font-bold text-[#0B2E33]">₹{result.finalPrice}</div>
                  </div>
                  <div>
                    <div className="text-sm text-[#0B2E33]/70">Total Discount</div>
                    <div className="text-2xl font-bold text-green-600">{result.savedPercentage}%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Tools Section */}
        <div className="mt-8 bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <h2 className="text-xl font-bold text-[#0B2E33] mb-4">Related Finance Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/percentage-calculator" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Percentage Calculator
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