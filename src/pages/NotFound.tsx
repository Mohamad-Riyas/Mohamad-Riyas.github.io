import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'

export default function NotFound() {
  usePageTitle('Page not found')
  return (
    <div className="mx-auto grid min-h-[70vh] max-w-xl place-content-center px-6 text-center">
      <p className="font-mono text-sm text-primary">404</p>
      <h1 className="mt-3 text-4xl font-semibold">Page not found</h1>
      <p className="mt-3 text-muted">That page doesn’t exist, but the portfolio does.</p>
      <Link to="/" className="btn btn-primary mx-auto mt-8">Back to home</Link>
    </div>
  )
}
