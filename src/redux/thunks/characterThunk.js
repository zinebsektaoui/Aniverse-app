import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../services/api";

export const displayAllCharacters = createAsyncThunk(
  "/characters",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/top/characters");

      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const characterDetails = createAsyncThunk(
  "/charachters/detail",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`/characters/${id}`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
