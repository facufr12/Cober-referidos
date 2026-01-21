import { cn } from "@/lib/utils";

type Status = "aprobado" | "pendiente" | "rechazado" | "en_gestion" | "pagada";

interface StatusBadgeProps {
  status: Status;
  className?: string;
}

const statusConfig: Record<Status, { label: string; className: string }> = {
  aprobado: { label: "APROBADO", className: "badge-approved" },
  pendiente: { label: "PENDIENTE", className: "badge-pending" },
  rechazado: { label: "RECHAZADO", className: "badge-rejected" },
  en_gestion: { label: "EN GESTIÓN", className: "badge-pending" },
  pagada: { label: "PAGADA", className: "bg-muted text-muted-foreground" },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];
  
  return (
    <span className={cn(
      "text-xs font-semibold px-3 py-1 rounded-full",
      config.className,
      className
    )}>
      {config.label}
    </span>
  );
}
