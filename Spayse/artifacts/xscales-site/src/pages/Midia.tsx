import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import PageHero from '@/components/common/PageHero';
import BlogCard from '@/components/cards/BlogCard';
import { blogPosts, blogCategories } from '@/data/blog';
import { usePageMeta } from '@/hooks/usePageMeta';
import { getLang } from '@/lib/lang';
import { tr } from '@/lib/i18n';

export default function Midia() {
  const lang = getLang();
  const t = (key: string) => tr(key, lang);
  const [activeCategory, setActiveCategory] = useState('all');
  usePageMeta({
    title: `${t('midia.label')} | Spayse`,
    description: t('midia.subtitle'),
  });

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'all') return blogPosts;
    return blogPosts.filter((p) => p.categoryId === activeCategory);
  }, [activeCategory]);

  return (
    <main>
      <PageHero
        label={t('midia.label')}
        title={t('midia.title')}
        subtitle={t('midia.subtitle')}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: t('midia.label') }]}
      />

      <section className="py-24 md:py-32" style={{ background: '#050816' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 mb-12" role="tablist">
            {blogCategories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  background: activeCategory === cat.id ? '#C9A84C' : 'rgba(11,16,32,0.80)',
                  color: activeCategory === cat.id ? '#050816' : 'rgba(248,250,252,0.65)',
                  border: activeCategory === cat.id ? 'none' : '1px solid rgba(255,255,255,0.08)',
                }}
                data-testid={`filter-category-${cat.id}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {filteredPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p style={{ color: 'rgba(248,250,252,0.50)' }}>
                {t('midia.noArticles')}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filteredPosts.map((post, i) => (
                <BlogCard key={post.id} post={post} index={i} />
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}
