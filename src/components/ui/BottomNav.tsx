import { Home, Users, DollarSign, GraduationCap, User } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const navItems = [
  { to: "/dashboard", icon: Home, label: "Inicio" },
  { to: "/referidos", icon: Users, label: "Referidos" },
  { to: "/comisiones", icon: DollarSign, label: "Comisiones" },
  { to: "/cursos", icon: GraduationCap, label: "Cursos" },
  { to: "/perfil", icon: User, label: "Perfil" },
];

export function BottomNav() {
  return (
    <nav className="bottom-nav">
      <div className="flex justify-around items-center max-w-lg mx-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className="bottom-nav-item py-2 px-3"
            activeClassName="text-primary"
          >
            <item.icon className="w-5 h-5" />
            <span className="text-xs font-medium">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
