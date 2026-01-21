import { ChevronRight } from "lucide-react";
import { StatusBadge } from "./StatusBadge";

interface TransactionItemProps {
  refNumber: string;
  name: string;
  plan: string;
  date: string;
  amount: string;
  status: "pendiente" | "pagada";
  onClick?: () => void;
}

export function TransactionItem({
  refNumber,
  name,
  plan,
  date,
  amount,
  status,
  onClick,
}: TransactionItemProps) {
  return (
    <div
      onClick={onClick}
      className="transaction-item cursor-pointer hover:bg-card/80 transition-colors animate-fade-in"
    >
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <StatusBadge status={status} />
          <span className="text-xs text-muted-foreground">REF: {refNumber}</span>
        </div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-muted-foreground">
          {plan} • {date}
        </p>
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold">{amount}</span>
        <ChevronRight className="w-5 h-5 text-muted-foreground" />
      </div>
    </div>
  );
}
