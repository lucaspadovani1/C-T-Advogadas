import { OFFICE_CONTACT } from "../data";

interface HeroProps {
  onScheduleClick: () => void;
  onContactClick: () => void;
}

export default function Hero({ onScheduleClick, onContactClick }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-[921px] flex items-center pt-20 hero-gradient"
    >
      {/* Decorative Warm Overlay Corner */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/30 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 w-full text-white relative z-10 py-16">
        <div className="max-w-2xl">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-brand-cream border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Atendimento Digital Nacional
          </div>

          {/* Heading */}
          <h1 className="font-serif-headline text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.12]">
            Cichoski &amp; Tasso Advocacia
          </h1>

          {/* Paragraph */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-brand-cream/90 mb-10 leading-relaxed font-light">
            Atendimento jurídico estratégico, personalizado e acessível em todo o Brasil. Specialist em transformar complexidades jurídicas em soluções seguras e definitivas para você ou sua empresa.
          </p>

          {/* Hero Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onScheduleClick}
              className="bg-primary-brand hover:bg-primary-brand-hover text-white px-8 py-4 rounded-md font-sans text-[15px] font-semibold tracking-wide transition-all shadow-lg text-center transform hover:scale-[1.03] active:scale-95 cursor-pointer"
            >
              Agendar Atendimento
            </button>
            <button
              onClick={onContactClick}
              className="border border-white/80 hover:border-white text-white bg-black/10 hover:bg-white/10 px-8 py-4 rounded-md font-sans text-[15px] font-semibold tracking-wide transition-all shadow-md text-center transform hover:scale-[1.03] active:scale-95 cursor-pointer"
            >
              Entrar em Contato
            </button>
          </div>

          {/* Quick Metrics Band */}
          <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-white/10 max-w-lg">
            <div>
              <p className="font-serif-headline text-3xl font-bold text-white">100%</p>
              <p className="text-xs text-brand-cream/70 uppercase tracking-widest font-sans mt-1">
                Satisfação
              </p>
            </div>
            <div>
              <p className="font-serif-headline text-3xl font-bold text-white">+400</p>
              <p className="text-xs text-brand-cream/70 uppercase tracking-widest font-sans mt-1">
                Clientes
              </p>
            </div>
            <div>
              <p className="font-serif-headline text-3xl font-bold text-white">100%</p>
              <p className="text-xs text-brand-cream/70 uppercase tracking-widest font-sans mt-1">
                Digital e Seguro
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
