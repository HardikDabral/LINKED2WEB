'use client'
import { useState, useRef } from 'react'
import Link from 'next/link'
import { Shuffle, Plus, Trash2, Download, Upload } from 'lucide-react'

export default function RandomNamePicker() {
  const [names, setNames] = useState([])
  const [newName, setNewName] = useState('')
  const [selectedName, setSelectedName] = useState(null)
  const [isSpinning, setIsSpinning] = useState(false)
  const fileInputRef = useRef(null)

  const addName = () => {
    if (newName.trim()) {
      setNames([...names, newName.trim()])
      setNewName('')
    }
  }

  const removeName = (index) => {
    setNames(names.filter((_, i) => i !== index))
  }

  const pickRandom = () => {
    if (names.length === 0) return
    
    setIsSpinning(true)
    setSelectedName(null)
    
    // Simulate spinning animation
    let spins = 0
    const maxSpins = 20
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * names.length)
      setSelectedName(names[randomIndex])
      spins++
      
      if (spins >= maxSpins) {
        clearInterval(interval)
        setIsSpinning(false)
      }
    }, 100)
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const content = event.target.result
        const uploadedNames = content.split('\n').map(name => name.trim()).filter(Boolean)
        setNames(uploadedNames)
      }
      reader.readAsText(file)
    }
  }

  const downloadNames = () => {
    const content = names.join('\n')
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'name-list.txt'
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen  flex justify-center">
  <div className="max-w-2xl w-full mx-4 sm:mx-auto p-6 pt-16">
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-lg bg-[#0B2E33] text-white mr-4 animate-bounce">
            <Shuffle className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#0B2E33]">Free Random Name Picker - Pick Random Names Online</h1>
            <p className="text-sm text-[#0B2E33]/70 mt-1">Pick random names from your list</p>
          </div>
        </div>

        <div className="bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <div className="space-y-6">
            {/* Name Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addName()}
                placeholder="Enter a name"
                className="flex-1 p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
              />
              <button
                onClick={addName}
                className="p-3 rounded-lg bg-[#0B2E33] text-white hover:bg-[#4F7C82] transition-colors"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>

            {/* File Upload/Download */}
            <div className="flex gap-2">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex-1 py-2 px-4 rounded-lg bg-[#0B2E33] hover:bg-[#4F7C82] text-white flex items-center justify-center gap-2"
              >
                <Upload className="w-4 h-4" />
                Upload List
              </button>
              <button
                onClick={downloadNames}
                disabled={names.length === 0}
                className="flex-1 py-2 px-4 rounded-lg bg-[#0B2E33] hover:bg-[#4F7C82] text-white flex items-center justify-center gap-2 disabled:bg-[#4F7C82] disabled:cursor-not-allowed"
              >
                <Download className="w-4 h-4" />
                Download List
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept=".txt"
                className="hidden"
              />
            </div>

            {/* Names List */}
            {names.length > 0 && (
              <div className="max-h-60 overflow-y-auto bg-white/30 rounded-lg p-2">
                {names.map((name, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 hover:bg-white/30 rounded-lg group"
                  >
                    <span className="text-[#0B2E33]">{name}</span>
                    <button
                      onClick={() => removeName(index)}
                      className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-600 transition-opacity"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Pick Random Button */}
            <button
              onClick={pickRandom}
              disabled={names.length === 0 || isSpinning}
              className={`w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 ${
                names.length === 0 || isSpinning
                  ? 'bg-[#4F7C82] cursor-not-allowed'
                  : 'bg-[#0B2E33] hover:bg-[#4F7C82] text-white'
              }`}
            >
              <Shuffle className={`w-5 h-5 ${isSpinning ? 'animate-spin' : ''}`} />
              Pick Random Name
            </button>

            {/* Selected Name */}
            {selectedName && (
              <div className="text-center p-6 bg-white/30 rounded-lg">
                <p className="text-sm text-[#0B2E33]/70 mb-2">Selected Name:</p>
                <p className="text-2xl font-bold text-[#0B2E33]">{selectedName}</p>
              </div>
            )}

            {/* Tips */}
            <div className="text-sm text-[#0B2E33]/70 bg-white/30 p-4 rounded-lg">
              <p className="font-medium">Tips:</p>
              <ul className="list-disc ml-5 space-y-1 mt-2">
                <li>Add names one by one or upload a text file</li>
                <li>Each name in the uploaded file should be on a new line</li>
                <li>Click on a name to remove it from the list</li>
                <li>Download your list to save it for later</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Tools Section */}
        <div className="mt-8 bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <h2 className="text-xl font-bold text-[#0B2E33] mb-4">Related Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/decision-maker" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Decision Maker
            </Link>
            <Link href="/word-counter" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Word Counter
            </Link>
            <Link href="/todo-list" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Todo List
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