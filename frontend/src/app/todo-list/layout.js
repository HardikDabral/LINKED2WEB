export const metadata = {
  title: 'Todo List - Task Management Tool | Handy Helper',
  description: 'Create and manage tasks efficiently with our free todo list tool. Organize your daily tasks and boost productivity. Todo list, task manager, to do list, task list, productivity tool, task organizer, todo app, task tracker.',
  keywords: 'todo list, task manager, to do list, task list, productivity tool, task organizer, todo app, task tracker',
}

export default function TodoLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Todo List",
    "description": "Free task management and todo list tool",
    "applicationCategory": "ProductivityApplication",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      {children}
    </>
  )
}

