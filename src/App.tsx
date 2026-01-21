import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Confirmacion from "./pages/Confirmacion";
import Dashboard from "./pages/Dashboard";
import Referidos from "./pages/Referidos";
import NuevoReferido from "./pages/NuevoReferido";
import Comisiones from "./pages/Comisiones";
import Cursos from "./pages/Cursos";
import Perfil from "./pages/Perfil";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/confirmacion" element={<Confirmacion />} />
          
          {/* Protected routes (app) */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/referidos" element={<Referidos />} />
          <Route path="/nuevo-referido" element={<NuevoReferido />} />
          <Route path="/comisiones" element={<Comisiones />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/perfil" element={<Perfil />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
