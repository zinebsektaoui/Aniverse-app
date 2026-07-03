import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../layouts/Spinner";
import ErrorState from "../layouts/ErrorState";
import { Star, Heart } from "lucide-react";

function SeasonalCard() {
  const { seasonal, error, loading } = useSelector((state) => state.anime);
  if (loading) return <Spinner />;
  // if (error) return <ErrorState message={error.message} />;

  if (seasonal.length === 0)
    return (
      <div className="text-slate-400 px-6 py-10">
        No current season anime found.
      </div>
    );

  return (
    <section className="px-4 md:px-8 py-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
          <Star className="w-5 h-5 text-red-400 fill-red-400" />
        </div>
        <div>
          <h2 className="text-2xl font-extrabold text-white">
            Current Season Anime
          </h2>
          <p className="text-sm text-slate-400">
            Series currently airing this season
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {seasonal.map((anime) => (
          <div
            onClick={() => {
              window.location.href = `/anime/${anime.mal_id}/full`;
            }}
            key={anime.mal_id}
            className="group relative bg-[#0f1420] rounded-2xl overflow-hidden border border-white/5 hover:border-red-500/30 transition-all cursor-pointer"
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
                <span>{anime.type}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SeasonalCard;
