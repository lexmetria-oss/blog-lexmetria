import { getAllArtigos, CATEGORIAS } from '@/lib/artigos'
import ArticleCard from '@/components/ArticleCard'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Todos os Artigos',
  description: 'Artigos sobre LAI, LGPD, Ouvidoria, Governo Digital e Governança Pública.',
}

export default function BlogPage() {
  const artigos = getAllArtigos()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-6 h-px bg-gold" />
          <span className="font-mono text-xs text-gold tracking-widest uppercase">📝 Todos os Artigos</span>
        </div>
        <h1 className="font-serif text-4xl font-bold text-ivory mb-3">
          Biblioteca de <span className="text-gold">Conhecimento</span>
        </h1>
        <p className="text-ivory/60 max-w-xl">
          Conteúdo técnico sobre conformidade legal e governança pública para gestores municipais.
        </p>
      </div>

      {/* Filtros por categoria */}
      <div className="flex flex-wrap gap-2 mb-10">
        <Link
          href="/blog"
          className="category-badge border border-gold bg-gold/10 text-gold"
        >
          Todos
        </Link>
        {CATEGORIAS.map(cat => (
          <Link
            key={cat.slug}
            href={`/categorias/${cat.slug}`}
            className="category-badge border border-gold/30 text-ivory/60 hover:border-gold hover:text-gold transition-colors"
          >
            {cat.icone} {cat.nome}
          </Link>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          {artigos.length === 0 ? (
            <div className="text-center py-20 border border-gold/20">
              <p className="font-mono text-xs text-gold uppercase tracking-widest mb-3">Em breve</p>
              <p className="text-ivory/50">Os artigos serão publicados em breve.</p>
            </div>
          ) : (
            artigos.map(artigo => (
              <ArticleCard key={artigo.slug} artigo={artigo} />
            ))
          )}
        </div>

        {/* Sidebar */}
        <aside>
          <div className="border border-gold/20 bg-navy-mid p-6 sticky top-24">
            <h3 className="font-mono text-xs text-gold uppercase tracking-widest mb-4">📂 Por Eixo</h3>
            {CATEGORIAS.map(cat => (
              <Link
                key={cat.slug}
                href={`/categorias/${cat.slug}`}
                className="flex items-center justify-between py-3 border-b border-gold/10 last:border-0 hover:text-gold transition-colors group"
              >
                <span className="text-sm text-ivory/70 group-hover:text-gold flex items-center gap-2">
                  {cat.icone} {cat.nome}
                </span>
                <span className="font-mono text-xs text-ivory/30">→</span>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </div>
  )
}
