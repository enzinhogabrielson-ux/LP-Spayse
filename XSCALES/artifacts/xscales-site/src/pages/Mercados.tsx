import { useRef } from 'react';
import { Link } from 'wouter';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import SectionHeader from '@/components/common/SectionHeader';
import MarketCard from '@/components/cards/MarketCard';
import { overviewMarkets } from '@/data/markets';
import { usePageMeta } from '@/hooks/usePageMeta';
import { getLang } from '@/lib/lang';
import { tr } from '@/lib/i18n';

export default function Mercados() {
  const lang = getLang();
  const t = (key: string) => tr(key, lang);
  const ref = useRef(null);

  usePageMeta({
    title: `${t('mkList.label')} | XSCALES`,
    description: t('mkList.subtitle'),
  });

  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <main>
      <PageHero
        label={t('mkList.label')}
        title={t('mkList.title')}
        subtitle={t('mkList.subtitle')}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: t('mkList.label') }]}
      />

      <section className="py-24 md:py-32" style={{ background: '#050816' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div ref={ref} className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <p className="text-lg leading-relaxed" style={{ color: 'rgba(248,250,252,0.65)' }}>
                {t('mkList.intro')}
              </p>
            </motion.div>
          </div>

          <SectionHeader
            label={t('mkList.coverageLabel')}
            title={t('mkList.coverageTitle')}
            centered={false}
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {overviewMarkets.slice(0, 4).map((market, index) => (
              <MarketCard key={market.id} market={market} index={index} />
            ))}
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-5">
            {overviewMarkets.slice(4).map((market, index) => (
              <div
                key={market.id}
                className="w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
                style={{ flex: '0 0 calc((100% - 60px) / 4)', minWidth: 220 }}
              >
                <MarketCard market={market} index={index + 4} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20"
        style={{ background: 'linear-gradient(180deg, #050816 0%, #0B1020 100%)' }}
      >
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl" style={{ letterSpacing: '-0.02em' }}>
            {t('mkList.notFoundTitle')}
          </h2>
          <p className="mb-6" style={{ color: 'rgba(248,250,252,0.60)' }}>
            {t('mkList.notFoundDesc')}
          </p>
          <Link href="/contato" data-testid="link-mercados-contact">
            <button
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-all duration-200"
              style={{
                border: '1px solid rgba(255,197,0,0.30)',
                color: '#FFC500',
                background: 'transparent',
              }}
              onMouseEnter={(event) => {
                (event.currentTarget as HTMLButtonElement).style.background = 'rgba(255,197,0,0.08)';
              }}
              onMouseLeave={(event) => {
                (event.currentTarget as HTMLButtonElement).style.background = 'transparent';
              }}
            >
              {t('mkList.notFoundBtn')}
              <ArrowRight size={14} />
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
