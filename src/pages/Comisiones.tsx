import { Trophy } from "lucide-react";
import { Header } from "@/components/ui/Header";
import { BottomNav } from "@/components/ui/BottomNav";
import { StatsCard } from "@/components/ui/StatsCard";
import { TransactionItem } from "@/components/ui/TransactionItem";

const mockTransactions = [
  {
    refNumber: "#8921",
    name: "Juan Carlos Perez",
    plan: "Plan Premium",
    date: "12/10/2023",
    amount: "$1.200",
    status: "pendiente" as const,
  },
  {
    refNumber: "#8915",
    name: "Maria Elena Garcia",
    plan: "Plan Global",
    date: "05/10/2023",
    amount: "$2.500",
    status: "pagada" as const,
  },
  {
    refNumber: "#8902",
    name: "Roberto Sanchez",
    plan: "Plan Essential",
    date: "28/09/2023",
    amount: "$850",
    status: "pendiente" as const,
  },
];

export function Comisiones() {
  return (
    <div className="min-h-screen bg-background pb-24">
      <Header 
        title="Mis comisiones"
        avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      />

      {/* Total Comisiones */}
      <section className="px-4 py-4">
        <div className="glass-card p-6">
          <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
            Comisiones Acumuladas
          </p>
          <h2 className="text-4xl font-bold mb-4">$145.200</h2>
          <div className="h-2 rounded-full overflow-hidden bg-muted">
            <div 
              className="h-full rounded-full"
              style={{ 
                width: "70%",
                background: "linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)"
              }} 
            />
          </div>
        </div>
      </section>

      {/* Pendientes vs Pagadas */}
      <section className="px-4 py-2">
        <div className="grid grid-cols-2 gap-4">
          <StatsCard
            label="PENDIENTES"
            value="$45.000"
            subValueColor="warning"
            className="text-center"
          />
          <StatsCard
            label="PAGADAS"
            value="$100.200"
            className="text-center"
          />
        </div>
      </section>

      {/* Goal Progress Card */}
      <section className="px-4 py-4">
        <div className="glass-card p-5 relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Trophy className="w-7 h-7 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-1">
                Te faltan 3 referidos para alcanzar el objetivo mensual
              </h3>
              <p className="text-sm text-primary font-medium uppercase tracking-wide mb-3">
                Nivel 4 en progreso
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">7 / 10 REFERIDOS</span>
                  <span className="font-semibold">META: GOLD</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{ width: "70%" }} />
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative star */}
          <div className="absolute top-4 right-4 opacity-10">
            <Trophy className="w-24 h-24" />
          </div>
        </div>
      </section>

      {/* Transactions */}
      <section className="px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-lg">Transacciones recientes</h2>
          <button className="text-sm text-primary font-medium">
            Ver todo
          </button>
        </div>

        <div className="space-y-3">
          {mockTransactions.map((transaction) => (
            <TransactionItem
              key={transaction.refNumber}
              {...transaction}
            />
          ))}
        </div>

        <p className="text-xs text-muted-foreground text-center mt-6">
          Las comisiones se habilitan luego de 60 días de permanencia activa del afiliado en el sistema
        </p>
      </section>

      <BottomNav />
    </div>
  );
}

export default Comisiones;
