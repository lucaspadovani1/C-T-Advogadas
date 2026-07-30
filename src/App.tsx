import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Areas from "./components/Areas";
import IssMedicalThesis from "./components/IssMedicalThesis";
import AccountRecoveryAnalyzer from "./components/AccountRecoveryAnalyzer";
import PublicServants from "./components/PublicServants";
import ContactForm from "./components/ContactForm";
import Map from "./components/Map";
import Footer from "./components/Footer";
import { MessageSquare, ShieldCheck, Scale, ArrowUp } from "lucide-react";
import { OFFICE_CONTACT } from "./data";

export default function App() {
  const [selectedAreaFromOutside, setSelectedAreaFromOutside] = useState("");
  const [preFilledDescription, setPreFilledDescription] = useState("");
  const [initialSelectedLawyer, setInitialSelectedLawyer] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 80; // adjusted for sticky header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = section.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const scrollToContact = () => {
    scrollToSection("contato");
  };

  const handleSelectArea = (areaTitle: string) => {
    if (areaTitle.includes("Servidor") || areaTitle.includes("servidores")) {
      scrollToSection("servidores");
    } else if (areaTitle.includes("Contas Digitais") || areaTitle.includes("digital") || areaTitle.includes("Contas")) {
      scrollToSection("recuperador");
    } else {
      let mappedArea = areaTitle;
      if (areaTitle.includes("Trabalhista") || areaTitle.includes("patronal") || areaTitle.includes("Patronal")) {
        mappedArea = "Trabalhista";
      } else if (areaTitle.includes("Consumidor")) {
        mappedArea = "Direito do Consumidor";
      } else if (areaTitle.includes("Imobiliário") || areaTitle.includes("usucapião") || areaTitle.includes("Usucapião")) {
        mappedArea = "Imobiliário";
      } else if (areaTitle.includes("Tributário") || areaTitle.includes("Tributario")) {
        mappedArea = "Direito Tributário";
      } else if (areaTitle.includes("Médico") || areaTitle.includes("Medico")) {
        mappedArea = "Direito Médico e da Saúde";
      } else if (areaTitle.includes("Família") || areaTitle.includes("Familia") || areaTitle.includes("Sucessões")) {
        mappedArea = "Direito de Família";
      }

      setSelectedAreaFromOutside(mappedArea);
      setPreFilledDescription(`Gostaria de solicitar informações detalhadas sobre a atuação na área de ${areaTitle}.`);
      scrollToContact();
    }
  };

  const handleAnalyzeSuccess = (data: { platform: string; cause: string; description: string }) => {
    setSelectedAreaFromOutside(data.cause);
    setPreFilledDescription(data.description);
    scrollToContact();
  };

  // Callback when public servant screener calculates an eligible claim
  const handleCheckSuccess = (desc: string) => {
    setSelectedAreaFromOutside("Servidores Públicos");
    setPreFilledDescription(desc);
    scrollToContact();
  };

  // Callback when clicking "Agendar com..." inside individual lawyer profile popup
  const handleDirectConsultation = (lawyerName: string) => {
    setInitialSelectedLawyer(lawyerName);
    setSelectedAreaFromOutside("Outros");
    const pronoun = lawyerName.includes("Dra.") ? "a" : "o";
    setPreFilledDescription(`[Consulta Direta] Gostaria de realizar uma triagem confidencial e agendar um atendimento personalizado de advocacia com ${pronoun} ${lawyerName}.`);
    scrollToContact();
  };

  return (
    <div className="relative bg-surface text-brand-charcoal min-h-screen selection:bg-primary-brand/20 selection:text-primary-brand">
      {/* Sticky Navigation Header */}
      <Header 
        onContactClick={scrollToContact} 
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      {/* Main Sections Stack */}
      <main className="relative">
        
        {/* HERO SECTION */}
        <Hero
          onScheduleClick={scrollToContact}
          onContactClick={scrollToContact}
        />

        {/* ABOUT / BIOGRAPHICAL SECTION */}
        <About onDirectConsultation={handleDirectConsultation} />

        {/* PRACTICE AREAS */}
        <Areas onSelectArea={handleSelectArea} />

        {/* ISS MEDICAL THESIS */}
        <IssMedicalThesis />

        {/* SOCIAL ACCOUNTS & SECURITY DIGITAL DEPT RECOVERY HYBRID CHECKER */}
        <AccountRecoveryAnalyzer onAnalyzeSuccess={handleAnalyzeSuccess} />

        {/* SERVIDORES PÚBLICOS SECTION */}
        <PublicServants onCheckSuccess={handleCheckSuccess} />

        {/* INTAKE FORM */}
        <ContactForm
          selectedAreaFromOutside={selectedAreaFromOutside}
          preFilledDescription={preFilledDescription}
          initialSelectedLawyer={initialSelectedLawyer}
        />

        {/* MAP VISITOR HUB */}
        <Map />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* FLOATING ACTION UTILITY BARS */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Scroll back to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="p-3 bg-white/90 backdrop-blur border border-outline-variant/40 rounded-full text-brand-secondary hover:text-primary-brand hover:scale-105 shadow-md transition-all cursor-pointer flex items-center justify-center"
          title="Voltar ao início"
        >
          <ArrowUp className="w-4.5 h-4.5" />
        </button>

        {/* Floating Green WhatsApp Direct Intake Trigger */}
        <a
          href={OFFICE_CONTACT.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center relative group"
          title="Fale com as Doutoras no WhatsApp"
        >
          {/* Subtle notification pulsing point */}
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 rounded-full border border-white animate-pulse" />
          <MessageSquare className="w-6 h-6" />
          
          <span className="absolute right-14 bg-white text-brand-charcoal border border-outline-variant/30 text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Online • Iniciar Conversa
          </span>
        </a>
      </div>
    </div>
  );
}
