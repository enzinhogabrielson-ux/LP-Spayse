import { useRef } from 'react';
import { Link } from 'wouter';
import { motion, useInView } from 'framer-motion';
import { BookOpen, Settings, Zap, Eye, MessageSquare, ArrowRight } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import { usePageMeta } from '@/hooks/usePageMeta';
import { getLang } from '@/lib/lang';
import { tr } from '@/lib/i18n';

const sections = [
  {
    icon: BookOpen,
    title: 'Princípios de Atuação',
    description: 'Nossa atuação em compliance é orientada por princípios fundamentais de integridade, transparência e responsabilidade. Acreditamos que conformidade não é apenas uma obrigação regulatória, mas um compromisso ético com nossos clientes, parceiros e mercados.',
    items: [
      'Integridade em todas as relações de negócio',
      'Transparência nos processos e comunicações',
      'Responsabilidade pelos impactos das nossas ações',
      'Melhoria contínua dos processos de conformidade',
    ],
  },
  {
    icon: Settings,
    title: 'Controles Internos',
    description: 'Mantemos um sistema robusto de controles internos que garantem a conformidade operacional e a prevenção de irregularidades. Esses controles são revisados e atualizados regularmente para refletir mudanças no ambiente regulatório.',
    items: [
      'Matriz de controles documentada e atualizada',
      'Revisões periódicas de efetividade dos controles',
      'Treinamentos regulares para equipes operacionais',
      'Auditoria interna independente',
    ],
  },
  {
    icon: Zap,
    title: 'Integridade Operacional',
    description: 'A integridade operacional está no centro de cada processo da Spayse. Garantimos que todas as operações sejam realizadas dentro dos parâmetros legais e éticos, com rastreabilidade completa.',
    items: [
      'Políticas anti-corrupção e suborno',
      'Gestão de conflitos de interesse',
      'Código de conduta para colaboradores',
      'Canais de denúncia protegidos',
    ],
  },
  {
    icon: Eye,
    title: 'Prevenção e Monitoramento',
    description: 'Nossa estrutura de prevenção inclui processos de KYC, monitoramento de transações e análise de risco para garantir que operações suspeitas sejam identificadas e tratadas prontamente.',
    items: [
      'Processos robustos de KYC e due diligence',
      'Monitoramento contínuo de transações',
      'Análise de risco por segmento e mercado',
      'Reportes regulatórios tempestivos',
    ],
  },
  {
    icon: MessageSquare,
    title: 'Canais Institucionais',
    description: 'Mantemos canais institucionais claros para comunicação com reguladores, clientes e parceiros, garantindo transparência e responsabilidade em todas as nossas interações.',
    items: [
      'Canal de ouvidoria acessível e estruturado',
      'Comunicação direta com reguladores',
      'Relatórios periódicos de compliance',
      'Política de privacidade e proteção de dados',
    ],
  },
];

export default function Compliance() {
  const lang = getLang();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  usePageMeta({
    title: 'Compliance | Spayse',
    description: 'Estrutura regulatória robusta. PCI-DSS, LGPD, licenciamento e auditorias. Compliance como pilar central da operação Spayse.',
  });

  return (
    <main>
      <PageHero
        label="Compliance"
        title="Conformidade como parte da nossa estrutura"
        subtitle="Na Spayse, compliance não é uma função periférica — está integrado à forma como projetamos nossos produtos, processos e relacionamentos."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Compliance' }]}
      />

      <section className="py-24 md:py-32" style={{ background: '#050816' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ref} className="space-y-6">
            {sections.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-7 rounded-2xl"
                style={{
                  background: 'rgba(11,16,32,0.80)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                data-testid={`section-compliance-${i}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center"
                    style={{ background: 'rgba(201,168,76,0.10)', border: '1px solid rgba(201,168,76,0.18)' }}
                  >
                    <s.icon size={18} style={{ color: '#C9A84C' }} />
                  </div>
                  <h3 className="text-lg font-bold text-white" style={{ letterSpacing: '-0.02em' }}>
                    {s.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(248,250,252,0.62)' }}>
                  {s.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {s.items.map((item, ii) => (
                    <div key={ii} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#C9A84C' }} />
                      <span className="text-sm" style={{ color: 'rgba(248,250,252,0.65)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 p-8 rounded-2xl text-center"
            style={{
              background: 'rgba(11,16,32,0.60)',
              border: '1px solid rgba(201,168,76,0.12)',
            }}
          >
            <h3 className="text-xl font-bold text-white mb-3">{tr('inst.complianceQ', lang)}</h3>
            <p className="text-sm mb-6" style={{ color: 'rgba(248,250,252,0.60)' }}>
              {tr('inst.complianceDesc', lang)}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/ouvidoria" data-testid="link-compliance-ouvidoria">
                <button
                  className="px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
                  style={{ background: '#C9A84C', color: '#050816' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = '#C9A84C'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = '#C9A84C'; }}
                >
                  {tr('inst.ouvidoria', lang)}
                </button>
              </Link>
              <Link href="/contato" data-testid="link-compliance-contact">
                <button
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{ border: '1px solid rgba(201,168,76,0.30)', color: '#C9A84C', background: 'transparent' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(201,168,76,0.08)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
                >
                  {tr('inst.talkUs', lang)}
                  <ArrowRight size={14} />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
