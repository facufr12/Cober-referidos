import { ChevronLeft, Sun, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  title: string;
  showBack?: boolean;
  showActions?: boolean;
  avatar?: string;
  subtitle?: string;
}

export function Header({ title, showBack = false, showActions = true, avatar, subtitle }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between px-4 py-4 sticky top-0 bg-background/95 backdrop-blur-sm z-40">
      <div className="flex items-center gap-3">
        {showBack && (
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-card transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        {avatar && (
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
            <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
          </div>
        )}
        <div>
          {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
          <h1 className="font-bold text-lg">{title}</h1>
        </div>
      </div>
      
      {showActions && (
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-card hover:bg-card/80 transition-colors">
            <Sun className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-card hover:bg-card/80 transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
          </button>
        </div>
      )}
    </header>
  );
}
