'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle2 } from 'lucide-react'
import { trpc } from '@/lib/trpc'
import { cn } from '@/lib/utils'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(2),
  message: z.string().min(10),
})
type FormData = z.infer<typeof schema>

const inp = (err?: string) => cn(
  'w-full px-4 py-3 rounded-xl bg-[#252d3d] border text-[#f0f2f5] placeholder:text-[#8892a4] text-sm focus:outline-none transition-colors',
  err ? 'border-[#ff5c5c]' : 'border-[#2a3347] focus:border-[#e8c84a]'
)

export function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({ resolver: zodResolver(schema) })
  const mutation = trpc.contact.submit.useMutation()

  if (mutation.isSuccess) return (
    <div className="rounded-2xl bg-[#1c2230] border border-[#3ddc84]/30 p-10 text-center">
      <CheckCircle2 className="w-12 h-12 text-[#3ddc84] mx-auto mb-4" />
      <h2 className="font-display text-xl font-bold text-[#f0f2f5] mb-2">Message Sent!</h2>
      <p className="text-[#8892a4] text-sm">We'll get back to you within one business day.</p>
      <button onClick={() => mutation.reset()} className="mt-5 text-sm text-[#e8c84a] hover:underline">Send another</button>
    </div>
  )

  return (
    <form onSubmit={handleSubmit(d => mutation.mutateAsync(d).then(() => reset()))} className="rounded-2xl bg-[#1c2230] border border-[#2a3347] p-7 space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <input {...register('name')} placeholder="Full Name *" className={inp(errors.name?.message)} />
          {errors.name && <p className="mt-1 text-xs text-[#ff5c5c]">{errors.name.message}</p>}
        </div>
        <div>
          <input {...register('email')} type="email" placeholder="Email *" className={inp(errors.email?.message)} />
          {errors.email && <p className="mt-1 text-xs text-[#ff5c5c]">{errors.email.message}</p>}
        </div>
      </div>
      <input {...register('phone')} placeholder="Phone (optional)" className={inp()} />
      <div>
        <input {...register('subject')} placeholder="Subject *" className={inp(errors.subject?.message)} />
        {errors.subject && <p className="mt-1 text-xs text-[#ff5c5c]">{errors.subject.message}</p>}
      </div>
      <div>
        <textarea {...register('message')} rows={5} placeholder="Your message *" className={inp(errors.message?.message)} />
        {errors.message && <p className="mt-1 text-xs text-[#ff5c5c]">{errors.message.message}</p>}
      </div>
      {mutation.isError && <p className="text-xs text-[#ff5c5c]">Failed to send. Please try again.</p>}
      <button type="submit" disabled={mutation.isPending} className="w-full py-3.5 rounded-xl bg-[#e8c84a] text-[#0a0c10] font-bold hover:bg-[#f0d46a] disabled:opacity-60 transition-colors">
        {mutation.isPending ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
