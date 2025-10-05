import { LikertQuestion } from '@utils/types'
export default function LikertRow({ q, value, onChange }:{q:LikertQuestion; value?:number; onChange:(v:number)=>void}){
  const max = q.type==='likert7'?7:5
  return (<div className="py-3 border-b last:border-none"><div className="mb-2 font-medium text-slate-800">{q.prompt}</div><div className="flex gap-3 flex-wrap" role="radiogroup" aria-label={q.prompt}>{Array.from({length:max},(_,i)=>i+1).map(n=>(<label key={n} className="inline-flex items-center gap-2 cursor-pointer"><input type="radio" name={q.id} value={n} checked={value===n} onChange={()=>onChange(n)} className="h-4 w-4"/><span className="text-sm">{n}</span></label>))}</div></div>)
}
