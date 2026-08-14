import { MOVIE_AXIOS } from "../app/config"
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useDebounce } from "./useDebounce";

export const useSearchMovie = () => {
	const [data, setData] = useState([])
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [trending, setTrending] = useState([]);
	const [trendingLoad, setTrendingLoad] = useState(false);
	const [trendingErr, setTredingErr] = useState(null);
	const { searchParam } = useContext(ThemeContext);
	const debounceQuery = useDebounce(searchParam)

	useEffect(() => {
		const searchQuery = debounceQuery.trim()
		const controller = new AbortController()

		const searchMovie = async () => {
			setLoading(true)
			setError(null)

			try {
				let res
				if(searchQuery) {
					res = await MOVIE_AXIOS.get('/search/movie',{
						params: {query: searchQuery, language: 'vi'},
						signal: controller.signal
					})
				} else {
					res = await MOVIE_AXIOS.get('/movie/now_playing',{
						params: {language: 'vi'},
						signal: controller.signal
					})
				}
				setData(res.data.results)
			} catch (err) {
				if(err.name !== "CanceledError") {
					setError(err)
				}
			} finally {
				if (!controller.signal.aborted) {
					setLoading(false);
				}
			}
		}

		searchMovie()

		return () => controller.abort()
	}, [debounceQuery])

	useEffect(()=>{
		const controller = new AbortController()
		const trendingMovie = async () => {
			setTrendingLoad(true)

			try {
				const res = await MOVIE_AXIOS.get('/trending/movie/day',{
					params: {
						language: 'vi',
					},
					signal: controller.signal,
				})

				setTrending(res.data.results)
			} catch(err) {
				if(err.name !== "CanceledError") {
					setTredingErr(err)
				}
			} finally {
				setTrendingLoad(false)
			}
		}

		trendingMovie()
	}, [])

	return {data, error, loading, trending, trendingLoad, trendingErr}
}