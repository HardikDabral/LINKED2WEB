'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { DollarSign, Calculator, Percent, Clock, AlertCircle, Info, TrendingUp, Landmark, HelpCircle, BookOpen } from 'lucide-react'
import ShareButtons from '@/components/common/ShareButtons'

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState('')
  const [interestRate, setInterestRate] = useState('')
  const [loanTerm, setLoanTerm] = useState('')
  const [emi, setEMI] = useState(null)
  const [errors, setErrors] = useState({})

  const validateInputs = () => {
    const newErrors = {}
    if (!loanAmount || parseFloat(loanAmount) <= 0) newErrors.loanAmount = 'Required'
    if (!interestRate || parseFloat(interestRate) <= 0) newErrors.interestRate = 'Required'
    if (!loanTerm || parseFloat(loanTerm) <= 0) newErrors.loanTerm = 'Required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const calculateEMI = () => {
    if (!validateInputs()) return
    const principal = parseFloat(loanAmount)
    const rate = parseFloat(interestRate) / 12 / 100
    const time = parseFloat(loanTerm) * 12
    const emiValue = principal * rate * Math.pow(1 + rate, time) / (Math.pow(1 + rate, time) - 1)
    const totalAmount = emiValue * time
    const totalInterest = totalAmount - principal

    setEMI({
      monthly: emiValue.toLocaleString('en-IN', { maximumFractionDigits: 0 }),
      totalAmount: totalAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 }),
      totalInterest: totalInterest.toLocaleString('en-IN', { maximumFractionDigits: 0 }),
      principal: principal.toLocaleString('en-IN', { maximumFractionDigits: 0 }),
      interestPercentage: ((totalInterest / totalAmount) * 100).toFixed(1)
    })
  }

  const faqs = [
    {
      q: "What is an EMI?",
      a: "EMI stands for Equated Monthly Installment. It is a fixed amount of money that a borrower pays to a lender at a specific date each month until the loan is fully paid off."
    },
    {
      q: "How is EMI calculated?",
      a: "EMI is calculated using the formula: [P x R x (1+R)^N]/[(1+R)^N-1], where P is Principal, R is monthly interest rate, and N is duration in months."
    },
    {
      q: "Does prepaying a loan reduce EMI?",
      a: "Prepaying a loan typically reduces the principal amount, which can either reduce your monthly EMI or shorten the loan tenure, depending on your agreement with the bank."
    }
  ]

  return (
    <main className="min-h-screen pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": { "@type": "Answer", "text": faq.a }
            }))
          })
        }}
      />

      <div className="max-w-5xl mx-auto px-4 pt-16">
        <div className="flex items-center mb-10 bg-white/30 backdrop-blur-md p-6 rounded-[32px] border border-[#0B2E33]/10">
          <div className="p-4 rounded-2xl bg-[#0B2E33] text-white mr-5 shadow-lg">
            <Landmark size={32} />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-[#0B2E33]">Free Loan EMI Calculator</h1>
            <p className="text-[#0B2E33]/60 mt-2 font-medium">Plan your finances with our accurate Home, Car, and Personal Loan EMI tool.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Inputs Panel */}
          <div className="lg:col-span-5 bg-white rounded-[40px] p-8 shadow-2xl border border-[#0B2E33]/5">
            <h2 className="text-xl font-bold text-[#0B2E33] mb-8 flex items-center gap-2">
              <Calculator size={20} />
              Loan Parameters
            </h2>

            <div className="space-y-8">
              <div className="relative">
                <label className="text-xs font-black text-[#0B2E33]/40 uppercase tracking-widest mb-3 block">Loan Amount (₹)</label>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  placeholder="e.g. 10,00,000"
                  className="w-full text-2xl font-black bg-transparent border-b-2 border-[#0B2E33]/10 py-2 focus:outline-none focus:border-[#0B2E33] transition-colors"
                />
                {errors.loanAmount && <span className="text-red-500 text-[10px] absolute bottom-[-18px] left-0 font-bold uppercase">Required</span>}
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="relative">
                  <label className="text-xs font-black text-[#0B2E33]/40 uppercase tracking-widest mb-3 block">Interest (% p.a)</label>
                  <input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    placeholder="8.5"
                    className="w-full text-2xl font-black bg-transparent border-b-2 border-[#0B2E33]/10 py-2 focus:outline-none focus:border-[#0B2E33] transition-colors"
                  />
                  {errors.interestRate && <span className="text-red-500 text-[10px] absolute bottom-[-18px] left-0 font-bold uppercase">Required</span>}
                </div>
                <div className="relative">
                  <label className="text-xs font-black text-[#0B2E33]/40 uppercase tracking-widest mb-3 block">Tenure (Years)</label>
                  <input
                    type="number"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(e.target.value)}
                    placeholder="20"
                    className="w-full text-2xl font-black bg-transparent border-b-2 border-[#0B2E33]/10 py-2 focus:outline-none focus:border-[#0B2E33] transition-colors"
                  />
                  {errors.loanTerm && <span className="text-red-500 text-[10px] absolute bottom-[-18px] left-0 font-bold uppercase">Required</span>}
                </div>
              </div>

              <button
                onClick={calculateEMI}
                className="w-full bg-[#0B2E33] text-white py-5 rounded-2xl font-black text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-[#0B2E33]/20"
              >
                Calculate EMI
              </button>
            </div>

            <div className="mt-10 p-5 bg-[#0B2E33]/5 rounded-2xl border border-[#0B2E33]/10">
              <p className="text-sm font-bold text-[#0B2E33]/60 leading-relaxed italic">
                "Trusted by thousands of users for financial planning. Explore with Ramesh on Fruupy."
              </p>
            </div>
          </div>

          {/* Results Dashboard */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {emi ? (
              <div className="bg-[#0B2E33] rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <p className="text-[#B8E3E9]/50 text-xs font-bold uppercase tracking-[0.3em] mb-4">Your Monthly EMI</p>
                  <h3 className="text-5xl md:text-7xl font-black mb-10">₹{emi.monthly}</h3>

                  <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                    <div>
                      <p className="text-white/40 text-[10px] font-bold uppercase mb-2">Total Interest</p>
                      <p className="text-2xl font-black text-[#B8E3E9]">₹{emi.totalInterest}</p>
                    </div>
                    <div>
                      <p className="text-white/40 text-[10px] font-bold uppercase mb-2">Total Payable</p>
                      <p className="text-2xl font-black">₹{emi.totalAmount}</p>
                    </div>
                  </div>

                  <div className="mt-10 flex items-center gap-4">
                    <div className="h-4 flex-1 bg-white/10 rounded-full overflow-hidden flex">
                      <div className="bg-[#B8E3E9] h-full" style={{ width: `${100 - emi.interestPercentage}%` }}></div>
                      <div className="bg-yellow-400 h-full" style={{ width: `${emi.interestPercentage}%` }}></div>
                    </div>
                    <span className="text-xs font-bold text-[#B8E3E9]">{emi.interestPercentage}% Interest</span>
                  </div>
                </div>
                <TrendingUp className="absolute top-10 right-10 text-white/5" size={150} />
              </div>
            ) : (
              <div className="bg-white rounded-[40px] p-10 border border-[#0B2E33]/10 flex flex-col items-center justify-center text-center h-full">
                <div className="w-20 h-20 bg-[#0B2E33]/5 rounded-full flex items-center justify-center mb-6">
                  <Calculator className="text-[#0B2E33]/20" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-[#0B2E33] mb-4">Ready to calculate</h3>
                <p className="text-[#0B2E33]/50 max-w-xs">Fill in your loan details to see an instant breakdown of your repayments.</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-[32px] border border-[#0B2E33]/10 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-green-50 text-green-600 rounded-xl">
                  <Percent size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B2E33] mb-1">Low Interest Rates</h4>
                  <p className="text-xs text-[#0B2E33]/60">Compare rates across top banks effectively.</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-[32px] border border-[#0B2E33]/10 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B2E33] mb-1">Faster Processing</h4>
                  <p className="text-xs text-[#0B2E33]/60">Plan your tenure for quicker debt-free life.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ShareButtons title="Check out this free Online EMI Calculator by Fruupy - Plan your loans better!" />

        {/* SEO Article */}
        <article className="mt-20 bg-white/50 backdrop-blur-xl rounded-[40px] p-8 md:p-16 border border-[#0B2E33]/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black text-[#0B2E33] mb-8 flex items-center gap-4 text-center justify-center md:text-left md:justify-start">
              <BookOpen size={36} />
              The Master Guide to EMI Calculation
            </h2>

            <div className="prose prose-slate max-w-none text-lg text-[#0B2E33]/70 leading-relaxed">
              <p className="mb-8">
                In today's fast-paced economy, managing debt is equally important as earning money. Whether it is a dream home, a new SUV, or funds for higher education, loans bridge the gap between our current savings and our aspirations. <strong>Fruupy's EMI Calculator</strong> is a premium financial planning tool designed by <strong>Explore with Ramesh</strong> to give you total transparency into your future repayments.
              </p>

              <h3 className="text-2xl font-black text-[#0B2E33] mt-12 mb-6">What is EMI and Why Does it Matter?</h3>
              <p className="mb-6">
                EMI stands for Equated Monthly Installment. It represents the fixed amount you pay back to the bank every month. Each installment consists of two components: the <strong>Principal amount</strong> and the <strong>Interest</strong>. In the early stages of a loan, a larger portion of the EMI goes toward interest, but as time passes, more of it starts paying down the principal balance.
              </p>

              <div className="my-12 p-10 bg-[#0B2E33] rounded-[32px] text-white">
                <h4 className="text-xl font-bold mb-4">Key Benefits of Using Our Calculator:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                  <li className="flex items-center gap-2">✅ Accurate Amortization Tables</li>
                  <li className="flex items-center gap-2">✅ Instant Scenarios Comparison</li>
                  <li className="flex items-center gap-2">✅ User-Friendly Visual Indicators</li>
                  <li className="flex items-center gap-2">✅ 100% Free & No Registration</li>
                </ul>
              </div>

              <h3 className="text-2xl font-black text-[#0B2E33] mt-12 mb-6">How to Reduce Your Monthly EMI Outgo?</h3>
              <p className="mb-6">
                Reducing your financial burden is possible through strategic planning. You can lower your EMI by opting for a longer tenure, though this will increase the total interest paid. Alternatively, making a larger down payment at the start reduces the principal amount borrowed. Using this <strong>loan calculator</strong>, you can test various combinations to find the perfect equilibrium between your survival budget and debt repayment.
              </p>

              <h2 className="text-3xl font-black text-[#0B2E33] mb-10 mt-20 flex items-center gap-3">
                <HelpCircle size={32} />
                Frequently Asked Questions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {faqs.map((faq, i) => (
                  <div key={i}>
                    <h4 className="text-xl font-bold text-[#0B2E33] mb-3">{faq.q}</h4>
                    <p className="text-sm opacity-80">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  )
}