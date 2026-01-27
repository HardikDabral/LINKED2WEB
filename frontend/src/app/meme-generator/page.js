'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { 
  Image as ImageIcon, 
  ImagePlus, 
  Download, 
  Plus, 
  Trash2, 
  Sparkles, 
  Text as TextIcon, 
  Sliders,
  Move
} from 'lucide-react'

export default function MemeGenerator() {
  const [image, setImage] = useState(null)
  const [textElements, setTextElements] = useState([])
  const [fontSize, setFontSize] = useState(40)
  const [fontColor, setFontColor] = useState('#ffffff')
  const [strokeColor, setStrokeColor] = useState('#000000')
  const [isGenerating, setIsGenerating] = useState(false)
  const [memeTemplates, setMemeTemplates] = useState([])
  const [activeTab, setActiveTab] = useState('upload')
  const [draggingId, setDraggingId] = useState(null)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const canvasRef = useRef(null)
  const fileInputRef = useRef(null)

  // Load popular meme templates
  useEffect(() => {
    const templates = [
      { id: 1, name: 'Distracted Boyfriend', url: 'https://i.imgflip.com/1bij.jpg' },
      { id: 2, name: 'Drake Hotline Bling', url: 'https://i.imgflip.com/30b1gx.jpg' },
      { id: 3, name: 'Two Buttons', url: 'https://i.imgflip.com/1g8my4.jpg' },
      { id: 4, name: 'Change My Mind', url: 'https://i.imgflip.com/24y43o.jpg' },
      { id: 5, name: 'Expanding Brain', url: 'https://i.imgflip.com/1jwhww.jpg' },
    ]
    setMemeTemplates(templates)
  }, [])

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setIsGenerating(true)
      const reader = new FileReader()
      reader.onload = (e) => {
        const img = new window.Image()
        img.onload = () => {
          setImage(img)
          setIsGenerating(false)
          generateMeme(img)
        }
        img.onerror = () => {
          setIsGenerating(false)
          alert('Error loading image')
        }
        img.src = e.target.result
      }
      reader.readAsDataURL(file)
    }
  }

  const loadTemplate = (templateUrl) => {
    setIsGenerating(true)
    const img = new window.Image()
    img.crossOrigin = 'Anonymous'
    img.onload = () => {
      setImage(img)
      setIsGenerating(false)
      generateMeme(img)
    }
    img.onerror = () => {
      setIsGenerating(false)
      alert('Error loading template')
    }
    img.src = templateUrl
  }

  const addTextElement = () => {
    const newId = Date.now()
    setTextElements([
      ...textElements,
      {
        id: newId,
        text: 'Double click to edit',
        x: 100,
        y: 100,
        isEditing: false,
        color: '#000000'
      }
    ])
  }

  const updateTextElement = (id, updates) => {
    setTextElements(textElements.map(el => 
      el.id === id ? { ...el, ...updates } : el
    ))
  }

  const removeTextElement = (id) => {
    setTextElements(textElements.filter(el => el.id !== id))
  }

  const startDragging = (id, e) => {
    const element = textElements.find(el => el.id === id)
    if (element && element.isEditing) return
    
    setDraggingId(id)
    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    setDragOffset({
      x: e.clientX - rect.left - element.x,
      y: e.clientY - rect.top - element.y
    })
  }

  const handleDrag = (e) => {
    if (!draggingId) return
    
    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left - dragOffset.x
    const y = e.clientY - rect.top - dragOffset.y
    
    updateTextElement(draggingId, { x, y })
    generateMeme()
  }

  const stopDragging = () => {
    setDraggingId(null)
  }

  const generateMeme = (img = image) => {
    if (!img || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    // Set canvas size
    const maxWidth = 800
    const maxHeight = 800
    let width = img.width
    let height = img.height

    if (width > maxWidth) {
      height = (maxWidth / width) * height
      width = maxWidth
    }
    if (height > maxHeight) {
      width = (maxHeight / height) * width
      height = maxHeight
    }

    canvas.width = width
    canvas.height = height

    // Draw image
    ctx.drawImage(img, 0, 0, width, height)

    // Configure text style
    ctx.textAlign = 'center'
    ctx.font = `bold ${fontSize}px Impact`
    ctx.lineWidth = fontSize / 8

    // Draw all text elements
    textElements.forEach(element => {
      if (element.text) {
        ctx.strokeStyle = strokeColor
        ctx.strokeText(element.text, element.x, element.y)
        ctx.fillStyle = fontColor
        ctx.fillText(element.text, element.x, element.y)
      }
    })
  }

  const downloadMeme = () => {
    const link = document.createElement('a')
    link.download = `meme-${Date.now()}.png`
    link.href = canvasRef.current.toDataURL('image/png')
    link.click()
  }

  const clearCanvas = () => {
    if (!canvasRef.current) return
    
    setImage(null)
    setTextElements([])
    setFontSize(40)
    setFontColor('#ffffff')
    setStrokeColor('#000000')
    const ctx = canvasRef.current.getContext('2d')
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
  }

  // Handle mouse events for dragging
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.addEventListener('mousemove', handleDrag)
    canvas.addEventListener('mouseup', stopDragging)
    canvas.addEventListener('mouseleave', stopDragging)

    return () => {
      canvas.removeEventListener('mousemove', handleDrag)
      canvas.removeEventListener('mouseup', stopDragging)
      canvas.removeEventListener('mouseleave', stopDragging)
    }
  }, [draggingId, dragOffset, textElements])

  // Regenerate meme when elements change
  useEffect(() => {
    if (image) {
      generateMeme()
    }
  }, [textElements, fontSize, fontColor, strokeColor])

  return (
    <div className="min-h-screen  flex justify-center">
  <div className="max-w-2xl w-full mx-4 sm:mx-auto p-6 pt-16">
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-lg bg-[#0B2E33] text-white mr-4 animate-bounce">
            <ImagePlus className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#0B2E33]">Free Meme Generator - Create Memes Online</h1>
            <p className="text-sm text-[#0B2E33]/70 mt-1">Create dank memes in seconds</p>
          </div>
        </div>

        <div className="bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <div className="space-y-6">
            {/* Image Source Tabs */}
            <div className="flex border-b border-[#93B1B5]/40">
              <button
                onClick={() => setActiveTab('upload')}
                className={`flex-1 py-2 px-4 font-medium ${activeTab === 'upload' ? 'text-[#0B2E33] border-b-2 border-[#0B2E33]' : 'text-[#0B2E33]/70'}`}
              >
                <div className="flex items-center justify-center gap-2">
                  <ImageIcon className="w-4 h-4" />
                  Upload
                </div>
              </button>
              <button
                onClick={() => setActiveTab('templates')}
                className={`flex-1 py-2 px-4 font-medium ${activeTab === 'templates' ? 'text-[#0B2E33] border-b-2 border-[#0B2E33]' : 'text-[#0B2E33]/70'}`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Templates
                </div>
              </button>
            </div>

            {/* Image Upload/Templates */}
            {activeTab === 'upload' ? (
              <div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full py-3 px-4 rounded-lg bg-[#0B2E33] text-white hover:bg-[#4F7C82] transition-colors flex items-center justify-center gap-2"
                  disabled={isGenerating}
                >
                  {isGenerating ? (
                    <span className="animate-pulse">Processing...</span>
                  ) : (
                    <>
                      <ImagePlus className="w-5 h-5" />
                      Upload Image
                    </>
                  )}
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-60 overflow-y-auto p-2">
                {memeTemplates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => loadTemplate(template.url)}
                    className="relative group rounded-lg overflow-hidden hover:scale-105 transition-transform"
                    disabled={isGenerating}
                  >
                    <img
                      src={template.url}
                      alt={template.name}
                      className="w-full h-24 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <span className="text-white text-xs text-center px-1">{template.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Text Controls */}
            <div className="space-y-4">
              <button
                onClick={addTextElement}
                className="w-full py-3 px-4 rounded-lg bg-[#0B2E33] text-white hover:bg-[#4F7C82] transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Add Text Element
              </button>

              {/* Text Elements List */}
              {textElements.length > 0 && (
                <div className="bg-white/30 rounded-lg p-3 space-y-2 max-h-40 overflow-y-auto">
                  {textElements.map((element) => (
                    <div key={element.id} className="flex items-center gap-2 p-2 bg-white/50 rounded">
                      {element.isEditing ? (
                        <input
                          type="text"
                          value={element.text}
                          onChange={(e) => updateTextElement(element.id, { text: e.target.value })}
                          onBlur={() => updateTextElement(element.id, { isEditing: false })}
                          onKeyDown={(e) => e.key === 'Enter' && updateTextElement(element.id, { isEditing: false })}
                          className="flex-1 p-2 border border-[#0B2E33] rounded bg-white text-[#0B2E33] shadow-sm"
                          autoFocus
                        />
                      ) : (
                        <span 
                          className="flex-1 cursor-text text-[#0B2E33]"
                          onDoubleClick={() => updateTextElement(element.id, { isEditing: true })}
                        >
                          {element.text}
                        </span>
                      )}
                      <button
                        onClick={() => removeTextElement(element.id)}
                        className="p-1 text-red-500 hover:text-red-600"
                        title="Remove text"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <div className="p-1 text-gray-500 cursor-move" title="Drag to move">
                        <Move className="w-4 h-4" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Style Controls */}
            <div className="space-y-4 p-4 bg-white/30 rounded-lg">
              <div className="flex items-center gap-2 text-[#0B2E33] mb-2">
                <Sliders className="w-4 h-4" />
                <span className="font-medium">Text Styling</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-[#0B2E33] mb-1">Font Size: {fontSize}px</label>
                  <input
                    type="range"
                    min="20"
                    max="100"
                    value={fontSize}
                    onChange={(e) => setFontSize(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#0B2E33] mb-1">Text Color</label>
                  <input
                    type="color"
                    value={fontColor}
                    onChange={(e) => setFontColor(e.target.value)}
                    className="w-full h-10 cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#0B2E33] mb-1">Outline Color</label>
                  <input
                    type="color"
                    value={strokeColor}
                    onChange={(e) => setStrokeColor(e.target.value)}
                    className="w-full h-10 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Canvas Display */}
            <div className="relative bg-white/30 rounded-lg p-4 flex justify-center">
              {image ? (
                <>
                  <canvas
                    ref={canvasRef}
                    className="max-w-full max-h-[500px] object-contain rounded-lg border border-[#93B1B5]/40 cursor-move"
                    onMouseDown={(e) => {
                      if (e.target === canvasRef.current) {
                        startDragging(textElements[textElements.length - 1]?.id, e)
                      }
                    }}
                  />
                  <button
                    onClick={clearCanvas}
                    className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                    title="Clear meme"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </>
              ) : (
                <div className="w-full h-48 flex items-center justify-center text-[#0B2E33]/50">
                  <div className="text-center">
                    <ImageIcon className="w-10 h-10 mx-auto mb-2" />
                    <p>Upload an image or select a template</p>
                    <p className="text-sm">Your meme will appear here</p>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={clearCanvas}
                className="py-3 px-4 rounded-lg bg-gray-500 text-white hover:bg-gray-600 transition-colors flex items-center justify-center gap-2"
                disabled={!image}
              >
                <Trash2 className="w-5 h-5" />
                Reset
              </button>
              <button
                onClick={downloadMeme}
                disabled={!image || textElements.length === 0}
                className={`py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 ${
                  !image || textElements.length === 0
                    ? 'bg-[#4F7C82] cursor-not-allowed'
                    : 'bg-[#0B2E33] hover:bg-[#4F7C82] text-white'
                }`}
              >
                <Download className="w-5 h-5" />
                Download Meme
              </button>
            </div>

            {/* Memer Tips */}
            <div className="text-sm text-[#0B2E33]/70 bg-white/30 p-4 rounded-lg">
              <p className="font-medium flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Pro Memer Tips
              </p>
              <ul className="list-disc ml-5 space-y-1 mt-2">
                <li>Double-click text to edit it</li>
                <li>Drag text elements to position them perfectly</li>
                <li>Add multiple text elements for layered jokes</li>
                <li>Use contrasting colors for better readability</li>
              </ul>
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