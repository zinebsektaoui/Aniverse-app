import { useState } from "react";
import { Tv, Flame, Users, Heart, BookOpen, BarChart3 } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", icon: Flame },
  { label: "Anime", icon: Tv },
  { label: "Characters", icon: Users },
  { label: "Favorites", icon: Heart},
  { label: "My Library", icon: BookOpen},
  { label: "Dashboard", icon: BarChart3 },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <nav className="w-full bg-slate-950 border-b border-slate-800 px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
          <Tv className="w-5 h-5 text-white" strokeWidth={2.5} />
        </div>
        <span className="text-lg font-bold tracking-tight">
          <span className="text-white">Ani</span>
          <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
            Verse
          </span>
        </span>
      </div>

      {/* Nav links */}
      <ul className="flex items-center gap-1">
        {NAV_ITEMS.map(({ label, icon: Icon}) => {
          const isActive = active === label;
          return (
            <li key={label}>
              <button
                onClick={() => setActive(label)}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-slate-800/70 text-orange-400"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Icon
                  className="w-4 h-4"
                  strokeWidth={2}
                  fill={isActive && Icon === Flame ? "currentColor" : "none"}
                />
                <span>{label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}