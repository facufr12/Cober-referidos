import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronDown } from "lucide-react";

const provincias = [
  "Buenos Aires",
  "CABA",
  "Catamarca",
  "Chaco",
  "Chubut",
  "Córdoba",
  "Corrientes",
  "Entre Ríos",
  "Formosa",
  "Jujuy",
  "La Pampa",
  "La Rioja",
  "Mendoza",
  "Misiones",
  "Neuquén",
  "Río Negro",
  "Salta",
  "San Juan",
  "San Luis",
  "Santa Cruz",
  "Santa Fe",
  "Santiago del Estero",
  "Tierra del Fuego",
  "Tucumán"
];

export function Registro() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    dni: "",
    email: "",
    telefono: "",
    provincia: "",
    aceptaTerminos: false
  });
  const [showProvincias, setShowProvincias] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/confirmacion");
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 sticky top-0 bg-background/95 backdrop-blur-sm z-40">
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-card transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="font-bold">Referidos Cober360°</h1>
        <div className="w-10" />
      </header>

      {/* Main Content */}
      <main className="px-6 py-6 pb-24">
        <div className="mb-8">
          <p className="text-sm text-muted-foreground mb-1">Registro</p>
          <h2 className="text-2xl font-bold mb-2">Completa tus datos</h2>
          <p className="text-muted-foreground">
            Ingresa la información para crear tu cuenta de referidor.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium">Nombre completo</label>
            <input
              type="text"
              value={formData.nombre}
              onChange={(e) => handleChange("nombre", e.target.value)}
              placeholder="Ej: Juan Pérez"
              className="input-cober w-full"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">DNI</label>
            <input
              type="text"
              value={formData.dni}
              onChange={(e) => handleChange("dni", e.target.value)}
              placeholder="Número de documento"
              className="input-cober w-full"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Correo electrónico</label>
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
            <label className="text-sm font-medium">Teléfono</label>
            <input
              type="tel"
              value={formData.telefono}
              onChange={(e) => handleChange("telefono", e.target.value)}
              placeholder="+54 11 0000 0000"
              className="input-cober w-full"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Provincia</label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowProvincias(!showProvincias)}
                className="input-cober w-full flex items-center justify-between text-left"
              >
                <span className={formData.provincia ? "text-foreground" : "text-muted-foreground"}>
                  {formData.provincia || "Selecciona una provincia"}
                </span>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${showProvincias ? "rotate-180" : ""}`} />
              </button>
              
              {showProvincias && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl max-h-60 overflow-y-auto z-50 shadow-lg">
                  {provincias.map((provincia) => (
                    <button
                      key={provincia}
                      type="button"
                      onClick={() => {
                        handleChange("provincia", provincia);
                        setShowProvincias(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-muted transition-colors first:rounded-t-xl last:rounded-b-xl"
                    >
                      {provincia}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <label className="flex items-start gap-3 py-4">
            <input
              type="checkbox"
              checked={formData.aceptaTerminos}
              onChange={(e) => handleChange("aceptaTerminos", e.target.checked)}
              className="w-5 h-5 rounded border-border bg-input accent-primary mt-0.5"
              required
            />
            <span className="text-sm text-muted-foreground">
              Acepto los{" "}
              <Link to="/terminos" className="text-primary underline">
                términos y condiciones
              </Link>{" "}
              del programa de referidos.
            </span>
          </label>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 rounded-full transition-all"
          >
            Crear cuenta
          </button>

          <p className="text-xs text-muted-foreground text-center">
            Al continuar, confirmas que eres mayor de 18 años y resides legalmente en el territorio nacional.
          </p>
        </form>
      </main>
    </div>
  );
}

export default Registro;
