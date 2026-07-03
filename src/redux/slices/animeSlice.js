import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  animeCharacters,
  fetchAllAnimes,
  fetchAnimeDetails,
  fetchSeasonalAnime,
  fetchTrendingAnime,
} from "../thunks/animeThunk";
import { act } from "react";

const initialState = {
  trending: [],
  seasonal: [],
  animList: [],
  selectedAnime: null,
  loading: false,
  error: null,
};

const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchTrendingAnime
      .addCase(fetchTrendingAnime.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrendingAnime.fulfilled, (state, action) => {
        state.loading = false;
        state.trending = action.payload;
      })
      .addCase(fetchTrendingAnime.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // fetchSeasonalAnime
      .addCase(fetchSeasonalAnime.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSeasonalAnime.fulfilled, (state, action) => {
        state.loading = false;
        state.seasonal = action.payload;
      })
      .addCase(fetchSeasonalAnime.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // fetchAllAnimes
      .addCase(fetchAllAnimes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllAnimes.fulfilled, (state, action) => {
        state.loading = false;
        state.animList = action.payload;
      })
      .addCase(fetchAllAnimes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // anime details
      .addCase(fetchAnimeDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnimeDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedAnime = action.payload;
      })
      .addCase(fetchAnimeDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // anime characters
      .addCase(animeCharacters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(animeCharacters.fulfilled, (state, action) => {
        state.loading = false;
        state.animeCharacters = action.payload;
      })
      .addCase(animeCharacters.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
    },
});

export default animeSlice.reducer;
