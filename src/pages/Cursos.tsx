import { Header } from "@/components/ui/Header";
import { BottomNav } from "@/components/ui/BottomNav";

const mockCourses = [
  {
    id: 1,
    title: "Cómo usar la plataforma de Referidos",
    progress: 50,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=200&fit=crop"
  },
  {
    id: 2,
    title: "Como funciona la medicina prepaga",
    progress: 0,
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=300&h=200&fit=crop"
  },
  {
    id: 3,
    title: "Técnicas de venta",
    progress: 0,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&h=200&fit=crop"
  }
];

export function Cursos() {
  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title="Cursos" showBack />

      <main className="px-4 py-6">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">
            Aprovecha la Capacitación
          </h1>
          <p className="text-muted-foreground">
            100% digital y empezá a generar ingresos
          </p>
        </div>

        <div className="space-y-4">
          {mockCourses.map((course) => (
            <div key={course.id} className="glass-card p-4 animate-fade-in">
              <div className="flex gap-4">
                <div className="flex-1">
                  <h3 className="font-bold mb-2 leading-tight">{course.title}</h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3">
                    {course.progress}% COMPLETADO
                  </p>
                  <div className="progress-bar mb-4">
                    <div 
                      className="progress-bar-fill" 
                      style={{ width: `${course.progress}%` }} 
                    />
                  </div>
                  <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2.5 rounded-full text-sm transition-all">
                    ver curso
                  </button>
                </div>
                <div className="w-28 h-28 rounded-xl overflow-hidden flex-shrink-0">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-6 border border-border text-foreground font-semibold py-4 rounded-full transition-all hover:bg-card">
          lo veré más tarde
        </button>
      </main>

      <BottomNav />
    </div>
  );
}

export default Cursos;
