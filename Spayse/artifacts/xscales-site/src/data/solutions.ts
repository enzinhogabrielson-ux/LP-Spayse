import { getLang } from '@/lib/lang';
import { tr } from '@/lib/i18n';

export interface Solution {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  features: string[];
}

export const solutions: Solution[] = [
  {
    id: 'payments',
    get title() { return tr('sol.payments.title', getLang()) },
    get description() { return tr('sol.payments.desc', getLang()) },
    get longDescription() { return tr('sol.payments.longDesc', getLang()) },
    icon: 'CreditCard',
    get features() { return [
      tr('sol.payments.f0', getLang()),
      tr('sol.payments.f1', getLang()),
      tr('sol.payments.f2', getLang()),
      tr('sol.payments.f3', getLang()),
    ] },
  },
  {
    id: 'payouts',
    get title() { return tr('sol.payouts.title', getLang()) },
    get description() { return tr('sol.payouts.desc', getLang()) },
    get longDescription() { return tr('sol.payouts.longDesc', getLang()) },
    icon: 'ArrowUpRight',
    get features() { return [
      tr('sol.payouts.f0', getLang()),
      tr('sol.payouts.f1', getLang()),
      tr('sol.payouts.f2', getLang()),
      tr('sol.payouts.f3', getLang()),
    ] },
  },
  {
    id: 'banking',
    get title() { return tr('sol.banking.title', getLang()) },
    get description() { return tr('sol.banking.desc', getLang()) },
    get longDescription() { return tr('sol.banking.longDesc', getLang()) },
    icon: 'Building2',
    get features() { return [
      tr('sol.banking.f0', getLang()),
      tr('sol.banking.f1', getLang()),
      tr('sol.banking.f2', getLang()),
      tr('sol.banking.f3', getLang()),
    ] },
  },
  {
    id: 'cross-border',
    get title() { return tr('sol.cross-border.title', getLang()) },
    get description() { return tr('sol.cross-border.desc', getLang()) },
    get longDescription() { return tr('sol.cross-border.longDesc', getLang()) },
    icon: 'Globe',
    get features() { return [
      tr('sol.cross-border.f0', getLang()),
      tr('sol.cross-border.f1', getLang()),
      tr('sol.cross-border.f2', getLang()),
      tr('sol.cross-border.f3', getLang()),
    ] },
  },
  {
    id: 'orquestracao',
    get title() { return tr('sol.orquestracao.title', getLang()) },
    get description() { return tr('sol.orquestracao.desc', getLang()) },
    get longDescription() { return tr('sol.orquestracao.longDesc', getLang()) },
    icon: 'Network',
    get features() { return [
      tr('sol.orquestracao.f0', getLang()),
      tr('sol.orquestracao.f1', getLang()),
      tr('sol.orquestracao.f2', getLang()),
      tr('sol.orquestracao.f3', getLang()),
    ] },
  },
  {
    id: 'reconciliacao',
    get title() { return tr('sol.reconciliacao.title', getLang()) },
    get description() { return tr('sol.reconciliacao.desc', getLang()) },
    get longDescription() { return tr('sol.reconciliacao.longDesc', getLang()) },
    icon: 'BarChart3',
    get features() { return [
      tr('sol.reconciliacao.f0', getLang()),
      tr('sol.reconciliacao.f1', getLang()),
      tr('sol.reconciliacao.f2', getLang()),
      tr('sol.reconciliacao.f3', getLang()),
    ] },
  },
];
