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
    value: 'comercial@spayse.com',
    href: 'mailto:comercial@spayse.com',
    description: 'Para propostas, parcerias e novos negócios.',
  },
  {
    label: 'Suporte Técnico',
    value: 'suporte@spayse.com',
    href: 'mailto:suporte@spayse.com',
    description: 'Atendimento técnico para clientes ativos.',
  },
  {
    label: 'Compliance & Regulatório',
    value: 'compliance@spayse.com',
    href: 'mailto:compliance@spayse.com',
    description: 'Questões regulatórias, auditoria e licenciamento.',
  },
  {
    label: 'Imprensa & Mídia',
    value: 'midia@spayse.com',
    href: 'mailto:midia@spayse.com',
    description: 'Assessoria de imprensa, entrevistas e conteúdo editorial.',
  },
];

export const contactOffices: ContactOffice[] = [
  {
    city: 'São Paulo',
    country: 'Brasil',
    address: '[A definir]',
    phone: '[A definir]',
    timezone: 'UTC-3',
  },
  {
    city: 'Cidade do México',
    country: 'México',
    address: '[A definir]',
    timezone: 'UTC-6',
  },
  {
    city: 'Bogotá',
    country: 'Colômbia',
    address: '[A definir]',
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
