import { createSlice } from "@reduxjs/toolkit";
import { addStatus, getStatus } from "../thunks/statusThunk";

const initialState = {
  status: [],
  completedCount: 0,
  loading: false,
  error: null,
};

const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addStatus.fulfilled, (state, action) => {
        const existing = state.status.findIndex(
          (i) => i.mal_id === action.payload.mal_id
        );
        if (existing === -1) {
          state.status.push(action.payload);
        }
        state.loading = false;
      })
      .addCase(addStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.status = action.payload.res;
        state.completedCount = action.payload.completedCount;
      })
      .addCase(getStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default statusSlice.reducer;