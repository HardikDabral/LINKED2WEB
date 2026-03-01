/**
 * AdSense Configuration and Page Eligibility Checker
 * 
 * This utility determines which pages should NOT show AdSense ads
 * to comply with Google AdSense policies.
 */

/**
 * List of paths that should NEVER show ads
 * These are typically low-content pages that violate AdSense policy
 */
const BLOCKED_PATHS = [
  '/login',
  '/privacy',
  '/terms',
  '/about',
  // Add any other low-content pages here
]

/**
 * Paths that might be low-content depending on implementation
 * These should be checked individually
 */
const POTENTIALLY_BLOCKED_PATHS = [
  // Search pages (if you have search functionality)
  // '/search',
  // Tag pages (if you have blog tags)
  // '/tag',
  // Collection pages without products
  // '/collection',
]

/**
 * Check if a pathname should block ads
 * @param {string} pathname - The current pathname
 * @returns {boolean} - true if ads should be blocked, false otherwise
 */
export function shouldBlockAds(pathname) {
  // Normalize pathname (remove trailing slash, query params, hash)
  const normalizedPath = pathname.split('?')[0].split('#')[0].replace(/\/$/, '') || '/'
  
  // Check exact matches
  if (BLOCKED_PATHS.includes(normalizedPath)) {
    return true
  }
  
  // Check if it's a 404 page (Next.js uses /404 or not-found)
  if (normalizedPath === '/404' || normalizedPath === '/not-found') {
    return true
  }
  
  // Check for search pages
  if (normalizedPath.startsWith('/search')) {
    return true
  }
  
  // Check for empty or redirect pages
  // You can add more conditions here based on your site structure
  
  return false
}

/**
 * Check if page has sufficient content for ads
 * This is a client-side check that can be enhanced
 * @param {HTMLElement} container - The container element to check
 * @param {number} minWords - Minimum words required (default: 300)
 * @returns {boolean} - true if content is sufficient
 */
export function hasSufficientContent(container = null, minWords = 300) {
  if (typeof window === 'undefined') {
    // Server-side: assume content is sufficient (will be checked client-side)
    return true
  }
  
  if (!container) {
    container = document.body
  }
  
  // Get all text content
  const text = container.innerText || container.textContent || ''
  
  // Count words (split by whitespace and filter empty strings)
  const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length
  
  return wordCount >= minWords
}

/**
 * Get AdSense configuration
 * Your AdSense publisher ID
 */
export const ADSENSE_CONFIG = {
  // Your AdSense publisher ID
  publisherId: process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || 'ca-pub-8195324447971925',
  // Enable auto ads (set to false if you want manual ad placement)
  enableAutoAds: true,
}

/**
 * Check if AdSense should be enabled on current page
 * @param {string} pathname - Current pathname
 * @param {HTMLElement} container - Optional container to check content
 * @returns {boolean} - true if ads should be shown
 */
export function shouldShowAds(pathname, container = null) {
  // First check if path is blocked
  if (shouldBlockAds(pathname)) {
    return false
  }
  
  // Then check if content is sufficient (client-side only)
  if (typeof window !== 'undefined' && container) {
    return hasSufficientContent(container)
  }
  
  // Default: allow ads if path is not blocked
  return true
}

