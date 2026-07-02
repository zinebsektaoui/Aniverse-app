import React, { useEffect } from "react";
import Footer from "../components/layouts/Footer";
import FavCard from "../components/anime/FavCard";
import { Heart } from "lucide-react";

function Favorite() {
  return (
    <div className="w-full bg-[#050b18] border-b border-slate-800 px-8 py-8">
      <div className="flex items-start gap-4">
        <div className="mt-1 mr-2 ml-5">
          <Heart className="w-6 h-7 fill-pink-500 text-pink-500" />
        </div>
        <div>
          <h1 className="text-2xl font-extrabold text-slate-100">
            My Favorite Anime
          </h1>
          <p className="mt-1 text-lg text-slate-500">
            A personal list of your highly favored series and movies, stored
            securely in your dashboard profile
          </p>
        </div>
      </div>
      <FavCard />
      <Footer />
    </div>
  );
}

export default Favorite;
