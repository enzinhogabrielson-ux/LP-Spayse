import { useRef } from 'react';
import { Link } from 'wouter';
import { motion, useInView } from 'framer-motion';
import { usePageMeta } from '@/hooks/usePageMeta';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import { metrics } from '@/data/company';
import MetricCard from '@/components/cards/MetricCard';
import { getLang } from '@/lib/lang';
import { tr } from '@/lib/i18n';

export default function Sobre() {
  const lang = getLang();
  const t = (key: string) => tr(key, lang);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  usePageMeta({
    title: `${t('sobre.label')} | Spayse`,
    description: t('sobre.subtitle'),
  });

  const sections = [
    { image: '/images/sobre-who.jpg', tag: t('sobre.s1Tag'), title: t('sobre.s1Title'), content: t('sobre.s1Content') },
    { image: '/images/sobre-values.jpg', tag: t('sobre.s2Tag'), title: t('sobre.s2Title'), content: t('sobre.s2Content') },
    { image: '/images/sobre-how.jpg', tag: t('sobre.s3Tag'), title: t('sobre.s3Title'), content: t('sobre.s3Content') },
    { image: '/images/sobre-vision.jpg', tag: t('sobre.s4Tag'), title: t('sobre.s4Title'), content: t('sobre.s4Content') },
  ];

  return (
    <main>
      <PageHero
        label={t('sobre.label')}
        title={t('sobre.title')}
        subtitle={t('sobre.subtitle')}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: t('nav.sobre') }]}
      />

      <section className="py-20" style={{ background: '#050816' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.06)' }}
          >
            {metrics.map((m, i) => (
              <div key={i} style={{ background: '#050816' }}>
                <MetricCard value={m.value} label={m.label} index={i} animateValue />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32" style={{ background: 'linear-gradient(180deg, #050816 0%, #0B1020 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ref} className="space-y-12">
            {sections.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center`}
                data-testid={`section-sobre-${i}`}
              >
                {/* Photo panel */}
                <div className="lg:w-5/12 flex-shrink-0">
                  <div className="group relative overflow-hidden rounded-2xl" style={{ height: '320px' }}>
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(to bottom, rgba(5,8,22,0.08) 0%, rgba(5,8,22,0.65) 100%)' }}
                    />
                    <div className="absolute bottom-5 left-5">
                      <span
                        className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-2"
                        style={{ background: 'rgba(201,168,76,0.85)', backdropFilter: 'blur(6px)', color: '#050816', letterSpacing: '0.05em' }}
                      >
                        {s.tag}
                      </span>
                      <div className="h-0.5 w-10 rounded-full" style={{ background: 'linear-gradient(90deg,#C9A84C,#1E4FA0)' }} />
                    </div>
                  </div>
                </div>

                {/* Text panel */}
                <div className="lg:w-7/12">
                  <h3
                    className="text-2xl font-bold text-white mb-4"
                    style={{ letterSpacing: '-0.025em' }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed" style={{ color: 'rgba(248,250,252,0.68)' }}>
                    {s.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#050816' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
            {t('sobre.ctaTitle')}
          </h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: 'rgba(248,250,252,0.60)' }}>
            {t('sobre.ctaDesc')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/solucoes" data-testid="link-sobre-solutions">
              <button
                className="px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200"
                style={{ background: '#C9A84C', color: '#050816', boxShadow: '0 0 24px rgba(201,168,76,0.25)' }}
              >
                {t('sobre.ctaBtn1')}
              </button>
            </Link>
            <Link href="/contato" data-testid="link-sobre-contact">
              <button
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200"
                style={{ border: '1px solid rgba(201,168,76,0.30)', color: '#C9A84C', background: 'transparent' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(201,168,76,0.08)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
              >
                {t('sobre.ctaBtn2')}
                <ArrowRight size={14} />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
