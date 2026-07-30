import { useState } from "react";
import { LAWYERS } from "../data";
import { Lawyer } from "../types";
import { X, Mail, ShieldCheck, CalendarRange, ArrowUpRight } from "lucide-react";

interface AboutProps {
  onDirectConsultation: (lawyerName: string) => void;
}

export default function About({ onDirectConsultation }: AboutProps) {
  const [selectedLawyer, setSelectedLawyer] = useState<Lawyer | null>(null);

  return (
    <section id="quem-somos" className="py-24 bg-cream-white relative overflow-hidden">
      {/* Decorative background geometry */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-primary-brand/5 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Text Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-primary-brand font-sans text-xs font-bold uppercase tracking-widest mb-4 block">
                Sobre o Escritório
              </span>
              <h2 className="font-serif-headline text-3xl sm:text-4xl font-bold text-primary-moss-dark leading-snug">
                Advocacia Moderna, Estratégica e Personalizada
              </h2>
            </div>

            <p className="font-sans text-[16px] text-brand-text-muted leading-relaxed font-light">
              Nascido da união de duas visões complementares sobre o Direito, o escritório Cichoski &amp; Tasso Advocacia redefine a experiência jurídica nacional. Atuamos com foco intransigente na transparência e no resultado, utilizando sistemas modernos e proximidade genuína para entregar soluções que protegem o patrimônio e os direitos de nossos clientes em escala federal.
            </p>

            {/* Strategic pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="border-l-2 border-primary-brand pl-4 space-y-1">
                <p className="font-semibold text-primary-moss-dark text-[16px]">
                  Presença Digital
                </p>
                <p className="text-sm text-brand-text-muted font-light">
                  Consultorias remotas e seguras no conforto de sua casa.
                </p>
              </div>
              <div className="border-l-2 border-primary-brand pl-4 space-y-1">
                <p className="font-semibold text-primary-moss-dark text-[16px]">
                  Expertise Técnica
                </p>
                <p className="text-sm text-brand-text-muted font-light">
                  Advocacia especializada e soluções com parceiros estratégicos.
                </p>
              </div>
            </div>
          </div>

          {/* Profiles Grid Right Column (7 cols) */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8">
            {LAWYERS.map((lawyer, index) => (
              <div
                key={lawyer.id}
                onClick={() => setSelectedLawyer(lawyer)}
                className={`bg-white p-6 rounded-lg soft-shadow border border-outline-variant/10 flex flex-col items-center text-center cursor-pointer transform hover:-translate-y-2 transition-all group ${
                  index === 2 ? "sm:col-span-2 sm:max-w-[340px] sm:mx-auto w-full" : ""
                }`}
              >
                {/* Image Container with Custom subtle Border */}
                <div className="relative w-28 h-28 rounded-full mb-5 overflow-hidden ring-4 ring-primary-brand/10 group-hover:ring-primary-brand/35 transition-all">
                  <img
                    src={lawyer.imageUrl}
                    alt={lawyer.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    style={{ objectPosition: lawyer.imagePosition }}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary-brand/5 group-hover:bg-transparent transition-colors" />
                </div>

                <h3 className="font-serif-headline text-[19px] font-bold text-primary-moss-dark mb-1 group-hover:text-primary-brand transition-colors">
                  {lawyer.name}
                </h3>
                <p className="text-[12px] uppercase tracking-wider text-primary-brand font-semibold mb-4">
                  {lawyer.oab}
                </p>
                
                <p className="text-sm text-brand-text-muted font-light leading-relaxed flex-grow">
                  {lawyer.description}
                </p>

                <div className="mt-5 inline-flex items-center gap-1 text-[13px] font-semibold text-primary-brand transition-all group-hover:gap-2">
                  Ver Perfil e Agendar
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lawyer Profile Detail Modal */}
      {selectedLawyer && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-lg shadow-2xl overflow-hidden relative animate-scale-up max-h-[90vh] flex flex-col">
            
            {/* Header / Close button */}
            <button
              onClick={() => setSelectedLawyer(null)}
              className="absolute top-4 right-4 p-2 bg-black/5 hover:bg-black/10 rounded-full text-brand-charcoal hover:text-primary-brand transition-colors z-10"
              aria-label="Fecar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
              {/* Lawyer Brief Header */}
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left border-b border-outline-variant/20 pb-6">
                <img
                  src={selectedLawyer.imageUrl}
                  alt={selectedLawyer.name}
                  className="w-24 h-24 rounded-full object-cover ring-4 ring-primary-brand/20"
                  style={{ objectPosition: selectedLawyer.imagePosition }}
                  referrerPolicy="no-referrer"
                />
                <div className="space-y-2">
                  <span className="text-xs font-bold text-primary-brand tracking-widest uppercase">
                    {selectedLawyer.role}
                  </span>
                  <h3 className="font-serif-headline text-2xl font-bold text-primary-moss-dark">
                    {selectedLawyer.name}
                  </h3>
                  <p className="text-sm text-brand-secondary font-semibold">
                    {selectedLawyer.oab}
                  </p>
                </div>
              </div>

              {/* Biography Statement */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-widest font-bold text-primary-moss-dark flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary-brand" /> Biografia profissional
                </h4>
                <p className="text-[15px] text-brand-text-muted leading-relaxed font-light">
                  {selectedLawyer.bio}
                </p>
              </div>

              {/* Contact directly inside profile */}
              <div className="bg-primary-moss-dark/5 p-4 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
                <div>
                  <p className="text-sm font-semibold text-primary-moss-dark flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary-brand" /> {selectedLawyer.email}
                  </p>
                  <p className="text-xs text-brand-text-muted mt-0.5">
                    Tempo médio de resposta: inferior a 2 horas.
                  </p>
                </div>
                <button
                  onClick={() => {
                    onDirectConsultation(selectedLawyer.name);
                    setSelectedLawyer(null);
                  }}
                  className="bg-primary-brand hover:bg-primary-brand-hover text-white px-5 py-2.5 rounded text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-2 justify-center"
                >
                  <CalendarRange className="w-4 h-4" /> Agendar com {selectedLawyer.id === "rodrigo" ? "Ele" : "Ela"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
