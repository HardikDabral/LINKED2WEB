import Link from 'next/link'

/**
 * 404 Not Found Page
 * 
 * This page does NOT show AdSense ads to comply with Google policies.
 * 404 pages are considered low-content pages.
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white/50 backdrop-blur-xl rounded-xl p-8 md:p-12 shadow-md border border-[#93B1B5]/40">
          <h1 className="text-6xl md:text-8xl font-bold text-[#0B2E33] mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B2E33] mb-4">
            Page Not Found
          </h2>
          <p className="text-[#0B2E33]/80 mb-8 text-lg">
            Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or the URL might be incorrect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-block bg-[#0B2E33] text-white px-6 py-3 rounded-lg hover:bg-[#4F7C82] transition-all duration-300"
            >
              Go to Homepage
            </Link>
            <Link
              href="/tools"
              className="inline-block bg-white/50 text-[#0B2E33] px-6 py-3 rounded-lg border border-[#93B1B5]/40 hover:bg-white/70 transition-all duration-300"
            >
              Browse Tools
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

