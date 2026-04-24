export interface ContactChannel {
  label: string;
  value: string;
  href: string;
  description: string;
}

export interface ContactOffice {
  city: string;
  country: string;
  address: string;
  phone?: string;
  timezone: string;
}

export const contactChannels: ContactChannel[] = [
  {
    label: 'E-mail Comercial',
    value: 'comercial@xscales.com',
    href: 'mailto:comercial@xscales.com',
    description: 'Para propostas, parcerias e novos negócios.',
  },
  {
    label: 'Suporte Técnico',
    value: 'suporte@xscales.com',
    href: 'mailto:suporte@xscales.com',
    description: 'Atendimento técnico para clientes ativos.',
  },
  {
    label: 'Compliance & Regulatório',
    value: 'compliance@xscales.com',
    href: 'mailto:compliance@xscales.com',
    description: 'Questões regulatórias, auditoria e licenciamento.',
  },
  {
    label: 'Imprensa & Mídia',
    value: 'midia@xscales.com',
    href: 'mailto:midia@xscales.com',
    description: 'Assessoria de imprensa, entrevistas e conteúdo editorial.',
  },
];

export const contactOffices: ContactOffice[] = [
  {
    city: 'São Paulo',
    country: 'Brasil',
    address: 'Av. Brigadeiro Faria Lima, 3477 — Itaim Bibi, SP 04538-133',
    phone: '+55 11 3030-0000',
    timezone: 'UTC-3',
  },
  {
    city: 'Cidade do México',
    country: 'México',
    address: 'Paseo de la Reforma 250, Cuauhtémoc, CDMX 06600',
    timezone: 'UTC-6',
  },
  {
    city: 'Bogotá',
    country: 'Colômbia',
    address: 'Carrera 7 #71-21, Oficina 801 — Chapinero, Bogotá',
    timezone: 'UTC-5',
  },
];

export const contactFormSubjects = [
  'Quero conhecer as soluções de Payments',
  'Interesse em Banking as a Service',
  'Cross Border — expansão internacional',
  'Programa de Parceiros',
  'Integração técnica / API',
  'Compliance e regulatório',
  'Outro assunto',
] as const;

export type ContactFormSubject = (typeof contactFormSubjects)[number];
