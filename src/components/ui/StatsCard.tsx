import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  icon?: LucideIcon;
  label: string;
  value: string | number;
  badge?: string;
  badgeVariant?: "default" | "gold" | "platinum" | "success" | "warning";
  subLabel?: string;
  subValue?: string;
  subValueColor?: "success" | "warning" | "default";
  progress?: {
    current: number;
    max: number;
    label?: string;
  };
  className?: string;
}

export function StatsCard({
  icon: Icon,
  label,
  value,
  badge,
  badgeVariant = "default",
  subLabel,
  subValue,
  subValueColor = "default",
  progress,
  className,
}: StatsCardProps) {
  const badgeClasses = {
    default: "bg-muted text-muted-foreground",
    gold: "badge-gold",
    platinum: "badge-platinum",
    success: "badge-approved",
    warning: "badge-pending",
  };

  const subValueColorClasses = {
    default: "text-foreground",
    success: "text-success",
    warning: "text-warning",
  };

  return (
    <div className={cn("stats-card", className)}>
      <div className="flex items-center justify-between">
        {Icon && <Icon className="w-5 h-5 text-muted-foreground" />}
        {badge && (
          <span className={cn("text-xs font-semibold px-2 py-1 rounded-full", badgeClasses[badgeVariant])}>
            {badge}
          </span>
        )}
      </div>
      
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-3xl font-bold">{value}</p>
      </div>

      {progress && (
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{progress.label || "PROGRESO"}</span>
            <span>{progress.current} / {progress.max}</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-bar-fill" 
              style={{ width: `${(progress.current / progress.max) * 100}%` }} 
            />
          </div>
        </div>
      )}

      {subLabel && (
        <div className="flex items-center gap-1 text-sm">
          <span className="text-muted-foreground">{subLabel}</span>
          <span className={cn("font-semibold", subValueColorClasses[subValueColor])}>
            {subValue}
          </span>
        </div>
      )}
    </div>
  );
}
