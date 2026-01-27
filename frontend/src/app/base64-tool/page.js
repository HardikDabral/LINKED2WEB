'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Binary, ArrowDown, ArrowUp, Copy, Check, Trash2, Info, Replace } from 'lucide-react'

export default function Base64Tool() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [mode, setMode] = useState('encode')
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (input.trim()) {
      handleConversion()
    }
  }, [input, mode])

  const handleConversion = () => {
    try {
      if (!input.trim()) {
        setOutput('')
        setError(null)
        return
      }

      if (mode === 'encode') {
        // Handle Unicode characters properly
        const encoded = btoa(unescape(encodeURIComponent(input)))
        setOutput(encoded)
      } else {
        // Handle decoding with proper error checking
        if (!/^[\w+/]+={0,2}$/.test(input)) {
          throw new Error('Invalid Base64 characters')
        }
        const decoded = decodeURIComponent(escape(atob(input)))
        setOutput(decoded)
      }
      setError(null)
    } catch (err) {
      setError(mode === 'encode' ? 'Unable to encode text' : `Invalid Base64: ${err.message}`)
      setOutput('')
    }
  }

  const copyToClipboard = async (text = output) => {
    try {
      await navigator.clipboard.writeText(text)
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
  }

  const toggleMode = () => {
    setMode(mode === 'encode' ? 'decode' : 'encode')
    // Swap input and output when toggling
    const newInput = output
    setInput(newInput)
    setOutput('')
    setError(null)
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
            <Binary className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#0B2E33]">Free Base64 Tool - Encode & Decode Base64 Online</h1>
            <p className="text-sm text-[#0B2E33]/70 mt-1">Encode and decode text to/from Base64 format</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Controls Section */}
          <div className="flex flex-wrap justify-between gap-4">
            <div className="flex gap-3">
              <button
                onClick={toggleMode}
                className="flex items-center gap-2 px-4 py-2 bg-[#0B2E33] text-white rounded-lg hover:bg-[#4F7C82] transition-all duration-300"
              >
                <Replace className="w-4 h-4" />
                {mode === 'encode' ? 'Switch to Decode' : 'Switch to Encode'}
              </button>
            </div>

            <div className="flex gap-3">
              <button
                onClick={pasteFromClipboard}
                className="flex items-center gap-2 px-4 py-2 bg-white/50 hover:bg-white/70 rounded-lg transition-all duration-300 text-black"
              >
                Paste
              </button>
              <button
                onClick={clearAll}
                className="flex items-center gap-2 px-4 py-2 bg-white/50 hover:bg-white/70 rounded-lg transition-all duration-300 text-black"
              >
                <Trash2 className="w-4 h-4" />
                Clear
              </button>
            </div>
          </div>

          {/* Input Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-[#0B2E33]">
                {mode === 'encode' ? 'Text to Encode' : 'Base64 to Decode'}
              </label>
              <div className="text-xs text-[#0B2E33]/50">
                {input.length} characters
              </div>
            </div>
            <textarea
              value={input}
              onChange={(e) => {
                setInput(e.target.value)
                setError(null)
              }}
              placeholder={mode === 'encode'
                ? 'Enter text to encode (supports Unicode characters)...'
                : 'Enter Base64 string to decode...'}
              className="w-full h-48 p-4 font-mono text-sm border border-[#93B1B5]/40 rounded-lg bg-white/50 text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20 resize-none"
            />
          </div>

          {/* Output Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-[#0B2E33]">
                {mode === 'encode' ? 'Base64 Output' : 'Decoded Text'}
              </label>
              <div className="flex items-center gap-3">
                <div className="text-xs text-[#0B2E33]/50">
                  {output.length} characters
                </div>
                {output && (
                  <button
                    onClick={() => copyToClipboard(output)}
                    className="flex items-center gap-1 text-sm text-[#0B2E33]/70 hover:text-[#0B2E33]"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
            {error ? (
              <div className="p-4 bg-red-100/50 rounded-lg border border-red-200 text-red-700">
                {error}
              </div>
            ) : (
              <textarea
                readOnly
                value={output}
                placeholder={mode === 'encode'
                  ? 'Base64 output will appear here...'
                  : 'Decoded text will appear here...'}
                className="w-full h-48 p-4 font-mono text-sm border border-[#93B1B5]/40 rounded-lg bg-white/50 text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20 resize-none"
              />
            )}
          </div>

          {/* Info Section */}
          {!input && (
            <div className="mt-6 bg-[#B8E3E9]/20 p-4 rounded-lg border border-[#93B1B5]/30">
              <div className="flex items-center gap-2 mb-2">
                <Info className="w-4 h-4 text-[#0B2E33]/70" />
                <span className="text-sm font-medium text-[#0B2E33]">Base64 Conversion Tips</span>
              </div>
              <ul className="text-sm text-[#0B2E33]/70 space-y-1 ml-6 list-disc">
                <li>Base64 is commonly used for encoding binary data in text formats</li>
                <li>Supports Unicode characters when encoding/decoding</li>
                <li>Valid Base64 contains only A-Z, a-z, 0-9, '+', '/', and '=' padding</li>
                <li>Use for: data URLs, basic auth, simple obfuscation</li>
              </ul>
            </div>
          )}
        </div>

        {/* Related Tools Section */}
        <div className="mt-8 bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <h2 className="text-xl font-bold text-[#0B2E33] mb-4">Related Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/json-formatter" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → JSON Formatter
            </Link>
            <Link href="/language-translator" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Language Translator
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
    </div>
  )
}