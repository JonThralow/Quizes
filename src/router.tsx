import { createBrowserRouter } from 'react-router-dom'
import Home from '@pages/Home'
import TestRunner from '@pages/TestRunner'
import App from './App'

const router = createBrowserRouter([
  { path: '/', element: <App />, children: [
    { index: true, element: <Home /> },
    { path: 'test/:id', element: <TestRunner /> },
  ]},
])
export default router
