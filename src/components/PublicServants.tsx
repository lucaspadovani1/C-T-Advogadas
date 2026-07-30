import { Landmark, AlertCircle, Sparkles, Check, ArrowRight } from "lucide-react";

interface PublicServantsProps {
  onCheckSuccess: (subject: string) => void;
}

export default function PublicServants({ onCheckSuccess }: PublicServantsProps) {
  const benefits = [
    "Recomposição Salarial de Perdas da Transição URV (Até 11,98% de defasagem para ingressantes até 1994)",
    "Restituição de Saldos não creditados do PASEP no Banco do Brasil (Ingressantes antes de 1988)",
    "Conversão de Férias/Licença-Prêmio não gozadas em Pecúnia (isento de Imposto de Renda)"
  ];

  const handleApply = () => {
    onCheckSuccess("Servidores Públicos: Gostaria de solicitar análise de direitos, teses revisionais e proventos do meu cargo.");
  };

  return (
    <section id="servidores" className="py-20 bg-cream-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Core static banner card matching mockup exactly */}
        <div className="bg-white p-8 md:p-12 rounded-2xl soft-shadow border border-primary-brand/5 flex flex-col lg:flex-row justify-between items-center gap-8 mb-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-primary-brand text-xs font-bold tracking-wider uppercase block">
              Esfera Governamental
            </span>
            <h3 className="font-serif-headline text-2xl sm:text-3xl font-bold text-primary-moss-dark">
              Defesa de Servidores Públicos
            </h3>
            <p className="text-brand-text-muted text-sm sm:text-base leading-relaxed font-light">
              Atuamos na recomposição integral de direitos subtraídos, correções monetárias, recálculo de quinquênios, URV, PASEP e análise minuciosa de proventos para servidores civis e militares de todas as esferas.
            </p>
          </div>
          <div>
            <button
              onClick={handleApply}
              className="bg-primary-moss-light hover:bg-primary-moss-dark text-white px-8 py-4 rounded-md font-sans text-xs font-bold uppercase tracking-wider transition-all shadow-md transform hover:scale-[1.02] active:scale-95 whitespace-nowrap cursor-pointer flex items-center gap-2"
            >
              Fale com uma Advogada
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Informative Rights & Thesis Display */}
        <div id="pension-screener" className="max-w-3xl mx-auto scroll-mt-24">
          <div className="bg-white rounded-xl soft-shadow border border-outline-variant/25 overflow-hidden">
            <div className="p-5 sm:p-8 bg-brand-cream border-b border-outline-variant/25 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Landmark className="w-6 h-6 text-primary-brand" />
                <div>
                  <h4 className="font-serif-headline text-lg font-bold text-primary-moss-dark">
                    Principais Teses Revisionais e Direitos Elegíveis
                  </h4>
                  <p className="text-xs text-brand-text-muted mt-0.5">
                    Conheça os saldos e abonos indenizatórios pendentes nas esferas Federal, Estadual e Municipal
                  </p>
                </div>
              </div>
              <Sparkles className="w-5 h-5 text-amber-500 hidden sm:block" />
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-4">
                <div className="p-5 bg-primary-brand/5 border-l-4 border-primary-brand rounded-r space-y-4">
                  <div className="space-y-3">
                    <p className="text-xs text-brand-text-muted font-bold uppercase tracking-wider block">
                      Teses Aplicáveis sob Análise do STJ/STF:
                    </p>
                    <ul className="space-y-3">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex gap-2.5 items-start text-sm sm:text-[15px] text-brand-charcoal">
                          <span className="p-1 bg-primary-brand/15 text-primary-brand rounded mt-0.5 shrink-0">
                            <Check className="w-4 h-4" />
                          </span>
                          <span className="font-light leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded text-xs text-amber-900 flex gap-2.5 items-start">
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong>Aviso para Saldo do PASEP:</strong> Servidores que ingressaram antes de 1988 devem providenciar as microsfilmagens dos extratos junto ao Banco do Brasil (disponíveis em até 30 dias na agência). Esse documento é obrigatório para o cálculo pericial da revisão.
                  </p>
                </div>

                <div className="pt-3">
                  <button
                    onClick={handleApply}
                    className="w-full bg-primary-brand hover:bg-primary-brand-hover text-white text-xs font-bold tracking-wider uppercase py-4 rounded transition-all cursor-pointer shadow text-center flex items-center justify-center gap-2"
                  >
                    Solicitar Análise de Holerite com o Escritório
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
