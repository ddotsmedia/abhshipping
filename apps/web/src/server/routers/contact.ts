import { z } from 'zod'
import { createTRPCRouter, publicProcedure } from '@/server/trpc/trpc'
import { Resend } from 'resend'
import { env } from '@/env'

const resend = new Resend(env.RESEND_API_KEY)

export const contactRouter = createTRPCRouter({
  submit: publicProcedure
    .input(
      z.object({
        name: z.string().min(2).max(100),
        email: z.string().email(),
        phone: z.string().optional(),
        subject: z.string().min(2).max(200),
        message: z.string().min(10).max(2000),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const contact = await ctx.db.contact.create({
        data: input,
      })

      await resend.emails.send({
        from: 'ABH Shipping <noreply@abhshipping.com>',
        to: env.QUOTE_RECIPIENT_EMAIL,
        replyTo: input.email,
        subject: `Contact: ${input.subject}`,
        text: `From: ${input.name} <${input.email}>\nPhone: ${input.phone ?? 'N/A'}\n\n${input.message}`,
      })

      return { id: contact.id, success: true }
    }),
})
