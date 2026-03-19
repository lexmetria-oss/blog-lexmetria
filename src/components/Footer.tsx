import Link from 'next/link'
import { CATEGORIAS } from '@/lib/categorias'

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-navy-mid mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span className="font-serif text-2xl font-black tracking-widest text-gold">LEX</span>
              <span className="font-serif text-2xl font-light tracking-widest text-ivory">METRIA</span>
            </div>
            <p className="text-sm text-ivory/50 leading-relaxed mb-4">
              Inteligência jurídica e administrativa para a gestão pública. Diagnóstico 360° de conformidade em 90 dias.
            </p>
            <p className="font-mono text-xs text-gold/50 tracking-widest uppercase italic">
              "Medindo riscos, blindando a gestão<br/>e antecipando soluções"
            </p>
          </div>

          {/* Eixos */}
          <div>
            <h3 className="font-mono text-xs tracking-widest text-gold uppercase mb-5">Eixos de Análise</h3>
            <ul className="space-y-2">
              {CATEGORIAS.map(cat => (
                <li key={cat.slug}>
                  <Link
                    href={`/categorias/${cat.slug}`}
                    className="text-sm text-ivory/60 hover:text-gold transition-colors flex items-center gap-2"
                  >
                    <span className="text-xs">{cat.icone}</span>
                    {cat.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-mono text-xs tracking-widest text-gold uppercase mb-5">Blog</h3>
            <ul className="space-y-2 mb-8">
              <li><Link href="/blog" className="text-sm text-ivory/60 hover:text-gold transition-colors">Todos os Artigos</Link></li>
              <li><Link href="/sobre" className="text-sm text-ivory/60 hover:text-gold transition-colors">Sobre o LEXMETRIA</Link></li>
              <li><Link href="/#contato" className="text-sm text-ivory/60 hover:text-gold transition-colors">Solicitar Diagnóstico</Link></li>
            </ul>

            <div className="border border-gold/20 p-4">
              <p className="font-mono text-xs text-gold/60 uppercase tracking-widest mb-1">Ciclo de 90 dias</p>
              <p className="text-sm text-ivory/70">Câmaras Municipais a partir de <span className="text-gold font-semibold">R$ 12.000</span></p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gold/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-ivory/30 tracking-widest uppercase">
            © {new Date().getFullYear()} LEXMETRIA. Todos os direitos reservados.
          </p>
          <p className="font-mono text-xs text-ivory/30 tracking-widest uppercase">
            Diagnóstico de Conformidade e Governança Pública
          </p>
        </div>
      </div>
    </footer>
  )
}
