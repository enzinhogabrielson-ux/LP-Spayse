import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { usePageMeta } from '@/hooks/usePageMeta';
import { MessageSquare, Clock, Shield, CheckCircle, AlertCircle } from 'lucide-react';
import PageHero from '@/components/common/PageHero';

const ouvidoriaSchema = z.object({
  name: z.string().min(2, 'Nome deve ter no mínimo 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  type: z.string().min(1, 'Selecione o tipo de manifestação'),
  description: z.string().min(20, 'Descrição deve ter no mínimo 20 caracteres'),
});

type OuvidoriaFormData = z.infer<typeof ouvidoriaSchema>;

const inputStyles = {
  background: 'rgba(11,16,32,0.80)',
  border: '1px solid rgba(255,255,255,0.10)',
  color: '#F8FAFC',
  padding: '0.625rem 0.875rem',
  borderRadius: '0.5rem',
  width: '100%',
  fontSize: '0.875rem',
  outline: 'none',
  transition: 'border-color 0.2s',
};

function InputField({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5" style={{ color: 'rgba(248,250,252,0.80)' }}>
        {label}
      </label>
      {children}
      {error && (
        <div className="flex items-center gap-1.5 mt-1.5">
          <AlertCircle size={12} style={{ color: '#ef4444' }} />
          <span className="text-xs" style={{ color: '#ef4444' }}>{error}</span>
        </div>
      )}
    </div>
  );
}

export default function Ouvidoria() {
  const [submitted, setSubmitted] = useState(false);
  usePageMeta({
    title: 'Ouvidoria | XSCALES',
    description: 'Canal oficial de Ouvidoria XSCALES. Registre sua manifestação com sigilo e receba retorno em até 5 dias úteis.',
  });

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<OuvidoriaFormData>({
    resolver: zodResolver(ouvidoriaSchema),
  });

  const onSubmit = async (_data: OuvidoriaFormData) => {
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
  };

  return (
    <main>
      <PageHero
        label="Ouvidoria"
        title="Canal de Ouvidoria"
        subtitle="Espaço seguro para manifestações, sugestões, reclamações e elogios. Seu retorno é importante para nós."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Ouvidoria' }]}
      />

      <section className="py-24 md:py-32" style={{ background: '#050816' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: MessageSquare, title: 'Manifestações', desc: 'Reclamações, sugestões, elogios e denúncias são bem-vindas e tratadas com seriedade.' },
              { icon: Clock, title: 'Prazo de resposta', desc: 'Comprometemos-nos a responder em até 5 dias úteis a partir do recebimento da manifestação.' },
              { icon: Shield, title: 'Confidencialidade', desc: 'Todas as manifestações são tratadas com total sigilo e profissionalismo.' },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl"
                style={{ background: 'rgba(11,16,32,0.80)', border: '1px solid rgba(255,255,255,0.08)' }}
                data-testid={`block-ouvidoria-${i}`}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: 'rgba(255,197,0,0.10)', border: '1px solid rgba(255,197,0,0.18)' }}
                >
                  <item.icon size={18} style={{ color: '#FFC500' }} />
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(248,250,252,0.60)' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl"
              style={{ background: 'rgba(11,16,32,0.80)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {submitted ? (
                <div className="text-center py-8">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: 'rgba(255,197,0,0.12)', border: '1px solid rgba(255,197,0,0.25)' }}
                  >
                    <CheckCircle size={24} style={{ color: '#FFC500' }} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Manifestação recebida</h3>
                  <p className="text-sm" style={{ color: 'rgba(248,250,252,0.62)' }}>
                    Sua manifestação foi registrada com sucesso. Retornaremos em até 5 dias úteis no e-mail informado.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" data-testid="form-ouvidoria" noValidate>
                  <h2 className="text-lg font-bold text-white mb-6" style={{ letterSpacing: '-0.02em' }}>
                    Registrar manifestação
                  </h2>

                  <InputField label="Nome completo *" error={errors.name?.message}>
                    <input
                      {...register('name')}
                      type="text"
                      placeholder="Seu nome"
                      style={inputStyles}
                      onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = '#FFC500'; }}
                      onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = errors.name ? '#ef4444' : 'rgba(255,255,255,0.10)'; }}
                      data-testid="input-ouvidoria-name"
                    />
                  </InputField>

                  <InputField label="E-mail *" error={errors.email?.message}>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="seu@email.com"
                      style={inputStyles}
                      onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = '#FFC500'; }}
                      onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = errors.email ? '#ef4444' : 'rgba(255,255,255,0.10)'; }}
                      data-testid="input-ouvidoria-email"
                    />
                  </InputField>

                  <InputField label="Tipo de manifestação *" error={errors.type?.message}>
                    <select
                      {...register('type')}
                      style={{ ...inputStyles, appearance: 'none' }}
                      onFocus={(e) => { (e.currentTarget as HTMLSelectElement).style.borderColor = '#FFC500'; }}
                      onBlur={(e) => { (e.currentTarget as HTMLSelectElement).style.borderColor = errors.type ? '#ef4444' : 'rgba(255,255,255,0.10)'; }}
                      data-testid="select-ouvidoria-type"
                    >
                      <option value="">Selecione o tipo</option>
                      <option value="reclamacao" style={{ background: '#0B1020' }}>Reclamação</option>
                      <option value="sugestao" style={{ background: '#0B1020' }}>Sugestão</option>
                      <option value="elogio" style={{ background: '#0B1020' }}>Elogio</option>
                      <option value="denuncia" style={{ background: '#0B1020' }}>Denúncia</option>
                      <option value="solicitacao" style={{ background: '#0B1020' }}>Solicitação de informação</option>
                    </select>
                  </InputField>

                  <InputField label="Descrição *" error={errors.description?.message}>
                    <textarea
                      {...register('description')}
                      placeholder="Descreva sua manifestação com detalhes..."
                      rows={5}
                      style={{ ...inputStyles, resize: 'vertical' }}
                      onFocus={(e) => { (e.currentTarget as HTMLTextAreaElement).style.borderColor = '#FFC500'; }}
                      onBlur={(e) => { (e.currentTarget as HTMLTextAreaElement).style.borderColor = errors.description ? '#ef4444' : 'rgba(255,255,255,0.10)'; }}
                      data-testid="textarea-ouvidoria-description"
                    />
                  </InputField>

                  <p className="text-xs" style={{ color: 'rgba(248,250,252,0.45)' }}>
                    Suas informações serão tratadas com total confidencialidade e utilizadas exclusivamente para responder à sua manifestação.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-lg text-sm font-semibold transition-all duration-200"
                    style={{
                      background: isSubmitting ? 'rgba(255,197,0,0.60)' : '#FFC500',
                      color: '#050816',
                    }}
                    data-testid="button-submit-ouvidoria"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar manifestação'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
