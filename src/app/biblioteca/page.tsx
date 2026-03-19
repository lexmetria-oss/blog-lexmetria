'use client'
import { useState } from 'react'

const PASTAS = [
  {
    slug: 'transparencia-lai',
    nome: 'Transparência e LAI',
    icone: '🔍',
    lei: 'Lei nº 12.527/11',
    folderId: '1y-Y6KuqQ-EE31tM7zBXJn8TN5GJmj-aM',
    driveUrl: 'https://drive.google.com/drive/folders/1y-Y6KuqQ-EE31tM7zBXJn8TN5GJmj-aM',
  },
  {
    slug: 'lgpd-protecao-dados',
    nome: 'LGPD e Proteção de Dados',
    icone: '🔒',
    lei: 'Lei nº 13.709/18',
    folderId: '1Txl004ilfX_6fpQ0ljnQU0ZlNmZyAKZH',
    driveUrl: 'https://drive.google.com/drive/folders/1Txl004ilfX_6fpQ0ljnQU0ZlNmZyAKZH',
  },
  {
    slug: 'ouvidoria-usuario',
    nome: 'Ouvidoria e Usuário',
    icone: '🗣️',
    lei: 'Lei nº 13.460/17',
    folderId: '1nMJlXo8s7xzfm16sTbHJcWlj1MgomTP-',
    driveUrl: 'https://drive.google.com/drive/folders/1nMJlXo8s7xzfm16sTbHJcWlj1MgomTP-',
  },
  {
    slug: 'governo-digital',
    nome: 'Governo Digital',
    icone: '💻',
    lei: 'Lei nº 14.129/21',
    folderId: '15mI-0H8j9Zaq38Eoh6I8ccmF11ORTA9U',
    driveUrl: 'https://drive.google.com/drive/folders/15mI-0H8j9Zaq38Eoh6I8ccmF11ORTA9U',
  },
  {
    slug: 'tribunais-de-contas',
    nome: 'TCE e Fiscalização',
    icone: '⚖️',
    lei: 'Controle Externo',
    folderId: '1SUjU_OdfudA29PfWw0Wp70jbQLWjOYaI',
    driveUrl: 'https://drive.google.com/drive/folders/1SUjU_OdfudA29PfWw0Wp70jbQLWjOYaI',
  },
  {
    slug: 'governanca-gestao',
    nome: 'Governança e Gestão',
    icone: '🏛️',
    lei: 'Lei nº 14.133/21',
    folderId: '1j-3gVR7GoYKsbP97wTO5QVYoSHnW3MaU',
    driveUrl: 'https://drive.google.com/drive/folders/1j-3gVR7GoYKsbP97wTO5QVYoSHnW3MaU',
  },
]

export default function BibliotecaPage() {
  const [ativa, setAtiva] = useState(0)
  const pasta = PASTAS[ativa]
  const embedUrl = `https://drive.google.com/embeddedfolderview?id=${pasta.folderId}#list`

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-px bg-gold" />
          <span className="font-mono text-xs text-gold tracking-widest uppercase">Acesso Gratuito</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ivory mb-3">
          Biblioteca <span className="text-gold">Jurídica</span>
        </h1>
        <p className="text-ivory/60 max-w-xl leading-relaxed">
          Leis, decretos, manuais e resoluções organizados por eixo temático. Visualize e baixe os documentos diretamente pelo Google Drive.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {PASTAS.map((p, i) => (
          <button
            key={p.slug}
            onClick={() => setAtiva(i)}
            className={`flex items-center gap-2 px-4 py-2.5 font-mono text-xs tracking-widest uppercase border transition-all duration-200 ${
              ativa === i
                ? 'bg-gold text-navy border-gold font-medium'
                : 'border-gold/25 text-ivory/60 hover:border-gold/60 hover:text-ivory'
            }`}
          >
            <span className="text-sm">{p.icone}</span>
            <span className="hidden sm:inline">{p.nome}</span>
            <span className="sm:hidden">{p.nome.split(' ')[0]}</span>
          </button>
        ))}
      </div>

      {/* Painel */}
      <div className="border border-gold/25 bg-navy-mid">

        {/* Cabeçalho */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gold/15">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{pasta.icone}</span>
            <div>
              <h2 className="font-serif text-base font-bold text-ivory">{pasta.nome}</h2>
              <span className="font-mono text-xs text-gold/60">{pasta.lei}</span>
            </div>
          </div>
          <a
            href={pasta.driveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs text-gold/60 hover:text-gold border border-gold/25 hover:border-gold px-3 py-1.5 transition-all"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
            </svg>
            Abrir no Drive
          </a>
        </div>

        {/* iframe */}
        <div className="w-full" style={{ height: '600px' }}>
          <iframe
            key={pasta.folderId}
            src={embedUrl}
            className="w-full h-full border-0 bg-white"
            title={`Pasta ${pasta.nome}`}
          />
        </div>

        {/* Rodapé */}
        <div className="px-5 py-3 border-t border-gold/10 flex items-center justify-between flex-wrap gap-2">
          <p className="text-xs text-ivory/30 font-mono">
            Arquivos abertos pelo Google Drive. Nenhum dado é armazenado pelo LEXMETRIA.
          </p>
          <a
            href="mailto:lexmetria@gmail.com"
            className="text-xs text-gold/40 hover:text-gold font-mono transition-colors"
          >
            Sugerir documento →
          </a>
        </div>
      </div>

    </div>
  )
}