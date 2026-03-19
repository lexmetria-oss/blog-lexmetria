// SERVER ONLY — não importar em Client Components ('use client')
// Usa fs/path do Node.js para ler os arquivos Markdown

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { CATEGORIAS, getCategoriaBySlug, formatDate } from './categorias'

export { CATEGORIAS, getCategoriaBySlug, formatDate }

const CONTENT_DIR = path.join(process.cwd(), 'content/artigos')

export interface Artigo {
  slug: string
  titulo: string
  resumo: string
  categoria: string
  categoriaSlug: string
  data: string
  tempoLeitura: number
  icone: string
  destaque?: boolean
  conteudo: string
}

export function getAllArtigos(): Artigo[] {
  if (!fs.existsSync(CONTENT_DIR)) return []

  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.md'))

  return files
    .map((filename) => {
      const slug = filename.replace('.md', '')
      const fullPath = path.join(CONTENT_DIR, filename)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        titulo: data.titulo || '',
        resumo: data.resumo || '',
        categoria: data.categoria || '',
        categoriaSlug: data.categoriaSlug || '',
        data: data.data || '',
        tempoLeitura: data.tempoLeitura || 5,
        icone: data.icone || '📄',
        destaque: data.destaque || false,
        conteudo: content,
      } as Artigo
    })
    .sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime())
}

export function getArtigoBySlug(slug: string): Artigo | undefined {
  return getAllArtigos().find(a => a.slug === slug)
}

export function getArtigosByCategoria(categoriaSlug: string): Artigo[] {
  return getAllArtigos().filter(a => a.categoriaSlug === categoriaSlug)
}
