'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Split, Plus, Trash2, Calculator, Users, DollarSign } from 'lucide-react'

export default function ExpenseSplitter() {
  // States
  const [expenses, setExpenses] = useState([
    { description: '', amount: '', paidBy: [], splitType: 'equal', customSplit: {} }
  ])
  const [people, setPeople] = useState([''])
  const [result, setResult] = useState(null)

  // People handlers
  const handlePersonChange = (index, value) => {
    const newPeople = [...people]
    newPeople[index] = value
    setPeople(newPeople)
  }

  const addPerson = () => {
    setPeople([...people, ''])
  }

  const removePerson = (index) => {
    // Don't allow removing if it's the last person
    if (people.length <= 1) return
    
    const newPeople = people.filter((_, i) => i !== index)
    setPeople(newPeople)
    
    // Update expenses to remove references to deleted person
    setExpenses(prevExpenses => 
      prevExpenses.map(expense => ({
        ...expense,
        paidBy: expense.paidBy.filter(p => p !== people[index]),
        customSplit: Object.fromEntries(
          Object.entries(expense.customSplit).filter(([p]) => p !== people[index])
        )
      }))
    )
  }

  // Expense handlers
  const addExpense = () => {
    setExpenses([...expenses, { description: '', amount: '', paidBy: [], splitType: 'equal', customSplit: {} }])
  }

  const removeExpense = (index) => {
    const newExpenses = expenses.filter((_, i) => i !== index)
    setExpenses(newExpenses)
  }

  const handleExpenseChange = (expenseIndex, field, value) => {
    setExpenses(prevExpenses => {
      const newExpenses = [...prevExpenses]
      
      if (field === 'customSplit') {
        // Handle custom split percentage updates
        if (value.person) {
          newExpenses[expenseIndex].customSplit = {
            ...newExpenses[expenseIndex].customSplit,
            [value.person]: parseFloat(value.percentage) || 0
          }
        }
      } else {
        // Handle all other fields
        newExpenses[expenseIndex][field] = value
      }
      
      return newExpenses
    })
  }

  // Update calculateSplit function to handle multiple payers
  const calculateSplit = () => {
    const settlements = {}
    const validPeople = people.filter(p => p)
    
    // Initialize settlements
    validPeople.forEach(person => {
      settlements[person] = 0
    })

    expenses.forEach(expense => {
      if (expense.paidBy.length > 0 && expense.amount) {
        const amount = parseFloat(expense.amount)
        const perPayerShare = amount / expense.paidBy.length

        // Split amount among payers
        expense.paidBy.forEach(payer => {
          if (validPeople.includes(payer)) {
            settlements[payer] += perPayerShare
          }
        })

        if (expense.splitType === 'equal') {
          const perPersonShare = amount / validPeople.length
          validPeople.forEach(person => {
            settlements[person] -= perPersonShare
          })
        } else {
          Object.entries(expense.customSplit).forEach(([person, percentage]) => {
            if (validPeople.includes(person)) {
              settlements[person] -= (amount * percentage) / 100
            }
          })
        }
      }
    })

    const totalAmount = expenses.reduce((sum, exp) => sum + (parseFloat(exp.amount) || 0), 0)

    setResult({
      totalAmount,
      settlements
    })
  }

  return (
    <div className="min-h-screen  flex justify-center">
  <div className="max-w-2xl w-full mx-4 sm:mx-auto p-6 pt-16">
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-lg bg-[#0B2E33] text-white mr-4 animate-bounce">
            <Split className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#0B2E33]">Free Expense Splitter - Split Bills Online</h1>
            <p className="text-sm text-[#0B2E33]/70 mt-1">Split expenses fairly among friends</p>
          </div>
        </div>
        
        <div className="bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          {/* Step 1: Add People */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold text-[#0B2E33] flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Step 1: Add People
                </h2>
                <p className="text-sm text-[#0B2E33]/70">Add everyone involved in splitting the expenses</p>
              </div>
              <button
                onClick={addPerson}
                className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-3">
              {people.map((person, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={person}
                    onChange={(e) => handlePersonChange(index, e.target.value)}
                    placeholder="Enter name"
                    className="flex-1 p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 backdrop-blur-xl text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
                  />
                  <button
                    onClick={() => removePerson(index)}
                    disabled={people.length <= 1}
                    className={`p-3 transition-colors ${people.length <= 1 ? 'text-gray-400 cursor-not-allowed' : 'text-red-500 hover:text-red-600'}`}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Step 2: Add Expenses */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold text-[#0B2E33] flex items-center">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Step 2: Add Expenses
                </h2>
                <p className="text-sm text-[#0B2E33]/70">Add each expense and how it should be split</p>
              </div>
              <button
                onClick={addExpense}
                className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              {expenses.map((expense, index) => (
                <div key={index} className="p-4 bg-white/30 rounded-lg space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={expense.description}
                      onChange={(e) => handleExpenseChange(index, 'description', e.target.value)}
                      placeholder="What's this expense for?"
                      className="p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 backdrop-blur-xl text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
                    />
                    <input
                      type="number"
                      value={expense.amount}
                      onChange={(e) => handleExpenseChange(index, 'amount', e.target.value)}
                      placeholder="How much?"
                      className="p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 backdrop-blur-xl text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#0B2E33] mb-2">Who paid?</label>
                      <div className="space-y-2 bg-white/50 p-3 rounded-lg border border-[#93B1B5]/40">
                        {people.filter(p => p).map((person, i) => (
                          <label key={i} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={expense.paidBy.includes(person)}
                              onChange={(e) => {
                                const newPaidBy = e.target.checked
                                  ? [...expense.paidBy, person]
                                  : expense.paidBy.filter(p => p !== person)
                                handleExpenseChange(index, 'paidBy', newPaidBy)
                              }}
                              className="rounded border-[#93B1B5]/40 text-[#0B2E33]"
                            />
                            <span className="text-sm text-[#0B2E33]">{person}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#0B2E33] mb-2">How to split?</label>
                      <select
                        value={expense.splitType}
                        onChange={(e) => handleExpenseChange(index, 'splitType', e.target.value)}
                        className="w-full p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 backdrop-blur-xl text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
                      >
                        <option value="equal">Split Equally</option>
                        <option value="custom">Custom Split</option>
                      </select>
                    </div>
                  </div>

                  {expense.splitType === 'custom' && (
                    <div>
                      <label className="block text-sm font-medium text-[#0B2E33] mb-2">Custom Split (%)</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {people.filter(p => p).map((person, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <span className="text-sm text-[#0B2E33]">{person}</span>
                            <input
                              type="number"
                              value={expense.customSplit[person] || ''}
                              onChange={(e) => handleExpenseChange(index, 'customSplit', { 
                                person, 
                                percentage: e.target.value 
                              })}
                              placeholder="0"
                              min="0"
                              max="100"
                              className="w-20 p-2 border border-[#93B1B5]/40 rounded-lg bg-white/50 text-[#0B2E33]"
                            />
                            <span className="text-sm text-[#0B2E33]">%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {index > 0 && (
                    <button
                      onClick={() => removeExpense(index)}
                      className="mt-2 text-red-500 hover:text-red-600 transition-colors flex items-center gap-1"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Remove Expense</span>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={calculateSplit}
            disabled={people.filter(p => p).length === 0}
            className={`w-full mt-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
              people.filter(p => p).length === 0 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-[#0B2E33] text-white hover:bg-[#4F7C82]'
            }`}
          >
            <Calculator className="w-4 h-4" />
            Calculate Split
          </button>

          {result && (
            <div className="mt-8 space-y-4">
              <div className="bg-[#B8E3E9]/20 p-4 rounded-lg border border-[#93B1B5]/30">
                <div className="text-2xl font-bold text-[#0B2E33]">₹{result.totalAmount.toFixed(2)}</div>
                <div className="text-sm text-[#0B2E33]/70">Total Amount</div>
              </div>
              
              <div className="bg-[#B8E3E9]/20 p-4 rounded-lg border border-[#93B1B5]/30">
                <h3 className="text-lg font-semibold text-[#0B2E33] mb-3">Who Pays Whom</h3>
                <div className="space-y-2">
                  {Object.entries(result.settlements)
                    .filter(([person]) => people.includes(person))
                    .map(([person, amount]) => (
                      <div key={person} className="flex justify-between items-center">
                        <span className="text-[#0B2E33]">{person}</span>
                        <span className={`font-medium ${amount >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {amount >= 0 ? `Gets ₹${amount.toFixed(2)}` : `Owes ₹${Math.abs(amount).toFixed(2)}`}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Related Tools Section */}
        <div className="mt-8 bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <h2 className="text-xl font-bold text-[#0B2E33] mb-4">Related Finance Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/tip-calculator" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Tip Calculator
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