import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../services/api";

export const fetchTrendingAnime = createAsyncThunk(
  "anime/fetchTrendingAnime",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`top/anime`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
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
      return rejectWithValue(error.message);
    }
  },
);

export const fetchAllAnimes = createAsyncThunk(
  "anime/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("top/anime");
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchAnimeDetails = createAsyncThunk(
  "anime/detail",
  async (id, { rejectWithValue }) => {
    try {
      const res = await api.get(`anime/${id}/full`);
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const animeCharacters = createAsyncThunk(
  "anime/characters",
  async(animeCharacters, {rejectWithValue}) => {
    try {
      const response = await api.get(`anime/${id}/characters`)
      return response.data.data
    } catch (error) {
      return rejectWithValue(err.message)      
    }
  }
)
