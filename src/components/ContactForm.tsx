import { useState, FormEvent, useEffect, ChangeEvent } from "react";
import { ConsultationForm } from "../types";
import { OFFICE_CONTACT, PARTNERS } from "../data";
import { MapPin, Mail, Phone, Lock, CheckCircle2, FileText, ArrowRight, Clock, Trash2, Calendar } from "lucide-react";

interface ContactFormProps {
  selectedAreaFromOutside: string;
  preFilledDescription: string;
  initialSelectedLawyer: string;
}

export default function ContactForm({
  selectedAreaFromOutside,
  preFilledDescription,
  initialSelectedLawyer
}: ContactFormProps) {
  // Main form fields state
  const [formData, setFormData] = useState<ConsultationForm>({
    fullName: "",
    phone: "",
    email: "",
    area: "Selecione uma opção",
    location: "",
    lawyerPreference: "Equipe / Atendimento Geral (cichoskietassoadv@gmail.com)",
    description: "",
    lgpdAccepted: false
  });

  // Client submissions history stored locally
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [lastSubmittedId, setLastSubmittedId] = useState("");

  // Sync state when prefilled selections are triggered from outer components
  useEffect(() => {
    if (selectedAreaFromOutside) {
      setFormData((prev) => ({
        ...prev,
        area: selectedAreaFromOutside
      }));
    }
  }, [selectedAreaFromOutside]);

  useEffect(() => {
    if (preFilledDescription) {
      setFormData((prev) => ({
        ...prev,
        description: preFilledDescription
      }));
    }
  }, [preFilledDescription]);

  useEffect(() => {
    if (initialSelectedLawyer) {
      if (initialSelectedLawyer.includes("Milena")) {
        setFormData((prev) => ({
          ...prev,
          lawyerPreference: "Dra. Milena Cichoski (milena@cichoskietassoadv.com.br)"
        }));
      } else if (initialSelectedLawyer.includes("Rafaela")) {
        setFormData((prev) => ({
          ...prev,
          lawyerPreference: "Dra. Rafaela Pinheiro Tasso (rafaela@cichoskietassoadv.com.br)"
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          lawyerPreference: "Equipe / Atendimento Geral (cichoskietassoadv@gmail.com)"
        }));
      }
    }
  }, [initialSelectedLawyer]);

  // Load submissions from localStorage on mount
  useEffect(() => {
    const cached = localStorage.getItem("cichoski_tasso_consultations");
    if (cached) {
      try {
        setSubmissions(JSON.parse(cached));
      } catch (e) {
        // Ignorar erro do JSON cache
      }
    }
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      lgpdAccepted: e.target.checked
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.fullName || !formData.phone || !formData.email) {
      alert("Por favor, preencha seu nome, e-mail e telefone de contato.");
      return;
    }
    if (!formData.lgpdAccepted) {
      alert("É necessário aceitar os termos de consentimento da LGPD.");
      return;
    }

    setIsSubmitting(true);

    // Simulate 1.5s professional delay
    setTimeout(() => {
      const newSubmission = {
        id: "CT-" + Math.floor(Math.random() * 90000 + 10000),
        ...formData,
        dateString: new Date().toLocaleDateString("pt-BR"),
        timeString: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
        status: "Em Verificação"
      };

      const updated = [newSubmission, ...submissions];
      setSubmissions(updated);
      localStorage.setItem("cichoski_tasso_consultations", JSON.stringify(updated));

      setIsSubmitting(false);
      setSubmittedSuccess(true);
      setLastSubmittedId(newSubmission.id);

      // Scroll into view of success message
      const formEl = document.getElementById("contato-card");
      if (formEl) {
        formEl.scrollIntoView({ behavior: "smooth" });
      }
    }, 1200);
  };

  const clearSubmissions = () => {
    if (window.confirm("Deseja realmente apagar o seu histórico de simulações judiciais locally?")) {
      setSubmissions([]);
      localStorage.removeItem("cichoski_tasso_consultations");
    }
  };

  const handleCreateNew = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      area: "Selecione uma opção",
      location: "",
      lawyerPreference: "Equipe / Atendimento Geral (cichoskietassoadv@gmail.com)",
      description: "",
      lgpdAccepted: false
    });
    setSubmittedSuccess(false);
  };

  return (
    <section className="py-24 bg-surface relative">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Partners segment matching visual mockup header */}
        <div className="text-center mb-24 border-b border-outline-variant/15 pb-16">
          <p className="font-sans text-xs uppercase font-bold tracking-[0.25em] text-brand-text-muted mb-4">
            Empresas Parceiras &amp; Atendidas
          </p>
          <p className="text-xs text-brand-text-muted/80 max-w-xl mx-auto mb-10 leading-relaxed font-light">
            Temos orgulho de prestar assessoria jurídica e consultoria estratégica empresarial para negócios de destaque em nossa região, garantindo integridade corporativa, segurança e compliance de alto padrão.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto items-stretch">
            {PARTNERS.map((partner: any, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-outline-variant/15 text-center transition-all duration-300 hover:shadow-md cursor-default flex flex-col justify-between items-center group"
              >
                <div className="w-full flex-grow flex items-center justify-center min-h-[90px] mb-4">
                  {partner.logoUrl ? (
                    <img
                      src={partner.logoUrl}
                      alt={partner.name}
                      className="max-h-[70px] max-w-[180px] object-contain transition-all duration-300"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-primary-brand/5 flex items-center justify-center text-primary-brand/70">
                      <Calendar className="w-5 h-5" />
                    </div>
                  )}
                </div>
                <div>
                  <span className="block text-sm font-bold text-primary-moss-dark group-hover:text-primary-brand transition-colors">
                    {partner.name}
                  </span>
                  <span className="block text-[11px] text-brand-text-muted font-sans font-light mt-1">
                    {partner.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Subsections Grid */}
        <div id="contato" className="grid lg:grid-cols-12 gap-16 items-start scroll-mt-28">
          
          {/* Left Column (5 cols): Office Contact Info details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-primary-brand text-xs uppercase font-bold tracking-widest block">
                Agendamento de Consulta
              </span>
              <h2 className="font-serif-headline text-3xl sm:text-4xl font-bold text-primary-moss-dark">
                Inicie seu Atendimento Estratégico
              </h2>
              <p className="text-brand-text-muted font-sans text-[15px] leading-relaxed font-light">
                Preencha os dados cadastrais e relate resumidamente a sua demanda. O escritório atende demandas jurídicas diversas diretamente ou em parceria com especialistas da nossa rede para entregar a melhor solução para o seu caso.
              </p>
            </div>

            {/* Visual Specs Indicators */}
            <div className="space-y-6 pt-4">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-primary-brand/10 text-primary-brand rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-primary-moss-dark text-sm uppercase tracking-wider">
                    Sede Cascavel
                  </p>
                  <p className="text-sm text-brand-text-muted font-light leading-relaxed">
                    {OFFICE_CONTACT.address} <br />
                    {OFFICE_CONTACT.neighborhoodAndCity} • CEP {OFFICE_CONTACT.zipCode}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-primary-brand/10 text-primary-brand rounded-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-primary-moss-dark text-sm uppercase tracking-wider">
                    E-mail Oficial corporativo
                  </p>
                  <p className="text-sm text-brand-text-muted font-light">
                    {OFFICE_CONTACT.email}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-primary-brand/10 text-primary-brand rounded-lg">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-primary-moss-dark text-sm uppercase tracking-wider">
                    Canais WhatsApp &amp; Fone
                  </p>
                  <p className="text-sm text-brand-text-muted font-light mb-1">
                    {OFFICE_CONTACT.phone}
                  </p>
                  <a
                    href={OFFICE_CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-brand underline cursor-pointer"
                  >
                    Abrir Chat Direto com Advogada
                  </a>
                </div>
              </div>
            </div>

            {/* Local Intake Submissions History List (Visible in Sidebar) */}
            {submissions.length > 0 && (
              <div className="border border-outline-variant/30 rounded-lg p-5 bg-white space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xs font-bold text-primary-moss-dark uppercase tracking-wider flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary-brand" /> Seus Atendimentos ({submissions.length})
                  </h3>
                  <button
                    onClick={clearSubmissions}
                    className="text-xs text-red-600 hover:text-red-800 font-semibold flex items-center gap-1"
                    title="Excluir histórico local"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Limpar
                  </button>
                </div>

                <div className="space-y-2.5 max-h-[220px] overflow-y-auto pr-1">
                  {submissions.map((sub, idx) => (
                    <div
                      key={sub.id}
                      className="p-3 bg-brand-cream border border-outline-variant/15 rounded text-xs space-y-1"
                    >
                      <div className="flex justify-between items-center font-bold">
                        <span className="text-primary-brand">{sub.id}</span>
                        <span className="text-brand-text-muted font-light text-[10px]">
                          {sub.dateString} às {sub.timeString}
                        </span>
                      </div>
                      <p className="text-brand-charcoal font-medium truncate">
                        Área: {sub.area}
                      </p>
                      <p className="text-[10px] text-brand-secondary font-light truncate">
                        Destino: {sub.lawyerPreference || "cichoskietassoadv@gmail.com"}
                      </p>
                      <div className="flex items-center gap-1 text-[10px] text-amber-700 font-bold">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                        Status: {sub.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column (7 cols): Main Pure white input form or Success Ticket */}
          <div
            id="contato-card"
            className="lg:col-span-7 bg-white p-8 md:p-12 rounded-2xl soft-shadow border border-outline-variant/15"
          >
            {!submittedSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Visual Security Warning */}
                <div className="bg-brand-cream p-3 rounded text-xs text-brand-secondary flex gap-2 items-center">
                  <Lock className="w-4 h-4 text-primary-brand shrink-0" />
                  <span>Seus dados pessoais estão protegidos sob sigilo legal e criptografia.</span>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-primary-moss-dark uppercase tracking-wide">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome"
                      className="w-full border border-outline-variant/35 focus:border-primary-brand focus:ring-1 focus:ring-primary-brand rounded-lg p-3 bg-brand-cream-subtle font-sans text-sm text-brand-charcoal outline-none transition-all"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-primary-moss-dark uppercase tracking-wide">
                      Telefone (WhatsApp)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(45) 99806-4085"
                      className="w-full border border-outline-variant/35 focus:border-primary-brand focus:ring-1 focus:ring-primary-brand rounded-lg p-3 bg-brand-cream-subtle font-sans text-sm text-brand-charcoal outline-none transition-all"
                    />
                  </div>
                </div>

                {/* E-mail */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-primary-moss-dark uppercase tracking-wide">
                    E-mail de Contato
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="seu@email.com"
                    className="w-full border border-outline-variant/35 focus:border-primary-brand focus:ring-1 focus:ring-primary-brand rounded-lg p-3 bg-brand-cream-subtle font-sans text-sm text-brand-charcoal outline-none transition-all"
                  />
                </div>

                {/* Specific Lawyer / E-mail Destination Selector */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-primary-moss-dark uppercase tracking-wide">
                    Advogada Específica / Canal de Atendimento
                  </label>
                  <select
                    name="lawyerPreference"
                    value={formData.lawyerPreference}
                    onChange={handleChange}
                    className="w-full border border-outline-variant/35 focus:border-primary-brand focus:ring-1 focus:ring-primary-brand rounded-lg p-3 bg-brand-cream-subtle font-sans text-sm text-brand-charcoal outline-none transition-all"
                  >
                    <option value="Equipe / Atendimento Geral (cichoskietassoadv@gmail.com)">
                      Atendimento Geral — Equipe (cichoskietassoadv@gmail.com)
                    </option>
                    <option value="Dra. Milena Cichoski (milena@cichoskietassoadv.com.br)">
                      Dra. Milena Cichoski (milena@cichoskietassoadv.com.br)
                    </option>
                    <option value="Dra. Rafaela Pinheiro Tasso (rafaela@cichoskietassoadv.com.br)">
                      Dra. Rafaela Pinheiro Tasso (rafaela@cichoskietassoadv.com.br)
                    </option>
                  </select>
                  <p className="text-[11px] text-brand-text-muted font-light">
                    Selecione o atendimento com uma advogada específica ou mantenha o canal geral do escritório.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Legal Area selector */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-primary-moss-dark uppercase tracking-wide">
                      Área Jurídica de Necessidade
                    </label>
                    <select
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                      className="w-full border border-outline-variant/35 focus:border-primary-brand focus:ring-1 focus:ring-primary-brand rounded-lg p-3 bg-brand-cream-subtle font-sans text-sm text-brand-charcoal outline-none transition-all"
                    >
                      <option disabled value="Selecione uma opção">Selecione uma opção</option>
                      <option value="Trabalhista">Direito Trabalhista</option>
                      <option value="Civil">Direito Civil / Contratos de Alta Complexidade</option>
                      <option value="Direito de Família">Direito de Família e Sucessões</option>
                      <option value="Direito do Consumidor">Direito do Consumidor</option>
                      <option value="Imobiliário">Direito Imobiliário</option>
                      <option value="Direito Tributário">Direito Tributário (Fiscos / Impostos)</option>
                      <option value="Direito Médico e da Saúde">Direito Médico e da Saúde</option>
                      <option value="Contas Digitais (Hack/Invasão)">Contas Digitais (Hack/Invasão)</option>
                      <option value="Contas Digitais (Bloqueios)">Contas Digitais (Bloqueios)</option>
                      <option value="Servidores Públicos">Servidores Públicos (PSS / PASEP)</option>
                      <option value="Tese - Juros Bancários">Tese - Juros Bancários</option>
                      <option value="Outros">Outras demandas jurídicas</option>
                    </select>
                  </div>

                  {/* Location field */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-primary-moss-dark uppercase tracking-wide">
                      Cidade / Estado
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Ex: Cascavel/PR"
                      className="w-full border border-outline-variant/35 focus:border-primary-brand focus:ring-1 focus:ring-primary-brand rounded-lg p-3 bg-brand-cream-subtle font-sans text-sm text-brand-charcoal outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Case summary description */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-primary-moss-dark uppercase tracking-wide">
                    Conte seu caso
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Breve resumo da sua situação e das datas do ocorrido..."
                    className="w-full border border-outline-variant/35 focus:border-primary-brand focus:ring-1 focus:ring-primary-brand rounded-lg p-3 bg-brand-cream-subtle font-sans text-sm text-brand-charcoal outline-none transition-all"
                  />
                </div>

                {/* Compliance Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="lgpd"
                    checked={formData.lgpdAccepted}
                    onChange={handleCheckboxChange}
                    className="rounded text-primary-brand focus:ring-primary-brand w-4 h-4 cursor-pointer pt-0.5 mt-1"
                  />
                  <label htmlFor="lgpd" className="text-xs text-brand-text-muted leading-relaxed cursor-pointer font-light select-none">
                    Estou de acordo com a <strong className="text-primary-brand font-semibold">Política de Privacidade</strong> e proteção de dados em conformidade com a Lei Geral de Proteção de Dados (LGPD).
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-brand hover:bg-primary-brand-hover disabled:bg-primary-brand-hover/60 text-white py-4 rounded-lg font-sans text-sm font-bold tracking-wider uppercase transition-colors shadow cursor-pointer text-center"
                >
                  {isSubmitting ? "Cadastrando no Servidor Seguro..." : "Enviar Solicitação de Parecer"}
                </button>
              </form>
            ) : (
              /* Success intake ticket block */
              <div className="space-y-6 text-center py-6 animate-fade-in">
                <div className="inline-flex p-4 bg-emerald-500/10 rounded-full text-emerald-600 mb-2">
                  <CheckCircle2 className="w-12 h-12" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif-headline text-2xl font-bold text-primary-moss-dark">
                    Solicitação Recebida com Sucesso!
                  </h3>
                  <p className="text-sm text-brand-text-muted font-light px-4">
                    Seu caso recebeu o protocolo internacional <strong className="text-primary-brand font-bold bg-primary-brand/10 px-2 py-0.5 rounded">{lastSubmittedId}</strong>.
                  </p>
                </div>

                {/* Immediate Next Steps list */}
                <div className="bg-brand-cream p-5 rounded-lg text-left max-w-md mx-auto space-y-4">
                  <p className="text-xs uppercase font-bold text-primary-moss-dark tracking-wide flex items-center gap-1.5">
                    <FileText className="w-4 h-4" /> Próximos passos obrigatórios:
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="text-xs text-brand-charcoal font-light flex gap-2 items-start">
                      <span className="text-primary-brand font-bold">•</span>
                      <span>Baixe os extratos bancários, contratos de trabalho ou prints detalhados de bloqueio de conta.</span>
                    </li>
                    <li className="text-xs text-brand-charcoal font-light flex gap-2 items-start">
                      <span className="text-primary-brand font-bold">•</span>
                      <span>Nossa equipe de atendimento ou um de nossos advogados especialistas entrarão em contato no seu WhatsApp em menos de 1 hora.</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4 max-w-md mx-auto">
                  <a
                    href={`https://wa.me/5545998064085?text=Ol%C3%A1%21+Meu+nome+%C3%A9+${encodeURIComponent(formData.fullName)}+e+gostaria+de+priorizar+meu+agendamento+protocolado+${lastSubmittedId}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded text-xs uppercase tracking-wider transition-colors shadow text-center flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    Falar via WhatsApp Agora
                  </a>
                  <button
                    onClick={handleCreateNew}
                    className="flex-1 border border-outline-variant/60 hover:bg-brand-cream text-brand-secondary font-bold py-3.5 px-6 rounded text-xs uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Novo Agendamento
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
