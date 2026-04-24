import { Link } from 'wouter';
import { Linkedin, Twitter, Instagram, ArrowUpRight } from 'lucide-react';
import { footerLinks } from '@/data/footer';
import { getLang, setLang } from '@/lib/lang';
import { tr } from '@/lib/i18n';

export default function Footer() {
  const lang = getLang();
  const t = (key: string) => tr(key, lang);
  const socialLabels = {
    linkedin: {
      pt: 'LinkedIn da Spayse',
      en: 'Spayse LinkedIn',
      es: 'LinkedIn de Spayse',
    },
    twitter: {
      pt: 'Twitter da Spayse',
      en: 'Spayse Twitter',
      es: 'Twitter de Spayse',
    },
    instagram: {
      pt: 'Instagram da Spayse',
      en: 'Spayse Instagram',
      es: 'Instagram de Spayse',
    },
  } as const;

  return (
    <footer className="bg-navy-deep border-t border-subtle-06">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
            <div className="lg:col-span-2">
              <div className="mb-4">
                <img src="/spayselogo (3).png" alt="Spayse" className="h-8 object-contain" />
              </div>
              <p className="text-sm leading-relaxed mb-6 text-muted-color">{t('footer.tagline')}</p>
              <Link href="/contato" data-testid="link-footer-cta">
                <span className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors cursor-pointer text-accent-sapphire hover:text-accent-gold">
                  {t('footer.cta')}
                  <ArrowUpRight size={14} />
                </span>
              </Link>
              <div className="flex items-center gap-4 mt-6">
                <a
                  href="https://linkedin.com/company/spayse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors text-muted-45 hover:text-accent-sapphire focus-ring"
                  data-testid="link-social-linkedin"
                  aria-label={socialLabels.linkedin[lang]}
                >
                  <Linkedin size={18} />
                </a>

                <a
                  href="https://instagram.com/spayse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors text-muted-45 hover:text-accent-sapphire focus-ring"
                  data-testid="link-social-instagram"
                  aria-label={socialLabels.instagram[lang]}
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            <FooterColumn title={t('footer.empresa')} links={footerLinks.company} />
            <FooterColumn title={t('footer.solucoes')} links={footerLinks.solutions} />
            <FooterColumn title={t('footer.mercados')} links={footerLinks.markets} />
            <FooterColumn title={t('footer.institucional')} links={footerLinks.institutional} />
          </div>
        </div>

        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-subtle-06">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-xs text-muted-45">{t('footer.copyright')}</p>
            <div className="flex items-center gap-2 border-l border-subtle pl-4">
              <span className="text-xs text-muted-45">Powered by</span>
              <img
                src="/xlent-brasil.png"
                alt="XLent Brasil"
                className="h-5 object-contain opacity-80 hover:opacity-100 transition-opacity"
                style={{ maxWidth: '90px' }}
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-45" role="group" aria-label="Language selector">
            <button
              type="button"
              className={`px-2 py-1 rounded cursor-pointer transition-colors focus-ring ${
                lang === 'pt' ? 'text-accent-gold' : 'text-muted-color hover:text-accent-gold'
              }`}
              data-testid="button-lang-ptbr"
              aria-label="Portuguese"
              aria-current={lang === 'pt' ? 'true' : undefined}
              onClick={(e) => {
                e.preventDefault();
                setLang('pt');
                window.location.reload();
              }}
            >
              PT-BR
            </button>
            <span aria-hidden="true">|</span>
            <button
              type="button"
              className={`px-2 py-1 rounded cursor-pointer transition-colors focus-ring ${
                lang === 'en' ? 'text-accent-gold' : 'text-muted-color hover:text-accent-gold'
              }`}
              data-testid="button-lang-en"
              aria-label="English"
              aria-current={lang === 'en' ? 'true' : undefined}
              onClick={(e) => {
                e.preventDefault();
                setLang('en');
                window.location.reload();
              }}
            >
              EN
            </button>
            <span aria-hidden="true">|</span>
            <button
              type="button"
              className={`px-2 py-1 rounded cursor-pointer transition-colors focus-ring ${
                lang === 'es' ? 'text-accent-gold' : 'text-muted-color hover:text-accent-gold'
              }`}
              data-testid="button-lang-es"
              aria-label="Spanish"
              aria-current={lang === 'es' ? 'true' : undefined}
              onClick={(e) => {
                e.preventDefault();
                setLang('es');
                window.location.reload();
              }}
            >
              ES
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <nav aria-label={title}>
      <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => {
          const isPdf = link.href.endsWith('.pdf');
          
          return (
            <li key={link.href + link.label}>
              {isPdf ? (
                <a 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  data-testid={`link-footer-${link.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="text-sm cursor-pointer transition-colors block text-muted-color hover:text-accent-gold focus-ring"
                >
                  {link.label}
                </a>
              ) : (
                <Link href={link.href} data-testid={`link-footer-${link.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                  <span className="text-sm cursor-pointer transition-colors block text-muted-color hover:text-accent-gold focus-ring">
                    {link.label}
                  </span>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
