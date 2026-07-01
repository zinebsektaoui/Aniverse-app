import { useState } from "react";
import { Tv, Flame, Users, Heart, BookOpen, BarChart3 } from "lucide-react";
import { NavLink } from "react-router-dom";

const NAV_ITEMS = [
  { path: "/", label: "Home", icon: Flame },
  { path: "/anime", label: "Anime", icon: Tv },
  { path: "/characters", label: "Characters", icon: Users },
  { path: "/favorites", label: "Favorites", icon: Heart },
  { path: "/my-library", label: "My Library", icon: BookOpen },
  { path: "/dashboard", label: "Dashboard", icon: BarChart3 },
];

export default function Navbar() {
  return (
    <nav className="w-full bg-slate-950 border-b border-slate-800 px-6 py-3 flex items-center justify-between">
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

      <ul className="flex items-center gap-1">
        {NAV_ITEMS.map(({ path, label, icon: Icon }) => {
          return (
            <li key={label}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-slate-800/70 text-orange-400"
                      : "text-slate-400 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      className="w-4 h-4"
                      strokeWidth={2}
                      fill={
                        isActive && Icon === Flame ? "currentColor" : "none"
                      }
                    />
                    <span>{label}</span>
                  </>
                )}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
