import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'LEXMETRIA — Diagnóstico de Conformidade e Governança Pública',
    template: '%s | LEXMETRIA'
  },
  description: 'Inteligência jurídica e administrativa para Câmaras Municipais, Autarquias e Prefeituras. LAI, LGPD, Governo Digital e Ouvidoria.',
  keywords: ['LAI', 'LGPD', 'governança pública', 'transparência', 'câmara municipal', 'conformidade', 'TCE'],
  openGraph: {
    siteName: 'LEXMETRIA',
    locale: 'pt_BR',
    type: 'website',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
