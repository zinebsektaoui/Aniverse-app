import { configureStore } from "@reduxjs/toolkit";
import animeReducer from "../redux/slices/animeSlice"
import favoriteReducer from "../redux/slices/favoriteSlice"

export const store = configureStore({
  reducer: {
    anime: animeReducer,
    favorite: favoriteReducer
  },
});