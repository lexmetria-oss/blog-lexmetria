import Link from 'next/link'
import { type Artigo } from '@/lib/artigos'
import { formatDate, getCategoriaBySlug } from '@/lib/categorias'

interface Props {
  artigo: Artigo
  destaque?: boolean
}

export default function ArticleCard({ artigo, destaque = false }: Props) {
  const categoria = getCategoriaBySlug(artigo.categoriaSlug)

  if (destaque) {
    return (
      <Link href={`/blog/${artigo.slug}`} className="group block bg-navy-mid border border-gold/20 hover:border-gold/50 transition-all duration-300 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-500" />
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">{artigo.icone}</span>
            <span className="category-badge text-gold border border-gold/30 bg-gold/5">
              {categoria?.icone} {artigo.categoria}
            </span>
          </div>
          <h3 className="font-serif text-xl font-bold text-ivory group-hover:text-gold transition-colors leading-snug mb-3">
            {artigo.titulo}
          </h3>
          <p className="text-sm text-ivory/60 leading-relaxed mb-5 line-clamp-2">
            {artigo.resumo}
          </p>
          <div className="flex items-center gap-3 text-xs text-ivory/40 font-mono">
            <span>📅 {formatDate(artigo.data)}</span>
            <span>·</span>
            <span>⏱ {artigo.tempoLeitura} min</span>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/blog/${artigo.slug}`} className="group flex gap-4 py-5 border-b border-gold/10 hover:border-gold/30 transition-all">
      <div className="text-2xl flex-shrink-0 mt-1">{artigo.icone}</div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="font-mono text-xs text-gold/60 uppercase tracking-widest">
            {categoria?.icone} {artigo.categoria}
          </span>
        </div>
        <h3 className="font-serif text-base font-bold text-ivory group-hover:text-gold transition-colors leading-snug mb-1.5">
          {artigo.titulo}
        </h3>
        <p className="text-sm text-ivory/50 line-clamp-1 mb-2">{artigo.resumo}</p>
        <div className="flex items-center gap-3 text-xs text-ivory/30 font-mono">
          <span>{formatDate(artigo.data)}</span>
          <span>·</span>
          <span>⏱ {artigo.tempoLeitura} min</span>
        </div>
      </div>
    </Link>
  )
}
