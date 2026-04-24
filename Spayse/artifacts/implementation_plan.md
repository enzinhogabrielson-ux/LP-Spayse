# Fase 1 — Análise e plano: Rebranding XSCALES → Spayse

Este plano detalha a transposição completa da identidade da XSCALES para a **Spayse** ("Payments, Refined."), seguindo estritamente as diretrizes do briefing `prompt-rebranding-lp.md` e a restrição de ambiente enviada.

> [!IMPORTANT]
> **Usuário, por favor, revise e aprove este plano antes da execução.**  
> Abaixo encontram-se as tabelas de conversão, impactos nos arquivos, plano de copy, riscos mapeados e uma pergunta de clarificação.

---

## 1. Inventário de impacto

Abaixo listamos os arquivos do repositório `artifacts/xscales-site/` que serão alterados nesta fase de rebranding, organizados por categoria:

- **Design tokens e CSS Customizado:**
  - `src/index.css`: Conversão de HEX para HSL; atualização de tipografia (Google Fonts import); renomeação e remoção de classes (`.bg-xscales` -> `.bg-navy-deep`, remoção de `.glow-primary`, `.text-glow`, `.font-payretailers`).
- **Fontes:**
  - `index.html`: Preload de fontes (Sora, Epilogue, JetBrains Mono).
  - `src/index.css`: Declaração de `--font-sans`, `--font-serif`, `--font-mono`.
- **Logos e Assets (`public/`):**
  - **Deletar:** `xscalewh.png`, `animxsc.mp4`, `xlent-brasil.png`, pasta `payretailers/`.
  - **Manter/Usar:** Renomear ou referenciar os arquivos já anexados (`spayselogo (1).png` como favicon, `spayselogo (3).png` como logo principal em headers/footers).
  - **Criar/Regerar:** `opengraph.jpg` utilizando a identidade nova, e novos ícones SVG se necessário no local dos favicons antigos.
- **Metadados:**
  - `index.html`: `<title>`, `<meta description>`, tags OG.
  - `package.json`: Renomear `"name": "xscales-site"` para `"name": "spayse-site"`.
  - `README.md`: Atualizar referências.
- **Arquivos de Copy e Dados (`src/data/` e `src/lib/`):**
  - `src/lib/i18n.ts`: Tradução e reescrita de copy nos idiomas (PT, EN, ES) focando em tons de voz: confiante, preciso, sofisticado e humano.
  - `src/data/company.ts`, `src/data/contact.ts`, `src/data/footer.ts`, `src/data/navigation.ts`, `src/data/solutions.ts`, `src/data/markets.ts`.
  - Remoção de `src/data/payretailersAssets.generated.json`.
- **Páginas e Componentes com hardcode ou classes alteradas (`src/pages/` e `src/components/`):**
  - Renomear menções nominais a "XSCALES" nas páginas legais (`Termos.tsx`, `Privacidade.tsx`, `Ouvidoria.tsx`).
  - Substituição da menção de vídeo antigo (`animxsc.mp4`) por placeholder minimalista ou SVG/imagem elegante (`Home.tsx`).
  - Atualização dos arquivos apontados no "Apêndice C" para remover chamadas de classes `.glow-primary` e `.text-teal-xscales`.

---

## 2. Tabela de tokens (Antes/Depois)

De acordo com o Apêndice A (Opção A) e Manual da Marca, uniremos o dual-primary `Gold`/`Teal` em um ecossistema focado no `Gold Spayse` e `Sapphire/Azure Spayse`.

| XSCALES (HEX/Token Antigo) | Spayse (Cor Nova) | Código HSL (Variável CSS Nova) | Justificativa |
|---|---|---|---|
| Background Dark (`#050816`) | **Navy Deep** | `hsl(216, 60%, 10%)` | Background primário em seções Dark |
| Card/Surface (`#0B1020`) | **Navy Mid** | `hsl(220, 60%, 16%)` | Superfícies elevadas e cards no Dark |
| Gold Primário (`#FFC500`) | **Gold Spayse** | `hsl(44, 54%, 54%)` | Accent primário (usado com parcimônia) |
| Teal Accent (`#009FAD`) | **Sapphire** | `hsl(217, 68%, 37%)` | Destaques secundários / Botões secundários |
| Teal Hover (`#00B8C8` etc.) | **Azure** | `hsl(217, 68%, 46%)` | Hover states, links |
| Background Claro (`#F8FAFC`) | **Background Light** | `hsl(214, 32%, 97%)` | Ritmo visual e leitura funcional (`#F4F7FB`) |
| Surface Clara (`#FFFFFF`) | **Frost** | `hsl(210, 33%, 95%)` | Superfícies elevadas no Light (`#EDF2F7`) |
| Texto Claro (`#F8FAFC`) | **White** | `hsl(0, 0%, 100%)` | Texto sobre fundos Dark |
| Texto Escuro (`#0F172A`) | **Slate Dark** | `hsl(212, 35%, 17%)` | Texto sobre fundos Light (`#1C2A3A`) |
| Texto Secundário Escuro | **Slate Mid** | `hsl(212, 26%, 31%)` | Hierarquia secundária (`#3A4D62`) |
| Texto Desabilitado/Legenda | **Slate Light** | `hsl(211, 22%, 63%)` | Detalhes ou borders (`#8FA0B2`) |
| Info/Secundário Claro | **Royal Blue** | `hsl(216, 61%, 26%)` | Elementos de informação |

---

## 3. Plano de reescrita de copy (Tom Spayse)

O tom exigido é "Payments, Refined.", com voz focada em precisão, confiança, sofisticação e ausência de jargões fintech inflados.

**Exemplo: Hero da Home (`home.hero...`)**
- *Atual:* "Para empresas que querem escalar sem fronteiras. Pagamentos, banking e operação internacional em uma única infraestrutura tecnológica — preparada para mercados locais e expansão global."
- *Novo (Spayse):* "A infraestrutura de pagamentos para operações que exigem precisão. Pagamentos, recebimentos e operações estruturadas em uma base sólida e confiável. Expanda sua operação sem comprometer o controle."

**Exemplo: Proposta de Valor (`home.vpTitle` e `home.vpSub`)**
- *Atual:* "Uma estrutura única para simplificar operações complexas. A XSCALES foi criada para atender empresas que precisam vender..."
- *Novo (Spayse):* "A infraestrutura definitiva para pagamentos complexos. Criada para empresas que precisam de controle absoluto sobre suas operações. Nossa base técnica integra pagamentos e gestão de forma precisa e eficiente."

**Métricas (Placeholders) em `home.stat...`:**
- Em vez de métricas massivas (ex: R$ 2bi+ volume), utilizaremos métricas de performance e estabilidade como placeholders: `[A definir] Uptime da infraestrutura`, `[A definir] Latência média de transação`.

**Botões/CTAs:**
- Eliminação de frases imperativas efusivas. Substituição por: "Falar com especialista", "Explorar soluções".

*Nota: Todas as chaves do `i18n.ts` (PT, EN, ES) serão transpostas sob esta filosofia.*

---

## 4. Riscos e pontos de atenção

> [!WARNING]
> **Páginas Legais:** Arquivos como `Termos.tsx`, `Privacidade.tsx` e `Ouvidoria.tsx` receberão um aviso de rebranding ("Atualizado em [data]. Em [mês/ano de lançamento], nossa marca foi atualizada..."). Menções nominais à XSCALES serão substituídas por Spayse, porém a **estrutura jurídica permanecerá idêntica**. Um comentário `{/* REBRAND-LEGAL: revisar */}` será incluído no JSX e exigirá auditoria final da sua equipe legal.

> [!TIP]
> **Adaptação Visual (`animxsc.mp4` e glow effects):**
> O vídeo decorativo `animxsc.mp4` contém a marca antiga XSCALES e será removido. Iremos substituí-lo por uma composição minimalista usando CSS animado baseada nas cores Navy e Sapphire. Todas as classes `.glow-primary` serão convertidas no novo sistema de "Nível de Sombra/Elevação" do Manual Spayse.

---

## 5. Perguntas de clarificação

> [!NOTE]
> Você compartilhou dois arquivos HTML em sua mensagem: `Spayse Marketing Site.html` e `XscaleAI - Agência de IA...html`. Entendo que eles devem servir puramente como **referência visual/design** do ecossistema Spayse e de suas marcas, e que devo realizar o re-branding diretamente dentro do projeto React Vite contido na pasta `artifacts/xscales-site/`. Confirma se devo apenas me inspirar naqueles HTMLs e concentrar minha atuação estritamente no repositório React Vite com as orientações do `prompt-rebranding-lp.md`?

**Aguardando seu feedback ou aprovação para prosseguir à Fase 2.**
