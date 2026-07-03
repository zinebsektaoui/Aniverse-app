import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CharactersCard from "../components/characters/CharactersCard";
import { displayAllCharacters } from "../redux/thunks/characterThunk";

function Characters() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayAllCharacters());
  }, []);
  return (
    <div className="min-h-screen bg-[#0b0e17]">
      <div className="px-6 py-8">
        <h1 className="text-white text-4xl font-bold">Characters Directory</h1>
        <p className="text-slate-400 text-sm mt-1">
          Search or explore popular characters across all series and franchises
        </p>
      </div>
      <CharactersCard />
    </div>
  );
}

export default Characters;
