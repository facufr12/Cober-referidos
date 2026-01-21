import { useNavigate } from "react-router-dom";
import { Plus, CheckSquare, GraduationCap, DollarSign, Users } from "lucide-react";
import { Header } from "@/components/ui/Header";
import { BottomNav } from "@/components/ui/BottomNav";
import { StatsCard } from "@/components/ui/StatsCard";
import { QuickAction } from "@/components/ui/QuickAction";
import { CourseCard } from "@/components/ui/CourseCard";

export function Dashboard() {
  const navigate = useNavigate();

  const quickActions = [
    { icon: Plus, label: "Referí", onClick: () => navigate("/nuevo-referido") },
    { icon: CheckSquare, label: "Estados", onClick: () => navigate("/referidos") },
    { icon: GraduationCap, label: "Cursos", onClick: () => navigate("/cursos") },
    { icon: DollarSign, label: "Comisiones", onClick: () => navigate("/comisiones") },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header 
        title="Martín" 
        subtitle="Buenos días," 
        avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      />

      {/* Stats Cards */}
      <section className="px-4 py-4">
        <div className="grid grid-cols-2 gap-4">
          <StatsCard
            icon={Users}
            label="Referidos Activos"
            value={12}
            badge="LVL 4"
            badgeVariant="success"
            progress={{ current: 850, max: 1000, label: "XP PROGRESO" }}
          />
          <StatsCard
            icon={DollarSign}
            label="Acumulado"
            value="$145k"
            badge="PLATINUM"
            badgeVariant="platinum"
            progress={{ current: 72, max: 100, label: "META MENSUAL" }}
          />
        </div>
      </section>

      {/* Quick Actions */}
      <section className="px-4 py-4">
        <div className="glass-card p-4">
          <div className="grid grid-cols-4 gap-2">
            {quickActions.map((action) => (
              <QuickAction
                key={action.label}
                icon={action.icon}
                label={action.label}
                onClick={action.onClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Capacitación Section */}
      <section className="px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-lg">Capacitación</h2>
          <button 
            onClick={() => navigate("/cursos")}
            className="text-sm text-primary font-medium"
          >
            Ver catálogo
          </button>
        </div>
        
        <CourseCard
          title="Cómo usar la plataforma de Referidos"
          progress={50}
          onContinue={() => navigate("/cursos/1")}
        />
      </section>

      {/* FAB Button */}
      <button 
        onClick={() => navigate("/nuevo-referido")}
        className="fab-button"
      >
        <Plus className="w-5 h-5" />
        cargar referido
      </button>

      <BottomNav />
    </div>
  );
}

export default Dashboard;
