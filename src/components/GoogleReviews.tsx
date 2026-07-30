import { Star, CheckCircle2, ArrowUpRight, MessageSquare } from "lucide-react";
import { motion } from "motion/react";

interface Review {
  id: number;
  author: string;
  role: string;
  avatarBg: string;
  avatarChar: string;
  rating: number;
  date: string;
  text: string;
  tag: string;
}

const REVIEWS_DATA: Review[] = [
  {
    id: 1,
    author: "Carlos Henrique Siqueira",
    role: "Empreendedor Digital",
    avatarBg: "bg-emerald-600",
    avatarChar: "C",
    rating: 5,
    date: "Há 1 semana",
    text: "Excelente atendimento! Consegui recuperar minha conta comercial do Instagram que tinha sido invadida e estava parando o meu negócio. As doutoras agiram com uma rapidez incrível, impetrando liminar no mesmo dia. Atendimento nota 10!",
    tag: "Recuperação de Contas"
  },
  {
    id: 2,
    author: "Maria Divina Rodrigues",
    role: "Professora Estadual (Aposentada)",
    avatarBg: "bg-amber-600",
    avatarChar: "M",
    rating: 5,
    date: "Há 3 semanas",
    text: "Espetacular! Fiz a revisão das perdas do meu PASEP de servidora pública com as doutoras. Foram transparentes do início ao fim, explicaram meus direitos de forma bem simples e conseguimos o ressarcimento correto. Recomendo de olhos fechados.",
    tag: "Servidor Público (PASEP)"
  },
  {
    id: 3,
    author: "Jorge Roberto Medeiros",
    role: "Diretor Comercial e Industrial",
    avatarBg: "bg-blue-600",
    avatarChar: "J",
    rating: 5,
    date: "Há 1 mês",
    text: "A assessoria trabalhista patronal e a blindagem de documentos que realizaram na nossa empresa foi excelente. Conseguimos sanar vários riscos de passivos com compliance preventivo. É advocacia de alto nível em Cascavel.",
    tag: "Blindagem Trabalhista"
  },
  {
    id: 4,
    author: "Ana Cláudia Tebet",
    role: "Proprietária e Investidora",
    avatarBg: "bg-indigo-600",
    avatarChar: "A",
    rating: 5,
    date: "Há 2 meses",
    text: "Super profissionais! Regularizaram o imóvel da minha família através de Usucapião Extrajudicial rápido. Evitamos anos de processo judicial por causa da brilhante condução das advogadas Rafaela e Milena. Muito gratas!",
    tag: "Direito Imobiliário"
  },
  {
    id: 5,
    author: "Dr. Ricardo Guimarães",
    role: "Médico Cardiologista",
    avatarBg: "bg-rose-600",
    avatarChar: "R",
    rating: 5,
    date: "Há 2 meses",
    text: "Minha assessoria preventiva e proteção ética de carreira perante o CRM foi desenhada com maestria. Sentimento de total segurança trabalhando no hospital e no consultório particular. Trabalho técnico primoroso de verdade.",
    tag: "Direito Médico"
  }
];

export default function GoogleReviews() {
  return (
    <section id="avaliacoes" className="py-24 bg-brand-cream/40 relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-gradient-to-r from-transparent via-outline-variant/30 to-transparent" />
      
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Main Header Card with Google Score Summary */}
        <div className="bg-white rounded-2xl border border-outline-variant/20 p-8 sm:p-10 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-100 px-3 py-1 rounded-full text-xs font-semibold text-slate-600">
                <span className="flex">
                  <span className="text-blue-500 font-bold">G</span>
                  <span className="text-red-500 font-bold">o</span>
                  <span className="text-amber-500 font-bold">o</span>
                  <span className="text-blue-500 font-bold">g</span>
                  <span className="text-green-500 font-bold">l</span>
                  <span className="text-red-500 font-bold">e</span>
                </span>
                <span>Avaliações Verificadas</span>
              </div>
              
              <h2 className="font-serif-headline text-3xl sm:text-4xl font-bold text-primary-moss-dark leading-tight">
                O que dizem os nossos clientes
              </h2>
              <p className="text-sm text-brand-text-muted leading-relaxed font-light">
                Nossa atuação é guiada pela agilidade, honestidade intelectual e proteção intransigente dos direitos de quem confia em nosso trabalho.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center border-y lg:border-y-0 lg:border-x border-outline-variant/20 py-6 lg:py-0">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-serif-headline font-bold text-primary-moss-dark">4.9</span>
                <span className="text-lg text-brand-secondary/80">/5.0</span>
              </div>
              
              {/* Gold Stars */}
              <div className="flex gap-1 my-2.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-xs text-brand-secondary font-medium tracking-wide">
                Mais de 150+ avaliações reais no Google
              </p>
            </div>

            <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center items-stretch sm:items-center lg:items-stretch">
              <a 
                href="https://www.google.com/search?q=cichoski+e+tasso+advocacia" 
                target="_blank" 
                rel="noreferrer"
                className="bg-primary-moss-dark hover:bg-black text-white px-5 py-3 rounded text-xs font-bold tracking-wider uppercase transition-colors text-center inline-flex items-center justify-center gap-2"
              >
                Ver no Google Maps
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a 
                href="https://g.page/r/cichoski-e-tasso/review" 
                target="_blank" 
                rel="noreferrer"
                className="bg-white border-2 border-primary-brand text-primary-brand hover:bg-brand-cream/30 px-5 py-3 rounded text-xs font-bold tracking-wider uppercase transition-colors text-center inline-flex items-center justify-center gap-2"
              >
                Escrever Avaliação
                <Star className="w-4 h-4 fill-primary-brand" />
              </a>
            </div>

          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS_DATA.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: review.id * 0.08 }}
              className="bg-white rounded-xl border border-outline-variant/15 p-6 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Review Header Card */}
                <div className="flex items-center justify-between">
                  {/* Avatar and Name */}
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${review.avatarBg} text-white flex items-center justify-center font-bold text-sm tracking-wide`}>
                      {review.avatarChar}
                    </div>
                    <div>
                      <h4 className="text-[14px] font-bold text-primary-moss-dark flex items-center gap-1.5 leading-none">
                        {review.author}
                      </h4>
                      <span className="text-[11px] text-brand-text-muted font-light">
                        {review.role}
                      </span>
                    </div>
                  </div>

                  {/* Google Icon indicator */}
                  <span className="w-5 h-5 rounded-full bg-slate-50 border border-outline-variant/30 flex items-center justify-center text-[10px] font-bold text-slate-400 select-none">
                    G
                  </span>
                </div>

                {/* Stars and Date info row */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] text-brand-text-muted font-light">{review.date}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" title="Cliente Verificado" />
                  </div>
                </div>

                {/* Review message text item */}
                <div className="relative">
                  <span className="absolute -left-1 -top-2 text-primary-brand/10 text-4xl font-serif-headline leading-none select-none">“</span>
                  <p className="text-xs text-brand-charcoal leading-relaxed font-light pl-2 relative z-10 italic">
                    {review.text}
                  </p>
                </div>

              </div>

              {/* Practice tag footer for the review */}
              <div className="mt-5 pt-3 border-t border-outline-variant/5 flex items-center justify-between">
                <span className="bg-brand-cream text-primary-brand px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                  {review.tag}
                </span>
                <span className="text-[10px] flex items-center gap-1 text-emerald-600 font-semibold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                  Recomendo
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
