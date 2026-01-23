import { ArrowRight, CheckCircle, Menu, Zap, Clock, DollarSign, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: CheckCircle,
    title: "Sin experiencia previa",
    description: "No necesitás conocimientos en el rubro, nosotros te guiamos."
  },
  {
    icon: Zap,
    title: "Ingresos inmediatos",
    description: "Cobrá comisiones por cada alta efectiva que generes."
  },
  {
    icon: Clock,
    title: "Horarios flexibles",
    description: "Trabajá cuando quieras, desde donde quieras."
  },
  {
    icon: DollarSign,
    title: "Comisiones competitivas",
    description: "Las mejores comisiones del mercado por cada referido."
  },
  {
    icon: TrendingUp,
    title: "Crecimiento continuo",
    description: "Sistema de niveles con beneficios exclusivos."
  }
];

export function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">C</span>
          </div>
          <span className="font-bold text-lg">Cober360°</span>
        </div>
        <button className="w-10 h-10 rounded-full bg-card flex items-center justify-center">
          <Menu className="w-5 h-5" />
        </button>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-6">
        <div className="hero-gradient rounded-3xl p-6 relative overflow-hidden">
          <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
            Programa de Referidos
          </span>
          
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            Ganá ingresos<br />recomendando<br />salud
          </h1>
          
          <p className="text-foreground/80 mb-6 max-w-xs">
            Recomendá planes de Medicina Prepaga y cobrá comisiones por cada alta efectiva.
          </p>
          
          <Link
            to="/registro"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-4 rounded-full transition-all animate-pulse-glow"
          >
            Quiero ser referenciador
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-8">
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2 text-center">
          Beneficios Exclusivos
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          ¿Por qué sumarte?
        </h2>

        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="glass-card p-5 flex items-start gap-4 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-8 pb-24">
        <div className="glass-card p-6 text-center">
          <h3 className="text-xl font-bold mb-2">¿Listo para empezar?</h3>
          <p className="text-muted-foreground mb-6">
            Únete a nuestra red de referenciadores y comenzá a generar ingresos hoy.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/registro"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-full transition-all"
            >
              Registrarme
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center justify-center gap-2 bg-card hover:bg-card/80 text-foreground font-semibold px-6 py-3 rounded-full border border-border transition-all"
            >
              Ya tengo cuenta
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-6 border-t border-border text-center text-sm text-muted-foreground">
        <p>© 2024 Cober360°. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Landing;
