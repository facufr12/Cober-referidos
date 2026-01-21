import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronDown, Sun } from "lucide-react";
import { BottomNav } from "@/components/ui/BottomNav";

const planes = [
  "Plan Cober 1000",
  "Plan Cober 1500",
  "Plan Cober 2000",
  "Cober Familiar",
  "Plan Premium"
];

export function NuevoReferido() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    dni: "",
    email: "",
    telefono: "",
    plan: "",
    notas: ""
  });
  const [showPlanes, setShowPlanes] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Submit referral
    navigate("/referidos");
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 sticky top-0 bg-background/95 backdrop-blur-sm z-40 border-b border-border">
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-card transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="font-bold">Referir nuevo</h1>
        <button className="w-10 h-10 rounded-full bg-card flex items-center justify-center">
          <Sun className="w-5 h-5" />
        </button>
      </header>

      {/* Form */}
      <main className="px-6 py-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Nombre completo del referido
            </label>
            <input
              type="text"
              value={formData.nombre}
              onChange={(e) => handleChange("nombre", e.target.value)}
              placeholder="Ingresar nombre"
              className="input-cober w-full"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              DNI
            </label>
            <input
              type="text"
              value={formData.dni}
              onChange={(e) => handleChange("dni", e.target.value)}
              placeholder="Ingresar DNI"
              className="input-cober w-full"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="ejemplo@correo.com"
              className="input-cober w-full"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Teléfono
            </label>
            <input
              type="tel"
              value={formData.telefono}
              onChange={(e) => handleChange("telefono", e.target.value)}
              placeholder="+54"
              className="input-cober w-full"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Plan de interés
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowPlanes(!showPlanes)}
                className="input-cober w-full flex items-center justify-between text-left"
              >
                <span className={formData.plan ? "text-foreground" : "text-muted-foreground"}>
                  {formData.plan || "Seleccionar plan"}
                </span>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${showPlanes ? "rotate-180" : ""}`} />
              </button>
              
              {showPlanes && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl overflow-hidden z-50 shadow-lg">
                  {planes.map((plan) => (
                    <button
                      key={plan}
                      type="button"
                      onClick={() => {
                        handleChange("plan", plan);
                        setShowPlanes(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-muted transition-colors"
                    >
                      {plan}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Notas o comentarios
            </label>
            <textarea
              value={formData.notas}
              onChange={(e) => handleChange("notas", e.target.value)}
              placeholder="Información adicional relevante..."
              className="input-cober w-full min-h-[120px] resize-none"
              rows={4}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 rounded-full transition-all mt-8"
          >
            ENVIAR REFERIDO
          </button>
        </form>
      </main>

      <BottomNav />
    </div>
  );
}

export default NuevoReferido;
