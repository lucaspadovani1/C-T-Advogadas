import { useState, FormEvent, ChangeEvent } from "react";
import { 
  ShieldCheck, 
  Lock, 
  FileText, 
  ArrowRight, 
  CheckCircle2, 
  TrendingDown,
  Sparkles
} from "lucide-react";

export default function IssMedicalThesis() {
  const [formData, setFormData] = useState({
    doctorName: "",
    phone: "",
    crmSpecialty: "",
    clinicStructure: "Médico Autônomo / Consultório Individual",
    cityState: "",
    estimatedRevenue: "De R$ 50 mil a R$ 150 mil / mês"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [protocolNumber, setProtocolNumber] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.doctorName || !formData.phone || !formData.crmSpecialty || !formData.cityState) {
      alert("Por favor, preencha todos os campos obrigatórios (*).");
      return;
    }

    setIsSubmitting(true);

    const proto = "ISS-MED-" + Math.floor(Math.random() * 90000 + 10000);
    setProtocolNumber(proto);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleWhatsAppRedirect = () => {
    const textMessage = `Olá! Acabo de solicitar o Diagnóstico de Viabilidade Confidencial para a Redução de ISS para Médicos (Protocolo: ${protocolNumber}).\n\n` +
      `• Médico/Sócio: ${formData.doctorName}\n` +
      `• CRM/Especialidade: ${formData.crmSpecialty}\n` +
      `• Estrutura: ${formData.clinicStructure}\n` +
      `• Atuação: ${formData.cityState}\n` +
      `• Faturamento estimado: ${formData.estimatedRevenue}\n\n` +
      `Por favor, me confirmem o recebimento para iniciarmos a análise de viabilidade do ISS Fixo em meu município.`;

    const encodedText = encodeURIComponent(textMessage);
    const waUrl = `https://wa.me/5545998064085?text=${encodedText}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="iss-medico" className="py-20 bg-brand-cream border-t border-b border-outline-variant/15 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary-brand/10 text-primary-brand text-xs font-bold uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Planejamento Tributário
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-charcoal font-medium tracking-tight mb-4">
            Redução de Imposto sobre Serviços (ISS) para Médicos
          </h2>
          <p className="text-sm sm:text-base text-brand-secondary leading-relaxed">
            Substitua a cobrança de percentuais abusivos sobre o faturamento de consultas ou exames por um valor fixo anual reduzido. Uma estratégia altamente vantajosa para médicos e pequenas sociedades.
          </p>
        </div>

        {/* Clean Modern Card Layout */}
        <div className="bg-white rounded-xl shadow-lg border border-outline-variant/15 overflow-hidden grid lg:grid-cols-12 gap-0">
          
          {/* Informational Column (Left) */}
          <div className="lg:col-span-7 p-6 sm:p-10 bg-white flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-primary-moss-dark font-medium leading-snug mb-3">
                  Como funciona a economia mensal do seu consultório?
                </h3>
                <p className="text-sm text-brand-text-muted leading-relaxed mb-4">
                  Em vez de pagar entre <strong className="text-brand-charcoal font-semibold">2% e 5% de ISS</strong> sobre cada nota emitida, médicos autônomos ou sócios de clínicas uniprofissionais podem obter o enquadramento em <strong>alíquota fixa anual</strong>, reduzindo o custo tributário drasticamente.
                </p>

                {/* Direct Highlighted Callout Box */}
                <div className="bg-brand-cream border border-primary-brand/20 p-4 sm:p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-brand-charcoal font-bold text-sm sm:text-base">
                      <Sparkles className="w-5 h-5 text-primary-brand shrink-0" />
                      Analisamos seu caso e verificamos a possibilidade de redução em até 95%!
                    </div>
                    <p className="text-xs text-brand-secondary leading-relaxed">
                      Entre em contato para um diagnóstico completo da sua estrutura jurídica e fiscal.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      const contactEl = document.getElementById("contato");
                      if (contactEl) contactEl.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="bg-primary-brand hover:bg-primary-brand-hover text-white text-xs font-bold uppercase tracking-wider py-2.5 px-4 rounded-lg shadow transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer"
                  >
                    Fale Conosco
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Example of Savings - Clean Cream Card */}
              <div className="bg-brand-cream border border-outline-variant/25 text-brand-charcoal rounded-xl p-6 sm:p-8 shadow-md relative overflow-hidden">
                <div className="flex items-center justify-between mb-4 border-b border-outline-variant/20 pb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary-brand flex items-center gap-1.5">
                    <TrendingDown className="w-4 h-4 text-primary-brand" />
                    Exemplo Prático de Economia
                  </span>
                  <span className="bg-primary-brand/10 text-primary-brand border border-primary-brand/20 text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Redução de até 95%
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-brand-secondary mb-5 leading-relaxed">
                  Cenário ilustrativo para um consultório médico com faturamento mensal médio de <strong className="text-brand-charcoal font-semibold">R$ 100.000,00</strong> (R$ 1,2 milhão/ano):
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-5">
                  <div className="bg-white p-4 rounded-lg border border-red-200/80 shadow-sm">
                    <span className="text-[10px] uppercase font-bold text-red-600 block mb-1">
                      ISS Tradicional (Sem Redução)
                    </span>
                    <div className="text-lg font-extrabold text-brand-charcoal">
                      R$ 36.000,00 <span className="text-xs font-normal text-brand-text-muted">/ano</span>
                    </div>
                    <div className="text-[11px] text-brand-text-muted mt-1">R$ 3.000,00 pagos por mês</div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-emerald-300 shadow-sm">
                    <span className="text-[10px] uppercase font-bold text-emerald-700 block mb-1">
                      ISS Fixo (Com Redução)
                    </span>
                    <div className="text-lg font-extrabold text-emerald-700">
                      R$ 1.594,75 <span className="text-xs font-normal text-brand-text-muted">/ano</span>
                    </div>
                    <div className="text-[11px] text-brand-text-muted mt-1">Valor fixo anual enquadrado</div>
                  </div>
                </div>

                {/* Big Highlighted Savings Banner */}
                <div className="bg-primary-brand text-white p-4 sm:p-5 rounded-xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-cream block">
                      Economia Anual em Destaque
                    </span>
                    <div className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-0.5">
                      R$ 34.405,25
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-white text-primary-brand text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                      Até 95% Poupados ao Ano
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Form Column (Right) */}
          <div className="lg:col-span-5 p-6 sm:p-10 bg-brand-cream-subtle border-t lg:border-t-0 lg:border-l border-outline-variant/15 flex flex-col justify-center">
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-2">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Lock className="w-4 h-4 text-primary-brand" />
                    <span className="text-xs uppercase font-extrabold tracking-widest text-primary-moss-dark">
                      Ficha de Viabilidade Confidencial
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-brand-text-muted">
                    Preencha os dados abaixo para receber a pré-análise personalizada e sigilosa da sua estrutura.
                  </p>
                </div>

                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider font-bold text-brand-charcoal block">
                    Nome do Médico / Sócio *
                  </label>
                  <input
                    type="text"
                    name="doctorName"
                    required
                    value={formData.doctorName}
                    onChange={handleChange}
                    placeholder="Ex: Dr. Carlos Eduardo de Souza"
                    className="w-full bg-white border border-outline-variant/30 rounded px-3.5 py-2.5 text-sm text-brand-charcoal outline-none focus:border-primary-brand font-medium shadow-inner"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider font-bold text-brand-charcoal block">
                    WhatsApp de Contato *
                  </label>
                  <input
                    type="text"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Ex: (45) 99806-4085"
                    className="w-full bg-white border border-outline-variant/30 rounded px-3.5 py-2.5 text-sm text-brand-charcoal outline-none focus:border-primary-brand font-medium shadow-inner"
                  />
                </div>

                {/* CRM / Specialty */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider font-bold text-brand-charcoal block">
                    CRM e Especialidade *
                  </label>
                  <input
                    type="text"
                    name="crmSpecialty"
                    required
                    value={formData.crmSpecialty}
                    onChange={handleChange}
                    placeholder="Ex: CRM-PR 12345 / Cardiologia"
                    className="w-full bg-white border border-outline-variant/30 rounded px-3.5 py-2.5 text-sm text-brand-charcoal outline-none focus:border-primary-brand font-medium shadow-inner"
                  />
                </div>

                {/* Structure / Actuation format */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider font-bold text-brand-charcoal block">
                    Estrutura de Atuação *
                  </label>
                  <select
                    name="clinicStructure"
                    required
                    value={formData.clinicStructure}
                    onChange={handleChange}
                    className="w-full bg-white border border-outline-variant/30 rounded px-3.5 py-2.5 text-sm text-brand-charcoal outline-none focus:border-primary-brand font-medium shadow-inner"
                  >
                    <option value="Médico Autônomo / Consultório Individual">Médico Autônomo / Consultório Individual</option>
                    <option value="Sociedade de Médicos Menor (Poucos Funcionários)">Sociedade de Médicos Menor (Poucos Funcionários)</option>
                    <option value="Sociedade Uniprofissional Simples / LTDA">Sociedade Uniprofissional Simples / LTDA</option>
                    <option value="Cooperado Unimed / Planos de Saúde">Cooperado Unimed / Planos de Saúde</option>
                    <option value="Outra Sociedade Compacta">Outra Sociedade Compacta</option>
                  </select>
                </div>

                {/* City & State */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider font-bold text-brand-charcoal block">
                    Cidade e Estado de Atuação *
                  </label>
                  <input
                    type="text"
                    name="cityState"
                    required
                    value={formData.cityState}
                    onChange={handleChange}
                    placeholder="Ex: Cascavel / PR"
                    className="w-full bg-white border border-outline-variant/30 rounded px-3.5 py-2.5 text-sm text-brand-charcoal outline-none focus:border-primary-brand font-medium shadow-inner"
                  />
                </div>

                {/* Estimated Revenue */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider font-bold text-brand-charcoal block">
                    Faturamento Mensal Estimado
                  </label>
                  <select
                    name="estimatedRevenue"
                    required
                    value={formData.estimatedRevenue}
                    onChange={handleChange}
                    className="w-full bg-white border border-outline-variant/30 rounded px-3.5 py-2.5 text-sm text-brand-charcoal outline-none focus:border-primary-brand font-medium shadow-inner"
                  >
                    <option value="Até R$ 50 mil / mês">Até R$ 50 mil / mês</option>
                    <option value="De R$ 50 mil a R$ 150 mil / mês">De R$ 50 mil a R$ 150 mil / mês</option>
                    <option value="Acima de R$ 150 mil / mês">Acima de R$ 150 mil / mês</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-brand hover:bg-primary-brand-hover text-white font-bold py-3.5 px-4 rounded text-xs uppercase tracking-wider transition-colors shadow flex items-center justify-center gap-2 cursor-pointer mt-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Analisando Viabilidade...
                    </>
                  ) : (
                    <>
                      Solicitar Análise de Viabilidade
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-1.5 text-xs text-brand-text-muted text-center pt-1">
                  <Lock className="w-3.5 h-3.5 text-primary-brand shrink-0" />
                  <span>A análise é mantida sigilosa em todos os casos.</span>
                </div>
              </form>
            ) : (
              <div className="text-center py-4 space-y-6 animate-fadeIn">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                  <CheckCircle2 className="w-7 h-7 animate-bounce" />
                </div>
                
                <div className="space-y-2">
                  <span className="text-xs uppercase font-bold tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded">
                    Protocolo: {protocolNumber}
                  </span>
                  <h3 className="font-serif text-xl text-brand-charcoal font-semibold mt-2">
                    Ficha Processada com Sucesso!
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed">
                    Sua solicitação de viabilidade fiscal para a redução do ISS para valor fixo foi recebida com absoluto sigilo.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-outline-variant/10 text-left space-y-2.5">
                  <div className="flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-primary-brand" />
                    <span className="text-xs font-bold text-brand-charcoal uppercase tracking-wide">Próximo Passo:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed">
                    Clique abaixo para enviar seu protocolo de análise diretamente ao nosso advogado especialista no WhatsApp.
                  </p>
                </div>

                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-5 rounded text-sm uppercase tracking-wider transition-all shadow flex items-center justify-center gap-2 cursor-pointer"
                >
                  Enviar via WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
