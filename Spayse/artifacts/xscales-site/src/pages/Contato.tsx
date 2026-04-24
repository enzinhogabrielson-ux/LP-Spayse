import { useRef, useState } from 'react';
import { usePageMeta } from '@/hooks/usePageMeta';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  MessageSquare, Presentation, HelpCircle, Handshake,
  User, Briefcase, CreditCard, TrendingUp, CheckCircle, ArrowRight,
} from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import { getLang } from '@/lib/lang';
import { tr } from '@/lib/i18n';

// ─── Multi-Step Diagnostic Form ──────────────────────────────────────────────

function DiagnosticForm() {
  const lang = getLang();
  const t = (key: string) => tr(key, lang);

  const STEPS = [
    { id: 1, icon: User, title: t('form.step1Title'), subtitle: t('form.step1Sub') },
    { id: 2, icon: Briefcase, title: t('form.step2Title'), subtitle: t('form.step2Sub') },
    { id: 3, icon: CreditCard, title: t('form.step3Title'), subtitle: t('form.step3Sub') },
    { id: 4, icon: TrendingUp, title: t('form.step4Title'), subtitle: t('form.step4Sub') },
  ];

  const marketOptions = [t('form.market1'), t('form.market2'), t('form.market3'), t('form.market4')];
  const paymentOptions = [t('form.pay1'), t('form.pay2'), t('form.pay3'), t('form.pay4')];
  const revenueOptions = [t('form.rev1'), t('form.rev2'), t('form.rev3'), t('form.rev4'), t('form.rev5')];

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    market: '',
    payment: '',
    revenue: '',
  });
  const [errors, setErrors] = useState<{ name?: string; whatsapp?: string }>({});

  const totalSteps = STEPS.length;
  const currentStep = STEPS[step - 1];
  const StepIcon = currentStep.icon;

  const formatPhone = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const validateStep1 = () => {
    const e: { name?: string; whatsapp?: string } = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) e.name = t('form.nameError');
    const digits = formData.whatsapp.replace(/\D/g, '');
    if (digits.length < 10) e.whatsapp = t('form.whatsappError');
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && !validateStep1()) return;
    if (step < totalSteps) setStep(s => s + 1);
    else handleSubmit();
  };

  const handleSubmit = async () => {
    await new Promise(r => setTimeout(r, 600));
    setSubmitted(true);
  };

  const canProceed = () => {
    if (step === 1) return formData.name.trim().length >= 2 && formData.whatsapp.replace(/\D/g, '').length >= 10;
    if (step === 2) return !!formData.market;
    if (step === 3) return !!formData.payment;
    if (step === 4) return !!formData.revenue;
    return true;
  };

  const inputBase: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.10)',
    borderRadius: '12px',
    padding: '14px 16px',
    color: '#F8FAFC',
    fontSize: '15px',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <div
      style={{
        background: 'rgba(11,16,32,0.92)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '20px',
        padding: '32px',
        width: '100%',
        backdropFilter: 'blur(16px)',
      }}
    >
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45 }}
          className="text-center py-8"
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
            style={{ background: 'rgba(30,79,160,0.15)', border: '1px solid rgba(30,79,160,0.35)' }}
          >
            <CheckCircle size={32} style={{ color: '#1E4FA0' }} />
          </div>
          <div className="text-xl font-bold text-white mb-3" role="heading" aria-level={3} style={{ color: '#fff' }}>{t('form.successTitle')}</div>
          <div className="text-sm leading-relaxed" style={{ color: 'rgba(248,250,252,0.62)' }}>
            {t('form.thankYou')}, <strong className="text-white" style={{ color: '#fff' }}>{formData.name.split(' ')[0]}</strong>!<br />
            {t('form.successMsg')}</div>
        </motion.div>
      ) : (
        <>
          {/* Progress bar */}
          <div className="flex gap-1.5 mb-6">
            {STEPS.map((s) => (
              <div
                key={s.id}
                style={{
                  flex: 1,
                  height: '3px',
                  borderRadius: '99px',
                  background: s.id <= step ? '#1E4FA0' : 'rgba(255,255,255,0.12)',
                  transition: 'background 0.4s ease',
                }}
              />
            ))}
          </div>

          {/* Step content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.28 }}
            >
              {/* Step header */}
              <div className="flex items-start gap-3 mb-5">
                <div
                  style={{
                    background: 'rgba(30,79,160,0.12)',
                    border: '1px solid rgba(30,79,160,0.25)',
                    borderRadius: '10px',
                    padding: '8px',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <StepIcon size={18} style={{ color: '#1E4FA0' }} />
                </div>
                <div>
                  <div className="text-xl font-bold text-white" style={{ letterSpacing: '-0.02em', color: '#fff' }} role="heading" aria-level={3}>{currentStep.title}</div>
                  <div className="text-sm mt-0.5" style={{ color: 'rgba(248,250,252,0.55)' }}>{currentStep.subtitle}</div>
                </div>
              </div>

              {/* Step 1: Name + WhatsApp */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(248,250,252,0.75)' }}>
                      {t('form.nameLabel')}
                    </label>
                    <input
                      type="text"
                      placeholder={t('form.namePlaceholder')}
                      value={formData.name}
                      onChange={e => setFormData(d => ({ ...d, name: e.target.value }))}
                      onFocus={e => { e.currentTarget.style.borderColor = '#C9A84C'; }}
                      onBlur={e => { e.currentTarget.style.borderColor = errors.name ? '#ef4444' : 'rgba(255,255,255,0.10)'; }}
                      style={{ ...inputBase, borderColor: errors.name ? '#ef4444' : 'rgba(255,255,255,0.10)' }}
                      data-testid="diag-input-name"
                    />
                    {errors.name && <p className="text-xs mt-1.5" style={{ color: '#ef4444' }}>{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(248,250,252,0.75)' }}>
                      {t('form.whatsappLabel')}
                    </label>
                    <input
                      type="tel"
                      placeholder="(00) 00000-0000"
                      value={formData.whatsapp}
                      onChange={e => setFormData(d => ({ ...d, whatsapp: formatPhone(e.target.value) }))}
                      onFocus={e => { e.currentTarget.style.borderColor = '#C9A84C'; }}
                      onBlur={e => { e.currentTarget.style.borderColor = errors.whatsapp ? '#ef4444' : 'rgba(255,255,255,0.10)'; }}
                      style={{ ...inputBase, borderColor: errors.whatsapp ? '#ef4444' : 'rgba(255,255,255,0.10)' }}
                      data-testid="diag-input-whatsapp"
                    />
                    {errors.whatsapp && <p className="text-xs mt-1.5" style={{ color: '#ef4444' }}>{errors.whatsapp}</p>}
                  </div>
                </div>
              )}

              {/* Step 2: Market */}
              {step === 2 && (
                <div className="grid grid-cols-2 gap-3">
                  {marketOptions.map(opt => (
                    <button
                      key={opt}
                      onClick={() => setFormData(d => ({ ...d, market: opt }))}
                      style={{
                        background: formData.market === opt ? 'rgba(201,168,76,0.10)' : 'rgba(255,255,255,0.04)',
                        border: `1px solid ${formData.market === opt ? '#C9A84C' : 'rgba(255,255,255,0.10)'}`,
                        borderRadius: '12px',
                        padding: '14px 16px',
                        color: formData.market === opt ? '#C9A84C' : '#F8FAFC',
                        fontSize: '14px',
                        fontWeight: 500,
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                      }}
                    >
                      <span
                        style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          border: `2px solid ${formData.market === opt ? '#C9A84C' : 'rgba(255,255,255,0.25)'}`,
                          flexShrink: 0,
                          background: formData.market === opt ? '#C9A84C' : 'transparent',
                          transition: 'all 0.2s',
                        }}
                      />
                      {opt}
                    </button>
                  ))}
                </div>
              )}

              {/* Step 3: Payment */}
              {step === 3 && (
                <div className="space-y-2.5">
                  {paymentOptions.map(opt => (
                    <button
                      key={opt}
                      onClick={() => setFormData(d => ({ ...d, payment: opt }))}
                      style={{
                        width: '100%',
                        background: formData.payment === opt ? 'rgba(201,168,76,0.10)' : 'rgba(255,255,255,0.04)',
                        border: `1px solid ${formData.payment === opt ? '#C9A84C' : 'rgba(255,255,255,0.10)'}`,
                        borderRadius: '12px',
                        padding: '14px 16px',
                        color: formData.payment === opt ? '#C9A84C' : '#F8FAFC',
                        fontSize: '14px',
                        fontWeight: 500,
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                      }}
                    >
                      <span
                        style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          border: `2px solid ${formData.payment === opt ? '#C9A84C' : 'rgba(255,255,255,0.25)'}`,
                          flexShrink: 0,
                          background: formData.payment === opt ? '#C9A84C' : 'transparent',
                          transition: 'all 0.2s',
                        }}
                      />
                      {opt}
                    </button>
                  ))}
                </div>
              )}

              {/* Step 4: Revenue */}
              {step === 4 && (
                <div className="space-y-2.5">
                  {revenueOptions.map(opt => (
                    <button
                      key={opt}
                      onClick={() => setFormData(d => ({ ...d, revenue: opt }))}
                      style={{
                        width: '100%',
                        background: formData.revenue === opt ? 'rgba(30,79,160,0.12)' : 'rgba(255,255,255,0.04)',
                        border: `1px solid ${formData.revenue === opt ? '#1E4FA0' : 'rgba(255,255,255,0.10)'}`,
                        borderRadius: '12px',
                        padding: '14px 16px',
                        color: formData.revenue === opt ? '#1E4FA0' : '#F8FAFC',
                        fontSize: '14px',
                        fontWeight: 500,
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                      }}
                    >
                      <span
                        style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          border: `2px solid ${formData.revenue === opt ? '#1E4FA0' : 'rgba(255,255,255,0.25)'}`,
                          flexShrink: 0,
                          background: formData.revenue === opt ? '#1E4FA0' : 'transparent',
                          transition: 'all 0.2s',
                        }}
                      />
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center gap-3 mt-6">
            {step > 1 && (
              <button
                onClick={() => setStep(s => s - 1)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'rgba(248,250,252,0.55)',
                  fontSize: '14px',
                  cursor: 'pointer',
                  padding: '0 4px',
                  fontWeight: 500,
                  flexShrink: 0,
                }}
                data-testid="diag-btn-back"
              >
                {t('form.back')}
              </button>
            )}
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              style={{
                flex: 1,
                background: step === totalSteps
                  ? (canProceed() ? '#1E4FA0' : 'rgba(30,79,160,0.35)')
                  : (canProceed() ? '#C9A84C' : 'rgba(201,168,76,0.30)'),
                color: step === totalSteps ? '#fff' : '#050816',
                border: 'none',
                borderRadius: '999px',
                padding: '15px 24px',
                fontSize: '15px',
                fontWeight: 600,
                cursor: canProceed() ? 'pointer' : 'not-allowed',
                transition: 'all 0.25s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
              }}
              data-testid="diag-btn-next"
            >
              {step === totalSteps ? t('form.finish') : <>{t('form.next')} <ArrowRight size={15} /></>}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Contato() {
  const lang = getLang();
  const t = (key: string) => tr(key, lang);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  usePageMeta({
    title: `${t('contato.label')} | Spayse`,
    description: t('contato.subtitle'),
  });

  const purposeBlocks = [
    { icon: MessageSquare, title: t('contato.pb1Title'), description: t('contato.pb1Desc') },
    { icon: Presentation, title: t('contato.pb2Title'), description: t('contato.pb2Desc') },
    { icon: HelpCircle, title: t('contato.pb3Title'), description: t('contato.pb3Desc') },
    { icon: Handshake, title: t('contato.pb4Title'), description: t('contato.pb4Desc') },
  ];

  return (
    <main>
      <PageHero
        label={t('contato.label')}
        title={t('contato.title')}
        subtitle={t('contato.subtitle')}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: t('contato.label') }]}
      />

      <section className="py-24 md:py-32" style={{ background: '#050816' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Purpose blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {purposeBlocks.map((b, i) => (
              <div
                key={i}
                className="p-5 rounded-xl"
                style={{
                  background: 'rgba(11,16,32,0.80)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                data-testid={`block-purpose-${i}`}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: 'rgba(201,168,76,0.10)', border: '1px solid rgba(201,168,76,0.18)' }}
                >
                  <b.icon size={18} style={{ color: '#C9A84C' }} />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{b.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(248,250,252,0.55)' }}>
                  {b.description}
                </p>
              </div>
            ))}
          </div>

          {/* Form section — 2-column layout matching Home */}
          <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Copy */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center md:items-start md:text-left"
            >
              <span className="badge-primary-alt mb-5 self-center md:self-start">{t('form.diagBadge')}</span>
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                style={{ letterSpacing: '-0.025em' }}
              >
                {t('form.diagTitle')}
              </h2>
              <p className="text-base leading-relaxed mb-6 text-muted-60">
                {t('form.diagDesc')}
              </p>
              <div className="space-y-3 flex flex-col items-center md:items-start">
                {[t('form.diagBenefit1'), t('form.diagBenefit2'), t('form.diagBenefit3')].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(30,79,160,0.15)', border: '1px solid rgba(30,79,160,0.30)' }}
                    >
                      <CheckCircle size={11} style={{ color: '#1E4FA0' }} />
                    </div>
                    <span className="text-sm" style={{ color: 'rgba(248,250,252,0.70)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <DiagnosticForm />
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}
