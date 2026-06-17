'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const nav = [
  { label: 'Biblioteca',   href: '/biblioteca' },
  { label: 'Autores',      href: '/autores' },
  { label: 'Entrelazados', href: '/entrelazados' },
  { label: 'Blog',         href: '/blog' },
  { label: 'Manifiesto',   href: '/manifiesto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      backgroundColor: 'rgba(26, 16, 8, 0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--borde)',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: '0 1.5rem',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        height: '72px',
      }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Image
            src="/logo.png"
            alt="Seb Lettering"
            width={48}
            height={48}
            style={{ borderRadius: '50%' }}
          />
          <span style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1.25rem',
            fontWeight: 600,
            color: 'var(--oro)',
            letterSpacing: '0.05em',
          }}>
            seb.lettering
          </span>
        </Link>

        {/* Nav desktop */}
        <nav style={{ display: 'flex', gap: '2rem' }} className="hidden-mobile">
          {nav.map(({ label, href }) => (
            <Link key={href} href={href} style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.85rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--texto-suave)',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--oro)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--texto-suave)')}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA desktop */}
        <Link href="/contacto" className="hidden-mobile" style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.8rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          padding: '0.5rem 1.25rem',
          border: '1px solid var(--oro)',
          color: 'var(--oro)',
          borderRadius: '2px',
          transition: 'all 0.2s',
        }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = 'var(--oro)'
            e.currentTarget.style.color = 'var(--tinta)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = 'transparent'
            e.currentTarget.style.color = 'var(--oro)'
          }}
        >
          Únete
        </Link>

        {/* Hamburger mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="show-mobile"
          style={{ background: 'none', border: 'none', color: 'var(--oro)', cursor: 'pointer' }}
          aria-label="Menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Nav mobile */}
      {open && (
        <nav style={{
          backgroundColor: 'var(--superficie)',
          borderTop: '1px solid var(--borde)',
          padding: '1.5rem',
          display: 'flex', flexDirection: 'column', gap: '1.25rem',
        }}>
          {nav.map(({ label, href }) => (
            <Link key={href} href={href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1rem',
                color: 'var(--texto)',
                letterSpacing: '0.05em',
              }}
            >
              {label}
            </Link>
          ))}
          <Link href="/contacto" onClick={() => setOpen(false)} style={{
            color: 'var(--oro)',
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.9rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginTop: '0.5rem',
          }}>
            → Únete al sello
          </Link>
        </nav>
      )}
    </header>
  )
}