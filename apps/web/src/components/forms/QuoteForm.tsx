'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle2 } from 'lucide-react'
import { trpc } from '@/lib/trpc'
import { cn } from '@/lib/utils'

const schema = z.object({
  name: z.string().min(2, 'Name required'),
  email: z.string().email('Valid email required'),
  phone: z.string().optional(),
  company: z.string().optional(),
  origin: z.string().min(2, 'Origin required'),
  destination: z.string().min(2, 'Destination required'),
  cargoType: z.string().min(2, 'Cargo type required'),
  weight: z.string().optional(),
  message: z.string().optional(),
})

type FormData = z.infer<typeof schema>

function Field({ label, error, children, required }: { label: string; error?: string; children: React.ReactNode; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#f0f2f5] mb-1.5">
        {label}{required && <span className="text-[#e8c84a] ml-0.5">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-[#ff5c5c]">{error}</p>}
    </div>
  )
}

const inputCls = (err?: string) => cn(
  'w-full px-4 py-3 rounded-xl bg-[#1c2230] border text-[#f0f2f5] placeholder:text-[#8892a4] text-sm focus:outline-none transition-colors',
  err ? 'border-[#ff5c5c] focus:border-[#ff5c5c]' : 'border-[#2a3347] focus:border-[#e8c84a]'
)

export function QuoteForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({ resolver: zodResolver(schema) })
  const mutation = trpc.quote.submit.useMutation()

  const onSubmit = async (data: FormData) => {
    await mutation.mutateAsync({
      ...data,
      weight: data.weight ? parseFloat(data.weight) : undefined,
    })
    reset()
  }

  if (mutation.isSuccess) {
    return (
      <div className="rounded-2xl bg-[#1c2230] border border-[#3ddc84]/30 p-10 text-center">
        <CheckCircle2 className="w-14 h-14 text-[#3ddc84] mx-auto mb-4" />
        <h2 className="font-display text-2xl font-bold text-[#f0f2f5] mb-2">Quote Request Sent!</h2>
        <p className="text-[#8892a4]">Our team will respond within 2 business hours with a competitive quote.</p>
        <button onClick={() => mutation.reset()} className="mt-6 px-6 py-3 rounded-xl border border-[#2a3347] text-[#f0f2f5] text-sm hover:border-[#e8c84a] hover:text-[#e8c84a] transition-colors">
          Submit another
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl bg-[#1c2230] border border-[#2a3347] p-7 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Full Name" error={errors.name?.message} required>
          <input {...register('name')} placeholder="John Smith" className={inputCls(errors.name?.message)} />
        </Field>
        <Field label="Email" error={errors.email?.message} required>
          <input {...register('email')} type="email" placeholder="john@company.com" className={inputCls(errors.email?.message)} />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <input {...register('phone')} placeholder="+971 50 000 0000" className={inputCls()} />
        </Field>
        <Field label="Company" error={errors.company?.message}>
          <input {...register('company')} placeholder="Your Company LLC" className={inputCls()} />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Origin" error={errors.origin?.message} required>
          <input {...register('origin')} placeholder="e.g. Dubai, UAE" className={inputCls(errors.origin?.message)} />
        </Field>
        <Field label="Destination" error={errors.destination?.message} required>
          <input {...register('destination')} placeholder="e.g. London, UK" className={inputCls(errors.destination?.message)} />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Cargo Type" error={errors.cargoType?.message} required>
          <select {...register('cargoType')} className={inputCls(errors.cargoType?.message)}>
            <option value="">Select type…</option>
            <option>General Cargo</option>
            <option>Dangerous Goods</option>
            <option>Perishables</option>
            <option>Electronics</option>
            <option>Vehicles</option>
            <option>Pharmaceuticals</option>
            <option>Oversized / Heavy Lift</option>
            <option>Other</option>
          </select>
        </Field>
        <Field label="Weight (kg)" error={errors.weight?.message}>
          <input {...register('weight')} type="number" min="0" placeholder="e.g. 500" className={inputCls()} />
        </Field>
      </div>

      <Field label="Additional Notes">
        <textarea {...register('message')} rows={3} placeholder="Dimensions, special handling requirements, preferred shipping dates…" className={inputCls()} />
      </Field>

      {mutation.isError && (
        <p className="text-sm text-[#ff5c5c]">Something went wrong. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={mutation.isPending}
        className="w-full py-4 rounded-xl bg-[#e8c84a] text-[#0a0c10] font-bold hover:bg-[#f0d46a] disabled:opacity-60 transition-colors"
      >
        {mutation.isPending ? 'Sending…' : 'Request Quote'}
      </button>
    </form>
  )
}
