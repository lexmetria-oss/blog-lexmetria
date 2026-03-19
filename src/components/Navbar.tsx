'use client'
import Link from 'next/link'
import { useState } from 'react'
import { CATEGORIAS } from '@/lib/categorias'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [catOpen, setCatOpen] = useState(false)

  return (
    <nav className="border-b border-gold/20 bg-navy/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-xl font-black tracking-widest text-gold">LEX</span>
            <span className="font-serif text-xl font-light tracking-widest text-ivory">METRIA</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">

            {/* Categorias dropdown */}
            <div className="relative" onMouseEnter={() => setCatOpen(true)} onMouseLeave={() => setCatOpen(false)}>
              <button className="font-mono text-xs tracking-widest text-ivory/70 uppercase hover:text-gold transition-colors flex items-center gap-1">
                Eixos
                <span className="text-gold/40">▾</span>
              </button>
              {catOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-navy-mid border border-gold/20 shadow-2xl">
                  {CATEGORIAS.map(cat => (
                    <Link
                      key={cat.slug}
                      href={`/categorias/${cat.slug}`}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gold/5 border-b border-gold/10 last:border-0 transition-colors group"
                    >
                      <span className="text-lg">{cat.icone}</span>
                      <div>
                        <div className="text-sm text-ivory font-medium group-hover:text-gold transition-colors">{cat.nome}</div>
                        <div className="text-xs text-ivory/40 font-mono">{cat.lei}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/blog" className="font-mono text-xs tracking-widest text-ivory/70 uppercase hover:text-gold transition-colors">
              Artigos
            </Link>
            <Link href="/biblioteca" className="font-mono text-xs tracking-widest text-ivory/70 uppercase hover:text-gold transition-colors">
              Biblioteca
            </Link>
            <Link href="/sobre" className="font-mono text-xs tracking-widest text-ivory/70 uppercase hover:text-gold transition-colors">
              Sobre
            </Link>
            <a
              href="https://www.instagram.com/lexmetria"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-widest uppercase bg-gold text-navy px-4 py-2 hover:bg-gold-light transition-colors font-medium"
            >
              Contratar
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-ivory/70" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16"/>
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gold/20 bg-navy-mid">
          {CATEGORIAS.map(cat => (
            <Link
              key={cat.slug}
              href={`/categorias/${cat.slug}`}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 px-6 py-3 border-b border-gold/10 hover:bg-gold/5"
            >
              <span>{cat.icone}</span>
              <span className="text-sm text-ivory">{cat.nome}</span>
            </Link>
          ))}
          <Link href="/blog" onClick={() => setMenuOpen(false)} className="block px-6 py-3 text-sm text-ivory/70 border-b border-gold/10">Todos os Artigos</Link>
          <Link href="/biblioteca" onClick={() => setMenuOpen(false)} className="block px-6 py-3 text-sm text-ivory/70 border-b border-gold/10">Biblioteca</Link>
          <Link href="/sobre" onClick={() => setMenuOpen(false)} className="block px-6 py-3 text-sm text-ivory/70 border-b border-gold/10">Sobre</Link>
          <a href="https://www.instagram.com/lexmetria" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="block px-6 py-4 text-sm text-gold font-medium">Contratar →</a>
        </div>
      )}
    </nav>
  )
}