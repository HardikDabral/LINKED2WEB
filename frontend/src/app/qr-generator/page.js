'use client'
import { useState, useRef } from 'react'
import Link from 'next/link'
import { QrCode, Copy, Download, RefreshCw } from 'lucide-react'
import QRCode from 'qrcode'

export default function QRGenerator() {
  const [text, setText] = useState('')
  const [qrCode, setQrCode] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const canvasRef = useRef(null)

  const generateQR = async () => {
    if (!text) return
    
    setIsGenerating(true)
    try {
      const url = await QRCode.toDataURL(text, {
        width: 400,
        margin: 2,
        color: {
          dark: '#0B2E33',
          light: '#FFFFFF'
        }
      })
      setQrCode(url)
    } catch (err) {
      console.error('Error generating QR code:', err)
    }
    setIsGenerating(false)
  }

  const downloadQR = () => {
    if (!qrCode) return
    const link = document.createElement('a')
    link.download = 'qr-code.png'
    link.href = qrCode
    link.click()
  }

  const copyQR = () => {
    if (!qrCode) return
    navigator.clipboard.writeText(text)
      .then(() => alert('Text copied to clipboard!'))
      .catch(err => console.error('Failed to copy:', err))
  }

  return (
    <div className="min-h-screen  flex justify-center">
  <div className="max-w-2xl w-full mx-4 sm:mx-auto p-6 pt-16">
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-lg bg-[#0B2E33] text-white mr-4 animate-bounce">
            <QrCode className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#0B2E33]">Free QR Code Generator - Create QR Codes Online</h1>
            <p className="text-sm text-[#0B2E33]/70 mt-1">Generate QR codes for links or text</p>
          </div>
        </div>

        <div className="bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#0B2E33] mb-2">
                Enter text or URL
              </label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text or paste a URL"
                className="w-full p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20 min-h-[100px]"
              />
            </div>

            <button
              onClick={generateQR}
              disabled={!text || isGenerating}
              className={`w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 ${
                !text || isGenerating
                  ? 'bg-[#4F7C82] cursor-not-allowed'
                  : 'bg-[#0B2E33] hover:bg-[#4F7C82] text-white'
              }`}
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <QrCode className="w-5 h-5" />
                  Generate QR Code
                </>
              )}
            </button>

            {qrCode && (
              <div className="space-y-4">
                <div className="flex justify-center">
                  <img
                    src={qrCode}
                    alt="QR Code"
                    className="max-w-[300px] bg-white p-4 rounded-lg"
                  />
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={downloadQR}
                    className="flex-1 py-2 px-4 rounded-lg bg-[#0B2E33] hover:bg-[#4F7C82] text-white flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                  <button
                    onClick={copyQR}
                    className="flex-1 py-2 px-4 rounded-lg bg-[#0B2E33] hover:bg-[#4F7C82] text-white flex items-center justify-center gap-2"
                  >
                    <Copy className="w-4 h-4" />
                    Copy Text
                  </button>
                </div>
              </div>
            )}

            <div className="text-sm text-[#0B2E33]/70 bg-white/30 p-4 rounded-lg">
              <p className="font-medium">Tips:</p>
              <ul className="list-disc ml-5 space-y-1 mt-2">
                <li>For URLs, include https:// for proper linking</li>
                <li>Keep text concise for better scanning</li>
                <li>Test the QR code before sharing</li>
                <li>Use in well-lit conditions for scanning</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Tools Section */}
        <div className="mt-8 bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <h2 className="text-xl font-bold text-[#0B2E33] mb-4">Related Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/base64-tool" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Base64 Tool
            </Link>
            <Link href="/image-resizer" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Image Resizer
            </Link>
            <Link href="/color-picker" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Color Picker
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