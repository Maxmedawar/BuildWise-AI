'use client'

import { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Topbar from '../../components/Topbar'
import ProjectCard from '../../components/ProjectCard'
import AnalyzeForm from '../../components/AnalyzeForm'
import ResultsView from '../../components/ResultsView'
import Timeline from '../../components/Timeline'
import VendorEmailDraft from '../../components/VendorEmailDraft'
import SignInModal from '../../components/SignInModal'
import Toast from '../../components/Toast'

const projects = [
  { name: '123 Main St', address: '123 Main St', status: 'Planning', updatedAt: '2d ago' },
  { name: '456 Oak Ave', address: '456 Oak Ave', status: 'In Progress', updatedAt: '1d ago' }
]

export default function Dashboard() {
  const [results, setResults] = useState<any | null>(null)
  const [toast, setToast] = useState('')
  const [showModal, setShowModal] = useState(true)

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Topbar />
        <main className="flex flex-col gap-4 p-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {projects.map(p => (
              <ProjectCard key={p.name} {...p} />
            ))}
          </div>
          <AnalyzeForm onResults={data => { setResults(data); setToast('Analysis complete') }} />
          {results ? <ResultsView data={results} /> : null}
          <Timeline />
          <VendorEmailDraft />
        </main>
      </div>
      {toast && <Toast message={toast} onDone={() => setToast('')} />}
      {showModal && <SignInModal onClose={() => setShowModal(false)} />}
    </div>
  )
}
