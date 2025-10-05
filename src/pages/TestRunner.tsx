import { useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Card from '@components/Card'
import ProgressBadge from '@components/ProgressBadge'
import LikertRow from '@components/LikertRow'
import MCRow from '@components/MCRow'
import ABRow from '@components/ABRow'
import social from '@tests/socialIQ'
import narcissism from '@tests/narcissism'
import eq from '@tests/eq'
import bigfive from '@tests/bigfive'
import mbti from '@tests/mbti'
import iq from '@tests/iq'
import { Question } from '@utils/types'

const registry = { social, narc: narcissism, eq, bigfive, mbti, iq }

export default function TestRunner() {
  const { id } = useParams()
  const test = useMemo(() => (id ? (registry as any)[id] : null), [id])
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [submitted, setSubmitted] = useState(false)
  const [result, setResult] = useState<any>(null)

  if (!test) {
    return (
      <div className="mx-auto max-w-3xl p-4">
        <Card>
          <p>Test not found.</p>
          <Link to="/" className="text-indigo-600 underline">Back to home</Link>
        </Card>
      </div>
    )
  }

  const total = test.questions.length
  const answered = Object.keys(answers).length
  const canSubmit = answered === total

  const onChange = (q: Question, value: number) => setAnswers(prev => ({ ...prev, [q.id]: value }))
  const handleSubmit = () => { const r = test.score(answers); setResult(r); setSubmitted(true) }
  const reset = () => { setAnswers({}); setSubmitted(false); setResult(null); window.scrollTo({ top: 0, behavior: 'smooth' }) }

  return (
    <div className="mx-auto max-w-3xl p-4">
      {!submitted ? (
        <div className="space-y-4">
          <header className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-ink">{test.title}</h1>
              <p className="text-slate-600">{test.description}</p>
              <p className="mt-1 text-sm text-slate-600"><strong>Instructions:</strong> {test.instructions}</p>
            </div>
            <ProgressBadge answered={answered} total={total} />
          </header>
          <Card>
            {test.questions.map((q: Question) => {
              const value = answers[q.id]
              if (q.type === 'likert5' || q.type === 'likert7') return <LikertRow key={q.id} q={q} value={value} onChange={(v)=>onChange(q,v)} />
              if (q.type === 'mc') return <MCRow key={q.id} q={q} value={value} onChange={(v)=>onChange(q,v)} />
              if (q.type === 'ab') return <ABRow key={q.id} q={q} value={value} onChange={(v)=>onChange(q,v)} />
              return null
            })}
          </Card>
          <div className="flex items-center gap-3">
            <button disabled={!canSubmit} onClick={handleSubmit} className={`rounded-xl px-4 py-2 text-sm font-medium text-white ${canSubmit ? 'bg-ink hover:opacity-95' : 'bg-slate-400 cursor-not-allowed'}`}>Submit</button>
            <Link to="/" className="text-slate-700 underline">Back to home</Link>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {test.resultView(result)}
          <div className="flex items-center gap-3">
            <button onClick={reset} className="rounded-xl bg-ink text-white px-4 py-2 text-sm font-medium hover:opacity-95">Retake test</button>
            <Link to="/" className="text-slate-700 underline">Back to home</Link>
          </div>
        </div>
      )}
    </div>
  )
}
