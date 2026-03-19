import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre o LEXMETRIA',
  description: 'Conheça o projeto LEXMETRIA — diagnóstico de conformidade e governança pública para Câmaras Municipais, Autarquias e Prefeituras.',
}

export default function SobrePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      <div className="flex items-center gap-3 mb-4">
        <div className="w-6 h-px bg-gold" />
        <span className="font-mono text-xs text-gold tracking-widest uppercase">Sobre o Projeto</span>
      </div>

      <h1 className="font-serif text-4xl sm:text-5xl font-black text-ivory mb-6">
        O que é o <span className="text-gold">LEXMETRIA</span>?
      </h1>

      <p className="text-xl text-ivory/70 leading-relaxed mb-12 font-serif italic border-l-2 border-gold pl-6">
        "Medindo riscos, blindando a gestão e antecipando soluções"
      </p>

      <div className="prose-lexmetria space-y-6 mb-16">
        <p>
          O <strong>LEXMETRIA</strong> é uma ferramenta estratégica de inteligência jurídica e administrativa
          para a gestão pública municipal. Através de um diagnóstico 360°, identificamos gargalos e
          vulnerabilidades invisíveis antes que se transformem em apontamentos graves pelos Tribunais de
          Contas (TCE), Ministério Público (MP) ou Ações Civis Públicas por improbidade administrativa.
        </p>
        <p>
          Mais do que um relatório de falhas — o LEXMETRIA entrega um <strong>mapa de soluções antecipadas</strong>.
          É o termômetro que move a Câmara da reatividade para um nível de excelência em governança pública.
        </p>
      </div>

      {/* 3 pilares */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
        {[
          {
            icone: '🛡️',
            titulo: 'Segurança Jurídica',
            texto: 'O descumprimento da LAI ou negligência com a LGPD gera responsabilidade direta ao ordenador de despesas. Antecipamos riscos e evitamos multas e sanções pessoais.'
          },
          {
            icone: '⚡',
            titulo: 'Eficiência e Modernização',
            texto: 'A Lei 14.129/2021 estabelece que a digitalização é um dever. Avaliamos o quão digital a Câmara é, otimizando recursos e reduzindo burocracia desnecessária.'
          },
          {
            icone: '🏛️',
            titulo: 'Transparência e Credibilidade',
            texto: 'Uma instituição que cumpre com excelência as leis de acesso à informação fortalece sua imagem perante a sociedade e eleva seu índice nos rankings de fiscalização.'
          }
        ].map(p => (
          <div key={p.titulo} className="border border-gold/20 bg-navy-mid p-6 border-l-2 border-l-gold">
            <div className="text-2xl mb-3">{p.icone}</div>
            <h3 className="font-serif text-base font-bold text-ivory mb-2">{p.titulo}</h3>
            <p className="text-sm text-ivory/60 leading-relaxed">{p.texto}</p>
          </div>
        ))}
      </div>

      {/* Ciclo */}
      <div className="mb-16">
        <h2 className="font-serif text-2xl font-bold text-ivory mb-8">O Ciclo dos 90 Dias</h2>
        <div className="space-y-1">
          {[
            { fase: '01', periodo: 'Dias 1–30', titulo: 'Imersão, Coleta e Auditoria de Campo', desc: 'Diagnóstico in loco, entrevistas estruturadas, scanner do Portal da Transparência e análise técnica dos sistemas.' },
            { fase: '02', periodo: 'Dias 31–60', titulo: 'Processamento, Cruzamento e Testes de Stress', desc: 'Simulação de fiscalização TCE/MP, testes de conformidade, cruzamento de dados e mapeamento de vulnerabilidades.' },
            { fase: '03', periodo: 'Dias 61–90', titulo: 'Consolidação, Relatório Final e Entrega', desc: 'Matriz de Pontos Críticos, Índice de Maturidade LEXMETRIA, Guia de Soluções e Apresentação Executiva.' },
          ].map(f => (
            <div key={f.fase} className="flex gap-4 border border-gold/20 bg-navy-mid p-5 hover:border-gold/40 transition-colors">
              <div className="font-serif text-3xl font-black text-gold/20 flex-shrink-0 w-10">{f.fase}</div>
              <div>
                <div className="font-mono text-xs text-gold/60 uppercase tracking-widest mb-1">{f.periodo}</div>
                <div className="font-serif font-bold text-ivory mb-1">{f.titulo}</div>
                <p className="text-sm text-ivory/60">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="border border-gold bg-gold/5 p-8 text-center">
        <h2 className="font-serif text-2xl font-bold text-ivory mb-3">Solicite o Diagnóstico</h2>
        <p className="text-ivory/60 mb-6">Câmaras Municipais a partir de R$ 12.000. Ciclo de 90 dias.</p>
        <Link
          href="/#contato"
          className="inline-block font-mono text-sm tracking-widest uppercase bg-gold text-navy px-8 py-3 hover:bg-gold-light transition-colors font-medium"
        >
          Solicitar Proposta →
        </Link>
      </div>
    </div>
  )
}
