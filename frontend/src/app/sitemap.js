export default function sitemap() {
  const baseUrl = process.env.NODE_ENV === 'production'
    ? 'https://www.fruupy.com'
    : 'http://localhost:3000'

  // Main pages - highest priority
  const mainPages = [
    { route: '', priority: 1.0, changeFrequency: 'daily', lastModified: '2026-03-15' },
    { route: '/tools', priority: 0.95, changeFrequency: 'daily', lastModified: '2026-03-15' },
    { route: '/about', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-03-15' },
    { route: '/blog', priority: 0.85, changeFrequency: 'weekly', lastModified: '2026-03-04' },
    { route: '/terms', priority: 0.7, changeFrequency: 'monthly', lastModified: '2026-03-15' },
    { route: '/privacy', priority: 0.7, changeFrequency: 'monthly', lastModified: '2026-03-15' },
  ]

  const blogPostPages = [
    { route: '/blog/keyword-research-kaise-kare', priority: 0.75, changeFrequency: 'monthly', lastModified: '2026-03-04' },
    { route: '/blog/seo-friendly-article-kaise-likhe', priority: 0.75, changeFrequency: 'monthly', lastModified: '2026-03-02' },
    { route: '/blog/free-online-tools-se-paise-kaise-kamaye', priority: 0.75, changeFrequency: 'monthly', lastModified: '2026-02-28' },
  ]

  // Calculator pages - high priority
  const calculatorPages = [
    { route: '/tools/bmi-calculator', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-03-15' },
    { route: '/tools/emi-calculator', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-03-15' },
    { route: '/tools/age-calculator', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-03-15' },
    { route: '/tools/percentage-calculator', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-03-15' },
    { route: '/tools/calorie-calculator', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-03-15' },
    { route: '/tools/gpa-calculator', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-03-15' },
    { route: '/tools/gst-calculator', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-03-15' },
    { route: '/tools/interest-calculator', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-03-15' },
    { route: '/tools/salary-calculator', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-03-15' },
    { route: '/tools/tip-calculator', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-03-15' },
    { route: '/tools/discount-calculator', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-03-15' },
    { route: '/tools/expense-splitter', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-03-15' },
  ]

  // Utility tool pages - medium-high priority
  const utilityPages = [
    { route: '/tools/qr-generator', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-03-15' },
    { route: '/tools/language-translator', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-03-15' },
    { route: '/tools/word-counter', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-03-15' },
    { route: '/tools/json-formatter', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-03-15' },
    { route: '/tools/base64-tool', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-03-15' },
    { route: '/tools/color-picker', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-03-15' },
    { route: '/tools/image-resizer', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-03-15' },
    { route: '/tools/meme-generator', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-03-15' },
    { route: '/tools/math-solver', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-03-15' },
  ]

  // Date & Time tools
  const dateTimePages = [
    { route: '/tools/day-counter', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-03-15' },
    { route: '/tools/countdown-timer', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-03-15' },
    { route: '/tools/stopwatch', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-03-15' },
  ]

  // Productivity tools
  const productivityPages = [
    { route: '/tools/todo-list', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-03-15' },
    { route: '/tools/pomodoro', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-03-15' },
  ]

  // Health tools
  const healthPages = [
    { route: '/tools/water-intake-calculator', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-03-15' },
    { route: '/tools/sleep-calculator', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-03-15' },
  ]

  // Other tools
  const otherPages = [
    { route: '/tools/decision-maker', priority: 0.7, changeFrequency: 'monthly', lastModified: '2026-03-15' },
    { route: '/tools/random-name-picker', priority: 0.7, changeFrequency: 'monthly', lastModified: '2026-03-01' },
    { route: '/tools/wifi-speed-test', priority: 0.7, changeFrequency: 'monthly', lastModified: '2026-03-15' },
  ]

  const allPages = [
    ...mainPages,
    ...calculatorPages,
    ...utilityPages,
    ...dateTimePages,
    ...productivityPages,
    ...healthPages,
    ...blogPostPages,
    ...otherPages,
  ]

  return allPages.map(({ route, priority, changeFrequency, lastModified }) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}

