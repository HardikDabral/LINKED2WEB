export default function sitemap() {
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://handy-helper.vercel.app' 
    : 'http://localhost:3000'
  
  const now = new Date()
  
  // Main pages - highest priority
  const mainPages = [
    { route: '', priority: 1.0, changeFrequency: 'daily' },
    { route: '/landing-page', priority: 1.0, changeFrequency: 'daily' },
    { route: '/about', priority: 0.9, changeFrequency: 'monthly' },
    { route: '/terms', priority: 0.7, changeFrequency: 'monthly' },
    { route: '/privacy', priority: 0.7, changeFrequency: 'monthly' },
  ]
  
  // Calculator pages - high priority
  const calculatorPages = [
    { route: '/bmi-calculator', priority: 0.9, changeFrequency: 'weekly' },
    { route: '/emi-calculator', priority: 0.9, changeFrequency: 'weekly' },
    { route: '/age-calculator', priority: 0.9, changeFrequency: 'weekly' },
    { route: '/percentage-calculator', priority: 0.9, changeFrequency: 'weekly' },
    { route: '/calorie-calculator', priority: 0.9, changeFrequency: 'weekly' },
    { route: '/gpa-calculator', priority: 0.9, changeFrequency: 'weekly' },
    { route: '/gst-calculator', priority: 0.9, changeFrequency: 'weekly' },
    { route: '/interest-calculator', priority: 0.9, changeFrequency: 'weekly' },
    { route: '/salary-calculator', priority: 0.9, changeFrequency: 'weekly' },
    { route: '/tip-calculator', priority: 0.9, changeFrequency: 'weekly' },
    { route: '/discount-calculator', priority: 0.9, changeFrequency: 'weekly' },
    { route: '/expense-splitter', priority: 0.9, changeFrequency: 'weekly' },
  ]
  
  // Utility tool pages - medium-high priority
  const utilityPages = [
    { route: '/qr-generator', priority: 0.8, changeFrequency: 'weekly' },
    { route: '/language-translator', priority: 0.8, changeFrequency: 'weekly' },
    { route: '/word-counter', priority: 0.8, changeFrequency: 'weekly' },
    { route: '/json-formatter', priority: 0.8, changeFrequency: 'weekly' },
    { route: '/base64-tool', priority: 0.8, changeFrequency: 'weekly' },
    { route: '/color-picker', priority: 0.8, changeFrequency: 'weekly' },
    { route: '/image-resizer', priority: 0.8, changeFrequency: 'weekly' },
    { route: '/meme-generator', priority: 0.8, changeFrequency: 'weekly' },
    { route: '/math-solver', priority: 0.8, changeFrequency: 'weekly' },
  ]
  
  // Date & Time tools
  const dateTimePages = [
    { route: '/day-counter', priority: 0.8, changeFrequency: 'weekly' },
    { route: '/countdown-timer', priority: 0.8, changeFrequency: 'weekly' },
    { route: '/stopwatch', priority: 0.8, changeFrequency: 'weekly' },
  ]
  
  // Productivity tools
  const productivityPages = [
    { route: '/todo-list', priority: 0.8, changeFrequency: 'weekly' },
    { route: '/pomodoro', priority: 0.8, changeFrequency: 'weekly' },
  ]
  
  // Health tools
  const healthPages = [
    { route: '/water-intake-calculator', priority: 0.8, changeFrequency: 'weekly' },
    { route: '/sleep-calculator', priority: 0.8, changeFrequency: 'weekly' },
  ]
  
  // Other tools
  const otherPages = [
    { route: '/decision-maker', priority: 0.7, changeFrequency: 'weekly' },
    { route: '/random-name-picker', priority: 0.7, changeFrequency: 'weekly' },
    { route: '/wifi-speed-test', priority: 0.7, changeFrequency: 'weekly' },
    { route: '/login', priority: 0.5, changeFrequency: 'monthly' },
  ]
  
  const allPages = [
    ...mainPages,
    ...calculatorPages,
    ...utilityPages,
    ...dateTimePages,
    ...productivityPages,
    ...healthPages,
    ...otherPages,
  ]
  
  return allPages.map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))
}

