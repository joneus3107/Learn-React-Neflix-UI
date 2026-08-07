import { useEffect, useState } from "react";
import { BASE_URL, API_KEY } from "../app/config"
import axios from "axios"

const movieApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const useHomeMovie = () => {
	const [data, setData] = useState({
		nowPlaying: [],
		topRated: [],
		upComing: []
	})

	const getMovies = () => {

	}

	return
}