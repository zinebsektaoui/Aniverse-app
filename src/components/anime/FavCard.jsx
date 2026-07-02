import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Heart, Star, Film, Trash2, Tv, X } from "lucide-react";
import { getFav } from "../../redux/thunks/favoriteThunk";
import ErrorState from "../layouts/ErrorState";
import Spinner from "../layouts/Spinner";

function FavCard() {
  const dispatch = useDispatch();
  const { favorites, loading, error } = useSelector((state) => state.favorite);

  useEffect(() => {
    dispatch(getFav());
  }, [dispatch]);

  if (error) return <ErrorState message={error} />;
  if (loading) return <Spinner />;

  return (
    <div className="px-4 md:px-6 mt-8">
      {favorites.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-24 h-24 rounded-full bg-[#0f1420] border border-white/10 flex items-center justify-center mb-6">
            <Heart className="w-12 h-12 text-slate-600" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Aucun favori</h3>
          <p className="text-slate-400 text-center max-w-md mb-8">
            Vous n'avez pas encore ajouté d'animes à vos favoris. Explorez notre
            catalogue et commencez à collectionner vos animes préférés !
          </p>
          <Link
            to="/anime"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold hover:from-orange-400 hover:to-pink-500 transition-all shadow-lg shadow-pink-900/20">
            Explorer les animes
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-6">
          {favorites.map((anime) => (
            <div
              key={anime.mal_id}
              className="group relative bg-[#0f1420] rounded-xl overflow-hidden border border-white/5 hover:border-orange-500/30 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/5"
            >
              <div className="relative aspect-[2/3] overflow-hidden">
                <img
                  src={
                    anime.images?.jpg?.large_image_url ||
                    anime.images?.jpg?.image_url
                  }
                  alt={anime.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-black/80 backdrop-blur-sm border border-white/10">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span className="text-sm font-bold text-amber-400">
                      {anime.score}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-sm border border-white/10">
                    <span className="text-xs font-semibold text-white uppercase tracking-wider">
                      {anime.type}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-sm border border-white/10">
                    <span className="text-xs font-semibold text-slate-300">
                      {anime.year || anime.aired?.prop?.from?.year}
                    </span>
                  </div>
              </div>

              <div className="p-4 space-y-2">
                <h3 className="text-sm font-semibold text-white line-clamp-2 group-hover:text-orange-400 transition-colors">
                  {anime.title}
                </h3>

                <div className="flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Tv className="w-3 h-3" />
                        {anime.episodes} ép
                      </span>
                      <span className="hidden sm:inline">
                        {anime.status
                          .replace("Currently ", "")
                          .replace("Airing", "En cours")}
                      </span>
                  </div>

                  {anime.duration && (
                    <span className="text-xs text-slate-600">
                      {anime.duration.replace(" min", "min")}
                    </span>
                  )}
                </div>

                {anime.genres && anime.genres.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {anime.genres.slice(0, 3).map((genre) => (
                      <span
                        key={genre.mal_id}
                        className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-medium text-slate-400 border border-white/5"
                      >
                        {genre.name}
                      </span>
                    ))}
                    {anime.genres.length > 3 && (
                      <span className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-medium text-slate-500">
                        +{anime.genres.length - 3}
                      </span>
                    )}
                  </div>
                )}
              </div>

              <button
                onClick={() => handleRemoveFavorite(anime.mal_id)}
                className="absolute top-3 right-3 z-10 p-2 rounded-lg bg-red-500 hover:bg-red-600 transition-all duration-200 shadow-lg"
                title="Retirer des favoris"
              >
                <Trash2 className="w-4 h-4 text-white" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavCard;
