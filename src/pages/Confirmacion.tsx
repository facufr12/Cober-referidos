import { CheckCircle, Phone, Headphones, X, Sun } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export function Confirmacion() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4">
        <button 
          onClick={() => navigate("/")}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-card transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        <h1 className="font-bold">Confirmación</h1>
        <button className="w-10 h-10 rounded-full bg-card flex items-center justify-center">
          <Sun className="w-5 h-5" />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-8 text-center">
        {/* Success Icon with ripple effect */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping" style={{ animationDuration: "2s" }} />
          <div className="absolute inset-0 bg-primary/5 rounded-full scale-125" />
          <div className="absolute inset-0 bg-primary/5 rounded-full scale-150" />
          <div className="relative w-24 h-24 bg-primary rounded-full flex items-center justify-center animate-scale-in">
            <CheckCircle className="w-12 h-12 text-primary-foreground" />
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-4 animate-fade-in">
          ¡Solicitud Enviada con Éxito!
        </h1>
        
        <p className="text-muted-foreground mb-8 max-w-sm animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Gracias por tu interés en unirte a nuestra red. Hemos recibido tus datos correctamente.
        </p>

        {/* Info Card */}
        <div className="glass-card p-5 w-full max-w-sm mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold mb-1">Próximos Pasos</h3>
              <p className="text-sm text-muted-foreground">
                Nuestro equipo de admisiones revisará tu perfil y te contactará en las próximas{" "}
                <span className="font-semibold text-foreground">48 horas hábiles</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="w-full max-w-sm space-y-3 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <Link
            to="/"
            className="block w-full bg-foreground text-background font-semibold py-4 rounded-full text-center transition-all hover:bg-foreground/90"
          >
            Volver al Inicio
          </Link>
          
          <Link
            to="/login"
            className="block w-full border border-border text-foreground font-semibold py-4 rounded-full text-center transition-all hover:bg-card"
          >
            Ver Mis Solicitudes
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-8 text-center">
        <button className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <Headphones className="w-5 h-5" />
          <span>¿Tienes dudas? Contacta a soporte</span>
        </button>
      </footer>
    </div>
  );
}

export default Confirmacion;
