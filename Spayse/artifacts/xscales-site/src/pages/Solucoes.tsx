import { useRef } from 'react';
import { Link } from 'wouter';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, CreditCard, ArrowUpRight, Building2, Globe, Network, BarChart3, Zap } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import SectionHeader from '@/components/common/SectionHeader';
import { solutions } from '@/data/solutions';
import { usePageMeta } from '@/hooks/usePageMeta';
import { getLang } from '@/lib/lang';
import { tr } from '@/lib/i18n';

const iconMap: Record<string, React.FC<{ size?: number; style?: React.CSSProperties; className?: string }>> = {
  CreditCard, ArrowUpRight, Building2, Globe, Network, BarChart3, Zap
};

export default function Solucoes() {
  const lang = getLang();
  const t = (key: string) => tr(key, lang);
  const ref = useRef(null);
  usePageMeta({
    title: `${t('sol.label')} | Spayse`,
    description: t('sol.subtitle'),
  });
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <main>
      <PageHero
        label={t('sol.label')}
        title={t('sol.title')}
        subtitle={t('sol.subtitle')}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: t('sol.label') }]}
      />

      <section className="py-24 md:py-32" style={{ background: '#050816' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label={t('sol.portfolioLabel')}
            title={t('sol.portfolioTitle')}
            subtitle={t('sol.portfolioSub')}
          />

          <div className="space-y-5">
            {solutions.map((solution, i) => {
              const Icon = iconMap[solution.icon] || CreditCard;
              return (
                <motion.div
                  key={solution.id}
                  ref={i === 0 ? ref : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex flex-col md:flex-row gap-6 p-7 rounded-2xl"
                  style={{
                    background: 'rgba(11,16,32,0.80)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.22)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                  }}
                  data-testid={`card-solution-detail-${solution.id}`}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex-shrink-0 flex items-center justify-center"
                    style={{ background: 'rgba(201,168,76,0.10)', border: '1px solid rgba(201,168,76,0.18)' }}
                  >
                    <Icon size={24} style={{ color: '#C9A84C' }} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2" style={{ letterSpacing: '-0.02em' }}>
                      {solution.title}
                    </h3>
                    <p className="text-base leading-relaxed mb-4" style={{ color: 'rgba(248,250,252,0.62)' }}>
                      {solution.longDescription}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {solution.features.map((f, fi) => (
                        <span
                          key={fi}
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{
                            background: 'rgba(201,168,76,0.08)',
                            border: '1px solid rgba(201,168,76,0.15)',
                            color: 'rgba(201,168,76,0.85)',
                          }}
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="py-24 md:py-32"
        style={{ background: 'linear-gradient(180deg, #050816 0%, #0B1020 50%, #050816 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-5"
            style={{ letterSpacing: '-0.025em' }}
          >
            {t('sol.ctaTitle')}
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'rgba(248,250,252,0.60)' }}>
            {t('sol.ctaDesc')}
          </p>
          <Link href="/contato" data-testid="link-solucoes-cta">
            <button
              className="px-7 py-3.5 rounded-lg text-sm font-semibold transition-all duration-200"
              style={{
                background: '#C9A84C',
                color: '#050816',
                boxShadow: '0 0 28px rgba(201,168,76,0.28)',
              }}
            >
              {t('sol.ctaBtn')}
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
