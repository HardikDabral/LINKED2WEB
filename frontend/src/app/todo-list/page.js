'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ClipboardList, Plus, Check, ListFilter, CheckCircle2, Circle, Trash2 } from 'lucide-react'

export default function TodoList() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const [filter, setFilter] = useState('all')
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const saved = localStorage.getItem('todos')
    if (saved) {
      setTasks(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    if (isClient) {
      localStorage.setItem('todos', JSON.stringify(tasks))
    }
  }, [tasks, isClient])

  const addTask = (e) => {
    e.preventDefault()
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }])
      setNewTask('')
    }
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  return (
    <div className="min-h-screen  flex justify-center">
  <div className="max-w-2xl w-full mx-4 sm:mx-auto p-6 pt-16">
        <div className="flex items-center mb-8 -ml-4">
          <div className="p-3 rounded-lg bg-[#0B2E33] text-white mr-4 animate-bounce">
            <ClipboardList className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-[#0B2E33]">Free Todo List - Task Manager Online</h1>
        </div>

        <div className="bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40 -ml-4">
          {/* Input Field */}
          <form onSubmit={addTask} className="mb-4">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="w-full p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 backdrop-blur-xl text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
              placeholder="Add a new task..."
            />
          </form>

          {/* Buttons Layout for Mobile */}
          <div className="flex flex-col gap-2 mb-6">
            <div className="flex gap-2">
              <button
                type="submit"
                onClick={addTask}
                className="flex-1 px-4 py-2 bg-[#0B2E33] text-white rounded-lg hover:bg-[#4F7C82] transition-all duration-300 flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Task
              </button>
              <button
                onClick={() => setFilter('all')}
                className={`flex-1 px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 ${
                  filter === 'all' 
                    ? 'bg-[#0B2E33] text-white' 
                    : 'bg-white/30 text-[#0B2E33] hover:bg-white/40'
                }`}
              >
                <ListFilter className="w-4 h-4" />
                All Tasks
              </button>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('active')}
                className={`flex-1 px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 ${
                  filter === 'active' 
                    ? 'bg-[#0B2E33] text-white' 
                    : 'bg-white/30 text-[#0B2E33] hover:bg-white/40'
                }`}
              >
                <Circle className="w-4 h-4" />
                Active
              </button>
              <button
                onClick={() => setFilter('completed')}
                className={`flex-1 px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 ${
                  filter === 'completed' 
                    ? 'bg-[#0B2E33] text-white' 
                    : 'bg-white/30 text-[#0B2E33] hover:bg-white/40'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                Completed
              </button>
            </div>
          </div>

          <ul className="space-y-3">
            {filteredTasks.map(task => (
              <li key={task.id} className="flex items-center gap-3 p-3 border border-[#93B1B5]/40 rounded-lg bg-white/30 backdrop-blur-xl">
                <button
                  onClick={() => toggleTask(task.id)}
                  className={`h-5 w-5 rounded border flex items-center justify-center transition-all duration-300 ${
                    task.completed 
                      ? 'bg-[#0B2E33] border-[#0B2E33] text-white' 
                      : 'border-[#93B1B5] hover:border-[#0B2E33]'
                  }`}
                >
                  {task.completed && <Check className="w-3 h-3" />}
                </button>
                <span className={`flex-1 text-[#0B2E33] ${task.completed ? 'line-through opacity-60' : ''}`}>
                  {task.text}
                </span>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="p-1.5 text-[#0B2E33]/70 hover:text-[#0B2E33] hover:bg-white/50 rounded-lg transition-all duration-300"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Related Tools Section */}
        <div className="mt-8 bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <h2 className="text-xl font-bold text-[#0B2E33] mb-4">Related Productivity Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/pomodoro" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Pomodoro Timer
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
