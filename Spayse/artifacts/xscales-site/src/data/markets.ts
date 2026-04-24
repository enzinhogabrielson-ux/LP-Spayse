import payRetailersAssets from '@/data/payretailersAssets.generated.json';
import { tr } from '@/lib/i18n';
import { getLang } from '@/lib/lang';

interface PayRetailersAsset {
  alt: string;
  file: string;
  width: number;
  height: number;
}

interface PayRetailersManifestEntry {
  slug: string;
  flag: PayRetailersAsset | null;
  logos: PayRetailersAsset[];
}

export interface MarketFeatureCard {
  title: string;
  description: string;
}

export interface MarketFeatureSection {
  title: string;
  lead?: string;
  description?: string;
  ctaLabel?: string;
  cards?: MarketFeatureCard[];
}

export interface MarketStat {
  value: string;
  label: string;
}

export interface MarketPaymentLogo {
  alt: string;
  src: string;
  width: number;
  height: number;
}

export interface MarketPaymentCategory {
  name: string;
  logos: MarketPaymentLogo[];
}

export interface Market {
  id: string;
  name: string;
  slug: string;
  subtitle: string;
  description: string;
  flagCode: string | null;
  flagEmoji?: string;
  flagAsset?: {
    src: string;
    alt: string;
  } | null;
  hero: {
    title: string;
    description: string;
    ctaLabel: string;
  };
  heroHighlights?: MarketStat[];
  extraSections: MarketFeatureSection[];
  stats?: {
    title: string;
    ctaLabel?: string;
    items: MarketStat[];
  } | null;
  payment?: {
    title?: string;
    country: string;
    categories: MarketPaymentCategory[];
  } | null;
  footerCta: {
    title: string;
    buttonLabel: string;
  };
  showOnOverview?: boolean;
}

const assetManifest = payRetailersAssets as PayRetailersManifestEntry[];
const assetsBySlug = new Map(assetManifest.map((entry) => [entry.slug, entry]));

function slugify(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function getLogoAsset(slug: string, alt: string): MarketPaymentLogo {
  const marketAssets = assetsBySlug.get(slug);
  const asset = marketAssets?.logos.find((item) => item.alt === alt);

  return {
    alt,
    src: asset?.file ?? `/payretailers/markets/${slug}/logos/${slugify(alt)}.png`,
    width: asset?.width ?? 0,
    height: asset?.height ?? 0,
  };
}

function getLogoAssets(slug: string, alts: string[]): MarketPaymentLogo[] {
  return alts.map((alt) => getLogoAsset(slug, alt));
}

function getFlagAsset(slug: string) {
  const flag = assetsBySlug.get(slug)?.flag;
  if (!flag) return null;

  return {
    src: flag.file,
    alt: flag.alt,
  };
}

export const markets: Market[] = [
  {
    id: 'brasil',
    name: 'Brasil',
    slug: 'brasil',
    get subtitle() { return tr('mkt.brasil.sub', getLang()) },
    get description() { return tr('mkt.brasil.stat0', getLang()) },
    flagCode: 'br',
    flagAsset: getFlagAsset('brasil'),
    hero: {
      title: 'Brasil: o principal mercado da América Latina.',
      get description() { return tr('mkt.brasil.stat1', getLang()) },
      ctaLabel: 'Contactar Ventas',
    },
    heroHighlights: [
      {
        value: '+170 milhões',
        label: 'consumidores brasileiros conectados a uma experiência Pix contínua',
      },
      {
        value: '24/7/365',
        label: 'disponibilidade operacional para pagamentos instantâneos locais',
      },
      {
        value: '+800',
        label: 'bancos sustentando a camada de proteção e validação do ecossistema',
      },
    ],
    extraSections: [
      {
        title: 'O poder do Pix no Brasil.',
        lead: 'Desbloqueie pagamentos rápidos e eficientes',
        get description() { return tr('mkt.brasil.stat2', getLang()) },
        ctaLabel: 'Converse com nossos especialistas',
        cards: [
          {
            title: 'Alcance milhões no Brasil',
            get description() { return tr('mkt.brasil.stat3', getLang()) },
          },
          {
            title: 'Combine segurança, velocidade e compliance',
            get description() { return tr('mkt.brasil.stat4', getLang()) },
          },
        ],
      },
      {
        title: 'Projetado para o compliance e o consumidor do Brasil.',
        ctaLabel: 'Expanda sua operação no Brasil →',
        cards: [
          {
            title: 'Verificação simplificada',
            get description() { return tr('mkt.brasil.stat5', getLang()) },
          },
          {
            title: 'Proteção sem interrupções',
            get description() { return tr('mkt.brasil.stat6', getLang()) },
          },
        ],
      },
    ],
    stats: null,
    payment: {
      country: 'Brasil',
      categories: [
        {
          name: 'Dinheiro',
          logos: getLogoAssets('brasil', ['boleto-rapido']),
        },
        {
          name: 'Online',
          logos: getLogoAssets('brasil', ['picpay', 'pix']),
        },
      ],
    },
    footerCta: {
      title: 'Desbloqueie novas oportunidades no Brasil',
      buttonLabel: 'Comece agora',
    },
  },
  {
    id: 'mexico',
    name: 'México',
    slug: 'mexico',
    get subtitle() { return tr('mkt.mexico.sub', getLang()) },
    get description() { return tr('mkt.mexico.stat0', getLang()) },
    flagCode: 'mx',
    flagAsset: getFlagAsset('mexico'),
    hero: {
      title: 'México: um gigante dos pagamentos digitais.',
      get description() { return tr('mkt.mexico.stat1', getLang()) },
      ctaLabel: 'Contato',
    },
    extraSections: [],
    stats: {
      title: 'O mercado no México.',
      ctaLabel: 'Vamos conversar →',
      items: [
        { value: '15 milhões', label: 'contas CoDi no México' },
        { value: '124 milhões', label: 'conexões de telefones celulares' },
        { value: '50%', label: 'de todas as compras online são internacionais' },
        { value: '$5.1 bilhões', label: 'valor estimado do mercado de carteiras digitais em 2028' },
      ],
    },
    payment: {
      title: 'Meios de pagamento na México .',
      country: 'México',
      categories: [
        {
          name: 'Dinheiro',
          logos: getLogoAssets('mexico', [
            '7eleven',
            'atiendas',
            'afirme',
            'banco-azteca',
            'banorte',
            'bbva',
            'bodega-aurrera',
            'calimax',
            'circle-k',
            'city-club',
            'extra',
            'farmacias-benavides',
            'farmacia-la-mas-barata',
            'farmacias-dr-ahorro',
            'roma',
            'farmacias-santa-maria',
            'sams-club',
            'santander',
            'scotiabank',
            'soriana',
            'super-city',
            'super-norte',
            'superama',
            'walmart',
            'walmart-express',
          ]),
        },
        {
          name: 'Cartão',
          logos: getLogoAssets('mexico', ['Master Card', 'Visa']),
        },
        {
          name: 'Online',
          logos: getLogoAssets('mexico', ['bbva', 'scotiabank', 'spei']),
        },
      ],
    },
    footerCta: {
      title: 'Amplie seu alcance no México',
      buttonLabel: 'Comece agora',
    },
  },
  {
    id: 'colombia',
    name: 'Colômbia',
    slug: 'colombia',
    get subtitle() { return tr('mkt.colombia.sub', getLang()) },
    get description() { return tr('mkt.colombia.stat0', getLang()) },
    flagCode: 'co',
    flagAsset: getFlagAsset('colombia'),
    hero: {
      title: 'Colômbia: um mercado digital em expansão.',
      get description() { return tr('mkt.colombia.stat1', getLang()) },
      ctaLabel: 'Contato',
    },
    extraSections: [],
    stats: {
      title: 'O mercado na Colômbia.',
      ctaLabel: 'Vamos conversar →',
      items: [
        { value: '4ª', label: 'maior economia da América Latina' },
        { value: '27%', label: 'crescimento anual projetado para o e-commerce de 2023 a 2026' },
        { value: '15%', label: 'das vendas de e-commerce são compras internacionais' },
        { value: '72.71%', label: 'uso de dispositivos móveis esperado até 2029' },
      ],
    },
    payment: {
      title: 'Meios de pagamento na Colombia .',
      country: 'Colômbia',
      categories: [
        {
          name: 'Dinheiro',
          logos: getLogoAssets('colombia', ['efecty']),
        },
        {
          name: 'Cartão',
          logos: getLogoAssets('colombia', ['Master Card', 'Visa']),
        },
        {
          name: 'Online',
          logos: getLogoAssets('colombia', [
            'banco-caja-social',
            'banco-bogota',
            'banco-occidente',
            'banco-falabella',
            'banco-popular',
            'bancolombia',
            'bbva',
            'citi',
            'davivienda',
            'itau',
            'nequi',
            'pse',
            'scotiebank-colpatria',
          ]),
        },
      ],
    },
    footerCta: {
      title: 'Aumente sua presença na Colômbia',
      buttonLabel: 'Comece agora',
    },
  },
  {
    id: 'peru',
    name: 'Peru',
    slug: 'peru',
    get subtitle() { return tr('mkt.peru.sub', getLang()) },
    get description() { return tr('mkt.peru.stat0', getLang()) },
    flagCode: 'pe',
    flagAsset: getFlagAsset('peru'),
    hero: {
      title: 'Peru: pagamentos digitais em alta.',
      get description() { return tr('mkt.peru.stat1', getLang()) },
      ctaLabel: 'Contato',
    },
    extraSections: [],
    stats: {
      title: 'O mercado no Peru.',
      ctaLabel: 'Vamos conversar →',
      items: [
        { value: '28%', label: 'das transações de e-commerce serão realizadas por carteiras digitais em 2027' },
        { value: '14 milhões', label: 'total de usuários de Yape e Plin' },
        { value: '64%', label: 'das compras online são feitas por meio de smartphones' },
        { value: '21%', label: 'crescimento anual nas transações internacionais entre 2023 e 2027' },
      ],
    },
    payment: {
      title: 'Meios de pagamento na Peru.',
      country: 'Peru',
      categories: [
        {
          name: 'Dinheiro',
          logos: getLogoAssets('peru', [
            'banco-ripley',
            'bbva',
            'bcp',
            'caja-arequipa',
            'caja-del-santa',
            'caja-huancayo',
            'caja-paita',
            'caja-tacna',
            'caja-trujillo',
            'edpyme-alternativa',
            'kasnet',
            'los-andes',
            'norandino',
            'pago-efectivo',
            'qapaq',
            'raiz',
            'scotiabank',
            'western-union',
          ]),
        },
        {
          name: 'Carteira eletrônica',
          logos: getLogoAssets('peru', ['Plin', 'yape']),
        },
        {
          name: 'Online',
          logos: getLogoAssets('peru', [
            'bbva',
            'bcp',
            'caja-arequipa',
            'caja-huancayo',
            'caja-tacna',
            'interbank',
            'khipu',
            'scotiabank',
          ]),
        },
      ],
    },
    footerCta: {
      title: 'Alcance novos patamares de sucesso no Peru',
      buttonLabel: 'Comece agora',
    },
  },
  {
    id: 'chile',
    name: 'Chile',
    slug: 'chile',
    get subtitle() { return tr('mkt.chile.sub', getLang()) },
    get description() { return tr('mkt.chile.stat0', getLang()) },
    flagCode: 'cl',
    flagAsset: getFlagAsset('chile'),
    hero: {
      title: 'Chile: referência em compras pelo celular.',
      get description() { return tr('mkt.chile.stat1', getLang()) },
      ctaLabel: 'Fale conosco',
    },
    extraSections: [
      {
        title: 'Processamento de cartões local e internacional.',
        get description() { return tr('mkt.chile.stat2', getLang()) },
      },
    ],
    stats: {
      title: 'O mercado no Chile.',
      ctaLabel: 'Vamos conversar →',
      items: [
        { value: '21%', label: 'dos chilenos utilizam celulares para fazer compras' },
        { value: '91%', label: 'taxa de cobertura da internet no Chile' },
        { value: '26.92%', label: 'crescimento anual esperado para os pagamentos digitais entre 2025 e 2029' },
        { value: '28.84 milhões', label: 'dispositivos móveis conectados no Chile' },
      ],
    },
    payment: {
      title: 'Meios de pagamento no Chile .',
      country: 'Chile',
      categories: [
        {
          name: 'Dinheiro',
          logos: getLogoAssets('chile', ['servipag']),
        },
        {
          name: 'Cartão',
          logos: getLogoAssets('chile', ['Webpay']),
        },
        {
          name: 'Carteira eletrônica',
          logos: getLogoAssets('chile', ['mach']),
        },
        {
          name: 'Online',
          logos: getLogoAssets('chile', [
            'banco-chile',
            'banco-estado',
            'banco-falabella',
            'BCI',
            'Fintoc',
            'itau',
            'khipu',
            'santander',
            'scotiabank',
          ]),
        },
      ],
    },
    footerCta: {
      title: 'Acelere seu crescimento no Chile',
      buttonLabel: 'Comece agora',
    },
  },
  {
    id: 'argentina',
    name: 'Argentina',
    slug: 'argentina',
    get subtitle() { return tr('mkt.argentina.sub', getLang()) },
    get description() { return tr('mkt.argentina.stat0', getLang()) },
    flagCode: 'ar',
    flagAsset: getFlagAsset('argentina'),
    hero: {
      title: 'Argentina: um polo estratégico na América Latina.',
      get description() { return tr('mkt.argentina.stat1', getLang()) },
      ctaLabel: 'Contato',
    },
    extraSections: [],
    stats: {
      title: 'O mercado na Argentina.',
      ctaLabel: 'Vamos conversar →',
      items: [
        { value: '36 milhões', label: 'total de compradores online previstos para 2029' },
        { value: '55%', label: 'das compras são feitas usando smartphones' },
        { value: '88.8%', label: 'taxa de cobertura da internet na Argentina' },
        { value: '75%', label: 'da população utiliza carteiras digitais' },
      ],
    },
    payment: {
      title: 'Meios de pagamento na Argentina .',
      country: 'Argentina',
      categories: [
        {
          name: 'Dinheiro',
          logos: getLogoAssets('argentina', ['pago-facil', 'rapipago']),
        },
        {
          name: 'Cartão',
          logos: getLogoAssets('argentina', [
            'Cabal',
            'Cencosud',
            'Maestro',
            'Master Card',
            'Naranja Visa',
            'Shopping Visa',
            'Uala',
            'Visa',
          ]),
        },
        {
          name: 'Online',
          logos: getLogoAssets('argentina', [
            'banco-ciudad',
            'banco-nacion',
            'supervielle',
            'bbva',
            'Brubank',
            'galicia',
            'GaliciaMas-Logo_(2024) 1',
            'hscb',
            'icbc',
            'khipu',
            'macro',
            'Mercado pago',
            'modo',
            'Visa Naranja',
            'NaranjaX-logo.svg 1',
            'Prex',
            'santander',
            'uala',
          ]),
        },
      ],
    },
    footerCta: {
      title: 'Acelere sua entrada no mercado da Argentina',
      buttonLabel: 'Comece agora',
    },
  },
  {
    id: 'costa-rica',
    name: 'Costa Rica',
    slug: 'costa-rica',
    get subtitle() { return tr('mkt.costa-rica.sub', getLang()) },
    get description() { return tr('mkt.costa-rica.stat0', getLang()) },
    flagCode: 'cr',
    flagAsset: getFlagAsset('costa-rica'),
    hero: {
      title: 'Costa Rica: a transformação dos pagamentos móveis e internacionais.',
      get description() { return tr('mkt.costa-rica.stat1', getLang()) },
      ctaLabel: 'Entre em contato',
    },
    extraSections: [],
    stats: {
      title: 'O mercado na Costa Rica.',
      ctaLabel: 'Vamos conversar →',
      items: [
        { value: '$4.27 bilhões', label: 'valor total das transações no mercado de pagamentos digitais' },
        { value: '71%', label: 'do volume de e-commerce vem de compras pelo celular' },
        { value: '85.13%', label: 'taxa de cobertura da internet na Costa Rica' },
        { value: '49%', label: 'de todas as compras online são internacionais' },
      ],
    },
    payment: {
      title: 'Meios de pagamento na Costa Rica .',
      country: 'Costa Rica',
      categories: [
        {
          name: 'Dinheiro',
          logos: getLogoAssets('costa-rica', ['banco-nacional']),
        },
        {
          name: 'Cartão',
          logos: getLogoAssets('costa-rica', ['Master Card', 'Visa']),
        },
        {
          name: 'Online',
          logos: getLogoAssets('costa-rica', ['banco-nacional']),
        },
      ],
    },
    footerCta: {
      title: 'Desbrave novas possibilidades na Costa Rica',
      buttonLabel: 'Comece agora',
    },
  },
  {
    id: 'equador',
    name: 'Equador',
    slug: 'equador',
    get subtitle() { return tr('mkt.equador.sub', getLang()) },
    get description() { return tr('mkt.equador.stat0', getLang()) },
    flagCode: 'ec',
    flagAsset: getFlagAsset('equador'),
    hero: {
      title: 'Equador: um protagonista na América Latina.',
      get description() { return tr('mkt.equador.stat1', getLang()) },
      ctaLabel: 'Contato',
    },
    extraSections: [],
    stats: {
      title: 'O mercado no Equador.',
      ctaLabel: 'Vamos conversar →',
      items: [
        { value: '$6.72 bilhões', label: 'valor dos pagamentos móveis feitos em pontos de venda físicos' },
        { value: '9.6%', label: 'crescimento anual esperado para os pagamentos digitais entre 2025 e 2029' },
        { value: '$11.31 bilhões', label: 'valor total das transações no mercado de pagamentos digitais' },
        { value: '83.6%', label: 'taxa de cobertura da internet no Equador' },
      ],
    },
    payment: {
      title: 'Meios de pagamento na Equador .',
      country: 'Equador',
      categories: [
        {
          name: 'Dinheiro',
          logos: getLogoAssets('equador', [
            'banco-codesarrollo',
            'banco-guayaquil',
            'banco-pichincha',
            'cacpeco',
            'chibuleo',
            'cnt',
            'cooperativo-ambato',
            'pablo-munoz-vega',
            'santa-rosa',
            'cooperco',
            'farmacias-911',
            'farmacias-economicas',
            'farmacias-medicity',
            'la-29',
            'mi-comisariato',
            'mi-vecino',
            'mushuc-runa',
            'mutualista-pichincha',
            'pharmacys',
            'rianxeira',
            'salitre',
            'sf',
            'vision-fund',
            'western-union',
            'zamora-chinchipe',
            'zona-pago',
          ]),
        },
        {
          name: 'Cartão',
          logos: getLogoAssets('equador', ['Master Card', 'Visa']),
        },
        {
          name: 'Online',
          logos: getLogoAssets('equador', ['banco-guayaquil', 'banco-pichincha']),
        },
      ],
    },
    footerCta: {
      title: 'Faça sua empresa decolar no Equador',
      buttonLabel: 'Comece agora',
    },
  },
  {
    id: 'guatemala',
    name: 'Guatemala',
    slug: 'guatemala',
    get subtitle() { return tr('mkt.guatemala.sub', getLang()) },
    get description() { return tr('mkt.guatemala.stat0', getLang()) },
    flagCode: 'gt',
    flagAsset: getFlagAsset('guatemala'),
    hero: {
      title: 'Guatemala: a maior economia da América Central.',
      get description() { return tr('mkt.guatemala.stat1', getLang()) },
      ctaLabel: 'Contato',
    },
    extraSections: [],
    stats: {
      title: 'O mercado na Guatemala.',
      ctaLabel: 'Vamos conversar →',
      items: [
        { value: '26.33%', label: 'crescimento anual esperado para os pagamentos digitais entre 2025 e 2029' },
        { value: '$25.88 milhões', label: 'volume esperado do mercado de pagamentos digitais em 2029' },
        { value: '9.7%', label: 'taxa de crescimento do e-commerce entre 2024 e 2028' },
        { value: '11 milhões', label: 'total de usuários de internet na Guatemala' },
      ],
    },
    payment: {
      title: 'Meios de pagamento na Guatemala .',
      country: 'Guatemala',
      categories: [
        {
          name: 'Dinheiro',
          logos: getLogoAssets('guatemala', [
            'bam',
            'banco-de-antigua',
            'banco-gt-continental',
            'banco-de-desarrollo',
            'fundacion-genesis',
          ]),
        },
      ],
    },
    footerCta: {
      title: 'Conecte-se a um novo Mercado',
      buttonLabel: 'Comece agora',
    },
  },
  {
    id: 'outros-mercados',
    name: 'Outros Mercados',
    slug: 'outros-mercados',
    get subtitle() { return tr('mkt.outros-mercados.sub', getLang()) },
    get description() { return tr('mkt.outros-mercados.stat0', getLang()) },
    flagCode: null,
    flagEmoji: '🌎',
    flagAsset: null,
    hero: {
      title: 'Outros Mercados',
      get description() { return tr('mkt.outros-mercados.stat1', getLang()) },
      ctaLabel: 'Fale com nosso time',
    },
    extraSections: [],
    stats: null,
    payment: null,
    footerCta: {
      title: 'Quer discutir uma nova expansão regional?',
      buttonLabel: 'Fale com nosso time',
    },
    showOnOverview: false,
  },
];

export const overviewMarkets = markets.filter((market) => market.showOnOverview !== false);
export const payRetailersMarketNavigation = overviewMarkets.filter((market) => market.payment);

export const getMarketBySlug = (slug: string): Market | undefined => {
  return markets.find((market) => market.slug === slug);
};
