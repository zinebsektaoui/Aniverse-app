import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import jsonServer from "../../services/jsonServer";

export const addToFav = createAsyncThunk(
    "/anime/fav",
    async(anime, {rejectWithValue}) => {
        try {
            const existing = await jsonServer.get(`favorites?mal_id=${anime.mal_id}`)
            if (existing.data.length > 0) {
                return rejectWithValue("Anime is already in favorites")
            }
            const res = await jsonServer.post("favorites", anime)
            return res.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)