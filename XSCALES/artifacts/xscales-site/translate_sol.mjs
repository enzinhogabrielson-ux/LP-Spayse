import fs from 'fs';

const p = './src/lib/i18n.ts';
let code = fs.readFileSync(p, 'utf-8');

const enPatch = {
  'sol.payments.title': 'Payments',
  'sol.payments.desc': 'Payment processing infrastructure adapted for local realities in Latin America.',
  'sol.payments.longDesc': 'A robust structure that supports high volume operations. Offer local payment methods with an infrastructure designed to convert more and reduce friction.',
  'sol.payments.f0': 'Local payments',
  'sol.payments.f1': 'Advanced recurrence',
  'sol.payments.f2': 'High availability',
  'sol.payments.f3': 'Customizable checkout',
  'sol.payouts.title': 'Payouts',
  'sol.payouts.desc': 'Automated payouts, transfers and mass settlements with security and integration.',
  'sol.payouts.longDesc': 'Automate and consolidate your transfer flow. Pay suppliers, partners and clients directly through API with low latency.',
  'sol.payouts.f0': 'Mass payouts',
  'sol.payouts.f1': 'Supplier management',
  'sol.payouts.f2': 'Accelerated settlement',
  'sol.payouts.f3': 'Control dashboard',
  'sol.banking.title': 'Banking',
  'sol.banking.desc': 'Access a financial structure that supports the movement, management and expansion of your operation.',
  'sol.banking.longDesc': 'Financial structure to support movement, settlement and operation organization. Access banking services aligned with your operation complexity.',
  'sol.banking.f0': 'Operational accounts',
  'sol.banking.f1': 'Liquidity management',
  'sol.banking.f2': 'International transfers',
  'sol.banking.f3': 'Financial reports',
  'sol.cross-border.title': 'Cross Border',
  'sol.cross-border.desc': 'Expand to new markets with a more fluid, integrated operation prepared for diverse regulatory contexts.',
  'sol.cross-border.longDesc': 'A foundation prepared for businesses that need to operate across borders with more predictability. Operate in multiple markets with a single integration.',
  'sol.cross-border.f0': 'International operations',
  'sol.cross-border.f1': 'Regulatory compliance',
  'sol.cross-border.f2': 'Integrated exchange',
  'sol.cross-border.f3': 'Multilingual support',
  'sol.orquestracao.title': 'Operational Orchestration',
  'sol.orquestracao.desc': 'Centralize integrations, flows, reconciliations and critical routines in a performance-driven environment.',
  'sol.orquestracao.longDesc': 'More clarity on inflows, outflows, transfers and operational flow. Centralize your entire financial operation in a single control panel.',
  'sol.orquestracao.f0': 'Centralized integration',
  'sol.orquestracao.f1': 'Automated flows',
  'sol.orquestracao.f2': 'Smart reconciliation',
  'sol.orquestracao.f3': 'Real-time monitoring',
  'sol.reconciliacao.title': 'Reconciliation & Control',
  'sol.reconciliacao.desc': 'More clarity on inflows, outflows, transfers and operational flow for precise financial management.',
  'sol.reconciliacao.longDesc': 'Total visibility over all financial movements of your operation. Identify discrepancies, automate reconciliations and make data-driven decisions.',
  'sol.reconciliacao.f0': 'Auto reconciliation',
  'sol.reconciliacao.f1': 'Detailed reports',
  'sol.reconciliacao.f2': 'Smart alerts',
  'sol.reconciliacao.f3': 'Data export',
};

const esPatch = {
  'sol.payments.title': 'Payments',
  'sol.payments.desc': 'Infraestructura de procesamiento de pagos adaptada a las realidades locales en América Latina.',
  'sol.payments.longDesc': 'Una estructura robusta que soporta operaciones de alto volumen. Ofrezca métodos de pago locales con una infraestructura diseñada para convertir más y reducir fricciones.',
  'sol.payments.f0': 'Pagos locales',
  'sol.payments.f1': 'Recurrencia avanzada',
  'sol.payments.f2': 'Alta disponibilidad',
  'sol.payments.f3': 'Checkout personalizable',
  'sol.payouts.title': 'Payouts',
  'sol.payouts.desc': 'Pagos automatizados, transferencias y liquidaciones masivas con seguridad e integración.',
  'sol.payouts.longDesc': 'Automatice y consolide su flujo de transferencias. Pague a proveedores, socios y clientes directamente a través de API con baja latencia.',
  'sol.payouts.f0': 'Payouts masivos',
  'sol.payouts.f1': 'Gestión de proveedores',
  'sol.payouts.f2': 'Liquidación acelerada',
  'sol.payouts.f3': 'Panel de control',
  'sol.banking.title': 'Banking',
  'sol.banking.desc': 'Acceda a una estructura financiera que apoya el movimiento, gestión y expansión de su operación.',
  'sol.banking.longDesc': 'Estructura financiera para apoyar el movimiento, liquidación y organización de la operación. Acceda a servicios bancarios alineados a la complejidad de su operación.',
  'sol.banking.f0': 'Cuentas operativas',
  'sol.banking.f1': 'Gestión de liquidez',
  'sol.banking.f2': 'Transferencias internacionales',
  'sol.banking.f3': 'Informes financieros',
  'sol.cross-border.title': 'Cross Border',
  'sol.cross-border.desc': 'Expándase a nuevos mercados con una operación más fluida, integrada y preparada para diversos contextos regulatorios.',
  'sol.cross-border.longDesc': 'Una base preparada para empresas que necesitan operar a través de las fronteras con mayor previsibilidad. Opere en múltiples mercados con una sola integración.',
  'sol.cross-border.f0': 'Operaciones internacionales',
  'sol.cross-border.f1': 'Cumplimiento normativo',
  'sol.cross-border.f2': 'Cambio integrado',
  'sol.cross-border.f3': 'Soporte multilingüe',
  'sol.orquestracao.title': 'Orquestación Operativa',
  'sol.orquestracao.desc': 'Centralice integraciones, flujos, conciliaciones y rutinas críticas en un entorno orientado al rendimiento.',
  'sol.orquestracao.longDesc': 'Mayor claridad sobre entradas, salidas, transferencias y flujo operativo. Centralice toda su operación financiera en un panel de control único.',
  'sol.orquestracao.f0': 'Integración centralizada',
  'sol.orquestracao.f1': 'Flujos automatizados',
  'sol.orquestracao.f2': 'Conciliación inteligente',
  'sol.orquestracao.f3': 'Monitoreo en tiempo real',
  'sol.reconciliacao.title': 'Reconciliación y Control',
  'sol.reconciliacao.desc': 'Mayor claridad sobre entradas, salidas, transferencias y flujo operativo para una gestión financiera precisa.',
  'sol.reconciliacao.longDesc': 'Visibilidad total sobre todos los movimientos financieros de su operación. Identifique discrepancias, automatice conciliaciones y tome decisiones basadas en datos.',
  'sol.reconciliacao.f0': 'Conciliación automática',
  'sol.reconciliacao.f1': 'Informes detallados',
  'sol.reconciliacao.f2': 'Alertas inteligentes',
  'sol.reconciliacao.f3': 'Exportación de datos',
};

// Replace EN block
const enIndex = code.indexOf('const en: Translations');
const esIndex = code.indexOf('const es: Translations');

if (enIndex !== -1 && esIndex !== -1) {
  let ptBlock = code.substring(0, enIndex);
  let enBlock = code.substring(enIndex, esIndex);
  let esBlock = code.substring(esIndex);

  for (const [k, v] of Object.entries(enPatch)) {
    const rx = new RegExp(`\\s*'${k.replace(/\./g, '\\.')}':\\s*'.*?',`);
    enBlock = enBlock.replace(rx, `\n  '${k}': '${v}',`);
  }

  for (const [k, v] of Object.entries(esPatch)) {
    const rx = new RegExp(`\\s*'${k.replace(/\./g, '\\.')}':\\s*'.*?',`);
    esBlock = esBlock.replace(rx, `\n  '${k}': '${v}',`);
  }

  fs.writeFileSync(p, ptBlock + enBlock + esBlock, 'utf-8');
}
console.log('Done!');
