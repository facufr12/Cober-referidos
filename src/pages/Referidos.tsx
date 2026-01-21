import { useState } from "react";
import { Plus, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/ui/Header";
import { BottomNav } from "@/components/ui/BottomNav";
import { StatsCard } from "@/components/ui/StatsCard";
import { ReferralCard } from "@/components/ui/ReferralCard";

const mockReferidos = [
  {
    id: 1,
    name: "Juan Pérez",
    plan: "Plan Cober 2000",
    date: "12 Oct 2023",
    status: "aprobado" as const,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "María García",
    plan: "Plan Cober 1500",
    date: "14 Oct 2023",
    status: "en_gestion" as const,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Carlos Ruiz",
    plan: "Cober Familiar",
    date: "09 Oct 2023",
    status: "rechazado" as const,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  }
];

export function Referidos() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string | null>(null);

  const filteredReferidos = filter 
    ? mockReferidos.filter(r => r.status === filter)
    : mockReferidos;

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header 
        title="Referidos Cober360°" 
        subtitle="PANEL DE CONTROL"
      />

      {/* Stats Summary */}
      <section className="px-4 py-4">
        <div className="grid grid-cols-3 gap-3">
          <StatsCard
            label="TOTAL REFERIDOS"
            value={124}
            subLabel=""
            subValue="+12%"
            subValueColor="success"
            className="text-center"
          />
          <StatsCard
            label="ALTAS EFECTIVAS"
            value={42}
            subLabel=""
            subValue="85%"
            subValueColor="success"
            className="text-center"
          />
          <StatsCard
            label="EN GESTIÓN"
            value={18}
            subLabel=""
            subValue="Pend."
            subValueColor="warning"
            className="text-center"
          />
        </div>
      </section>

      {/* Referral List Header */}
      <section className="px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-lg">Lista de Referidos</h2>
          <button 
            onClick={() => setFilter(null)}
            className="flex items-center gap-2 text-sm text-primary font-medium"
          >
            <Filter className="w-4 h-4" />
            FILTRAR
          </button>
        </div>

        {/* Filter Chips */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-4 -mx-4 px-4">
          <button 
            onClick={() => setFilter(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              !filter ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground"
            }`}
          >
            Todos
          </button>
          <button 
            onClick={() => setFilter("aprobado")}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              filter === "aprobado" ? "bg-success text-success-foreground" : "bg-card text-muted-foreground"
            }`}
          >
            Aprobados
          </button>
          <button 
            onClick={() => setFilter("en_gestion")}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              filter === "en_gestion" ? "bg-warning text-warning-foreground" : "bg-card text-muted-foreground"
            }`}
          >
            En Gestión
          </button>
          <button 
            onClick={() => setFilter("rechazado")}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              filter === "rechazado" ? "bg-destructive text-destructive-foreground" : "bg-card text-muted-foreground"
            }`}
          >
            Rechazados
          </button>
        </div>

        {/* Referral List */}
        <div className="space-y-4">
          {filteredReferidos.map((referido) => (
            <ReferralCard
              key={referido.id}
              name={referido.name}
              plan={referido.plan}
              date={referido.date}
              status={referido.status}
              avatar={referido.avatar}
              onClick={() => navigate(`/referidos/${referido.id}`)}
            />
          ))}
        </div>
      </section>

      {/* FAB Button */}
      <button 
        onClick={() => navigate("/nuevo-referido")}
        className="fab-button"
      >
        <Plus className="w-5 h-5" />
        Cargar nuevo referido
      </button>

      <BottomNav />
    </div>
  );
}

export default Referidos;
