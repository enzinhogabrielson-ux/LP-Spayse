import { getLang, type Lang } from '@/lib/lang';

export type BlogCategoryId =
  | 'all'
  | 'payments'
  | 'banking'
  | 'international-expansion'
  | 'compliance'
  | 'technology'
  | 'markets';

export interface BlogCategoryOption {
  id: BlogCategoryId;
  label: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  categoryId: Exclude<BlogCategoryId, 'all'>;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content?: string;
}

const lang = getLang();

function byLang<T>(values: Record<Lang, T>): T {
  return values[lang];
}

const categoryLabels: Record<BlogCategoryId, string> = {
  all: byLang({ pt: 'Todos', en: 'All', es: 'Todos' }),
  payments: byLang({ pt: 'Pagamentos', en: 'Payments', es: 'Pagos' }),
  banking: byLang({ pt: 'Banking', en: 'Banking', es: 'Banca' }),
  'international-expansion': byLang({
    pt: 'Expansão Internacional',
    en: 'International Expansion',
    es: 'Expansión Internacional',
  }),
  compliance: byLang({ pt: 'Compliance', en: 'Compliance', es: 'Compliance' }),
  technology: byLang({ pt: 'Tecnologia', en: 'Technology', es: 'Tecnología' }),
  markets: byLang({ pt: 'Mercados', en: 'Markets', es: 'Mercados' }),
};

export const blogCategories: BlogCategoryOption[] = [
  { id: 'all', label: categoryLabels.all },
  { id: 'payments', label: categoryLabels.payments },
  { id: 'banking', label: categoryLabels.banking },
  { id: 'international-expansion', label: categoryLabels['international-expansion'] },
  { id: 'compliance', label: categoryLabels.compliance },
  { id: 'technology', label: categoryLabels.technology },
  { id: 'markets', label: categoryLabels.markets },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'infraestrutura-local-expansao-regional',
    categoryId: 'international-expansion',
    category: categoryLabels['international-expansion'],
    title: byLang({
      pt: 'Como a infraestrutura local influencia a expansão regional',
      en: 'How local infrastructure shapes regional expansion',
      es: 'Cómo la infraestructura local influye en la expansión regional',
    }),
    date: byLang({
      pt: '10 abr 2025',
      en: 'Apr 10, 2025',
      es: '10 abr 2025',
    }),
    readTime: byLang({
      pt: '6 min',
      en: '6 min',
      es: '6 min',
    }),
    excerpt: byLang({
      pt: 'Empresas que subestimam a complexidade operacional dos mercados locais frequentemente encontram barreiras que vão além do produto. Entenda como a infraestrutura local define o sucesso da expansão.',
      en: 'Companies that underestimate the operational complexity of local markets often hit barriers that go far beyond the product. See how local infrastructure defines expansion success.',
      es: 'Las empresas que subestiman la complejidad operativa de los mercados locales suelen encontrar barreras que van mucho más allá del producto. Entiende cómo la infraestructura local define el éxito de la expansión.',
    }),
  },
  {
    id: '2',
    slug: 'novo-padrao-operacional-pagamentos-digitais',
    categoryId: 'payments',
    category: categoryLabels.payments,
    title: byLang({
      pt: 'O novo padrão operacional dos pagamentos digitais',
      en: 'The new operational standard for digital payments',
      es: 'El nuevo estándar operativo de los pagos digitales',
    }),
    date: byLang({
      pt: '02 abr 2025',
      en: 'Apr 2, 2025',
      es: '02 abr 2025',
    }),
    readTime: byLang({
      pt: '5 min',
      en: '5 min',
      es: '5 min',
    }),
    excerpt: byLang({
      pt: 'O ambiente de pagamentos digitais evoluiu para além das transações — tornou-se uma questão de infraestrutura, confiança e capacidade de operar com rastreabilidade em múltiplos contextos.',
      en: 'Digital payments have evolved beyond transactions. They now depend on infrastructure, trust and the ability to operate with traceability across multiple contexts.',
      es: 'El entorno de pagos digitales evolucionó más allá de las transacciones: hoy depende de infraestructura, confianza y capacidad para operar con trazabilidad en múltiples contextos.',
    }),
  },
  {
    id: '3',
    slug: 'eficiencia-operacional-mercados-alta-exigencia',
    categoryId: 'markets',
    category: categoryLabels.markets,
    title: byLang({
      pt: 'Eficiência operacional em mercados de alta exigência',
      en: 'Operational efficiency in high-demand markets',
      es: 'Eficiencia operativa en mercados de alta exigencia',
    }),
    date: byLang({
      pt: '25 mar 2025',
      en: 'Mar 25, 2025',
      es: '25 mar 2025',
    }),
    readTime: byLang({
      pt: '7 min',
      en: '7 min',
      es: '7 min',
    }),
    excerpt: byLang({
      pt: 'Mercados maduros exigem mais do que velocidade — exigem precisão, conformidade e capacidade de escala sem perda de controle. Veja como empresas líderes estão estruturando suas operações.',
      en: 'Mature markets demand more than speed. They require precision, compliance and the ability to scale without losing control. See how leading companies are structuring their operations.',
      es: 'Los mercados maduros exigen más que velocidad: requieren precisión, compliance y capacidad de escalar sin perder el control. Mira cómo las empresas líderes están estructurando sus operaciones.',
    }),
  },
  {
    id: '4',
    slug: 'expansao-internacional-o-que-observar',
    categoryId: 'international-expansion',
    category: categoryLabels['international-expansion'],
    title: byLang({
      pt: 'O que empresas em crescimento precisam observar ao expandir internacionalmente',
      en: 'What growing companies need to watch when expanding internationally',
      es: 'Qué deben observar las empresas en crecimiento al expandirse internacionalmente',
    }),
    date: byLang({
      pt: '18 mar 2025',
      en: 'Mar 18, 2025',
      es: '18 mar 2025',
    }),
    readTime: byLang({
      pt: '8 min',
      en: '8 min',
      es: '8 min',
    }),
    excerpt: byLang({
      pt: 'Expandir para novos mercados é uma decisão estratégica que vai além de traduzir um produto. Exige leitura regulatória, adaptação operacional e parceiros com capacidade real de suporte local.',
      en: 'Expanding into new markets is a strategic decision that goes far beyond translating a product. It requires regulatory insight, operational adaptation and partners with real local support capacity.',
      es: 'Expandirse a nuevos mercados es una decisión estratégica que va mucho más allá de traducir un producto. Exige lectura regulatoria, adaptación operativa y socios con capacidad real de soporte local.',
    }),
  },
  {
    id: '5',
    slug: 'banking-liquidacao-base-crescimento-digital',
    categoryId: 'banking',
    category: categoryLabels.banking,
    title: byLang({
      pt: 'Banking e liquidação: a base invisível do crescimento digital',
      en: 'Banking and settlement: the invisible foundation of digital growth',
      es: 'Banca y liquidación: la base invisible del crecimiento digital',
    }),
    date: byLang({
      pt: '11 mar 2025',
      en: 'Mar 11, 2025',
      es: '11 mar 2025',
    }),
    readTime: byLang({
      pt: '6 min',
      en: '6 min',
      es: '6 min',
    }),
    excerpt: byLang({
      pt: 'Por trás de cada plataforma digital de sucesso existe uma estrutura de banking e liquidação que garante fluidez, conformidade e capacidade de crescimento. Entenda como essa base define o potencial de escala.',
      en: 'Behind every successful digital platform there is a banking and settlement structure that ensures flow, compliance and growth capacity. Understand how this foundation defines scale potential.',
      es: 'Detrás de cada plataforma digital exitosa existe una estructura de banca y liquidación que garantiza fluidez, compliance y capacidad de crecimiento. Entiende cómo esta base define el potencial de escala.',
    }),
  },
  {
    id: '6',
    slug: 'compliance-multiplas-jurisdicoes',
    categoryId: 'compliance',
    category: categoryLabels.compliance,
    title: byLang({
      pt: 'Compliance em múltiplas jurisdições: desafios e estratégias',
      en: 'Compliance across multiple jurisdictions: challenges and strategies',
      es: 'Compliance en múltiples jurisdicciones: desafíos y estrategias',
    }),
    date: byLang({
      pt: '04 mar 2025',
      en: 'Mar 4, 2025',
      es: '04 mar 2025',
    }),
    readTime: byLang({
      pt: '9 min',
      en: '9 min',
      es: '9 min',
    }),
    excerpt: byLang({
      pt: 'Operar em múltiplos países significa lidar com diferentes regimes regulatórios, requisitos de conformidade e expectativas de governance. Saiba como estruturar uma abordagem de compliance que escala.',
      en: 'Operating in multiple countries means dealing with different regulatory regimes, compliance requirements and governance expectations. Learn how to structure a scalable compliance approach.',
      es: 'Operar en múltiples países implica lidiar con distintos regímenes regulatorios, requisitos de compliance y expectativas de gobernanza. Descubre cómo estructurar un enfoque de compliance escalable.',
    }),
  },
  {
    id: '7',
    slug: 'tecnologia-pagamentos-2025',
    categoryId: 'technology',
    category: categoryLabels.technology,
    title: byLang({
      pt: 'Tecnologia em pagamentos: o que esperar para 2026 e além',
      en: 'Payments technology: what to expect in 2026 and beyond',
      es: 'Tecnología en pagos: qué esperar para 2026 y más allá',
    }),
    date: byLang({
      pt: '25 fev 2025',
      en: 'Feb 25, 2025',
      es: '25 feb 2025',
    }),
    readTime: byLang({
      pt: '7 min',
      en: '7 min',
      es: '7 min',
    }),
    excerpt: byLang({
      pt: 'A evolução tecnológica nos pagamentos está redefinindo o que significa eficiência operacional. De APIs mais inteligentes a novos protocolos de liquidação, entenda as tendências que moldarão o setor.',
      en: 'Technological evolution in payments is redefining operational efficiency. From smarter APIs to new settlement protocols, understand the trends that will shape the sector.',
      es: 'La evolución tecnológica en pagos está redefiniendo lo que significa eficiencia operativa. Desde APIs más inteligentes hasta nuevos protocolos de liquidación, entiende las tendencias que moldearán el sector.',
    }),
  },
  {
    id: '8',
    slug: 'america-latina-oportunidades-infraestrutura',
    categoryId: 'markets',
    category: categoryLabels.markets,
    title: byLang({
      pt: 'América Latina: oportunidades de infraestrutura financeira',
      en: 'Latin America: financial infrastructure opportunities',
      es: 'América Latina: oportunidades de infraestructura financiera',
    }),
    date: byLang({
      pt: '18 fev 2025',
      en: 'Feb 18, 2025',
      es: '18 feb 2025',
    }),
    readTime: byLang({
      pt: '8 min',
      en: '8 min',
      es: '8 min',
    }),
    excerpt: byLang({
      pt: 'A região apresenta um cenário único: alta demanda por serviços financeiros modernos, digitalização acelerada e um mosaico regulatório que exige parceiros com capacidade de adaptação real.',
      en: 'The region presents a unique scenario: strong demand for modern financial services, rapid digitalization and a regulatory mosaic that requires partners with real adaptation capacity.',
      es: 'La región presenta un escenario único: alta demanda por servicios financieros modernos, digitalización acelerada y un mosaico regulatorio que exige socios con verdadera capacidad de adaptación.',
    }),
  },
];
