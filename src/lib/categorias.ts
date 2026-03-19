// Dados estáticos — sem dependências de Node.js
// Seguro para importar em Client e Server Components

export const CATEGORIAS = [
  {
    slug: 'transparencia-lai',
    nome: 'Transparência e LAI',
    icone: '🔍',
    descricao: 'Lei de Acesso à Informação, portal da transparência e dados abertos',
    cor: '#1A6E73',
    lei: 'Lei nº 12.527/11',
  },
  {
    slug: 'lgpd-protecao-dados',
    nome: 'LGPD e Proteção de Dados',
    icone: '🔒',
    descricao: 'Conformidade com a Lei Geral de Proteção de Dados Pessoais',
    cor: '#C9A84C',
    lei: 'Lei nº 13.709/18',
  },
  {
    slug: 'ouvidoria-usuario',
    nome: 'Ouvidoria e Usuário',
    icone: '🗣️',
    descricao: 'Carta de serviços, canais de denúncia e participação cidadã',
    cor: '#22959D',
    lei: 'Lei nº 13.460/17',
  },
  {
    slug: 'governo-digital',
    nome: 'Governo Digital',
    icone: '💻',
    descricao: 'Desburocratização, assinaturas eletrônicas e interoperabilidade',
    cor: '#3C6E9E',
    lei: 'Lei nº 14.129/21',
  },
  {
    slug: 'tribunais-de-contas',
    nome: 'TCE e Fiscalização',
    icone: '⚖️',
    descricao: 'Apontamentos, rejeição de contas e estratégias de blindagem',
    cor: '#9E7E35',
    lei: 'Controle Externo',
  },
  {
    slug: 'governanca-gestao',
    nome: 'Governança e Gestão',
    icone: '🏛️',
    descricao: 'Boas práticas administrativas, compliance e integridade pública',
    cor: '#2F2F2F',
    lei: 'Lei nº 14.133/21',
  },
]

export function getCategoriaBySlug(slug: string) {
  return CATEGORIAS.find(c => c.slug === slug)
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}
