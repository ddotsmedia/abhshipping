import { z } from 'zod'
import { createTRPCRouter, publicProcedure } from '@/server/trpc/trpc'
import { Resend } from 'resend'
import { env } from '@/env'

const resend = new Resend(env.RESEND_API_KEY)

const quoteSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  origin: z.string().min(2),
  destination: z.string().min(2),
  cargoType: z.string().min(2),
  weight: z.number().positive().optional(),
  dimensions: z.string().optional(),
  message: z.string().max(1000).optional(),
})

export const quoteRouter = createTRPCRouter({
  submit: publicProcedure.input(quoteSchema).mutation(async ({ ctx, input }) => {
    const quote = await ctx.db.quote.create({
      data: input,
    })

    // Send notification email
    await resend.emails.send({
      from: 'ABH Shipping <noreply@abhshipping.com>',
      to: env.QUOTE_RECIPIENT_EMAIL,
      subject: `New Quote Request from ${input.name}`,
      text: `
New quote request received:

Name: ${input.name}
Email: ${input.email}
Phone: ${input.phone ?? 'N/A'}
Company: ${input.company ?? 'N/A'}

Route: ${input.origin} → ${input.destination}
Cargo Type: ${input.cargoType}
Weight: ${input.weight ? `${input.weight} kg` : 'N/A'}
Dimensions: ${input.dimensions ?? 'N/A'}

Message:
${input.message ?? 'No additional message'}

Quote ID: ${quote.id}
      `.trim(),
    })

    return { id: quote.id, success: true }
  }),

  list: publicProcedure
    .input(
      z.object({
        status: z.enum(['PENDING', 'REVIEWING', 'QUOTED', 'ACCEPTED', 'REJECTED']).optional(),
        limit: z.number().min(1).max(100).default(20),
        cursor: z.string().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const items = await ctx.db.quote.findMany({
        where: input.status ? { status: input.status } : undefined,
        take: input.limit + 1,
        cursor: input.cursor ? { id: input.cursor } : undefined,
        orderBy: { createdAt: 'desc' },
      })

      let nextCursor: string | undefined
      if (items.length > input.limit) {
        const nextItem = items.pop()
        nextCursor = nextItem?.id
      }

      return { items, nextCursor }
    }),
})
