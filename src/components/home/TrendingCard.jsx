import React from "react";
import { useSelector } from "react-redux";
import { Flame, Star, Heart } from "lucide-react";
import Spinner from "../layouts/Spinner";
import ErrorState from "../layouts/ErrorState";

function TrendingCard() {
  const { trending, error, loading } = useSelector((state) => state.anime);

  if (loading) return <Spinner />;
  // if (error) return <ErrorState message={error.message} />;
  if (trending.length === 0)
    return (
      <div className="text-slate-400 px-6 py-10">No trending anime found.</div>
    );

  return (
    <section className="px-4 md:px-8 py-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-lg shadow-orange-900/30">
          <Flame className="w-5 h-5 text-white fill-white" />
        </div>
        <div>
          <h2 className="text-2xl font-extrabold text-white">
            Top Trending Anime
          </h2>
          <p className="text-sm text-slate-400">
            The most popular series globally right now
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {trending.map((anime) => (
          <div
            // anime details page link
            onClick={() => {
              window.location.href = `/anime/${anime.mal_id}/full`;
            }}
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
                <span>{anime.type}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrendingCard;
