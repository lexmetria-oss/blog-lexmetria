import Link from 'next/link'
import { getAllArtigos, CATEGORIAS } from '@/lib/artigos'
import ArticleCard from '@/components/ArticleCard'
import ContatoSection from '@/components/ContatoSection'

export default function Home() {
  const artigos = getAllArtigos()
  const destaques = artigos.filter(a => a.destaque).slice(0, 3)
  const recentes = artigos.slice(0, 6)

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex flex-col justify-center grid-bg overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(201,168,76,.1) 0%, transparent 70%)'}} />
          <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse 40% 60% at 10% 80%, rgba(26,110,115,.12) 0%, transparent 60%)'}} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gold" />
              <span className="font-mono text-xs text-gold tracking-widest uppercase">Diagnóstico de Conformidade</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-black text-ivory leading-tight mb-6">
              Sua gestão pública<br/>
              sob <span className="text-gold">controle</span>.
            </h1>

            <p className="text-xl text-ivory/70 leading-relaxed max-w-2xl mb-10">
              Artigos técnicos sobre LAI, LGPD, Ouvidoria e Governo Digital para gestores públicos que querem antecipar riscos antes que os órgãos de controle o façam.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/blog" className="font-mono text-sm tracking-widest uppercase bg-gold text-navy px-6 py-3 hover:bg-gold-light transition-colors font-medium">
                Explorar Artigos
              </Link>
              <Link href="/sobre" className="font-mono text-sm tracking-widest uppercase border border-ivory/30 text-ivory px-6 py-3 hover:border-gold hover:text-gold transition-colors">
                Sobre o Projeto
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-gold/15 bg-navy/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { num: '90', label: 'Dias de Ciclo' },
              { num: '4', label: 'Eixos de Análise' },
              { num: '360°', label: 'Diagnóstico Completo' },
              { num: 'LAI + LGPD', label: 'Conformidade Assegurada' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="font-serif text-2xl font-bold text-gold">{stat.num}</div>
                <div className="font-mono text-xs text-ivory/40 uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIAS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-6 h-px bg-gold" />
          <span className="font-mono text-xs text-gold tracking-widest uppercase">Eixos de Análise</span>
        </div>
        <h2 className="font-serif text-3xl font-bold text-ivory mb-10">
          Explore por <span className="text-gold">Categoria</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {CATEGORIAS.map(cat => (
            <Link
              key={cat.slug}
              href={`/categorias/${cat.slug}`}
              className="group border border-gold/20 hover:border-gold/50 bg-navy-mid hover:bg-gold/5 transition-all p-4 text-center"
            >
              <div className="text-2xl mb-2">{cat.icone}</div>
              <div className="text-xs text-ivory/80 group-hover:text-gold transition-colors font-medium leading-snug mb-1">{cat.nome}</div>
              <div className="font-mono text-xs text-ivory/30 group-hover:text-gold/60 transition-colors">Ver tudo →</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── DESTAQUES ── */}
      {destaques.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-px bg-gold" />
                <span className="font-mono text-xs text-gold tracking-widest uppercase">⭐ Destaque</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-ivory">Artigos em <span className="text-gold">Destaque</span></h2>
            </div>
            <Link href="/blog" className="font-mono text-xs text-gold/60 hover:text-gold uppercase tracking-widest transition-colors hidden sm:block">
              Ver todos →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {destaques.map(artigo => (
              <ArticleCard key={artigo.slug} artigo={artigo} destaque />
            ))}
          </div>
        </section>
      )}

      {/* ── RECENTES ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-px bg-gold" />
                  <span className="font-mono text-xs text-gold tracking-widest uppercase">🕒 Publicações Recentes</span>
                </div>
                <h2 className="font-serif text-3xl font-bold text-ivory">Últimos <span className="text-gold">Artigos</span></h2>
              </div>
              <Link href="/blog" className="font-mono text-xs text-gold/60 hover:text-gold uppercase tracking-widest transition-colors hidden sm:block">
                Ver todos →
              </Link>
            </div>
            <div>
              {recentes.map(artigo => (
                <ArticleCard key={artigo.slug} artigo={artigo} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="border border-gold/20 bg-navy-mid p-6">
              <h3 className="font-serif text-lg font-bold text-ivory mb-1">Solicitar Diagnóstico</h3>
              <p className="text-sm text-ivory/60 mb-4 leading-relaxed">
                Ciclo completo de 90 dias para Câmaras Municipais, Autarquias e Prefeituras.
              </p>
              <div className="mb-4 p-3 border border-gold/20 bg-gold/5">
                <div className="font-mono text-xs text-gold/60 uppercase tracking-widest mb-1">Câmaras Municipais</div>
                <div className="font-serif text-xl font-bold text-gold">A partir de R$ 12.000</div>
                <div className="font-mono text-xs text-ivory/40">Ciclo de 90 dias · 4 Fases</div>
              </div>
              <Link
                href="/#contato"
                className="block text-center font-mono text-xs tracking-widest uppercase bg-gold text-navy px-4 py-3 hover:bg-gold-light transition-colors font-medium"
              >
                Solicitar Proposta
              </Link>
            </div>

            <div className="border border-gold/20 bg-navy-mid p-6">
              <h3 className="font-mono text-xs text-gold uppercase tracking-widest mb-4">📂 Categorias</h3>
              {CATEGORIAS.map(cat => (
                <Link
                  key={cat.slug}
                  href={`/categorias/${cat.slug}`}
                  className="flex items-center justify-between py-2.5 border-b border-gold/10 last:border-0 hover:text-gold transition-colors group"
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
      </section>

      <ContatoSection />
    </>
  )
}