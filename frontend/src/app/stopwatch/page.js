'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { TimerOff, Play, Pause, RefreshCw, Timer, Flag } from 'lucide-react'

export default function Stopwatch() {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [laps, setLaps] = useState([])

  useEffect(() => {
    let interval
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prev => prev + 10)
      }, 10)
    }
    return () => clearInterval(interval)
  }, [isRunning])

  const startStop = () => {
    setIsRunning(!isRunning)
  }

  const reset = () => {
    setIsRunning(false)
    setTime(0)
    setLaps([])
  }

  const addLap = () => {
    setLaps([...laps, time])
  }

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000)
    const seconds = Math.floor((ms % 60000) / 1000)
    const milliseconds = Math.floor((ms % 1000) / 10)
    return {
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0'),
      milliseconds: String(milliseconds).padStart(2, '0')
    }
  }

  const formattedTime = formatTime(time)

  return (
    <div className="min-h-screen  flex justify-center">
  <div className="max-w-2xl w-full mx-4 sm:mx-auto p-6 pt-16">
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-lg bg-[#0B2E33] text-white mr-4 animate-bounce">
            <TimerOff className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-[#0B2E33]">Free Stopwatch - Track Time Online</h1>
        </div>

        <div className="bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <div className="text-center mb-8">
            <div className="text-5xl sm:text-6xl lg:text-7xl font-bold font-mono text-[#0B2E33]">
              {formattedTime.minutes}:{formattedTime.seconds}.{formattedTime.milliseconds}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              onClick={startStop}
              className={`flex-1 bg-[#0B2E33] text-white py-3 rounded-lg hover:bg-[#4F7C82] transition-all duration-300 flex items-center justify-center gap-2`}
            >
              {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isRunning ? 'Stop' : 'Start'}
            </button>
            <button
              onClick={addLap}
              disabled={!isRunning}
              className="flex-1 bg-[#0B2E33] text-white py-3 rounded-lg hover:bg-[#4F7C82] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Flag className="w-4 h-4" />
              Lap
            </button>
            <button
              onClick={reset}
              className="flex-1 bg-[#0B2E33] text-white py-3 rounded-lg hover:bg-[#4F7C82] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Reset
            </button>
          </div>

          {laps.length > 0 && (
            <div className="border-t border-[#93B1B5]/30 pt-4">
              <h2 className="text-xl font-semibold text-[#0B2E33] mb-4 flex items-center">
                <Timer className="w-5 h-5 mr-2" />
                Laps
              </h2>
              <div className="max-h-60 overflow-y-auto">
                {laps.map((lapTime, index) => {
                  const formatted = formatTime(lapTime)
                  return (
                    <div key={index} className="flex justify-between py-2 border-b border-[#93B1B5]/30">
                      <span className="text-[#0B2E33]">Lap {laps.length - index}</span>
                      <span className="font-mono text-[#0B2E33]">
                        {formatted.minutes}:{formatted.seconds}.{formatted.milliseconds}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>

        {/* Related Tools Section */}
        <div className="mt-8 bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <h2 className="text-xl font-bold text-[#0B2E33] mb-4">Related Date & Time Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/countdown-timer" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Countdown Timer
            </Link>
            <Link href="/age-calculator" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Age Calculator
            </Link>
            <Link href="/pomodoro" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Pomodoro Timer
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
