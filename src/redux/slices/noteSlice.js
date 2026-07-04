import { createSlice } from "@reduxjs/toolkit";
import { addNoteAndReview } from "../thunks/noteThunk";

const initialState = {
    noteAndReview : [],
    loading : false,
    error : null
}

const noteSlice = createSlice({
    name : "notes",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(addNoteAndReview.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(addNoteAndReview.fulfilled, (state, action) => {
            const existing = state.noteAndReview.findIndex(i => i.mal_id === action.payload.mal_id)
            if(existing === -1) state.noteAndReview.push(action.payload)
            state.loading = false
        })
        .addCase(addNoteAndReview.rejected, (state, action) => {
            state.error = action.payload
            state.loading = false
        })
    }
})

export default noteSlice.reducer