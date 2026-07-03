import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { animeCharacters } from "../thunks/animeThunk";
import {
  characterDetails,
  displayAllCharacters,
} from "../thunks/characterThunk";

const initialState = {
  animeCharacters: [],
  characterDetail : null,
  loading: false,
  error: null,
};

const charactrerSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // aff des caracteres
      .addCase(displayAllCharacters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(displayAllCharacters.fulfilled, (state, action) => {
        state.animeCharacters = action.payload;
        state.loading = false;
      })
      .addCase(displayAllCharacters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // detail d'un caractère
      .addCase(characterDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(characterDetails.fulfilled, (state, action) => {
        state.characterDetail = action.payload;
        state.loading = false;
      })
      .addCase(characterDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export default charactrerSlice.reducer;
