import type { Metadata, Viewport } from 'next'
import { Inter, Syne } from 'next/font/google'
import { TRPCProvider } from './providers'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'ABH Shipping — Global Freight & Logistics',
    template: '%s | ABH Shipping',
  },
  description:
    'ABH Shipping delivers reliable air, sea, and land freight solutions across 150+ countries. Get an instant quote or track your shipment 24/7.',
  keywords: [
    'freight forwarding',
    'shipping UAE',
    'air freight',
    'sea freight',
    'customs clearance',
    'logistics Dubai',
    'cargo tracking',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://abhshipping.com',
    siteName: 'ABH Shipping',
    title: 'ABH Shipping — Global Freight & Logistics',
    description: 'Reliable freight forwarding across 150+ countries from UAE.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABH Shipping — Global Freight & Logistics',
    description: 'Reliable freight forwarding across 150+ countries from UAE.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0c10',
  colorScheme: 'dark',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body>
        <TRPCProvider>{children}</TRPCProvider>
      </body>
    </html>
  )
}
