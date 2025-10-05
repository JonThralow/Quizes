import { Outlet, Link } from 'react-router-dom'
import Banner from '@components/Banner'

export default function App() {
  return (
    <div className="min-h-screen">
      <Banner />
      <nav className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-lg font-bold text-ink">Assessments</Link>
        <span className="text-xs text-slate-500">Informational only</span>
      </nav>
      <main><Outlet /></main>
      <footer className="mt-10 border-t">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-slate-600">
          Informational only. Not medical or psychological advice.
        </div>
      </footer>
    </div>
  )
}
