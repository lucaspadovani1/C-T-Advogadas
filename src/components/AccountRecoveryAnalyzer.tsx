import { ShieldAlert, CheckCircle2, ArrowRight, ClipboardCheck, AlertTriangle } from "lucide-react";

interface AccountRecoveryAnalyzerProps {
  onAnalyzeSuccess: (data: { platform: string; cause: string; description: string }) => void;
}

export default function AccountRecoveryAnalyzer({ onAnalyzeSuccess }: AccountRecoveryAnalyzerProps) {
  const handleApplyToForm = () => {
    onAnalyzeSuccess({
      platform: "Redes Sociais / E-commerce",
      cause: "Contas Digitais",
      description: "Gostaria de solicitar assessoria jurídica especializada para recuperação, desbloqueio ou reativação da minha conta comercial/perfil digital."
    });
  };

  return (
    <section id="recuperador" className="py-24 bg-primary-moss-dark text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-linear-gradient-to-r from-black/20 via-transparent to-black/10 pointer-events-none" />
      
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Left Column: Informative copy (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <span className="text-white/70 uppercase tracking-[0.2em] text-xs font-bold font-sans block">
              Departamento Digital
            </span>
            <h2 className="font-serif-headline text-3xl sm:text-4xl font-bold leading-tight">
              Perdeu sua conta comercial ou foi banido? Nós ajudamos.
            </h2>
            <p className="font-sans text-[15px] text-brand-cream/80 leading-relaxed font-light">
              Somos pioneiras na recuperação judicial de páginas corporativas, de criadores e perfis pessoais hackeados, desativados ou bloqueados de forma injusta nas grandes plataformas digitais brasileiras. 
            </p>
            
            <div className="space-y-4">
              <p className="text-sm font-semibold text-brand-cream uppercase tracking-wider">
                Principais plataformas:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {["Instagram", "Facebook", "TikTok", "Mercado Livre"].map((plat) => (
                  <span
                    key={plat}
                    className="bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-medium border border-white/15 hover:bg-white/20 hover:border-white/30 transition-all cursor-default"
                  >
                    {plat}
                  </span>
                ))}
              </div>
            </div>

            {/* Elegant visual quote card */}
            <div className="p-5 bg-white/10 border-l-4 border-emerald-400 rounded-r-lg">
              <p className="font-serif-headline italic text-base text-brand-cream">
                "Sua identidade e suas vendas digitais são ativos de patrimônio. A suspensão injustificada ou falha de segurança das redes gera direito a reativação judicial urgente."
              </p>
            </div>
          </div>

          {/* Informative Legal Rights & Action Card (7 columns) */}
          <div className="lg:col-span-7 bg-white text-brand-charcoal p-6 sm:p-10 rounded-2xl shadow-2xl relative border border-white/15">
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-outline-variant/20 pb-4">
                <div className="p-2.5 bg-primary-brand/10 rounded-lg text-primary-brand">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif-headline text-xl font-bold text-primary-moss-dark">
                    Direitos de Reativação e Medidas Urgentes
                  </h3>
                  <p className="text-xs text-brand-text-muted">
                    Atuação rápida baseada no Marco Civil da Internet e Código de Defesa do Consumidor
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {/* Viability highlights */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-brand-cream/60 rounded-xl border border-outline-variant/25 space-y-1">
                    <span className="text-[11px] uppercase text-brand-text-muted tracking-wider block font-semibold">
                      Base Jurídica Utilizada
                    </span>
                    <span className="text-sm font-bold text-primary-moss-dark block">
                      Art. 19 do Marco Civil da Internet
                    </span>
                    <p className="text-xs text-brand-secondary font-light">
                      Ausência de contraditório prévio e falhas de segurança da plataforma.
                    </p>
                  </div>

                  <div className="p-4 bg-brand-cream/60 rounded-xl border border-outline-variant/25 space-y-1">
                    <span className="text-[11px] uppercase text-brand-text-muted tracking-wider block font-semibold">
                      Via Judicial de Urgência
                    </span>
                    <span className="text-sm font-bold text-primary-moss-dark block">
                      Liminar Judicial (5 a 15 dias úteis)
                    </span>
                    <p className="text-xs text-brand-secondary font-light">
                      Pedido de reativação imediata sob pena de multa diária contra as redes.
                    </p>
                  </div>
                </div>

                {/* Emergency Tips Box */}
                <div className="bg-amber-500/10 border border-amber-500/25 p-5 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-wide">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Recomendações Emergenciais Iniciais
                  </div>
                  <ul className="space-y-2 text-xs text-brand-charcoal font-light leading-relaxed">
                    <li className="flex gap-2">
                      <span className="font-bold text-amber-700">•</span>
                      <span><strong>Hack/Invasão:</strong> Registre imediatamente o Boletim de Ocorrência Eletrônico por Invasão de Dispositivo (Art. 154-A do CP).</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold text-amber-700">•</span>
                      <span><strong>Evidências:</strong> Salve prints de faturamento, e-mails automáticos de alteração de senha e mensagens de suporte.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold text-amber-700">•</span>
                      <span><strong>Alerta:</strong> NUNCA pague resgates ou tente negociar com criminosos digitais.</span>
                    </li>
                  </ul>
                </div>

                {/* Call to action button */}
                <div className="pt-2">
                  <button
                    onClick={handleApplyToForm}
                    className="w-full bg-primary-brand hover:bg-primary-brand-hover text-white text-xs font-bold tracking-wider uppercase py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md transform hover:scale-[1.01] active:scale-95 cursor-pointer"
                  >
                    <ClipboardCheck className="w-4 h-4" />
                    Solicitar Assessoria para Reativação de Conta
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
