import { useRef } from 'react';
import { Link } from 'wouter';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Market } from '@/data/markets';
import { getLang } from '@/lib/lang';
import { tr } from '@/lib/i18n';
import { getMarketLabel } from '@/data/marketLabels';

interface MarketCardProps {
  market: Market;
  index?: number;
}

export default function MarketCard({ market, index = 0 }: MarketCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const lang = getLang();
  const displayName = getMarketLabel(market.id, lang, market.name);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      data-testid={`card-market-${market.id}`}
    >
      <Link href={`/mercados/${market.slug}`}>
        <div className="group flex flex-col p-5 rounded-xl cursor-pointer h-full bg-surface border border-subtle card-hover">
          <div className="flex items-center gap-3 mb-3">
            {market.flagCode ? (
              <img
                src={`https://flagcdn.com/32x24/${market.flagCode}.png`}
                srcSet={`https://flagcdn.com/64x48/${market.flagCode}.png 2x`}
                width={32}
                height={24}
                alt={displayName}
                style={{ borderRadius: 4, objectFit: 'cover', flexShrink: 0 }}
              />
            ) : (
              <span className="text-2xl" role="img" aria-label={displayName}>
                {'🌎'}
              </span>
            )}
            <h3 className="text-base font-semibold text-white" style={{ letterSpacing: '-0.02em' }}>
              {displayName}
            </h3>
          </div>
          <p className="text-sm flex-1 text-muted-55">{market.subtitle}</p>
          <div className="flex items-center gap-1.5 mt-4 text-primary-gold/60 group-hover:text-primary-gold transition-colors market-explore-link">
            <span className="text-xs font-medium">{tr('common.exploreMarket', lang)}</span>
            <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
