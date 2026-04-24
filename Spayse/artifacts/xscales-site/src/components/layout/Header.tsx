import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, type NavItem } from '@/data/navigation';
import Button from '@/components/common/Button';
import { getLang, setLang } from '@/lib/lang';
import { tr } from '@/lib/i18n';

const HEADER_H = 72;

function SolucoesIllustration() {
  return (
    <svg width="120" height="108" viewBox="0 0 120 108" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="sg-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFC500" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#FFC500" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sg-teal" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#009FAD" stopOpacity="0.20" />
          <stop offset="100%" stopColor="#009FAD" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="60" cy="54" r="44" fill="url(#sg-glow)" />
      <circle cx="60" cy="54" r="32" stroke="rgba(255,197,0,0.10)" strokeWidth="1" fill="none" />
      <circle cx="60" cy="54" r="20" stroke="rgba(255,197,0,0.14)" strokeWidth="1" fill="none" />
      <line x1="60" y1="54" x2="60" y2="14" stroke="rgba(255,197,0,0.25)" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="60" y1="54" x2="22" y2="76" stroke="rgba(0,159,173,0.30)" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="60" y1="54" x2="98" y2="76" stroke="rgba(0,159,173,0.30)" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="60" y1="54" x2="16" y2="38" stroke="rgba(0,159,173,0.25)" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="60" y1="54" x2="104" y2="38" stroke="rgba(0,159,173,0.25)" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="60" cy="14" r="7" fill="#FFC500" />
      <circle cx="60" cy="14" r="4" fill="#050816" />
      <circle cx="22" cy="76" r="6" fill="none" stroke="#009FAD" strokeWidth="1.5" />
      <circle cx="22" cy="76" r="3" fill="#009FAD" fillOpacity="0.7" />
      <circle cx="98" cy="76" r="6" fill="none" stroke="#009FAD" strokeWidth="1.5" />
      <circle cx="98" cy="76" r="3" fill="#009FAD" fillOpacity="0.7" />
      <circle cx="16" cy="38" r="6" fill="none" stroke="#009FAD" strokeWidth="1.5" />
      <circle cx="16" cy="38" r="3" fill="#009FAD" fillOpacity="0.7" />
      <circle cx="104" cy="38" r="6" fill="none" stroke="#009FAD" strokeWidth="1.5" />
      <circle cx="104" cy="38" r="3" fill="#009FAD" fillOpacity="0.7" />
      <circle cx="60" cy="54" r="12" fill="rgba(255,197,0,0.12)" />
      <circle cx="60" cy="54" r="7" fill="#FFC500" />
      <path d="M56 54l3 3 5-5" stroke="#050816" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MercadosIllustration() {
  return (
    <svg width="120" height="108" viewBox="0 0 120 108" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="mg-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#009FAD" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#009FAD" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="60" cy="54" rx="40" ry="40" fill="url(#mg-bg)" />
      <ellipse cx="60" cy="54" rx="40" ry="40" stroke="rgba(0,159,173,0.35)" strokeWidth="1.2" fill="none" />
      <ellipse cx="60" cy="54" rx="22" ry="40" stroke="rgba(0,159,173,0.20)" strokeWidth="1" fill="none" />
      <ellipse cx="60" cy="54" rx="8" ry="40" stroke="rgba(0,159,173,0.14)" strokeWidth="1" fill="none" />
      <line x1="20" y1="54" x2="100" y2="54" stroke="rgba(0,159,173,0.22)" strokeWidth="1" />
      <line x1="24" y1="38" x2="96" y2="38" stroke="rgba(0,159,173,0.16)" strokeWidth="1" />
      <line x1="24" y1="70" x2="96" y2="70" stroke="rgba(0,159,173,0.16)" strokeWidth="1" />
      <line x1="32" y1="26" x2="88" y2="26" stroke="rgba(0,159,173,0.10)" strokeWidth="1" />
      <circle cx="42" cy="44" r="5" fill="rgba(255,197,0,0.15)" />
      <circle cx="42" cy="44" r="3" fill="#FFC500" />
      <line x1="42" y1="41" x2="42" y2="30" stroke="#FFC500" strokeWidth="1" strokeOpacity="0.5" />
      <circle cx="78" cy="58" r="5" fill="rgba(255,197,0,0.15)" />
      <circle cx="78" cy="58" r="3" fill="#FFC500" />
      <line x1="78" y1="55" x2="78" y2="44" stroke="#FFC500" strokeWidth="1" strokeOpacity="0.5" />
      <circle cx="55" cy="66" r="5" fill="rgba(255,197,0,0.15)" />
      <circle cx="55" cy="66" r="3" fill="#FFC500" />
      <line x1="55" y1="63" x2="55" y2="52" stroke="#FFC500" strokeWidth="1" strokeOpacity="0.5" />
      <circle cx="68" cy="36" r="5" fill="rgba(0,159,173,0.15)" />
      <circle cx="68" cy="36" r="3" fill="#009FAD" />
      <line x1="68" y1="33" x2="68" y2="22" stroke="#009FAD" strokeWidth="1" strokeOpacity="0.4" />
    </svg>
  );
}

const megaIllustrations: Record<string, React.FC> = {
  '/solucoes': SolucoesIllustration,
  '/mercados': MercadosIllustration,
  'Soluções': SolucoesIllustration,
  'Mercados': MercadosIllustration,
};

function MegaMenuPanel({ item }: { item: NavItem }) {
  const lang = getLang();
  const t = (key: string) => tr(key, lang);
  const homeLabel = {
    pt: 'XSCALES — ir para página inicial',
    en: 'XSCALES — go to home page',
    es: 'XSCALES — ir a la página inicial',
  }[lang];
  const Illustration = megaIllustrations[item.href] ?? megaIllustrations[item.label];
  const isMercados = item.href === '/mercados';

  return (
    <div
      style={{
        width: 660,
        background: 'rgba(10,14,28,0.98)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderTop: '2px solid #FFC500',
        backdropFilter: 'blur(32px)',
        WebkitBackdropFilter: 'blur(32px)',
        boxShadow: '0 24px 60px rgba(0,0,0,0.65), 0 8px 24px rgba(0,0,0,0.40)',
        borderRadius: '0 0 16px 16px',
        overflow: 'hidden',
      }}
    >
      <div className="flex">
        <div
          className="flex-shrink-0 flex flex-col justify-between p-6"
          style={{
            width: 210,
            background: 'linear-gradient(160deg, rgba(255,197,0,0.04) 0%, rgba(0,159,173,0.03) 100%)',
            borderRight: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <div>
            <div className="mb-5 flex justify-center">
              {Illustration && <Illustration />}
            </div>
            <h3
              className="font-bold mb-2"
              style={{ color: '#FFC500', fontSize: 15, letterSpacing: '-0.02em' }}
            >
              {item.label}
            </h3>
            <p style={{ color: 'rgba(248,250,252,0.52)', fontSize: 13, lineHeight: 1.6 }}>
              {item.megaMenu!.description}
            </p>
          </div>
          <Link href={item.href}>
            <div
              className="flex items-center gap-1.5 mt-5 text-xs font-semibold transition-opacity hover:opacity-80"
              style={{ color: '#FFC500' }}
            >
              <span>{t('header.viewAll')}</span>
              <ChevronRight size={12} />
            </div>
          </Link>
        </div>

        <div className="flex-1 p-5">
          <div className={isMercados ? 'grid grid-cols-3 gap-1' : 'flex flex-col gap-0.5'}>
            {item.dropdown!.map((sub) => (
              <Link key={sub.href + sub.label} href={sub.href}>
                <MegaMenuLink label={sub.label} flagAsset={sub.flagAsset} flagEmoji={sub.flagEmoji} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MegaMenuLink({ label, flagAsset, flagEmoji }: { label: string; flagAsset?: string; flagEmoji?: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-all duration-200"
      style={{
        color: hovered ? '#fff' : 'rgba(248,250,252,0.65)',
        background: hovered ? 'rgba(255,255,255,0.05)' : 'transparent',
        borderLeft: hovered ? '2px solid #FFC500' : '2px solid transparent',
        paddingLeft: '12px',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="flex items-center gap-2 flex-1"
        style={{ transform: hovered ? 'translateX(2px)' : 'translateX(0)', transition: 'transform 0.2s ease' }}
      >
        {flagAsset ? (
          <img src={flagAsset} alt="" className="w-4 h-4 rounded-full object-cover shrink-0" />
        ) : flagEmoji ? (
          <span className="text-sm leading-none shrink-0">{flagEmoji}</span>
        ) : null}
        <span className="text-sm font-medium">{label}</span>
      </div>
      <ChevronRight
        size={12}
        className="flex-shrink-0"
        style={{
          color: '#FFC500',
          opacity: hovered ? 0.8 : 0,
          transform: hovered ? 'translateX(0)' : 'translateX(-8px)',
          transition: 'all 0.2s ease',
        }}
      />
    </div>
  );
}

const PANEL_W = 660;
const PANEL_GUTTER = 16;

function getAnchoredPanelLeft(triggerEl: HTMLElement | null) {
  const centeredLeft = Math.round((window.innerWidth - PANEL_W) / 2);
  if (!triggerEl) return centeredLeft;

  const { left } = triggerEl.getBoundingClientRect();
  const maxLeft = Math.max(PANEL_GUTTER, window.innerWidth - PANEL_W - PANEL_GUTTER);

  return Math.min(Math.max(Math.round(left), PANEL_GUTTER), maxLeft);
}

function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const lang = getLang();
  
  const languages = [
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
  ];

  const currentLang = languages.find(l => l.code === lang) || languages[0];
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors hover:bg-[rgba(255,255,255,0.06)] text-sm font-medium text-white/90 hover:text-white"
        aria-label="Selecionar idioma"
      >
        <span className="text-lg leading-none" style={{ transform: 'translateY(-1px)' }}>{currentLang.flag}</span>
        <span className="uppercase text-[11px] font-bold tracking-wide">{currentLang.code}</span>
        <ChevronDown size={13} className={`transition-transform duration-200 opacity-60 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 w-44 rounded-xl bg-[#0B1020] border border-[rgba(255,255,255,0.08)] overflow-hidden"
            style={{ 
              boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,197,0,0.05)',
              zIndex: 100 
            }}
          >
            <div className="py-1.5 px-1.5 flex flex-col gap-0.5">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLang(l.code as any);
                    window.location.reload();
                  }}
                  className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm transition-colors ${
                    lang === l.code ? 'text-[#FFC500] bg-[rgba(255,197,0,0.08)]' : 'text-white/70 hover:bg-[rgba(255,255,255,0.06)] hover:text-white'
                  }`}
                >
                  <span className="text-lg leading-none" style={{ transform: 'translateY(-1px)' }}>{l.flag}</span>
                  <span className="font-medium">{l.label}</span>
                  {lang === l.code && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#FFC500]" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [panelLeft, setPanelLeft] = useState(() =>
    Math.round((window.innerWidth - PANEL_W) / 2)
  );
  const [location] = useLocation();
  const lang = getLang();
  const t = (key: string) => tr(key, lang);
  const closeTimer = useRef<number | null>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const activeTrigger = activeDropdown ? triggerRefs.current[activeDropdown] : null;
      setPanelLeft(getAnchoredPanelLeft(activeTrigger));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeDropdown]);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const openMenu = (label: string, triggerEl?: HTMLElement | null) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setPanelLeft(getAnchoredPanelLeft(triggerEl ?? null));
    setActiveDropdown(label);
  };

  const scheduleClose = () => {
    closeTimer.current = window.setTimeout(() => setActiveDropdown(null), 120);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const activeItem = navLinks.find((n) => n.label === activeDropdown && n.megaMenu);

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Pular para o conteúdo
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'header-backdrop-scrolled' : 'header-backdrop-default'
        }`}
      >
                <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-[76px]">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" data-testid="link-logo">
                <div className="flex items-center gap-2 cursor-pointer group">
                  <img
                    src="/xscalewh.png"
                    alt="XSCALES — ir para página inicial"
                    className="h-8 transition-opacity duration-200 group-hover:opacity-80"
                  />
                </div>
              </Link>
            </div>

            <nav className="hidden lg:flex flex-1 justify-center items-center gap-1 xl:gap-2 px-2" aria-label="Navegação principal">
              {navLinks.map((item) => (
                <NavItemComponent
                  key={item.href + item.label}
                  item={item}
                  activeDropdown={activeDropdown}
                  onOpen={openMenu}
                  onScheduleClose={scheduleClose}
                  setTriggerRef={(element) => {
                    triggerRefs.current[item.label] = element;
                  }}
                />
              ))}
            </nav>

            <div className="flex-shrink-0 flex items-center gap-3 lg:gap-4">
              <div className="hidden lg:block mr-1">
                <LanguageSelector />
              </div>

              <div className="hidden lg:flex items-center gap-2.5">
                <a
                  href="/desenvolvedores"
                  className="hidden xl:inline-flex items-center justify-center gap-1.5 font-semibold transition-all duration-200 rounded-lg text-white"
                  style={{ 
                    background: '#009FAD',
                    fontSize: '13px', padding: '8px 16px',
                    boxShadow: '0 0 20px rgba(0,159,173,0.15)' 
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#00b8c8'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#009FAD'; e.currentTarget.style.transform = 'translateY(0)'; }}
                  data-testid="link-entrar-header"
                >
                  {t('header.platformCta')}
                </a>
                <a
                  href="/contato"
                  className="inline-flex items-center justify-center gap-1.5 font-semibold transition-all duration-200 rounded-lg text-[#050816]"
                  style={{ 
                    background: '#FFC500',
                    fontSize: '13px', padding: '8px 16px',
                    boxShadow: '0 0 20px rgba(255,197,0,0.15)' 
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#ffcf33'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#FFC500'; e.currentTarget.style.transform = 'translateY(0)'; }}
                  data-testid="link-cta-header"
                >
                  {t('header.cta')}
                </a>
              </div>

              <button
                className="lg:hidden p-2 rounded-lg transition-colors text-secondary-muted hover:text-primary-gold focus-ring"
                onClick={() => setMobileOpen(!mobileOpen)}
                data-testid="button-mobile-menu"
                aria-label={t('header.menuLabel')}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mega Menu Backdrop — desktop only */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            key="mega-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed left-0 right-0 bottom-0 z-40 hidden lg:block"
            style={{ top: HEADER_H, background: 'rgba(4,6,18,0.65)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
            onClick={() => setActiveDropdown(null)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mega Menu Panel — position calculated in JS to avoid all CSS/FM conflicts */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            key={`mega-panel-${activeItem.label}`}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
            style={{
              position: 'fixed',
              top: HEADER_H,
              left: panelLeft,
              width: PANEL_W,
              zIndex: 50,
            }}
            onMouseEnter={cancelClose}
            onMouseLeave={() => setActiveDropdown(null)}
            role="menu"
            aria-label={activeItem.label}
          >
            <MegaMenuPanel item={activeItem} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu — unchanged */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden top-0"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
          >
            <div
              className="absolute inset-0 bg-xscales/98 backdrop-blur-xl"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.nav
              className="absolute right-0 top-0 bottom-0 w-80 max-w-full overflow-y-auto bg-surface border-l border-subtle"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-5 border-b border-subtle">
                <div className="flex items-center gap-2">
                  <img src="/xscalewh.png" alt="XSCALES" className="h-7" />
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-secondary-muted hover:text-primary-gold transition-colors focus-ring"
                  data-testid="button-mobile-close"
                  aria-label={t('header.closeMenu')}
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-5 space-y-1">
                {navLinks.map((item) => (
                  <MobileNavItem key={item.href + item.label} item={item} />
                ))}
              </div>

              <div className="p-5 border-t border-subtle">
                <div className="flex justify-center mb-6">
                  <div className="flex items-center gap-1 bg-[rgba(255,255,255,0.04)] rounded-full p-1 border border-[rgba(255,255,255,0.08)]">
                    <button onClick={() => { setLang('pt'); window.location.reload(); }} className={`text-xs font-bold w-10 h-10 rounded-full flex items-center justify-center transition-all ${lang === 'pt' ? 'bg-[#FFC500] text-black shadow-sm' : 'text-white/60 hover:text-white'}`}>PT</button>
                    <button onClick={() => { setLang('en'); window.location.reload(); }} className={`text-xs font-bold w-10 h-10 rounded-full flex items-center justify-center transition-all ${lang === 'en' ? 'bg-[#FFC500] text-black shadow-sm' : 'text-white/60 hover:text-white'}`}>EN</button>
                    <button onClick={() => { setLang('es'); window.location.reload(); }} className={`text-xs font-bold w-10 h-10 rounded-full flex items-center justify-center transition-all ${lang === 'es' ? 'bg-[#FFC500] text-black shadow-sm' : 'text-white/60 hover:text-white'}`}>ES</button>
                  </div>
                </div>
                <Button
                  href="/contato"
                  variant="primary"
                  className="w-full"
                  data-testid="link-cta-mobile"
                >
                  {t('header.cta')}
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavItemComponent({
  item,
  activeDropdown,
  onOpen,
  onScheduleClose,
  setTriggerRef,
}: {
  item: NavItem;
  activeDropdown: string | null;
  onOpen: (label: string, triggerEl?: HTMLElement | null) => void;
  onScheduleClose: () => void;
  setTriggerRef: (element: HTMLButtonElement | null) => void;
}) {
  const isOpen = activeDropdown === item.label;
  const [location] = useLocation();
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const isActive = item.dropdown
    ? location === item.href ||
      location.startsWith(item.href + '/') ||
      item.dropdown.some((sub) => location.startsWith(sub.href))
    : item.href !== '/'
    ? location.startsWith(item.href)
    : location === '/';

  if (!item.megaMenu) {
    return (
      <Link href={item.href} data-testid={`link-nav-${item.label.toLowerCase()}`}>
        <span className={`nav-link${isActive ? ' active' : ''}`}>
          {item.label}
        </span>
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => onOpen(item.label, buttonRef.current)}
      onMouseLeave={onScheduleClose}
    >
      <button
        ref={(element) => {
          buttonRef.current = element;
          setTriggerRef(element);
        }}
        className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold focus-ring transition-all duration-200 ${
          isOpen || isActive
            ? 'text-white bg-[rgba(255,255,255,0.08)]'
            : 'text-white/70 hover:text-white hover:bg-[rgba(255,255,255,0.04)]'
        }`}
        data-testid={`button-nav-${item.label.toLowerCase()}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{item.label}</span>
        <ChevronDown
          size={13}
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          style={{ opacity: isOpen || isActive ? 1 : 0.6 }}
        />
      </button>
    </div>
  );
}

function MobileNavItem({ item }: { item: NavItem }) {
  const [location] = useLocation();

  const isActive = item.dropdown
    ? location === item.href ||
      location.startsWith(item.href + '/') ||
      item.dropdown.some((sub) => location.startsWith(sub.href))
    : item.href !== '/'
    ? location.startsWith(item.href)
    : location === '/';

  const hasActiveChild = item.dropdown
    ? item.dropdown.some((sub) => location.startsWith(sub.href))
    : false;

  const [expanded, setExpanded] = useState(isActive);

  if (!item.dropdown) {
    return (
      <Link href={item.href} data-testid={`link-mobile-nav-${item.label.toLowerCase()}`}>
        <span
          className={`flex items-center py-3 px-3 rounded-lg text-sm font-medium cursor-pointer transition-colors focus-ring ${
            isActive
              ? 'text-primary-gold bg-primary-10'
              : 'text-secondary-muted hover:text-primary-gold hover:bg-primary-08'
          }`}
        >
          {item.label}
        </span>
      </Link>
    );
  }

  return (
    <div>
      <button
        className={`flex items-center justify-between w-full py-3 px-3 rounded-lg text-sm font-medium transition-colors focus-ring ${
          expanded
            ? 'text-primary-gold bg-primary-08'
            : isActive
            ? 'text-primary-gold bg-primary-10'
            : 'text-secondary-muted hover:text-primary-gold hover:bg-primary-08'
        }`}
        onClick={() => setExpanded(!expanded)}
        data-testid={`button-mobile-expand-${item.label.toLowerCase()}`}
        aria-expanded={expanded}
      >
        <span className="flex items-center gap-2">
          {item.label}
          <AnimatePresence>
            {!expanded && hasActiveChild && (
              <motion.span
                key="active-dot"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className="inline-block w-1.5 h-1.5 rounded-full bg-primary-gold flex-shrink-0"
                aria-label="Active section"
              />
            )}
          </AnimatePresence>
        </span>
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${expanded ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>
      <AnimatePresence>
        {expanded && item.dropdown && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden ml-3"
          >
            {item.dropdown.map((sub) => {
              const isSubActive = location.startsWith(sub.href);
              return (
                <Link
                  key={sub.href + sub.label}
                  href={sub.href}
                  data-testid={`link-mobile-dropdown-${sub.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div
                    className="group flex items-center gap-2 py-2.5 px-3 text-sm cursor-pointer transition-all duration-200 border-l-2"
                    style={{
                      color: isSubActive ? '#FFC500' : 'rgba(248,250,252,0.62)',
                      borderColor: isSubActive ? '#FFC500' : 'rgba(255,197,0,0.20)',
                      background: isSubActive ? 'rgba(255,197,0,0.07)' : '',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#FFC500';
                      e.currentTarget.style.borderColor = '#FFC500';
                      e.currentTarget.style.background = 'rgba(255,197,0,0.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = isSubActive ? '#FFC500' : 'rgba(248,250,252,0.62)';
                      e.currentTarget.style.borderColor = isSubActive ? '#FFC500' : 'rgba(255,197,0,0.20)';
                      e.currentTarget.style.background = isSubActive ? 'rgba(255,197,0,0.07)' : '';
                    }}
                  >
                    <span className="flex-1 transition-transform duration-200 group-hover:translate-x-1">{sub.label}</span>
                    <ChevronRight
                      size={12}
                      className={`transition-opacity duration-200 text-primary-gold ${isSubActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                    />
                  </div>
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
