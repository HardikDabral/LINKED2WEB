'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Clock, Play, Pause, RefreshCw, Coffee, Brain } from 'lucide-react'

export default function PomodoroTimer() {
    const [timeLeft, setTimeLeft] = useState(25 * 60)
    const [isRunning, setIsRunning] = useState(false)
    const [mode, setMode] = useState('work')
    const [cycles, setCycles] = useState(0)

    const times = {
        work: 25 * 60,
        shortBreak: 5 * 60,
        longBreak: 15 * 60
    }

    useEffect(() => {
        let interval
        if (isRunning && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(prev => prev - 1)
            }, 1000)
        } else if (timeLeft === 0) {
            handleTimerComplete()
        }
        return () => clearInterval(interval)
    }, [isRunning, timeLeft])

    const handleTimerComplete = () => {
        const notification = new Audio('/notification.mp3')
        notification.play()

        if (mode === 'work') {
            const newCycles = cycles + 1
            setCycles(newCycles)
            if (newCycles % 4 === 0) {
                setMode('longBreak')
                setTimeLeft(times.longBreak)
            } else {
                setMode('shortBreak')
                setTimeLeft(times.shortBreak)
            }
        } else {
            setMode('work')
            setTimeLeft(times.work)
        }
    }

    const toggleTimer = () => {
        setIsRunning(!isRunning)
    }

    const resetTimer = () => {
        setIsRunning(false)
        setMode('work')
        setTimeLeft(times.work)
        setCycles(0)
    }

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
    }

    return (
        <div className="min-h-screen  flex justify-center">
  <div className="max-w-2xl w-full mx-4 sm:mx-auto p-6 pt-16">
                <div className="flex items-center mb-8 -ml-4">
                    <div className="p-3 rounded-lg bg-[#0B2E33] text-white mr-4 animate-bounce">
                        <Clock className="w-6 h-6" />
                    </div>
                    <h1 className="text-2xl font-bold text-[#0B2E33]">Free Pomodoro Timer - Boost Productivity Online</h1>
                </div>

                <div className="bg-white/50 backdrop-blur-xl rounded-xl p-4 md:p-6 shadow-md border border-[#93B1B5]/40 -ml-4">
                    <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-8">
                        <button
                            onClick={() => { setMode('work'); setTimeLeft(times.work) }}
                            className={`px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${mode === 'work'
                                    ? 'bg-[#0B2E33] text-white'
                                    : 'bg-white/30 text-[#0B2E33] hover:bg-white/40'
                                }`}
                        >
                            <Brain className="w-4 h-4" />
                            Work
                        </button>
                        <button
                            onClick={() => { setMode('shortBreak'); setTimeLeft(times.shortBreak) }}
                            className={`px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${mode === 'shortBreak'
                                    ? 'bg-[#0B2E33] text-white'
                                    : 'bg-white/30 text-[#0B2E33] hover:bg-white/40'
                                }`}
                        >
                            <Coffee className="w-4 h-4" />
                            Short Break
                        </button>
                        <button
                            onClick={() => { setMode('longBreak'); setTimeLeft(times.longBreak) }}
                            className={`px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${mode === 'longBreak'
                                    ? 'bg-[#0B2E33] text-white'
                                    : 'bg-white/30 text-[#0B2E33] hover:bg-white/40'
                                }`}
                        >
                            <Coffee className="w-4 h-4" />
                            Long Break
                        </button>
                    </div>

                    <div className="text-center mb-8">
                        <div className="text-6xl md:text-8xl font-bold font-mono text-[#0B2E33] mb-4">
                            {formatTime(timeLeft)}
                        </div>
                        <div className="text-sm md:text-base text-[#0B2E33]/70">
                            Cycle: {Math.floor(cycles / 4) + 1} • Pomodoro: {(cycles % 4) + 1}/4
                        </div>
                    </div>

                    <div className="flex gap-3 md:gap-4">
                        <button
                            onClick={toggleTimer}
                            className="flex-1 bg-[#0B2E33] text-white py-3 rounded-lg hover:bg-[#4F7C82] transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                            <span className="hidden sm:inline">{isRunning ? 'Pause' : 'Start'}</span>
                        </button>
                        <button
                            onClick={resetTimer}
                            className="flex-1 bg-[#0B2E33] text-white py-3 rounded-lg hover:bg-[#4F7C82] transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <RefreshCw className="w-4 h-4" />
                            <span className="hidden sm:inline">Reset</span>
                        </button>
                    </div>
                </div>

                {/* Related Tools Section */}
                <div className="mt-8 bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
                  <h2 className="text-xl font-bold text-[#0B2E33] mb-4">Related Productivity Tools</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Link href="/todo-list" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
                      → Todo List
                    </Link>
                    <Link href="/stopwatch" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
                      → Stopwatch
                    </Link>
                    <Link href="/countdown-timer" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
                      → Countdown Timer
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
