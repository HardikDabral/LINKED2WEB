import Link from 'next/link'

const tools = [
  {
    id: 'age-calculator',
    name: 'Age Calculator',
    description: 'Calculate exact age from date of birth',
    icon: '🎂'
  },
  {
    id: 'day-counter',
    name: 'Day Counter',
    description: 'Count days between two dates',
    icon: '📅'
  },
  {
    id: 'countdown-timer',
    name: 'Countdown Timer',
    description: 'Set a timer for events or deadlines',
    icon: '⏲️'
  },
  {
    id: 'stopwatch',
    name: 'Stopwatch',
    description: 'Track elapsed time',
    icon: '⏱️'
  },
  {
    id: 'todo-list',
    name: 'To-Do List Maker',
    description: 'Create and manage tasks',
    icon: '📝'
  },
  {
    id: 'pomodoro',
    name: 'Pomodoro Timer',
    description: 'Boost productivity with timed work sessions',
    icon: '🍅'
  }
]

export default function ProductivityTools() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Productivity & Time Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool) => (
          <Link
            key={tool.id}
            href={`/tools/${tool.id}`}
            className="p-4 border rounded-lg hover:shadow-lg transition-shadow duration-200 bg-white dark:bg-gray-800"
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{tool.icon}</span>
              <div>
                <h3 className="font-semibold">{tool.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {tool.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}