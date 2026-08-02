import { Lawyer, PracticeArea, JuridicalTese } from "./types";

import milenaImage from "./assets/images/milena.jpeg";
import rafaelaImage from "./assets/images/rafaela.png";
import kipaoLogo from "./assets/images/kipao.jpg";
import ecosmeticosLogo from "./assets/images/Ecosmeticos.jpg";
import fontanaLogo from "./assets/images/logo fontana.jpg";

export const LAWYERS: Lawyer[] = [
  {
    id: "milena",
    name: "Dra. Milena Cichoski",
    role: "Sócia-Fundadora",
    oab: "OAB/PR 117.992",
    description: "Especialista em Direito do Consumidor.",
    imageUrl: milenaImage,
    imagePosition: "center 15%",
    email: "milena@cichoskietassoadv.com.br",
    specialties: [
      "Direito do Consumidor (Práticas Abusivas, Indenizações, Negativação Indevida)",
      "Contratos de Consumo e Defesa do Consumidor",
      "Ações de Reparação de Danos Morais e Materiais",
      "Soluções Amigáveis e Judiciais nas Relações de Consumo"
    ],
    education: [
      "Bacharel em Direito pela UNIVEL - Cascavel",
      "Pós-Graduação em Direito Civil e de Família",
      "Especialista em Defesa do Consumidor pelas Escolas Superiores de Advocacia",
      "Membro atuante da comissão de Direito Digital e Inovação"
    ],
    bio: "Dedicada à defesa dos direitos do cidadão e das relações de consumo, Dra. Milena Cichoski alia conhecimento técnico abrangente com uma escuta empática, atuando de forma estratégica no Direito do Consumidor para garantir soluções justas e ágeis."
  },
  {
    id: "rafaela",
    name: "Dra. Rafaela Pinheiro Tasso",
    role: "Sócia-Fundadora",
    oab: "OAB/PR 126.969",
    description: "Especialista em Direito do Trabalho e Direito Imobiliário.",
    imageUrl: rafaelaImage,
    email: "rafaela@cichoskietassoadv.com.br",
    specialties: [
      "Direito do Trabalho (Reclamatórias, Defesas Patronais, Rescisões, Horas Extras)",
      "Direito Imobiliário (Usucapião, Contratos, Posse e Regularização de Imóveis)",
      "Consultoria e Compliance Trabalhista e Imobiliário",
      "Resolução de Litígios Complexos e Defesa de Direitos"
    ],
    education: [
      "Bacharel em Direito pela UNIVEL - Cascavel",
      "Pós-Graduação Executiva em Direito do Trabalho e Processual do Trabalho",
      "Especialização Avançada em Direito Imobiliário Aplicado",
      "Certificação em Proteção de Dados e Direito Digital"
    ],
    bio: "Com perfil analítico e vasta experiência em soluções jurídicas, Dra. Rafaela Tasso atua com excelência no Direito do Trabalho e Direito Imobiliário, oferecendo suporte estratégico no atendimento de demandas trabalhistas e na regularização de bens e imóveis."
  }
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "trabalhista",
    iconName: "Briefcase",
    title: "Trabalhista Empresarial",
    description: "Preventivo e Compliance Trabalhista.",
    longDescription: "Advocacia puramente focada na blindagem trabalhista patronal, estruturação preventiva de contratos corporativos, compliance de jornada, e auditorias completas para resguardar o empregador de passivos indesejados.",
    examples: [
      "Blindagem e Auditorias Trabalhistas Preventivas para empresas (Compliance)",
      "Defesas em Reclamatórias Trabalhistas Individuais e Coletivas de alta complexidade",
      "Adequação de Banco de Horas, Turnos Ininterruptos e Acordos Coletivos",
      "Consultoria em rescisões contratuais seguras e minimização de riscos de contingência"
    ]
  },
  {
    id: "civil",
    iconName: "Gavel",
    title: "Direito Civil",
    description: "Solução de litígios e relações civis.",
    longDescription: "Atuação cirúrgica para regulamentar obrigações, estruturar contratos de alta complexidade, cobranças judiciais e extrajudiciais, e conduzir a resolução amigável ou contenciosa de litígios civis em todo o território nacional.",
    examples: [
      "Elaboração de contratos personalizados de alta segurança jurídica",
      "Ações de indenização por danos morais, materiais e perdas de oportunidade",
      "Cobranças estratégicas, execuções de títulos de crédito e confissões de dívida",
      "Medidas judiciais urgentes, liminares e procedimentos de tutela provisória"
    ]
  },
  {
    id: "imobiliario",
    iconName: "Home",
    title: "Direito Imobiliário",
    description: "Usucapião e Regularização de Imóveis.",
    longDescription: "Dedicamos sólida experiência na regularização jurídica de imóveis, escrituras, regularizações de posse, usucapião judicial e extrajudicial, além de contratos robustos sobre bens de raiz em todo o Estado do Paraná.",
    examples: [
      "Ações de Usucapião Extrajudicial ou Judicial para regularização célere de propriedades",
      "Ações possessórias (Reintegração, Imissão de Posse e Interdito Proibitório)",
      "Análise de riscos profunda (Due Diligence) para aquisições seguras e leilões de bens",
      "Assessoria em condomínios comerciais e residenciais, despejos e renovatórias"
    ]
  },
  {
    id: "familia",
    iconName: "Users",
    title: "Direito de Família",
    description: "Divórcios, pensão e Inventários.",
    longDescription: "Acompanhamento humanitário, discreto e técnico em divórcios, partilhas, fixação de pensões e inventários judiciais ou extrajudiciais, priorizando o equilíbrio emocional e a proteção patrimonial dos familiares.",
    examples: [
      "Divórcio consensual em cartório ou litigioso contencioso especializado com partilha",
      "Planejamento sucessório moderno e Holding Familiar para redução de carga tributária de ITCMD",
      "Abertura, processamento e conclusão de inventários judiciais de forma célere",
      "Ações de alimentos (Pensão Alimentícia), guarda compartilhada e regulamentação de convívio"
    ]
  },
  {
    id: "consumidor",
    iconName: "ShoppingCart",
    title: "Consumidor & Direito Aéreo",
    description: "Abusos de consumo, atrasos e cancelamentos de voos.",
    longDescription: "Proteção intransigente nas relações de consumo e transporte aéreo. Defendemos você ou sua empresa contra práticas abusivas de grandes corporações, fraudes de segurança bancária e PIX, além de falhas de companhias aéreas, como reembolsos negados, extravio de bagagens, atrasados significativos ou cancelamentos indevidos.",
    examples: [
      "Ações de reparação de danos morais por cancelamento intempestivo de voos ou overbooking indesejado",
      "Prevenção e ressarcimento de perdas morais e financeiras devido a extravio definitivo ou dano em bagagens",
      "Processos por negativação indevida e abuso comercial cometido por concessionárias e bancos",
      "Indenizações por fraudes eletrônicas de segurança bancária e invasão de contas de consumo"
    ]
  },
  {
    id: "contratos",
    iconName: "FileText",
    title: "Contratos & Execuções",
    description: "Análise, elaboração e cobranças.",
    longDescription: "Garantimos a total segurança de transações civis e comerciais por meio de elaborações contratuais cirúrgicas e conduzimos execuções eficientes de títulos vencidos para a devida recuperação de créditos.",
    examples: [
      "Parecer e análise técnica de contratos de alta complexidade comercial ou residencial",
      "Ações de Execução de Título Extrajudicial (cheques, duplicatas, ordens de pagamento, notas)",
      "Medidas assecuratórias urgentes, penhoras digitais e varreduras de patrimônio ocultado",
      "Formulação preventiva de instrumentos de confissão de dívida e garantias reais"
    ]
  },
  {
    id: "medico",
    iconName: "HeartPulse",
    title: "Direito Médico e da Saúde",
    description: "Defesa do médico e obtenção de medicamentos.",
    longDescription: "Atuação jurídica de excelência focada tanto na defesa ética e judicial de médicos, clínicas ou hospitais, quanto no amparo de pacientes para obtenção urgente de tratamentos médicos e medicamentos de alto custo negados pelo SUS ou Convênio.",
    examples: [
      "Defesa de médicos e instituições em processos de responsabilidade civil (suposto Erro Médico)",
      "Orientação jurídica e representação ética em Sindicâncias e Processos perante o CRM e Conselhos de Classe",
      "Medidas judiciais urgentes (Liminares) para aquisição de medicamentos excepcionais e de alto custo",
      "Ações contra abusos de Planos de Saúde para fornecimento de tratamentos oncológicos ou cirurgias"
    ]
  },
  {
    id: "recuperacao",
    iconName: "TrendingUp",
    title: "Recuperação de Valores",
    description: "Atuação estratégica para credores.",
    longDescription: "Gestão inteligente, célere e legal de contas a receber e débitos pendentes em aberto para empresas de pequeno, médio e grande porte, otimizando o fluxo de caixa corporativo.",
    examples: [
      "Habilitação e fiscalização de créditos em processos de Recuperação Judicial e Falências",
      "Ações de Cobrança, Monitórias e Execuções para repatriação de notas fiscais atrasadas",
      "Diligências de rastreamento de ativos e desconsideração da personalidade jurídica de devedores",
      "Negociações extrajudiciais amigáveis com alta taxa de conversão comercial"
    ]
  }
];

export const JURIDICAL_THESES: JuridicalTese[] = [
  {
    id: "tese-servidor",
    category: "Servidores Públicos",
    title: "Correção Jurisprudencial do PASEP",
    description: "Cobrança de rendimentos não creditados ou subtraídos nas contas do PASEP de servidores que ingressaram antes de 1988.",
    details: "Tese consolidada pelo STJ que de forma muito favorável permite ao servidor público pleitear a restituição de valores que deveriam ter sido capitalizados em sua conta do PASEP pelo Banco do Brasil e foram misteriosamente desfalcados com o passar das décadas.",
    status: "Sob Consulta",
    practiceAreaId: "civil"
  },
  {
    id: "tese-recup",
    category: "Direito Digital",
    title: "Recuperação de Contas Comerciais",
    description: "Análise detalhada de bloqueios indevidos e protocolos de segurança para restabelecimento imediato de perfis comerciais em redes sociais.",
    details: "Invocamos os preceitos do Marco Civil da Internet e do Código de Defesa do Consumidor para combater suspensões unilaterais sem contraditório prévio pelas Big Techs (Meta, Google, ByteDance), demonstrando lucros cessantes operacionais para obtenção de liminar de reativação rápida.",
    status: "Sob Consulta",
    practiceAreaId: "contratos"
  },
  {
    id: "tese-trab-patronal",
    category: "Direito do Trabalho",
    title: "Blindagem de Turnos & Compliance Patronal",
    description: "Metodologia estratégica para adequar contratos corporativos, turnos ininterruptos, banco de horas e provisionamento trabalhista preventivo.",
    details: "Direcionada ao empregador. Propõe uma revisão documental profunda nas jornadas contratuais, termos de confidencialidade e acordos de compensação, neutralizando até 85% dos riscos de contingência processual por meio de auditoria estruturada.",
    status: "Sob Consulta",
    practiceAreaId: "trabalhista"
  },
  {
    id: "tese-consumidor-aereo",
    category: "Direito do Consumidor",
    title: "Responsabilidade Civil por Overbooking e Atrasos",
    description: "Tese focada na violação do contrato de transporte aéreo e responsabilização direta das companhias por desamparo ao passageiro.",
    details: "Aplica regras da convenção de Montreal e do CDC para obter condenações indenizatórias decorrentes de cancelamentos unilaterais de voos e falhas graves de embarque, dispensando a necessidade de prova exaustiva de abalo emocional (dano moral presumido).",
    status: "Sob Consulta",
    practiceAreaId: "aereo"
  },
  {
    id: "tese-imob-usucapiao",
    category: "Direito Imobiliário",
    title: "Usucapião Extrajudicial de Regularização Célere",
    description: "Regularização célere de propriedades sem lide judicial, instruída diretamente no Cartório de Registro de Imóveis.",
    details: "Tese processual fundamentada no Código de Processo Civil que permite a titulação formal da propriedade de forma muito mais rápida que o inventário ou ação de usucapião comum, desde que comprovada a posse mansa, pacífica e ininterrupta.",
    status: "Sob Consulta",
    practiceAreaId: "imobiliario"
  },
  {
    id: "tese-trib-beneficio",
    category: "Direito Tributário",
    title: "Exclusão do ICMS da Base do PIS/COFINS",
    description: "Tese consolidada para reaver valores cobrados a maior no âmbito corporativo através de compensação fiscal.",
    details: "Atua na via de habilitação de crédito para reaver impostos federais incidentes indevidamente na composição do imposto nos últimos 5 anos de escrituração fiscal.",
    status: "Sob Consulta",
    practiceAreaId: "recuperacao"
  },
  {
    id: "tese-medico-defesa",
    category: "Responsabilidade Civil",
    title: "Inexistência de Culpa Presumida em Responsabilidade Civil",
    description: "Tese defensiva especializada voltada para afastar a inversão do ônus da prova em pleitos indenitários contra profissionais civis.",
    details: "Obriga o devedor ou demandante a demonstrar cabalmente culpa, nexo de causalidade e irregularidades através de exames periciais forenses, blindando reputações profissionais e reduzindo riscos de litígios temerários.",
    status: "Sob Consulta",
    practiceAreaId: "civil"
  },
  {
    id: "tese-familia-holding",
    category: "Família e Sucessões",
    title: "Holding Familiar e Blindagem de Herança",
    description: "Estruturação preventiva de patrimônio familiar visando evitar discussões desgastantes em inventários judiciais.",
    details: "Utiliza sociedades administradoras de bens para integralizar o patrimônio, reduzindo em até 70% o custo tributário do ITCMD e permitindo a partilha prévia de cotas sociais com cláusulas de usufruto vitalício, reversibilidade e impenhorabilidade.",
    status: "Sob Consulta",
    practiceAreaId: "familia"
  }
];

export const OFFICE_CONTACT = {
  address: "Rua Salgado Filho, nº 2259, 2º Andar - Regus Coworking (Espaço 7) - Sala 214",
  neighborhoodAndCity: "Centro, Cascavel/PR",
  zipCode: "85812-130",
  email: "cichoskietassoadv@gmail.com",
  phone: "(45) 99806-4085",
  whatsappUrl: "https://wa.me/5545998064085?text=Ol%C3%A1%21+Gostaria+de+agendar+um+atendimento+com+a+equipe+do+escrit%C3%B3rio.",
  oabFooter: "",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.925232770546!2d-53.4611416!3d-24.9618056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f3d463b9ca7cc9%3A0xe21268ee57ef67d9!2sR.%20Salgado%20Filho%2C%202259%20-%20Centro%2C%20Cascavel%20-%20PR%2C%2085810-140!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
};

export const PARTNERS = [
  {
    name: "Panificadora Kipão",
    subtitle: "Cliente Corporativo",
    logoUrl: kipaoLogo
  },
  {
    name: "Ecosmeticos",
    subtitle: "Cliente Corporativo",
    logoUrl: ecosmeticosLogo
  },
  {
    name: "Fontana Oro",
    subtitle: "Cliente Corporativo",
    logoUrl: fontanaLogo
  }
];
