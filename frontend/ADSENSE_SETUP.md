# AdSense Policy Compliance Setup

This guide explains how to use the AdSense components to comply with Google AdSense policies and prevent violations for showing ads on low-content pages.

## 🚨 Problem

Google AdSense policy violation: **"Google-served ads on screens without publisher content"**

This happens when ads are shown on:
- Login pages
- Privacy/Terms pages with minimal content
- 404 error pages
- Search result pages
- Pages with very little content (< 300 words)

## ✅ Solution

We've created a system that automatically blocks ads on low-content pages.

## 📦 Files Created

1. **`src/utils/adsenseConfig.js`** - Configuration and page eligibility checker
2. **`src/components/ads/AdSense.js`** - AdSense component with conditional rendering
3. **`src/app/not-found.js`** - 404 page without ads

## 🔧 Setup Instructions

### Step 1: Add Your AdSense Publisher ID

1. Open `src/utils/adsenseConfig.js`
2. Replace `'ca-pub-XXXXXXXXXX'` with your actual AdSense publisher ID
3. Or set it as an environment variable:

```bash
# In your .env.local file
NEXT_PUBLIC_ADSENSE_PUBLISHER_ID=ca-pub-YOUR-PUBLISHER-ID
```

### Step 2: Add AdSense to Your Layout

#### Option A: Auto Ads (Recommended)

Add to `src/app/layout.js`:

```jsx
import AdSense from '@/components/ads/AdSense'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Google Analytics */}
        <Script ... />
        
        {/* AdSense Auto Ads - Automatically blocks on low-content pages */}
        <AdSense enableAutoAds={true} />
        
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
```

#### Option B: Manual Ad Units

If you want to place ads manually in specific locations:

```jsx
import AdSense from '@/components/ads/AdSense'

// In your page component
<AdSense 
  adSlot="YOUR_AD_SLOT_ID"
  adFormat="auto"
  style={{ display: 'block', textAlign: 'center' }}
/>
```

### Step 3: Configure Blocked Pages

Edit `src/utils/adsenseConfig.js` to add any additional pages that should NOT show ads:

```javascript
const BLOCKED_PATHS = [
  '/login',
  '/privacy',
  '/terms',
  '/about',
  '/your-thin-page',  // Add your pages here
]
```

## 🛡️ How It Works

1. **Path Check**: The system checks if the current path is in the blocked list
2. **Content Check**: On client-side, it verifies the page has sufficient content (300+ words)
3. **Conditional Rendering**: Ads are only rendered if both checks pass

## 📋 Pages Already Blocked

- `/login` - Login page
- `/privacy` - Privacy policy
- `/terms` - Terms and conditions
- `/about` - About page
- `/404` or `/not-found` - 404 error pages
- Any path starting with `/search` - Search pages

## 🔍 Testing

1. Visit `/login` - Should NOT show ads
2. Visit `/privacy` - Should NOT show ads
3. Visit `/privacy` - Should NOT show ads
4. Visit `/terms` - Should NOT show ads
5. Visit a calculator page (e.g., `/bmi-calculator`) - Should show ads
6. Visit a non-existent page - Should NOT show ads (404)

## ⚠️ Important Notes

1. **Replace Publisher ID**: Make sure to replace the placeholder publisher ID
2. **Content Minimum**: Default minimum is 300 words. Adjust in `adsenseConfig.js` if needed
3. **Auto Ads**: Auto ads are recommended as Google optimizes placement
4. **Review Time**: After fixing, request review in AdSense. Reviews take 1-7 days

## 🐛 Troubleshooting

### Ads not showing on valid pages?

- Check browser console for errors
- Verify your publisher ID is correct
- Ensure the page has sufficient content (300+ words)
- Check that the path is not in `BLOCKED_PATHS`

### Ads showing on blocked pages?

- Clear browser cache
- Check that `shouldBlockAds()` is working correctly
- Verify the pathname matches exactly (case-sensitive)

## 📝 Next Steps After Implementation

1. ✅ Replace publisher ID with your actual ID
2. ✅ Test all blocked pages to ensure no ads appear
3. ✅ Test content pages to ensure ads appear
4. ✅ Deploy to production
5. ✅ Go to AdSense Policy Center
6. ✅ Check the checkbox: "I confirm I have fixed the issues"
7. ✅ Click "Request Review"
8. ✅ Wait 1-7 days for review

## 🔗 Additional Resources

- [Google AdSense Policy](https://support.google.com/adsense/answer/48182)
- [AdSense Auto Ads](https://support.google.com/adsense/answer/9261309)

