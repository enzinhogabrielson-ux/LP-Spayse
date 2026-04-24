import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/data/blog';
import { getLang } from '@/lib/lang';
import { tr } from '@/lib/i18n';

const categoryImages: Record<BlogPost['categoryId'], string> = {
  payments: '/images/blog-pagamentos.png',
  banking: '/images/blog-banking.png',
  'international-expansion': '/images/blog-expansao.png',
  compliance: '/images/blog-compliance.png',
  technology: '/images/blog-tecnologia.png',
  markets: '/images/blog-mercados.png',
};

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const image = categoryImages[post.categoryId] || '/images/blog-mercados.jpg';
  const lang = getLang();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group flex flex-col overflow-hidden rounded-2xl cursor-pointer h-full"
      style={{ background: 'rgba(11,16,32,0.80)', border: '1px solid rgba(255,255,255,0.08)' }}
      data-testid={`card-blog-${post.id}`}
    >
      <div className="relative overflow-hidden" style={{ height: '180px' }}>
        <img
          src={image}
          alt={post.category}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(5,8,22,0.10) 0%, rgba(5,8,22,0.72) 100%)' }}
        />
        <div className="absolute top-3 left-3">
          <span
            className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold"
            style={{ background: 'rgba(201,168,76,0.85)', backdropFilter: 'blur(6px)', color: '#050816' }}
          >
            {post.category}
          </span>
        </div>
        <div className="absolute bottom-3 right-3">
          <span className="text-xs" style={{ color: 'rgba(248,250,252,0.65)' }}>
            {post.readTime}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-base font-semibold text-white mb-3 leading-snug flex-1" style={{ letterSpacing: '-0.02em' }}>
          {post.title}
        </h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(248,250,252,0.55)' }}>
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="text-xs" style={{ color: 'rgba(248,250,252,0.45)' }}>
            {post.date}
          </span>
          <span
            className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors"
            style={{ color: 'rgba(201,168,76,0.60)' }}
          >
            {tr('common.readArticle', lang)}
            <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
