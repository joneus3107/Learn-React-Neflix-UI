import { useEffect, useState } from "react";
import { MOVIE_AXIOS } from "../app/config"

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
		const controller = new AbortController();

		const getMovieData = async () => {
			try {
				const [nowPlayingRes, popularRes, topRatedRes, upcomingRes] =
        await Promise.all([
          MOVIE_AXIOS.get(`/movie/now_playing?${params}`, { signal: controller.signal }),
          MOVIE_AXIOS.get(`/movie/popular?${params}`, { signal: controller.signal }),
          MOVIE_AXIOS.get(`/movie/top_rated?${params}`, { signal: controller.signal }),
          MOVIE_AXIOS.get(`/movie/upcoming?${params}`, { signal: controller.signal }),
        ]);

				setData({
					nowPlaying: nowPlayingRes.data.results,
					popular: popularRes.data.results,
					topRated: topRatedRes.data.results,
					upcoming: upcomingRes.data.results,
				});
			} catch(err) {
				if (err.name !== "CanceledError") {
					setError(err)
				}
			} finally {
				if (!controller.signal.aborted) {
					setLoading(false)
				}
			}
		}

		getMovieData()

		return () => controller.abort();
	}, [])

	return {data, error, loading}
}
