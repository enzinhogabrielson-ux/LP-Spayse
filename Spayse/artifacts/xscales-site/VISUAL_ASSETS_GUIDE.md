# XSCALES Visual Assets Guide

## Estrutura de Diretórios

```
public/images/
├── heroes/          # Hero section backgrounds
├── solutions/       # Solution-specific illustrations
├── markets/         # Market/country imagery
├── blog/           # Blog post featured images
└── icons/          # Custom icon assets
```

## Assets Necessários

### 1. Hero Images (1920x1080px)
- **hero-main.jpg** - Abstract financial network visualization
  - Dark background (#050816)
  - Gold accents (#FFC500)
  - Network nodes and connections
  - Modern, premium feel

### 2. Solution Illustrations (800x600px)

#### Payments (payments.svg)
- Credit card with transaction flow
- Multiple payment method icons
- Real-time processing visualization
- Color: Gold on dark background

#### Payouts (payouts.svg)
- Money distribution network
- Automated transfer arrows
- Dashboard interface mockup
- Color: Gold on dark background

#### Banking (banking.svg)
- Account management interface
- Financial dashboard
- Liquidity flow diagram
- Color: Gold on dark background

#### Cross Border (cross-border.svg)
- World map with connection lines
- Currency exchange symbols
- International payment routes
- Color: Gold on dark background

#### Orchestration (orchestration.svg)
- System integration diagram
- API connection nodes
- Centralized hub visualization
- Color: Gold on dark background

#### Reconciliation (reconciliation.svg)
- Data matching visualization
- Report dashboard
- Automated reconciliation flow
- Color: Gold on dark background

### 3. Market Images (600x400px)

Para cada mercado (Brasil, México, Colômbia, Peru, Chile, Argentina):
- Skyline ou landmark icônico
- Overlay escuro com gradiente
- Elementos financeiros sutis
- Bandeira do país integrada

### 4. Blog Images (1200x630px)

Templates para categorias:
- **Tendências** - Abstract tech patterns
- **Análises** - Data visualization
- **Institucional** - Professional corporate imagery

## Ferramentas Recomendadas

### Para Geração de Imagens
1. **Midjourney** - Para imagens fotorrealistas e abstratas
2. **DALL-E 3** - Para ilustrações conceituais
3. **Stable Diffusion** - Para controle detalhado

### Para Edição
1. **Figma** - Para composições e overlays
2. **Photoshop** - Para ajustes finais
3. **SVGOMG** - Para otimização de SVGs

## Prompts Sugeridos

### Hero Background
```
Abstract financial network visualization, dark navy background (#050816), 
golden connections (#FFC500), floating data nodes, modern fintech aesthetic, 
premium quality, 8k, cinematic lighting, depth of field
```

### Solution Illustrations
```
[Solution name] illustration, isometric view, dark background, 
gold accent color (#FFC500), modern fintech style, clean lines, 
professional, vector art style, high contrast
```

### Market Images
```
[City] skyline at dusk, financial district, modern architecture, 
dark moody atmosphere, cinematic, professional photography, 
high quality, 4k
```

## Especificações Técnicas

### Formatos
- **Fotos**: WebP (com fallback JPG)
- **Ilustrações**: SVG (otimizado)
- **Ícones**: SVG inline

### Otimização
- Comprimir imagens com TinyPNG ou Squoosh
- Usar lazy loading (já implementado)
- Gerar múltiplos tamanhos para responsive

### Naming Convention
```
[category]-[name]-[size].ext

Exemplos:
hero-main-1920.webp
solution-payments-800.svg
market-brasil-600.jpg
blog-tendencias-featured-1200.webp
```

## Implementação

### Usando OptimizedImage Component

```tsx
import OptimizedImage from '@/components/common/OptimizedImage';

<OptimizedImage
  src="/images/heroes/hero-main-1920.webp"
  alt="Infraestrutura financeira XSCALES"
  width={1920}
  height={1080}
  priority={true}
  className="w-full h-auto"
/>
```

### Para Solution Cards

```tsx
<OptimizedImage
  src="/images/solutions/payments-800.svg"
  alt="Solução de Payments"
  width={800}
  height={600}
  className="w-full h-48 object-cover rounded-t-xl"
/>
```

## Checklist de Assets

### Prioridade Alta
- [ ] hero-main.jpg (Hero principal)
- [ ] payments.svg
- [ ] payouts.svg
- [ ] banking.svg
- [ ] cross-border.svg
- [ ] orchestration.svg
- [ ] reconciliation.svg

### Prioridade Média
- [ ] market-brasil.jpg
- [ ] market-mexico.jpg
- [ ] market-colombia.jpg
- [ ] market-peru.jpg
- [ ] market-chile.jpg
- [ ] market-argentina.jpg

### Prioridade Baixa
- [ ] Blog featured images (3 templates)
- [ ] Custom icons
- [ ] Partner logos

## Paleta de Cores

```css
Primary Gold: #FFC500
Background: #050816
Surface: #0B1020
Elevated: #10182B
Text: #F8FAFC
```

## Notas Importantes

1. Todas as imagens devem seguir o tema dark premium
2. Usar gold (#FFC500) como cor de destaque
3. Manter consistência visual entre todos os assets
4. Priorizar qualidade sobre quantidade
5. Testar em diferentes tamanhos de tela
