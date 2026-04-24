import { tr } from '../lib/i18n';
import { getLang } from '../lib/lang';
import { overviewMarkets } from './markets';
import { getMarketLabel } from './marketLabels';

export interface NavItem {
  label: string;
  href: string;
  flagAsset?: string;
  flagEmoji?: string;
  dropdown?: NavItem[];
  megaMenu?: {
    description: string;
  };
}

export const navLinks: NavItem[] = [
  {
    get label() {
      return tr('nav.solucoes', getLang());
    },
    href: '/solucoes',
    get megaMenu() {
      return { description: tr('nav.solDesc', getLang()) };
    },
    dropdown: [
      { label: 'Payments', href: '/solucoes' },
      { label: 'Payouts', href: '/solucoes' },
      { label: 'Banking', href: '/solucoes' },
      { label: 'Cross Border', href: '/solucoes' },
      {
        get label() {
          return tr('nav.orquestracao', getLang());
        },
        href: '/solucoes',
      },
    ],
  },
  {
    get label() {
      return tr('nav.mercados', getLang());
    },
    href: '/mercados',
    get megaMenu() {
      return { description: tr('nav.mkDesc', getLang()) };
    },
    get dropdown() {
      return overviewMarkets.map((market) => ({
        label: getMarketLabel(market.id, getLang(), market.name),
        href: `/mercados/${market.slug}`,
        flagAsset: market.flagAsset?.src,
        flagEmoji: market.flagEmoji,
      }));
    },
  },
  {
    get label() {
      return tr('nav.desenvolvedores', getLang());
    },
    href: '/desenvolvedores',
  },
  {
    get label() {
      return tr('nav.parceiros', getLang());
    },
    href: '/parceiros',
  },
  {
    get label() {
      return tr('nav.sobre', getLang());
    },
    href: '/sobre',
  },
  {
    get label() {
      return tr('nav.midia', getLang());
    },
    href: '/midia',
  },
  {
    get label() {
      return tr('nav.contato', getLang());
    },
    href: '/contato',
  },
];
