# Moonlight — Website institucional

Website institucional da **Moonlight Comunicação Global LDA** — software house portuguesa fundada em 1998
(Software Development, BI & Marketing, IT Consulting, IoT/AR/VR, Suporte SLA e o produto próprio **B.Analytics**).

Aplicação **full-stack com SSR**, **bilingue (PT-PT / EN)**, com SEO multi-idioma, animações e um design system próprio.

- **Domínio de produção:** https://www.moonlight.pt
- **Idiomas:** Português (base) e Inglês — URLs com prefixo `/pt/…` e `/en/…`

---

## 🧱 Stack

| Camada | Tecnologia |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start) (full-stack, **SSR**) |
| UI | [React 19](https://react.dev) |
| Bundler / Dev server | [Vite 7](https://vitejs.dev) |
| Routing | [TanStack Router](https://tanstack.com/router) (file-based) |
| Servidor de produção | [Nitro](https://nitro.build) (preset `node-server`) |
| Estilos | [Tailwind CSS 4](https://tailwindcss.com) + `tw-animate-css` + CSS variables |
| Animações | [Framer Motion](https://www.framer.com/motion/) |
| Ícones | [lucide-react](https://lucide.dev) |
| Data fetching | [TanStack Query](https://tanstack.com/query) |
| i18n | [Paraglide JS (inlang)](https://inlang.com) — compile-time, tree-shakeable |
| Config de build | `@lovable.dev/vite-tanstack-config` (agrega tanstackStart, viteReact, tailwind, nitro, aliases) |

> Nota: `@lovable.dev/vite-tanstack-config` **é o sistema de build** — importado por `vite.config.ts`. Não remover.

---

## ✅ Requisitos

- **Node.js 20+** (LTS recomendado)
- **npm** (o projeto usa `npm` — `package-lock.json`)
- Rede na **primeira build** (o compilador Paraglide obtém o plugin de mensagens via CDN e cacheia em `project.inlang/cache/`, que está versionada para builds offline em CI)

---

## 🚀 Arranque rápido

```bash
npm install       # instala dependências
npm run dev       # servidor de desenvolvimento → http://localhost:8080
```

Abre `http://localhost:8080` — a raiz redireciona para `/pt/home` (ou `/en/home` conforme cookie/`Accept-Language`).

---

## 📜 Scripts

| Script | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento (Vite, porta 8080, HMR) |
| `npm run build` | Build de produção (gera `.output/`, compila as traduções Paraglide) |
| `npm run build:dev` | Build em modo development |
| `npm run preview` | Pré-visualiza a build localmente (`vite preview`) |
| `npm run lint` | ESLint |
| `npm run format` | Prettier (`--write`) |

---

## 🗂️ Estrutura do projeto

```
.
├── messages/                 # Traduções (fonte de verdade)
│   ├── pt.json               #   Português (base)
│   └── en.json               #   Inglês
├── project.inlang/           # Config Paraglide/inlang (+ cache versionada)
│   └── settings.json
├── public/                   # Assets estáticos servidos como estão
│   ├── favicon.ico · apple-touch-icon.png · moonhd.png
│   ├── robots.txt · sitemap.xml · site.webmanifest
├── src/
│   ├── assets/               # Imagens importadas pelo bundler (produtos, logo)
│   ├── components/           # Componentes de UI
│   │   ├── Navbar · Footer · Hero · MoonScene · Cursor
│   │   ├── CTABanner · SectionHeader · TiltCard · MagneticButton · PageTransition
│   ├── lib/
│   │   ├── theme.tsx         # Provider de tema (dark/light) + localStorage
│   │   ├── seo.ts            # Helper de <head> localizado (canonical/hreflang/og)
│   │   ├── error-capture.ts · error-page.ts   # Tratamento de erros SSR
│   ├── paraglide/            # GERADO pelo Paraglide (git-ignored) — não editar
│   ├── routes/               # Routing file-based (TanStack)
│   │   ├── __root.tsx        # Layout raiz (head global, providers, shell HTML)
│   │   ├── index.tsx         # "/" → redireciona para /{locale}/home
│   │   └── $locale/          # Todas as páginas vivem sob o prefixo de idioma
│   │       ├── route.tsx     #   Layout: valida o locale (pt/en) → 404 se inválido
│   │       ├── index.tsx     #   "/pt" · "/en" → home
│   │       ├── home.tsx · quem-somos.tsx · servicos.tsx
│   │       ├── produtos.tsx · case-studies.tsx · contacto.tsx
│   ├── router.tsx            # createRouter (QueryClient, scroll restoration)
│   ├── server.ts             # Entry SSR: paraglideMiddleware + security headers
│   ├── start.ts              # Entry do cliente
│   ├── styles.css            # Tailwind + design tokens (CSS variables)
│   └── routeTree.gen.ts      # GERADO pelo router-plugin — não editar
├── vite.config.ts            # defineConfig (lovable) + plugin Paraglide
├── eslint.config.js · .prettierrc · tsconfig.json
```

---

## 🌍 Internacionalização (i18n)

Multilingue com **Paraglide JS** — as mensagens são compiladas em **funções tree-shakeable** (sem runtime pesado, sem JSON carregado no browser). Cada idioma tem o seu URL, renderizado no servidor na língua certa.

### Como funciona
- **URLs com prefixo:** `pt` → `/pt/…`, `en` → `/en/…` (configurado em `vite.config.ts` via `urlPatterns`).
- **Rotas nativas:** as páginas estão em `src/routes/$locale/…`; o TanStack casa `/pt/home` diretamente.
- **SSR:** `src/server.ts` envolve o handler em `paraglideMiddleware`, que define o locale por-request (AsyncLocalStorage) a partir do URL. `getLocale()` resolve a língua durante o render.
- **Deteção no `/`:** cookie `PARAGLIDE_LOCALE` → `Accept-Language` → `pt` (base). O `/` redireciona para `/{locale}/home`.
- **Seletor PT/EN:** no Navbar (`setLocale`), guarda cookie e navega para o URL localizado.

### Usar traduções num componente
```tsx
import { m } from "@/paraglide/messages";
import { getLocale } from "@/paraglide/runtime";

function Exemplo() {
  return <h1>{m.hero_title_1()}</h1>;          // string na língua ativa
}
// com parâmetro:
m.home_about_title({ anos: 28 });              // "28 anos a desenhar o amanhã."
```

Links internos usam o parâmetro de locale:
```tsx
<Link to="/$locale/servicos" params={{ locale: getLocale() }}>Serviços</Link>
```

### Adicionar / editar textos
1. Acrescenta a chave em **`messages/pt.json`** (fonte de verdade) e **`messages/en.json`**.
2. Usa `m.a_tua_chave()` no componente.
3. O `npm run build` (ou `dev`) recompila o Paraglide automaticamente.

### Adicionar um novo idioma (ex.: `fr`)
1. `messages/fr.json` com as mesmas chaves traduzidas.
2. Em `project.inlang/settings.json`, junta `"fr"` a `locales`.
3. Em `vite.config.ts`, junta o padrão de URL para `fr` (`/fr/:path`).
4. Junta `fr` ao seletor de idioma no `Navbar` e ao helper `src/lib/seo.ts`.

> Textos mantidos no original por decisão de produto: marcas (B.Analytics, M.Leads, nomes de clientes), jargão técnico (React, Snowflake, Unity, tags de stack) e contactos.

---

## 🎨 Estilos & Tema

- **Tailwind CSS 4** com design tokens em `src/styles.css` (CSS variables: `--color-*`, `--glow`, etc.).
- **Tema dark/light** via `ThemeProvider` (`src/lib/theme.tsx`), persistido em `localStorage` (`ml-theme`), alternável no Navbar.
- Fontes: **Space Grotesk** + **JetBrains Mono** (Google Fonts).

---

## 🔎 SEO

- **Meta por idioma** (`title`, `description`, `og:*`, `twitter:*`, `og:locale`) — ver `src/lib/seo.ts` + `head()` de cada rota.
- **`canonical`** e **`og:url`** apontam para o URL do locale atual.
- **`hreflang`** (`pt`, `en`, `x-default`) em cada página.
- **`<html lang>`** dinâmico.
- **`public/sitemap.xml`** — 12 URLs (6 rotas × 2 idiomas) com alternates `hreflang`.
- **`public/robots.txt`** — aponta para o sitemap.
- **Favicon**, **apple-touch-icon** e **`site.webmanifest`**.

---

## 🏗️ Build & Deploy

```bash
npm install
npm run build                    # gera .output/
node .output/server/index.mjs    # arranca o servidor de produção (porta 3000 por defeito)
```

- Preset Nitro: **`node-server`**. O output fica em `.output/` (git-ignored).
- Assets com hash são servidos com `Cache-Control: public, max-age=31536000, immutable`.
- `src/server.ts` aplica **headers de segurança** a todos os documentos HTML: HSTS, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` e uma **CSP em modo Report-Only**.


## 📌 Convenções

- Não editar ficheiros **gerados**: `src/paraglide/*` e `src/routeTree.gen.ts`.
- `messages/*.json` são a fonte de verdade das traduções.
- Variáveis de ambiente públicas usam o prefixo `VITE_`; segredos (SMTP, API keys) **nunca** no código.

---

© 1998–2026 Moonlight Comunicação Global LDA.
