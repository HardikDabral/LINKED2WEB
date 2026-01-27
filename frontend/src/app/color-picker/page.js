'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Palette, Copy, Check, RefreshCw } from 'lucide-react'

export default function ColorPicker() {
  const [color, setColor] = useState('#0B2E33')
  const [copied, setCopied] = useState(null)
  const [rgb, setRgb] = useState({ r: 11, g: 46, b: 51 })

  useEffect(() => {
    // Convert HEX to RGB when color changes
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color)
    if (result) {
      setRgb({
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      })
    }
  }, [color])

  const handleRgbChange = (key, value) => {
    const newRgb = { ...rgb, [key]: value }
    setRgb(newRgb)
    const hex = '#' +
      (newRgb.r | 1 << 8).toString(16).slice(1) +
      (newRgb.g | 1 << 8).toString(16).slice(1) +
      (newRgb.b | 1 << 8).toString(16).slice(1)
    setColor(hex)
  }

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(text)
      setTimeout(() => setCopied(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const generateRandomColor = () => {
    const hex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
    setColor(hex)
  }

  return (
    <div className="min-h-screen  flex justify-center">
      <div className="max-w-2xl w-full mx-4 sm:mx-auto p-6 pt-16">
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-lg bg-[#0B2E33] text-white mr-4 animate-bounce">
            <Palette className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#0B2E33]">Free Color Picker - Pick Colors from Images Online</h1>
            <p className="text-sm text-[#0B2E33]/70 mt-1">Pick and convert colors between formats</p>
          </div>
        </div>

        <div className="bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <div className="space-y-6">
            {/* Color Preview */}
            <div className="flex flex-col items-center gap-4">
              <div
                className="w-32 h-32 rounded-lg shadow-inner border border-[#93B1B5]/40"
                style={{ backgroundColor: color }}
              />
              <button
                onClick={generateRandomColor}
                className="flex items-center gap-2 px-4 py-2 bg-[#0B2E33] text-white rounded-lg hover:bg-[#4F7C82] transition-all duration-300"
              >
                <RefreshCw className="w-4 h-4" />
                Random Color
              </button>
            </div>

            {/* Color Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* HEX Input */}
              <div>
                <label className="block text-sm font-medium text-[#0B2E33] mb-2">
                  HEX Color
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="w-full p-3 pr-12 border border-[#93B1B5]/40 rounded-lg bg-white/50 text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
                  />
                  <button
                    onClick={() => copyToClipboard(color)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {copied === color ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4 text-[#0B2E33]/70" />
                    )}
                  </button>
                </div>
              </div>

              {/* RGB Input */}
              <div>
                <label className="block text-sm font-medium text-[#0B2E33] mb-2">
                  RGB Color
                </label>
                <div className="flex gap-2">
                  {['r', 'g', 'b'].map((channel) => (
                    <div key={channel} className="flex-1">
                      <input
                        type="number"
                        min="0"
                        max="255"
                        value={rgb[channel]}
                        onChange={(e) => handleRgbChange(channel, parseInt(e.target.value) || 0)}
                        className="w-full p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
                      />
                    </div>
                  ))}
                </div>
                <div className="relative mt-2">
                  <input
                    readOnly
                    value={`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`}
                    className="w-full p-3 pr-12 border border-[#93B1B5]/40 rounded-lg bg-white/50 text-[#0B2E33] focus:outline-none"
                  />
                  <button
                    onClick={() => copyToClipboard(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {copied === `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4 text-[#0B2E33]/70" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Color Picker */}
            <div>
              <label className="block text-sm font-medium text-[#0B2E33] mb-2">
                Visual Picker
              </label>
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-full h-12 rounded-lg cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Related Tools Section */}
        <div className="mt-8 bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <h2 className="text-xl font-bold text-[#0B2E33] mb-4">Related Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/image-resizer" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Image Resizer
            </Link>
            <Link href="/meme-generator" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Meme Generator
            </Link>
            <Link href="/qr-generator" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → QR Generator
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