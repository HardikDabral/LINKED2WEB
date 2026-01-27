'use client'
import { useState, useRef } from 'react'
import Link from 'next/link'
import { Image as ImageIcon, Upload, Download, Trash2, Lock, Unlock } from 'lucide-react'

export default function ImageResizer() {
  const [image, setImage] = useState(null)
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const [maintainAspectRatio, setMaintainAspectRatio] = useState(true)
  const [originalDimensions, setOriginalDimensions] = useState(null)
  const canvasRef = useRef(null)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const img = new window.Image()
        img.onload = () => {
          setOriginalDimensions({ width: img.width, height: img.height })
          setWidth(img.width)
          setHeight(img.height)
          setImage(img)
        }
        img.src = event.target.result
      }
      reader.readAsDataURL(file)
    }
  }

  const handleWidthChange = (newWidth) => {
    setWidth(newWidth)
    if (maintainAspectRatio && originalDimensions) {
      const ratio = originalDimensions.height / originalDimensions.width
      setHeight(Math.round(newWidth * ratio))
    }
  }

  const handleHeightChange = (newHeight) => {
    setHeight(newHeight)
    if (maintainAspectRatio && originalDimensions) {
      const ratio = originalDimensions.width / originalDimensions.height
      setWidth(Math.round(newHeight * ratio))
    }
  }

  const resizeImage = () => {
    if (!image) return

    const canvas = canvasRef.current
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')
    ctx.drawImage(image, 0, 0, width, height)
  }

  const downloadImage = () => {
    if (!canvasRef.current) return

    resizeImage()
    const link = document.createElement('a')
    link.download = 'resized-image.png'
    link.href = canvasRef.current.toDataURL('image/png')
    link.click()
  }

  const clearImage = () => {
    setImage(null)
    setWidth('')
    setHeight('')
    setOriginalDimensions(null)
  }

  return (
    <div className="min-h-screen  flex justify-center">
  <div className="max-w-2xl w-full mx-4 sm:mx-auto p-6 pt-16">
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-lg bg-[#0B2E33] text-white mr-4 animate-bounce">
            <ImageIcon className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#0B2E33]">Free Image Resizer - Resize Images Online</h1>
            <p className="text-sm text-[#0B2E33]/70 mt-1">Resize your images online</p>
          </div>
        </div>

        <div className="bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <div className="space-y-6">
            {/* Upload Section */}
            <div className="flex justify-center">
              <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-[#93B1B5]/40 rounded-lg cursor-pointer hover:border-[#4F7C82] transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 mb-3 text-[#0B2E33]/70" />
                  <p className="mb-2 text-sm text-[#0B2E33]">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-[#0B2E33]/70">PNG, JPG or GIF</p>
                </div>
                <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
              </label>
            </div>

            {image && (
              <>
                {/* Preview */}
                <div className="flex justify-center">
                  <img
                    src={image.src}
                    alt="Preview"
                    className="max-w-full max-h-96 rounded-lg"
                    style={{ objectFit: 'contain' }}
                  />
                </div>

                {/* Dimensions Controls */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#0B2E33] mb-2">
                      Width (px)
                    </label>
                    <input
                      type="number"
                      value={width}
                      onChange={(e) => handleWidthChange(parseInt(e.target.value) || '')}
                      className="w-full p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0B2E33] mb-2">
                      Height (px)
                    </label>
                    <input
                      type="number"
                      value={height}
                      onChange={(e) => handleHeightChange(parseInt(e.target.value) || '')}
                      className="w-full p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
                    />
                  </div>
                </div>

                {/* Aspect Ratio Lock */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setMaintainAspectRatio(!maintainAspectRatio)}
                    className="flex items-center gap-2 text-sm text-[#0B2E33]/70 hover:text-[#0B2E33]"
                  >
                    {maintainAspectRatio ? (
                      <>
                        <Lock className="w-4 h-4" />
                        Aspect Ratio Locked
                      </>
                    ) : (
                      <>
                        <Unlock className="w-4 h-4" />
                        Aspect Ratio Unlocked
                      </>
                    )}
                  </button>
                  <button
                    onClick={clearImage}
                    className="flex items-center gap-2 text-sm text-red-500 hover:text-red-600"
                  >
                    <Trash2 className="w-4 h-4" />
                    Clear Image
                  </button>
                </div>

                {/* Download Button */}
                <button
                  onClick={downloadImage}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#0B2E33] text-white rounded-lg hover:bg-[#4F7C82] transition-all duration-300"
                >
                  <Download className="w-4 h-4" />
                  Download Resized Image
                </button>

                {/* Hidden Canvas for Image Processing */}
                <canvas ref={canvasRef} style={{ display: 'none' }} />
              </>
            )}
          </div>
        </div>

        {/* Related Tools Section */}
        <div className="mt-8 bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <h2 className="text-xl font-bold text-[#0B2E33] mb-4">Related Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/meme-generator" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Meme Generator
            </Link>
            <Link href="/color-picker" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Color Picker
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