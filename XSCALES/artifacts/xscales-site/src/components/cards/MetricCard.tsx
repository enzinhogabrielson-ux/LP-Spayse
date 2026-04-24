import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  value: string;
  label: string;
  index?: number;
  animateValue?: boolean;
  compact?: boolean;
  className?: string;
}

function parseAnimatedMetric(value: string) {
  const currencyMatch = value.match(/^R\$\s*(\d+(?:\.\d+)?)\s*bi\+$/i);
  if (currencyMatch) {
    const end = Number(currencyMatch[1]);
    return {
      end,
      format: (current: number) => `R$ ${current.toFixed(end % 1 === 0 ? 0 : 1)}bi+`,
    };
  }

  const numericMatch = value.match(/^(\d+(?:\.\d+)?)([%+])$/);
  if (numericMatch) {
    const end = Number(numericMatch[1]);
    const suffix = numericMatch[2];
    const decimals = Number.isInteger(end) ? 0 : numericMatch[1].split('.')[1]?.length ?? 1;

    return {
      end,
      format: (current: number) => `${current.toFixed(decimals)}${suffix}`,
    };
  }

  return null;
}

export default function MetricCard({
  value,
  label,
  index = 0,
  animateValue = false,
  compact = false,
  className,
}: MetricCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!animateValue || !isInView) {
      setDisplayValue(value);
      return;
    }

    const parsedMetric = parseAnimatedMetric(value);
    if (!parsedMetric) {
      setDisplayValue(value);
      return;
    }

    const delay = index * 120;
    const duration = 1200;
    let frameId = 0;
    let timeoutId = 0;

    timeoutId = window.setTimeout(() => {
      const startTime = performance.now();

      const animate = (timestamp: number) => {
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = parsedMetric.end * easedProgress;

        setDisplayValue(parsedMetric.format(currentValue));

        if (progress < 1) {
          frameId = window.requestAnimationFrame(animate);
        }
      };

      frameId = window.requestAnimationFrame(animate);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
      window.cancelAnimationFrame(frameId);
    };
  }, [animateValue, index, isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className={cn('text-center p-6', compact && 'px-4 py-6', className)}
      data-testid={`card-metric-${label.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div
        className={cn(
          'font-bold text-primary-gold text-glow',
          compact ? 'mb-1 text-2xl md:text-3xl' : 'mb-2 text-4xl md:text-5xl'
        )}
        style={{ letterSpacing: '-0.03em' }}
      >
        {displayValue}
      </div>
      <div className={cn(compact ? 'text-xs text-muted-45' : 'text-sm font-medium text-muted-55')}>
        {label}
      </div>
    </motion.div>
  );
}
