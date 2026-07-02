import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Spinner from "../layouts/Spinner";
import ErrorState from "../layouts/ErrorState";
import SearchBar from "./SearchBar";

function AnimeCard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { selectedAnime, animList, error, loading } = useSelector(
    (state) => state.anime
  );

  if (loading) return <Spinner />;
  if (error) return <ErrorState message={error.message} />;
  if (animList?.length === 0)
    return <div className="text-slate-400 px-6 py-10">No anime found.</div>;
  const handleClick = (anime) => {
    navigate(`/anime/${anime.mal_id}/full`);
  };

  return (
    <section className="w-full px-4 md:px-8 lg:px-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {animList.map((anime) => (
          <div
            onClick={() => handleClick(anime)}
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
                  {anime.score}
                </span>
              </div>
            </div>

            <div className="p-3">
              <h3 className="text-sm font-semibold text-white line-clamp-2 mb-3 min-h-[2.5rem]">
                {anime.title}
              </h3>
              <div className="flex items-center justify-between text-[11px] text-slate-500 uppercase tracking-wide">
                <span>{anime.year ?? anime.type}</span>
                <span>EP : {anime.episodes ?? "?"}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AnimeCard;
