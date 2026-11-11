'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Search, Package, Plane, CheckCircle2, Clock, MapPin, AlertCircle } from 'lucide-react'
import { trpc } from '@/lib/trpc'

const statusConfig = {
  IN_TRANSIT: { label: 'In Transit', color: 'text-[#e8c84a]', bg: 'bg-[#e8c84a]/10', icon: Plane },
  DELIVERED: { label: 'Delivered', color: 'text-[#3ddc84]', bg: 'bg-[#3ddc84]/10', icon: CheckCircle2 },
  PENDING: { label: 'Pending', color: 'text-[#8892a4]', bg: 'bg-[#8892a4]/10', icon: Clock },
  EXCEPTION: { label: 'Exception', color: 'text-[#ff5c5c]', bg: 'bg-[#ff5c5c]/10', icon: AlertCircle },
}

export function TrackingForm({ searchParams: _ }: { searchParams?: Promise<{ q?: string }> }) {
  const router = useRouter()
  const sp = useSearchParams()
  const initialQ = sp.get('q') ?? ''
  const [input, setInput] = useState(initialQ)
  const [query, setQuery] = useState(initialQ)

  const { data, isLoading, error } = trpc.tracking.track.useQuery(
    { trackingNumber: query },
    { enabled: query.length >= 3 }
  )

  useEffect(() => {
    if (initialQ) setQuery(initialQ)
  }, [initialQ])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim().length >= 3) {
      setQuery(input.trim())
      router.push(`/tracking?q=${encodeURIComponent(input.trim())}`)
    }
  }

  const status = data?.status as keyof typeof statusConfig | undefined
  const cfg = status ? statusConfig[status] : null
  const StatusIcon = cfg?.icon ?? Package

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-10">
        <div className="flex-1 relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8892a4]" />
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="e.g. ABH-2024-001234"
            className="w-full pl-10 pr-4 py-4 rounded-xl bg-[#1c2230] border border-[#2a3347] text-[#f0f2f5] placeholder:text-[#8892a4] focus:outline-none focus:border-[#e8c84a] transition-colors text-sm"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="px-6 py-4 rounded-xl bg-[#e8c84a] text-[#0a0c10] font-semibold text-sm hover:bg-[#f0d46a] disabled:opacity-60 transition-colors whitespace-nowrap"
        >
          {isLoading ? 'Searching…' : 'Track'}
        </button>
      </form>

      {error && (
        <div className="p-5 rounded-xl bg-[#ff5c5c]/10 border border-[#ff5c5c]/30 text-[#ff5c5c] text-sm">
          Tracking number not found. Please check and try again.
        </div>
      )}

      {data && cfg && (
        <div className="rounded-2xl bg-[#1c2230] border border-[#2a3347] overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-[#2a3347]">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <p className="text-xs text-[#8892a4] mb-1">Tracking Number</p>
                <p className="font-display font-bold text-xl text-[#f0f2f5]">{data.trackingNumber}</p>
                <p className="text-sm text-[#8892a4] mt-1">{data.carrier}</p>
              </div>
              <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold ${cfg.color} ${cfg.bg}`}>
                <StatusIcon className="w-4 h-4" />
                {cfg.label}
              </span>
            </div>
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-[#8892a4] text-xs mb-0.5">From</p>
                <p className="text-[#f0f2f5] font-medium">{data.origin}</p>
              </div>
              <div>
                <p className="text-[#8892a4] text-xs mb-0.5">To</p>
                <p className="text-[#f0f2f5] font-medium">{data.destination}</p>
              </div>
              {data.estimatedDelivery && (
                <div>
                  <p className="text-[#8892a4] text-xs mb-0.5">Est. Delivery</p>
                  <p className="text-[#f0f2f5] font-medium">
                    {new Date(data.estimatedDelivery).toLocaleDateString('en-AE', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Timeline */}
          <div className="p-6">
            <p className="text-xs font-semibold text-[#8892a4] uppercase tracking-widest mb-5">Shipment History</p>
            <ol className="relative border-l border-[#2a3347] ml-2 space-y-6">
              {data.events.map((ev, i) => (
                <li key={i} className="ml-5">
                  <span className={`absolute -left-2 flex items-center justify-center w-4 h-4 rounded-full ${i === 0 ? 'bg-[#e8c84a]' : 'bg-[#2a3347]'}`}>
                    <span className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-[#0a0c10]' : 'bg-[#8892a4]'}`} />
                  </span>
                  <div className={i === 0 ? '' : 'opacity-70'}>
                    <p className="text-sm font-semibold text-[#f0f2f5]">{ev.status}</p>
                    <p className="text-xs text-[#8892a4] mt-0.5 flex items-center gap-1.5">
                      <MapPin className="w-3 h-3" /> {ev.location}
                    </p>
                    <p className="text-xs text-[#8892a4] mt-0.5">
                      {new Date(ev.timestamp).toLocaleString('en-AE', { dateStyle: 'medium', timeStyle: 'short' })}
                    </p>
                    <p className="text-xs text-[#8892a4] mt-1">{ev.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}

      {!data && !isLoading && !error && query === '' && (
        <div className="text-center py-16 text-[#8892a4]">
          <Package className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p>Enter your tracking number above to get started</p>
        </div>
      )}
    </div>
  )
}
