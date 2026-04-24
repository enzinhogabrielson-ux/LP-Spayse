import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { usePageMeta } from '@/hooks/usePageMeta';
import { getLang } from '@/lib/lang';
import { tr } from '@/lib/i18n';

export default function NotFound() {
  const lang = getLang();
  const t = (key: string) => tr(key, lang);
  usePageMeta({
    title: t('notFound.meta'),
    description: t('notFound.metaDesc'),
  });
  return (
    <main
      className="relative flex-1 flex items-center justify-center overflow-hidden"
      style={{ background: '#050816' }}
    >
      <div className="absolute inset-0 grid-pattern" aria-hidden="true" />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(255,197,0,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />

      <div className="relative text-center px-4" data-testid="page-not-found">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="text-8xl md:text-[10rem] lg:text-[14rem] font-black leading-none mb-4 select-none"
            style={{
              color: '#FFC500',
              textShadow: '0 0 60px rgba(255,197,0,0.30), 0 0 120px rgba(255,197,0,0.10)',
              letterSpacing: '-0.05em',
            }}
          >
            404
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1
            className="text-2xl md:text-3xl font-bold text-white mb-4"
            style={{ letterSpacing: '-0.025em' }}
          >
            {t('notFound.title')}
          </h1>
          <p className="text-base mb-10 max-w-md mx-auto" style={{ color: 'rgba(248,250,252,0.55)' }}>
            {t('notFound.desc')}
          </p>

          <Link href="/" data-testid="link-404-home">
            <button
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200"
              style={{
                background: '#FFC500',
                color: '#050816',
                boxShadow: '0 0 28px rgba(255,197,0,0.25)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = '#FFC500';
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = '#FFC500';
                (e.currentTarget as HTMLButtonElement).style.transform = '';
              }}
            >
              <ArrowLeft size={16} />
              {t('notFound.btn')}
            </button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
