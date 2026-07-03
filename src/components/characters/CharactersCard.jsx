import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../layouts/Spinner";
import ErrorState from "../layouts/ErrorState";
import { useNavigate } from "react-router-dom";

export default function CharactersCard() {

  const navigate = useNavigate();
  const { animeCharacters, error, loading } = useSelector(
    (state) => state.characters,
  );

  if (animeCharacters?.length === 0)
    return (
      <div className="text-slate-400 px-6 py-10">No characters found.</div>
    );
  if (loading) return <Spinner />;
  if (error) return <ErrorState message={error.message} />;
  const handleClick = (character) => () => {
    navigate(`/characters/${character.mal_id}`);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-6 py-6">
      {animeCharacters.map((character) => (
        <div
          onClick={handleClick(character)}
          key={character.mal_id}
          className="group relative bg-[#0f1420] rounded-2xl overflow-hidden border border-white/5 hover:border-orange-500/30 transition-all cursor-pointer"
        >
          <div className="relative aspect-[2/3] overflow-hidden">
            <img
              src={character.images?.jpg?.image_url}
              alt={character.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-3">
            <p className="text-white text-sm font-medium truncate">
              {character.name}
            </p>
            <p className="text-slate-500 text-xs mt-0.5 truncate">
              {character.name_kanji}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
