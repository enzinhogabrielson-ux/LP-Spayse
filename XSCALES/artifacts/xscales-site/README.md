# XSCALES Website

Infraestrutura financeira para empresas que querem escalar sem fronteiras.

## 🚀 Quick Start

### Instalação

```bash
# Instalar dependências
npm install

# Ou usando pnpm (recomendado)
pnpm install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# O site estará disponível em http://localhost:3000
```

### Build para Produção

```bash
# Criar build otimizado
npm run build

# Preview do build
npm run serve
```

### Type Checking

```bash
# Verificar tipos TypeScript
npm run typecheck
```

## 📁 Estrutura do Projeto

```
xscales-site/
├── public/
│   ├── images/
│   │   ├── heroes/          # Hero section backgrounds
│   │   ├── solutions/       # Solution illustrations (SVG)
│   │   ├── markets/         # Market-specific images
│   │   ├── blog/           # Blog featured images
│   │   └── icons/          # Custom icons
│   ├── favicon.svg
│   └── opengraph.jpg
├── src/
│   ├── components/
│   │   ├── cards/          # Card components
│   │   ├── common/         # Shared components
│   │   ├── layout/         # Layout components
│   │   └── ui/             # shadcn/ui components
│   ├── data/               # Static data
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilities
│   ├── pages/              # Page components
│   ├── App.tsx             # Main app component
│   ├── index.css           # Global styles
│   └── main.tsx            # Entry point
├── package.json
├── tsconfig.json
├── vite.config.ts
└── VISUAL_ASSETS_GUIDE.md  # Guide for creating visual assets
```

## 🎨 Design System

### Cores

```css
/* Primary */
--xscales-primary: #FFC500;        /* Gold */

/* Backgrounds */
--xscales-bg: #050816;             /* Deep navy */
--xscales-surface: #0B1020;        /* Elevated surface */
--xscales-elevated: #10182B;       /* Card backgrounds */

/* Text */
--xscales-text: #F8FAFC;           /* Primary text */
--xscales-text-secondary: rgba(248,250,252,0.72);
--xscales-text-muted: rgba(248,250,252,0.50);
```

### Utility Classes

O projeto usa um design system customizado com utilities:

- **Buttons**: `.btn-primary`, `.btn-secondary`, `.btn-ghost`
- **Badges**: `.badge-primary`, `.badge-primary-alt`
- **Icons**: `.icon-container`, `.icon-container-sm`
- **Colors**: `.bg-xscales`, `.text-primary-gold`, `.border-subtle`
- **Effects**: `.glow-primary`, `.text-glow`, `.card-hover`

## 🧩 Componentes Principais

### Button Component

```tsx
import Button from '@/components/common/Button';

<Button variant="primary" size="lg" href="/contato">
  Falar com especialista
</Button>
```

**Variantes**: `primary`, `secondary`, `ghost`  
**Tamanhos**: `sm`, `md`, `lg`

### OptimizedImage Component

```tsx
import OptimizedImage from '@/components/common/OptimizedImage';

<OptimizedImage
  src="/images/heroes/hero-main.jpg"
  alt="Description"
  width={1920}
  height={1080}
  priority={true}
/>
```

## ♿ Acessibilidade

O site foi desenvolvido com foco em acessibilidade:

- ✅ Skip-to-content link
- ✅ ARIA labels em todos os elementos interativos
- ✅ Navegação por teclado completa
- ✅ Suporte a `prefers-reduced-motion`
- ✅ Contraste de cores WCAG AA
- ✅ Foco visível em todos os elementos

## 🎯 Performance

### Otimizações Implementadas

- ✅ Lazy loading de imagens
- ✅ Code splitting por rotas
- ✅ CSS utilities para reduzir bundle size
- ✅ Animações otimizadas com Framer Motion
- ✅ SVG inline para ícones
- ✅ Componentes otimizados sem re-renders desnecessários

### Recomendações para Produção

1. **Imagens**: Converter para WebP com fallback JPG
2. **CDN**: Servir assets estáticos via CDN
3. **Caching**: Configurar cache headers apropriados
4. **Compression**: Habilitar Gzip/Brotli no servidor

## 📦 Tecnologias

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animations
- **Wouter** - Routing
- **Radix UI** - Accessible components
- **Lucide React** - Icons

## 🔧 Configuração

### Variáveis de Ambiente

```env
# Base path (se necessário)
BASE_PATH=/

# Port (opcional)
PORT=3000
```

### Tailwind CSS

O projeto usa Tailwind CSS v4 com configuração inline no `index.css`. Todas as customizações estão na camada `@layer utilities`.

## 📝 Scripts Disponíveis

```bash
npm run dev        # Desenvolvimento
npm run build      # Build de produção
npm run serve      # Preview do build
npm run typecheck  # Verificar tipos
```

## 🎨 Assets Visuais

Para gerar os assets visuais finais, consulte o guia completo em:
**[VISUAL_ASSETS_GUIDE.md](./VISUAL_ASSETS_GUIDE.md)**

### Placeholders SVG

O projeto já inclui placeholders SVG animados para todas as soluções:
- ✅ payments.svg
- ✅ payouts.svg
- ✅ banking.svg
- ✅ cross-border.svg
- ✅ orchestration.svg
- ✅ reconciliation.svg

## 🚢 Deploy

### Build de Produção

```bash
# 1. Instalar dependências
npm install

# 2. Criar build
npm run build

# 3. Os arquivos estarão em dist/public/
```

### Plataformas Recomendadas

- **Vercel** - Deploy automático com Git
- **Netlify** - CI/CD integrado
- **AWS S3 + CloudFront** - Máximo controle
- **Cloudflare Pages** - Performance global

## 📄 Licença

© 2025 XSCALES. Todos os direitos reservados.

## 🤝 Suporte

Para questões técnicas ou suporte, entre em contato através do site.

---

**Desenvolvido com ❤️ pela equipe XSCALES**
