import { useEffect, useState } from "react";
import { BASE_URL, ACCESS_TOKEN } from "../app/config"
import axios from "axios"

const movieApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

export const useHomeMovie = () => {
	const [data, setData] = useState({
		nowPlaying: [],
		popular: [],
		topRated: [],
		upcoming: [],
	});
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	const params = 'language=vi';

	useEffect(()=>{
		const getMovieData = async () => {
			try {
				const [nowPlayingRes, popularRes, topRatedRes, upcomingRes] =
        await Promise.all([
          movieApi.get(`/movie/now_playing?${params}`),
          movieApi.get(`/movie/popular?${params}`),
          movieApi.get(`/movie/top_rated?${params}`),
          movieApi.get(`/movie/upcoming?${params}`),
        ]);

				setData({
					nowPlaying: nowPlayingRes.data.results,
					popular: popularRes.data.results,
					topRated: topRatedRes.data.results,
					upcoming: upcomingRes.data.results,
				});
			} catch(err) {
				setError(err)
			} finally {
				setLoading(false)
			}
		}

		getMovieData()
	}, [])

	return {data, error, loading}
}