import { useRef } from 'react';
import { Link } from 'wouter';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Solution } from '@/data/solutions';
import { getLang } from '@/lib/lang';
import { tr } from '@/lib/i18n';

const solutionImages: Record<string, string> = {
  payments: '/images/sol-payments.png',
  payouts: '/images/sol-payouts.png',
  banking: '/images/sol-banking.png',
  'cross-border': '/images/sol-cross-border.png',
  orquestracao: '/images/sol-orchestration.png',
  reconciliacao: '/images/sol-reconciliation.png',
};

interface SolutionCardProps {
  solution: Solution;
  index?: number;
}

export default function SolutionCard({ solution, index = 0 }: SolutionCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const image = solutionImages[solution.id] || '/images/vp-integration.png';
  const lang = getLang();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative flex flex-col h-full overflow-hidden rounded-2xl cursor-pointer"
      style={{ background: 'rgba(11,16,32,0.80)', border: '1px solid rgba(255,255,255,0.08)' }}
      data-testid={`card-solution-${solution.id}`}
    >
      <div className="relative overflow-hidden shrink-0" style={{ height: '160px' }}>
        <img
          src={image}
          alt={solution.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(5,8,22,0.10) 0%, rgba(5,8,22,0.70) 100%)' }}
        />
        <div className="absolute bottom-3 left-4">
          <div className="h-0.5 w-8 rounded-full mb-1.5" style={{ background: 'linear-gradient(90deg,#C9A84C,#1E4FA0)' }} />
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-base font-semibold text-white mb-2" style={{ letterSpacing: '-0.02em' }}>
          {solution.title}
        </h3>
        <p className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(248,250,252,0.60)' }}>
          {solution.description}
        </p>
        <Link href="/solucoes">
          <span
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
            style={{ color: 'rgba(201,168,76,0.60)' }}
            data-testid={`link-solution-saiba-mais-${solution.id}`}
          >
            {tr('common.learnMore', lang)}
            <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
