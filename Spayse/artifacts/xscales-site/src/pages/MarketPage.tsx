import { useLocation } from 'wouter';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Button from '@/components/common/Button';
import {
  getMarketBySlug,
  payRetailersMarketNavigation,
  type Market,
  type MarketPaymentCategory,
  type MarketPaymentLogo,
  type MarketStat,
} from '@/data/markets';
import { getMarketLabel } from '@/data/marketLabels';
import { usePageMeta } from '@/hooks/usePageMeta';
import { getLang, type Lang } from '@/lib/lang';
import { tr } from '@/lib/i18n';

interface MarketPageProps {
  slug: string;
}

type LocalizedText = Record<Lang, string>;

interface MarketCopy {
  hero?: {
    title?: LocalizedText;
    ctaLabel?: LocalizedText;
  };
  heroHighlights?: Array<{
    value?: LocalizedText;
    label?: LocalizedText;
  }>;
  extraSections?: Array<{
    title?: LocalizedText;
    lead?: LocalizedText;
    ctaLabel?: LocalizedText;
    cards?: Array<{
      title?: LocalizedText;
    }>;
  }>;
  stats?: {
    title?: LocalizedText;
    ctaLabel?: LocalizedText;
    items?: Array<{
      value?: LocalizedText;
      label?: LocalizedText;
    }>;
  };
  payment?: {
    title?: LocalizedText;
    country?: LocalizedText;
    categoryNames?: LocalizedText[];
  };
  footerCta?: {
    title?: LocalizedText;
    buttonLabel?: LocalizedText;
  };
}

const marketHeroImages: Record<string, { src: string; position?: string }> = {
  brasil: { src: '/images/markets/brasil-hero.png', position: 'center center' },
  mexico: { src: '/images/markets/mexico-hero.png', position: 'center center' },
  colombia: { src: '/images/markets/colombia-hero.png', position: 'center center' },
  peru: { src: '/images/markets/peru-hero.png', position: 'center center' },
  chile: { src: '/images/markets/chile-hero.png', position: 'center center' },
  argentina: { src: '/images/markets/argentina-hero.png', position: 'center center' },
  'costa-rica': { src: '/images/markets/costa-rica-hero.png', position: 'center center' },
  equador: { src: '/images/markets/equador-hero.png', position: 'center center' },
  guatemala: { src: '/images/markets/guatemala-hero.png', position: 'center center' },
};

const cashLabel: LocalizedText = { pt: 'Dinheiro', en: 'Cash', es: 'Efectivo' };
const cardLabel: LocalizedText = { pt: 'Cartão', en: 'Card', es: 'Tarjeta' };
const onlineLabel: LocalizedText = { pt: 'Online', en: 'Online', es: 'Online' };
const walletLabel: LocalizedText = { pt: 'Carteira eletrônica', en: 'E-wallet', es: 'Billetera digital' };
const getStartedLabel: LocalizedText = { pt: 'Comece agora', en: 'Get started', es: 'Comienza ahora' };
const talkSalesLabel: LocalizedText = { pt: 'Falar com especialistas', en: 'Talk to sales', es: 'Hablar con ventas' };
const talkTeamLabel: LocalizedText = { pt: 'Converse com nosso time', en: 'Talk to our team', es: 'Habla con nuestro equipo' };
const letsTalkLabel: LocalizedText = { pt: 'Vamos conversar →', en: "Let's talk →", es: 'Hablemos →' };

const marketCopy: Record<string, MarketCopy> = {
  brasil: {
    hero: {
      title: {
        pt: 'Brasil: o principal mercado da América Latina.',
        en: 'Brazil: the leading market in Latin America.',
        es: 'Brasil: el principal mercado de América Latina.',
      },
      ctaLabel: talkSalesLabel,
    },
    heroHighlights: [
      {
        value: { pt: '+170 milhões', en: '+170 million', es: '+170 millones' },
        label: {
          pt: 'consumidores brasileiros conectados a uma experiência Pix contínua',
          en: 'Brazilian consumers connected to a seamless Pix experience',
          es: 'consumidores brasileños conectados a una experiencia Pix continua',
        },
      },
      {
        value: { pt: '24/7/365', en: '24/7/365', es: '24/7/365' },
        label: {
          pt: 'disponibilidade operacional para pagamentos instantâneos locais',
          en: 'operational availability for local instant payments',
          es: 'disponibilidad operativa para pagos instantáneos locales',
        },
      },
      {
        value: { pt: '+800', en: '+800', es: '+800' },
        label: {
          pt: 'bancos sustentando a camada de proteção e validação do ecossistema',
          en: 'banks supporting the ecosystem protection and validation layer',
          es: 'bancos que sostienen la capa de protección y validación del ecosistema',
        },
      },
    ],
    extraSections: [
      {
        title: {
          pt: 'O poder do Pix no Brasil.',
          en: 'The power of Pix in Brazil.',
          es: 'El poder de Pix en Brasil.',
        },
        lead: {
          pt: 'Desbloqueie pagamentos rápidos e eficientes',
          en: 'Unlock fast and efficient payments',
          es: 'Desbloquea pagos rápidos y eficientes',
        },
        ctaLabel: talkSalesLabel,
        cards: [
          {
            title: {
              pt: 'Alcance milhões no Brasil',
              en: 'Reach millions in Brazil',
              es: 'Llega a millones en Brasil',
            },
          },
          {
            title: {
              pt: 'Combine segurança, velocidade e compliance',
              en: 'Combine security, speed and compliance',
              es: 'Combina seguridad, velocidad y compliance',
            },
          },
        ],
      },
      {
        title: {
          pt: 'Projetado para o compliance e o consumidor do Brasil.',
          en: 'Designed for compliance and the Brazilian consumer.',
          es: 'Diseñado para el compliance y el consumidor brasileño.',
        },
        ctaLabel: {
          pt: 'Expanda sua operação no Brasil →',
          en: 'Expand your operation in Brazil →',
          es: 'Expande tu operación en Brasil →',
        },
        cards: [
          {
            title: {
              pt: 'Verificação simplificada',
              en: 'Simplified verification',
              es: 'Verificación simplificada',
            },
          },
          {
            title: {
              pt: 'Proteção sem interrupções',
              en: 'Protection without interruptions',
              es: 'Protección sin interrupciones',
            },
          },
        ],
      },
    ],
    payment: {
      title: {
        pt: 'Meios de pagamento no Brasil',
        en: 'Payment methods in Brazil',
        es: 'Métodos de pago en Brasil',
      },
      country: { pt: 'Brasil', en: 'Brazil', es: 'Brasil' },
      categoryNames: [cashLabel, onlineLabel],
    },
    footerCta: {
      title: {
        pt: 'Desbloqueie novas oportunidades no Brasil',
        en: 'Unlock new opportunities in Brazil',
        es: 'Desbloquea nuevas oportunidades en Brasil',
      },
      buttonLabel: getStartedLabel,
    },
  },
  mexico: {
    hero: {
      title: {
        pt: 'México: um gigante dos pagamentos digitais.',
        en: 'Mexico: a digital payments giant.',
        es: 'México: un gigante de los pagos digitales.',
      },
      ctaLabel: talkSalesLabel,
    },
    stats: {
      title: {
        pt: 'O mercado no México.',
        en: 'The market in Mexico.',
        es: 'El mercado en México.',
      },
      ctaLabel: letsTalkLabel,
      items: [
        {
          value: { pt: '15 milhões', en: '15 million', es: '15 millones' },
          label: {
            pt: 'contas CoDi no México',
            en: 'CoDi accounts in Mexico',
            es: 'cuentas CoDi en México',
          },
        },
        {
          value: { pt: '124 milhões', en: '124 million', es: '124 millones' },
          label: {
            pt: 'conexões de telefones celulares',
            en: 'mobile phone connections',
            es: 'conexiones de telefonía móvil',
          },
        },
        {
          value: { pt: '50%', en: '50%', es: '50%' },
          label: {
            pt: 'de todas as compras online são internacionais',
            en: 'of all online purchases are international',
            es: 'de todas las compras online son internacionales',
          },
        },
        {
          value: { pt: '$5,1 bilhões', en: '$5.1 billion', es: '$5.1 mil millones' },
          label: {
            pt: 'valor estimado do mercado de carteiras digitais em 2028',
            en: 'estimated value of the digital wallet market by 2028',
            es: 'valor estimado del mercado de billeteras digitales en 2028',
          },
        },
      ],
    },
    payment: {
      title: {
        pt: 'Meios de pagamento no México',
        en: 'Payment methods in Mexico',
        es: 'Métodos de pago en México',
      },
      country: { pt: 'México', en: 'Mexico', es: 'México' },
      categoryNames: [cashLabel, cardLabel, onlineLabel],
    },
    footerCta: {
      title: {
        pt: 'Amplie seu alcance no México',
        en: 'Expand your reach in Mexico',
        es: 'Amplía tu alcance en México',
      },
      buttonLabel: getStartedLabel,
    },
  },
  colombia: {
    hero: {
      title: {
        pt: 'Colômbia: um mercado digital em expansão.',
        en: 'Colombia: a booming digital market.',
        es: 'Colombia: un mercado digital en expansión.',
      },
      ctaLabel: talkSalesLabel,
    },
    stats: {
      title: {
        pt: 'O mercado na Colômbia.',
        en: 'The market in Colombia.',
        es: 'El mercado en Colombia.',
      },
      ctaLabel: letsTalkLabel,
      items: [
        {
          value: { pt: '4ª', en: '4th', es: '4.º' },
          label: {
            pt: 'maior economia da América Latina',
            en: 'largest economy in Latin America',
            es: 'economía más grande de América Latina',
          },
        },
        {
          value: { pt: '27%', en: '27%', es: '27%' },
          label: {
            pt: 'crescimento anual projetado para o e-commerce de 2023 a 2026',
            en: 'projected annual ecommerce growth from 2023 to 2026',
            es: 'crecimiento anual proyectado para el ecommerce de 2023 a 2026',
          },
        },
        {
          value: { pt: '15%', en: '15%', es: '15%' },
          label: {
            pt: 'das vendas de e-commerce são compras internacionais',
            en: 'of ecommerce sales are international purchases',
            es: 'de las ventas de ecommerce son compras internacionales',
          },
        },
        {
          value: { pt: '72,71%', en: '72.71%', es: '72,71%' },
          label: {
            pt: 'uso de dispositivos móveis esperado até 2029',
            en: 'expected mobile device usage by 2029',
            es: 'uso esperado de dispositivos móviles hasta 2029',
          },
        },
      ],
    },
    payment: {
      title: {
        pt: 'Meios de pagamento na Colômbia',
        en: 'Payment methods in Colombia',
        es: 'Métodos de pago en Colombia',
      },
      country: { pt: 'Colômbia', en: 'Colombia', es: 'Colombia' },
      categoryNames: [cashLabel, cardLabel, onlineLabel],
    },
    footerCta: {
      title: {
        pt: 'Aumente sua presença na Colômbia',
        en: 'Increase your presence in Colombia',
        es: 'Aumenta tu presencia en Colombia',
      },
      buttonLabel: getStartedLabel,
    },
  },
  peru: {
    hero: {
      title: {
        pt: 'Peru: pagamentos digitais em alta.',
        en: 'Peru: digital payments on the rise.',
        es: 'Perú: pagos digitales en ascenso.',
      },
      ctaLabel: talkSalesLabel,
    },
    stats: {
      title: {
        pt: 'O mercado no Peru.',
        en: 'The market in Peru.',
        es: 'El mercado en Perú.',
      },
      ctaLabel: letsTalkLabel,
      items: [
        {
          value: { pt: '28%', en: '28%', es: '28%' },
          label: {
            pt: 'das transações de e-commerce serão realizadas por carteiras digitais em 2027',
            en: 'of ecommerce transactions will be made through digital wallets in 2027',
            es: 'de las transacciones de ecommerce se realizarán con billeteras digitales en 2027',
          },
        },
        {
          value: { pt: '14 milhões', en: '14 million', es: '14 millones' },
          label: {
            pt: 'total de usuários de Yape e Plin',
            en: 'total Yape and Plin users',
            es: 'total de usuarios de Yape y Plin',
          },
        },
        {
          value: { pt: '64%', en: '64%', es: '64%' },
          label: {
            pt: 'das compras online são feitas por meio de smartphones',
            en: 'of online purchases are made through smartphones',
            es: 'de las compras online se hacen desde smartphones',
          },
        },
        {
          value: { pt: '21%', en: '21%', es: '21%' },
          label: {
            pt: 'crescimento anual nas transações internacionais entre 2023 e 2027',
            en: 'annual growth in international transactions between 2023 and 2027',
            es: 'crecimiento anual de las transacciones internacionales entre 2023 y 2027',
          },
        },
      ],
    },
    payment: {
      title: {
        pt: 'Meios de pagamento no Peru',
        en: 'Payment methods in Peru',
        es: 'Métodos de pago en Perú',
      },
      country: { pt: 'Peru', en: 'Peru', es: 'Perú' },
      categoryNames: [cashLabel, walletLabel, onlineLabel],
    },
    footerCta: {
      title: {
        pt: 'Alcance novos patamares de sucesso no Peru',
        en: 'Reach new levels of success in Peru',
        es: 'Alcanza nuevos niveles de éxito en Perú',
      },
      buttonLabel: getStartedLabel,
    },
  },
  chile: {
    hero: {
      title: {
        pt: 'Chile: referência em compras pelo celular.',
        en: 'Chile: a leader in mobile shopping.',
        es: 'Chile: referencia en compras por celular.',
      },
      ctaLabel: talkSalesLabel,
    },
    extraSections: [
      {
        title: {
          pt: 'Processamento de cartões local e internacional.',
          en: 'Local and international card processing.',
          es: 'Procesamiento de tarjetas local e internacional.',
        },
      },
    ],
    stats: {
      title: {
        pt: 'O mercado no Chile.',
        en: 'The market in Chile.',
        es: 'El mercado en Chile.',
      },
      ctaLabel: letsTalkLabel,
      items: [
        {
          value: { pt: '21%', en: '21%', es: '21%' },
          label: {
            pt: 'dos chilenos utilizam celulares para fazer compras',
            en: 'of Chileans use mobile phones for shopping',
            es: 'de los chilenos usan celulares para comprar',
          },
        },
        {
          value: { pt: '91%', en: '91%', es: '91%' },
          label: {
            pt: 'taxa de cobertura da internet no Chile',
            en: 'internet coverage rate in Chile',
            es: 'tasa de cobertura de internet en Chile',
          },
        },
        {
          value: { pt: '26,92%', en: '26.92%', es: '26,92%' },
          label: {
            pt: 'crescimento anual esperado para os pagamentos digitais entre 2025 e 2029',
            en: 'expected annual growth for digital payments between 2025 and 2029',
            es: 'crecimiento anual esperado para los pagos digitales entre 2025 y 2029',
          },
        },
        {
          value: { pt: '28,84 milhões', en: '28.84 million', es: '28,84 millones' },
          label: {
            pt: 'dispositivos móveis conectados no Chile',
            en: 'connected mobile devices in Chile',
            es: 'dispositivos móviles conectados en Chile',
          },
        },
      ],
    },
    payment: {
      title: {
        pt: 'Meios de pagamento no Chile',
        en: 'Payment methods in Chile',
        es: 'Métodos de pago en Chile',
      },
      country: { pt: 'Chile', en: 'Chile', es: 'Chile' },
      categoryNames: [cashLabel, cardLabel, walletLabel, onlineLabel],
    },
    footerCta: {
      title: {
        pt: 'Acelere seu crescimento no Chile',
        en: 'Accelerate your growth in Chile',
        es: 'Acelera tu crecimiento en Chile',
      },
      buttonLabel: getStartedLabel,
    },
  },
  argentina: {
    hero: {
      title: {
        pt: 'Argentina: um polo estratégico na América Latina.',
        en: 'Argentina: a strategic hub in Latin America.',
        es: 'Argentina: un polo estratégico en América Latina.',
      },
      ctaLabel: talkSalesLabel,
    },
    stats: {
      title: {
        pt: 'O mercado na Argentina.',
        en: 'The market in Argentina.',
        es: 'El mercado en Argentina.',
      },
      ctaLabel: letsTalkLabel,
      items: [
        {
          value: { pt: '36 milhões', en: '36 million', es: '36 millones' },
          label: {
            pt: 'total de compradores online previstos para 2029',
            en: 'projected total online shoppers by 2029',
            es: 'total proyectado de compradores online para 2029',
          },
        },
        {
          value: { pt: '55%', en: '55%', es: '55%' },
          label: {
            pt: 'das compras são feitas usando smartphones',
            en: 'of purchases are made using smartphones',
            es: 'de las compras se hacen usando smartphones',
          },
        },
        {
          value: { pt: '88,8%', en: '88.8%', es: '88,8%' },
          label: {
            pt: 'taxa de cobertura da internet na Argentina',
            en: 'internet coverage rate in Argentina',
            es: 'tasa de cobertura de internet en Argentina',
          },
        },
        {
          value: { pt: '75%', en: '75%', es: '75%' },
          label: {
            pt: 'da população utiliza carteiras digitais',
            en: 'of the population uses digital wallets',
            es: 'de la población usa billeteras digitales',
          },
        },
      ],
    },
    payment: {
      title: {
        pt: 'Meios de pagamento na Argentina',
        en: 'Payment methods in Argentina',
        es: 'Métodos de pago en Argentina',
      },
      country: { pt: 'Argentina', en: 'Argentina', es: 'Argentina' },
      categoryNames: [cashLabel, cardLabel, onlineLabel],
    },
    footerCta: {
      title: {
        pt: 'Acelere sua entrada no mercado da Argentina',
        en: 'Accelerate your entry into the Argentine market',
        es: 'Acelera tu entrada al mercado argentino',
      },
      buttonLabel: getStartedLabel,
    },
  },
  'costa-rica': {
    hero: {
      title: {
        pt: 'Costa Rica: a transformação dos pagamentos móveis e internacionais.',
        en: 'Costa Rica: the transformation of mobile and international payments.',
        es: 'Costa Rica: la transformación de los pagos móviles e internacionales.',
      },
      ctaLabel: talkTeamLabel,
    },
    stats: {
      title: {
        pt: 'O mercado na Costa Rica.',
        en: 'The market in Costa Rica.',
        es: 'El mercado en Costa Rica.',
      },
      ctaLabel: letsTalkLabel,
      items: [
        {
          value: { pt: '$4,27 bilhões', en: '$4.27 billion', es: '$4,27 mil millones' },
          label: {
            pt: 'valor total das transações no mercado de pagamentos digitais',
            en: 'total transaction value in the digital payments market',
            es: 'valor total de las transacciones en el mercado de pagos digitales',
          },
        },
        {
          value: { pt: '71%', en: '71%', es: '71%' },
          label: {
            pt: 'do volume de e-commerce vem de compras pelo celular',
            en: 'of ecommerce volume comes from mobile purchases',
            es: 'del volumen de ecommerce proviene de compras por celular',
          },
        },
        {
          value: { pt: '85,13%', en: '85.13%', es: '85,13%' },
          label: {
            pt: 'taxa de cobertura da internet na Costa Rica',
            en: 'internet coverage rate in Costa Rica',
            es: 'tasa de cobertura de internet en Costa Rica',
          },
        },
        {
          value: { pt: '49%', en: '49%', es: '49%' },
          label: {
            pt: 'de todas as compras online são internacionais',
            en: 'of all online purchases are international',
            es: 'de todas las compras online son internacionales',
          },
        },
      ],
    },
    payment: {
      title: {
        pt: 'Meios de pagamento na Costa Rica',
        en: 'Payment methods in Costa Rica',
        es: 'Métodos de pago en Costa Rica',
      },
      country: { pt: 'Costa Rica', en: 'Costa Rica', es: 'Costa Rica' },
      categoryNames: [cashLabel, cardLabel, onlineLabel],
    },
    footerCta: {
      title: {
        pt: 'Desbrave novas possibilidades na Costa Rica',
        en: 'Unlock new possibilities in Costa Rica',
        es: 'Desbloquea nuevas posibilidades en Costa Rica',
      },
      buttonLabel: getStartedLabel,
    },
  },
  equador: {
    hero: {
      title: {
        pt: 'Equador: um protagonista na América Latina.',
        en: 'Ecuador: a protagonist in Latin America.',
        es: 'Ecuador: un protagonista en América Latina.',
      },
      ctaLabel: talkSalesLabel,
    },
    stats: {
      title: {
        pt: 'O mercado no Equador.',
        en: 'The market in Ecuador.',
        es: 'El mercado en Ecuador.',
      },
      ctaLabel: letsTalkLabel,
      items: [
        {
          value: { pt: '$6,72 bilhões', en: '$6.72 billion', es: '$6,72 mil millones' },
          label: {
            pt: 'valor dos pagamentos móveis feitos em pontos de venda físicos',
            en: 'value of mobile payments made at physical points of sale',
            es: 'valor de los pagos móviles realizados en puntos de venta físicos',
          },
        },
        {
          value: { pt: '9,6%', en: '9.6%', es: '9,6%' },
          label: {
            pt: 'crescimento anual esperado para os pagamentos digitais entre 2025 e 2029',
            en: 'expected annual growth for digital payments between 2025 and 2029',
            es: 'crecimiento anual esperado para los pagos digitales entre 2025 y 2029',
          },
        },
        {
          value: { pt: '$11,31 bilhões', en: '$11.31 billion', es: '$11,31 mil millones' },
          label: {
            pt: 'valor total das transações no mercado de pagamentos digitais',
            en: 'total transaction value in the digital payments market',
            es: 'valor total de las transacciones en el mercado de pagos digitales',
          },
        },
        {
          value: { pt: '83,6%', en: '83.6%', es: '83,6%' },
          label: {
            pt: 'taxa de cobertura da internet no Equador',
            en: 'internet coverage rate in Ecuador',
            es: 'tasa de cobertura de internet en Ecuador',
          },
        },
      ],
    },
    payment: {
      title: {
        pt: 'Meios de pagamento no Equador',
        en: 'Payment methods in Ecuador',
        es: 'Métodos de pago en Ecuador',
      },
      country: { pt: 'Equador', en: 'Ecuador', es: 'Ecuador' },
      categoryNames: [cashLabel, cardLabel, onlineLabel],
    },
    footerCta: {
      title: {
        pt: 'Faça sua empresa decolar no Equador',
        en: 'Help your company take off in Ecuador',
        es: 'Haz despegar tu empresa en Ecuador',
      },
      buttonLabel: getStartedLabel,
    },
  },
  guatemala: {
    hero: {
      title: {
        pt: 'Guatemala: a maior economia da América Central.',
        en: 'Guatemala: the largest economy in Central America.',
        es: 'Guatemala: la mayor economía de Centroamérica.',
      },
      ctaLabel: talkSalesLabel,
    },
    stats: {
      title: {
        pt: 'O mercado na Guatemala.',
        en: 'The market in Guatemala.',
        es: 'El mercado en Guatemala.',
      },
      ctaLabel: letsTalkLabel,
      items: [
        {
          value: { pt: '26,33%', en: '26.33%', es: '26,33%' },
          label: {
            pt: 'crescimento anual esperado para os pagamentos digitais entre 2025 e 2029',
            en: 'expected annual growth for digital payments between 2025 and 2029',
            es: 'crecimiento anual esperado para los pagos digitales entre 2025 y 2029',
          },
        },
        {
          value: { pt: '$25,88 milhões', en: '$25.88 million', es: '$25,88 millones' },
          label: {
            pt: 'volume esperado do mercado de pagamentos digitais em 2029',
            en: 'expected digital payments market volume in 2029',
            es: 'volumen esperado del mercado de pagos digitales en 2029',
          },
        },
        {
          value: { pt: '9,7%', en: '9.7%', es: '9,7%' },
          label: {
            pt: 'taxa de crescimento do e-commerce entre 2024 e 2028',
            en: 'ecommerce growth rate between 2024 and 2028',
            es: 'tasa de crecimiento del ecommerce entre 2024 y 2028',
          },
        },
        {
          value: { pt: '11 milhões', en: '11 million', es: '11 millones' },
          label: {
            pt: 'total de usuários de internet na Guatemala',
            en: 'total internet users in Guatemala',
            es: 'total de usuarios de internet en Guatemala',
          },
        },
      ],
    },
    payment: {
      title: {
        pt: 'Meios de pagamento na Guatemala',
        en: 'Payment methods in Guatemala',
        es: 'Métodos de pago en Guatemala',
      },
      country: { pt: 'Guatemala', en: 'Guatemala', es: 'Guatemala' },
      categoryNames: [cashLabel],
    },
    footerCta: {
      title: {
        pt: 'Conecte-se a um novo mercado',
        en: 'Connect to a new market',
        es: 'Conéctate a un nuevo mercado',
      },
      buttonLabel: getStartedLabel,
    },
  },
  'outros-mercados': {
    hero: {
      title: {
        pt: 'Outros Mercados',
        en: 'Other Markets',
        es: 'Otros Mercados',
      },
      ctaLabel: talkTeamLabel,
    },
    footerCta: {
      title: {
        pt: 'Quer discutir uma nova expansão regional?',
        en: 'Want to discuss a new regional expansion?',
        es: '¿Quieres hablar sobre una nueva expansión regional?',
      },
      buttonLabel: talkTeamLabel,
    },
  },
};

function localizedValue(value: LocalizedText | undefined, lang: Lang) {
  return value ? value[lang] : undefined;
}

function localizedFallbackLabel(key: 'categories' | 'logos' | 'block', count: number, lang: Lang) {
  const labels = {
    categories: {
      pt: count === 1 ? 'categoria local de pagamento mapeada' : 'categorias locais de pagamento mapeadas',
      en: count === 1 ? 'mapped local payment category' : 'mapped local payment categories',
      es: count === 1 ? 'categoría local de pago mapeada' : 'categorías locales de pago mapeadas',
    },
    logos: {
      pt: 'logos e arranjos locais organizados para esta operação',
      en: 'local logos and arrangements organized for this operation',
      es: 'logos y esquemas locales organizados para esta operación',
    },
    block: {
      pt: count === 1 ? 'bloco estratégico adicional sobre o mercado' : 'blocos estratégicos adicionais sobre o mercado',
      en: count === 1 ? 'additional strategic block about the market' : 'additional strategic blocks about the market',
      es: count === 1 ? 'bloque estratégico adicional sobre el mercado' : 'bloques estratégicos adicionales sobre el mercado',
    },
  };

  return labels[key][lang];
}

function MarketFlag({
  name,
  flagCode,
  flagAsset,
  size = 56,
}: {
  name: string;
  flagCode: string | null;
  flagAsset?: { src: string; alt: string } | null;
  size?: number;
}) {
  if (flagAsset) {
    return (
      <span
        className="inline-flex items-center justify-center overflow-hidden rounded-full border border-subtle bg-white shadow-[0_14px_30px_-22px_rgba(0,0,0,0.75)]"
        style={{ width: size, height: size }}
      >
        <img src={flagAsset.src} alt={flagAsset.alt} className="h-full w-full object-cover" loading="lazy" />
      </span>
    );
  }

  if (flagCode) {
    return (
      <span
        className="inline-flex items-center justify-center overflow-hidden rounded-full border border-subtle bg-white shadow-[0_14px_30px_-22px_rgba(0,0,0,0.75)]"
        style={{ width: size, height: size }}
      >
        <img
          src={`https://flagcdn.com/${flagCode}.svg`}
          alt={name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </span>
    );
  }

  return (
    <span
      className="inline-flex items-center justify-center rounded-full border border-subtle bg-elevated text-2xl shadow-[0_14px_30px_-22px_rgba(0,0,0,0.75)]"
      style={{ width: size, height: size }}
      role="img"
      aria-label={name}
    >
      🌎
    </span>
  );
}

function getHeroHighlights(market: Market, lang: Lang): MarketStat[] {
  if (market.heroHighlights?.length) {
    return market.heroHighlights.slice(0, 3);
  }

  return [];
}

function getLogoBounds(logo: MarketPaymentLogo) {
  const width = logo.width || 160;
  const height = logo.height || 60;
  const ratio = width / Math.max(height, 1);

  if (ratio >= 3.8) return { maxWidth: Math.min(width, 148), maxHeight: Math.min(height, 28) };
  if (ratio >= 2.6) return { maxWidth: Math.min(width, 132), maxHeight: Math.min(height, 34) };
  if (ratio >= 1.6) return { maxWidth: Math.min(width, 112), maxHeight: Math.min(height, 40) };
  if (ratio >= 1.1) return { maxWidth: Math.min(width, 96), maxHeight: Math.min(height, 44) };

  return { maxWidth: Math.min(width, 82), maxHeight: Math.min(height, 50) };
}

function getMarketViewData(market: Market, lang: Lang) {
  const copy = marketCopy[market.slug];
  const name = getMarketLabel(market.id, lang, market.name);

  const hero = {
    ...market.hero,
    title: localizedValue(copy?.hero?.title, lang) ?? market.hero.title,
    ctaLabel: localizedValue(copy?.hero?.ctaLabel, lang) ?? market.hero.ctaLabel,
  };

  const heroHighlights = getHeroHighlights(market, lang).map((item, index) => ({
    value: localizedValue(copy?.heroHighlights?.[index]?.value, lang) ?? item.value,
    label: localizedValue(copy?.heroHighlights?.[index]?.label, lang) ?? item.label,
  }));

  const extraSections = market.extraSections.map((section, index) => ({
    ...section,
    title: localizedValue(copy?.extraSections?.[index]?.title, lang) ?? section.title,
    lead: localizedValue(copy?.extraSections?.[index]?.lead, lang) ?? section.lead,
    ctaLabel: localizedValue(copy?.extraSections?.[index]?.ctaLabel, lang) ?? section.ctaLabel,
    cards: section.cards?.map((card, cardIndex) => ({
      ...card,
      title: localizedValue(copy?.extraSections?.[index]?.cards?.[cardIndex]?.title, lang) ?? card.title,
    })),
  }));

  const stats = market.stats
    ? {
        ...market.stats,
        title: localizedValue(copy?.stats?.title, lang) ?? market.stats.title,
        ctaLabel: localizedValue(copy?.stats?.ctaLabel, lang) ?? market.stats.ctaLabel,
        items: market.stats.items.map((item, index) => ({
          value: localizedValue(copy?.stats?.items?.[index]?.value, lang) ?? item.value,
          label: localizedValue(copy?.stats?.items?.[index]?.label, lang) ?? item.label,
        })),
      }
    : null;

  const payment = market.payment
    ? {
        ...market.payment,
        title: localizedValue(copy?.payment?.title, lang) ?? market.payment.title,
        country: localizedValue(copy?.payment?.country, lang) ?? name,
        categories: market.payment.categories.map((category: MarketPaymentCategory, index) => ({
          ...category,
          name: localizedValue(copy?.payment?.categoryNames?.[index], lang) ?? category.name,
        })),
      }
    : null;

  const footerCta = {
    title: localizedValue(copy?.footerCta?.title, lang) ?? market.footerCta.title,
    buttonLabel: localizedValue(copy?.footerCta?.buttonLabel, lang) ?? market.footerCta.buttonLabel,
  };

  return {
    ...market,
    name,
    hero,
    heroHighlights,
    extraSections,
    stats,
    payment,
    footerCta,
  };
}

export default function MarketPage({ slug }: MarketPageProps) {
  const lang = getLang();
  const t = (key: string) => tr(key, lang);
  const rawMarket = getMarketBySlug(slug);
  const market = rawMarket ? getMarketViewData(rawMarket, lang) : null;
  const [, navigate] = useLocation();

  usePageMeta({
    title: market ? `${market.name} | ${t('mkt.breadcrumbMarkets')} | Spayse` : `${t('mkt.breadcrumbMarkets')} | Spayse`,
    description: market?.description,
  });

  if (!market) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-navy-deep">
        <div className="text-center">
          <p className="text-muted-60">{t('mkt.marketNotFound')}</p>
          <div className="mt-4">
            <Button href="/mercados" variant="primary">
              {t('mkt.viewAllMarkets')}
            </Button>
          </div>
        </div>
      </main>
    );
  }

  const heroImage = marketHeroImages[market.slug];
  const payment = market.payment;

  return (
    <main id="main-content" className="bg-navy-deep text-spayse">
      <section className="relative overflow-hidden border-b border-subtle pb-20 pt-28 md:pb-24 md:pt-36">
        {heroImage ? (
          <>
            <img
              src={heroImage.src}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: heroImage.position ?? 'center center' }}
            />
            <div className="absolute inset-0 bg-[rgba(5,8,22,0.42)]" aria-hidden="true" />
            <div
              className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,22,0.96)_0%,rgba(5,8,22,0.92)_36%,rgba(5,8,22,0.74)_60%,rgba(5,8,22,0.38)_82%,rgba(5,8,22,0.12)_100%)] md:bg-[linear-gradient(90deg,rgba(5,8,22,0.96)_0%,rgba(5,8,22,0.9)_32%,rgba(5,8,22,0.72)_56%,rgba(5,8,22,0.34)_78%,rgba(5,8,22,0.08)_100%)]"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,22,0.14)_0%,rgba(5,8,22,0.24)_30%,rgba(5,8,22,0.56)_72%,rgba(5,8,22,0.9)_100%)]"
              aria-hidden="true"
            />
          </>
        ) : (
          <>
            <div className="grid-pattern absolute inset-0 opacity-80" aria-hidden="true" />
            <div className="absolute -left-24 top-20 h-[240px] w-[240px] glow-gold" aria-hidden="true" />
            <div className="absolute -right-20 top-1/3 h-[280px] w-[280px] glow-sapphire" aria-hidden="true" />
          </>
        )}

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-5xl">
            <div className="relative flex flex-col gap-10">
              <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-white/70">
                <span onClick={() => navigate('/')} className="cursor-pointer transition-colors hover:text-accent-gold">
                  {t('mkt.breadcrumbHome')}
                </span>
                <ChevronRight size={14} />
                <span
                  onClick={() => navigate('/mercados')}
                  className="cursor-pointer transition-colors hover:text-accent-gold"
                >
                  {t('mkt.breadcrumbMarkets')}
                </span>
                <ChevronRight size={14} />
                <span className="font-semibold text-white">{market.name}</span>
              </nav>

              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <MarketFlag name={market.name} flagCode={market.flagCode} flagAsset={market.flagAsset} size={68} />
                  <span className="badge-primary-alt">{t('mkt.marketLatam')}</span>
                  {payment ? <span className="badge-sapphire">{payment.categories.length} {t('mkt.localCategories')}</span> : null}
                </div>

                <h1
                  className="mt-8 max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl text-center md:text-left"
                  style={{ letterSpacing: '-0.035em' }}
                >
                  {market.hero.title}
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl text-center md:text-left">
                  {market.hero.description}
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                  <Button href="/contato" variant="primary" size="lg" className="w-full sm:w-auto">
                    {market.hero.ctaLabel || t('mkt.talkExpert')}
                    <ArrowRight size={16} />
                  </Button>

                  {payment ? (
                    <a
                      href="#meios-de-pagamento"
                      className="btn-secondary focus-ring inline-flex items-center justify-center gap-2 bg-black/20 backdrop-blur-[2px] w-full sm:w-auto"
                    >
                      {t('mkt.viewPayments')}
                    </a>
                  ) : null}
                </div>

                {market.heroHighlights.length ? (
                  <div className="mt-14 grid gap-4 md:grid-cols-3">
                    {market.heroHighlights.map((item, index) => (
                      <article
                        key={`${item.value}-${item.label}`}
                        className="rounded-[24px] border border-white/10 bg-black/40 px-5 py-5 shadow-[0_30px_60px_-42px_rgba(0,0,0,0.85)] backdrop-blur-[2px]"
                      >
                        <p
                          className={`text-2xl font-bold tracking-[-0.03em] md:text-3xl ${
                            index === 1 ? 'text-accent-sapphire' : 'text-accent-gold'
                          }`}
                        >
                          {item.value}
                        </p>
                        <p className="mt-3 text-sm leading-6 text-white/70">{item.label}</p>
                      </article>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      {market.extraSections.map((section, index) => {
        const isAlternate = index % 2 !== 0;

        if (isAlternate) {
          return (
            <section
              key={`${market.slug}-section-${section.title}`}
              className="py-24 md:py-32 bg-navy-deep border-t border-b border-subtle"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                  <span className="badge-primary-alt">{t('mkt.marketView')}</span>
                  <h2
                    className="mt-6 text-[36px] font-bold leading-[1.1] text-white md:text-[46px]"
                    style={{ letterSpacing: '-0.03em' }}
                  >
                    {section.title}
                  </h2>
                  {section.lead ? <p className="mt-6 text-xl font-medium leading-relaxed text-accent-gold">{section.lead}</p> : null}
                  {section.description ? <p className="mt-5 text-lg leading-relaxed text-muted-60">{section.description}</p> : null}
                  {section.ctaLabel ? (
                    <div className="mt-8">
                      <span
                        onClick={() => navigate('/contato')}
                        className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-accent-gold transition-opacity hover:opacity-80"
                      >
                        {section.ctaLabel}
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  ) : null}
                </div>

                {section.cards?.length ? (
                  <div className="grid gap-6 md:grid-cols-2">
                    {section.cards.map((card, idx) => (
                      <article
                        key={card.title}
                        className="group relative rounded-[24px] bg-[#0A0E1A] border border-[rgba(255,255,255,0.06)] p-8 transition-all hover:border-[rgba(201,168,76,0.3)] hover:bg-[#0C1222]"
                        style={{
                          boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
                        }}
                      >
                        <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-[#C9A84C]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        <div className="flex flex-col sm:flex-row items-start gap-5">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[rgba(201,168,76,0.08)] flex items-center justify-center border border-[rgba(201,168,76,0.15)] group-hover:bg-[rgba(201,168,76,0.15)] transition-colors">
                            <span className="text-[#C9A84C] font-bold text-lg">{idx + 1}</span>
                          </div>
                          <div>
                            <p className="text-2xl font-bold leading-tight text-white group-hover:text-[#C9A84C] transition-colors" style={{ letterSpacing: '-0.02em' }}>
                              {card.title}
                            </p>
                            {card.description && <p className="mt-3 text-base leading-relaxed text-muted-60">{card.description}</p>}
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : null}
              </div>
            </section>
          );
        }

        // Standard Layout for index 0, 2, etc.
        return (
          <section
            key={`${market.slug}-section-${section.title}`}
            className="theme-light py-20 md:py-24 border-y border-subtle bg-section-light"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-10 xl:grid-cols-[minmax(0,420px)_minmax(0,1fr)] xl:items-start">
                <div className="max-w-xl flex flex-col items-center text-center md:items-start md:text-left">
                  <span className="badge-primary-alt self-center md:self-start">{t('mkt.marketView')}</span>

                  <h2
                    className="mt-6 text-[34px] font-bold leading-[1.1] text-white md:text-[44px]"
                    style={{ letterSpacing: '-0.04em' }}
                  >
                    {section.title}
                  </h2>

                  {section.lead ? <p className="mt-5 text-xl font-semibold leading-8 text-accent-gold">{section.lead}</p> : null}
                  {section.description ? <p className="mt-5 text-base leading-8 text-muted-62">{section.description}</p> : null}

                  {section.ctaLabel ? (
                    <div className="mt-8 flex justify-center md:justify-start">
                      <span
                        onClick={() => navigate('/contato')}
                        className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-accent-gold transition-opacity hover:opacity-80"
                      >
                        {section.ctaLabel}
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  ) : null}
                </div>

                {section.cards?.length ? (
                  <div className="grid gap-5 md:grid-cols-2">
                    {section.cards.map((card) => (
                      <article
                        key={card.title}
                        className="card-hover rounded-[28px] bg-elevated p-7 shadow-[0_34px_80px_-58px_rgba(0,0,0,0.95)]"
                      >
                        <p className="text-2xl font-semibold leading-8 text-white" style={{ letterSpacing: '-0.03em' }}>
                          {card.title}
                        </p>
                        <p className="mt-4 text-base leading-7 text-muted-60">{card.description}</p>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="card-hover rounded-[32px] bg-elevated p-8 shadow-[0_34px_80px_-58px_rgba(0,0,0,0.95)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-gold">{t('mkt.localContext')}</p>
                    <p className="mt-4 text-2xl font-semibold leading-9 text-white" style={{ letterSpacing: '-0.03em' }}>
                      {section.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {market.stats ? (
        <section className="bg-navy-deep py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <span className="badge-primary-alt">{t('mkt.indicators')}</span>
                <h2
                  className="mt-6 text-[34px] font-bold leading-[1.1] text-white md:text-[44px]"
                  style={{ letterSpacing: '-0.04em' }}
                >
                  {market.stats.title}
                </h2>
              </div>

              <span
                onClick={() => navigate('/contato')}
                className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-accent-gold transition-opacity hover:opacity-80"
              >
                {market.stats.ctaLabel || t('mkt.talkMarket')}
                <ArrowRight size={16} />
              </span>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {market.stats.items.map((item, index) => (
                <article
                  key={`${item.value}-${index}`}
                  className="card-hover rounded-[28px] bg-elevated px-6 py-7 shadow-[0_34px_80px_-58px_rgba(0,0,0,0.95)]"
                >
                  <p
                    className={`text-[30px] font-black leading-[1.15] tracking-[-0.04em] ${
                      index % 2 === 0 ? 'text-accent-gold' : 'text-accent-sapphire'
                    }`}
                  >
                    {item.value}
                  </p>
                  <p className="mt-4 text-[16px] leading-6 text-muted-60">{item.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {payment ? (
        <section id="meios-de-pagamento" className="border-y border-subtle bg-surface py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="badge-sapphire">{t('mkt.localCoverage')}</span>
              <h2
                className="mt-6 text-[34px] font-bold leading-[1.1] text-white md:text-[44px]"
                style={{ letterSpacing: '-0.04em' }}
              >
                {payment.title || t('mkt.localPayments')}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-60">
                {t('mkt.organizedLogos')} {payment.country}.
              </p>
            </div>

            <div className="mt-12 grid gap-8 xl:grid-cols-[220px_minmax(0,1fr)]">
              <aside className="rounded-[28px] border border-subtle bg-elevated p-4 shadow-[0_28px_64px_-52px_rgba(0,0,0,0.9)] xl:sticky xl:top-28 xl:self-start">
                <p className="px-3 pb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent-gold">
                  {t('mkt.markets')}
                </p>
                <div className="space-y-1">
                  {payRetailersMarketNavigation.map((item) => {
                    const href = `/mercados/${item.slug}`;
                    const isActive = item.slug === market.slug;
                    const itemName = getMarketLabel(item.id, lang, item.name);

                    return (
                      <div
                        key={item.slug}
                        onClick={() => {
                          window.__PREVENT_SCROLL_TOP__ = true;
                          navigate(href);
                        }}
                      >
                        <span
                          className="flex cursor-pointer items-center justify-between rounded-2xl border px-3 py-3 text-sm font-medium transition-colors"
                          style={{
                            background: isActive ? 'rgba(201,168,76,0.08)' : 'transparent',
                            borderColor: isActive ? 'rgba(201,168,76,0.20)' : 'transparent',
                            color: isActive ? '#C9A84C' : 'rgba(248,250,252,0.72)',
                          }}
                        >
                          {itemName}
                          {isActive ? <ArrowRight size={14} /> : null}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </aside>

              <div className="rounded-[32px] border border-subtle bg-navy-deep p-6 shadow-[0_32px_76px_-56px_rgba(0,0,0,0.95)] md:p-8">
                <div className="flex flex-col gap-5 border-b border-subtle pb-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-4">
                    <MarketFlag name={market.name} flagCode={market.flagCode} flagAsset={market.flagAsset} size={56} />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-45">{t('mkt.market')}</p>
                      <h3
                        className="mt-2 text-[34px] font-semibold leading-[1.1] text-white md:text-[40px]"
                        style={{ letterSpacing: '-0.03em' }}
                      >
                        {payment.country}
                      </h3>
                    </div>
                  </div>

                  <Button href="/contato" variant="secondary" size="md">
                    {t('mkt.integrateMarket')}
                  </Button>
                </div>

                <div className="mt-4">
                  {payment.categories.map((category, categoryIndex) => (
                    <div
                      key={`${market.slug}-${category.name}`}
                      className={`grid gap-5 py-6 lg:grid-cols-[136px_minmax(0,1fr)] ${
                        categoryIndex < payment.categories.length - 1 ? 'border-b border-subtle' : ''
                      }`}
                    >
                      <div className="flex items-start">
                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent-gold">
                          {category.name}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                        {category.logos.map((logo) => {
                          const bounds = getLogoBounds(logo);

                          return (
                            <div
                              key={`${category.name}-${logo.alt}-${logo.src}`}
                              className="flex h-[78px] items-center justify-center overflow-hidden rounded-2xl border border-[#E6EAF3] bg-white px-3 py-2 shadow-[0_20px_40px_-34px_rgba(0,0,0,0.55)] transition-colors hover:border-[rgba(201,168,76,0.35)] md:h-[84px]"
                            >
                              <img
                                src={logo.src}
                                alt={logo.alt}
                                loading="lazy"
                                className="h-auto w-auto max-h-full max-w-full object-contain"
                                style={bounds}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-navy-deep py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[40px] border border-primary-15 bg-[linear-gradient(135deg,rgba(16,24,43,0.96)_0%,rgba(11,16,32,1)_100%)] px-6 py-10 shadow-[0_36px_88px_-64px_rgba(0,0,0,0.98)] md:px-12 md:py-14 lg:px-16">
            <div className="absolute -right-12 top-10 h-[220px] w-[220px] glow-gold" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 h-[180px] w-[180px] glow-sapphire" aria-hidden="true" />

            <div className="relative max-w-4xl">
              <span className="badge-sapphire">{t('mkt.regionalExpansion')}</span>

              <h2
                className="mt-6 text-[42px] font-extrabold leading-[1.05] text-white md:text-[64px] lg:text-[82px]"
                style={{ letterSpacing: '-0.04em' }}
              >
                {market.footerCta.title}
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-60">{t('mkt.footerSubtitle')}</p>

              <div className="mt-10">
                <Button href="/contato" variant="primary" size="lg">
                  {market.footerCta.buttonLabel || t('mkt.talkTeam')}
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
