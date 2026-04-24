import { tr } from '../lib/i18n';
import { getLang } from '../lib/lang';
import { overviewMarkets } from './markets';
import { getMarketLabel } from './marketLabels';

const institutionalLabels = {
  seguranca: {
    pt: 'Segurança',
    en: 'Security',
    es: 'Seguridad',
  },
  compliance: {
    pt: 'Compliance',
    en: 'Compliance',
    es: 'Compliance',
  },
  privacidade: {
    pt: 'Privacidade',
    en: 'Privacy',
    es: 'Privacidad',
  },
  termos: {
    pt: 'Termos e Condições',
    en: 'Terms and Conditions',
    es: 'Términos y Condiciones',
  },
  ouvidoria: {
    pt: 'Ouvidoria',
    en: 'Ombudsman',
    es: 'Canal de Quejas',
  },
  polSeguranca: {
    pt: 'Política de Segurança (PDF)',
    en: 'Security Policy (PDF)',
    es: 'Política de Seguridad (PDF)',
  },
  polKyc: {
    pt: 'Política de KYC (PDF)',
    en: 'KYC Policy (PDF)',
    es: 'Política de KYC (PDF)',
  },
  polPld: {
    pt: 'Política de PLD/FT (PDF)',
    en: 'AML/CFT Policy (PDF)',
    es: 'Política de PLD/FT (PDF)',
  },
} as const;

export const footerLinks = {
  company: [
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
  ],
  solutions: [
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
  get markets() {
    return overviewMarkets.map((market) => ({
      label: getMarketLabel(market.id, getLang(), market.name),
      href: `/mercados/${market.slug}`,
    }));
  },
  institutional: [
    {
      get label() {
        return institutionalLabels.seguranca[getLang()];
      },
      href: '/seguranca',
    },
    {
      get label() {
        return institutionalLabels.compliance[getLang()];
      },
      href: '/compliance',
    },
    {
      get label() {
        return institutionalLabels.privacidade[getLang()];
      },
      href: '/privacidade',
    },
    {
      get label() {
        return institutionalLabels.termos[getLang()];
      },
      href: '/termos',
    },
    {
      get label() {
        return institutionalLabels.ouvidoria[getLang()];
      },
      href: '/ouvidoria',
    },
    {
      get label() {
        return institutionalLabels.polSeguranca[getLang()];
      },
      href: '/docs/politica-seguranca.pdf',
    },
    {
      get label() {
        return institutionalLabels.polKyc[getLang()];
      },
      href: '/docs/politica-kyc.pdf',
    },
    {
      get label() {
        return institutionalLabels.polPld[getLang()];
      },
      href: '/docs/politica-pld.pdf',
    },
  ],
};
