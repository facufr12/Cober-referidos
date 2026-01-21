import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, ArrowRight, Sun } from "lucide-react";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular login exitoso
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-end px-4 py-4">
        <button className="w-10 h-10 rounded-full bg-card flex items-center justify-center">
          <Sun className="w-5 h-5" />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        {/* Logo */}
        <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center mb-6">
          <span className="text-primary-foreground font-bold text-3xl">₊</span>
        </div>

        <h1 className="text-2xl font-bold mb-2">Referidos Cober360°</h1>
        <p className="text-muted-foreground mb-10">Programa de Referidos de Salud</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ejemplo@correo.com"
              className="input-cober w-full"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Contraseña
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="input-cober w-full pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="text-right">
            <Link to="/recuperar" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 rounded-full flex items-center justify-center gap-2 transition-all"
          >
            Iniciar sesión
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </main>

      {/* Footer */}
      <footer className="px-6 py-8 text-center space-y-4">
        <p className="text-muted-foreground">
          ¿No tienes cuenta?{" "}
          <Link to="/registro" className="font-semibold text-foreground hover:text-primary transition-colors">
            Regístrate
          </Link>
        </p>
        <div className="flex justify-center gap-4 text-xs text-muted-foreground uppercase tracking-wide">
          <Link to="/terminos" className="hover:text-foreground transition-colors">Términos</Link>
          <Link to="/privacidad" className="hover:text-foreground transition-colors">Privacidad</Link>
          <Link to="/soporte" className="hover:text-foreground transition-colors">Soporte</Link>
        </div>
      </footer>
    </div>
  );
}

export default Login;
