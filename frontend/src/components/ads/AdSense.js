'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import Script from 'next/script'
import { shouldShowAds, ADSENSE_CONFIG } from '@/utils/adsenseConfig'

/**
 * AdSense Component
 * 
 * Conditionally renders AdSense ads based on page eligibility.
 * Automatically blocks ads on low-content pages to comply with Google policies.
 */
export default function AdSense({ 
  adSlot = null, 
  adFormat = 'auto',
  style = { display: 'block' },
  className = '',
  enableAutoAds = null 
}) {
  const pathname = usePathname()
  const containerRef = useRef(null)
  const [showAds, setShowAds] = useState(false)
  const [adsInitialized, setAdsInitialized] = useState(false)

  // Check if ads should be shown
  useEffect(() => {
    // Check pathname eligibility first
    const pathAllowed = shouldShowAds(pathname, null)
    
    if (!pathAllowed) {
      setShowAds(false)
      return
    }

    // For client-side content check, wait a bit for content to load
    const timer = setTimeout(() => {
      // Check content sufficiency if we have a container
      if (containerRef.current) {
        const contentSufficient = shouldShowAds(pathname, containerRef.current)
        setShowAds(contentSufficient)
      } else {
        // If no container (auto ads), allow ads if path is allowed
        setShowAds(true)
      }
    }, 500) // Small delay to ensure content is loaded

    return () => clearTimeout(timer)
  }, [pathname])

  // Initialize AdSense
  useEffect(() => {
    if (!showAds || adsInitialized || typeof window === 'undefined') {
      return
    }

    // Check if AdSense script is already loaded
    if (typeof window !== 'undefined' && window.adsbygoogle && window.adsbygoogle.loaded) {
      setAdsInitialized(true)
      return
    }

    // Wait for AdSense script to load (max 10 seconds)
    let attempts = 0
    const maxAttempts = 100 // 10 seconds max
    
    const checkAdSense = setInterval(() => {
      attempts++
      if (typeof window !== 'undefined' && window.adsbygoogle && window.adsbygoogle.loaded) {
        setAdsInitialized(true)
        clearInterval(checkAdSense)
      } else if (attempts >= maxAttempts) {
        clearInterval(checkAdSense)
      }
    }, 100)

    return () => clearInterval(checkAdSense)
  }, [showAds, adsInitialized])

  // Push ads after initialization
  useEffect(() => {
    if (showAds && adsInitialized && typeof window !== 'undefined' && window.adsbygoogle) {
      try {
        window.adsbygoogle.push({})
      } catch (e) {
        console.error('AdSense error:', e)
      }
    }
  }, [showAds, adsInitialized])

  // Don't render if ads shouldn't be shown
  if (!showAds) {
    return null
  }

  const useAutoAds = enableAutoAds !== null ? enableAutoAds : ADSENSE_CONFIG.enableAutoAds

  // Auto Ads (recommended for most sites)
  if (useAutoAds && !adSlot) {
    return (
      <>
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CONFIG.publisherId}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Auto ads will be automatically placed by Google */}
      </>
    )
  }

  // Manual Ad Unit
  if (adSlot) {
    return (
      <>
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CONFIG.publisherId}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <ins
          className={`adsbygoogle ${className}`}
          style={style}
          data-ad-client={ADSENSE_CONFIG.publisherId}
          data-ad-slot={adSlot}
          data-ad-format={adFormat}
          data-full-width-responsive="true"
          ref={containerRef}
        />
      </>
    )
  }

  return null
}

