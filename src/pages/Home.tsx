import { Link } from 'react-router-dom'
import Card from '@components/Card'

const links = [
  { id:'social', title:'Social IQ Test', blurb:'10 scenario questions to gauge tact & empathy.' },
  { id:'narc', title:'Narcissism (Short)', blurb:'10 items, Likert 1–5; reflection only.' },
  { id:'eq', title:'Emotional Intelligence (Short)', blurb:'12 items, reverse scoring on marked items.' },
  { id:'bigfive', title:'Big Five (10-item)', blurb:'TIPI-style: Extraversion, Agreeableness, etc.' },
  { id:'mbti', title:'MBTI (20-item)', blurb:'Popular 4-letter self-reflection (not diagnostic).' },
  { id:'iq', title:'IQ-style (12-item)', blurb:'Mixed reasoning puzzles with explanations.' },
]

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl p-4">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-ink">Self-Assessments Hub</h1>
        <p className="text-slate-600">Short, psychology-inspired quizzes with clear, friendly results. Informational only.</p>
      </header>
      <div className="grid md:grid-cols-2 gap-4">
        {links.map(l => (
          <Card key={l.id}>
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">{l.title}</h2>
              <p className="text-slate-600">{l.blurb}</p>
              <div>
                <Link to={`/test/${l.id}`} className="inline-flex items-center rounded-xl bg-ink text-white px-4 py-2 text-sm font-medium hover:opacity-95">Start</Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
