import Card from '@components/Card'
export default function ResultShell({title,children}:{title:string;children:React.ReactNode}){return(<Card><h2 className='text-xl font-semibold text-slate-900'>{title}</h2><div className='mt-4 prose prose-slate max-w-none'>{children}</div></Card>)}
