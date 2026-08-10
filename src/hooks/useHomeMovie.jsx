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
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(()=>{
		const getMovieData = async () => {
			try {
				const response = await movieApi.get('/movie/now_playing')
				setData(response.data.results);
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