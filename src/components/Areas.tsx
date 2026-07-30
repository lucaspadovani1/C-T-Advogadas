import { useState } from "react";
import { PRACTICE_AREAS } from "../data";
import { 
  Briefcase, 
  Gavel, 
  Home, 
  Users, 
  ShoppingCart, 
  FileText, 
  HeartPulse, 
  TrendingUp, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  X
} from "lucide-react";
import { PracticeArea } from "../types";

interface AreasProps {
  onSelectArea?: (areaId: string) => void;
}

export default function Areas({ onSelectArea }: AreasProps) {
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Briefcase": return <Briefcase className="w-5 h-5" />;
      case "Gavel": return <Gavel className="w-5 h-5" />;
      case "Home": return <Home className="w-5 h-5" />;
      case "Users": return <Users className="w-5 h-5" />;
      case "ShoppingCart": return <ShoppingCart className="w-5 h-5" />;
      case "FileText": return <FileText className="w-5 h-5" />;
      case "HeartPulse": return <HeartPulse className="w-5 h-5" />;
      case "TrendingUp": return <TrendingUp className="w-5 h-5" />;
      default: return <ShieldCheck className="w-5 h-5" />;
    }
  };

  const handleConsult = (areaId: string) => {
    if (onSelectArea) {
      onSelectArea(areaId);
    } else {
      const contactEl = document.getElementById("contato");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" });
      }
    }
    setSelectedArea(null);
  };

  return (
    <section id="areas" className="py-20 bg-white border-b border-outline-variant/15 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-brand/10 text-primary-brand text-xs font-bold uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Atendimento Multidisciplinar
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-charcoal font-medium tracking-tight mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-sm sm:text-base text-brand-secondary leading-relaxed">
            Além dos focos principais de atuação das sócias, o escritório atende demandas jurídicas abrangentes diretamente ou através do direcionamento para nossa rede de advogados parceiros especializados.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRACTICE_AREAS.map((area) => (
            <div
              key={area.id}
              className="bg-brand-cream-subtle/60 hover:bg-white rounded-xl p-6 border border-outline-variant/20 hover:border-primary-brand/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedArea(area)}
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-primary-brand/10 text-primary-brand flex items-center justify-center mb-4 group-hover:bg-primary-brand group-hover:text-white transition-colors">
                  {getIcon(area.iconName)}
                </div>
                <h3 className="font-serif text-lg text-brand-charcoal font-medium mb-2 group-hover:text-primary-moss-dark transition-colors">
                  {area.title}
                </h3>
                <p className="text-xs text-brand-text-muted leading-relaxed mb-4">
                  {area.description}
                </p>
              </div>

              <div className="pt-3 border-t border-outline-variant/10 flex items-center justify-between text-xs font-bold text-primary-brand group-hover:translate-x-1 transition-transform">
                <span>Ver Detalhes</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal for Details */}
      {selectedArea && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-outline-variant/20 animate-fadeIn space-y-6">
            
            <button
              onClick={() => setSelectedArea(null)}
              className="absolute top-4 right-4 p-2 text-brand-text-muted hover:text-brand-charcoal rounded-full hover:bg-brand-cream transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary-brand/10 text-primary-brand flex items-center justify-center shrink-0">
                {getIcon(selectedArea.iconName)}
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-primary-brand tracking-widest block mb-0.5">
                  Área de Atuação
                </span>
                <h3 className="font-serif text-2xl text-brand-charcoal font-semibold">
                  {selectedArea.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-brand-secondary leading-relaxed">
              {selectedArea.longDescription}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
                Exemplos de Atuação nesta Área:
              </h4>
              <div className="space-y-2">
                {selectedArea.examples.map((ex, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-brand-text-muted">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{ex}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-outline-variant/15 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-brand-text-muted">
                Atendimento direto ou com parceiros qualificados.
              </span>
              <button
                onClick={() => handleConsult(selectedArea.id)}
                className="w-full sm:w-auto bg-primary-brand hover:bg-primary-brand-hover text-white font-bold py-2.5 px-5 rounded-lg text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow"
              >
                Solicitar Parecer
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
