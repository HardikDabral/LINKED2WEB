'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { DollarSign, Calculator, Percent, Clock, AlertCircle, Info } from 'lucide-react'

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState('')
  const [interestRate, setInterestRate] = useState('')
  const [loanTerm, setLoanTerm] = useState('')
  const [emi, setEMI] = useState(null)
  const [errors, setErrors] = useState({})
  const [activeInput, setActiveInput] = useState(null)

  // Validate inputs
  const validateInputs = () => {
    const newErrors = {}
    
    if (!loanAmount || parseFloat(loanAmount) <= 0 || parseFloat(loanAmount) > 100000000) {
      newErrors.loanAmount = 'Please enter a valid amount (₹1 - ₹10 crore)'
    }
    
    if (!interestRate || parseFloat(interestRate) <= 0 || parseFloat(interestRate) > 100) {
      newErrors.interestRate = 'Please enter a valid rate (0.1% - 100%)'
    }
    
    if (!loanTerm || parseFloat(loanTerm) <= 0 || parseFloat(loanTerm) > 30) {
      newErrors.loanTerm = 'Please enter a valid term (1 - 30 years)'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Format currency display
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value)
  }

  const calculateEMI = () => {
    if (!validateInputs()) return
    
    const principal = parseFloat(loanAmount)
    const rate = parseFloat(interestRate) / 12 / 100
    const time = parseFloat(loanTerm) * 12

    const emi = principal * rate * Math.pow(1 + rate, time) / (Math.pow(1 + rate, time) - 1)
    const totalAmount = emi * time
    const totalInterest = totalAmount - principal

    setEMI({
      monthly: emi.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      principal: principal.toFixed(2)
    })
  }

  // Handle key press for Enter key
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        calculateEMI()
      }
    }
    
    window.addEventListener('keypress', handleKeyPress)
    return () => window.removeEventListener('keypress', handleKeyPress)
  }, [loanAmount, interestRate, loanTerm])

  return (
    <div className="min-h-screen  flex justify-center">
  <div className="max-w-2xl w-full mx-4 sm:mx-auto p-6 pt-16">
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-lg bg-[#0B2E33] text-white mr-4 animate-bounce">
            <DollarSign className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#0B2E33]">Free EMI Calculator - Calculate Loan EMI Online</h1>
            <p className="text-sm text-[#0B2E33]/80">Calculate your monthly loan payments</p>
          </div>
        </div>
        
        <div className="bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-[#0B2E33] mb-2 flex items-center">
                <DollarSign className="w-4 h-4 mr-2" />
                Loan Amount (₹)
                <span className="ml-auto text-xs text-[#0B2E33]/60">Max ₹10 crore</span>
              </label>
              <div className={`relative rounded-lg border ${errors.loanAmount ? 'border-red-500' : activeInput === 'loanAmount' ? 'border-[#4F7C82] ring-2 ring-[#4F7C82]/20' : 'border-[#93B1B5]/40'}`}>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => {
                    const value = e.target.value
                    if (value === '' || (parseFloat(value) >= 1 && parseFloat(value) <= 100000000)) {
                      setLoanAmount(value)
                    }
                  }}
                  onFocus={() => setActiveInput('loanAmount')}
                  onBlur={() => setActiveInput(null)}
                  placeholder="E.g. 500000"
                  className="w-full p-3 bg-white/50 backdrop-blur-xl text-[#0B2E33] focus:outline-none rounded-lg"
                />
                {loanAmount && (
                  <div className="absolute right-3 top-3 text-sm text-[#0B2E33]/60 truncate max-w-[120px]">
                    {formatCurrency(loanAmount)}
                  </div>
                )}
              </div>
              {errors.loanAmount && (
                <div className="flex items-center mt-1 text-red-500 text-xs">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  {errors.loanAmount}
                </div>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[#0B2E33] mb-2 flex items-center">
                <Percent className="w-4 h-4 mr-2" />
                Interest Rate (% per year)
                <span className="ml-auto text-xs text-[#0B2E33]/60">Max 100%</span>
              </label>
              <div className={`relative rounded-lg border ${errors.interestRate ? 'border-red-500' : activeInput === 'interestRate' ? 'border-[#4F7C82] ring-2 ring-[#4F7C82]/20' : 'border-[#93B1B5]/40'}`}>
                <input
                  type="number"
                  step="0.01"
                  value={interestRate}
                  onChange={(e) => {
                    const value = e.target.value
                    if (value === '' || (parseFloat(value) > 0 && parseFloat(value) <= 100)) {
                      setInterestRate(value)
                    }
                  }}
                  onFocus={() => setActiveInput('interestRate')}
                  onBlur={() => setActiveInput(null)}
                  placeholder="E.g. 8.5"
                  className="w-full p-3 bg-white/50 backdrop-blur-xl text-[#0B2E33] focus:outline-none rounded-lg"
                />
              </div>
              {errors.interestRate && (
                <div className="flex items-center mt-1 text-red-500 text-xs">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  {errors.interestRate}
                </div>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[#0B2E33] mb-2 flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Loan Term (Years)
                <span className="ml-auto text-xs text-[#0B2E33]/60">Max 30 years</span>
              </label>
              <div className={`relative rounded-lg border ${errors.loanTerm ? 'border-red-500' : activeInput === 'loanTerm' ? 'border-[#4F7C82] ring-2 ring-[#4F7C82]/20' : 'border-[#93B1B5]/40'}`}>
                <input
                  type="number"
                  value={loanTerm}
                  onChange={(e) => {
                    const value = e.target.value
                    if (value === '' || (parseFloat(value) > 0 && parseFloat(value) <= 30)) {
                      setLoanTerm(value)
                    }
                  }}
                  onFocus={() => setActiveInput('loanTerm')}
                  onBlur={() => setActiveInput(null)}
                  placeholder="E.g. 5"
                  className="w-full p-3 bg-white/50 backdrop-blur-xl text-[#0B2E33] focus:outline-none rounded-lg"
                />
                {loanTerm && (
                  <div className="absolute right-3 top-3 text-sm text-[#0B2E33]/60">
                    {loanTerm * 12} months
                  </div>
                )}
              </div>
              {errors.loanTerm && (
                <div className="flex items-center mt-1 text-red-500 text-xs">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  {errors.loanTerm}
                </div>
              )}
            </div>
          </div>
    
          <button
            onClick={calculateEMI}
            disabled={!loanAmount || !interestRate || !loanTerm}
            className={`w-full py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
              !loanAmount || !interestRate || !loanTerm 
                ? 'bg-gray-400 cursor-not-allowed text-gray-600' 
                : 'bg-[#0B2E33] text-white hover:bg-[#4F7C82]'
            }`}
          >
            <Calculator className="w-4 h-4" />
            Calculate EMI
          </button>
    
          {emi && (
            <div className="mt-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#B8E3E9]/20 p-4 rounded-lg border border-[#93B1B5]/30 overflow-hidden">
                  <div className="text-xl md:text-2xl font-bold text-[#0B2E33] truncate">₹{emi.monthly}</div>
                  <div className="text-sm text-[#0B2E33]/70">Monthly EMI</div>
                </div>
                <div className="bg-[#B8E3E9]/20 p-4 rounded-lg border border-[#93B1B5]/30 overflow-hidden">
                  <div className="text-xl md:text-2xl font-bold text-[#0B2E33] truncate">₹{emi.principal}</div>
                  <div className="text-sm text-[#0B2E33]/70">Principal Amount</div>
                </div>
                <div className="bg-[#B8E3E9]/20 p-4 rounded-lg border border-[#93B1B5]/30 overflow-hidden">
                  <div className="text-xl md:text-2xl font-bold text-[#0B2E33] truncate">₹{emi.totalInterest}</div>
                  <div className="text-sm text-[#0B2E33]/70">Total Interest</div>
                </div>
              </div>
              
              <div className="bg-[#B8E3E9]/20 p-4 rounded-lg border border-[#93B1B5]/30 overflow-hidden">
                <div className="text-xl md:text-2xl font-bold text-[#0B2E33] truncate">₹{emi.totalAmount}</div>
                <div className="text-sm text-[#0B2E33]/70">Total Payment (Principal + Interest)</div>
              </div>
              
              <div className="flex items-start p-3 bg-[#0B2E33]/10 rounded-lg text-[#0B2E33] text-sm">
                <Info className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <p className="font-medium">Note:</p>
                  <p>This calculation is for illustrative purposes only. Actual loan terms may vary based on credit assessment and lender policies.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Related Tools Section */}
        <div className="mt-8 bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <h2 className="text-xl font-bold text-[#0B2E33] mb-4">Related Finance Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/interest-calculator" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Interest Calculator
            </Link>
            <Link href="/tip-calculator" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Tip Calculator
            </Link>
            <Link href="/salary-calculator" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Salary Calculator
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