import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, type NavItem } from '@/data/navigation';
import Button from '@/components/common/Button';
import { getLang, setLang } from '@/lib/lang';
import { tr } from '@/lib/i18n';
import MegaMenuCanvas from '@/components/common/MegaMenuCanvas';

const HEADER_H = 72;

function SolucoesIllustration() {
  return (
    <svg width="120" height="108" viewBox="0 0 120 108" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="sg-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sg-teal" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1E4FA0" stopOpacity="0.20" />
          <stop offset="100%" stopColor="#1E4FA0" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="60" cy="54" r="44" fill="url(#sg-glow)" />
      <circle cx="60" cy="54" r="32" stroke="rgba(201,168,76,0.10)" strokeWidth="1" fill="none" />
      <circle cx="60" cy="54" r="20" stroke="rgba(201,168,76,0.14)" strokeWidth="1" fill="none" />
      <line x1="60" y1="54" x2="60" y2="14" stroke="rgba(201,168,76,0.25)" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="60" y1="54" x2="22" y2="76" stroke="rgba(30,79,160,0.30)" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="60" y1="54" x2="98" y2="76" stroke="rgba(30,79,160,0.30)" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="60" y1="54" x2="16" y2="38" stroke="rgba(30,79,160,0.25)" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="60" y1="54" x2="104" y2="38" stroke="rgba(30,79,160,0.25)" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="60" cy="14" r="7" fill="#C9A84C" />
      <circle cx="60" cy="14" r="4" fill="#0A1224" />
      <circle cx="22" cy="76" r="6" fill="none" stroke="#1E4FA0" strokeWidth="1.5" />
      <circle cx="22" cy="76" r="3" fill="#1E4FA0" fillOpacity="0.7" />
      <circle cx="98" cy="76" r="6" fill="none" stroke="#1E4FA0" strokeWidth="1.5" />
      <circle cx="98" cy="76" r="3" fill="#1E4FA0" fillOpacity="0.7" />
      <circle cx="16" cy="38" r="6" fill="none" stroke="#1E4FA0" strokeWidth="1.5" />
      <circle cx="16" cy="38" r="3" fill="#1E4FA0" fillOpacity="0.7" />
      <circle cx="104" cy="38" r="6" fill="none" stroke="#1E4FA0" strokeWidth="1.5" />
      <circle cx="104" cy="38" r="3" fill="#1E4FA0" fillOpacity="0.7" />
      <circle cx="60" cy="54" r="12" fill="rgba(201,168,76,0.12)" />
      <circle cx="60" cy="54" r="7" fill="#C9A84C" />
      <path d="M56 54l3 3 5-5" stroke="#0A1224" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MercadosIllustration() {
  return (
    <svg width="120" height="108" viewBox="0 0 120 108" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="mg-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1E4FA0" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#1E4FA0" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="60" cy="54" rx="40" ry="40" fill="url(#mg-bg)" />
      <ellipse cx="60" cy="54" rx="40" ry="40" stroke="rgba(30,79,160,0.35)" strokeWidth="1.2" fill="none" />
      <ellipse cx="60" cy="54" rx="22" ry="40" stroke="rgba(30,79,160,0.20)" strokeWidth="1" fill="none" />
      <ellipse cx="60" cy="54" rx="8" ry="40" stroke="rgba(30,79,160,0.14)" strokeWidth="1" fill="none" />
      <line x1="20" y1="54" x2="100" y2="54" stroke="rgba(30,79,160,0.22)" strokeWidth="1" />
      <line x1="24" y1="38" x2="96" y2="38" stroke="rgba(30,79,160,0.16)" strokeWidth="1" />
      <line x1="24" y1="70" x2="96" y2="70" stroke="rgba(30,79,160,0.16)" strokeWidth="1" />
      <line x1="32" y1="26" x2="88" y2="26" stroke="rgba(30,79,160,0.10)" strokeWidth="1" />
      <circle cx="42" cy="44" r="5" fill="rgba(201,168,76,0.15)" />
      <circle cx="42" cy="44" r="3" fill="#C9A84C" />
      <line x1="42" y1="41" x2="42" y2="30" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.5" />
      <circle cx="78" cy="58" r="5" fill="rgba(201,168,76,0.15)" />
      <circle cx="78" cy="58" r="3" fill="#C9A84C" />
      <line x1="78" y1="55" x2="78" y2="44" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.5" />
      <circle cx="55" cy="66" r="5" fill="rgba(201,168,76,0.15)" />
      <circle cx="55" cy="66" r="3" fill="#C9A84C" />
      <line x1="55" y1="63" x2="55" y2="52" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.5" />
      <circle cx="68" cy="36" r="5" fill="rgba(30,79,160,0.15)" />
      <circle cx="68" cy="36" r="3" fill="#1E4FA0" />
      <line x1="68" y1="33" x2="68" y2="22" stroke="#1E4FA0" strokeWidth="1" strokeOpacity="0.4" />
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
  const isMercados = item.href === '/mercados';

  return (
    <div
      style={{
        width: PANEL_W,
        background: 'rgba(10,18,36,0.95)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderTop: '2px solid #C9A84C',
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
        boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
        borderRadius: '0 0 20px 20px',
        overflow: 'hidden',
      }}
    >
      <div className="flex h-full">
        {/* Left Side: Animated Canvas & Info */}
        <div
          className="flex-shrink-0 flex flex-col p-6"
          style={{
            width: 280,
            background: 'linear-gradient(160deg, rgba(201,168,76,0.05) 0%, rgba(30,79,160,0.08) 100%)',
            borderRight: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div className="mb-6 flex justify-center">
            <img 
              src={isMercados ? '/images/vp-coverage.png' : '/images/sol-orchestration.png'} 
              className="w-full aspect-square object-cover rounded-xl border border-[rgba(255,255,255,0.08)] shadow-[0_8px_32px_rgba(0,0,0,0.4)] mix-blend-screen opacity-90" 
              alt={item.label} 
              loading="lazy"
            />
          </div>
          
          <div className="flex-1 flex flex-col justify-end">
            <h3 className="font-bold mb-2 text-lg" style={{ color: '#fff', letterSpacing: '-0.02em' }}>
              {item.label}
            </h3>
            <p className="mb-4" style={{ color: 'rgba(248,250,252,0.6)', fontSize: 13, lineHeight: 1.5 }}>
              {item.megaMenu!.description}
            </p>
            
            <Link href={item.href}>
              <div
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all hover:bg-[rgba(201,168,76,0.15)]"
                style={{ color: '#C9A84C', background: 'rgba(201,168,76,0.1)' }}
              >
                <span>{t('header.viewAll')}</span>
                <ChevronRight size={14} />
              </div>
            </Link>
          </div>
        </div>

        {/* Right Side: Grid Links */}
        <div className="flex-1 p-6 bg-[rgba(0,0,0,0.2)]">
          <div className={`grid gap-3 ${isMercados ? 'grid-cols-3' : 'grid-cols-2'}`}>
            {item.dropdown!.map((sub) => (
              <Link key={sub.href + sub.label} href={sub.href}>
                <MegaMenuLink label={sub.label} flagAsset={sub.flagAsset} flagEmoji={sub.flagEmoji} isMercados={isMercados} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MegaMenuLink({ label, flagAsset, flagEmoji, isMercados }: { label: string; flagAsset?: string; flagEmoji?: string; isMercados?: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="group relative flex items-center gap-3 p-3.5 rounded-xl cursor-pointer overflow-hidden transition-all duration-300"
      style={{
        background: hovered ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.03)',
        border: '1px solid',
        borderColor: hovered ? 'rgba(201,168,76,0.3)' : 'rgba(255,255,255,0.06)',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hovered ? '0 8px 24px rgba(0,0,0,0.2)' : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Subtle background glow on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: 'radial-gradient(circle at center, rgba(201,168,76,0.1) 0%, transparent 70%)' }}
      />
      
      <div className="flex items-center gap-3 flex-1 relative z-10">
        {flagAsset ? (
          <div className="w-8 h-8 rounded-full overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-sm shrink-0">
            <img src={flagAsset} alt="" className="w-full h-full object-cover" />
          </div>
        ) : flagEmoji ? (
          <span className="text-xl shrink-0">{flagEmoji}</span>
        ) : (
          <div className="w-2 h-2 rounded-full bg-[#1E4FA0] group-hover:bg-[#C9A84C] transition-colors duration-300 shadow-[0_0_8px_rgba(30,79,160,0.8)] group-hover:shadow-[0_0_8px_rgba(201,168,76,0.8)]" />
        )}
        <span className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors duration-200">
          {label}
        </span>
      </div>
      
      <ChevronRight
        size={14}
        className="relative z-10"
        style={{
          color: '#C9A84C',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateX(0)' : 'translateX(-8px)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />
    </div>
  );
}

const PANEL_W = 800;
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
            className="absolute right-0 top-full mt-2 w-44 rounded-xl bg-[#0A1224] border border-[rgba(255,255,255,0.08)] overflow-hidden"
            style={{ 
              boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.05)',
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
                    lang === l.code ? 'text-[#C9A84C] bg-[rgba(201,168,76,0.08)]' : 'text-white/70 hover:bg-[rgba(255,255,255,0.06)] hover:text-white'
                  }`}
                >
                  <span className="text-lg leading-none" style={{ transform: 'translateY(-1px)' }}>{l.flag}</span>
                  <span className="font-medium">{l.label}</span>
                  {lang === l.code && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
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
  const [panelTop, setPanelTop] = useState(72);
  const [caretLeft, setCaretLeft] = useState(PANEL_W / 2);
  const headerRef = useRef<HTMLElement>(null);
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
      if (headerRef.current) {
        setPanelTop(headerRef.current.getBoundingClientRect().bottom + 4);
      }
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
    if (headerRef.current) {
      setPanelTop(headerRef.current.getBoundingClientRect().bottom + 4);
    }
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

      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 sm:pt-4 md:pt-5 px-3 sm:px-4 pointer-events-none">
        <header
          ref={headerRef}
          className="pointer-events-auto relative flex items-center justify-between transition-all duration-500 ease-in-out rounded-[24px] md:rounded-[32px] max-w-[1400px] w-full px-4 sm:px-6"
          style={{
            background: isScrolled ? 'rgba(8, 11, 22, 0.85)' : 'rgba(8, 11, 22, 0.40)',
            backdropFilter: 'blur(32px) saturate(180%)',
            WebkitBackdropFilter: 'blur(32px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: isScrolled ? '0 16px 40px -12px rgba(0,0,0,0.5)' : '0 8px 32px 0px rgba(0,0,0,0.3)',
          }}
        >
          <div className="flex w-full items-center justify-between h-[56px] md:h-[64px]">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" data-testid="link-logo">
                <div className="flex items-center gap-2 cursor-pointer group">
                  <img
                    src="/spayselogo (3).png"
                    alt="Spayse — ir para página inicial"
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
                    background: '#1E4FA0',
                    fontSize: '13px', padding: '8px 16px',
                    boxShadow: '0 0 20px rgba(30,79,160,0.15)' 
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#00b8c8'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#1E4FA0'; e.currentTarget.style.transform = 'translateY(0)'; }}
                  data-testid="link-entrar-header"
                >
                  {t('header.platformCta')}
                </a>
                <a
                  href="/contato"
                  className="inline-flex items-center justify-center gap-1.5 font-semibold transition-all duration-200 rounded-lg text-[#0A1224]"
                  style={{ 
                    background: '#C9A84C',
                    fontSize: '13px', padding: '8px 16px',
                    boxShadow: '0 0 20px rgba(201,168,76,0.15)' 
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#ffcf33'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#C9A84C'; e.currentTarget.style.transform = 'translateY(0)'; }}
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
        </header>
      </div>

      {/* Mega Menu Backdrop — desktop only */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            key="mega-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-40 hidden lg:block"
            style={{ background: 'rgba(4,6,18,0.65)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
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
              top: panelTop,
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
              className="absolute inset-0 bg-navy-deep/98 backdrop-blur-xl"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.nav
              className="absolute right-0 top-0 bottom-0 w-80 max-w-full overflow-y-auto bg-surface border-l border-subtle"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-5 border-b border-subtle">
                <div className="flex items-center gap-2">
                  <img src="/spayselogo (3).png" alt="Spayse" className="h-7" />
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
                    <button onClick={() => { setLang('pt'); window.location.reload(); }} className={`text-xs font-bold w-10 h-10 rounded-full flex items-center justify-center transition-all ${lang === 'pt' ? 'bg-[#C9A84C] text-black shadow-sm' : 'text-white/60 hover:text-white'}`}>PT</button>
                    <button onClick={() => { setLang('en'); window.location.reload(); }} className={`text-xs font-bold w-10 h-10 rounded-full flex items-center justify-center transition-all ${lang === 'en' ? 'bg-[#C9A84C] text-black shadow-sm' : 'text-white/60 hover:text-white'}`}>EN</button>
                    <button onClick={() => { setLang('es'); window.location.reload(); }} className={`text-xs font-bold w-10 h-10 rounded-full flex items-center justify-center transition-all ${lang === 'es' ? 'bg-[#C9A84C] text-black shadow-sm' : 'text-white/60 hover:text-white'}`}>ES</button>
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
            ? 'text-white bg-transparent'
            : 'text-white/70 hover:text-white hover:bg-transparent'
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
                      color: isSubActive ? '#C9A84C' : 'rgba(248,250,252,0.62)',
                      borderColor: isSubActive ? '#C9A84C' : 'rgba(201,168,76,0.20)',
                      background: isSubActive ? 'rgba(201,168,76,0.07)' : '',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#C9A84C';
                      e.currentTarget.style.borderColor = '#C9A84C';
                      e.currentTarget.style.background = 'rgba(201,168,76,0.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = isSubActive ? '#C9A84C' : 'rgba(248,250,252,0.62)';
                      e.currentTarget.style.borderColor = isSubActive ? '#C9A84C' : 'rgba(201,168,76,0.20)';
                      e.currentTarget.style.background = isSubActive ? 'rgba(201,168,76,0.07)' : '';
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
