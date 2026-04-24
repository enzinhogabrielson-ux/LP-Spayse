import { useState } from 'react';
import PageHero from '@/components/common/PageHero';
import { usePageMeta } from '@/hooks/usePageMeta';

const sections = [
  {
    id: 'introducao',
    title: 'Introdução',
    content: `A XSCALES valoriza a privacidade e a proteção dos dados pessoais de seus usuários, clientes e parceiros. Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos as informações pessoais que nos são confiadas.

Ao utilizar nossos serviços, você concorda com os termos desta política. Recomendamos a leitura atenta deste documento e de suas atualizações periódicas.

Esta política está em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018) e demais regulamentações aplicáveis.`,
  },
  {
    id: 'coleta',
    title: 'Coleta de Dados',
    content: `Coletamos dados pessoais de diferentes formas, dependendo da sua interação com a XSCALES:

• Dados fornecidos diretamente: nome, e-mail, telefone, empresa, cargo e outras informações fornecidas ao preencher formulários, solicitar contato ou utilizar nossos serviços.

• Dados coletados automaticamente: informações sobre o dispositivo, navegador, endereço IP, páginas visitadas, tempo de acesso e outras informações de uso ao navegar em nosso site.

• Dados de terceiros: em alguns casos, podemos receber informações de parceiros comerciais, plataformas de análise ou fontes públicas, sempre em conformidade com a legislação aplicável.`,
  },
  {
    id: 'uso',
    title: 'Uso de Informações',
    content: `As informações coletadas são utilizadas para:

• Fornecer, operar e melhorar nossos serviços
• Responder a solicitações e comunicações
• Enviar comunicações institucionais e comerciais (com consentimento)
• Cumprir obrigações legais e regulatórias
• Prevenir fraudes e garantir a segurança das operações
• Realizar análises e melhorias em nossos produtos e processos`,
  },
  {
    id: 'compartilhamento',
    title: 'Compartilhamento de Dados',
    content: `Não comercializamos seus dados pessoais. Podemos compartilhar informações com terceiros nas seguintes situações:

• Prestadores de serviço que atuam em nosso nome (processadores de dados), sempre sob contratos que garantem a proteção adequada
• Autoridades governamentais e regulatórias, quando exigido por lei
• Parceiros estratégicos, com seu consentimento expresso
• Em caso de operações societárias, como fusões ou aquisições, com as devidas garantias

Sempre exigimos que terceiros mantenham padrões de segurança e confidencialidade compatíveis com os nossos.`,
  },
  {
    id: 'seguranca',
    title: 'Segurança dos Dados',
    content: `Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda, alteração ou divulgação indevida. Nossas práticas incluem:

• Criptografia de dados em trânsito e em repouso
• Controles de acesso baseados em função
• Monitoramento contínuo de sistemas
• Treinamento regular de equipes sobre proteção de dados
• Revisões periódicas de segurança

Apesar de nossos esforços, nenhum sistema é completamente infalível. Em caso de incidente de segurança, seguiremos os procedimentos previstos na LGPD e informaremos os titulares afetados conforme aplicável.`,
  },
  {
    id: 'cookies',
    title: 'Cookies',
    content: `Utilizamos cookies e tecnologias similares para melhorar a experiência de navegação, analisar o uso do site e personalizar conteúdo. Os tipos de cookies utilizados incluem:

• Essenciais: necessários para o funcionamento básico do site
• Analíticos: para entender como o site é utilizado e identificar melhorias
• Funcionais: para lembrar preferências e personalizar a experiência

Você pode configurar seu navegador para recusar cookies, mas isso pode afetar a funcionalidade do site.`,
  },
  {
    id: 'direitos',
    title: 'Direitos do Titular',
    content: `Como titular de dados pessoais, você tem os seguintes direitos garantidos pela LGPD:

• Confirmação e acesso: saber se tratamos seus dados e quais são eles
• Correção: solicitar a correção de dados incompletos, inexatos ou desatualizados
• Anonimização, bloqueio ou eliminação: de dados desnecessários ou excessivos
• Portabilidade: receber seus dados em formato estruturado
• Revogação de consentimento: a qualquer momento
• Oposição: ao tratamento realizado com fundamento em outras bases legais

Para exercer seus direitos, entre em contato por meio de nossos canais institucionais.`,
  },
  {
    id: 'contato',
    title: 'Contato do DPO',
    content: `Para questões relacionadas à privacidade e proteção de dados, você pode entrar em contato com nosso Encarregado de Proteção de Dados (DPO):

E-mail: privacidade@xscales.com
Endereço: São Paulo, SP, Brasil

Nosso DPO está disponível para esclarecer dúvidas, receber solicitações e garantir o exercício dos seus direitos como titular de dados.`,
  },
  {
    id: 'alteracoes',
    title: 'Alterações na Política',
    content: `Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças em nossas práticas ou na legislação aplicável.

Comunicaremos alterações significativas por meio de aviso em destaque em nosso site ou por e-mail, quando aplicável. A data da última atualização será sempre indicada no início deste documento.

A continuidade do uso de nossos serviços após as alterações implica aceitação da política atualizada.

Última atualização: Janeiro de 2025`,
  },
];

export default function Privacidade() {
  const [activeSection, setActiveSection] = useState('introducao');
  usePageMeta({
    title: 'Política de Privacidade | XSCALES',
    description: 'Política de Privacidade da XSCALES. Como coletamos, usamos e protegemos seus dados em conformidade com a LGPD.',
  });

  return (
    <main>
      <PageHero
        label="Privacidade"
        title="Política de Privacidade"
        subtitle="Comprometidos com a proteção e o uso responsável das suas informações pessoais."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Privacidade' }]}
      />

      <section className="py-16 md:py-24" style={{ background: '#050816' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-10">
            <aside className="lg:col-span-1">
              <nav className="sticky top-24 space-y-1" aria-label="Seções da política">
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
                    data-testid={`nav-privacy-${s.id}`}
                  >
                    {s.title}
                  </button>
                ))}
              </nav>
            </aside>

            <main className="lg:col-span-3 space-y-12">
              {sections.map((s) => (
                <div key={s.id} id={s.id} className="scroll-mt-24" data-testid={`section-privacy-${s.id}`}>
                  <h2
                    className="text-xl font-bold text-white mb-4"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    {s.title}
                  </h2>
                  <div
                    className="text-sm leading-relaxed whitespace-pre-line"
                    style={{ color: 'rgba(248,250,252,0.68)' }}
                  >
                    {s.content}
                  </div>
                  <div
                    className="mt-8 h-px"
                    style={{ background: 'rgba(255,255,255,0.06)' }}
                  />
                </div>
              ))}
            </main>
          </div>
        </div>
      </section>
    </main>
  );
}
