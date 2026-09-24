export interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

export const navigationLinks: NavLink[] = [
  { label: 'Soluções', href: '#solucoes' },
  { label: 'LeanTrack', href: '#leantrack', badge: 'Indústria' },
  { label: 'IA', href: '#ia' },
  { label: 'Mensura', href: '#mensura' },
  { label: 'Processo', href: '#processo' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Plataformas', href: '#plataformas' },
  { label: 'Contato', href: '#contato' },
];

export const clientList: string[] = [
  'Imbera Brasil',
  'Grupo NTK',
  'Uninter',
  'Orbi Química',
  'Camaco',
  'Grupo ITS',
  'Joy Tubos',
  'Brasil Autos',
  'RDC Construtora',
  'Inorgan',
  'BRA Alumínios',
  'HI Engenharia',
  'Martelo Leilões',
  'Uchoas Contabilidade',
  'HiLicitá',
  'Plasdoni',
  'Sata Brasil',
  'Conexão Ind',
  'Lumise',
  'LimaLite Mineradora',
  'Valor Engenharia',
  'Capricho Franchising',
  'Culligan',
  'Ensina Radiólogos',
  'Sapia Inteligência',
  'Proact Ing',
  'WeMake',
  'Indaial Papel',
  'Amvian',
  'More Tecnologia',
  'CottonBaby',
  'Allied Titanium',
  'Stage2',
  'Tamura',
  'DLA Pharmaceutical',
  'Aliança Metalúrgica',
  'Qualyplas',
  'Softys Brasil',
  'Ruston Alimentos',
  'Ampri Indústria',
  'IBBL',
  'Sua Baze'
];

export const contactDetails = {
  phone: '+55 12 3302-3544',
  whatsapp: '+55 12 99147-0165',
  email: 'contato@fabersoft.com.br',
  support: 'suporte@fabersoft.com.br',
  address: {
    city: 'São José dos Campos, SP',
    building: 'Oregon Business Center',
    neighborhood: 'Aquarius',
    country: 'Brasil'
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/fabersoft',
    instagram: 'https://www.instagram.com/fabersoftbr/'
  }
};
