import { useRef } from 'react';
import { Link } from 'wouter';
import { motion, useInView } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  label?: string;
  title: string;
  subtitle?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  breadcrumbs?: BreadcrumbItem[];
  centered?: boolean;
  showGrid?: boolean;
}

export default function PageHero({
  label,
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  breadcrumbs,
  centered = true,
  showGrid = true,
}: PageHeroProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pt-24 pb-20 md:pt-36 md:pb-28"
      style={{
        background: 'linear-gradient(180deg, #050816 0%, #0B1020 60%, #050816 100%)',
      }}
    >
      {showGrid && (
        <div
          className="absolute inset-0 grid-pattern opacity-60"
          aria-hidden="true"
        />
      )}

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 mb-8"
            aria-label="Breadcrumb"
          >
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && (
                  <ChevronRight size={14} style={{ color: 'rgba(248,250,252,0.30)' }} />
                )}
                {crumb.href ? (
                  <Link href={crumb.href}>
                    <span
                      className="text-sm cursor-pointer transition-colors"
                      style={{ color: 'rgba(248,250,252,0.50)' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#C9A84C'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(248,250,252,0.50)'; }}
                    >
                      {crumb.label}
                    </span>
                  </Link>
                ) : (
                  <span className="text-sm font-medium" style={{ color: '#C9A84C' }}>
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <div className={centered ? 'text-center max-w-4xl mx-auto' : 'max-w-3xl'}>
          {label && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-5"
            >
              <span
                className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase"
                style={{
                  background: 'rgba(201,168,76,0.12)',
                  border: '1px solid rgba(201,168,76,0.25)',
                  color: '#C9A84C',
                }}
              >
                {label}
              </span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            style={{ letterSpacing: '-0.03em' }}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl leading-relaxed max-w-2xl"
              style={{
                color: 'rgba(248,250,252,0.65)',
                margin: centered ? '1.5rem auto 0' : '1.5rem 0 0',
              }}
            >
              {subtitle}
            </motion.p>
          )}

          {(primaryCTA || secondaryCTA) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`mt-8 flex flex-wrap gap-4 ${centered ? 'justify-center' : ''}`}
            >
              {primaryCTA && (
                <Link href={primaryCTA.href} data-testid={`link-hero-primary-cta`}>
                  <button
                    className="px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200"
                    style={{
                      background: '#C9A84C',
                      color: '#050816',
                      boxShadow: '0 0 30px rgba(201,168,76,0.30)',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = '#C9A84C';
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 40px rgba(201,168,76,0.45)';
                      (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = '#C9A84C';
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 30px rgba(201,168,76,0.30)';
                      (e.currentTarget as HTMLButtonElement).style.transform = '';
                    }}
                  >
                    {primaryCTA.label}
                  </button>
                </Link>
              )}
              {secondaryCTA && (
                <Link href={secondaryCTA.href} data-testid={`link-hero-secondary-cta`}>
                  <button
                    className="px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200"
                    style={{
                      border: '1px solid rgba(201,168,76,0.35)',
                      color: '#C9A84C',
                      background: 'transparent',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = 'rgba(201,168,76,0.10)';
                      (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                      (e.currentTarget as HTMLButtonElement).style.transform = '';
                    }}
                  >
                    {secondaryCTA.label}
                  </button>
                </Link>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
