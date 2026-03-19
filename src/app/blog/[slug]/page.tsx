import { getAllArtigos, getArtigoBySlug, getArtigosByCategoria } from '@/lib/artigos'
import { formatDate, getCategoriaBySlug } from '@/lib/categorias'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Link from 'next/link'
import type { Metadata } from 'next'
import ArticleCard from '@/components/ArticleCard'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const artigos = getAllArtigos()
  return artigos.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const artigo = getArtigoBySlug(params.slug)
  if (!artigo) return {}
  return {
    title: artigo.titulo,
    description: artigo.resumo,
  }
}

export default function ArtigoPage({ params }: Props) {
  const artigo = getArtigoBySlug(params.slug)
  if (!artigo) notFound()

  const categoria = getCategoriaBySlug(artigo.categoriaSlug)
  const relacionados = getArtigosByCategoria(artigo.categoriaSlug)
    .filter(a => a.slug !== artigo.slug)
    .slice(0, 3)

  const todos = getAllArtigos()
  const idx = todos.findIndex(a => a.slug === artigo.slug)
  const anterior = idx < todos.length - 1 ? todos[idx + 1] : null
  const proximo = idx > 0 ? todos[idx - 1] : null

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 font-mono text-xs text-ivory/40 uppercase tracking-widest mb-8">
        <Link href="/" className="hover:text-gold transition-colors">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
        <span>/</span>
        <Link href={`/categorias/${artigo.categoriaSlug}`} className="hover:text-gold transition-colors">
          {categoria?.icone} {artigo.categoria}
        </Link>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* Artigo principal */}
        <article className="lg:col-span-2">

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">{artigo.icone}</span>
              <Link
                href={`/categorias/${artigo.categoriaSlug}`}
                className="category-badge border border-gold/40 text-gold bg-gold/5 hover:bg-gold/10 transition-colors"
              >
                {artigo.categoria}
              </Link>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-black text-ivory leading-tight mb-5">
              {artigo.titulo}
            </h1>

            <p className="text-lg text-ivory/60 leading-relaxed mb-6 font-serif italic">
              {artigo.resumo}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-ivory/40 font-mono pb-6 border-b border-gold/20">
              <span className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-xs">L</span>
                Equipe LEXMETRIA
              </span>
              <span>·</span>
              <span>📅 {formatDate(artigo.data)}</span>
              <span>·</span>
              <span>⏱ {artigo.tempoLeitura} min de leitura</span>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="prose-lexmetria">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {artigo.conteudo}
            </ReactMarkdown>
          </div>

          {/* Navegação entre artigos */}
          <div className="mt-16 pt-8 border-t border-gold/20 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {anterior && (
              <Link href={`/blog/${anterior.slug}`} className="group border border-gold/20 hover:border-gold/50 p-4 transition-all">
                <div className="font-mono text-xs text-ivory/40 mb-2">← Artigo anterior</div>
                <div className="text-sm text-ivory group-hover:text-gold transition-colors font-medium leading-snug">
                  {anterior.icone} {anterior.titulo}
                </div>
              </Link>
            )}
            {proximo && (
              <Link href={`/blog/${proximo.slug}`} className="group border border-gold/20 hover:border-gold/50 p-4 transition-all sm:text-right ml-auto w-full">
                <div className="font-mono text-xs text-ivory/40 mb-2">Próximo artigo →</div>
                <div className="text-sm text-ivory group-hover:text-gold transition-colors font-medium leading-snug">
                  {proximo.icone} {proximo.titulo}
                </div>
              </Link>
            )}
          </div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-6">

          {/* Categoria */}
          {categoria && (
            <div className="border border-gold/20 bg-navy-mid p-6">
              <div className="text-3xl mb-3">{categoria.icone}</div>
              <h3 className="font-serif text-lg font-bold text-ivory mb-1">{categoria.nome}</h3>
              <p className="text-sm text-ivory/50 mb-4 leading-relaxed">{categoria.descricao}</p>
              <div className="font-mono text-xs text-gold/60 mb-4 p-2 border border-gold/20 bg-gold/5">
                {categoria.lei}
              </div>
              <Link
                href={`/categorias/${categoria.slug}`}
                className="block text-center font-mono text-xs tracking-widest uppercase border border-gold/30 text-gold px-4 py-2 hover:bg-gold/5 transition-colors"
              >
                Ver todos os artigos →
              </Link>
            </div>
          )}

          {/* Diagnóstico CTA */}
          <div className="border border-gold bg-gold/5 p-6">
            <h3 className="font-serif text-lg font-bold text-ivory mb-2">🛡️ Diagnóstico LEXMETRIA</h3>
            <p className="text-sm text-ivory/60 mb-4 leading-relaxed">
              Identifique as vulnerabilidades da sua Câmara antes que os órgãos de controle o façam.
            </p>
            <div className="font-serif text-2xl font-bold text-gold mb-1">A partir de R$ 12.000</div>
            <div className="font-mono text-xs text-ivory/40 mb-4">Câmaras Municipais · 90 dias</div>
            <Link
              href="/#contato"
              className="block text-center font-mono text-xs tracking-widest uppercase bg-gold text-navy px-4 py-3 hover:bg-gold-light transition-colors font-medium"
            >
              Solicitar Proposta
            </Link>
          </div>

          {/* Artigos relacionados */}
          {relacionados.length > 0 && (
            <div className="border border-gold/20 bg-navy-mid p-6">
              <h3 className="font-mono text-xs text-gold uppercase tracking-widest mb-4">
                📚 Mais em {artigo.categoria}
              </h3>
              <div className="space-y-3">
                {relacionados.map(rel => (
                  <Link key={rel.slug} href={`/blog/${rel.slug}`} className="flex items-start gap-2 group">
                    <span className="text-sm flex-shrink-0">{rel.icone}</span>
                    <span className="text-sm text-ivory/60 group-hover:text-gold transition-colors leading-snug">{rel.titulo}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}