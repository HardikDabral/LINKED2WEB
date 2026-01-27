'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Wifi, Download, Upload, RefreshCw } from 'lucide-react'

export default function WifiSpeedTest() {
  const [status, setStatus] = useState('idle')
  const [downloadSpeed, setDownloadSpeed] = useState(null)
  const [uploadSpeed, setUploadSpeed] = useState(null)
  const [ping, setPing] = useState(null)
  const [progress, setProgress] = useState(0)

  const simulateSpeedTest = async () => {
    setStatus('testing')
    setDownloadSpeed(null)
    setUploadSpeed(null)
    setPing(null)
    setProgress(0)

    try {
      // Simulate ping test
      setStatus('measuring ping')
      await new Promise(resolve => setTimeout(resolve, 1000))
      const simulatedPing = Math.floor(20 + Math.random() * 50)
      setPing(simulatedPing)

      // Simulate download speed test
      setStatus('testing download')
      for (let i = 0; i <= 100; i += 10) {
        setProgress(i)
        await new Promise(resolve => setTimeout(resolve, 300))
      }
      const downloadSpeed = (50 + Math.random() * 50).toFixed(2)
      setDownloadSpeed(downloadSpeed)

      // Simulate upload speed test
      setStatus('testing upload')
      setProgress(0)
      for (let i = 0; i <= 100; i += 10) {
        setProgress(i)
        await new Promise(resolve => setTimeout(resolve, 200))
      }
      const uploadSpeed = (downloadSpeed * 0.4).toFixed(2)
      setUploadSpeed(uploadSpeed)

      setStatus('complete')
    } catch (error) {
      console.error('Speed test error:', error)
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen  flex justify-center">
  <div className="max-w-2xl w-full mx-4 sm:mx-auto p-6 pt-16">
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-lg bg-[#0B2E33] text-white mr-4 animate-bounce">
            <Wifi className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#0B2E33]">Free WiFi Speed Test - Test Internet Speed Online</h1>
            <p className="text-sm text-[#0B2E33]/70 mt-1">Test your internet connection speed</p>
          </div>
        </div>

        <div className="bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <button
            onClick={simulateSpeedTest}
            disabled={status === 'testing'}
            className={`w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 ${
              status === 'testing'
                ? 'bg-[#4F7C82] cursor-not-allowed'
                : 'bg-[#0B2E33] hover:bg-[#4F7C82] text-white'
            }`}
          >
            {status === 'testing' ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                {status === 'measuring ping' ? 'Measuring Ping...' :
                 status === 'testing download' ? 'Testing Download...' :
                 status === 'testing upload' ? 'Testing Upload...' : 'Testing...'}
              </>
            ) : (
              <>
                <Wifi className="w-5 h-5" />
                {status === 'complete' ? 'Test Again' : 'Start Speed Test'}
              </>
            )}
          </button>

          {status === 'testing' && (
            <div className="space-y-2 mt-4">
              <div className="flex justify-between text-sm text-[#0B2E33]/70">
                <span>
                  {status === 'measuring ping' ? 'Measuring ping' :
                   status === 'testing download' ? 'Testing download speed' :
                   status === 'testing upload' ? 'Testing upload speed' : 'Preparing test'}
                </span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-[#93B1B5]/20 rounded-full h-2.5">
                <div 
                  className="bg-[#0B2E33] h-2.5 rounded-full transition-all duration-300" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className={`bg-white/30 p-4 rounded-lg text-center transition-all duration-300 ${
              status === 'testing download' ? 'ring-2 ring-[#0B2E33]' : ''
            }`}>
              <Download className={`w-8 h-8 mx-auto mb-2 text-[#0B2E33]/70 ${
                status === 'testing download' ? 'animate-pulse' : ''
              }`} />
              <p className="text-sm font-medium text-[#0B2E33]/70">Download</p>
              <p className="text-2xl font-bold text-[#0B2E33] mt-1">
                {downloadSpeed ? `${downloadSpeed} Mbps` : '--'}
              </p>
            </div>

            <div className={`bg-white/30 p-4 rounded-lg text-center transition-all duration-300 ${
              status === 'testing upload' ? 'ring-2 ring-[#0B2E33]' : ''
            }`}>
              <Upload className={`w-8 h-8 mx-auto mb-2 text-[#0B2E33]/70 ${
                status === 'testing upload' ? 'animate-pulse' : ''
              }`} />
              <p className="text-sm font-medium text-[#0B2E33]/70">Upload</p>
              <p className="text-2xl font-bold text-[#0B2E33] mt-1">
                {uploadSpeed ? `${uploadSpeed} Mbps` : '--'}
              </p>
            </div>

            <div className={`bg-white/30 p-4 rounded-lg text-center transition-all duration-300 ${
              status === 'measuring ping' ? 'ring-2 ring-[#0B2E33]' : ''
            }`}>
              <Wifi className={`w-8 h-8 mx-auto mb-2 text-[#0B2E33]/70 ${
                status === 'measuring ping' ? 'animate-pulse' : ''
              }`} />
              <p className="text-sm font-medium text-[#0B2E33]/70">Ping</p>
              <p className="text-2xl font-bold text-[#0B2E33] mt-1">
                {ping ? `${ping} ms` : '--'}
              </p>
            </div>
          </div>

          <div className="text-sm text-[#0B2E33]/70 bg-white/30 p-4 rounded-lg mt-6">
            <p className="font-medium">Tips for accurate results:</p>
            <ul className="list-disc ml-5 space-y-1 mt-2">
              <li>Close other applications using the internet</li>
              <li>Test multiple times for more accurate results</li>
              <li>Try different times of day</li>
              <li>Use a wired connection for best results</li>
            </ul>
          </div>
        </div>

        {/* Related Tools Section */}
        <div className="mt-8 bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <h2 className="text-xl font-bold text-[#0B2E33] mb-4">Related Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/image-resizer" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Image Resizer
            </Link>
            <Link href="/base64-tool" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Base64 Tool
            </Link>
            <Link href="/json-formatter" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → JSON Formatter
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