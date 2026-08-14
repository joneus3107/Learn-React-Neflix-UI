import axios from "axios";

export const BASE_URL = import.meta.env.VITE_API_URL;
export const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
export const BASE_IMAGE = import.meta.env.VITE_IMAGE_URL

export const MOVIE_AXIOS = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});