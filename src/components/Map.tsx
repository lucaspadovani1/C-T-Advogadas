import { MapPin, Navigation, ExternalLink, CalendarDays } from "lucide-react";
import { OFFICE_CONTACT } from "../data";

export default function Map() {
  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Rua Salgado Filho, 2259, Sala 214, Centro, Cascavel, PR, Brasil")}`;

  return (
    <section className="relative overflow-hidden w-full bg-cream-white border-y border-outline-variant/20">
      <div className="grid lg:grid-cols-12 items-stretch min-h-[460px]">
        
        {/* Iframe map box column (7 columns) */}
        <div className="lg:col-span-7 h-[300px] sm:h-[400px] lg:h-auto min-h-[350px] relative">
          <iframe
            title="Sede Cichoski e Tasso Advocacia"
            src={OFFICE_CONTACT.googleMapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(30%) contrast(110%)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Info panel columns (5 columns) */}
        <div className="lg:col-span-5 p-8 sm:p-12 bg-white flex flex-col justify-center space-y-6 lg:border-l border-outline-variant/10">
          <div className="space-y-2">
            <span className="text-primary-brand text-xs uppercase font-bold tracking-widest block">
              Localização Física
            </span>
            <h3 className="font-serif-headline text-2xl font-bold text-primary-moss-dark">
              Visite-nos em Cascavel
            </h3>
            <p className="text-brand-text-muted text-sm font-light leading-relaxed">
              Dispomos de infraestrutura privativa de alta segurança para receber clientes em reuniões presenciais e assinaturas de termos confidenciais.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <MapPin className="w-5 h-5 text-primary-brand shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-brand-charcoal text-sm">
                  Endereço Principal
                </p>
                <p className="text-xs text-brand-text-muted mt-0.5">
                  {OFFICE_CONTACT.address} <br />
                  {OFFICE_CONTACT.neighborhoodAndCity} • CEP {OFFICE_CONTACT.zipCode}
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <CalendarDays className="w-5 h-5 text-primary-brand shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-brand-charcoal text-sm">
                  Horário de Portaria e Recepção
                </p>
                <p className="text-xs text-brand-text-muted mt-0.5">
                  Segunda a Sexta-feira: das 09:00 às 17:30 (Exceto feriados judiciais).
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <a
              href={mapSearchUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-primary-brand hover:bg-primary-brand-hover text-white py-3 px-5 rounded text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <Navigation className="w-4 h-4" /> Tratar Rota de Acesso
            </a>
            <a
              href={OFFICE_CONTACT.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="border border-outline-variant/60 hover:bg-brand-cream-subtle text-brand-secondary py-3 px-5 rounded text-xs uppercase font-bold tracking-wide transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              Agendar Presencial <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
