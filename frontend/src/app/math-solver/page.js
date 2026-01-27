'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Binary, Calculator, Info, History, Eraser } from 'lucide-react'

export default function MathSolver() {
  const [equation, setEquation] = useState('')
  const [solution, setSolution] = useState(null)
  const [error, setError] = useState(null)
  const [history, setHistory] = useState([])
  const [showHistory, setShowHistory] = useState(false)

  const solveEquation = () => {
    try {
      // Clean the equation input
      const cleanedEquation = equation.replace(/\s/g, '')
      
      if (!cleanedEquation) {
        setError('Please enter an equation')
        return
      }

      // Basic arithmetic operations
      if (/^[\d+\-*/.()]+$/.test(cleanedEquation)) {
        const result = eval(cleanedEquation.replace(/x/g, '*'))
        const solutionObj = { 
          type: 'arithmetic', 
          equation: cleanedEquation,
          result: parseFloat(result.toFixed(4)) 
        }
        setSolution(solutionObj)
        addToHistory(solutionObj)
        setError(null)
        return
      }

      // Linear equation (ax + b = c)
      const linearMatch = cleanedEquation.match(/^(-?\d*)x([+-]\d+)?=(-?\d+)$/)
      if (linearMatch) {
        const [_, a = '1', b = '0', c] = linearMatch
        const coefficient = a === '-' ? -1 : a === '' ? 1 : parseFloat(a)
        const constant = parseFloat(b)
        const result = parseFloat(c)
        const x = parseFloat(((result - constant) / coefficient).toFixed(4))
        
        const solutionObj = { 
          type: 'linear', 
          equation: cleanedEquation,
          x 
        }
        setSolution(solutionObj)
        addToHistory(solutionObj)
        setError(null)
        return
      }

      // Quadratic equation (ax² + bx + c = 0)
      const quadraticMatch = cleanedEquation.match(/^(-?\d*)x\^2([+-]\d*x)?([+-]\d+)?=0$/)
      if (quadraticMatch) {
        const [_, a = '1', bTerm = '', cTerm = '0'] = quadraticMatch
        const aCoeff = a === '-' ? -1 : a === '' ? 1 : parseFloat(a)
        const bCoeff = bTerm ? parseFloat(bTerm.replace('x', '')) : 0
        const cCoeff = cTerm ? parseFloat(cTerm) : 0
        
        const discriminant = bCoeff * bCoeff - 4 * aCoeff * cCoeff
        
        let solutionObj
        if (discriminant < 0) {
          const realPart = parseFloat((-bCoeff/(2*aCoeff)).toFixed(4))
          const imagPart = parseFloat((Math.sqrt(-discriminant)/(2*aCoeff)).toFixed(4))
          solutionObj = { 
            type: 'quadratic', 
            equation: cleanedEquation,
            x1: `${realPart} + ${imagPart}i`, 
            x2: `${realPart} - ${imagPart}i`,
            discriminant: discriminant.toFixed(4),
            nature: 'complex'
          }
        } else {
          const x1 = parseFloat(((-bCoeff + Math.sqrt(discriminant)) / (2 * aCoeff)).toFixed(4))
          const x2 = parseFloat(((-bCoeff - Math.sqrt(discriminant)) / (2 * aCoeff)).toFixed(4))
          solutionObj = { 
            type: 'quadratic', 
            equation: cleanedEquation,
            x1, 
            x2,
            discriminant: discriminant.toFixed(4),
            nature: discriminant === 0 ? 'real and equal' : 'real and distinct'
          }
        }
        
        setSolution(solutionObj)
        addToHistory(solutionObj)
        setError(null)
        return
      }

      setError('Unsupported equation format. See examples below.')
    } catch (err) {
      setError('Invalid equation format or mathematical error')
      console.error(err)
    }
  }

  const addToHistory = (solution) => {
    setHistory(prev => [solution, ...prev].slice(0, 10)) // Keep last 10 solutions
  }

  const clearHistory = () => {
    setHistory([])
  }

  const loadFromHistory = (item) => {
    setEquation(item.equation)
    setSolution(item)
    setError(null)
    setShowHistory(false)
  }

  const clearAll = () => {
    setEquation('')
    setSolution(null)
    setError(null)
  }

  return (
    <div className="min-h-screen  flex justify-center">
  <div className="max-w-2xl w-full mx-4 sm:mx-auto p-6 pt-16">
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-lg bg-[#0B2E33] text-white mr-4 animate-bounce">
            <Binary className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#0B2E33]">Free Math Solver - Solve Math Equations Online</h1>
            <p className="text-sm text-[#0B2E33]/70 mt-1">Solve arithmetic, linear, and quadratic equations</p>
          </div>
        </div>

        <div className="bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-[#0B2E33]">
                  Enter Equation
                </label>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setShowHistory(!showHistory)}
                    className="text-xs p-1.5 bg-[#0B2E33]/10 hover:bg-[#0B2E33]/20 rounded flex items-center gap-1"
                  >
                    <History className="w-3 h-3" />
                    {showHistory ? 'Hide' : 'Show'} History
                  </button>
                  <button 
                    onClick={clearAll}
                    className="text-xs p-1.5 bg-[#0B2E33]/10 hover:bg-[#0B2E33]/20 rounded flex items-center gap-1"
                  >
                    <Eraser className="w-3 h-3" />
                    Clear
                  </button>
                </div>
              </div>
              
              {showHistory && history.length > 0 && (
                <div className="mb-3 bg-[#B8E3E9]/20 p-3 rounded-lg border border-[#93B1B5]/30 max-h-40 overflow-y-auto">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-[#0B2E33]/70">Recent Solutions</span>
                    <button 
                      onClick={clearHistory}
                      className="text-xs text-[#0B2E33]/50 hover:text-[#0B2E33]"
                    >
                      Clear all
                    </button>
                  </div>
                  <div className="space-y-2">
                    {history.map((item, index) => (
                      <div 
                        key={index} 
                        onClick={() => loadFromHistory(item)}
                        className="text-xs p-2 bg-white/30 hover:bg-white/50 rounded cursor-pointer"
                      >
                        <div className="font-medium truncate">{item.equation}</div>
                        <div className="text-[#0B2E33]/70 truncate">
                          {item.type === 'arithmetic' && `= ${item.result}`}
                          {item.type === 'linear' && `x = ${item.x}`}
                          {item.type === 'quadratic' && `x₁ = ${item.x1}, x₂ = ${item.x2}`}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <input
                type="text"
                value={equation}
                onChange={(e) => {
                  setEquation(e.target.value)
                  setSolution(null)
                  setError(null)
                }}
                onKeyDown={(e) => e.key === 'Enter' && solveEquation()}
                placeholder="e.g., 2x + 3 = 7 or x^2 + 2x + 1 = 0 or 2*(3+4)"
                className="w-full p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
              />
            </div>

            <div className="bg-[#B8E3E9]/20 p-4 rounded-lg border border-[#93B1B5]/30">
              <div className="flex items-center gap-2 mb-3">
                <Info className="w-4 h-4 text-[#0B2E33]/70" />
                <span className="text-sm text-[#0B2E33]/70">Supported formats:</span>
              </div>
              <ul className="text-sm text-[#0B2E33]/70 space-y-1 ml-6 list-disc">
                <li><strong>Arithmetic:</strong> 2 + 3 * 4, 2*(3+4)/5</li>
                <li><strong>Linear equations:</strong> 2x + 3 = 7, -x - 5 = 0</li>
                <li><strong>Quadratic equations:</strong> x^2 + 2x + 1 = 0, 2x^2 -5x +3=0</li>
              </ul>
            </div>

            <button
              onClick={solveEquation}
              className="w-full p-3 bg-[#0B2E33] text-white rounded-lg hover:bg-[#4F7C82] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4" />
              Solve Equation
            </button>

            {error && (
              <div className="p-4 bg-red-100/50 rounded-lg border border-red-200 text-red-700">
                {error}
              </div>
            )}

            {solution && (
              <div className="p-4 bg-[#B8E3E9]/20 rounded-lg border border-[#93B1B5]/30">
                <h3 className="text-lg font-semibold text-[#0B2E33] mb-2">
                  Solution for: <span className="font-mono">{solution.equation}</span>
                </h3>
                
                {solution.type === 'arithmetic' && (
                  <div className="text-[#0B2E33] font-mono">
                    = {solution.result}
                  </div>
                )}
                
                {solution.type === 'linear' && (
                  <div className="text-[#0B2E33] space-y-1">
                    <div className="font-mono">x = {solution.x}</div>
                    <div className="text-sm text-[#0B2E33]/70">
                      Solved by isolating x on one side
                    </div>
                  </div>
                )}
                
                {solution.type === 'quadratic' && (
                  <div className="text-[#0B2E33] space-y-2">
                    <div className="text-sm text-[#0B2E33]/70">
                      Discriminant (D) = {solution.discriminant} — {solution.nature} roots
                    </div>
                    <div className="font-mono">x₁ = {solution.x1}</div>
                    <div className="font-mono">x₂ = {solution.x2}</div>
                    <div className="text-sm text-[#0B2E33]/70">
                      Using quadratic formula: x = [-b ± √(b²-4ac)] / 2a
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Related Tools Section */}
        <div className="mt-8 bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <h2 className="text-xl font-bold text-[#0B2E33] mb-4">Related Calculators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/percentage-calculator" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Percentage Calculator
            </Link>
            <Link href="/gpa-calculator" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → GPA Calculator
            </Link>
            <Link href="/interest-calculator" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Interest Calculator
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