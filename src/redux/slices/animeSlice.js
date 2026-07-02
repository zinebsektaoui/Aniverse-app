import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllAnimes, fetchSeasonalAnime, fetchTrendingAnime } from "../thunks/animeThunk";

const initialState = {
  trending: [],
  seasonal: [],
  animList: [],
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
        state.loading = false
        state.error = action.payload
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
      });
  },
});

export default animeSlice.reducer;
