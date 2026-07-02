import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";

export const fetchTrendingAnime = createAsyncThunk(
  "anime/fetchTrendingAnime",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`top/anime`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);

export const fetchSeasonalAnime = createAsyncThunk(
  "anime/fetchSeasonalAnime",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("seasons/now");
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);

export const fetchAllAnimes = createAsyncThunk(
  "anime/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("top/anime");
      return response.data.data
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
)
