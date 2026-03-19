# LEXMETRIA Blog

Blog institucional do projeto LEXMETRIA — Diagnóstico de Conformidade e Governança Pública.

**Stack:** Next.js 14 · TypeScript · Tailwind CSS · Markdown · Vercel

---

## 🚀 Rodando no GitHub Codespaces

### 1. Instalar dependências

```bash
npm install
```

### 2. Rodar em desenvolvimento

```bash
npm run dev
```

Acesse: `http://localhost:3000`

---

## 📝 Como criar um novo artigo

Crie um arquivo `.md` em `content/artigos/` com este cabeçalho:

```markdown
---
titulo: "Título do Artigo"
resumo: "Resumo de uma linha para o card"
categoria: "Nome da Categoria"
categoriaSlug: "slug-da-categoria"
data: "2025-03-15"
tempoLeitura: 6
icone: "🔍"
destaque: false
---

## Conteúdo do artigo aqui...
```

### Slugs de categoria disponíveis:

| categoriaSlug | Nome |
|---|---|
| `transparencia-lai` | Transparência e LAI |
| `lgpd-protecao-dados` | LGPD e Proteção de Dados |
| `ouvidoria-usuario` | Ouvidoria e Usuário |
| `governo-digital` | Governo Digital |
| `tribunais-de-contas` | TCE e Fiscalização |
| `governanca-gestao` | Governança e Gestão |

---

## 🌐 Deploy na Vercel

### 1. Faça o push para o GitHub

```bash
git add .
git commit -m "feat: setup inicial do blog lexmetria"
git push
```

### 2. Importe na Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login com sua conta GitHub
2. Clique em **"Add New Project"**
3. Importe o repositório `lexmetria-oss/blog-lexmetria`
4. Clique em **Deploy** (sem precisar mudar nada)

Seu site estará em: `https://blog-lexmetria.vercel.app`

---

## 📁 Estrutura do Projeto

```
blog-lexmetria/
├── content/
│   └── artigos/          ← Seus artigos em Markdown
├── src/
│   ├── app/
│   │   ├── page.tsx      ← Home
│   │   ├── blog/
│   │   │   ├── page.tsx          ← Lista de artigos
│   │   │   └── [slug]/page.tsx   ← Artigo individual
│   │   ├── categorias/
│   │   │   └── [slug]/page.tsx   ← Página por categoria
│   │   └── sobre/page.tsx        ← Página sobre
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ArticleCard.tsx
│   └── lib/
│       └── artigos.ts    ← Funções de leitura dos arquivos MD
└── public/               ← Imagens e assets estáticos
```
