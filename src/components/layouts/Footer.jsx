import { Tv, Flame, BookOpen, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0a0e1a] text-slate-400 px-8 py-12 border-t border-white/5 mb-0">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center">
              <Tv className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold">
              <span className="text-white">Ani</span>
              <span className="text-orange-400">Verse</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            Your ultimate database companion to discover, track, and analyze
            anime, manga, and your favorite characters. Powered by Jikan API.
          </p>
        </div>

        {/* Discover */}
        <div>
          <div className="flex items-center gap-2 mb-4 text-white font-semibold text-sm tracking-wide">
            <Flame className="w-4 h-4 text-orange-400" />
            <span>DISCOVER</span>
          </div>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer transition-colors">
              <Link to="/">Home Dashboard</Link>
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              <Link to="/anime">All Anime Directory</Link>
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              <Link to="/characters">Characters Database</Link>
            </li>
          </ul>
        </div>

        {/* My Space */}
        <div>
          <div className="flex items-center gap-2 mb-4 text-white font-semibold text-sm tracking-wide">
            <BookOpen className="w-4 h-4 text-indigo-400" />
            <span>MY SPACE</span>
          </div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
              <Link to="/favorites">Favorites</Link>
            </li>
            <li className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
              <Link to="/library">My Library</Link>
            </li>
            <li className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
              <Link to="/analytics">Personal Analytics</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p>© 2026 AniVerse. Built for anime enthusiasts worldwide.</p>
      </div>
    </footer>
  );
}
