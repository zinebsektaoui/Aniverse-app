import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Sparkles, BookOpen, Info } from "lucide-react";
import { characterDetails } from "../redux/thunks/characterThunk";
import Footer from "../components/layouts/Footer";
import Spinner from "../components/layouts/Spinner";
import ErrorState from "../components/layouts/ErrorState";

function CharactersDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(characterDetails(id));
  }, [id]);

  const { characterDetail, loading, error } = useSelector(
    (state) => state.characters,
  )

  if (!characterDetail) {
    return (
      <div className="min-h-screen bg-[#0b0e17] px-6 py-8 text-white">
        Character not found !
      </div>
    );
  }
  if(loading) return <Spinner />
  if (error) return <ErrorState />

  return (
    <div className="min-h-screen bg-[#0b0e17] px-6 py-8 text-white">
      <Link
        to="/characters"
        className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"
      >
        <ArrowLeft size={16} />
        Back to Characters Directory
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 mt-8">
        <div>
          <div className="rounded-2xl overflow-hidden aspect-[3/4]">
            <img
              src={characterDetail.images?.jpg?.image_url}
              alt={characterDetail.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-4 bg-[#11151f] border border-white/5 rounded-2xl p-5">
            <div className="flex items-center gap-2 text-white font-semibold text-sm">
              <Info size={16} className="text-yellow-500" />
              Identity Profile
            </div>
            <p className="text-slate-500 text-xs uppercase mt-4">
              English Name
            </p>
            <p className="text-white font-medium mt-1">
              {characterDetail.name}
            </p>
          </div>
        </div>

        {/* Right column */}
        <div>
          <span className="inline-flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-medium px-3 py-1 rounded-full">
            <Sparkles size={12} />
            Character Profile
          </span>

          <h1 className="text-4xl font-bold mt-4">{characterDetail.name}</h1>

          <div className="mt-6 bg-[#11151f] border border-white/5 rounded-2xl p-6">
            <div className="flex items-center gap-2 text-white font-semibold">
              <BookOpen size={18} className="text-yellow-500" />
              Biography & Background
            </div>
            <div className="mt-4 space-y-4 text-slate-300 text-sm leading-relaxed">
              <p>{characterDetail.about}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CharactersDetails;
