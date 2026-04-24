import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  titleClass?: string;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  centered = true,
  titleClass = '',
}: SectionHeaderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div ref={ref} className={`mb-14 ${centered ? 'text-center' : 'text-center md:text-left'}`}>
      {label && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className={`mb-4 flex ${centered ? 'justify-center' : 'justify-center md:justify-start'}`}
        >
          <span className="badge-primary-alt">
            {label}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: label ? 0.1 : 0 }}
        className={`text-3xl md:text-4xl font-bold text-white leading-tight ${titleClass}`}
        style={{ letterSpacing: '-0.025em' }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-4 text-lg leading-relaxed text-muted-60 ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.3 }}
        className={`mt-5 h-0.5 w-12 rounded-full ${centered ? 'mx-auto' : ''}`}
        style={{
          transformOrigin: centered ? 'center' : 'left',
          background: 'linear-gradient(90deg, #1E4FA0, #C9A84C)',
        }}
      />
    </div>
  );
}
