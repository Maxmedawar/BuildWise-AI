'use client'

import { useState } from 'react'

interface Task {
  name: string
  days: number
}

export default function Timeline() {
  const [tasks, setTasks] = useState<Task[]>([
    { name: 'Demo', days: 3 },
    { name: 'Build', days: 5 },
    { name: 'Finish', days: 2 }
  ])

  function handleDrag(i: number, e: React.MouseEvent) {
    const startX = e.clientX
    const startDays = tasks[i].days
    function onMove(ev: MouseEvent) {
      const delta = ev.clientX - startX
      const newDays = Math.max(1, startDays + Math.round(delta / 20))
      setTasks(t => t.map((task, idx) => (idx === i ? { ...task, days: newDays } : task)))
    }
    function onUp() {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  }

  return (
    <div className="space-y-2">
      {tasks.map((task, i) => (
        <div key={task.name} className="flex items-center gap-2">
          <div className="w-24">{task.name}</div>
          <div
            className="h-6 cursor-col-resize rounded bg-gold-500"
            style={{ width: task.days * 20 }}
            onMouseDown={e => handleDrag(i, e)}
          />
          <span>{task.days}d</span>
        </div>
      ))}
    </div>
  )
}
