import { User, CreditCard, Lock, HelpCircle, FileText, LogOut, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/ui/Header";
import { BottomNav } from "@/components/ui/BottomNav";

const menuItems = [
  { icon: User, label: "Datos Personales", to: "/perfil/datos" },
  { icon: CreditCard, label: "Información de Cobro", sublabel: "(CBU/CVU)", to: "/perfil/cobro" },
  { icon: Lock, label: "Seguridad y Contraseña", to: "/perfil/seguridad" },
  { icon: HelpCircle, label: "Soporte y Ayuda", to: "/soporte" },
  { icon: FileText, label: "Legales", to: "/legales" },
];

export function Perfil() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title="" showActions />

      <main className="px-4 py-6">
        {/* Profile Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-4">
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-primary">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-2xl font-bold mb-1">Martín Pérez</h1>
          <span className="badge-gold text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Gold Referrer
          </span>
        </div>

        {/* Menu Items */}
        <div className="space-y-3">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.to)}
              className="w-full glass-card p-4 flex items-center justify-between group hover:bg-card/80 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="text-left">
                  <span className="font-medium">{item.label}</span>
                  {item.sublabel && (
                    <span className="text-muted-foreground ml-1">{item.sublabel}</span>
                  )}
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </button>
          ))}
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full mt-6 border border-border/50 text-destructive font-medium py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-destructive/10 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Cerrar sesión
        </button>
      </main>

      <BottomNav />
    </div>
  );
}

export default Perfil;
