import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface InfoItem {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

interface InfoGridProps {
  items: InfoItem[];
  columns?: 2 | 3 | 4;
}

export default function InfoGrid({ items, columns = 3 }: InfoGridProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const gridTemplateColumns = {
    2: 'repeat(auto-fit, minmax(280px, 1fr))',
    3: 'repeat(auto-fit, minmax(240px, 1fr))',
    4: 'repeat(auto-fit, minmax(200px, 1fr))',
  }[columns];

  return (
    <div
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns,
        gap: '24px',
      }}
    >
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          style={{
            background: '#0B1020',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '12px',
            padding: '28px 24px',
          }}
        >
          {item.icon && (
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: '10px',
                background: 'rgba(255,197,0,0.10)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
                color: '#FFC500',
              }}
            >
              {item.icon}
            </div>
          )}
          <h3
            style={{
              fontSize: '16px',
              fontWeight: 600,
              color: 'rgba(248,250,252,0.92)',
              marginBottom: '8px',
            }}
          >
            {item.title}
          </h3>
          <p
            style={{
              fontSize: '14px',
              lineHeight: 1.65,
              color: 'rgba(248,250,252,0.52)',
            }}
          >
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
