import React, { useEffect } from "react";
import AnimeCard from "../components/anime/animeCard";
import { useDispatch } from "react-redux";
import { fetchAllAnimes } from "../redux/thunks/animeThunk";
import Footer from "../components/layouts/Footer";
import SearchBar from "../components/anime/SearchBar";

function Anime() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllAnimes());
  }, []);
  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      <div className="px-4 md:px-8 py-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          Explore Anime
        </h1>
        <p className="text-sm md:text-base text-slate-400">
          Browse the global database, apply custom filters, and find your
          favorite catalog entries
        </p>
      </div>
      {/* <SearchBar /> */}

      <AnimeCard />
      <Footer />
    </div>
  );
}

export default Anime;
