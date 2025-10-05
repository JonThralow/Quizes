import { MCQuestion } from '@utils/types'
export default function MCRow({ q, value, onChange }:{q:MCQuestion; value?:number; onChange:(v:number)=>void}){
  return (<div className="py-3 border-b last:border-none"><div className="mb-2 font-medium text-slate-800">{q.prompt}</div><div role="radiogroup" aria-label={q.prompt} className="grid gap-2">{q.options.map((opt,i)=>(<label key={i} className="inline-flex items-center gap-2 cursor-pointer"><input type="radio" name={q.id} value={i} checked={value===i} onChange={()=>onChange(i)} className="h-4 w-4"/><span className="text-sm">{String.fromCharCode(65+i)}. {opt}</span></label>))}</div></div>)
}
