'use client'
import { AuthProvider } from '../../context/AuthContext'  // Fix the import path
import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function ClientLayout({ children }) {
  const pathname = usePathname()
  const isLandingPage = pathname === '/'

  return (
    <AuthProvider>
      <div className="min-h-screen">
        {!isLandingPage && <Navbar />}
        <div className={`flex ${!isLandingPage ? 'pt-16' : ''}`}>
          {!isLandingPage && <Sidebar />}
          <div className={`flex-1 min-w-0 ${!isLandingPage ? 'md:ml-64' : ''}`}>
            <div className="w-full overflow-x-hidden">
              {children}
            </div>
          </div>
        </div>
      </div>
    </AuthProvider>
  )
}