import { useRef } from 'react';
import { Link } from 'wouter';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import { usePageMeta } from '@/hooks/usePageMeta';
import SectionHeader from '@/components/common/SectionHeader';
import { getLang } from '@/lib/lang';
import { tr } from '@/lib/i18n';

export default function Desenvolvedores() {
  const lang = getLang();
  const t = (key: string) => tr(key, lang);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  usePageMeta({
    title: `${t('dev.label')} | XSCALES`,
    description: t('dev.subtitle'),
  });

  const blocks = [
    { image: '/images/dev-apis.png', tag: t('dev.b1Tag'), title: t('dev.b1Title'), description: t('dev.b1Desc') },
    { image: '/images/dev-docs.png', tag: t('dev.b2Tag'), title: t('dev.b2Title'), description: t('dev.b2Desc') },
    { image: '/images/dev-sandbox.png', tag: t('dev.b3Tag'), title: t('dev.b3Title'), description: t('dev.b3Desc') },
    { image: '/images/dev-sdks.png', tag: t('dev.b4Tag'), title: t('dev.b4Title'), description: t('dev.b4Desc') },
    { image: '/images/dev-support.png', tag: t('dev.b5Tag'), title: t('dev.b5Title'), description: t('dev.b5Desc') },
    { image: '/images/dev-practices.png', tag: t('dev.b6Tag'), title: t('dev.b6Title'), description: t('dev.b6Desc') },
  ];

  return (
    <main>
      <PageHero
        label={t('dev.label')}
        title={t('dev.title')}
        subtitle={t('dev.subtitle')}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: t('dev.label') }]}
      />

      <section className="py-24 md:py-32" style={{ background: '#050816' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label={t('dev.resLabel')}
            title={t('dev.resTitle')}
            subtitle={t('dev.resSub')}
          />

          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {blocks.map((block, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.09 }}
                className="group relative overflow-hidden rounded-2xl cursor-default"
                style={{ height: '320px' }}
                data-testid={`card-dev-${i}`}
              >
                <img
                  src={block.image}
                  alt={block.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wide"
                    style={{ background: 'rgba(0,159,173,0.85)', backdropFilter: 'blur(6px)', color: '#fff', letterSpacing: '0.06em' }}
                  >
                    {block.tag}
                  </span>
                </div>
                <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to bottom, rgba(5,8,22,0.08) 0%, rgba(5,8,22,0.50) 45%, rgba(5,8,22,0.94) 80%, rgba(5,8,22,0.98) 100%)' }} />
                <div className="absolute bottom-0 left-0 right-0 z-20 p-5">
                  <div className="mb-2 h-0.5 w-7 rounded-full" style={{ background: 'linear-gradient(90deg,#009FAD,#FFC500)' }} />
                  <h3 className="text-base font-bold text-white mb-1.5" style={{ letterSpacing: '-0.02em' }}>{block.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(248,250,252,0.72)' }}>{block.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative overflow-hidden rounded-2xl p-10 md:p-14 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(11,16,32,0.90) 0%, rgba(16,24,43,0.90) 100%)',
              border: '1px solid rgba(255,197,0,0.15)',
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center, rgba(255,197,0,0.05) 0%, transparent 70%)' }}
              aria-hidden="true"
            />
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ letterSpacing: '-0.025em' }}>
                {t('dev.ctaTitle')}
              </h2>
              <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: 'rgba(248,250,252,0.62)' }}>
                {t('dev.ctaDesc')}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/contato" data-testid="link-dev-cta-contact">
                  <button
                    className="px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200"
                    style={{ background: '#FFC500', color: '#050816', boxShadow: '0 0 24px rgba(255,197,0,0.25)' }}
                  >
                    {t('dev.ctaBtn1')}
                  </button>
                </Link>
                <button
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{ border: '1px solid rgba(255,197,0,0.30)', color: '#FFC500', background: 'transparent' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,197,0,0.08)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
                  data-testid="button-dev-docs"
                >
                  {t('dev.ctaBtn2')}
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
