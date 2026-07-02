import { configureStore } from "@reduxjs/toolkit";
import animeReducer from "../redux/slices/animeSlice"

export const store = configureStore({
  reducer: {
    anime: animeReducer,
  },
});