'use client'

import Link from 'next/link'

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="min-h-screen bg-[#0a0c10] flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-display text-8xl font-extrabold text-[#ff5c5c] opacity-30">500</p>
        <h1 className="font-display text-3xl font-extrabold text-[#f0f2f5] mt-2 mb-4">Something went wrong</h1>
        <p className="text-[#8892a4] mb-8">An unexpected error occurred. Please try again.</p>
        <div className="flex gap-3 justify-center">
          <button onClick={reset} className="px-6 py-3 rounded-xl bg-[#e8c84a] text-[#0a0c10] font-semibold hover:bg-[#f0d46a] transition-colors">
            Try Again
          </button>
          <Link href="/" className="px-6 py-3 rounded-xl border border-[#2a3347] text-[#f0f2f5] hover:border-[#e8c84a] hover:text-[#e8c84a] transition-colors">
            Go Home
          </Link>
        </div>
      </div>
    </main>
  )
}
