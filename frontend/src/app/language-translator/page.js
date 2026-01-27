'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Languages, ArrowRight, Copy, Volume2, History, Bookmark, Repeat } from 'lucide-react'

export default function LanguageTranslator() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [sourceLang, setSourceLang] = useState('en')
  const [targetLang, setTargetLang] = useState('es')
  const [isTranslating, setIsTranslating] = useState(false)
  const [translationHistory, setTranslationHistory] = useState([])
  const [savedTranslations, setSavedTranslations] = useState([])
  const [activeTab, setActiveTab] = useState('translate')
  const inputTextareaRef = useRef(null)
  const outputTextareaRef = useRef(null)

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Spanish', flag: '🇪🇸' },
    { code: 'fr', name: 'French', flag: '🇫🇷' },
    { code: 'de', name: 'German', flag: '🇩🇪' },
    { code: 'it', name: 'Italian', flag: '🇮🇹' },
    { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
    { code: 'ru', name: 'Russian', flag: '🇷🇺' },
    { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
    { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
    { code: 'ko', name: 'Korean', flag: '🇰🇷' },
    { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
    { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
  ]

  // Load saved translations from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('savedTranslations')
    if (saved) setSavedTranslations(JSON.parse(saved))
  }, [])

  // Save translations to localStorage when updated
  useEffect(() => {
    if (savedTranslations.length > 0) {
      localStorage.setItem('savedTranslations', JSON.stringify(savedTranslations))
    }
  }, [savedTranslations])

  const handleTranslate = async () => {
    if (!inputText.trim()) return
    
    setIsTranslating(true)
    
    try {
      // Using MyMemory Translation API (free)
      const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputText)}&langpair=${sourceLang}|${targetLang}`)
      
      const data = await response.json()
      
      if (data.responseStatus === 200) {
        setOutputText(data.responseData.translatedText)
        
        // Add to history
        setTranslationHistory(prev => [
          {
            input: inputText,
            output: data.responseData.translatedText,
            from: sourceLang,
            to: targetLang,
            timestamp: new Date().toISOString()
          },
          ...prev.slice(0, 9) // Keep only last 10 items
        ])
      } else {
        throw new Error('Translation failed')
      }
    } catch (error) {
      console.error('Translation error:', error)
      setOutputText('Translation failed. Please try again.')
    } finally {
      setIsTranslating(false)
    }
  }

  const swapLanguages = () => {
    setSourceLang(targetLang)
    setTargetLang(sourceLang)
    setInputText(outputText)
    setOutputText(inputText)
  }

  const copyToClipboard = (text) => {
    if (!text) return
    navigator.clipboard.writeText(text)
    // Show temporary feedback
    const originalText = outputTextareaRef.current?.placeholder
    if (outputTextareaRef.current) {
      outputTextareaRef.current.placeholder = 'Copied!'
      setTimeout(() => {
        if (outputTextareaRef.current) {
          outputTextareaRef.current.placeholder = originalText || 'Translation will appear here...'
        }
      }, 1000)
    }
  }

  const speakText = (text, lang) => {
    if (!text) return
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = lang
    window.speechSynthesis.speak(utterance)
  }

  const saveTranslation = () => {
    if (!inputText || !outputText) return
    setSavedTranslations(prev => [
      ...prev,
      {
        input: inputText,
        output: outputText,
        from: sourceLang,
        to: targetLang,
        timestamp: new Date().toISOString()
      }
    ])
  }

  const loadSavedTranslation = (translation) => {
    setInputText(translation.input)
    setOutputText(translation.output)
    setSourceLang(translation.from)
    setTargetLang(translation.to)
    setActiveTab('translate')
    inputTextareaRef.current?.focus()
  }

  const detectLanguage = async () => {
    if (!inputText.trim()) return
    
    try {
      const response = await fetch('https://libretranslate.de/detect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          q: inputText
        })
      })
      
      const data = await response.json()
      if (data.length > 0) {
        setSourceLang(data[0].language)
      }
    } catch (error) {
      console.error('Language detection failed:', error)
    }
  }

  const autoTranslate = (e) => {
    setInputText(e.target.value)
    // Add debounce for auto-translation if desired
  }

  return (
    <div className="min-h-screen  flex justify-center">
  <div className="max-w-2xl w-full mx-4 sm:mx-auto p-6 pt-16">
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-lg bg-[#0B2E33] text-white mr-4 animate-bounce">
            <Languages className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#0B2E33]">Free Language Translator - Translate Text Online</h1>
            <p className="text-sm text-[#0B2E33]/70 mt-1">Accurate translations with pronunciation</p>
          </div>
        </div>

        <div className="bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          {/* Navigation Tabs */}
          <div className="flex border-b border-[#93B1B5]/40 mb-6">
            <button
              onClick={() => setActiveTab('translate')}
              className={`px-4 py-2 font-medium ${activeTab === 'translate' ? 'text-[#0B2E33] border-b-2 border-[#0B2E33]' : 'text-[#0B2E33]/70'}`}
            >
              Translate
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`px-4 py-2 font-medium ${activeTab === 'history' ? 'text-[#0B2E33] border-b-2 border-[#0B2E33]' : 'text-[#0B2E33]/70'}`}
            >
              <div className="flex items-center gap-2">
                <History className="w-4 h-4" />
                History
              </div>
            </button>
            <button
              onClick={() => setActiveTab('saved')}
              className={`px-4 py-2 font-medium ${activeTab === 'saved' ? 'text-[#0B2E33] border-b-2 border-[#0B2E33]' : 'text-[#0B2E33]/70'}`}
            >
              <div className="flex items-center gap-2">
                <Bookmark className="w-4 h-4" />
                Saved
              </div>
            </button>
          </div>

          {activeTab === 'translate' ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Source Language */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1 relative">
                      <select
                        value={sourceLang}
                        onChange={(e) => setSourceLang(e.target.value)}
                        className="w-full bg-white/70 border border-[#93B1B5]/40 rounded-lg px-4 py-2 pr-8 text-[#0B2E33] appearance-none"
                      >
                        {languages.map((lang) => (
                          <option key={lang.code} value={lang.code}>
                            {lang.flag} {lang.name}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-[#0B2E33]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <button
                        onClick={() => copyToClipboard(inputText)}
                        className="p-2 text-[#0B2E33] hover:bg-white/30 rounded-lg transition-colors"
                        title="Copy text"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => speakText(inputText, sourceLang)}
                        className="p-2 text-[#0B2E33] hover:bg-white/30 rounded-lg transition-colors"
                        title="Listen"
                        disabled={!inputText}
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={detectLanguage}
                        className="p-2 text-[#0B2E33] hover:bg-white/30 rounded-lg transition-colors text-xs font-medium"
                        title="Detect language"
                        disabled={!inputText}
                      >
                        Detect
                      </button>
                    </div>
                  </div>
                  <textarea
                    ref={inputTextareaRef}
                    value={inputText}
                    onChange={autoTranslate}
                    placeholder="Enter text to translate..."
                    className="w-full h-48 p-4 rounded-lg bg-white/70 border border-[#93B1B5]/40 focus:outline-none focus:ring-2 focus:ring-[#0B2E33]/20 text-[#0B2E33] placeholder-[#0B2E33]/60 resize-none"
                    autoFocus
                  />
                  <div className="flex justify-between text-xs text-[#0B2E33]/70">
                    <span>{inputText.length} characters</span>
                    <button 
                      onClick={() => setInputText('')}
                      className="hover:text-[#0B2E33]"
                      disabled={!inputText}
                    >
                      Clear
                    </button>
                  </div>
                </div>

                {/* Target Language */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1 relative">
                      <select
                        value={targetLang}
                        onChange={(e) => setTargetLang(e.target.value)}
                        className="w-full bg-white/70 border border-[#93B1B5]/40 rounded-lg px-4 py-2 pr-8 text-[#0B2E33] appearance-none"
                      >
                        {languages.map((lang) => (
                          <option key={lang.code} value={lang.code}>
                            {lang.flag} {lang.name}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-[#0B2E33]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <button
                        onClick={() => copyToClipboard(outputText)}
                        className="p-2 text-[#0B2E33] hover:bg-white/30 rounded-lg transition-colors"
                        title="Copy translation"
                        disabled={!outputText}
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => speakText(outputText, targetLang)}
                        className="p-2 text-[#0B2E33] hover:bg-white/30 rounded-lg transition-colors"
                        title="Listen"
                        disabled={!outputText}
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={saveTranslation}
                        className="p-2 text-[#0B2E33] hover:bg-white/30 rounded-lg transition-colors"
                        title="Save translation"
                        disabled={!outputText}
                      >
                        <Bookmark className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="relative">
                    <textarea
                      ref={outputTextareaRef}
                      value={outputText}
                      readOnly
                      placeholder={isTranslating ? 'Translating...' : 'Translation will appear here...'}
                      className="w-full h-48 p-4 rounded-lg bg-white/70 border border-[#93B1B5]/40 focus:outline-none text-[#0B2E33] placeholder-[#0B2E33]/60 resize-none"
                    />
                    {isTranslating && (
                      <div className="absolute inset-0 flex items-center justify-center bg-white/50 rounded-lg">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0B2E33]"></div>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-end text-xs text-[#0B2E33]/70">
                    <button 
                      onClick={() => setOutputText('')}
                      className="hover:text-[#0B2E33]"
                      disabled={!outputText}
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={swapLanguages}
                  className="p-3 rounded-lg bg-white/70 border border-[#93B1B5]/40 hover:bg-white text-[#0B2E33] flex items-center justify-center gap-2 transition-colors"
                  title="Swap languages"
                >
                  <Repeat className="w-5 h-5" />
                </button>
                <button
                  onClick={handleTranslate}
                  disabled={!inputText.trim() || isTranslating}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 ${
                    !inputText.trim() || isTranslating
                      ? 'bg-[#4F7C82] cursor-not-allowed'
                      : 'bg-[#0B2E33] hover:bg-[#4F7C82] text-white'
                  }`}
                >
                  <ArrowRight className="w-5 h-5" />
                  {isTranslating ? 'Translating...' : 'Translate'}
                </button>
              </div>
            </>
          ) : activeTab === 'history' ? (
            <div className="space-y-4">
              {translationHistory.length > 0 ? (
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {translationHistory.map((item, index) => (
                    <div 
                      key={index} 
                      className="p-4 bg-white/70 rounded-lg border border-[#93B1B5]/40 hover:bg-white transition-colors cursor-pointer"
                      onClick={() => loadSavedTranslation(item)}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <p className="font-medium text-[#0B2E33]">{item.input}</p>
                          <p className="text-[#0B2E33]/80 mt-1">{item.output}</p>
                        </div>
                        <div className="text-xs text-[#0B2E33]/60">
                          {languages.find(l => l.code === item.from)?.flag} → {languages.find(l => l.code === item.to)?.flag}
                        </div>
                      </div>
                      <div className="text-xs text-[#0B2E33]/50 mt-2">
                        {new Date(item.timestamp).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-[#0B2E33]/70">
                  <p>No translation history yet</p>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              {savedTranslations.length > 0 ? (
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {savedTranslations.map((item, index) => (
                    <div 
                      key={index} 
                      className="p-4 bg-white/70 rounded-lg border border-[#93B1B5]/40 hover:bg-white transition-colors cursor-pointer group"
                      onClick={() => loadSavedTranslation(item)}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <p className="font-medium text-[#0B2E33]">{item.input}</p>
                          <p className="text-[#0B2E33]/80 mt-1">{item.output}</p>
                        </div>
                        <div className="text-xs text-[#0B2E33]/60">
                          {languages.find(l => l.code === item.from)?.flag} → {languages.find(l => l.code === item.to)?.flag}
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <div className="text-xs text-[#0B2E33]/50">
                          {new Date(item.timestamp).toLocaleString()}
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setSavedTranslations(prev => prev.filter((_, i) => i !== index))
                          }}
                          className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-600 transition-opacity"
                          title="Remove"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-[#0B2E33]/70">
                  <p>No saved translations yet</p>
                </div>
              )}
            </div>
          )}

          {/* Tips */}
          <div className="mt-6 text-sm text-[#0B2E33] bg-white/30 p-4 rounded-lg">
            <p className="font-medium">Tips:</p>
            <ul className="list-disc ml-5 space-y-1 mt-2">
              <li>Click the swap button to quickly reverse translation direction</li>
              <li>Use the speaker button to hear pronunciation in both languages</li>
              <li>Save important translations for quick access later</li>
              <li>View your translation history for recent translations</li>
            </ul>
          </div>
        </div>

        {/* Related Tools Section */}
        <div className="mt-8 bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <h2 className="text-xl font-bold text-[#0B2E33] mb-4">Related Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/word-counter" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Word Counter
            </Link>
            <Link href="/json-formatter" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → JSON Formatter
            </Link>
            <Link href="/base64-tool" className="text-[#0B2E33] hover:text-[#4F7C82] transition-colors text-sm">
              → Base64 Tool
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