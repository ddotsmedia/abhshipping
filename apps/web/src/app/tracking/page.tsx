import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { TrackingForm } from '@/components/forms/TrackingForm'

export const metadata: Metadata = {
  title: 'Track Shipment',
  description: 'Track your ABH Shipping cargo in real time. Enter your tracking number for live status updates.',
}

export default function TrackingPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0c10] pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#e8c84a] uppercase tracking-widest mb-3">Real-Time Tracking</p>
            <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-[#f0f2f5]">Track Your Shipment</h1>
            <p className="mt-4 text-[#8892a4]">Enter your tracking number to get live status and delivery updates.</p>
          </div>
          <Suspense fallback={<div className="h-40 rounded-xl bg-[#1c2230] animate-pulse" />}>
            <TrackingForm searchParams={searchParams} />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  )
}
