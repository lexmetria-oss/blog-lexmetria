import { getArtigosByCategoria, CATEGORIAS } from '@/lib/artigos'
import { getCategoriaBySlug } from '@/lib/categorias'
import { notFound } from 'next/navigation'
import ArticleCard from '@/components/ArticleCard'
import Link from 'next/link'
import type { Metadata } from 'next'
import ShareButtons from '@/components/ShareButtons'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return CATEGORIAS.map(c => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat = getCategoriaBySlug(params.slug)
  if (!cat) return {}
  return {
    title: `${cat.nome} — Artigos`,
    description: cat.descricao,
  }
}

export default function CategoriaPage({ params }: Props) {
  const categoria = getCategoriaBySlug(params.slug)
  if (!categoria) notFound()

  const artigos = getArtigosByCategoria(params.slug)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Header da categoria */}
      <div className="border border-gold/20 bg-navy-mid p-8 mb-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-gold" />
        <nav className="flex items-center gap-2 font-mono text-xs text-ivory/40 uppercase tracking-widest mb-6 pl-4">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-gold">{categoria.nome}</span>
        </nav>

        <div className="pl-4">
          <div className="text-4xl mb-3">{categoria.icone}</div>
          <h1 className="font-serif text-3xl sm:text-4xl font-black text-ivory mb-3">{categoria.nome}</h1>
          <p className="text-ivory/60 max-w-xl mb-4">{categoria.descricao}</p>
          <div className="inline-block font-mono text-xs text-gold bg-gold/10 border border-gold/30 px-3 py-1.5">
            {categoria.lei}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-xs text-ivory/40 uppercase tracking-widest">
              {artigos.length} artigo{artigos.length !== 1 ? 's' : ''}
            </span>
          </div>

          {artigos.length === 0 ? (
            <div className="text-center py-20 border border-gold/20">
              <p className="text-3xl mb-3">{categoria.icone}</p>
              <p className="font-mono text-xs text-gold uppercase tracking-widest mb-3">Em breve</p>
              <p className="text-ivory/50 text-sm">Artigos sobre {categoria.nome} serão publicados em breve.</p>
            </div>
          ) : (
            artigos.map(artigo => (
              <ArticleCard key={artigo.slug} artigo={artigo} />
            ))
          )}

          <ShareButtons titulo={`${categoria.nome} — LEXMETRIA`} />
        </div>

        {/* Sidebar */}
        <aside>
          <div className="border border-gold/20 bg-navy-mid p-6 sticky top-24">
            <h3 className="font-mono text-xs text-gold uppercase tracking-widest mb-4">Outros Eixos</h3>
            {CATEGORIAS.filter(c => c.slug !== params.slug).map(cat => (
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