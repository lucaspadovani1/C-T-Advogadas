import { Share2, Globe, Users, ShieldAlert, FileSignature } from "lucide-react";
import { OFFICE_CONTACT } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Cichoski & Tasso Advocacia",
        text: "Atendimento jurídico estratégico, personalizado e acessível em todo o Brasil.",
        url: window.location.href
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link do escritório copiado para a área de transferência!");
    }
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-brand-cream-subtle border-t border-outline-variant/35 py-20 text-brand-charcoal">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Main Grid: 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo Column */}
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="font-serif-headline text-2xl font-bold text-primary-moss-dark">
                Cichoski &amp; Tasso
              </span>
              <span className="block text-[11px] uppercase tracking-[0.2em] font-sans text-brand-secondary font-semibold">
                Advocacia
              </span>
            </div>
            
            <p className="text-sm text-brand-text-muted leading-relaxed font-light">
              Justiça moderna, resultados precisos e transparência irrestrita. Atendimento especializado presencial e virtual em todo o território nacional.
            </p>

            {/* Social Share Controls */}
            <div className="flex gap-3">
              <button
                onClick={handleShare}
                className="p-2.5 bg-primary-brand/5 hover:bg-primary-brand/10 text-primary-brand rounded-full transition-colors cursor-pointer"
                title="Compartilhar Link do Escritório"
                aria-label="Compartilhar"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <a
                href={OFFICE_CONTACT.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-primary-brand/5 hover:bg-primary-brand/10 text-primary-brand rounded-full transition-colors"
                title="Acessar Rede de Clientes"
                aria-label="Acessar Clientes"
              >
                <Users className="w-4 h-4" />
              </a>
              <a
                href="https://www.oabpr.org.br/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-primary-brand/5 hover:bg-primary-brand/10 text-primary-brand rounded-full transition-colors"
                title="Portal OAB Paraná"
                aria-label="Portal OAB"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links block */}
          <div>
            <h4 className="font-sans text-[13.5px] font-bold text-primary-moss-dark uppercase tracking-wider mb-6">
              Links Úteis
            </h4>
            <ul className="space-y-4">
              {[
                { id: "inicio", label: "Página Inicial" },
                { id: "quem-somos", label: "Quem Somos" },
                { id: "areas", label: "Áreas de Atuação" },
                { id: "contato", label: "Atendimento & Contato" }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleScrollTo(link.id)}
                    className="text-sm text-brand-text-muted hover:text-primary-brand transition-colors font-light cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies block */}
          <div>
            <h4 className="font-sans text-[13.5px] font-bold text-primary-moss-dark uppercase tracking-wider mb-6">
              Privacidade &amp; Termos
            </h4>
            <ul className="space-y-4 text-sm text-brand-text-muted font-light">
              <li className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-primary-brand" />
                <span className="hover:text-primary-brand cursor-pointer">
                  Política de Privacidade
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FileSignature className="w-4 h-4 text-primary-brand" />
                <span className="hover:text-primary-brand cursor-pointer">
                  Termos Gerais de Uso
                </span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-primary-brand" />
                <span className="hover:text-primary-brand cursor-pointer">
                  Governança LGPD
                </span>
              </li>
            </ul>
          </div>

          {/* Contact block */}
          <div>
            <h4 className="font-sans text-[13.5px] font-bold text-primary-moss-dark uppercase tracking-wider mb-6">
              Informações de Contato
            </h4>
            <address className="space-y-4 not-italic text-sm text-brand-text-muted font-light">
              <p>
                <strong>Fone/WhatsApp:</strong> <br />
                {OFFICE_CONTACT.phone}
              </p>
              <p>
                <strong>E-mail Oficial:</strong> <br />
                {OFFICE_CONTACT.email}
              </p>
            </address>
          </div>

        </div>

        {/* Bottom Bar Section */}
        <div className="mt-16 pt-8 border-t border-outline-variant/25 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-brand-text-muted font-light">
          <p>© {currentYear} Cichoski &amp; Tasso Advocacia. Todos os direitos reservados.</p>
          <p className="font-semibold text-primary-brand">Atuação em todo o Brasil</p>
        </div>

      </div>
    </footer>
  );
}
