import { z } from 'zod'
import { createTRPCRouter, publicProcedure } from '@/server/trpc/trpc'

export const trackingRouter = createTRPCRouter({
  track: publicProcedure
    .input(z.object({ trackingNumber: z.string().min(3).max(50) }))
    .query(async ({ ctx, input }) => {
      // Log tracking request
      await ctx.db.trackingRequest.create({
        data: {
          trackingNumber: input.trackingNumber,
        },
      })

      // TODO: Replace with real AfterShip API integration
      // const aftership = new AfterShip(env.AFTERSHIP_API_KEY)
      // const result = await aftership.tracking.getTracking(...)

      // Mock response for development
      return {
        trackingNumber: input.trackingNumber,
        status: 'IN_TRANSIT' as const,
        carrier: 'Emirates Air Cargo',
        origin: 'Dubai, UAE',
        destination: 'London, UK',
        estimatedDelivery: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
        events: [
          {
            timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
            location: 'Dubai International Airport',
            status: 'Departed Origin',
            description: 'Shipment has departed the origin facility',
          },
          {
            timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
            location: 'ABH Shipping Warehouse, Dubai',
            status: 'Picked Up',
            description: 'Shipment collected from sender',
          },
        ],
      }
    }),
})
