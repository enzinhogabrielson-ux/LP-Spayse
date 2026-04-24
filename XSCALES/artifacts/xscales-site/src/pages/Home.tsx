import { useRef, useState } from 'react';
import { Link } from 'wouter';
import { usePageMeta } from '@/hooks/usePageMeta';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Activity, ArrowRight, ShieldCheck, Wallet, User, Briefcase, CreditCard, TrendingUp, CheckCircle } from 'lucide-react';
import SectionHeader from '@/components/common/SectionHeader';
import SolutionCard from '@/components/cards/SolutionCard';
import MarketCard from '@/components/cards/MarketCard';
import BlogCard from '@/components/cards/BlogCard';
import MetricCard from '@/components/cards/MetricCard';
import Button from '@/components/common/Button';
import CalculatorSection from '@/components/sections/CalculatorSection';
import { solutions } from '@/data/solutions';
import { overviewMarkets } from '@/data/markets';
import { blogPosts } from '@/data/blog';
import { metrics } from '@/data/company';
import { getLang } from '@/lib/lang';
import { tr } from '@/lib/i18n';

const lang = getLang();

const homeLocalizedCopy = {
  mediaCta: {
    pt: 'Acessar mídia e blog',
    en: 'Access media and blog',
    es: 'Acceder a medios y blog',
  },
  finalTitle: {
    pt: 'Leve sua operação para uma estrutura preparada para crescer',
    en: 'Take your operation to infrastructure built to grow',
    es: 'Lleva tu operación a una estructura preparada para crecer',
  },
  finalDesc: {
    pt: 'Fale com a XSCALES e descubra como simplificar fluxos, consolidar operações e avançar com mais inteligência.',
    en: 'Talk to XSCALES and discover how to simplify flows, consolidate operations and move forward with more intelligence.',
    es: 'Habla con XSCALES y descubre cómo simplificar flujos, consolidar operaciones y avanzar con más inteligencia.',
  },
};

function HeroSection() {
  return (
    <section id="main-content" className="relative overflow-hidden" style={{ backgroundColor: '#111522' }}>

      {/* Vídeo absolute — topo colado ao topo da section, fundo colado ao fundo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.15 }}
        className="absolute top-0 bottom-0 right-0 hidden lg:block"
        style={{ width: '50%', overflow: 'hidden' }}
        aria-hidden="true"
      >
        <iframe
          src="https://player.vimeo.com/video/1185645683?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          style={{ width: '100%', height: '100%' }}
          title="animxscales2"
        />
      </motion.div>

      {/* Conteúdo esquerdo com padding próprio */}
      <div className="relative pt-24 pb-20 md:pt-36 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:w-1/2 flex flex-col items-center text-center md:items-start md:text-left">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="badge-teal mb-6 self-center md:self-start"
            >
              {tr('home.heroBadge', lang)}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] text-center md:text-left"
              style={{ letterSpacing: '-0.035em' }}
            >
               <span className="block">{tr('home.heroTitle1', lang)}</span>
               <span className="block">{tr('home.heroTitle2', lang)}</span>
               <span className="block gradient-text-teal-gold text-glow">{tr('home.heroTitle3', lang)}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mt-6 h-px w-12 rounded-full mx-auto md:mx-0"
              style={{ background: 'linear-gradient(90deg, #009FAD, #FFC500)' }}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="mt-5 text-base md:text-lg leading-relaxed text-muted-62 max-w-md mx-auto md:mx-0 text-center md:text-left"
            >
              {tr('home.heroDesc', lang)}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="mt-9 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start w-full sm:w-auto"
            >
              <Button href="/contato" variant="primary" size="lg" data-testid="link-hero-primary">
                {tr('home.heroCta1', lang)}
              </Button>
              <Button href="/solucoes" variant="secondary" size="lg" data-testid="link-hero-secondary">
                {tr('home.heroCta2', lang)}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px rounded-xl overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.06)' }}
            >
              {metrics.map((m, i) => {
                const statLabels = [
                  tr('home.stat1', lang),
                  tr('home.stat2', lang),
                  tr('home.stat3', lang),
                  tr('home.stat4', lang),
                ];
                return (
                  <div key={i} className="bg-xscales">
                    <MetricCard value={m.value} label={statLabels[i] || m.label} index={i} animateValue compact />
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, #050816 100%)',
        }}
      />
    </section>
  );
}

function ValuePropositionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const vpCards = [
    {
      image: '/images/vp-integration.png',
      tag: tr('home.vp1Tag', lang),
      title: tr('home.vp1Title', lang),
      description: tr('home.vp1Desc', lang),
    },
    {
      image: '/images/vp-coverage.png',
      tag: tr('home.vp2Tag', lang),
      title: tr('home.vp2Title', lang),
      description: tr('home.vp2Desc', lang),
    },
    {
      image: '/images/vp-compliance.png',
      tag: tr('home.vp3Tag', lang),
      title: tr('home.vp3Title', lang),
      description: tr('home.vp3Desc', lang),
    },
    {
      image: '/images/vp-growth.png',
      tag: tr('home.vp4Tag', lang),
      title: tr('home.vp4Title', lang),
      description: tr('home.vp4Desc', lang),
    },
  ];

  return (
    <section ref={ref} className="theme-light py-24 md:py-32 bg-section-light border-t border-b border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label={tr('home.vpLabel', lang)}
          title={tr('home.vpTitle', lang)}
          subtitle={tr('home.vpSub', lang)}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {vpCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative overflow-hidden rounded-2xl cursor-default"
              style={{ height: '440px' }}
              data-testid={`card-value-${i}`}
            >
              {/* Background image */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Top badge */}
              <div className="absolute top-4 left-4 z-10">
                <span
                  className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                  style={{
                    background: 'rgba(0,159,173,0.85)',
                    backdropFilter: 'blur(8px)',
                    color: '#fff',
                    letterSpacing: '0.06em',
                  }}
                >
                  {card.tag}
                </span>
              </div>

              {/* Dark gradient overlay */}
              <div
                className="absolute inset-0 z-10"
                style={{
                  background: 'linear-gradient(to bottom, rgba(5,8,22,0.10) 0%, rgba(5,8,22,0.45) 45%, rgba(5,8,22,0.92) 75%, rgba(5,8,22,0.98) 100%)',
                }}
              />

              {/* Content at bottom */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                {/* Accent divider */}
                <div
                  className="mb-3 h-0.5 w-8 rounded-full"
                  style={{ background: 'linear-gradient(90deg, #009FAD, #FFC500)' }}
                />
                <div
                  className="text-lg font-bold mb-2 leading-snug"
                  style={{ letterSpacing: '-0.02em', color: '#ffffff' }}
                >
                  {card.title}
                </div>
                <div
                  className="text-sm leading-relaxed"
                  style={{ color: 'rgba(248,250,252,0.72)' }}
                >
                  {card.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionsSection() {
  return (
    <section className="py-24 md:py-32 bg-xscales">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label={tr('home.solLabel', lang)}
          title={tr('home.solTitle', lang)}
          subtitle={tr('home.solSub', lang)}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.slice(0, 3).map((s, i) => (
            <SolutionCard key={s.id} solution={s} index={i} />
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-5 mt-5">
          {solutions.slice(3, 5).map((s, i) => (
            <div
              key={s.id}
              className="w-full md:w-[calc(50%-10px)]"
              style={{ flex: '0 0 calc((100% - 40px) / 3)', minWidth: 260 }}
            >
              <SolutionCard solution={s} index={i + 3} />
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/solucoes" variant="ghost" data-testid="link-explore-solutions">
            {tr('home.solExplore', lang)}
            <ArrowRight size={14} />
          </Button>
        </div>
      </div>
    </section>
  );
}

const platformPrinciples = [
  {
    icon: Wallet,
    title: tr('home.princ1Title', lang),
    description: tr('home.princ1Desc', lang),
  },
  {
    icon: Activity,
    title: tr('home.princ2Title', lang),
    description: tr('home.princ2Desc', lang),
  },
  {
    icon: ShieldCheck,
    title: tr('home.princ3Title', lang),
    description: tr('home.princ3Desc', lang),
  },
];

function PlatformExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="theme-light py-24 md:py-32 bg-section-light border-t border-b border-subtle overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label={tr('home.platLabel', lang)}
          title={tr('home.platTitle', lang)}
          subtitle={tr('home.platSub', lang)}
        />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="relative mt-14"
        >
          <div
            className="absolute inset-x-10 -top-8 h-24 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(0,159,173,0.2) 0%, rgba(255,197,0,0.15) 45%, transparent 75%)',
            }}
            aria-hidden="true"
          />

          <div className="relative overflow-hidden rounded-[32px] border border-subtle bg-[linear-gradient(180deg,rgba(11,16,32,0.96)_0%,rgba(8,14,26,0.98)_100%)] p-3 md:p-4 shadow-[0_36px_90px_-58px_rgba(0,0,0,0.96)]">
            <img
              src="/images/platform-dashboard-home.jpeg"
              alt="Interface administrativa da XSCALES exibindo saldo em carteira, vendas do dia, conversão e saúde financeira."
              className="w-full rounded-[24px] border border-white/6 object-cover"
              loading="lazy"
            />
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {platformPrinciples.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.12 + index * 0.08 }}
                  className="rounded-2xl border border-subtle bg-surface px-5 py-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-08 text-primary-gold">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-60">{item.description}</p>
                </motion.article>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.34 }}
            className="mt-10 text-center"
          >
            <Button href="/contato" variant="primary" size="lg" data-testid="link-platform-demo">
              {tr('home.platCta', lang)}
              <ArrowRight size={15} />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function MarketsSection() {
  usePageMeta({
    title: tr('home.metaTitle', lang),
    description: tr('home.metaDesc', lang),
  });

  return (
    <section className="theme-light py-24 md:py-32 bg-section-light border-t border-b border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label={tr('home.mkLabel', lang)}
          title={tr('home.mkTitle', lang)}
          subtitle={tr('home.mkSub', lang)}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center">
          {overviewMarkets.map((m, i) => (
            <div key={m.id} className="w-full max-w-[320px] sm:max-w-none">
              <MarketCard market={m} index={i} />
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/mercados" variant="ghost" data-testid="link-see-markets">
            {tr('home.mkCta', lang)}
            <ArrowRight size={14} />
          </Button>
        </div>
      </div>
    </section>
  );
}

function SecuritySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="theme-light py-24 md:py-32 bg-section-light border-t border-b border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="badge-primary-alt mb-5 self-center md:self-start"
            >
              {tr('home.secBadge', lang)}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4 text-center md:text-left"
              style={{ letterSpacing: '-0.025em' }}
            >
              {tr('home.secTitle', lang)}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base leading-relaxed mb-8 text-muted-60 text-center md:text-left"
            >
              {tr('home.secDesc', lang)}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center md:justify-start"
            >
              <Button href="/seguranca" variant="ghost" data-testid="link-security-cta">
                {tr('home.secCta', lang)}
                <ArrowRight size={14} />
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="relative"
          >
            <div
              className="absolute inset-x-10 top-1/2 h-24 -translate-y-1/2 blur-3xl"
              style={{ background: 'radial-gradient(circle, rgba(0,159,173,0.14) 0%, rgba(255,197,0,0.12) 52%, transparent 78%)' }}
              aria-hidden="true"
            />
            <img
              src="/images/item3-security.png"
              alt="Ecossistema visual da XSCALES conectando Pix, PayPal, crédito, boleto, débito, relatórios e saque em uma única infraestrutura."
              className="w-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const devCards = [
  { image: '/images/theme-api.jpg', get tag() { return tr('home.dev1Tag', getLang()) }, get title() { return tr('home.dev1Title', getLang()) }, get desc() { return tr('home.dev1Desc', getLang()) } },
  { image: '/images/vp-integration.jpg', get tag() { return tr('home.dev2Tag', getLang()) }, get title() { return tr('home.dev2Title', getLang()) }, get desc() { return tr('home.dev2Desc', getLang()) } },
  { image: '/images/theme-sandbox.jpg', get tag() { return tr('home.dev3Tag', getLang()) }, get title() { return tr('home.dev3Title', getLang()) }, get desc() { return tr('home.dev3Desc', getLang()) } },
  { image: '/images/theme-support.jpg', get tag() { return tr('home.dev4Tag', getLang()) }, get title() { return tr('home.dev4Title', getLang()) }, get desc() { return tr('home.dev4Desc', getLang()) } },
];

function DevelopersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-24 md:py-32 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl px-10 py-8 md:px-14 md:py-10 border border-subtle" style={{ background: '#111522' }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4 }}
                className="badge-teal mb-5 self-center md:self-start"
              >
                {tr('home.devBadge', lang)}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left"
                style={{ letterSpacing: '-0.025em' }}
              >
                <span className="gradient-text-teal-gold">{tr('home.devTitle1', lang)}</span>
                <span className="text-white">{tr('home.devTitle2', lang)}</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base leading-relaxed mb-8 text-muted-60 text-center md:text-left"
              >
                {tr('home.devDesc', lang)}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex justify-center md:justify-start"
              >
                <a href="/desenvolvedores" className="btn-teal inline-flex items-center gap-2" data-testid="link-developers-cta">
                  {tr('home.devCta', lang)}
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="flex justify-center">
                <video
                  src="/animxsc.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-hidden="true"
                  style={{
                    width: '72%',
                    objectFit: 'contain',
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Multi-Step Diagnostic Form ────────────────────────────────────────────

function DiagnosticForm() {
  const STEPS = [
    { id: 1, icon: User, title: tr('form.step1Title', lang), subtitle: tr('form.step1Sub', lang) },
    { id: 2, icon: Briefcase, title: tr('form.step2Title', lang), subtitle: tr('form.step2Sub', lang) },
    { id: 3, icon: CreditCard, title: tr('form.step3Title', lang), subtitle: tr('form.step3Sub', lang) },
    { id: 4, icon: TrendingUp, title: tr('form.step4Title', lang), subtitle: tr('form.step4Sub', lang) },
  ];

  const marketOptions = [tr('form.market1', lang), tr('form.market2', lang), tr('form.market3', lang), tr('form.market4', lang)];
  const paymentOptions = [tr('form.pay1', lang), tr('form.pay2', lang), tr('form.pay3', lang), tr('form.pay4', lang)];
  const revenueOptions = [tr('form.rev1', lang), tr('form.rev2', lang), tr('form.rev3', lang), tr('form.rev4', lang), tr('form.rev5', lang)];

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    market: '',
    payment: '',
    revenue: '',
  });
  const [errors, setErrors] = useState<{ name?: string; whatsapp?: string }>({});

  const totalSteps = STEPS.length;
  const currentStep = STEPS[step - 1];
  const StepIcon = currentStep.icon;

  const formatPhone = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const validateStep1 = () => {
    const e: { name?: string; whatsapp?: string } = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) e.name = tr('form.nameError', lang);
    const digits = formData.whatsapp.replace(/\D/g, '');
    if (digits.length < 10) e.whatsapp = tr('form.whatsappError', lang);
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && !validateStep1()) return;
    if (step < totalSteps) setStep(s => s + 1);
    else handleSubmit();
  };

  const handleSubmit = async () => {
    await new Promise(r => setTimeout(r, 600));
    setSubmitted(true);
  };

  const canProceed = () => {
    if (step === 1) return formData.name.trim().length >= 2 && formData.whatsapp.replace(/\D/g, '').length >= 10;
    if (step === 2) return !!formData.market;
    if (step === 3) return !!formData.payment;
    if (step === 4) return !!formData.revenue;
    return true;
  };

  const inputBase: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.10)',
    borderRadius: '12px',
    padding: '14px 16px',
    color: '#F8FAFC',
    fontSize: '15px',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <div
      style={{
        background: 'rgba(11,16,32,0.92)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '20px',
        padding: '32px',
        width: '100%',
        maxWidth: '520px',
        backdropFilter: 'blur(16px)',
      }}
    >
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45 }}
          className="text-center py-8"
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
            style={{ background: 'rgba(0,159,173,0.15)', border: '1px solid rgba(0,159,173,0.35)' }}
          >
            <CheckCircle size={32} style={{ color: '#009FAD' }} />
          </div>
          <div className="text-xl font-bold text-white mb-3" role="heading" aria-level={3} style={{ color: '#fff' }}>{tr('form.successTitle', lang)}</div>
          <div className="text-sm leading-relaxed" style={{ color: 'rgba(248,250,252,0.62)' }}>
            {tr('form.thankYou', lang)}, <strong className="text-white" style={{ color: '#fff' }}>{formData.name.split(' ')[0]}</strong>!<br />
            {tr('form.successMsg', lang)}</div>
        </motion.div>
      ) : (
        <>
          {/* Progress bar */}
          <div className="flex gap-1.5 mb-6">
            {STEPS.map((s) => (
              <div
                key={s.id}
                style={{
                  flex: 1,
                  height: '3px',
                  borderRadius: '99px',
                  background: s.id <= step ? '#009FAD' : 'rgba(255,255,255,0.12)',
                  transition: 'background 0.4s ease',
                }}
              />
            ))}
          </div>

          {/* Step content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.28 }}
            >
              {/* Step header */}
              <div className="flex items-start gap-3 mb-5">
                <div
                  style={{
                    background: 'rgba(0,159,173,0.12)',
                    border: '1px solid rgba(0,159,173,0.25)',
                    borderRadius: '10px',
                    padding: '8px',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <StepIcon size={18} style={{ color: '#009FAD' }} />
                </div>
                <div>
                  <div className="text-xl font-bold text-white" style={{ letterSpacing: '-0.02em', color: '#fff' }} role="heading" aria-level={3}>
                    {currentStep.title}
                  </div>
                  <div className="text-sm mt-0.5" style={{ color: 'rgba(248,250,252,0.55)' }}>{currentStep.subtitle}</div>
                </div>
              </div>

              {/* Step 1: Name + WhatsApp */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(248,250,252,0.70)' }}>
                      {tr('form.nameLabel', lang)}
                    </label>
                    <input
                      type="text"
                      placeholder={tr('form.namePlaceholder', lang)}
                      value={formData.name}
                      onChange={e => setFormData(d => ({ ...d, name: e.target.value }))}
                      onFocus={e => { e.currentTarget.style.borderColor = '#FFC500'; }}
                      onBlur={e => { e.currentTarget.style.borderColor = errors.name ? '#ef4444' : 'rgba(255,255,255,0.10)'; }}
                      style={{ ...inputBase, borderColor: errors.name ? '#ef4444' : 'rgba(255,255,255,0.10)' }}
                      data-testid="diag-input-name"
                    />
                    {errors.name && <p className="text-xs mt-1.5" style={{ color: '#ef4444' }}>{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(248,250,252,0.70)' }}>
                      {tr('form.whatsappLabel', lang)}
                    </label>
                    <input
                      type="tel"
                      placeholder="(00) 00000-0000"
                      value={formData.whatsapp}
                      onChange={e => setFormData(d => ({ ...d, whatsapp: formatPhone(e.target.value) }))}
                      onFocus={e => { e.currentTarget.style.borderColor = '#FFC500'; }}
                      onBlur={e => { e.currentTarget.style.borderColor = errors.whatsapp ? '#ef4444' : 'rgba(255,255,255,0.10)'; }}
                      style={{ ...inputBase, borderColor: errors.whatsapp ? '#ef4444' : 'rgba(255,255,255,0.10)' }}
                      data-testid="diag-input-whatsapp"
                    />
                    {errors.whatsapp && <p className="text-xs mt-1.5" style={{ color: '#ef4444' }}>{errors.whatsapp}</p>}
                  </div>
                </div>
              )}

              {/* Step 2: Market */}
              {step === 2 && (
                <div className="grid grid-cols-2 gap-3">
                  {marketOptions.map(opt => (
                    <button
                      key={opt}
                      onClick={() => setFormData(d => ({ ...d, market: opt }))}
                      style={{
                        background: formData.market === opt ? 'rgba(255,197,0,0.10)' : 'rgba(255,255,255,0.04)',
                        border: `1px solid ${formData.market === opt ? '#FFC500' : 'rgba(255,255,255,0.10)'}`,
                        borderRadius: '12px',
                        padding: '14px 16px',
                        color: formData.market === opt ? '#FFC500' : '#F8FAFC',
                        fontSize: '14px',
                        fontWeight: 500,
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                      }}
                      data-testid={`diag-market-${opt.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <span
                        style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          border: `2px solid ${formData.market === opt ? '#FFC500' : 'rgba(255,255,255,0.25)'}`,
                          flexShrink: 0,
                          background: formData.market === opt ? '#FFC500' : 'transparent',
                          transition: 'all 0.2s',
                        }}
                      />
                      {opt}
                    </button>
                  ))}
                </div>
              )}

              {/* Step 3: Payment */}
              {step === 3 && (
                <div className="space-y-2.5">
                  {paymentOptions.map(opt => (
                    <button
                      key={opt}
                      onClick={() => setFormData(d => ({ ...d, payment: opt }))}
                      style={{
                        width: '100%',
                        background: formData.payment === opt ? 'rgba(255,197,0,0.10)' : 'rgba(255,255,255,0.04)',
                        border: `1px solid ${formData.payment === opt ? '#FFC500' : 'rgba(255,255,255,0.10)'}`,
                        borderRadius: '12px',
                        padding: '14px 16px',
                        color: formData.payment === opt ? '#FFC500' : '#F8FAFC',
                        fontSize: '14px',
                        fontWeight: 500,
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                      }}
                      data-testid={`diag-payment-${opt.toLowerCase().replace(/\s+/g, '-').slice(0, 20)}`}
                    >
                      <span
                        style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          border: `2px solid ${formData.payment === opt ? '#FFC500' : 'rgba(255,255,255,0.25)'}`,
                          flexShrink: 0,
                          background: formData.payment === opt ? '#FFC500' : 'transparent',
                          transition: 'all 0.2s',
                        }}
                      />
                      {opt}
                    </button>
                  ))}
                </div>
              )}

              {/* Step 4: Revenue */}
              {step === 4 && (
                <div className="space-y-2.5">
                  {revenueOptions.map(opt => (
                    <button
                      key={opt}
                      onClick={() => setFormData(d => ({ ...d, revenue: opt }))}
                      style={{
                        width: '100%',
                        background: formData.revenue === opt ? 'rgba(0,159,173,0.12)' : 'rgba(255,255,255,0.04)',
                        border: `1px solid ${formData.revenue === opt ? '#009FAD' : 'rgba(255,255,255,0.10)'}`,
                        borderRadius: '12px',
                        padding: '14px 16px',
                        color: formData.revenue === opt ? '#009FAD' : '#F8FAFC',
                        fontSize: '14px',
                        fontWeight: 500,
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                      }}
                      data-testid={`diag-revenue-${opt.toLowerCase().replace(/\s+/g, '-').slice(0, 20)}`}
                    >
                      <span
                        style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          border: `2px solid ${formData.revenue === opt ? '#009FAD' : 'rgba(255,255,255,0.25)'}`,
                          flexShrink: 0,
                          background: formData.revenue === opt ? '#009FAD' : 'transparent',
                          transition: 'all 0.2s',
                        }}
                      />
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center gap-3 mt-6">
            {step > 1 && (
              <button
                onClick={() => setStep(s => s - 1)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'rgba(248,250,252,0.55)',
                  fontSize: '14px',
                  cursor: 'pointer',
                  padding: '0 4px',
                  fontWeight: 500,
                  flexShrink: 0,
                }}
                data-testid="diag-btn-back"
              >
                {tr('form.back', lang)}
              </button>
            )}
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              style={{
                flex: 1,
                background: step === totalSteps
                  ? (canProceed() ? '#009FAD' : 'rgba(0,159,173,0.35)')
                  : (canProceed() ? '#FFC500' : 'rgba(255,197,0,0.30)'),
                color: step === totalSteps ? '#fff' : '#050816',
                border: 'none',
                borderRadius: '999px',
                padding: '15px 24px',
                fontSize: '15px',
                fontWeight: 600,
                cursor: canProceed() ? 'pointer' : 'not-allowed',
                transition: 'all 0.25s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
              }}
              data-testid="diag-btn-next"
            >
              {step === totalSteps ? tr('form.finish', lang) : <>{tr('form.next', lang)} <ArrowRight size={15} /></>}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="theme-light py-24 md:py-32 bg-section-light border-t border-b border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center md:items-start md:text-left"
          >
            <span className="badge-primary-alt mb-5 self-center md:self-start">{tr('form.diagBadge', lang)}</span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left"
              style={{ letterSpacing: '-0.025em', color: '#0f172a' }}
            >
              {tr('form.diagTitle', lang)}
            </h2>
            <p className="text-base leading-relaxed mb-6 text-center md:text-left" style={{ color: '#475569' }}>
              {tr('form.diagDesc', lang)}
            </p>
            <div className="space-y-3 flex flex-col items-center md:items-start">
              {[
                tr('form.diagBenefit1', lang),
                tr('form.diagBenefit2', lang),
                tr('form.diagBenefit3', lang),
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(0,159,173,0.15)', border: '1px solid rgba(0,159,173,0.30)' }}
                  >
                    <CheckCircle size={11} style={{ color: '#009FAD' }} />
                  </div>
                  <span className="text-sm" style={{ color: '#475569' }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center lg:justify-end theme-reset"
          >
            <DiagnosticForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-xscales">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl p-12 md:p-16 text-center bg-gradient-to-br from-surface to-elevated border border-teal-20"
        >
          <div
            className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse, rgba(0,159,173,0.10) 0%, transparent 70%)',
              filter: 'blur(50px)',
            }}
            aria-hidden="true"
          />
          <div
            className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse, rgba(255,197,0,0.08) 0%, transparent 70%)',
              filter: 'blur(50px)',
            }}
            aria-hidden="true"
          />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5" style={{ letterSpacing: '-0.03em' }}>
              Leve sua operação para uma estrutura preparada para crescer
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto text-muted-62">
              Fale com a XSCALES e descubra como simplificar fluxos, consolidar operações e avançar com mais inteligência.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="/contato" variant="primary" size="lg" data-testid="link-final-cta-primary">
                Falar com um especialista
              </Button>
              <Button href="/contato" variant="secondary" size="lg" data-testid="link-final-cta-secondary">
                Solicitar contato
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function LocalizedMediaSection() {
  usePageMeta({
    title: tr('home.metaTitle', lang),
    description: tr('home.metaDesc', lang),
  });

  return (
    <section className="py-24 md:py-32 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label={tr('midia.label', lang)}
          title={tr('midia.title', lang)}
          subtitle={tr('midia.subtitle', lang)}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {blogPosts.slice(0, 3).map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/midia" variant="ghost" data-testid="link-media-cta">
            {homeLocalizedCopy.mediaCta[lang]}
            <ArrowRight size={14} />
          </Button>
        </div>
      </div>
    </section>
  );
}

function LocalizedCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="theme-light py-24 md:py-32 bg-section-light border-t border-b border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl p-12 md:p-16 text-center bg-gradient-to-br from-surface to-elevated border border-teal-20"
        >
          <div
            className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse, rgba(0,159,173,0.10) 0%, transparent 70%)',
              filter: 'blur(50px)',
            }}
            aria-hidden="true"
          />
          <div
            className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse, rgba(255,197,0,0.08) 0%, transparent 70%)',
              filter: 'blur(50px)',
            }}
            aria-hidden="true"
          />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5" style={{ letterSpacing: '-0.03em' }}>
              {homeLocalizedCopy.finalTitle[lang]}
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto text-muted-62">{homeLocalizedCopy.finalDesc[lang]}</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="/contato" variant="primary" size="lg" data-testid="link-final-cta-primary">
                {tr('home.finalCtaPrimary', lang)}
              </Button>
              <Button href="/contato" variant="secondary" size="lg" data-testid="link-final-cta-secondary">
                {tr('home.finalCtaSecondary', lang)}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  usePageMeta({
    title: tr('home.metaTitle', lang),
    description: tr('home.metaDesc', lang),
  });
  usePageMeta({
    title: 'XSCALES | Infraestrutura Financeira para Escala Global',
    description: 'A XSCALES conecta pagamentos, banking e operação internacional em uma única estrutura tecnológica, preparada para mercados locais e expansão global.',
  });

  usePageMeta({
    title: tr('home.metaTitle', lang),
    description: tr('home.metaDesc', lang),
  });

  return (
    <main>
      <HeroSection />
      <ValuePropositionSection />
      <SolutionsSection />
      <PlatformExperienceSection />
      <CalculatorSection />
      <MarketsSection />
      <SecuritySection />
      <DevelopersSection />
      <PartnersSection />
      <LocalizedMediaSection />
      <LocalizedCTASection />
    </main>
  );
}
