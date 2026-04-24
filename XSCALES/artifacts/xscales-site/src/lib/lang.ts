export type Lang = 'pt' | 'en' | 'es';

export function getLang(): Lang {
  if (typeof window !== 'undefined') {
    return (localStorage.getItem('lang') as Lang) || 'pt';
  }
  return 'pt';
}

export function setLang(lang: Lang): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('lang', lang);
  }
}
