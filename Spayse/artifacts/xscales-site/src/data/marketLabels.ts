import type { Lang } from '@/lib/lang';

const marketNames: Record<string, Record<Lang, string>> = {
  brasil: { pt: 'Brasil', en: 'Brazil', es: 'Brasil' },
  mexico: { pt: 'México', en: 'Mexico', es: 'México' },
  colombia: { pt: 'Colômbia', en: 'Colombia', es: 'Colombia' },
  peru: { pt: 'Peru', en: 'Peru', es: 'Perú' },
  chile: { pt: 'Chile', en: 'Chile', es: 'Chile' },
  argentina: { pt: 'Argentina', en: 'Argentina', es: 'Argentina' },
  'costa-rica': { pt: 'Costa Rica', en: 'Costa Rica', es: 'Costa Rica' },
  equador: { pt: 'Equador', en: 'Ecuador', es: 'Ecuador' },
  guatemala: { pt: 'Guatemala', en: 'Guatemala', es: 'Guatemala' },
  'outros-mercados': { pt: 'Outros Mercados', en: 'Other Markets', es: 'Otros Mercados' },
};

export function getMarketLabel(id: string, lang: Lang, fallback: string): string {
  return marketNames[id]?.[lang] ?? fallback;
}
