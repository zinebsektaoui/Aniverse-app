import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  Star,
  Heart,
  Users,
  Bookmark,
  PenLine,
  ChevronRight,
} from "lucide-react";
import { fetchAnimeDetails } from "../../redux/thunks/animeThunk";
import Spinner from "../layouts/Spinner";
import ErrorState from "../layouts/ErrorState";
import Footer from "../layouts/Footer";
import { addToFav } from "../../redux/thunks/favoriteThunk";
import Characters from "../../pages/Characters";
import { addNoteAndReview } from "../../redux/thunks/noteThunk";
import { addStatus } from "../../redux/thunks/statusThunk";

export default function AnimeDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { selectedAnime, loading, error } = useSelector((state) => state.anime);

  const [watchStatus, setWatchStatus] = useState("Not in Library");
  const handleSaveStatus = async() => {
    try {
      const data = {
        ...selectedAnime,
        status : watchStatus
      }
      await dispatch(addStatus(data))
    } catch (error) {
      console.error(error)
    }
  }
  

  const { favorites } = useSelector((state) => state.favorite);

  const isFavorite = favorites.some(
    (item) => item.mal_id === selectedAnime?.mal_id,
  );
  const handleFavorite = async (e) => {
    e.stopPropagation();
    try {
      if (!isFavorite) {
        await dispatch(addToFav(selectedAnime)).unwrap();
      }
    } catch (error) {
      console.error(error)
    }
  };

  // logique of note and reviews :
  const [note, setNote] = useState(0)
  const [review, setReview] = useState("")
  const handleNoteAndReview = async(e) => {
    try {
      const data = {
        id : selectedAnime.mal_id,
        title : selectedAnime.title,
        note,
        review
      }
      await dispatch(addNoteAndReview(data))
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    dispatch(fetchAnimeDetails(id));
  }, [id]);

  if (loading) return <Spinner />;
  if (error) return <ErrorState message={error} />;
  if (!selectedAnime) return null;

  const anime = selectedAnime;

  return (
    <div className="min-h-screen bg-[#0a0e1a] px-4 md:px-8 py-6">
      <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
        <Link to="/" className="hover:text-slate-300 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/anime" className="hover:text-slate-300 transition-colors">
          Anime
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-600 truncate">{anime.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
        <div className="space-y-5">
          <div className="relative rounded-2xl overflow-hidden border border-white/5">
            <img
              src={
                anime.images?.jpg?.large_image_url ||
                anime.images?.jpg?.image_url
              }
              alt={anime.title}
              className="w-full aspect-[2/3] object-cover"
            />
            {anime.score && (
              <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-sm">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="text-sm font-bold text-amber-400">
                  {anime.score}
                </span>
              </div>
            )}
            <button
              type="button"
              onClick={handleFavorite}
              className="absolute top-3 right-3 w-9 h-9 rounded-lg bg-black/70 backdrop-blur-sm flex items-center justify-center hover:bg-black/90 transition-colors"
            >
              <Heart
                className={`w-4 h-4 transition-all duration-300 ${
                  isFavorite
                    ? "text-red-500 fill-red-500"
                    : "text-white hover:text-red-400"
                }`}
              />
            </button>
          </div>

          <div className="rounded-2xl bg-[#0f1420] border border-white/5 p-5">
            <div className="flex items-center gap-2 mb-4">
              <Bookmark className="w-4 h-4 text-orange-400" />
              <h3 className="text-sm font-bold text-white">
                Library Watchlist
              </h3>
            </div>

            <label className="text-xs text-slate-500 uppercase tracking-wide">
              Watch Status
            </label>
            <select
              value={watchStatus}
              onChange={(e) => setWatchStatus(e.target.value)}
              className="w-full mt-2 mb-4 px-3 py-2.5 rounded-lg bg-[#0a0e1a] border border-white/10 text-sm text-white focus:outline-none focus:border-orange-500/50 transition-colors"
            >
              <option>Not in Library</option>
              <option>Watching</option>
              <option>Plan to Watch</option>
              <option>Completed</option>
            </select>

            <button
            onClick={handleSaveStatus} className="w-full py-2.5 rounded-lg font-semibold text-sm text-white bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-400 hover:to-pink-500 transition-all shadow-lg shadow-pink-900/20">
              Save Status
            </button>
          </div>

          <div className="rounded-2xl bg-[#0f1420] border border-white/5 p-5">
            <div className="flex items-center gap-2 mb-4">
              <PenLine className="w-4 h-4 text-orange-400" />
              <h3 className="text-sm font-bold text-white">
                Notes & Ratings
              </h3>
            </div>

            <label className="text-xs text-slate-500 uppercase tracking-wide">
              Notes (1 to 10)
            </label>
            <div className="grid grid-cols-5 gap-2 mt-2 mb-4">
              {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => setNote(n)}
                  className={`py-2 rounded-lg text-sm font-semibold border transition-all ${
                    note === n
                      ? "bg-gradient-to-r from-orange-500 to-pink-600 border-transparent text-white"
                      : "bg-[#0a0e1a] border-white/10 text-slate-400 hover:border-orange-500/30 hover:text-white"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>

            <label className="text-xs text-slate-500 uppercase tracking-wide">
              Personal Review
            </label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Record your personal plot reviews, or character comments..."
              rows={4}
              className="w-full mt-2 mb-4 px-3 py-2.5 rounded-lg bg-[#0a0e1a] border border-white/10 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-orange-500/50 transition-colors resize-none"
            />

            <button
            onClick={handleNoteAndReview}
            className="w-full py-2.5 rounded-lg font-semibold text-sm text-white bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-400 hover:to-pink-500 transition-all shadow-lg shadow-pink-900/20">
              Save Review & Notes
            </button>
          </div>
        </div>

        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            {anime.title}
          </h1>

          <div className="flex flex-wrap items-center gap-2 mb-5">
            {anime.type && (
              <span className="px-3 py-1 rounded-lg bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-400">
                {anime.type}
              </span>
            )}
            {anime.episodes && (
              <span className="px-3 py-1 rounded-lg bg-[#0f1420] border border-white/10 text-xs font-semibold text-slate-300">
                {anime.episodes} Episodes
              </span>
            )}
            {(anime.year || anime.aired?.prop?.from?.year) && (
              <span className="px-3 py-1 rounded-lg bg-[#0f1420] border border-white/10 text-xs font-semibold text-slate-300">
                {anime.year || anime.aired?.prop?.from?.year}
              </span>
            )}
          </div>

          {anime.genres?.length > 0 && (
            <div className="mb-6">
              <p className="text-xs text-slate-500 uppercase tracking-wide mb-2">
                Genres
              </p>
              <div className="flex flex-wrap gap-2">
                {anime.genres.map((genre) => (
                  <span
                    key={genre.mal_id}
                    className="px-3 py-1 rounded-lg bg-pink-500/10 border border-pink-500/20 text-xs font-semibold text-pink-400"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="rounded-2xl bg-[#0f1420] border border-white/5 p-6">
            <div className="flex items-center gap-2 mb-3">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <h2 className="text-base font-bold text-white">Synopsis</h2>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed whitespace-pre-line">
              {anime.synopsis}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
