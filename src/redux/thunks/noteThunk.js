import { createAsyncThunk } from "@reduxjs/toolkit";
import jsonServer from "../../services/jsonServer";

export const addNoteAndReview = createAsyncThunk(
    "/anime/noteReview",
    async(anime, {rejectWithValue}) => {
        try {
            const res = await jsonServer.post("/notesAndReviews", anime)
            return res.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const getNote =createAsyncThunk(
    "/anime/note",
    async(_, {rejectWithValue}) =>{
        try {
            const res = await jsonServer.get("/notesAndReviews")
            return res.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)