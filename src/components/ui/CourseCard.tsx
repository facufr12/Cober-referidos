import { Play } from "lucide-react";

interface CourseCardProps {
  title: string;
  progress: number;
  image?: string;
  onContinue?: () => void;
}

export function CourseCard({ title, progress, image, onContinue }: CourseCardProps) {
  return (
    <div className="glass-card p-4 flex items-center gap-4 animate-fade-in">
      <div className="w-20 h-20 rounded-xl overflow-hidden bg-muted flex-shrink-0">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
            <Play className="w-8 h-8 text-primary" />
          </div>
        )}
      </div>
      
      <div className="flex-1 space-y-2">
        <p className="text-xs text-primary font-semibold uppercase tracking-wide">
          CONTINUAR CURSO
        </p>
        <h3 className="font-semibold leading-tight">{title}</h3>
        <div className="progress-bar">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${progress}%` }} 
          />
        </div>
      </div>
      
      <button 
        onClick={onContinue}
        className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center flex-shrink-0"
      >
        <Play className="w-5 h-5 text-background fill-background" />
      </button>
    </div>
  );
}
