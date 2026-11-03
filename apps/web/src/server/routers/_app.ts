import { createTRPCRouter } from '@/server/trpc/trpc'
import { quoteRouter } from './quote'
import { trackingRouter } from './tracking'
import { contactRouter } from './contact'

export const appRouter = createTRPCRouter({
  quote: quoteRouter,
  tracking: trackingRouter,
  contact: contactRouter,
})

export type AppRouter = typeof appRouter
