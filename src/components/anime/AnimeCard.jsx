import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Spinner from "../layouts/Spinner";
import ErrorState from "../layouts/ErrorState";

function AnimeCard() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const { animList, error, loading } = useSelector((state) => state.anime);

  // Fonction pour filtrer par genre
  const filterByGenre = (anime) => {
    if (selectedGenre === "all") return true;
    
    // Vérifier si l'anime a des genres et si le genre sélectionné est présent
    return anime.genres?.some(
      (genre) => genre.name.toLowerCase() === selectedGenre.toLowerCase()
    );
  };

  // Application des deux filtres : recherche + genre
  const dataToDisplayBasedOnSearch = 
    animList?.filter((anime) => {
      const matchesSearch = anime.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesGenre = filterByGenre(anime);
      return matchesSearch && matchesGenre;
    }) || [];

  const handleClick = (anime) => () => {
    navigate(`/anime/${anime.mal_id}/full`);
  };

  if (loading) return <Spinner />;
  if (error) return <ErrorState message={error.message} />;

  return (
    <section className="w-full px-4 md:px-8 lg:px-12">
      {/* Barre de recherche et filtre */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="search"
          placeholder="Search by title.."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 p-3 rounded-xl bg-[#0f1420] text-white border border-slate-700 focus:outline-none focus:border-orange-500"
        />
        
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="p-3 rounded-xl bg-[#0f1420] text-white border border-slate-700 focus:outline-none focus:border-orange-500 min-w-[150px]"
        >
          <option value="all">All Genres</option>
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="romance">Romance</option>
          <option value="drama">Drama</option>
          <option value="sports">Sports</option>
          <option value="mystery">Mystery</option>
          <option value="horror">Horror</option>
          <option value="comedy">Comedy</option>
          <option value="fantasy">Fantasy</option>
          <option value="sci-fi">Sci-Fi</option>
        </select>
      </div>

      {animList?.length === 0 ? (
        <div className="text-slate-400 px-6 py-10">No anime found.</div>
      ) : dataToDisplayBasedOnSearch.length === 0 ? (
        <div className="text-slate-400 px-6 py-10">
          No results found for "{searchQuery}" {selectedGenre !== "all" && `in ${selectedGenre} genre`}.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {dataToDisplayBasedOnSearch.map((anime) => (
            <div
              onClick={handleClick(anime)}
              key={anime.mal_id}
              className="group relative bg-[#0f1420] rounded-2xl overflow-hidden border border-white/5 hover:border-orange-500/30 transition-all cursor-pointer"
            >
              <div className="relative aspect-[2/3] overflow-hidden">
                <img
                  src={anime.images?.jpg?.image_url}
                  alt={anime.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-1 rounded-lg bg-black/70 backdrop-blur-sm">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span className="text-xs font-bold text-amber-400">
                    {anime.score || "N/A"}
                  </span>
                </div>
              </div>

              <div className="p-3">
                <h3 className="text-sm font-semibold text-white line-clamp-2 mb-3 min-h-[2.5rem]">
                  {anime.title}
                </h3>
                <div className="flex items-center justify-between text-[11px] text-slate-500 uppercase tracking-wide">
                  <span>{anime.year ?? anime.type ?? "N/A"}</span>
                  <span>EP : {anime.episodes ?? "?"}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default AnimeCard;