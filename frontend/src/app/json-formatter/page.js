'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Braces, Copy, Check, Trash2, Info, Minimize2 } from 'lucide-react'

export default function JsonFormatter() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState(null)
  const [copied, setCopied] = useState(false)
  const [isMinified, setIsMinified] = useState(false)
  const [lineCount, setLineCount] = useState(0)

  useEffect(() => {
    formatJSON()
  }, [input, isMinified])

  const formatJSON = () => {
    try {
      if (!input.trim()) {
        setOutput('')
        setError(null)
        setLineCount(0)
        return
      }

      const parsedJSON = JSON.parse(input)
      const formattedJSON = isMinified 
        ? JSON.stringify(parsedJSON) 
        : JSON.stringify(parsedJSON, null, 2)
      
      setOutput(formattedJSON)
      setError(null)
      setLineCount(formattedJSON.split('\n').length)
    } catch (err) {
      setError(getDetailedError(err))
      setOutput('')
      setLineCount(0)
    }
  }

  const getDetailedError = (err) => {
    if (err instanceof SyntaxError) {
      try {
        // Try to extract position information from the error message
        const match = err.message.match(/position\s+(\d+)/)
        if (match) {
          const position = parseInt(match[1])
          const lines = input.substring(0, position).split('\n')
          const line = lines.length
          const column = lines[lines.length - 1].length + 1
          return `Error at line ${line}, column ${column}: ${err.message.replace(/^JSON\.parse:\s*/, '')}`
        }
      } catch (e) {
        console.error('Error parsing error message:', e)
      }
      return `Syntax Error: ${err.message.replace(/^JSON\.parse:\s*/, '')}`
    }
    return `Error: ${err.message}`
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(output)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
      setError('Failed to copy to clipboard')
    }
  }

  const clearAll = () => {
    setInput('')
    setOutput('')
    setError(null)
    setLineCount(0)
  }

  const toggleMinify = () => {
    setIsMinified(!isMinified)
  }

  const pasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText()
      setInput(text)
    } catch (err) {
      console.error('Failed to paste:', err)
      setError('Failed to paste from clipboard')
    }
  }

  return (
    <div className="min-h-screen  flex justify-center">
  <div className="max-w-2xl w-full mx-4 sm:mx-auto p-6 pt-16">
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-lg bg-[#0B2E33] text-white mr-4 animate-bounce">
            <Braces className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#0B2E33]">Free JSON Formatter - Format, Validate & Minify JSON Online</h1>
            <p className="text-sm text-[#0B2E33]/70 mt-1">Format, validate, minify, and analyze JSON data</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-[#0B2E33]">
                Input JSON
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={pasteFromClipboard}
                  className="text-[#0B2E33]/70 hover:text-[#0B2E33] flex items-center gap-1 text-xs px-2 py-1 bg-white/30 rounded"
                >
                  Paste
                </button>
                <button
                  onClick={clearAll}
                  className="text-[#0B2E33]/70 hover:text-[#0B2E33] flex items-center gap-1 text-xs px-2 py-1 bg-white/30 rounded"
                >
                  <Trash2 className="w-3 h-3" />
                  Clear
                </button>
              </div>
            </div>
            <div className="relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Paste your JSON here (e.g., {"name":"John","age":30})'
                className="w-full h-[calc(100vh-300px)] p-4 font-mono text-sm border border-[#93B1B5]/40 rounded-lg bg-white/50 text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20 resize-none"
              />
              {input && (
                <div className="absolute bottom-3 right-3 text-xs text-[#0B2E33]/50">
                  {input.length} chars
                </div>
              )}
            </div>
          </div>

          {/* Output Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-[#0B2E33]">
                {isMinified ? 'Minified JSON' : 'Formatted JSON'}
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleMinify}
                  className="text-[#0B2E33]/70 hover:text-[#0B2E33] flex items-center gap-1 text-xs px-2 py-1 bg-white/30 rounded"
                >
                  <Minimize2 className="w-3 h-3" />
                  {isMinified ? 'Format' : 'Minify'}
                </button>
                {output && (
                  <button
                    onClick={copyToClipboard}
                    className="text-[#0B2E33]/70 hover:text-[#0B2E33] flex items-center gap-1 text-xs px-2 py-1 bg-white/30 rounded"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        Copy
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
            <div className="relative">
              {error ? (
                <div className="p-4 bg-red-100/50 rounded-lg border border-red-200 text-red-700">
                  {error}
                </div>
              ) : (
                <>
                  <pre className="w-full h-[calc(100vh-300px)] p-4 font-mono text-sm border border-[#93B1B5]/40 rounded-lg bg-white/50 text-[#0B2E33] overflow-auto">
                    {output || 'Formatted JSON will appear here...'}
                  </pre>
                  {output && (
                    <div className="absolute bottom-3 right-3 text-xs text-[#0B2E33]/50">
                      {lineCount} {lineCount === 1 ? 'line' : 'lines'} • {output.length} chars
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {/* Info Section */}
        {!input && (
          <div className="mt-6 bg-[#B8E3E9]/20 p-4 rounded-lg border border-[#93B1B5]/30">
            <div className="flex items-center gap-2 mb-2">
              <Info className="w-4 h-4 text-[#0B2E33]/70" />
              <span className="text-sm font-medium text-[#0B2E33]">JSON Formatting Tips</span>
            </div>
            <ul className="text-sm text-[#0B2E33]/70 space-y-1 ml-6 list-disc">
              <li>JSON requires double quotes for property names</li>
              <li>Use <code className="bg-white/30 px-1 rounded">{"{}"}</code> for objects and <code className="bg-white/30 px-1 rounded">[]</code> for arrays</li>
              <li>Supported data types: string, number, boolean, null, object, array</li>
              <li>Press Ctrl+Space for autocomplete in most editors</li>
            </ul>
          </div>
        )}

        {/* Related Tools Section */}
        <div className="mt-8 bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <h2 className="text-xl font-bold text-[#0B2E33] mb-4">Related Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/base64-tool" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Base64 Tool
            </Link>
            <Link href="/word-counter" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Word Counter
            </Link>
            <Link href="/language-translator" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Language Translator
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