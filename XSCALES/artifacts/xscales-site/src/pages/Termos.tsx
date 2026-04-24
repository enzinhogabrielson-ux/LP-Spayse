import { useState } from 'react';
import PageHero from '@/components/common/PageHero';
import { usePageMeta } from '@/hooks/usePageMeta';

const sections = [
  {
    id: 'definicoes',
    title: 'Definições',
    content: `Para fins deste documento, os seguintes termos têm os significados indicados:

• "XSCALES": empresa de infraestrutura financeira, responsável pela prestação dos serviços descritos neste instrumento.

• "Usuário": qualquer pessoa física ou jurídica que acesse ou utilize os serviços da XSCALES.

• "Serviços": soluções de pagamentos, banking, processamento financeiro e demais produtos disponibilizados pela XSCALES.

• "Plataforma": o conjunto de sistemas, APIs, interfaces e ferramentas disponibilizadas pela XSCALES.

• "Dados": informações e conteúdos processados ou disponibilizados no contexto dos serviços.`,
  },
  {
    id: 'aceitacao',
    title: 'Aceitação dos Termos',
    content: `O acesso e uso dos serviços da XSCALES implica a aceitação integral destes Termos e Condições de Uso, bem como de nossa Política de Privacidade e demais políticas específicas aplicáveis.

Caso não concorde com qualquer disposição destes termos, recomendamos que não utilize nossos serviços.

A XSCALES reserva-se o direito de atualizar estes termos a qualquer momento, sendo as alterações comunicadas com antecedência razoável. A continuidade do uso dos serviços após as alterações constitui aceitação dos novos termos.`,
  },
  {
    id: 'uso',
    title: 'Uso dos Serviços',
    content: `Os serviços da XSCALES devem ser utilizados exclusivamente para fins legais e legítimos, em conformidade com a legislação vigente e as políticas internas da empresa.

São vedadas as seguintes práticas:

• Uso dos serviços para atividades ilícitas ou fraudulentas
• Tentativas de acesso não autorizado a sistemas ou dados
• Transmissão de conteúdo malicioso ou prejudicial
• Reprodução ou redistribuição não autorizada de conteúdo
• Uso que comprometa a disponibilidade ou integridade dos serviços para outros usuários

O descumprimento dessas condições poderá resultar na suspensão ou encerramento do acesso aos serviços.`,
  },
  {
    id: 'responsabilidades',
    title: 'Responsabilidades',
    content: `Responsabilidades da XSCALES:
• Fornecer os serviços contratados com o padrão de qualidade acordado
• Manter a confidencialidade das informações conforme a Política de Privacidade
• Comunicar interrupções planejadas com antecedência razoável
• Adotar medidas de segurança adequadas à proteção dos dados

Responsabilidades do Usuário:
• Manter a confidencialidade de suas credenciais de acesso
• Utilizar os serviços em conformidade com estes termos e a legislação aplicável
• Notificar prontamente qualquer incidente de segurança ou uso não autorizado
• Manter atualizadas as informações cadastrais`,
  },
  {
    id: 'propriedade',
    title: 'Propriedade Intelectual',
    content: `Todos os direitos de propriedade intelectual relacionados à Plataforma, incluindo mas não se limitando a marcas, logotipos, software, design, conteúdo e documentação, são de titularidade exclusiva da XSCALES ou de seus licenciantes.

O uso dos serviços não confere ao Usuário qualquer direito sobre a propriedade intelectual da XSCALES, exceto a licença de uso limitada e revogável necessária para utilização dos serviços contratados.

É vedada a reprodução, modificação, distribuição ou uso comercial de qualquer elemento da Plataforma sem autorização prévia e por escrito da XSCALES.`,
  },
  {
    id: 'limitacao',
    title: 'Limitação de Responsabilidade',
    content: `A XSCALES não será responsável por danos indiretos, incidentais, especiais, punitivos ou consequenciais decorrentes do uso ou impossibilidade de uso dos serviços.

A responsabilidade total da XSCALES, por qualquer causa, será limitada ao valor pago pelo Usuário pelos serviços nos últimos doze meses anteriores ao evento que originou o dano.

A XSCALES não garante que os serviços serão ininterruptos ou livres de erros. Interrupções planejadas e situações de força maior podem ocorrer.`,
  },
  {
    id: 'rescisao',
    title: 'Rescisão',
    content: `Qualquer das partes poderá rescindir o relacionamento contratual mediante notificação prévia, nos prazos e condições estabelecidos nos contratos específicos.

A XSCALES poderá suspender ou encerrar o acesso aos serviços imediatamente em caso de:
• Violação destes Termos
• Atividades fraudulentas ou ilegais
• Inadimplemento financeiro
• Risco à segurança da Plataforma ou de outros usuários

Após a rescisão, as disposições que, por sua natureza, devam sobreviver, permanecerão em vigor.`,
  },
  {
    id: 'legislacao',
    title: 'Legislação Aplicável',
    content: `Estes Termos e Condições são regidos pelas leis da República Federativa do Brasil, especialmente o Código Civil Brasileiro, o Marco Civil da Internet (Lei nº 12.965/2014), a Lei Geral de Proteção de Dados (Lei nº 13.709/2018) e demais legislações aplicáveis ao setor financeiro e de pagamentos.

Fica eleito o foro da Comarca de São Paulo/SP para dirimir quaisquer controvérsias decorrentes destes Termos, com renúncia a qualquer outro, por mais privilegiado que seja.`,
  },
  {
    id: 'contato',
    title: 'Contato',
    content: `Para questões relacionadas a estes Termos e Condições, entre em contato:

E-mail: juridico@xscales.com
Canal de Ouvidoria: xscales.com/ouvidoria
Endereço: São Paulo, SP, Brasil

Versão: 1.0
Última atualização: Janeiro de 2025`,
  },
];

export default function Termos() {
  const [activeSection, setActiveSection] = useState('definicoes');
  usePageMeta({
    title: 'Termos de Uso | XSCALES',
    description: 'Termos de Uso dos serviços XSCALES. Condições gerais de contratação, responsabilidades e obrigações das partes.',
  });

  return (
    <main>
      <PageHero
        label="Termos"
        title="Termos e Condições de Uso"
        subtitle="Condições que regem o uso dos serviços e plataformas da XSCALES."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Termos' }]}
      />

      <section className="py-16 md:py-24" style={{ background: '#050816' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-10">
            <aside className="lg:col-span-1">
              <nav className="sticky top-24 space-y-1" aria-label="Seções dos termos">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setActiveSection(s.id);
                      document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-200"
                    style={{
                      color: activeSection === s.id ? '#FFC500' : 'rgba(248,250,252,0.60)',
                      background: activeSection === s.id ? 'rgba(255,197,0,0.08)' : 'transparent',
                      borderLeft: activeSection === s.id ? '2px solid #FFC500' : '2px solid transparent',
                    }}
                    data-testid={`nav-terms-${s.id}`}
                  >
                    {s.title}
                  </button>
                ))}
              </nav>
            </aside>

            <div className="lg:col-span-3 space-y-12">
              {sections.map((s) => (
                <div key={s.id} id={s.id} className="scroll-mt-24" data-testid={`section-terms-${s.id}`}>
                  <h2 className="text-xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
                    {s.title}
                  </h2>
                  <div
                    className="text-sm leading-relaxed whitespace-pre-line"
                    style={{ color: 'rgba(248,250,252,0.68)' }}
                  >
                    {s.content}
                  </div>
                  <div className="mt-8 h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
