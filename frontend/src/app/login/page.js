'use client'
import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'  // Updated import path
import { useRouter } from 'next/navigation'
import { LogIn, UserPlus } from 'lucide-react'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const { login, signup } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setSuccessMessage('')

    try {
      const result = isLogin 
        ? await login(email, password)
        : await signup(name, email, password)

      if (result.success) {
        setSuccessMessage(isLogin ? 'Login successful!' : 'Account created successfully!')
        setTimeout(() => {
          router.push('/')
        }, 1500)
      } else {
        setError(result.error)
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen  md:pl-64">
      <div className="max-w-2xl mx-auto p-6 pt-16 lg:ml-[-20px]">
        <div className="bg-white/50 backdrop-blur-xl rounded-xl p-8 shadow-md border border-[#93B1B5]/40">
          <h1 className="text-3xl font-bold text-[#0B2E33] mb-6 text-center">
            {isLogin ? 'Login to Handy Helper Tools' : 'Sign Up for Handy Helper Tools'}
          </h1>
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                isLogin 
                  ? 'bg-[#0B2E33] text-white' 
                  : 'bg-white/30 text-[#0B2E33] hover:bg-white/40'
              }`}
            >
              <LogIn className="w-5 h-5" />
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                !isLogin 
                  ? 'bg-[#0B2E33] text-white' 
                  : 'bg-white/30 text-[#0B2E33] hover:bg-white/40'
              }`}
            >
              <UserPlus className="w-5 h-5" />
              Sign Up
            </button>
          </div>
          
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}

          {successMessage && (
            <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#0B2E33] mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 backdrop-blur-xl text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
                  required={!isLogin}
                />
              </div>
            )}
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#0B2E33] mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 backdrop-blur-xl text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#0B2E33] mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 backdrop-blur-xl text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#0B2E33] text-white py-3 rounded-lg hover:bg-[#4F7C82] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  {isLogin ? 'Logging in...' : 'Signing up...'}
                </span>
              ) : (
                isLogin ? 'Login' : 'Sign Up'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}