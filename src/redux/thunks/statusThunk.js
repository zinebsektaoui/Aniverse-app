import { createAsyncThunk } from "@reduxjs/toolkit";
import jsonServer from "../../services/jsonServer";

export const addStatus = createAsyncThunk(
    "/anime/status",
    async(anime, {rejectWithValue}) => {
        try {
            const response = await jsonServer.post("/status", anime)
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)            
        }
    }
)

export const getStatus = createAsyncThunk(
    "/anime/getStatus",
    async (status, { rejectWithValue }) => {
        try {
            const response =
                status === "all"
                    ? await jsonServer.get("/status")
                    : await jsonServer.get(`/status?status=${status}`);
                    console.log("Réponse :", response.data);
            
            const completed = await jsonServer.get(`/status?status=Completed`)
            console.log("nobmre of completed : ", completed.data.length);
            return {
                res : response.data, 
                completedCount : completed.data.length
            };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);