import { Calendar, ChevronRight } from "lucide-react";
import { StatusBadge } from "./StatusBadge";

interface ReferralCardProps {
  name: string;
  plan: string;
  date: string;
  status: "aprobado" | "pendiente" | "rechazado" | "en_gestion";
  avatar?: string;
  onClick?: () => void;
}

export function ReferralCard({ name, plan, date, status, avatar, onClick }: ReferralCardProps) {
  return (
    <div 
      onClick={onClick}
      className="referral-card cursor-pointer hover:bg-card/90 transition-colors animate-fade-in"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
            {avatar ? (
              <img src={avatar} alt={name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-lg font-bold text-muted-foreground">
                {name.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-muted-foreground">{plan}</p>
          </div>
        </div>
        <StatusBadge status={status} />
      </div>
      
      <div className="flex items-center justify-between pt-2 border-t border-border/50">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>
        <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
          Ver detalle
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
