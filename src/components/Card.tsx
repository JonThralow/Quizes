import { PropsWithChildren } from 'react'
export default function Card({children}:PropsWithChildren){return <div className='rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 p-5'>{children}</div>}
