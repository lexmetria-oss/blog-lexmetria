'use client'
import { useState } from 'react'

const FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLSfhXrpgE1lS1EKF1Dd3IyvDC8krOzGSIqORpUGPaUS4F5fZGg/formResponse'

export default function ContatoSection() {
  const [nome, setNome] = useState('')
  const [entidade, setEntidade] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    e.stopPropagation()

    const n = nome.trim()
    const en = entidade.trim()
    const em = email.trim()
    if (!n || !en || !em) return

    setStatus('loading')

    const body = new FormData()
    body.append('entry.637036891', n)
    body.append('entry.1056211702', en)
    body.append('entry.1667140602', em)

    fetch(FORM_ACTION, { method: 'POST', mode: 'no-cors', body })
      .finally(() => {
        setStatus('success')
        setNome('')
        setEntidade('')
        setEmail('')
      })
  }

  return (
    <section id="contato" className="border-t border-gold/20 bg-navy-mid">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-6 h-px bg-gold" />
          <span className="font-mono text-xs text-gold tracking-widest uppercase">📬 Fique por dentro</span>
          <div className="w-6 h-px bg-gold" />
        </div>
        <h2 className="font-serif text-3xl font-bold text-ivory mb-4">
          Receba conteúdo sobre <span className="text-gold">Governança Pública</span>
        </h2>
        <p className="text-ivory/60 mb-8">
          Artigos práticos sobre LAI, LGPD e conformidade diretamente para o seu e-mail. Sem spam.
        </p>

        {status === 'success' ? (
          <div className="max-w-md mx-auto border border-gold/40 bg-gold/5 p-8 text-center">
            <div className="text-3xl mb-3">✅</div>
            <p className="font-serif text-lg font-bold text-ivory mb-2">Cadastro realizado!</p>
            <p className="text-sm text-ivory/60">
              Obrigado! Em breve você receberá conteúdo sobre Governança Pública.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 max-w-md mx-auto"
          >
            <input
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={e => setNome(e.target.value)}
              required
              disabled={status === 'loading'}
              className="w-full bg-navy border border-gold/30 text-ivory placeholder-ivory/30 px-4 py-3 font-mono text-sm focus:outline-none focus:border-gold transition-colors disabled:opacity-50"
            />
            <input
              type="text"
              placeholder="Entidade (ex: Câmara Municipal de…)"
              value={entidade}
              onChange={e => setEntidade(e.target.value)}
              required
              disabled={status === 'loading'}
              className="w-full bg-navy border border-gold/30 text-ivory placeholder-ivory/30 px-4 py-3 font-mono text-sm focus:outline-none focus:border-gold transition-colors disabled:opacity-50"
            />
            <input
              type="email"
              placeholder="seu@email.com.br"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              disabled={status === 'loading'}
              className="w-full bg-navy border border-gold/30 text-ivory placeholder-ivory/30 px-4 py-3 font-mono text-sm focus:outline-none focus:border-gold transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full font-mono text-xs tracking-widest uppercase bg-gold text-navy px-6 py-3 hover:bg-gold-light transition-colors font-medium disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Enviando...' : 'Quero receber'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}