import { createSlice } from "@reduxjs/toolkit";
import { addToFav } from "../thunks/favoriteThunk";

const initialState = {
  favorites: [],
  loading: false,
  error: null,
};
const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // add to fav
      .addCase(addToFav.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToFav.fulfilled, (state, action) => {
        state.loading = false;
        const existingIndex = state.favorites.findIndex(
          (item) => item.mal_id === action.payload.mal_id,
        );
        if (existingIndex === -1) {
          state.favorites.push(action.payload);
        }
      })
      .addCase(addToFav.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  }
})
export default favoriteSlice.reducer;