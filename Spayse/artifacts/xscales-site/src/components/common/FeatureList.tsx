import { CheckCircle } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface FeatureListProps {
  items: string[];
  columns?: 1 | 2;
}

export default function FeatureList({ items, columns = 1 }: FeatureListProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <ul
      ref={ref}
      style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'grid',
        gridTemplateColumns: columns === 2 ? 'repeat(auto-fit, minmax(200px, 1fr))' : '1fr',
        gap: '12px',
      }}
    >
      {items.map((item, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -12 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '10px',
            fontSize: '14px',
            color: 'rgba(248,250,252,0.70)',
            lineHeight: 1.6,
          }}
        >
          <CheckCircle
            size={16}
            style={{ color: '#FFC500', flexShrink: 0, marginTop: '3px' }}
          />
          {item}
        </motion.li>
      ))}
    </ul>
  );
}
