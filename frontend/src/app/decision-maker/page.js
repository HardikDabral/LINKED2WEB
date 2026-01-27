'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Dices, Plus, Trash2, RefreshCw } from 'lucide-react'

export default function DecisionMaker() {
  const [choices, setChoices] = useState([])
  const [newChoice, setNewChoice] = useState('')
  const [result, setResult] = useState(null)
  const [isFlipping, setIsFlipping] = useState(false)
  const [mode, setMode] = useState('coin') // 'coin' or 'choice'
  const [coinSide, setCoinSide] = useState('heads') // 'heads' or 'tails'
  const flipIntervalRef = useRef(null)

  const addChoice = () => {
    if (newChoice.trim()) {
      setChoices([...choices, newChoice.trim()])
      setNewChoice('')
    }
  }

  const removeChoice = (index) => {
    setChoices(choices.filter((_, i) => i !== index))
  }

  const flipCoin = () => {
    // Clear any existing interval
    if (flipIntervalRef.current) {
      clearInterval(flipIntervalRef.current)
    }

    setIsFlipping(true)
    setResult(null)
    
    let flipCount = 0
    const maxFlips = 15 + Math.floor(Math.random() * 5) // Random flips between 15-19
    
    flipIntervalRef.current = setInterval(() => {
      setCoinSide(prev => prev === 'heads' ? 'tails' : 'heads')
      flipCount++
      
      if (flipCount >= maxFlips) {
        clearInterval(flipIntervalRef.current)
        const finalResult = Math.random() < 0.5 ? 'Heads' : 'Tails'
        setResult(finalResult)
        setCoinSide(finalResult.toLowerCase())
        setIsFlipping(false)
      }
    }, 100)
  }

  const makeChoice = () => {
    if (choices.length === 0) return
    
    setIsFlipping(true)
    setResult(null)
    
    let picks = 0
    const maxPicks = 15 + Math.floor(Math.random() * 5)
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * choices.length)
      setResult(choices[randomIndex])
      picks++
      
      if (picks >= maxPicks) {
        clearInterval(interval)
        setIsFlipping(false)
      }
    }, 100)

    return () => clearInterval(interval)
  }

  // Clean up intervals on unmount
  useEffect(() => {
    return () => {
      if (flipIntervalRef.current) {
        clearInterval(flipIntervalRef.current)
      }
    }
  }, [])

  return (
    <div className="min-h-screen  flex justify-center">
  <div className="max-w-2xl w-full mx-4 sm:mx-auto p-6 pt-16">
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-lg bg-[#0B2E33] text-white mr-4 animate-bounce">
            <Dices className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#0B2E33]">Free Decision Maker - Coin Flip & Random Choice Tool</h1>
            <p className="text-sm text-[#0B2E33]/70 mt-1">Flip a coin or pick a random choice</p>
          </div>
        </div>

        <div className="bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <div className="space-y-4">
            {/* Mode Selection */}
            <div className="flex gap-2">
              <button
                onClick={() => setMode('coin')}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                  mode === 'coin'
                    ? 'bg-[#0B2E33] text-white shadow-md'
                    : 'bg-white/30 text-[#0B2E33] hover:bg-white/50'
                }`}
              >
                Coin Flip
              </button>
              <button
                onClick={() => setMode('choice')}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                  mode === 'choice'
                    ? 'bg-[#0B2E33] text-white shadow-md'
                    : 'bg-white/30 text-[#0B2E33] hover:bg-white/50'
                }`}
              >
                Random Choice
              </button>
            </div>

            {mode === 'choice' && (
              <>
                {/* Choice Input */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newChoice}
                    onChange={(e) => setNewChoice(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addChoice()}
                    placeholder="Enter a choice"
                    className="flex-1 p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20 transition-all"
                  />
                  <button
                    onClick={addChoice}
                    className="p-3 rounded-lg bg-[#0B2E33] text-white hover:bg-[#4F7C82] transition-all transform hover:scale-105 active:scale-95"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>

                {/* Choices List */}
                {choices.length > 0 && (
                  <div className="max-h-40 overflow-y-auto bg-white/30 rounded-lg p-2">
                    {choices.map((choice, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 hover:bg-white/30 rounded-lg group transition-all"
                      >
                        <span className="text-[#0B2E33]">{choice}</span>
                        <button
                          onClick={() => removeChoice(index)}
                          className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-600 transition-all"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* Coin Display - Always visible in coin mode */}
            {mode === 'coin' && (
              <div className="flex flex-col items-center justify-center min-h-32">
                <div className={`relative w-32 h-32 mb-4 ${isFlipping ? 'animate-spin-fast' : ''}`}>
                  <div className={`absolute inset-0 rounded-full flex items-center justify-center transition-all duration-300 ${isFlipping ? 'opacity-0' : 'opacity-100'}`}>
                    <div className={`w-full h-full rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${coinSide === 'heads' ? 'bg-amber-400' : 'bg-amber-600'}`}>
                      <span className="font-bold text-white text-lg uppercase">
                        {coinSide === 'heads' ? 'H' : 'T'}
                      </span>
                    </div>
                  </div>
                  <div className={`absolute inset-0 rounded-full flex items-center justify-center bg-gray-200 ${isFlipping ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-300 to-gray-400 animate-pulse"></div>
                  </div>
                </div>
              </div>
            )}

            {/* Action Button */}
            <button
              onClick={mode === 'coin' ? flipCoin : makeChoice}
              disabled={(mode === 'choice' && choices.length === 0) || isFlipping}
              className={`w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-all transform hover:scale-105 active:scale-95 ${
                (mode === 'choice' && choices.length === 0) || isFlipping
                  ? 'bg-[#4F7C82] cursor-not-allowed'
                  : 'bg-[#0B2E33] hover:bg-[#4F7C82] text-white shadow-md'
              }`}
            >
              <RefreshCw className={`w-5 h-5 ${isFlipping ? 'animate-spin' : ''}`} />
              {mode === 'coin' ? 'Flip Coin' : 'Pick Random Choice'}
            </button>

            {/* Result Display */}
            {result && (
              <div className="text-center p-4 bg-white/30 rounded-lg animate-fade-in">
                <p className="text-sm text-[#0B2E33]/70 mb-1">Result:</p>
                <p className="text-xl font-bold text-[#0B2E33]">{result}</p>
              </div>
            )}

            {/* Tips */}
            <div className="text-sm text-[#0B2E33]/70 bg-white/30 p-4 rounded-lg">
              <p className="font-medium">Tips:</p>
              <ul className="list-disc ml-5 space-y-1 mt-2">
                <li>Use coin flip for yes/no decisions</li>
                <li>Add multiple choices for complex decisions</li>
                <li>Remove choices by hovering and clicking the trash icon</li>
                <li>Press Enter to quickly add a new choice</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Tools Section */}
        <div className="mt-8 bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <h2 className="text-xl font-bold text-[#0B2E33] mb-4">Related Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/random-name-picker" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Random Name Picker
            </Link>
            <Link href="/percentage-calculator" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Percentage Calculator
            </Link>
            <Link href="/word-counter" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Word Counter
            </Link>
            <Link href="/" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → View All Tools
            </Link>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx global>{`
        @keyframes spin-fast {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        .animate-spin-fast {
          animation: spin-fast 0.1s linear infinite;
        }
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  )
}