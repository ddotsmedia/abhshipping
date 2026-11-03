'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Ship } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/tracking', label: 'Track Shipment' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#0a0c10]/95 backdrop-blur-md border-b border-[#2a3347]'
          : 'bg-transparent',
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-[#e8c84a] flex items-center justify-center">
              <Ship className="w-4 h-4 text-[#0a0c10]" strokeWidth={2.5} />
            </div>
            <span className="font-display font-bold text-xl text-[#f0f2f5] group-hover:text-[#e8c84a] transition-colors">
              ABH <span className="text-[#e8c84a]">Shipping</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#8892a4] hover:text-[#f0f2f5] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/quote"
              className="px-5 py-2.5 rounded-lg bg-[#e8c84a] text-[#0a0c10] text-sm font-semibold hover:bg-[#f0d46a] transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#8892a4] hover:text-[#f0f2f5]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1c2230] border-t border-[#2a3347] px-6 py-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#f0f2f5] font-medium py-1"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/quote"
              className="mt-2 w-full text-center px-5 py-3 rounded-lg bg-[#e8c84a] text-[#0a0c10] font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
