export interface ServiceItem {
  id: string;
  idx: string;
  title: string;
  description: string;
  detail: string;
  highlights: string[];
  ctaText: string;
  ctaHref: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'software-sob-medida',
    idx: '01',
    title: 'Software sob medida',
    description: 'Sistemas construídos em torno da sua operação, dos seus processos e das necessidades reais do seu negócio.',
    detail: 'Não forçamos a empresa a se adaptar a um molde engessado. Mapeamos as regras de negócio cruciais, projetamos a arquitetura ideal e entregamos uma ferramenta proprietária que se torna ativo estratégico da sua empresa.',
    highlights: ['Arquitetura escalável', 'Regras de negócio personalizadas', 'Código limpo e sustentável', 'Total propriedade intelectual'],
    ctaText: 'Conhecer desenvolvimento sob medida',
    ctaHref: '#contato'
  },
  {
    id: 'integracoes-apis',
    idx: '02',
    title: 'Integrações & APIs',
    description: 'Conectamos sistemas legados, ERPs de mercado, equipamentos e serviços modernos para eliminar silos e fazer a informação fluir.',
    detail: 'Elimine digitações manuais duplicadas e gargalos de comunicação entre departamentos. Construímos middleware robusto, webhooks, filas assíncronas e barramentos que garantem integridade total de ponta a ponta.',
    highlights: ['Conexão com TOTVS, SAP, Senior e outros', 'Pipelines assíncronos e idempotentes', 'Webhooks e mensageria distribuída', 'Auditoria completa de transações'],
    ctaText: 'Explorar integrações de sistemas',
    ctaHref: '#contato'
  },
  {
    id: 'ia-automacao',
    idx: '03',
    title: 'Inteligência Artificial & Automação',
    description: 'Aplicamos IA e automação onde elas realmente geram valor: reduzindo tarefas repetitivas, acelerando análises e apoiando decisões operacionais.',
    detail: 'Longe do hype e de robôs decorativos. Criamos agentes operacionais integrados a bancos de dados, fluxos de OCR inteligente para extração de documentos, automação de triagem e inteligência preditiva para quem decide.',
    highlights: ['Agentes operacionais conectados aos sistemas', 'Processamento inteligente de documentos', 'Extração automatizada de dados', 'Aceleração de fluxos analíticos'],
    ctaText: 'Descobrir possibilidades com IA',
    ctaHref: '#ia'
  },
  {
    id: 'web-mobile',
    idx: '04',
    title: 'Web & Mobile',
    description: 'Aplicações modernas, rápidas e escaláveis para colocar sua operação, produto ou serviço onde seus usuários e clientes estão.',
    detail: 'Interfaces com foco obsessivo em usabilidade, velocidade de carregamento e estabilidade sob alto volume. Do portal B2B ao app de apontamento em campo para chão de fábrica e equipes remotas.',
    highlights: ['React, Next.js, React Native e Flutter', 'Design responsivo e acessível', 'Offline-first para chão de fábrica/campo', 'Performance e Core Web Vitals elevados'],
    ctaText: 'Desenvolver um produto digital',
    ctaHref: '#contato'
  }
];

export interface LeanTrackStep {
  idx: string;
  title: string;
  desc: string;
  metricLabel: string;
  metricValue: string;
  stateBadge: string;
}

export const leanTrackSteps: LeanTrackStep[] = [
  {
    idx: '01',
    title: 'OEE e Produtividade em Tempo Real',
    desc: 'Acompanhe eficiência global, disponibilidade, performance e qualidade com dados capturados segundo a segundo do chão de fábrica.',
    metricLabel: 'OEE Global Médio',
    metricValue: '84.6%',
    stateBadge: 'Operação Estável'
  },
  {
    idx: '02',
    title: 'Coleta Automática Direto da Máquina',
    desc: 'Reduza apontamentos manuais e capture ciclos, velocidades e paradas diretamente de CLPs, sensores IoT, balanças e centros de usinagem.',
    metricLabel: 'Automação da Coleta',
    metricValue: '96.2%',
    stateBadge: 'CLP & Sensores Conectados'
  },
  {
    idx: '03',
    title: 'Visão Operacional e Gestão de Chão',
    desc: 'Saiba o que está produzindo agora, qual máquina parou, o motivo exato do setup e onde a atenção do supervisor é necessária imediatamente.',
    metricLabel: 'Tempo Médio de Resposta',
    metricValue: '< 4 min',
    stateBadge: 'Alertas Ativos'
  },
  {
    idx: '04',
    title: 'Melhoria Contínua Baseada em Fatos',
    desc: 'Transforme histórico de perdas, microparadas e refugo em planos de ação claros para elevar a margem da sua operação fabril.',
    metricLabel: 'Redução de Paradas Ocultas',
    metricValue: '-23.8%',
    stateBadge: 'Ciclo PDCA Conectado'
  }
];

export interface ErpStage {
  step: string;
  name: string;
  shortDesc: string;
  whatHappens: string;
  systemCheck: string;
  dataInherited: string;
}

export const mensuraStages: ErpStage[] = [
  {
    step: '01',
    name: 'Orçamento',
    shortDesc: 'A proposta comercial com regras automáticas',
    whatHappens: 'A proposta nasce no CRM antes de existir venda. A tabela de preços do cliente, descontos por volume e tributação específica do estado são aplicados instantaneamente.',
    systemCheck: 'Alçada protegida: vendedor visualiza a margem operacional apenas se tiver perfil autorizado. Descontos fora da alçada travam para liberação da gerência.',
    dataInherited: 'Cliente cadastrado, itens orçados, tributação estimada, condições de pagamento.'
  },
  {
    step: '02',
    name: 'Pedido',
    shortDesc: 'Aprovação sem redigitação de itens',
    whatHappens: 'O orçamento aprovado vira pedido com um clique. Não há redigitação. O sistema reserva estoque físico imediatamente e agenda a produção caso necessário.',
    systemCheck: 'Validação automática de limite de crédito e duplicatas vencidas antes do empenho de mercadorias.',
    dataInherited: 'Herda itens, condições e preços aprovados no orçamento. Gera reserva de estoque com timestamp.'
  },
  {
    step: '03',
    name: 'Financeiro',
    shortDesc: 'Títulos e conciliação em tempo real',
    whatHappens: 'Títulos a receber são provisionados no instante da confirmação. Integração bancária direta via PIX e boleto registrado sem intervenção manual de planilhas.',
    systemCheck: 'Bloqueio preventivo de faturamento caso haja inadimplência ou inconsistência cadastral fiscal.',
    dataInherited: 'Herda valores, prazos, formas de pagamento e centros de custo definidos no pedido.'
  },
  {
    step: '04',
    name: 'Estoque',
    shortDesc: 'Separação e baixa de saldo físico',
    whatHappens: 'A ordem de separação chega ao CD com indicação exata de corredor, prateleira e lote (FIFO/FEFO). Conferência com leitor de código de barras.',
    systemCheck: 'Impossível faturar produto sem saldo físico ou com divergência de lote reservado.',
    dataInherited: 'Herda lotes alocados, localização física no armazém e dados de embalagem.'
  },
  {
    step: '05',
    name: 'Fiscal',
    shortDesc: 'Emissão e cálculo tributário automático',
    whatHappens: 'Geração e transmissão de NF-e e MDF-e em segundos. Motor tributário calcula ICMS-ST, IPI, PIS/COFINS e DIFAL sem margem para erro humano.',
    systemCheck: 'Validação de schema SEFAZ e certificado digital em milissegundos antes do envio.',
    dataInherited: 'Herda dados fiscais de produtos, NCM, CFOP da operação e dados completos do destinatário.'
  },
  {
    step: '06',
    name: 'Expedição',
    shortDesc: 'Romaneio, pesagem e foto da carga',
    whatHappens: 'Romaneio montado por rota e transportadora. Etiqueta de despacho gerada, conferência de peso e upload de foto da carga lacrada no caminhão.',
    systemCheck: 'Carga só é liberada na guarita com NF-e autorizada e romaneio assinado digitalmente.',
    dataInherited: 'Herda chave da NF-e, volumes, peso aferido, transportadora e previsão de entrega.'
  }
];

export const processSteps = [
  {
    step: '01',
    name: 'Entender',
    desc: 'Antes de escrever uma linha de código, mergulhamos na operação, nas restrições reais de chão de fábrica ou escritório, nos sistemas legados e no resultado financeiro esperado.',
    tag: 'Diagnóstico & Imersão'
  },
  {
    step: '02',
    name: 'Especificar',
    desc: 'Transformamos dores e gargalos em especificações técnicas precisas: regras de negócio, fluxos de exceção, arquitetura de dados e critérios objetivos de aceite.',
    tag: 'Engenharia de Requisitos'
  },
  {
    step: '03',
    name: 'Construir',
    desc: 'Desenvolvemos com práticas modernas de engenharia, tipagem estrita, testes automatizados e IA aplicada para acelerar entrega sem comprometer robustez.',
    tag: 'Desenvolvimento Ágil'
  },
  {
    step: '04',
    name: 'Validar',
    desc: 'Testamos a solução em ambientes espelho e colocamos os operadores e usuários reais para validar cada funcionalidade antes da virada de chave.',
    tag: 'QA & Homologação Real'
  },
  {
    step: '05',
    name: 'Evoluir',
    desc: 'Software em produção é organismo vivo. Monitoramos telemetria, tempo de resposta, comportamento dos usuários e acompanhamos a expansão do seu negócio.',
    tag: 'Sustentação & Evolução'
  }
];

export const whyFaberSoftPoints = [
  {
    idx: '01',
    title: 'Pensamos no negócio antes do código',
    desc: 'Tecnologia é ferramenta. O objetivo principal continua sendo reduzir custos operacionais, eliminar retrabalho, fechar gargalos e destravar capacidade produtiva.'
  },
  {
    idx: '02',
    title: 'Construímos para evoluir e durar',
    desc: 'Arquitetura modular, testes e documentação para que sua solução continue expandindo sem se tornar refém de débitos técnicos ou retrabalhos caros.'
  },
  {
    idx: '03',
    title: 'Aproveitamos e integramos o que já existe',
    desc: 'Nem todo problema exige descartar o legado. Se você já tem ERPs, bancos de dados ou CLPs consolidados, conectamos tudo de forma harmoniosa.'
  },
  {
    idx: '04',
    title: 'Trabalhamos lado a lado com quem opera',
    desc: 'Ouvimos o operador da máquina, o estoquista, o coordenador comercial e o diretor de TI. Soluções bem-sucedidas nascem da realidade diária de quem usa.'
  },
  {
    idx: '05',
    title: 'IA pragmática na engenharia e no produto',
    desc: 'Utilizamos inteligência artificial tanto para multiplicar a produtividade do nosso time de engenharia quanto para criar vantagens competitivas reais nos sistemas dos clientes.'
  }
];

export const proprietaryPlatforms = [
  { name: 'LeanTrack MES', seg: 'Chão de Fábrica & Indústria 4.0', highlight: true },
  { name: 'TraceLine', seg: 'Rastreabilidade Industrial', highlight: false },
  { name: 'Íris', seg: 'Visão Computacional & IA', highlight: true },
  { name: 'Mensura', seg: 'ERP Industrial & Distribuição', highlight: true },
  { name: 'Esteira', seg: 'Crédito & Cobrança Automatizada', highlight: false },
  { name: 'Lastro', seg: 'Gestão de Investidores & Ativos', highlight: false },
  { name: 'Salvaguarda', seg: 'Compliance & Auditoria Digital', highlight: false },
  { name: 'Crivo', seg: 'Recrutamento & Triagem Técnica', highlight: false },
  { name: 'Cadastro Digital', seg: 'Onboarding & OCR Automatizado', highlight: true },
  { name: 'Prospecta IA', seg: 'Inteligência de Mercado B2B', highlight: true },
  { name: 'Pauta', seg: 'Análise de Conversas e Reuniões', highlight: false },
  { name: 'Linha', seg: 'Agentes de Voz com Inteligência Artificial', highlight: false },
  { name: 'Parecer', seg: 'Avaliação & Laudos Imobiliários', highlight: false },
  { name: 'HiLicitá', seg: 'Inteligência em Licitações Públicas', highlight: false },
  { name: 'Votera', seg: 'Gestão Estratégica & Análise Política', highlight: false },
  { name: 'Catraca', seg: 'Controle de Acesso & Ingressos', highlight: false },
  { name: 'Arremate', seg: 'Plataforma para Leilões de Imóveis', highlight: false },
  { name: 'FretaFlow', seg: 'CRM Especializado Automotivo', highlight: false },
  { name: 'Alicerce', seg: 'Gestão para Incorporadoras', highlight: false },
  { name: 'Permuta', seg: 'Rede de Permuta de Ativos Imobiliários', highlight: false }
];

export const testimonials = [
  {
    name: 'Carlos Mendes',
    role: 'Diretor de Operações',
    when: 'há 2 meses',
    quote: 'A FaberSoft entregou exatamente o que precisávamos. A plataforma sob medida organizou toda a nossa operação e o suporte é excelente.',
    initials: 'CM'
  },
  {
    name: 'Juliana Prado',
    role: 'CEO',
    when: 'há 4 meses',
    quote: 'Time extremamente técnico e ágil. Usaram IA no desenvolvimento e entregaram em metade do tempo que outras empresas estimaram.',
    initials: 'JP'
  },
  {
    name: 'Rafael Lima',
    role: 'Gerente de TI',
    when: 'há 5 meses',
    quote: 'Profissionais sérios, comunicação clara e código de qualidade. Recomendo para qualquer empresa que precise de software de verdade.',
    initials: 'RL'
  },
  {
    name: 'Marina Costa',
    role: 'Sócia-Diretora',
    when: 'há 7 meses',
    quote: 'Transformaram um processo manual em um sistema completo. A metodologia deles dá muita previsibilidade ao projeto.',
    initials: 'MC'
  }
];

export const techStackCategories = [
  {
    title: 'Frontend & Mobile',
    desc: 'Interfaces reativas, leves e de alto desempenho',
    technologies: ['React', 'Next.js', 'TypeScript', 'React Native', 'Flutter', 'Tailwind CSS']
  },
  {
    title: 'Backend & APIs',
    desc: 'Arquiteturas robustas com alta tolerância a falhas',
    technologies: ['Node.js', 'Python', '.NET', 'PHP', 'Laravel', 'REST & GraphQL']
  },
  {
    title: 'Dados & Inteligência Artificial',
    desc: 'Modelos práticos integrados ao fluxo do negócio',
    technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'OpenAI', 'Anthropic', 'Vector DBs']
  },
  {
    title: 'Cloud & Infraestrutura',
    desc: 'Confiabilidade, conteinerização e deploy contínuo',
    technologies: ['AWS', 'Docker', 'Linux', 'CI/CD Pipelines', 'Cloudflare', 'Redis']
  }
];
