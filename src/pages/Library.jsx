import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BookOpen } from "lucide-react";
import Footer from "../components/layouts/Footer";
import { getStatus } from "../redux/thunks/statusThunk";
import Spinner from "../components/layouts/Spinner";
import ErrorState from "../components/layouts/ErrorState";
import { LibraryCard } from "../components/library/LibraryCard";

const TABS = [
  { label: "All", value: "all" },
  { label: "Watching", value: "Watching" },
  { label: "Plan To Watch", value: "Plan to Watch" },
  { label: "Completed", value: "Completed" },
];

function Library() {
  const dispatch = useDispatch();
  const { status, loading, error } = useSelector((state) => state.status);
  const [selectedStatus, setSelectedStatus] = useState("all");  
  
  useEffect(() => {
    dispatch(getStatus(selectedStatus));
  }, [selectedStatus, dispatch]);
    
  if(loading) return <Spinner />
  if (error) return <ErrorState />
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="px-6 py-8 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-1">
          <BookOpen className="text-amber-400" size={26} />
          <h1 className="text-2xl font-bold">My Anime Library</h1>
        </div>
        <p className="text-slate-400 text-sm mb-6">
          Keep track of your current viewing status, log completed episodes,
          and structure your upcoming watchlist
        </p>

        {/* select option as btns */}
        <div className="flex items-center gap-2 mb-6">
          {TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setSelectedStatus(tab.value)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                selectedStatus === tab.value
                  ? "bg-amber-500 text-slate-950"
                  : "text-slate-300 border border-slate-700 hover:border-slate-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* aff des cartes */}
        <div className="flex flex-wrap gap-4">
          {status.length > 0 ? (
            status.map((item) => <LibraryCard key={item.id} item={item} />)
          ) : (
            <p className="text-slate-500 text-sm">
              No anime in this category yet.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Library;