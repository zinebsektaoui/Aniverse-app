import { configureStore } from "@reduxjs/toolkit";
import animeReducer from "../redux/slices/animeSlice";
import favoriteReducer from "../redux/slices/favoriteSlice";
import charactrerSlice from "../redux/slices/charactersSlice";

export const store = configureStore({
  reducer: {
    anime: animeReducer,
    favorite: favoriteReducer,
    characters: charactrerSlice,
  },
});
