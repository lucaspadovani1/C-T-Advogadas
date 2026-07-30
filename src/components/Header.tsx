import { useState, useEffect } from "react";
import { Menu, X, Scale, Sun, Moon } from "lucide-react";

interface HeaderProps {
  onContactClick: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export default function Header({ onContactClick, isDarkMode, onToggleDarkMode }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section
      const sections = ["inicio", "quem-somos", "areas", "contato"];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isDarkMode
          ? scrolled
            ? "bg-[#141717]/95 backdrop-blur-md shadow-md py-3 border-b border-white/10 text-white"
            : "bg-[#141717]/90 backdrop-blur-sm shadow-sm py-4 border-b border-white/5 text-white"
          : scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-200/80 text-brand-charcoal"
            : "bg-white/90 backdrop-blur-sm shadow-sm py-4 border-b border-slate-100 text-brand-charcoal"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-6 flex justify-between items-center h-14">
        {/* Brand Logo */}
        <div 
          onClick={() => scrollToSection("inicio")}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="p-1.5 bg-primary-brand/10 rounded-md text-primary-brand transition-colors group-hover:bg-primary-brand group-hover:text-white">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <span className="font-serif-headline text-lg sm:text-xl font-bold text-primary-moss-dark tracking-tight">
              Cichoski &amp; Tasso
            </span>
            <span className="block text-[10px] uppercase tracking-[0.15em] font-sans text-brand-secondary font-semibold -mt-1 pl-0.5">
              Advocacia
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {[
            { id: "inicio", label: "Início" },
            { id: "quem-somos", label: "Quem Somos" },
            { id: "areas", label: "Áreas de Atuação" },
            { id: "contato", label: "Contato" }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-[15px] font-medium transition-all duration-200 cursor-pointer relative pb-1 ${
                activeSection === item.id
                  ? "text-primary-brand font-semibold"
                  : "text-brand-secondary hover:text-primary-brand"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary-brand rounded-full" />
              )}
            </button>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-lg bg-black/5 dark:bg-white/10 text-brand-secondary hover:text-primary-brand transition-all cursor-pointer flex items-center justify-center border border-outline-variant/15 hover:border-primary-brand/30"
            title={isDarkMode ? "Ativar Modo Claro" : "Ativar Modo Escuro"}
            aria-label="Alternar tema claro/escuro"
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-amber-300 animate-fade-in" />
            ) : (
              <Moon className="w-4 h-4 text-primary-brand animate-fade-in" />
            )}
          </button>

          <button
            onClick={onContactClick}
            className="ml-2 bg-primary-brand hover:bg-primary-brand-hover text-white px-5 py-2.5 rounded-md text-sm font-semibold tracking-wide transition-all shadow-sm flex items-center gap-2 transform hover:-translate-y-0.5 cursor-pointer"
          >
            Fale com uma Advogada
          </button>
        </nav>

        {/* Mobile Navigation Trigger & Theme Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-lg bg-black/5 dark:bg-white/10 text-brand-secondary transition-all cursor-pointer flex items-center justify-center border border-outline-variant/15"
            title={isDarkMode ? "Ativar Modo Claro" : "Ativar Modo Escuro"}
            aria-label="Alternar tema claro/escuro"
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-primary-brand" />
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 text-primary-brand hover:bg-primary-brand/10 rounded-lg transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className={`absolute top-[68px] left-0 w-full shadow-lg border-t py-6 px-6 md:hidden flex flex-col gap-4 animate-fade-in ${
          isDarkMode ? "bg-[#171b1b] text-white border-white/10" : "bg-white text-brand-charcoal border-gray-200"
        }`}>
          {[
            { id: "inicio", label: "Início" },
            { id: "quem-somos", label: "Quem Somos" },
            { id: "areas", label: "Áreas de Atuação" },
            { id: "contato", label: "Contato" }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-left py-2 px-3 rounded-md text-[16px] font-medium transition-colors ${
                activeSection === item.id
                  ? "bg-primary-brand/10 text-primary-brand"
                  : "text-brand-secondary hover:bg-black/5 hover:text-primary-brand"
              }`}
            >
              {item.label}
            </button>
          ))}
          
          <div className="h-px bg-outline-variant/20 my-1" />

          {/* Theme Toggle option inside mobile drawer */}
          <button
            onClick={() => {
              onToggleDarkMode();
            }}
            className="flex items-center justify-between py-2.5 px-3 rounded-md text-[15px] font-medium text-brand-secondary bg-black/5 dark:bg-white/5 border border-outline-variant/15"
          >
            <span className="flex items-center gap-2">
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-primary-brand" />}
              {isDarkMode ? "Tema Claro" : "Tema Escuro"}
            </span>
            <span className="text-xs uppercase font-bold text-primary-brand bg-primary-brand/10 px-2 py-0.5 rounded">
              {isDarkMode ? "Ativo" : "Ativar"}
            </span>
          </button>

          <button
            onClick={() => {
              setIsOpen(false);
              onContactClick();
            }}
            className="w-full bg-primary-brand text-white py-3 rounded-md text-center font-semibold text-sm shadow-sm hover:bg-primary-brand-hover transition-colors cursor-pointer"
          >
            Fale com uma Advogada
          </button>
        </div>
      )}
    </header>
  );
}
