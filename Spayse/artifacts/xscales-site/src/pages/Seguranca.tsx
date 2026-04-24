import { useRef } from 'react';
import { Link } from 'wouter';
import { motion, useInView } from 'framer-motion';
import { Shield, Activity, Settings, Scale, CheckCircle, ArrowRight } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import { usePageMeta } from '@/hooks/usePageMeta';
import SectionHeader from '@/components/common/SectionHeader';
import { getLang } from '@/lib/lang';
import { tr } from '@/lib/i18n';

const sections = [
  {
    icon: Shield,
    title: 'Estrutura de Proteção',
    description: 'Nossa infraestrutura de segurança é construída em múltiplas camadas, com controles técnicos, operacionais e organizacionais que atuam de forma integrada para minimizar riscos e garantir a proteção contínua das operações.',
    points: [
      'Criptografia de dados em trânsito e em repouso',
      'Controles de acesso baseados em função (RBAC)',
      'Autenticação multifator em sistemas críticos',
      'Gestão segura de credenciais e secrets',
    ],
  },
  {
    icon: Activity,
    title: 'Monitoramento Contínuo',
    description: 'A XSCALES opera com sistemas de monitoramento em tempo real que garantem visibilidade completa sobre o estado da infraestrutura e dos fluxos operacionais, permitindo resposta rápida a qualquer anomalia.',
    points: [
      'Monitoramento 24/7 de sistemas e transações',
      'Alertas automáticos para eventos anômalos',
      'Logs centralizados e auditáveis',
      'Relatórios periódicos de status operacional',
    ],
  },
  {
    icon: Settings,
    title: 'Controles Operacionais',
    description: 'Processos e controles internos rigorosos garantem que cada operação seja realizada com a máxima integridade e rastreabilidade, desde a inicialização até a conclusão.',
    points: [
      'Segregação de funções em operações sensíveis',
      'Gestão de mudanças controlada e auditada',
      'Revisões periódicas de acesso e permissões',
      'Testes de continuidade e recuperação',
    ],
  },
  {
    icon: Scale,
    title: 'Governança e Conformidade',
    description: 'A estrutura de governança da XSCALES foi projetada para garantir conformidade com as principais normas e regulamentações aplicáveis aos mercados em que atuamos.',
    points: [
      'Conformidade com regulamentações locais e internacionais',
      'Políticas internas documentadas e atualizadas',
      'Avaliações regulares de conformidade',
      'Gestão de terceiros e fornecedores críticos',
    ],
  },
  {
    icon: CheckCircle,
    title: 'Compromisso com Estabilidade',
    description: 'Nosso compromisso com a estabilidade operacional vai além da disponibilidade técnica — inclui a manutenção de um ambiente de negócios confiável e previsível para todos os nossos clientes.',
    points: [
      'SLAs de disponibilidade documentados',
      'Planos de contingência testados regularmente',
      'Comunicação transparente em caso de incidentes',
      'Roadmap de melhoria contínua de segurança',
    ],
  },
];

export default function Seguranca() {
  const lang = getLang();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  usePageMeta({
    title: 'Segurança | XSCALES',
    description: 'Criptografia de ponta a ponta, monitoramento em tempo real, zero trust e infraestrutura redundante com alta disponibilidade.',
  });

  return (
    <main>
      <PageHero
        label="Segurança"
        title="Segurança e governança como base da operação"
        subtitle="A XSCALES adota padrões rigorosos de segurança, monitoramento e governança para garantir que cada operação seja realizada com o máximo de integridade e confiabilidade."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Segurança' }]}
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
                data-testid={`section-security-${i}`}
              >
                <div className="grid md:grid-cols-3 gap-6 items-start">
                  <div className="md:col-span-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center"
                        style={{ background: 'rgba(255,197,0,0.10)', border: '1px solid rgba(255,197,0,0.18)' }}
                      >
                        <s.icon size={18} style={{ color: '#FFC500' }} />
                      </div>
                      <h3 className="text-base font-bold text-white" style={{ letterSpacing: '-0.02em' }}>
                        {s.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(248,250,252,0.60)' }}>
                      {s.description}
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {s.points.map((p, pi) => (
                        <div key={pi} className="flex items-start gap-2.5">
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                            style={{ background: '#FFC500' }}
                          />
                          <span className="text-sm" style={{ color: 'rgba(248,250,252,0.68)' }}>{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="mb-6" style={{ color: 'rgba(248,250,252,0.60)' }}>
              {tr('inst.securityQ', lang)}
            </p>
            <Link href="/contato" data-testid="link-security-cta">
              <button
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200"
                style={{ border: '1px solid rgba(255,197,0,0.30)', color: '#FFC500', background: 'transparent' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,197,0,0.08)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
              >
                {tr('inst.talkTeam', lang)}
                <ArrowRight size={14} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
