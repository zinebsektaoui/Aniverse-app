import { Tv, Flame, BookOpen, Heart, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0e1a] text-slate-400 px-8 py-12 border-t border-white/5">
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
              Home Dashboard
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              All Anime Directory
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Characters Database
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
              <Heart className="w-4 h-4 text-pink-400" />
              Favorites
            </li>
            <li className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
              <BookOpen className="w-4 h-4 text-blue-400" />
              My Library
            </li>
            <li className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              Personal Analytics
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p>© 2026 AniVerse. Built for anime enthusiasts worldwide.</p>
        <div className="flex gap-6">
          <span className="hover:text-white cursor-pointer transition-colors">
            Terms of Service
          </span>
          <span className="hover:text-white cursor-pointer transition-colors">
            Privacy Policy
          </span>
          <span className="hover:text-white cursor-pointer transition-colors">
            Cookie Settings
          </span>
        </div>
      </div>
    </footer>
  );
}
