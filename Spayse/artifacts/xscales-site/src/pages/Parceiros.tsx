import { useRef } from 'react';
import { Link } from 'wouter';
import { motion, useInView } from 'framer-motion';
import { Code2, Briefcase, Globe, Network, ArrowRight } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import { usePageMeta } from '@/hooks/usePageMeta';
import SectionHeader from '@/components/common/SectionHeader';
import { getLang } from '@/lib/lang';
import { tr } from '@/lib/i18n';

export default function Parceiros() {
  const lang = getLang();
  const t = (key: string) => tr(key, lang);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  usePageMeta({
    title: `${t('parc.label')} | XSCALES`,
    description: t('parc.subtitle'),
  });

  const partnerTypes = [
    {
      icon: Code2,
      title: t('parc.t1Title'),
      description: t('parc.t1Desc'),
      benefits: [t('parc.t1b1'), t('parc.t1b2'), t('parc.t1b3')],
    },
    {
      icon: Briefcase,
      title: t('parc.t2Title'),
      description: t('parc.t2Desc'),
      benefits: [t('parc.t2b1'), t('parc.t2b2'), t('parc.t2b3')],
    },
    {
      icon: Globe,
      title: t('parc.t3Title'),
      description: t('parc.t3Desc'),
      benefits: [t('parc.t3b1'), t('parc.t3b2'), t('parc.t3b3')],
    },
    {
      icon: Network,
      title: t('parc.t4Title'),
      description: t('parc.t4Desc'),
      benefits: [t('parc.t4b1'), t('parc.t4b2'), t('parc.t4b3')],
    },
  ];

  return (
    <main>
      <PageHero
        label={t('parc.label')}
        title={t('parc.title')}
        subtitle={t('parc.subtitle')}
        primaryCTA={{ label: t('parc.ctaPrimary'), href: '/contato' }}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: t('parc.label') }]}
      />

      <section className="py-24 md:py-32" style={{ background: '#050816' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label={t('parc.typesLabel')}
            title={t('parc.typesTitle')}
            subtitle={t('parc.typesSub')}
          />

          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnerTypes.map((pt, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-7 rounded-2xl"
                style={{
                  background: 'rgba(11,16,32,0.80)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,197,0,0.22)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'; }}
                data-testid={`card-partner-type-${i}`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(255,197,0,0.10)', border: '1px solid rgba(255,197,0,0.18)' }}
                >
                  <pt.icon size={22} style={{ color: '#FFC500' }} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                  {pt.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(248,250,252,0.62)' }}>
                  {pt.description}
                </p>
                <div className="space-y-2">
                  {pt.benefits.map((b, bi) => (
                    <div key={bi} className="flex items-center gap-2">
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: '#FFC500' }}
                      />
                      <span className="text-xs" style={{ color: 'rgba(248,250,252,0.60)' }}>{b}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <h2
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              style={{ letterSpacing: '-0.025em' }}
            >
              {t('parc.ctaTitle')}
            </h2>
            <p className="mb-8 max-w-xl mx-auto" style={{ color: 'rgba(248,250,252,0.60)' }}>
              {t('parc.ctaDesc')}
            </p>
            <Link href="/contato" data-testid="link-parceiros-cta">
              <button
                className="px-7 py-3.5 rounded-lg text-sm font-semibold transition-all duration-200"
                style={{
                  background: '#FFC500',
                  color: '#050816',
                  boxShadow: '0 0 28px rgba(255,197,0,0.28)',
                }}
              >
                {t('parc.ctaBtn')}
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
